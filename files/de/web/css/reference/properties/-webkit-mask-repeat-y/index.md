---
title: "`-webkit-mask-repeat-y` CSS property"
short-title: -webkit-mask-repeat-y
slug: Web/CSS/Reference/Properties/-webkit-mask-repeat-y
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

{{Non-standard_header}}

Die Eigenschaft `-webkit-mask-repeat-y` legt fest, ob und wie ein Maskenbild vertikal wiederholt (gekachelt) wird.

## Syntax

```css
/* Keyword values */
-webkit-mask-repeat-y: repeat;
-webkit-mask-repeat-y: no-repeat;
-webkit-mask-repeat-y: space;
-webkit-mask-repeat-y: round;

/* Multiple values */
-webkit-mask-repeat-y: repeat, no-repeat, space;

/* Global values */
-webkit-mask-repeat-y: inherit;
-webkit-mask-repeat-y: initial;
-webkit-mask-repeat-y: revert;
-webkit-mask-repeat-y: revert-layer;
-webkit-mask-repeat-y: unset;
```

### Werte

Diese Eigenschaft wird als ein oder mehrere durch Kommas getrennte Werte angegeben:

- `repeat`
  - : Das Maskenbild wird vertikal wiederholt.
- `no-repeat`
  - : Das Maskenbild wird vertikal nicht wiederholt; in dieser Richtung wird nur eine Kopie des Maskenbilds gezeichnet. Der vertikale verbleibende Bereich des Inhalts des maskierten Elements wird nicht angezeigt.
- `space`
  - : Das Bild wird so oft wie möglich ohne Beschneidung wiederholt. Das erste und letzte Bild werden am oberen bzw. unteren Rand des Elements ausgerichtet, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("mask-position")}} wird ignoriert, es sei denn, nur ein Bild kann ohne Beschneidung angezeigt werden. Der einzige Fall, in dem bei Verwendung von space eine Beschneidung erfolgt, ist, wenn nicht genügend Platz vorhanden ist, um ein Bild anzuzeigen.
- `round`
  - : Wenn der verfügbare vertikale Bereich größer wird, werden die wiederholten Bilder gestreckt (ohne Lücken), bis Platz für ein weiteres Bild vorhanden ist. Wenn das nächste Bild hinzugefügt wird, werden alle aktuellen Bilder komprimiert, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Höhe von 260px, das dreimal wiederholt wird, kann gestreckt werden, bis jede Wiederholung 300px hoch ist; anschließend wird ein weiteres Bild hinzugefügt. Danach werden sie auf eine Höhe von 225px komprimiert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-repeat-y = [ repeat | no-repeat | space | round ]#`)}}

## Beispiele

### Verwendung eines wiederholten oder nicht wiederholten Maskenbilds

```css
.example-one {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-y: repeat;
}

.example-two {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-y: no-repeat;
}
```

### Verwendung mehrerer Maskenbilder

Sie können für jedes Maskenbild einen unterschiedlichen `<repeat-style>` angeben, getrennt durch Kommas:

```css
.example-three {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-y: repeat, space;
}
```

Jedes Bild wird dem entsprechenden Wiederholungsstil zugeordnet, vom ersten angegebenen bis zum letzten.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-repeat", "-webkit-mask-repeat")}}
- {{cssxref("-webkit-mask-repeat-x")}}
