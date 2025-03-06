---
title: "ElementInternals: ariaDescription-Eigenschaft"
short-title: ariaDescription
slug: Web/API/ElementInternals/ariaDescription
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaDescription`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)-Attributs wider, welches einen Zeichenfolgenwert definiert, der das aktuelle Element beschreibt oder erläutert.

> [!NOTE]
> Das Festlegen von aria-Attributen auf `ElementInternals` erlaubt es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löschen oder überhaupt nicht hinzufügen sollte. Weitere Informationen finden Sie im [Accessibility Object Model Erklärungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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
