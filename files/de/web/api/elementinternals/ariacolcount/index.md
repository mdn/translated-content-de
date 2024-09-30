---
title: "ElementInternals: ariaColCount-Eigenschaft"
short-title: ariaColCount
slug: Web/API/ElementInternals/ariaColCount
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaColCount`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)-Attributs wider, welches die Anzahl der Spalten in einer Tabelle, einem Raster oder einem Baumraster definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch autorendefinierte Attribute überschrieben werden, stellen jedoch sicher, dass Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie gar nicht erst hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)-Attribut auf "3" gesetzt.

```js
this.internals_.ariaColCount = "3";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

- [ARIA: Tabellenrolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
