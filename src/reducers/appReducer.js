const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        users: action.payload.users,
        posts: action.payload.posts,
        projects: action.payload.projects,
        loading: false,
      }
    case 'TOGGLE_DARK':
      return { ...state, darkMode: !state.darkMode }
    case 'LIKE_POST':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload ? { ...post, likes: post.likes + 1 } : post
        ),
      }
    default:
      return state
  }
}

export default appReducer
