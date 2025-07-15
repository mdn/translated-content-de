---
title: Grundlegende Konzepte zu logischen Eigenschaften und Werten
short-title: Grundlegende Konzepte
slug: Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [CSS-Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties) definiert flussrelativ Mappings für viele der {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werte in CSS. Dieser Artikel behandelt dieses Modul und erklärt {{Glossary("flow_relative_values", "flussrelative Werte")}} und Eigenschaften.

## Warum logische Eigenschaften nützlich sind

CSS 2.1 und früher haben Dinge entsprechend der physischen Dimensionen des Bildschirms dimensioniert. Daher beschreiben wir Kästchen als solche mit einer {{CSSxRef("width")}} und {{CSSxRef("height")}}, positionieren Elemente ausgehend von `top` und `left`, weisen Ränder, Abstände und Füllungen den Seiten `top`, `right`, `bottom`, `left` zu etc. Das Modul für logische Eigenschaften und Werte definiert Mappings für diese {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werte zu ihren logischen oder flussrelativen Gegenstücken — z. B. `start` und `end` im Gegensatz zu `left` und `right`/`top` und `bottom`.

Diese Mappings sind sehr nützlich für Websites, die in Sprachen mit einem anderen Schreibrichtung als das ursprüngliche Layout übersetzt werden. Zum Beispiel, mit einem CSS-Grid-Layout: Wenn dem Grid-Container eine Breite zugewiesen ist und die Eigenschaften {{CSSxRef("align-self")}} und {{CSSxRef("justify-self")}} verwendet werden, um die Grid-Elemente auszurichten, da diese Eigenschaften flussrelativ sind, richtet `justify-self: start` das Element am Anfang der inlinerelativen Dimension aus und `align-self: start` macht dasselbe in der blockrelativen Dimension.

![Ein Raster in einem horizontalen Schreibmodus](grid-horizontal-width-sm.png)

Wenn der Schreibmodus dieser Komponente mit der Eigenschaft {{CSSxRef("writing-mode")}} auf `vertical-rl` geändert wird, funktioniert die Ausrichtung weiterhin auf dieselbe Weise. Die inline-Dimension verläuft vertikal und die block-Dimension horizontal. Das Raster sieht jedoch nicht gleich aus, da die dem Container zugewiesene Breite ein horizontales Maß ist, ein Maß, das an das Physische und nicht an das Logische oder flussrelativ verlaufende des Textes gebunden ist.

![Ein Raster im vertikalen Schreibmodus.](grid-vertical-width-sm.png)

Wenn stattdessen die logische Eigenschaft {{CSSxRef("inline-size")}} anstelle der `width`-Eigenschaft verwendet wird, funktioniert die Komponente gleich, egal in welchem Schreibmodus sie angezeigt wird.

![Ein Rasterlayout im vertikalen Schreibmodus](grid-vertical-inline-size-small.png)

Sie können dies im untenstehenden Live-Beispiel ausprobieren. Ändern Sie `writing-mode` von `vertical-rl` zu `horizontal-tb` auf `.grid`, um zu sehen, wie sich die verschiedenen Eigenschaften auf das Layout auswirken.

```html live-sample___intro-grid-example
<div class="grid">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css hidden live-sample___intro-grid-example
body {
  font: 1.2em / 1.5 sans-serif;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
}

.grid > * {
  border-radius: 5px;
  border: 2px solid rgb(96 139 168 / 0.4);
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
}

.grid :nth-child(1) {
  align-self: start;
}

.grid :nth-child(2) {
  justify-self: end;
}
```

```css live-sample___intro-grid-example
.grid {
  writing-mode: vertical-rl;
  inline-size: 400px;
}
```

{{EmbedLiveSample("intro-grid-example", "", "450px")}}

Wenn Sie an einer Website in einem anderen als einem horizontalen, von oben nach unten verlaufenden Schreibrichtung arbeiten oder aus kreativen Gründen Schreibmodi verwenden, macht es viel Sinn, sich auf den Fluss des Inhalts beziehen zu können.

## Block- und Inline-Dimensionen

Ein Schlüsselkonzept bei der Arbeit mit flussrelativen Eigenschaften und Werten sind die zwei Dimensionen von Block und Inline. CSS-Layoutmethoden wie Flexbox und Grid-Layout verwenden die Konzepte `block` und `inline` anstelle von `right` und `left`/`top` und `bottom`, wenn Elemente ausgerichtet werden.

Die `inline`-Dimension ist die Dimension, entlang der eine Textzeile im verwendeten Schreibmodus verläuft. Daher ist in einem englischen Dokument mit horizontal von links nach rechts verlaufendem Text oder einem arabischen Dokument mit horizontal von rechts nach links verlaufendem Text die inline-Dimension _horizontal_. Wechseln Sie zu einem vertikalen Schreibmodus (z. B. einem japanischen Dokument), und die inline-Dimension ist jetzt _vertikal_, da die Linien in diesem Schreibmodus vertikal verlaufen.

Die block-Dimension ist die andere Dimension und die Richtung, in der Blöcke — wie Absätze — nacheinander angezeigt werden. Im Englischen und Arabischen verlaufen diese vertikal, während sie in jedem vertikalen Schreibmodus horizontal verlaufen.

Das folgende Diagramm zeigt die Inline- und Block-Richtungen in einem horizontalen Schreibmodus:

![Diagramm, das die Inline-Achse horizontal verlaufend, Block-Achse vertikal verlaufend zeigt.](mdn-horizontal.png)

Dieses Diagramm zeigt Block und Inline in einem vertikalen Schreibmodus:

![Diagramm, das die Block-Achse horizontal verlaufend, die Inline-Achse vertikal verlaufend zeigt.](mdn-vertical.png)

## Siehe auch

- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Flex-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Verstehen von logischen Eigenschaften und Werten](https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/) auf Smashing Magazine (2018)
