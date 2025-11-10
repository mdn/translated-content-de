---
title: fill-opacity
slug: Web/CSS/Reference/Properties/fill-opacity
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`fill-opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Opazität des Malvorgangs (Farbe, Verlauf, Muster usw.), der auf SVG-Formen oder Textelemente angewendet wird, um das Element zu füllen. Die Eigenschaft definiert nur die Opazität des `fill` des Elements; sie beeinflusst nicht den Umriss. Wenn vorhanden, überschreibt sie das {{SVGAttr("fill-opacity")}} Attribut des Elements.

> [!NOTE]
> Die `fill-opacity` Eigenschaft gilt nur für die {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}}, und {{SVGElement("tspan")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

## Syntax

```css
/* numeric and percentage values */
fill-opacity: 0.2;
fill-opacity: 20%;

/* Global values */
fill-opacity: inherit;
fill-opacity: initial;
fill-opacity: revert;
fill-opacity: revert-layer;
fill-opacity: unset;
```

### Werte

Die {{cssxref("number")}} und {{cssxref("percentage")}} Werte geben die Opazität des `fill` des Elements an.

- {{cssxref("number")}}
  - : Ein numerischer Wert zwischen `0` und `1`, einschließlich.

- {{cssxref("percentage")}}
  - : Ein Prozentwert zwischen `0%` und `100%`, einschließlich.

Mit `0` oder `0%` ist das Element vollständig transparent. Mit `1` oder `100%` ist das Element vollständig undurchsichtig. Bei Werten dazwischen ist das Element halbtransparent, sodass der Inhalt hinter dem Element sichtbar ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Füllopazität von SVG-Elementen

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `fill-opacity` und wie die CSS-Eigenschaft `fill-opacity` gegenüber dem `fill-opacity` Attribut Vorrang hat und keine Auswirkung auf einen `stroke` hat, der auf eine Form angewendet wird.

#### HTML

Wir fügen mehrere verschiedene SVG-Grafikelemente ein und setzen das `fill-opacity` Attribut jedes einzelnen auf `1` (außer `line`), was bedeutet, dass die Füllung jedes Elements undurchsichtig ist. Das `fill-opacity` SVG-Attribut gilt nicht für {{SVGElement("line")}}.

```html
<svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="30" height="30" fill-opacity="1" />
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill-opacity="1" />
  <circle cx="25" cy="75" r="20" fill-opacity="1" />
  <ellipse cx="75" cy="75" rx="20" ry="10" fill-opacity="1" />
  <line x1="50" x2="90" y1="40" y2="60" stroke="black" stroke-width="5" />
  <polyline
    points="60 90 65 100 70 95 75 110 80 105 85 120 90 115 95 130 100 125"
    fill-opacity="1" />
  <path d="M20,130 Q40,105 50,130 T90,130" fill-opacity="1" />
</svg>
```

#### CSS

Mit CSS verwenden wir die `fill-opacity` Eigenschaft, um den Wert des SVG {{SVGAttr("fill-opacity")}} Attributs zu überschreiben und geben jedem SVG-Element einen anderen Wert.

Wir fügen einem Kreis und einer Ellipse einen {{cssxref("stroke")}} hinzu, um zu zeigen, dass die Opazität des Umrisses nicht durch die `fill-opacity` Eigenschaft beeinflusst wird.

Weitere SVG-Stile werden festgelegt, einschließlich eines Hintergrundbilds, um die Opazität jedes Elements besser sichtbar zu machen. Diese werden hier aus Gründen der Übersichtlichkeit nicht gezeigt.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  background: repeating-linear-gradient(
    to bottom right,
    transparent 0 10px,
    #cccccc 10px 11px
  );
}
```

```css
svg > * {
  fill: black;
}
rect:last-of-type {
  fill-opacity: 0.1;
}
circle {
  fill-opacity: 0.6;
}
ellipse {
  fill-opacity: 40%;
}
line {
  fill-opacity: 10%;
}
polyline {
  fill-opacity: 50%;
}
path {
  fill-opacity: 0.5;
}

circle,
ellipse {
  stroke: black;
  stroke-width: 3px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Defining the fill opacity of SVG elements", "300", "360")}}

Nur zwei Elemente sind vollständig undurchsichtig: Das erste Rechteck und die Linie. Das erste Rechteck wird von keinem der Selektoren getroffen, daher wird kein CSS angewendet und der `fill` ist vollständig undurchsichtig. Die `line` wird getroffen und `fill-opacity: 10%` gesetzt. Da die Linie jedoch keinen `fill` Malvorgang hat — nur der `stroke` ist sichtbar — hat die Deklaration keine Wirkung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("fill-opacity")}} Attribut
- Präsentationseigenschaften: `fill-opacity`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, und {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} Datentyp
