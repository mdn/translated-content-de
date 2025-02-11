---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toLocaleString()`**-Methode von {{jsxref("Array")}}-Instanzen gibt eine Zeichenkette zurück, die die Elemente des Arrays darstellt. Die Elemente werden unter Verwendung ihrer jeweiligen `toLocaleString`-Methoden in Zeichenketten umgewandelt, und diese Zeichenketten werden durch eine lokalspezifische Zeichenfolge (wie ein Komma ",") getrennt.

{{InteractiveExample("JavaScript Demo: Array.toLocaleString()", "shorter")}}

```js interactive-example
const array1 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array1.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
```

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

- `locales` {{optional_inline}}
  - : Eine Zeichenkette mit einem BCP 47-Sprach-Tag oder ein Array solcher Zeichenketten. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Beschreibung des Parameters auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit Konfigurationseigenschaften. Welche Eigenschaften übergeben werden können, hängt davon ab, welche Elemente konvertiert werden. Beispielsweise finden Sie bei Zahlen Informationen unter {{jsxref("Number.prototype.toLocaleString()")}}.

### Rückgabewert

Eine Zeichenkette, die die Elemente des Arrays darstellt.

## Beschreibung

Die Methode `Array.prototype.toLocaleString` durchläuft ihren Inhalt, ruft die `toLocaleString`-Methode jedes Elements mit den angegebenen Parametern `locales` und `options` auf und fügt sie mit einem implementierungsdefinierten Trennzeichen (wie einem Komma ",") zusammen. Beachten Sie, dass die Methode selbst die beiden Parameter nicht nutzt – sie gibt sie lediglich an die jeweilige `toLocaleString()`-Methode jedes Elements weiter. Die Wahl des Trennzeichens hängt von der aktuellen Lokalisierung des Hosts ab, nicht vom Parameter `locales`.

Wenn ein Element `undefined` oder `null` ist, wird es in eine leere Zeichenkette umgewandelt, anstatt in die Zeichenkette `"null"` oder `"undefined"`.

Wird sie auf [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet, iteriert die Methode `toLocaleString()` über leere Felder, als ob sie den Wert `undefined` hätten.

Die Methode `toLocaleString()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integerbezogene Eigenschaften hat.

## Beispiele

### Verwendung von `locales` und `options`

Die Elemente des Arrays werden mithilfe ihrer `toLocaleString`-Methoden in Zeichenketten umgewandelt. Zum Beispiel ruft dieses Snippet implizit die Methode {{jsxref("Number.prototype.toLocaleString()")}} auf, um die Währung für die Zeichenketten und Zahlen im `prices`-Array anzuzeigen:

```js
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

### Verwendung von `toLocaleString()` bei sparse arrays

`toLocaleString()` behandelt leere Felder wie `undefined` und erzeugt einen zusätzlichen Trennzeichen:

```js
console.log([1, , 3].toLocaleString()); // '1,,3'
```

### Aufrufen von `toLocaleString()` bei Nicht-Array-Objekten

Die `toLocaleString()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative Ganzzahl kleiner als `length` ist.

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
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
