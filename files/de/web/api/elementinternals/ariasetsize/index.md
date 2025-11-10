---
title: "ElementInternals: ariaSetSize-Eigenschaft"
short-title: ariaSetSize
slug: Web/API/ElementInternals/ariaSetSize
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaSetSize`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)-Attributs wider, welches die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumelementen definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, aber es wird sichergestellt, dass die Standard-Semantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie gar nicht erst hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaSetSize` auf "4" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaSetSize = "4";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: tab-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
