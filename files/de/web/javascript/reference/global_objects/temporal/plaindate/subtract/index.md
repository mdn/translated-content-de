---
title: Temporal.PlainDate.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/subtract
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die Methode **`subtract()`** von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum um eine angegebene Dauer zurückversetzt darstellt. Die Dauer muss in eine von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} unterstützte Form konvertierbar sein.

Wenn Sie zwei Datumswerte voneinander subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/PlainDate/since", "since()")}} oder {{jsxref("Temporal/PlainDate/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
subtract(duration, options)
```

### Parameter

- `duration`
  - : Eine Zeichenfolge, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine von diesem Datum abzuziehende Dauer darstellt. Der Wert wird mit demselben Algorithmus wie bei {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.
- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Eine Zeichenfolge, die das Verhalten festlegt, wenn eine Datumskomponente außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standardwert)
          - : Die Datumskomponente wird auf den [gültigen Bereich begrenzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des gültigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, das das durch das ursprüngliche `PlainDate` angegebene Datum abzüglich der Dauer darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis außerhalb des [darstellbaren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt. Dieser umfasst ±(10<sup>8</sup> + 1) Tage beziehungsweise ungefähr ±273.972,6 Jahre, gerechnet ab der Unix-Epoche.

## Beschreibung

Das Subtrahieren einer Dauer entspricht dem [Addieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated). Daher gelten dieselben Überlegungen.

## Beispiele

### Eine Dauer subtrahieren

```js
const start = Temporal.PlainDate.from("2022-01-01");
const end = start.subtract({ years: 1, months: 2, weeks: 3, days: 4 });
console.log(end.toString()); // 2020-10-07
```

Weitere Beispiele finden Sie unter {{jsxref("Temporal/PlainDate/add", "add()")}}.

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
