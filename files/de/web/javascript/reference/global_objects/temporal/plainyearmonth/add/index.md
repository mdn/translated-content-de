---
title: Temporal.PlainYearMonth.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`**-Methode von Instanzen des Objekts {{jsxref("Temporal.PlainYearMonth")}} gibt ein neues `Temporal.PlainYearMonth`-Objekt zurück, das diesen Jahr-Monat um eine gegebene Dauer nach vorne verschoben darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.Duration")}}, die eine hinzuzufügende Dauer für diesen Jahr-Monat darstellt. Es wird mit dem gleichen Algorithmus in ein `Temporal.Duration`-Objekt umgewandelt wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth`-Objekt, das den im ursprünglichen `PlainYearMonth` angegebenen Jahr-Monat plus die Dauer darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche beträgt.

## Beschreibung

Die `duration` wird auf diese Weise behandelt:

- Vorwärtsbewegung um die Anzahl der Jahre, wobei der `monthCode` gleich bleibt. Wenn der `monthCode` im resultierenden Jahr ungültig ist (für den gregorianischen Kalender und ISO 8601 unmöglich, aber möglich für Kalender mit Schaltmonaten), passen wir basierend auf der `overflow`-Option an: Bei `constrain` wählen wir einen anderen Monat entsprechend den kulturellen Konventionen der Benutzer dieses Kalenders. Zum Beispiel, weil der Schaltmonat oft als Duplikat eines anderen Monats betrachtet wird, könnten wir den Monat wählen, von dem er ein Duplikat ist.
- Vorwärtsbewegung um die Anzahl der Monate, wobei das Jahr bei Bedarf angepasst wird.
- Für alle Einheiten kleiner als `months` (Wochen, Tage, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden, Nanosekunden) werden sie in die Anzahl der Tage umgewandelt. Alle gängig unterstützten Kalender verwenden Wochen fester Länge, sodass die Anzahl der Wochen einfach in die Anzahl der Tage umgewandelt wird. Wenn die Regel komplexer ist, können wir einen Ansatz ähnlich dem Verschieben von Monaten verfolgen. Dann bewegen wir uns um diese Anzahl von Tagen nach vorne, beginnend am ersten Tag des Monats, wobei der Monat und das Jahr bei Bedarf angepasst werden. Dauern, die kleiner sind als die aktuelle Monatslänge, haben daher keine Auswirkungen.

Der interne Referenztag wird dann als der erste gültige Tag des Monats gewählt, unabhängig vom ursprünglichen Referenztag oder der Anzahl der Tage in der Dauer. Für den gregorianischen Kalender kann kein Überlauf auftreten, da jedes Jahr immer 12 Monate hat und jedes Inkrement von weniger als einem Monat einfach ignoriert wird.

Das Hinzufügen einer Dauer entspricht dem [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/subtract) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Beispiele

### Hinzufügen einer Dauer im ISO 8601 Kalender

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

### Hinzufügen einer Dauer in einem nicht-ISO Kalender

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

Wenn wir ein paar Jahre verschieben und der entsprechende Monat in diesem Jahr ungültig ist, passen wir den Monat basierend auf der `overflow`-Option an.

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

Beachten Sie, dass dies kein Überlauf ist, da das Jahr einfach inkrementiert werden kann:

```js
const start = Temporal.PlainYearMonth.from("2021-01");
const end = start.add({ months: 100 });
console.log(end.toString()); // 2029-05
```

Sie können auch einen Fehler auslösen, wenn die Datumskomponente außerhalb des Bereichs liegt:

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
