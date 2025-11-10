---
title: Number.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`toLocaleString()`** Methode von {{jsxref("Number")}}-Werten gibt eine sprachsensitive Darstellung dieser Zahl als String zurück. In Implementierungen mit Unterstützung der [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) delegiert diese Methode an `Intl.NumberFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank mit Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wird die Methode oft mit denselben Argumenten aufgerufen, ist es besser, ein {{jsxref("Intl.NumberFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/NumberFormat/format", "format()")}} Methode zu verwenden, da ein `NumberFormat`-Objekt die an es übergebenen Argumente behält und entscheiden kann, einen Teil der Datenbank zwischenzuspeichern, sodass zukünftige `format`-Aufrufe Lokalisierungsstrings in einem eingeschränkteren Kontext suchen können.

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

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache festzulegen, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)-Konstruktors. Implementierungen ohne Unterstützung für `Intl.NumberFormat` sollten beide Parameter ignorieren, wodurch die verwendete Lokale und die Form des zurückgegebenen Strings vollständig von der jeweiligen Implementierung abhängt.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales)-Parameter des `Intl.NumberFormat()`-Konstruktors.

    In Implementierungen ohne Unterstützung für `Intl.NumberFormat` wird dieser Parameter ignoriert und üblicherweise die Locale des Hosts verwendet.

- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options)-Parameter des `Intl.NumberFormat()`-Konstruktors.

    In Implementierungen ohne Unterstützung für `Intl.NumberFormat` wird dieser Parameter ignoriert.

Siehe den [`Intl.NumberFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) für Details zu diesen Parametern und ihrer Verwendung.

### Rückgabewert

Ein String, der die angegebene Zahl gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.NumberFormat` ist dies äquivalent zu `new Intl.NumberFormat(locales, options).format(number)`.

> [!NOTE]
> Meistens ist die Formatierung, die `toLocaleString()` zurückgibt, konsistent. Allerdings kann die Ausgabe zwischen verschiedenen Implementierungen variieren, selbst innerhalb derselben Locale — solche Variationen sind beabsichtigt und durch die Spezifikationen erlaubt. Es könnte auch nicht das sein, was Sie erwarten. Zum Beispiel kann der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest kodierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Nutzung dieser Methode ohne Angabe einer `locale` gibt einen formatierten String in der Standard-Locale und mit Standardoptionen zurück.

```js
const number = 3500;

console.log(number.toLocaleString()); // "3,500" if in U.S. English locale
```

### Überprüfen der Unterstützung für locales und options-Parameter

Die Parameter `locales` und `options` werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung für die Internationalisierungs-API optional ist und einige Systeme möglicherweise nicht über die erforderlichen Daten verfügen. Für Implementierungen ohne Unterstützung für Internationalisierung verwendet `toLocaleString()` stets die System-Locale, was möglicherweise nicht das gewünschte Ergebnis liefert. Da jede Implementierung, die die Parameter `locales` und `options` unterstützt, auch die {{jsxref("Intl")}}-API unterstützen muss, können Sie das Vorhandensein dieser API überprüfen, um Unterstützung zu gewährleisten:

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

Dieses Beispiel zeigt einige der Variationen in lokalisierten Zahlenformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ersatzsprachen) mit dem `locales`-Argument angeben:

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

Die Ergebnisse, die von `toLocaleString()` bereitgestellt werden, können mithilfe des `options`-Parameters angepasst werden:

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
