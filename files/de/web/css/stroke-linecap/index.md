---
title: stroke-linecap
slug: Web/CSS/stroke-linecap
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{CSSRef}}

Die **`stroke-linecap`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Form, die am Ende offener Teilpfade der nicht geschlossenen Linien von [SVG](/de/docs/Web/SVG)-Elementen verwendet werden soll. Falls vorhanden, überschreibt es das {{SVGAttr("stroke-linecap")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form, die nicht geschlossene Linien haben kann, sowie für Textinhalts-Elemente (siehe {{SVGAttr("stroke-linecap")}} für eine vollständige Liste). Als vererbte Eigenschaft kann sie auch auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf die Linien der Nachfahrelemente haben.

## Syntax

```css
/* Schlüsselwortwerte */
stroke-linecap: butt;
stroke-linecap: round;
stroke-linecap: square;

/* Globale Werte */
stroke-linecap: inherit;
stroke-linecap: initial;
stroke-linecap: revert;
stroke-linecap: revert-layer;
stroke-linecap: unset;
```

### Werte

- `butt`

  - : Gibt an, dass die Linie für jeden Teilpfad nicht über seine beiden Endpunkte hinausgeht. Bei einem Teilpfad mit Null-Länge wird der Pfad überhaupt nicht gerendert. Dies ist der Standardwert.

- `round`

  - : Gibt an, dass am Ende jedes Teilpfades die Linie um einen Halbkreis mit einem Durchmesser entsprechend der Linienbreite erweitert wird. Bei einem Teilpfad mit Null-Länge besteht die Linie aus einem vollständigen Kreis, der am Punkt des Teilpfades zentriert ist.

- `square`

  - : Gibt an, dass am Ende jedes Teilpfades die Linie um ein Rechteck mit einer Breite, die der Hälfte der Linienbreite entspricht, und einer Höhe, die der Linienbreite entspricht, erweitert wird. Bei einem Teilpfad mit Null-Länge besteht die Linie aus einem Quadrat, dessen Breite der Linienbreite entspricht und das am Punkt des Teilpfades zentriert ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linienenden

Dieses Beispiel demonstriert die drei Schlüsselwortwerte der Eigenschaft.

#### HTML

Zuerst richten wir ein hellgraues Rechteck ein. Dann werden in einer Gruppe drei Pfade definiert, deren Länge genau der Breite des Rechtecks entspricht und die alle am linken Rand des Rechtecks beginnen. Alle haben eine `dodgerblue` Linie mit einer Breite von sieben.

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

Wir wenden dann einen unterschiedlichen Linienstil auf jeden Pfad über CSS an.

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

Der erste Pfad hat `butt` Linienenden, was im Wesentlichen bedeutet, dass die Linie genau bis zu den Endpunkten (sowohl am Anfang als auch am Ende) des Pfades verläuft und nicht weiter. Der zweite Pfad hat `square` Linienenden, so dass sich der sichtbare Pfad über die Endpunkte des Pfades hinaus erstreckt, was die gesamte Länge des Pfades scheinbar auf 87 erhöht, da die Pfadlänge 80 beträgt und jede der beiden quadratischen Enden 3,5 breit ist. Der dritte Pfad hat `round` Enden, so dass er ebenfalls eine Länge von 87 Einheiten zu haben scheint, die beiden Enden jedoch halbkreisförmig anstelle von quadratisch sind.

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
