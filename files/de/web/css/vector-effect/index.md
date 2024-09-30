---
title: vector-effect
slug: Web/CSS/vector-effect
l10n:
  sourceCommit: 448c98d691400174814c4666afdc52e022f428ef
---

{{CSSRef}}

Die **`vector-effect`** [CSS](/de/docs/Web/CSS) Eigenschaft unterdrückt bestimmte [Transformationseffekte](/de/docs/Web/SVG/Attribute/transform) in SVG und ermöglicht so, dass Effekte wie eine Straße auf einer Karte unabhängig vom Zoom dieselbe Breite behalten, oder dass eine Diagrammlegende unabhängig von anderen Transformationen ihre Position und Größe beibehält. Sie kann nur mit SVG-Elementen verwendet werden, die das {{SVGAttr("vector-effect")}} Attribut akzeptieren. Wird sie verwendet, überschreibt der CSS-Wert alle Werte des `vector-effect` Attributs des Elements.

## Syntax

```css
/* Keywords */
vector-effect: none;
vector-effect: non-scaling-stroke;
vector-effect: non-scaling-size;
vector-effect: non-rotation;
vector-effect: fixed-position;

/* Global values */
vector-effect: inherit;
vector-effect: initial;
vector-effect: revert;
vector-effect: revert-layer;
vector-effect: unset;
```

### Werte

- `none`

  - : Keine Vektoreffekte werden auf das Element angewendet, was bedeutet, dass es vollständig wie gewohnt von Transformationen betroffen ist.

- `non-scaling-stroke`

  - : Die gezeichnete Strichbreite des Elements entspricht physisch der definierten Strichbreite, selbst wenn das Element aufgrund von Transformationen entweder des Elements selbst oder seines Koordinatensystems vergrößert oder verkleinert wurde. Dies gilt sowohl bei Transformationen als auch bei physischer Größenänderung des gesamten Bildes.

- `non-scaling-size` {{Experimental_Inline}}

  - : Das Element ignoriert die Effekte von Skalierungstransformationen.

- `non-rotation` {{Experimental_Inline}}

  - : Das Element ignoriert die Effekte von Rotationsveränderungen.

- `fixed-position` {{Experimental_Inline}}

  - : Das Element ignoriert die Effekte von Übersetzungstransformationen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern der Skalierung von SVG-Strichen mit CSS

Hier beginnen wir mit einem 200x100 SVG-Bild, das zwei Rechtecke in einer Gruppe enthält. Die Gruppe wird vergrößert und gedreht. Das zweite der beiden Rechtecke hat die Klasse `thinned`.

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

Bei diesem SVG-Bild wenden wir `width: 500px` an, um es größer als seine intrinsische Größe zu machen, und setzen das mit einer Klasse versehene {{SVGElement("rect")}} auf nicht skalierte Striche.

```css
svg {
  width: 500px;
}
svg rect.thinned {
  vector-effect: non-scaling-stroke;
}
```

Das Ergebnis ist, dass das erste der beiden Rechtecke eine scheinbare (visuelle) Strichbreite von ungefähr 17 hat, während das zweite Rechteck trotz gleicher Skalierung wie das erste eine scheinbare Strichbreite von 3 beibehält.

{{EmbedLiveSample("Preventing SVG stroke scaling with CSS", "500", "250")}}

### Überschreiben von SVG-Streichskalierungswerten mit CSS

In diesem Fall beginnen wir mit einem ähnlichen SVG-Bild wie im vorherigen Beispiel. Hier wird das {{SVGElement("g")}} Element wie zuvor rotiert, aber es wird keine Skalierung darauf angewendet. Die `<rect>` Elemente haben einen gemeinsamen Ursprung für ihre Transformationen und ihre `vector-effect` SVG-Attribute sind auf den Wert `none` gesetzt.

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

Wie zuvor wird das SVG mit CSS größer als seine intrinsische Größe gemacht. Diesmal wird die Skalierung direkt auf die `<rect>` Elemente angewendet, und das zweite Rechteck wird so eingestellt, dass seine Striche nicht skaliert werden.

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

Das Ergebnis ist visuell identisch mit dem des vorherigen Beispiels. Was wir sehen, ist, dass der Attributwert `none` von dem CSS-Wert `non-scaling-stroke` überschrieben wird und dass die Vektoreffekte berücksichtigt werden, obwohl die Skalierung direkt am `<rect>` statt an seinem übergeordneten `<g>` Element vorgenommen wurde.

{{EmbedLiveSample("Overriding SVG stroke scaling values with CSS", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke")}}
- {{cssxref("basic-shape")}} Datentyp
- SVG {{SVGAttr("vector-effect")}} Attribut
