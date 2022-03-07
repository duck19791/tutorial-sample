<script>
import { getRandomUser } from "../api";
import Card from "./Card.vue"
export default {
    data() {
        return {
            users : []

        };
    },
    async mounted(){
        const res = await getRandomUser(15)
        this.users = res.data
        // console.log(users.data)
    },
    components: { Card }
}
</script>
<template>
    <div class="card-list">
        <Card v-for="user of users" 
            :imgUrl="user.avatar"
            :name="user.username"
            :birth="user.date_of_birth"
            :key="user.id">
        </Card>
    </div>
</template>
<style >
 .card-list {
        display:flex;
        flex-wrap: wrap; 
        justify-content: center;
        gap: 50px;
        /* flex-direction:row; */
    }
 .card__img{
    border-radius: 0%;
}

      @media only screen and (max-width: 600px) {
       .card-list .card{
           width: 80%;
       }
      }
</style>