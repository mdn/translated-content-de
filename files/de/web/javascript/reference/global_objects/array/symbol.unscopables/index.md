---
title: Array.prototype[Symbol.unscopables]
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.unscopables]`** Dateneigenschaft von `Array.prototype` wird von allen {{jsxref("Array")}} Instanzen geteilt. Sie enthält Eigenschaftsnamen, die vor der ES2015-Version nicht in den ECMAScript-Standard aufgenommen wurden und die für Bindungszwecke von [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) Anweisungen ignoriert werden.

## Wert

Ein [Objekt mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) mit den unten angegebenen Eigenschaftsnamen und deren Werten, die auf `true` gesetzt sind.

{{js_property_attributes(0, 0, 1)}}

## Beschreibung

Die Standard-`Array`-Eigenschaften, die für Bindungszwecke von `with` Anweisung ignoriert werden, sind:

- [`at()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [`copyWithin()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
- [`entries()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
- [`fill()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
- [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [`findLast()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)
- [`findLastIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)
- [`flat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [`flatMap()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
- [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [`keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
- [`toReversed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)
- [`toSorted()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
- [`toSpliced()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)
- [`values()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values)

`Array.prototype[Symbol.unscopables]` ist ein leeres Objekt, das nur alle oben genannten Eigenschaftsnamen mit dem Wert `true` enthält. Sein [Prototyp ist `null`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), sodass `Object.prototype` Eigenschaften, wie [`toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), nicht versehentlich unscopable gemacht werden und ein `toString()` innerhalb der `with` Anweisung weiterhin auf das Array aufgerufen wird.

Siehe {{jsxref("Symbol.unscopables")}}, um unscopable Eigenschaften für Ihre eigenen Objekte zu setzen.

## Beispiele

Stellen Sie sich vor, der Aufruf `values.push('something')` unten befindet sich in einem Code, der vor ECMAScript 2015 geschrieben wurde.

```js
var values = [];

with (values) {
  values.push("something");
}
```

Als ECMAScript 2015 die {{jsxref("Array.prototype.values()")}} Methode einführte, begann die `with` Anweisung im obigen Code `values` als die `values.values` Array-Methode zu interpretieren, anstatt die externe Variable `values`. Der Aufruf `values.push('something')` würde fehlschlagen, da jetzt auf `push` auf der `values.values` Methode zugegriffen wird. Dies führte dazu, dass ein Fehler bei Firefox gemeldet wurde ([Firefox Bug 883914](https://bugzil.la/883914)).

Die `[Symbol.unscopables]` Dateneigenschaft für `Array.prototype` bewirkt, dass die ab ECMAScript 2015 eingeführten `Array`-Eigenschaften für Bindungszwecke der `with` Anweisung ignoriert werden — wodurch Code, der vor ECMAScript 2015 geschrieben wurde, weiterhin wie erwartet funktioniert und nicht fehlschlägt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype[Symbol.unscopables]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Statements/with", "with")}}
- {{jsxref("Symbol.unscopables")}}
