---
title: cross-fade()
slug: Web/CSS/cross-fade
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`cross-fade()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um zwei oder mehr Bilder mit einer definierten Transparenz zu mischen.
Sie kann für viele grundlegende Bildmanipulationen verwendet werden, wie zum Beispiel das Einfärben eines Bildes mit einer Volltonfarbe oder das Hervorheben eines bestimmten Bereichs der Seite durch das Kombinieren eines Bildes mit einem radialen Verlauf.

## Syntax

> [!WARNING]
> Die Spezifikation und die aktuellen Implementierungen haben unterschiedliche Syntaxen.
> Die Spezifikationssyntax wird zuerst erklärt.

### Spezifikationssyntax

Die `cross-fade()` Funktion nimmt eine Liste von Bildern mit einem Prozentsatz, der definiert, wie viel von jedem Bild hinsichtlich der Transparenz erhalten bleibt, wenn es mit den anderen Bildern gemischt wird. Der Prozentwert muss ohne Anführungszeichen codiert werden, muss das Symbol `'%'` enthalten und sein Wert muss zwischen 0% und 100% liegen.

Die Funktion kann in CSS überall dort verwendet werden, wo eine normale Bildreferenz verwendet werden kann.

#### Cross-fade Prozentsätze

Betrachten Sie den Prozentsatz wie einen Opazitätswert für jedes Bild. Das bedeutet, dass ein Wert von 0% bedeutet, dass das Bild vollständig transparent ist, während ein Wert von 100% das Bild vollständig undurchsichtig macht.

```css
cross-fade(url(white.png) 0%, url(black.png) 100%); /* fully black */
cross-fade(url(white.png) 25%, url(black.png) 75%); /* 25% white, 75% black */
cross-fade(url(white.png) 50%, url(black.png) 50%); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png) 25%); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png) 0%); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

Wenn irgendwelche Prozentsätze weggelassen werden, werden alle angegebenen Prozentsätze zusammengezählt und von `100%` abgezogen.
Wenn das Ergebnis größer als 0% ist, wird das Ergebnis dann gleichmäßig auf alle Bilder mit ausgelassenen Prozentsätzen verteilt.

Im einfachsten Fall werden zwei Bilder miteinander ausgeblendet. Dazu muss nur eines der Bilder einen Prozentsatz haben, das andere wird entsprechend ausgeblendet.
Zum Beispiel ergibt ein Wert von 0% für das erste Bild nur das zweite Bild, während 100% nur das erste Bild ergibt.
Ein Wert von 25% stellt das erste Bild bei 25% und das zweite bei 75% dar. Der 75%-Wert ist das Gegenteil und zeigt das erste Bild bei 75% und das zweite bei 25%.

Das Obige könnte auch wie folgt geschrieben werden:

```css
cross-fade(url(white.png) 0%, url(black.png)); /* fully black */
cross-fade(url(white.png) 25%, url(black.png)); /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png)); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png)); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png)); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

Wenn keine Prozentsätze angegeben sind, werden beide Bilder zu 50% undurchsichtig sein und das Cross-Fade wird als gleichmäßige Verschmelzung beider Bilder dargestellt.
Das 50%/50% Beispiel oben benötigte keine aufgeführten Prozentsätze, da, wenn ein Prozentwert weggelassen wird, die enthaltenen Prozentsätze addiert und von 100% subtrahiert werden.
Das Ergebnis, wenn es größer als 0 ist, wird dann gleichmäßig auf alle Bilder mit weggelassenen Prozentsätzen verteilt.

Im letzten Beispiel ergibt die Summe beider Prozentsätze nicht 100%, und daher enthalten beide Bilder ihre jeweiligen Opazitäten.

Wenn keine Prozentsätze angegeben sind und drei Bilder eingeschlossen werden, wird jedes Bild zu 33,33% undurchsichtig sein. Die beiden folgenden Zeilen sind (fast) identisch:

```css
cross-fade(url(red.png), url(yellow.png), url(blue.png)); /* all three will be 33.3333% opaque */
cross-fade(url(red.png) 33.33%, url(yellow.png) 33.33%, url(blue.png) 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation für die `cross-fade()`-Funktion ermöglicht mehrere Bilder und dass jedes Bild Transparenzwerte unabhängig von den anderen Werten hat.
Dies war nicht immer der Fall.
Die ursprüngliche Syntax, die in einigen Browsern implementiert wurde, erlaubte nur zwei Bilder, wobei die Summe der Transparenz dieser beiden Bilder genau 100% betrug.
Die ursprüngliche Syntax wird in Safari unterstützt und wird in Chrome, Opera und anderen auf Blink basierenden Browsern mit dem `-webkit-` Präfix unterstützt.

```css
cross-fade(url(white.png), url(black.png), 0%);   /* fully black */
cross-fade(url(white.png), url(black.png), 25%);  /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png), 50%);  /* 50% white, 50% black */
cross-fade(url(white.png), url(black.png), 75%);  /* 75% white, 25% black */
cross-fade(url(white.png), url(black.png), 100%); /* fully white */
```

In der implementierten Syntax werden die beiden durch Kommas getrennten Bilder zuerst angegeben, gefolgt von einem Komma und einem erforderlichen Prozentwert. Das Auslassen des Kommas oder Prozentzeichens macht den Wert ungültig.
Das Prozent ist die Opazität des zuerst angegebenen Bildes. Der enthaltene Prozentsatz wird von 100% abgezogen, wobei die Differenz die Opazität des zweiten Bildes ist.

Das grün/rot Beispiel (mit den Prozentsätzen, die insgesamt 150% ergeben) und das gelb/rot/blaue Beispiel (mit drei Bildern) aus dem Spezifikationssyntax-Abschnitt sind in dieser Implementierung nicht möglich.

## Barrierefreiheit

Browser bieten keine speziellen Informationen über Hintergrundbilder für unterstützende Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher nichts seinen Benutzern vermittelt.
Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des allgemeinen Zwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.
Wenn Sie Hintergrundbilder verwenden, stellen Sie sicher, dass der Farbkontrast groß genug ist, damit jeder Text über dem Bild lesbar ist, sowie wenn die Bilder fehlen.

- [MDN Verständnis von WCAG, Erklärung der Leitlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Verlauf Funktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
