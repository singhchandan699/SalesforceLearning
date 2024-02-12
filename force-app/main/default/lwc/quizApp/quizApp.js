import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}
    correctAnswers = 0;
    isSubmit=false
    myQuestion=[
        {
            id:"Question1",
            question:"Which is the Indian Currency?",
            answer:{
                a:"Rupees",
                b:"Doller",
                c:"Pound"
            },
            correctAnswer:"a"
        },
        {
            id:"Question2",
            question:"Which is the national bird of India?",
            answer:{
                a:"Parrot",
                b:"Sparrow",
                c:"Peacock"
            },
            correctAnswer:"c"
        },    
        {
            id:"Question3",
            question:"Which is the natinal animal of India?",
            answer:{
                a:"Lion",
                b:"Tiger",
                c:"Fox"
            },
            correctAnswer:"b"
        },
        {
            id:"Question4",
            question:"Who is the first Prime Minister of India?",
            answer:{
                a:"Aditya Nath Yogi",
                b:"Narendra Modi",
                c:"Pandit Jawaharlal Nehru "
            },
            correctAnswer:"c"
        },
    ]

    changehandler(event){
        console.log("Name", event.target.name)
        console.log("Value", event.target.value)

        const{name, value}=event.target
        this.selected={...this.selected, [name]:value}
    }

    get tillAllNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestion.length)
    }

    get scored(){
        return `slds-text-heading_large ${this.myQuestion.length === this.correctAnswers? 'slds-text-color_success':'slds-text-color_error'}`
    }

    submitHandler(event){
        event.preventDefault()
        let correct= this.myQuestion.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        console.log("Correct Answer", this.correctAnswers)
        this.isSubmit=true
    }

    resetHandler(){
        this.selected={}
        this.correctAnswers=0  
        this.isSubmit=false
    }
}