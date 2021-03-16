import React, {useState, useEffect} from 'react';
import firebase from './firebase';
import './BurgerApp.css';


function Burger() {
    const [burger, setburger] = useState("");
    const [burgerList, setburgerList] = useState([]);
     const [idOfUpdate, setIdOfUpdate] = useState(null);
    const [truth, setTruth] = useState();
  
     useEffect(() => {
      populate();
    }, []);
  
    useEffect(() => {
      let id = idOfUpdate;
      if (id !== null) {
        markCompleteGlobal();
      }
    }, [truth]);
  
    const markCompleteGlobal = () => {
        let id = idOfUpdate;
      const itemtoupdate = firebase
        .firestore()
        .collection("burger")
        .doc(id);
  
      itemtoupdate.update({
        isCompleted: truth,
      });
  
      setIdOfUpdate(null);
      setTruth(null);
    };
  
    const handleChange = (e) => {
      setburger(e.target.value);
    };
  
    const AddBurger = () => {
      if (burger !== "") {
          const datas = {
        id: firebase
          .firestore()
          .collection("burger")
          .doc().id,
      };
  
       const burgerDetails = {
          id: datas.id,
          value: burger,
          isCompleted: false,
        };
  
      const db = firebase.firestore();
      db.collection("burger")
        .doc(datas.id)
        .set({ value: burger, isCompleted: false, id: datas.id }).then(() => {
           setburgerList([...burgerList, burgerDetails]);
           console.log("this is a new one");
          populate();
        });
      }
    };
  
      const populate = (data) => {
  
     setburgerList([])
      return firebase
        .firestore()
        .collection("burger")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            let newData = doc.data();
  
            if (burgerList.indexOf(newData.id) === -1) {
              setburgerList((arr) => {
                return [...arr, newData];
              });
            } else {
              console.log("this is a duplicate");
            }
            console.log("here are all of the todos", burgerList);
          });
        })
        .catch((e) => console.log(e));
    };
  
    const deleteBurger = (e, id) => {
      e.preventDefault();
      const db = firebase.firestore();
      db.collection("burger")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!", id);
        })
        .catch((error) => {
          console.error(id, "Error removing document: ", error);
        })
        .then((res) => setburgerList([...burgerList.filter((todo) => todo.id !== id)]));
      console.log(id, "here is an id", id);
    };
  
  
    const burgerCompleted = (e, id) => {
      e.preventDefault();
      setIdOfUpdate(id);
   setburgerList(
        burgerList.map((todo) => {
          if (todo.id === id) {
            todo.isCompleted = !todo.isCompleted;
  
            setTimeout(function() {
              setTruth(todo.isCompleted);
            }, 1000);
          }
          return todo;
        })
      )
      console.log("Second", idOfUpdate, truth);
  
    };
  
    return (
      
        <div className="burger">
        <h1>Tasty Burger</h1>
        <hr/>
        <h2 className ="burgerMade">Burgers Made</h2>                                       
            <input type="text" id="makeBurger" onChange ={(e) =>{handleChange(e)}} placeholder="Make a Burger"></input>
            <br/>
            <button type="button" className="add-btn" onClick = {AddBurger}>Add New Burger</button>
            <hr/>
            <h2 className="burgerEat">Eat a Burger</h2>
            <hr/>

        {burgerList !== [] ? (
            <ul>
                 {burgerList.map((item)=>(
                 <li className="listItem">{item.value}
                  <button type="button" className="remove-btn" onClick={(e)=> deleteBurger(e, item.id)}>
                      Eat the Burger
                  </button>
                  </li>))}
        </ul>
        ): null}
       
    </div>
   
    );
  }
 
export default Burger;