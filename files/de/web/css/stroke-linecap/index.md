---
title: stroke-linecap
slug: Web/CSS/stroke-linecap
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{CSSRef}}

Die **`stroke-linecap`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Form, die am Ende von offenen Teilpfaden der nicht geschlossenen Striche von [SVG](/de/docs/Web/SVG)-Elementen verwendet werden soll. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-linecap")}}-Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form, die nicht geschlossene Striche haben kann, und Elemente mit Textinhalt (siehe {{SVGAttr("stroke-linecap")}} für eine vollständige Liste). Als geerbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf die Striche der Nachkommenelemente haben.

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

  - : Gibt an, dass der Strich für jeden Teilpfad nicht über seine zwei Endpunkte hinausgeht. Bei einem Teilpfad mit null Länge wird der Pfad überhaupt nicht gerendert. Dies ist der Standardwert.

- `round`

  - : Gibt an, dass der Strich am Ende jedes Teilpfads durch einen Halbkreis mit einem Durchmesser, der der Strichbreite entspricht, verlängert wird. Bei einem Teilpfad mit null Länge besteht der Strich aus einem Vollkreis, der auf den Punkt des Teilpfads zentriert ist.

- `square`

  - : Gibt an, dass der Strich am Ende jedes Teilpfads durch ein Rechteck verlängert wird, dessen Breite der halben Breite des Strichs und dessen Höhe der Breite des Strichs entspricht. Bei einem Teilpfad mit null Länge besteht der Strich aus einem Quadrat, dessen Breite der Strichbreite entspricht und das auf den Punkt des Teilpfads zentriert ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linienenden

Dieses Beispiel demonstriert die drei Schlüsselwortwerte der Eigenschaft.

#### HTML

Wir richten zunächst ein hellgraues Rechteck ein. Dann werden in einer Gruppe drei Pfade definiert, deren Länge genau der Breite des Rechtecks entspricht und die alle am linken Rand des Rechtecks beginnen. Alle sind auf einen `dodgerblue`-Strich mit einer Breite von sieben gesetzt.

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

Anschließend wenden wir über CSS für jeden Pfad einen anderen Linienende-Stil an.

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

Der erste Pfad hat `butt`-Linienenden, was im Wesentlichen bedeutet, dass der Strich genau bis zu den Endpunkten (sowohl Anfang als auch Ende) des Pfads verläuft und nicht darüber hinaus. Der zweite Pfad hat `square`-Linienenden, sodass der sichtbare Pfad über die Endpunkte des Pfads hinaus verlängert wird, was die Gesamtlänge des Pfads auf 87 zu sein scheint, da die Pfadlänge 80 ist und jede der beiden quadratischen Enden 3,5 breit ist. Der dritte Pfad hat `circle`-Enden, sodass er zwar ebenfalls 87 Einheiten lang erscheint, aber die beiden Enden sind halbkreisförmig statt quadratisch.

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
