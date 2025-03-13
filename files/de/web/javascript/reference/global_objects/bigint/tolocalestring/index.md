---
title: BigInt.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`toLocaleString()`**-Methode von {{jsxref("BigInt")}}-Werten gibt eine Zeichenfolge mit einer sprachsensitiven Darstellung dieses BigInt zurück. In Implementierungen, die die [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützen, delegiert diese Methode an `Intl.NumberFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode mit den gleichen Argumenten häufig aufgerufen wird, ist es besser, ein {{jsxref("Intl.NumberFormat")}}-Objekt zu erstellen und seine {{jsxref("Intl/NumberFormat/format", "format()")}}-Methode zu verwenden, da ein `NumberFormat`-Objekt die übergebenen Argumente speichert und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format`-Aufrufe innerhalb eines begrenzteren Kontexts nach Lokalisierungszeichenfolgen suchen können.

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

Die `locales`- und `options`-Parameter passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)-Konstruktors. Implementierungen ohne `Intl.NumberFormat`-Unterstützung werden aufgefordert, beide Parameter zu ignorieren, wodurch die verwendete Lokalisierung und die Form der zurückgegebenen Zeichenfolge vollständig implementationsabhängig sind.

- `locales` {{optional_inline}}

  - : Eine Zeichenfolge mit einem BCP 47-Sprach-Tag oder ein Array solcher Zeichenfolgen. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales)-Parameter des `Intl.NumberFormat()`-Konstruktors.

    In Implementierungen ohne `Intl.NumberFormat`-Unterstützung wird dieser Parameter ignoriert und die Lokalisierung des Hosts wird normalerweise verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options)-Parameter des `Intl.NumberFormat()`-Konstruktors.

    In Implementierungen ohne `Intl.NumberFormat`-Unterstützung wird dieser Parameter ignoriert.

Siehe den [`Intl.NumberFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Eine Zeichenfolge, die das gegebene BigInt gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.NumberFormat` entspricht dies `new Intl.NumberFormat(locales, options).format(number)`.

> [!NOTE]
> Meistens ist das Format, das von `toLocaleString()` zurückgegeben wird, konsistent. Jedoch kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Lokalisierung — Unterschiede in der Ausgabe sind beabsichtigt und von der Spezifikation erlaubt. Sie entspricht möglicherweise auch nicht Ihren Erwartungen. Beispielsweise kann die Zeichenfolge geschützte Leerzeichen oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit hartcodierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt eine formatierte Zeichenfolge in der Standardlokalisierung und mit Standardoptionen zurück.

```js
const bigint = 3500n;

console.log(bigint.toLocaleString());
// "3,500" if in U.S. English locale
```

### Überprüfung der Unterstützung für die Parameter locales und options

Die `locales`- und `options`-Parameter werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung für die Internationalisierungs-API optional ist und einige Systeme möglicherweise nicht über die erforderlichen Daten verfügen. Für Implementierungen ohne Internationalisierungsunterstützung verwendet `toLocaleString()` immer die Lokalisierung des Systems, was möglicherweise nicht Ihren Vorstellungen entspricht. Da jede Implementierung, die die `locales`- und `options`-Parameter unterstützt, die {{jsxref("Intl")}}-API unterstützen muss, können Sie das Vorhandensein der letzteren überprüfen, um die Unterstützung festzustellen:

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

Dieses Beispiel zeigt einige der Variationen in lokalisierten Zahlenformaten. Um das Format der Sprache, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, zu erhalten, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ersatztsprachen) mit dem `locales`-Argument angeben:

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
