---
title: Intl.DurationFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat
l10n:
  sourceCommit: c420b9b3126451f53d112afe33e007d6efdb605d
---

{{JSRef}}

Das **`Intl.DurationFormat`**-Objekt ermöglicht die sprachsensitive Formatierung von Zeitspannen.

## Konstruktor

- {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat()")}}
  - : Erstellt ein neues `Intl.DurationFormat`-Objekt.

## Statische Methoden

- {{jsxref("Intl/DurationFormat/supportedLocalesOf", "Intl.DurationFormat.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das diejenigen der bereitgestellten Locale enthält, die unterstützt werden, ohne auf die standardmäßige Locale der Laufzeitumgebung zurückfallen zu müssen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.DurationFormat.prototype` definiert und werden von allen `Intl.DurationFormat`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.DurationFormat.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.DurationFormat`-Instanzen ist der Anfangswert der {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat")}}-Konstruktor.
- `Intl.DurationFormat.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.DurationFormat"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/DurationFormat/format", "Intl.DurationFormat.prototype.format()")}}
  - : Getter-Funktion, die eine Zeitspanne gemäß der Locale und den Formatierungsoptionen dieses `DurationFormat`-Objekts formatiert.
- {{jsxref("Intl/DurationFormat/formatToParts", "Intl.DurationFormat.prototype.formatToParts()")}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, die die formatierte Zeitspanne in Teilen darstellen.
- {{jsxref("Intl/DurationFormat/resolvedOptions", "Intl.DurationFormat.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die Locale und Formatierungsoptionen widerspiegeln, die während der Initialisierung des Objekts berechnet wurden.

## Beispiele

### Verwendung von Intl.DurationFormat

Die untenstehenden Beispiele zeigen, wie das `Intl.DurationFormat`-Objekt verwendet wird, um ein Zeitspanne-Objekt mit verschiedenen Locales und Stilen zu formatieren.

```js
const duration = {
  hours: 1,
  minutes: 46,
  seconds: 40,
};

// With style set to "long" and locale "fr-FR"
new Intl.DurationFormat("fr-FR", { style: "long" }).format(duration);
// "1 heure, 46 minutes et 40 secondes"

// With style set to "short" and locale "en"
new Intl.DurationFormat("en", { style: "short" }).format(duration);
// "1 hr, 46 min and 40 sec"

// With style set to "narrow" and locale "pt"
new Intl.DurationFormat("pt", { style: "narrow" }).format(duration);
// "1h 46min 40s"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.DurationFormat` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-durationformat/)
- {{jsxref("Intl")}}
