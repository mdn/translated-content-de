---
title: Grundkonzepte der logischen Eigenschaften und Werte
short-title: Basic concepts
slug: Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Das [CSS-Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties) definiert flussbezogene Zuordnungen für viele der {{Glossary("physical_properties", "physikalischen Eigenschaften")}} und Werte in CSS. Dieser Artikel behandelt dieses Modul und erklärt {{Glossary("flow_relative_values", "flussbezogene Werte")}} und Eigenschaften.

## Warum logische Eigenschaften nützlich sind

CSS 2.1 und frühere Versionen haben Dinge nach den physischen Dimensionen des Bildschirms bemessen. Daher beschreiben wir Kästen als solche mit einer {{CSSxRef("width")}} und {{CSSxRef("height")}}, positionieren Elemente von `top` und `left`, weisen Ränder, Abstände und Auffüllungen zu `top`, `right`, `bottom`, `left` usw. zu. Das Modul der logischen Eigenschaften und Werte definiert Zuordnungen für diese {{Glossary("physical_properties", "physikalischen Eigenschaften")}} und Werte zu ihren logischen, oder flussbezogenen, Gegenstücken — z.B. `start` und `end` anstelle von `left` und `right`/`top` und `bottom`.

Diese Zuordnungen sind sehr nützlich für Websites, die in Sprachen mit einem anderen Schreibmodus als das ursprüngliche Layout übersetzt werden. Zum Beispiel, bei einem CSS-Grid-Layout, wenn der Grid-Container eine Breite mit den Eigenschaften {{CSSxRef("align-self")}} und {{CSSxRef("justify-self")}} hat, die zum Ausrichten der Grid-Elemente verwendet werden, da diese Eigenschaften flussbezogen sind, richtet `justify-self: start` das Element am Anfang der Inline-Dimension aus, und `align-self: start` tut dasselbe auf der Block-Dimension.

![Ein Raster in einem horizontalen Schreibmodus](grid-horizontal-width-sm.png)

Wenn der Schreibmodus dieser Komponente mit der Eigenschaft {{CSSxRef("writing-mode")}} auf `vertical-rl` geändert wird, funktioniert die Ausrichtung weiterhin auf die gleiche Weise. Die Inline-Dimension verläuft vertikal und die Block-Dimension horizontal. Das Raster sieht jedoch nicht mehr gleich aus, da die dem Container zugewiesene Breite ein horizontales Maß ist, ein Maß, das an die physische und nicht die logische oder flussbezogene Textausrichtung gebunden ist.

![Ein Raster im vertikalen Schreibmodus.](grid-vertical-width-sm.png)

Wenn anstelle der `width`-Eigenschaft die logische Eigenschaft {{CSSxRef("inline-size")}} verwendet wird, funktioniert die Komponente unabhängig davon, welcher Schreibmodus verwendet wird, auf die gleiche Weise.

![Ein Raster-Layout im vertikalen Schreibmodus](grid-vertical-inline-size-small.png)

Sie können dies im untenstehenden Live-Beispiel ausprobieren. Ändern Sie `writing-mode` von `vertical-rl` zu `horizontal-tb` bei `.grid`, um zu sehen, wie sich die verschiedenen Eigenschaften auf das Layout auswirken.

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

Wenn Sie mit einer Website in einem anderen Schreibmodus als einem horizontalen, von oben nach unten, arbeiten, oder wenn Sie Schreibmodi aus kreativen Gründen verwenden, ergibt es viel Sinn, sich auf den Fluss des Inhalts zu beziehen.

## Block- und Inline-Dimensionen

Ein Schlüsselkonzept bei der Arbeit mit flussbezogenen Eigenschaften und Werten sind die beiden Dimensionen von Block und Inline. CSS-Layoutmethoden wie Flexbox und Grid-Layout verwenden die Konzepte von `block` und `inline` anstelle von `right` und `left`/`top` und `bottom`, wenn sie Elemente ausrichten.

Die `inline`-Dimension ist die Dimension, entlang der eine Textzeile im verwendeten Schreibmodus verläuft. In einem englischen Dokument, bei dem der Text horizontal von links nach rechts verläuft, oder in einem arabischen Dokument, bei dem der Text horizontal von rechts nach links verläuft, ist die Inline-Dimension _horizontal_. Wechseln Sie in einen vertikalen Schreibmodus (z.B. ein japanisches Dokument), und die Inline-Dimension ist jetzt _vertikal_, da Zeilen in diesem Schreibmodus vertikal verlaufen.

Die Block-Dimension ist die andere Dimension und die Richtung, in der Blöcke — wie Absätze — nacheinander angezeigt werden. In Englisch und Arabisch verlaufen diese vertikal, während in einem vertikalen Schreibmodus diese horizontal verlaufen.

Das unten stehende Diagramm zeigt die Inline- und Block-Richtungen in einem horizontalen Schreibmodus:

![Diagramm zeigt die Inline-Achse verläuft horizontal, Block-Achse vertikal.](mdn-horizontal.png)

Dieses Diagramm zeigt Block und Inline in einem vertikalen Schreibmodus:

![Diagramm zeigt die Block-Achse verläuft horizontal, Inline-Achse vertikal.](mdn-vertical.png)

## Siehe auch

- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Flex-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Verständnis der logischen Eigenschaften und Werte](https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/) auf Smashing Magazine (2018)
