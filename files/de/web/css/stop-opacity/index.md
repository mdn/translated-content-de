---
title: stop-opacity
slug: Web/CSS/stop-opacity
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`stop-opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Opazität eines bestimmten Farbverlaufsstopps im SVG-{{SVGElement("stop")}}-Element innerhalb eines SVG-Verlaufs. Falls vorhanden, überschreibt sie das {{SVGAttr("stop-opacity")}}-Attribut des Elements.

Der Werte dieser Eigenschaft hat Einfluss auf den Alpha-Kanal der {{cssxref("stop-color")}}; er kann die Transparenz der Farbe eines `<stop>` erhöhen, aber nicht die durch die `stop-color`-Eigenschaft definierte Farbe opaker machen.

> [!NOTE]
> Die `stop-opacity` Eigenschaft gilt nur für {{SVGElement('stop')}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML-, oder Pseudo-Elemente.

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

Der `<opacity-value>` ist eine {{cssxref("number")}} oder {{cssxref("percentage")}}, die die Opazität des SVG-Verlaufs-`<stop>`-Elements angibt.

- {{cssxref("number")}}
  - : Ein numerischer Wert zwischen `0` und `1`, inklusive.

- {{cssxref("percentage")}}
  - : Ein Prozentwert zwischen `0%` und `100%`, inklusive.

Mit `0` oder `0%` ist der Stopp vollständig transparent. Mit `1` oder `100%` ist das Element in voller Opazität des `stop-color`-Werts vorhanden, der möglicherweise teilweise undurchsichtig ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`stop-opacity = <number> | <percentage>`)}}

## Beispiele

### Definieren der Opazität eines SVG-Verlaufsfarbstopps

Dieses Beispiel demonstriert den grundlegenden Anwendungsfall von `stop-opacity` und wie die CSS-`stop-opacity`-Eigenschaft Vorrang vor dem `stop-opacity`-Attribut hat.

#### HTML

Wir haben ein SVG mit einigen {{SVGElement("polygon")}} Sternen und drei {{SVGElement("linearGradient")}} Elementen: Jedes hat drei {{SVGElement("stop")}} Elemente, die drei Farbstopps definieren, um einen Verlauf zu erzeugen, der von Blau zu Weiß zu Pink geht; der einzige Unterschied zwischen ihnen ist der `id`-Wert.

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

Wir fügen {{cssxref("stroke")}} und {{cssxref("stroke-width")}} hinzu, um die Polygonpfadlinie sichtbar zu machen.

Jedes `polygon` hat einen Verlaufshintergrund, der mit der {{cssxref("fill")}} Eigenschaft festgelegt wird; die `id` des Verlaufs ist der `url()`-Parameter. Wir setzen `magenta` als Fallback-Farbe.

Wir definieren die Opazität der Stopps jedes Verlaufs mit der `stop-opacity` Eigenschaft.

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

Der erste Stern ist vollständig opak. Die Füllung des zweiten Sterns ist zu 80% opak, weil die Farbstopps leicht durchscheinend sind; `stop-opacity: 0.8;` überschreibt den `stop-opacity="1"` Attribute-Wert des Elements. Die Füllung des letzten Sterns ist kaum bemerkbar mit Farbstopps, die zu 25% opak sind. Beachten Sie, dass der Strich in allen Fällen das gleiche durchgehend opake Dunkelgrau ist.

> [!NOTE]
> Da wir denselben `stop-opacity` Wert für alle Geschwister-`<stop>` Elemente im linearen Verlauf verwendet haben, hätten wir stattdessen einen einzigen `<linearGradient>` mit vollständig opaken Stopps verwenden können und einen Wert für die {{cssxref("fill-opacity")}} Eigenschaft jedes `<polygon>` setzen.

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
