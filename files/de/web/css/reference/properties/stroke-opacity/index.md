---
title: stroke-opacity
slug: Web/CSS/Reference/Properties/stroke-opacity
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`stroke-opacity`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Deckkraft eines [SVG](/de/docs/Web/SVG)-Form-Umrisses. Der Effekt ist identisch mit dem von {{CSSxref('opacity')}}, außer dass er nur auf den Umriss angewendet wird und nicht auf das gesamte Element. Falls vorhanden, überschreibt er das {{SVGAttr("stroke-opacity")}}-Attribut des Elements.

Diese Eigenschaft gilt für SVG-Formen und Textinhaltelemente (siehe {{SVGAttr("stroke-opacity")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und trotzdem die beabsichtigte Wirkung auf die Umrisse der Nachfahren-Elemente haben.

Beachten Sie, dass der Umriss einer Form teilweise die Füllung dieser Form überdeckt. Ein Umriss mit einer Deckkraft von weniger als `1` zeigt die Füllung, die mit dem Umriss dort vermischt ist, wo sie sich überlappen. Um diesen Effekt zu vermeiden, ist es möglich, eine globale Deckkraft mit der {{cssxref('opacity')}}-Eigenschaft anzuwenden oder den Umriss hinter die Füllung mit dem {{cssxref('paint-order')}}-Attribut zu legen.

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
  - : Jede reelle Zahl von 0 bis 1, einschließlich. Ein Wert von `0` macht den Umriss vollständig transparent, und ein Wert von `1` macht ihn vollständig undurchsichtig. Werte außerhalb des Bereichs 0 – 1 werden auf das nächste Ende dieses Bereichs abgeschnitten; negative Werte werden also auf `0` abgeschnitten.

- {{cssxref("&lt;percentage&gt;")}}
  - : Das gleiche wie `<number>` (siehe oben), außer der zulässige Bereich ist 0% bis 100%, und das Abschnitten erfolgt in Bezug auf diesen Bereich.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Umriss-Deckkräfte

Dieses Beispiel zeigt die grundlegende Verwendung der `stroke-opacity`-Eigenschaft und wie ein Umriss, dessen Deckkraft weniger als `1` beträgt, mit der Füllung dort vermischt, wo sie sich überlappen.

#### HTML

Zuerst richten wir fünf Pfade mit mehreren Segmenten ein, die alle einen schwarzen Umriss mit einer Breite von einem und eine `dodgerblue`-Füllung für die Unterpfade verwenden. Jeder Pfad erstellt eine Reihe von Bergsymbolen, die von links (ein flacher Eckwinkel) nach rechts (ein extremer Eckwinkel) verlaufen.

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

Für diese Pfade wenden wir nacheinander einen höheren Umriss-Deckkraftwert an. Bei den ersten vier Pfaden ist die Füllung durch die innere Hälfte des Umrisswegs zu sehen, obwohl es beim vierten Pfad schwer zu erkennen sein kann. Beim fünften und letzten Pfad ist der Umriss vollständig undurchsichtig, sodass die Füllung nicht durch den Umriss gesehen werden kann.

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

#### Ergebnisse

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
- SVG {{SVGAttr("stroke-opacity")}} Attribut
