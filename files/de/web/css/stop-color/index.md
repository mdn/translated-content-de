---
title: stop-color
slug: Web/CSS/stop-color
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`stop-color`**-Eigenschaft [CSS](/de/docs/Web/CSS) definiert die Farbe, die für ein SVG-{{SVGElement("stop")}}-Element innerhalb eines Gradienten verwendet wird. Wenn vorhanden, überschreibt es das {{SVGAttr("stop-color")}}-Attribut des Elements.

> [!NOTE]
> Die `stop-color`-Eigenschaft gilt nur für in einem {{SVGElement("svg")}} verschachtelte {{SVGElement('stop')}}-Elemente. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

## Syntax

```css
/* <color> values */
stop-color: red;
stop-color: hsl(120deg 75% 25% / 60%);
stop-color: currentColor;

/* Global values */
stop-color: inherit;
stop-color: initial;
stop-color: revert;
stop-color: revert-layer;
stop-color: unset;
```

### Werte

- {{cssxref("color_value", "&lt;color>")}}
  - : Die Farbe der Füllung. Dies kann jeder gültige CSS-Wert für {{cssxref("color_value", "&lt;color>")}} sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`stop-color = <color>`)}}

## Beispiele

### Definieren der Farbverläufe von SVG-Gradienten

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `stop-color` und wie die CSS-Eigenschaft `stop-color` gegenüber dem `stop-color`-Attribut vorrangig ist.

#### HTML

Wir haben ein SVG mit drei {{SVGElement("rect")}}-Quadraten und drei {{SVGElement("linearGradient")}}-Elementen. Jeder Gradiente hat vier {{SVGElement("stop")}}-Elemente, die Verläufe erzeugen, die von Schwarz zu Weiß und dann von Weiß zu Grau gehen; der einzige Unterschied zwischen ihnen ist der `id`-Wert.

```html
<svg viewBox="0 0 264 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myGradient1">
      <stop offset="25%" stop-color="black" />
      <stop offset="40%" stop-color="white" />
      <stop offset="60%" stop-color="white" />
      <stop offset="75%" stop-color="#333333" />
    </linearGradient>
    <linearGradient id="myGradient2">
      <stop offset="25%" stop-color="black" />
      <stop offset="40%" stop-color="white" />
      <stop offset="60%" stop-color="white" />
      <stop offset="75%" stop-color="#333333" />
    </linearGradient>
    <linearGradient id="myGradient3">
      <stop offset="25%" stop-color="black" />
      <stop offset="40%" stop-color="white" />
      <stop offset="60%" stop-color="white" />
      <stop offset="75%" stop-color="#333333" />
    </linearGradient>
  </defs>
  <rect x="2" y="10" width="80" height="80" fill="url('#myGradient1')" />
  <rect x="92" y="10" width="80" height="80" fill="url('#myGradient2')" />
  <rect x="182" y="10" width="80" height="80" fill="url('#myGradient3')" />
</svg>
```

#### CSS

Wir fügen eine {{cssxref("stroke")}} und eine {{cssxref("stroke-width")}} hinzu, um das Rechteck zu umranden. Wir definieren die Farben der ersten und letzten Stopps in jedem Gradienten und überschreiben ihre `stop-color`-Attributwerte mit der `stop-color`-Eigenschaft. Verschiedene CSS-Syntaxen für {{cssxref("color_value", "&lt;color>")}} werden gezeigt.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
rect {
  stroke: #333333;
  stroke-width: 1px;
}

#myGradient1 {
  stop:first-of-type {
    stop-color: #66ccff;
  }
  stop:last-of-type {
    stop-color: #f4aab9;
  }
}
#myGradient2 {
  stop:first-of-type {
    stop-color: yellow;
  }
  stop:last-of-type {
    stop-color: purple;
  }
}
#myGradient3 {
  stop:first-of-type {
    stop-color: hsl(0deg 90% 50%);
  }
  stop:last-of-type {
    stop-color: hsl(20deg 60% 50%);
  }
}
```

#### Ergebnisse

{{EmbedLiveSample("Defining the color stops of SVG gradients", "300", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-{{SVGAttr("stop-color")}}-Attribut
- Präsentationseigenschaften: `stop-color`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, und {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}}-Datentyp
