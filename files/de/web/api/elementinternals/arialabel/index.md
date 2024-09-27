---
title: "ElementInternals: ariaLabel-Eigenschaft"
short-title: ariaLabel
slug: Web/API/ElementInternals/ariaLabel
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}}

Die **`ariaLabel`** Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs wider, das einen Zeichenkettenwert definiert, der das aktuelle Element bezeichnet.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass Standardsemantiken beibehalten werden, falls der Autor diese Attribute entfernt oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erläuterungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Eine Zeichenkette.

## Beispiele

In diesem Beispiel wird der Wert von `ariaLabel` auf "close" gesetzt.

```js
this.internals_.ariaLabel = "close";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
