---
title: "-webkit-mask-repeat-y"
slug: Web/CSS/-webkit-mask-repeat-y
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}{{Non-standard_header}}

Die `-webkit-mask-repeat-y`-Eigenschaft legt fest, ob und wie ein Maskenbild vertikal wiederholt (gekachelt) wird.

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
  - : Das Maskenbild wird vertikal nicht wiederholt; nur eine Kopie des Maskenbildes wird in vertikaler Richtung gezeichnet. Der vertikale Rest des maskierten Inhalts wird nicht angezeigt.
- repeat
  - : Das Maskenbild wird vertikal wiederholt.
- space
  - : Das Bild wird so oft wie möglich ohne Zuschneiden wiederholt. Die ersten und letzten Bilder werden an den oberen und unteren Rand des Elements angeheftet, und der freie Raum wird gleichmäßig zwischen den Bildern verteilt. Die {{cssxref("mask-position")}}-Eigenschaft wird ignoriert, es sei denn, es kann nur ein Bild ohne Zuschneiden angezeigt werden. Die einzige Situation, in der beim Verwenden von `space` Zuschneiden auftritt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.
- round
  - : Wenn der verfügbare vertikale Platz größer wird, strecken sich die wiederholten Bilder (ohne Lücken), bis Platz für ein weiteres Bild ist. Wenn das neue Bild hinzugefügt wird, komprimieren alle aktuellen Bilder, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Höhe von 260px, dreifach wiederholt, könnte sich dehnen, bis jede Wiederholung 300px hoch ist, und dann wird ein weiteres Bild hinzugefügt. Sie werden dann auf eine Höhe von 225px komprimiert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
-webkit-mask-repeat-y =
  repeat | no-repeat | space | round
```

## Beispiele

### Verwendung eines wiederholenden oder nicht wiederholenden Maskenbildes

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

Sie können für jedes Maskenbild eine andere `<repeat-style>` angeben, getrennt durch Kommas:

```css
.examplethree {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-y: repeat, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgeglichen, vom ersten bis zum letzten angegebenen Stil.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-repeat", "-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-x")}}
