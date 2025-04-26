---
title: ElementInternals.ariaRowIndexText
slug: Web/API/ElementInternals/ariaRowIndexText
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaRowIndexText`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)-Attributs wider, das einen menschenlesbaren Text als Alternative zu aria-rowindex definiert.

> [!NOTE]
> Indem Sie `aria`-Attribute auf `ElementInternals` setzen, erlauben Sie es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können von autorenspezifischen Attributen überschrieben werden, aber gewährleisten, dass die Standardsemantiken erhalten bleiben sollten, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Für mehr Informationen siehe das [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRowIndexText` auf "Heading row" gesetzt.

```js
class CustomEl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaRowIndexText = "Heading row";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
