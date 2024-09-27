---
title: vector-effect
slug: Web/CSS/vector-effect
l10n:
  sourceCommit: 448c98d691400174814c4666afdc52e022f428ef
---

{{CSSRef}}

Die **`vector-effect`** [CSS](/de/docs/Web/CSS) Eigenschaft unterdrückt bestimmte [Transformationseffekte](/de/docs/Web/SVG/Attribute/transform) in SVGs und ermöglicht Effekte wie das gleichbleibende Breitenverhältnis einer Straße auf einer Karte, unabhängig davon, wie stark in die Karte gezoomt wird, oder das beibehalten der Position und Größe eines Diagrammschlüssels, unabhängig von anderen Transformationen. Sie kann nur mit SVG-Elementen verwendet werden, die das {{SVGAttr("vector-effect")}} Attribut akzeptieren. Wenn es angewendet wird, überschreibt der CSS-Wert alle Werte des `vector-effect` Attributs des Elements.

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

  - : Es werden keine Vektoreffekte auf das Element angewendet, was bedeutet, dass es vollständig von Transformationen wie gewohnt beeinflusst wird.

- `non-scaling-stroke`

  - : Die gezeichnete Strichbreite des Elements bleibt physisch gleich groß wie die definierte Strichbreite, selbst wenn das Element in seiner Größe aufgrund von Transformationen des Elements selbst oder seines Koordinatensystems vergrößert oder verkleinert wurde. Dies gilt unabhängig davon, ob das Element mit Transformationen oder durch physische Größenänderung des gesamten Bildes skaliert wird.

- `non-scaling-size` {{Experimental_Inline}}

  - : Das Element ignoriert die Effekte jeglicher Skalentransformationen.

- `non-rotation` {{Experimental_Inline}}

  - : Das Element ignoriert die Effekte jeglicher Rotations-Transformationen.

- `fixed-position` {{Experimental_Inline}}

  - : Das Element ignoriert die Effekte jeglicher Übersetzungstransformationen.

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

Auf dieses SVG-Bild wenden wir `width: 500px` an, um es größer als seine intrinsische Größe zu machen, und setzen das klassierte {{SVGElement("rect")}} so, dass die Striche nicht skaliert werden.

```css
svg {
  width: 500px;
}
svg rect.thinned {
  vector-effect: non-scaling-stroke;
}
```

Das Ergebnis ist, dass das erste der beiden Rechtecke eine scheinbare (visuelle) Strichbreite von ungefähr 17 hat, während das zweite Rechteck trotz der gleichen Skalierung immer noch eine scheinbare Strichbreite von 3 hat.

{{EmbedLiveSample("Verhindern der SVG-Strichskalierung mit CSS", "500", "250")}}

### Überschreiben von SVG-Strichskalierungswerten mit CSS

In diesem Fall beginnen wir mit einem ähnlichen SVG-Bild wie im vorherigen Beispiel. Hier wird das {{SVGElement("g")}} Element wie zuvor rotiert, jedoch ohne darauf angewendete Skalierung. Die `<rect>` Elemente haben einen gemeinsamen Ursprung für ihre Transformationen und ihre `vector-effect` SVG-Attribute sind auf den Wert `none` gesetzt.

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

Wie zuvor wird das SVG größer als seine intrinsische Größe mittels CSS gemacht. Dieses Mal wird die Skalierung direkt auf die `<rect>` Elemente angewendet, und das zweite Rechteck wird so eingestellt, dass seine Striche nicht skaliert sind.

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

Das Ergebnis ist visuell identisch mit dem des vorherigen Beispiels. Was wir sehen können, ist, dass der Attributwert `none` vom CSS-Wert `non-scaling-stroke` überschrieben wird und dass die Vektoreffekte beachtet werden, obwohl die Skalierung direkt am `<rect>` anstelle des übergeordneten `<g>` Elements vorgenommen wurde.

{{EmbedLiveSample("Überschreiben von SVG-Strichskalierungswerten mit CSS", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke")}}
- {{cssxref("basic-shape")}} Datentyp
- SVG {{SVGAttr("vector-effect")}} Attribut
