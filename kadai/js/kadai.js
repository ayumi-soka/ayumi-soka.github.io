
function gohan(shindan){
    Math.floor(Math.random() * 10)
    
    var message = "";
    
    if(shindan == 0){
        message = "冷たいご飯";
    }else if(shindan == 1){
        message = "アツアツのラーメン";
    }else if(shindan == 2){
        message = "もちもちのタピオカ";
    }else if(shindan == 3){
        message = "ふわふわのオムライス";
    }else if(shindan == 4){
        message = "とぅるとぅるのプリン";
    }else if(shindan == 5){
        message = "絶品のカレーライス";
    }else if(shindan == 6){
        message = "とろとろのステーキ";
    }else if(shindan == 7){
        message = "ぬるいお茶";
    }else if(shindan == 8){
        message = "しなしなのポテト";
    }else if(shindan == 9){
        message ="きらきらの納豆";
    }else {
        message ="温かいご飯"
    }
    
    alert(message);
}
