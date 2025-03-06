---
title: cross-fade()
slug: Web/CSS/cross-fade
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`cross-fade()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um zwei oder mehr Bilder mit einer definierten Transparenz zu überblenden.
Sie kann für viele einfache Bildmanipulationen genutzt werden, wie das Tönen eines Bildes mit einer Volltonfarbe oder das Hervorheben eines bestimmten Bereichs der Seite durch die Kombination eines Bildes mit einem radialen Verlauf.

## Syntax

> [!WARNING]
> Die Spezifikation und die aktuellen Implementierungen haben unterschiedliche Syntaxen.
> Zuerst wird die Spezifikationssyntax erläutert.

### Spezifikationssyntax

Die `cross-fade()`-Funktion nimmt eine Liste von Bildern mit einem Prozentsatz, der definiert, wie viel von jedem Bild in Bezug auf die Deckkraft beibehalten wird, wenn es mit den anderen Bildern überblendet wird. Der Prozentwert muss ohne Anführungszeichen kodiert werden, muss das `'%'`-Symbol enthalten und darf einen Wert zwischen 0% und 100% haben.

Die Funktion kann in CSS überall dort verwendet werden, wo ein gewöhnlicher Bildverweis verwendet werden kann.

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

Wenn Prozentsätze weggelassen werden, werden alle angegebenen Prozentsätze zusammengezählt und von `100%` abgezogen. Wenn das Ergebnis größer als 0% ist, wird das Ergebnis dann gleichmäßig auf alle Bilder mit ausgelassenen Prozentsätzen verteilt.

Im einfachsten Fall werden zwei Bilder ineinander überblendet. Dafür muss nur eines der Bilder einen Prozentsatz haben, das andere wird entsprechend abgeblendet. Ein Wert von 0% für das erste Bild ergibt also nur das zweite Bild, während 100% nur das erste Bild ergibt. Ein Wert von 25% zeigt das erste Bild mit 25% Deckkraft und das zweite mit 75%. Der Wert von 75% ist das Inverse und zeigt das erste Bild mit 75% und das zweite mit 25%.

Das Obige könnte auch so geschrieben werden:

```css
cross-fade(url(white.png) 0%, url(black.png)); /* fully black */
cross-fade(url(white.png) 25%, url(black.png)); /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png)); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png)); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png)); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

Wenn keine Prozentsätze angegeben sind, werden beide Bilder mit 50% Deckkraft angezeigt, wobei das Cross-Fade als gleichmäßige Verschmelzung beider Bilder dargestellt wird. Das 50%/50%-Beispiel oben benötigte keine aufgelisteten Prozentsätze, da, wenn ein Prozentwert weggelassen wird, die enthaltenen Prozentsätze zusammengezählt und von 100% abgezogen werden. Das Ergebnis wird, falls größer als 0, dann gleichmäßig auf alle Bilder mit ausgelassenen Prozentsätzen verteilt.

Im letzten Beispiel ergibt die Summe beider Prozentsätze nicht 100%, und daher schließen beide Bilder ihre jeweiligen Deckkraftwerte ein.

Wenn keine Prozentsätze angegeben sind und drei Bilder enthalten sind, wird jedes Bild mit 33,33% Deckkraft angezeigt. Die beiden folgenden Zeilen sind (fast) identisch:

```css
cross-fade(url(red.png), url(yellow.png), url(blue.png)); /* all three will be 33.3333% opaque */
cross-fade(url(red.png) 33.33%, url(yellow.png) 33.33%, url(blue.png) 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation für die `cross-fade()`-Funktion erlaubt mehrere Bilder und dass jedes Bild Transparenzwerte unabhängig von den anderen Werten hat. Das war nicht immer der Fall. Die ursprüngliche Syntax, die in einigen Browsern implementiert wurde, erlaubte nur zwei Bilder, wobei die Summe der Transparenz dieser beiden Bilder genau 100% betrug. Die ursprüngliche Syntax wird in Safari und mit dem `-webkit-`-Präfix in Chrome, Opera und anderen auf Blink basierenden Browsern unterstützt.

```css
cross-fade(url(white.png), url(black.png), 0%);   /* fully black */
cross-fade(url(white.png), url(black.png), 25%);  /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png), 50%);  /* 50% white, 50% black */
cross-fade(url(white.png), url(black.png), 75%);  /* 75% white, 25% black */
cross-fade(url(white.png), url(black.png), 100%); /* fully white */
```

In der implementierten Syntax werden die beiden durch Kommas getrennten Bilder zuerst deklariert, gefolgt von einem Komma und dem erforderlichen Prozentwert. Das Auslassen des Kommas oder Percents macht den Wert ungültig. Das Prozent ist die Deckkraft des zuerst deklarierten Bildes. Der enthaltene Prozentsatz wird von 100% abgezogen, wobei die Differenz die Deckkraft des zweiten Bildes ist.

Das Grün/Rot-Beispiel (mit den Prozentwerten, die 150% ergeben) und das Gelb/Rot/Blau-Beispiel (mit drei Bildern) aus dem Spezifikationssyntax-Abschnitt sind in dieser Implementierung nicht möglich.

## Barrierefreiheit

Browser bieten keine besonderen Informationen zu Hintergrundbildern für unterstützende Technologien. Das ist vor allem für Screenreader wichtig, da ein Screenreader dessen Vorhandensein nicht ankündigt und somit nichts an die Benutzer weitergibt. Wenn das Bild Informationen enthält, die zum Verständnis des Gesamtzwecks der Seite wichtig sind, ist es besser, es semantisch im Dokument zu beschreiben. Wenn Sie Hintergrundbilder verwenden, stellen Sie sicher, dass der Kontrast der Farben groß genug ist, damit jeglicher Text über dem Bild lesbar ist, sowie wenn die Bilder fehlen.

- [MDN Verstehen der WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Verstehen der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Verlaufsfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
