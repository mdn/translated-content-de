---
title: BigInt.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`toLocaleString()`** Methode von {{jsxref("BigInt")}} Werten liefert eine sprachlich-sensitive Darstellung dieses BigInt als String. In Implementierungen mit Unterstützung der [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) delegiert diese Methode an `Intl.NumberFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.NumberFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/NumberFormat/format", "format()")}} Methode zu verwenden. Ein `NumberFormat` Objekt merkt sich die übergebenen Argumente und kann entscheiden, einen Teil der Datenbank zu cachen, damit zukünftige `format` Aufrufe die Lokalisierungsstrings in einem eingeschränkteren Kontext finden können.

{{InteractiveExample("JavaScript Demo: BigInt.prototype.toLocaleString()")}}

```js interactive-example
const bigint = 123456789123456789n;

// German uses period for thousands
console.log(bigint.toLocaleString("de-DE"));
// Expected output: "123.456.789.123.456.789"

// Request a currency format
console.log(
  bigint.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// Expected output: "123.456.789.123.456.789,00 €"
```

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache zu spezifizieren, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) Konstruktors. Implementierungen ohne `Intl.NumberFormat` Unterstützung ignorieren beide Parameter, wodurch die verwendete Sprache und die Form des zurückgegebenen Strings vollständig von der Implementierung abhängen.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) Parameter des `Intl.NumberFormat()` Konstruktors.

    In Implementierungen ohne `Intl.NumberFormat` Unterstützung wird dieser Parameter ignoriert und normalerweise die Sprache des Hosts verwendet.

- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) Parameter des `Intl.NumberFormat()` Konstruktors.

    In Implementierungen ohne `Intl.NumberFormat` Unterstützung wird dieser Parameter ignoriert.

Sehen Sie den [`Intl.NumberFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) für Details zu diesen Parametern und wie sie verwendet werden können.

### Rückgabewert

Ein String, der das gegebene BigInt gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.NumberFormat` entspricht dies `new Intl.NumberFormat(locales, options).format(number)`.

> [!NOTE]
> Meistens ist die Formatierung, die durch `toLocaleString()` zurückgegeben wird, konsistent. Der Output kann jedoch zwischen Implementierungen variieren, selbst innerhalb derselben Sprache – Variationen sind absichtlich und werden von der Spezifikation erlaubt. Es könnte auch nicht das sein, was Sie erwarten. Beispielsweise könnte der String geschützte Leerzeichen enthalten oder von bidirektionalen Steuerungszeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Nutzung dieser Methode ohne Angabe einer `locale` gibt einen formatierten String in der Standardsprache und mit Standardoptionen zurück.

```js
const bigint = 3500n;

console.log(bigint.toLocaleString());
// "3,500" if in U.S. English locale
```

### Überprüfung der Unterstützung für locales- und options-Parameter

Die `locales` und `options` Parameter können in allen Implementierungen nicht unterstützt werden, da die Unterstützung für die Internationalisierungs-API optional ist, und einige Systeme möglicherweise nicht über die erforderlichen Daten verfügen. Für Implementierungen ohne Unterstützung für Internationalisierung verwendet `toLocaleString()` immer die Systemsprache, die möglicherweise nicht Ihren Vorstellungen entspricht. Da jede Implementierung, die die `locales` und `options` Parameter unterstützt, auch die {{jsxref("Intl")}} API unterstützen muss, können Sie die Existenz der letzteren auf Unterstützung überprüfen:

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

Dieses Beispiel zeigt einige der Variationen in lokalisierten Nummernformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, sollten Sie sicherstellen, dass Sie diese Sprache (und möglicherweise einige Ersatzsprachen) mit dem `locales` Argument angeben:

```js
const bigint = 123456789123456789n;

// German uses period for thousands
console.log(bigint.toLocaleString("de-DE"));
// 123.456.789.123.456.789

// Arabic in most Arabic speaking countries uses Eastern Arabic digits
console.log(bigint.toLocaleString("ar-EG"));
// ١٢٣٬٤٥٦٬٧٨٩٬١٢٣٬٤٥٦٬٧٨٩

// India uses thousands/lakh/crore separators
console.log(bigint.toLocaleString("en-IN"));
// 1,23,45,67,89,12,34,56,789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(bigint.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// 一二三,四五六,七八九,一二三,四五六,七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(bigint.toLocaleString(["ban", "id"]));
// 123.456.789.123.456.789
```

### Verwendung von options

Die durch `toLocaleString()` bereitgestellten Ergebnisse können mit dem `options` Parameter angepasst werden:

```js
const bigint = 123456789123456789n;

// request a currency format
console.log(
  bigint.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 123.456.789.123.456.789,00 €

// the Japanese yen doesn't use a minor unit
console.log(
  bigint.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// ￥123,456,789,123,456,789

// limit to three significant digits
console.log(bigint.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// 1,23,00,00,00,00,00,00,000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("BigInt.prototype.toString()")}}
