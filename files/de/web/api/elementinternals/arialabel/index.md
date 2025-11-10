---
title: "ElementInternals: ariaLabel-Eigenschaft"
short-title: ariaLabel
slug: Web/API/ElementInternals/ariaLabel
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaLabel`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs wider, das einen String-Wert definiert, der das aktuelle Element beschreibt.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element festzulegen. Diese können von vom Autor definierten Attributen überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder gar nicht erst hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaLabel` auf "close" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaLabel = "close";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
