---
title: "-webkit-mask-repeat-y"
slug: Web/CSS/-webkit-mask-repeat-y
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}{{Non-standard_header}}

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
  - : Das Maskenbild wird vertikal nicht wiederholt; es wird nur eine Kopie des Maskenbildes in vertikaler Richtung gezeichnet. Der verbleibende vertikale Inhalt des maskierten Elements wird nicht angezeigt.
- repeat
  - : Das Maskenbild wird vertikal wiederholt.
- space
  - : Das Bild wird so oft wie möglich ohne Beschneidung wiederholt. Die ersten und letzten Bilder werden an den oberen und unteren Rand des Elements fixiert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("mask-position")}} wird ignoriert, es sei denn, es kann nur ein Bild ohne Beschneidung angezeigt werden. Der einzige Fall, in dem bei der Verwendung von 'space' eine Beschneidung erfolgt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.
- round
  - : Mit zunehmendem vertikalen Platzangebot dehnen sich die wiederholten Bilder aus (ohne Lücken), bis Platz für ein weiteres Bild vorhanden ist. Wenn ein weiteres Bild hinzugefügt wird, werden alle aktuellen Bilder komprimiert, um Platz zu schaffen. Beispiel: Ein Bild mit einer Originalhöhe von 260px, das dreimal wiederholt wird, könnte sich dehnen, bis jede Wiederholung 300px hoch ist, und dann wird ein weiteres Bild hinzugefügt. Sie werden dann auf eine Höhe von 225px komprimiert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
-webkit-mask-repeat-y =
  repeat | no-repeat | space | round
```

## Beispiele

### Verwendung eines sich wiederholenden oder nicht wiederholenden Maskenbildes

```css
.exampleone {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-y: repeat;
}

.exampletwo {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-y: no-repeat;
}
```

### Verwendung mehrerer Maskenbilder

Sie können für jedes Maskenbild einen anderen `<repeat-style>` angeben, getrennt durch Kommas:

```css
.examplethree {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-y: repeat, space;
}
```

Jedes Bild wird dem entsprechend spezifizierten Wiederholungsstil zugeordnet, vom zuerst bis zuletzt angegebenen.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-repeat", "-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-x")}}
