---
title: fill
slug: Web/CSS/fill
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`fill`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert, wie der Inhalt von SVG-Texten und das innere Canvas von SVG-Formen gefüllt oder bemalt werden. Wenn vorhanden, überschreibt sie das {{SVGAttr("fill")}} Attribut des Elements.

Die Bereiche innerhalb der Umrandung der SVG-Form oder des Textes werden bemalt. Was "innen" in einer Form ist, kann nicht immer klar sein. Die Wege, die eine Form definieren, können sich überlappen. Die Bereiche, die als "innen" dieser komplexen Formen betrachtet werden, werden durch die {{cssxref("fill-rule")}} Eigenschaft oder das Attribut geklärt.

Wenn Unterpfade offen sind, schließt `fill` den Pfad vor dem Bemalen, als ob ein "closepath"-Befehl enthalten wäre, der den letzten Punkt des Unterpfads mit dem ersten Punkt des Unterpfads verbindet. Mit anderen Worten, `fill` gilt für offene Unterpfade innerhalb von `path`-Elementen (d.h. Unterpfaden ohne closepath-Befehl) und `polyline`-Elementen.

> [!NOTE]
> Die `fill` Eigenschaft gilt nur für {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, und {{SVGElement('tspan')}} Elemente, die in ein {{SVGElement("svg")}} eingebettet sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

## Syntax

```css
/* keywords */
fill: none;
fill: context-fill;
fill: context-stroke;

/* <color> values */
fill: red;
fill: hsl(120deg 75% 25% / 60%);

/* <url> values */
fill: url("#gradientElementID");
fill: url("star.png");

/* <url> with fallback */
fill: url("#gradientElementID") blue;
fill: url("star.png") none;

/* Global values */
fill: inherit;
fill: initial;
fill: revert;
fill: revert-layer;
fill: unset;
```

### Werte

- `none`
  - : Es wird keine `fill` aufgebracht; die Bereiche innerhalb des Strichs, falls vorhanden, sind transparent.

- `context-fill`
  - : Verwendet den Farbwert von `fill` aus einem Kontextelement.

- `context-stroke`
  - : Verwendet den Farbwert von `stroke` aus einem Kontextelement.

- {{cssxref("color_value", "&lt;color>")}}
  - : Die Farbe der Füllung als ein gültiges CSS {{cssxref("color_value", "&lt;color>")}}.

- `<url>`
  - : Ein URL-Verweis auf ein SVG-Malelement, wie z.B. ein {{SVGElement("linearGradient")}}, {{SVGElement("radialGradient")}} oder {{SVGElement("pattern")}}. Der Ressourcenverweis kann optional von einem `<color>` oder `none` gefolgt werden, das als Fallback verwendet wird, wenn der referenzierte Maleserver nicht aufgelöst wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Füllwerte für SVG-Elemente definieren

Dieses Beispiel zeigt, wie eine `fill` angegeben wird, die Wirkung der Eigenschaft und wie die CSS `fill` Eigenschaft Vorrang vor dem `fill` Attribut hat.

#### HTML

Wir haben ein SVG mit zwei komplexen Formen, die mit den SVG {{SVGElement('polygon')}} und {{SVGElement('path')}} Elementen definiert sind. Beide haben das `fill` Attribut auf `#000` gesetzt (entspricht dem Standardwert, `black`). Wir fügen mit dem SVG {{SVGAttr("stroke")}} Attribut einen dunkelgrauen Strich von `#666` hinzu, hätten aber auch die {{CSSXRef("stroke")}} Eigenschaft verwenden können.

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="#666"
    fill="#000" />
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="#666"
    fill="#000" />
</svg>
```

#### CSS

Wir setzen `fill` Werte auf die Formen im SVG.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
path {
  fill: red;
}
polygon {
  fill: hsl(0deg 100% 50% / 60%);
}
```

#### Ergebnisse

{{EmbedLiveSample("Defining fill values for SVG elements", "300", "170")}}

Der CSS `fill` Eigenschaftswert überschreibt den SVG `fill` Attributwert, was dazu führt, dass beide Formen mit einer roten Farbe gefüllt werden; das Rot des Polygons ist transluzent.

### Verwenden von Füll-Schlüsselwortwerten

Dieses Beispiel zeigt die Verwendung von Schlüsselwortwerten für `fill`.

#### HTML

Wir fügen drei {{SVGElement("path")}} Elemente und ein {{SVGElement("marker")}} Element hinzu, das jedem Pfadpunkt einen {{SVGElement("circle")}} hinzufügt. Wir setzen den Kreismarker auf Schwarz mit einer grauen Füllung durch die SVG {{SVGAttr("stroke")}} und {{SVGAttr("fill")}} Attribute.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 90">
  <path d="M 10 44.64 L 30 10 L 70 10 L 90 44.64 L 70 79.28 L 30 79.28 Z" />
  <path d="M 100 44.64 L 80 10 L 120 10 L 140 44.64 L 120 79.28 L 80 79.28 Z" />
  <path
    d="M 150 44.64 L 130 10 L 170 10 L 190 44.64 L 170 79.28 L 130 79.28 Z" />
  <marker
    id="circle"
    markerWidth="12"
    markerHeight="12"
    refX="6"
    refY="6"
    markerUnits="userSpaceOnUse">
    <circle cx="6" cy="6" r="3" stroke-width="2" stroke="black" fill="grey" />
  </marker>
</svg>
```

#### CSS

Wir setzen unterschiedliche `stroke` und `fill` Farben auf jeden Pfad. Der erste Pfad, der mit einer roten Grenze, hat sein `fill` auf `none` gesetzt. Wir setzen den Kreismarker-Strich und die Füllung auf dieselbe Farbe wie den Strich des Elements, das sie markieren, indem wir den `context-stroke` Wert verwenden.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
path {
  stroke-width: 2px;
  marker: url("#circle");
}
path:nth-of-type(1) {
  stroke: red;
  fill: none;
}
path:nth-of-type(2) {
  stroke: green;
  fill: lightgreen;
}
path:nth-of-type(3) {
  stroke: blue;
  fill: lightblue;
}
circle {
  stroke: context-stroke;
  fill: context-stroke;
}
```

#### Ergebnisse

{{EmbedLiveSample("Using fill keyword values", "300", "170")}}

Beachten Sie, wie der erste Pfad einen transparenten Hintergrund hat, weil das `fill` `none` ist, das den Standardwert `fill` von `black` überschreibt. Die Kreise sind mit der Farbe des Strichs gefüllt. Wenn Sie den Wert auf `context-fill` ändern, sind die Kreise transparent, `lightgreen` und `lightblue` anstelle von `red`, `green` und `blue`.

### Füllungen und Fallbacks

Dieses Beispiel zeigt, wie ein `url()` Wert mit einem Fallback als `fill`-Wert enthalten sein kann.

#### HTML

Wir haben ein SVG, das zwei {{SVGElement("polygon")}} Sterne und ein {{SVGElement("linearGradient")}} enthält, das von grün zu gold zu rot verläuft.

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myGradient">
      <stop offset="5%" stop-color="green" />
      <stop offset="50%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </linearGradient>
  </defs>
  <polygon points="80,10 50,100 120,40 40,40 110,100" />
  <polygon points="180,10 150,100 220,40 140,40 210,100" />
</svg>
```

#### CSS

Wir setzen `fill` Werte auf die Polygone im SVG, indem wir einen `url()` Wert und einen Fallback bereitstellen.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
polygon:first-of-type {
  fill: url("#myGradient") magenta;
}
polygon:last-of-type {
  fill: url("#MISSINGIMAGE") magenta;
}
```

#### Ergebnisse

{{EmbedLiveSample("Fills and fallbacks", "300", "170")}}

Der erste Stern hat einen Verlauf als Hintergrund. Der zweite Stern verwendet den Fallback-Wert, da das im `url()` referenzierte Element nicht existiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("fill")}} Attribut
- Präsentationseigenschaften: `fill`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, und {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- Datentyp {{cssxref("basic-shape")}}
