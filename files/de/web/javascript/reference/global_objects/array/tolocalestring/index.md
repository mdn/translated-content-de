---
title: Array.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toLocaleString()`** Methode von {{jsxref("Array")}} Instanzen gibt einen String zurück, der die Elemente des Arrays repräsentiert. Die Elemente werden mithilfe ihrer `toLocaleString` Methoden in Strings konvertiert, und diese Strings werden durch einen lokalisierten String (wie ein Komma ",") getrennt.

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
  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit Konfigurationseigenschaften. Was hier übergeben werden kann, hängt davon ab, welche Elemente konvertiert werden. Zum Beispiel, für Zahlen siehe {{jsxref("Number.prototype.toLocaleString()")}}.

### Rückgabewert

Ein String, der die Elemente des Arrays repräsentiert.

## Beschreibung

Die `Array.prototype.toLocaleString` Methode durchläuft ihren Inhalt, ruft die `toLocaleString` Methode jedes Elements mit den übergebenen `locales` und `options` Parametern auf und verknüpft sie mit einem implementierungsabhängigen Trennzeichen (wie ein Komma ",").

> [!NOTE]
> Die `locales` oder `options` Argumente steuern nicht den zwischen den Array-Elementen verwendeten Trennzeichen; sie werden einfach an die `toLocaleString()` Methode jedes Elements übergeben. Das tatsächliche Trennzeichen (normalerweise ein Komma) hängt ausschließlich von der aktuellen Locale des Hosts ab. Wenn Sie eine lokalisierte Listenformatierung erwarten, ziehen Sie {{jsxref("Intl.ListFormat")}} in Betracht.

Wenn ein Element `undefined` oder `null` ist, wird es in einen leeren String anstatt des Strings `"null"` oder `"undefined"` umgewandelt.

Wenn `toLocaleString()` für [lückige Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verwendet wird, durchläuft die Methode leere Slots, als hätten sie den Wert `undefined`.

Die `toLocaleString()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der Wert von `this` eine `length` Eigenschaft und integer-gekoppelte Eigenschaften hat.

## Beispiele

### Verwendung von locales und options

Die Elemente des Arrays werden mithilfe ihrer `toLocaleString` Methoden in Strings konvertiert. Zum Beispiel ruft dieses Snippet implizit die {{jsxref("Number.prototype.toLocaleString()")}} Methode auf, um die Währung für die Strings und Zahlen im `prices` Array anzuzeigen:

```js
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

### Listentrennzeichen

Das Listentrennzeichen wird nicht durch den `locales` Parameter beeinflusst. Um es zu konfigurieren, verwenden Sie {{jsxref("Intl.ListFormat")}} stattdessen.

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

### Verwendung von toLocaleString() bei lückigen Arrays

`toLocaleString()` behandelt leere Slots genau wie `undefined` und erzeugt einen zusätzlichen Trenner:

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

- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Object.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
