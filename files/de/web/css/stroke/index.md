---
title: stroke
slug: Web/CSS/stroke
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`stroke`**-[CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Farbe oder den SVG-Farbgeber, der verwendet wird, um den Umriss eines Elements zu zeichnen. Daher hat `stroke` nur eine Wirkung auf Elemente, denen ein Umriss zugewiesen werden kann (zum Beispiel {{SVGElement('rect')}} oder {{SVGElement('ellipse')}}); für eine vollständige Liste siehe die Seite zum SVG-Attribut {{SVGAttr('stroke')}}. Wenn angegeben, überschreibt der CSS-Wert jeden Wert des SVG-Attributs {{SVGAttr("stroke")}} des Elements.

> [!NOTE]
> Laut dem Entwurf vom 4. April 2017 der [CSS Fill and Stroke Module Level 3](https://drafts.fxtf.org/fill-stroke-3/#stroke-shorthand) Spezifikation ist die `stroke`-Eigenschaft eine Kurzform für eine Reihe anderer Umriss-Eigenschaften. In der Praxis, ab August 2024, unterstützen Browser nicht die Einstellung von anderen umrissbezogenen Werten wie Breite oder Strichmuster über die `stroke`-Eigenschaft, sondern behandeln sie stattdessen als direkte Entsprechung des SVG-Attributs {{SVGAttr("stroke")}}.

## Syntax

```css
/* assorted color values */
stroke: rgb(153 51 102 / 1);
stroke: color-mix(in lch, var(--primaryColor) 35%, gray 15%));
stroke: dodgerblue;
stroke: currentColor;
stroke: transparent;
stroke: context-stroke;

/* Global values */
stroke: inherit;
stroke: initial;
stroke: revert;
stroke: revert-layer;
stroke: unset;
```

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Legt die Bemalung des Umrisses mit einem gültigen CSS-Farbwert fest.

- `<image>`
  - : Legt die Bemalung des Umrisses mit dem fest, was SVG einen [_Farbgeber_](https://svgwg.org/svg2-draft/pservers.html) nennt, was in diesem Kontext ein SVG-Verlauf oder Muster ist. CSS-Verläufe können nicht mit der `stroke`-Eigenschaft verwendet werden.

- `context-stroke`
  - : Verursacht, dass ein Element seine Umrissdefinition von seinem [_Kontextelement_](https://svgwg.org/svg2-draft/painting.html#TermContextElement) "erbt". Wenn es kein gültiges Kontextelement gibt, führt dieser Wert dazu, dass keine Farbe für den Umriss verwendet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Farbgebung des Umrisses

In diesem Beispiel erstellen wir zwei verschiedene Formen, einen Kreis und ein Rechteck, die Teil einer {{SVGElement("g")}} (Gruppe) sind, die als Standard für die beiden Formen eine graue Umrissfarbe hat.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
</svg>
```

Über CSS wenden wir dann eine düstere lila Farbe auf das Rechteck und rot auf den Kreis an.

```css
rect {
  stroke: hsl(270deg 50% 40%);
}
circle {
  stroke: red;
}
```

{{EmbedLiveSample("Basic color stroking", "300", "180")}}

### Musterumrandung

Dieses Beispiel verwendet die gleiche Gruppe und Formen (mit dem Kreis etwas verschoben) wie im vorherigen Beispiel, hat aber auch ein definiertes SVG-Muster.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="23">
    <circle cx="150" cy="90" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
  <defs>
    <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
      <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
    </pattern>
  </defs>
</svg>
```

Das Muster wird dann im CSS mit einem URL-Wert referenziert, der auf die ID des Musters zeigt. Dieses Muster wird auf beide Formen als Umrandungsfarbe angewendet, wobei das Ergebnis gezeigt wird.

```css
rect,
circle {
  stroke: url(#star);
}
```

Das Muster wird relativ zu den Begrenzungsrahmen der Formen gezeichnet, was zu visuellen Interferenzen führen kann, wo sie sich überlappen, da Teile des Musters transparent sind.

{{EmbedLiveSample("Pattern stroking", "300", "180")}}

### SVG- versus CSS-Verläufe

Hier verwenden wir erneut dasselbe Gruppe-und-Formen-Markup wie im ersten Beispiel, fügen jedoch auch eine Definition für einen SVG-Verlauf hinzu.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
  <defs>
    <linearGradient id="greenwhite">
      <stop offset="0%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
</svg>
```

Im CSS wenden wir diesen SVG-Verlauf auf das Rechteck an, indem wir einen URL-Wert verwenden, der auf die ID des linearen Verlaufs zeigt. Auf den Kreis wenden wir einen CSS-linearen Verlauf an, der vom Design her dem SVG-Verlauf entspricht.

```css
rect {
  stroke: url(#greenwhite);
}
circle {
  stroke: linear-gradient(90deg, green, white);
}
```

Nur das Rechteck erhält einen Verlauf für den Umriss, während der Kreis auf den grauen Umriss zurückgreift, der vom Gruppenelement festgelegt wurde. Dies passiert, weil CSS-Verläufe keine gültigen Werte für die `stroke`-Eigenschaft sind, während URL-Referenzen auf SVG-Verläufe erlaubt sind.

{{EmbedLiveSample("SVG versus CSS gradients", "300", "180")}}

### Kontextspezifische Umrandung

In diesem Fall beginnen wir erneut mit einem Gruppenelement, innerhalb dessen zwei rechteckige Pfade definiert sind. Danach werden ein linearer Verlauf und ein SVG-Marker definiert.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="4">
    <path d="M 20,20 l 180,0 0,100 -180,0 z" />
    <path d="M 100,40 l 180,0 0,100 -180,0 z" />
  </g>
  <defs>
    <linearGradient id="orangered">
      <stop offset="0%" stop-color="orange" />
      <stop offset="100%" stop-color="red" />
    </linearGradient>
    <marker
      id="circle"
      markerWidth="20"
      markerHeight="20"
      refX="10"
      refY="10"
      markerUnits="userSpaceOnUse">
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke-width="4"
        stroke="none"
        fill="none" />
    </marker>
  </defs>
</svg>
```

Anschließend schreiben wir CSS, um beiden Pfaden einen Marker hinzuzufügen und auch eine düstere lila Umrissfarbe anzuwenden. Diese wird für den zweiten Pfad überschrieben, der einen URL-Wert erhält, um den orange-zu-rot-Verlauf als Umrandung anzuwenden. Schließlich setzen wir das Kreiselement im Markerelement so, dass es einen Umrisswert von `context-stroke` hat.

```css
path {
  stroke: hsl(270deg 50% 40%);
  marker: url(#circle);
}
path:nth-of-type(2) {
  stroke: url(#orangered);
}
marker circle {
  stroke: context-stroke;
}
```

Da `stroke-context` auf ein Element angewendet wird, das von einem {{SVGElement('marker')}}-Element abstammt, ist das Kontextelement für jeden Kreis das Element, das das `<marker>`-Element aufgerufen hat; das heißt, die {{SVGElement('path')}}-Elemente. Das Ergebnis ist, dass die Marker auf dem ersten Pfad die Farbe des aufrufenden Pfades verwenden und lila sind. Die Marker auf dem zweiten Pfad hingegen verwenden denselben orange-zu-roten SVG-Verlauf, den der Pfad verwendet. Dieser letzte Fall veranschaulicht, wie SVG-Verläufe als ein einziger Verlauf auf die gesamte Form angewendet werden, anstatt unabhängig auf jeden einzelnen Teil der Form angewendet zu werden.

{{EmbedLiveSample("Contextual stroking", "300", "180")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("paint-order")}}
- SVG-Attribut {{SVGAttr("stroke")}}
