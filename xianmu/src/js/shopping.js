$(function(){
    //1.隔行变色
    $("#checkAllChange").click(function() {
        if (this.checked == true) {
            $(".goods").each(function() {
                this.checked = true;
            });
        } else {
            $(".goods").each(function() {
                this.checked = false;
            });
        }
        getTotalPrice();
    });
    $(".goods").click(function() {
        getTotalPrice();
    });
    $("input[type='button']").click(function() {
        //$(".goods:checked").each(function() {
        $(this).parents("tr").remove();
        // });
        getTotalPrice();
    });
});


function getTotalPrice(){
    var fPrice = 0;
    $(".goods:checked").each(function() {
        fPrice += parseFloat(($(this).parents("tr").find("span").html()));
    });
    $("tfoot span");
    $("span:last").html(fPrice.toFixed(2));
}