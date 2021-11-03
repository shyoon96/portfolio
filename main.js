$(function () {
    $('#fullpage').fullpage({

        navigationTooltips: ['Profile', 'Homepage', 'ReDesign', 'Banner/Pop-Up Design', 'Video'],

        anchors: ['Profile', 'Homepage', 'ReDesign', 'Banner', 'Video'],
        menu: '#gnb',



    })
    $('a.lightbox').colorbox({
        rel: 'colorbox'


    })
    $('.tabmenu ul li:first-child a').click(function () {
        $('.popup').fadeIn()
        $('.banner').fadeOut()
    })
    $('.tabmenu ul li:last-child a').click(function () {
        $('.popup').fadeOut()
        $('.banner').fadeIn()
    })

    // youtube slide

    $('#m_slide').bxSlider({
        auto: true,
        speed: '2000',
        autoHover: true
    })


    // pie chart
    draw(80, '.pie-chart1', 'tomato');
    draw(60, '.pie-chart2', 'gold');
    draw(80, '.pie-chart3', '#26c9ff');
    draw(60, '.pie-chart4', '#ff9200');
    draw(70, '.pie-chart5', '#e87cff');
    draw(70, '.pie-chart6', '#d194ff');



    function draw(max, classname, colorname) {
        var i = 1;
        var func1 = setInterval(function () {
            if (i < max) {
                color1(i, classname, colorname);
                i++;
            } else {
                clearInterval(func1);
            }
        }, 10);
    }
    function color1(i, classname, colorname) {
        $(classname).css({
            "background": "conic-gradient(" + colorname + " 0% " + i + "%, #ffffff " + i + "% 100%)"
        });
    }


    function replay() {
        draw(80, '.pie-chart1', 'tomato');
        draw(60, '.pie-chart2', 'gold');
        draw(80, '.pie-chart3', '#26c9ff');
        draw(60, '.pie-chart4', '#ff9200');
        draw(70, '.pie-chart5', '#e87cff');
        draw(70, '.pie-chart6', '#d194ff');
    }
})//end ready