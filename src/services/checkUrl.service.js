import angular from 'angular';
    
class checkURLService {
        constructor($http){
            this.$http=$http;            
        }
    
        checkURL(url) {  
         return this.$http.head(url); 
         }
        }   
        
checkURLService.$inject = ['$http'];

export default angular.module('checkURLService', [])
  .service('checkURLService', checkURLService)
  .name;

