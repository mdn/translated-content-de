---
title: stroke-linecap
slug: Web/CSS/stroke-linecap
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`stroke-linecap`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Form, die am Ende von offenen Teilpfaden der ungeschlossenen Striche von [SVG](/de/docs/Web/SVG) Elementen verwendet werden soll. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-linecap")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form, die ungeschlossene Striche und Textelemente haben kann (siehe {{SVGAttr("stroke-linecap")}} für eine vollständige Liste), kann aber als geerbte Eigenschaft auf Elemente wie {{SVGElement("g")}} angewendet werden und hat immer noch den beabsichtigten Effekt auf die Striche der Nachkommenelemente.

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
  - : Gibt an, dass der Strich für jeden Teilpfad nicht über seine beiden Endpunkte hinausgeht. Bei einem Teilpfad mit Null-Länge wird der Pfad überhaupt nicht gerendert. Dies ist der Standardwert.

- `round`
  - : Gibt an, dass am Ende jedes Teilpfads der Strich um einen Halbkreis mit einem Durchmesser, der der Strichbreite entspricht, verlängert wird. Bei einem Teilpfad mit Null-Länge besteht der Strich aus einem vollständigen Kreis, der am Punkt des Teilpfads zentriert ist.

- `square`
  - : Gibt an, dass am Ende jedes Teilpfads der Strich um ein Rechteck mit einer Breite gleich der halben Breite des Strichs und einer Höhe gleich der Breite des Strichs verlängert wird. Bei einem Teilpfad mit Null-Länge besteht der Strich aus einem Quadrat mit einer Breite, die der Strichbreite entspricht, das am Punkt des Teilpfads zentriert ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linie-Enden

Dieses Beispiel demonstriert die drei Schlüsselwortwerte der Eigenschaft.

#### HTML

Zunächst richten wir ein hellgraues Rechteck ein. Dann werden in einer Gruppe drei Pfade definiert, deren Länge genau der Breite des Rechtecks entspricht und die alle am linken Rand des Rechtecks beginnen. Sie sind alle so eingestellt, dass sie einen `dodgerblue` Strich mit einer Breite von sieben haben.

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

Anschließend wenden wir über CSS einen unterschiedlichen Linie-Enden-Stil auf jeden Pfad an.

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

Der erste Pfad hat `butt` Linie-Enden, was im Wesentlichen bedeutet, dass der Strich genau bis zu den Endpunkten des Pfads (sowohl Anfang als auch Ende) läuft und nicht weiter. Der zweite Pfad hat `square` Linie-Enden, so dass der sichtbare Pfad über die Endpunkte des Pfads hinausgeht, wodurch die Gesamtlänge des Pfads 87 zu sein scheint, da die Pfadlänge 80 beträgt und jede der beiden quadratischen Enden 3,5 breit ist. Der dritte Pfad hat `circle` Enden, so dass er auch 87 Einheiten lang erscheint, die beiden Enden sind jedoch halbkreisförmig anstatt quadratisch.

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
