---
title: Grundkonzepte von logischen Eigenschaften und Werten
slug: Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Das Modul [CSS logique Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties) definiert flussrelativ zugeordnete Werte für viele der {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werte in CSS. Dieser Artikel diskutiert dieses Modul und erklärt {{Glossary("flow_relative_values", "flussrelative Werte")}} und Eigenschaften.

## Warum logische Eigenschaften nützlich sind

CSS 2.1 und frühere Versionen hatten Dinge entsprechend den physischen Abmessungen des Bildschirms dimensioniert. Daher beschreiben wir Boxen als solche mit einer {{CSSxRef("width")}} und {{CSSxRef("height")}}, positionieren Elemente von `top` und `left`, weisen Ränder, Abstände und Polsterungen nach `top`, `right`, `bottom`, `left` usw. zu. Das Modul Logische Eigenschaften und Werte definiert Zuordnungen dieser {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werte zu ihren logischen oder flussrelativen Gegenstücken — z.B. `start` und `end` im Gegensatz zu `left` und `right`/`top` und `bottom`.

Diese Zuordnungen sind sehr nützlich für Websites, die in Sprachen mit einem anderen Schreibmodus als dem ursprünglichen Layout übersetzt werden. Beispielsweise bei einem CSS-Grid-Layout: Wenn der Grid-Container eine Breite mit den Eigenschaften {{CSSxRef("align-self")}} und {{CSSxRef("justify-self")}} angewendet hat, um die Gitterelemente auszurichten, da diese Eigenschaften flussrelativ sind, richtet `justify-self: start` das Element am Anfang der Inline-Dimension aus, und `align-self: start` tut dies in der Block-Dimension.

![Ein Raster in einem horizontalen Schreibmodus](grid-horizontal-width-sm.png)

Wenn der Schreibmodus dieser Komponente mit der Eigenschaft {{CSSxRef("writing-mode")}} auf `vertical-rl` geändert wird, funktioniert die Ausrichtung weiterhin auf die gleiche Weise. Die Inline-Dimension verläuft vertikal und die Block-Dimension horizontal. Das Raster sieht jedoch nicht gleich aus, da die dem Container zugewiesene Breite ein horizontales Maß ist, ein Maß, das an die physische und nicht an die logische oder flussrelativ verlaufende Textausrichtung gebunden ist.

![Ein Raster im vertikalen Schreibmodus.](grid-vertical-width-sm.png)

Wenn stattdessen die logische Eigenschaft {{CSSxRef("inline-size")}} anstelle der `width`-Eigenschaft verwendet wird, wird die Komponente unabhängig davon, welcher Schreibmodus angezeigt wird, auf die gleiche Weise funktionieren.

![Ein Rasterlayout im vertikalen Schreibmodus](grid-vertical-inline-size-small.png)

Sie können dies im Live-Beispiel unten ausprobieren. Ändern Sie `writing-mode` von `vertical-rl` zu `horizontal-tb` auf `.grid`, um zu sehen, wie sich die verschiedenen Eigenschaften auf das Layout auswirken.

{{EmbedGHLiveSample("css-examples/logical/intro-grid-example.html", '100%', 700)}}

Wenn Sie mit einer Website in einem anderen Schreibmodus als einem horizontalen Schreibmodus von oben nach unten arbeiten, oder wenn Sie Schreibmodi aus kreativen Gründen verwenden, macht es viel Sinn, sich auf den Fluss des Inhalts beziehen zu können.

## Block- und Inline-Dimensionen

Ein Schlüsselkonzept bei der Arbeit mit flussrelativen Eigenschaften und Werten sind die zwei Dimensionen von Block und Inline. CSS-Layoutmethoden wie Flexbox und Grid-Layout verwenden die Konzepte `block` und `inline` anstelle von `right` und `left`/`top` und `bottom` beim Ausrichten von Elementen.

Die `inline`-Dimension ist die Dimension, entlang der ein Textlauf im verwendeten Schreibmodus verläuft. Daher ist in einem englischen Dokument mit horizontal von links nach rechts verlaufendem Text oder einem arabischen Dokument mit horizontal von rechts nach links verlaufendem Text die Inline-Dimension _horizontal_. Wechseln Sie in einen vertikalen Schreibmodus (z.B. ein japanisches Dokument), und die Inline-Dimension ist jetzt _vertikal_, da die Zeilen in diesem Schreibmodus vertikal verlaufen.

Die Block-Dimension ist die andere Dimension und die Richtung, in der Blöcke – wie Absätze – nacheinander angezeigt werden. In Englisch und Arabisch laufen diese vertikal, während sie in jedem vertikalen Schreibmodus horizontal verlaufen.

Das folgende Diagramm zeigt die Inline- und Block-Richtungen in einem horizontalen Schreibmodus:

![Diagramm zeigt die Inline-Achse horizontal und die Block-Achse vertikal.](mdn-horizontal.png)

Dieses Diagramm zeigt Block- und Inline in einem vertikalen Schreibmodus:

![Diagramm zeigt die Block-Achse horizontal, die Inline-Achse vertikal.](mdn-vertical.png)

## Siehe auch

- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Flex-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Verständnis von logischen Eigenschaften und Werten](https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/) auf Smashing Magazine (2018)
