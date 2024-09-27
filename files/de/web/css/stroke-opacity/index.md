---
title: stroke-opacity
slug: Web/CSS/stroke-opacity
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{CSSRef}}

Die **`stroke-opacity`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Transparenz des Stils einer [SVG](/de/docs/Web/SVG) Form. Der Effekt ist identisch mit dem von {{CSSxref('opacity')}}, außer dass er nur auf den Stil angewendet wird, nicht auf das gesamte Element. Falls vorhanden, überschreibt diese Eigenschaft das {{SVGAttr("stroke-opacity")}} Attribut des Elements.

Diese Eigenschaft gilt für SVG-Formen und Textinhaltselemente (siehe {{SVGAttr("stroke-opacity")}} für eine vollständige Liste), kann aber als vererbte Eigenschaft auf Elemente wie {{SVGElement("g")}} angewendet werden und trotzdem den gewünschten Effekt auf die Stile der untergeordneten Elemente haben.

Beachten Sie, dass der Stil einer Form teilweise die Füllung dieser Form überlagert. Ein Stil mit einer Transparenz von weniger als `1` zeigt die Füllung gemischt mit dem Stil, wo sie sich überlappen. Um diesen Effekt zu vermeiden, kann eine globale Transparenz mit der {{cssxref('opacity')}} Eigenschaft angewendet werden oder der Stil hinter die Füllung mit dem {{cssxref('paint-order')}} Attribut gesetzt werden.

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

  - : Jede reelle Zahl von 0 bis 1, einschließlich. Ein Wert von `0` macht den Stil komplett transparent, und ein Wert von `1` macht ihn vollständig undurchsichtig. Werte außerhalb des Bereichs 0 – 1 werden auf das nächste Ende dieses Bereichs begrenzt; negative Werte werden also auf `0` begrenzt.

- {{cssxref("&lt;percentage&gt;")}}

  - : Gleiche wie `<number>` (siehe oben), außer der erlaubte Bereich ist 0% bis 100%, und die Begrenzung erfolgt im Hinblick auf diesen Bereich.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Stopacity-Werte

Dieses Beispiel demonstriert die grundlegende Verwendung der `stroke-opacity` Eigenschaft und wie, da der Stil einer Form teilweise ihre Füllung überlagert, ein Stil mit einer Transparenz von weniger als `1` mit der Füllung an den Stellen, an denen sie sich überlappen, vermischt wird.

#### HTML

Zuerst richten wir fünf Multi-Segment-Pfade ein, die alle einen schwarzen Stil mit einer Breite von eins und eine `dodgerblue` Füllung für die Unterpfade verwenden. Jeder Pfad erzeugt eine Serie von Bergsymbolen, von links (ein flacher Winkel) nach rechts (ein extremer Winkel).

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

Auf diese Pfade wenden wir sukzessiv höhere Stopacity-Werte an. Bei den ersten vier Pfaden kann die Füllung durch die innere Hälfte des Stilpfads gesehen werden, auch wenn es beim vierten Pfad schwer zu erkennen sein mag. Für den fünften und letzten Pfad ist der Stil vollständig undurchsichtig und daher kann die Füllung nicht durch den Stil gesehen werden.

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
