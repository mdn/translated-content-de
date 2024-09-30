---
title: stop-opacity
slug: Web/CSS/stop-opacity
l10n:
  sourceCommit: 8ad43cb18baadffa72a32ba8b4524f09d611f078
---

{{CSSRef}}

Die **`stop-opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Deckkraft eines bestimmten Farbverlaufsstopps im SVG {{SVGElement("stop")}} Element innerhalb eines SVG-Gradienten. Falls vorhanden, überschreibt sie das Attribut {{SVGAttr("stop-opacity")}} des Elements.

Der Eigenschaftswert beeinflusst den Alpha-Kanal des {{cssxref("stop-color")}}; er kann die Transparenz der Farbe eines `<stop>` erhöhen, aber nicht die durch die Eigenschaft `stop-color` definierte Farbe undurchsichtiger machen.

> [!NOTE]
> Die Eigenschaft `stop-opacity` gilt nur für {{SVGElement('stop')}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

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

Der `<opacity-value>` ist eine {{cssxref("number")}} oder {{cssxref("percentage")}}, die die Deckkraft des SVG-Gradienten-`<stop>`-Elements angibt.

- {{cssxref("number")}}

  - : Ein numerischer Wert zwischen `0` und `1`, einschließlich.

- {{cssxref("percentage")}}

  - : Ein Prozentwert zwischen `0%` und `100%`, einschließlich.

Mit `0` oder `0%` eingestellt, ist der Stopp vollständig transparent. Mit `1` oder `100%` eingestellt, hat das Element die volle Deckkraft des `stop-color`-Wertes, der möglicherweise teilweise undurchsichtig ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Die Deckkraft eines SVG-Farbverlaufsstops definieren

Dieses Beispiel demonstriert die grundlegende Anwendung von `stop-opacity` und wie die CSS-Eigenschaft `stop-opacity` das `stop-opacity`-Attribut übersteuert.

#### HTML

Wir haben ein SVG mit ein paar {{SVGElement("polygon")}} Sternen und drei {{SVGElement("linearGradient")}} Elementen: jedes hat drei {{SVGElement("stop")}} Elemente, die drei Farbstopps definieren, die einen Verlauf von Blau nach Weiß zu Pink erzeugen; der einzige Unterschied zwischen ihnen ist der `id`-Wert.

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

Wir fügen ein {{cssxref("stroke")}} und {{cssxref("stroke-width")}} hinzu, um die Polygonpfadlinie sichtbar zu machen.

Jedes `polygon` hat einen Verlaufs-Hintergrund, der mit der {{cssxref("fill")}} Eigenschaft gesetzt wird; die `id` des Verlaufs ist der `url()` Parameter. Wir setzen `magenta` als Ersatzfarbe.

Wir definieren die Deckkraft der Stopps jedes Verlaufs mit der `stop-opacity` Eigenschaft.

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

Der erste Stern ist vollständig undurchsichtig. Die Füllung des zweiten Sterns hat eine Deckkraft von 80%, da die Farbstopps leicht durchsichtig sind; der `stop-opacity: 0.8;` hat den Attributwert `stop-opacity="1"` überstimmt. Die Füllung des letzten Sterns ist kaum wahrnehmbar mit Farbstopps, die eine Deckkraft von 25% haben. Beachten Sie, dass der Strich in allen Fällen dasselbe undurchsichtige Dunkelgrau ist.

> [!NOTE]
> Da wir denselben `stop-opacity` Wert für alle Geschwister-`<stop>`-Elemente im linearen Verlauf verwendet haben, hätten wir stattdessen einen einzigen `<linearGradient>` mit vollständig undurchsichtigen Stopps verwenden und für jedes `<polygon>` die Eigenschaft {{cssxref("fill-opacity")}} einstellen können.

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
