---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die **`toLocaleString()`** Methode von {{jsxref("Array")}} Instanzen gibt einen String zurück, der die Elemente des Arrays repräsentiert. Die Elemente werden in Strings konvertiert, indem ihre `toLocaleString` Methoden verwendet werden, und diese Strings werden durch einen lokal spezifischen String (wie ein Komma ",") getrennt.

{{EmbedInteractiveExample("pages/js/array-tolocalestring.html", "shorter")}}

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales` Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit Konfigurationseigenschaften. Für Zahlen siehe {{jsxref("Number.prototype.toLocaleString()")}}; für Daten siehe {{jsxref("Date.prototype.toLocaleString()")}}.

### Rückgabewert

Ein String, der die Elemente des Arrays repräsentiert.

## Beschreibung

Die Methode `Array.prototype.toLocaleString` durchläuft ihre Inhalte, ruft die `toLocaleString` Methode jedes Elements mit den angegebenen `locales` und `options` Parametern auf und verkettet sie mit einem implementationsspezifischen Separator (wie einem Komma ","). Beachten Sie, dass die Methode selbst die beiden Parameter nicht verarbeitet – sie übergibt sie nur an das `toLocaleString()` jedes Elements. Die Wahl des Separator-Strings hängt von der aktuellen Locale des Hosts ab, nicht vom `locales` Parameter.

Wenn ein Element `undefined`, `null` ist, wird es in einen leeren String anstatt in den String `"null"` oder `"undefined"` umgewandelt.

Wenn die Methode auf [dünnbesetzte Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet wird, behandelt die `toLocaleString()` Methode leere Slots, als hätten sie den Wert `undefined`.

Die `toLocaleString()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integer-indizierte Eigenschaften hat.

## Beispiele

### Verwendung von Locales und Optionen

Die Elemente des Arrays werden mittels ihrer `toLocaleString` Methoden in Strings konvertiert.

- `Object`: {{jsxref("Object.prototype.toLocaleString()")}}
- `Number`: {{jsxref("Number.prototype.toLocaleString()")}}
- `Date`: {{jsxref("Date.prototype.toLocaleString()")}}

Die Währung immer für die Strings und Zahlen im `prices` Array anzeigen:

```js
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

Für weitere Beispiele, siehe auch die Seiten [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) und [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).

### Verwendung von toLocaleString() auf dünnbesetzten Arrays

`toLocaleString()` behandelt leere Slots wie `undefined` und erzeugt einen zusätzlichen Separator:

```js
console.log([1, , 3].toLocaleString()); // '1,,3'
```

### Aufruf von toLocaleString() auf Nicht-Array-Objekten

Die `toLocaleString()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative ganze Zahl ist, die kleiner als `length` ist.

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
