import angular from 'angular';
    
class articleService {
    
        constructor($http){
            this.$http=$http;
        }
         getArticles(url, params) {  
         return this.$http.get(url, params); 
         }
        }   

        
articleService.$inject = ['$http'];

export default angular.module('articleService', [])
  .service('articleService', articleService)
  .name;
