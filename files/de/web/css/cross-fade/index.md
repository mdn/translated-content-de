---
title: cross-fade()
slug: Web/CSS/cross-fade
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`cross-fade()`**-Funktion von [CSS](/de/docs/Web/CSS) kann verwendet werden, um zwei oder mehr Bilder mit einer definierten Transparenz zu überblenden.
Sie kann für viele grundlegende Bildmanipulationen verwendet werden, wie zum Beispiel das Tönen eines Bildes mit einer Volltonfarbe oder das Hervorheben eines bestimmten Bereichs der Seite durch die Kombination eines Bildes mit einem radialen Verlauf.

## Syntax

> [!WARNING]
> Die Spezifikation und die aktuellen Implementierungen haben unterschiedliche Syntaxen.
> Die Syntax der Spezifikation wird zuerst erklärt.

### Syntax der Spezifikation

Die `cross-fade()`-Funktion nimmt eine Liste von Bildern mit einem Prozentsatz auf, der definiert, wie viel von jedem Bild in Bezug auf die Deckkraft beibehalten wird, wenn es mit den anderen Bildern überblendet wird. Der Prozentwert muss ohne Anführungszeichen kodiert werden, muss das Symbol `'%'` enthalten und sein Wert muss zwischen 0% und 100% liegen.

Die Funktion kann in CSS überall dort verwendet werden, wo ein gewöhnlicher Bildbezug verwendet werden kann.

#### Prozentsätze für Cross-fade

Der Prozentsatz kann als Opazitätswert für jedes Bild angesehen werden. Das bedeutet, dass ein Wert von 0% das Bild vollständig transparent macht, während ein Wert von 100% das Bild vollständig opak macht.

```css
cross-fade(url("white.png") 0%, url("black.png") 100%); /* fully black */
cross-fade(url("white.png") 25%, url("black.png") 75%); /* 25% white, 75% black */
cross-fade(url("white.png") 50%, url("black.png") 50%); /* 50% white, 50% black */
cross-fade(url("white.png") 75%, url("black.png") 25%); /* 75% white, 25% black */
cross-fade(url("white.png") 100%, url("black.png") 0%); /* fully white */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* both green and red at 75% */
```

Wenn Prozentsätze weggelassen werden, werden alle angegebenen Prozentsätze zusammengezählt und von `100%` subtrahiert.
Wenn das Ergebnis größer als 0% ist, wird das Ergebnis gleichmäßig auf alle Bilder mit ausgelassenen Prozentsätzen verteilt.

Im einfachsten Fall werden zwei Bilder miteinander überblendet. Um das zu tun, muss nur eines der Bilder einen Prozentsatz haben, das andere wird entsprechend überblendet.
Zum Beispiel führt ein Wert von 0% für das erste Bild dazu, dass nur das zweite Bild angezeigt wird, während 100% nur das erste Bild ergeben.
Ein Wert von 25% rendert das erste Bild bei 25% und das zweite bei 75%. Der Wert von 75% ist das Inverse und zeigt das erste Bild bei 75% und das zweite bei 25%.

Das oben Genannte könnte auch so geschrieben werden:

```css
cross-fade(url("white.png") 0%, url("black.png")); /* fully black */
cross-fade(url("white.png") 25%, url("black.png")); /* 25% white, 75% black */
cross-fade(url("white.png"), url("black.png")); /* 50% white, 50% black */
cross-fade(url("white.png") 75%, url("black.png")); /* 75% white, 25% black */
cross-fade(url("white.png") 100%, url("black.png")); /* fully white */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* both green and red at 75% */
```

Wenn keine Prozentsätze angegeben sind, sind beide Bilder zu 50% opak, wobei ein Cross-fade als gleichmäßige Verschmelzung beider Bilder wiedergegeben wird.
Das 50%/50%-Beispiel oben musste die Prozentsätze nicht auflisten, da bei weggelassenem Prozentwert die eingeschlossenen Prozentsätze addiert und von 100% abgezogen werden.
Das Ergebnis wird, falls es größer als 0 ist, dann gleichmäßig auf alle Bilder mit weggelassenen Prozentsätzen verteilt.

Im letzten Beispiel ist die Summe beider Prozentsätze nicht 100%, und daher schließen beide Bilder ihre jeweiligen Opazitäten ein.

Wenn keine Prozentsätze angegeben sind und drei Bilder eingeschlossen sind, wird jedes Bild zu 33,33% opak sein. Die beiden folgenden Zeilen sind (fast) identisch:

```css
cross-fade(url("red.png"), url("yellow.png"), url("blue.png")); /* all three will be 33.3333% opaque */
cross-fade(url("red.png") 33.33%, url("yellow.png") 33.33%, url("blue.png") 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation für die `cross-fade()`-Funktion erlaubt mehrere Bilder, wobei jedes Bild Transparenzwerte unabhängig von den anderen Werten haben kann.
Dies war nicht immer der Fall.
Die ursprüngliche Syntax, die in einigen Browsern implementiert wurde, erlaubte nur zwei Bilder, wobei die Summe der Transparenz dieser beiden Bilder genau 100% betragen musste.
Die ursprüngliche Syntax wird in Safari unterstützt und mit dem `-webkit-` Präfix in Chrome, Opera und anderen auf Blink basierenden Browsern unterstützt.

```css
cross-fade(url("white.png"), url("black.png"), 0%);   /* fully black */
cross-fade(url("white.png"), url("black.png"), 25%);  /* 25% white, 75% black */
cross-fade(url("white.png"), url("black.png"), 50%);  /* 50% white, 50% black */
cross-fade(url("white.png"), url("black.png"), 75%);  /* 75% white, 25% black */
cross-fade(url("white.png"), url("black.png"), 100%); /* fully white */
```

In der implementierten Syntax werden die beiden durch Komma getrennten Bilder zuerst deklariert, gefolgt von einem Komma und dem erforderlichen Prozentwert. Das Auslassen des Kommas oder des Prozents invalidiert den Wert.
Das Prozent ist die Opazität des zuerst deklarierten Bildes. Der enthaltene Prozentsatz wird von 100% abgezogen, wobei die Differenz die Opazität des zweiten Bildes ist.

Das Grün/Rot-Beispiel (mit Prozentsätzen, die insgesamt 150% betragen) und das Gelb/Rot/Blau-Beispiel (mit drei Bildern) aus dem Abschnitt zur Spezifikationssyntax sind in dieser Implementierung nicht möglich.

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigen wird und den Benutzern daher nichts vermittelt.
Wenn das Bild Informationen enthält, die wesentlich für das Verständnis des Gesamtzwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.
Wenn Hintergrundbilder verwendet werden, stellen Sie sicher, dass der Kontrast in der Farbe groß genug ist, sodass jeder Text über dem Bild und auch bei fehlenden Bildern lesbar ist.

- [MDN Verständnis von WCAG, Erklärung zu Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung zum Erfolgskriterium 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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
- Verlaufsfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
