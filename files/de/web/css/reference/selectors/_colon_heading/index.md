---
title: :heading
slug: Web/CSS/Reference/Selectors/:heading
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{SeeCompatTable}}

Die **`:heading`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) entspricht allen [Überschriftselementen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) in einem Dokument. Damit können Sie alle Überschriften auf einmal formatieren, anstatt sie einzeln zuzuordnen und zu stylen.

Diese Pseudoklasse stimmt nur mit Elementen überein, die standardmäßig semantisch als Überschriften erkannt werden (`<h1>` bis `<h6>`). Elemente mit [`role="heading"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) werden nicht erfasst; Sie können diese mit dem `[role="heading"]` [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) auswählen.

> [!NOTE]
> Die `:heading` Pseudoklasse hat die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated) wie ein Klassenselektor, das heißt `0-1-0`. Somit würde `:heading` eine Spezifität von `0-1-0` haben, und `section:heading` hätte eine Spezifität von `0-1-1`.

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
