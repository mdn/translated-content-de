---
title: :heading
slug: Web/CSS/:heading
l10n:
  sourceCommit: 1a1fe4efc4bfa6147f084aad12cf9908130f76ab
---

{{SeeCompatTable}}

Die **`:heading`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) trifft auf alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) in einem Dokument zu. Dies ermöglicht es Ihnen, alle Überschriften gleichzeitig zu stylen, anstatt sie einzeln abzugleichen und zu stylen.

Diese Pseudoklasse trifft nur auf Elemente zu, die standardmäßig semantisch als Überschriften erkannt werden (`<h1>` bis `<h6>`). Elemente mit [`role="heading"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) werden nicht erfasst; Sie können diese mit dem `[role="heading"]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) auswählen.

> [!NOTE]
> Die `:heading` Pseudoklasse hat die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated) wie ein Klassenselektor, nämlich `0-1-0`. So hätte `:heading` eine Spezifität von `0-1-0`, und `section:heading` hätte eine Spezifität von `0-1-1`.

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

- {{CSSXRef(":heading_function", ":heading()")}}
