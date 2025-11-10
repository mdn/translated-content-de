---
title: "ElementInternals: ariaSort-Eigenschaft"
short-title: ariaSort
slug: Web/API/ElementInternals/ariaSort
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaSort`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Attributs wider, welches angibt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standard-Semantik erhalten bleibt, falls der Autor diese Attribute löscht oder überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärungsartikel](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"ascending"`
  - : Elemente sind in aufsteigender Reihenfolge nach dieser Spalte sortiert.
- `"descending"`
  - : Elemente sind in absteigender Reihenfolge nach dieser Spalte sortiert.
- `"none"`
  - : Es ist keine definierte Sortierung auf die Spalte angewendet.
- `"other"`
  - : Ein anderes Sortieralgorithmus als aufsteigend oder absteigend wurde angewendet.

## Beispiele

In diesem Beispiel wird der Wert von `ariaSort` auf "ascending" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaSort = "ascending";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
