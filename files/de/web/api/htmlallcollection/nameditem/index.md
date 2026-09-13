---
title: "HTMLAllCollection: namedItem() Methode"
short-title: namedItem()
slug: Web/API/HTMLAllCollection/namedItem
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

{{APIRef("DOM")}}

Die **`namedItem()`** Methode des [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection) Interfaces gibt das erste [`Element`](/de/docs/Web/API/Element) in der Sammlung zurück, dessen `id`- oder `name`-Attribut mit dem angegebenen Namen übereinstimmt, oder `null`, wenn kein Element übereinstimmt.

## Syntax

```js-nolint
namedItem(name)
```

### Parameter

- `name`
  - : Ein String, der den Wert des `id`- oder `name`-Attributs des Elements darstellt, das wir suchen.

### Rückgabewert

Das erste [`Element`](/de/docs/Web/API/Element) in der [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection), das dem `name` entspricht, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn keines vorhanden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
