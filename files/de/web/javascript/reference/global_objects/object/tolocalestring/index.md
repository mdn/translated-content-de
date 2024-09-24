---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

Die **`toLocaleString()`**-Methode von {{jsxref("Object")}}-Instanzen gibt einen String zurück, der dieses Objekt repräsentiert. Diese Methode soll von abgeleiteten Objekten für lokalisierte Zwecke überschrieben werden.

{{EmbedInteractiveExample("pages/js/object-prototype-tolocalestring.html")}}

## Syntax

```js-nolint
toLocaleString()
```

### Parameter

Keine. Allerdings sollten alle Objekte, die diese Methode überschreiben, maximal zwei Parameter akzeptieren, die den `locales` und `options` entsprechen, wie etwa {{jsxref("Date.prototype.toLocaleString")}}. Die Parameterpositionen sollten nicht für andere Zwecke verwendet werden.

### Rückgabewert

Der Rückgabewert des Aufrufs von `this.toString()`.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (das heißt alle, außer Objekten mit [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toLocaleString()`-Methode. Die `toLocaleString` von {{jsxref("Object")}} gibt das Ergebnis des Aufrufs von {{jsxref("Object/toString", "this.toString()")}} zurück.

Diese Funktion wird bereitgestellt, um Objekte mit einer generischen `toLocaleString`-Methode auszustatten, auch wenn nicht alle diese Methode nutzen. In der Kernsprache überschreiben diese eingebauten Objekte `toLocaleString`, um eine lokalisierte Formatierung zu bieten:

- {{jsxref("Array")}}: {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}}: {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}}: {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("TypedArray")}}: {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("BigInt")}}: {{jsxref("BigInt.prototype.toLocaleString()")}}

## Beispiele

### Verwendung der grundlegenden toLocaleString() Methode

Die grundlegende `toLocaleString()`-Methode ruft einfach `toString()` auf.

```js
const obj = {
  toString() {
    return "My Object";
  },
};
console.log(obj.toLocaleString()); // "My Object"
```

### Array-Überschreibung von toLocaleString()

{{jsxref("Array.prototype.toLocaleString()")}} wird verwendet, um Array-Werte als String auszugeben, indem die `toLocaleString()`-Methode jedes Elements aufgerufen und die Ergebnisse mit einem lokalen spezifischen Separator verbunden werden. Zum Beispiel:

```js
const testArray = [4, 7, 10];

const euroPrices = testArray.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"
```

### Date-Überschreibung von toLocaleString()

{{jsxref("Date.prototype.toLocaleString()")}} wird verwendet, um Datumsausgaben zu erzeugen, die für bestimmte lokale Einstellungen besser geeignet sind. Zum Beispiel:

```js
const testDate = new Date();
// "Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"

const deDate = testDate.toLocaleString("de");
// "29.5.2020, 18:04:24"

const frDate = testDate.toLocaleString("fr");
// "29/05/2020, 18:04:24"
```

### Number-Überschreibung von toLocaleString()

{{jsxref("Number.prototype.toLocaleString()")}} wird verwendet, um Zahlendarstellungen zu erzeugen, die für bestimmte lokale Einstellungen besser geeignet sind, z.B. mit den richtigen Trennern. Zum Beispiel:

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
