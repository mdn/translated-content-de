---
title: "ElementInternals: ariaRowIndex-Eigenschaft"
short-title: ariaRowIndex
slug: Web/API/ElementInternals/ariaRowIndex
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaRowIndex`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)-Attributs wider, das die Zeilenindexposition eines Elements im Verhältnis zur Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` erlaubt es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch von Autoren definierte Attribute überschrieben werden, aber stellen Sie sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erläuterungstext](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRowIndex` auf "1" gesetzt.

```js
class CustomEl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaRowIndex = "1";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: Tabellenrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
