---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

Die **`delete()`**-Methode von {{jsxref("Set")}}-Instanzen entfernt einen angegebenen Wert aus diesem Set, falls er sich im Set befindet.

{{EmbedInteractiveExample("pages/js/set-prototype-delete.html")}}

## Syntax

```js-nolint
setInstance.delete(value)
```

### Parameter

- `value`
  - : Der Wert, der aus dem `Set` entfernt werden soll.

### Rückgabewert

Gibt `true` zurück, wenn `value` bereits im
`Set` war; andernfalls `false`.

## Beispiele

### Verwenden der delete()-Methode

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.delete("bar")); // false; no "bar" element found to be deleted.
console.log(mySet.delete("foo")); // true; successfully removed.

console.log(mySet.has("foo")); // false; the "foo" element is no longer present.
```

### Löschen eines Objekts aus einem Set

Da Objekte durch Referenz verglichen werden, müssen Sie sie durch Überprüfung einzelner Eigenschaften löschen, wenn Sie keine Referenz zum ursprünglichen Objekt haben.

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
