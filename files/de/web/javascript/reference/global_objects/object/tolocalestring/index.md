---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`toLocaleString()`** Methode von {{jsxref("Object")}} Instanzen gibt einen String zurück, der dieses Objekt repräsentiert. Diese Methode soll von abgeleiteten Objekten für länderspezifische Zwecke überschrieben werden.

{{EmbedInteractiveExample("pages/js/object-prototype-tolocalestring.html")}}

## Syntax

```js-nolint
toLocaleString()
```

### Parameter

Keine. Es wird jedoch erwartet, dass alle Objekte, die diese Methode überschreiben, höchstens zwei Parameter akzeptieren, die den `locales` und `options` entsprechen, wie bei {{jsxref("Number.prototype.toLocaleString")}}. Die Parameterpositionen sollten nicht für andere Zwecke verwendet werden.

### Rückgabewert

Der Rückgabewert des Aufrufs von `this.toString()`.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (das heißt, alle außer [`null`-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toLocaleString()` Methode. {{jsxref("Object")}}'s `toLocaleString` gibt das Ergebnis des Aufrufs von {{jsxref("Object/toString", "this.toString()")}} zurück.

Diese Funktion wird bereitgestellt, um Objekten eine generische `toLocaleString` Methode zu geben, auch wenn nicht alle sie verwenden. Im Kern der Sprache überschreiben diese eingebauten Objekte `toLocaleString`, um länderspezifische Formatierung bereitzustellen:

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

### Array toLocaleString() Überschreibung

{{jsxref("Array.prototype.toLocaleString()")}} wird verwendet, um Array-Werte als String zu drucken, indem die `toLocaleString()` Methode jedes Elements aufgerufen und die Ergebnisse mit einem länderspezifischen Trennzeichen verbunden werden. Zum Beispiel:

```js
const testArray = [4, 7, 10];

const euroPrices = testArray.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"
```

### Date toLocaleString() Überschreibung

{{jsxref("Date.prototype.toLocaleString()")}} wird verwendet, um Datumsausgaben bereitzustellen, die besser für spezielle Lokalisierungen geeignet sind. Zum Beispiel:

```js
const testDate = new Date();
// "Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"

const deDate = testDate.toLocaleString("de");
// "29.5.2020, 18:04:24"

const frDate = testDate.toLocaleString("fr");
// "29/05/2020, 18:04:24"
```

### Number toLocaleString() Überschreibung

{{jsxref("Number.prototype.toLocaleString()")}} wird verwendet, um Zifferndarstellungen bereitzustellen, die besser für spezielle Lokalisierungen geeignet sind, z.B. mit den richtigen Trennzeichen. Zum Beispiel:

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
