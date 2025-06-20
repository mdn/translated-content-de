---
title: Temporal.PlainDate.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`**-Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt ein neues `Temporal.PlainDate`-Objekt zurück, das das Datum darstellt, das um eine angegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbar ist) nach vorne verschoben ist.

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Dauer repräsentiert und zu diesem Datum hinzugefügt werden soll. Es wird unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal-`Duration`-Objekt umgewandelt.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten spezifiziert, wenn eine Datumskomponente außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des gültigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, das das durch das ursprüngliche `PlainDate` spezifizierte Datum plus die Dauer darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre vom Unix-Epoch umfasst.

## Beschreibung

Die `duration` wird auf folgende Weise behandelt:

- Vorgeschoben um die Anzahl der Jahre, wobei `monthCode` und `day` gleich bleiben. Wenn der `monthCode` im resultierenden Jahr ungültig ist (für Gregorianische und ISO 8601 unmöglich, aber für Kalender mit Schaltmonaten möglich), passen wir basierend auf der `overflow`-Option an: Für `constrain` wählen wir einen anderen Monat gemäß den kulturellen Konventionen der Benutzer dieses Kalenders. Da der Schaltmonat meist als Duplikat eines anderen Monats angesehen wird, könnten wir den Monat wählen, dessen Duplikat er ist.
- Vorgeschoben um die Anzahl der Monate, wobei das Jahr bei Bedarf angepasst und der `day` gleich bleibt. Wenn der `day` im resultierenden Monat ungültig ist (z. B. der 30. Februar), passen wir basierend auf der `overflow`-Option an: für `constrain`, wählen wir den nächsten gültigen Tag (z. B. den 28. oder 29. Februar).
- Alle allgemein unterstützten Kalender verwenden Wochen mit fester Länge, sodass die Anzahl der Wochen einfach in die Anzahl der Tage umgewandelt wird. Wenn die Regel komplexer ist, könnten wir einen ähnlichen Ansatz wie beim Verschieben von Monaten verfolgen.
- Für alle [nicht-kalendarischen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) Einheiten (Tage, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden, Nanosekunden) werden sie in die Anzahl der Tage umgewandelt. Der Bruchteil eines Tages wird ignoriert. Dann schieben wir um diese Anzahl von Tagen nach vorne, wobei gegebenenfalls der Monat und das Jahr angepasst werden.

Das Hinzufügen einer Dauer entspricht dem [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/subtract) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Beispiele

### Hinzufügen einer Dauer im ISO 8601-Kalender

```js
const start = Temporal.PlainDate.from("2021-01-01");
const end = start.add({ years: 1, months: 2, weeks: 3, days: 4 });
console.log(end.toString()); // 2022-03-26

const end2 = start.add({ years: -1, months: -2, weeks: -3, days: -4 });
console.log(end2.toString()); // 2019-10-07

const distance = Temporal.PlainDate.from("2020-01-01").until("2021-01-01"); // 366 days
const end3 = start.add(distance);
console.log(end3.toString()); // 2022-01-02
```

### Hinzufügen einer Dauer in einem nicht-ISO-Kalender

```js
const start = Temporal.PlainDate.from("2021-01-01[u-ca=chinese]");
console.log(start.toLocaleString("en-US", { calendar: "chinese" })); // 11/18/2020
const end = start.add({ months: 1 });
console.log(end.toLocaleString("en-US", { calendar: "chinese" })); // 12/18/2020
```

### Hinzufügen einer Dauer mit Überlauf

Wenn wir einige Monate verschieben und der entsprechende Tag in diesem Monat ungültig ist, passen wir den Tag basierend auf der `overflow`-Option an.

```js
const start = Temporal.PlainDate.from("2021-01-31");
const end = start.add({ months: 1 });
console.log(end.toString()); // 2021-02-28

// Any further day additions are based on the clamped month-day:
const end2 = start.add({ months: 1, days: 31 });
console.log(end2.toString()); // 2021-03-31

// Compare with the same addition in a different order that results in no overflow:
const end3 = start.add({ days: 31 }).add({ months: 1 });
console.log(end3.toString()); // 2021-04-03
```

Überlauf kann auch für den Monat auftreten, bei Kalendern, in denen verschiedene Jahre eine unterschiedliche Anzahl von Monaten haben (normalerweise aufgrund von Schaltmonaten).

```js
const start = Temporal.PlainDate.from("2023-04-01[u-ca=chinese]");
console.log(start.toLocaleString("en-US", { calendar: "chinese" })); // 2bis/11/2023; "bis" means leap month
const end = start.add({ years: 1 });
console.log(end.toLocaleString("en-US", { calendar: "chinese" })); // 3/11/2024

// Compare:
const start = Temporal.PlainDate.from("2023-04-30[u-ca=chinese]");
console.log(start.toLocaleString("en-US", { calendar: "chinese" })); // 3/11/2023
const end = start.add({ years: 1 });
console.log(end.toLocaleString("en-US", { calendar: "chinese" })); // 3/11/2024; same day as above!
```

Beachten Sie, dass das Folgende kein Überlauf ist, da der Monat einfach inkrementiert werden kann:

```js
const start = Temporal.PlainDate.from("2021-01-01");
const end = start.add({ days: 100 });
console.log(end.toString()); // 2021-04-11
```

Sie können auch einen Fehler auslösen, wenn die Datumskomponente außerhalb des Bereichs liegt:

```js
const start = Temporal.PlainDate.from("2021-01-31");
const end = start.add({ months: 1 }, { overflow: "reject" }); // RangeError: date value "day" not in 1..28: 31

const start = Temporal.PlainDate.from("2023-04-01[u-ca=chinese]");
const end = start.add({ years: 1 }, { overflow: "reject" }); // RangeError: invalid "monthCode" calendar field: M02L
```

### Hinzufügen von Zeitdauern

Bruchteile eines Tages werden ignoriert.

```js
const start = Temporal.PlainDate.from("2021-01-01");
const end = start.add({ hours: 25 }); // Same as adding 1 day
console.log(end.toString()); // 2021-01-02
```

## Spezifikationen

{{Spezifikationen}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
