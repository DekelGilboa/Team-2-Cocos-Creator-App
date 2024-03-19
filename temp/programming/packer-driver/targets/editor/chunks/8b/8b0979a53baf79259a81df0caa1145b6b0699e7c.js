System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, retryBtn;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf1cakFiEVFtqNz2q0UfB5b", "retryBtn", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("retryBtn", retryBtn = (_dec = ccclass("retryBtn"), _dec(_class = class retryBtn extends Component {
        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8b0979a53baf79259a81df0caa1145b6b0699e7c.js.map