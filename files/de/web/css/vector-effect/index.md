---
title: vector-effect
slug: Web/CSS/vector-effect
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`vector-effect`** [CSS](/de/docs/Web/CSS)-Eigenschaft unterdrückt bestimmte [Transformationseffekte](/de/docs/Web/SVG/Reference/Attribute/transform) in SVG, wodurch Effekte wie eine Straße auf einer Karte dieselbe Breite beibehalten, unabhängig davon, wie die Karte gezoomt wird, oder ein Diagrammschlüssel seine Position und Größe unabhängig von anderen Transformationen beibehält. Sie kann nur mit SVG-Elementen verwendet werden, die das {{SVGAttr("vector-effect")}}-Attribut akzeptieren. Bei Verwendung überschreibt der CSS-Wert alle Werte des `vector-effect`-Attributs des Elements.

## Syntax

```css
/* Keywords */
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

- `none`
  - : Keine Vektoreffekte werden auf das Element angewendet, was bedeutet, dass es vollständig von Transformationen betroffen ist wie gewohnt.
- `non-scaling-stroke`
  - : Die gezeichnete Strichbreite des Elements bleibt physisch gleich groß wie die definierte Strichbreite, selbst wenn das Element durch Transformationen entweder des Elements selbst oder seines Koordinatensystems vergrößert oder verkleinert wurde. Dies gilt sowohl, wenn das Element mit Transformationen skaliert wird, als auch bei physischer Größenänderung des gesamten Bildes.

> [!NOTE]
> Die Spezifikation definiert drei weitere Werte, `non-scaling-size`, `non-rotation` und `fixed-position`, aber diese haben keine Implementierungen und gelten als gefährdet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern von SVG-Strichskalierung mit CSS

Hier beginnen wir mit einem 200x100 SVG-Bild, das zwei Rechtecke innerhalb einer Gruppe enthält. Die Gruppe wird vergrößert und rotiert. Das zweite der beiden Rechtecke hat eine Klasse namens `thinned`.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <g
    transform="scale(2.3) rotate(23)"
    transform-origin="100 50"
    stroke-width="3"
    stroke="orange"
    fill="#DEF8">
    <rect x=" 60" y="20" width="30" height="60" />
    <rect x="110" y="20" width="30" height="60" class="thinned" />
  </g>
</svg>
```

Auf dieses SVG-Bild wenden wir `width: 500px` an, um es größer als seine intrinsische Größe zu machen, und setzen das klassifizierte {{SVGElement("rect")}} auf nicht skalierte Striche.

```css
svg {
  width: 500px;
}
svg rect.thinned {
  vector-effect: non-scaling-stroke;
}
```

Das Ergebnis ist, dass das erste der beiden Rechtecke eine scheinbare (visuelle) Strichbreite von ungefähr 17 hat, während das zweite Rechteck immer noch eine scheinbare Strichbreite von 3 hat, obwohl es auf die gleiche Weise wie das erste Rechteck skaliert wurde.

{{EmbedLiveSample("Verhindern von SVG-Strichskalierung mit CSS", "500", "250")}}

### Überschreiben von SVG-Strichskalierungswerten mit CSS

In diesem Fall beginnen wir mit einem ähnlichen SVG-Bild wie im vorherigen Beispiel. Hier wird das {{SVGElement("g")}}-Element wie zuvor rotiert, es wird jedoch keine Skalierung angewendet. Die `<rect>`-Elemente haben einen gemeinsamen Ursprung für ihre Transformationen und haben ihre `vector-effect` SVG-Attribute auf den Wert `none` gesetzt.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <g
    transform="rotate(23)"
    transform-origin="100 50"
    stroke-width="3"
    stroke="orange"
    fill="#DEF8">
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

Wie zuvor wird das SVG mit CSS größer als seine intrinsische Größe gemacht. Dieses Mal wird die Skalierung direkt auf die `<rect>`-Elemente angewendet, und das zweite Rechteck wird auf nicht skalierte Striche gesetzt.

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

Das Ergebnis ist visuell identisch mit dem des vorherigen Beispiels. Was wir sehen können, ist, dass der Attributwert von `none` durch den CSS-Wert `non-scaling-stroke` überschrieben wird und dass die Vektoreffekte respektiert werden, obwohl die Skalierung direkt am `<rect>` statt an seinem übergeordneten `<g>`-Element vorgenommen wurde.

{{EmbedLiveSample("Überschreiben von SVG-Strichskalierungswerten mit CSS", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke")}}
- {{cssxref("basic-shape")}} Datentyp
- SVG {{SVGAttr("vector-effect")}} Attribut
