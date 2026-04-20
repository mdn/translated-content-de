---
title: "`vector-effect` CSS property"
short-title: vector-effect
slug: Web/CSS/Reference/Properties/vector-effect
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`vector-effect`** [CSS](/de/docs/Web/CSS)-Eigenschaft unterdrückt bestimmte [Transformationseffekte](/de/docs/Web/SVG/Reference/Attribute/transform) in SVG und ermöglicht so Effekte wie z.B., dass eine Straße auf einer Karte die gleiche Breite beibehält, egal wie stark die Karte gezoomt wird, oder dass ein Diagrammschlüssel seine Position und Größe unabhängig von anderen Transformationen beibehält. Es kann nur mit SVG-Elementen verwendet werden, die das {{SVGAttr("vector-effect")}}-Attribut akzeptieren. Wenn es verwendet wird, überschreibt der CSS-Wert alle Werte des `vector-effect`-Attributs des Elements.

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
  - : Es werden keine Vektoreffekte auf das Element angewendet, was bedeutet, dass es vollständig durch Transformationen wie gewohnt beeinflusst wird.
- `non-scaling-stroke`
  - : Die gezeichnete Strichbreite des Elements wird physisch gleich groß sein wie die definierte Strichbreite, auch wenn das Element aufgrund von Transformationen entweder für sich selbst oder für sein Koordinatensystem skaliert wurde. Dies ist der Fall, ob das Element mit Transformationen oder durch physikalisches Vergrößern des gesamten Bildes skaliert wird.

> [!NOTE]
> Die Spezifikation definiert drei weitere Werte, `non-scaling-size`, `non-rotation` und `fixed-position`, aber diese haben keine Implementierungen und gelten als gefährdet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern der SVG-Strichskalierung mit CSS

Hier beginnen wir mit einem 200x100 SVG-Bild, das zwei Rechtecke in einer Gruppe enthält. Die Gruppe wird vergrößert und gedreht. Das zweite der beiden Rechtecke hat eine Klasse namens `thinned`.

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

Auf dieses SVG-Bild wenden wir `width: 500px` an, um es größer als seine intrinsische Größe zu machen, und setzen das klassifizierte {{SVGElement("rect")}} so, dass seine Striche nicht skaliert werden.

```css
svg {
  width: 500px;
}
svg rect.thinned {
  vector-effect: non-scaling-stroke;
}
```

Das Ergebnis ist, dass das erste der beiden Rechtecke eine scheinbare (visuelle) Strichbreite von ungefähr 17 hat, während das zweite Rechteck trotz derselben Vergrößerung wie das erste Rechteck immer noch eine scheinbare Strichbreite von 3 hat.

{{EmbedLiveSample("Preventing SVG stroke scaling with CSS", "500", "250")}}

### Überschreiben der SVG-Strichskalierungswerte mit CSS

In diesem Fall beginnen wir mit einem ähnlichen SVG-Bild wie im vorherigen Beispiel. Hier wird das {{SVGElement("g")}}-Element wie zuvor gedreht, jedoch keine Skalierung darauf angewendet. Die `<rect>`-Elemente haben einen gemeinsamen Ursprung für ihre Transformationen und haben ihre `vector-effect`-SVG-Attribute auf einen Wert von `none` gesetzt.

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

Wie zuvor wird das SVG mit CSS größer als seine intrinsische Größe gemacht. Diesmal wird die Skalierung direkt auf die `<rect>`-Elemente angewendet, und das zweite Rechteck wird so eingestellt, dass seine Striche nicht skaliert werden.

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

Das Ergebnis ist visuell identisch mit dem des vorherigen Beispiels. Was wir sehen können, ist, dass der Attributwert von `none` durch den CSS-Wert `non-scaling-stroke` überschrieben wird und dass die Vektoreffekte berücksichtigt werden, obwohl die Skalierung direkt am `<rect>` und nicht am übergeordneten `<g>`-Element vorgenommen wurde.

{{EmbedLiveSample("Overriding SVG stroke scaling values with CSS", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke")}}
- {{cssxref("basic-shape")}} Datentyp
- SVG {{SVGAttr("vector-effect")}} Attribut
