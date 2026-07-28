---
title: "`stop-opacity` CSS property"
short-title: stop-opacity
slug: Web/CSS/Reference/Properties/stop-opacity
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

Die **`stop-opacity`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Deckkraft eines bestimmten Farbverlaufsstops im SVG-{{SVGElement("stop")}}-Element innerhalb eines SVG-Verlaufs. Falls vorhanden, überschreibt sie das {{SVGAttr("stop-opacity")}}-Attribut des Elements.

Der Eigenschaftswert beeinflusst den Alpha-Kanal des {{cssxref("stop-color")}}; er kann die Transparenz der Farbe eines `<stop>` erhöhen, kann aber die durch die `stop-color` Eigenschaft definierte Farbe nicht opaker machen.

> [!NOTE]
> Die `stop-opacity`-Eigenschaft gilt nur für {{SVGElement('stop')}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudoelemente.

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

Der `<opacity-value>` ist ein {{cssxref("number")}} oder {{cssxref("percentage")}}, der die Deckkraft des SVG-Verlaufs `<stop>`-Elements angibt.

- {{cssxref("number")}}
  - : Ein Zahlenwert zwischen `0` und `1`, einschließlich.

- {{cssxref("percentage")}}
  - : Ein Prozentwert zwischen `0%` und `100%`, einschließlich.

Mit `0` oder `0%` eingestellt, ist der Stop vollständig transparent. Mit `1` oder `100%` eingestellt, hat das Element die volle Deckkraft des `stop-color`-Werts, der möglicherweise teilweise undurchsichtig ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`stop-opacity = <number> | <percentage>`)}}

## Beispiele

### Definieren der Deckkraft eines SVG-Verlaufsfarbe-Stops

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `stop-opacity` und wie die CSS-Eigenschaft `stop-opacity` Vorrang vor dem `stop-opacity`-Attribut hat.

#### HTML

Wir haben eine SVG mit einigen {{SVGElement("polygon")}}-Sternen und drei {{SVGElement("linearGradient")}}-Elementen: Jedes hat drei {{SVGElement("stop")}}-Elemente, die drei Farbstops definieren, die einen Verlauf von Blau zu Weiß zu Pink erzeugen; der einzige Unterschied zwischen ihnen ist der `id`-Wert.

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

Wir fügen ein {{cssxref("stroke")}} und {{cssxref("stroke-width")}} hinzu, um die Poligonpfadlinie sichtbar zu machen.

Jedes `polygon` hat einen Verlaufs-Hintergrund, der mit der {{cssxref("fill")}}-Eigenschaft gesetzt wird; die `id` des Verlaufs ist der `url()`-Parameter. Wir setzen `magenta` als Fallbackfarbe.

Wir definieren die Deckkraft der Stops jedes Verlaufs mit der Eigenschaft `stop-opacity`.

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

{{EmbedLiveSample("Defining the opacity of an SVG gradient color stop", "300", "200")}}

Der erste Stern ist vollständig deckend. Die Füllung des zweiten Sterns ist 80% deckend, weil die Farbstops leicht durchscheinend sind; das `stop-opacity: 0.8;` hat den `stop-opacity="1"` Elementattributwert überschrieben. Die Füllung des letzten Sterns ist kaum wahrnehmbar mit Farbstops, die zu 25% deckend sind. Beachten Sie, dass der Strich in allen Fällen das gleiche deckende Dunkelgrau ist.

> [!NOTE]
> Da wir denselben `stop-opacity`-Wert für alle Geschwister `<stop>`-Elemente im linearen Verlauf verwendet haben, hätten wir stattdessen auch einen einzigen `<linearGradient>` mit vollständig deckenden Stops verwenden und für jedes `<polygon>` einen Wert für die {{cssxref("fill-opacity")}}-Eigenschaft setzen können.

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
- Datentyp {{cssxref("basic-shape")}}
