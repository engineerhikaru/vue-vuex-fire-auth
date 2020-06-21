<template>
  <div>
    <input type="email" placeholder="メールアドレス" v-model="email">
    <input type="password" placeholder="パスワード" v-model="password">
    <button type="submit" v-on:click="signIn">ログイン</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import "firebase/auth";
export default {
  name: 'signin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user(){
      return this.$store.getters['user'];
    },
  },
  watch: {
    user: function(changedUser) {
      if (changedUser) {
        this.$router.replace('/');
      }
    },
  },
  methods: {
    // ログイン処理
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
        console.log(user);
      }).catch(error => {
        alert(error.message)
      })
    },
  }
}
</script>