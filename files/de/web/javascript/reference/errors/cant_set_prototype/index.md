---
title: "TypeError: kann das Prototyp dieses Objekts nicht festlegen"
slug: Web/JavaScript/Reference/Errors/Cant_set_prototype
l10n:
  sourceCommit: b1e4fbd476dd2c933711249d10031b5349180707
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "kann das Prototyp dieses Objekts nicht festlegen" tritt auf, wenn versucht wird, das Prototyp eines Objekts festzulegen, jedoch das Prototyp des Objekts eingefroren ist, entweder durch ein eingebautes unveränderliches Prototyp-Objekt oder weil es [nicht erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) ist.

## Meldung

```plain
TypeError: Immutable prototype object 'Object.prototype' cannot have their prototype set (V8-based)
TypeError: #<Object> is not extensible (V8-based)
TypeError: can't set prototype of this object (Firefox)
TypeError: Cannot set prototype of immutable prototype object (Safari)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Sie verwenden eine der Methoden zur Änderung von Prototypen - insbesondere {{jsxref("Object.setPrototypeOf()")}} - auf einem Objekt, dessen Prototyp unveränderlich ist. Einige eingebaute Objekte haben aus Sicherheitsgründen unveränderliche Prototypen wie `Object.prototype` und [`window`](/de/docs/Web/API/Window). Auch Benutzerobjekte können Prototyp-Änderungen verhindern, indem sie {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}} oder {{jsxref("Object.freeze()")}} verwenden.

## Beispiele

### Ändern des Prototyps eines eingebauten Objekts

Einige wenige eingebaute Objekte haben unveränderliche Prototypen. Zum Beispiel können Sie das Prototyp von `Object.prototype` nicht ändern:

```js example-bad
Object.setPrototypeOf(Object.prototype, {});
```

Dies verhindert, dass Sie das Verhalten aller Objekte im System willkürlich ändern können. Das Prototyp von `Object.prototype` ist immer `null`. Andere eingebaute Prototyp-Objekte wie `Function.prototype` und `Array.prototype` sind in dieser Hinsicht standardmäßig nicht geschützt.

### Ändern des Prototyps eines nicht erweiterbaren Objekts

Wenn Sie ein Objekt nicht erweiterbar machen, können Sie auch nicht sein Prototyp ändern:

```js example-bad
const obj = {};
Object.preventExtensions(obj);
Object.setPrototypeOf(obj, {});
// TypeError: can't set prototype of this object
```

## Siehe auch

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Object.preventExtensions()")}}
