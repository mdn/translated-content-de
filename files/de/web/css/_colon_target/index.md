---
title: ":target"
slug: Web/CSS/:target
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{CSSRef}}

Die **`:target`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein einzigartiges Element (das _Zielelement_) mit einer [`id`](/de/docs/Web/HTML/Global_attributes/id), die mit dem Fragment der URL übereinstimmt.

```css
/* Selects an element with an ID matching the current URL's fragment */
:target {
  border: 2px solid black;
}
```

Zum Beispiel hat die folgende URL ein Fragment (gekennzeichnet durch das _#_-Zeichen), das auf ein Element mit dem Namen `section2` verweist:

```url
http://www.example.com/index.html#section2
```

Das folgende Element würde durch einen `:target`-Selektor ausgewählt werden, wenn die aktuelle URL der obigen entspricht:

```html
<section id="section2">Example</section>
```

## Syntax

```css
:target {
  /* ... */
}
```

> [!NOTE]
> Aufgrund [eines möglichen Fehlers in der CSS-Spezifikation](https://discourse.wicg.io/t/target-css-does-not-work-because-shadowroot-does-not-set-a-target-element/2070/) funktioniert `:target` nicht innerhalb eines [Web Components](/de/docs/Web/API/Web_components), weil die [Shadow-Root](/de/docs/Web/API/ShadowRoot) das Zielelement nicht in den Shadow-Baum weitergibt.

## Beispiele

### Ein Inhaltsverzeichnis

Die `:target`-Pseudoklasse kann verwendet werden, um den Teil einer Seite, auf den von einem Inhaltsverzeichnis aus verwiesen wurde, hervorzuheben.

#### HTML

```html
<h3>Table of Contents</h3>
<ol>
  <li><a href="#p1">Jump to the first paragraph!</a></li>
  <li><a href="#p2">Jump to the second paragraph!</a></li>
  <li>
    <a href="#nowhere">
      This link goes nowhere, because the target doesn't exist.
    </a>
  </li>
</ol>

<h3>My Fun Article</h3>
<p id="p1">
  You can target <i>this paragraph</i> using a URL fragment. Click on the link
  above to try out!
</p>
<p id="p2">
  This is <i>another paragraph</i>, also accessible from the links above. Isn't
  that delightful?
</p>
```

#### CSS

```css
p:target {
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

{{EmbedLiveSample('A_table_of_contents', 500, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der :target-Pseudoklasse in Selektoren](/de/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)
