---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`toLocaleString()`** Methode von {{jsxref("Array")}} Instanzen gibt einen String zurück, der die Elemente des Arrays repräsentiert. Die Elemente werden mit ihren `toLocaleString`-Methoden in Strings umgewandelt, und diese Strings werden durch einen localespezifischen String (wie ein Komma ",") getrennt.

{{EmbedInteractiveExample("pages/js/array-tolocalestring.html", "shorter")}}

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit Konfigurationseigenschaften. Was Sie hier übergeben können, hängt davon ab, welche Elemente umgewandelt werden. Für Zahlen, siehe zum Beispiel {{jsxref("Number.prototype.toLocaleString()")}}.

### Rückgabewert

Ein String, der die Elemente des Arrays repräsentiert.

## Beschreibung

Die Methode `Array.prototype.toLocaleString()` durchläuft ihre Inhalte, ruft die `toLocaleString` Methode jedes Elements mit den angegebenen `locales` und `options` Parametern auf und verknüpft sie mit einem implementierungsdefinierten Trennzeichen (wie einem Komma ","). Beachten Sie, dass die Methode selbst die beiden Parameter nicht verbraucht – sie übergibt sie nur an die `toLocaleString()` Methode jedes Elements. Die Wahl des Trennzeichenstrings hängt von der aktuellen Locale des Hosts ab, nicht vom `locales`-Parameter.

Wenn ein Element `undefined` oder `null` ist, wird es in einen leeren String umgewandelt, anstatt in den String `"null"` oder `"undefined"`.

Bei der Verwendung auf [sparschen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) durchläuft die Methode `toLocaleString()` leere Slots, als hätten sie den Wert `undefined`.

Die Methode `toLocaleString()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und Integer-indizierte Eigenschaften besitzt.

## Beispiele

### Verwendung von locales und options

Die Elemente des Arrays werden unter Verwendung ihrer `toLocaleString`-Methoden in Strings umgewandelt. Zum Beispiel ruft dieses Snippet implizit die Methode {{jsxref("Number.prototype.toLocaleString()")}} auf, um die Währung für die Strings und Zahlen im `prices` Array anzuzeigen:

```js
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

### Verwendung von toLocaleString() auf sparschen Arrays

`toLocaleString()` behandelt leere Slots genauso wie `undefined` und erzeugt ein zusätzliches Trennzeichen:

```js
console.log([1, , 3].toLocaleString()); // '1,,3'
```

### Aufruf von toLocaleString() bei Nicht-Array-Objekten

Die `toLocaleString()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

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

- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Object.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
