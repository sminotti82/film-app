let lista =[]
const app = new Vue({
    el:'#root',
      data:{
              listaFilm:[],
              film:'',
              urlFilm:'https://api.themoviedb.org/3/search/movie?api_key=f7a6afff378df2e871aa6b039aab48be&query=',
              api:'f7a6afff378df2e871aa6b039aab48be',
               traduttore:'https://www.translated.net/hts/?f=quote&s=en-US&t=it-IT&w=400&cid=htsdemo&p=htsdemo5&of=json',
      },
       
     
       methods:{
       films:function(ricerca){
             
            const url = this.urlFilm+ricerca
            axios .get(url).then((el)=>{ 
                   this.listaFilm = el.data.results   
                   console.log(this.listaFilm);     
                      this.film=''
                })
       },

       locandina:function(img){
                 if(!img){
                    return 'https://christopherscottdesigner.files.wordpress.com/2014/05/this-poster-is-not-available-christopher-scott1.jpg'
                 } else {
                    return  `https://image.tmdb.org/t/p/w342/${img}`
                 }
       },



       },
  

      
      
     
})




