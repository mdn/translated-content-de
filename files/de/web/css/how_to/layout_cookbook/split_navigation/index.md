---
title: Geteilte Navigation
slug: Web/CSS/How_to/Layout_cookbook/Split_navigation
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **geteilte Navigation** ist ein Navigationsmuster, bei dem ein oder mehrere Elemente von den restlichen Navigationselementen getrennt sind.

![In zwei Gruppen aufgeteilte Elemente.](split-navigation.png)

## Anforderungen

Ein häufiges Navigationsmuster besteht darin, ein Element von den anderen wegzuschieben. Wir können Flexbox verwenden, um dies zu erreichen, ohne dass die beiden Gruppen von Elementen in zwei separate Flex-Container aufgeteilt werden müssen.

## Rezept

Klicken Sie auf "Play" in den folgenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___split-navigation-example
<nav>
  <ul class="main-nav">
    <li><a href="">About</a></li>
    <li><a href="">Products</a></li>
    <li><a href="">Our Team</a></li>
    <li class="push"><a href="">Contact</a></li>
  </ul>
</nav>
```

```css live-sample___split-navigation-example
.main-nav {
  margin: 0;
  padding: 0;
  list-style: none;
  font: 1.2em sans-serif;

  display: flex;
}

.main-nav a {
  padding: 0.5em 1em;
  display: block;
}

.push {
  margin-left: auto;
}
```

{{EmbedLiveSample("split-navigation-example")}}

## Getroffene Entscheidungen

Dieses Muster kombiniert automatische Ränder mit Flexbox, um die Elemente zu trennen.

Ein automatischer Rand absorbiert den gesamten verfügbaren Platz in der Richtung, in der er angewendet wird. So funktioniert das Zentrieren eines Blocks mit automatischen Rändern — Sie haben auf jeder Seite des Blocks einen Rand, der versucht, den gesamten Platz einzunehmen, und so den Block in die Mitte schiebt.

In diesem Fall nimmt der linke automatische Rand jeden verfügbaren Platz ein und schiebt das Element nach rechts. Sie können die Klasse `push` auf jedes Element in der Liste anwenden.

## Siehe auch

- [CSS flexible Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- {{cssxref("display")}} Eigenschaft
- {{cssxref("margin")}} Eigenschaft
