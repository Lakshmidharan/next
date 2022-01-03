        var board = document.createElement['div'];
        board.styles.height = "100px";
        board.styles.width = "100px";
        board.styles.display = "flex";
        board.styles.flexDirection= "row";

        for(let index=1;index<=9;index++){
            var box = document.createElement('div');
            box.styles.height = "100px";
            box.styles.width = "33%";            
            box.styles.backgroundColor= "red";            
            box.styles.marginBottom= "5px";
            board.appenChild(box);            

        }
            document.body.appendChild(board)
