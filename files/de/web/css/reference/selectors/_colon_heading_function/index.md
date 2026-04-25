---
title: "`:heading()` CSS-Pseudoklasse"
short-title: :heading()
slug: Web/CSS/Reference/Selectors/:heading_function
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{SeeCompatTable}}

Die **`:heading()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Funktion repräsentiert alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), deren Ebenen mit einer kommagetrennten Liste von Ganzzahlen übereinstimmen. Dies ermöglicht es Ihnen, Elemente auf bestimmten Überschriftenebenen gleichzeitig zu stylen, anstatt sie einzeln anzusprechen und zu stylen.

> [!NOTE]
> Die `:heading()` funktionale Pseudoklasse hat die gleiche [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity#how_is_specificity_calculated) wie ein Klassenselektor, das heißt, `0-1-0`. Zum Beispiel hat `section:heading()` eine Spezifität von `0-1-1`.

## Syntax

```css-nolint
:heading( <integer># ) {
  /* ... */
}
```

### Parameter

Die `:heading()` Pseudoklasse Funktion nimmt eine kommagetrennte Liste von {{cssxref("&lt;integer&gt;")}}s, die die zu stylenden Überschriftenebenen repräsentieren.

## Verwendungshinweise

Die `:heading()` funktionale Pseudoklasse passt nur zu Elementen, die semantisch als Überschriften erkannt werden. Sie passt nicht zu Elementen, die [`role="heading"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) oder ['aria-level'](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) Attribute verwenden.

Die von `:heading()` verwendete Überschriftenebene kann sich von dem [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) eines Elements unterscheiden, in Fällen, in denen der Browser eine andere sichtbare Überschriftenebene berechnet. Zum Beispiel wird `h1:heading(3)` jedes `<h1>`-Element ansprechen, das als Überschrift der Ebene 3 dargestellt wird.

## Beispiele

### Auswahl bestimmter Überschriftenebenen

In diesem Beispiel wird eine kommagetrennte Liste von Werten verwendet, um Überschriften auf ungeraden Ebenen (`<h1>` und `<h3>`) und geraden Ebenen (`<h2>` und `<h4>`) anzusprechen.

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

- {{cssxref(":heading")}}
