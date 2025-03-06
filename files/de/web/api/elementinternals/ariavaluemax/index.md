---
title: "ElementInternals: ariaValueMax Eigenschaft"
short-title: ariaValueMax
slug: Web/API/ElementInternals/ariaValueMax
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaValueMax`** Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle spiegelt den Wert des [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) Attributs wider, welches den maximal zulässigen Wert für ein Bereichs-Widget definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder es versäumt, sie hinzuzufügen. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine Zahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaValueMax` auf "20" gesetzt.

```js
this.internals_.ariaValueMax = "20";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
