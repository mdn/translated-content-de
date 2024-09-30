---
title: Date.prototype.setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}} {{Deprecated_Header}}

Die Methode **`setYear()`** von {{jsxref("Date")}}-Instanzen setzt das Jahr für ein angegebenes Datum gemäß der lokalen Zeit.

Allerdings setzt die veraltete Methode `setYear()` Jahreswerte anders fest als die bevorzugte Methode {{jsxref("Date/setFullYear", "setFullYear()")}}. In manchen Fällen unterscheidet sie sich auch von der Art und Weise wie `new Date()` und {{jsxref("Date.parse()")}} Jahreswerte festlegen. Insbesondere bei zweistelligen Zahlen, wie `22` und `61`:

- `setYear()` interpretiert jede zweistellige Zahl als eine Verschiebung zu `1900`; somit ergibt `date.setYear(22)` den Jahreswert `1922`, und `date.setYear(61)` den Jahreswert `1961`. (Im Gegensatz dazu ergibt `new Date(61, 1)` ebenfalls den Jahreswert `1961`, aber `new Date("2/1/22")` ergibt den Jahreswert `2022`; ähnlich verhält es sich mit {{jsxref("Date.parse()")}}).

- {{jsxref("Date/setFullYear", "setFullYear()")}} führt keine spezielle Interpretation durch, sondern verwendet den wörtlichen zweistelligen Wert, um das Jahr festzulegen; somit ergibt `date.setFullYear(61)` den Jahreswert `0061`, und `date.setFullYear(22)` den Jahreswert `0022`.

Aufgrund dieser Unterschiede im Verhalten sollten Sie die veraltete Methode `setYear()` nicht mehr verwenden, sondern stattdessen die bevorzugte Methode {{jsxref("Date/setFullYear", "setFullYear()")}} nutzen.

## Syntax

```js-nolint
setYear(yearValue)
```

### Parameter

- `yearValue`
  - : Eine Ganzzahl.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `yearValue` `NaN` ist (oder andere Werte, die zur [Zwangskonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) zu `NaN` führen, wie `undefined`), wird das Datum auf [Ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt, und `NaN` wird zurückgegeben.

## Beschreibung

Wenn `yearValue` eine Zahl zwischen 0 und 99 (einschließlich) ist, wird das Jahr für
`dateObj` auf `1900 + yearValue` gesetzt. Andernfalls wird das Jahr für
`dateObj` auf `yearValue` gesetzt.

## Beispiele

### Verwendung von setYear()

Die ersten beiden Zeilen setzen das Jahr auf 1996. Die dritte setzt das Jahr auf 2000.

```js
const theBigDay = new Date();

theBigDay.setYear(96);
theBigDay.setYear(1996);
theBigDay.setYear(2000);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Date.prototype.setYear` in `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
