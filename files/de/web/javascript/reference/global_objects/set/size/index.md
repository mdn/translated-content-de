---
title: Set.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`size`**-Zugriffseigenschaft von {{jsxref("Set")}}-Instanzen gibt die Anzahl der (einzigartigen) Elemente in diesem Set zurück.

{{InteractiveExample("JavaScript Demo: Set.prototype.size")}}

```js interactive-example
const set1 = new Set();
const object1 = {};

set1.add(42);
set1.add("forty two");
set1.add("forty two");
set1.add(object1);

console.log(set1.size);
// Expected output: 3
```

## Beschreibung

Der Wert von `size` ist eine ganze Zahl, die angibt, wie viele Einträge das `Set`-Objekt hat. Eine Set-Accessor-Funktion für `size` ist `undefined`; Sie können diese Eigenschaft nicht ändern.

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
