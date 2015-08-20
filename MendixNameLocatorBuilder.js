/*jslint plusplus: true */
/*global Selenium, LocatorBuilders, alert, browser, devel, console */

LocatorBuilders.add('css:MendixName', function (e) {
    'use strict';
	var PFX_NAME = 'mx-name-',
        PFX_NAME_INDEX = 'mx-name-index-',
        NAME_WINDOWS_ACTIVE = 'mx-window-active',
        className,
        continueLoop,
        currentElement,
        findCssClassWithPrefix,
        hasMxNameClass = false,
        loopCount,
        result;
    
    findCssClassWithPrefix = function (element, classPrefix) {
        var className,
            count = element.classList.length,
            i;
        for (i = 0; i < count; i++) {
            className = element.classList.item(i);
            if (className.indexOf(classPrefix) > -1) {
                return '.' + className;
            }
        }
        return null;
    };
    
    // Does the element have a name class?
	className = findCssClassWithPrefix(e, PFX_NAME);
	if (className) {
        // Found the name class directly on the element so use it.
		result = className;
        hasMxNameClass = true;
        
	} else {
        // Element has no name class, take the node name as final part of the CSS
        result = e.nodeName.toLowerCase();
    }

    continueLoop = true;
    loopCount = 0;
    currentElement = e;
    while (continueLoop) {
        loopCount++;
        currentElement = currentElement.parentElement;
        if (currentElement === null || currentElement === undefined || loopCount > 50) {
            continueLoop = false;
        } else {
            // Only if name class has not already been found
            if (!hasMxNameClass) {
                className = findCssClassWithPrefix(currentElement, PFX_NAME);
                if (className) {
                    result = className + ' ' + result;
                    hasMxNameClass = true;
                }
            }
            // Look for classes that identify a template grid or list view row
            className = findCssClassWithPrefix(currentElement, PFX_NAME_INDEX);
            if (className) {
                result = className + ' ' + result;
            }
            // Look for active popups
            className = findCssClassWithPrefix(currentElement, NAME_WINDOWS_ACTIVE);
            if (className) {
                result = className + ' ' + result;
            }
        }
    }
    
    if (hasMxNameClass) {
        return 'css=' + result;
    } else {
        return null;

    }
//	return 'css=.mx-name-textBox2 input';
});