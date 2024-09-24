---
title: "ElementInternals: ariaSort Eigenschaft"
short-title: ariaSort
slug: Web/API/ElementInternals/ariaSort
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`ariaSort`**-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle spiegelt den Wert des [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Attributs wider, das angibt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.

> [!NOTE]
> Das Festlegen von aria-Attributen auf `ElementInternals` ermöglicht die Definition von Standardsemantiken für ein benutzerdefiniertes Element. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder erst gar nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

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

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
