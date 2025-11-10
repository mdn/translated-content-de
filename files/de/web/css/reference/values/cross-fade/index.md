---
title: cross-fade()
slug: Web/CSS/Reference/Values/cross-fade
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`cross-fade()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann verwendet werden, um zwei oder mehr Bilder mit einer definierten Transparenz zu mischen. Sie kann für viele grundlegende Bildmanipulationen verwendet werden, wie zum Beispiel das Tönen eines Bildes mit einer Volltonfarbe oder das Hervorheben eines bestimmten Bereichs der Seite durch die Kombination eines Bildes mit einem radialen Verlauf.

## Syntax

> [!WARNING]
> Die Spezifikation und die aktuellen Implementierungen haben unterschiedliche Syntaxen.
> Die Spezifikations-Syntax wird zuerst erklärt.

### Spezifikations-Syntax

Die `cross-fade()`-Funktion nimmt eine Liste von Bildern mit einem Prozentsatz, der definiert, wie viel von jedem Bild in Bezug auf die Deckkraft erhalten bleibt, wenn es mit den anderen Bildern gemischt wird. Der Prozentwert muss ohne Anführungszeichen kodiert werden, das `'%'`-Symbol enthalten und sein Wert muss zwischen 0% und 100% liegen.

Die Funktion kann in CSS überall dort verwendet werden, wo ein gewöhnlicher Bildverweis verwendet werden kann.

#### Cross-fade-Prozentsätze

Betrachten Sie den Prozentsatz als einen Deckkraftwert für jedes Bild. Das bedeutet, dass ein Wert von 0% das Bild vollständig transparent macht, während ein Wert von 100% das Bild vollständig undurchsichtig macht.

```css
cross-fade(url("white.png") 0%, url("black.png") 100%); /* fully black */
cross-fade(url("white.png") 25%, url("black.png") 75%); /* 25% white, 75% black */
cross-fade(url("white.png") 50%, url("black.png") 50%); /* 50% white, 50% black */
cross-fade(url("white.png") 75%, url("black.png") 25%); /* 75% white, 25% black */
cross-fade(url("white.png") 100%, url("black.png") 0%); /* fully white */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* both green and red at 75% */
```

Wenn Prozentsätze weggelassen werden, werden alle angegebenen Prozentsätze zusammengezählt und von `100%` subtrahiert. Wenn das Ergebnis größer als 0% ist, wird das Ergebnis gleichmäßig auf alle Bilder mit ausgelassenen Prozentsätzen verteilt.

Im einfachsten Fall werden zwei Bilder miteinander verblasst. Um dies zu erreichen, muss nur eines der Bilder einen Prozentsatz haben, das andere wird entsprechend verblasst. Zum Beispiel ergibt ein Wert von 0% für das erste Bild nur das zweite Bild, während 100% nur das erste ergeben. Ein Wert von 25% stellt das erste Bild mit 25% und das zweite mit 75% dar. Der Wert von 75% ist das Gegenteil, zeigt das erste Bild mit 75% und das zweite mit 25%.

Das Obige könnte auch so geschrieben worden sein:

```css
cross-fade(url("white.png") 0%, url("black.png")); /* fully black */
cross-fade(url("white.png") 25%, url("black.png")); /* 25% white, 75% black */
cross-fade(url("white.png"), url("black.png")); /* 50% white, 50% black */
cross-fade(url("white.png") 75%, url("black.png")); /* 75% white, 25% black */
cross-fade(url("white.png") 100%, url("black.png")); /* fully white */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* both green and red at 75% */
```

Wenn keine Prozentsätze angegeben sind, sind beide Bilder zu 50% undurchsichtig, wobei das Cross-Fade als gleichmäßige Mischung beider Bilder dargestellt wird. Das 50%/50%-Beispiel oben benötigte keine Liste von Prozentsätzen, da, wenn ein Prozentwert weggelassen wird, die eingeschlossenen Prozentsätze zusammengezählt und von 100% subtrahiert werden. Das Ergebnis, falls größer als 0, wird dann gleichmäßig zwischen allen Bildern mit ausgelassenen Prozentsätzen verteilt.

Im letzten Beispiel beträgt die Summe beider Prozentsätze nicht 100%, und daher enthalten beide Bilder ihre jeweiligen Deckkräfte.

Wenn keine Prozentsätze angegeben werden und drei Bilder eingeschlossen sind, wird jedes Bild zu 33,33% undurchsichtig sein. Die beiden folgenden Zeilen sind (fast) identisch:

```css
cross-fade(url("red.png"), url("yellow.png"), url("blue.png")); /* all three will be 33.3333% opaque */
cross-fade(url("red.png") 33.33%, url("yellow.png") 33.33%, url("blue.png") 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation für die `cross-fade()`-Funktion erlaubt mehrere Bilder und für jedes Bild, dass es Transparenzwerte unabhängig von den anderen Werten hat. Das war nicht immer der Fall. Die ursprüngliche Syntax, die in einigen Browsern implementiert wurde, erlaubte nur zwei Bilder, wobei die Summe der Transparenz dieser beiden Bilder genau 100% betrug. Die ursprüngliche Syntax wird in Safari unterstützt und mit dem `-webkit-` Präfix in Chrome, Opera und anderen blink-basierten Browsern unterstützt.

```css
cross-fade(url("white.png"), url("black.png"), 0%);   /* fully black */
cross-fade(url("white.png"), url("black.png"), 25%);  /* 25% white, 75% black */
cross-fade(url("white.png"), url("black.png"), 50%);  /* 50% white, 50% black */
cross-fade(url("white.png"), url("black.png"), 75%);  /* 75% white, 25% black */
cross-fade(url("white.png"), url("black.png"), 100%); /* fully white */
```

In der implementierten Syntax werden die beiden durch Komma getrennten Bilder zuerst deklariert, gefolgt von einem Komma und einem erforderlichen Prozentwert. Das Weglassen des Kommas oder des Prozentsatzes macht den Wert ungültig. Der Prozentsatz ist die Deckkraft des zuerst deklarierten Bildes. Der eingeschlossene Prozentsatz wird von 100% subtrahiert, wobei der Unterschied die Deckkraft des zweiten Bildes ist.

Das Grün/Rot-Beispiel (mit den Prozentsätzen, die insgesamt 150% ergeben) und das Gelb/Rot/Blau-Beispiel (mit drei Bildern) aus dem Spezifikations-Syntax-Abschnitt sind in dieser Implementierung nicht möglich.

## Barrierefreiheit

Browsers bieten Assistenztechnologien keine speziellen Informationen über Hintergrundbilder. Das ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Präsenz nicht ansagt und somit seinen Nutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des gesamten Zwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben. Beim Verwenden von Hintergrundbildern, stellen Sie sicher, dass der Farbkontrast groß genug ist, damit jeglicher Text sowohl über dem Bild als auch im Falle fehlender Bilder lesbar ist.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ältere Syntax für Cross-Fade

#### HTML

```html
<div class="cross-fade"></div>
```

#### CSS

```css
.cross-fade {
  width: 300px;
  height: 300px;
  background-image: -webkit-cross-fade(url("br.png"), url("tr.png"), 75%);
  background-image: cross-fade(url("br.png"), url("tr.png"), 75%);
}
```

#### Ergebnis

{{EmbedLiveSample("Older_syntax_for_cross-fade", "330", "330")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("image")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{cssxref("image/image", "image()")}}
- {{cssxref("image/image-set", "image-set()")}}
- {{cssxref("element")}}
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Verlauf-Funktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
