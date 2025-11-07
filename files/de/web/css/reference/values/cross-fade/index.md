---
title: cross-fade()
slug: Web/CSS/Reference/Values/cross-fade
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`cross-fade()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann verwendet werden, um zwei oder mehr Bilder mit einer definierten Transparenz zu überblenden.
Sie kann für viele grundlegende Bildmanipulationen verwendet werden, wie zum Beispiel das Tönen eines Bildes mit einer einfarbigen Farbe oder das Hervorheben eines bestimmten Seitenbereichs durch Kombinieren eines Bildes mit einem radialen Farbverlauf.

## Syntax

> [!WARNING]
> Die Spezifikation und die aktuellen Implementierungen haben unterschiedliche Syntaxen.
> Die Spezifikationssyntax wird zuerst erklärt.

### Spezifikationssyntax

Die `cross-fade()` Funktion nimmt eine Liste von Bildern mit einem Prozentsatz, der definiert, wie viel von jedem Bild in Bezug auf Deckkraft beibehalten wird, wenn es mit den anderen Bildern überblendet wird. Der Prozentwert muss ohne Anführungszeichen kodiert sein, muss das `'%'`-Symbol enthalten und sein Wert muss zwischen 0% und 100% liegen.

Die Funktion kann in CSS überall dort verwendet werden, wo eine gewöhnliche Bildreferenz verwendet werden kann.

#### Cross-fade Prozentsätze

Betrachten Sie den Prozentsatz als einen Deckkraftwert für jedes Bild. Das bedeutet, dass ein Wert von 0% bedeutet, dass das Bild vollständig transparent ist, während ein Wert von 100% das Bild vollständig opak macht.

```css
cross-fade(url("white.png") 0%, url("black.png") 100%); /* fully black */
cross-fade(url("white.png") 25%, url("black.png") 75%); /* 25% white, 75% black */
cross-fade(url("white.png") 50%, url("black.png") 50%); /* 50% white, 50% black */
cross-fade(url("white.png") 75%, url("black.png") 25%); /* 75% white, 25% black */
cross-fade(url("white.png") 100%, url("black.png") 0%); /* fully white */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* both green and red at 75% */
```

Wenn Prozentsätze weggelassen werden, werden alle angegebenen Prozentsätze zusammengezählt und von `100%` subtrahiert.
Wenn das Ergebnis größer als 0% ist, wird es dann gleichmäßig auf alle Bilder mit weggelassenen Prozentsätzen aufgeteilt.

Im einfachsten Fall werden zwei Bilder ineinander übergeblendet. Um das zu erreichen, muss nur eines der Bilder einen Prozentsatz haben, das andere wird entsprechend verblendet.
Ein Beispiel: Ein Wert von 0% für das erste Bild ergibt nur das zweite Bild, während 100% nur das erste ergibt.
Ein Wert von 25% rendert das erste Bild bei 25% und das zweite bei 75%. Der 75%-Wert ist das Gegenteil und zeigt das erste Bild bei 75% und das zweite bei 25%.

Das obige könnte auch so geschrieben werden:

```css
cross-fade(url("white.png") 0%, url("black.png")); /* fully black */
cross-fade(url("white.png") 25%, url("black.png")); /* 25% white, 75% black */
cross-fade(url("white.png"), url("black.png")); /* 50% white, 50% black */
cross-fade(url("white.png") 75%, url("black.png")); /* 75% white, 25% black */
cross-fade(url("white.png") 100%, url("black.png")); /* fully white */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* both green and red at 75% */
```

Wenn keine Prozentsätze deklariert werden, sind beide Bilder zu 50% opak, mit einer Kreuzüberblendung, die als gleichmäßige Verschmelzung beider Bilder erfolgt.
Das 50%/50% Beispiel, das oben zu sehen ist, benötigte keine aufgelisteten Prozentsätze, da, wenn ein Prozentsatz weggelassen wird, die eingeschlossenen Prozentsätze addiert und von 100% subtrahiert werden.
Das Ergebnis, wenn es größer als 0 ist, wird dann gleichmäßig auf alle Bilder mit weggelassenen Prozentsätzen aufgeteilt.

Im letzten Beispiel ist die Summe beider Prozentsätze nicht 100% und daher beinhalten beide Bilder ihre jeweiligen Deckkraftwerte.

Wenn keine Prozentsätze deklariert werden und drei Bilder enthalten sind, ist jedes Bild zu 33,33% opak. Die folgenden zwei Zeilen sind (fast) identisch:

```css
cross-fade(url("red.png"), url("yellow.png"), url("blue.png")); /* all three will be 33.3333% opaque */
cross-fade(url("red.png") 33.33%, url("yellow.png") 33.33%, url("blue.png") 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation für die `cross-fade()` Funktion erlaubt mehrere Bilder und dass jedes Bild Transparenzwerte unabhängig von den anderen Werten hat.
Das war nicht immer der Fall.
Die ursprüngliche Syntax, die in einigen Browsern implementiert wurde, erlaubte nur zwei Bilder, wobei die Summe der Transparenz dieser beiden Bilder genau 100% sein musste.
Die ursprüngliche Syntax wird in Safari unterstützt und mit dem `-webkit-` Präfix in Chrome, Opera und anderen auf blink basierenden Browsern.

```css
cross-fade(url("white.png"), url("black.png"), 0%);   /* fully black */
cross-fade(url("white.png"), url("black.png"), 25%);  /* 25% white, 75% black */
cross-fade(url("white.png"), url("black.png"), 50%);  /* 50% white, 50% black */
cross-fade(url("white.png"), url("black.png"), 75%);  /* 75% white, 25% black */
cross-fade(url("white.png"), url("black.png"), 100%); /* fully white */
```

In der implementierten Syntax werden die beiden durch Kommas getrennten Bilder zuerst deklariert, gefolgt von einem Komma und einem erforderlichen Prozentwert. Das Weglassen des Kommas oder Prozents macht den Wert ungültig.
Das Prozent ist die Deckkraft des zuerst deklarierten Bildes. Der eingeschlossene Prozentsatz wird von 100% subtrahiert, wobei der Unterschied die Deckkraft des zweiten Bildes ist.

Das Grün/Rot Beispiel (mit einem Gesamtprozentsatz von 150%) und das Gelb/Rot/Blau Beispiel (mit drei Bildern) aus dem Abschnitt über die Spezifikationssyntax sind in dieser Implementierung nicht möglich.

## Barrierefreiheit

Browser bieten keine besonderen Informationen über Hintergrundbilder für unterstützende Technologien. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher nichts an seine Benutzer vermittelt.
Wenn das Bild Informationen enthält, die für das Verständnis des gesamten Zwecks der Seite kritisch sind, ist es besser, es semantisch im Dokument zu beschreiben.
Wenn Sie Hintergrundbilder verwenden, stellen Sie sicher, dass der Kontrast in den Farben groß genug ist, damit jeder Text über dem Bild lesbar ist, ebenso wie wenn die Bilder fehlen.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
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
