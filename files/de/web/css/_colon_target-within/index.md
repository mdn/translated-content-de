---
title: :target-within
slug: Web/CSS/:target-within
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

{{SeeCompatTable}}

Die **`:target-within`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das ein Ziel-Element ist oder ein Element enthält, das ein Ziel ist. Ein Ziel-Element ist ein einzigartiges Element mit einer [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id), die mit dem Fragment der URL übereinstimmt. Mit anderen Worten, es repräsentiert ein Element, das selbst von der {{CSSxRef(":target")}} Pseudoklasse erkannt wird oder einen Nachkommen hat, der von `:target` erkannt wird. (Dies schließt Nachkommen in [Shadow Trees](/de/docs/Web/API/Web_components/Using_shadow_DOM) ein.)

```css
/* Selects a <div> when one of its descendants is a target */
div:target-within {
  background: cyan;
}
```

## Syntax

```css
:target-within {
  /* ... */
}
```

## Beispiele

### Hervorhebung eines Artikels

Die `:target-within` Pseudoklasse kann verwendet werden, um den Artikel hervorzuheben, wenn etwas innerhalb von ihm direkt verlinkt wurde. Die `:target` Pseudoklasse wird ebenfalls verwendet, um anzuzeigen, welches Element gezielt wurde.

#### HTML

```html
<h3>Table of Contents</h3>
<ol>
  <li><a href="#p1">Jump to the first paragraph!</a></li>
  <li><a href="#p2">Jump to the second paragraph!</a></li>
</ol>

<article>
  <h3>My Fun Article</h3>
  <p id="p1">
    You can target <i>this paragraph</i> using a URL fragment. Click on the link
    above to try out!
  </p>
  <p id="p2">
    This is <i>another paragraph</i>, also accessible from the links above.
    Isn't that delightful?
  </p>
</article>
```

#### CSS

```css
article:target-within {
  background-color: gold;
}

/* Add a pseudo-element inside the target element */
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/* Style italic elements within the target element */
p:target i {
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('Examples', 500, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser dieses Feature.

## Siehe auch

- {{CSSxRef(":target")}}
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
