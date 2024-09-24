---
title: fill-rule
slug: Web/CSS/fill-rule
l10n:
  sourceCommit: 278bca8df3bf92fbed35cb2cc81daf2aa3765b95
---

{{CSSRef}}

Die **`fill-rule`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) definiert die Regel, die verwendet wird, um festzulegen, welche Teile der Leinwand der SVG-Form innerhalb einer Form gefüllt werden sollen. Wenn vorhanden, überschreibt sie das Attribut {{SVGAttr("fill-rule")}} des Elements.

Die `fill-rule`-Eigenschaft klärt, welche Bereiche einer Form als "innerhalb" der Form betrachtet werden sollten. Sie bietet zwei Werte, die Sie einstellen können, um dem Browser mitzuteilen, wie das Innere einer Form bestimmt werden soll. Für Formen, die keine sich überschneidenden Pfade haben, wie z.B. ein Kreis, sind die Grenzen dessen, was innerhalb einer Form zu füllen ist, intuitiv klar. Bei komplexen Formen, die sich überschneidende Pfade enthalten (wie ein Venn-Diagramm) oder Pfade, die andere Pfade einschließen (wie ein Donut), ist die Interpretation, welche Teile der Form "innerhalb" der Form liegen und durch die Eigenschaft {{cssxref("fill")}} gefüllt werden sollen, möglicherweise nicht offensichtlich.

> [!NOTE]
> Die `fill-rule`-Eigenschaft gilt nur für die Elemente {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}}, die in einem {{SVGElement("svg")}} eingebettet sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudoelemente.

## Syntax

```css
/* Schlüsselwörter */
fill-rule: evenodd;
fill-rule: nonzero;

/* Globale Werte */
fill-rule: inherit;
fill-rule: initial;
fill-rule: revert;
fill-rule: revert-layer;
fill-rule: unset;
```

### Werte

- `nonzero`

  - : Für jeden Punkt in der Form wird ein Strahl in einer zufälligen Richtung bis über die äußeren Ränder der Form hinausgezogen. Jeder Strahl wird untersucht, um die Stellen zu bestimmen, an denen der Strahl die Form kreuzt. Beginnend mit einer Zählung von null, wird bei jedem Durchgang eines Pfadsegmente von links nach rechts eins addiert und bei jedem Durchgang von rechts nach links eins subtrahiert. Nach dem Zählen der Kreuzungen, wenn das Ergebnis null ist, liegt der Punkt außerhalb des Pfades. Andernfalls befindet er sich innerhalb.

- `evenodd`

  - : Für jeden Punkt im Füllregel-Bereich wird ein Strahl in einer zufälligen Richtung gezogen. Die Anzahl der Pfadsegmente der gegebenen Form, die der Strahl kreuzt, wird gezählt. Wenn diese Zahl ungerade ist, befindet sich der Punkt innerhalb; wenn gerade, befindet er sich außerhalb. Null wird als gerade betrachtet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der Füllregeln für SVG-Elemente

Dieses Beispiel zeigt, wie eine `fill-rule` deklariert wird, die Wirkung der Eigenschaft und wie die CSS-Eigenschaft `fill-rule` Vorrang vor dem `fill-rule`-Attribut hat.

#### HTML

Wir definieren ein SVG mit zwei komplexen Formen, die mit den SVG-Elementen {{SVGElement("polygon")}} und {{SVGElement("path")}} definiert sind. Das Polygon hat das SVG-Attribut `fill-rule` auf `evenodd` gesetzt und der sternförmige Pfad ist auf `nonzero` gesetzt, was der Standard ist. Um die Linien sichtbar zu machen, setzen wir die Umrandung mit dem SVG-Attribut {{SVGAttr("stroke")}} auf `red` (alternativ hätten wir die Eigenschaft {{CSSXRef("stroke")}} verwenden können).

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

Das oben gezeigte SVG wird dreimal wiederholt; wir haben jedoch nur eine Kopie für die Kürze gezeigt.

#### CSS

Die Formen, die im ersten SVG eingebettet sind, haben kein angewendetes CSS. Wir setzen die Formen im zweiten SVG auf den Wert `nonzero`. Das dritte SVG hat alle seine eingebetteten Formen auf `evenodd` gesetzt.

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

Mit dem Wert `nonzero` für `fill-rule` ist das "Innere" der Form die gesamte Form. Der Wert `evenodd` definiert bestimmte Bereiche als leer. Das erste Bild zeigt die `fill-rule` als Attribut. Durch das Deklarieren der `fill-rule` im CSS werden die Attributwerte im zweiten und dritten Bild überschrieben.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("fill-rule")}} Attribut
- Präsentationseigenschaften: `fill-rule`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, und {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} Datentyp
