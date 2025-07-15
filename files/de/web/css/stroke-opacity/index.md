---
title: stroke-opacity
slug: Web/CSS/stroke-opacity
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`stroke-opacity`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Opazität eines [SVG](/de/docs/Web/SVG)-Form-Umrisses. Der Effekt ist identisch mit dem von {{CSSxref('opacity')}}, außer dass er nur auf den Umriss angewendet wird und nicht auf das gesamte Element. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-opacity")}}-Attribut des Elements.

Diese Eigenschaft gilt für SVG-Formen und Textinhalts-Elemente (siehe {{SVGAttr("stroke-opacity")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und hat dennoch die gewünschte Wirkung auf die Umrisse der Nachfahrenelemente.

Beachten Sie, dass der Umriss einer Form teilweise die Füllung dieser Form überdeckt. Ein Umriss mit einer Opazität von weniger als `1` zeigt die Füllung gemischt mit dem Umriss dort, wo sie sich überlappen. Um diesen Effekt zu vermeiden, kann es möglich sein, eine globale Opazität mit der {{cssxref('opacity')}}-Eigenschaft anzuwenden oder den Umriss hinter die Füllung mit dem {{cssxref('paint-order')}}-Attribut zu setzen.

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
  - : Jede reelle Zahl von 0 bis 1, einschließlich. Ein Wert von `0` macht den Umriss komplett transparent und ein Wert von `1` macht ihn komplett opak. Werte außerhalb des Bereichs 0 – 1 werden auf das nächstliegende Ende dieses Bereichs gekürzt; negative Werte werden somit auf `0` gekürzt.

- {{cssxref("&lt;percentage&gt;")}}
  - : Entspricht `<number>` (siehe oben), außer dass der erlaubte Bereich von 0% bis 100% reicht und das Kürzen im Hinblick auf diesen Bereich erfolgt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Umriss-Opazitäten

Dieses Beispiel demonstriert die grundlegende Verwendung der `stroke-opacity`-Eigenschaft und zeigt, wie ein Umriss mit einer Opazität von weniger als `1` mit der Füllung überlappt, da der Umriss einer Form teilweise ihre Füllung überdeckt.

#### HTML

Zuerst richten wir fünf mehrteilige Pfade ein, die alle einen schwarzen Umriss mit einer Breite von eins und eine `dodgerblue`-Füllung für die Unterpfade verwenden. Jeder Pfad erzeugt eine Serie von Bergsymbolen, beginnend von links (ein flacher Winkel) nach rechts (ein extremer Winkel).

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

Auf diese Pfade wenden wir einen jeweils höheren Opazitätswert für den Umriss an. Bei den ersten vier Pfaden kann die Füllung durch die innere Hälfte des Umrisspfads gesehen werden, obwohl es beim vierten Pfad schwierig zu erkennen sein mag. Beim fünften und letzten Pfad ist der Umriss vollständig opak, sodass die Füllung nicht durch den Umriss gesehen werden kann.

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
