---
title: fill-opacity
slug: Web/CSS/fill-opacity
l10n:
  sourceCommit: 278bca8df3bf92fbed35cb2cc81daf2aa3765b95
---

{{CSSRef}}

Die **`fill-opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Deckkraft der Maloperation (Farbe, Verlauf, Muster usw.), die auf SVG-Formen oder Textinhaltelemente angewendet wird, um das Element zu füllen. Die Eigenschaft definiert nur die Deckkraft des `fill` des Elements; sie beeinflusst nicht den `stroke`. Falls vorhanden, überschreibt sie das {{SVGAttr("fill-opacity")}} Attribut des Elements.

> [!NOTE]
> Die `fill-opacity` Eigenschaft gilt nur für {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}} und {{SVGElement("tspan")}} Elemente, die in einem {{SVGElement("svg")}} eingebettet sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

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

Die Werte {{cssxref("number")}} und {{cssxref("percentage")}} geben die Deckkraft des `fill` des Elements an.

- {{cssxref("number")}}

  - : Ein numerischer Wert zwischen `0` und `1`, inklusiv.

- {{cssxref("percentage")}}

  - : Ein Prozentwert zwischen `0%` und `100%`, inklusiv.

Mit `0` oder `0%` ist das Element vollständig transparent. Mit `1` oder `100%` ist das Element vollständig opak. Mit Werten dazwischen ist das Element halbtransparent, sodass Inhalte hinter dem Element sichtbar sind.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der Füllungsdeckkraft von SVG-Elementen

Dieses Beispiel demonstriert die grundlegende Verwendung von `fill-opacity` und wie die CSS `fill-opacity` Eigenschaft Vorrang vor dem `fill-opacity` Attribut hat und keine Auswirkungen auf einen auf eine Form angewandten `stroke` hat.

#### HTML

Wir fügen mehrere verschiedene SVG-Grafikelemente ein und setzen das `fill-opacity` Attribut jedes einzelnen auf `1` (außer `line`), was bedeutet, dass die Füllung jedes Elements opak ist. Das `fill-opacity` SVG-Attribut gilt nicht für {{SVGElement("line")}}.

```html
<svg viewbox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
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

Mit CSS verwenden wir die `fill-opacity` Eigenschaft, um den Wert des SVG {{SVGAttr("fill-opacity")}} Attributs zu überschreiben und jedem SVG-Element einen anderen Wert zuzuweisen.

Wir fügen einem Kreis und einer Ellipse einen {{cssxref("stroke")}} hinzu, um zu demonstrieren, dass die Deckkraft des Strichs von der `fill-opacity` Eigenschaft nicht beeinflusst wird.

Andere SVG-Stile werden gesetzt, einschließlich eines Hintergrundbildes, um die Deckkraft jedes Elements leichter sichtbar zu machen. Diese werden der Kürze halber nicht gezeigt.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  background: repeating-linear-gradient(
    to bottom right,
    transparent 0 10px,
    #ccc 10px 11px
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

Nur zwei Elemente sind vollständig opak: das erste Rechteck und die Linie. Das erste Rechteck wird von keinem der Selektoren erfasst, daher wird kein CSS angewendet und das `fill` ist vollständig opak. Die Linie wird erfasst, mit `fill-opacity: 10%` gesetzt. Allerdings hat die Linie keine `fill` Maloperation - nur der `stroke` ist sichtbar - daher hat die Deklaration keine Wirkung.

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
