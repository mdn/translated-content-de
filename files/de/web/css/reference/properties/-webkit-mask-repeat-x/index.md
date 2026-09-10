---
title: "`-webkit-mask-repeat-x` CSS property"
short-title: -webkit-mask-repeat-x
slug: Web/CSS/Reference/Properties/-webkit-mask-repeat-x
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

{{Non-standard_header}}

Die Eigenschaft `-webkit-mask-repeat-x` gibt an, ob und wie ein Maskenbild horizontal wiederholt (gekachelt) wird.

## Syntax

```css
/* Keyword values */
-webkit-mask-repeat-x: repeat;
-webkit-mask-repeat-x: no-repeat;
-webkit-mask-repeat-x: space;
-webkit-mask-repeat-x: round;

/* Multiple values */
-webkit-mask-repeat-x: repeat, no-repeat, space;

/* Global values */
-webkit-mask-repeat-x: inherit;
-webkit-mask-repeat-x: initial;
-webkit-mask-repeat-x: revert;
-webkit-mask-repeat-x: revert-layer;
-webkit-mask-repeat-x: unset;
```

### Werte

Diese Eigenschaft wird als ein oder mehrere durch Kommas getrennte Werte angegeben:

- `repeat`
  - : Das Maskenbild wird sowohl horizontal als auch vertikal wiederholt.
- `no-repeat`
  - : Das Maskenbild wird horizontal nicht wiederholt; in dieser Richtung wird nur eine Kopie des Maskenbilds gezeichnet. Der verbleibende Inhalt des maskierten Elements wird nicht angezeigt.
- `space`
  - : Das Bild wird so oft wie möglich ohne Beschneidung wiederholt. Das erste und letzte Bild werden an den jeweiligen Seiten des Elements ausgerichtet, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("mask-position")}} wird ignoriert, sofern nicht nur ein Bild ohne Beschneidung angezeigt werden kann. Der einzige Fall, in dem bei Verwendung von space eine Beschneidung erfolgt, ist, wenn nicht genügend Platz vorhanden ist, um ein Bild anzuzeigen.
- `round`
  - : Wenn der verfügbare Platz größer wird, werden die wiederholten Bilder gedehnt (ohne Lücken zu hinterlassen), bis Platz für ein weiteres Bild vorhanden ist. Wenn das nächste Bild hinzugefügt wird, werden alle aktuellen Bilder komprimiert, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Breite von 260px, das dreimal wiederholt wird, kann gedehnt werden, bis jede Wiederholung 300px breit ist; anschließend wird ein weiteres Bild hinzugefügt. Sie werden dann auf 225px komprimiert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-repeat-x = [ repeat | no-repeat | space | round ]#`)}}

## Beispiele

### Verwendung eines wiederholten oder nicht wiederholten Maskenbilds

```css
.example-one {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-x: repeat;
}

.example-two {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-x: no-repeat;
}
```

### Verwendung mehrerer Maskenbilder

Sie können für jedes Maskenbild einen unterschiedlichen `<repeat-style>` angeben, durch Kommas getrennt:

```css
.example-three {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-x: repeat, space;
}
```

Jedes Bild wird dem entsprechenden Wiederholungsstil zugeordnet, von der ersten bis zur letzten Angabe.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-repeat", "-webkit-mask-repeat")}}
- {{cssxref("-webkit-mask-repeat-y")}}
