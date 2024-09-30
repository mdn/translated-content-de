---
title: "TypeError: kann das Prototyp dieses Objekts nicht festlegen"
slug: Web/JavaScript/Reference/Errors/Cant_set_prototype
l10n:
  sourceCommit: b1e4fbd476dd2c933711249d10031b5349180707
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "kann das Prototyp dieses Objekts nicht festlegen" tritt auf, wenn versucht wird, das Prototyp eines Objekts festzulegen, das jedoch gesperrt ist. Dies kann der Fall sein, wenn es sich um ein eingebautes unveränderliches Prototyp-Objekt handelt oder das Objekt [nicht erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) ist.

## Meldung

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

Sie verwenden eine der Prototyp-verändernden Methoden—insbesondere {{jsxref("Object.setPrototypeOf()")}}—auf einem Objekt, dessen Prototyp unveränderlich ist. Einige eingebaute Objekte haben aus Sicherheitsgründen unveränderliche Prototypen, wie `Object.prototype` und [`window`](/de/docs/Web/API/Window). Benutzerdefinierte Objekte können Prototyp-Veränderungen verhindern, indem {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, oder {{jsxref("Object.freeze()")}} verwendet wird.

## Beispiele

### Änderung des Prototyps eines eingebauten Objekts

Einige wenige eingebaute Objekte besitzen unveränderliche Prototypen. Zum Beispiel können Sie den Prototyp von `Object.prototype` nicht ändern:

```js example-bad
Object.setPrototypeOf(Object.prototype, {});
```

Dies verhindert, dass das Verhalten aller Objekte im System willkürlich geändert wird. Der Prototyp von `Object.prototype` ist immer `null`. Andere eingebaute Prototyp-Objekte wie `Function.prototype` und `Array.prototype` sind in dieser Hinsicht jedoch standardmäßig nicht geschützt.

### Änderung des Prototyps eines nicht-erweiterbaren Objekts

Wenn Sie ein Objekt nicht-erweiterbar machen, können Sie seinen Prototyp ebenfalls nicht ändern:

```js example-bad
const obj = {};
Object.preventExtensions(obj);
Object.setPrototypeOf(obj, {});
// TypeError: can't set prototype of this object
```

## Siehe auch

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Object.preventExtensions()")}}
