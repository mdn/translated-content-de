---
title: "ElementInternals: ariaRowSpan-Eigenschaft"
short-title: ariaRowSpan
slug: Web/API/ElementInternals/ariaRowSpan
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaRowSpan`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)-Attributs wider, welches die Anzahl der Zeilen definiert, die von einer Zelle oder Gitterzelle innerhalb einer Tabelle, eines Gitters oder eines Baumgitters überspannt werden.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht die Definition von Standard-Semantiken auf einem benutzerdefinierten Element. Diese können von vom Autor definierten Attributen überschrieben werden, stellen jedoch sicher, dass die Standard-Semantiken erhalten bleiben, falls der Autor diese Attribute löscht oder gar nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine Ganzzahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRowSpan` auf "2" gesetzt.

```js
this.internals_.ariaRowSpan = "2";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
