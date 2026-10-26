---
title: Array.prototype[Symbol.unscopables]
short-title: "[Symbol.unscopables]"
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Dateneigenschaft **`[Symbol.unscopables]`** von `Array.prototype` wird von allen {{jsxref("Array")}}-Instanzen gemeinsam genutzt. Sie enthält Eigenschaftsnamen, die vor ES2015 nicht im ECMAScript-Standard enthalten waren und bei der Namensauflösung innerhalb einer [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung ignoriert werden.

## Wert

Ein [Objekt mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), das die unten aufgeführten Eigenschaftsnamen enthält, deren Werte auf `true` gesetzt sind.

{{js_property_attributes(0, 0, 1)}}

## Beschreibung

Die folgenden standardmäßigen `Array`-Eigenschaften werden bei der Namensauflösung innerhalb einer `with`-Anweisung ignoriert:

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

`Array.prototype[Symbol.unscopables]` ist ein ansonsten leeres Objekt, das lediglich alle oben genannten Eigenschaftsnamen mit dem Wert `true` enthält. Sein [Prototyp ist `null`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Dadurch werden Eigenschaften von `Object.prototype` wie [`toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) nicht versehentlich von der Namensauflösung ausgeschlossen, und ein `toString()` innerhalb der `with`-Anweisung wird weiterhin auf dem Array aufgerufen.

Unter {{jsxref("Symbol.unscopables")}} erfahren Sie, wie Sie Eigenschaften Ihrer eigenen Objekte von der Namensauflösung ausschließen.

## Beispiele

Stellen Sie sich vor, der folgende Aufruf `values.push('something')` stünde in Code, der vor ECMAScript 2015 geschrieben wurde.

```js
var values = [];

with (values) {
  values.push("something");
}
```

Als ECMAScript 2015 die Methode {{jsxref("Array.prototype.values()")}} einführte, begann die `with`-Anweisung im obigen Code, `values` als Array-Methode `values.values` statt als externe Variable `values` zu interpretieren. Der Aufruf `values.push('something')` würde dadurch nicht mehr funktionieren, da nun auf `push` der Methode `values.values` zugegriffen wird. Dies führte zu einer Fehlermeldung an Firefox ([Firefox-Bug 883914](https://bugzil.la/883914)).

Die Dateneigenschaft `[Symbol.unscopables]` von `Array.prototype` bewirkt daher, dass die in ECMAScript 2015 eingeführten `Array`-Eigenschaften bei der Namensauflösung innerhalb einer `with`-Anweisung ignoriert werden. So kann Code, der vor ECMAScript 2015 geschrieben wurde, weiterhin wie erwartet funktionieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Array.prototype[Symbol.unscopables]` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Statements/with", "with")}}
- {{jsxref("Symbol.unscopables")}}
