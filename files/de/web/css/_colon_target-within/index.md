---
title: ":target-within"
slug: Web/CSS/:target-within
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{SeeCompatTable}}

Die **`:target-within`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das entweder ein Ziel-Element ist oder _ein Ziel-Element enthält_. Ein Ziel-Element ist ein einzigartiges Element mit einer passenden [`id`](/de/docs/Web/HTML/Global_attributes/id), die dem Fragment in der URL entspricht. Mit anderen Worten: Es repräsentiert ein Element, das entweder selbst von der {{CSSxRef(":target")}} Pseudo-Klasse getroffen wird oder einen Nachkommen hat, der von `:target` getroffen wird. (Dies umfasst Nachkommen in [Shadow Trees](/de/docs/Web/API/Web_components/Using_shadow_DOM).)

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

### Hervorheben eines Artikels

Die `:target-within` Pseudo-Klasse kann genutzt werden, um einen Artikel hervorzuheben, wenn irgendein Element innerhalb des Artikels direkt verlinkt wurde. Die `:target` Pseudo-Klasse wird ebenfalls verwendet, um zu zeigen, welches Element gezielt wurde.

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

Derzeit wurde dieses Feature in keinem Browser implementiert.

## Siehe auch

- {{CSSxRef(":target")}}
