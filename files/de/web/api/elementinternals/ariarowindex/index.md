---
title: "ElementInternals: ariaRowIndex-Eigenschaft"
short-title: ariaRowIndex
slug: Web/API/ElementInternals/ariaRowIndex
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaRowIndex`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)-Attributs wider, welches den Zeilenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Treegrid definiert.

> [!NOTE]
> Das Festlegen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standard-Semantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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

- [ARIA: table-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
