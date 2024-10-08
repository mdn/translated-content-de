---
title: Set.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`size`** Accessor-Eigenschaft von {{jsxref("Set")}} Instanzen gibt die Anzahl der (einzigartigen) Elemente in dieser Menge zurück.

{{EmbedInteractiveExample("pages/js/set-prototype-size.html")}}

## Beschreibung

Der Wert von `size` ist eine Ganzzahl, die angibt, wie viele Einträge das `Set`-Objekt hat. Eine Setter-Funktion für `size` ist `undefined`; Sie können diese Eigenschaft nicht ändern.

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
