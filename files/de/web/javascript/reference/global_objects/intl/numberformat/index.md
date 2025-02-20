---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Das **`Intl.NumberFormat`**-Objekt ermöglicht sprachabhängige Zahlenformatierung.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat")}}

```js interactive-example
const number = 123456.789;

console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// Expected output: "123.456,79 €"

// The Japanese yen doesn't use a minor unit
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// Expected output: "￥123,457"

// Limit to three significant digits
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// Expected output: "1,23,000"
```

## Konstruktor

- {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
  - : Erstellt ein neues `NumberFormat`-Objekt.

## Statische Methoden

- {{jsxref("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : Gibt ein Array mit denjenigen der angegebenen Locales zurück, die unterstützt werden, ohne auf die Standard-Locale der Laufzeitumgebung zurückgreifen zu müssen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Intl.NumberFormat.prototype` definiert und werden von allen `Intl.NumberFormat`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.NumberFormat.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.NumberFormat`-Instanzen ist der ursprüngliche Wert der {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat")}}-Konstruktor.
- `Intl.NumberFormat.prototype[Symbol.toStringTag]`
  - : Der ursprüngliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.NumberFormat"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
  - : Getter-Funktion, die eine Zahl entsprechend der Locale und den Formatierungsoptionen dieses `Intl.NumberFormat`-Objekts formatiert.
- {{jsxref("Intl/NumberFormat/formatRange", "Intl.NumberFormat.prototype.formatRange()")}}
  - : Getter-Funktion, die einen Bereich von Zahlen entsprechend der Locale und den Formatierungsoptionen des `Intl.NumberFormat`-Objekts formatiert, von dem die Methode aufgerufen wird.
- {{jsxref("Intl/NumberFormat/formatRangeToParts", "Intl.NumberFormat.prototype.formatRangeToParts()")}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, das den Bereich der Zahlstrings in Teilen repräsentiert, die für benutzerdefinierte locale-abhängige Formatierung verwendet werden können.
- {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, das den Zahlstring in Teilen repräsentiert, die für benutzerdefinierte locale-abhängige Formatierung verwendet werden können.
- {{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die Locale- und Kollationsoptionen widerspiegeln, die während der Initialisierung des Objekts berechnet wurden.

## Beispiele

### Grundlegende Verwendung

Bei einfacher Verwendung ohne Angabe einer Locale wird ein formatierter String in der Standard-Locale und mit Standardoptionen zurückgegeben.

```js
const number = 3500;

console.log(new Intl.NumberFormat().format(number));
// '3,500' if in US English locale
```

### Verwendung von Locales

Dieses Beispiel zeigt einige der Variationen in lokalisierten Zahlenformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, geben Sie diese Sprache (und eventuell einige Fallback-Sprachen) mit dem `locales`-Argument an:

```js
const number = 123456.789;

// German uses comma as decimal separator and period for thousands
console.log(new Intl.NumberFormat("de-DE").format(number));
// 123.456,789

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(new Intl.NumberFormat("ar-EG").format(number));
// ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(new Intl.NumberFormat("en-IN").format(number));
// 1,23,456.789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(number));
// 一二三,四五六.七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(new Intl.NumberFormat(["ban", "id"]).format(number));
// 123.456,789
```

### Verwendung von Optionen

Die Ergebnisse können mit dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options)-Argument angepasst werden:

```js
const number = 123456.789;

// request a currency format
console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// ￥123,457

// limit to three significant digits
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// 1,23,000

// Formatting with units
console.log(
  new Intl.NumberFormat("pt-PT", {
    style: "unit",
    unit: "kilometer-per-hour",
  }).format(50),
);
// 50 km/h

console.log(
  (16).toLocaleString("en-GB", {
    style: "unit",
    unit: "liter",
    unitDisplay: "long",
  }),
);
// 16 litres
```

Für eine vollständige Liste der Optionen, siehe die Seite [`Intl.NumberFormat()` constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.NumberFormat` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-numberformat/)
- {{jsxref("Intl")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
