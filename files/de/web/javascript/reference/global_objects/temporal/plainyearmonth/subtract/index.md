---
title: Temporal.PlainYearMonth.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/subtract
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`subtract()`**-Methode von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt ein neues `Temporal.PlainYearMonth`-Objekt zurück, das diesen Jahr-Monat darstellt, der um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann) rückwärts bewegt wurde.

Wenn Sie zwei Jahr-Monate subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/PlainYearMonth/since", "since()")}} oder {{jsxref("Temporal/PlainYearMonth/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
subtract(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Dauer darstellt, die von diesem Jahr-Monat subtrahiert werden soll. Sie wird in ein `Temporal.Duration`-Objekt umgewandelt, indem derselbe Algorithmus wie bei {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} verwendet wird.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn ein Datumsbestandteil außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Der Datumsbestandteil wird auf den gültigen Bereich [begrenzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn der Datumsbestandteil außerhalb des gültigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth`-Objekt, das den Jahr-Monat darstellt, der durch den ursprünglichen `PlainYearMonth` angegeben wird, minus der Dauer.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) ist, der ±(10<sup>8</sup> + 1) Tage, oder etwa ±273,972.6 Jahre, von der Unix-Epoche umfasst.

## Beschreibung

Das Subtrahieren einer Dauer ist gleichbedeutend mit dem [Hinzufügen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), sodass dieselben Überlegungen gelten. Das Subtrahieren einer positiven Dauer beginnt am Ende des Jahr-Monats und bewegt sich rückwärts, sodass jede Erhöhung kleiner als die Länge des Monats ignoriert wird.

## Beispiele

### Subtrahieren einer Dauer

```js
const start = Temporal.PlainYearMonth.from("2022-01");
const end = start.subtract({ years: 1, months: 2, weeks: 3, days: 4 });
console.log(end.toString()); // 2020-11
```

Für weitere Beispiele siehe {{jsxref("Temporal/PlainYearMonth/add", "add()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
- {{jsxref("Temporal/PlainYearMonth/since", "Temporal.PlainYearMonth.prototype.since()")}}
- {{jsxref("Temporal/PlainYearMonth/until", "Temporal.PlainYearMonth.prototype.until()")}}
