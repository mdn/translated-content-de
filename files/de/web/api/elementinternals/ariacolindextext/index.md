---
title: ElementInternals.ariaColIndexText
slug: Web/API/ElementInternals/ariaColIndexText
l10n:
  sourceCommit: 8b920a5e7567dcc9d642dfbd704b0ddbe2005d30
---

{{APIRef("Web Components")}}

Die **`ariaColIndexText`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext)-Attributs wider, welches eine menschenlesbare Textalternative zum aria-colindex definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht die Definition von Standardsemantiken für ein benutzerdefiniertes Element. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaColIndexText` auf "Column name" gesetzt.

```js
this.internals_.ariaColIndexText = "Column name";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table Rolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
