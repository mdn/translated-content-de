---
title: stop-color
slug: Web/CSS/stop-color
l10n:
  sourceCommit: 8ad43cb18baadffa72a32ba8b4524f09d611f078
---

{{CSSRef}}

Die **`stop-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe, die für ein SVG {{SVGElement("stop")}} Element innerhalb eines Verlaufs verwendet werden soll. Wenn sie vorhanden ist, überschreibt sie das {{SVGAttr("stop-color")}} Attribut des Elements.

> [!NOTE]
> Die `stop-color` Eigenschaft gilt nur für {{SVGElement('stop')}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

## Syntax

```css
/* <color> Werte */
stop-color: red;
stop-color: hsl(120deg 75% 25% / 60%);
stop-color: currentcolor;

/* Globale Werte */
stop-color: inherit;
stop-color: initial;
stop-color: revert;
stop-color: revert-layer;
stop-color: unset;
```

### Werte

- {{cssxref("color_value", "&lt;color>")}}

  - : Die Farbe der Füllung. Dies kann ein beliebiger gültiger CSS {{cssxref("color_value", "&lt;color>")}} Wert sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Farbverlaufsstops von SVG-Verläufen

Dieses Beispiel demonstriert den grundlegenden Anwendungsfall von `stop-color` und wie die CSS-Eigenschaft `stop-color` das `stop-color` Attribut überschreibt.

#### HTML

Wir haben ein SVG mit drei {{SVGElement("rect")}} Quadraten und drei {{SVGElement("linearGradient")}} Elementen. Jeder Verlauf hat vier {{SVGElement("stop")}} Elemente, die Verläufe erzeugen, die von schwarz zu weiß und dann von weiß zu grau gehen; der einzige Unterschied zwischen ihnen ist der `id` Wert.

```html
<svg viewBox="0 0 264 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myGradient1">
      <stop offset="25%" stop-color="#000" />
      <stop offset="40%" stop-color="#fff" />
      <stop offset="60%" stop-color="#fff" />
      <stop offset="75%" stop-color="#333" />
    </linearGradient>
    <linearGradient id="myGradient2">
      <stop offset="25%" stop-color="#000" />
      <stop offset="40%" stop-color="#fff" />
      <stop offset="60%" stop-color="#fff" />
      <stop offset="75%" stop-color="#333" />
    </linearGradient>
    <linearGradient id="myGradient3">
      <stop offset="25%" stop-color="#000" />
      <stop offset="40%" stop-color="#fff" />
      <stop offset="60%" stop-color="#fff" />
      <stop offset="75%" stop-color="#333" />
    </linearGradient>
  </defs>
  <rect x="2" y="10" width="80" height="80" fill="url('#myGradient1')" />
  <rect x="92" y="10" width="80" height="80" fill="url('#myGradient2')" />
  <rect x="182" y="10" width="80" height="80" fill="url('#myGradient3')" />
</svg>
```

#### CSS

Wir fügen eine {{cssxref("stroke")}} und {{cssxref("stroke-width")}} hinzu, um das Rechteck zu umranden. Wir definieren die Farben der ersten und letzten Stops in jedem Verlauf, indem wir ihre `stop-color` Attributwerte mit der `stop-color` Eigenschaft überschreiben. Verschiedene CSS {{cssxref("color_value", "&lt;color>")}} Syntaxen werden gezeigt.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
rect {
  stroke: #333;
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
    stop-color: hsl(0deg 100% 50%);
  }
  stop:last-of-type {
    stop-color: hsl(20deg 100% 50%);
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

- SVG {{SVGAttr("stop-color")}} Attribut
- Präsentationseigenschaften: `stop-color`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, und {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} Datentyp