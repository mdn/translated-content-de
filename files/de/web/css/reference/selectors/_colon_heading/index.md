---
title: :heading
slug: Web/CSS/Reference/Selectors/:heading
l10n:
  sourceCommit: 56d7fc5f9d1b010fc55d0384facd2b1477baee0c
---

{{SeeCompatTable}}

Die **`:heading`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) in einem Dokument aus.

## Syntax

```css
:heading {
  /* ... */
}
```

## Beschreibung

Die `:heading` Pseudoklasse ermöglicht es Ihnen, alle Überschriften auf einmal zu stylen, anstatt sie einzeln zu selektieren und zu stylen.

Diese Pseudoklasse wählt nur Elemente aus, die standardmäßig semantisch als Überschriften erkannt werden (`<h1>` bis `<h6>`). Elemente mit [`role="heading"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) werden nicht ausgewählt; Sie können diese mit dem `[role="heading"]` [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) auswählen.

Die `:heading` Pseudoklasse hat die gleiche [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity#how_is_specificity_calculated) wie ein Klassenselektor, also `0-1-0`. Somit hat `:heading` eine Spezifität von `0-1-0`, während `h1, h2, h3, h4, h5, h6` eine Spezifität von `0-0-1` aufweisen und `section:heading` eine Spezifität von `0-1-1` hätte.

## Beispiele

### Alle Überschriften stylen

In diesem Beispiel verwenden wir die `:heading` Pseudoklasse, um mehrere Ebenen von Überschriften zu stylen.

#### HTML

Das Dokument enthält Überschriften auf drei verschiedenen Ebenen sowie {{htmlelement("p")}} Absatzelemente.

```html
<h1>Mastering CSS</h1>
<h2>Chapter 1: Selectors</h2>
<p>
  A CSS selector is the part of a CSS rule that describes what elements in a
  document the rule will match.
</p>
<h3>1.1 Pseudo-classes</h3>
<p>
  CSS pseudo-classes enable selecting elements based on information that lies
  outside of the document tree.
</p>
```

#### CSS

Wir setzen die Überschriftselemente kursiv und tomatenrot.

```css
:heading {
  color: tomato;
  font-style: italic;
}
```

#### Ergebnisse

{{EmbedLiveSample("styling_all_headings", "", "170")}}

Die `:heading` Pseudoklasse wendet die {{cssxref("color")}} und {{cssxref("font-style")}} auf alle Überschriften im Dokument an, jedoch nicht auf die Absätze:

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`:heading()`](/de/docs/Web/CSS/Reference/Selectors/:heading_function)
