---
title: fill-rule
slug: Web/CSS/fill-rule
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`fill-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Regel, die zur Bestimmung verwendet wird, welche Teile der Leinwand einer SVG-Form in eine Form eingefügt werden sollen, um gefüllt zu werden. Wenn vorhanden, überschreibt sie das {{SVGAttr("fill-rule")}} Attribut des Elements.

Die `fill-rule` Eigenschaft klärt, welche Bereiche einer Form als "innere" Bereiche der Form betrachtet werden sollen. Sie bietet zwei Werte, die Sie festlegen können, um dem Browser mitzuteilen, wie das Innere einer Form bestimmt werden soll. Für Formen ohne sich kreuzende Pfade, wie einen Kreis, sind die Grenzen dessen, was innerhalb der Form zu füllen ist, intuitiv klar. Bei komplexen Formen, die sich kreuzende Pfade enthalten (wie ein Venn-Diagramm) oder Pfade, die andere Pfade einschließen (wie ein Donut), ist die Interpretation, welche Abschnitte der Form "innerhalb" der Form sind und durch die {{cssxref("fill")}} Eigenschaft gefüllt werden sollen, möglicherweise nicht offensichtlich.

> [!NOTE]
> Die `fill-rule` Eigenschaft gilt nur für {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}}, und {{SVGElement("tspan")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

## Syntax

```css
/* keywords */
fill-rule: evenodd;
fill-rule: nonzero;

/* Global values */
fill-rule: inherit;
fill-rule: initial;
fill-rule: revert;
fill-rule: revert-layer;
fill-rule: unset;
```

### Werte

- `nonzero`
  - : Für jeden Punkt in der Form wird ein Strahl in eine zufällige Richtung über die äußeren Kanten der Form hinaus gezeichnet. Jeder Strahl wird untersucht, um die Stellen zu bestimmen, an denen der Strahl die Form kreuzt. Beginnend mit einem Zählwert von null, wird jedes Mal eins hinzugefügt, wenn ein Pfadsegment den Strahl von links nach rechts kreuzt, und eins abgezogen, wenn ein Pfadsegment den Strahl von rechts nach links kreuzt. Nach dem Zählen der Kreuzungen, wenn das Ergebnis null ist, liegt der Punkt außerhalb des Pfades. Andernfalls liegt er innerhalb.

- `evenodd`
  - : Für jeden Punkt im Box der Füllregel wird ein Strahl in eine zufällige Richtung gezeichnet. Die Anzahl der Pfadsegmente von der gegebenen Form, die der Strahl kreuzt, wird gezählt. Wenn diese Zahl ungerade ist, liegt der Punkt innerhalb; wenn sie gerade ist, liegt er außerhalb. Null wird als gerade betrachtet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Füllregeln für SVG-Elemente

Dieses Beispiel zeigt, wie eine `fill-rule` deklariert wird, die Wirkung der Eigenschaft, und wie die CSS `fill-rule` Eigenschaft Vorrang vor dem `fill-rule` Attribut hat.

#### HTML

Wir definieren ein SVG mit zwei komplexen Formen, die mit den SVG {{SVGElement("polygon")}} und {{SVGElement("path")}} Elementen definiert sind. Das Polygon hat das SVG `fill-rule` Attribut auf `evenodd` gesetzt, und der sternförmige Pfad ist auf `nonzero` gesetzt, was der Standardwert ist. Um die Linien sichtbar zu machen, setzen wir den Umriss auf `red` mit dem SVG {{SVGAttr("stroke")}} Attribut (wir hätten alternativ die {{CSSXRef("stroke")}} Eigenschaft verwenden können).

```html hidden
<p>Original SVG</p>
```

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="red"
    fill-rule="evenodd" />
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="red"
    fill-rule="nonzero" />
</svg>
```

```html hidden
<p><code>fill-rule: nonzero;</code></p>
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="red"
    fill-rule="evenodd" />
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="red"
    fill-rule="nonzero" />
</svg>
<p><code>fill-rule: evenodd;</code></p>
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="red"
    fill-rule="evenodd" />
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="red"
    fill-rule="nonzero" />
</svg>
```

Das oben gezeigte SVG wird dreimal wiederholt; wir haben nur eine Kopie aus Gründen der Kürze gezeigt.

#### CSS

Die Formen, die im ersten SVG verschachtelt sind, haben kein angewendetes CSS. Wir setzen die Formen im zweiten SVG auf den Wert `nonzero`. Das dritte SVG hat alle seine verschachtelten Formen auf `evenodd` gesetzt.

```css hidden
svg {
  border: 1px solid;
  height: calc(33vh - 2.5em);
  margin-bottom: 10px;
}
p {
  margin: 0;
}
```

```css
svg:nth-of-type(2) > * {
  fill-rule: nonzero;
}
svg:nth-of-type(3) > * {
  fill-rule: evenodd;
}
```

#### Ergebnisse

{{EmbedLiveSample("Defining the fill rules for SVG elements", "300", "540")}}

Mit dem `nonzero` Wert für `fill-rule` ist das "Innere" der Form die gesamte Form. Der `evenodd` Wert definiert einige Bereiche als leer. Das erste Bild rendert die `fill-rule`, die als Attribut enthalten ist. Das Deklarieren der `fill-rule` im CSS hebt die Attributwerte im zweiten und dritten Bild auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("fill-rule")}} Attribut
- Präsentationseigenschaften: `fill-rule`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, und {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} Datentyp
