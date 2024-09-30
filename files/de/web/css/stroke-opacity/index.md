---
title: stroke-opacity
slug: Web/CSS/stroke-opacity
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{CSSRef}}

Die **`stroke-opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Deckkraft eines [SVG](/de/docs/Web/SVG) Linienzugs. Der Effekt ist identisch mit dem von {{CSSxref('opacity')}}, wird jedoch nur auf den Linienzug angewendet und nicht auf das gesamte Element. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-opacity")}} Attribut des Elements.

Diese Eigenschaft gilt für SVG-Formen und textbasierte Elemente (siehe {{SVGAttr("stroke-opacity")}} für eine vollständige Liste). Da sie eine vererbte Eigenschaft ist, kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und hat dennoch den gewünschten Effekt auf die Linienzüge der Nachkommenelemente.

Beachten Sie, dass ein Linienzug teilweise die Füllung dieser Form überdeckt, sodass ein Linienzug mit einer Deckkraft von weniger als `1` die Füllung mit dem Linienzug dort vermischt, wo sie sich überlappen. Um diesen Effekt zu vermeiden, kann eine globale Deckkraft mit der {{cssxref('opacity')}} Eigenschaft angewendet oder der Linienzug mit dem {{cssxref('paint-order')}} Attribut hinter die Füllung gelegt werden.

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

  - : Jede reelle Zahl von 0 bis 1, einschließlich. Ein Wert von `0` macht den Linienzug vollständig transparent, und ein Wert von `1` macht ihn vollständig undurchsichtig. Werte außerhalb des Bereichs von 0 – 1 werden an das nächstgelegene Ende dieses Bereichs geclippt, sodass negative Werte zu `0` geclippt werden.

- {{cssxref("&lt;percentage&gt;")}}

  - : Dasselbe wie `<number>` (siehe oben), außer dass der erlaubte Bereich von 0% bis 100% reicht und Clipping in Bezug auf diesen Bereich erfolgt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Deckkräfte des Linienzugs

Dieses Beispiel zeigt die grundlegende Verwendung der `stroke-opacity` Eigenschaft und wie, da ein Linienzug einer Form teilweise ihre Füllung überdeckt, ein Linienzug mit einer Deckkraft von weniger als `1` sich mit der Füllung dort vermischt, wo sie sich überlappen.

#### HTML

Zuerst erstellen wir fünf mehrsegmentige Pfade, die alle einen schwarzen Linienzug mit einer Breite von eins und eine `dodgerblue` Füllung für die Teilpfade verwenden. Jeder Pfad erzeugt eine Reihe von Bergsymbolen, die von links (ein flacher Winkel) nach rechts (ein extremer Winkel) geht.

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

Auf diese Pfade wenden wir sukzessiv höhere Deckkraftwerte für den Linienzug an. Bei den ersten vier Pfaden kann die Füllung durch die innere Hälfte des Linienzuges gesehen werden, obwohl es beim vierten Pfad möglicherweise schwer zu erkennen ist. Beim fünften und letzten Pfad ist der Linienzug vollständig undurchsichtig, sodass die Füllung nicht durch den Linienzug sichtbar ist.

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
