---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die **`toLocaleString()`** Methode von {{jsxref("Array")}} Instanzen gibt einen String zurück, der die Elemente des Arrays repräsentiert. Die Elemente werden unter Verwendung ihrer `toLocaleString`-Methoden in Strings umgewandelt, und diese Strings werden durch einen lokalen spezifischen String (wie ein Komma ",") getrennt.

{{EmbedInteractiveExample("pages/js/array-tolocalestring.html", "shorter")}}

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit Konfigurationseigenschaften. Für Nummern siehe {{jsxref("Number.prototype.toLocaleString()")}}; für Daten siehe {{jsxref("Date.prototype.toLocaleString()")}}.

### Rückgabewert

Ein String, der die Elemente des Arrays repräsentiert.

## Beschreibung

Die `Array.prototype.toLocaleString`-Methode durchläuft ihren Inhalt, ruft für jedes Element die `toLocaleString`-Methode mit den bereitgestellten `locales` und `options` Parametern auf und verknüpft diese mit einem implementationsdefinierten Trennzeichen (wie einem Komma ","). Beachten Sie, dass die Methode selbst die beiden Parameter nicht direkt nutzt — sie übergibt sie nur an die `toLocaleString()` jeder Elemente. Die Wahl des Trennzeichen-Strings hängt von der aktuellen lokale Umgebung des Hosts ab, nicht vom `locales`-Parameter.

Wenn ein Element `undefined`, `null` ist, wird es in einen leeren String anstelle des Strings `"null"` oder `"undefined"` umgewandelt.

Wenn `toLocaleString()` auf [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verwendet wird, iteriert die Methode leere Slots, als hätten sie den Wert `undefined`.

Die `toLocaleString()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integer-keyed properties hat.

## Beispiele

### Verwendung von locales und options

Die Elemente des Arrays werden in Strings umgewandelt, indem ihre `toLocaleString`-Methoden verwendet werden.

- `Object`: {{jsxref("Object.prototype.toLocaleString()")}}
- `Number`: {{jsxref("Number.prototype.toLocaleString()")}}
- `Date`: {{jsxref("Date.prototype.toLocaleString()")}}

Stets die Währung für die Strings und Zahlen im `prices`-Array anzeigen:

```js
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

Für weitere Beispiele siehe auch die Seiten zu [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) und [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).

### Verwendung von toLocaleString() auf dünn besetzten Arrays

`toLocaleString()` behandelt leere Slots wie `undefined` und erzeugt einen zusätzlichen Trennzeichen:

```js
console.log([1, , 3].toLocaleString()); // '1,,3'
```

### Aufruf von toLocaleString() auf Nicht-Array-Objekten

Die `toLocaleString()` Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative ganze Zahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // ignored by toLocaleString() since length is 3
};
console.log(Array.prototype.toLocaleString.call(arrayLike));
// 1,2,3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Object.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
