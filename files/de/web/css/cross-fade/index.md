---
title: cross-fade()
slug: Web/CSS/cross-fade
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`cross-fade()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) kann verwendet werden, um zwei oder mehr Bilder mit einer definierten Transparenz zu mischen.
Sie kann für viele grundlegende Bildmanipulationen genutzt werden, wie zum Beispiel das Tönen eines Bildes mit einer Vollfarbe oder das Hervorheben eines bestimmten Bereichs der Seite durch das Kombinieren eines Bildes mit einem radialen Verlauf.

## Syntax

> [!WARNING]
> Die Spezifikation und die aktuellen Implementierungen haben unterschiedliche Syntaxen.
> Die Syntax der Spezifikation wird zuerst erklärt.

### Spezifikationssyntax

Die `cross-fade()` Funktion nimmt eine Liste von Bildern mit einem Prozentwert auf, der definiert, wie viel von jedem Bild in Bezug auf die Deckkraft beibehalten wird, wenn es mit den anderen Bildern gemischt wird. Der Prozentwert muss ohne Anführungszeichen kodiert werden, muss das `'%'`-Symbol enthalten und sein Wert muss zwischen 0% und 100% liegen.

Die Funktion kann in CSS überall verwendet werden, wo eine gewöhnliche Bildreferenz verwendet werden kann.

#### Cross-fade-Prozentsätze

Denken Sie an den Prozentsatz als Deckkraftwert für jedes Bild. Das bedeutet, ein Wert von 0% macht das Bild vollständig transparent, während ein Wert von 100% das Bild vollständig undurchsichtig macht.

```css
cross-fade(url("white.png") 0%, url("black.png") 100%); /* fully black */
cross-fade(url("white.png") 25%, url("black.png") 75%); /* 25% white, 75% black */
cross-fade(url("white.png") 50%, url("black.png") 50%); /* 50% white, 50% black */
cross-fade(url("white.png") 75%, url("black.png") 25%); /* 75% white, 25% black */
cross-fade(url("white.png") 100%, url("black.png") 0%); /* fully white */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* both green and red at 75% */
```

Wenn Prozentsätze ausgelassen werden, werden alle angegebenen Prozentsätze zusammengezählt und von `100%` subtrahiert.
Wenn das Ergebnis größer als 0% ist, wird das Ergebnis gleichmäßig auf alle Bilder mit ausgelassenen Prozentsätzen verteilt.

Im einfachsten Fall werden zwei Bilder miteinander verblasst. Dazu muss nur eines der Bilder einen Prozentsatz haben, das andere wird entsprechend verblasst.
Zum Beispiel ergibt ein Wert von 0% für das erste Bild nur das zweite Bild, während 100% nur das erste ergibt.
Ein Wert von 25% zeigt das erste Bild zu 25% und das zweite zu 75%. Der 75%-Wert ist umgekehrt und zeigt das erste Bild zu 75% und das zweite zu 25%.

Das oben genannte hätte auch so geschrieben werden können:

```css
cross-fade(url("white.png") 0%, url("black.png")); /* fully black */
cross-fade(url("white.png") 25%, url("black.png")); /* 25% white, 75% black */
cross-fade(url("white.png"), url("black.png")); /* 50% white, 50% black */
cross-fade(url("white.png") 75%, url("black.png")); /* 75% white, 25% black */
cross-fade(url("white.png") 100%, url("black.png")); /* fully white */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* both green and red at 75% */
```

Wenn keine Prozentsätze angegeben werden, sind beide Bilder zu 50% opak, wobei ein Cross-Fade als gleichmäßige Mischung beider Bilder gerendert wird.
Das 50%/50%-Beispiel oben brauchte keine aufgelisteten Prozentsätze, da bei ausgelassenem Prozentsatz die enthaltenen Prozentsätze zusammengezählt und von 100% subtrahiert werden.
Das Ergebnis, wenn es größer als 0 ist, wird dann gleichmäßig auf alle Bilder mit ausgelassenen Prozentsätzen verteilt.

Im letzten Beispiel ist die Summe beider Prozentsätze nicht 100%, daher enthalten beide Bilder ihre jeweiligen Deckkräfte.

Wenn keine Prozentsätze deklariert sind und drei Bilder enthalten sind, ist jedes Bild zu 33,33% opak. Die zwei folgenden Zeilen sind (fast) identisch:

```css
cross-fade(url("red.png"), url("yellow.png"), url("blue.png")); /* all three will be 33.3333% opaque */
cross-fade(url("red.png") 33.33%, url("yellow.png") 33.33%, url("blue.png") 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation für die `cross-fade()` Funktion erlaubt mehrere Bilder und dass jedes Bild Transparenzwerte hat, die unabhängig von den anderen Werten sind.
Das war nicht immer der Fall.
Die ursprüngliche Syntax, die in einigen Browsern implementiert wurde, erlaubte nur zwei Bilder, wobei die Summe der Transparenz dieser beiden Bilder genau 100% betrug.
Die ursprüngliche Syntax wird in Safari unterstützt und mit dem `-webkit-` Präfix in Chrome, Opera und anderen auf Blink basierenden Browsern unterstützt.

```css
cross-fade(url("white.png"), url("black.png"), 0%);   /* fully black */
cross-fade(url("white.png"), url("black.png"), 25%);  /* 25% white, 75% black */
cross-fade(url("white.png"), url("black.png"), 50%);  /* 50% white, 50% black */
cross-fade(url("white.png"), url("black.png"), 75%);  /* 75% white, 25% black */
cross-fade(url("white.png"), url("black.png"), 100%); /* fully white */
```

In der implementierten Syntax werden die zwei durch Kommas getrennten Bilder zuerst deklariert, gefolgt von einem Komma und einem erforderlichen Prozentwert. Das Auslassen des Kommas oder Prozents macht den Wert ungültig.
Das Prozent gibt die Deckkraft des zuerst deklarierten Bildes an. Das enthaltene Prozent wird von 100% subtrahiert, wobei die Differenz die Deckkraft des zweiten Bildes ist.

Das Grün/Rot-Beispiel (mit den Prozentsätzen, die 150% ergeben) und das Gelb/Rot/Blau-Beispiel (mit drei Bildern) aus dem Abschnitt Spezifikationssyntax sind in dieser Implementierung nicht möglich.

## Barrierefreiheit

Browser stellen keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien bereit. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigen wird und daher seinen Nutzern nichts mitteilt.
Wenn das Bild Informationen enthält, die essentiell für das Verständnis des Gesamtzwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.
Wenn Hintergrundbilder verwendet werden, stellen Sie sicher, dass der Farbkontrast so groß ist, dass Text über dem Bild ebenso lesbar ist, wie wenn die Bilder fehlen.

- [MDN Verständnis von WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
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
- Verlauf-Funktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
