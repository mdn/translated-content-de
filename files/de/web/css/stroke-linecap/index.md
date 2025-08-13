---
title: stroke-linecap
slug: Web/CSS/stroke-linecap
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`stroke-linecap`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Form, die am Ende offener Unterpfade von nicht abgeschlossenen Strichen von [SVG](/de/docs/Web/SVG) Elementen verwendet wird. Falls vorhanden, überschreibt sie das {{SVGAttr("stroke-linecap")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form, die nicht abgeschlossene Striche und Textinhaltselemente haben kann (siehe {{SVGAttr("stroke-linecap")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und trotzdem den beabsichtigten Effekt auf die Striche der Nachfahren-Elemente haben.

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
  - : Gibt an, dass der Strich für jeden Unterpfad nicht über dessen zwei Endpunkte hinausgeht. Bei einem Unterpfad mit der Länge null wird der Pfad überhaupt nicht gerendert. Dies ist der Standardwert.

- `round`
  - : Gibt an, dass der Strich am Ende jedes Unterpfades um einen Halbkreis mit einem Durchmesser, der der Strichbreite entspricht, erweitert wird. Bei einem Unterpfad mit der Länge null besteht der Strich aus einem vollständigen Kreis, der um den Punkt des Unterpfads zentriert ist.

- `square`
  - : Gibt an, dass der Strich am Ende jedes Unterpfades um ein Rechteck erweitert wird, dessen Breite der Hälfte der Strichbreite entspricht und dessen Höhe der Strichbreite entspricht. Bei einem Unterpfad mit der Länge null besteht der Strich aus einem Quadrat, dessen Breite der Strichbreite entspricht und um den Punkt des Unterpfads zentriert ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linienenden

Dieses Beispiel zeigt die drei Schlüsselwortwerte der Eigenschaft.

#### HTML

Zuerst richten wir ein hellgraues Rechteck ein. Dann werden in einer Gruppe drei Pfade definiert, deren Länge genau der Breite des Rechtecks entspricht und die alle am linken Rand des Rechtecks beginnen. Sie sind alle auf einen `dodgerblue` Strich mit einer Breite von sieben gesetzt.

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

Der erste Pfad hat `butt` Linienenden, was im Wesentlichen bedeutet, dass der Strich genau zu den Endpunkten (sowohl dem Anfang als auch dem Ende) des Pfades verläuft und nicht darüber hinaus. Der zweite Pfad hat `square` Linienenden, sodass der sichtbare Pfad über die Endpunkte des Pfades hinaus erweitert wird, was die Gesamtlänge des Pfades scheinbar auf 87 erhöht, da die Pfadlänge 80 beträgt und jeder der beiden quadratischen Enden 3,5 breit ist. Der dritte Pfad hat `circle` Enden, sodass er zwar ebenfalls 87 Einheiten lang erscheint, die beiden Enden jedoch halbkreisförmig anstelle von quadratisch sind.

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
