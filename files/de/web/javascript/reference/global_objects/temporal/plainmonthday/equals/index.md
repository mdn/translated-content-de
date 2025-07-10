---
title: Temporal.PlainMonthDay.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/equals
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`equals()`**-Methode von {{jsxref("Temporal.PlainMonthDay")}}-Instanzen gibt `true` zurück, wenn dieser Monat-Tag im Wert einem anderen Monat-Tag entspricht (in einer Form, die durch {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl an ihren zugrundeliegenden ISO-Datenwerten als auch an ihren Kalendern verglichen.

> [!NOTE]
> `PlainMonthDay`-Objekte behalten ein Referenz-ISO-Jahr bei, das ebenfalls im Vergleich verwendet wird. Dieses Jahr wird automatisch festgelegt, wenn die Methode {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} verwendet wird, kann jedoch manuell mit dem {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}-Konstruktor festgelegt werden. Dadurch können zwei äquivalente Monat-Tage als unterschiedlich betrachtet werden, wenn sie unterschiedliche Referenzjahre haben. Aus diesem Grund sollten Sie den Konstruktor nicht direkt verwenden und stattdessen die `from()`-Methode bevorzugen.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainMonthDay")}}-Instanz, die den anderen zu vergleichenden Monat-Tag darstellt. Es wird unter Verwendung desselben Algorithmus wie {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} in ein `Temporal.PlainMonthDay`-Objekt konvertiert.

### Rückgabewert

`true`, wenn dieser Monat-Tag sowohl im Datum als auch im Kalender gleich `other` ist, andernfalls `false`.

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
