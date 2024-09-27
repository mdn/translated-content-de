---
title: "HTMLAllCollection: namedItem() Methode"
short-title: namedItem()
slug: Web/API/HTMLAllCollection/namedItem
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("DOM")}}

Die **`namedItem()`** Methode der [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection)-Schnittstelle gibt das erste [`Element`](/de/docs/Web/API/Element) in der Sammlung zurück, dessen `id`- oder `name`-Attribut mit dem angegebenen Namen übereinstimmt, oder `null`, wenn kein Element übereinstimmt.

## Syntax

```js-nolint
namedItem(name)
```

### Parameter

- `name`
  - : Ein String, der den Wert des `id`- oder `name`-Attributs des gesuchten Elements darstellt.

### Rückgabewert

Das erste [`Element`](/de/docs/Web/API/Element) in der [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection), das mit dem `name` übereinstimmt, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn es kein solches gibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
