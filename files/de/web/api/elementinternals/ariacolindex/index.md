---
title: "ElementInternals: ariaColIndex-Eigenschaft"
short-title: ariaColIndex
slug: Web/API/ElementInternals/ariaColIndex
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaColIndex`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)-Attributs wider. Dieses Attribut definiert den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Tabelle, eines Rasters oder eines Baumrasters.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht die Definition von Standardsemantiken auf einem benutzerdefinierten Element. Diese können von durch den Autor definierten Attributen überschrieben werden, stellen jedoch sicher, dass die Standardsemantik beibehalten wird, falls der Autor diese Attribute löscht oder sie nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erläuterer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaColIndex` auf "2" gesetzt.

```js
this.internals_.ariaColIndex = "2";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: Tabellenrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
