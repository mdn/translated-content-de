---
title: "ElementInternals: ariaRowCount-Eigenschaft"
short-title: ariaRowCount
slug: Web/API/ElementInternals/ariaRowCount
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaRowCount`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)-Attributs wider, das die Gesamtanzahl der Zeilen in einer Tabelle, einem Gitter oder einem Baumgitter definiert.

> [!NOTE]
> Das Setzen von `aria`-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder gar nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
