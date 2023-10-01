import axiosClient from '../axiosClient';
export function SearchMeals({commit}, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data})=>{

        commit('setSearchedMeals',data.meals)
    })
}