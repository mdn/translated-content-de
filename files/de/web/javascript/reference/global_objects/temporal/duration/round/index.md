---
title: Temporal.Duration.prototype.round()
short-title: round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`round()`**-Methode von {{jsxref("Temporal.Duration")}}-Instanzen gibt ein neues `Temporal.Duration`-Objekt zurück, bei dem die Dauer auf die angegebene kleinste Einheit gerundet und/oder [ausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) zur angegebenen größten Einheit ist.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameter

- `smallestUnit`
  - : Ein String, der die [`smallestUnit`](#smallestunit_2)-Option darstellt. Dies ist eine Komfortüberladung, sodass `round(smallestUnit)` gleichbedeutend ist mit `round({ smallestUnit })`, wobei `smallestUnit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `largestUnit` {{optional_inline}}
      - : Eine der temporalen Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder deren Singularformen, oder der Wert `"auto"`, was bedeutet, dass die größte nicht-null Komponente dieser Dauer oder `smallestUnit`, je nachdem was größer ist. Standard ist `"auto"`. Das Ergebnis wird keine Einheiten enthalten, die größer als diese sind; zum Beispiel, wenn die größte Einheit `"minutes"` ist, wird "1 hour 30 minutes" zu "90 minutes".
    - `relativeTo` {{optional_inline}}
      - : Ein zoniertes oder einfaches Datum (Uhrzeit), das die Zeit- und Kalenderinformationen bereitstellt, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) zu lösen (siehe die Verlinkung für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `this` oder `other` eine Kalenderdauer ist oder `smallestUnit` eine Kalendereinheit ist.
    - `roundingIncrement` {{optional_inline}}
      - : Eine Zahl (auf eine ganze Zahl gekürzt), die das Rundungsinkrement in der angegebenen `smallestUnit` darstellt. Standard ist `1`. Muss im Bereich von 1 bis 1e9 liegen. Wenn die kleinste Einheit Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden oder Nanosekunden ist, muss das Inkrement ein Teiler des Maximalwertes der Einheit sein; zum Beispiel, wenn die Einheit Stunden ist, muss das Inkrement ein Teiler von 24 sein und darf nicht 24 selbst sein, was bedeutet, dass es 1, 2, 3, 4, 6, 8 oder 12 sein kann.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der den Rundungsmodus darstellt, und angibt, ob in verschiedenen Szenarien auf- oder abgerundet werden soll. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standard ist `"halfExpand"`.
    - `smallestUnit` {{optional_inline}}
      - : Eine der temporalen Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder deren Singularformen. Standard ist `"nanoseconds"`. Für Einheiten größer als `"nanoseconds"` werden die Bruchteile der `smallestUnit` gemäß den `roundingIncrement`- und `roundingMode`-Einstellungen gerundet. Muss kleiner oder gleich `largestUnit` sein. Mindestens eine von `smallestUnit` und `largestUnit` muss angegeben werden.

### Rückgabewert

Ein neues `Temporal.Duration`-Objekt, bei dem die größte Einheit nicht größer ist als die `largestUnit`-Option und die kleinste Einheit nicht kleiner ist als die `smallestUnit`-Option. Die Bruchteile der `smallestUnit` werden gemäß den `roundingIncrement`- und `roundingMode`-Einstellungen gerundet.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beschreibung

Die `round()`-Methode führt zwei Operationen durch: Runden und Ausgleichen. Sie führt Folgendes aus:

1. Sie stellt sicher, dass die Dauer ausgeglichen ist. Wenn eine Komponente über ihrem bevorzugten Maximum liegt (24 Stunden pro Tag, 60 Minuten pro Stunde usw.), wird das Übermaß auf die nächste größere Einheit übertragen, bis wir `largestUnit` erreichen. Zum Beispiel wird "24 hours 90 minutes" zu "25 hours 30 minutes" wenn `largestUnit` `"auto"` ist, und "1 day 1 hour 30 minutes" wenn `largestUnit` `"days"` ist.
2. Für alle Komponenten, die größer sind als `largestUnit`, werden sie in `largestUnit` heruntergetragen; zum Beispiel wird "2 hours 30 minutes" zu "150 minutes" wenn `largestUnit` `"minutes"` ist.
3. Für alle Komponenten, die kleiner sind als `smallestUnit`, werden sie in `smallestUnit` als Bruchteil hochgetragen und dann gemäß den `roundingIncrement`- und `roundingMode`-Einstellungen gerundet. Zum Beispiel wird "1 hour 30 minutes" zu "1.5 hours", wenn `smallestUnit` `"hours"` ist, und dann auf "2 hours" mit den Standardeinstellungen gerundet.

[Kalendereinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) haben ungleiche Längen. Ihre Längen werden relativ zu einem Startpunkt aufgelöst. Zum Beispiel kann eine Dauer von "2 years" im gregorianischen Kalender 730 Tage oder 731 Tage lang sein, abhängig davon, ob sie durch ein Schaltjahr geht oder nicht. Wenn auf eine Kalendereinheit gerundet wird, erhalten wir zuerst das genaue Datum-Zeit, das durch `relativeTo + duration` dargestellt wird, runden es dann herunter und hinauf gemäß `smallestUnit` und `roundingIncrement`, um zwei Kandidaten zu erhalten. Dann wählen wir den Kandidaten gemäß der Einstellung `roundingMode` aus und ziehen schließlich `relativeTo` ab, um die endgültige Dauer zu erhalten.

## Beispiele

### Abrunden von kleinen Einheiten

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

### Runden auf eine ganze Zahl von Stunden

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

### Auflösung von Kalenderdauern

Wenn sowohl die anfängliche Dauer als auch die größte/kleinste Einheit eine Kalendereinheit enthält, müssen Sie eine `relativeTo`-Option angeben, um die Kalenderdauern aufzulösen.

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
