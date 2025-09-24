---
title: Number.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die **`toLocaleString()`** Methode von {{jsxref("Number")}}-Werten gibt einen String mit einer sprachsensitiven Darstellung dieser Zahl zurück. In Implementierungen mit Unterstützung der [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) delegiert diese Methode an `Intl.NumberFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient sein kann. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.NumberFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/NumberFormat/format", "format()")}}-Methode zu verwenden, da ein `NumberFormat`-Objekt die an es übergebenen Argumente speichert und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format`-Aufrufe nach Lokalisierungsstrings in einem mehr eingeschränkten Kontext suchen können.

{{InteractiveExample("JavaScript Demo: Number.prototype.toLocaleString()")}}

```js interactive-example
function eArabic(x) {
  return x.toLocaleString("ar-EG");
}

console.log(eArabic(123456.789));
// Expected output: "١٢٣٬٤٥٦٫٧٨٩"

console.log(eArabic("123456.789"));
// Expected output: "123456.789"

console.log(eArabic(NaN));
// Expected output: "ليس رقم"
```

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die `locales`- und `options`-Parameter passen das Verhalten der Funktion an und ermöglichen Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützen, entsprechen diese Parameter genau den Parametern des Konstruktors [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). Implementierungen ohne `Intl.NumberFormat` Unterstützung ignorieren beide Parameter, sodass das verwendete Gebietsschema und die zurückgegebene Zeichenform vollständig implementationsabhängig sind.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) Parameter des `Intl.NumberFormat()` Konstruktors.

    In Implementierungen ohne `Intl.NumberFormat` Unterstützung wird dieser Parameter ignoriert und normalerweise das Gebietsschema des Hosts verwendet.

- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) Parameter des `Intl.NumberFormat()` Konstruktors.

    In Implementierungen ohne `Intl.NumberFormat` Unterstützung wird dieser Parameter ignoriert.

Siehe den [`Intl.NumberFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) für Details zu diesen Parametern und wie sie verwendet werden können.

### Rückgabewert

Ein String, der die gegebene Zahl gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.NumberFormat` ist dies äquivalent zu `new Intl.NumberFormat(locales, options).format(number)`.

> [!NOTE]
> Meistens ist die von `toLocaleString()` zurückgegebene Formatierung konsistent. Die Ausgabe kann jedoch zwischen Implementierungen variieren, sogar innerhalb desselben Gebietsschemas — Ausgabeschwankungen sind geplant und durch die Spezifikation erlaubt. Es ist möglicherweise auch nicht das, was Sie erwarten. Beispielsweise kann der String nicht-umbruchbare Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe eines `locale` gibt einen formatierten String in der Standard-Lokale und mit Standardoptionen zurück.

```js
const number = 3500;

console.log(number.toLocaleString()); // "3,500" if in U.S. English locale
```

### Überprüfung der Unterstützung für die Parameter locales und options

Die `locales`- und `options`-Parameter werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung für die Internationalisierungs-API optional ist und einige Systeme möglicherweise nicht über die erforderlichen Daten verfügen. Für Implementierungen ohne Unterstützung für die Internationalisierung verwendet `toLocaleString()` immer das Gebietsschema des Systems, was möglicherweise nicht Ihren Erwartungen entspricht. Da jede Implementierung, die die `locales`- und `options`-Parameter unterstützt, die {{jsxref("Intl")}} API unterstützen muss, können Sie die Existenz dieser für die Unterstützung überprüfen:

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.NumberFormat === "function"
  );
}
```

### Verwendung von locales

Dieses Beispiel zeigt einige der Unterschiede in lokalisierten Zahlenformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, sollten Sie sicherstellen, dass Sie diese Sprache (und möglicherweise einige Ersatztsprachen) mit dem `locales`-Argument angeben:

```js
const number = 123456.789;

// German uses comma as decimal separator and period for thousands
console.log(number.toLocaleString("de-DE"));
// 123.456,789

// Arabic in most Arabic speaking countries uses Eastern Arabic digits
console.log(number.toLocaleString("ar-EG"));
// ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(number.toLocaleString("en-IN"));
// 1,23,456.789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(number.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// 一二三,四五六.七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(number.toLocaleString(["ban", "id"]));
// 123.456,789
```

### Verwendung von options

Die von `toLocaleString()` bereitgestellten Ergebnisse können mit dem `options`-Parameter angepasst werden:

```js
const number = 123456.789;

// request a currency format
console.log(
  number.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(
  number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// ￥123,457

// limit to three significant digits
console.log(number.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// 1,23,000

// Use the host default language with options for number formatting
const num = 30000.65;
console.log(
  num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
);
// "30,000.65" where English is the default language, or
// "30.000,65" where German is the default language, or
// "30 000,65" where French is the default language
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toString()")}}
