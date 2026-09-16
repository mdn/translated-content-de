---
title: "`fill` CSS property"
short-title: fill
slug: Web/CSS/Reference/Properties/fill
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`fill`** definiert, wie SVG-Textinhalte und die Innenfläche von SVG-Formen gefüllt oder gezeichnet werden. Falls vorhanden, überschreibt sie das Attribut {{SVGAttr("fill")}} des Elements.

Die Bereiche innerhalb der Kontur der SVG-Form oder des Textes werden gezeichnet. Was sich „innerhalb“ einer Form befindet, ist möglicherweise nicht immer eindeutig. Die Pfade, die eine Form definieren, können sich überlappen. Die Bereiche, die bei diesen komplexen Formen als „innerhalb“ gelten, werden durch die Eigenschaft oder das Attribut {{cssxref("fill-rule")}} festgelegt.

Wenn Teilpfade offen sind, schließt `fill` den Pfad vor dem Zeichnen, als wäre ein „closepath“-Befehl enthalten, der den letzten Punkt des Teilpfads mit dessen erstem Punkt verbindet. Mit anderen Worten: `fill` gilt für offene Teilpfade innerhalb von `path`-Elementen (d.h. Teilpfade ohne closepath-Befehl) und für `polyline`-Elemente.

> [!NOTE]
> Die Eigenschaft `fill` gilt nur für {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}} und {{SVGElement('tspan')}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

## Syntax

```css
/* Keyword values */
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

Diese Eigenschaft wird als einzelner Wert aus der folgenden Liste oder bei Verwendung von `<url>` als zwei Werte angegeben:

- `none`
  - : Es wird kein `fill` gezeichnet; die Bereiche innerhalb des Strichs sind, falls vorhanden, transparent.

- `context-fill`
  - : Verwendet den Zeichenwert von `fill` eines Kontextelements.

- `context-stroke`
  - : Verwendet den Zeichenwert von `stroke` eines Kontextelements.

- {{cssxref("color_value", "&lt;color>")}}
  - : Die Farbe der Füllung als beliebiger gültiger CSS-{{cssxref("color_value", "&lt;color>")}}-Wert.

- `<url>`
  - : Eine URL-Referenz auf ein SVG-Element eines Paint Servers, beispielsweise {{SVGElement("linearGradient")}}, {{SVGElement("radialGradient")}} oder {{SVGElement("pattern")}}. Auf die Ressourcenreferenz kann optional ein `<color>` oder `none` folgen, das als Fallback verwendet wird, wenn der referenzierte Paint Server nicht aufgelöst werden kann.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Füllwerte für SVG-Elemente definieren

Dieses Beispiel demonstriert, wie ein `fill` deklariert wird, welche Wirkung die Eigenschaft hat und wie die CSS-Eigenschaft `fill` Vorrang vor dem Attribut `fill` hat.

#### HTML

Wir haben ein SVG mit zwei komplexen Formen, die mit den SVG-Elementen {{SVGElement('polygon')}} und {{SVGElement('path')}} definiert sind. Beide haben das Attribut `fill` auf den Standardwert `black` gesetzt. Wir fügen mithilfe des SVG-Attributs {{SVGAttr("stroke")}} einen dunkelgrauen Strich der Farbe `#666666` hinzu, hätten aber auch die Eigenschaft {{CSSXRef("stroke")}} verwenden können.

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="#666666"
    fill="black" />
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="#666666"
    fill="black" />
</svg>
```

#### CSS

Wir setzen `fill`-Werte für die Formen im SVG.

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

Der Wert der CSS-Eigenschaft `fill` überschreibt den Wert des SVG-Attributs `fill`, sodass beide Formen mit einer roten Farbe gefüllt werden; das Rot des Polygons ist transparent.

### Schlüsselwortwerte für fill verwenden

Dieses Beispiel demonstriert die Verwendung von Schlüsselwortwerten für `fill`.

#### HTML

Wir fügen drei {{SVGElement("path")}}-Elemente und ein {{SVGElement("marker")}}-Element ein, das jedem Pfadpunkt ein {{SVGElement("circle")}} hinzufügt. Wir setzen die Kreismarkierung mithilfe der SVG-Attribute {{SVGAttr("stroke")}} und {{SVGAttr("fill")}} auf Schwarz mit einer grauen Füllung.

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

Wir setzen für jeden Pfad unterschiedliche `stroke`- und `fill`-Farben. Beim ersten Pfad, dem mit rotem Rand, ist `fill` auf `none` gesetzt. Wir setzen Strich und Füllung der Kreismarkierung mit dem Wert `context-stroke` auf dieselbe Farbe wie den Strich des Elements, das sie markiert.

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

Beachten Sie, dass der erste Pfad einen transparenten Hintergrund hat, weil `fill` auf `none` gesetzt ist und damit das standardmäßige `fill` von `black` überschreibt. Die Kreise sind mit der Farbe des Strichs gefüllt. Wenn Sie den Wert in `context-fill` ändern, sind die Kreise statt `red`, `green` und `blue` transparent, `lightgreen` beziehungsweise `lightblue`.

### Füllungen und Fallbacks

Dieses Beispiel demonstriert, wie ein `url()`-Wert mit einem Fallback als `fill`-Wert eingebunden wird.

#### HTML

Wir haben ein SVG mit zwei {{SVGElement("polygon")}}-Sternen und einem {{SVGElement("linearGradient")}}, der von Grün über Gold zu Rot verläuft.

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

Wir setzen `fill`-Werte für die Polygone im SVG und geben dabei einen `url()`-Wert und einen Fallback an.

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

Der erste Stern hat einen Farbverlauf als Hintergrund. Der zweite Stern verwendet den Fallback-Wert, da das im `url()` referenzierte Element nicht existiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("fill")}}
- Präsentationseigenschaften: `fill`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}} und {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- Datentyp {{cssxref("basic-shape")}}
