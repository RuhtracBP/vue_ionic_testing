import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: "m1", 
                    image: "https://images.unsplash.com/photo-1535469906009-4560be04faf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
                    title: "A trip to the moutains", 
                    description: "It was a really nice trip" 
                },
                {
                    id: "m2", 
                    image: "https://images.unsplash.com/photo-1531722569936-825d3dd91b15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    title: "Surfing in the se side", 
                    description: "Feeling cool the breeze" 
                },
                {
                    id: "m3", 
                    image: "https://images.unsplash.com/photo-1596464716059-f81da526557b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    title: "Good eating", 
                    description: "Really tasty"
                }
            ]
        };
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find( memory => memory.id === memoryId );
            };
        }
    }
});

export default store;