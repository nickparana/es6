import angular from 'angular';
    
    class articleFactory {
        
    constructor(){            
            this.array=[];
        }    

       
    getArray() { return this.array;  }
    saveArray(a) { this.array = a;  }
}
       
export default angular.module('articleFactory', [])
  .service('articleFactory', articleFactory)
  .name;
