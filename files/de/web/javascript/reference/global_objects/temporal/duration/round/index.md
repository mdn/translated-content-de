---
title: Temporal.Duration.prototype.round()
short-title: round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`round()`** Methode von {{jsxref("Temporal.Duration")}}-Instanzen gibt ein neues `Temporal.Duration`-Objekt zurück, wobei die Dauer auf die angegebene kleinste Einheit gerundet und/oder [balanciert](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) zur angegebenen größten Einheit wird.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameter

- `smallestUnit`
  - : Ein String, der die [`smallestUnit`](#smallestunit_2) Option darstellt. Dies ist eine bequeme Überladung, sodass `round(smallestUnit)` äquivalent zu `round({ smallestUnit })` ist, wobei `smallestUnit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `largestUnit` {{optional_inline}}
      - : Einer der temporalen Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder deren Singularformen, oder der Wert `"auto"`, was bedeutet, dass die größte nicht-null Komponente dieser Dauer oder `smallestUnit`, je nachdem, welche größer ist. Standardmäßig `"auto"`. Das Ergebnis enthält keine Einheiten, die größer als dies sind; zum Beispiel, wenn die größte Einheit `"minutes"` ist, wird "1 hour 30 minutes" zu "90 minutes".
    - `relativeTo` {{optional_inline}}
      - : Ein zoniertes oder einfaches Datum(Uhrzeit), das Zeit- und Kalenderinformationen bereitstellt, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) zu lösen (siehe den Link für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `this` oder `other` eine Kalenderdauer ist, oder `smallestUnit` eine Kalender-Einheit ist.
    - `roundingIncrement` {{optional_inline}}
      - : Eine Zahl (auf eine Ganzzahl gekürzt), die das Rundungsinkrement in der angegebenen `smallestUnit` darstellt. Standardmäßig `1`. Muss im inklusiven Bereich von 1 bis 1e9 liegen. Wenn die kleinste Einheit Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden oder Nanosekunden ist, muss das Inkrement ein Teiler des Maximalwerts der Einheit sein; zum Beispiel, wenn die Einheit Stunden ist, muss das Inkrement ein Teiler von 24 sein und darf nicht 24 selbst sein, was bedeutet, dass es 1, 2, 3, 4, 6, 8 oder 12 sein kann.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der den Rundungsmodus angibt, der das Auf- oder Abrunden in verschiedenen Szenarien definiert. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardmäßig `"halfExpand"`.
    - `smallestUnit` {{optional_inline}}
      - : Einer der temporalen Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder deren Singularformen. Standardmäßig `"nanoseconds"`. Für Einheiten, die größer als `"nanoseconds"` sind, werden die Bruchteile der `smallestUnit` nach den Einstellungen von `roundingIncrement` und `roundingMode` gerundet. Muss kleiner oder gleich `largestUnit` sein. Mindestens einer von `smallestUnit` und `largestUnit` muss angegeben werden.

### Rückgabewert

Ein neues `Temporal.Duration`-Objekt, wobei die größte Einheit nicht größer als die `largestUnit`-Option und die kleinste Einheit nicht kleiner als die `smallestUnit`-Option ist. Die Bruchteile der `smallestUnit` werden entsprechend den Einstellungen von `roundingIncrement` und `roundingMode` gerundet.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beschreibung

Die `round()`-Methode führt zwei Operationen aus: Rundung und Balance. Sie erledigt Folgendes:

1. Sie stellt sicher, dass die Dauer ausgeglichen ist. Wenn eine Komponente über ihrem bevorzugten Maximum liegt (24 Stunden pro Tag, 60 Minuten pro Stunde, etc.), wird der Überschuss zur nächsten größeren Einheit überführt, bis wir `largestUnit` erreichen. Zum Beispiel, "24 hours 90 minutes" wird zu "25 hours 30 minutes", wenn `largestUnit` `"auto"` ist, und "1 day 1 hour 30 minutes", wenn `largestUnit` `"days"` ist.
2. Bei allen Komponenten, die größer als `largestUnit` sind, werden sie in `largestUnit` umgewandelt; zum Beispiel, "2 hours 30 minutes" wird zu "150 minutes", wenn `largestUnit` `"minutes"` ist.
3. Bei allen Komponenten, die kleiner als `smallestUnit` sind, werden sie in `smallestUnit` als Bruchteil umgewandelt und dann gemäß den Einstellungen von `roundingIncrement` und `roundingMode` gerundet. Zum Beispiel, "1 hour 30 minutes" wird zu "1.5 hours", wenn `smallestUnit` `"hours"` ist, und dann auf "2 hours" gerundet, unter Verwendung der Standardeinstellungen.

[Kalendereinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) haben ungleichmäßige Längen. Ihre Längen werden relativ zu einem Ausgangspunkt aufgelöst. Zum Beispiel kann eine Dauer von "2 years" im gregorianischen Kalender 730 Tage oder 731 Tage lang sein, je nachdem, ob sie durch ein Schaltjahr geht oder nicht. Wenn auf eine Kalendereinheit gerundet wird, erhalten wir zuerst die genaue durch `relativeTo + duration` dargestellte Datum-Uhrzeit und runden sie dann gemäß `smallestUnit` und `roundingIncrement` nach unten und oben, um zwei Kandidaten zu erhalten. Dann wählen wir den Kandidaten gemäß der Einstellung von `roundingMode` aus und ziehen schließlich `relativeTo` ab, um die endgültige Dauer zu erhalten.

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

### Auf eine ganze Anzahl von Stunden runden

```js
const duration = Temporal.Duration.from({ days: 1, hours: 1, minutes: 30 });
const roundedDuration = duration.round({
  largestUnit: "hours",
  smallestUnit: "hours",
  roundingMode: "floor",
});
console.log(roundedDuration.hours); // 25
```

### Runden in 15-Minuten-Schritten

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

Wenn entweder die ursprüngliche Dauer oder die größte/kleinste Einheit eine Kalendereinheit enthält, müssen Sie eine `relativeTo`-Option angeben, um die Kalenderdauern aufzulösen.

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
