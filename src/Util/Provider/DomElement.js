var Util = Util || {};

(function (Document, Namespace) {
    'use strict';

    Namespace.DomElement = {

        /**
         * Returns an html element by its type.
         * @param {HTMLElement} scope
         * @param {string} type
         * @returns {NodeList}
         */
        getElementByType: function (scope, type) {
            if (typeof scope !== 'object' || typeof type !== 'string') {
                throw new ReferenceError('Scope or type are not valid parameters');
            }
            return scope.getElementsByTagName(type);
        },


        /**
         * Returns an html element by its id.
         * @param {HTMLElement} scope
         * @param {string} elementId
         * @returns {NodeList}
         */
        getElementById: function (scope, elementId) {
            if (typeof type === 'string') {
                throw new ReferenceError('Scope or type are not valid parameters');
            }
            return scope.getElementById(elementId);
        }

    };

})(document, Util.Namespace.create("Util.Provider"));