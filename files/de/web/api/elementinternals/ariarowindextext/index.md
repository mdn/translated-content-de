---
title: ElementInternals.ariaRowIndexText
slug: Web/API/ElementInternals/ariaRowIndexText
l10n:
  sourceCommit: 8b920a5e7567dcc9d642dfbd704b0ddbe2005d30
---

{{APIRef("Web Components")}}

Die **`ariaRowIndexText`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext)-Attributs wider, das eine für Menschen lesbare Textalternative zu aria-rowindex definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantik auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standard-Semantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie gar nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRowIndexText` auf "Heading row" gesetzt.

```js
this.internals_.ariaRowIndexText = "Heading row";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
