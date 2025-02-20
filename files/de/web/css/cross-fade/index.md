---
title: cross-fade()
slug: Web/CSS/cross-fade
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{CSSRef}}

Die **`cross-fade()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) kann verwendet werden, um zwei oder mehr Bilder mit einer definierten Transparenz zu überblenden. Sie kann für viele einfache Bildmanipulationen verwendet werden, wie zum Beispiel das Tönen eines Bildes mit einer einfarbigen Farbe oder das Hervorheben eines bestimmten Bereichs der Seite durch die Kombination eines Bildes mit einem radialen Verlauf.

## Syntax

> [!WARNING]
> Die Spezifikation und die aktuellen Implementierungen haben unterschiedliche Syntaxen.
> Zuerst wird die Syntax der Spezifikation erklärt.

### Syntax der Spezifikation

Die `cross-fade()`-Funktion nimmt eine Liste von Bildern mit einem Prozentsatz auf, der definiert, wie viel von jedem Bild in Bezug auf die Deckkraft beibehalten wird, wenn es mit anderen Bildern überblendet wird. Der Prozentwert muss ohne Anführungszeichen angegeben werden, muss das `'%'`-Symbol enthalten, und sein Wert muss zwischen 0 % und 100 % liegen.

Die Funktion kann in CSS überall dort verwendet werden, wo ein herkömmlicher Bildverweis verwendet werden kann.

#### Prozentwerte für Cross-Fade

Betrachten Sie den Prozentsatz als einen Deckkraftwert für jedes Bild. Das bedeutet, dass ein Wert von 0 % das Bild vollständig transparent macht, während ein Wert von 100 % das Bild vollständig deckend macht.

```css
cross-fade(url(white.png) 0%, url(black.png) 100%); /* fully black */
cross-fade(url(white.png) 25%, url(black.png) 75%); /* 25% white, 75% black */
cross-fade(url(white.png) 50%, url(black.png) 50%); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png) 25%); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png) 0%); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

Wenn Prozentsätze ausgelassen werden, werden alle angegebenen Prozentwerte summiert und von `100 %` abgezogen. Wenn das Ergebnis größer als 0 % ist, wird das Ergebnis dann gleichmäßig zwischen allen Bildern mit ausgelassenen Prozentwerten aufgeteilt.

Im einfachsten Fall werden zwei Bilder miteinander überblendet. Dafür muss nur eines der Bilder einen Prozentsatz haben, das andere wird entsprechend überblendet. Zum Beispiel ergibt ein Wert von 0 % für das erste Bild nur das zweite Bild, während 100 % nur das erste Bild ergibt. Ein 25 %-Wert zeigt das erste Bild mit 25 % und das zweite mit 75 %. Der Wert 75 % ist das Gegenteil und zeigt das erste Bild mit 75 % und das zweite mit 25 %.

Das oben Genannte hätte auch folgendermaßen geschrieben werden können:

```css
cross-fade(url(white.png) 0%, url(black.png)); /* fully black */
cross-fade(url(white.png) 25%, url(black.png)); /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png)); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png)); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png)); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

Wenn keine Prozentwerte deklariert werden, werden beide Bilder zu 50 % deckend, und das Cross-Fade wird als gleichmäßige Verschmelzung beider Bilder dargestellt. Das Beispiel mit 50 %/50 % oben hätte keine Prozente aufweisen müssen, da, wenn ein Prozentwert ausgelassen wird, die enthaltenen Werte summiert und von 100 % subtrahiert werden. Das Ergebnis, falls größer als 0, wird dann gleichmäßig zwischen allen Bildern mit ausgelassenen Prozentwerten aufgeteilt.

Im letzten Beispiel ist die Summe beider Prozentwerte nicht 100 %, und daher enthalten beide Bilder ihre jeweiligen Deckkraftwerte.

Wenn keine Prozentwerte deklariert werden und drei Bilder enthalten sind, wird jedes Bild zu 33,33 % deckend. Die zwei folgenden Zeilen sind (fast) identisch:

```css
cross-fade(url(red.png), url(yellow.png), url(blue.png)); /* all three will be 33.3333% opaque */
cross-fade(url(red.png) 33.33%, url(yellow.png) 33.33%, url(blue.png) 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation der `cross-fade()`-Funktion erlaubt mehrere Bilder, und jedes Bild kann Transparenzwerte haben, die unabhängig von den anderen Werten sind. Das war nicht immer der Fall. Die ursprüngliche Syntax, die in einigen Browsern implementiert wurde, erlaubte nur zwei Bilder, wobei die Summe der Transparenz dieser beiden Bilder genau 100 % betrug. Die ursprüngliche Syntax wird in Safari unterstützt und mit dem Präfix `-webkit-` in Chrome, Opera und anderen auf Blink basierenden Browsern unterstützt.

```css
cross-fade(url(white.png), url(black.png), 0%);   /* fully black */
cross-fade(url(white.png), url(black.png), 25%);  /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png), 50%);  /* 50% white, 50% black */
cross-fade(url(white.png), url(black.png), 75%);  /* 75% white, 25% black */
cross-fade(url(white.png), url(black.png), 100%); /* fully white */
```

In der implementierten Syntax werden die beiden durch Kommas getrennten Bilder zuerst deklariert, gefolgt von einem Komma und einem erforderlichen Prozentwert. Das Weglassen des Kommas oder des Prozentsatzes macht den Wert ungültig. Der Prozentsatz gibt die Deckkraft des zuerst deklarierten Bildes an. Der eingeschlossene Prozentsatz wird von 100 % subtrahiert, und die Differenz ergibt die Deckkraft des zweiten Bildes.

Das Grün/Rot-Beispiel (mit den Prozentsätzen, die 150 % ergeben) und das Gelb/Rot/Blau-Beispiel (mit drei Bildern) aus dem Abschnitt zur Spezifikationssyntax sind in dieser Implementierung nicht möglich.

## Barrierefreiheit

Browser geben keine speziellen Informationen zu Hintergrundbildern an unterstützende Technologien weiter. Dies ist vor allem für Screenreader relevant, da ein Screenreader das Vorhandensein eines Bildes nicht ankündigen und daher seinen Benutzer:innen nichts mitteilen wird. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des Zwecks der gesamten Seite sind, ist es besser, diese semantisch im Dokument zu beschreiben. Wenn Sie Hintergrundbilder verwenden, achten Sie darauf, dass der Farbkontrast groß genug ist, damit jeder Text lesbar ist, sowohl über dem Bild als auch, falls die Bilder fehlen.

- [MDN: Verständnis der WCAG, Guideline 1.1-Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ältere Syntax für cross-fade

#### HTML

```html
<div class="crossfade"></div>
```

#### CSS

```css
.crossfade {
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
- [CSS-Verläufe verwenden](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Gradientenfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
