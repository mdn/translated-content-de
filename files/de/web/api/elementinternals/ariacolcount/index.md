---
title: "ElementInternals: ariaColCount-Eigenschaft"
short-title: ariaColCount
slug: Web/API/ElementInternals/ariaColCount
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaColCount`**-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle spiegelt den Wert des [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)-Attributs wider, das die Anzahl der Spalten in einer Tabelle, einem Raster oder einem Baumraster definiert.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, aber sicherstellen, dass Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie gar nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärungen](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
