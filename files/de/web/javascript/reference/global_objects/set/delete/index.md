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
  - : Der zu entfernende Wert aus `Set`.

### Rückgabewert

Gibt `true` zurück, wenn `value` bereits in
`Set` war; andernfalls `false`.

## Beispiele

### Verwenden der delete()-Methode

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.delete("bar")); // false; kein "bar"-Element gefunden, das gelöscht werden könnte.
console.log(mySet.delete("foo")); // true; erfolgreich entfernt.

console.log(mySet.has("foo")); // false; das "foo"-Element ist nicht mehr vorhanden.
```

### Löschen eines Objekts aus einem Set

Da Objekte durch Referenz verglichen werden, müssen Sie sie löschen, indem Sie einzelne Eigenschaften überprüfen, wenn Sie keine Referenz auf das originale Objekt haben.

```js
const setObj = new Set(); // Erstellen Sie ein neues Set.

setObj.add({ x: 10, y: 20 }); // Objekt im Set hinzufügen.

setObj.add({ x: 20, y: 30 }); // Objekt im Set hinzufügen.

// Löschen Sie jeden Punkt mit `x > 10`.
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
