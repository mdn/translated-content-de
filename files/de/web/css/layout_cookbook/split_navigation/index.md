---
title: Geteilte Navigation
slug: Web/CSS/Layout_cookbook/Split_Navigation
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **geteilte Navigation** ist ein Navigationsmuster, bei dem ein oder mehrere Elemente von den restlichen Navigationselementen getrennt sind.

![Elemente in zwei Gruppen getrennt.](split-navigation.png)

## Anforderungen

Ein häufiges Navigationsmuster besteht darin, ein Element von den anderen wegzuschieben. Wir können Flexbox verwenden, um dies zu erreichen, ohne die beiden Sätze von Elementen in zwei separate Flex-Container aufteilen zu müssen.

## Rezept

Klicken Sie in den folgenden Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten:

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

## Gewählte Ansätze

Dieses Muster kombiniert automatische Ränder mit Flexbox, um die Elemente zu trennen.

Ein automatischer Rand absorbiert den gesamten verfügbaren Raum in die Richtung, in die er angewendet wird. Das ist auch, wie das Zentrieren eines Blocks mit automatischen Rändern funktioniert – Sie haben auf jeder Seite des Blocks einen Rand, der versucht, den gesamten Raum einzunehmen, wodurch der Block in die Mitte gedrückt wird.

In diesem Fall nimmt der linke automatische Rand den verfügbaren Raum ein und schiebt das Element nach rechts. Sie könnten die Klasse `push` auf jedes Element in der Liste anwenden.

## Siehe auch

- [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- {{cssxref("display")}} Eigenschaft
- {{cssxref("margin")}} Eigenschaft
