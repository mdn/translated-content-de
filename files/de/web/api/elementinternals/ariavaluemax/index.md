---
title: "ElementInternals: ariaValueMax-Eigenschaft"
short-title: ariaValueMax
slug: Web/API/ElementInternals/ariaValueMax
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`ariaValueMax`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attributs wider, welches den maximal zulässigen Wert für ein Bereichs-Widget definiert.

> [!NOTE]
> Das Setzen von `aria`-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standard-Semantiken beibehalten werden, falls der Autor diese Attribute löscht oder gar nicht erst hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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
