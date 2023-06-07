const {createApp} = Vue;

createApp({
    data() {
        return {
            title:"<h1>Crea la tua cartolina digitale</h1>",
            d_flex_center: "d-flex-content-items-center",
            img:'<img src="https://picsum.photos/390/300" alt="image">',
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
      }
    },
    mounted() {
        this.realDate(); 
      },
}).mount("#app")