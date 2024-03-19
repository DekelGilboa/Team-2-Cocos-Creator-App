System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, backBtn;

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

      _cclegacy._RF.push({}, "cf1cakFiEVFtqNz2q0UfB5b", "backBtn", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("backBtn", backBtn = (_dec = ccclass("backBtn"), _dec(_class = class backBtn extends Component {
        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c787e753038cd481b2b385ea37af88739f89126d.js.map