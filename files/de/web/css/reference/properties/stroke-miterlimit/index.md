---
title: "`stroke-miterlimit` CSS property"
short-title: stroke-miterlimit
slug: Web/CSS/Reference/Properties/stroke-miterlimit
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`stroke-miterlimit`** legt einen Grenzwert für das Verhältnis der Länge einer Gehrung zur {{CSSxref("stroke-width") }} fest, wenn die Ecken eines mit einer Kontur versehenen Pfads eines [SVG](/de/docs/Web/SVG)-Elements als Gehrung ausgeführt werden. Wird der durch diese Eigenschaft festgelegte Grenzwert überschritten, wird die Verbindung von `miter` zu `bevel` geändert, sodass die Ecke abgeschnitten erscheint.

Diese Eigenschaft gilt für alle SVG-Formen und Textinhaltselemente, die Ecken erzeugen können (eine vollständige Liste finden Sie unter {{SVGAttr("stroke-miterlimit")}}). Da sie vererbt wird, kann sie auch auf Elemente wie {{SVGElement("g")}} angewendet werden und wirkt sich dann wie beabsichtigt auf die Konturen der untergeordneten Elemente aus. Ist die Eigenschaft vorhanden, hat sie Vorrang vor dem Attribut {{SVGAttr("stroke-miterlimit")}} des Elements.

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
  - : Jede positive reelle Zahl größer oder gleich `1`; kleinere Werte sind ungültig. Der Anfangswert ist `4`.

## Beschreibung

Wenn zwei Liniensegmente in einem spitzen Winkel aufeinandertreffen und für {{ CSSxref("stroke-linejoin") }} `miter` festgelegt wurde oder dieser Wert standardmäßig gilt, kann die Gehrung weit über die Breite der Pfadkontur hinausragen. Das Verhältnis `stroke-miterlimit` legt einen Grenzwert fest, ab dem die Gehrung durch eine abgeschrägte Verbindung ersetzt wird.

Das Verhältnis der Gehrungslänge (des Abstands zwischen der äußeren Spitze und der inneren Ecke der Gehrung) zur {{ CSSxref("stroke-width") }} hängt über die folgende Formel direkt mit dem Winkel (Theta) zwischen den Segmenten im Benutzerkoordinatensystem zusammen:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mstyle displaystyle="true"><mi>stroke-miterlimit</mi><mo>=</mo><mfrac><mrow><mi>miterLength</mi></mrow><mrow><mi>stroke-width</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mrow><mi>sin</mi><mrow><mo>(</mo><mfrac><mrow><mo>θ</mo></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle><annotation encoding="TeX">\text{stroke-miterlimit} = \frac{\text{miterLength}}{\text{stroke-width}} = \frac{1}{\sin\left(\frac{\theta}{2}\right)}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Beispielsweise werden bei einem Gehrungsgrenzwert von `1.414` Gehrungen für Theta-Werte unter 90 Grad durch abgeschrägte Verbindungen ersetzt. Bei einem Grenzwert von `4.0` geschieht dies für Theta-Werte unter etwa 29 Grad und bei einem Grenzwert von `10.0` für Theta-Werte unter etwa 11,5 Grad.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Gehrungsgrenzwerte

Dieses Beispiel zeigt die Wirkung verschiedener Werte für die Eigenschaft `stroke-miterlimit`.

#### HTML

Wir erstellen fünf Pfade aus mehreren Segmenten, alle mit einer schwarzen Kontur der Breite eins und ohne Füllung. Jeder Pfad bildet eine Reihe von Bergsymbolen, von links (ein flacher Eckwinkel) nach rechts (ein sehr spitzer Eckwinkel).

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

Wir weisen den Pfaden zunehmend größere Werte für `stroke-miterlimit` zu: Beim ersten Pfad hat nur der erste (ganz linke) Teilpfad Gehrungen, beim zweiten Pfad die ersten beiden Teilpfade und so weiter, bis beim fünften Pfad alle fünf Teilpfade Gehrungen haben.

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
- SVG-Attribut {{SVGAttr("stroke-miterlimit")}}
