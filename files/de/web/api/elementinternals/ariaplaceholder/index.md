---
title: "ElementInternals: ariaPlaceholder-Eigenschaft"
short-title: ariaPlaceholder
slug: Web/API/ElementInternals/ariaPlaceholder
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaPlaceholder`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)-Attributs wider, welches einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe helfen soll, wenn das Steuerungselement keinen Wert hat.

> [!NOTE]
> Das Festlegen von ARIA-Attributen auf `ElementInternals` ermöglicht die Definition von Standard-Semantiken auf einem benutzerdefinierten Element. Diese können durch vom Autor definierte Attribute überschrieben werden, jedoch wird sichergestellt, dass Standard-Semantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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

- [ARIA: textbox-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
