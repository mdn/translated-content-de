---
title: Set.prototype.delete()
short-title: delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

Die **`delete()`**-Methode von {{jsxref("Set")}}-Instanzen entfernt den angegebenen Wert aus diesem Set, wenn er sich im Set befindet.

{{InteractiveExample("JavaScript Demo: Set.prototype.delete()")}}

```js interactive-example
const set = new Set();
set.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });

// Delete any point with `x > 10`.
set.forEach((point) => {
  if (point.x > 10) {
    set.delete(point);
  }
});

console.log(set.size);
// Expected output: 1
```

## Syntax

```js-nolint
setInstance.delete(value)
```

### Parameter

- `value`
  - : Der Wert, der aus dem `Set`-Objekt entfernt werden soll. Objekte werden nach {{Glossary("Object_reference", "Referenz")}} und nicht nach Wert verglichen.

### Rückgabewert

`true`, wenn ein Wert im `Set`-Objekt erfolgreich entfernt wurde. `false`, wenn der Wert im `Set` nicht gefunden wird.

## Beispiele

### Verwendung von delete()

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.delete("bar")); // false; no "bar" element found to be deleted.
console.log(mySet.delete("foo")); // true; successfully removed.

console.log(mySet.has("foo")); // false; the "foo" element is no longer present.
```

### Löschen eines Objekts aus einem Set

Da Objekte nach Referenz verglichen werden, müssen Sie sie löschen, indem Sie einzelne Eigenschaften überprüfen, wenn Sie keine Referenz auf das ursprüngliche Objekt haben.

```js
const setObj = new Set(); // Create a new set.

setObj.add({ x: 10, y: 20 }); // Add object in the set.

setObj.add({ x: 20, y: 30 }); // Add object in the set.

// Delete any point with `x > 10`.
setObj.forEach((point) => {
  if (point.x > 10) {
    setObj.delete(point);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.clear()")}}
- {{jsxref("Set.prototype.has()")}}
