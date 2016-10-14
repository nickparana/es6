export default class HomeController {
    
  constructor(articleService, articleFactory, checkUrl, dateFormat) {      
      
    this.articleService=articleService;
    this.articleFactory=articleFactory;
    this.checkUrl=checkUrl;
    this.dateFormat=dateFormat;      
    
    this.current_date = new Date();
    this.q="";
        
    this.articles = [];
    this.error=false;
    this.encontrados=false;        
      
    }
    

  listarArticulos() {  
        
    this.begin_date_with_format = this.dateFormatService.formatDate(angular.isUndefined(this.begin_date) ? this.current_date : this.begin_date,'yyyyMMdd');
    this.end_date_with_format = this.dateFormatService.formatDate(angular.isUndefined(this.end_date) ? this.current_date : this.end_date,'yyyyMMdd');
    
    let promise = this.articleService.getArticles('https://api.nytimes.com/svc/search/v2/articlesearch.json',
                                                 {params : {
                                                     api_key : 'b4f61d4efdb34413b329397d4ff47e56',
                                                     q : this.q,
                                                     begin_date : this.begin_date_with_format,
                                                     end_date : this.end_date_with_format,     
                                                     fl : 'web_url,snippet,pub_date,lead_paragraph,headline'
                                                 }});
         
    promise.then(function(result) {             
            this.articles = result.data.response.docs;
            this.articleFactory.saveArray(this.articles); 
            this.checkArticleURL();
            if (this.articles.length)
                this.encontrados=true;
            else
                this.encontrados=false;             
            },
            function(result) {          
            this.error=true;
            }); 
     }
    
     checkArticleURL() {   
         
        angular.forEach(this.articles, function(value, key){
        
        let promise = this.checkURLService.checkURL(value.web_url);
        promise.then(function(response) {             
            value.valid_link=true;            
            },
            function(response) {
            value.valid_link=false;
            }); 
        });
     }
    
    
    
  
}

HomeController.$inject = ['articleService', 'articleFactory', 'checkUrl', 'dateFormat'];