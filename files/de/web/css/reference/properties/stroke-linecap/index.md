---
title: "`stroke-linecap` CSS property"
short-title: stroke-linecap
slug: Web/CSS/Reference/Properties/stroke-linecap
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`stroke-linecap`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Form, die am Ende von offenen Unterpfaden der [SVG](/de/docs/Web/SVG)-Elemente bei nicht geschlossenen Strichen verwendet werden soll. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-linecap")}}-Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form, die nicht geschlossene Striche haben kann und Textinhalt-Elemente (siehe {{SVGAttr("stroke-linecap")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf die Striche von Nachfahrenelementen haben.

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
  - : Gibt an, dass der Strich für jeden Unterpfad nicht über seine beiden Endpunkte hinausreicht. Bei einem Unterpfad mit Null-Länge wird der Pfad überhaupt nicht gerendert. Dies ist der Standardwert.

- `round`
  - : Gibt an, dass am Ende jedes Unterpfads der Strich um einen Halbkreis mit einem Durchmesser, der der Strichbreite entspricht, verlängert wird. Bei einem Unterpfad mit Null-Länge besteht der Strich aus einem Vollkreis, der im Mittelpunkt des Punktes des Unterpfads zentriert ist.

- `square`
  - : Gibt an, dass am Ende jedes Unterpfads der Strich um ein Rechteck verlängert wird, dessen Breite der Hälfte der Strichbreite und dessen Höhe der Strichbreite entspricht. Bei einem Unterpfad mit Null-Länge besteht der Strich aus einem Quadrat, dessen Breite der Strichbreite entspricht und das im Punkt des Unterpfads zentriert ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linecaps

Dieses Beispiel demonstriert die drei Schlüsselwortwerte der Eigenschaft.

#### HTML

Zuerst richten wir ein hellgraues Rechteck ein. Dann werden in einer Gruppe drei Pfade definiert, deren Länge genau der Breite des Rechtecks entspricht und die alle am linken Rand des Rechtecks beginnen. Alle sind auf einen `dodgerblue`-Strich mit einer Breite von sieben eingestellt.

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

Dann wenden wir über CSS einen anderen Linecap-Stil auf jeden Pfad an.

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

Der erste Pfad hat `butt`-Linecaps, was im Wesentlichen bedeutet, dass der Strich genau bis zu den Endpunkten (sowohl Start als auch Ende) des Pfads läuft und nicht darüber hinausgeht. Der zweite Pfad hat `square`-Linecaps, sodass der sichtbare Pfad über die Endpunkte des Pfads hinausreicht, was die Gesamtlänge des Pfads scheinbar auf 87 verlängert, da die Pfadlänge 80 ist und jeder der beiden quadratischen Linecaps 3,5 breit ist. Der dritte Pfad hat `circle`-Linecaps, sodass er ebenfalls scheinbar 87 Einheiten lang ist, die beiden Endungen jedoch halbkreisförmig statt quadratisch sind.

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
