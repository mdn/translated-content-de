---
title: Temporal.PlainDate.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`**-Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) vorwärts verschoben darstellt.

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine hinzuzufügende Dauer zu diesem Datum darstellt. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.
- `options` {{optional_inline}}
  - : Ein Objekt das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) auf den gültigen Bereich.
        - `"reject"`
          - : Es wird ein {{jsxref("RangeError")}} ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, das das durch das ursprüngliche `PlainDate` und die Dauer spezifizierte Datum darstellt.

## Beschreibung

Die `duration` wird auf diese Weise behandelt:

- Vorwärts bewegen um die Anzahl der Jahre, wobei der `monthCode` und der `day` gleich bleiben. Wenn der `monthCode` im resultierenden Jahr ungültig ist (unmöglich für Gregorianische und ISO 8601-Kalender, aber möglich für Kalender mit Schaltmonaten), passen wir uns basierend auf die `overflow`-Option an: bei `constrain` wählen wir einen anderen Monat entsprechend den kulturellen Konventionen der Benutzer dieses Kalenders. Beispielsweise, weil der Schaltmonat normalerweise als Duplikat eines anderen Monats angesehen wird, können wir den Monat wählen, den er dupliziert.
- Vorwärts bewegen um die Anzahl der Monate, wobei das Jahr bei Bedarf angepasst wird, und der `day` gleich bleibt. Wenn der `day` im resultierenden Monat ungültig ist (z.B. der 30. Februar), passen wir uns basierend auf die `overflow`-Option an: bei `constrain` wählen wir den nächstgültigen Tag (z.B. den 28. oder 29. Februar).
- Alle allgemein unterstützten Kalender verwenden Wochen mit fester Länge, sodass die Anzahl der Wochen einfach in die Anzahl der Tage umgewandelt wird. Wenn die Regel komplexer ist, können wir einen Ansatz ähnlich der Verschiebung von Monaten verfolgen.
- Für alle [nicht-kalendarischen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) Einheiten (Tage, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden, Nanosekunden) werden sie in die Anzahl der Tage umgewandelt. Der Bruchteil eines Tages wird ignoriert. Dann bewegen wir uns um diese Anzahl von Tagen vorwärts, passen den Monat und das Jahr bei Bedarf an.

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

### Hinzufügen einer Dauer in einem Nicht-ISO-Kalender

```js
const start = Temporal.PlainDate.from("2021-01-01[u-ca=chinese]");
console.log(start.toLocaleString("en-US", { calendar: "chinese" })); // 11/18/2020
const end = start.add({ months: 1 });
console.log(end.toLocaleString("en-US", { calendar: "chinese" })); // 12/18/2020
```

### Hinzufügen einer Dauer mit Überlauf

Wenn wir ein paar Monate verschieben und der entsprechende Tag in diesem Monat ungültig ist, passen wir den Tag basierend auf die `overflow`-Option an.

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

Ein Überlauf kann auch für den Monat auftreten, bei Kalendern, in denen unterschiedliche Jahre unterschiedliche Anzahlen von Monaten haben (normalerweise aufgrund von Schaltmonaten).

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

Beachten Sie, dass das Folgende kein Überlauf ist, weil der Monat einfach inkrementiert werden kann:

```js
const start = Temporal.PlainDate.from("2021-01-01");
const end = start.add({ days: 100 });
console.log(end.toString()); // 2021-04-11
```

Sie können auch einen Fehler werfen, wenn die Datumskomponente außerhalb des Bereichs liegt:

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

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
