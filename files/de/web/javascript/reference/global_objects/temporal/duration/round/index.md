---
title: Temporal.Duration.prototype.round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`round()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen gibt ein neues `Temporal.Duration` Objekt zurück, wobei die Dauer auf die angegebene kleinste Einheit gerundet und/oder [ausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) auf die angegebene größte Einheit wird.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameter

- `smallestUnit`
  - : Ein Zeichenkette, die die [`smallestUnit`](#smallestunit_2) Option darstellt. Dies ist eine praktische Überladung, sodass `round(smallestUnit)` gleichbedeutend ist mit `round({ smallestUnit })`, wobei `smallestUnit` eine Zeichenkette ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `largestUnit` {{optional_inline}}
      - : Eine der temporalen Einheiten: `"year"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"` oder deren Pluralformen, oder der Wert `"auto"`, was die größte nicht-null Komponente dieser Dauer oder `smallestUnit` bedeutet, je nachdem, welches größer ist. Standardwert ist `"auto"`. Das Ergebnis wird keine Einheiten enthalten, die größer als diese sind; zum Beispiel wird "1 Stunde 30 Minuten" zu "90 Minuten", wenn die größte Einheit `"minute"` ist.
    - `relativeTo` {{optional_inline}}
      - : Ein zonales oder einfaches Datum(Zeit), das die Zeit- und Kalenderinformationen bereitstellt, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) aufzulösen (siehe den Link für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `this` oder `other` eine Kalenderdauer ist, oder `smallestUnit` eine Kalendereinheit ist.
    - `roundingIncrement` {{optional_inline}}
      - : Eine Zahl (auf eine ganze Zahl gekürzt), die das Rundungsinkrement in der gegebenen `smallestUnit` darstellt. Standardwert ist `1`. Muss im inklusiven Bereich von 1 bis 1e9 liegen. Wenn die kleinste Einheit Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden oder Nanosekunden ist, muss das Inkrement ein Divisor des Maximalwertes der Einheit sein; zum Beispiel, wenn die Einheit Stunden ist, muss das Inkrement ein Divisor von 24 sein und darf nicht 24 selbst sein, was bedeutet, dass es 1, 2, 3, 4, 6, 8 oder 12 sein kann.
    - `roundingMode` {{optional_inline}}
      - : Ein Zeichenkette, die den Rundungsmodus darstellt, der angibt, ob auf- oder abgerundet werden soll in verschiedenen Szenarien. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardwert ist `"halfExpand"`.
    - `smallestUnit` {{optional_inline}}
      - : Eine der temporalen Einheiten: `"year"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"` oder deren Pluralformen. Standardwert ist `"nanosecond"`. Für Einheiten, die größer als `"nanosecond"` sind, werden die Bruchteile der `smallestUnit` entsprechend der `roundingIncrement`- und `roundingMode`-Einstellungen gerundet. Muss kleiner oder gleich `largestUnit` sein. Mindestens eine von `smallestUnit` und `largestUnit` muss angegeben werden.

### Rückgabewert

Ein neues `Temporal.Duration`-Objekt, bei dem die größte Einheit nicht größer als die `largestUnit`-Option ist und die kleinste Einheit nicht kleiner als die `smallestUnit`-Option ist. Die Bruchteile der `smallestUnit` werden entsprechend den `roundingIncrement`- und `roundingMode`-Einstellungen gerundet.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beschreibung

Die `round()` Methode führt zwei Operationen durch: Rundung und Ausgleich. Sie führt die folgenden Schritte aus:

1. Sie stellt sicher, dass die Dauer ausgeglichen ist. Wenn eine Komponente über ihrem bevorzugten Maximum liegt (24 Stunden pro Tag, 60 Minuten pro Stunde usw.), wird der Überschuss auf die nächstgrößere Einheit übertragen, bis wir `largestUnit` erreichen. Zum Beispiel wird "24 Stunden 90 Minuten" zu "25 Stunden 30 Minuten", wenn `largestUnit` `"auto"` ist, und zu "1 Tag 1 Stunde 30 Minuten", wenn `largestUnit` `"day"` ist.
2. Für alle Komponenten, die größer sind als `largestUnit`, werden sie in `largestUnit` übertragen; zum Beispiel wird "2 Stunden 30 Minuten" zu "150 Minuten", wenn `largestUnit` `"minute"` ist.
3. Für alle Komponenten, die kleiner sind als `smallestUnit`, werden sie in `smallestUnit` als Bruchteil übertragen und dann gemäß den `roundingIncrement`- und `roundingMode`-Einstellungen gerundet. Zum Beispiel wird "1 Stunde 30 Minuten" zu "1.5 Stunden", wenn `smallestUnit` `"hour"` ist, und dann auf "2 Stunden" mit den Standardeinstellungen gerundet.

[Kalendereinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_units) haben ungleiche Längen. Ihre Längen werden relativ zu einem Startpunkt aufgelöst. Zum Beispiel kann eine Dauer von "2 Jahren" im gregorianischen Kalender 730 oder 731 Tage lang sein, abhängig davon, ob sie ein Schaltjahr durchläuft oder nicht. Wenn nach einer Kalendereinheit gerundet wird, ermitteln wir zuerst die genaue Datum-Zeit, die durch `relativeTo + duration` dargestellt wird, und runden sie dann nach unten und oben entsprechend `smallestUnit` und `roundingIncrement` auf, um zwei Kandidaten zu erhalten. Dann wählen wir den Kandidaten entsprechend der `roundingMode`-Einstellung und ziehen schließlich `relativeTo` ab, um die endgültige Dauer zu erhalten.

## Beispiele

### Rundung kleiner Einheiten

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const roundedDuration = duration.round("minute");
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
const roundedDuration = duration.round({ largestUnit: "hour" });
console.log(
  `Time spent on this problem: ${roundedDuration.toLocaleString("en-US", { style: "digital" })}`,
);
// Time spent on this problem: 73:41:05
```

### Rundung auf eine ganze Anzahl von Stunden

```js
const duration = Temporal.Duration.from({ days: 1, hours: 1, minutes: 30 });
const roundedDuration = duration.round({
  largestUnit: "hour",
  smallestUnit: "hour",
  roundingMode: "floor",
});
console.log(roundedDuration.hours); // 25
```

### Rundung in 15-Minuten-Schritten

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 17 });
const roundedDuration = duration.round({
  smallestUnit: "minute",
  roundingIncrement: 15,
});
console.log(
  `The queue will take approximately ${roundedDuration.toLocaleString("en-US")}`,
);
// The queue will take approximately 1 hr, 15 min
```

### Auflösung von Kalenderdauern

Wenn entweder die anfängliche Dauer oder größte/kleinste Einheit eine Kalendereinheit enthält, müssen Sie eine `relativeTo`-Option angeben, um die Kalenderdauern aufzulösen.

```js
const duration = Temporal.Duration.from({ months: 1, days: 1, hours: 1 });
const roundedDuration = duration.round({
  largestUnit: "day",
  smallestUnit: "day",
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
