---
title: "`-webkit-mask-repeat-y` CSS property"
short-title: -webkit-mask-repeat-y
slug: Web/CSS/Reference/Properties/-webkit-mask-repeat-y
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
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

- repeat
  - : Das Maskenbild wird vertikal wiederholt.
- no-repeat
  - : Das Maskenbild wird vertikal nicht wiederholt; nur eine Kopie des Maskenbildes wird in vertikaler Richtung gezeichnet. Der vertikale Rest des Inhalts des maskierten Elements wird nicht angezeigt.
- repeat
  - : Das Maskenbild wird vertikal wiederholt.
- space
  - : Das Bild wird so oft wie möglich wiederholt, ohne abgeschnitten zu werden. Die ersten und letzten Bilder sind an den oberen und unteren Rand des Elements fixiert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("mask-position")}} wird ignoriert, es sei denn, es kann nur ein Bild ohne Zuschneiden dargestellt werden. Der einzige Fall, in dem mit space abgeschnitten wird, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.
- round
  - : Da der erlaubte vertikale Raum größer wird, dehnen sich die wiederholten Bilder (ohne Lücken zu lassen), bis Platz für ein weiteres Bild ist. Wenn das nächste Bild hinzugefügt wird, werden alle aktuellen komprimiert, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Höhe von 260px, das dreimal wiederholt wird, könnte sich dehnen, bis jede Wiederholung 300px hoch ist, und dann wird ein weiteres Bild hinzugefügt. Sie werden dann auf eine Höhe von 225px komprimiert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-repeat-y = [ repeat | no-repeat | space | round ]#`)}}

## Beispiele

### Verwendung eines wiederholenden oder nicht wiederholenden Maskenbildes

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

Sie können für jedes Maskenbild einen anderen `<repeat-style>` angeben, getrennt durch Kommata:

```css
.example-three {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-y: repeat, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil, vom zuerst angegebenen bis zum letzten, abgeglichen.

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-repeat", "-webkit-mask-repeat")}}
- {{cssxref("-webkit-mask-repeat-x")}}
