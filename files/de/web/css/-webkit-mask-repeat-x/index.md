---
title: "-webkit-mask-repeat-x"
slug: Web/CSS/-webkit-mask-repeat-x
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}{{Non-standard_header}}

Die Eigenschaft `-webkit-mask-repeat-x` legt fest, ob und wie ein Maskenbild horizontal wiederholt (gekachelt) wird.

## Syntax

```css
/* Schlüsselwortwerte */
-webkit-mask-repeat-x: repeat;
-webkit-mask-repeat-x: no-repeat;
-webkit-mask-repeat-x: space;
-webkit-mask-repeat-x: round;

/* Mehrfache Werte */
-webkit-mask-repeat-x: repeat, no-repeat, space;

/* Globale Werte */
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
  - : Das Bild wird so oft wie möglich ohne Zuschnitt wiederholt. Das erste und letzte Bild sind an den Seiten des Elements fixiert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die {{cssxref("mask-position")}}-Eigenschaft wird ignoriert, es sei denn, es kann nur ein Bild ohne Zuschnitt angezeigt werden. Der einzige Fall, in dem mit space zugeschnitten wird, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.
- round
  - : Wenn der verfügbare Platz größer wird, dehnen sich die wiederholten Bilder (lassen keine Lücken) aus, bis Platz für ein weiteres Bild vorhanden ist. Wenn das nächste Bild hinzugefügt wird, komprimieren sich alle aktuellen, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Breite von 260px, das dreimal wiederholt wird, könnte sich bis zu einer Breite von 300px ausdehnen, und dann wird ein weiteres Bild hinzugefügt. Sie komprimieren dann auf 225px.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
-webkit-mask-repeat-x =
  repeat | no-repeat | space | round
```

## Beispiele

### Verwendung eines wiederholten oder nicht wiederholten Maskenbildes

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

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgeglichen, von zuerst angegeben bis zuletzt.

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-repeat", "-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-y")}}
