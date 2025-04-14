---
title: stop-opacity
slug: Web/CSS/stop-opacity
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}

Die **`stop-opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Deckkraft einer bestimmten Farbverlauf-Stop im SVG {{SVGElement("stop")}}-Element innerhalb eines SVG-Verlaufs. Ist sie vorhanden, überschreibt sie das {{SVGAttr("stop-opacity")}}-Attribut des Elements.

Der Wert der Eigenschaft beeinflusst den Alpha-Kanal des {{cssxref("stop-color")}}; sie kann die Transparenz einer `<stop>`-Farbe erhöhen, jedoch nicht die durch die `stop-color` Eigenschaft definierte Farbe undurchsichtiger machen.

> [!NOTE]
> Die `stop-opacity` Eigenschaft gilt nur für {{SVGElement('stop')}}-Elemente, die in einem {{SVGElement("svg")}} eingebettet sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

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

Der `<opacity-value>` ist eine {{cssxref("number")}} oder {{cssxref("percentage")}}, die die Deckkraft des SVG-Verlaufs-`<stop>`-Elements angibt.

- {{cssxref("number")}}

  - : Ein numerischer Wert zwischen `0` und `1`, inklusive.

- {{cssxref("percentage")}}

  - : Ein Prozentwert zwischen `0%` und `100%`, inklusive.

Beträgt der Wert `0` oder `0%`, ist der Stop vollständig transparent. Beträgt der Wert `1` oder `100%`, hat das Element die volle Deckkraft des `stop-color`-Wertes, welcher teilweise undurchsichtig sein kann oder nicht.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`stop-opacity = <number> | <percentage>`)}}

## Beispiele

### Die Deckkraft eines SVG-Farbverlaufsstopps definieren

Dieses Beispiel demonstriert den grundlegenden Anwendungsfall von `stop-opacity` und wie die CSS-`stop-opacity`-Eigenschaft das `stop-opacity`-Attribut überlagert.

#### HTML

Wir haben ein SVG mit einigen {{SVGElement("polygon")}}-Sternen und drei {{SVGElement("linearGradient")}}-Elementen: jedes hat drei {{SVGElement("stop")}}-Elemente, die drei Farb-Stops definieren, die einen Verlauf erzeugen, der von Blau zu Weiß zu Pink geht; der einzige Unterschied zwischen ihnen ist der `id`-Wert.

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

Jedes `polygon` hat einen Farbverlaufs-Hintergrund, der mit der {{cssxref("fill")}}-Eigenschaft gesetzt wird; die `id` des Verlaufs ist der `url()`-Parameter. Wir setzen `magenta` als Rückfallfarbe.

Wir definieren die Deckkraft der Stops jedes Verlaufs mit der `stop-opacity` Eigenschaft.

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

Der erste Stern ist vollständig undurchsichtig. Die Füllung des zweiten Sterns ist 80% undurchsichtig, da die Farb-Stops leicht durchscheinend sind; die `stop-opacity: 0.8;` hat den `stop-opacity="1"`-Elementattributwert überlagert. Die Füllung des letzten Sterns ist kaum sichtbar mit Farb-Stops, die 25% undurchsichtig sind. Beachten Sie, dass der Strich in allen Fällen das gleiche undurchsichtige Dunkelgrau ist.

> [!NOTE]
> Da wir denselben `stop-opacity`-Wert für alle Geschwister-`<stop>`-Elemente im linearen Verlauf verwendet haben, hätten wir stattdessen einen einzelnen `<linearGradient>` mit vollständig undurchsichtigen Stops verwenden und für jedes `<polygon>` die {{cssxref("fill-opacity")}}-Eigenschaft setzen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("stop-opacity")}}-Attribut
- Präsentationseigenschaften: `stop-opacity`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, und {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} Datentyp
