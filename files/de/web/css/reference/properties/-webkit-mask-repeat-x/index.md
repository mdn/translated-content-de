---
title: "`-webkit-mask-repeat-x` CSS property"
short-title: -webkit-mask-repeat-x
slug: Web/CSS/Reference/Properties/-webkit-mask-repeat-x
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{Non-standard_header}}

Die Eigenschaft `-webkit-mask-repeat-x` legt fest, ob und wie ein Maskenbild horizontal (gekachelt) wiederholt wird.

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

- repeat
  - : Das Maskenbild wird sowohl horizontal als auch vertikal wiederholt.
- no-repeat
  - : Das Maskenbild wird nicht wiederholt; nur eine Kopie des Maskenbildes wird gezeichnet. Der verbleibende Inhalt des maskierten Elements wird nicht angezeigt.
- repeat
  - : Das Maskenbild wird sowohl horizontal als auch vertikal wiederholt.
- space
  - : Das Bild wird so oft wie möglich ohne Zuschneiden wiederholt. Die ersten und letzten Bilder sind an den Seiten des Elements verankert, und Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("mask-position")}} wird ignoriert, es sei denn, es kann nur ein Bild ohne Zuschneiden angezeigt werden. Der einzige Fall, bei dem bei der Verwendung von space ein Zuschneiden erfolgt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.
- round
  - : Wenn der verfügbare Platz zunimmt, werden die wiederholten Bilder gestreckt (ohne Lücken), bis Platz für ein weiteres Bild hinzugefügt werden kann. Wenn das nächste Bild hinzugefügt wird, komprimieren alle aktuellen, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Breite von 260px, das dreimal wiederholt wird, könnte sich dehnen, bis jede Wiederholung 300px breit ist, und dann wird ein weiteres Bild hinzugefügt. Danach komprimieren sie auf 225px.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-repeat-x = [ repeat | no-repeat | space | round ]#`)}}

## Beispiele

### Verwendung eines wiederholenden oder nicht wiederholenden Maskenbildes

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

Sie können einen anderen `<repeat-style>` für jedes Maskenbild angeben, getrennt durch Kommata:

```css
.example-three {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-x: repeat, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil von der ersten zur letzten Angabe abgeglichen.

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-repeat", "-webkit-mask-repeat")}}
- {{cssxref("-webkit-mask-repeat-y")}}
