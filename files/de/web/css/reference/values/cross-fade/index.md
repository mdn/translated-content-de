---
title: cross-fade()
slug: Web/CSS/Reference/Values/cross-fade
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Die **`cross-fade()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann verwendet werden, um zwei oder mehr Bilder mit einer definierten Transparenz zu mischen.
Sie kann für viele grundlegende Bildmanipulationen genutzt werden, wie z.B. das Färben eines Bildes mit einer Vollfarbe oder das Hervorheben eines bestimmten Bereichs der Seite durch Kombinieren eines Bildes mit einem radialen Verlauf.

## Syntax

> [!WARNING]
> Die Spezifikation und die aktuellen Implementierungen haben unterschiedliche Syntaxen.
> Die Spezifikationssyntax wird zuerst erklärt.

### Spezifikationssyntax

Die `cross-fade()` Funktion nimmt eine Liste von Bildern mit einem Prozentwert, der definiert, wie viel von jedem Bild in Bezug auf die Opazität behalten wird, wenn es mit den anderen Bildern gemischt wird. Der Prozentwert muss ohne Anführungszeichen kodiert sein, muss das `'%'`-Symbol enthalten, und sein Wert muss zwischen 0% und 100% liegen.

Die Funktion kann überall in CSS verwendet werden, wo eine normale Bildreferenz verwendet werden kann.

#### Cross-fade-Prozentsätze

Stellen Sie sich den Prozentwert als Opazitätswert für jedes Bild vor. Das bedeutet, dass ein Wert von 0% das Bild vollständig transparent macht, während ein Wert von 100% das Bild vollständig undurchsichtig macht.

```css
cross-fade(url("white.png") 0%, url("black.png") 100%); /* fully black */
cross-fade(url("white.png") 25%, url("black.png") 75%); /* 25% white, 75% black */
cross-fade(url("white.png") 50%, url("black.png") 50%); /* 50% white, 50% black */
cross-fade(url("white.png") 75%, url("black.png") 25%); /* 75% white, 25% black */
cross-fade(url("white.png") 100%, url("black.png") 0%); /* fully white */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* both green and red at 75% */
```

Wenn Prozentsätze weggelassen werden, werden alle angegebenen Prozentsätze zusammengezählt und von `100%` subtrahiert. Wenn das Ergebnis größer als 0 % ist, wird es gleichmäßig zwischen alle Bilder mit ausgelassenen Prozentsätzen aufgeteilt.

Im einfachsten Fall werden zwei Bilder gegeneinander ausgeblendet. Dazu muss nur eines der Bilder einen Prozentsatz haben, das andere wird entsprechend überblendet. Zum Beispiel ergibt ein Wert von 0% für das erste Bild nur das zweite Bild, während 100% nur das erste ergibt. Ein Wert von 25% zeigt das erste Bild zu 25% und das zweite zu 75%. Der Wert von 75% ist das Gegenteil, zeigt das erste Bild zu 75% und das zweite zu 25%.

Das oben Gesagte könnte auch so geschrieben werden:

```css
cross-fade(url("white.png") 0%, url("black.png")); /* fully black */
cross-fade(url("white.png") 25%, url("black.png")); /* 25% white, 75% black */
cross-fade(url("white.png"), url("black.png")); /* 50% white, 50% black */
cross-fade(url("white.png") 75%, url("black.png")); /* 75% white, 25% black */
cross-fade(url("white.png") 100%, url("black.png")); /* fully white */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* both green and red at 75% */
```

Wenn keine Prozentsätze deklariert werden, sind beide Bilder zu 50% opak, wobei ein Cross-Fade als gleichmäßige Mischung beider Bilder gerendert wird. Das Beispiel 50%/50%, das oben gezeigt wurde, brauchte keine Prozentsätze aufzulisten, da, wenn ein Prozentwert weggelassen wird, die enthaltenen Prozentsätze zusammengezählt und von 100% subtrahiert werden. Das Ergebnis wird, wenn größer als 0, dann gleichmäßig zwischen alle Bilder mit ausgelassenen Prozentsätzen aufgeteilt.

Im letzten Beispiel ist die Summe beider Prozentsätze nicht 100%, und daher beinhalten beide Bilder ihre jeweiligen Opazitäten.

Wenn keine Prozentsätze deklariert und drei Bilder eingeschlossen werden, ist jedes Bild zu 33,33% opak. Die zwei folgenden Zeilen sind (fast) identisch:

```css
cross-fade(url("red.png"), url("yellow.png"), url("blue.png")); /* all three will be 33.3333% opaque */
cross-fade(url("red.png") 33.33%, url("yellow.png") 33.33%, url("blue.png") 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation für die `cross-fade()` Funktion erlaubt mehrere Bilder, wobei jedes Bild Transparenzwerte hat, die unabhängig von den anderen Werten sind. Dies war nicht immer der Fall. Die ursprüngliche Syntax, die in einigen Browsern implementiert wurde, erlaubte nur zwei Bilder, wobei die Summe der Transparenz dieser beiden Bilder genau 100% betrug. Die ursprüngliche Syntax wird in Safari und mit dem `-webkit-` Präfix in Chrome, Opera und anderen Blink-basierten Browsern unterstützt.

```css
cross-fade(url("white.png"), url("black.png"), 0%);   /* fully black */
cross-fade(url("white.png"), url("black.png"), 25%);  /* 25% white, 75% black */
cross-fade(url("white.png"), url("black.png"), 50%);  /* 50% white, 50% black */
cross-fade(url("white.png"), url("black.png"), 75%);  /* 75% white, 25% black */
cross-fade(url("white.png"), url("black.png"), 100%); /* fully white */
```

In der implementierten Syntax werden die beiden komma-getrennten Bilder zuerst deklariert, gefolgt von einem Komma und dem erforderlichen Prozentsatz. Das Weglassen des Kommas oder Prozentsatzes macht den Wert ungültig. Der Prozentsatz ist die Opazität des zuerst deklarierten Bildes. Der enthaltene Prozentsatz wird von 100% subtrahiert, wobei der Unterschied die Opazität des zweiten Bildes ist.

Das Grün/Rot-Beispiel (mit den Prozentsätzen, die insgesamt 150% ergeben) und das Gelb/Rot/Blau-Beispiel (mit drei Bildern) aus dem Abschnitt zur Spezifikationssyntax sind in dieser Implementierung nicht möglich.

## Barrierefreiheit

Browser liefern keine speziellen Informationen über Hintergrundbilder an unterstützende Technologien. Das ist hauptsächlich für Bildschirmleser wichtig, da ein Bildschirmleser seine Anwesenheit nicht bekanntgibt und daher seinen Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtsinnes der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben. Beim Verwenden von Hintergrundbildern stellen Sie sicher, dass der Farbkontrast groß genug ist, damit jeder Text über dem Bild sowie bei fehlenden Bildern lesbar ist.

- [MDN Understanding WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ältere Syntax für cross-fade

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
- Verlaufsfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
