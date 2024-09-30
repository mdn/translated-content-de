---
title: "ElementInternals: ariaRowSpan-Eigenschaft"
short-title: ariaRowSpan
slug: Web/API/ElementInternals/ariaRowSpan
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaRowSpan`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)-Attributs wider, welches die Anzahl der durch eine Zelle oder Rasterzelle in einer Tabelle, einem Raster oder einem Baumraster überspannten Zeilen definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, die Standardsemantik eines benutzerdefinierten Elements zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Für weitere Informationen siehe das [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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

- [ARIA: Tabellenrolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
