'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (Alert) {
    return function (Vue) {
        var Component = void 0,
            component = void 0,
            container = void 0,
            props = void 0;

        props = {
            text: '',
            title: '',
            hide: function hide() {},

            button: '确定',
            visible: false
        };

        Component = Vue.extend({
            props: {
                options: {
                    type: Object,
                    default: function _default() {
                        return props;
                    }
                }
            },
            render: function render(createElement) {
                var children = [createElement('p', {
                    slot: 'button'
                }, this.options.button)];

                if (this.options.title) {
                    children.push(createElement('p', {
                        slot: 'title'
                    }, this.options.title));
                }

                if (this.options.text) {
                    children.push(createElement('p', {
                        slot: 'text'
                    }, this.options.text));
                }

                return createElement(Alert, {
                    props: {
                        visible: this.options.visible
                    },
                    on: {
                        hide: function () {
                            this.options.visible = false;
                            this.options.hide();
                        }.bind(this)
                    }
                }, children);
            }
        });

        container = document.createElement('div');
        document.getElementsByTagName('body')[0].appendChild(container);
        component = new Component().$mount(container);

        function method(options) {
            component.options = (0, _extends3.default)({}, props, options, {
                visible: true
            });
        }

        Vue.alert = method;
        Vue.prototype.$alert = method;
    };
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }