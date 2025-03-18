---
title: vector-effect
slug: Web/CSS/vector-effect
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Die **`vector-effect`** [CSS](/de/docs/Web/CSS)-Eigenschaft unterdrückt bestimmte [Transformationseffekte](/de/docs/Web/SVG/Reference/Attribute/transform) in SVG, wodurch Effekte ermöglicht werden wie eine Straße auf einer Karte, die unabhängig vom Zoom der Karte dieselbe Breite behält, oder ein Diagrammschlüssel, der seine Position und Größe unabhängig von anderen Transformationen beibehält. Sie kann nur mit SVG-Elementen verwendet werden, die das Attribut {{SVGAttr("vector-effect")}} akzeptieren. Bei Verwendung überschreibt der CSS-Wert alle Werte des `vector-effect`-Attributs des Elements.

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
  - : Keine Vektoreffekte werden auf das Element angewendet, was bedeutet, dass es vollständig von Transformationen normal beeinflusst wird.
- `non-scaling-stroke`
  - : Die gezeichnete Strichbreite des Elements wird physikalisch gleich groß sein wie die definierte Strichbreite, selbst wenn das Element durch Transformationen entweder seiner selbst oder seines Koordinatensystems skaliert wurde. Dies gilt sowohl bei der Skalierung des Elements durch Transformationen als auch bei der physischen Größenänderung des gesamten Bildes.

> [!NOTE]
> Die Spezifikation definiert drei weitere Werte, `non-scaling-size`, `non-rotation` und `fixed-position`, aber diese wurden nicht implementiert und gelten als risikobehaftet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern der SVG-Strichskalierung mit CSS

Hier beginnen wir mit einem 200x100 SVG-Bild, das zwei Rechtecke innerhalb einer Gruppe enthält. Die Gruppe wird vergrößert und rotiert. Das zweite der beiden Rechtecke hat die Klasse `thinned`.

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

Für dieses SVG-Bild wenden wir `width: 500px` an, um es größer als seine intrinsische Größe zu machen, und setzen das klassengekennzeichnete {{SVGElement("rect")}} auf nicht skalierte Striche.

```css
svg {
  width: 500px;
}
svg rect.thinned {
  vector-effect: non-scaling-stroke;
}
```

Das Ergebnis ist, dass das erste der beiden Rechtecke eine scheinbare (visuelle) Strichbreite von etwa 17 hat, während das zweite Rechteck trotz gleicher Skalierung wie das erste eine scheinbare Strichbreite von 3 behält.

{{EmbedLiveSample("Preventing SVG stroke scaling with CSS", "500", "250")}}

### Übersteuern von SVG-Strichskalierungswerten mit CSS

In diesem Fall beginnen wir mit einem ähnlichen SVG-Bild wie im vorherigen Beispiel. Hier wird das {{SVGElement("g")}}-Element wie zuvor rotiert, jedoch ohne Skalierung angewendet. Die `<rect>`-Elemente haben einen gemeinsamen Ursprung für ihre Transformationen und ihre `vector-effect` SVG-Attribute sind auf einen Wert von `none` gesetzt.

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

Wie zuvor wird das SVG mit CSS größer als seine intrinsische Größe gemacht. Diesmal wird die Skalierung direkt auf die `<rect>`-Elemente angewendet, und das zweite Rechteck wird so eingestellt, dass seine Striche nicht skaliert sind.

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

Das Ergebnis ist visuell identisch mit dem des vorherigen Beispiels. Wir können sehen, dass der Attributwert von `none` durch den CSS-Wert `non-scaling-stroke` überschrieben wird und die Vektoreffekte beachtet werden, obwohl die Skalierung direkt auf dem `<rect>` anstelle des übergeordneten `<g>`-Elements vorgenommen wurde.

{{EmbedLiveSample("Overriding SVG stroke scaling values with CSS", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke")}}
- {{cssxref("basic-shape")}} Datentyp
- SVG {{SVGAttr("vector-effect")}} Attribut
