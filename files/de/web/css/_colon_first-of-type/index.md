---
title: ":first-of-type"
slug: Web/CSS/:first-of-type
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`:first-of-type`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert das erste Element seines Typs innerhalb einer Gruppe von Geschwisterelementen.

{{InteractiveExample("CSS Demo: :first-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:first-of-type {
  border: 2px solid orange;
}
```

```html interactive-example
<dl>
  <dt>Vegetables:</dt>
  <dd>1. Tomatoes</dd>
  <dd>2. Cucumbers</dd>
  <dd>3. Mushrooms</dd>
  <dt>Fruits:</dt>
  <dd>4. Apples</dd>
  <dd>5. Mangos</dd>
  <dd>6. Pears</dd>
  <dd>7. Oranges</dd>
</dl>
```

## Syntax

```css
:first-of-type {
  /* ... */
}
```

## Beispiele

### Das erste Absatz-Element stylen

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

Dieses Beispiel zeigt, wie auch verschachtelte Elemente angesprochen werden können. Beachten Sie, dass der [Universalselektor](/de/docs/Web/CSS/Universal_selectors) (`*`) impliziert wird, wenn kein Typselektor geschrieben wird.

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
