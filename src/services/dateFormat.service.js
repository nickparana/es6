import angular from 'angular';
    
class dateFormatService {    
    
        constructor($filter){            
            this.$filter=$filter;
        }
    
         formatDate(original_date,format) {  
         return this.$filter('date')(original_date,format);
         }
        } 



dateFormatService.$inject = ['$filter'];

export default angular.module('dateFormatService', [])
  .service('dateFormatService', dateFormatService)
  .name;