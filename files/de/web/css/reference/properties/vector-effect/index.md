---
title: "`vector-effect` CSS property"
short-title: vector-effect
slug: Web/CSS/Reference/Properties/vector-effect
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`vector-effect`** unterdrückt bestimmte [Transformationseffekte](/de/docs/Web/SVG/Reference/Attribute/transform) in SVG und ermöglicht dadurch Effekte wie eine Straße auf einer Karte, die unabhängig davon, wie stark die Karte gezoomt wird, dieselbe Breite behält, oder eine Diagrammlegende, die ihre Position und Größe unabhängig von anderen Transformationen beibehält. Sie kann nur mit SVG-Elementen verwendet werden, die das Attribut {{SVGAttr("vector-effect")}} akzeptieren. Bei Verwendung überschreibt der CSS-Wert alle Werte des `vector-effect`-Attributs des Elements.

## Syntax

```css
/* Keyword values */
vector-effect: none;
vector-effect: non-scaling-stroke;

/* Global values */
vector-effect: inherit;
vector-effect: initial;
vector-effect: revert;
vector-effect: revert-layer;
vector-effect: unset;
```

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Auf das Element werden keine Vektoreffekte angewendet; es wird daher wie üblich vollständig von Transformationen beeinflusst.
- `non-scaling-stroke`
  - : Die gezeichnete Konturbreite des Elements entspricht physisch seiner definierten Konturbreite, selbst wenn das Element aufgrund von Transformationen an ihm selbst oder seinem Koordinatensystem vergrößert oder verkleinert wurde. Dies gilt sowohl, wenn das Element mittels Transformationen skaliert wird, als auch bei einer physischen Größenänderung des gesamten Bildes.

> [!NOTE]
> Die Spezifikation definiert drei weitere Werte, `non-scaling-size`, `non-rotation` und `fixed-position`, aber diese verfügen über keine Implementierungen und gelten als gefährdet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern der Skalierung von SVG-Konturen mit CSS

Hier beginnen wir mit einem SVG-Bild der Größe 200x100, das zwei Rechtecke innerhalb einer Gruppe enthält. Die Gruppe wird vergrößert und gedreht. Das zweite der beiden Rechtecke hat die Klasse `thinned`.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <g
    transform="scale(2.3) rotate(23)"
    transform-origin="100 50"
    stroke-width="3"
    stroke="orange"
    fill="#ddeeff88">
    <rect x=" 60" y="20" width="30" height="60" />
    <rect x="110" y="20" width="30" height="60" class="thinned" />
  </g>
</svg>
```

Auf dieses SVG-Bild wenden wir `width: 500px` an, um es größer als seine intrinsische Größe zu machen, und legen fest, dass das mit einer Klasse versehene {{SVGElement("rect")}} nicht skalierte Konturen hat.

```css
svg {
  width: 500px;
}
svg rect.thinned {
  vector-effect: non-scaling-stroke;
}
```

Das Ergebnis ist, dass das erste der beiden Rechtecke eine scheinbare (visuelle) Konturbreite von ungefähr 17 hat, während das zweite Rechteck trotz derselben Vergrößerung weiterhin eine scheinbare Konturbreite von 3 besitzt.

{{EmbedLiveSample("Preventing SVG stroke scaling with CSS", "500", "250")}}

### Überschreiben von SVG-Konturskalierungswerten mit CSS

In diesem Fall beginnen wir mit einem ähnlichen SVG-Bild wie dem im vorherigen Beispiel verwendeten. Hier wird das Element {{SVGElement("g")}} wie zuvor gedreht, jedoch nicht skaliert. Den `<rect>`-Elementen wird ein gemeinsamer Ursprung für ihre Transformationen gegeben, und ihre `vector-effect`-SVG-Attribute werden auf den Wert `none` gesetzt.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <g
    transform="rotate(23)"
    transform-origin="100 50"
    stroke-width="3"
    stroke="orange"
    fill="#ddeeff88">
    <rect
      x=" 60"
      y="20"
      width="30"
      height="60"
      transform-origin="100 50"
      vector-effect="none" />
    <rect
      x="110"
      y="20"
      width="30"
      height="60"
      transform-origin="100 50"
      vector-effect="none"
      class="thinned" />
  </g>
</svg>
```

Wie zuvor wird das SVG mithilfe von CSS größer als seine intrinsische Größe gemacht. Dieses Mal wird die Skalierung direkt auf die `<rect>`-Elemente angewendet, und das zweite Rechteck wird so festgelegt, dass seine Konturen nicht skaliert werden.

```css
svg {
  width: 500px;
}
svg rect {
  transform: scale(2.3);
}
svg rect.thinned {
  vector-effect: non-scaling-stroke;
}
```

Das Ergebnis ist visuell identisch mit dem des vorherigen Beispiels. Wir können sehen, dass der Attributwert `none` durch den CSS-Wert `non-scaling-stroke` überschrieben wird und dass die Vektoreffekte berücksichtigt werden, obwohl die Skalierung direkt auf dem `<rect>` und nicht auf seinem übergeordneten `<g>`-Element vorgenommen wurde.

{{EmbedLiveSample("Overriding SVG stroke scaling values with CSS", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke")}}
- Datentyp {{cssxref("basic-shape")}}
- SVG-Attribut {{SVGAttr("vector-effect")}}
