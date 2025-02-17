---
title: Grundlegende Konzepte von logischen Eigenschaften und Werten
slug: Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Das [CSS-Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties) definiert flussbezogene Zuordnungen für viele der {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werte in CSS. Dieser Artikel behandelt dieses Modul und erklärt {{Glossary("flow_relative_values", "flussbezogene Werte")}} und Eigenschaften.

## Warum sind logische Eigenschaften nützlich?

CSS 2.1 und früheren Versionen haben Elemente basierend auf den physischen Dimensionen des Bildschirms skaliert. Daher beschreiben wir Boxen mit {{CSSxRef("width")}} und {{CSSxRef("height")}}, positionieren Elemente relativ zu `top` und `left` und weisen Grenzen, Margen und Abstände den Seiten `top`, `right`, `bottom`, `left` usw. zu. Das Modul für logische Eigenschaften und Werte definiert Zuordnungen dieser {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werte zu ihren logischen oder flussbezogenen Entsprechungen — z. B. `start` und `end` anstelle von `left` und `right`/`top` und `bottom`.

Diese Zuordnungen sind besonders nützlich für Websites, die in Sprachen mit einem anderen Schreibmodus als dem ursprünglichen Layout übersetzt werden. Zum Beispiel, wenn in einem CSS-Grid-Layout der Grid-Container eine Breite hat und die Eigenschaften {{CSSxRef("align-self")}} und {{CSSxRef("justify-self")}} verwendet werden, um die Grid-Elemente auszurichten. Da diese Eigenschaften flussbezogen sind, richtet `justify-self: start` das Element am Anfang der Inline-Dimension aus, während `align-self: start` dasselbe für die Block-Dimension macht.

![Ein Raster in einem horizontalen Schreibmodus](grid-horizontal-width-sm.png)

Wenn der Schreibmodus dieser Komponente mit der Eigenschaft {{CSSxRef("writing-mode")}} in `vertical-rl` geändert wird, funktioniert die Ausrichtung weiterhin wie gewohnt. Die Inline-Dimension verläuft nun vertikal und die Block-Dimension horizontal. Das Raster sieht jedoch nicht mehr gleich aus, da die Breite des Containers eine horizontale Maßnahme ist, die an physische und nicht an logische oder flussbezogene Dimensionen gekoppelt ist.

![Ein Raster im vertikalen Schreibmodus.](grid-vertical-width-sm.png)

Wird stattdessen die logische Eigenschaft {{CSSxRef("inline-size")}} verwendet, funktioniert die Komponente unabhängig davon, welcher Schreibmodus verwendet wird.

![Ein Rasterlayout im vertikalen Schreibmodus](grid-vertical-inline-size-small.png)

Sie können dies im Live-Beispiel unten ausprobieren. Ändern Sie `writing-mode` von `vertical-rl` zu `horizontal-tb` auf `.grid`, um zu sehen, wie sich die verschiedenen Eigenschaften auf das Layout auswirken.

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

Wenn Sie mit einer Website in einem anderen Schreibmodus als einem horizontalen, von oben nach unten verlaufenden Modus arbeiten oder Schreibmodi aus kreativen Gründen nutzen, ergibt es Sinn, sich an dem Fluss des Inhalts zu orientieren.

## Block- und Inline-Dimensionen

Ein Schlüsselkonzept beim Arbeiten mit flussbezogenen Eigenschaften und Werten sind die beiden Dimensionen Block und Inline. CSS-Layoutmethoden wie Flexbox und Grid-Layout verwenden die Konzepte `block` und `inline` statt `right` und `left`/`top` und `bottom`, wenn es um die Ausrichtung von Elementen geht.

Die `inline`-Dimension ist die Dimension, entlang derer eine Textzeile im verwendeten Schreibmodus verläuft. In einem englischen Dokument, bei dem der Text horizontal von links nach rechts läuft, oder in einem arabischen Dokument, bei dem der Text horizontal von rechts nach links läuft, ist die Inline-Dimension _horizontal_. Wechseln Sie zu einem vertikalen Schreibmodus (z. B. ein japanisches Dokument), so ist die Inline-Dimension nun _vertikal_, da Zeilen in diesem Schreibmodus vertikal verlaufen.

Die Block-Dimension ist die andere Dimension und die Richtung, in der Blöcke — wie Absätze — nacheinander dargestellt werden. In Englisch und Arabisch verlaufen diese vertikal, während sie in einem vertikalen Schreibmodus horizontal verlaufen.

Das folgende Diagramm zeigt die Inline- und Block-Dimensionen in einem horizontalen Schreibmodus:

![Diagramm, das die Inline-Achse horizontal und die Block-Achse vertikal zeigt.](mdn-horizontal.png)

Dieses Diagramm zeigt die Block- und Inline-Dimensionen in einem vertikalen Schreibmodus:

![Diagramm, das die Block-Achse horizontal und die Inline-Achse vertikal zeigt.](mdn-vertical.png)

## Siehe auch

- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Flex-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Understanding logical properties and values](https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/) auf Smashing Magazine (2018)
