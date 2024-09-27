---
title: fill
slug: Web/CSS/fill
l10n:
  sourceCommit: 2f79d932a2ce13bf728462491c44ef13c299f390
---

{{CSSRef}}

Die **`fill`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert, wie SVG-Textinhalte und das innere Canvas von SVG-Formen gefüllt oder bemalt werden. Wenn vorhanden, überschreibt es das {{SVGAttr("fill")}}-Attribut des Elements.

Die Bereiche innerhalb der Kontur der SVG-Form oder des Textes werden bemalt. Was "innerhalb" einer Form ist, ist nicht immer klar. Die Pfade, die eine Form definieren, können sich überschneiden. Die Bereiche, die bei diesen komplexen Formen als "innerhalb" gelten, werden durch die {{cssxref("fill-rule")}}-Eigenschaft oder das Attribut geklärt.

Wenn Teilpfade offen sind, schließt `fill` den Pfad vor dem Bemalen, als ob ein „closepath“-Befehl eingefügt würde, der den letzten Punkt des Teilpfads mit dem ersten Punkt des Teilpfads verbindet. Mit anderen Worten, `fill` gilt für offene Teilpfade innerhalb von `path`-Elementen (d.h. Teilpfade ohne einen `closepath`-Befehl) und `polyline`-Elementen.

> [!NOTE]
> Die `fill`-Eigenschaft gilt nur für die Elemente {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}} und {{SVGElement('tspan')}}, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudoelemente.

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
fill: url(#gradientElementID);
fill: url(star.png);

/* <url> with fallback */
fill: url(#gradientElementID) blue;
fill: url(star.png) none;

/* Global values */
fill: inherit;
fill: initial;
fill: revert;
fill: revert-layer;
fill: unset;
```

### Werte

- `none`

  - : Kein `fill` wird gemalt; die Bereiche innerhalb des Strokes, falls vorhanden, sind transparent.

- `context-fill`

  - : Verwendet den Malwert von `fill` von einem Kontextelement.

- `context-stroke`

  - : Verwendet den Malwert von `stroke` von einem Kontextelement.

- {{cssxref("color_value", "&lt;color>")}}

  - : Die Farbe der Füllung als ein beliebiger gültiger CSS {{cssxref("color_value", "&lt;color>")}} Wert.

- `<url>`

  - : Eine URL-Referenz zu einem SVG-Paint-Server-Element, wie ein {{SVGElement("linearGradient")}}, {{SVGElement("radialGradient")}}, oder {{SVGElement("pattern")}}. Die Ressourcenreferenz kann optional von einem `<color>` oder `none` gefolgt werden, das verwendet wird, wenn der referenzierte Paint-Server nicht aufgelöst wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Füllwerte für SVG-Elemente definieren

Dieses Beispiel zeigt, wie eine `fill`-Eigenschaft deklariert wird, die Wirkung der Eigenschaft und wie die CSS-`fill`-Eigenschaft den `fill`-Attributwert überschreibt.

#### HTML

Wir haben ein SVG mit zwei komplexen Formen, die mit den SVG-Elementen {{SVGElement('polygon')}} und {{SVGElement('path')}} definiert sind. Beide haben das `fill`-Attribut auf `#000` gesetzt (entspricht dem Standardwert `black`). Wir fügen einen dunkelgrauen Rand von `#666` mit dem SVG-Attribut {{SVGAttr("stroke")}} hinzu, hätten aber auch die {{CSSXRef("stroke")}}-Eigenschaft verwenden können.

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

Wir setzen `fill`-Werte auf den Formen im SVG.

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

{{EmbedLiveSample("Füllwerte für SVG-Elemente definieren", "300", "170")}}

Der CSS-`fill`-Eigenschaftswert überschreibt den SVG-`fill`-Attributwert, was dazu führt, dass beide Formen mit einer roten Farbe gefüllt werden; die Rotfärbung des Polygons ist durchsichtig.

### Verwendung von Füll-Schlüsselwortwerten

Dieses Beispiel demonstriert die Verwendung von Schlüsselwortwerten für `fill`.

#### HTML

Wir fügen drei {{SVGElement("path")}}-Elemente und ein {{SVGElement("marker")}}-Element hinzu, das einen {{SVGElement("circle")}} zu jedem Pfadpunkt hinzufügt. Wir setzen den Kreis-Marker mit einem schwarzen Rand und einer grauen Füllung mit den SVG-Attributen {{SVGAttr("stroke")}} und {{SVGAttr("fill")}}.

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

Wir setzen verschiedene `stroke`- und `fill`-Farben auf jedem Pfad. Der erste Pfad, der mit einem roten Rand, hat sein `fill` auf `none` gesetzt. Wir setzen den Rand und die Füllung des Kreis-Markers auf die gleiche Farbe wie den Rand des Elements, das sie markieren, indem wir den Wert `context-stroke` verwenden.

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
  marker: url(#circle);
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

{{EmbedLiveSample("Verwendung von Füll-Schlüsselwortwerten", "300", "170")}}

Beachten Sie, wie der erste Pfad einen transparenten Hintergrund hat, weil das `fill` auf `none` steht, was den Standardwert von `black` überschreibt. Die Kreise sind mit der Farbe des Randes gefüllt. Wenn Sie den Wert in `context-fill` ändern, werden die Kreise transparent, `lightgreen` und `lightblue` anstelle von `red`, `green` und `blue`.

### Füllungen und Fallbacks

Dieses Beispiel zeigt, wie Sie einen `url()`-Wert mit einem Fallback als `fill`-Wert einfügen können.

#### HTML

Wir haben ein SVG mit zwei {{SVGElement("polygon")}}-Sternen und einem {{SVGElement("linearGradient")}}, der von grün zu gold zu rot verläuft.

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

Wir setzen die `fill`-Werte auf den Polygonen im SVG, indem wir einen `url()`-Wert und einen Fallback bereitstellen.

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

{{EmbedLiveSample("Füllungen und Fallbacks", "300", "170")}}

Der erste Stern hat einen Farbverlauf als Hintergrund. Der zweite Stern verwendet den Fallback-Wert, da das im `url()` referenzierte Element nicht existiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("fill")}}-Attribut
- Präsentationseigenschaften: `fill`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, und {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}}-Datentyp
