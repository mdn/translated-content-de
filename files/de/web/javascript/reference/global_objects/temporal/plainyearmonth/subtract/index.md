---
title: Temporal.PlainYearMonth.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/subtract
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`subtract()`**-Methode von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt ein neues `Temporal.PlainYearMonth`-Objekt zurück, das diesen Jahr-Monat darstellt, rückwärts verschoben um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).

Wenn Sie zwei Jahr-Monate subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/PlainYearMonth/since", "since()")}} oder {{jsxref("Temporal/PlainYearMonth/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
subtract(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Dauer darstellt, die von diesem Jahr-Monat subtrahiert werden soll. Sie wird unter Verwendung desselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt konvertiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standardwert)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth`-Objekt, das den Jahr-Monat darstellt, der durch das originale `PlainYearMonth` minus der Dauer angegeben ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, was ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche sind.

## Beschreibung

Das Subtrahieren einer Dauer ist gleichbedeutend mit dem [Addieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten die gleichen Überlegungen. Beim Subtrahieren einer positiven Dauer wird von Ende des Jahr-Monats rückwärts gearbeitet, sodass jede Erhöhung kleiner als die Länge des Monats ignoriert wird.

## Beispiele

### Subtrahieren einer Dauer

```js
const start = Temporal.PlainYearMonth.from("2022-01");
const end = start.subtract({ years: 1, months: 2, weeks: 3, days: 4 });
console.log(end.toString()); // 2020-11
```

Für mehr Beispiele siehe {{jsxref("Temporal/PlainYearMonth/add", "add()")}}.

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
