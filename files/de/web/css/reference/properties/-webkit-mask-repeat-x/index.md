---
title: -webkit-mask-repeat-x
slug: Web/CSS/Reference/Properties/-webkit-mask-repeat-x
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
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

- repeat
  - : Das Maskenbild wird sowohl horizontal als auch vertikal wiederholt.
- no-repeat
  - : Das Maskenbild wird nicht wiederholt; es wird nur eine Kopie des Maskenbildes gezeichnet. Der Rest des Inhalts des maskierten Elements wird nicht angezeigt.
- repeat
  - : Das Maskenbild wird sowohl horizontal als auch vertikal wiederholt.
- space
  - : Das Bild wird so oft wie möglich wiederholt, ohne abgeschnitten zu werden. Das erste und letzte Bild werden an beiden Seiten des Elements befestigt, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("mask-position")}} wird ignoriert, es sei denn, es kann nur ein Bild ohne Zuschneiden angezeigt werden. Der einzige Fall, in dem beim Verwenden von space ein Zuschneiden erfolgt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild darzustellen.
- round
  - : Wenn der verfügbare Platz wächst, werden die wiederholten Bilder gedehnt (sodass keine Lücken entstehen), bis Platz für ein weiteres Bild ist. Wenn das nächste Bild hinzugefügt wird, werden alle aktuellen Bilder komprimiert, um Platz zu schaffen. Beispiel: Ein Bild mit einer Originalbreite von 260px, das dreimal wiederholt wird, kann sich dehnen, bis jede Wiederholung 300px breit ist, und dann wird ein weiteres Bild hinzugefügt. Sie werden dann auf 225px komprimiert.

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

Sie können für jedes Maskenbild einen anderen `<repeat-style>` angeben, getrennt durch Kommata:

```css
.example-three {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-x: repeat, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgestimmt, vom zuerst angegebenen bis zum letzten.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-repeat", "-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-y")}}
