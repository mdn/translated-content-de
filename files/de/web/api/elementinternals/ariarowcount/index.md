---
title: "ElementInternals: ariaRowCount-Eigenschaft"
short-title: ariaRowCount
slug: Web/API/ElementInternals/ariaRowCount
l10n:
  sourceCommit: 0eeaa04378b34bce70e618ee20434e1193cdec17
---

{{APIRef("Web Components")}}

Die **`ariaRowCount`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)-Attributs wider, welches die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster definiert.

> [!NOTE]
> Das Setzen von `aria`-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie gar nicht erst hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRowCount` auf "100" gesetzt.

```js
this.internals_.ariaRowCount = "100";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
