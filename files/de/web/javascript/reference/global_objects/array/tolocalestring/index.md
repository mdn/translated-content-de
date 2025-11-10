---
title: Array.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die **`toLocaleString()`** Methode von {{jsxref("Array")}} Instanzen gibt einen String zurück, der die Elemente des Arrays darstellt. Die Elemente werden unter Verwendung ihrer `toLocaleString` Methoden in Strings umgewandelt, und diese Strings werden durch einen lokal spezifischen String (wie ein Komma ",") getrennt.

{{InteractiveExample("JavaScript Demo: Array.prototype.toLocaleString()", "shorter")}}

```js interactive-example
const array = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array.toLocaleString("en", { timeZone: "UTC" });

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
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales` Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit Konfigurationseigenschaften. Was hier übergeben werden kann, hängt davon ab, welche Elemente umgewandelt werden. Zum Beispiel, für Zahlen siehe {{jsxref("Number.prototype.toLocaleString()")}}.

### Rückgabewert

Ein String, der die Elemente des Arrays darstellt.

## Beschreibung

Die Methode `Array.prototype.toLocaleString` durchläuft ihren Inhalt, ruft die `toLocaleString` Methode jedes Elements mit den übergebenen `locales` und `options` Parametern auf und verkettet sie mit einem implementierungsdefinierten Separator (wie einem Komma ",").

> [!NOTE]
> Die Argumente `locales` oder `options` steuern nicht den Separator, der zwischen Array-Elementen verwendet wird; sie werden einfach an die `toLocaleString()` Methode jedes Elements weitergegeben. Der tatsächliche Separator (normalerweise ein Komma) ist allein von der aktuellen Locale des Hosts abhängig. Wenn Sie eine lokalisierte Listenformatierung erwarten, ziehen Sie in Betracht, {{jsxref("Intl.ListFormat")}} zu verwenden.

Wenn ein Element `undefined` oder `null` ist, wird es in einen leeren String umgewandelt, anstatt in die Strings `"null"` oder `"undefined"`.

Bei Verwendung auf [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) iteriert die Methode `toLocaleString()` über leere Stellen, als ob sie den Wert `undefined` hätten.

Die `toLocaleString()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integer-schlüsselbezogene Eigenschaften hat.

## Beispiele

### Verwendung von locales und options

Die Elemente des Arrays werden unter Verwendung ihrer `toLocaleString` Methoden in Strings umgewandelt. Zum Beispiel ruft dieses Snippet implizit die {{jsxref("Number.prototype.toLocaleString()")}} Methode auf, um die Währung für die Strings und Zahlen im `prices` Array anzuzeigen:

```js
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

### Listenseparatoren

Der Listenseparator wird nicht durch den `locales` Parameter beeinflusst. Um ihn zu konfigurieren, verwenden Sie stattdessen {{jsxref("Intl.ListFormat")}}.

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

### Verwendung von toLocaleString() auf dünn besetzten Arrays

`toLocaleString()` behandelt leere Plätze genauso wie `undefined` und erzeugt einen zusätzlichen Separator:

```js
console.log([1, , 3].toLocaleString()); // '1,,3'
```

### Aufrufen von toLocaleString() auf Nicht-Array-Objekten

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

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Object.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
