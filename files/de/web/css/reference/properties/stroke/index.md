---
title: stroke
slug: Web/CSS/Reference/Properties/stroke
l10n:
  sourceCommit: adc6b8f112db424e18f94d308cfffd11d5dfba52
---

Die **`stroke`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Farbe oder den SVG-Farbserver, der verwendet wird, um den Umriss eines Elements zu zeichnen. Daher hat `stroke` nur eine Wirkung auf Elemente, die einen Umriss haben können (zum Beispiel {{SVGElement('rect')}} oder {{SVGElement('ellipse')}}); sehen Sie die Seite zum SVG-Attribut {{SVGAttr('stroke')}} für eine vollständige Liste. Wenn deklariert, überschreibt der CSS-Wert jeglichen Wert des {{SVGAttr("stroke")}} SVG-Attributs des Elements.

> [!NOTE]
> Laut dem Entwurf vom 4. April 2017 der Spezifikation des [CSS Fill and Stroke Module Level 3](https://drafts.csswg.org/fill-stroke-3/#stroke-shorthand) ist die `stroke`-Eigenschaft eine Kurzform für eine Anzahl anderer Stroke-Eigenschaften. In der Praxis unterstützen Browser ab August 2024 nicht die Einstellung anderer stroke-bezogener Werte wie Breite oder Strichmuster über die `stroke`-Eigenschaft und behandeln sie stattdessen als direktes Äquivalent zum SVG-Attribut {{SVGAttr("stroke")}}.

## Syntax

```css
/* assorted color values */
stroke: rgb(153 51 102 / 1);
stroke: color-mix(in lch, var(--primaryColor) 35%, gray 15%);
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
  - : Setzt die Zeichnung des Umrisses mit jedem gültigen CSS-Farbwert.

- `<image>`
  - : Setzt die Zeichnung des Umrisses mit dem, was SVG einen [_paint server_](https://svgwg.org/svg2-draft/pservers.html) nennt, was in diesem Kontext ein SVG-Verlauf oder -Muster ist. CSS-Verläufe können nicht mit der `stroke`-Eigenschaft verwendet werden.

- `context-stroke`
  - : Veranlasst ein Element, seine Umrissdefinition von seinem [_Kontextelement_](https://svgwg.org/svg2-draft/painting.html#TermContextElement) zu "erben". Wenn es kein gültiges Kontextelement gibt, wird bei diesem Wert kein Farbauftrag für den Umriss verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Umrissfärben

In diesem Beispiel erstellen wir zwei verschiedene Formen, einen Kreis und ein Rechteck, die Teil eines {{SVGElement("g")}} (Gruppe) sind, die eine graue Umrissfarbe als Standard für die beiden Formen hat.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
</svg>
```

Über CSS wenden wir dann eine dunkelviolette Farbe für das Rechteck und Rot für den Kreis an.

```css
rect {
  stroke: rebeccapurple;
}
circle {
  stroke: red;
}
```

{{EmbedLiveSample("Basic color stroking", "300", "180")}}

### Musterumrisse

In diesem Beispiel verwenden wir die gleiche Gruppe und Formen (wobei der Kreis ein bisschen verschoben ist) wie im vorherigen Beispiel, haben aber auch ein SVG-Muster definiert.

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

Das Muster wird dann im CSS mit einem URL-Wert referenziert, der auf die ID des Musters zeigt. Dieses Muster wird auf beide Formen als Umrissfarbe angewandt, mit dem gezeigten Ergebnis.

```css
rect,
circle {
  stroke: url("#star");
}
```

Das Muster wird relativ zu den Begrenzungsrahmen der Formen gezeichnet, was zu visuellen Interferenzen führen kann, wenn sie sich überlappen, da Teile des Musters transparent sind.

{{EmbedLiveSample("Pattern stroking", "300", "180")}}

### SVG- versus CSS-Verläufe

Hier verwenden wir erneut das gleiche Gruppen-und-Formen-Markup wie im ersten Beispiel, fügen aber auch eine Definition für einen SVG-Verlauf hinzu.

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

Im CSS wenden wir diesen SVG-Verlauf auf das Rechteck mittels eines URL-Werts, der auf die ID des linearen Verlaufs zeigt, an. Auf den Kreis wenden wir einen CSS-linearen Verlauf an, der im Sinne des SVG-Verlaufs gleichwertig ist.

```css
rect {
  stroke: url("#greenwhite");
}
circle {
  stroke: linear-gradient(90deg, green, white);
}
```

Nur das Rechteck erhält einen Verlauf als Umriss, während der Kreis auf den grauen Umriss zurückfällt, der vom Gruppenelement gesetzt wurde. Dies geschieht, weil CSS-Verläufe keine gültigen Werte für die `stroke`-Eigenschaft sind, während URL-Referenzen auf SVG-Verläufe zulässig sind.

{{EmbedLiveSample("SVG versus CSS gradients", "300", "180")}}

### Kontexuelles Umrisszeichnen

In diesem Fall beginnen wir wieder mit einem Gruppenelement, innerhalb dessen zwei rechteckige Pfade definiert sind. Danach werden ein linearer Verlauf und ein SVG-Marker definiert.

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

Wir schreiben dann CSS, um einen Marker zu beiden Pfaden hinzuzufügen, und auch, um eine dunkelviolette Umrissfarbe zu setzen. Dies wird für den zweiten Pfad überschrieben, der einen URL-Wert erhält, um den orange-zu-rot Verlauf als seinen Umriss anzuwenden. Schließlich setzen wir das Kreiselement im Markerelement, um einen Umrisswert von `context-stroke` zu haben.

```css
path {
  stroke: rebeccapurple;
  marker: url("#circle");
}
path:nth-of-type(2) {
  stroke: url("#orangered");
}
marker circle {
  stroke: context-stroke;
}
```

Da `stroke-context` auf ein Element angewendet wird, das von einem {{SVGElement('marker')}} Element abstammt, ist das Kontextelement für jedes einzelne Kreiselement das Element, das das `<marker>`-Element aufruft, das heißt, die {{SVGElement('path')}}-Elemente. Das Ergebnis ist, dass die Marker auf dem ersten Pfad die Farbe des aufrufenden Pfades verwenden und violett sind. Die Marker auf dem zweiten Pfad hingegen verwenden den gleichen orange-zu-rot SVG-Verlauf, den der Pfad verwendet. Dieser letzte Fall veranschaulicht, wie SVG-Verläufe als einzelner Verlauf auf die gesamte Form angewandt werden, anstatt unabhängig auf jeden einzelnen Teil der Form.

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
- SVG {{SVGAttr("stroke")}} Attribut
