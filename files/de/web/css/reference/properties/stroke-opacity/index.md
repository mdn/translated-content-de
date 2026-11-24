---
title: "`stroke-opacity` CSS property"
short-title: stroke-opacity
slug: Web/CSS/Reference/Properties/stroke-opacity
l10n:
  sourceCommit: cdbd60eab97b1958837806b059a920f6da2f4e78
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`stroke-opacity`** legt die Deckkraft der Kontur einer [SVG](/de/docs/Web/SVG)-Form fest. Ihre Wirkung ist mit der von {{CSSxref('opacity')}} identisch, gilt jedoch nur für die Kontur und nicht für das gesamte Element. Ist die Eigenschaft gesetzt, überschreibt sie das Attribut {{SVGAttr("stroke-opacity")}} des Elements.

Diese Eigenschaft gilt für SVG-Formen und Textinhaltselemente (eine vollständige Liste finden Sie unter {{SVGAttr("stroke-opacity")}}). Da sie vererbt wird, kann sie auch auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf die Konturen der untergeordneten Elemente haben.

Beachten Sie, dass die Kontur einer Form deren Füllung teilweise überdeckt. Bei einer Kontur mit einer Deckkraft unter `1` sind deshalb Füllung und Kontur dort, wo sie sich überlappen, miteinander vermischt. Um diesen Effekt zu vermeiden, können Sie mit der Eigenschaft {{cssxref('opacity')}} eine Deckkraft für das gesamte Element festlegen oder die Kontur mit dem Attribut {{cssxref('paint-order')}} hinter die Füllung legen.

## Syntax

```css
/* numeric and percentage values */
stroke-opacity: 1;
stroke-opacity: 0.3;
stroke-opacity: 50%;

/* Global values */
stroke-opacity: inherit;
stroke-opacity: initial;
stroke-opacity: revert;
stroke-opacity: revert-layer;
stroke-opacity: unset;
```

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Eine beliebige reelle Zahl zwischen 0 und 1 einschließlich der Grenzwerte. Der Wert `0` macht die Kontur vollständig transparent, der Wert `1` vollständig deckend. Werte außerhalb des Bereichs von 0 bis 1 werden auf den nächstgelegenen Grenzwert begrenzt; negative Werte werden also auf `0` begrenzt.

- {{cssxref("&lt;percentage&gt;")}}
  - : Wie [`<number>`](#number), jedoch liegt der zulässige Bereich zwischen 0 % und 100 %. Werte außerhalb dieses Bereichs werden auf den nächstgelegenen Grenzwert begrenzt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Deckkraftwerte für Konturen

Dieses Beispiel zeigt die grundlegende Verwendung der Eigenschaft `stroke-opacity`. Es veranschaulicht außerdem, wie sich eine Kontur mit einer Deckkraft unter `1` mit der Füllung vermischt, wo beide sich überlappen, da die Kontur die Füllung einer Form teilweise überdeckt.

#### HTML

Zunächst erstellen wir fünf Pfade mit jeweils mehreren Segmenten. Alle verwenden eine schwarze Kontur mit einer Breite von eins und die Füllfarbe `dodgerblue` für die Teilpfade. Jeder Pfad erzeugt eine Reihe von Bergsymbolen, deren Eckwinkel von links (flacher Winkel) nach rechts (sehr spitzer Winkel) variieren.

```html
<svg viewBox="0 0 39 36" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="dodgerblue">
    <path
      d="M1,5 l7   ,-3 l7   ,3
         m2,0 l3.5 ,-3 l3.5 ,3
         m2,0 l2   ,-3 l2   ,3
         m2,0 l0.75,-3 l0.75,3
         m2,0 l0.5 ,-3 l0.5 ,3" />
    <path
      d="M1,12 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,19 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,26 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,33 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
  </g>
</svg>
```

#### CSS

Auf diese Pfade wenden wir nacheinander zunehmend höhere Werte für die Deckkraft der Kontur an. Bei den ersten vier Pfaden ist die Füllung durch die innere Hälfte der Kontur zu sehen, auch wenn dies beim vierten Pfad möglicherweise schwer zu erkennen ist. Beim fünften und letzten Pfad ist die Kontur vollständig deckend, sodass die Füllung nicht durch sie hindurch zu sehen ist.

```css
g path:nth-child(1) {
  stroke-opacity: 0.2;
} /* equiv. 20% */
g path:nth-child(2) {
  stroke-opacity: 0.4;
} /* equiv. 40% */
g path:nth-child(3) {
  stroke-opacity: 0.6;
} /* equiv. 60% */
g path:nth-child(4) {
  stroke-opacity: 0.8;
} /* equiv. 80% */
g path:nth-child(5) {
  stroke-opacity: 1;
} /* equiv. 100% */
```

#### Ergebnis

{{EmbedLiveSample("Various stroke opacities", "400", "650")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('opacity')}}
- {{cssxref('fill-opacity')}}
- {{cssxref('paint-order')}}
- {{cssxref('stroke')}}
- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-width")}}
- SVG-Attribut {{SVGAttr("stroke-opacity")}}
