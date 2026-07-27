---
title: "`stroke-linecap` CSS property"
short-title: stroke-linecap
slug: Web/CSS/Reference/Properties/stroke-linecap
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`stroke-linecap`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Form, die an den Enden von offenen Unterpfaden von ungefüllten Strichen von [SVG](/de/docs/Web/SVG)-Elementen verwendet werden soll. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-linecap")}}-Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form, die ungefüllte Striche haben kann, sowie für Textinhalts-Elemente (siehe {{SVGAttr("stroke-linecap")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und hat dennoch die beabsichtigte Wirkung auf die Striche der untergeordneten Elemente.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `butt`
  - : Gibt an, dass der Strich für jeden Unterpfad nicht über seine beiden Endpunkte hinausgeht. Bei einem Unterpfad mit der Länge Null wird der Pfad überhaupt nicht gerendert. Dies ist der Standardwert.

- `round`
  - : Gibt an, dass am Ende jedes Unterpfads der Strich um einen Halbkreis mit einem Durchmesser, der der Strichbreite entspricht, verlängert wird. Bei einem Unterpfad mit der Länge Null besteht der Strich aus einem vollständigen Kreis, welcher im Mittelpunkt des Unterpfads zentriert ist.

- `square`
  - : Gibt an, dass am Ende jedes Unterpfads der Strich um ein Rechteck mit einer Breite, die der halben Breite des Strichs entspricht, und einer Höhe, die der Breite des Strichs entspricht, verlängert wird. Bei einem Unterpfad mit der Länge Null besteht der Strich aus einem Quadrat mit einer Breite, die der Strichbreite entspricht, zentriert am Punkt des Unterpfads.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linienenden

Dieses Beispiel demonstriert die drei Schlüsselwortwerte der Eigenschaft.

#### HTML

Zuerst richten wir ein hellgraues Rechteck ein. Dann definieren wir in einer Gruppe drei Pfade, deren Länge genau der Breite des Rechtecks entspricht und die alle an der linken Kante des Rechtecks beginnen. Sie sind alle auf einen `dodgerblue` Strich mit einer Breite von sieben gesetzt.

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

Dann wenden wir über CSS einen unterschiedlichen Linienendstil auf jeden Pfad an.

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

Der erste Pfad hat `butt` Linienenden, was im Wesentlichen bedeutet, dass der Strich genau bis zu den Endpunkten des Pfads (sowohl Start als auch Ende) verläuft und nicht weiter. Der zweite Pfad hat `square` Linienenden, sodass der sichtbare Pfad über die Endpunkte des Pfads hinaus verlängert wird, wodurch die Gesamtlänge des Pfads 87 beträgt, da die Pfadlänge 80 ist und jeder der beiden quadratischen Enden 3,5 breit ist. Der dritte Pfad hat `circle` Enden, sodass er auch 87 Einheiten lang erscheint, die beiden Enden jedoch halbkreisförmig statt quadratisch sind.

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
