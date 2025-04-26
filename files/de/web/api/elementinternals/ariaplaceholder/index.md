---
title: "ElementInternals: ariaPlaceholder-Eigenschaft"
short-title: ariaPlaceholder
slug: Web/API/ElementInternals/ariaPlaceholder
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaPlaceholder`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)-Attributs wider, welches einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe helfen soll, wenn das Steuerelement keinen Wert hat.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können von vom Autor definierten Attributen überschrieben werden, aber stellen sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder überhaupt nicht hinzufügt. Für weitere Informationen siehe den [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaPlaceholder` auf "12345" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaPlaceholder = "12345";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: textbox-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
