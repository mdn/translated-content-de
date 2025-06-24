---
title: stroke-linecap
slug: Web/CSS/stroke-linecap
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`stroke-linecap`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Form, die am Ende von offenen Unterpfaden der nicht geschlossenen Striche von [SVG](/de/docs/Web/SVG)-Elementen verwendet wird. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-linecap")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form, die nicht geschlossene Striche haben kann, und für Textinhaltselemente (siehe {{SVGAttr("stroke-linecap")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und trotzdem die beabsichtigte Wirkung auf die Striche der Nachkommenelemente haben.

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

  - : Gibt an, dass der Strich für jeden Unterpfad nicht über seine beiden Endpunkte hinausgeht. Bei einem Unterpfad mit Null-Länge wird der Pfad überhaupt nicht gerendert. Dies ist der Standardwert.

- `round`

  - : Gibt an, dass am Ende jedes Unterpfads der Strich um einen Halbkreis mit einem Durchmesser, der der Strichbreite entspricht, verlängert wird. Bei einem Unterpfad mit Null-Länge besteht der Strich aus einem Vollkreis, der am Punkt des Unterpfads zentriert ist.

- `square`
  - : Gibt an, dass am Ende jedes Unterpfads der Strich um ein Rechteck mit einer Breite, die der Hälfte der Breite des Strichs entspricht, und einer Höhe, die der Breite des Strichs entspricht, verlängert wird. Bei einem Unterpfad mit Null-Länge besteht der Strich aus einem Quadrat, dessen Breite der Strichbreite entspricht und am Punkt des Unterpfads zentriert ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linecaps

Dieses Beispiel demonstriert die drei Schlüsselwortwerte der Eigenschaft.

#### HTML

Wir setzen zuerst ein hellgraues Rechteck auf. Dann werden in einer Gruppe drei Pfade definiert, deren Länge genau der Breite des Rechtecks entspricht, und die alle am linken Rand des Rechtecks beginnen. Sie sind alle so eingestellt, dass sie einen `dodgerblue` Strich mit einer Breite von sieben haben.

```html
<svg viewBox="0 0 100 50" width="500" height="250">
  <rect x="10" y="5" width="80" height="30" fill="#DDD" />
  <g stroke="dodgerblue" stroke-width="7">
    <path d="M 10,10 h 80" />
    <path d="M 10,20 h 80" />
    <path d="M 10,30 h 80" />
  </g>
</svg>
```

#### CSS

Wir wenden dann einen unterschiedlichen Linecap-Stil auf jeden Pfad über CSS an.

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

Der erste Pfad hat `butt` Linecaps, was im Wesentlichen bedeutet, dass der Strich genau zu den Endpunkten (sowohl Anfang als auch Ende) des Pfades läuft und nicht weiter. Der zweite Pfad hat `square` Linecaps, daher erstreckt sich der sichtbare Pfad über die Endpunkte des Pfades hinaus, wodurch die Gesamtlänge des Pfades auf 87 erscheint, da die Pfadlänge 80 beträgt und jede der beiden Quadratkappen 3,5 breit ist. Der dritte Pfad hat `circle` Kappen, daher erscheint er auch 87 Einheiten lang, die beiden Kappen sind jedoch halbkreisförmig statt quadratisch.

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
