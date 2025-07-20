---
title: Map.prototype.size
short-title: size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`size`** Zugriffs-Eigenschaft von {{jsxref("Map")}} Instanzen gibt die Anzahl der Elemente in dieser Map zurück.

{{InteractiveExample("JavaScript Demo: Map.prototype.size")}}

```js interactive-example
const map = new Map();

map.set("a", "alpha");
map.set("b", "beta");
map.set("g", "gamma");

console.log(map.size);
// Expected output: 3
```

## Beschreibung

Der Wert von `size` ist eine ganze Zahl, die angibt, wie viele Einträge das `Map` Objekt besitzt. Eine set-Zugriffsfunktion für `size` ist `undefined`; Sie können diese Eigenschaft nicht ändern.

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
