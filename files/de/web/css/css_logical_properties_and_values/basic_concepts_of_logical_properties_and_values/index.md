---
title: Grundlegende Konzepte der logischen Eigenschaften und Werte
slug: Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Das Modul [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties) definiert flussbezogene Zuordnungen für viele der [physikalischen Eigenschaften](/de/docs/Glossary/physical_properties) und Werte in CSS. Dieser Artikel behandelt dieses Modul und erklärt [flussbezogene Werte](/de/docs/Glossary/flow_relative_values) und Eigenschaften.

## Warum logische Eigenschaften nützlich sind

CSS 2.1 und frühere Versionen hatten Dinge entsprechend den physikalischen Dimensionen des Bildschirms dimensioniert. Daher beschreiben wir Kästen mit einer {{CSSxRef("width")}} und {{CSSxRef("height")}}, positionieren Elemente von oben und links, weisen Ränder, Abstände und Polsterung oben, rechts, unten, links usw. zu. Das Modul für logische Eigenschaften und Werte definiert Zuordnungen für diese [physikalischen Eigenschaften](/de/docs/Glossary/physical_properties) und Werte zu ihren logischen oder flussbezogenen Gegenstücken — z.B. `start` und `end` im Gegensatz zu `left` und `right`/`top` und `bottom`.

Diese Zuordnungen sind sehr nützlich für Websites, die in Sprachen mit einem anderen Schreibmodus als das ursprüngliche Layout übersetzt werden. Zum Beispiel bei einem CSS-Grid-Layout: Wenn der Rastercontainer eine Breite mit den Eigenschaften {{CSSxRef("align-self")}} und {{CSSxRef("justify-self")}} hat, die verwendet werden, um die Rasterelemente auszurichten, dann ist `justify-self: start` flussbezogen und richtet das Element am Anfang der Inline-Dimension aus, und `align-self: start` macht dasselbe auf der Block-Dimension.

![Ein Raster in einem horizontalen Schreibmodus](grid-horizontal-width-sm.png)

Wenn der Schreibmodus dieses Elements mit der Eigenschaft {{CSSxRef("writing-mode")}} in `vertical-rl` geändert wird, funktioniert die Ausrichtung weiterhin auf die gleiche Weise. Die Inline-Dimension verläuft vertikal und die Block-Dimension horizontal. Das Raster sieht jedoch nicht gleich aus, da die dem Container zugewiesene Breite eine horizontale Messung ist, eine Messung, die an die physikalische und nicht an die logische oder flussbezogene Ausrichtung des Textes gebunden ist.

![Ein Raster im vertikalen Schreibmodus.](grid-vertical-width-sm.png)

Wenn anstelle der Eigenschaft `width` die logische Eigenschaft {{CSSxRef("inline-size")}} verwendet wird, funktioniert das Element unabhängig davon, welcher Schreibmodus angezeigt wird, auf die gleiche Weise.

![Ein Rasterlayout im vertikalen Schreibmodus](grid-vertical-inline-size-small.png)

Sie können dies im folgenden Live-Beispiel ausprobieren. Ändern Sie `writing-mode` von `vertical-rl` zu `horizontal-tb` auf `.grid`, um zu sehen, wie die verschiedenen Eigenschaften das Layout ändern.

{{EmbedGHLiveSample("css-examples/logical/intro-grid-example.html", '100%', 700)}}

Wenn Sie mit einer Website in einem anderen als einem horizontalen, von oben nach unten gerichteten Schreibmodus arbeiten oder wenn Sie Schreibmodi aus kreativen Gründen verwenden, macht es viel Sinn, sich auf den Fluss des Inhalts beziehen zu können.

## Block- und Inline-Dimensionen

Ein Schlüsselkonzept bei der Arbeit mit flussbezogenen Eigenschaften und Werten sind die beiden Dimensionen von Block und Inline. CSS-Layoutmethoden wie Flexbox und Gridlayout verwenden die Konzepte `block` und `inline` anstelle von `right` und `left`/`top` und `bottom`, wenn Elemente ausgerichtet werden.

Die `inline` Dimension ist die Dimension, entlang der im verwendeten Schreibmodus eine Textzeile verläuft. Daher ist in einem englischen Dokument mit horizontal von links nach rechts verlaufendem Text oder in einem arabischen Dokument mit horizontal von rechts nach links verlaufendem Text die Inline-Dimension _horizontal_. Wechselt man zu einem vertikalen Schreibmodus (z.B. einem japanischen Dokument), ist die Inline-Dimension nun _vertikal_, da die Zeilen in diesem Schreibmodus vertikal verlaufen.

Die Block-Dimension ist die andere Dimension und die Richtung, in der Blöcke – wie Absätze – nacheinander angezeigt werden. In Englisch und Arabisch verlaufen diese vertikal, während sie in jedem vertikalen Schreibmodus horizontal verlaufen.

Das folgende Diagramm zeigt die Inline- und Block-Richtungen in einem horizontalen Schreibmodus:

![Diagramm, das die Inline-Achse horizontal und die Block-Achse vertikal zeigt.](mdn-horizontal.png)

Dieses Diagramm zeigt Block und Inline in einem vertikalen Schreibmodus:

![Diagramm, das die Block-Achse horizontal und die Inline-Achse vertikal zeigt.](mdn-vertical.png)

## Siehe auch

- [Box-Ausrichtung in Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Box-Ausrichtung in Flex-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Fluss-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Understanding logical properties and values](https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/) auf Smashing Magazine (2018)
