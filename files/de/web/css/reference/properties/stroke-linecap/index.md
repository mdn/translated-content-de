---
title: stroke-linecap
slug: Web/CSS/Reference/Properties/stroke-linecap
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`stroke-linecap`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Form, die am Ende der offenen Pfade von [SVG](/de/docs/Web/SVG) Elementen verwendet wird. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-linecap")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form, die offene Pfade und Textinhaltselemente haben kann (siehe {{SVGAttr("stroke-linecap")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und trotzdem die gewünschte Wirkung auf die Striche der Kindelemente haben.

## Syntax

```css
/* keyword values */
stroke-linecap: butt;
stroke-linecap: round;
stroke-linecap: square;

/* Global values */
stroke-linecap: inherit;
stroke-linecap: initial;
stroke-linecap: revert;
stroke-linecap: revert-layer;
stroke-linecap: unset;
```

### Werte

- `butt`
  - : Gibt an, dass der Strich für jeden Pfad nicht über seine beiden Endpunkte hinausgeht. Bei einem Pfad ohne Länge wird der Pfad überhaupt nicht gerendert. Dies ist der Standardwert.

- `round`
  - : Gibt an, dass am Ende jedes Pfades der Strich durch einen Halbkreis mit einem Durchmesser, der der Strichbreite entspricht, verlängert wird. Bei einem Pfad ohne Länge besteht der Strich aus einem vollständigen Kreis, der am Punkt des Pfads zentriert ist.

- `square`
  - : Gibt an, dass am Ende jedes Pfades der Strich durch ein Rechteck mit einer Breite, die der halben Breite des Strichs entspricht, und einer Höhe, die der Breite des Strichs entspricht, verlängert wird. Bei einem Pfad ohne Länge besteht der Strich aus einem Quadrat, dessen Breite der Strichbreite entspricht und das am Punkt des Pfads zentriert ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linienenden

Dieses Beispiel zeigt die drei Schlüsselwortwerte der Eigenschaft.

#### HTML

Zuerst richten wir ein hellgraues Rechteck ein. Dann werden in einer Gruppe drei Pfade definiert, deren Länge genau der Breite des Rechtecks entspricht und die alle an der linken Kante des Rechtecks beginnen. Alle haben einen `dodgerblue` Strich mit einer Breite von sieben.

```html
<svg viewBox="0 0 100 50" width="500" height="250">
  <rect x="10" y="5" width="80" height="30" fill="#dddddd" />
  <g stroke="dodgerblue" stroke-width="7">
    <path d="M 10,10 h 80" />
    <path d="M 10,20 h 80" />
    <path d="M 10,30 h 80" />
  </g>
</svg>
```

#### CSS

Wir wenden dann über CSS einen anderen Linienendstil auf jeden Pfad an.

```css
path:nth-of-type(1) {
  stroke-linecap: butt;
}
path:nth-of-type(2) {
  stroke-linecap: square;
}
path:nth-of-type(3) {
  stroke-linecap: round;
}
```

#### Ergebnisse

{{EmbedLiveSample("Linecaps", "500", "250")}}

Der erste Pfad hat `butt` Linienenden, was im Wesentlichen bedeutet, dass der Strich genau bis zu den Endpunkten (sowohl Anfang als auch Ende) des Pfades verläuft und nicht weiter. Der zweite Pfad hat `square` Linienenden, daher erstreckt sich der sichtbare Pfad über die Endpunkte des Pfades hinaus, wodurch die Gesamtlänge des Pfades scheinbar 87 beträgt, da die Pfadlänge 80 beträgt und jede der beiden quadratischen Enden 3.5 breit ist. Der dritte Pfad hat `circle` Enden, daher scheint er ebenfalls 87 Einheiten lang zu sein, aber die beiden Enden sind halbrund anstatt quadratisch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("stroke")}}
- SVG {{SVGAttr("stroke-linecap")}} Attribut
