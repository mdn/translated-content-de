---
title: stroke-miterlimit
slug: Web/CSS/stroke-miterlimit
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{CSSRef}}

Die **`stroke-miterlimit`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert ein Limit für das Verhältnis der Kantenlänge zur {{CSSxref("stroke-width") }}, wenn die Form, die an den Ecken eines [SVG](/de/docs/Web/SVG) Elements verwendet werden soll, eine Gehrungsfuge ist. Wenn das durch diese Eigenschaft definierte Limit überschritten wird, wird die Fuge von `miter` zu `bevel` umgewandelt, wodurch die Ecke abgeschnitten erscheint.

Diese Eigenschaft gilt für jede SVG-Eckengenerierende Form oder Textinhalts-Element (siehe {{SVGAttr("stroke-miterlimit")}} für eine vollständige Liste), kann jedoch als vererbte Eigenschaft auf Elemente wie {{SVGElement("g")}} angewendet werden und hat dennoch den beabsichtigten Effekt auf die Striche der Nachkommenelemente. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-miterlimit")}} Attribut des Elements.

## Beschreibung

Wenn sich zwei Liniensegmente in einem scharfen Winkel treffen und für {{ CSSxref("stroke-linejoin") }} `miter` Fugen angegeben wurden oder wenn sie auf diesen Wert voreingestellt sind, ist es möglich, dass die Gehrung weit über die Dicke der Linie hinausgeht, die den Pfad stricht. Das Verhältnis `stroke-miterlimit` wird verwendet, um ein Limit festzulegen, über das hinaus die Fuge von einer Gehrung zu einer Fase umgewandelt wird.

Das Verhältnis der Kantenlänge (die Entfernung zwischen der äußeren Spitze und der inneren Ecke der Gehrung) zur {{ CSSxref("stroke-width") }} steht in direktem Zusammenhang mit dem Winkel (Theta) zwischen den Segmenten im Benutzerspace durch die Formel:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mstyle displaystyle="true"><mi>stroke-miterlimit</mi><mo>=</mo><mfrac><mrow><mi>miterLength</mi></mrow><mrow><mi>stroke-width</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mrow><mi>sin</mi><mrow><mo>(</mo><mfrac><mrow><mo>θ</mo></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle><annotation encoding="TeX">\text{stroke-miterlimit} = \frac{\text{miterLength}}{\text{stroke-width}} = \frac{1}{\sin\left(\frac{\theta}{2}\right)}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Zum Beispiel wandelt ein Gehrungs-Limit von `1.414` Gehrungen in Fasen für einen Theta-Wert von weniger als 90 Grad um, ein Limit von `4.0` wandelt sie um für einen Theta von weniger als etwa 29 Grad, und ein Limit von `10.0` wandelt sie für Theta von weniger als etwa 11.5 Grad um.

## Syntax

```css
/* number values */
stroke-miterlimit: 1;
stroke-miterlimit: 3.1416;

/* Global values */
stroke-miterlimit: inherit;
stroke-miterlimit: initial;
stroke-miterlimit: revert;
stroke-miterlimit: revert-layer;
stroke-miterlimit: unset;
```

### Werte

- {{cssxref("&lt;number&gt;")}}

  - : Jede reale positive Zahl, die gleich oder größer als `1` ist; niedrigere Werte sind ungültig. Der Initialwert ist `4`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Gehrungslimits

Dieses Beispiel zeigt die Auswirkung verschiedener Werte für die Eigenschaft `stroke-miterlimit`.

#### HTML

Wir richten fünf mehrgliedrige Pfade ein, die alle einen schwarzen Strich mit einer Breite von eins und keine Füllung verwenden. Jeder Pfad erzeugt eine Serie von Bergsymbolen, die von links (ein flacherer Winkel) nach rechts (ein extremer Winkel) verlaufen.

```html
<svg viewBox="0 0 39 36" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="none">
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

Wir wenden zunehmend größere Werte von `stroke-miterlimit` auf die Pfade an, sodass beim ersten Pfad nur der erste (linke) Teilpfad gehrungt wird; beim zweiten Pfad sind die ersten beiden Teilpfade gehrungt; und so weiter, bis beim fünften Pfad alle fünf Teilpfade gehrungt sind.

```css
path:nth-child(1) {
  stroke-miterlimit: 1.1;
}
path:nth-child(2) {
  stroke-miterlimit: 1.4;
}
path:nth-child(3) {
  stroke-miterlimit: 1.9;
}
path:nth-child(4) {
  stroke-miterlimit: 4.2;
}
path:nth-child(5) {
  stroke-miterlimit: 6.1;
}
```

{{EmbedLiveSample("Various miter limits", "400", "650")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("stroke")}}
- SVG {{SVGAttr("stroke-miterlimit")}} Attribut
