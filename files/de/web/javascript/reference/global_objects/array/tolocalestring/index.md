---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`toLocaleString()`** Methode von {{jsxref("Array")}} Instanzen gibt eine Zeichenkette zurück, die die Elemente des Arrays darstellt. Die Elemente werden in Zeichenketten konvertiert, indem ihre `toLocaleString`-Methoden verwendet werden, und diese Zeichenketten werden durch eine lokal-spezifische Zeichenkette (wie ein Komma ",") getrennt.

{{InteractiveExample("JavaScript Demo: Array.prototype.toLocaleString()", "shorter")}}

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
  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit Konfigurationseigenschaften. Was Sie hier übergeben können, hängt davon ab, welche Elemente konvertiert werden. Zum Beispiel für Zahlen siehe {{jsxref("Number.prototype.toLocaleString()")}}.

### Rückgabewert

Eine Zeichenkette, die die Elemente des Arrays darstellt.

## Beschreibung

Die `Array.prototype.toLocaleString`-Methode durchsucht ihren Inhalt, ruft die `toLocaleString`-Methode jedes Elements mit den bereitgestellten `locales`- und `options`-Parametern auf und verbindet sie mit einem implementierungsdefinierten Trennzeichen (wie ein Komma ","). Beachten Sie, dass die Methode selbst die beiden Parameter nicht verwendet – sie übergibt sie nur an die `toLocaleString()` jedes Elements. Die Wahl der Trennzeichenkette hängt von der aktuellen Lokale des Hosts und nicht von dem `locales`-Parameter ab.

Wenn ein Element `undefined` oder `null` ist, wird es in eine leere Zeichenkette umgewandelt anstatt in die Zeichenkette `"null"` oder `"undefined"`.

Wenn sie auf [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verwendet wird, iteriert die `toLocaleString()`-Methode über leere Stellen, als hätten sie den Wert `undefined`.

Die `toLocaleString()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige Schlüsseleigenschaften hat.

## Beispiele

### Verwenden von locales und options

Die Elemente des Arrays werden mithilfe ihrer `toLocaleString`-Methoden in Zeichenketten umgewandelt. Zum Beispiel ruft dieses Snippet implizit die {{jsxref("Number.prototype.toLocaleString()")}}-Methode auf, um die Währung für die Zeichenketten und Zahlen im `prices`-Array anzuzeigen:

```js
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

### Verwenden von toLocaleString() auf dünn besetzten Arrays

`toLocaleString()` behandelt leere Stellen genauso wie `undefined` und erzeugt ein zusätzliches Trennzeichen:

```js
console.log([1, , 3].toLocaleString()); // '1,,3'
```

### Aufrufen von toLocaleString() auf Nicht-Array-Objekten

Die `toLocaleString()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl kleiner als `length` ist.

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
