---
title: Grundlegende Konzepte von logischen Eigenschaften und Werten
short-title: Grundlegende Konzepte
slug: Web/CSS/Guides/Logical_properties_and_values/Basic_concepts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS-Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties) definiert flussbezogene Zuordnungen für viele der {{Glossary("physical_properties", "physikalischen Eigenschaften")}} und Werte in CSS. Dieser Artikel behandelt dieses Modul und erklärt {{Glossary("flow_relative_values", "flussbezogene Werte")}} und Eigenschaften.

## Warum logische Eigenschaften nützlich sind

CSS 2.1 und früher befassten sich mit der Größenbestimmung von Elementen gemäß den physikalischen Dimensionen des Bildschirms. Daher beschreiben wir Boxen als Objekte mit einer {{CSSxRef("width")}} und {{CSSxRef("height")}}, positionieren Elemente von `top` und `left` aus, weisen Ränder, Abstand und Auffüllung `top`, `right`, `bottom`, `left` zu, etc. Das Modul der logischen Eigenschaften und Werte legt Zuordnungen für diese {{Glossary("physical_properties", "physikalischen Eigenschaften")}} und Werte zu ihren logischen oder flussbezogenen Entsprechungen fest — z.B. `start` und `end` anstelle von `left` und `right`/`top` und `bottom`.

Diese Zuordnungen sind sehr nützlich für Websites, die in Sprachen mit einem anderen Schreibmodus als dem ursprünglichen Layout übersetzt werden. Bei einem CSS-Grid-Layout beispielsweise, wenn der Grid-Container mit der {{CSSxRef("align-self")}} und {{CSSxRef("justify-self")}} Eigenschaften versehen ist, um die Grid-Elemente auszurichten, da diese Eigenschaften flussbezogen sind, richtet `justify-self: start` das Element am Anfang der Inline-Dimension aus, und `align-self: start` tut dies in der Block-Dimension.

![Ein Grid in horizontalem Schreibmodus](grid-horizontal-width-sm.png)

Wenn der Schreibmodus dieser Komponente mithilfe der {{CSSxRef("writing-mode")}} Eigenschaft auf `vertical-rl` geändert wird, funktioniert die Ausrichtung weiterhin auf die gleiche Weise. Die Inline-Dimension verläuft vertikal und die Block-Dimension horizontal. Das Grid sieht jedoch anders aus, da die dem Container zugewiesene Breite ein horizontales Maß ist, ein Maß, das an das physikalische und nicht an das logische oder flussbezogene Laufen des Textes gebunden ist.

![Ein Grid im vertikalen Schreibmodus.](grid-vertical-width-sm.png)

Wenn statt der `width`-Eigenschaft die logische Eigenschaft {{CSSxRef("inline-size")}} verwendet wird, funktioniert die Komponente unabhängig davon, welcher Schreibmodus verwendet wird, auf die gleiche Weise.

![Ein Grid-Layout im vertikalen Schreibmodus](grid-vertical-inline-size-small.png)

Sie können dies im folgenden Live-Beispiel ausprobieren. Ändern Sie `writing-mode` von `vertical-rl` zu `horizontal-tb` auf `.grid`, um zu sehen, wie sich die verschiedenen Eigenschaften auf das Layout auswirken.

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

Wenn Sie mit einer Website in einem anderen als einem horizontalen, von oben nach unten verlaufenden Schreibmodus arbeiten oder Schreibmodi aus kreativen Gründen verwenden, macht es viel Sinn, sich auf den Fluss des Inhalts zu beziehen.

## Block- und Inline-Dimensionen

Ein Schlüsselkonzept bei der Arbeit mit flussbezogenen Eigenschaften und Werten sind die beiden Dimensionen Block und Inline. CSS-Layout-Methoden wie Flexbox und Grid-Layout verwenden die Konzepte von `block` und `inline` anstelle von `right` und `left`/`top` und `bottom`, wenn Elemente ausgerichtet werden.

Die `inline`-Dimension ist die Dimension, entlang derer eine Textzeile im verwendeten Schreibmodus verläuft. Daher ist in einem englischen Dokument mit horizontal von links nach rechts verlaufendem Text oder einem arabischen Dokument mit horizontal von rechts nach links verlaufendem Text die Inline-Dimension _horizontal_. Bei einem Wechsel zu einem vertikalen Schreibmodus (z.B. einem japanischen Dokument) ist die Inline-Dimension nun _vertikal_, da Zeilen in diesem Schreibmodus vertikal verlaufen.

Die Block-Dimension ist die andere Dimension und die Richtung, in der Blöcke — wie Absätze — nacheinander angezeigt werden. In Englisch und Arabisch verlaufen diese vertikal, während sie in jedem vertikalen Schreibmodus horizontal verlaufen.

Das folgende Diagramm zeigt die Inline- und Block-Richtungen in einem horizontalen Schreibmodus:

![Diagramm, das die Inline-Achse horizontal und die Block-Achse vertikal zeigt.](mdn-horizontal.png)

Dieses Diagramm zeigt Block und Inline in einem vertikalen Schreibmodus:

![Diagramm, das die Block-Achse horizontal und die Inline-Achse vertikal zeigt.](mdn-vertical.png)

## Siehe auch

- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Box-Ausrichtung im Flex-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Understanding logical properties and values](https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/) auf Smashing Magazine (2018)
