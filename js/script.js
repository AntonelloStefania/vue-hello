const {createApp} = Vue;

createApp({
    data() {
        return {
            title:"<h1>Crea la tua cartolina digitale</h1>",
            d_flex_center: "d-flex-content-items-center",
            img:'',
            dear:'',
            main_text: '',
            date : '',
            from:'',
            border:'brdr-bottom',
            font:'f-family',
            email:'',
        }
    },
    methods: {
      realDate(){
        const realDate= new Date();
        this.date = realDate.toUTCString().slice(5, 16);
      },

       generateImg(){
        let number=Math.floor( Math.random()*100)
        
            let random_img = `<img src="https://picsum.photos/id/${number}/390/300" alt="image">`;
            console.log(number)
            
            this.img= random_img
       },
       submitButton(){
        let alert= document.getElementById("alert");
        let alert_msg= document.getElementById("alert-msg");
        let valid_symbol= '@'
          
        if(this.email.trim() === ""){
               alert.classList.add("appear");
               alert_msg.innerText='inserire una mail valida'
        } else if(this.email.match(valid_symbol)){
                alert.classList.add("appear");
                this.dear='';
                this.main_text='';
                this.from=''
        }
       },
       closeAlert(){
        let alert= document.getElementById("alert");
        let close = document.getElementById("close-alert");
        alert.classList.remove("appear");
        this.email='';
       
       }
    },
    mounted() {
        this.realDate();
        this.generateImg();
      },
}).mount("#app")