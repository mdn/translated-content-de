---
title: vector-effect
slug: Web/CSS/Reference/Properties/vector-effect
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`vector-effect`** [CSS](/de/docs/Web/CSS)-Eigenschaft unterdrückt bestimmte [Transformationseffekte](/de/docs/Web/SVG/Reference/Attribute/transform) in SVG und ermöglicht so Effekte wie eine Straße auf einer Karte, die unabhängig vom Zoom derselben Breite bleibt, oder ein Diagrammschlüssel, der seine Position und Größe unabhängig von anderen Transformationen beibehält. Sie kann nur mit SVG-Elementen verwendet werden, die das Attribut {{SVGAttr("vector-effect")}} akzeptieren. Bei Verwendung überschreibt der CSS-Wert alle Werte des `vector-effect`-Attributs des Elements.

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
  - : Es werden keine Vektoreffekte auf das Element angewendet, was bedeutet, dass es vollständig von Transformationen wie üblich beeinflusst wird.
- `non-scaling-stroke`
  - : Die gezeichnete Strichbreite des Elements entspricht physisch ihrer definierten Strichbreite, selbst wenn das Element aufgrund von Transformationen entweder seiner selbst oder seines Koordinatensystems vergrößert oder verkleinert wurde. Dies gilt sowohl für Skalierungen durch Transformationen als auch für physische Größenänderungen des gesamten Bildes.

> [!NOTE]
> Die Spezifikation definiert drei weitere Werte, `non-scaling-size`, `non-rotation` und `fixed-position`, diese sind jedoch nicht implementiert und gelten als risikobehaftet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern der SVG-Strichskalierung mit CSS

Hier starten wir mit einer 200x100 SVG-Graphik, die zwei Rechtecke innerhalb einer Gruppe enthält. Die Gruppe wird vergrößert und rotiert. Das zweite der beiden Rechtecke hat die Klasse `thinned`.

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

Auf dieses SVG-Bild wenden wir `width: 500px` an, um es größer als seine intrinsische Größe zu machen, und setzen das klassifizierte {{SVGElement("rect")}}, damit die Striche nicht skaliert werden.

```css
svg {
  width: 500px;
}
svg rect.thinned {
  vector-effect: non-scaling-stroke;
}
```

Das Ergebnis ist, dass das erste der beiden Rechtecke eine scheinbare (visuelle) Strichbreite von ungefähr 17 hat, während das zweite Rechteck trotz derselben Skalierung eine scheinbare Strichbreite von 3 hat.

{{EmbedLiveSample("Preventing SVG stroke scaling with CSS", "500", "250")}}

### Überschreiben von SVG-Strichskalierungswerten mit CSS

In diesem Fall beginnen wir mit einem ähnlichen SVG-Bild wie im vorherigen Beispiel. Hier wird das {{SVGElement("g")}}-Element wie zuvor gedreht, aber es wird keine Skalierung darauf angewendet. Die `<rect>`-Elemente haben einen gemeinsamen Transformationsursprung und ihre `vector-effect`-SVG-Attribute sind auf einen Wert von `none` gesetzt.

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

Wie zuvor wird das SVG mit CSS größer als seine intrinsische Größe gemacht. Dieses Mal wird die Skalierung direkt auf die `<rect>`-Elemente angewendet, und das zweite Rechteck wird so eingestellt, dass seine Striche nicht skaliert werden.

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

Das Ergebnis ist visuell identisch mit dem des vorherigen Beispiels. Was wir sehen können, ist, dass der Attributwert `none` vom CSS-Wert `non-scaling-stroke` überschrieben wird, und dass die Vektoreffekte beachtet werden, obwohl die Skalierung direkt auf den `<rect>` anstelle des Elternelements `<g>` angewendet wurde.

{{EmbedLiveSample("Overriding SVG stroke scaling values with CSS", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke")}}
- {{cssxref("basic-shape")}} Datentyp
- SVG {{SVGAttr("vector-effect")}} Attribut
