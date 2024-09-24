---
title: "ElementInternals: ariaColSpan-Eigenschaft"
short-title: ariaColSpan
slug: Web/API/ElementInternals/ariaColSpan
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaColSpan`**-Eigenschaft des {{domxref("ElementInternals")}}-Interfaces gibt den Wert des [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)-Attributs wieder, das die Anzahl der Spalten definiert, die von einer Zelle oder Gridcell innerhalb einer Tabelle, eines Rasters oder eines Baumrasters überspannt werden.

> [!NOTE]
> Das Festlegen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor festgelegte Attribute überschrieben werden, stellen jedoch sicher, dass die Standard-Semantiken beibehalten werden, sollten die Attribute vom Autor gelöscht oder überhaupt nicht hinzugefügt werden. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine Ganzzahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaColspan` auf "2" gesetzt.

```js
this.internals_.ariaColspan = "2";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
