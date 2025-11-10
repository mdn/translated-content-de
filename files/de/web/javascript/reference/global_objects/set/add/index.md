---
title: Set.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

Die **`add()`** Methode von {{jsxref("Set")}} Instanzen fügt den angegebenen Wert in dieses Set ein, sofern er nicht bereits vorhanden ist.

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
  - : Der Wert, der dem `Set` Objekt hinzugefügt werden soll. Objekte werden durch {{Glossary("Object_reference", "Referenz")}} verglichen, nicht durch den Wert.

### Rückgabewert

Das `Set` Objekt.

## Beispiele

### Verwendung von add()

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
