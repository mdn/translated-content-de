---
title: Temporal.PlainDate.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/subtract
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`subtract()`** Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum um eine angegebene Zeitspanne (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann) rückwärts verschoben darstellt.

Wenn Sie zwei Daten subtrahieren und eine Zeitspanne erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/PlainDate/since", "since()")}} oder {{jsxref("Temporal/PlainDate/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
subtract(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Zeitspanne darstellt, die von diesem Datum subtrahiert werden soll. Sie wird mit demselben Algorithmus in ein `Temporal.Duration`-Objekt umgewandelt wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeklemmt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, das das Datum darstellt, das durch das ursprüngliche `PlainDate` minus die Zeitspanne angegeben wird.

## Beschreibung

Das Subtrahieren einer Zeitspanne entspricht dem [Addieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten alle gleichen Überlegungen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, was ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche sind.

## Beispiele

### Eine Zeitspanne subtrahieren

```js
const start = Temporal.PlainDate.from("2022-01-01");
const end = start.subtract({ years: 1, months: 2, weeks: 3, days: 4 });
console.log(end.toString()); // 2020-10-07
```

Für weitere Beispiele siehe {{jsxref("Temporal/PlainDate/add", "add()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}}
- {{jsxref("Temporal/PlainDate/until", "Temporal.PlainDate.prototype.until()")}}
