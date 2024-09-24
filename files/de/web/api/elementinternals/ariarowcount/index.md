---
title: "ElementInternals: ariaRowCount-Eigenschaft"
short-title: ariaRowCount
slug: Web/API/ElementInternals/ariaRowCount
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaRowCount`**-Eigenschaft des {{domxref("ElementInternals")}}-Interfaces spiegelt den Wert des [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)-Attributs wider, welches die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster definiert.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, sollte der Autor diese Attribute löschen oder sie überhaupt nicht hinzufügen. Für weitere Informationen siehe den [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine Ganzzahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRowCount` auf "100" gesetzt.

```js
this.internals_.ariaRowCount = "100";
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
