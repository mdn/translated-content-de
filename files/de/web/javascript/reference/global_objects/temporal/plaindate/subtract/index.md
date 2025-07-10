---
title: Temporal.PlainDate.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/subtract
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`subtract()`**-Methode von {{jsxref("Temporal.PlainDate")}} Instanzen gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum um eine gegebene Dauer (in einer Form umwandelbar durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}) zurückversetzt darstellt.

Wenn Sie zwei Daten subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/PlainDate/since", "since()")}} oder {{jsxref("Temporal/PlainDate/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
subtract(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine von diesem Datum abzuziehende Dauer darstellt. Sie wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird innerhalb des gültigen Bereichs [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird geworfen, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, das das durch das ursprüngliche `PlainDate` angegebene Datum minus der Dauer darstellt.

## Beschreibung

Das Subtrahieren einer Dauer entspricht dem [Addieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), sodass alle gleichen Überlegungen zutreffen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird geworfen, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, der ±(10<sup>8</sup> + 1) Tage oder etwa ±273,972.6 Jahre ab der Unix-Epoche umfasst.

## Beispiele

### Subtrahieren einer Dauer

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
