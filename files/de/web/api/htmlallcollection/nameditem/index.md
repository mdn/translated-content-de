---
title: "HTMLAllCollection: namedItem() Methode"
short-title: namedItem()
slug: Web/API/HTMLAllCollection/namedItem
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("DOM")}}

Die **`namedItem()`**-Methode der {{domxref("HTMLAllCollection")}}-Schnittstelle gibt das erste {{domxref("Element")}} in der Sammlung zurück, dessen `id`- oder `name`-Attribut mit dem angegebenen Namen übereinstimmt, oder `null`, wenn kein Element übereinstimmt.

## Syntax

```js-nolint
namedItem(name)
```

### Parameter

- `name`
  - : Ein String, der den Wert des `id`- oder `name`-Attributs des gesuchten Elements darstellt.

### Rückgabewert

Das erste {{domxref("Element")}} in der {{domxref("HTMLAllCollection")}}, das mit dem `name` übereinstimmt, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn keines vorhanden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}