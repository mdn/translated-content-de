---
title: "ElementInternals: ariaRowCount-Eigenschaft"
short-title: ariaRowCount
slug: Web/API/ElementInternals/ariaRowCount
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaRowCount`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)-Attributs wider, welches die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, standardmäßige Semantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder gar nicht erst hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine Ganzzahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRowCount` auf "100" gesetzt.

```js
class CustomEl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaRowCount = "100";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
