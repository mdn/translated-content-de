---
title: stop-opacity
slug: Web/CSS/stop-opacity
l10n:
  sourceCommit: 8ad43cb18baadffa72a32ba8b4524f09d611f078
---

{{CSSRef}}

Die **`stop-opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Opazität eines Farbverlaufsstopps im SVG {{SVGElement("stop")}} Element innerhalb eines SVG-Gradienten. Wenn vorhanden, überschreibt sie das Attribut {{SVGAttr("stop-opacity")}} des Elements.

Der Wert dieser Eigenschaft beeinflusst den Alpha-Kanal von {{cssxref("stop-color")}}; sie kann die Transparenz einer `<stop>`-Farbe erhöhen, aber nicht die durch die `stop-color` Eigenschaft definierte Farbe undurchsichtiger machen.

> [!NOTE]
> Die `stop-opacity` Eigenschaft gilt nur für {{SVGElement('stop')}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

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

Der `<opacity-value>` ist eine {{cssxref("number")}} oder {{cssxref("percentage")}}, die die Opazität des SVG-Verlaufs `<stop>` Elements angibt.

- {{cssxref("number")}}

  - : Ein numerischer Wert zwischen `0` und `1`, inklusive.

- {{cssxref("percentage")}}

  - : Ein prozentualer Wert zwischen `0%` und `100%`, inklusive.

Mit `0` oder `0%` eingestellt, ist der Stopp vollständig transparent. Mit `1` oder `100%` eingestellt, ist das Element in der vollen Opazität des `stop-color` Wertes, der möglicherweise teilweise undurchsichtig ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Die Opazität eines SVG-Verlaufstopps definieren

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `stop-opacity` und wie die CSS `stop-opacity` Eigenschaft das `stop-opacity` Attribut überschreibt.

#### HTML

Wir haben ein SVG mit einigen {{SVGElement("polygon")}} Sternen und drei {{SVGElement("linearGradient")}} Elementen: jedes hat drei {{SVGElement("stop")}} Elemente, die drei Farbstopps definieren, die einen Verlauf von Blau zu Weiß zu Rosa erzeugen; der einzige Unterschied zwischen ihnen ist der `id`-Wert.

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

Wir fügen einen {{cssxref("stroke")}} und {{cssxref("stroke-width")}} hinzu, um die Polygonpfadlinie sichtbar zu machen.

Jedes `polygon` hat einen Verlaufs-Hintergrund, der mit der {{cssxref("fill")}} Eigenschaft gesetzt wird; die ID des Gradienten ist der `url()`-Parameter. Wir setzen `magenta` als Ersatzfarbe.

Wir definieren die Opazität der Stopps jedes Gradienten mit der `stop-opacity` Eigenschaft.

Das SVG hat einen gestreiften Hintergrund, um die Transparenzeinstellungen deutlicher zu machen.

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
  stroke: #333;
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

Der erste Stern ist vollständig undurchsichtig. Der Füllbereich des zweiten Sterns ist 80% undurchsichtig, da die Farbstopps leicht transluzent sind; die `stop-opacity: 0.8;` hat den `stop-opacity="1"` Elementattributwert überschrieben. Der Füllbereich des letzten Sterns ist kaum sichtbar, mit Farbstopps, die zu 25% undurchsichtig sind. Beachten Sie, dass der Umriss in allen Fällen derselbe undurchsichtige Dunkelgrau ist.

> [!NOTE]
> Da wir denselben `stop-opacity` Wert für alle sibling `<stop>` Elemente im linearen Verlauf verwendet haben, hätten wir stattdessen einen einzigen `<linearGradient>` mit vollständig undurchsichtigen Stopps verwenden können und einen Wert für die {{cssxref("fill-opacity")}} Eigenschaft jedes `<polygon>` setzen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("stop-opacity")}} Attribut
- Präsentationseigenschaften: `stop-opacity`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, und {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} Datentyp
