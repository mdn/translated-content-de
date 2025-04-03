---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die **`toLocaleString()`** Methode von {{jsxref("Object")}} Instanzen gibt eine Zeichenkette zurück, die dieses Objekt darstellt. Diese Methode soll von abgeleiteten Objekten für länderspezifische Zwecke überschrieben werden.

{{InteractiveExample("JavaScript Demo: Object.prototype.toLocaleString()")}}

```js interactive-example
const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date1.toLocaleString("ar-EG"));
// Expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const number1 = 123456.789;

console.log(number1.toLocaleString("de-DE"));
// Expected output: "123.456,789"
```

## Syntax

```js-nolint
toLocaleString()
```

### Parameter

Keine. Dennoch sollten alle Objekte, die diese Methode überschreiben, höchstens zwei Parameter akzeptieren, die `locales` und `options` entsprechen, wie z. B. {{jsxref("Number.prototype.toLocaleString")}}. Die Parameterpositionen sollten nicht für andere Zwecke verwendet werden.

### Rückgabewert

Der Rückgabewert des Aufrufs von `this.toString()`.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (das heißt, alle außer Objekten mit [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toLocaleString()` Methode. `toLocaleString` von {{jsxref("Object")}} gibt das Ergebnis des Aufrufs von {{jsxref("Object/toString", "this.toString()")}} zurück.

Diese Funktion wird bereitgestellt, um Objekten eine generische `toLocaleString` Methode zu bieten, auch wenn nicht alle sie nutzen. Im Kern der Sprache überschreiben folgende eingebaute Objekte `toLocaleString`, um länderspezifische Formatierungen zu bieten:

- {{jsxref("Array")}}: {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}}: {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}}: {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("TypedArray")}}: {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("BigInt")}}: {{jsxref("BigInt.prototype.toLocaleString()")}}

## Beispiele

### Verwendung der grundlegenden toLocaleString() Methode

Die grundlegende `toLocaleString()` Methode ruft einfach `toString()` auf.

```js
const obj = {
  toString() {
    return "My Object";
  },
};
console.log(obj.toLocaleString()); // "My Object"
```

### Array toLocaleString() Überschreibung

{{jsxref("Array.prototype.toLocaleString()")}} wird verwendet, um Array-Werte als Zeichenkette auszugeben, indem die `toLocaleString()` Methode jedes Elementes aufgerufen und die Ergebnisse mit einem länderspezifischen Trennzeichen verbunden werden. Zum Beispiel:

```js
const testArray = [4, 7, 10];

const euroPrices = testArray.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"
```

### Date toLocaleString() Überschreibung

{{jsxref("Date.prototype.toLocaleString()")}} wird verwendet, um Datumsanzeigen bereitzustellen, die für spezifische Regionen besser geeignet sind. Zum Beispiel:

```js
const testDate = new Date();
// "Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"

const deDate = testDate.toLocaleString("de");
// "29.5.2020, 18:04:24"

const frDate = testDate.toLocaleString("fr");
// "29/05/2020, 18:04:24"
```

### Number toLocaleString() Überschreibung

{{jsxref("Number.prototype.toLocaleString()")}} wird verwendet, um Zahlenanzeigen bereitzustellen, die für spezifische Regionen besser geeignet sind, z. B. mit den korrekten Trennzeichen. Zum Beispiel:

```js
const testNumber = 2901234564;
// "2901234564"

const deNumber = testNumber.toLocaleString("de");
// "2.901.234.564"

const frNumber = testNumber.toLocaleString("fr");
// "2 901 234 564"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.toString()")}}
