---
title: -webkit-mask-repeat-x
slug: Web/CSS/-webkit-mask-repeat-x
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
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
  - : Das Maskenbild wird nicht wiederholt; nur eine Kopie des Maskenbildes wird gezeichnet. Der Rest des Inhalts des maskierten Elements wird nicht angezeigt.
- repeat
  - : Das Maskenbild wird sowohl horizontal als auch vertikal wiederholt.
- space
  - : Das Bild wird so oft wie möglich ohne Zuschneiden wiederholt. Die ersten und letzten Bilder sind auf beiden Seiten des Elements fixiert, und Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("mask-position")}} wird ignoriert, es sei denn, es kann nur ein Bild ohne Zuschneiden angezeigt werden. Der einzige Fall, in dem Zuschneiden mit space auftritt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.
- round
  - : Wenn der verfügbare Platz größer wird, dehnen sich die wiederholten Bilder (ohne Lücken) aus, bis Platz für ein weiteres Bild ist. Wenn ein weiteres Bild hinzugefügt wird, komprimieren sich alle bisherigen Bilder, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Breite von 260px, das dreimal wiederholt wird, kann sich bis auf 300px Breite ausdehnen, und dann wird ein weiteres Bild hinzugefügt. Sie komprimieren sich dann auf 225px.

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

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgeglichen, vom ersten zum letzten angegebenen.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-repeat", "-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-y")}}
