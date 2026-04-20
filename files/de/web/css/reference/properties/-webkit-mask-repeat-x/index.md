---
title: "`-webkit-mask-repeat-x` CSS property"
short-title: -webkit-mask-repeat-x
slug: Web/CSS/Reference/Properties/-webkit-mask-repeat-x
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_header}}

Die Eigenschaft `-webkit-mask-repeat-x` legt fest, ob und wie ein Maskenbild horizontal wiederholt (gekachelt) wird.

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
  - : Das Bild wird so oft wie möglich ohne Zuschneiden wiederholt. Das erste und letzte Bild werden an beiden Seiten des Elements fixiert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("mask-position")}} wird ignoriert, es sei denn, nur ein Bild kann ohne Zuschneiden angezeigt werden. Der einzige Fall, in dem das Zuschneiden bei der Verwendung von space auftritt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.
- round
  - : Wenn der zur Verfügung stehende Platz größer wird, dehnen sich die wiederholten Bilder (ohne Lücken zu hinterlassen), bis Platz für ein weiteres Bild ist. Wenn das nächste Bild hinzugefügt wird, komprimieren sich alle aktuellen Bilder, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Breite von 260px, das dreimal wiederholt wird, könnte sich dehnen, bis jede Wiederholung 300px breit ist, und dann wird ein weiteres Bild hinzugefügt. Sie komprimieren dann auf 225px.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-repeat-x = [ repeat | no-repeat | space | round ]#`)}}

## Beispiele

### Verwendung eines wiederholten oder nicht wiederholten Maskenbildes

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

Sie können einen anderen `<repeat-style>` für jedes Maskenbild angeben, getrennt durch Kommas:

```css
.example-three {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-x: repeat, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgeglichen, vom zuerst angegebenen bis zum zuletzt angegebenen.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-repeat", "-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-y")}}
