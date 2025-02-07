---
title: Temporal.Duration.prototype.round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round
l10n:
  sourceCommit: 262c13dcbcd394beddd98e07d9c78bc79ce3513c
---

{{JSRef}}{{SeeCompatTable}}

Die Methode **`round()`** von Instanzen des Objekts {{jsxref("Temporal.Duration")}} gibt ein neues `Temporal.Duration`-Objekt zurück, bei dem die Dauer auf die angegebene kleinste Einheit gerundet und/oder [ausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) auf die angegebene größte Einheit wird.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameter

- `smallestUnit`
  - : Ein Zeichenfolgenwert, der die [`smallestUnit`](#smallestunit_2)-Option darstellt. Dies ist eine bequeme Überladung, sodass `round(smallestUnit)` gleichwertig ist mit `round({ smallestUnit })`, wobei `smallestUnit` eine Zeichenfolge ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `largestUnit` {{optional_inline}}
      - : Jede der temporalen Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder ihre Singularformen, oder der Wert `"auto"`, was bedeutet, dass die größte nicht-null-Komponente dieser Dauer oder `smallestUnit` verwendet wird, je nachdem, welche größer ist. Standard ist `"auto"`. Das Ergebnis enthält keine Einheiten, die größer sind als diese; beispielsweise wird bei der größten Einheit `"minutes"` "1 hour 30 minutes" zu "90 minutes".
    - `relativeTo` {{optional_inline}}
      - : Ein ortsbezogenes oder schlichtes Datum (Zeit), das die Zeit- und Kalenderinformationen liefert, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) aufzulösen (siehe den Link für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `this` oder `other` eine Kalenderdauer ist oder `smallestUnit` eine Kalendereinheit ist.
    - `roundingIncrement` {{optional_inline}}
      - : Eine Zahl (auf eine Ganzzahl abgerundet), die das Rundungsinkrement in der angegebenen `smallestUnit` darstellt. Standard ist `1`. Muss im einschließlich Bereich von 1 bis 1e9 liegen. Wenn die kleinste Einheit Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden oder Nanosekunden ist, muss das Inkrement ein Teiler des Maximalwerts der Einheit sein; beispielsweise, wenn die Einheit Stunden ist, muss das Inkrement ein Teiler von 24 sein und darf nicht 24 selbst sein, was bedeutet, es kann 1, 2, 3, 4, 6, 8 oder 12 sein.
    - `roundingMode` {{optional_inline}}
      - : Eine Zeichenfolge, die die Rundungsart angibt, um in verschiedenen Szenarien auf- oder abzurunden. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standard ist `"halfExpand"`.
    - `smallestUnit` {{optional_inline}}
      - : Jede der temporalen Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder ihre Singularformen. Standard ist `"nanoseconds"`. Für Einheiten größer als `"nanoseconds"` werden Bruchteile der `smallestUnit` entsprechend den Einstellungen von `roundingIncrement` und `roundingMode` gerundet. Muss kleiner oder gleich `largestUnit` sein. Mindestens eine der Angabe `smallestUnit` und `largestUnit` muss bereitgestellt sein.

### Rückgabewert

Ein neues `Temporal.Duration`-Objekt, bei dem die größte Einheit nicht größer ist als die Option `largestUnit` und die kleinste Einheit nicht kleiner ist als die Option `smallestUnit`. Die Bruchteile der `smallestUnit` werden entsprechend den Einstellungen von `roundingIncrement` und `roundingMode` gerundet.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beschreibung

Die Methode `round()` führt zwei Operationen aus: Rundung und Ausgleich. Es erfolgt folgendes:

1. Die Dauer wird ausgeglichen. Wenn eine Komponente über ihrem bevorzugten Maximum liegt (zum Beispiel 24 Stunden pro Tag, 60 Minuten pro Stunde usw.), wird der Überschuss zur nächsten größeren Einheit weitergetragen, bis wir `largestUnit` erreichen. Zum Beispiel wird "24 Stunden 90 Minuten" zu "25 Stunden 30 Minuten", wenn `largestUnit` `"auto"` ist, und zu "1 Tag 1 Stunde 30 Minuten", wenn `largestUnit` `"days"` ist.
2. Alle Komponenten größer als `largestUnit` werden in `largestUnit` heruntergetragen; zum Beispiel wird "2 Stunden 30 Minuten" zu "150 Minuten", wenn `largestUnit` `"minutes"` ist.
3. Alle Komponenten kleiner als `smallestUnit` werden in `smallestUnit` als Bruchteil hochgetragen und dann entsprechend den Einstellungen von `roundingIncrement` und `roundingMode` gerundet. Zum Beispiel wird "1 Stunde 30 Minuten" zu "1.5 Stunden", wenn `smallestUnit` `"hours"` ist, und dann mit den Standardeinstellungen auf "2 Stunden" gerundet.

[Kalendereinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_units) haben unregelmäßige Längen. Ihre Längen werden relativ zu einem Ausgangspunkt aufgelöst. Zum Beispiel kann eine Dauer von "2 Jahren" im gregorianischen Kalender 730 oder 731 Tage lang sein, abhängig davon, ob ein Schaltjahr durchlaufen wird oder nicht. Beim Runden auf eine Kalendereinheit erhalten wir zunächst die exakte Datum-Zeit, die durch `relativeTo + duration` dargestellt wird, dann runden wir sie gemäß `smallestUnit` und `roundingIncrement` nach unten und oben, um zwei Kandidaten zu erhalten. Dann wählen wir den Kandidaten gemäß der Einstellung `roundingMode` aus und ziehen schließlich `relativeTo` ab, um die endgültige Dauer zu erhalten.

## Beispiele

### Abrundung kleiner Einheiten

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const roundedDuration = duration.round("minutes");
console.log(roundedDuration.toString()); // "PT1H30M"
```

### Vermeidung größerer Einheiten

```js
const duration = Temporal.Duration.from({
  days: 3,
  hours: 1,
  minutes: 41,
  seconds: 5,
});
const roundedDuration = duration.round({ largestUnit: "hours" });
console.log(
  `Time spent on this problem: ${roundedDuration.toLocaleString("en-US", { style: "digital" })}`,
);
// Time spent on this problem: 73:41:05
```

### Rundung auf ganze Stunden

```js
const duration = Temporal.Duration.from({ days: 1, hours: 1, minutes: 30 });
const roundedDuration = duration.round({
  largestUnit: "hours",
  smallestUnit: "hours",
  roundingMode: "floor",
});
console.log(roundedDuration.hours); // 25
```

### Rundung mit 15-Minuten-Inkrementen

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 17 });
const roundedDuration = duration.round({
  smallestUnit: "minutes",
  roundingIncrement: 15,
});
console.log(
  `The queue will take approximately ${roundedDuration.toLocaleString("en-US")}`,
);
// The queue will take approximately 1 hr, 15 min
```

### Auflösung von Kalenderdauern

Wenn entweder die ursprüngliche Dauer oder die größte/kleinste Einheit eine Kalendereinheit enthält, müssen Sie eine `relativeTo`-Option bereitstellen, um die Kalenderdauern aufzulösen.

```js
const duration = Temporal.Duration.from({ months: 1, days: 1, hours: 1 });
const roundedDuration = duration.round({
  largestUnit: "days",
  smallestUnit: "days",
  relativeTo: Temporal.PlainDateTime.from("2022-01-01"),
});
console.log(roundedDuration); // "P32D"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}}
