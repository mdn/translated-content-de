---
title: stroke-opacity
slug: Web/CSS/stroke-opacity
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{CSSRef}}

Die **`stroke-opacity`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Opazität des Strichs einer [SVG](/de/docs/Web/SVG)-Form. Der Effekt ist identisch mit dem von {{CSSxref('opacity')}}, wird jedoch nur auf den Strich angewendet, nicht auf das gesamte Element. Wenn vorhanden, überschreibt er das {{SVGAttr("stroke-opacity")}}-Attribut des Elements.

Diese Eigenschaft gilt für SVG-Formen und textbezogene Elemente (siehe {{SVGAttr("stroke-opacity")}} für eine vollständige Liste), aber als geerbte Eigenschaft kann sie auch auf Elemente wie {{SVGElement("g")}} angewendet werden und hat dennoch die gewünschte Wirkung auf die Striche nachfolgender Elemente.

Beachten Sie, dass der Strich einer Form teilweise die Füllung dieser Form überdeckt, sodass ein Strich mit einer Opazität von weniger als `1` die Füllung mit dem Strich mischt, wo sie sich überlappen. Um diesen Effekt zu vermeiden, ist es möglich, eine globale Opazität mit der {{cssxref('opacity')}}-Eigenschaft anzuwenden oder den Strich hinter der Füllung mit dem {{cssxref('paint-order')}}-Attribut zu platzieren.

## Syntax

```css
/* numerische und prozentuale Werte */
stroke-opacity: 1;
stroke-opacity: 0.3;
stroke-opacity: 50%;

/* Globale Werte */
stroke-opacity: inherit;
stroke-opacity: initial;
stroke-opacity: revert;
stroke-opacity: revert-layer;
stroke-opacity: unset;
```

### Werte

- {{cssxref("&lt;number&gt;")}}

  - : Jede reelle Zahl von 0 bis 1, einschließlich. Ein Wert von `0` macht den Strich vollständig transparent, und ein Wert von `1` macht ihn vollständig undurchsichtig. Werte außerhalb des Bereichs 0–1 werden auf das nächstgelegene Ende dieses Bereichs geklippt; negative Werte werden also auf `0` geklippt.

- {{cssxref("&lt;percentage&gt;")}}

  - : Dasselbe wie `<number>` (siehe oben), außer dass der zulässige Bereich 0% bis 100% beträgt und das Klicken in Bezug auf diesen Bereich erfolgt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Strichopazitäten

Dieses Beispiel demonstriert die grundlegende Verwendung der `stroke-opacity`-Eigenschaft und wie, da der Strich einer Form teilweise ihre Füllung überdeckt, ein Strich mit einer Opazität von weniger als `1` mit der Füllung dort mischt, wo sie sich überlappen.

#### HTML

Zunächst richten wir fünf Mehrsegmentpfade ein, die alle einen schwarzen Strich mit einer Breite von eins und eine `dodgerblue`-Füllung für die Teilpfade verwenden. Jeder Pfad erstellt eine Reihe von Bergsymbolen, die von links (ein flacher Eckwinkel) nach rechts (ein extremer Eckwinkel) verlaufen.

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

Für diese Pfade wenden wir aufeinanderfolgend höhere Strichopazitätswerte an. Für die ersten vier Pfade kann die Füllung durch die innere Hälfte des Strichpfads gesehen werden, obwohl es bei dem vierten Pfad schwierig zu erkennen sein kann. Beim fünften und letzten Pfad ist der Strich vollständig undurchsichtig, sodass die Füllung durch den Strich nicht gesehen werden kann.

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
