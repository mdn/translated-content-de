---
title: fill
slug: Web/CSS/fill
l10n:
  sourceCommit: 2f79d932a2ce13bf728462491c44ef13c299f390
---

{{CSSRef}}

Die **`fill`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert, wie SVG-Textinhalte und die Innenseite der Leinwand von SVG-Formen gefüllt oder bemalt werden. Falls vorhanden, überschreibt sie das {{SVGAttr("fill")}}-Attribut des Elements.

Die Bereiche innerhalb der Umrisse der SVG-Form oder des Textes werden bemalt. Was "innen" in einer Form ist, kann nicht immer klar sein. Die Pfade, die eine Form definieren, können sich überschneiden. Die durch die {{cssxref("fill-rule")}}-Eigenschaft oder das Attribut als "innen" betrachteten Bereiche dieser komplexen Formen werden klargestellt.

Falls Unterpfade offen sind, schließt `fill` den Pfad vor dem Bemalen, als ob ein "closepath"-Befehl hinzugefügt worden wäre, der den letzten Punkt des Unterpfads mit dem ersten Punkt des Unterpfads verbindet. Mit anderen Worten, `fill` gilt für offene Unterpfade innerhalb von `path`-Elementen (d.h. Unterpfade ohne einen closepath-Befehl) und `polyline`-Elementen.

> [!NOTE]
> Die `fill`-Eigenschaft gilt nur für {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}} und {{SVGElement('tspan')}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

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

  - : Es wird keine `fill` bemalt; die Bereiche innerhalb des Strichs, falls vorhanden, sind transparent.

- `context-fill`

  - : Verwendet den Farbwert von `fill` aus einem Kontext-Element.

- `context-stroke`

  - : Verwendet den Farbwert von `stroke` aus einem Kontext-Element.

- {{cssxref("color_value", "&lt;color>")}}

  - : Die Farbe der Füllung als ein beliebiger gültiger CSS {{cssxref("color_value", "&lt;color>")}}-Wert.

- `<url>`

  - : Ein URL-Verweis auf ein SVG-Farbserven-Element, wie z.B. ein {{SVGElement("linearGradient")}}, {{SVGElement("radialGradient")}} oder {{SVGElement("pattern")}}. Der Ressourceneintrag kann optional von einem `<color>` oder `none` gefolgt werden, welches als Fallback verwendet wird, wenn der referenzierte Farbserver nicht aufgelöst wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren von Füllwerten für SVG-Elemente

Dieses Beispiel zeigt, wie ein `fill` deklariert wird, die Wirkung der Eigenschaft und wie die CSS-`fill`-Eigenschaft Vorrang vor dem `fill`-Attribut hat.

#### HTML

Wir haben ein SVG mit zwei komplexen Formen, die mit den SVG-Elementen {{SVGElement('polygon')}} und {{SVGElement('path')}} definiert sind. Beide haben das `fill`-Attribut auf `#000` gesetzt (entspricht dem Standardwert, `black`). Wir fügen mit dem SVG-Attribut {{SVGAttr("stroke")}} einen dunkelgrauen Strich von `#666` hinzu, hätten aber die {{CSSXRef("stroke")}}-Eigenschaft verwenden können.

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

Wir setzen `fill`-Werte auf die Formen im SVG.

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

{{EmbedLiveSample("Definieren von Füllwerten für SVG-Elemente", "300", "170")}}

Der CSS-`fill`-Eigenschaftswert überschreibt den SVG-`fill`-Attributwert, wodurch beide Formen in Rot gefüllt werden; das Rot des Polygons ist durchscheinend.

### Verwenden von Schlüsselwortwerten für fill

Dieses Beispiel zeigt das Verwenden von Schlüsselwortwerten für `fill`.

#### HTML

Wir fügen drei {{SVGElement("path")}}-Elemente und ein {{SVGElement("marker")}}-Element hinzu, das einen {{SVGElement("circle")}} zu jedem Pfad-Punkt hinzufügt. Wir setzen den Kreismarker auf Schwarz mit einer grauen Füllung mithilfe der SVG-Attribute {{SVGAttr("stroke")}} und {{SVGAttr("fill")}}.

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

Wir setzen verschiedene `stroke`- und `fill`-Farben auf jeden Pfad. Der erste Pfad, der mit einem roten Rand, hat sein `fill` auf `none` gesetzt. Wir setzen den Strich und die Füllung des Kreismarkers auf die gleiche Farbe wie den Strich des Elements, das sie markieren, mittels des `context-stroke`-Werts.

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

{{EmbedLiveSample("Verwenden von Schlüsselwortwerten für fill", "300", "170")}}

Beachten Sie, wie der erste Pfad einen transparenten Hintergrund hat, weil das `fill` `none` ist, was den Standardwert `fill` von `black` überschreibt. Die Kreise sind mit der Farbe des Strichs gefüllt. Wenn Sie den Wert auf `context-fill` ändern, werden die Kreise transparent, `lightgreen` und `lightblue` statt `red`, `green` und `blue`.

### Füllungen und Fallbacks

Dieses Beispiel zeigt, wie man einen `url()`-Wert mit einem Fallback als `fill`-Wert einbezieht.

#### HTML

Wir haben ein SVG mit zwei {{SVGElement("polygon")}}-Sternen und ein {{SVGElement("linearGradient")}}, das von Grün über Gold zu Rot geht.

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

Wir setzen `fill`-Werte auf die Polygone im SVG und geben einen `url()`-Wert und ein Fallback an.

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
- {{cssxref("basic-shape")}} Datentyp
