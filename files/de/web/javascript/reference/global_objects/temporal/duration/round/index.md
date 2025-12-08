---
title: Temporal.Duration.prototype.round()
short-title: round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`round()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen gibt ein neues `Temporal.Duration` Objekt zurück, bei dem die Dauer auf die angegebene kleinste Einheit gerundet und/oder bis zur angegebenen größten Einheit [ausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) wird.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameter

- `smallestUnit`
  - : Ein Zeichenfolgenwert, der die [`smallestUnit`](#smallestunit_2) Option darstellt. Dies ist eine praktische Überladung, sodass `round(smallestUnit)` gleichbedeutend mit `round({ smallestUnit })` ist, wobei `smallestUnit` eine Zeichenfolge ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `largestUnit` {{optional_inline}}
      - : Eine der temporalen Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder deren Singularformen, oder der Wert `"auto"`, was bedeutet, die größte nicht-null Komponente dieser Dauer oder `smallestUnit`, je nachdem, was größer ist. Standardmäßig `"auto"`. Das Ergebnis wird keine Einheiten größer als diese enthalten; zum Beispiel wird, wenn die größte Einheit `"minutes"` ist, "1 hour 30 minutes" zu "90 minutes".
    - `relativeTo` {{optional_inline}}
      - : Ein zoniert oder einfaches Datum (Uhrzeit) das die Zeit- und Kalenderinformationen bereitstellt, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) aufzulösen (siehe den Link für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `this` oder `other` eine Kalenderdauer ist, oder `smallestUnit` eine Kalendereinheit ist.
    - `roundingIncrement` {{optional_inline}}
      - : Eine Zahl (abgerundet auf eine ganze Zahl), die das Rundungsinkrement in der angegebenen `smallestUnit` darstellt. Standardmäßig `1`. Muss im inklusiven Bereich von 1 bis 1e9 liegen. Wenn die kleinste Einheit Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden oder Nanosekunden ist, muss das Inkrement ein Teiler des Maximalwerts der Einheit sein; wenn die Einheit zum Beispiel Stunden ist, muss das Inkrement ein Teiler von 24 sein und darf nicht 24 selbst sein, was bedeutet, dass es 1, 2, 3, 4, 6, 8 oder 12 sein kann.
    - `roundingMode` {{optional_inline}}
      - : Ein Zeichenfolgenwert, der die Rundungsweise angibt und beschreibt, ob in verschiedenen Szenarien auf- oder abgerundet werden soll. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardmäßig `"halfExpand"`.
    - `smallestUnit` {{optional_inline}}
      - : Eine der temporalen Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder deren Singularformen. Standardmäßig `"nanoseconds"`. Für Einheiten größer als `"nanoseconds"` werden die Bruchteile der `smallestUnit` gemäß den `roundingIncrement` und `roundingMode` Einstellungen gerundet. Muss kleiner oder gleich `largestUnit` sein. Mindestens eine der `smallestUnit` und `largestUnit` muss angegeben werden.

### Rückgabewert

Ein neues `Temporal.Duration` Objekt, bei dem die größte Einheit nicht größer ist als die `largestUnit` Option, und die kleinste Einheit nicht kleiner ist als die `smallestUnit` Option. Die Bruchteile der `smallestUnit` werden gemäß den `roundingIncrement` und `roundingMode` Einstellungen gerundet.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beschreibung

Die `round()` Methode führt zwei Operationen aus: Rundung und Ausgleich. Sie tut Folgendes:

1. Sie stellt sicher, dass die Dauer ausgeglichen ist. Wenn eine Komponente über ihrem bevorzugten Maximum liegt (24 Stunden pro Tag, 60 Minuten pro Stunde, usw.), wird der Überschuss auf die nächste größere Einheit übertragen, bis wir `largestUnit` erreichen. Zum Beispiel wird "24 hours 90 minutes" zu "25 hours 30 minutes", wenn `largestUnit` `"auto"` ist, und zu "1 day 1 hour 30 minutes", wenn `largestUnit` `"days"` ist.
2. Für alle Komponenten, die größer sind als `largestUnit`, werden sie in `largestUnit` heruntergebrochen; zum Beispiel wird "2 hours 30 minutes" zu "150 minutes", wenn `largestUnit` `"minutes"` ist.
3. Für alle Komponenten, die kleiner als `smallestUnit` sind, werden sie in `smallestUnit` als Bruchteil hochgezogen und dann gemäß den `roundingIncrement` und `roundingMode` Einstellungen gerundet. Zum Beispiel wird "1 hour 30 minutes" zu "1.5 hours", wenn `smallestUnit` `"hours"` ist, und dann mit den Standard-Einstellungen auf "2 hours" gerundet.

[Kalendereinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) haben ungleichmäßige Längen. Ihre Längen werden relativ zu einem Ausgangspunkt aufgelöst. Zum Beispiel kann eine Dauer von "2 years" im gregorianischen Kalender 730 oder 731 Tage lang sein, abhängig davon, ob sie ein Schaltjahr durchläuft oder nicht. Beim Runden auf eine Kalendereinheit erhalten wir zuerst das genaue Datum und die Zeit, dargestellt durch `relativeTo + duration`, dann runden wir es nach unten und oben gemäß `smallestUnit` und `roundingIncrement`, um zwei Kandidaten zu erhalten. Anschließend wählen wir den Kandidaten gemäß den `roundingMode` Einstellungen, und subtrahieren schließlich `relativeTo`, um die endgültige Dauer zu erhalten.

## Beispiele

### Abrunden kleiner Einheiten

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

### Rundung auf eine ganze Anzahl von Stunden

```js
const duration = Temporal.Duration.from({ days: 1, hours: 1, minutes: 30 });
const roundedDuration = duration.round({
  largestUnit: "hours",
  smallestUnit: "hours",
  roundingMode: "floor",
});
console.log(roundedDuration.hours); // 25
```

### Rundung in 15-Minuten-Schritten

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

### Auflösung von Kalendertimer

Wenn entweder die anfängliche Dauer oder die größte/kleinste Einheit eine Kalendereinheit enthält, müssen Sie eine `relativeTo` Option bereitstellen, um die Kalendertimer aufzulösen.

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
