---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

Die **`add()`** Methode von {{jsxref("Set")}} Instanzen fügt ein neues Element mit einem angegebenen Wert in dieses Set ein, wenn sich noch kein Element mit demselben Wert in diesem Set befindet.

{{EmbedInteractiveExample("pages/js/set-prototype-add.html")}}

## Syntax

```js-nolint
add(value)
```

### Parameter

- `value`
  - : Der Wert des hinzuzufügenden Elements zum `Set` Objekt.

### Rückgabewert

Das `Set` Objekt mit hinzugefügtem Wert.

## Beispiele

### Verwendung der add() Methode

```js
const mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // verkettbar

console.log(mySet);
// Set [1, 5, "some text"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}