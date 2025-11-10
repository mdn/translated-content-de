---
title: Set.prototype.size
short-title: size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`size`** Zugriffseigenschaft von {{jsxref("Set")}}-Instanzen gibt die Anzahl der (einzigartigen) Elemente in diesem Set zurück.

{{InteractiveExample("JavaScript Demo: Set.prototype.size")}}

```js interactive-example
const set = new Set();
const object = {};

set.add(42);
set.add("forty two");
set.add("forty two");
set.add(object);

console.log(set.size);
// Expected output: 3
```

## Beschreibung

Der Wert von `size` ist eine Ganzzahl, die angibt, wie viele Einträge das `Set`-Objekt hat. Eine Set-Accessor-Funktion für `size` ist `undefined`; Sie können diese Eigenschaft nicht ändern.

## Beispiele

### Verwendung von size

```js
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet.size); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Set")}}
