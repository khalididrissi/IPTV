 function blockElementsByClass(className) {
            var elements = document.getElementsByClassName(className);

            // Remove elements from the DOM
            while (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
        }

        blockElementsByClass('AlbaSport_header');

        blockElementsByClass('aspwp-e3lan e3lan-before_table_content');

        blockElementsByClass('aspwp-e3lan e3lan-after_table_content');

        blockElementsByClass('site-info');

        blockElementsByClass('widget-visible');

        blockElementsByClass('alba-logo mr-4 d-inline-flex align-items-center');

        blockElementsByClass('');

        blockElementsByClass('');
        blockElementsByClass('');

        blockElementsByClass('');

        blockElementsByClass('');

        blockElementsByClass('');

        blockElementsByClass('');

        blockElementsByClass('');

        blockElementsByClass('');

        blockElementsByClass('');





        // Remove elements by ID
        var elementsToRemoveById = [
            'id-custom_banner',
            'google_ads_iframe_/22654869840/apl_1__container__',
            'google_ads_iframe_/22893379435/apl_0__container__',
            'dontfoid', // <-- Remove this element
            'gpt_unit_/7047,22643491855/apl/anchor/anchortop_0'
        ];

        elementsToRemoveById.forEach(function(elementId) {
            var element = document.getElementById(elementId);
            if (element) {
                element.remove();
            }
        });

        // Remove additional aplvideo elements by class name
        var aplvideoDivs = document.getElementsByClassName('aplvideo');
        while (aplvideoDivs.length > 0) {
            aplvideoDivs[0].remove();
        }