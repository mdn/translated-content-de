---
title: stroke
slug: Web/CSS/Reference/Properties/stroke
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`stroke`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe oder den SVG-Paint-Server, der verwendet wird, um den Strich eines Elements zu zeichnen. Daher hat `stroke` nur eine Wirkung auf Elemente, denen ein Strich zugewiesen werden kann (zum Beispiel {{SVGElement('rect')}} oder {{SVGElement('ellipse')}}); siehe die Seite zum SVG-Attribut {{SVGAttr('stroke')}} für eine vollständige Liste. Wenn angegeben, überschreibt der CSS-Wert jeden Wert des SVG-Attributs {{SVGAttr("stroke")}} des Elements.

> [!NOTE]
> Laut dem Entwurf vom 4. April 2017 der [CSS Fill and Stroke Module Level 3](https://drafts.fxtf.org/fill-stroke-3/#stroke-shorthand) Spezifikation ist die `stroke`-Eigenschaft eine Kurzform für eine Reihe anderer Stroke-Eigenschaften. In der Praxis, ab August 2024, unterstützen Browser nicht die Einstellung anderer stroke-bezogener Werte wie Breite oder Dash-Muster über die `stroke`-Eigenschaft, sondern behandeln sie als direktes Äquivalent zum SVG-Attribut {{SVGAttr("stroke")}}.

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
  - : Setzt die Bemalung des Strichs mit einem gültigen CSS-Farbwert.

- `<image>`
  - : Setzt die Bemalung des Strichs mit dem, was SVG als [_paint server_](https://svgwg.org/svg2-draft/pservers.html) bezeichnet, was in diesem Kontext ein SVG-Verlauf oder Muster ist. CSS-Verläufe können nicht mit der `stroke`-Eigenschaft verwendet werden.

- `context-stroke`
  - : Verursacht, dass ein Element seine Strichdefinition von seinem [_Kontextelement_](https://svgwg.org/svg2-draft/painting.html#TermContextElement) "erbt". Wenn kein gültiges Kontextelement vorhanden ist, wird bei diesem Wert keine Farbe für den Strich verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Farbstraich

In diesem Beispiel erstellen wir zwei verschiedene Formen, einen Kreis und ein Rechteck, die Teil einer {{SVGElement("g")}} (Gruppe) sind und deren Standard-Strichfarbe grau ist.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
</svg>
```

Über CSS wenden wir dann eine dunkle lila Farbe auf das Rechteck und eine rote auf den Kreis an.

```css
rect {
  stroke: rebeccapurple;
}
circle {
  stroke: red;
}
```

{{EmbedLiveSample("Grundlegendes Farbstraich", "300", "180")}}

### Musterstraich

Dieses Beispiel verwendet die gleiche Gruppe und Formen (wobei der Kreis ein wenig verschoben wird) wie im vorherigen Beispiel, hat aber auch ein definiertes SVG-Muster.

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

Das Muster wird dann im CSS mit einem URL-Wert referenziert, der auf die ID des Musters zeigt. Dieses Muster wird auf beide Formen als Bemalung angewendet, wie im Ergebnis gezeigt.

```css
rect,
circle {
  stroke: url("#star");
}
```

Das Muster wird relativ zu den Begrenzungsrahmen der Formen gezeichnet, was zu visuellen Störungen führen kann, wenn sie sich überlappen, da Teile des Musters transparent sind.

{{EmbedLiveSample("Musterstraich", "300", "180")}}

### SVG- gegenüber CSS-Verläufen

Hier verwenden wir erneut das gleiche Gruppen- und Form-Markup wie im ersten Beispiel, fügen jedoch auch eine Definition für einen SVG-Verlauf hinzu.

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

Im CSS wenden wir diesen SVG-Verlauf auf das Rechteck an, indem wir einen URL-Wert verwenden, der auf die ID des linearen Verlaufs zeigt. Auf den Kreis wenden wir einen CSS-Linearen Verlauf an, der im Sinne dem SVG-Verlauf gleichwertig ist.

```css
rect {
  stroke: url("#greenwhite");
}
circle {
  stroke: linear-gradient(90deg, green, white);
}
```

Nur das Rechteck erhält einen Verlaufsstrich, während der Kreis auf den grauen Strich zurückfällt, der vom Gruppenelement gesetzt wird. Dies liegt daran, dass CSS-Verläufe keine gültigen Werte für die `stroke`-Eigenschaft sind, während URL-Referenzen auf SVG-Verläufe zulässig sind.

{{EmbedLiveSample("SVG- gegenüber CSS-Verläufen", "300", "180")}}

### Kontextbezogener Strich

In diesem Fall beginnen wir wieder mit einem Gruppenelement, innerhalb dessen zwei rechteckförmige Pfade definiert sind. Danach werden ein linearer Verlauf und ein SVG-Marker definiert.

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

Wir schreiben dann CSS, um beiden Pfaden einen Marker hinzuzufügen und auch eine dunkle lila Strichfarbe anzuwenden. Dies wird für den zweiten Pfad überschrieben, der einen URL-Wert erhält, um den orange-zu-roten Verlauf als seinen Strich anzuwenden. Schließlich setzen wir das Kreiselement im Markerelement so, dass es einen Strichwert von `context-stroke` hat.

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

Da `stroke-context` auf ein Element angewendet wird, das von einem {{SVGElement('marker')}}-Element abstammt, ist das Kontextelement für jeden Kreis das Element, das das `<marker>`-Element aufgerufen hat; das heißt, die {{SVGElement('path')}}-Elemente. Das Ergebnis ist, dass die Marker auf dem ersten Pfad die Farbe des aufrufenden Pfads verwenden und lila sind. Die Marker auf dem zweiten Pfad hingegen verwenden denselben orange-zu-roten SVG-Verlauf, den der Pfad verwendet. Dieser letzte Fall veranschaulicht, wie SVG-Verläufe als ein einziger Verlauf auf die gesamte Form angewendet werden, anstatt unabhängig auf jeden einzelnen Teil der Form angewendet zu werden.

{{EmbedLiveSample("Kontextbezogener Strich", "300", "180")}}

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
