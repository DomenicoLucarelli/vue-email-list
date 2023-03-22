const { createApp } = Vue

  createApp({
    data() {
      return {
        emailsArray: [],
      }
    },

    created() {
        for(let i=0; i<10; i++){
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=> {
                
                this.emailsArray.push(res.data.response);

            })
        }

        console.log(this.emailsArray)
    },
       
        
    
       


    

  }).mount('#app')