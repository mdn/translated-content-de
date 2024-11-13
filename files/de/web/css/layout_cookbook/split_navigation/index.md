---
title: Geteilte Navigation
slug: Web/CSS/Layout_cookbook/Split_Navigation
l10n:
  sourceCommit: 507825f6292eb73f0a96419d69870d9330b6776f
---

{{CSSRef}}

Die **geteilte Navigation** ist ein Navigationsmuster, bei dem ein oder mehrere Elemente von den restlichen Navigationselementen getrennt sind.

![Elemente in zwei Gruppen getrennt.](split-navigation.png)

## Anforderungen

Ein häufiges Navigationsmuster besteht darin, ein Element von den anderen wegzudrücken. Wir können Flexbox verwenden, um dies zu erreichen, ohne dass die beiden Sets von Elementen in zwei separate Flex-Container umgewandelt werden müssen.

## Rezept

Klicken Sie auf "Play" in den untenstehenden Code-Blöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

Dieses Muster kombiniert automatische Margen mit Flexbox, um die Elemente zu trennen.

Eine automatische Marge absorbiert den gesamten verfügbaren Raum in der Richtung, in der sie angewendet wird. So funktioniert das Zentrieren eines Blocks mit automatischen Margen – man hat auf jeder Seite des Blocks eine Marge, die versucht, den gesamten Raum einzunehmen, und drängt den Block so in die Mitte.

In diesem Fall nimmt die linke automatische Marge jeden verfügbaren Raum ein und drückt das Element nach rechts. Sie könnten die Klasse `push` auf jedes Element in der Liste anwenden.

## Siehe auch

- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- {{cssxref("display")}} Eigenschaft
- {{cssxref("margin")}} Eigenschaft
