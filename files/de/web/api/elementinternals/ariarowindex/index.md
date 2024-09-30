---
title: "ElementInternals: ariaRowIndex-Eigenschaft"
short-title: ariaRowIndex
slug: Web/API/ElementInternals/ariaRowIndex
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaRowIndex`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)-Attributs wider, das den Zeilenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken auf einem benutzerdefinierten Element zu definieren. Diese können von benutzerdefinierten Attributen überschrieben werden, aber sicherstellen, dass die Standard-Semantiken erhalten bleiben, sollte der Autor diese Attribute löschen oder überhaupt nicht hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRowIndex` auf "1" gesetzt.

```js
this.internals_.ariaRowIndex = "1";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
