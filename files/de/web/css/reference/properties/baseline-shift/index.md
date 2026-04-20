---
title: "`baseline-shift` CSS property"
short-title: baseline-shift
slug: Web/CSS/Reference/Properties/baseline-shift
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`baseline-shift`** [CSS](/de/docs/Web/CSS)-Eigenschaft positioniert die dominante Grundlinie (dominant-baseline) eines Textelements relativ zur dominanten Grundlinie seines übergeordneten Textelementinhalts. Das verschobene Element könnte ein Tief- oder Hochgestelltzeichen sein. Wenn die Eigenschaft vorhanden ist, überschreibt der Wert das {{SVGAttr("baseline-shift")}}-Attribut des Elements.

> [!NOTE]
> Die `baseline-shift`-Eigenschaft gilt nur für {{SVGElement("textPath")}}- und {{SVGElement("tspan")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

## Syntax

```css
/* <length-percentage> values */
baseline-shift: -0.5px;
baseline-shift: 4%;

/* keyword values */
baseline-shift: sub;
baseline-shift: super;

/* Global values */
baseline-shift: inherit;
baseline-shift: initial;
baseline-shift: revert;
baseline-shift: revert-layer;
baseline-shift: unset;
```

### Werte

- `sub`
  - : Die dominante Grundlinie wird auf die Standardposition für Tiefgestelltzeichen verschoben.
- `super`
  - : Die dominante Grundlinie wird auf die Standardposition für Hochgestelltzeichen verschoben.
- `<length-percentage>`
  - : Hebt (wenn positiv) oder senkt (wenn negativ) die dominante Grundlinie des Textelementinhalts um die angegebene Länge oder den Prozentsatz an, wobei der Prozentsatz relativ zur dominanten Grundlinie des übergeordneten Textelementinhalts ist {{cssxref("line-height")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von Schlüsselwortwerten

Dieses Beispiel demonstriert die grundlegende Verwendung der `sub`- und `super`-Schlüsselwortwerte der `baseline-shift`-Eigenschaft sowie, wie die `baseline-shift` CSS-Eigenschaft gegenüber dem `baseline-shift` SVG-Attribut den Vorrang hat.

#### HTML

Wir definieren ein SVG mit zwei SVG {{SVGElement("text")}} Elementen, von denen jedes ein {{SVGElement("tspan")}}-Element mit dem SVG {{SVGAttr("baseline-shift")}}-Attribut enthält.

```html hidden
<p>Original SVG</p>
```

```html
<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="50">
    Ceci
    <tspan baseline-shift="super">n'est pas</tspan>
    une pipe super!
  </text>
  <text x="10" y="90">
    Ceci
    <tspan baseline-shift="sub">n'est pas</tspan>
    une pipe sub!
  </text>
</svg>
```

```html hidden
<p><code>baseline-shift: sub;</code></p>
<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="50">
    Ceci
    <tspan baseline-shift="super">n'est pas</tspan>
    une pipe super!
  </text>
  <text x="10" y="90">
    Ceci
    <tspan baseline-shift="sub">n'est pas</tspan>
    une pipe sub!
  </text>
</svg>
<p><code>baseline-shift: super;</code></p>
<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="50">
    Ceci
    <tspan baseline-shift="super">n'est pas</tspan>
    une pipe super!
  </text>
  <text x="10" y="90">
    Ceci
    <tspan baseline-shift="sub">n'est pas</tspan>
    une pipe sub!
  </text>
</svg>
```

Das SVG wird dreimal wiederholt; wir haben nur eine Kopie zur Kürze gezeigt.

#### CSS

Wir machen den Text in allen drei SVG-Bildern groß und kursiv und fügen einige Farben hinzu, um den Inhalt innerhalb der `<tspan>`-Elemente zu differenzieren.

Wir setzen den Wert der Eigenschaft `baseline-shift` auf `sub` bei dem `<tspan>`-Element des zweiten SVGs und auf `super` bei dem `<tspan>`-Element des dritten SVGs. Das erste SVG hat keine zusätzliche CSS angewendet.

```css
text {
  font-family: cursive;
  font-size: 2rem;
}
[baseline-shift="sub"] {
  fill: deeppink;
}
[baseline-shift="super"] {
  fill: rebeccapurple;
}

svg:nth-of-type(2) tspan {
  baseline-shift: sub;
}
svg:nth-of-type(3) tspan {
  baseline-shift: super;
}
```

```css hidden
svg {
  border: 1px solid;
  width: 15em;
  margin-bottom: 10px;
}
@supports not (baseline-shift: sub) {
  body::before {
    content: "Your browser doesn't support the `baseline-shift` property.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.5em;
  }
}
```

#### Ergebnisse

{{EmbedLiveSample("Using keyword values", "300", "370")}}

Die SVG `baseline-shift` Attributwerte werden im ersten SVG verwendet. In den zweiten und dritten SVGs überschreiben die CSS `baseline-shift` Werte die Attributwerte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("baseline-shift")}} Attribut
- Darstellungseigenschaften: `baseline-shift`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, und {{cssxref("vector-effect")}}
