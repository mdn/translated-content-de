---
title: Grundkonzepte der logischen Eigenschaften und Werte
slug: Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Das [Modul für CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties) definiert flussbezogene Zuordnungen für viele der {{Glossary("physical_properties", "physikalischen Eigenschaften")}} und Werte in CSS. Dieser Artikel behandelt dieses Modul und erklärt {{Glossary("flow_relative_values", "flussbezogene Werte")}} und Eigenschaften.

## Warum logische Eigenschaften nützlich sind

CSS 2.1 und frühere Versionen haben Dinge gemäß den physikalischen Abmessungen des Bildschirms dimensioniert. Daher beschreiben wir Kästen, die eine {{CSSxRef("width")}} und {{CSSxRef("height")}} haben, positionieren Elemente von `top` und `left` aus, weisen `top`, `right`, `bottom`, `left` Ränder, Abstände und Polsterungen zu, etc. Das Modul für logische Eigenschaften und Werte definiert Zuordnungen für diese {{Glossary("physical_properties", "physikalischen Eigenschaften")}} und Werte zu ihren logischen oder flussbezogenen Gegenstücken — z.B. `start` und `end` im Gegensatz zu `left` und `right`/`top` und `bottom`.

Diese Zuordnungen sind sehr nützlich für Webseiten, die in Sprachen mit einem anderen Schreibmodus als dem ursprünglichen Layout übersetzt werden. Zum Beispiel, wenn ein CSS-Gitterlayout verwendet wird und der Gittercontainer eine Breite mit den Eigenschaften {{CSSxRef("align-self")}} und {{CSSxRef("justify-self")}} zugewiesen hat, um die Gitterelemente auszurichten, da diese Eigenschaften flussbezogen sind, richtet `justify-self: start` das Element am Anfang der Inline-Dimension aus, und `align-self: start` tut dasselbe in der Block-Dimension.

![Ein Gitter in einem horizontalen Schreibmodus](grid-horizontal-width-sm.png)

Wenn der Schreibmodus dieser Komponente mit der Eigenschaft {{CSSxRef("writing-mode")}} auf `vertical-rl` geändert wird, funktioniert die Ausrichtung weiterhin auf die gleiche Weise. Die Inline-Dimension verläuft vertikal und die Block-Dimension horizontal. Das Gitter sieht jedoch nicht gleich aus, da die dem Container zugewiesene Breite ein horizontales Maß ist, ein Maß, das an das Physische und nicht das Logische oder flussbezogene Laufen des Textes gebunden ist.

![Ein Gitter im vertikalen Schreibmodus.](grid-vertical-width-sm.png)

Wenn anstelle der `width`-Eigenschaft die logische Eigenschaft {{CSSxRef("inline-size")}} verwendet wird, funktioniert die Komponente unabhängig vom verwendeten Schreibmodus auf die gleiche Weise.

![Ein Gitterlayout im vertikalen Schreibmodus](grid-vertical-inline-size-small.png)

Sie können dies im Live-Beispiel unten ausprobieren. Ändern Sie `writing-mode` von `vertical-rl` zu `horizontal-tb` an `.grid`, um zu sehen, wie sich die verschiedenen Eigenschaften auf das Layout auswirken.

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

Wenn Sie mit einer Website in einem anderen Schreibmodus als einem horizontalen, von oben nach unten arbeitenden, arbeiten oder Schreibmodi aus kreativen Gründen verwenden, macht es viel Sinn, sich auf den Fluss des Inhalts beziehen zu können.

## Block- und Inline-Dimensionen

Ein Schlüsselkonzept der Arbeit mit flussbezogenen Eigenschaften und Werten sind die beiden Dimensionen von Block und Inline. CSS-Layout-Methoden wie Flexbox und Gitterlayout verwenden die Konzepte von `block` und `inline` anstelle von `right` und `left`/`top` und `bottom`, wenn Elemente ausgerichtet werden.

Die `inline`-Dimension ist die Dimension, in der eine Textzeile im verwendeten Schreibmodus verläuft. Daher ist in einem englischen Dokument mit horizontal von links nach rechts verlaufendem Text oder in einem arabischen Dokument mit horizontal von rechts nach links verlaufendem Text die Inline-Dimension _horizontal_. Wechseln Sie zu einem vertikalen Schreibmodus (z.B. ein japanisches Dokument) und die Inline-Dimension ist jetzt _vertikal_, da Zeilen in diesem Schreibmodus vertikal verlaufen.

Die Block-Dimension ist die andere Dimension und die Richtung, in der Blöcke — wie Absätze — nacheinander angezeigt werden. In Englisch und Arabisch verlaufen diese vertikal, während sie in jedem vertikalen Schreibmodus horizontal verlaufen.

Das folgende Diagramm zeigt die Inline- und Blockrichtungen in einem horizontalen Schreibmodus:

![Diagramm, das die Inline-Achse horizontal und die Block-Achse vertikal zeigt.](mdn-horizontal.png)

Dieses Diagramm zeigt Block und Inline in einem vertikalen Schreibmodus:

![Diagramm, das die Block-Achse horizontal und die Inline-Achse vertikal zeigt.](mdn-vertical.png)

## Siehe auch

- [Box-Ausrichtung im Gitterlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Flex-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Verständnis von logischen Eigenschaften und Werten](https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/) auf Smashing Magazine (2018)
