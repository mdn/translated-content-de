---
title: Grundkonzepte der logischen Eigenschaften und Werte
slug: Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values
l10n:
  sourceCommit: 02cc9311b281b73322c5d13185119d2e8adf336a
---

{{CSSRef}}

Das [CSS-Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties) definiert fluss-relative Zuordnungen für viele der {{Glossary("physical_properties", "physikalischen Eigenschaften")}} und Werte in CSS. In diesem Artikel wird dieses Modul besprochen und die {{Glossary("flow_relative_values", "fluss-relativen Werte")}} und Eigenschaften erklärt.

## Warum logische Eigenschaften nützlich sind

CSS 2.1 und frühere Versionen haben Größen gemäß den physischen Dimensionen des Bildschirms zugewiesen. Deshalb beschreiben wir Kästen als eine {{CSSxRef("width")}} und {{CSSxRef("height")}} habend, positionieren Elemente von `top` und `left`, weisen Rahmen, Rand und Auffüllung dem `top`, `right`, `bottom`, `left` zu, usw. Das Modul für logische Eigenschaften und Werte definiert Zuordnungen für diese {{Glossary("physical_properties", "physikalischen Eigenschaften")}} und Werte zu ihren logischen, oder fluss-relativen, Gegenstücken — z.B. `start` und `end` anstelle von `left` und `right`/`top` und `bottom`.

Diese Zuordnungen sind sehr nützlich für Websites, die in Sprachen mit einem anderen Schreibmodus als dem ursprünglichen Layout übersetzt werden. Beispielsweise bei einem CSS-Grid-Layout, wenn der Grid-Container eine Breite mit den Eigenschaften {{CSSxRef("align-self")}} und {{CSSxRef("justify-self")}} zum Ausrichten der Grid-Elemente erhält, da diese Eigenschaften fluss-relativ sind, so richtet `justify-self: start` das Element am Anfang in der Inline-Dimension aus, und `align-self: start` tut dasselbe in der Block-Dimension.

![Ein Raster in einem horizontalen Schreibmodus](grid-horizontal-width-sm.png)

Wenn der Schreibmodus dieser Komponente mit der Eigenschaft {{CSSxRef("writing-mode")}} in `vertical-rl` geändert wird, funktioniert die Ausrichtung weiterhin auf die gleiche Weise. Die Inline-Dimension verläuft vertikal und die Block-Dimension horizontal. Das Raster sieht jedoch nicht gleich aus, da die zugewiesene Breite des Containers eine horizontale Maßeinheit, eine Maßeinheit ist, die an das Physische und nicht das Logische oder fluss-relative Verlaufen des Textes gebunden ist.

![Ein Raster im vertikalen Schreibmodus.](grid-vertical-width-sm.png)

Wenn statt der `width`-Eigenschaft die logische Eigenschaft {{CSSxRef("inline-size")}} verwendet wird, funktioniert die Komponente unabhängig vom verwendeten Schreibmodus auf die gleiche Weise.

![Ein Raster-Layout im vertikalen Schreibmodus](grid-vertical-inline-size-small.png)

Sie können dies im folgenden Live-Beispiel ausprobieren. Ändern Sie `writing-mode` von `vertical-rl` zu `horizontal-tb` auf `.grid`, um zu sehen, wie die verschiedenen Eigenschaften das Layout ändern.

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

Wenn man mit einer Seite in einem anderen Schreibmodus als einem horizontalen von oben nach unten arbeitet, oder wenn Schreibmodi aus kreativen Gründen verwendet werden, macht es viel Sinn, sich auf den Fluss des Inhalts beziehen zu können.

## Block- und Inline-Dimensionen

Ein Schlüsselkonzept beim Arbeiten mit fluss-relativen Eigenschaften und Werten ist die Unterscheidung der zwei Dimensionen von Block und Inline. CSS-Layoutmethoden wie Flexbox und Grid-Layout verwenden die Konzepte von `block` und `inline` anstelle von `right` und `left`/`top` und `bottom` beim Ausrichten von Elementen.

Die `inline`-Dimension ist die Dimension, entlang der eine Textzeile im verwendeten Schreibmodus verläuft. Daher ist in einem englischen Dokument, bei dem der Text horizontal von links nach rechts verläuft, oder in einem arabischen Dokument, bei dem der Text horizontal von rechts nach links verläuft, die Inline-Dimension _horizontal_. Wechselt man in einen vertikalen Schreibmodus (z.B. ein japanisches Dokument), ist die Inline-Dimension nun _vertikal_, da Zeilen in diesem Schreibmodus vertikal verlaufen.

Die Block-Dimension ist die andere Dimension und die Richtung, in der Blöcke — wie Absätze — nacheinander angezeigt werden. Im Englischen und Arabischen verlaufen diese vertikal, während in jedem vertikalen Schreibmodus diese horizontal verlaufen.

Das folgende Diagramm zeigt die Inline- und Blockrichtungen in einem horizontalen Schreibmodus:

![Diagramm, das die Inline-Achse horizontal und die Block-Achse vertikal zeigt.](mdn-horizontal.png)

Dieses Diagramm zeigt Block und Inline in einem vertikalen Schreibmodus:

![Diagramm, das die Block-Achse horizontal und die Inline-Achse vertikal zeigt.](mdn-vertical.png)

## Siehe auch

- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Flex-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Fluss-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Verständnis von logischen Eigenschaften und Werten](https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/) auf Smashing Magazine (2018)
