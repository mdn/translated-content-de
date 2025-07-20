---
title: Object.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`toLocaleString()`** Methode von {{jsxref("Object")}} Instanzen gibt einen String zurück, der dieses Objekt repräsentiert. Diese Methode soll von abgeleiteten Objekten für lokal-spezifische Zwecke überschrieben werden.

{{InteractiveExample("JavaScript Demo: Object.prototype.toLocaleString()")}}

```js interactive-example
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date.toLocaleString("ar-EG"));
// Expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const number = 123456.789;

console.log(number.toLocaleString("de-DE"));
// Expected output: "123.456,789"
```

## Syntax

```js-nolint
toLocaleString()
```

### Parameter

Keine. Es wird jedoch erwartet, dass alle Objekte, die diese Methode überschreiben, maximal zwei Parameter akzeptieren, die `locales` und `options` entsprechen, wie z.B. {{jsxref("Number.prototype.toLocaleString")}}. Die Parameterpositionen sollten nicht für andere Zwecke verwendet werden.

### Rückgabewert

Der Rückgabewert des Aufrufs von `this.toString()`.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (das heißt alle außer [`null`-Prototyp Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) erben die `toLocaleString()` Methode. {{jsxref("Object")}}'s `toLocaleString` gibt das Ergebnis des Aufrufs von {{jsxref("Object/toString", "this.toString()")}} zurück.

Diese Funktion wird bereitgestellt, um Objekten eine generische `toLocaleString` Methode zu geben, obwohl nicht alle sie nutzen mögen. In der Kernsprache überschreiben diese eingebauten Objekte `toLocaleString`, um lokal-spezifische Formatierungen bereitzustellen:

- {{jsxref("Array")}}: {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}}: {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}}: {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("TypedArray")}}: {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("BigInt")}}: {{jsxref("BigInt.prototype.toLocaleString()")}}

## Beispiele

### Verwendung der Basis toLocaleString() Methode

Die Basis `toLocaleString()` Methode ruft einfach `toString()` auf.

```js
const obj = {
  toString() {
    return "My Object";
  },
};
console.log(obj.toLocaleString()); // "My Object"
```

### Überschreibung von Array toLocaleString()

{{jsxref("Array.prototype.toLocaleString()")}} wird verwendet, um Array-Werte als String auszugeben, indem die `toLocaleString()` Methode jedes Elements aufgerufen wird und die Ergebnisse mit einem lokal-spezifischen Trennzeichen verbunden werden. Zum Beispiel:

```js
const testArray = [4, 7, 10];

const euroPrices = testArray.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"
```

### Überschreibung von Date toLocaleString()

{{jsxref("Date.prototype.toLocaleString()")}} wird verwendet, um Datumsanzeigen auszugeben, die für spezifische Lokale besser geeignet sind. Zum Beispiel:

```js
const testDate = new Date();
// "Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"

const deDate = testDate.toLocaleString("de");
// "29.5.2020, 18:04:24"

const frDate = testDate.toLocaleString("fr");
// "29/05/2020, 18:04:24"
```

### Überschreibung von Number toLocaleString()

{{jsxref("Number.prototype.toLocaleString()")}} wird verwendet, um Zahldarstellungen auszugeben, die für spezifische Lokale besser geeignet sind, z.B. mit den richtigen Trennzeichen. Zum Beispiel:

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
