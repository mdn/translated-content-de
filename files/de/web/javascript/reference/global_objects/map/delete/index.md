---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

Die **`delete()`** Methode von {{jsxref("Map")}} Instanzen entfernt das angegebene Element aus dieser Map anhand des Schlüssels.

{{EmbedInteractiveExample("pages/js/map-prototype-delete.html")}}

## Syntax

```js-nolint
mapInstance.delete(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, das aus dem `Map` Objekt entfernt werden soll.

### Rückgabewert

`true`, wenn ein Element im `Map` Objekt vorhanden war und entfernt wurde, oder
`false`, wenn das Element nicht existiert.

## Beispiele

### Verwendung von delete()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.delete("bar")); // Returns true. Successfully removed.
console.log(myMap.has("bar")); // Returns false. The "bar" element is no longer present.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
