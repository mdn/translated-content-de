---
title: "ElementInternals: ariaValueMax-Eigenschaft"
short-title: ariaValueMax
slug: Web/API/ElementInternals/ariaValueMax
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaValueMax`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attributs wider, welches den maximal zulässigen Wert für ein Bereichs-Widget definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, aber es wird sichergestellt, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine Zahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaValueMax` auf "20" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaValueMax = "20";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
