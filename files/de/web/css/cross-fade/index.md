---
title: cross-fade()
slug: Web/CSS/cross-fade
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`cross-fade()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) kann verwendet werden, um zwei oder mehr Bilder mit einer definierten Transparenz zu überblenden.
Sie kann für viele einfache Bildbearbeitungen verwendet werden, wie zum Beispiel das Tönen eines Bildes mit einer Vollfarbe oder das Hervorheben eines bestimmten Bereiches der Seite, indem ein Bild mit einem radialen Farbverlauf kombiniert wird.

## Syntax

> [!WARNING]
> Die Spezifikation und die aktuellen Implementierungen haben unterschiedliche Syntaxen.
> Die Syntax der Spezifikation wird zuerst erklärt.

### Syntax der Spezifikation

Die `cross-fade()` Funktion nimmt eine Liste von Bildern mit einem Prozentsatz, der definiert, wie viel von jedem Bild in Bezug auf die Opazität beibehalten wird, wenn es mit den anderen Bildern überblendet wird. Der Prozentwert muss ohne Anführungszeichen codiert sein, muss das `'%'`-Symbol enthalten und sein Wert muss zwischen 0% und 100% liegen.

Die Funktion kann in CSS überall dort verwendet werden, wo ein gewöhnlicher Bildverweis verwendet werden kann.

#### Prozentsätze von Cross-fade

Betrachten Sie den Prozentsatz als einen Opazitätswert für jedes Bild. Das bedeutet, dass ein Wert von 0% bedeutet, dass das Bild vollständig transparent ist, während ein Wert von 100% das Bild vollständig opak macht.

```css
cross-fade(url(white.png) 0%, url(black.png) 100%); /* vollständig schwarz */
cross-fade(url(white.png) 25%, url(black.png) 75%); /* 25% weiß, 75% schwarz */
cross-fade(url(white.png) 50%, url(black.png) 50%); /* 50% weiß, 50% schwarz */
cross-fade(url(white.png) 75%, url(black.png) 25%); /* 75% weiß, 25% schwarz */
cross-fade(url(white.png) 100%, url(black.png) 0%); /* vollständig weiß */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* sowohl grün als auch rot zu 75% */
```

Wenn irgendwelche Prozentsätze weggelassen werden, werden alle angegebenen Prozentsätze zusammengezählt und von `100%` subtrahiert.
Wenn das Ergebnis größer als 0% ist, wird das Ergebnis dann gleichmäßig zwischen allen Bildern mit weggelassenen Prozentsätzen aufgeteilt.

Im einfachsten Fall werden zwei Bilder miteinander überblendet. Dazu muss nur eines der Bilder einen Prozentsatz haben, das andere wird entsprechend überblendet.
Zum Beispiel ergibt ein Wert von 0% für das erste Bild nur das zweite Bild, während 100% nur das erste ergibt.
Ein Wert von 25% zeigt das erste Bild zu 25% und das zweite zu 75%. Der Wert 75% ist das Umgekehrte und zeigt das erste Bild zu 75% und das zweite zu 25%.

Dies könnte auch wie folgt geschrieben werden:

```css
cross-fade(url(white.png) 0%, url(black.png)); /* vollständig schwarz */
cross-fade(url(white.png) 25%, url(black.png)); /* 25% weiß, 75% schwarz */
cross-fade(url(white.png), url(black.png)); /* 50% weiß, 50% schwarz */
cross-fade(url(white.png) 75%, url(black.png)); /* 75% weiß, 25% schwarz */
cross-fade(url(white.png) 100%, url(black.png)); /* vollständig weiß */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* sowohl grün als auch rot zu 75% */
```

Wenn keine Prozentsätze deklariert werden, sind beide Bilder zu 50% opak, wobei eine cross-fade Darstellung als gleichmäßige Verschmelzung beider Bilder zu sehen ist.
Das 50%/50%-Beispiel oben benötigte keine aufgelisteten Prozentsätze, da bei weggelassenem Prozentwert die enthaltenen Prozentsätze zusammengezählt und von 100% subtrahiert werden.
Das Ergebnis, wenn es größer als 0 ist, wird dann gleichmäßig zwischen allen Bildern mit weggelassenen Prozentsätzen aufgeteilt.

Im letzten Beispiel beträgt die Summe beider Prozentsätze nicht 100%, und daher beinhalten beide Bilder ihre jeweiligen Opazitäten.

Wenn keine Prozentwerte deklariert werden und drei Bilder einbegriffen sind, wird jedes Bild zu 33,33% opak sein. Die beiden folgenden Zeilen sind (fast) identisch:

```css
cross-fade(url(red.png), url(yellow.png), url(blue.png)); /* alle drei werden zu 33,3333% opak sein */
cross-fade(url(red.png) 33.33%, url(yellow.png) 33.33%, url(blue.png) 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation für die `cross-fade()` Funktion erlaubt mehrere Bilder und für jedes Bild unabhängige Transparenzwerte. Dies war nicht immer der Fall.
Die ursprüngliche Syntax, die in einigen Browsern implementiert wurde, erlaubte nur zwei Bilder, bei denen die Summe der Transparenz dieser beiden Bilder genau 100% betrug.
Die ursprüngliche Syntax wird in Safari unterstützt und mit dem `-webkit-` Präfix in Chrome, Opera und anderen Blink-basierten Browsern.

```css
cross-fade(url(white.png), url(black.png), 0%);   /* vollständig schwarz */
cross-fade(url(white.png), url(black.png), 25%);  /* 25% weiß, 75% schwarz */
cross-fade(url(white.png), url(black.png), 50%);  /* 50% weiß, 50% schwarz */
cross-fade(url(white.png), url(black.png), 75%);  /* 75% weiß, 25% schwarz */
cross-fade(url(white.png), url(black.png), 100%); /* vollständig weiß */
```

In der implementierten Syntax werden die zwei durch Kommas getrennten Bilder zuerst deklariert, gefolgt von einem Komma und dem erforderlichen Prozentwert. Das Weglassen des Kommas oder des Prozentsatzes macht den Wert ungültig.
Der Prozentwert ist die Opazität des zuerst deklarierten Bildes. Der einbezogene Prozentsatz wird von 100% subtrahiert, wobei die Differenz die Opazität des zweiten Bildes ist.

Das grün/rot-Beispiel (mit insgesamt 150% Prozentsätzen) und das gelb/rot/blau-Beispiel (mit drei Bildern) aus dem Abschnitt über die Syntax der Spezifikation sind in dieser Implementierung nicht möglich.

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist insbesondere für Screenreader wichtig, da ein Screenreader dessen Präsenz nicht ankündigt und dem Benutzer daher nichts vermittelt.
Wenn das Bild Informationen enthält, die zum Verständnis des übergeordneten Zwecks der Seite entscheidend sind, ist es besser, diese semantisch im Dokument zu beschreiben.
Wenn Sie Hintergrundbilder verwenden, stellen Sie sicher, dass der Farbkontrast groß genug ist, damit jedes Text über dem Bild lesbar ist, auch wenn die Bilder fehlen.

- [MDN Verständnis von WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Formal syntax

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
- [Verwendung von CSS Farbverläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Farbverlauf-Funktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
