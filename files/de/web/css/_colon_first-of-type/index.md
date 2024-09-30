---
title: ":first-of-type"
slug: Web/CSS/:first-of-type
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

Die **`:first-of-type`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert das erste Element seines Typs innerhalb einer Gruppe von Geschwisterelementen.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-first-of-type.html", "tabbed-shorter")}}

## Syntax

```css
:first-of-type {
  /* ... */
}
```

## Beispiele

### Gestaltung des ersten Absatzes

#### HTML

```html
<h2>Heading</h2>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

#### CSS

```css
p:first-of-type {
  color: red;
  font-style: italic;
}
```

#### Ergebnis

{{EmbedLiveSample('Styling_the_first_paragraph')}}

### Verschachtelte Elemente

Dieses Beispiel zeigt, wie auch verschachtelte Elemente gezielt angesprochen werden können. Beachten Sie, dass der [Universal-Selektor](/de/docs/Web/CSS/Universal_selectors) (`*`) impliziert ist, wenn kein Typ-Selektor angegeben wird.

#### HTML

```html
<article>
  <div>This `div` is first!</div>
  <div>This <span>nested `span` is first</span>!</div>
  <div>
    This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!
  </div>
  <div>This <span>nested `span` gets styled</span>!</div>
  <p>This `p` qualifies!</p>
  <div>This is the final `div`.</div>
</article>
```

#### CSS

```css
article :first-of-type {
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample('Nested_elements', 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":first-child")}}, {{Cssxref(":last-of-type")}}, {{Cssxref(":nth-of-type")}}
