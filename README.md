# js-utils
A set of useful classes that will save you some time when writing js code

#####Factory\HTMLElement.js helps you create html objects easily
#####Provider\DomElement.js helps you find elements in your dom by type or id
#####Namespace.js helps you create namespaces so you can organise your js classes
    Util.Namespace.create("myNamespace")
#####TypeHelper.js helps you assert the types of elements,
    eg: assertEmptyString()


Update your package.json

    "dependencies": {
        "js-utils": "ssh://git@github.com:josudeno/js-utils.git"
     }

Install dependencies

    npm install

Include them on your page

    <script src="node_modules/js-utils/src/Util/TypeHelper.js"></script>
    <script src="node_modules/js-utils/src/Util/Namespace.js"></script>
    <script src="node_modules/js-utils/src/Util/Factory/HTMLElement.js"></script>
    <script src="node_modules/js-utils/src/Util/Provider/DomElement.js"></script>