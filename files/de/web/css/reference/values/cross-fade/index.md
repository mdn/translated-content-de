---
title: "`cross-fade()` CSS-Funktion"
short-title: cross-fade()
slug: Web/CSS/Reference/Values/cross-fade
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`cross-fade()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann verwendet werden, um zwei oder mehr Bilder mit einer definierten Transparenz zu überblenden.
Sie kann für viele grundlegende Bildmanipulationen verwendet werden, wie das Tönen eines Bildes mit einer Volltonfarbe oder das Hervorheben eines bestimmten Bereichs der Seite durch Kombinieren eines Bildes mit einem radialen Verlauf.

## Syntax

> [!WARNING]
> Die Spezifikation und die aktuellen Implementierungen haben unterschiedliche Syntaxen.
> Die Syntax der Spezifikation wird zuerst erklärt.

### Syntax der Spezifikation

Die `cross-fade()`-Funktion nimmt eine Liste von Bildern mit einem Prozentsatz, der definiert, wie viel von jedem Bild in Bezug auf die Deckkraft erhalten bleibt, wenn es mit den anderen Bildern überblendet wird. Der Prozentwert muss ohne Anführungszeichen kodiert werden, muss das Symbol `'%'` enthalten, und sein Wert muss zwischen 0% und 100% liegen.

Die Funktion kann in CSS überall dort verwendet werden, wo ein gewöhnlicher Bildverweis verwendet werden kann.

#### Cross-fade-Prozentsätze

Betrachten Sie den Prozentsatz als einen Opazitätswert für jedes Bild. Dies bedeutet, dass ein Wert von 0% das Bild vollständig transparent macht, während ein Wert von 100% das Bild vollständig undurchsichtig macht.

```css
cross-fade(url("white.png") 0%, url("black.png") 100%); /* fully black */
cross-fade(url("white.png") 25%, url("black.png") 75%); /* 25% white, 75% black */
cross-fade(url("white.png") 50%, url("black.png") 50%); /* 50% white, 50% black */
cross-fade(url("white.png") 75%, url("black.png") 25%); /* 75% white, 25% black */
cross-fade(url("white.png") 100%, url("black.png") 0%); /* fully white */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* both green and red at 75% */
```

Wenn Prozentsätze weggelassen werden, werden alle angegebenen Prozentsätze zusammengezählt und von `100%` subtrahiert.
Wenn das Ergebnis größer als 0% ist, wird das Ergebnis dann gleichmäßig auf alle Bilder mit weggelassenen Prozentsätzen aufgeteilt.

Im einfachsten Fall werden zwei Bilder miteinander verblendet. Dazu muss nur eines der Bilder einen Prozentsatz haben, das andere wird entsprechend verblendet.
Zum Beispiel ergibt ein Wert von 0% für das erste Bild nur das zweite Bild, während 100% nur das erste ergeben.
Ein Wert von 25% zeigt das erste Bild zu 25% und das zweite zu 75%. Der 75%-Wert ist das Gegenteil und zeigt das erste Bild zu 75% und das zweite zu 25%.

Das oben Genannte könnte auch so geschrieben werden:

```css
cross-fade(url("white.png") 0%, url("black.png")); /* fully black */
cross-fade(url("white.png") 25%, url("black.png")); /* 25% white, 75% black */
cross-fade(url("white.png"), url("black.png")); /* 50% white, 50% black */
cross-fade(url("white.png") 75%, url("black.png")); /* 75% white, 25% black */
cross-fade(url("white.png") 100%, url("black.png")); /* fully white */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* both green and red at 75% */
```

Wenn keine Prozentsätze deklariert werden, sind beide Bilder zu 50% undurchsichtig, und es entsteht eine gleichmäßige Mischung beider Bilder beim Cross-Fade.
Das 50%/50%-Beispiel oben musste nicht die Prozentsätze angeben, da, wenn ein Prozentwert weggelassen wird, die enthaltenen Prozentsätze zusammengezählt und von 100% subtrahiert werden.
Wenn das Ergebnis größer als 0 ist, wird es dann gleichmäßig auf alle Bilder mit weggelassenen Prozentsätzen aufgeteilt.

Im letzten Beispiel beträgt die Summe beider Prozentsätze nicht 100%, und daher beinhalten beide Bilder ihre jeweiligen Deckkraftwerte.

Wenn keine Prozentsätze angegeben werden und drei Bilder enthalten sind, wird jedes Bild zu 33,33% undurchsichtig sein. Die beiden folgenden Zeilen sind (fast) identisch:

```css
cross-fade(url("red.png"), url("yellow.png"), url("blue.png")); /* all three will be 33.3333% opaque */
cross-fade(url("red.png") 33.33%, url("yellow.png") 33.33%, url("blue.png") 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation für die `cross-fade()`-Funktion ermöglicht es, mehrere Bilder zu verwenden, und dass jedes Bild unabhängige Transparenzwerte hat.
Das war nicht immer so.
Die ursprüngliche Syntax, die in einigen Browsern implementiert ist, erlaubte nur zwei Bilder, wobei die Summe der Transparenz dieser beiden Bilder genau 100% betrug.
Die ursprüngliche Syntax wird in Safari unterstützt und mit dem `-webkit-` Präfix in Chrome, Opera und anderen Blink-basierten Browsern unterstützt.

```css
cross-fade(url("white.png"), url("black.png"), 0%);   /* fully black */
cross-fade(url("white.png"), url("black.png"), 25%);  /* 25% white, 75% black */
cross-fade(url("white.png"), url("black.png"), 50%);  /* 50% white, 50% black */
cross-fade(url("white.png"), url("black.png"), 75%);  /* 75% white, 25% black */
cross-fade(url("white.png"), url("black.png"), 100%); /* fully white */
```

In der implementierten Syntax werden die beiden durch Kommas getrennten Bilder zuerst deklariert, gefolgt von einem Komma und dem erforderlichen Prozentwert. Das Weglassen des Kommas oder Prozentsatzes macht den Wert ungültig.
Der Prozentsatz ist die Opazität des zuerst deklarierten Bildes. Der enthaltene Prozentsatz wird von 100% subtrahiert, und die Differenz ist die Opazität des zweiten Bildes.

Das Grün/Rot-Beispiel (mit Prozentsätzen, die insgesamt 150% betragen) und das Gelb/Rot/Blau-Beispiel (mit drei Bildern) aus dem Abschnitt zur Spezifikationssyntax sind in dieser Implementierung nicht möglich.

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader dessen Vorhandensein nicht ankündigt und somit den Benutzern nichts vermittelt.
Wenn das Bild Informationen enthält, die entscheidend zum Verständnis des Gesamtsinns der Seite beitragen, ist es besser, diese semantisch im Dokument zu beschreiben.
Wenn Hintergrundbilder verwendet werden, stellen Sie sicher, dass der Farbkontrast groß genug ist, sodass jeder Text sowohl über dem Bild als auch bei fehlenden Bildern lesbar ist.

- [MDN Verständnis von WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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
- Verlaufsfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
