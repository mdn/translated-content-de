---
title: vector-effect
slug: Web/CSS/vector-effect
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`vector-effect`** [CSS](/de/docs/Web/CSS)-Eigenschaft unterdrückt spezifische [Transformationseffekte](/de/docs/Web/SVG/Reference/Attribute/transform) in SVG und ermöglicht dadurch Effekte wie eine Straße auf einer Karte, die unabhängig vom Zoomlevel immer gleich breit bleibt, oder ein Diagrammschlüssel, der seine Position und Größe beibehält, unabhängig von anderen Transformationen. Sie kann nur mit SVG-Elementen verwendet werden, die das {{SVGAttr("vector-effect")}}-Attribut akzeptieren. Wenn verwendet, überschreibt der CSS-Wert alle Werte des `vector-effect`-Attributs des Elements.

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
  - : Es werden keine Vektoreffekte auf das Element angewendet, was bedeutet, dass es vollständig von Transformationen wie gewohnt betroffen ist.
- `non-scaling-stroke`
  - : Die gezogene Strichbreite des Elements wird physisch gleich groß sein wie die definierte Strichbreite, auch wenn das Element aufgrund von Transformationen entweder des Elements selbst oder seines Koordinatensystems vergrößert oder verkleinert wurde. Dies ist der Fall, unabhängig davon, ob das Element mit Transformationen oder durch physische Größenänderung des gesamten Bildes skaliert wird.

> [!NOTE]
> Die Spezifikation definiert drei weitere Werte, `non-scaling-size`, `non-rotation` und `fixed-position`, aber diese haben keine Implementierungen und werden als unsicher betrachtet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern des Skalierens von SVG-Strichen mit CSS

Hier beginnen wir mit einem 200x100 SVG-Bild, das zwei Rechtecke in einer Gruppe enthält. Die Gruppe wird vergrößert und rotiert. Das zweite der beiden Rechtecke hat die Klasse `thinned`.

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

Wir wenden auf dieses SVG-Bild `width: 500px` an, um es größer als seine intrinsische Größe zu machen, und setzen das klassifizierte {{SVGElement("rect")}}, damit die Striche nicht skaliert werden.

```css
svg {
  width: 500px;
}
svg rect.thinned {
  vector-effect: non-scaling-stroke;
}
```

Das Ergebnis ist, dass das erste der beiden Rechtecke eine scheinbare (visuelle) Strichbreite von etwa 17 hat, während das zweite Rechteck immer noch eine scheinbare Strichbreite von 3 hat, obwohl es auf die gleiche Weise wie das erste Rechteck vergrößert wurde.

{{EmbedLiveSample("Preventing SVG stroke scaling with CSS", "500", "250")}}

### Überschreiben von SVG-Strichskalierungswerten mit CSS

In diesem Fall beginnen wir mit einem ähnlichen SVG-Bild wie im vorherigen Beispiel. Hier wird das {{SVGElement("g")}}-Element wie zuvor rotiert, es wird jedoch keine Skalierung darauf angewendet. Die `<rect>`-Elemente haben einen gemeinsamen Ursprung für ihre Transformationen und ihre `vector-effect`-SVG-Attribute sind auf einen Wert von `none` gesetzt.

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

Wie zuvor wird das SVG durch CSS größer als seine intrinsische Größe gemacht. Dieses Mal wird die Skalierung direkt auf die `<rect>`-Elemente angewendet, und das zweite Rechteck wird so eingestellt, dass seine Striche nicht skaliert werden.

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

Das Ergebnis ist visuell identisch mit dem des vorherigen Beispiels. Was wir sehen, ist, dass der Attributwert von `none` durch den CSS-Wert `non-scaling-stroke` überschrieben wird und dass die Vektoreffekte berücksichtigt werden, obwohl die Skalierung direkt auf die `<rect>`-Elemente anstelle seines übergeordneten `<g>`-Elements angewendet wurde.

{{EmbedLiveSample("Overriding SVG stroke scaling values with CSS", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke")}}
- {{cssxref("basic-shape")}} Datentyp
- SVG {{SVGAttr("vector-effect")}} Attribut
