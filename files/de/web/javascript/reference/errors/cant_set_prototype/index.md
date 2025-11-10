---
title: "TypeError: kann Prototyp dieses Objekts nicht setzen"
slug: Web/JavaScript/Reference/Errors/Cant_set_prototype
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "kann Prototyp dieses Objekts nicht setzen" tritt auf, wenn versucht wird, den Prototyp eines Objekts zu setzen, dessen Prototyp jedoch eingefroren ist. Dies kann der Fall sein, wenn es sich um ein eingebautes unveränderliches Prototypobjekt handelt oder wenn es [nicht erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) ist.

## Nachricht

```plain
TypeError: Immutable prototype object 'Object.prototype' cannot have their prototype set (V8-based)
TypeError: #<Object> is not extensible (V8-based)
TypeError: can't set prototype of this object (Firefox)
TypeError: Cannot set prototype of immutable prototype object (Safari)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Sie verwenden eine der Methoden zur Mutierung von Prototypen, insbesondere {{jsxref("Object.setPrototypeOf()")}}, auf einem Objekt, dessen Prototyp unveränderlich ist. Einige eingebaute Objekte haben aus Sicherheitsgründen unveränderliche Prototypen, wie `Object.prototype` und [`window`](/de/docs/Web/API/Window). Nutzerobjekte können auch verhindern, dass Prototypenänderungen vorgenommen werden, indem sie {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, oder {{jsxref("Object.freeze()")}} verwenden.

## Beispiele

### Prototyp eines eingebauten Objekts ändern

Einige wenige eingebaute Objekte haben unveränderliche Prototypen. Zum Beispiel können Sie den Prototyp von `Object.prototype` nicht ändern:

```js example-bad
Object.setPrototypeOf(Object.prototype, {});
```

Dies verhindert, dass Sie das Verhalten aller Objekte im System beliebig ändern können. Der Prototyp von `Object.prototype` ist immer `null`. Andere eingebaute Prototypobjekte wie `Function.prototype` und `Array.prototype` sind jedoch standardmäßig in dieser Hinsicht nicht geschützt.

### Prototyp eines nicht erweiterbaren Objekts ändern

Wenn Sie ein Objekt nicht erweiterbar machen, können Sie auch seinen Prototyp nicht ändern:

```js example-bad
const obj = {};
Object.preventExtensions(obj);
Object.setPrototypeOf(obj, {});
// TypeError: can't set prototype of this object
```

## Siehe auch

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Object.preventExtensions()")}}
