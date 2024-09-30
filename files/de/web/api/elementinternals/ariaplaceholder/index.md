---
title: "ElementInternals: ariaPlaceholder-Eigenschaft"
short-title: ariaPlaceholder
slug: Web/API/ElementInternals/ariaPlaceholder
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaPlaceholder`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)-Attributs wider, welches einen kurzen Hinweis darstellt, um dem Benutzer bei der Dateneingabe zu helfen, wenn das Steuerelement keinen Wert hat.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaPlaceholder` auf "12345" gesetzt.

```js
this.internals_.ariaPlaceholder = "12345";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: Rolle textbox](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
