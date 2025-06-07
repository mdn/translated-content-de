---
title: stroke
slug: Web/CSS/stroke
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{CSSRef}}

Die **`stroke`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe oder den SVG-Malserver, der verwendet wird, um den Umriss eines Elements zu zeichnen. Deshalb hat `stroke` nur eine Auswirkung auf Elemente, denen ein Umriss zugewiesen werden kann (zum Beispiel {{SVGElement('rect')}} oder {{SVGElement('ellipse')}}); siehe die Seite zum SVG-Attribut {{SVGAttr('stroke')}} für eine vollständige Liste. Bei Angabe überschreibt der CSS-Wert jeden Wert des SVG-Attributs {{SVGAttr("stroke")}} des Elements.

> [!NOTE]
> Laut dem Entwurf des [CSS Fill and Stroke Module Level 3](https://drafts.fxtf.org/fill-stroke-3/#stroke-shorthand) vom 4. April 2017 ist die `stroke` Eigenschaft eine Kurzform für eine Reihe anderer Stroke-Eigenschaften. In der Praxis unterstützen Browser ab August 2024 nicht die Einstellung anderer Stroke-bezogener Werte wie Breite oder Strichmuster über die Eigenschaft `stroke`, sondern behandeln sie stattdessen als direktes Analogon zum SVG-Attribut {{SVGAttr("stroke")}}.

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

  - : Setzt die Malerei des Umrisses mit einem gültigen CSS-Farbwert.

- `<image>`

  - : Setzt die Malerei des Umrisses mit dem, was SVG einen [_paint server_](https://svgwg.org/svg2-draft/pservers.html) nennt, was in diesem Zusammenhang ein SVG-Gradient oder Muster ist. CSS-Gradienten können nicht mit der Eigenschaft `stroke` verwendet werden.

- `context-stroke`

  - : Veranlasst ein Element, seine Stroke-Definition von seinem [_Kontextelement_](https://svgwg.org/svg2-draft/painting.html#TermContextElement) zu "erben". Wenn es kein gültiges Kontextelement gibt, wird kein Anstrich für den Umriss verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Umrissfärben

In diesem Beispiel erstellen wir zwei verschiedene Formen, einen Kreis und ein Rechteck, die Teil einer {{SVGElement("g")}} (Gruppe) sind, die eine graue Umrissfarbe als Standard für die beiden Formen hat.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
</svg>
```

Über CSS wenden wir dann eine düstere violette Farbe auf das Rechteck und eine rote auf den Kreis an.

```css
rect {
  stroke: hsl(270deg 50% 40%);
}
circle {
  stroke: red;
}
```

{{EmbedLiveSample("Basic color stroking", "300", "180")}}

### Musterumriss

Dieses Beispiel verwendet dieselbe Gruppe und Formen (mit dem etwas verschobenen Kreis) wie im vorherigen Beispiel, hat aber auch ein definiertes SVG-Muster.

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

Das Muster wird dann im CSS mit einem URL-Wert referenziert, der auf die ID des Musters zeigt. Dieses Muster wird auf beide Formen als Umrissanstrich angewendet, mit dem gezeigten Ergebnis.

```css
rect,
circle {
  stroke: url(#star);
}
```

Das Muster wird relativ zu den Begrenzungsrahmen der Formen gezeichnet, was zu visuellen Interferenzen führen kann, wo sie sich überlappen, da Teile des Musters durchsichtig sind.

{{EmbedLiveSample("Pattern stroking", "300", "180")}}

### SVG- im Vergleich zu CSS-Verlauf

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

Im CSS wenden wir diesen SVG-Verlauf mit einem URL-Wert, der auf die ID des linearen Verlaufs zeigt, auf das Rechteck an. Auf den Kreis wenden wir einen CSS-linearen Verlauf an, der im intent dem SVG-Verlauf entspricht.

```css
rect {
  stroke: url(#greenwhite);
}
circle {
  stroke: linear-gradient(90deg, green, white);
}
```

Nur das Rechteck erhält einen Verlauf im Umriss, während der Kreis zum grauen Umriss der Gruppenelemente zurückfällt. Dies geschieht, weil CSS-Verläufe keine gültigen Werte für die `stroke` Eigenschaft sind, während URL-Verweise auf SVG-Verläufe erlaubt sind.

{{EmbedLiveSample("SVG versus CSS gradients", "300", "180")}}

### Kontextuelles Umrisszeichnen

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

Wir schreiben dann CSS, um einen Marker zu beiden Pfaden hinzuzufügen, und außerdem, um eine düstere violette Umrissfarbe zu haben. Dies wird für den zweiten Pfad durch einen URL-Wert überschrieben, um den orange-zu-roten Verlauf als seinen Umriss anzuwenden. Schließlich setzen wir das Kreis-Element im Marker-Element auf einen Umrisswert von `context-stroke`.

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

Da `stroke-context` auf ein Element angewendet wird, das vom {{SVGElement('marker')}} Element abstammt, ist das Kontextelement für jeden Kreis das Element, das das `<marker>` Element aufgerufen hat; das heißt, die {{SVGElement('path')}} Elemente. Das Ergebnis ist, dass die Marker auf dem ersten Pfad die Farbe des aufrufenden Pfades verwenden und violett sind. Die Marker auf dem zweiten Pfad hingegen verwenden den gleichen orange-zu-roten SVG-Verlauf, den der Pfad verwendet. Dieser letztere Fall veranschaulicht, wie SVG-Verläufe als ein einzelner Verlauf auf die gesamte Form angewendet werden, anstatt individuell auf jeden einzelnen Teil der Form.

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
