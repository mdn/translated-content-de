---
title: "ElementInternals: ariaColSpan-Eigenschaft"
short-title: ariaColSpan
slug: Web/API/ElementInternals/ariaColSpan
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaColSpan`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)-Attributs wider, das die Anzahl der Spalten definiert, die von einer Zelle oder Gridcell innerhalb einer Tabelle, eines Grids oder eines Baumgitters überspannt werden.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht die Definition von Standardsemantiken auf einem benutzerdefinierten Element. Diese können von autorenspezifizierten Attributen überschrieben werden, aber stellen Sie sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String der eine ganze Zahl enthält.

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

- [ARIA: Tabellenrolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
