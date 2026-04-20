---
title: "`fill-rule` CSS property"
short-title: fill-rule
slug: Web/CSS/Reference/Properties/fill-rule
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`fill-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Regel, die verwendet wird, um zu bestimmen, welche Teile der SVG-Form-Leinwand innerhalb einer Form eingeschlossen werden sollen, um gefüllt zu werden. Falls vorhanden, überschreibt sie das {{SVGAttr("fill-rule")}} Attribut des Elements.

Die `fill-rule` klärt, welche Bereiche einer Form als "innerhalb" der Form betrachtet werden sollen. Es gibt zwei Werte, die Sie setzen können, um dem Browser mitzuteilen, wie das Innere einer Form bestimmt werden soll. Für Formen, die keine sich überschneidenden Pfade haben, wie ein Kreis, sind die Grenzen dessen, was innerhalb einer zu füllenden Form liegt, intuitiv klar. Bei komplexen Formen, die sich überschneidende Pfade enthalten (wie ein Venn-Diagramm) oder Pfade, die andere Pfade einschließen (wie ein Donut), ist die Interpretation, welche Abschnitte der Form "innerhalb" der Form sind und von der {{cssxref("fill")}} Eigenschaft gefüllt werden sollen, möglicherweise nicht offensichtlich.

> [!NOTE]
> Die `fill-rule` Eigenschaft gilt nur für {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

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
  - : Für jeden Punkt in der Form wird ein Strahl in einer beliebigen Richtung über die äußeren Kanten der Form hinaus gezogen. Jeder Strahl wird untersucht, um die Stellen zu bestimmen, an denen der Strahl die Form kreuzt. Beginnend mit einem Zähler von Null, addieren Sie eins jedes Mal, wenn ein Pfadsegment den Strahl von links nach rechts kreuzt, und subtrahieren Sie eins jedes Mal, wenn ein Pfadsegment den Strahl von rechts nach links kreuzt. Nach dem Zählen der Kreuzungen, wenn das Ergebnis null ist, dann ist der Punkt außerhalb des Pfades. Andernfalls ist er innerhalb.

- `evenodd`
  - : Für jeden Punkt im Füllregel-Kasten wird ein Strahl in eine beliebige Richtung gezogen. Die Anzahl der Segmente des gegebenen Pfades, die der Strahl kreuzt, werden gezählt. Wenn diese Zahl ungerade ist, liegt der Punkt innerhalb; wenn gerade, liegt er außerhalb. Null wird als gerade angesehen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Füllregeln für SVG-Elemente

Dieses Beispiel demonstriert, wie eine `fill-rule` deklariert wird, die Wirkung der Eigenschaft und wie die CSS `fill-rule` Eigenschaft Vorrang vor dem `fill-rule` Attribut hat.

#### HTML

Wir definieren ein SVG mit zwei komplexen Formen, die mit den SVG {{SVGElement("polygon")}} und {{SVGElement("path")}} Elementen definiert sind. Das Polygon hat das SVG `fill-rule` Attribut auf `evenodd` gesetzt, und der sternförmige Pfad ist auf `nonzero` gesetzt, was der Standard ist. Um die Linien sichtbar zu machen, setzen wir die Umrandung auf `rot` mit dem SVG {{SVGAttr("stroke")}} Attribut (wir hätten alternativ die {{CSSXRef("stroke")}} Eigenschaft verwenden können).

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

Das obige SVG wird dreimal wiederholt; wir haben nur eine Kopie der Kürze halber gezeigt.

#### CSS

Die in das erste SVG verschachtelten Formen haben kein CSS angewendet. Wir setzen die Formen im zweiten SVG, um den `nonzero` Wert zu verwenden. Das dritte SVG hat alle seine verschachtelten Formen auf `evenodd` gesetzt.

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

Mit dem `nonzero` Wert für `fill-rule` ist das "Innere" der Form die gesamte Form. Der `evenodd` Wert definiert einige Bereiche als leer. Das erste Bild rendert die `fill-rule`, die als Attribut enthalten ist. Das Deklarieren der `fill-rule` im CSS überschreibt die Attributwerte in den zweiten und dritten Bildern.

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
