---
title: BigInt.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die Methode **`toLocaleString()`** von {{jsxref("BigInt")}}-Werten gibt einen string mit einer sprachsensitiven Darstellung dieses BigInt zurück. In Implementierungen mit Unterstützung der [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) delegiert diese Methode an `Intl.NumberFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode mehrfach mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.NumberFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/NumberFormat/format", "format()")}} Methode zu verwenden, da ein `NumberFormat`-Objekt sich die übergebenen Argumente merkt und entscheiden kann, einen Teil der Datenbank im Cache zu speichern, sodass zukünftige `format`-Aufrufe innerhalb eines eingeschränkteren Kontexts nach Lokalisierungsstrings suchen können.

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

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und lassen Anwendungen die Sprache spezifizieren, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)-Konstruktors. Implementierungen ohne `Intl.NumberFormat`-Unterstützung ignorieren beide Parameter, sodass die verwendete Locale und die Form des zurückgegebenen Strings vollständig von der Implementierung abhängen.

- `locales` {{optional_inline}}

  - : Ein string mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Entspricht dem Parameter [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) des `Intl.NumberFormat()`-Konstruktors.

    In Implementierungen ohne `Intl.NumberFormat`-Unterstützung wird dieser Parameter ignoriert und normalerweise die Locale des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem Parameter [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) des `Intl.NumberFormat()`-Konstruktors.

    In Implementierungen ohne `Intl.NumberFormat`-Unterstützung wird dieser Parameter ignoriert.

Siehe den [`Intl.NumberFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Ein string, der den angegebenen BigInt gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.NumberFormat` entspricht dies `new Intl.NumberFormat(locales, options).format(number)`.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Jedoch kann die Ausgabe zwischen Implementierungen variieren, sogar innerhalb derselben Locale – solche Variationen sind von den Spezifikationen vorgesehen und erlaubt. Es kann auch nicht das sein, was Sie erwarten. Beispielsweise kann der string geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Nutzung dieser Methode ohne Angabe einer `locale` gibt einen formatierten string in der Standard-Locale und mit Standardoptionen zurück.

```js
const bigint = 3500n;

console.log(bigint.toLocaleString());
// "3,500" if in U.S. English locale
```

### Überprüfung der Unterstützung für locales- und options-Parameter

Die Parameter `locales` und `options` sind möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung der Internationalisierungs-API optional ist und einigen Systemen die notwendigen Daten fehlen können. Für Implementierungen ohne Unterstützung der Internationalisierung verwendet `toLocaleString()` immer die Locale des Systems, die möglicherweise nicht die gewünschte ist. Da jede Implementierung, die die Parameter `locales` und `options` unterstützt, auch die {{jsxref("Intl")}}-API unterstützen muss, können Sie das Vorhandensein der letzteren auf Unterstützung prüfen:

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

Dieses Beispiel zeigt einige der Variationen in lokalisierten Zahlenformaten. Um das Format der Sprache, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, zu erhalten, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Fallback-Sprachen) mit dem `locales`-Argument angeben:

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

Die Ergebnisse, die von `toLocaleString()` bereitgestellt werden, können mit dem `options`-Parameter angepasst werden:

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
