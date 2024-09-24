---
title: Array.prototype[Symbol.unscopables]
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.unscopables]`** Daten-Eigenschaft von `Array.prototype` wird von allen {{jsxref("Array")}} Instanzen geteilt. Sie enthält Eigenschaftsnamen, die vor der ES2015-Version nicht im ECMAScript-Standard enthalten waren und die für Bindungszwecke der [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung ignoriert werden.

## Wert

Ein [null-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) mit den unten angegebenen Eigenschaftsnamen und deren Werte auf `true` gesetzt.

{{js_property_attributes(0, 0, 1)}}

## Beschreibung

Die Standard-Array-Eigenschaften, die für Bindungszwecke der `with`-Anweisung ignoriert werden, sind:

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

`Array.prototype[Symbol.unscopables]` ist ein leeres Objekt, das nur alle oben genannten Eigenschaftsnamen mit dem Wert `true` enthält. Sein [Prototyp ist `null`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), so dass Eigenschaften von `Object.prototype` wie [`toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) nicht versehentlich unscopeable gemacht werden, und ein `toString()` innerhalb der `with`-Anweisung weiterhin auf das Array angewendet wird.

Siehe {{jsxref("Symbol.unscopables")}}, um zu erfahren, wie Sie unscopeable Eigenschaften für Ihre eigenen Objekte festlegen.

## Beispiele

Stellen Sie sich vor, der Aufruf `values.push('something')` im folgenden Code wurde vor ECMAScript 2015 geschrieben.

```js
var values = [];

with (values) {
  values.push("something");
}
```

Als ECMAScript 2015 die Methode {{jsxref("Array.prototype.values()")}} einführte, begann die `with`-Anweisung im obigen Code, `values` als die `values.values` Array-Methode anstelle der externen `values`-Variable zu interpretieren. Der Aufruf `values.push('something')` würde fehlschlagen, weil jetzt `push` auf die `values.values`-Methode zugreift. Dies führte dazu, dass ein Fehler in Firefox gemeldet wurde ([Firefox Bug 883914](https://bugzil.la/883914)).

So bewirkt die `[Symbol.unscopables]` Daten-Eigenschaft für `Array.prototype`, dass die in ECMAScript 2015 eingeführten Array-Eigenschaften für Bindungszwecke der `with`-Anweisung ignoriert werden — sodass Code, der vor ECMAScript 2015 geschrieben wurde, weiterhin wie erwartet funktioniert und nicht fehlschlägt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype[Symbol.unscopables]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Leitfaden zu indizierten Kollektionen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Statements/with", "with")}}
- {{jsxref("Symbol.unscopables")}}
