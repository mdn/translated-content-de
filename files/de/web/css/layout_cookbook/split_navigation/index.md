---
title: Geteilte Navigation
slug: Web/CSS/Layout_cookbook/Split_Navigation
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

Die **geteilte Navigation** ist ein Navigationsmuster, bei dem ein oder mehrere Elemente von den restlichen Navigationselementen getrennt sind.

![Elemente in zwei Gruppen getrennt.](split-navigation.png)

## Anforderungen

Ein gewöhnliches Navigationsmuster besteht darin, ein Element von den anderen wegzuschieben. Wir können Flexbox verwenden, um dies zu erreichen, ohne dass die beiden Sätze von Elementen in zwei separate Flex-Container aufgeteilt werden müssen.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/split-navigation.html", '100%', 520)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/split-navigation--download.html)

## Getroffene Entscheidungen

Dieses Muster kombiniert automatische Ränder mit Flexbox, um die Elemente zu trennen.

Ein automatischer Rand nimmt allen verfügbaren Raum in der Richtung auf, in der er angewendet wird. So funktioniert das Zentrieren eines Blocks mit automatischen Rändern – Sie haben einen Rand auf jeder Seite des Blocks, der versucht, allen Platz einzunehmen, und dadurch den Block in die Mitte schiebt.

In diesem Fall nimmt der linke automatische Rand jeden verfügbaren Raum ein und schiebt das Element nach rechts. Sie könnten die Klasse `push` auf jedes Element in der Liste anwenden.

## Siehe auch

- [CSS flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- {{cssxref("display")}} Eigenschaft
- {{cssxref("margin")}} Eigenschaft
