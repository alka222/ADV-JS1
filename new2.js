function z() {
    var b=900;

    function x(){
    var a=7;

        function y(){
            console.log(a, b);
        }

        a=100;
        y();
    }

    x();
}

z();