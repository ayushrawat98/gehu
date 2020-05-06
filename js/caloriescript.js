var foodname;
function getNameFood() {
    $(".result").html("");
    foodname = document.getElementById("fname").value;
    $.getJSON("https://api.nal.usda.gov/ndb/search/?format=json&q="+foodname+"&max=1&ds=Standard%20Reference&api_key=ysedIp2gaq51iQDbJgLwXeupG2tE4zr5tQVzNxuS",function(data){
    
        var ndbno = data.list.item[0].ndbno;
        $.getJSON("https://api.nal.usda.gov/ndb/V2/reports?ndbno="+ndbno+"&type=b&format=json&api_key=ysedIp2gaq51iQDbJgLwXeupG2tE4zr5tQVzNxuS",function(data2){
        console.log(data2);
        var calories = data2.foods[0].food.nutrients[1].value;
        $(".result").append(calories+" kcal");
        });
    });
}