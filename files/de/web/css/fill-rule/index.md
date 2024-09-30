---
title: fill-rule
slug: Web/CSS/fill-rule
l10n:
  sourceCommit: 278bca8df3bf92fbed35cb2cc81daf2aa3765b95
---

{{CSSRef}}

Die **`fill-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Regel, die verwendet wird, um zu bestimmen, welche Teile der SVG-Shape-Leinwand innerhalb einer zu füllenden Form enthalten sind. Wenn vorhanden, überschreibt sie das {{SVGAttr("fill-rule")}} Attribut des Elements.

Das `fill-rule` klärt, welche Bereiche einer Form als "innerhalb" der Form betrachtet werden sollen. Es bietet zwei Werte, die Sie festlegen können, um dem Browser mitzuteilen, wie das Innere einer Form bestimmt werden soll. Bei Formen, die keine sich überschneidenden Pfade haben, wie ein Kreis, sind die Grenzen dessen, was innerhalb einer Form gefüllt werden soll, intuitiv klar. Bei komplexen Formen, die sich überschneidende Pfade (wie ein Venn-Diagramm) oder Pfade, die andere Pfade einschließen (wie ein Donut), beinhalten, könnte die Interpretation, welche Abschnitte der Form "innerhalb" der Form sind und durch die {{cssxref("fill")}} Eigenschaft gefüllt werden sollen, nicht offensichtlich sein.

> [!NOTE]
> Die `fill-rule` Eigenschaft gilt nur für {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}}, und {{SVGElement("tspan")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG, HTML oder Pseudo-Elemente.

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

  - : Für jeden Punkt in der Form wird ein Strahl in eine Zufallsrichtung über die äußeren Kanten der Form hinaus gezogen. Jeder Strahl wird untersucht, um festzustellen, wo der Strahl die Form schneidet. Beginnend mit einem Zähler von null, addieren Sie eins jedes Mal, wenn ein Pfadsegment den Strahl von links nach rechts kreuzt und subtrahieren Sie eins jedes Mal, wenn ein Pfadsegment den Strahl von rechts nach links kreuzt. Nach dem Zählen der Kreuzungen, wenn das Ergebnis null ist, dann ist der Punkt außerhalb des Pfads. Andernfalls befindet er sich innerhalb des Pfads.

- `evenodd`

  - : Für jeden Punkt im Kasten der Füllregel wird ein Strahl in eine Zufallsrichtung gezogen. Die Anzahl der Pfadsegmente aus der gegebenen Form, die der Strahl schneidet, wird gezählt. Ist diese Zahl ungerade, befindet sich der Punkt innerhalb; ist sie gerade, befindet sich der Punkt außerhalb. Null wird als gerade angesehen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Füllregeln für SVG-Elemente

Dieses Beispiel demonstriert, wie eine `fill-rule` deklariert wird, die Wirkung der Eigenschaft und wie die CSS `fill-rule` Eigenschaft Vorrang vor dem `fill-rule` Attribut hat.

#### HTML

Wir definieren ein SVG mit zwei komplexen Formen, die mit den SVG {{SVGElement("polygon")}} und {{SVGElement("path")}} Elementen definiert sind. Das Polygon hat das SVG `fill-rule` Attribut auf `evenodd` gesetzt, und der sternförmige Pfad ist auf `nonzero` gesetzt, was der Standard ist. Um die Linien sichtbar zu machen, setzen wir die Umrandung auf `red` mit dem SVG {{SVGAttr("stroke")}} Attribut (wir hätten alternativ die {{CSSXRef("stroke")}} Eigenschaft verwenden können).

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

Das obige SVG wird dreimal wiederholt; wir haben nur eine Kopie gezeigt, der Kürze halber.

#### CSS

Die Formen, die im ersten SVG verschachtelt sind, haben keine CSS-Anwendung. Wir setzen die Formen im zweiten SVG auf den Wert `nonzero`. Das dritte SVG hat alle seine verschachtelten Formen auf `evenodd` gesetzt.

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

Mit dem Wert `nonzero` für `fill-rule` ist das "Innere" der Form die gesamte Form. Der Wert `evenodd` definiert einige Bereiche als leer. Das erste Bild rendert die `fill-rule` als Attribut. Die Deklaration der `fill-rule` im CSS überschreibt die Attributwerte im zweiten und dritten Bild.

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
