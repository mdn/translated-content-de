---
title: :heading
slug: Web/CSS/:heading
l10n:
  sourceCommit: 29033c05fb95b661f58befcc106abc7e7787749a
---

Die **`:heading`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) entspricht allen [Überschriftselementen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) in einem Dokument. Dadurch können Sie alle Überschriften auf einmal gestalten, anstatt sie einzeln zuzuordnen und zu stylen.
Diese Pseudoklasse entspricht nur Elementen, die semantisch als Überschriften erkannt werden (`<h1>` bis `<h6>`). Elemente mit [`role="heading"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) werden nicht abgeglichen; Sie können diese mit der funktionalen Form auswählen, {{CSSXRef(":heading_function", ":heading()")}}.

> [!NOTE]
> Die `:heading` Pseudoklasse hat die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated) wie ein Klassenselektor, das heißt `0-1-0`. Also hätte `:heading` eine Spezifität von `0-1-0`, und `section:heading` hätte eine Spezifität von `0-1-1`.

## Syntax

```css
:heading {
  /* ... */
}
```

## Beispiele

### Stilisierung aller Überschriften

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
