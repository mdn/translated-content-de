---
title: Grundlegende Konzepte logischer Eigenschaften und Werte
slug: Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

{{CSSRef}}

Das [CSS Logical Properties and Values Module](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties) definiert flussbezogene Abbildungen für viele der {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werte in CSS. Dieser Artikel behandelt dieses Modul und erklärt {{Glossary("flow_relative_values", "flussbezogene Werte")}} und Eigenschaften.

## Warum sind logische Eigenschaften nützlich?

CSS 2.1 und frühere Versionen hatten Dinge nach den physischen Abmessungen des Bildschirms dimensioniert. Daher beschreiben wir Boxen als {{CSSxRef("width")}} und {{CSSxRef("height")}}, positionieren Elemente mit `top` und `left` und weisen den `top`, `right`, `bottom`, `left` usw. Ränder, Abstände und Rahmen zu. Das Modul der logischen Eigenschaften und Werte definiert Abbildungen für diese {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werte zu deren logischen oder flussbezogenen Gegenstücken — z. B. `start` und `end` anstelle von `left` und `right`/`top` und `bottom`.

Diese Abbildungen sind besonders nützlich für Websites, die in Sprachen mit einer anderen Schreibrichtung als das ursprüngliche Layout übersetzt werden. Zum Beispiel: Mit einem CSS-Grid-Layout, wenn der Raster-Container eine Breite hat und die {{CSSxRef("align-self")}}- und {{CSSxRef("justify-self")}}-Eigenschaften genutzt werden, um die Rasterelemente auszurichten, bewirken diese flussbezogenen Eigenschaften, dass `justify-self: start` das Element am Anfang der Inlinedimension ausrichtet und `align-self: start` dasselbe in der Blockdimension.

![Ein Raster in einer horizontalen Schreibrichtung](grid-horizontal-width-sm.png)

Wenn der Schreibrichtung-Modus dieser Komponente mithilfe der {{CSSxRef("writing-mode")}}-Eigenschaft auf `vertical-rl` geändert wird, funktioniert die Ausrichtung weiterhin auf die gleiche Weise. Die Inline-Dimension läuft vertikal, und die Block-Dimension horizontal. Das Raster sieht jedoch nicht mehr gleich aus, da die Breite des Containers ein horizontaler Messwert ist, ein Messwert, der mit der physischen und nicht mit der logischen oder flussbezogenen Ausrichtung des Textes verbunden ist.

![Ein Raster in einer vertikalen Schreibrichtung.](grid-vertical-width-sm.png)

Wenn stattdessen die logische Eigenschaft {{CSSxRef("inline-size")}} verwendet wird, funktioniert die Komponente unabhängig davon, welcher Schreibrichtung-Modus verwendet wird, auf die gleiche Weise.

![Ein Raster-Layout in einer vertikalen Schreibrichtung](grid-vertical-inline-size-small.png)

Sie können dies im Live-Beispiel unten ausprobieren. Ändern Sie `writing-mode` von `vertical-rl` zu `horizontal-tb` bei `.grid`, um zu sehen, wie sich die verschiedenen Eigenschaften auf das Layout auswirken.

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

Wenn Sie an einer Website arbeiten, die sich in einer anderen Schreibrichtung als horizontal von oben nach unten befindet, oder wenn Sie Schreibrichtungen aus kreativen Gründen verwenden, ist es sinnvoll, sich auf den Fluss des Inhalts beziehen zu können.

## Block- und Inline-Dimensionen

Ein Schlüsselkonzept bei der Arbeit mit flussbezogenen Eigenschaften und Werten sind die beiden Dimensionen Block und Inline. CSS-Layout-Methoden wie Flexbox und Grid Layout verwenden die Konzepte `block` und `inline` anstelle von `right` und `left`/`top` und `bottom` beim Ausrichten von Elementen.

Die `inline`-Dimension ist die Dimension, entlang der eine Textzeile in der verwendeten Schreibrichtung verläuft. Daher ist in einem englischen Dokument, bei dem der Text horizontal von links nach rechts läuft, oder in einem arabischen Dokument, bei dem der Text horizontal von rechts nach links läuft, die Inline-Dimension _horizontal_. Wechseln Sie zu einer vertikalen Schreibrichtung (z. B. ein japanisches Dokument), dann ist die Inline-Dimension jetzt _vertikal_, da die Zeilen in dieser Schreibrichtung vertikal verlaufen.

Die Block-Dimension ist die andere Dimension und die Richtung, in der Blöcke — wie Absätze — nacheinander angezeigt werden. In Englisch und Arabisch verlaufen diese vertikal, während sie in jeder vertikalen Schreibrichtung horizontal verlaufen.

Das folgende Diagramm zeigt die Inline- und Block-Richtungen in einer horizontalen Schreibrichtung:

![Diagramm, das die Inline-Achse horizontal verlaufend und die Block-Achse vertikal verlaufend zeigt.](mdn-horizontal.png)

Dieses Diagramm zeigt Block und Inline in einer vertikalen Schreibrichtung:

![Diagramm, das die Block-Achse horizontal und die Inline-Achse vertikal verlaufend zeigt.](mdn-vertical.png)

## Siehe auch

- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Flex-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Flusslayout und Schreibrichtungen](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Understanding logical properties and values](https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/) auf Smashing Magazine (2018)
