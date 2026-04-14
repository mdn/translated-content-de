---
title: stroke
slug: Web/CSS/Reference/Properties/stroke
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

Die **`stroke`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert die Farbe oder den SVG-Paint-Server, der verwendet wird, um den Rand eines Elements zu zeichnen. Daher hat `stroke` nur eine Wirkung auf Elemente, denen ein Rand gegeben werden kann (zum Beispiel {{SVGElement('rect')}} oder {{SVGElement('ellipse')}}); siehe die Seite über das SVG-Attribut {{SVGAttr('stroke')}} für eine vollständige Liste. Wenn es deklariert wird, überschreibt der CSS-Wert jeden Wert des {{SVGAttr("stroke")}}-SVG-Attributs des Elements.

> [!NOTE]
> Laut dem Entwurf der [CSS Fill and Stroke Module Level 3](https://drafts.csswg.org/fill-stroke-3/#stroke-shorthand)-Spezifikation vom 4. April 2017 ist die `stroke`-Eigenschaft eine Kurzform für eine Anzahl anderer Stroking-Eigenschaften. In der Praxis unterstützen Browser ab August 2024 nicht das Setzen anderer Stroke-bezogener Werte wie Breite oder Strichmuster über die `stroke`-Eigenschaft und behandeln sie stattdessen als direktes Äquivalent zum SVG-Attribut {{SVGAttr("stroke")}}.

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
  - : Setzt das Malen des Randes mit jedem gültigen CSS-Farbwert.

- `<image>`
  - : Setzt das Malen des Randes mit einem sogenannten [_Paint Server_](https://w3c.github.io/svgwg/svg2-draft/pservers.html) in SVG, was in diesem Kontext ein SVG-Verlauf oder -Muster ist. CSS-Verläufe können nicht mit der `stroke`-Eigenschaft verwendet werden.

- `context-stroke`
  - : Führt dazu, dass ein Element seine Definition des Randes von seinem [_Kontextelement_](https://w3c.github.io/svgwg/svg2-draft/painting.html#TermContextElement) "erbt". Gibt es kein gültiges Kontextelement, führt dieser Wert dazu, dass keine Farbe für den Rand verwendet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Farbstroking

In diesem Beispiel erstellen wir zwei verschiedene Formen, einen Kreis und ein Rechteck, die Teil eines {{SVGElement("g")}}-Elements (Gruppe) sind, das eine graue Randfarbe als Standard für die beiden Formen hat.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
</svg>
```

Über CSS wenden wir dann eine dunkelviolette Farbe auf das Rechteck und Rot auf den Kreis an.

```css
rect {
  stroke: rebeccapurple;
}
circle {
  stroke: red;
}
```

{{EmbedLiveSample("Basic color stroking", "300", "180")}}

### Musterstroking

Dieses Beispiel verwendet dieselbe Gruppe und Formen (mit dem Kreis etwas versetzt) wie im vorherigen Beispiel, hat aber auch ein SVG-Muster definiert.

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

Das Muster wird dann im CSS mit einem URL-Wert referenziert, der auf die ID des Musters zeigt. Dieses Muster wird auf beide Formen als Randfarbe angewendet, wobei das Ergebnis gezeigt wird.

```css
rect,
circle {
  stroke: url("#star");
}
```

Das Muster wird relativ zu den Begrenzungsrahmen der Formen gezeichnet, was zu visueller Interferenz führen kann, wo sie sich überschneiden, da Teile des Musters transparent sind.

{{EmbedLiveSample("Pattern stroking", "300", "180")}}

### SVG versus CSS-Verläufe

Hier verwenden wir erneut dieselben Gruppe-und-Formen-Markups wie im ersten Beispiel, fügen aber auch eine Definition für einen SVG-Verlauf hinzu.

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

Im CSS wenden wir diesen SVG-Verlauf auf das Rechteck an, indem wir einen URL-Wert verwenden, der auf die ID des linearen Verlaufs zeigt. Auf den Kreis wenden wir einen CSS-linearen Verlauf an, der im Hinblick auf die Absicht dem SVG-Verlauf gleichwertig ist.

```css
rect {
  stroke: url("#greenwhite");
}
circle {
  stroke: linear-gradient(90deg, green, white);
}
```

Nur das Rechteck erhält einen Verlauf für den Rand, während der Kreis auf den grauen Rand zurückfällt, der vom Gruppen-Element gesetzt wird. Dies geschieht, weil CSS-Verläufe keine gültigen Werte für die `stroke`-Eigenschaft sind, während URL-Verweise auf SVG-Verläufe zulässig sind.

{{EmbedLiveSample("SVG versus CSS gradients", "300", "180")}}

### Kontextuelles Stroking

In diesem Fall beginnen wir erneut mit einem Gruppenelement, in dem zwei rechteckige Pfade definiert sind. Danach werden ein linearer Verlauf und ein SVG-Marker definiert.

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

Wir schreiben dann CSS, um einen Marker zu beiden Pfaden hinzuzufügen und auch eine dunkelviolette Randfarbe zu haben. Dies wird für den zweiten Pfad überschrieben, der einen URL-Wert erhält, um den orange-zu-roten Verlauf als seinen Rand anzuwenden. Schließlich setzen wir das Kreis-Element im Marker-Element so, dass es einen `context-stroke`-Wert hat.

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

Da `stroke-context` auf ein Element angewendet wird, das von einem {{SVGElement('marker')}}-Element abstammt, ist das Kontextelement für jeden Kreis das Element, das das `<marker>`-Element aufgerufen hat, also die {{SVGElement('path')}}-Elemente. Das Ergebnis ist, dass die Marker auf dem ersten Pfad die Farbe des aufrufenden Pfades verwenden und lila sind. Die Marker auf dem zweiten Pfad hingegen verwenden denselben orange-zu-roten SVG-Verlauf, den der Pfad verwendet. Dieser letztere Fall veranschaulicht, wie SVG-Verläufe als ein einziger Verlauf auf die gesamte Form angewendet werden, anstatt unabhängig auf jeden einzelnen Teil der Form angewendet zu werden.

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
