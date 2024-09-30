---
title: "ElementInternals: ariaColIndex-Eigenschaft"
short-title: ariaColIndex
slug: Web/API/ElementInternals/ariaColIndex
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaColIndex`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)-Attributs wider, welches den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Tabelle, eines Gitters oder eines Baumgitters definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, aber stellen Sie sicher, dass Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
