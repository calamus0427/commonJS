/*城市三级联动

* @method cityChange

* @param allProvince,allCity,allDistrict

*/


function cityChange(provinceN,cityN,districtN){
    var all_province="";
    for(var i=0;i<allCity.province.length;i++){
            all_province+='<option name="province" value='+allCity.province[i].id+'><span class="province">'+allCity.province[i].name+'</span></option>';  };

    $('#'+provinceN).append(all_province);

    
    $('#'+provinceN).change(function () {
                var provinceId = $('#'+provinceN).val();
                $('#'+cityN).find("option:gt(0)").remove();
                 $('#'+districtN).find("option:gt(0)").remove();
               var all_city="";  
               if( provinceId!=99999){             
               for(var j=0;j<allCity.city[provinceId].length;j++){
                         all_city += '<option name="city" value='+allCity.city[provinceId][j].id+'><span class="city">'+allCity.city[provinceId][j].name+'</span></option>';                                         
                    } } ;
                    $('#'+cityN).append(all_city);                                  
            });

    $('#'+cityN).change(function () {
                var cityId = $(this).val();
                var all_district="";                
               for(var k=0;k<allCity.district[cityId].length;k++){
                         all_district += '<option name="district" value='+allCity.district[cityId][k].id+'><span class="city">'+allCity.district[cityId][k].name+'</span></option>';                                         
                    }  ;
                    $('#'+districtN).append(all_district);                                  
            });            
}