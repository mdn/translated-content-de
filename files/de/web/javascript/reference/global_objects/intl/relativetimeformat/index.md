---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`Intl.RelativeTimeFormat`**-Objekt ermöglicht die sprachsensitive relative Zeitformatierung.

{{InteractiveExample("JavaScript Demo: Intl.RelativeTimeFormat")}}

```js interactive-example
const rtf1 = new Intl.RelativeTimeFormat("en", { style: "short" });

console.log(rtf1.format(3, "quarter"));
// Expected output: "in 3 qtrs."

console.log(rtf1.format(-1, "day"));
// Expected output: "1 day ago"

const rtf2 = new Intl.RelativeTimeFormat("es", { numeric: "auto" });

console.log(rtf2.format(2, "day"));
// Expected output: "pasado mañana"
```

## Konstruktor

- {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}}
  - : Erstellt ein neues `Intl.RelativeTimeFormat`-Objekt.

## Statische Methoden

- {{jsxref("Intl/RelativeTimeFormat/supportedLocalesOf", "Intl.RelativeTimeFormat.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das die der angegebenen Locales enthält, die unterstützt werden, ohne auf die Standard-Locale der Laufzeitumgebung zurückgreifen zu müssen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.RelativeTimeFormat.prototype` definiert und werden von allen `Intl.RelativeTimeFormat`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.RelativeTimeFormat.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Intl.RelativeTimeFormat`-Instanzen ist der Anfangswert der {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}-Konstruktor.
- `Intl.RelativeTimeFormat.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.RelativeTimeFormat"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/RelativeTimeFormat/format", "Intl.RelativeTimeFormat.prototype.format()")}}
  - : Formatiert einen `value` und eine `unit` entsprechend der Locale und der Formatierungsoptionen des gegebenen `Intl.RelativeTimeFormat`-Objekts.
- {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.prototype.formatToParts()")}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, das das relative Zeitformat in Teilen repräsentiert, die für eine benutzerdefinierte locale-sensible Formatierung verwendet werden können.
- {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung des Objekts errechneten Locale- und Formatierungsoptionen widerspiegeln.

## Beispiele

### Grundlegende Verwendung des Formats

Das folgende Beispiel zeigt, wie ein relativer Zeitformatierer für die englische Sprache verwendet wird.

```js
// Create a relative time formatter in your locale
// with default values explicitly passed in.
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // other values: "lookup"
  numeric: "always", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "1 day ago"

// Format relative time using positive value (1).
rtf.format(1, "day"); // "in 1 day"
```

### Verwendung von formatToParts

Das folgende Beispiel zeigt, wie man einen relativen Zeitformatierer erstellt, der formatierte Teile zurückgibt.

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using the day unit.
rtf.formatToParts(-1, "day");
// [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// [
//   { type: "literal", value: "in " },
//   { type: "integer", value: "100", unit: "day" },
//   { type: "literal", value: " days" }
// ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.RelativeTimeFormat` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-relativetimeformat/)
- {{jsxref("Intl")}}
- [`Intl.RelativeTimeFormat`](https://v8.dev/features/intl-relativetimeformat) auf v8.dev (2018)
