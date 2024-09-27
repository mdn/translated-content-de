---
title: stroke-linecap
slug: Web/CSS/stroke-linecap
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{CSSRef}}

Die **`stroke-linecap`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Form, die am Ende offener Teilpfade von Strichen in [SVG](/de/docs/Web/SVG) Elementen verwendet wird. Falls vorhanden, überschreibt sie das {{SVGAttr("stroke-linecap")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form, die offene Striche haben kann, und für Textelemente (siehe {{SVGAttr("stroke-linecap")}} für eine vollständige Liste), kann jedoch als vererbte Eigenschaft auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die gewünschte Wirkung auf die Striche von Kindelementen haben.

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

  - : Gibt an, dass am Ende jedes Teilpfads der Strich um einen Halbkreis mit einem Durchmesser, der der Strichbreite entspricht, erweitert wird. Bei einem Teilpfad mit Null-Länge besteht der Strich aus einem vollständigen Kreis, der am Punkt des Teilpfads zentriert ist.

- `square`

  - : Gibt an, dass am Ende jedes Teilpfads der Strich um ein Rechteck erweitert wird, dessen Breite der halben Breite des Strichs entspricht und dessen Höhe der Breite des Strichs entspricht. Bei einem Teilpfad mit Null-Länge besteht der Strich aus einem Quadrat, dessen Breite der Strichbreite entspricht und das am Punkt des Teilpfads zentriert ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linienkappen

Dieses Beispiel demonstriert die drei Schlüsselwortwerte der Eigenschaft.

#### HTML

Wir erstellen zuerst ein hellgraues Rechteck. Dann werden in einer Gruppe drei Pfade definiert, deren Länge genau der Breite des Rechtecks entspricht und die alle am linken Rand des Rechtecks beginnen. Sie sind alle mit einem `dodgerblue` Strich mit einer Breite von sieben eingestellt.

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

Dann wird über CSS ein unterschiedlicher Linienkappen-Stil auf jeden Pfad angewendet.

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

Der erste Pfad hat `butt` Linienkappen, was im Wesentlichen bedeutet, dass der Strich genau bis zu den Endpunkten (sowohl dem Anfang als auch dem Ende) des Pfads geht und nicht weiter. Der zweite Pfad hat `square` Linienkappen, sodass der sichtbare Pfad über die Endpunkte des Pfads hinausgeht und die Gesamtlänge des Pfads dadurch 87 zu sein scheint, da die Pfadlänge 80 beträgt und jede der beiden quadratischen Kappen 3,5 breit ist. Der dritte Pfad hat `circle` Kappen, sodass er zwar auch 87 Einheiten lang erscheint, die beiden Kappen sind jedoch halbkreisförmig anstelle von quadratisch.

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
