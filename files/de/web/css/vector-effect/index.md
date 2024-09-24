---
title: vector-effect
slug: Web/CSS/vector-effect
l10n:
  sourceCommit: 448c98d691400174814c4666afdc52e022f428ef
---

{{CSSRef}}

Die **`vector-effect`** [CSS](/de/docs/Web/CSS)-Eigenschaft unterdrückt spezifische [Transformationseffekte](/de/docs/Web/SVG/Attribute/transform) in SVG. Dadurch können Effekte wie eine Straße auf einer Karte dieselbe Breite behalten, egal wie stark die Karte vergrößert wird, oder ein Diagrammschlüssel seine Position und Größe unabhängig von anderen Transformationen beibehalten. Sie kann nur mit SVG-Elementen verwendet werden, die das Attribut {{SVGAttr("vector-effect")}} akzeptieren. Bei Verwendung überschreibt der CSS-Wert alle Werte des `vector-effect`-Attributs des Elements.

## Syntax

```css
/* Schlüsselwörter */
vector-effect: none;
vector-effect: non-scaling-stroke;
vector-effect: non-scaling-size;
vector-effect: non-rotation;
vector-effect: fixed-position;

/* Globale Werte */
vector-effect: inherit;
vector-effect: initial;
vector-effect: revert;
vector-effect: revert-layer;
vector-effect: unset;
```

### Werte

- `none`

  - : Es werden keine Vektoreffekte auf das Element angewendet, was bedeutet, dass es vollständig von Transformationen betroffen sein wird, wie normal.

- `non-scaling-stroke`

  - : Die gezeichnete Strichstärke des Elements wird physisch gleich groß sein wie die definierte Strichstärke, selbst wenn das Element durch Transformationen entweder seiner selbst oder seines Koordinatensystems vergrößert oder verkleinert wurde. Dies gilt unabhängig davon, ob das Element durch Transformationen oder durch physische Größenänderung des gesamten Bildes skaliert wurde.

- `non-scaling-size` {{Experimental_Inline}}

  - : Das Element ignoriert die Auswirkungen jeglicher Skalentransformationen.

- `non-rotation` {{Experimental_Inline}}

  - : Das Element ignoriert die Auswirkungen jeglicher Rotationstransformationen.

- `fixed-position` {{Experimental_Inline}}

  - : Das Element ignoriert die Auswirkungen jeglicher Verschiebungstransformationen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern des SVG-Strichskalierens mit CSS

Hier beginnen wir mit einem 200x100 SVG-Bild, das zwei Rechtecke innerhalb einer Gruppe enthält. Die Gruppe wird vergrößert und rotiert. Das zweite der beiden Rechtecke hat eine Klasse von `thinned`.

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

Auf dieses SVG-Bild wenden wir `width: 500px` an, um es größer als seine intrinsische Größe zu machen, und setzen das klassifizierte {{SVGElement("rect")}} so, dass seine Striche nicht skaliert werden.

```css
svg {
  width: 500px;
}
svg rect.thinned {
  vector-effect: non-scaling-stroke;
}
```

Das Ergebnis ist, dass das erste der beiden Rechtecke eine scheinbare (visuelle) Strichbreite von ungefähr 17 hat, während das zweite Rechteck trotz der gleichen Vergrößerung wie das erste Rechteck immer noch eine scheinbare Strichbreite von 3 hat.

{{EmbedLiveSample("Preventing SVG stroke scaling with CSS", "500", "250")}}

### Überschreiben von SVG-Strichskalierungswerten mit CSS

In diesem Fall beginnen wir mit einem ähnlichen SVG-Bild wie im vorherigen Beispiel. Hier wird das {{SVGElement("g")}}-Element wie zuvor rotiert, jedoch wird keine Skalierung darauf angewendet. Die `<rect>`-Elemente erhalten einen gemeinsamen Ursprung für ihre Transformationen, und ihre `vector-effect` SVG-Attribute werden auf einen Wert von `none` gesetzt.

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

Wie zuvor wird das SVG mittels CSS größer als seine intrinsische Größe gemacht. Dieses Mal wird die Skalierung direkt auf die `<rect>`-Elemente angewendet, und das zweite Rechteck wird so eingestellt, dass seine Striche nicht skaliert werden.

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

Das Ergebnis ist visuell identisch mit dem des vorherigen Beispiels. Wir sehen, dass der Attributwert `none` durch den CSS-Wert `non-scaling-stroke` überschrieben wird, und dass die Vektoreffekte beachtet werden, obwohl die Skalierung direkt auf das `<rect>` anstatt auf das übergeordnete `<g>`-Element angewendet wurde.

{{EmbedLiveSample("Overriding SVG stroke scaling values with CSS", "500", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke")}}
- {{cssxref("basic-shape")}} Datentyp
- SVG {{SVGAttr("vector-effect")}} Attribut
