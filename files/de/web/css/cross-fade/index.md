---
title: cross-fade()
slug: Web/CSS/cross-fade
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`cross-fade()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) kann verwendet werden, um zwei oder mehr Bilder mit einer definierten Transparenz zu überblenden.
Sie kann für viele einfache Bildmanipulationen verwendet werden, wie zum Beispiel das Tönen eines Bildes mit einer Volltonfarbe oder das Hervorheben eines bestimmten Bereichs der Seite durch die Kombination eines Bildes mit einem radialen Verlauf.

## Syntax

> [!WARNING]
> Die Spezifikation und aktuelle Implementierungen haben unterschiedliche Syntaxen.
> Zuerst wird die Spezifikationssyntax erläutert.

### Spezifikationssyntax

Die Funktion `cross-fade()` nimmt eine Liste von Bildern mit einem Prozentsatz auf, der definiert, wie viel von jedem Bild in Bezug auf die Deckkraft erhalten bleibt, wenn es mit den anderen Bildern überblendet wird. Der Prozentwert muss ohne Anführungszeichen kodiert werden, muss das `'%'`-Symbol enthalten und sein Wert muss zwischen 0% und 100% liegen.

Die Funktion kann in CSS überall dort verwendet werden, wo eine normale Bildreferenz verwendet werden kann.

#### Cross-fade-Prozentsätze

Betrachten Sie den Prozentsatz als einen Deckkraftwert für jedes Bild. Das bedeutet, dass ein Wert von 0% das Bild vollständig transparent macht, während ein Wert von 100% das Bild vollständig undurchsichtig macht.

```css
cross-fade(url(white.png) 0%, url(black.png) 100%); /* fully black */
cross-fade(url(white.png) 25%, url(black.png) 75%); /* 25% white, 75% black */
cross-fade(url(white.png) 50%, url(black.png) 50%); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png) 25%); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png) 0%); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

Wenn irgendwelche Prozentsätze weggelassen werden, werden alle angegebenen Prozentsätze zusammengezählt und von `100%` abgezogen.
Wenn das Ergebnis größer als 0% ist, wird das Ergebnis gleichmäßig auf alle Bilder mit weggelassenen Prozentsätzen verteilt.

Im einfachsten Fall werden zwei Bilder miteinander überblendet. Dafür muss nur eines der Bilder einen Prozentsatz haben, das andere wird entsprechend überblendet.
Zum Beispiel ergibt ein Wert von 0% für das erste Bild nur das zweite Bild, während 100% nur das erste ergibt.
Ein Wert von 25% zeigt das erste Bild zu 25% und das zweite zu 75%. Der Wert von 75% ist das Inverse und zeigt das erste Bild zu 75% und das zweite zu 25%.

Das oben Genannte hätte auch so geschrieben werden können:

```css
cross-fade(url(white.png) 0%, url(black.png)); /* fully black */
cross-fade(url(white.png) 25%, url(black.png)); /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png)); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png)); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png)); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

Wenn keine Prozentsätze angegeben werden, sind beide Bilder zu 50% undurchsichtig, wobei die Überblendung eine gleichmäßige Verschmelzung beider Bilder ergibt.
Das 50%/50%-Beispiel oben hätte die Prozentsätze nicht auflisten müssen, da bei einem weggelassenen Prozentwert die enthaltenen Prozentsätze zusammengezählt und von 100% abgezogen werden.
Das Ergebnis, wenn größer als 0, wird dann gleichmäßig auf alle Bilder mit weggelassenen Prozentsätzen verteilt.

Im letzten Beispiel ist die Summe beider Prozentsätze nicht 100%, und daher enthalten beide Bilder ihre jeweiligen Deckkraftwerte.

Wenn keine Prozentsätze angegeben werden und drei Bilder enthalten sind, ist jedes Bild zu 33,33% undurchsichtig. Die beiden folgenden Zeilen sind (fast) identisch:

```css
cross-fade(url(red.png), url(yellow.png), url(blue.png)); /* all three will be 33.3333% opaque */
cross-fade(url(red.png) 33.33%, url(yellow.png) 33.33%, url(blue.png) 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation für die Funktion `cross-fade()` erlaubt mehrere Bilder und für jedes Bild Transparenzwerte, die unabhängig von den anderen Werten sind.
Das war nicht immer der Fall.
Die ursprüngliche Syntax, die in einigen Browsern implementiert wurde, erlaubte nur zwei Bilder, wobei die Summe der Transparenz dieser zwei Bilder genau 100% betrug.
Die ursprüngliche Syntax wird in Safari unterstützt und mit dem Präfix `-webkit-` in Chrome, Opera und anderen Blink-basierten Browsern unterstützt.

```css
cross-fade(url(white.png), url(black.png), 0%);   /* fully black */
cross-fade(url(white.png), url(black.png), 25%);  /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png), 50%);  /* 50% white, 50% black */
cross-fade(url(white.png), url(black.png), 75%);  /* 75% white, 25% black */
cross-fade(url(white.png), url(black.png), 100%); /* fully white */
```

In der implementierten Syntax werden die zwei durch Kommas getrennten Bilder zuerst deklariert, gefolgt von einem Komma und dem erforderlichen Prozentwert. Das Weglassen des Kommas oder Prozentwerts macht den Wert ungültig.
Das Prozent gibt die Deckkraft des zuerst deklarierten Bildes an. Der enthaltene Prozentsatz wird von 100% abgezogen, wobei die Differenz die Deckkraft des zweiten Bildes ist.

Das Grün/Rot-Beispiel (mit den Prozentsätzen 150%) und das Gelb/Rot/Blau-Beispiel (mit drei Bildern) aus dem Abschnitt der Spezifikationssyntax sind in dieser Implementierung nicht möglich.

## Barrierefreiheit

Browser bieten Assistive Technologies keine besonderen Informationen zu Hintergrundbildern. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader das Vorhandensein nicht ankündigt und somit den Benutzern nichts vermittelt.
Wenn das Bild Informationen enthält, die zum Verständnis des gesamten Zwecks der Seite erforderlich sind, ist es besser, es semantisch im Dokument zu beschreiben.
Bei der Verwendung von Hintergrundbildern achten Sie darauf, dass der Kontrast in der Farbe groß genug ist, damit jeder Text über dem Bild ebenso lesbar ist wie bei fehlenden Bildern.

- [MDN Understanding WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

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
- Verlauffunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
