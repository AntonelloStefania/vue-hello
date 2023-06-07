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
            font:'f-family'
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
       }
    },
    mounted() {
        this.realDate();
        this.generateImg();
      },
}).mount("#app")