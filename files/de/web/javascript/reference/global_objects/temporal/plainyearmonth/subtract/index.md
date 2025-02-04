---
title: Temporal.PlainYearMonth.prototype.subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/subtract
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Die **`subtract()`**-Methode von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt ein neues `Temporal.PlainYearMonth`-Objekt zurück, das dieses Jahr-Monat um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) zurückverschoben darstellt.

Wenn Sie zwei Jahr-Monate subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/PlainYearMonth/since", "since()")}} oder {{jsxref("Temporal/PlainYearMonth/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
subtract(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine von diesem Jahr-Monat abzuziehende Dauer darstellt. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt konvertiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth`-Objekt, das das Jahr-Monat darstellt, das durch das ursprüngliche `PlainYearMonth` bestimmt wird, minus der Dauer.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, das sind ±(10<sup>8</sup> + 1) Tage oder etwa ±273,972.6 Jahre vom Unix-Epoch.

## Beschreibung

Das Subtrahieren einer Dauer entspricht dem [Hinzufügen](Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add) ihrer [Negation](Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten alle gleichen Überlegungen. Wenn eine positive Dauer subtrahiert wird, beginnt dies am Ende des Jahr-Monats und bewegt sich rückwärts, sodass jeder Anstieg, der kleiner als die Länge des Monats ist, ignoriert wird.

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
