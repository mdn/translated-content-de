---
title: ElementInternals.ariaColIndexText
slug: Web/API/ElementInternals/ariaColIndexText
l10n:
  sourceCommit: 868de6e278b0e5c635cea5ee4bb06d35fbc3e11b
---

{{APIRef("Web Components")}}

Die Eigenschaft **`ariaColIndexText`** des Interfaces [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext) wider, das eine für Menschen lesbare Textalternative zu aria-colindex definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantik für ein benutzerdefiniertes Element zu definieren. Diese kann durch vom Autor definierte Attribute überschrieben werden, aber stellen Sie sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie gar nicht erst hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaColIndexText` auf „Column name“ gesetzt.

```js
class CustomEl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaColIndexText = "Column name";
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
