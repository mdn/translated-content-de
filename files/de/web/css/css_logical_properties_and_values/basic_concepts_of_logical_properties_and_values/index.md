---
title: Grundlegende Konzepte logischer Eigenschaften und Werte
slug: Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Das [CSS Logical Properties and Values Module](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties) definiert flussbezogene Zuordnungen für viele der {{glossary("physical properties")}} und Werte in CSS. Dieser Artikel behandelt dieses Modul und erklärt {{glossary("flow relative values")}} und Eigenschaften.

## Warum logische Eigenschaften nützlich sind

CSS 2.1 und frühere Versionen haben Dinge gemäß den physischen Abmessungen des Bildschirms dimensioniert. Daher beschreiben wir Boxen mit einer {{CSSxRef("width")}} und {{CSSxRef("height")}}, positionieren Elemente von der `top` und `left`, weisen Ränder, Abstände und Polsterungen der `top`, `right`, `bottom`, `left` usw. zu. Das Modul für logische Eigenschaften und Werte definiert Zuordnungen für diese {{glossary("physical properties")}} und Werte zu ihren logischen oder flussbezogenen Gegenstücken – z.B. `start` und `end` anstatt `left` und `right`/`top` und `bottom`.

Diese Zuordnungen sind sehr nützlich für Websites, die in Sprachen mit einem anderen Schreibmodus als das ursprüngliche Layout übersetzt werden. Zum Beispiel, bei einem CSS-Grid-Layout, wenn der Grid-Container eine Breite mit den Eigenschaften {{CSSxRef("align-self")}} und {{CSSxRef("justify-self")}} hat, um die Grid-Elemente auszurichten, da diese Eigenschaften flussbezogen sind, richtet das `justify-self: start` das Element am Anfang in der Inlinedimension aus, und `align-self: start` bewirkt dasselbe in der Blockdimension.

![Ein Raster in einem horizontalen Schreibmodus](grid-horizontal-width-sm.png)

Wenn der Schreibmodus dieser Komponente mit der Eigenschaft {{CSSxRef("writing-mode")}} auf `vertical-rl` geändert wird, funktioniert die Ausrichtung weiterhin auf die gleiche Weise. Die Inlinedimension verläuft vertikal und die Blockdimension horizontal. Das Raster sieht jedoch nicht gleich aus, da die dem Container zugewiesene Breite ein horizontales Maß ist, ein Maß, das an das physische und nicht an das logische oder flussbezogene Laufen des Textes gebunden ist.

![Ein Raster im vertikalen Schreibmodus.](grid-vertical-width-sm.png)

Wenn stattdessen die logische Eigenschaft {{CSSxRef("inline-size")}} verwendet wird, funktioniert die Komponente auf die gleiche Weise, unabhängig davon, welcher Schreibmodus angezeigt wird.

![Ein Rasterlayout im vertikalen Schreibmodus](grid-vertical-inline-size-small.png)

Sie können dies im untenstehenden Live-Beispiel ausprobieren. Ändern Sie `writing-mode` von `vertical-rl` zu `horizontal-tb` auf `.grid`, um zu sehen, wie sich die verschiedenen Eigenschaften auf das Layout auswirken.

{{EmbedGHLiveSample("css-examples/logical/intro-grid-example.html", '100%', 700)}}

Wenn Sie mit einer Website in einem anderen Schreibmodus als einem horizontalen von oben nach unten arbeiten oder Schreibmodi aus kreativen Gründen verwenden, macht es viel Sinn, sich auf den Fluss des Inhalts beziehen zu können.

## Block- und Inlinedimensionen

Ein Schlüsselkonzept bei der Arbeit mit flussbezogenen Eigenschaften und Werten sind die beiden Dimensionen von Block und Inline. CSS-Layout-Methoden wie Flexbox und Grid-Layout verwenden die Konzepte von `block` und `inline` anstelle von `right` und `left`/`top` und `bottom`, wenn Elemente ausgerichtet werden.

Die `inline`-Dimension ist die Dimension, entlang der eine Textzeile im verwendeten Schreibmodus verläuft. Daher ist in einem englischen Dokument mit horizontalem Textlauf von links nach rechts oder einem arabischen Dokument mit horizontalem Textlauf von rechts nach links die Inlinedimension _horizontal_. Wechseln Sie zu einem vertikalen Schreibmodus (z. B. ein japanisches Dokument) und die Inlinedimension ist jetzt _vertikal_, da Linien in diesem Schreibmodus vertikal verlaufen.

Die Blockdimension ist die andere Dimension und die Richtung, in der Blöcke – wie Absätze – nacheinander angezeigt werden. In Englisch und Arabisch verlaufen sie vertikal, während sie in jedem vertikalen Schreibmodus horizontal verlaufen.

Das untenstehende Diagramm zeigt die Inline- und Blockrichtungen in einem horizontalen Schreibmodus:

![Diagramm, das die horizontale Inline- und vertikale Blockachse zeigt.](mdn-horizontal.png)

Dieses Diagramm zeigt Block und Inline in einem vertikalen Schreibmodus:

![Diagramm, das die horizontale Block- und vertikale Inline-Achse zeigt.](mdn-vertical.png)

## Siehe auch

- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Flex-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Understanding logical properties and values](https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/) auf Smashing Magazine (2018)
