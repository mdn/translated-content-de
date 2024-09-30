---
title: "ElementInternals: ariaDescription-Eigenschaft"
short-title: ariaDescription
slug: Web/API/ElementInternals/ariaDescription
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaDescription`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)-Attributs wider, das einen Zeichenfolgenwert definiert, der das aktuelle Element beschreibt oder kommentiert.

> [!NOTE]
> Das Setzen von Aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantik auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, aber stellen Sie sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein Zeichenfolge.

## Beispiele

In diesem Beispiel wird der Wert von `ariaDescription` auf "A description of this widget" gesetzt.

```js
this.internals_.ariaDescription = "A description of this widget";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
