<script setup>
import { useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'
//msg

const { result, loading, error, refetch } = useQuery(gql`
#   query getPage{
#    getPage(id:1){ 
#     id
#     description
#     title
#     image_url
    
#   }
# }
query getContact {
  contacts {
    user_id
    contacts_name
    contact_no
  }
}
`)

// const countries = useResult(result)
const getContact = useResult(result)
const tit = getContact.contacts_name
const desc = getContact.contacts_no
const img = getContact.user_id

</script>

<template>
  <div class="flex justify-center content-center">
    <div v-if="loading">Loading...</div>

    <div v-else-if="error">Error: {{ error.message }}</div>
    {{ getContact }}
    <h1>{{ tit }}</h1>
    <br>
    <h2>{{ desc }}</h2>


  </div>


</template>


<style>
img {
  border-radius: 50%;
  width: 500px;
  height: auto;
}


div {
  display: inline;
}
</style>
//https://v4.apollo.vuejs.org/guide-composable/query.html#refetching