---
title: Temporal.Duration.prototype.round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{JSRef}}{{SeeCompatTable}}

Die **`round()`**-Methode von Instanzen des Objekts {{jsxref("Temporal.Duration")}} gibt ein neues `Temporal.Duration`-Objekt zurück, bei dem die Dauer auf die angegebene kleinste Einheit gerundet und/oder [balanciert](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) auf die angegebene größte Einheit wird.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameter

- `smallestUnit`
  - : Ein String, der die [`smallestUnit`](#smallestunit_2)-Option darstellt. Dies ist eine praktische Überladung, sodass `round(smallestUnit)` gleichbedeutend ist mit `round({ smallestUnit })`, wobei `smallestUnit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `largestUnit` {{optional_inline}}
      - : Eine der temporalen Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder deren Singularformen, oder der Wert `"auto"`, was die größte von Null verschiedene Komponente dieser Dauer oder `smallestUnit` bedeutet, je nachdem, welche größer ist. Standardwert ist `"auto"`. Das Ergebnis wird keine Einheiten enthalten, die größer als diese sind; zum Beispiel, wenn die größte Einheit `"minutes"` ist, wird "1 hour 30 minutes" zu "90 minutes".
    - `relativeTo` {{optional_inline}}
      - : Ein zonierter oder einfacher Datum/Zeit-Wert, der die Zeit- und Kalenderinformationen bereitstellt, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) zu lösen (siehe den Link für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `this` oder `other` eine Kalenderdauer ist oder `smallestUnit` eine Kalendereinheit ist.
    - `roundingIncrement` {{optional_inline}}
      - : Eine Zahl (zu einem Ganzzahlwert gekürzt), die den Rundungsinkrement in der angegebenen `smallestUnit` darstellt. Standardwert ist `1`. Muss im inklusiven Bereich von 1 bis 1e9 liegen. Wenn die kleinste Einheit Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden oder Nanosekunden ist, muss der Inkrement ein Teiler des Höchstwerts der Einheit sein; zum Beispiel, wenn die Einheit Stunden ist, muss der Inkrement ein Teiler von 24 sein und darf nicht 24 selbst sein, was bedeutet, dass es 1, 2, 3, 4, 6, 8 oder 12 sein kann.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der den Rundungsmodus darstellt, der angibt, ob auf- oder abgerundet wird, je nach Szenario. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardwert ist `"halfExpand"`.
    - `smallestUnit` {{optional_inline}}
      - : Eine der temporalen Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder deren Singularformen. Standardwert ist `"nanoseconds"`. Für Einheiten größer als `"nanoseconds"` werden Bruchteile der `smallestUnit` gemäß der `roundingIncrement`- und `roundingMode`-Einstellungen gerundet. Muss kleiner oder gleich `largestUnit` sein. Mindestens eine von `smallestUnit` und `largestUnit` muss angegeben werden.

### Rückgabewert

Ein neues `Temporal.Duration`-Objekt, bei dem die größte Einheit nicht größer als die Option `largestUnit` ist und die kleinste Einheit nicht kleiner als die Option `smallestUnit` ist. Die Bruchteile der `smallestUnit` werden gemäß der `roundingIncrement`- und `roundingMode`-Einstellungen gerundet.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beschreibung

Die `round()`-Methode führt zwei Operationen aus: Runden und Balancieren. Sie führt folgende Schritte aus:

1. Sie stellt sicher, dass die Dauer ausgeglichen ist. Wenn eine Komponente über ihrem bevorzugten Maximum liegt (24 Stunden pro Tag, 60 Minuten pro Stunde usw.), wird der Überschuss an die nächstgrößere Einheit weitergegeben, bis `largestUnit` erreicht wurde. Zum Beispiel wird "24 hours 90 minutes" zu "25 hours 30 minutes" wenn `largestUnit` `"auto"` ist, und zu "1 day 1 hour 30 minutes" wenn `largestUnit` `"days"` ist.
2. Für alle Komponenten, die größer als `largestUnit` sind, werden sie in `largestUnit` heruntergezählt; zum Beispiel wird "2 hours 30 minutes" zu "150 minutes" wenn `largestUnit` `"minutes"` ist.
3. Für alle Komponenten, die kleiner als `smallestUnit` sind, werden sie in `smallestUnit` als Bruchteile hochgezählt und dann gemäß den `roundingIncrement`- und `roundingMode`-Einstellungen gerundet. Zum Beispiel wird "1 hour 30 minutes" zu "1.5 hours" wenn `smallestUnit` `"hours"` ist und dann mit den Standard-Einstellungen zu "2 hours" gerundet.

[Kalendereinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) haben ungleichmäßige Längen. Ihre Längen werden relativ zu einem Ausgangspunkt aufgelöst. Zum Beispiel kann eine Dauer von "2 years" im gregorianischen Kalender 730 Tage oder 731 Tage lang sein, je nachdem, ob sie durch ein Schaltjahr führt oder nicht. Beim Runden auf eine Kalendereinheit ermitteln wir zuerst das genaue Datum-Uhrzeit, das durch `relativeTo + duration` dargestellt wird, runden es dann gemäß `smallestUnit` und `roundingIncrement` nach unten und oben, um zwei Kandidaten zu bekommen. Dann wählen wir den Kandidaten gemäß der `roundingMode`-Einstellung und subtrahieren schließlich `relativeTo`, um die endgültige Dauer zu erhalten.

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

### Rundung auf eine ganze Zahl von Stunden

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

Wenn entweder die Anfangsdauer oder die größte/kleinste Einheit eine Kalendereinheit enthält, müssen Sie eine `relativeTo`-Option angeben, um die Kalenderdauern zu lösen.

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
