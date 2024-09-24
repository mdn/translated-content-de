---
title: "TypeError: Der Prototyp dieses Objekts kann nicht gesetzt werden"
slug: Web/JavaScript/Reference/Errors/Cant_set_prototype
l10n:
  sourceCommit: b1e4fbd476dd2c933711249d10031b5349180707
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Der Prototyp dieses Objekts kann nicht gesetzt werden" tritt auf, wenn versucht wird, den Prototyp eines Objekts zu setzen, dessen Prototyp jedoch eingefroren ist. Dies kann entweder daran liegen, dass es sich um ein unveränderliches eingebautes Prototyp-Objekt handelt, oder dass es sich um ein [nicht erweiterbares](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekt handelt.

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

Sie verwenden eine der Prototyp-mutierenden Methoden – insbesondere {{jsxref("Object.setPrototypeOf()")}} – auf einem Objekt, dessen Prototyp unveränderlich ist. Einige eingebaute Objekte haben aus Sicherheitsgründen unveränderliche Prototypen, wie `Object.prototype` und {{domxref("window")}}. Benutzerdefinierte Objekte können auch durch die Verwendung von {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}} oder {{jsxref("Object.freeze()")}} Änderungen am Prototyp verhindern.

## Beispiele

### Den Prototyp eines eingebauten Objekts ändern

Einige wenige eingebaute Objekte haben unveränderliche Prototypen. Zum Beispiel können Sie den Prototyp von `Object.prototype` nicht ändern:

```js example-bad
Object.setPrototypeOf(Object.prototype, {});
```

Dies verhindert, dass Sie das Verhalten aller Objekte im System nach Belieben ändern können. Der Prototyp von `Object.prototype` ist immer `null`. Andere eingebaute Prototypobjekte, wie `Function.prototype` und `Array.prototype`, sind jedoch standardmäßig in dieser Hinsicht nicht geschützt.

### Den Prototyp eines nicht erweiterbaren Objekts ändern

Wenn Sie ein Objekt nicht erweiterbar machen, können Sie auch dessen Prototyp nicht ändern:

```js example-bad
const obj = {};
Object.preventExtensions(obj);
Object.setPrototypeOf(obj, {});
// TypeError: can't set prototype of this object
```

## Siehe auch

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Object.preventExtensions()")}}
