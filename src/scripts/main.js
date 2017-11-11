
import SearchOp from './Search/script'

$(function () {

    const contacts = [
        { name: "Maha", age: 27 }, { name: "Medhat", age: 30 }, { name: "Shahd", age: 35 }, { name: "Medhat", age: 44 },
        { name: "Papa", age: 20 }, { name: "Adam", age: 10 }, { name: "Roka", age: 15 }, { name: "Naglaa", age: 54 },
        { name: "Soha", age: 84 }, { name: "Rasha", age: 55 }, { name: "Heba", age: 40 }, { name: "Mahmoud", age: 30 },
        { name: "Yousef", age: 70 }, { name: "Mai", age: 65 }, { name: "Maha", age: 64 }, { name: "Samira", age: 85 },
        { name: "Seham", age: 90 }, { name: "Eman", age: 100 }, { name: "Amira", age: 95 }, { name: "Hamza", age: 12 }
      ];
    //print array
    function printArray(arrarToPrint) {
        let list = `<table class="table table-hover ">
                <thead>
                    <tr class="info">
                    <th>Name</th>
                    <th>Age</th>
                    </tr>
                <thead>`;
        for (let i = 0; i < arrarToPrint.length; i++) {
            if (arrarToPrint[i])
                list += `<tbody>
                    <tr class="active">
                    <td>${arrarToPrint[i].name}</td>
                    <td>${arrarToPrint[i].age}</td>
                    </tr>`;
        }
        list += `</tbody> </table>`;
        return list;
    }


    
    var timer;
    $('#searchtxt').keyup(function () {
        clearTimeout(timer);
        let searchtxt = document.getElementById("searchtxt").value;
        let rowAgeFrom = $("#slider").slider("values", 0);
        let rowAgeTo = $("#slider").slider("values", 1);
        let returnSearchVals = SearchOp(searchtxt, rowAgeFrom, rowAgeTo,contacts);
        if(returnSearchVals != "Not found"){
            timer = setTimeout(function (event) {
                document.getElementById("ShowMyResultSearch").innerHTML = printArray(returnSearchVals);
            }, 2000);
        }else{
            document.getElementById("ShowMyResultSearch").innerHTML = "No result";
        }
    });



    // slider
    $("#slider").slider({
        
        range: true,
        min: 10,
        max: 100,
        step:5,
        values: [10, 100],
        create: function() {
           $( "#custom-handle-from" ).text( $( this ).slider( "values",0 ) );
           $( "#custom-handle-to" ).text( $( this ).slider( "values",1 ) );
        },
        slide:  function (event, ui) {
            //stop code when range less than 10
           if((ui.values[1] - ui.values[0]) > 5){
                $( "#custom-handle-from" ).text( ui.values[0]);
                $( "#custom-handle-to" ).text( ui.values[1] );
                
           }else{ 
              event.preventDefault();
              return false;
           }

           
        },
        stop: function(event, ui){
            //filtter when mouse leave in slider
            let searchtxt = document.getElementById("searchtxt").value;
            let rowAgeFrom = $("#slider").slider("values", 0);
            let rowAgeTo = $("#slider").slider("values", 1);
            let returnSearchVals = SearchOp(searchtxt, rowAgeFrom, rowAgeTo,contacts);
            if(returnSearchVals != "Not found"){
                document.getElementById("ShowMyResultSearch").innerHTML = printArray(returnSearchVals);
            }else{
                document.getElementById("ShowMyResultSearch").innerHTML = "No result";
            }       
           
        }

    });

    // SHOW inital page
   // document.getElementById("ageRangeFrom").innerHTML = $("#slider").slider("values", 0) ;
   // document.getElementById("ageRangeTo").innerHTML = $("#slider").slider("values", 1);
    let searchtxt = document.getElementById("searchtxt").value;
    let rowAgeFrom = $("#slider").slider("values", 0);
    let rowAgeTo = $("#slider").slider("values", 1);
    let returnSearchVals =  SearchOp(searchtxt, rowAgeFrom, rowAgeTo,contacts);
   if(returnSearchVals != "Not found"){
    document.getElementById("ShowMyResultSearch").innerHTML = printArray(returnSearchVals);
    }else{
        document.getElementById("ShowMyResultSearch").innerHTML = "No result";
    }   
    


});

