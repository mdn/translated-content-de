---
title: :heading
slug: Web/CSS/Reference/Selectors/:heading
l10n:
  sourceCommit: be8baea744a06feac9320a19eb9446ff1955af76
---

{{SeeCompatTable}}

Die **`:heading`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) passt auf alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) in einem Dokument. Dadurch können Sie alle Überschriften auf einmal stylen, anstatt sie einzeln zu erfassen und zu stylen.

Diese Pseudoklasse passt nur auf Elemente, die standardmäßig semantisch als Überschriften (`<h1>` bis `<h6>`) erkannt werden. Elemente mit [`role="heading"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) werden nicht erfasst; Sie können solche mit Hilfe des `[role="heading"]` [Attributselectors](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) wählen.

> [!NOTE]
> Die `:heading` Pseudoklasse hat die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated) wie ein Klassenselektor, das heißt, `0-1-0`. So hätte `:heading` eine Spezifität von `0-1-0`, und `section:heading` hätte eine Spezifität von `0-1-1`.

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
