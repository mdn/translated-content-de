---
title: :last-of-type
slug: Web/CSS/:last-of-type
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:last-of-type`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert das letzte Element seines Typs (Tag-Name) innerhalb einer Gruppe von Geschwisterelementen.

{{InteractiveExample("CSS Demo: :last-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:last-of-type {
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
:last-of-type {
  /* ... */
}
```

## Beispiele

### Das letzte Paragraf stylen

#### HTML

```html
<h2>Heading</h2>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

#### CSS

```css
p:last-of-type {
  color: red;
  font-style: italic;
}
```

#### Ergebnis

{{EmbedLiveSample('Styling_the_last_paragraph')}}

### Verschachtelte Elemente

Dieses Beispiel zeigt, wie auch verschachtelte Elemente angesprochen werden können. Beachten Sie, dass der [universelle Selektor](/de/docs/Web/CSS/Universal_selectors) (`*`) impliziert ist, wenn kein einfacher Selektor geschrieben wird.

#### HTML

```html
<article>
  <div>This `div` is first.</div>
  <div>This <span>nested `span` is last</span>!</div>
  <div>
    This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!
  </div>
  <p>This `p` qualifies!</p>
  <div>This is the final `div`!</div>
</article>
```

#### CSS

```css
article :last-of-type {
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample('Nested_elements', 500)}}

### Mehrere Selektorenelemente

Dieses HTML-Beispiel enthält verschachtelte Elemente unterschiedlicher Typen. Das CSS enthält sowohl Typselektoren als auch Klassenselektoren.

#### HTML

```html
<p>This `p` is not selected.</p>
<p>This `p` is not selected either.</p>
<p>
  This `p` is last `p` element of its parent e.g. `body` selected by `p` type
  selector.
</p>
<div class="container">
  <div class="item">This `div` is not selected.</div>
  <div class="item">This `div` is not selected either.</div>
  <div class="item">
    This `div` is last `div` element of its parent `div` selected by `.container
    .item` class selector.
  </div>
  <p class="item">
    This `p` is last `p` element of its parent `div` selected by `.container
    .item` class selector.
  </p>
</div>
```

#### CSS

```css
p:last-of-type {
  background: skyblue;
}

.container .item:last-of-type {
  color: red;
  font-weight: bold;
}
```

#### Ergebnis

{{EmbedLiveSample('Multiple_selectors_elements', 500)}}

Das letzte `<div>` und das letzte `<p>` sind beide rot und fett, da `.item:last-of-type` das letzte jedes Typs auswählt, wenn dieses letzte Element auch die `item`-Klasse hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":last-child")}}, {{Cssxref(":nth-last-of-type")}}
