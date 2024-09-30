---
title: "DOMStringList: item()-Methode"
short-title: item()
slug: Web/API/DOMStringList/item
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`item()`**-Methode gibt einen String aus einer [`DOMStringList`](/de/docs/Web/API/DOMStringList) nach Index zurück.

## Syntax

```js-nolint
item(index)
```

JavaScript bietet auch eine array-ähnliche Syntax in eckigen Klammern, um ein Element aus einer
`DOMStringList` nach Index zu erhalten:

```js
list[index];
```

### Parameter

- `index`
  - : Der Index des zu holenden Strings. Der Index ist nullbasiert.

### Rückgabewert

Der String an der Indexposition in der `DOMStringList`; ansonsten `null`, wenn der angegebene Index außerhalb des Bereichs liegt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn kein Argument angegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
