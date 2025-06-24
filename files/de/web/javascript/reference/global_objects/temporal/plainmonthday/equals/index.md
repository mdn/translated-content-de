---
title: Temporal.PlainMonthDay.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/equals
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}{{SeeCompatTable}}

Die **`equals()`** Methode von {{jsxref("Temporal.PlainMonthDay")}} Instanzen liefert `true` zurück, wenn dieser Monat-Tag einem anderen Monat-Tag wertmäßig entspricht (in einer Form, die durch {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl anhand ihrer zugrunde liegenden ISO-Datenwerte als auch ihrer Kalender verglichen.

> [!NOTE] > `PlainMonthDay` Objekte behalten ein Referenz-ISO-Jahr, das ebenfalls im Vergleich verwendet wird. Dieses Jahr wird automatisch gesetzt, wenn die Methode {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} verwendet wird, kann aber manuell mit dem {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} Konstruktor gesetzt werden, was dazu führen kann, dass zwei äquivalente Monat-Tage als unterschiedlich betrachtet werden, wenn sie verschiedene Referenzjahre haben. Aus diesem Grund sollten Sie vermeiden, den Konstruktor direkt zu verwenden und stattdessen die Methode `from()` bevorzugen.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainMonthDay")}} Instanz, die den anderen Monat-Tag darstellt, der verglichen werden soll. Er wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} in ein `Temporal.PlainMonthDay` Objekt konvertiert.

### Rückgabewert

`true`, wenn dieser Monat-Tag in sowohl seinem Datum als auch in seinem Kalender gleich `other` ist, andernfalls `false`.

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
