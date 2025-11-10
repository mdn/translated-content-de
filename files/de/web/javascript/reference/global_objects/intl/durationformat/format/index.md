---
title: Intl.DurationFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/format
l10n:
  sourceCommit: c43e46090257fbfd33c4dd5cac0cdbd1d5d1c274
---

Die **`format()`** Methode von {{jsxref("Intl.DurationFormat")}} Instanzen formatiert eine Dauer entsprechend der Lokalisierung und den Formatierungsoptionen dieses {{jsxref("Intl.DurationFormat")}} Objekts.

## Syntax

```js-nolint
format(duration)
```

### Parameter

- `duration`
  - : Das zu formatierende Dauerobjekt. Es sollte einige oder alle der folgenden Eigenschaften enthalten: `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`. Der Wert jeder Eigenschaft sollte eine ganze Zahl sein, und ihre Vorzeichen sollten konsistent sein. Dies kann ein {{jsxref("Temporal.Duration")}} Objekt sein; sehen Sie in der {{jsxref("Temporal.Duration")}} Dokumentation nach, um mehr über diese Eigenschaften zu erfahren.

### Rückgabewert

Ein String, der die angegebene `duration` gemäß der Lokalisierung und den Formatierungsoptionen dieses {{jsxref("Intl.DurationFormat")}} Objekts formatiert darstellt.

> [!NOTE]
> Die vom `format()` zurückgegebene Formatierung ist meistens konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, sogar innerhalb derselben Lokalisierung — solche Abweichungen sind beabsichtigt und von der Spezifikation erlaubt. Die Ausgabe entspricht möglicherweise auch nicht Ihren Erwartungen. Zum Beispiel könnte der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest kodierten Konstanten vergleichen.

## Beispiele

### Verwendung von format()

Das folgende Beispiel zeigt, wie ein Dauerformatter mit der englischen Sprache erstellt wird.

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

### Verwendung von format() mit unterschiedlichen Lokalisierungen und Stilen

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
// "1 h 46 min 40 s"

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
- {{jsxref("Temporal.Duration")}}
