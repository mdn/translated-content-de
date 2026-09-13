---
title: ElementInternals.ariaRowIndexText
slug: Web/API/ElementInternals/ariaRowIndexText
l10n:
  sourceCommit: 868de6e278b0e5c635cea5ee4bb06d35fbc3e11b
---

{{APIRef("Web Components")}}

Die Eigenschaft **`ariaRowIndexText`** der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext) wider, das eine für Menschen lesbare Textalternative für aria-rowindex definiert.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantik für ein benutzerdefiniertes Element zu definieren. Diese kann durch vom Autor definierte Attribute überschrieben werden. Stellen Sie jedoch sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie gar nicht erst hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRowIndexText` auf „Heading row“ gesetzt.

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

- [ARIA: table-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
