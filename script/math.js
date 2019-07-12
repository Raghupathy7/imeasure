$(document).ready(function() {
	
    $("#btnSubmit").click(function () {
   	
   	if ($(".room-section > div").length == 0)
        
         {
         	alert('select any one the area');
	
        }	
        else if (document.getElementById("productTypeSelect").value == "Tile" && (document.querySelectorAll(".room-section .rectRoomItem").length) && document.getElementById("tileCalcMethodSelect").value == "WA") 
        {
            var a = $(".room-section .imperialDiv").find("input,select")[0].value;
            var ia = $(".room-section .imperialDiv").find("input,select")[1].value;
            var b = $(".room-section .imperialDiv").find("input,select")[2].value;
            var ib = $(".room-section .imperialDiv").find("input,select")[3].value;
            var tota = parseInt(a) + parseFloat(ia / 12);
            var totb = parseInt(b) + parseFloat(ib / 12);            
            var all = (tota * totb);
            var wid = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
            var iwid = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
            var len = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
            var ilen = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
            var gout = $(".product-info.hidden.active .imperialDiv").find("input,select")[4].value;
            var waste = $(".product-info.hidden.active").find("input,select")[1].value;
            var twid = parseInt(wid) + parseFloat(iwid / 12);
            var tlen = parseInt(len) + parseFloat(ilen / 12);
            var tile = Math.floor(twid * tlen);
            var tilearea = all / tile;
            var goutarea = tilearea * gout;
            var remain = all - goutarea;
            var final = (remain / tile); 
            var math = Math.floor(final);
            var remainder = remain % tile;
            var last1 = tilearea * (waste/100); 
            console.log(last1);
           var last1 =Math.ceil( tilearea + last1 );
 		alert(last1 + "tiles you want");
           // if (remainder == 0 )
             //{
//			//var last1 = math * (waste/100); 
  //         console.log(last1);
    //       var last1 =Math.ceil( math + last1 );
      //     console.log(last1);
 		//alert(last1 + "tiles you want");
          // } else 
          //{
//    	var last2 = final * (waste/100);
  //          	 console.log(last2);
   //         	var last2 = Math.ceil(final + last2 + 1);
     //       	 console.log(last2);
 //				alert(last2 + "tiles you want");
           
   //        }
        } 
				else if (document.getElementById("productTypeSelect").value == "Tile" && (document.querySelectorAll(".room-section .rectRoomItem").length))
        {

            var a = $(".room-section .imperialDiv").find("input,select")[0].value;
            var ia = $(".room-section .imperialDiv").find("input,select")[1].value;
            var b = $(".room-section .imperialDiv").find("input,select")[2].value;
            var ib = $(".room-section .imperialDiv").find("input,select")[3].value;
            var tota = parseInt(a) + parseFloat(ia / 12);
            var totb = parseInt(b) + parseFloat(ib / 12);            
            var all = Math.ceil(tota * totb);
            var wid = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
            var iwid = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
            var len = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
            var ilen = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
            var gout = $(".product-info.hidden.active .imperialDiv").find("input,select")[4].value;
            var waste = $(".product-info.hidden.active").find("input,select")[1].value;
            var twid = parseInt(wid) + parseFloat(iwid / 12);
            var tlen = parseInt(len) + parseFloat(ilen / 12);
            var tile = Math.floor(twid * tlen);
            var tilearea = all / tile;
            var goutarea = tilearea * gout;
            var remain = all - goutarea;
            var final = (remain / tile); 
            var math = Math.floor(final);
            var remainder = remain % tile;
           alert(tilearea + "tiles you want")
   //         if (remainder == 0 )
     //        {
 		//alert(math + "tiles you want");
             	
          //  } else 
          //{           
            //	var last2 = Math.ceil(final  + 1);
            //	 console.log(last2);
 			//alert(last2 + "tiles you want");           //}
        }
         else if (document.getElementById("productTypeSelect").value == "Tile" && (document.querySelectorAll(".room-section .LShapeRoomItem").length) || (document.querySelectorAll(".room-section .convexRoomItem").length) && document.getElementById("tileCalcMethodSelect").value == "WA") 
        {
        	
        	var a1 = $(".room-section .imperialDiv").find("input,select")[0].value;
        	var ia1 = $(".room-section .imperialDiv").find("input,select")[1].value;
        	var b1 = $(".room-section .imperialDiv").find("input,select")[2].value;
            var ib1 = $(".room-section .imperialDiv").find("input,select")[3].value;
            var c1 = $(".room-section .imperialDiv").find("input,select")[4].value;
        	var ic1 = $(".room-section .imperialDiv").find("input,select")[5].value;
        	var d1 = $(".room-section .imperialDiv").find("input,select")[6].value;
            var id1 = $(".room-section .imperialDiv").find("input,select")[7].value;
            var tota1 = parseInt(a1) + parseFloat(ia1 / 12);
            var totb1 = parseInt(b1) + parseFloat(ib1 / 12);
            var totc1 = parseInt(c1) + parseFloat(ic1 / 12);
            var totd1 = parseInt(d1) + parseFloat(id1 / 12);
            var all1 = Math.ceil((tota1 * totb1) + (totc1 * totd1));
            var wid1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
            var iwid1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
            var len1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
            var ilen1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
            var gout1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[4].value;
             var waste = $(".product-info.hidden.active").find("input,select")[1].value;
            var twid1 = parseInt(wid1) + parseFloat(iwid1 / 12);
            var tlen1 = parseInt(len1) + parseFloat(ilen1 / 12);
            var tile1 = Math.floor(twid1 * tlen1);
            var tilearea1 = all1/tile1;
            var goutarea1 = tilearea1 * gout1;
            var remain1 = all1 - goutarea1;
            var final1 = remain1/tile1;
            var math1 = Math.floor(final1);
            var remainder1 = remain1 % tile1;
            var last1 = tilearea1 * (waste/100); 
           var last1 =Math.ceil( tilearea1 + last1 );
 		alert(last1 + "tiles you want");
       //  if (remainder == 0 )
         //    {
			//var last1 = final1 * (waste/100); 
       //    console.log(last1);
         //  var last1 =Math.ceil( final1 + last1 );
           //console.log(last1);
 	//	alert(last1 + "tiles you want");
             	
      //      } else 
        //  {
         //   	var last2 = math1 * (waste/100);
           // 	 console.log(last2);
           // 	var last2 = Math.ceil(math1 + last2 + 1);
           // 	 console.log(last2);
 	//alert(last2 + "tiles you want");
           
      //     }
        }
        else if (document.getElementById("productTypeSelect").value == "Tile" && (document.querySelectorAll(".room-section .LShapeRoomItem").length) || (document.querySelectorAll(".room-section .convexRoomItem").length))
        {
        	
        	var a1 = $(".room-section .imperialDiv").find("input,select")[0].value;
        	var ia1 = $(".room-section .imperialDiv").find("input,select")[1].value;
        	var b1 = $(".room-section .imperialDiv").find("input,select")[2].value;
            var ib1 = $(".room-section .imperialDiv").find("input,select")[3].value;
            var c1 = $(".room-section .imperialDiv").find("input,select")[4].value;
        	var ic1 = $(".room-section .imperialDiv").find("input,select")[5].value;
        	var d1 = $(".room-section .imperialDiv").find("input,select")[6].value;
            var id1 = $(".room-section .imperialDiv").find("input,select")[7].value;
            var tota1 = parseInt(a1) + parseFloat(ia1 / 12);
            var totb1 = parseInt(b1) + parseFloat(ib1 / 12);
            var totc1 = parseInt(c1) + parseFloat(ic1 / 12);
            var totd1 = parseInt(d1) + parseFloat(id1 / 12);
            var all1 = Math.ceil((tota1 * totb1) + (totc1 * totd1));
            var wid1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
            var iwid1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
            var len1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
            var ilen1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
            var gout1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[4].value;
            var twid1 = parseInt(wid1) + parseFloat(iwid1 / 12);
            var tlen1 = parseInt(len1) + parseFloat(ilen1 / 12);
            var tile1 = Math.floor(twid1 * tlen1);
            var tilearea1 = all1/tile1;
            var goutarea1 = tilearea1 * gout1;
            var remain1 = all1 - goutarea1;
            var final1 = remain1/tile1;
            var math1 = Math.floor(final1);
            var remainder1 = remain1 % tile1;
            alert(tilearea1 + "tiles you want")
         //  if (remainder1 == 0) 
           // {              
             //   alert(final1 + "tiles you want");
                 //  } else {
            //	var last1 = math1 + 1;
              //  alert(last1 + "tiles you want");
            //}
        }
        else if (document.getElementById("productTypeSelect").value == "Tile" && (document.querySelectorAll(".room-section .concaveRoomItem").length) && document.getElementById("tileCalcMethodSelect").value == "WA")
        {
        	var a1 = $(".room-section .imperialDiv").find("input,select")[0].value;
        	var ia1 = $(".room-section .imperialDiv").find("input,select")[1].value;
        	var b1 = $(".room-section .imperialDiv").find("input,select")[2].value;
            var ib1 = $(".room-section .imperialDiv").find("input,select")[3].value;
            var c1 = $(".room-section .imperialDiv").find("input,select")[4].value;
        	var ic1 = $(".room-section .imperialDiv").find("input,select")[5].value;
        	var d1 = $(".room-section .imperialDiv").find("input,select")[6].value;
            var id1 = $(".room-section .imperialDiv").find("input,select")[7].value;
            var tota1 = parseInt(a1) + parseFloat(ia1 / 12);
            var totb1 = parseInt(b1) + parseFloat(ib1 / 12);
            var totc1 = parseInt(c1) + parseFloat(ic1 / 12);
            var totd1 = parseInt(d1) + parseFloat(id1 / 12);
            var all1 = Math.ceil((tota1 * totb1) - (totc1 * totd1));
            var wid1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
            var iwid1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
            var len1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
            var ilen1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
            var gout1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[4].value;        
            var waste = $(".product-info.hidden.active").find("input,select")[1].value;
            var twid1 = parseInt(wid1) + parseFloat(iwid1 / 12);
            var tlen1 = parseInt(len1) + parseFloat(ilen1 / 12);
            var tile1 = Math.floor(twid1 * tlen1);
            var tilearea1 = all1/tile1;
            var goutarea1 = tilearea1 * gout1;
            var remain1 = (all1 - goutarea1);
            var final1 = remain1/tile1;
            var math1 = Math.floor(final1);
            var remainder1 = remain1 % tile1;
            var last1 = tilearea1 * (waste/100); 
           var last1 =Math.ceil( tilearea1 + last1 );
         alert(last1 + "tiles you want");
            //   if (remainder == 0 )
             //{
//			var last1 = final1 * (waste/100); 
  //         console.log(last1);
    //       var last1 =Math.ceil( final1 + last1 );
      //     console.log(last1);
 		//alert(last1 + "tiles you want");
           //  } else //{
            //	var last2 = math1 * (waste/100);
            //	 console.log(last2);
            //	var last2 = Math.ceil(math1 + last2 + 1);
            //	 console.log(last2);
 //	alert(last2 + "tiles you want");
   //        }
        }
        else if (document.getElementById("productTypeSelect").value == "Tile" && (document.querySelectorAll(".room-section .concaveRoomItem").length))
   {
        	var a1 = $(".room-section .imperialDiv").find("input,select")[0].value;
        	var ia1 = $(".room-section .imperialDiv").find("input,select")[1].value;
        	var b1 = $(".room-section .imperialDiv").find("input,select")[2].value;
            var ib1 = $(".room-section .imperialDiv").find("input,select")[3].value;
            var c1 = $(".room-section .imperialDiv").find("input,select")[4].value;
        	var ic1 = $(".room-section .imperialDiv").find("input,select")[5].value;
        	var d1 = $(".room-section .imperialDiv").find("input,select")[6].value;
            var id1 = $(".room-section .imperialDiv").find("input,select")[7].value;
            var tota1 = parseInt(a1) + parseFloat(ia1 / 12);
            var totb1 = parseInt(b1) + parseFloat(ib1 / 12);
            var totc1 = parseInt(c1) + parseFloat(ic1 / 12);
            var totd1 = parseInt(d1) + parseFloat(id1 / 12);
            var all1 = Math.ceil((tota1 * totb1) - (totc1 * totd1));
            var wid1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
            var iwid1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
            var len1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
            var ilen1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
            var gout1 = $(".product-info.hidden.active .imperialDiv").find("input,select")[4].value;
  			var a1 = $(".room-section .imperialDiv").find("input,select")[0].value;
            var twid1 = parseInt(wid1) + parseFloat(iwid1 / 12);
            var tlen1 = parseInt(len1) + parseFloat(ilen1 / 12);
            var tile1 = Math.floor(twid1 * tlen1);
            var tilearea1 = all1/tile1;
            var goutarea1 = tilearea1 * gout1;
            var remain1 = (all1 - goutarea1);
            var final1 = remain1/tile1;
            var math1 = Math.floor(final1);
            var remainder1 = remain1 % tile1;
            alert(tilearea1 + "tiles you want");
        }
          //  if (remainder1 == 0) 
            //{  
              //  alert(final1 + "tiles you want");
                
            //} else {
            //	var last1 = math1 + 1;
              //  alert(last1 + "tiles you want");
            //}
        //}
         else if (document.getElementById("productTypeSelect").value == "Tile" && (document.querySelectorAll(".room-section .stairItem").length) &&document.getElementById("tileCalcMethodSelect").value == "WA")
        {
        	var a = $(".room-section .imperialDiv").find("input,select")[0].value;
        	var b = $(".room-section .imperialDiv").find("input,select")[1].value;
        	var c = $(".room-section").find("input")[3].value;
        	var d = $(".room-section .imperialDiv").find("input,select")[2].value;
        	var e = $(".room-section .imperialDiv").find("input,select")[3].value;
        	var f = $(".room-section .imperialDiv").find("input,select")[4].value;
            var g = $(".room-section .imperialDiv").find("input,select")[5].value;
        	var wi = parseInt(a) + parseFloat(b/12);
        	var tr = parseInt(d) + parseFloat(e/12);
        	var ri = parseInt(f) + parseFloat(g/12);
        	var all = (tr + ri) * wi * c;
        	var wid = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
            var iwid = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
            var len = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
            var ilen = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
            var gout = $(".product-info.hidden.active .imperialDiv").find("input,select")[4].value;
             var waste = $(".product-info.hidden.active").find("input,select")[1].value;
            var twid = parseInt(wid) + parseFloat(iwid / 12);
            var tlen = parseInt(len) + parseFloat(ilen / 12);
            var tile = Math.floor(twid * tlen);
            var tilearea = all / tile;
            var goutarea = tilearea * gout;
            var remain = (all - goutarea);
            var final = Math.floor(remain / tile);
            var remainder = remain % tile;
            var last1 = tilearea * (waste/100); 
            var last1 =Math.ceil( tilearea + last1 );
 		    alert(last1 + "tiles you want");
           //    if (remainder == 0 )
             //{
			//var last1 = tilearea * (waste/100); 
           //console.log(last1);
           //var last1 =Math.ceil( tilearea + last1 );
           //console.log(last1);
 	//	alert(last1 + "tiles you want"); 	
      //      } else 
        //  {
          //  	var last2 = tilearea * (waste/100);
            //	 console.log(last2);
            //	var last3 = Math.ceil(tilearea + last2 + 1);
            //	 console.log(last3);
 	//alert(last3 + "tiles you want");
      //     }
}
         else if (document.getElementById("productTypeSelect").value == "Tile" && (document.querySelectorAll(".room-section .stairItem").length))
        {
        	var a = $(".room-section .imperialDiv").find("input,select")[0].value;
        	var b = $(".room-section .imperialDiv").find("input,select")[1].value;
        	var c = $(".room-section").find("input")[3].value;
        	var d = $(".room-section .imperialDiv").find("input,select")[2].value;
        	var e = $(".room-section .imperialDiv").find("input,select")[3].value;
        	var f = $(".room-section .imperialDiv").find("input,select")[4].value;
            var g = $(".room-section .imperialDiv").find("input,select")[5].value;
        	var wi = parseInt(a) + parseFloat(b/12);
        	var tr = parseInt(d) + parseFloat(e/12);
        	var ri = parseInt(f) + parseFloat(g/12);
        	var all = (tr + ri) * wi * c;
        	var wid = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
            var iwid = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
            var len = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
            var ilen = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
            var gout = $(".product-info.hidden.active .imperialDiv").find("input,select")[4].value;
            var twid = parseInt(wid) + parseFloat(iwid / 12);
            var tlen = parseInt(len) + parseFloat(ilen / 12);
            var tile = Math.floor(twid * tlen);
            var tilearea = all / tile;
            var goutarea = tilearea * gout;
            var remain = (all - goutarea);
            var final = Math.floor(remain / tile);
            var remainder = remain % tile;
            alert(tilearea + "tiles you want");
           // if (remainder == 0 )
             //{
             //	alert(tilearea + "tiles you want");      	
            //} else 
           // {
            //	var last =Math.ceil(tilearea); 
//                alert(last + "tiles you want");
  //          }
}});});