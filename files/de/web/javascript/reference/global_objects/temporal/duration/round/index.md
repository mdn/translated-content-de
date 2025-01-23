---
title: Temporal.Duration.prototype.round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`round()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen gibt ein neues `Temporal.Duration` Objekt zurück, bei dem die Dauer auf die angegebene kleinste Einheit gerundet und/oder [ausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) bis zur angegebenen größten Einheit wird.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameter

- `smallestUnit`
  - : Ein String, der die [`smallestUnit`](#smallestunit_2) Option darstellt. Dies ist eine praktische Überladung, sodass `round(smallestUnit)` äquivalent zu `round({ smallestUnit })` ist, wobei `smallestUnit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `largestUnit` {{optional_inline}}
      - : Eine der temporalen Einheiten: `"year"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"` oder ihre Pluralformen, oder der Wert `"auto"`, welcher die größte nicht-null Komponente dieser Dauer oder `smallestUnit`, je nachdem, was größer ist, bedeutet. Standardmäßig `"auto"`. Das Ergebnis wird keine Einheiten größer als diese enthalten; zum Beispiel wird, wenn die größte Einheit `"minute"` ist, "1 hour 30 minutes" zu "90 minutes".
    - `relativeTo` {{optional_inline}}
      - : Ein zoniertes oder einfaches Datum (Uhrzeit), das die Zeit- und Kalenderinformationen bereitstellt, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) zu lösen (siehe den Link für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `this` oder `other` eine Kalenderdauer ist, oder `smallestUnit` eine Kalendereinheit ist.
    - `roundingIncrement` {{optional_inline}}
      - : Eine Zahl (auf eine ganze Zahl gekürzt), die die Rundungsinkremente in der angegebenen `smallestUnit` darstellt. Standardmäßig `1`. Muss im inklusiven Bereich von 1 bis 1e9 liegen. Falls die kleinste Einheit Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden oder Nanosekunden ist, muss das Inkrement ein Teiler des Höchstwerts der Einheit sein; beispielsweise, wenn die Einheit Stunden ist, muss das Inkrement ein Teiler von 24 sein und darf nicht 24 selbst sein, was bedeutet, dass es 1, 2, 3, 4, 6, 8 oder 12 sein kann.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der den Rundungsmodus angibt, der das Aufrunden oder Abrunden in verschiedenen Szenarien bestimmt. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardmäßig `"halfExpand"`.
    - `smallestUnit` {{optional_inline}}
      - : Eine der temporalen Einheiten: `"year"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"` oder ihre Pluralformen. Standardmäßig `"nanosecond"`. Für Einheiten größer als `"nanosecond"` werden die Bruchteile der `smallestUnit` entsprechend den Einstellungen `roundingIncrement` und `roundingMode` gerundet. Muss kleiner oder gleich `largestUnit` sein. Mindestens eine der Einheiten `smallestUnit` und `largestUnit` muss angegeben werden.

### Rückgabewert

Ein neues `Temporal.Duration` Objekt, bei dem die größte Einheit nicht größer als die `largestUnit` Option ist und die kleinste Einheit nicht kleiner als die `smallestUnit` Option ist. Die Bruchteile der `smallestUnit` werden je nach den Einstellungen `roundingIncrement` und `roundingMode` gerundet.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beschreibung

Die `round()` Methode führt zwei Operationen aus: Rundung und Ausgleich. Sie tut Folgendes:

1. Sie stellt sicher, dass die Dauer ausgeglichen ist. Wenn eine Komponente über ihrem bevorzugten Maximum liegt (24 Stunden pro Tag, 60 Minuten pro Stunde usw.), wird der Überschuss zur nächsten größeren Einheit übertragen, bis wir die `largestUnit` erreichen. Zum Beispiel wird "24 hours 90 minutes" zu "25 hours 30 minutes", wenn `largestUnit` `"auto"` ist, und zu "1 day 1 hour 30 minutes", wenn `largestUnit` `"day"` ist.
2. Für alle Komponenten größer als `largestUnit` werden sie in `largestUnit` heruntergetragen; zum Beispiel wird "2 hours 30 minutes" zu "150 minutes", wenn `largestUnit` `"minute"` ist.
3. Für alle Komponenten kleiner als `smallestUnit` werden sie in die `smallestUnit` als Bruchteil hochgetragen und dann entsprechend den Einstellungen `roundingIncrement` und `roundingMode` gerundet. Zum Beispiel wird "1 hour 30 minutes" zu "1.5 hours", wenn `smallestUnit` `"hour"` ist, und dann mit den Standardeinstellungen auf "2 hours" gerundet.

[Kalendereinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_units) haben ungleichmäßige Längen. Ihre Längen werden relativ zu einem Ausgangspunkt aufgelöst. Zum Beispiel kann eine Dauer von "2 years" im gregorianischen Kalender 730 Tage oder 731 Tage lang sein, je nachdem, ob ein Schaltjahr durchlaufen wird oder nicht. Beim Runden auf eine Kalendereinheit erhalten wir zuerst das genaue Datum-Uhrzeit, das durch `relativeTo + duration` dargestellt wird, runden es dann nach unten und oben entsprechend `smallestUnit` und `roundingIncrement`, um zwei Kandidaten zu erhalten. Dann wählen wir den Kandidaten gemäß der Einstellung `roundingMode` aus und subtrahieren schließlich `relativeTo`, um die endgültige Dauer zu erhalten.

## Beispiele

### Abrunden kleiner Einheiten

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

### Runden auf eine ganze Anzahl von Stunden

```js
const duration = Temporal.Duration.from({ days: 1, hours: 1, minutes: 30 });
const roundedDuration = duration.round({
  largestUnit: "hour",
  smallestUnit: "hour",
  roundingMode: "floor",
});
console.log(roundedDuration.hours); // 25
```

### Runden in 15-Minuten-Schritten

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

### Auflösen von Kalenderdauern

Wenn entweder die anfängliche Dauer oder die größte/kleinste Einheit eine Kalendereinheit enthält, müssen Sie eine `relativeTo` Option angeben, um die Kalenderdauern aufzulösen.

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
