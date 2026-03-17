---
title: stroke
slug: Web/CSS/Reference/Properties/stroke
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

Die **`stroke`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe oder den SVG-Farbserver, der verwendet wird, um die Kontur eines Elements zu zeichnen. Als solche hat `stroke` nur eine Auswirkung auf Elemente, denen eine Kontur gegeben werden kann (zum Beispiel {{SVGElement('rect')}} oder {{SVGElement('ellipse')}}); siehe die Seite zum SVG-Attribut {{SVGAttr('stroke')}} für eine vollständige Liste. Wenn sie deklariert wird, überschreibt der CSS-Wert jeden Wert des SVG-Attributs {{SVGAttr("stroke")}} des Elements.

> [!NOTE]
> Gemäß dem 4. April 2017 Entwurf der [CSS Fill and Stroke Module Level 3](https://drafts.csswg.org/fill-stroke-3/#stroke-shorthand) Spezifikation ist die `stroke` Eigenschaft eine Kurzform für eine Anzahl anderer Kontureigenschaften. In der Praxis wird ab August 2024 von Browsern das Setzen anderer konturbezogener Werte wie Breite oder Strichmuster über die `stroke` Eigenschaft nicht unterstützt, sondern als direktes Analog des SVG-Attributs {{SVGAttr("stroke")}} behandelt.

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
  - : Setzt die Farbe der Kontur auf jeden gültigen CSS-Farbwert.

- `<image>`
  - : Setzt die Malerei der Kontur mit dem, was in SVG als [_paint server_](https://svgwg.org/svg2-draft/pservers.html) bezeichnet wird, was in diesem Kontext ein SVG-Verlauf oder -Muster ist. CSS-Verläufe können mit der `stroke` Eigenschaft nicht verwendet werden.

- `context-stroke`
  - : Verursacht, dass ein Element seine Konturdefinition vom [_Kontext-Element_](https://svgwg.org/svg2-draft/painting.html#TermContextElement) "erbt". Wenn kein gültiges Kontext-Element vorhanden ist, resultiert dieser Wert darin, dass keine Farbe für die Kontur verwendet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Farbkontur

In diesem Beispiel erstellen wir zwei verschiedene Formen, einen Kreis und ein Rechteck, die Teil einer {{SVGElement("g")}} (Gruppe) sind, die eine graue Konturfarbe als Standard für die beiden Formen hat.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
</svg>
```

Über CSS wenden wir dann eine düstere Purpurfarbe auf das Rechteck und Rot auf den Kreis an.

```css
rect {
  stroke: rebeccapurple;
}
circle {
  stroke: red;
}
```

{{EmbedLiveSample("Grundlegende Farbkontur", "300", "180")}}

### Musterkontur

Dieses Beispiel verwendet die gleiche Gruppe und Formen (mit dem Kreis etwas verschoben) wie im vorherigen Beispiel, hat aber auch ein SVG-Muster definiert.

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

Das Muster wird dann im CSS mit einem URL-Wert referenziert, der auf die ID des Musters zeigt. Dieses Muster wird auf beide Formen als Konturfarbe angewendet, was das Ergebnis zeigt.

```css
rect,
circle {
  stroke: url("#star");
}
```

Das Muster wird relativ zu den Begrenzungsrahmen der Formen gezeichnet, was zu visuellen Überschneidungen führen kann, wenn sie sich überlappen, da Teile des Musters transparent sind.

{{EmbedLiveSample("Musterkontur", "300", "180")}}

### SVG versus CSS-Verläufe

Hier verwenden wir erneut das gleiche Gruppen- und Formen-Markup wie im ersten Beispiel, fügen aber auch eine Definition für einen SVG-Verlauf hinzu.

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

Im CSS wenden wir diesen SVG-Verlauf auf das Rechteck an, indem wir einen URL-Wert verwenden, der auf die ID des linearen Verlaufs zeigt. Auf den Kreis wenden wir einen CSS-linearen Verlauf an, der in der Absicht mit dem SVG-Verlauf gleichwertig ist.

```css
rect {
  stroke: url("#greenwhite");
}
circle {
  stroke: linear-gradient(90deg, green, white);
}
```

Nur das Rechteck erhält eine Verlaufskontur, während der Kreis zur grauen Kontur zurückfällt, die durch das Gruppenelement festgelegt wurde. Dies passiert, weil CSS-Verläufe keine gültigen Werte für die `stroke` Eigenschaft sind, während URL-Referenzen auf SVG-Verläufe erlaubt sind.

{{EmbedLiveSample("SVG versus CSS-Verläufe", "300", "180")}}

### Kontextbezogene Kontur

In diesem Fall beginnen wir wieder mit einem Gruppenelement, in dem zwei rechteckige Pfade definiert sind. Danach werden ein linearer Verlauf und ein SVG-Marker definiert.

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

Wir schreiben dann CSS, um einen Marker zu beiden Pfaden hinzuzufügen und auch, um eine düstere Purpur-Konturfarbe zu haben. Dies wird für den zweiten Pfad überschrieben, dem ein URL-Wert zugewiesen wird, um den orange-zu-rot Verlauf als Kontur anzuwenden. Schließlich setzen wir das Kreis-Element im Marker-Element auf einen `context-stroke` Wert.

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

Da `stroke-context` auf ein Element angewendet wird, das von einem {{SVGElement('marker')}} Element abstammt, ist das Kontext-Element für jeden Kreis das Element, das das `<marker>` Element aufgerufen hat; das heißt, die {{SVGElement('path')}} Elemente. Das Ergebnis ist, dass die Marker auf dem ersten Pfad die Farbe des aufrufenden Pfads verwenden und purpurfarben sind. Die Marker auf dem zweiten Pfad hingegen verwenden denselben orange-zu-rot SVG-Verlauf, den der Pfad verwendet. Dieser letzte Fall illustriert, wie SVG-Verläufe als ein einziger Verlauf auf die gesamte Form angewendet werden, anstatt unabhängig auf jeden einzelnen Teil der Form angewendet zu werden.

{{EmbedLiveSample("Kontextbezogene Kontur", "300", "180")}}

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
