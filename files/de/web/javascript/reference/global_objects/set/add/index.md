---
title: Set.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`add()`**-Methode von {{jsxref("Set")}}-Instanzen fügt diesem Set ein neues Element mit einem angegebenen Wert hinzu, falls nicht bereits ein Element mit demselben Wert in diesem Set vorhanden ist.

{{InteractiveExample("JavaScript Demo: Set.prototype.add()")}}

```js interactive-example
const set = new Set();

set.add(42);
set.add(42);
set.add(13);

for (const item of set) {
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
  - : Der Wert des Elements, das dem `Set`-Objekt hinzugefügt werden soll.

### Rückgabewert

Das `Set`-Objekt mit hinzugefügtem Wert.

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
