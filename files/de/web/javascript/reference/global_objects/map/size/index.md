---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

Die **`size`**-Zugriffseigenschaft von {{jsxref("Map")}}-Instanzen gibt die Anzahl der Elemente in dieser Map zurück.

{{EmbedInteractiveExample("pages/js/map-prototype-size.html")}}

## Beschreibung

Der Wert von `size` ist eine Ganzzahl, die angibt, wie viele Einträge das `Map`-Objekt hat. Eine Set-Accessor-Funktion für `size` ist `undefined`; Sie können diese Eigenschaft nicht ändern.

## Beispiele

### Nutzung von size

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
