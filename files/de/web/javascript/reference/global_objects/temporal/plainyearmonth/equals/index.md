---
title: Temporal.PlainYearMonth.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/equals
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`equals()`** Methode von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt `true` zurück, wenn dieser Jahr-Monat in seinem Wert gleich einem anderen Jahr-Monat ist (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl anhand ihrer zugrunde liegenden ISO-Datenwerte als auch ihrer Kalender verglichen, so dass zwei Jahr-Monate aus unterschiedlichen Kalendern von {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} als gleich angesehen werden können, jedoch nicht von `equals()`.

> [!NOTE]
> `PlainYearMonth` Objekte behalten einen Referenz-ISO-Tag, der ebenfalls bei der Vergleichsoperation verwendet wird. Dieser Tag wird automatisch beim Verwenden der {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} Methode gesetzt, kann jedoch manuell mit dem {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} Konstruktor gesetzt werden, was dazu führen kann, dass zwei gleichwertige Jahr-Monate als unterschiedlich angesehen werden, wenn sie verschiedene Referenztage haben. Aus diesem Grund sollten Sie vermeiden, den Konstruktor direkt zu verwenden und stattdessen die `from()` Methode bevorzugen.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainYearMonth")}} Instanz, die den anderen Jahr-Monat darstellt, der verglichen werden soll. Es wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} in ein `Temporal.PlainYearMonth` Objekt konvertiert.

### Rückgabewert

`true`, wenn dieser Jahr-Monat sowohl im Datum als auch im Kalenderwert gleich `other` ist, andernfalls `false`.

## Beispiele

### Verwendung von equals()

```js
const ym1 = Temporal.PlainYearMonth.from("2021-08");
const ym2 = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
console.log(ym1.equals(ym2)); // true

const ym3 = Temporal.PlainYearMonth.from("2021-08-01[u-ca=japanese]");
console.log(ym1.equals(ym3)); // false

const ym4 = Temporal.PlainYearMonth.from("2021-09");
console.log(ym1.equals(ym4)); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}}
