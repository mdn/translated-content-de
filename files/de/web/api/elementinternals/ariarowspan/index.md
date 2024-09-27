---
title: "ElementInternals: ariaRowSpan-Eigenschaft"
short-title: ariaRowSpan
slug: Web/API/ElementInternals/ariaRowSpan
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaRowSpan`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)-Attributs wider, das die Anzahl der vom Zellenelement oder Gitterzelle innerhalb einer Tabelle, eines Grids oder Treegrids überspannten Zeilen definiert.

> [!NOTE]
> Das Festlegen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, sollte der Autor diese Attribute löschen oder sie überhaupt nicht hinzufügen. Für weitere Informationen siehe den [Accessibility Object Model Erklärungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine ganze Zahl enthält.

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
