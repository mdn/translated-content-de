---
title: Array.prototype[Symbol.unscopables]
short-title: "[Symbol.unscopables]"
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`[Symbol.unscopables]`** Daten-Eigenschaft von `Array.prototype` wird von allen {{jsxref("Array")}} Instanzen geteilt. Sie enthält Eigenschaftsnamen, die vor der ES2015-Version nicht im ECMAScript-Standard enthalten waren und die für die Bindung von [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisungen ignoriert werden.

## Wert

Ein [Objekt mit Null-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) mit den unten angegebenen Eigenschaftsnamen und deren Werten, die auf `true` gesetzt sind.

{{js_property_attributes(0, 0, 1)}}

## Beschreibung

Die standardmäßigen `Array`-Eigenschaften, die für `with`-Anweisungsbindungen ignoriert werden, sind:

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

`Array.prototype[Symbol.unscopables]` ist ein leeres Objekt, das nur alle oben genannten Eigenschaftsnamen mit dem Wert `true` enthält. Sein [Prototyp ist `null`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), so dass `Object.prototype`-Eigenschaften wie [`toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) nicht versehentlich unsichtbar gemacht werden und ein `toString()` innerhalb der `with`-Anweisung weiterhin auf das Array angewendet wird.

Siehe {{jsxref("Symbol.unscopables")}} für Informationen darüber, wie Sie unsichtbare Eigenschaften für Ihre eigenen Objekte festlegen können.

## Beispiele

Angenommen, der Aufruf `values.push('something')` unten befindet sich in Code, der vor ECMAScript 2015 geschrieben wurde.

```js
var values = [];

with (values) {
  values.push("something");
}
```

Als ECMAScript 2015 die Methode {{jsxref("Array.prototype.values()")}} einführte, begann die `with`-Anweisung im obigen Code, `values` als `values.values` Array-Methode statt als externe `values`-Variable zu interpretieren. Der Aufruf `values.push('something')` würde fehlschlagen, weil nun auf `push` auf der `values.values`-Methode zugegriffen wird. Dies führte zu einem gemeldeten Fehler in Firefox ([Firefox Bug 883914](https://bugzil.la/883914)).

Die `[Symbol.unscopables]` Daten-Eigenschaft für `Array.prototype` bewirkt, dass die in ECMAScript 2015 eingeführten `Array`-Eigenschaften für `with`-Anweisungsbindungen ignoriert werden — wodurch Code, der vor ECMAScript 2015 geschrieben wurde, weiterhin wie erwartet funktionieren kann, anstatt fehlerhaft zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype[Symbol.unscopables]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Statements/with", "with")}}
- {{jsxref("Symbol.unscopables")}}
