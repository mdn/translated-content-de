---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`size`**-Zugriffseigenschaft von {{jsxref("Map")}}-Instanzen gibt die Anzahl der Elemente in dieser `Map` zurück.

{{InteractiveExample("JavaScript Demo: Map.prototype.size")}}

```js interactive-example
const map1 = new Map();

map1.set("a", "alpha");
map1.set("b", "beta");
map1.set("g", "gamma");

console.log(map1.size);
// Expected output: 3
```

## Beschreibung

Der Wert von `size` ist eine ganze Zahl, die angibt, wie viele Einträge das `Map`-Objekt besitzt. Eine Set-Accessor-Funktion für `size` ist `undefined`; Sie können diese Eigenschaft nicht ändern.

## Beispiele

### Verwendung von size

```js
const myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

console.log(myMap.size); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
