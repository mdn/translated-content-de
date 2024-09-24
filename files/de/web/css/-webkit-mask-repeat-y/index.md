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
/* Schlüsselwortwerte */
-webkit-mask-repeat-y: repeat;
-webkit-mask-repeat-y: no-repeat;
-webkit-mask-repeat-y: space;
-webkit-mask-repeat-y: round;

/* Mehrere Werte */
-webkit-mask-repeat-y: repeat, no-repeat, space;

/* Globale Werte */
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
  - : Das Maskenbild wird nicht vertikal wiederholt; nur eine Kopie des Maskenbildes wird in vertikaler Richtung gezeichnet. Der vertikale Rest des maskierten Inhalts des Elements wird nicht angezeigt.
- repeat
  - : Das Maskenbild wird vertikal wiederholt.
- space
  - : Das Bild wird so oft wie möglich ohne Zuschnitt wiederholt. Die ersten und letzten Bilder sind am oberen und unteren Rand des Elements fixiert, und der Zwischenraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("mask-position")}} wird ignoriert, es sei denn, nur ein Bild kann ohne Zuschnitt angezeigt werden. Der einzige Fall, bei dem es mit space zu einem Zuschnitt kommt, ist, wenn nicht genug Platz ist, um ein Bild anzuzeigen.
- round
  - : Wenn der erlaubte vertikale Raum größer wird, dehnen sich die wiederholten Bilder (ohne Lücken) so lange, bis Platz für ein weiteres Bild da ist. Wenn das nächste Bild hinzugefügt wird, komprimieren sich alle aktuellen Bilder, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Höhe von 260px, das dreimal wiederholt wird, könnte sich bis zu einer Höhe von jeweils 300px dehnen, und dann wird ein weiteres Bild hinzugefügt. Sie komprimieren sich dann auf eine Höhe von 225px.

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

Jedes Bild wird mit dem entsprechenden Wiederholungsstil vom ersten bis zum letzten angegebenen Bild abgestimmt.

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-repeat", "-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-x")}}
