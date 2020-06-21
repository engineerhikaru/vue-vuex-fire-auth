<template>
  <div>
    <p>{{ user.email }}</p>
    <router-link to="/signin" v-on:click.native="signOut">ログアウト</router-link>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  computed: {
    user(){
      return this.$store.getters['user'];
    },
  },
  methods: {
    // ログアウト処理
    signOut() {
      firebase.auth().signOut();
      this.$router.push('/signin');
    }
  }
}
</script>