<script>

export default {
    props: {
        imgUrl : String,
        name : String,
        birth : String
    },
    data(){
        return{
            color: ""
        }
    },
    computed:{
        compareBirth(){
            console.log("invoked in computed")
            if(Date.parse(this.birth)< Date.parse('1970-01-01')){
                this.color="green"
                return 'Older'
            }else{
                this.color = "red"
                return 'Younger'
            }
        }
    },
    // methods:{
    //     compareBirth(){
    //                 console.log("invoked in computed")

    //         if(Date.parse(this.birth)< Date.parse('1970-01-01')){
    //             return 'older'
    //         }else{
    //             return 'younger'
    //         }
    //     }
    // }

}
</script>
<template>
    <div class="card">
        <img :src="imgUrl" alt="profile image" class="card__img">
        <h2 class="card__name">{{name}}</h2>
        <h2 class="card__name">{{birth}}</h2>
        <h2 class="card__birth">{{compareBirth}}</h2>
        <!-- <h2 class="card_birth">{{(Date.parse(birth) < Date.parse('1070-01-01'))? 'older': 'younger' }}</h2> -->
    </div>
</template>
<style scoped>
.card{
    display:flex;
    flex-direction: column;
    justify-content : center; /*direction의 정렬*/
    align-items: center; /*direction cross의 정렬 */ 
    width:300px;
    height:350px;
    background-color:cadetblue;
    box-shadow : 5px 5px 5px gray; /*x, y, blur, color */
}
.card__img{
    width:150px;
    height:200px;
    object-fit:cover;
    border-radius: 30%;
    border: solid 2px;
    padding:15px;
    background-color:white;
}
.card__name{
    font-weight: 1000;
}
.card__birth {
    font-weight: 100;
    color: v-bind(color);
}
</style>