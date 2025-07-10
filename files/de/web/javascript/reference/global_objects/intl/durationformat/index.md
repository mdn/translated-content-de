---
title: Intl.DurationFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`Intl.DurationFormat`**-Objekt ermöglicht die sprachsensitive Formatierung von Zeitdauern.

## Konstruktor

- {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat()")}}
  - : Erstellt ein neues `Intl.DurationFormat`-Objekt.

## Statische Methoden

- {{jsxref("Intl/DurationFormat/supportedLocalesOf", "Intl.DurationFormat.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das die der angegebenen Lokalisierungen enthält, die unterstützt werden, ohne auf die Standard-Lokalisierung der Laufzeitumgebung zurückgreifen zu müssen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.DurationFormat.prototype` definiert und werden von allen `Intl.DurationFormat`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.DurationFormat.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.DurationFormat`-Instanzen ist der Anfangswert der {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat")}}-Konstruktor.
- `Intl.DurationFormat.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.DurationFormat"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/DurationFormat/format", "Intl.DurationFormat.prototype.format()")}}
  - : Getter-Funktion, die eine Dauer gemäß der Lokalisierung und den Formatierungsoptionen dieses `DurationFormat`-Objekts formatiert.
- {{jsxref("Intl/DurationFormat/formatToParts", "Intl.DurationFormat.prototype.formatToParts()")}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, die die formatierte Dauer in Teilen darstellen.
- {{jsxref("Intl/DurationFormat/resolvedOptions", "Intl.DurationFormat.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die bei der Initialisierung des Objekts ermittelten Lokalisierungs- und Formatierungsoptionen widerspiegeln.

## Beispiele

### Verwendung von Intl.DurationFormat

Die folgenden Beispiele zeigen, wie Sie das `Intl.DurationFormat`-Objekt verwenden, um ein Dauerobjekt mit verschiedenen Lokalisierungen und Stilen zu formatieren.

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
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
