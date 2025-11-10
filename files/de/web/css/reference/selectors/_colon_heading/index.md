---
title: :heading
slug: Web/CSS/Reference/Selectors/:heading
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`:heading`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt alle [Überschrift-Elemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) in einem Dokument aus. Dies ermöglicht Ihnen, alle Überschriften auf einmal zu stylen, anstatt sie einzeln auswählen und stylen zu müssen.

Diese Pseudoklasse wählt nur Elemente aus, die standardmäßig semantisch als Überschriften erkannt werden (`<h1>` bis `<h6>`). Elemente mit [`role="heading"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) werden nicht ausgewählt; Sie können diese mit dem [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[role="heading"]` auswählen.

> [!NOTE]
> Die `:heading` Pseudoklasse hat dieselbe [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity#how_is_specificity_calculated) wie ein Klassen-Selektor, das heißt `0-1-0`. Daher hätte `:heading` eine Spezifität von `0-1-0` und `section:heading` eine Spezifität von `0-1-1`.

## Syntax

```css
:heading {
  /* ... */
}
```

## Beispiele

### Alle Überschriften stylen

Das Dokument in diesem Beispiel enthält Überschriften auf drei verschiedenen Ebenen.

```html
<h1>Mastering CSS</h1>
<h2>Chapter 1: Selectors</h2>
<h3>1.1 Pseudo-classes</h3>
```

```css
:heading {
  color: tomato;
}
```

Die `:heading` Pseudoklasse wendet die `color` auf alle Überschriften im Dokument an:

{{EmbedLiveSample("styling_all_headings", "", "170")}}

Die `:heading` Pseudoklasse wendet die `color` auf alle Überschriften im Dokument an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`:heading()`](/de/docs/Web/CSS/Reference/Selectors/:heading_function)
