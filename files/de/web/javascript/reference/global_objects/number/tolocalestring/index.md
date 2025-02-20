---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toLocaleString()`**-Methode von {{jsxref("Number")}}-Werten gibt eine Zeichenkette mit einer sprachenspezifischen Darstellung dieser Zahl zurück. In Implementierungen mit Unterstützung für die [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) delegiert diese Methode an `Intl.NumberFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode mit denselben Argumenten öfter aufgerufen werden soll, ist es besser, ein {{jsxref("Intl.NumberFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/NumberFormat/format", "format()")}}-Methode zu verwenden. Ein `NumberFormat`-Objekt speichert die übergebenen Argumente und kann entscheiden, einen Teil der Datenbank zwischenzuspeichern, sodass zukünftige `format`-Aufrufe innerhalb eines eingeschränkteren Kontextes suchen können.

{{InteractiveExample("JavaScript Demo: Number.toLocaleString()")}}

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

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützen, entsprechen diese Parameter exakt den Parametern des [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)-Konstruktors. Implementierungen ohne Unterstützung für `Intl.NumberFormat` ignorieren beide Parameter, sodass die verwendete Sprache und die Form der zurückgegebenen Zeichenkette vollständig von der jeweiligen Implementierung abhängen.

- `locales` {{optional_inline}}

  - : Eine Zeichenkette mit einem BCP 47-Sprach-Tag oder ein Array solcher Zeichenketten. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales)-Parameter des `Intl.NumberFormat()`-Konstruktors.

    In Implementierungen ohne Unterstützung für `Intl.NumberFormat` wird dieser Parameter ignoriert und normalerweise die Sprache des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das die Ausgabeform anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options)-Parameter des `Intl.NumberFormat()`-Konstruktors.

    In Implementierungen ohne Unterstützung für `Intl.NumberFormat` wird dieser Parameter ignoriert.

Details zu diesen Parametern und deren Verwendung finden Sie im [`Intl.NumberFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat).

### Rückgabewert

Eine Zeichenkette, die die gegebene Nummer gemäß den sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.NumberFormat` entspricht dies `new Intl.NumberFormat(locales, options).format(number)`.

> [!NOTE]
> Meistens ist die Formatierung, die von `toLocaleString()` zurückgegeben wird, konsistent. Allerdings kann die Ausgabe zwischen verschiedenen Implementierungen variieren, sogar innerhalb derselben Sprache — solche Variationen sind beabsichtigt und durch die Spezifikation erlaubt. Es könnte auch nicht das sein, was Sie erwarten. Beispielsweise könnte die Zeichenkette geschützte Leerzeichen oder bidirektionale Steuerzeichen enthalten. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundsätzliche Verwendung dieser Methode ohne Angabe einer `locale` gibt eine formatierte Zeichenkette in der Standard-Lokale und mit Standardoptionen zurück.

```js
const number = 3500;

console.log(number.toLocaleString()); // "3,500" if in U.S. English locale
```

### Überprüfen der Unterstützung für die Parameter locales und options

Die Parameter `locales` und `options` werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung der Internationalisierungs-API optional ist und einige Systeme nicht über die erforderlichen Daten verfügen. Bei Implementierungen ohne Unterstützung für Internationalisierung verwendet `toLocaleString()` immer die Sprache des Systems, was möglicherweise nicht das gewünschte Ergebnis ist. Da jede Implementierung, die die Parameter `locales` und `options` unterstützt, auch die {{jsxref("Intl")}}-API unterstützen muss, können Sie deren Existenz überprüfen, um die Unterstützung sicherzustellen:

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

Dieses Beispiel zeigt einige der Variationen in lokalisierten Zahlenformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ersatzsprachen) mit dem Argument `locales` angeben:

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

Die von `toLocaleString()` bereitgestellten Ergebnisse können mit dem Parameter `options` angepasst werden:

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
