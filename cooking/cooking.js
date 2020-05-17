var dish=[];
var link=[];
function getrecepie()
{
fetch("http://www.recipepuppy.com/api/").then((res)=>{
return(res.json());
}).then((res2)=>{
for(var i=0; i<res2.results.length;i++){
dish.push(res2.results[i].title);
link.push(res2.results[i].href);

}
})

}