---
title: "ElementInternals: ariaLabel-Eigenschaft"
short-title: ariaLabel
slug: Web/API/ElementInternals/ariaLabel
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaLabel`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs wider, welches einen Zeichenkettenwert definiert, der das aktuelle Element beschriftet.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können von den Autoren durch Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, falls die Autoren diese Attribute löschen oder sie überhaupt nicht hinzufügen. Für weitere Informationen siehe den [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaLabel` auf "close" gesetzt.

```js
this.internals_.ariaLabel = "close";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
