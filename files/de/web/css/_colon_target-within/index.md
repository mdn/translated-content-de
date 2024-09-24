---
title: ":target-within"
slug: Web/CSS/:target-within
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{CSSRef}}{{SeeCompatTable}}

Die **`:target-within`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das ein Zielelement ist oder ein Element _enthält_, das ein Ziel ist. Ein Zielelement ist ein einzigartiges Element mit einer [`id`](/de/docs/Web/HTML/Global_attributes#id), die dem Fragment der URL entspricht. Mit anderen Worten, es repräsentiert ein Element, das selbst durch die {{CSSxRef(":target")}}-Pseudoklasse oder durch `:target` auf einen seiner Nachkommen gematcht wird. (Dies schließt Nachkommen in [Shadow Trees](/de/docs/Web/API/Web_components/Using_shadow_DOM) ein.)

```css
/* Wählt ein <div> aus, wenn einer seiner Nachkommen ein Ziel ist */
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

Die `:target-within`-Pseudoklasse kann verwendet werden, um den Artikel hervorzuheben, wenn etwas darin direkt verlinkt wurde. Die `:target`-Pseudoklasse wird ebenfalls verwendet, um anzuzeigen, welches Element gezielt wurde.

#### HTML

```html
<h3>Inhaltsverzeichnis</h3>
<ol>
  <li><a href="#p1">Zum ersten Absatz springen!</a></li>
  <li><a href="#p2">Zum zweiten Absatz springen!</a></li>
</ol>

<article>
  <h3>Mein spaßiger Artikel</h3>
  <p id="p1">
    Sie können <i>diesen Absatz</i> mit einem URL-Fragment anvisieren. Klicken Sie oben auf den Link, um es auszuprobieren!
  </p>
  <p id="p2">
    Dies ist <i>ein weiterer Absatz</i>, der ebenfalls über die obigen Links zugänglich ist. Ist das nicht erfreulich?
  </p>
</article>
```

#### CSS

```css
article:target-within {
  background-color: gold;
}

/* Ein Pseudoelement innerhalb des Zielelements hinzufügen */
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/* Stil für kursiv gesetzte Elemente innerhalb des Zielelements */
p:target i {
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('Examples', 500, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":target")}}
