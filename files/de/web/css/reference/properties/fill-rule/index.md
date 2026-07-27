---
title: "`fill-rule` CSS property"
short-title: fill-rule
slug: Web/CSS/Reference/Properties/fill-rule
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`fill-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Regel, die verwendet wird, um festzulegen, welche Teile der Leinwand einer SVG-Form innerhalb einer Form enthalten sind, die gefüllt werden soll. Wenn vorhanden, überschreibt sie das {{SVGAttr("fill-rule")}}-Attribut des Elements.

Die `fill-rule` verdeutlicht, welche Bereiche einer Form als "innerhalb" der Form betrachtet werden sollen. Sie bietet zwei Werte, mit denen Sie dem Browser mitteilen können, wie das Innere einer Form bestimmt werden soll. Für Formen, die keine sich überschneidenden Pfade aufweisen, wie etwa ein Kreis, sind die Grenzen dessen, was innerhalb der Form gefüllt werden soll, intuitiv klar. Bei komplexen Formen, die überschneidende Pfade enthalten (wie ein Venn-Diagramm) oder Pfade, die andere Pfade umschließen (wie ein Donut), ist die Interpretation, welche Abschnitte der Form "innerhalb" der Form liegen und durch die {{cssxref("fill")}}-Eigenschaft gefüllt werden sollen, möglicherweise nicht offensichtlich.

> [!NOTE]
> Die `fill-rule`-Eigenschaft gilt nur für die {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG, HTML oder Pseudo-Elemente.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `nonzero`
  - : Für jeden Punkt in der Form wird ein Strahl in eine zufällige Richtung bis über die äußeren Ränder der Form hinaus gezogen. Jeder Strahl wird untersucht, um festzustellen, wo der Strahl die Form schneidet. Beginnend mit einem Zähler von null wird jedes Mal eins addiert, wenn ein Pfadsegment den Strahl von links nach rechts kreuzt, und eins subtrahiert, wenn ein Pfadsegment den Strahl von rechts nach links kreuzt. Nach der Zählung der Kreuzungen, wenn das Ergebnis null ist, dann liegt der Punkt außerhalb des Pfades. Andernfalls liegt er innerhalb.

- `evenodd`
  - : Für jeden Punkt in der Box der Füllregel wird ein Strahl in eine zufällige Richtung gezogen. Die Anzahl der Pfadsegmente der gegebenen Form, die der Strahl kreuzt, wird gezählt. Wenn diese Zahl ungerade ist, liegt der Punkt innerhalb; wenn gerade, liegt er außerhalb. Null wird als gerade betrachtet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Füllregeln für SVG-Elemente

Dieses Beispiel zeigt, wie eine `fill-rule` deklariert wird, die Wirkung der Eigenschaft und wie die CSS `fill-rule`-Eigenschaft die `fill-rule`-Attribut überschreibt.

#### HTML

Wir definieren ein SVG mit zwei komplexen Formen, die mithilfe der SVG {{SVGElement("polygon")}} und {{SVGElement("path")}} Elemente definiert sind. Das Polygon hat das SVG `fill-rule`-Attribut auf `evenodd` gesetzt und der sternförmige Pfad ist auf `nonzero` gesetzt, was der Standardwert ist. Um die Linien sichtbar zu machen, setzen wir den Umriss auf `red` mit dem SVG {{SVGAttr("stroke")}}-Attribut (wir hätten alternativ die {{CSSXRef("stroke")}}-Eigenschaft verwenden können).

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

Das obige SVG wird dreimal wiederholt; wir haben nur eine Kopie zu Briefzwecken gezeigt.

#### CSS

Die in das erste SVG eingebetteten Formen haben kein CSS angewendet. Wir setzen die Formen im zweiten SVG auf den Wert `nonzero`. Das dritte SVG hat alle seine eingebetteten Formen auf `evenodd` gesetzt.

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

Mit dem `nonzero` Wert für `fill-rule` ist das "Innere" der Form die gesamte Form. Der `evenodd` Wert definiert einige Bereiche als leer. Das erste Bild rendert die `fill-rule`, die als Attribut enthalten ist. Die Deklaration der `fill-rule` im CSS überschreibt die Attributwerte im zweiten und dritten Bild.

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
