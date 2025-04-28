---
title: cross-fade()
slug: Web/CSS/cross-fade
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{CSSRef}}

Die **`cross-fade()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um zwei oder mehr Bilder mit einer definierten Transparenz zu mischen. Sie kann für viele grundlegende Bildmanipulationen verwendet werden, wie zum Beispiel das Tönen eines Bildes mit einer Volltonfarbe oder das Hervorheben eines bestimmten Bereichs der Seite durch Kombinieren eines Bildes mit einem radialen Verlauf.

## Syntax

> [!WARNING]
> Die Spezifikation und die derzeitigen Implementierungen haben unterschiedliche Syntaxen.
> Zunächst wird die Syntax der Spezifikation erklärt.

### Spezifikationssyntax

Die Funktion `cross-fade()` nimmt eine Liste von Bildern mit einem Prozentsatz auf, der definiert, wie viel von jedem Bild in Bezug auf die Deckkraft erhalten bleibt, wenn es mit den anderen Bildern gemischt wird. Der Prozentwert muss ohne Anführungszeichen codiert sein, muss das `'%'`-Symbol enthalten und sein Wert muss zwischen 0 % und 100 % liegen.

Die Funktion kann in CSS überall dort verwendet werden, wo ein gewöhnlicher Bildverweis verwendet werden kann.

#### Cross-fade Prozentwerte

Betrachten Sie den Prozentsatz als einen Deckkraftwert für jedes Bild. Das bedeutet, dass ein Wert von 0 % das Bild vollständig transparent macht, während ein Wert von 100 % das Bild vollständig opak macht.

```css
cross-fade(url(white.png) 0%, url(black.png) 100%); /* fully black */
cross-fade(url(white.png) 25%, url(black.png) 75%); /* 25% white, 75% black */
cross-fade(url(white.png) 50%, url(black.png) 50%); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png) 25%); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png) 0%); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

Wenn irgendwelche Prozentsätze weggelassen werden, werden alle angegebenen Prozentsätze zusammengezählt und von `100%` subtrahiert. Wenn das Ergebnis größer als 0 % ist, wird das Ergebnis dann gleichmäßig auf alle Bilder mit weggelassenen Prozentsätzen verteilt.

Im einfachsten Fall werden zwei Bilder miteinander überblendet. Um dies zu tun, muss nur eines der Bilder einen Prozentsatz haben, das andere wird entsprechend überblendet. Beispielsweise ergibt ein Wert von 0 % für das erste Bild nur das zweite Bild, während 100 % nur das erste Bild ergeben. Ein Wert von 25 % zeigt das erste Bild zu 25 % und das zweite zu 75 %. Der 75 %-Wert ist das Inverse, zeigt das erste Bild zu 75 % und das zweite zu 25 %.

Das obige könnte auch so geschrieben werden:

```css
cross-fade(url(white.png) 0%, url(black.png)); /* fully black */
cross-fade(url(white.png) 25%, url(black.png)); /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png)); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png)); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png)); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

Wenn keine Prozentsätze deklariert sind, werden beide Bilder zu 50 % opak, wobei das Cross-Fade als gleichmäßige Mischung beider Bilder gerendert wird. Das 50%/50% Beispiel, das oben zu sehen war, benötigte keine aufgelisteten Prozentsätze, da beim Weglassen eines Prozentwertes die angegebenen Prozentsätze zusammengezählt und von 100% subtrahiert werden. Das Ergebnis, sofern größer als 0, wird dann gleichmäßig auf alle Bilder mit weggelassenen Prozentsätzen verteilt.

Im letzten Beispiel beträgt die Summe beider Prozentsätze nicht 100 %, und daher enthalten beide Bilder ihre jeweiligen Deckkräfte.

Wenn keine Prozentsätze deklariert sind und drei Bilder enthalten sind, ist jedes Bild zu 33,33 % opak. Die zwei folgenden Zeilen sind (fast) identisch:

```css
cross-fade(url(red.png), url(yellow.png), url(blue.png)); /* all three will be 33.3333% opaque */
cross-fade(url(red.png) 33.33%, url(yellow.png) 33.33%, url(blue.png) 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation für die Funktion `cross-fade()` erlaubt mehrere Bilder, wobei jedes Bild Transparenzwerte unabhängig von den anderen Werten haben kann. Dies war nicht immer der Fall. Die ursprüngliche Syntax, die in einigen Browsern implementiert wurde, erlaubte nur zwei Bilder, wobei die Summe der Transparenz dieser beiden Bilder genau 100 % betrug. Die ursprüngliche Syntax wird in Safari unterstützt und mit dem Präfix `-webkit-` in Chrome, Opera und anderen auf Blink basierenden Browsern unterstützt.

```css
cross-fade(url(white.png), url(black.png), 0%);   /* fully black */
cross-fade(url(white.png), url(black.png), 25%);  /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png), 50%);  /* 50% white, 50% black */
cross-fade(url(white.png), url(black.png), 75%);  /* 75% white, 25% black */
cross-fade(url(white.png), url(black.png), 100%); /* fully white */
```

In der implementierten Syntax werden die beiden durch Kommas getrennten Bilder zuerst deklariert, gefolgt von einem Komma und dem erforderlichen Prozentwert. Das Weglassen des Kommas oder Prozents macht den Wert ungültig. Der Prozentwert ist die Deckkraft des zuerst deklarierten Bildes. Der eingebundene Prozentsatz wird von 100 % subtrahiert, wobei der Unterschied die Deckkraft des zweiten Bildes ist.

Das Grün/Rot-Beispiel (mit den Prozentsätzen, die insgesamt 150 % ergeben) und das Gelb/Rot/Blau-Beispiel (mit drei Bildern) aus dem Abschnitt Spezifikationssyntax sind in dieser Implementierung nicht möglich.

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologie. Dies ist vor allem für Screenreader wichtig, da ein Screenreader deren Vorhandensein nicht ankündigt und somit den Nutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite wichtig sind, ist es besser, es semantisch im Dokument zu beschreiben. Bei der Verwendung von Hintergrundbildern stellen Sie sicher, dass der Farbkontrast groß genug ist, um sicherzustellen, dass jeder Text sowohl über dem Bild als auch bei fehlenden Bildern lesbar ist.

- [MDN Verständnis von WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis Erfolgskriterium 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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
