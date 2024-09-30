---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

Die **`toLocaleString()`**-Methode von {{jsxref("Object")}}-Instanzen gibt eine Zeichenkette zurück, die dieses Objekt darstellt. Diese Methode ist für eine Überschreibung durch abgeleitete Objekte für lokalisierungsspezifische Zwecke vorgesehen.

{{EmbedInteractiveExample("pages/js/object-prototype-tolocalestring.html")}}

## Syntax

```js-nolint
toLocaleString()
```

### Parameter

Keine. Alle Objekte, die diese Methode überschreiben, sollten jedoch maximal zwei Parameter akzeptieren, die `locales` und `options` entsprechen, wie z. B. {{jsxref("Date.prototype.toLocaleString")}}. Die Parameterpositionen sollten nicht für andere Zwecke verwendet werden.

### Rückgabewert

Der Rückgabewert von `this.toString()`.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (das heißt alle außer [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die Methode `toLocaleString()`. Das `toLocaleString` von {{jsxref("Object")}} gibt das Ergebnis des Aufrufs von {{jsxref("Object/toString", "this.toString()")}} zurück.

Diese Funktion wird bereitgestellt, um Objekten eine generische `toLocaleString`-Methode zu geben, auch wenn nicht alle sie verwenden mögen. Im Kern der Sprache überschreiben diese eingebauten Objekte `toLocaleString`, um lokalisierungsspezifische Formatierungen bereitzustellen:

- {{jsxref("Array")}}: {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}}: {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}}: {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("TypedArray")}}: {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("BigInt")}}: {{jsxref("BigInt.prototype.toLocaleString()")}}

## Beispiele

### Verwendung der Basis-ToLocaleString()-Methode

Die Basis-`toLocaleString()`-Methode ruft einfach `toString()` auf.

```js
const obj = {
  toString() {
    return "My Object";
  },
};
console.log(obj.toLocaleString()); // "My Object"
```

### Array-ToLocaleString()-Überschreibung

{{jsxref("Array.prototype.toLocaleString()")}} wird verwendet, um Array-Werte als Zeichenkette auszugeben, indem die Methode `toLocaleString()` jedes Elements aufgerufen und die Ergebnisse mit einem lokalisierungsspezifischen Trennzeichen verbunden werden. Zum Beispiel:

```js
const testArray = [4, 7, 10];

const euroPrices = testArray.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"
```

### Date-ToLocaleString()-Überschreibung

{{jsxref("Date.prototype.toLocaleString()")}} wird verwendet, um Datumsanzeigen auszugeben, die für spezifische Regionen besser geeignet sind. Zum Beispiel:

```js
const testDate = new Date();
// "Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"

const deDate = testDate.toLocaleString("de");
// "29.5.2020, 18:04:24"

const frDate = testDate.toLocaleString("fr");
// "29/05/2020, 18:04:24"
```

### Number-ToLocaleString()-Überschreibung

{{jsxref("Number.prototype.toLocaleString()")}} wird verwendet, um Zahldarstellungen auszugeben, die für spezifische Regionen besser geeignet sind, z. B. mit den richtigen Trennern. Zum Beispiel:

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
