import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCard: [
      {
        blogTitle: "Blog Card #1",
        blogCoverPhoto: "baby",
        blogDate: "June 10, 2021",
      },
      {
        blogTitle: "Blog Card #2",
        blogCoverPhoto: "girl",
        blogDate: "June 10, 2021",
      },
      {
        blogTitle: "Blog Card #3",
        blogCoverPhoto: "skull",
        blogDate: "June 10, 2021",
      },
      {
        blogTitle: "Blog Card #4",
        blogCoverPhoto: "sparrow",
        blogDate: "June 10, 2021",
      },
    ],
    editPost: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost);
    }
  },
  actions: {
  },
  modules: {
  }
})
