---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`add()`**-Methode von {{jsxref("Set")}}-Instanzen fügt ein neues Element mit einem angegebenen Wert in diesen `Set` ein, falls ein Element mit demselben Wert nicht bereits in diesem `Set` vorhanden ist.

{{InteractiveExample("JavaScript Demo: Set.prototype.add()")}}

```js interactive-example
const set1 = new Set();

set1.add(42);
set1.add(42);
set1.add(13);

for (const item of set1) {
  console.log(item);
  // Expected output: 42
  // Expected output: 13
}
```

## Syntax

```js-nolint
add(value)
```

### Parameter

- `value`
  - : Der Wert des Elements, das zum `Set`-Objekt hinzugefügt werden soll.

### Rückgabewert

Das `Set`-Objekt mit dem hinzugefügten Wert.

## Beispiele

### Verwendung der add()-Methode

```js
const mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // chainable

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
