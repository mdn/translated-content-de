---
title: stroke
slug: Web/CSS/stroke
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`stroke`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert die Farbe oder den SVG-Malfarbserver, der zur Darstellung eines Pfades eines Elements verwendet wird. Daher hat `stroke` nur Auswirkungen auf Elemente, die einen Pfad erhalten können (zum Beispiel {{SVGElement('rect')}} oder {{SVGElement('ellipse')}}); siehe die Seite über das SVG-Attribut {{SVGAttr('stroke')}} für eine vollständige Liste. Wenn deklariert, überschreibt der CSS-Wert jeden Wert des {{SVGAttr("stroke")}}-SVG-Attributs des Elements.

> [!NOTE]
> Laut dem Entwurf vom 4. April 2017 der Spezifikation des [CSS Fill and Stroke Module Level 3](https://drafts.fxtf.org/fill-stroke-3/#stroke-shorthand) ist die `stroke`-Eigenschaft eine Kurzform für eine Reihe von anderen Pfadeigenschaften. In der Praxis unterstützen Browser ab August 2024 nicht das Setzen anderer pfadbezogener Werte wie Breiten oder Strichmuster über die `stroke`-Eigenschaft und behandeln sie stattdessen als direkte Entsprechung des SVG-Attributs {{SVGAttr("stroke")}}.

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
  - : Setzt die Färbung des Pfades mit jedem gültigen CSS-Farbwert.

- `<image>`
  - : Setzt die Färbung des Pfades mit einem von SVG so genannten [_Farbserver_](https://svgwg.org/svg2-draft/pservers.html), der in diesem Kontext ein SVG-Gradient oder -Muster ist. CSS-Gradienten können nicht mit der `stroke`-Eigenschaft verwendet werden.

- `context-stroke`
  - : Verursacht, dass ein Element seine Definition des Pfades von seinem [_Kontextelement_](https://svgwg.org/svg2-draft/painting.html#TermContextElement) "erbt". Wenn es kein gültiges Kontextelement gibt, führt dieser Wert dazu, dass keine Farbe für den Pfad verwendet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Pfad-Färben

In diesem Beispiel erstellen wir zwei verschiedene Formen, einen Kreis und ein Rechteck, die Teil einer {{SVGElement("g")}} (Gruppe) sind, die als Standard für die beiden Formen eine graue Pfadfarbe hat.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
</svg>
```

Über CSS wenden wir dann eine düstere lila Farbe auf das Rechteck und eine rote auf den Kreis an.

```css
rect {
  stroke: hsl(270deg 50% 40%);
}
circle {
  stroke: red;
}
```

{{EmbedLiveSample("Basic color stroking", "300", "180")}}

### Muster-Färben

Dieses Beispiel verwendet dieselbe Gruppe und Formen (wobei der Kreis etwas verschoben wurde) wie im vorherigen Beispiel, hat jedoch auch ein definiertes SVG-Muster.

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

Das Muster wird dann im CSS mit einem URL-Wert referenziert, der auf die ID des Musters zeigt. Dieses Muster wird auf beide Formen als Pfadangabe aufgetragen, wobei das Ergebnis gezeigt wird.

```css
rect,
circle {
  stroke: url("#star");
}
```

Das Muster wird relativ zu den Begrenzungsrahmen der Formen gezeichnet, was zu visuellen Interferenzen führen kann, wo sie sich überlappen, da Teile des Musters transparent sind.

{{EmbedLiveSample("Pattern stroking", "300", "180")}}

### SVG versus CSS-Gradienten

Hier verwenden wir erneut die gleiche Gruppen- und Formstruktur wie im ersten Beispiel, fügen aber auch eine SVG-Gradientendefinition hinzu.

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

Im CSS wenden wir diesen SVG-Gradienten auf das Rechteck an, indem wir einen URL-Wert verwenden, der auf die ID des linearen Gradienten zeigt. Auf den Kreis wenden wir einen CSS-linearen Gradienten an, der in der Absicht dem SVG-Gradienten entspricht.

```css
rect {
  stroke: url("#greenwhite");
}
circle {
  stroke: linear-gradient(90deg, green, white);
}
```

Nur das Rechteck erhält einen Gradientenpfad, während der Kreis auf den grauen Pfad, der vom Gruppenelement festgelegt wurde, zurückfällt. Dies geschieht, weil CSS-Gradienten keine gültigen Werte für die `stroke`-Eigenschaft sind, während URL-Referenzen auf SVG-Gradienten zulässig sind.

{{EmbedLiveSample("SVG versus CSS gradients", "300", "180")}}

### Kontextuelles Färben

In diesem Fall beginnen wir erneut mit einem Gruppenelement, innerhalb dessen zwei rechteckige Pfade definiert sind. Danach werden ein linearer Gradient und ein SVG-Marker definiert.

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

Dann schreiben wir CSS, um einen Marker zu beiden Pfaden hinzuzufügen und ebenfalls eine düstere violette Pfadfarbe zu haben. Dies wird für den zweiten Pfad überschrieben, dem ein URL-Wert zugewiesen wird, um den orange-zu-roten Gradient als seinen Pfad anzuwenden. Schließlich setzen wir das Kreiselement im Markerelement auf einen Pfadwert von `context-stroke`.

```css
path {
  stroke: hsl(270deg 50% 40%);
  marker: url("#circle");
}
path:nth-of-type(2) {
  stroke: url("#orangered");
}
marker circle {
  stroke: context-stroke;
}
```

Da `stroke-context` auf ein Element angewendet wird, das von einem {{SVGElement('marker')}}-Element abstammt, ist das Kontextelement für jeden Kreis das Element, das das `<marker>`-Element aufgerufen hat, also die {{SVGElement('path')}}-Elemente. Das Ergebnis ist, dass die Markierungen auf dem ersten Pfad die Farbe des aufrufenden Pfades verwenden und violett sind. Die Markierungen auf dem zweiten Pfad hingegen verwenden denselben orange-zu-roten SVG-Gradient, den der Pfad verwendet. Dieser letzte Fall verdeutlicht, wie SVG-Gradienten als einzelner Gradient auf die gesamte Form angewendet werden, anstatt unabhängig auf jeden einzelnen Teil der Form.

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
