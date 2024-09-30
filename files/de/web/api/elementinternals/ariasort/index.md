---
title: "ElementInternals: ariaSort-Eigenschaft"
short-title: ariaSort
slug: Web/API/ElementInternals/ariaSort
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`ariaSort`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Attributs wider, welches angibt, ob Elemente in einer Tabelle oder einem Raster in auf- oder absteigender Reihenfolge sortiert sind.

> [!NOTE]
> Das Setzen von Aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"ascending"`
  - : Elemente sind in aufsteigender Reihenfolge nach dieser Spalte sortiert.
- `"descending"`
  - : Elemente sind in absteigender Reihenfolge nach dieser Spalte sortiert.
- `"none"`
  - : Es ist keine definierte Sortierung auf die Spalte angewendet.
- `"other"`
  - : Ein anderes Sortierverfahren als auf- oder absteigend wurde angewendet.

## Beispiele

In diesem Beispiel wird der Wert von `ariaSort` auf "ascending" gesetzt.

```js
this.internals_.ariaSort = "ascending";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
