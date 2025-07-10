---
title: Object.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toLocaleString()`**-Methode von {{jsxref("Object")}}-Instanzen gibt eine Zeichenkette zurück, die dieses Objekt darstellt. Diese Methode ist dazu bestimmt, von abgeleiteten Objekten für lokalisierungsspezifische Zwecke überschrieben zu werden.

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

Keine. Allerdings wird erwartet, dass alle Objekte, die diese Methode überschreiben, höchstens zwei Parameter akzeptieren, die `locales` und `options` entsprechen, wie zum Beispiel {{jsxref("Number.prototype.toLocaleString")}}. Die Parameterpositionen sollten nicht für andere Zwecke verwendet werden.

### Rückgabewert

Der Rückgabewert des Aufrufs von `this.toString()`.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (also alle außer [‘null’-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toLocaleString()`-Methode. Die `toLocaleString`-Methode von {{jsxref("Object")}} gibt das Ergebnis des Aufrufs von {{jsxref("Object/toString", "this.toString()")}} zurück.

Diese Funktion wird bereitgestellt, um Objekten eine generische `toLocaleString`-Methode zu geben, auch wenn nicht alle sie nutzen. Im Kern der Sprache überschreiben diese eingebauten Objekte `toLocaleString`, um lokalisierungsspezifische Formatierungen bereitzustellen:

- {{jsxref("Array")}}: {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}}: {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}}: {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("TypedArray")}}: {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("BigInt")}}: {{jsxref("BigInt.prototype.toLocaleString()")}}

## Beispiele

### Verwendung der Basis toLocaleString()-Methode

Die Basis `toLocaleString()`-Methode ruft einfach `toString()` auf.

```js
const obj = {
  toString() {
    return "My Object";
  },
};
console.log(obj.toLocaleString()); // "My Object"
```

### Array toLocaleString()-Überschreibung

{{jsxref("Array.prototype.toLocaleString()")}} wird verwendet, um Array-Werte als Zeichenfolge auszugeben, indem die `toLocaleString()`-Methode jedes Elements aufgerufen und die Ergebnisse mit einem lokalisierungsspezifischen Separator verbunden werden. Zum Beispiel:

```js
const testArray = [4, 7, 10];

const euroPrices = testArray.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"
```

### Date toLocaleString()-Überschreibung

{{jsxref("Date.prototype.toLocaleString()")}} wird verwendet, um Datumsanzeigen auszugeben, die für spezifische Lokalisierungen besser geeignet sind. Zum Beispiel:

```js
const testDate = new Date();
// "Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"

const deDate = testDate.toLocaleString("de");
// "29.5.2020, 18:04:24"

const frDate = testDate.toLocaleString("fr");
// "29/05/2020, 18:04:24"
```

### Number toLocaleString()-Überschreibung

{{jsxref("Number.prototype.toLocaleString()")}} wird verwendet, um Zahlanzeigen auszugeben, die für spezifische Lokalisierungen besser geeignet sind, z. B. mit den richtigen Trennzeichen. Zum Beispiel:

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
