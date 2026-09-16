---
title: "`fill-rule` CSS property"
short-title: fill-rule
slug: Web/CSS/Reference/Properties/fill-rule
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`fill-rule`** definiert die Regel, die verwendet wird, um zu bestimmen, welche Teile der Zeichenfläche einer SVG-Form innerhalb einer zu füllenden Form liegen. Falls vorhanden, überschreibt sie das Attribut {{SVGAttr("fill-rule")}} des Elements.

`fill-rule` verdeutlicht, welche Bereiche einer Form als „innerhalb“ der Form betrachtet werden sollen. Es bietet zwei Werte, die Sie festlegen können, um dem Browser mitzuteilen, wie das Innere einer Form bestimmt werden soll. Bei Formen ohne sich schneidende Pfade, wie einem Kreis, sind die Grenzen dessen, was innerhalb einer zu füllenden Form liegt, intuitiv klar. Bei komplexen Formen mit sich schneidenden Pfaden (wie etwa einem Venn-Diagramm) oder Pfaden, die andere Pfade umschließen (wie etwa einem Donut), ist möglicherweise nicht offensichtlich, welche Abschnitte der Form „innerhalb“ der Form liegen und durch die Eigenschaft {{cssxref("fill")}} gefüllt werden sollten.

> [!NOTE]
> Die Eigenschaft `fill-rule` gilt nur für die Elemente {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}}, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

## Syntax

```css
/* Keyword values */
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
  - : Für jeden Punkt in der Form wird ein Strahl in eine zufällige Richtung über die äußeren Kanten der Form hinaus gezogen. Jeder Strahl wird untersucht, um die Stellen zu bestimmen, an denen der Strahl die Form kreuzt. Beginnend mit einem Zählerstand von null wird eins addiert, wenn ein Pfadsegment den Strahl von links nach rechts kreuzt, und eins subtrahiert, wenn ein Pfadsegment den Strahl von rechts nach links kreuzt. Wenn nach dem Zählen der Kreuzungen das Ergebnis null ist, liegt der Punkt außerhalb des Pfads. Andernfalls liegt er innerhalb.

- `evenodd`
  - : Für jeden Punkt im Bereich der Füllregel wird ein Strahl in eine zufällige Richtung gezogen. Die Anzahl der Pfadsegmente der angegebenen Form, die der Strahl kreuzt, wird gezählt. Ist diese Anzahl ungerade, liegt der Punkt innerhalb; ist sie gerade, liegt der Punkt außerhalb. Null wird als gerade betrachtet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Füllregeln für SVG-Elemente

Dieses Beispiel demonstriert, wie eine `fill-rule` deklariert wird, die Auswirkung der Eigenschaft und wie die CSS-Eigenschaft `fill-rule` Vorrang vor dem Attribut `fill-rule` hat.

#### HTML

Wir definieren ein SVG mit zwei komplexen Formen, die mithilfe der SVG-Elemente {{SVGElement("polygon")}} und {{SVGElement("path")}} definiert werden. Das Polygon hat das SVG-Attribut `fill-rule` auf `evenodd` gesetzt, und der sternförmige Pfad ist auf `nonzero` gesetzt, was der Standardwert ist. Um die Linien sichtbar zu machen, setzen wir den Umriss mithilfe des SVG-Attributs {{SVGAttr("stroke")}} auf `red` (alternativ hätten wir die Eigenschaft {{CSSXRef("stroke")}} verwenden können).

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

Das obige SVG wird dreimal wiederholt; der Kürze halber zeigen wir nur eine Kopie.

#### CSS

Auf die Formen, die im ersten SVG verschachtelt sind, wird kein CSS angewendet. Wir setzen die Formen innerhalb des zweiten SVG so, dass sie den Wert `nonzero` verwenden. Im dritten SVG sind alle verschachtelten Formen auf `evenodd` gesetzt.

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

Mit dem Wert `nonzero` für `fill-rule` ist das „Innere“ der Form die gesamte Form. Der Wert `evenodd` definiert einen Teil des Bereichs als leer. Das erste Bild rendert die als Attribut enthaltene `fill-rule`. Die Deklaration von `fill-rule` im CSS überschreibt die Attributwerte im zweiten und dritten Bild.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("fill-rule")}}
- Präsentationseigenschaften: `fill-rule`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}} und {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- Datentyp {{cssxref("color_value", "&lt;color>")}}
- Datentyp {{cssxref("basic-shape")}}
