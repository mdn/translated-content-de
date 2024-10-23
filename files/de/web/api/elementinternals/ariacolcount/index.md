---
title: "ElementInternals: ariaColCount-Eigenschaft"
short-title: ariaColCount
slug: Web/API/ElementInternals/ariaColCount
l10n:
  sourceCommit: 0eeaa04378b34bce70e618ee20434e1193cdec17
---

{{APIRef("Web Components")}}

Die **`ariaColCount`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)-Attributs wider, welches die Anzahl der Spalten in einer Tabelle, einem Raster oder einem Baumraster definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantik auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen aber sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Für mehr Informationen siehe das [Accessibility Object Model Erklärstück](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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

## Siehe auch

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
