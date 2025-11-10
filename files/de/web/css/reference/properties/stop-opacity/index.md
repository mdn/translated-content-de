---
title: stop-opacity
slug: Web/CSS/Reference/Properties/stop-opacity
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`stop-opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Deckkraft eines bestimmten Farbverlaufsstopps im SVG-{{SVGElement("stop")}}-Element innerhalb eines SVG-Gradienten. Wenn vorhanden, überschreibt sie das {{SVGAttr("stop-opacity")}}-Attribut des Elements.

Der Eigenschaftswert wirkt sich auf den Alphakanal des {{cssxref("stop-color")}} aus; er kann die Transparenz der Farbe eines `<stop>` erhöhen, kann jedoch die durch die Eigenschaft `stop-color` definierte Farbe nicht undurchsichtiger machen.

> [!NOTE]
> Die Eigenschaft `stop-opacity` gilt nur für {{SVGElement('stop')}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

## Syntax

```css
/* numeric and percentage values */
stop-opacity: 0.2;
stop-opacity: 20%;

/* Global values */
stop-opacity: inherit;
stop-opacity: initial;
stop-opacity: revert;
stop-opacity: revert-layer;
stop-opacity: unset;
```

### Werte

Der `<opacity-value>` ist eine {{cssxref("number")}} oder {{cssxref("percentage")}}, die die Deckkraft des `<stop>`-Elements eines SVG-Gradienten angibt.

- {{cssxref("number")}}
  - : Ein numerischer Wert zwischen `0` und `1`, einschließlich.

- {{cssxref("percentage")}}
  - : Ein Prozentwert zwischen `0%` und `100%`, einschließlich.

Bei der Einstellung von `0` oder `0%` ist der Stopp vollständig transparent. Mit der Einstellung von `1` oder `100%` ist das Element die volle Deckkraft des `stop-color`-Werts, was teilweise undurchsichtig sein kann oder auch nicht.

## Offizielle Definition

{{CSSInfo}}

## Offizielle Syntax

{{CSSSyntaxRaw(`stop-opacity = <number> | <percentage>`)}}

## Beispiele

### Die Deckkraft eines SVG-Farbverlaufsstopps definieren

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `stop-opacity` und wie die CSS-Eigenschaft `stop-opacity` das `stop-opacity`-Attribut überlagert.

#### HTML

Wir haben ein SVG mit einigen {{SVGElement("polygon")}}-Sternen und drei {{SVGElement("linearGradient")}}-Elementen: Jedes enthält drei {{SVGElement("stop")}}-Elemente, die drei Farbstopps definieren, die einen Farbverlauf von Blau zu Weiß zu Pink erstellen; der einzige Unterschied zwischen ihnen ist der `id`-Wert.

```html
<svg viewBox="0 0 250 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myGradient1">
      <stop offset="5%" stop-color="#66ccff" stop-opacity="1" />
      <stop offset="50%" stop-color="#fefefe" stop-opacity="1" />
      <stop offset="95%" stop-color="#f4aab9" stop-opacity="1" />
    </linearGradient>
    <linearGradient id="myGradient2">
      <stop offset="5%" stop-color="#66ccff" stop-opacity="1" />
      <stop offset="50%" stop-color="#fefefe" stop-opacity="1" />
      <stop offset="95%" stop-color="#f4aab9" stop-opacity="1" />
    </linearGradient>
    <linearGradient id="myGradient3">
      <stop offset="5%" stop-color="#66ccff" stop-opacity="1" />
      <stop offset="50%" stop-color="#fefefe" stop-opacity="1" />
      <stop offset="95%" stop-color="#f4aab9" stop-opacity="1" />
    </linearGradient>
  </defs>
  <polygon points="40,10 10,100 80,40 0,40 70,100" />
  <polygon points="125,10 95,100 165,40 85,40 155,100" />
  <polygon points="210,10 180,100 250,40 170,40 240,100" />
</svg>
```

#### CSS

Wir fügen einen {{cssxref("stroke")}} und {{cssxref("stroke-width")}} hinzu, um die Polygon-Pfadenlinie sichtbar zu machen.

Jedes `polygon` hat einen Farbverlaufs-Hintergrund, der mit der {{cssxref("fill")}}-Eigenschaft festgelegt wurde; die `id` des Farbverlaufs ist der `url()`-Parameter. Wir setzen `magenta` als Ersatzfarbe.

Wir definieren die Deckkraft der Stops jedes Farbverlaufs mit der `stop-opacity`-Eigenschaft.

Das SVG hat einen gestreiften Hintergrund, um die Einstellungen zur Transparenz besser sichtbar zu machen.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
  background: repeating-linear-gradient(
    to top left,
    white 0 9px,
    black 9px 10px
  );
}
```

```css
polygon {
  stroke: #333333;
  stroke-width: 1px;
}
polygon:nth-of-type(1) {
  fill: url("#myGradient1") magenta;
}
polygon:nth-of-type(2) {
  fill: url("#myGradient2") magenta;
}
polygon:nth-of-type(3) {
  fill: url("#myGradient3") magenta;
}

#myGradient1 stop {
  stop-opacity: 1;
}
#myGradient2 stop {
  stop-opacity: 0.8;
}
#myGradient3 stop {
  stop-opacity: 25%;
}
```

#### Ergebnisse

{{EmbedLiveSample("Defining the opacity of a SVG gradient color stop", "300", "200")}}

Der erste Stern ist vollständig undurchsichtig. Die Füllung des zweiten Sterns ist zu 80% undurchsichtig, da die Farbstopps leicht durchsichtig sind; die `stop-opacity: 0.8;` überlagerte den `stop-opacity="1"`-Elementattributwert. Die Füllung des letzten Sterns ist kaum merklich mit Farbstopps, die zu 25% durchsichtig sind. Beachten Sie, dass der Strich in jedem Fall dasselbe undurchsichtige Dunkelgrau ist.

> [!NOTE]
> Da wir denselben `stop-opacity`-Wert für alle gleichrangigen `<stop>`-Elemente im linearen Farbverlauf verwendet haben, hätten wir stattdessen ein einzelnes `<linearGradient>` mit vollständigen, undurchsichtigen Stops verwenden und für jedes `<polygon>` die {{cssxref("fill-opacity")}}-Eigenschaft festlegen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("stop-opacity")}} Attribut
- Darstellungseigenschaften: `stop-opacity`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, und {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} Datentyp
