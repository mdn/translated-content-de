---
title: Temporal.PlainMonthDay.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/equals
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`equals()`** Methode von {{jsxref("Temporal.PlainMonthDay")}} Instanzen gibt `true` zurück, wenn dieser Monat-Tag dem Wert eines anderen Monat-Tags entspricht (in einer Form, die durch {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} konvertierbar ist), und `false` ansonsten. Sie werden sowohl nach ihren zugrunde liegenden ISO-Datumswerten als auch nach ihren Kalendern verglichen.

> **Hinweis:** `PlainMonthDay` Objekte behalten ein Referenz-ISO-Jahr, welches ebenfalls im Vergleich verwendet wird. Dieses Jahr wird automatisch gesetzt, wenn die Methode {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} verwendet wird, kann jedoch manuell mit dem {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} Konstruktor festgelegt werden, was dazu führt, dass zwei äquivalente Monat-Tage als unterschiedlich betrachtet werden, wenn sie unterschiedliche Referenzjahre haben. Aus diesem Grund sollten Sie es vermeiden, den Konstruktor direkt zu verwenden und stattdessen die `from()` Methode bevorzugen.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainMonthDay")}} Instanz, die den anderen Monat-Tag repräsentiert, mit dem verglichen werden soll. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} in ein `Temporal.PlainMonthDay` Objekt konvertiert.

### Rückgabewert

`true` wenn dieser Monat-Tag sowohl im Datumswert als auch im Kalender gleich `other` ist, `false` andernfalls.

## Beispiele

### Verwendung von equals()

```js
const md1 = Temporal.PlainMonthDay.from("2021-08-01");
const md2 = Temporal.PlainMonthDay.from({ year: 2020, month: 8, day: 1 }); // Year doesn't matter
console.log(md1.equals(md2)); // true

const md3 = Temporal.PlainMonthDay.from("2021-08-01[u-ca=japanese]");
console.log(md1.equals(md3)); // false

const md4 = Temporal.PlainMonthDay.from("2021-08-02");
console.log(md1.equals(md4)); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
