---
title: Temporal.PlainYearMonth.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`** Methode von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt ein neues `Temporal.PlainYearMonth` Objekt zurück, das diesen Jahr-Monat um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) nach vorne verschoben repräsentiert.

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine Dauer repräsentiert, die zu diesem Jahr-Monat hinzugefügt werden soll. Sie wird unter Verwendung desselben Algorithmus in ein `Temporal.Duration` Objekt umgewandelt wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datums-Komponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datums-Komponente wird auf den gültigen Bereich [begrenzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Es wird eine {{jsxref("RangeError")}} ausgelöst, wenn die Datums-Komponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth` Objekt, das den Jahr-Monat darstellt, der durch die ursprüngliche `PlainYearMonth` angegeben ist, plus die Dauer.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre von der Unix-Epoche entfernt ist.

## Beschreibung

Die `duration` wird folgendermaßen behandelt:

- Vorwärtsverschiebung um die Anzahl der Jahre, wobei der `monthCode` gleich bleibt. Wenn der `monthCode` im resultierenden Jahr ungültig ist (bei gregorianischen und ISO 8601-Kalendern unmöglich, aber bei Kalendern mit Schaltmonaten möglich), passen wir basierend auf der `overflow`-Option an: Bei `constrain` wählen wir einen anderen Monat gemäß den kulturellen Traditionen der Nutzer dieses Kalenders. Da der Schaltmonat normalerweise als Duplikat eines anderen Monats betrachtet wird, können wir den Monat wählen, dessen Duplikat er ist.
- Vorwärtsverschiebung um die Anzahl der Monate, wobei das Jahr gegebenenfalls angepasst wird.
- Für alle Einheiten kleiner als `months` (Wochen, Tage, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden, Nanosekunden) werden diese in die Anzahl der Tage umgewandelt. Alle allgemein unterstützten Kalender verwenden Wochen fester Länge, sodass die Anzahl der Wochen einfach in die Anzahl der Tage umgerechnet wird. Wenn die Regel komplexer ist, könnten wir einen ähnlichen Ansatz wie beim Verschieben von Monaten verfolgen. Danach bewegen wir uns um die Anzahl von Tagen vorwärts, beginnend am ersten Tag des Monats, wobei der Monat und das Jahr gegebenenfalls angepasst werden. Dauern, die kleiner sind als die aktuelle Monatslänge, haben daher keine Wirkung.

Der interne Referenztag wird dann als der erste gültige Tag des Monats gewählt, unabhängig vom ursprünglichen Referenztag oder der Anzahl der Tage in der Dauer. Für den Gregorianischen Kalender kann kein Überlauf auftreten, da jedes Jahr immer 12 Monate hat und jede Steigerung, die kleiner als ein Monat ist, einfach ignoriert wird.

Das Hinzufügen einer Dauer ist gleichbedeutend mit dem [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/subtract) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Beispiele

### Hinzufügen einer Dauer im ISO 8601-Kalender

```js
const start = Temporal.PlainYearMonth.from("2021-01");
const end = start.add({ years: 1, months: 2, weeks: 3, days: 4 });
console.log(end.toString()); // 2022-03

const end2 = start.add({ years: -1, months: -2, weeks: -3, days: -4 });
console.log(end2.toString()); // 2019-11

const distance = Temporal.PlainYearMonth.from("2020-01").until("2021-01"); // 366 days
const end3 = start.add(distance);
console.log(end3.toString()); // 2022-01
```

### Hinzufügen einer Dauer in einem nicht-ISO-Kalender

```js
const start = Temporal.PlainYearMonth.from("2021-02-01[u-ca=chinese]");
console.log(start.toLocaleString("en-US", { calendar: "chinese" })); // 11/2020
console.log(start.toString()); // 2021-01-13[u-ca=chinese]
const end = start.add({ months: 1 });
console.log(end.toLocaleString("en-US", { calendar: "chinese" })); // 12/2020
console.log(end.toString()); // 2021-02-12[u-ca=chinese]

// Adding an extra day has no effect at all
const end2 = start.add({ months: 1, days: 1 });
console.log(end2.toLocaleString("en-US", { calendar: "chinese" })); // 12/2020
// The reference day doesn't change, because it's always the first day of the Chinese month
console.log(end2.toString()); // 2021-02-12[u-ca=chinese]

// Start in a leap month
const start2 = Temporal.PlainYearMonth.from({
  year: 5730,
  monthCode: "M05L",
  calendar: "hebrew",
});
console.log(start2.toLocaleString("en-US", { calendar: "hebrew" })); // Adar I 5730
// End in another leap month
const end3 = start2.add({ years: 3 });
console.log(end3.toLocaleString("en-US", { calendar: "hebrew" })); // Adar I 5733
```

### Hinzufügen einer Dauer mit Überlauf

Wenn wir ein paar Jahre weiter gehen und der entsprechende Monat in diesem Jahr ungültig ist, passen wir den Monat basierend auf der `overflow`-Option an.

```js
// Start in a leap month
const start = Temporal.PlainYearMonth.from({
  year: 5730,
  monthCode: "M05L",
  calendar: "hebrew",
});
// Hebrew leap years occur every 2 or 3 years, and 5731 is not a leap year
const end = start.add({ years: 1 });
console.log(end.toLocaleString("en-US", { calendar: "hebrew" })); // Adar 5731
console.log(end.monthCode); // M06
console.log(end.toString()); // 1971-02-26[u-ca=hebrew]

// Any further month additions are based on the clamped year-month
const end2 = start.add({ years: 1, months: 2 });
console.log(end2.monthCode); // M08
console.log(end2.toString()); // 1971-04-26[u-ca=hebrew]

// Compare with the same addition in a different order that results in no overflow:
const end3 = start.add({ months: 2 }).add({ years: 1 });
console.log(end3.monthCode); // M07
console.log(end3.toString()); // 1971-03-27[u-ca=hebrew]
```

Beachten Sie, dass das Folgende kein Überlauf ist, da das Jahr einfach inkrementiert werden kann:

```js
const start = Temporal.PlainYearMonth.from("2021-01");
const end = start.add({ months: 100 });
console.log(end.toString()); // 2029-05
```

Sie können auch einen Fehler auslösen, wenn die Datums-Komponente außerhalb des Bereichs liegt:

```js
const start = Temporal.PlainYearMonth.from({
  year: 5730,
  monthCode: "M05L",
  calendar: "hebrew",
});
const end = start.add({ years: 1 }, { overflow: "reject" }); // RangeError: invalid "monthCode" calendar field: M05L
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
