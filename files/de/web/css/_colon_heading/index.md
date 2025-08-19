---
title: :heading
slug: Web/CSS/:heading
l10n:
  sourceCommit: 1eeaa8cb55555f6ea53537d29e7c6b1cee095772
---

Die **`:heading`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) stimmt mit allen [Überschriftselementen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) in einem Dokument überein. Dies ermöglicht es Ihnen, alle Überschriften auf einmal zu stylen, anstatt sie einzeln abzugleichen und zu stylen.

Diese Pseudoklasse stimmt nur mit Elementen überein, die standardmäßig semantisch als Überschriften (`<h1>` bis `<h6>`) erkannt werden. Elemente mit [`role="heading"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) werden nicht erfasst; Sie können diese auswählen, indem Sie den `[role="heading"]` [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors) verwenden.

> [!NOTE]
> Die `:heading` Pseudoklasse hat die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated) wie ein Klassenselektor, nämlich `0-1-0`. So hätte `:heading` eine Spezifität von `0-1-0`, und `section:heading` hätte eine Spezifität von `0-1-1`.

## Syntax

```css
:heading {
  /* ... */
}
```

## Beispiele

### Styling aller Überschriften

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

- {{CSSXRef(":heading_function", ":heading()")}}
