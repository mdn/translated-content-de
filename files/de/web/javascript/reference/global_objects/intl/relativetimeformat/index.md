---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das Objekt **`Intl.RelativeTimeFormat`** ermöglicht sprachsensitives Formatieren relativer Zeitangaben.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat.html")}}

## Konstruktor

- {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}}
  - : Erstellt ein neues `Intl.RelativeTimeFormat`-Objekt.

## Statische Methoden

- {{jsxref("Intl/RelativeTimeFormat/supportedLocalesOf", "Intl.RelativeTimeFormat.supportedLocalesOf()")}}
  - : Gibt ein Array mit denjenigen der bereitgestellten Lokalitäten zurück, die unterstützt werden, ohne auf die Standardlokalität der Laufzeitumgebung zurückgreifen zu müssen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.RelativeTimeFormat.prototype` definiert und werden von allen `Intl.RelativeTimeFormat`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.RelativeTimeFormat.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.RelativeTimeFormat`-Instanzen ist der Anfangswert der {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}-Konstruktor.
- `Intl.RelativeTimeFormat.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.RelativeTimeFormat"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/RelativeTimeFormat/format", "Intl.RelativeTimeFormat.prototype.format()")}}
  - : Formatiert einen `value` und eine `unit` entsprechend der Lokale und der Formatierungsoptionen des gegebenen `Intl.RelativeTimeFormat`-Objekts.
- {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.prototype.formatToParts()")}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, das die relative Zeitformatierung in Teilen repräsentiert, die für eine benutzerdefinierte lokalisierungsbewusste Formatierung verwendet werden können.
- {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die bei der Initialisierung des Objekts berechneten Lokale und Formatierungsoptionen widerspiegeln.

## Beispiele

### Grundlegende Formatverwendung

Das folgende Beispiel zeigt, wie ein Zeitformatierer für die englische Sprache verwendet wird.

```js
// Erstellen Sie einen relativen Zeitformatierer in Ihrer Lokale
// mit explizit übergebenen Standardwerten.
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // andere Werte: "lookup"
  numeric: "always", // andere Werte: "auto"
  style: "long", // andere Werte: "short" oder "narrow"
});

// Relativen Zeitwert mit negativem Wert (-1) formatieren.
rtf.format(-1, "day"); // "1 day ago"

// Relativen Zeitwert mit positivem Wert (1) formatieren.
rtf.format(1, "day"); // "in 1 day"
```

### Verwendung von formatToParts

Das folgende Beispiel zeigt, wie ein relativer Zeitformatierer erstellt wird, der formatierte Teile zurückgibt.

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Relativen Zeitwert mit der Einheit "day" formatieren.
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
