---
title: Set.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`add()`**-Methode von {{jsxref("Set")}}-Instanzen fügt ein neues Element mit einem angegebenen Wert in diese Menge ein, wenn sich nicht bereits ein Element mit demselben Wert in dieser Menge befindet.

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

Das `Set`-Objekt mit hinzugefügtem Wert.

## Beispiele

### Verwendung der `add()`-Methode

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
