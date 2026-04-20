---
title: "`stroke-opacity` CSS property"
short-title: stroke-opacity
slug: Web/CSS/Reference/Properties/stroke-opacity
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`stroke-opacity`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Deckkraft des Strichs einer [SVG](/de/docs/Web/SVG)-Form. Der Effekt ist identisch mit dem von {{CSSxref('opacity')}}, außer dass er nur auf den Strich und nicht auf das gesamte Element angewendet wird. Wenn vorhanden, überschreibt er das {{SVGAttr("stroke-opacity")}}-Attribut des Elements.

Diese Eigenschaft gilt für SVG-Formen und Textinhaltelemente (siehe {{SVGAttr("stroke-opacity")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf die Striche von Nachfahrenelementen haben.

Beachten Sie, dass der Strich einer Form teilweise die Füllung dieser Form überdeckt, sodass ein Strich mit einer Deckkraft von weniger als `1` die Füllung mit dem Strich dort mischen wird, wo sie sich überlappen. Um diesen Effekt zu vermeiden, kann eine globale Deckkraft mit der {{cssxref('opacity')}}-Eigenschaft angewendet oder der Strich hinter die Füllung mit dem {{cssxref('paint-order')}}-Attribut gesetzt werden.

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
  - : Jede reelle Zahl von 0 bis 1, einschließlich. Ein Wert von `0` macht den Strich vollständig transparent, und ein Wert von `1` macht ihn vollständig opak. Werte außerhalb des Bereichs 0 – 1 werden auf das nächste Ende dieses Bereichs begrenzt; negative Werte werden somit auf `0` gekappt.

- {{cssxref("&lt;percentage&gt;")}}
  - : Dasselbe wie `<number>` (siehe oben), außer dass der zulässige Bereich 0 % bis 100 % beträgt und das Kappen in Bezug auf diesen Bereich erfolgt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Strichdeckkraftstufen

Dieses Beispiel demonstriert die grundlegende Verwendung der `stroke-opacity`-Eigenschaft und wie, da der Strich einer Form teilweise ihre Füllung überdeckt, ein Strich mit einer Deckkraft von weniger als `1` mit der Füllung dort mischen wird, wo sie sich überlappen.

#### HTML

Zuerst richten wir fünf mehrsegmentige Pfade ein, die alle einen schwarzen Strich mit einer Breite von eins und eine `dodgerblue`-Füllung für die Unterpfade verwenden. Jeder Pfad erstellt eine Reihe von Bergsymbolen, die von links (einem flachen Eckwinkel) nach rechts (einem extremen Eckwinkel) verlaufen.

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

Auf diese Pfade wenden wir nacheinander höhere Strichdeckkraftwerte an. Bei den ersten vier Pfaden ist die Füllung durch die innere Hälfte des Strichpfads sichtbar, obwohl es beim vierten Pfad schwierig sein könnte zu erkennen. Beim fünften und letzten Pfad ist der Strich vollständig undurchsichtig, sodass die Füllung nicht durch den Strich sichtbar ist.

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
