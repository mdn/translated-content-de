---
title: Temporal.PlainMonthDay.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/equals
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die Methode **`equals()`** von {{jsxref("Temporal.PlainMonthDay")}} Instanzen gibt `true` zurück, wenn dieser Monat-Tag in seinem Wert mit einem anderen Monat-Tag gleichwertig ist (in einer Form, die durch {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl durch ihre zugrunde liegenden ISO-Datenwerte als auch durch ihre Kalender verglichen.

> **Hinweis:** `PlainMonthDay` Objekte behalten ein Referenz-ISO-Jahr bei, das ebenfalls im Vergleich verwendet wird. Dieses Jahr wird automatisch gesetzt, wenn die Methode {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} verwendet wird, kann aber manuell mit dem {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} Konstruktor gesetzt werden, was dazu führen kann, dass zwei gleichwertige Monat-Tage als unterschiedlich angesehen werden, wenn sie verschiedene Referenzjahre haben. Aus diesem Grund sollten Sie vermeiden, den Konstruktor direkt zu verwenden, und stattdessen die `from()` Methode bevorzugen.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainMonthDay")}} Instanz, die den anderen zu vergleichenden Monat-Tag darstellt. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} in ein `Temporal.PlainMonthDay` Objekt konvertiert.

### Rückgabewert

`true`, wenn dieser Monat-Tag sowohl in ihrem Datumswert als auch in ihrem Kalender gleich `other` ist, andernfalls `false`.

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
