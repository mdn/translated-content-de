---
title: "ElementInternals: ariaSort-Eigenschaft"
short-title: ariaSort
slug: Web/API/ElementInternals/ariaSort
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`ariaSort`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Attributs wider, das angibt, ob Elemente in einer Tabelle oder einem Raster aufsteigend oder absteigend sortiert sind.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantik auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, aber stellen Sie sicher, dass die Standardsemantik beibehalten wird, sollte der Autor diese Attribute löschen oder überhaupt nicht hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein Zeichenfolgenwert mit einem der folgenden Werte:

- `"ascending"`
  - : Elemente sind in aufsteigender Reihenfolge nach dieser Spalte sortiert.
- `"descending"`
  - : Elemente sind in absteigender Reihenfolge nach dieser Spalte sortiert.
- `"none"`
  - : Es ist keine definierte Sortierung auf die Spalte angewendet.
- `"other"`
  - : Ein anderes Sortierverfahren als aufsteigend oder absteigend wurde angewendet.

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

- [ARIA: Tabellenrolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
