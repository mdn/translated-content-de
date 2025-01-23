---
title: Temporal.PlainYearMonth.prototype.subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/subtract
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`subtract()`**-Methode von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt ein neues `Temporal.PlainYearMonth`-Objekt zurück, das diesen Jahr-Monat darstellt, rückwärts verschoben um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).

Wenn Sie zwei Jahr-Monate subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/PlainYearMonth/since", "since()")}} oder {{jsxref("Temporal/PlainYearMonth/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
subtract(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine zu subtrahierende Dauer von diesem Jahr-Monat darstellt. Es wird in ein `Temporal.Duration`-Objekt umgewandelt, unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird geworfen, wenn die Datumskomponente außerhalb des gültigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth`-Objekt, das den Jahr-Monat darstellt, der durch das ursprüngliche `PlainYearMonth` spezifiziert ist, minus der Dauer.

## Beschreibung

Das Subtrahieren einer Dauer entspricht dem [Addieren](Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add) ihrer [Negation](Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten alle gleichen Überlegungen. Das Subtrahieren einer positiven Dauer beginnt am Ende des Jahr-Monats und geht rückwärts, sodass jede Erhöhung, die kleiner ist als die Länge des Monats, ignoriert wird.

## Beispiele

### Subtrahieren einer Dauer

```js
const start = Temporal.PlainYearMonth.from("2022-01");
const end = start.subtract({ years: 1, months: 2, weeks: 3, days: 4 });
console.log(end.toString()); // 2020-11
```

Weitere Beispiele finden Sie unter {{jsxref("Temporal/PlainYearMonth/add", "add()")}}.

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
