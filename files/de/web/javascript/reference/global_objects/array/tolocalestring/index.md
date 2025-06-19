---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
l10n:
  sourceCommit: e98ac5c0970d8dac5d59c694994c13cbe372e0ae
---

{{JSRef}}

Die **`toLocaleString()`**-Methode von {{jsxref("Array")}}-Instanzen gibt eine Zeichenkette zurück, die die Elemente des Arrays darstellt. Die Elemente werden mittels ihrer `toLocaleString`-Methoden in Strings konvertiert, und diese Strings werden durch eine lokale spezifische Zeichenkette (wie etwa ein Komma ",") getrennt.

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
  - : Ein String mit einem BCP 47-Sprach-Tag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit Konfigurationseigenschaften. Was hier übergeben werden kann, hängt davon ab, welche Elemente konvertiert werden. Zum Beispiel für Zahlen siehe {{jsxref("Number.prototype.toLocaleString()")}}.

### Rückgabewert

Eine Zeichenkette, die die Elemente des Arrays darstellt.

## Beschreibung

Die Methode `Array.prototype.toLocaleString` durchläuft ihren Inhalt, ruft die `toLocaleString`-Methode jedes Elements mit den angegebenen Parametern `locales` und `options` auf und verkettet sie mit einem implementierungsdefinierten Trennzeichen (wie einem Komma ",").

> [!NOTE]
> Die `locales`- oder `options`-Argumente steuern nicht das Trennzeichen zwischen Array-Elementen; sie werden einfach an die `toLocaleString()`-Methode jedes Elements übergeben. Das tatsächliche Trennzeichen (normalerweise ein Komma) hängt ausschließlich von der aktuellen Spracheinstellung des Hosts ab. Wenn Sie eine lokalisierte Listenformatierung erwarten, sollten Sie stattdessen {{jsxref("Intl.ListFormat")}} in Betracht ziehen.

Wenn ein Element `undefined` oder `null` ist, wird es in einen leeren String anstelle des Strings `"null"` oder `"undefined"` konvertiert.

Wird `toLocaleString()` auf [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verwendet, wird die Methode leere Slots durchlaufen, als hätten sie den Wert `undefined`.

Die `toLocaleString()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und Integer-Indexed-Eigenschaften hat.

## Beispiele

### Verwendung von locales und options

Die Elemente des Arrays werden mittels ihrer `toLocaleString`-Methoden in Zeichenketten konvertiert. Zum Beispiel ruft dieser Schnipsel implizit die {{jsxref("Number.prototype.toLocaleString()")}}-Methode auf, um die Währung für die Zeichenketten und Zahlen im `prices`-Array anzuzeigen:

```js
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

### Listentrennzeichen

Der Listentrenner wird nicht durch den `locales`-Parameter beeinflusst. Zum Konfigurieren verwenden Sie stattdessen {{jsxref("Intl.Locale")}}.

```js
const nums = [8888, 9999];
console.log(nums.toLocaleString("zh")); // "8,888,9,999"

const formatter = new Intl.ListFormat("zh", {
  type: "conjunction",
  style: "narrow",
});
console.log(formatter.format(nums.map((x) => x.toLocaleString("zh"))));
// "8,888、9,999"
```

### Verwendung von toLocaleString() auf spärlichen Arrays

`toLocaleString()` behandelt leere Slots genauso wie `undefined` und erzeugt einen zusätzlichen Trenner:

```js
console.log([1, , 3].toLocaleString()); // '1,,3'
```

### Aufruf von toLocaleString() auf Nicht-Array-Objekten

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
