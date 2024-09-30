---
title: Intl.DurationFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/format
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{JSRef}}

Die **`format()`** Methode von {{jsxref("Intl.DurationFormat")}} Instanzen formatiert eine Dauer gemäß der Lokalisierung und den Formatierungsoptionen dieses {{jsxref("Intl.DurationFormat")}} Objekts.

## Syntax

```js-nolint
format(duration)
```

### Parameter

- `duration`
  - : Das zu formatierende Dauerobjekt. Es sollte einige oder alle der folgenden Eigenschaften enthalten: `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`.

### Rückgabewert

Ein String, der die gegebene `duration` gemäß der Lokalisierung und den Formatierungsoptionen dieses {{jsxref("Intl.DurationFormat")}} Objekts formatiert darstellt.

> [!NOTE]
> Meistens ist die von `format()` zurückgegebene Formatierung konsistent. Jedoch kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Lokalisierung — solche Abweichungen sind durch das Design erlaubt und von der Spezifikation zugelassen. Es könnte auch nicht das sein, was Sie erwarten. Zum Beispiel kann die Zeichenfolge nicht trennende Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest kodierten Konstanten vergleichen.

## Beispiele

### Verwendung von format()

Das folgende Beispiel zeigt, wie man einen Duration-Formatter mit der englischen Sprache erstellt.

```js
const duration = {
  years: 1,
  months: 2,
  weeks: 3,
  days: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7,
  microseconds: 8,
  nanoseconds: 9,
};

// Without options, style defaults to "short"
new Intl.DurationFormat("en").format(duration);
// "1 yr, 2 mths, 3 wks, 3 days, 4 hr, 5 min, 6 sec, 7 ms, 8 μs, 9 ns"

// With style set to "long"
new Intl.DurationFormat("en", { style: "long" }).format(duration);
// "1 year, 2 months, 3 weeks, 3 days, 4 hours, 5 minutes, 6 seconds, 7 milliseconds, 8 microseconds, 9 nanoseconds"

// With style set to "narrow"
new Intl.DurationFormat("en", { style: "narrow" }).format(duration);
// "1y 2mo 3w 3d 4h 5m 6s 7ms 8μs 9ns"
```

### Verwendung von format() mit verschiedenen Lokalisierungen und Stilen

```js
const duration = {
  hours: 1,
  minutes: 46,
  seconds: 40,
};

// With style set to "long" and locale "fr-FR"
new Intl.DurationFormat("fr-FR", { style: "long" }).format(duration);
// "1 heure, 46 minutes et 40 secondes"

// With style set to "short" and locale set to "en"
new Intl.DurationFormat("en", { style: "short" }).format(duration);
// "1 hr, 46 min and 40 sec"

// With style set to "short" and locale set to "pt"
new Intl.DurationFormat("pt", { style: "narrow" }).format(duration);
// "1h 46min 40s"

// With style set to "digital" and locale set to "en"
new Intl.DurationFormat("en", { style: "digital" }).format(duration);
// "1:46:40"

// With style set to "digital", locale set to "en", and hours set to "long"
new Intl.DurationFormat("en", { style: "digital", hours: "long" }).format(
  duration,
);
// "1 hour, 46:40"
```

### Verwendung von format() mit der Option fractionalDigits

```js
const duration = {
  hours: 11,
  minutes: 30,
  seconds: 12,
  milliseconds: 345,
  microseconds: 600,
};

new Intl.DurationFormat("en", { style: "digital" }).format(duration);
// "11:30:12.3456"

new Intl.DurationFormat("en", { style: "digital", fractionalDigits: 5 }).format(
  duration,
);
// "11:30:12.34560"

new Intl.DurationFormat("en", { style: "digital", fractionalDigits: 3 }).format(
  duration,
);
// "11:30:12.346"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
