---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

Die **`delete()`**-Methode von {{jsxref("Map")}} Instanzen entfernt das angegebene Element aus dieser Map mittels des Schlüssels.

{{EmbedInteractiveExample("pages/js/map-prototype-delete.html")}}

## Syntax

```js-nolint
mapInstance.delete(key)
```

### Parameter

- `key`
  - : Der Schlüssel des zu entfernenden Elements aus dem `Map`-Objekt.

### Rückgabewert

`true`, wenn ein Element im `Map`-Objekt existierte und entfernt wurde, oder `false`, wenn das Element nicht existiert.

## Beispiele

### Verwendung von delete()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.delete("bar")); // Gibt true zurück. Erfolgreich entfernt.
console.log(myMap.has("bar")); // Gibt false zurück. Das "bar"-Element ist nicht mehr vorhanden.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
