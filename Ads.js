function blockElementsByClass(className) {
var elements = document.getElementsByClassName(className);

        // Remove elements from the DOM
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    blockElementsByClass('AlbaSport_header');
    blockElementsByClass('LIVEVIPlogo');

    blockElementsByClass('aspwp-e3lan e3lan-before_table_content');

    blockElementsByClass('aspwp-e3lan e3lan-after_table_content');

    blockElementsByClass('site-info');

    blockElementsByClass('widget-visible');

    blockElementsByClass('alba-logo mr-4 d-inline-flex align-items-center');

    blockElementsByClass('aplr-fxd-bnr');

    blockElementsByClass('aspwp-e3lan e3lan-after_match_card');

    blockElementsByClass('aplr-notic');

    blockElementsByClass('aspwp-e3lan e3lan-before_match_info');

    blockElementsByClass('aspwp-e3lan e3lan-after_match_info');

    blockElementsByClass('aplr-bnr-inner');

    blockElementsByClass('menu-item menu-item-type-custom menu-item-object-custom menu-item-847');

    blockElementsByClass('AlbaSport-main box');

    blockElementsByClass('notic-telegram');





    // Remove elements by ID
    var elementsToRemoveById = [
        'id-custom_banner',
        'google_ads_iframe_/22654869840/apl_1__container__',
        'google_ads_iframe_/22893379435/apl_0__container__',
        'dontfoid',
        'gpt_unit_/7047,22643491855/apl/anchor/anchortop_0',
        'aplr-notic-inner',
        'aplr-notic',
        'aplr-fixedban',
        'atContainer-a2d918dabce8894ebd1006e873d52989'
    ];

    elementsToRemoveById.forEach(function(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            element.remove();
        }
    });

    // Remove additional aplvideo elements by class name
    var aplvideoDivs = document.getElementsByClassName('aplr-fixedban');
    while (aplvideoDivs.length > 0) {
        aplvideoDivs[0].remove();
    }
