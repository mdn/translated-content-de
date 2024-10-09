---
title: "DOMStringList: item()-Methode"
short-title: item()
slug: Web/API/DOMStringList/item
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`item()`**-Methode gibt einen String aus einer [`DOMStringList`](/de/docs/Web/API/DOMStringList) anhand eines Index zurück.

## Syntax

```js-nolint
item(index)
```

JavaScript bietet auch eine array-ähnliche Klammer-Syntax, um ein Element aus einer `DOMStringList` anhand seines Indexes zu erhalten:

```js
list[index];
```

### Parameter

- `index`
  - : der Index des Strings, den Sie abrufen möchten. Der Index ist nullbasiert.

### Rückgabewert

Der String an der Indexposition in der `DOMStringList`; andernfalls `null`, wenn der angegebene Index außerhalb des Bereichs liegt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn kein Argument angegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
