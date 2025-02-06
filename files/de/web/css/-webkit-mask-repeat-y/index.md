---
title: -webkit-mask-repeat-y
slug: Web/CSS/-webkit-mask-repeat-y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
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
  - : Das Maskenbild wird nicht vertikal wiederholt; es wird nur eine Kopie des Maskenbilds in vertikaler Richtung gezeichnet. Der verbleibende vertikale Inhalt des maskierten Elements wird nicht angezeigt.
- repeat
  - : Das Maskenbild wird vertikal wiederholt.
- space
  - : Das Bild wird so oft wie möglich wiederholt, ohne abgeschnitten zu werden. Das erste und letzte Bild werden an den oberen und unteren Rand des Elements angeheftet, und der verfügbare Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("mask-position")}} wird ignoriert, es sei denn, es kann nur ein Bild ohne Abschneiden angezeigt werden. Das einzige Szenario, in dem bei Verwendung von `space` ein Abschneiden erfolgt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.
- round
  - : Wenn der verfügbare vertikale Platz größer wird, dehnen sich die wiederholten Bilder aus (ohne Lücken zu hinterlassen), bis Platz für ein weiteres Bild geschaffen wird. Wird ein weiteres Bild hinzugefügt, komprimieren sich alle aktuellen Bilder, um Platz zu machen. Beispiel: Ein Bild mit einer ursprünglichen Höhe von 260px, das dreimal wiederholt wird, kann sich ausdehnen, bis jede Wiederholung eine Höhe von 300px erreicht, und dann wird ein weiteres Bild hinzugefügt. Anschließend komprimieren sie sich auf eine Höhe von 225px.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
-webkit-mask-repeat-y =
  repeat | no-repeat | space | round
```

## Beispiele

### Verwendung eines wiederholenden oder nicht wiederholenden Maskenbilds

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

Sie können für jedes Maskenbild einen anderen `<repeat-style>` festlegen, getrennt durch Kommata:

```css
.example-three {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-y: repeat, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil übereinstimmend von zuerst spezifiziert bis zuletzt verwendet.

## Spezifikationen

Teil keiner Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-repeat", "-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-x")}}
