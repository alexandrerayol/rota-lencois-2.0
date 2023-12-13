import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, collection, getDocs, doc, updateDoc} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyA1_8YH4J4o9o9W_KjuzBqHvFon5Z_Sl14",
    authDomain: "rota-lencois.firebaseapp.com",
    projectId: "rota-lencois",
    storageBucket: "rota-lencois.appspot.com",
    messagingSenderId: "298706497203",
    appId: "1:298706497203:web:855dbac0e326248922cac6"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const numbersCollection = collection(db, "numbers")

let number = 0;
let newData;

const whatsappLink = document.querySelector("#number-link");
const numberList = [
    {
        id: 0,
        number: '9830421800'
    },
    {
        id: 1,
        number: '9830422029'
    },
    {
        id: 2,
        number: '9884018572'
    },
    {
        id: 3,
        number: '9884024390'
    },
    {
        id: 4,
        number: '9891508966'
    }
    ]

const tituloDaPagina = document.title;
const urlAtual = window.location.href;
const mensagem = `Olá! Gostaria de informações sobre ${tituloDaPagina}\n${urlAtual}\nPoderia me ajudar?`
async function getId(){
    //tratamento de erro na requisição 
    try{
        const data = await getDocs(numbersCollection);
        data.forEach((doc) => {
            number = doc.data().id
          });
    }catch{
        console.log('erro durante a requisição ao banco de dados.')
        const numeroAleatorio = Math.floor(Math.random() * 5); // 0 a 4
        number = numeroAleatorio;
    }

    whatsappLink.href = `https://wa.me/${numberList[number].number}?text=${encodeURIComponent(mensagem)}`
    
    //Tratamento de erro durante a gravação no banco de dados
    try{
        const docRef = doc(db, "numbers", "ynS2UhlxqYyE8Fvdv3Hu");
        if(number >= 4){
            newData = {id: 0}
        }else{
            number++
            newData = {id: number}
        }
        await updateDoc(docRef, newData);
    }catch(error){
        console.log('erro ao atualizar valor no banco de dados.')
    }
}

const whatsappIcon = document.querySelector('#whatsapp-icon');
whatsappIcon.addEventListener('click', getId);