---
title: Intl.DurationFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/format
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`format()`** von {{jsxref("Intl.DurationFormat")}}-Instanzen formatiert eine Zeitdauer gemäß dem Gebietsschema und den Formatierungsoptionen dieses {{jsxref("Intl.DurationFormat")}}-Objekts.

## Syntax

```js-nolint
format(duration)
```

### Parameter

- `duration`
  - : Das zu formatierende Zeitdauer-Objekt. Es sollte einige oder alle der folgenden Eigenschaften enthalten: `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`. Der Wert jeder Eigenschaft sollte eine Ganzzahl sein, und die Vorzeichen sollten übereinstimmen. Es kann sich um ein {{jsxref("Temporal.Duration")}}-Objekt handeln. Weitere Informationen zu diesen Eigenschaften finden Sie in der Dokumentation zu {{jsxref("Temporal.Duration")}}.

### Rückgabewert

Ein String, der die angegebene `duration` gemäß dem Gebietsschema und den Formatierungsoptionen dieses {{jsxref("Intl.DurationFormat")}}-Objekts darstellt.

> [!NOTE]
> Meistens ist die von `format()` zurückgegebene Formatierung konsistent. Die Ausgabe kann jedoch zwischen Implementierungen variieren, selbst innerhalb desselben Gebietsschemas – solche Unterschiede sind beabsichtigt und laut Spezifikation zulässig. Die Ausgabe entspricht möglicherweise auch nicht Ihren Erwartungen. Beispielsweise kann der String geschützte Leerzeichen enthalten oder von bidirektionalen Steuerzeichen umgeben sein. Vergleichen Sie die Ergebnisse von `format()` nicht mit fest codierten Konstanten.

## Beispiele

### format() verwenden

Das folgende Beispiel zeigt, wie Sie einen Formatter für Zeitdauern mit Englisch als Sprache erstellen.

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

### format() mit verschiedenen Gebietsschemas und Stilen verwenden

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

// With style set to "narrow" and locale set to "pt"
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

### format() mit der Option fractionalDigits verwenden

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
// "11:30:12.345"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Temporal.Duration")}}
