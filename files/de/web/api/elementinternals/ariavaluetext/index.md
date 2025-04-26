---
title: "ElementInternals: ariaValueText-Eigenschaft"
short-title: ariaValueText
slug: Web/API/ElementInternals/ariaValueText
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaValueText`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attributs wider, das den in menschlicher Sprache lesbaren Text als Alternative für aria-valuenow bei einem Bereichs-Widget definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken für ein benutzerdefiniertes Element zu definieren. Diese können von Autoren durch definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standard-Semantiken beibehalten werden, falls der Autor diese Attribute löscht oder gar nicht hinzufügt. Weitere Informationen finden Sie in der [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaValueText` auf "Sunday" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaValueText = "Sunday";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
