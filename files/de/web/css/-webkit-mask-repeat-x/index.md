---
title: "-webkit-mask-repeat-x"
slug: Web/CSS/-webkit-mask-repeat-x
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}{{Non-standard_header}}

Die Eigenschaft `-webkit-mask-repeat-x` gibt an, ob und wie ein Maskierungsbild horizontal wiederholt (gekachelt) wird.

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
  - : Das Maskierungsbild wird sowohl horizontal als auch vertikal wiederholt.
- no-repeat
  - : Das Maskierungsbild wird nicht wiederholt; es wird nur eine Kopie des Maskierungsbildes gezeichnet. Der verbleibende Inhalt des maskierten Elements wird nicht angezeigt.
- repeat
  - : Das Maskierungsbild wird sowohl horizontal als auch vertikal wiederholt.
- space
  - : Das Bild wird so oft wie möglich ohne Beschneiden wiederholt. Das erste und letzte Bild werden an beiden Seiten des Elements fixiert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("mask-position")}} wird ignoriert, es sei denn, es kann nur ein Bild ohne Beschneiden angezeigt werden. Der einzige Fall, bei dem eine Beschneidung unter Verwendung von space stattfindet, ist, wenn nicht genügend Platz vorhanden ist, um ein Bild anzuzeigen.
- round
  - : Wenn der verfügbare Platz größer wird, dehnen sich die wiederholten Bilder (ohne Lücken) bis es Platz für ein weiteres Bild gibt. Wenn das nächste Bild hinzugefügt wird, komprimieren sich alle aktuellen Bilder, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Breite von 260px, dreimal wiederholt, kann sich auf 300px erweiteren, und dann wird ein weiteres Bild hinzugefügt. Sie werden dann auf 225px komprimiert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
-webkit-mask-repeat-x =
  repeat | no-repeat | space | round
```

## Beispiele

### Verwendung eines wiederholenden oder nicht wiederholenden Maskierungsbildes

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

### Verwendung mehrerer Maskierungsbilder

Sie können einen anderen `<repeat-style>` für jedes Maskierungsbild angeben, getrennt durch Kommata:

```css
.examplethree {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-x: repeat, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil in der Reihenfolge von der ersten zur letzten Angabe abgeglichen.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-repeat", "-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-y")}}
