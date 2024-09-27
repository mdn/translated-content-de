---
title: "-webkit-mask-repeat-x"
slug: Web/CSS/-webkit-mask-repeat-x
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}{{Non-standard_header}}

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

- repeat
  - : Das Maskenbild wird sowohl horizontal als auch vertikal wiederholt.
- no-repeat
  - : Das Maskenbild wird nicht wiederholt; es wird nur eine Kopie des Maskenbildes gezeichnet. Der Rest des Inhalts des maskierten Elements wird nicht angezeigt.
- repeat
  - : Das Maskenbild wird sowohl horizontal als auch vertikal wiederholt.
- space
  - : Das Bild wird so oft wie möglich ohne Beschneidung wiederholt. Die ersten und letzten Bilder sind an beiden Seiten des Elements fixiert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("mask-position")}} wird ignoriert, es sei denn, es kann nur ein Bild ohne Beschneidung angezeigt werden. Der einzige Fall, in dem bei Verwendung von space eine Beschneidung auftritt, ist, wenn nicht genug Platz ist, um ein Bild anzuzeigen.
- round
  - : Wenn der verfügbare Platz größer wird, strecken sich die wiederholten Bilder (ohne Lücken zu lassen), bis Platz für ein weiteres Bild entsteht. Wenn das nächste Bild hinzugefügt wird, werden alle aktuellen verkleinert, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Breite von 260px, das dreimal wiederholt wird, kann sich so weit dehnen, bis jede Wiederholung 300px breit ist, und dann wird ein weiteres Bild hinzugefügt. Sie werden dann auf 225px komprimiert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
-webkit-mask-repeat-x =
  repeat | no-repeat | space | round
```

## Beispiele

### Verwendung eines sich wiederholenden oder nicht wiederholenden Maskenbildes

```css
.exampleone {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-x: repeat;
}

.exampletwo {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-x: no-repeat;
}
```

### Verwendung mehrerer Maskenbilder

Sie können für jedes Maskenbild einen anderen `<repeat-style>` angeben, getrennt durch Kommata:

```css
.examplethree {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-x: repeat, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgestimmt, vom ersten bis zum letzten angegebenen.

## Spezifikationen

Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-repeat", "-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-y")}}
