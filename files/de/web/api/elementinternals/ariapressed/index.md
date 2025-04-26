---
title: "ElementInternals: ariaPressed-Eigenschaft"
short-title: ariaPressed
slug: Web/API/ElementInternals/ariaPressed
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaPressed`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attributs wider, das den aktuellen "gedrückten" Zustand von Umschaltknöpfen angibt.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, standardmäßige Semantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist gedrückt.
- `"false"`
  - : Das Element unterstützt es, gedrückt zu werden, ist aber derzeit nicht gedrückt.
- `"mixed"`
  - : Gibt einen gemischten Moduswert für einen Drei-Zustand-Umschaltknopf an.
- `"undefined"`
  - : Das Element unterstützt es nicht, gedrückt zu werden.

## Beispiele

In diesem Beispiel wird der Wert von `ariaPressed` auf "true" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaPressed = "true";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: button role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
