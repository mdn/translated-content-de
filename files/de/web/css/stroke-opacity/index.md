---
title: stroke-opacity
slug: Web/CSS/stroke-opacity
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`stroke-opacity`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Deckkraft der Kontur eines [SVG](/de/docs/Web/SVG)-Shapes. Der Effekt ist identisch mit dem von {{CSSxref('opacity')}}, wird jedoch nur auf die Kontur angewendet, nicht auf das gesamte Element. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-opacity")}}-Attribut des Elements.

Diese Eigenschaft gilt für SVG-Shapes und Textinhaltelemente (siehe {{SVGAttr("stroke-opacity")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und trotzdem den gewünschten Effekt auf die Konturen der Nachkommenelemente haben.

Beachten Sie, dass die Kontur eines Shapes teilweise die Füllung dieses Shapes überdeckt. Eine Kontur mit einer Deckkraft von weniger als `1` zeigt die Füllung, die mit der Kontur dort vermischt wird, wo sie sich überschneiden. Um diesen Effekt zu vermeiden, ist es möglich, eine globale Deckkraft mit der {{cssxref('opacity')}}-Eigenschaft anzuwenden oder die Kontur hinter die Füllung mit dem {{cssxref('paint-order')}}-Attribut zu legen.

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

  - : Eine beliebige reelle Zahl von 0 bis 1, einschließlich. Ein Wert von `0` macht die Kontur vollständig transparent, und ein Wert von `1` macht sie vollständig undurchsichtig. Werte außerhalb des Bereichs 0 – 1 werden auf das nächstgelegene Ende dieses Bereichs gekürzt; negative Werte werden somit auf `0` gekürzt.

- {{cssxref("&lt;percentage&gt;")}}
  - : Das gleiche wie `<number>` (siehe oben), außer dass der zulässige Bereich 0% bis 100% beträgt und das Kürzen in Bezug auf diesen Bereich erfolgt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Kontur-Deckkraftstufen

Dieses Beispiel demonstriert die grundlegende Verwendung der `stroke-opacity`-Eigenschaft und wie eine Kontur, da sie teilweise die Füllung ihres Shapes überdeckt, mit der Füllung dort vermischt wird, wo sie sich überschneiden, wenn ihre Deckkraft weniger als `1` beträgt.

#### HTML

Zuerst richten wir fünf Pfade mit mehreren Segmenten ein, die alle einen schwarzen Strich mit einer Breite von eins und eine `dodgerblue`-Füllung für die Teilpfade verwenden. Jeder Pfad erstellt eine Reihe von Bergsymbolen, die von links (ein flacher Eckwinkel) nach rechts (ein extremer Eckwinkel) gehen.

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

Auf diese Pfade wenden wir einen sukzessiv höheren Wert für die Kontur-Deckkraft an. Bei den ersten vier Pfaden kann die Füllung durch die innere Hälfte des Konturpfads gesehen werden, obwohl es beim vierten Pfad schwer zu erkennen sein mag. Beim fünften und letzten Pfad ist die Kontur vollständig undurchsichtig, sodass die Füllung nicht durch die Kontur hindurch zu sehen ist.

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
- SVG {{SVGAttr("stroke-opacity")}}-Attribut
