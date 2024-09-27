---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Intl.RelativeTimeFormat`**-Objekt ermöglicht eine sprachensensitive Formatierung relativer Zeitangaben.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat.html")}}

## Konstruktor

- {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}}
  - : Erstellt ein neues `Intl.RelativeTimeFormat`-Objekt.

## Statische Methoden

- {{jsxref("Intl/RelativeTimeFormat/supportedLocalesOf", "Intl.RelativeTimeFormat.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das die der bereitgestellten Sprachen enthält, die unterstützt werden, ohne auf die Standardspracheumgebung des Laufzeitsystems zurückgreifen zu müssen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.RelativeTimeFormat.prototype` definiert und werden von allen `Intl.RelativeTimeFormat`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.RelativeTimeFormat.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanz-Objekt erstellt hat. Für `Intl.RelativeTimeFormat`-Instanzen ist der anfängliche Wert der {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}-Konstruktor.
- `Intl.RelativeTimeFormat.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.RelativeTimeFormat"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/RelativeTimeFormat/format", "Intl.RelativeTimeFormat.prototype.format()")}}
  - : Formatiert einen `value` und eine `unit` gemäß der Sprache und den Formatierungsoptionen des angegebenen `Intl.RelativeTimeFormat`-Objekts.
- {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.prototype.formatToParts()")}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, das das relative Zeitformat in Teilen darstellt, die für benutzerdefinierte, lokalbewusste Formatierungen verwendet werden können.
- {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die bei der Initialisierung des Objekts berechneten Sprachen und Formatierungsoptionen widerspiegeln.

## Beispiele

### Grundlegende Verwendung von format

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

- [Polyfill von `Intl.RelativeTimeFormat` in FormatJS](https://formatjs.io/docs/polyfills/intl-relativetimeformat/)
- {{jsxref("Intl")}}
- [`Intl.RelativeTimeFormat`](https://v8.dev/features/intl-relativetimeformat) auf v8.dev (2018)
