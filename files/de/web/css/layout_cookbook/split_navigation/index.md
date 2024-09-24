---
title: Geteilte Navigation
slug: Web/CSS/Layout_cookbook/Split_Navigation
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

Die **geteilte Navigation** ist ein Navigationsmuster, bei dem ein oder mehrere Elemente von den restlichen Navigationselementen getrennt sind.

![Elemente in zwei Gruppen aufgeteilt.](split-navigation.png)

## Anforderungen

Ein häufiges Navigationsmuster besteht darin, ein Element von den anderen wegzuschieben. Wir können Flexbox verwenden, um dies zu erreichen, ohne die beiden Elementgruppen in zwei separate Flex-Container zu verwandeln.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/split-navigation.html", '100%', 520)}}

> [!CALLOUT]
>
> [Dieses Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/split-navigation--download.html)

## Getroffene Entscheidungen

Dieses Muster kombiniert automatische Margen mit Flexbox, um die Elemente zu trennen.

Eine automatische Marge absorbiert allen verfügbaren Platz in die Richtung, in der sie angewendet wird. So funktioniert das Zentrieren eines Blocks mit automatischen Margen — Sie haben auf jeder Seite des Blockes eine Marge, die versucht, den gesamten Platz einzunehmen, und somit den Block in die Mitte schiebt.

In diesem Fall nimmt die linke automatische Marge den verfügbaren Platz ein und schiebt das Element nach rechts. Sie könnten die Klasse `push` auf jedes Element in der Liste anwenden.

## Siehe auch

- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- {{cssxref("display")}} Eigenschaft
- {{cssxref("margin")}} Eigenschaft
