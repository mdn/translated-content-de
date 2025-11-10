---
title: "ElementInternals: ariaColIndex-Eigenschaft"
short-title: ariaColIndex
slug: Web/API/ElementInternals/ariaColIndex
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaColIndex`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)-Attributs wider, das die Spaltenindexposition oder -nummer eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Tabelle, eines Rasters oder eines Baumgitters definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standard-Semantiken erhalten bleiben, sollte der Autor diese Attribute löschen oder sie überhaupt nicht hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model Erklärungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaColIndex` auf "2" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaColIndex = "2";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
