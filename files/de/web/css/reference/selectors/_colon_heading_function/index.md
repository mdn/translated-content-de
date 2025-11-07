---
title: :heading()
slug: Web/CSS/Reference/Selectors/:heading_function
l10n:
  sourceCommit: be8baea744a06feac9320a19eb9446ff1955af76
---

{{SeeCompatTable}}

Die **`:heading()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Funktion repräsentiert alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), deren Ebenen mit einer durch Kommas getrennten Liste von ganzen Zahlen übereinstimmen. Dies ermöglicht es, Elemente auf bestimmten Überschriftsebenen gleichzeitig zu stylen, anstatt sie einzeln zu matchen und zu stylen.

> [!NOTE]
> Die `:heading()` funktionale Pseudoklasse hat die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated) wie ein Klassenselektor, das heißt, `0-1-0`. Zum Beispiel hat `section:heading()` eine Spezifität von `0-1-1`.

## Syntax

```css-nolint
:heading( <integer># ) {
  /* ... */
}
```

### Parameter

Die `:heading()` Pseudoklassen-Funktion nimmt eine durch Kommas getrennte Liste von {{cssxref("&lt;integer&gt;")}}s, die die zu stylenden Überschriftsebenen darstellen.

## Anwendungshinweise

Die `:heading()` funktionale Pseudoklasse matched nur Elemente, die semantisch als Überschriften anerkannt sind. Sie matched keine Elemente, die die Attribute [`role="heading"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) oder ['aria-level'](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) verwenden.

Die von `:heading()` verwendete Überschriftsebene kann sich von einem [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) eines Elements unterscheiden, in Fällen, in denen der Browser eine andere exponierte Überschriftsebene berechnet. Zum Beispiel wird `h1:heading(3)` jedes `<h1>` Element matchen, das als Überschrift der Ebene 3 exponiert ist.

## Beispiele

### Auswahl spezifischer Überschriftsebenen

In diesem Beispiel wird eine durch Kommas getrennte Liste von Werten verwendet, um Überschriften mit ungeraden Nummern (`<h1>` und `<h3>`) und geraden Nummern (`<h2>` und `<h4>`) zu targetieren.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
```

```css
:heading(1, 3) {
  color: tomato;
}
:heading(2, 4) {
  color: slateblue;
}
```

{{EmbedLiveSample("selecting_specific_heading_levels", "", "215")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`:heading`](/de/docs/Web/CSS/Reference/Selectors/:heading)
