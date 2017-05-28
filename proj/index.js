$(document).ready(function() {
    $("#first").show();
    $("#res").hide();
    $("#slider-range-max").slider({
        range: "max",
        min: 100,
        max: 10000,
        value: 100,
        slide: function(event, ui) {
            $("#dim").val(ui.value);
        }
    });
    $("#dim").val($("#slider-range-max").slider("value"));

    $("#slider-range-max1").slider({
        range: "max",
        min: 1,
        max: 10,
        value: 1,
        slide: function(event, ui) {
            $("#bed").val(ui.value);
        }
    });
    $("#bed").val($("#slider-range-max1").slider("value"));

    $("#sub").click(function(event) {
        event.preventDefault();
        var dim = $("#dim").val();
        var bed = $("#bed").val();
        var house = $("input[name=house]:checked").val();
        var statelist = $("#statelist option:selected").text();
        var pool = $("input[type=checkbox][name=pool]:checked").val();
        var ac = $("input[type=checkbox][name=ac]:checked").val();
        var hel = $("input[type=checkbox][name=hel]:checked").val();
        var optradio = $("input[name=optradio]:checked").val();

        var points = 0;

        if (dim >= 100 && dim <= 10000) {
            points = dim / 100;
            bed = bed * 10;
            var tot = points + bed;
            if (house == "minimalist") {
                tot = tot + 10;
            } else if (house == "midcentury") {
                tot = tot + 20;
            } else if (house == "modern") {
                tot = tot + 30;
            }
            if (pool == "Swimming Pool") {
                tot = tot + 20;
            }
            if (ac == "Air Conditioning") {
                tot = tot + 20;
            }
            if (hel == "Helipad") {
                tot = tot + 30;
            }
            if (statelist == "Saxony" || statelist == "Saxony-Anhalt" || statelist == "Schleswig-Holstein" || statelist == "Thuringia") {
                tot = tot + 10;
            }
            if (statelist == "Mecklenburg-Vorpommern" || statelist == "North Rhine-Westphalia" || statelist == "Rhineland-Palatinate" || statelist == "Saarland") {
                tot = tot + 20;
            }
            if (statelist == "Bremen" || statelist == "Hamburg" || statelist == "Hesse" || statelist == "Lower Saxony") {
                tot = tot + 30;
            }
            if (statelist == "Baden-Württemberg" || statelist == "Bavaria" || statelist == "Berlin" || statelist == "Brandenburg") {
                tot = tot + 40;
            }
            if (optradio == "yes") {
                tot = tot + 50;
            } else if (optradio == "no") {
                tot = tot + 10;
            }
            tot = Math.round(tot / 10);
            $("#fin_res").attr("data-count", tot);
        }

        $("#first").hide();
        $("#res").show();
		
        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },
                {
                    duration: 2000,
                    easing: 'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
        });
    });

    $("#sub1").click(function(event) {
        event.preventDefault();
        location.reload();
    });
});