---
title: "`-webkit-mask-repeat-y` CSS property"
short-title: -webkit-mask-repeat-y
slug: Web/CSS/Reference/Properties/-webkit-mask-repeat-y
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
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
  - : Das Maskenbild wird nicht vertikal wiederholt; es wird nur eine Kopie des Maskenbildes in vertikaler Richtung gezeichnet. Der vertikale Rest des Inhalts des maskierten Elements wird nicht angezeigt.
- repeat
  - : Das Maskenbild wird vertikal wiederholt.
- space
  - : Das Bild wird so oft wie möglich ohne Abschneiden wiederholt. Das erste und letzte Bild sind am oberen und unteren Rand des Elements fixiert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die {{cssxref("mask-position")}}-Eigenschaft wird ignoriert, es sei denn, es kann nur ein Bild ohne Abschneiden angezeigt werden. Der einzige Fall, bei dem das Abschneiden mit space erfolgt, ist, wenn nicht genügend Platz vorhanden ist, um ein Bild anzuzeigen.
- round
  - : Wenn der zulässige vertikale Raum größer wird, dehnen sich die wiederholten Bilder (ohne Lücken) so weit, bis Platz für ein weiteres Bild vorhanden ist. Wenn das nächste Bild hinzugefügt wird, komprimieren sich alle aktuellen Bilder, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Höhe von 260px, das dreimal wiederholt wird, kann sich dehnen, bis jede Wiederholung 300px hoch ist, und dann wird ein weiteres Bild hinzugefügt. Sie komprimieren sich dann auf eine Höhe von 225px.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-repeat-y = [ repeat | no-repeat | space | round ]#`)}}

## Beispiele

### Verwendung eines wiederholten oder nicht wiederholten Maskenbildes

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

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgeglichen, von der zuerst angegebenen bis zur letzten.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-repeat", "-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-x")}}
