---
title: Set.prototype.delete()
short-title: delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`delete()`** Methode von {{jsxref("Set")}} Instanzen entfernt einen angegebenen Wert aus diesem Set, sofern er im Set vorhanden ist.

{{InteractiveExample("JavaScript Demo: Set.prototype.delete()")}}

```js interactive-example
const set1 = new Set();
set1.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });

// Delete any point with `x > 10`.
set1.forEach((point) => {
  if (point.x > 10) {
    set1.delete(point);
  }
});

console.log(set1.size);
// Expected output: 1
```

## Syntax

```js-nolint
setInstance.delete(value)
```

### Parameter

- `value`
  - : Der Wert, der aus `Set` entfernt werden soll.

### Rückgabewert

Gibt `true` zurück, wenn `value` bereits in
`Set` war; ansonsten `false`.

## Beispiele

### Verwendung der delete() Methode

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.delete("bar")); // false; no "bar" element found to be deleted.
console.log(mySet.delete("foo")); // true; successfully removed.

console.log(mySet.has("foo")); // false; the "foo" element is no longer present.
```

### Löschen eines Objekts aus einem Set

Da Objekte nach Referenz verglichen werden, müssen Sie sie durch Überprüfung einzelner Eigenschaften löschen, wenn Sie keinen Verweis auf das Originalobjekt haben.

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
- {{jsxref("Set.prototype.clear()")}}
