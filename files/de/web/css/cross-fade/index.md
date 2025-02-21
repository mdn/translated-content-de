---
title: cross-fade()
slug: Web/CSS/cross-fade
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`cross-fade()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um zwei oder mehr Bilder mit definierter Transparenz zu mischen.
Sie kann für viele einfache Bildmanipulationen verwendet werden, wie zum Beispiel das Tönen eines Bildes mit einer Volltonfarbe oder das Hervorheben eines bestimmten Bereichs der Seite durch das Kombinieren eines Bildes mit einem radialen Verlauf.

## Syntax

> [!WARNING]
> Die Spezifikation und aktuelle Implementierungen haben unterschiedliche Syntaxen.
> Die Spezifikationssyntax wird zuerst erklärt.

### Spezifikationssyntax

Die Funktion `cross-fade()` nimmt eine Liste von Bildern, bei der ein Prozentsatz definiert, wie viel von jedem Bild in Bezug auf die Transparenz beibehalten wird, wenn es mit den anderen Bildern gemischt wird. Der Prozentwert muss ohne Anführungszeichen angegeben werden, muss das `'%'`-Symbol enthalten und der Wert muss zwischen 0% und 100% liegen.

Die Funktion kann überall in CSS verwendet werden, wo ein gewöhnlicher Bildverweis verwendet werden kann.

#### Cross-fade Prozentsätze

Der Prozentsatz kann als ein Wert für die Opazität jedes Bildes betrachtet werden. Das bedeutet, ein Wert von 0% bedeutet, dass das Bild vollständig transparent ist, während ein Wert von 100% das Bild vollständig opak macht.

```css
cross-fade(url(white.png) 0%, url(black.png) 100%); /* fully black */
cross-fade(url(white.png) 25%, url(black.png) 75%); /* 25% white, 75% black */
cross-fade(url(white.png) 50%, url(black.png) 50%); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png) 25%); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png) 0%); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

Wenn Prozentsätze ausgelassen werden, werden alle angegebenen Prozentsätze zusammengezählt und von `100%` subtrahiert.
Ist das Ergebnis größer als 0%, wird das Ergebnis gleichmäßig auf alle Bilder aufgeteilt, deren Prozentsätze weggelassen wurden.

Im einfachsten Fall werden zwei Bilder miteinander überblendet. Dafür muss nur eines der Bilder einen Prozentsatz haben, das andere wird entsprechend überblendet.
Zum Beispiel ergibt ein Wert von 0% für das erste Bild nur das zweite Bild, während ein Wert von 100% nur das erste ergibt.
Ein Wert von 25% rendert das erste Bild zu 25% und das zweite zu 75%. Der 75%-Wert ist das Inverse und zeigt das erste Bild mit 75% und das zweite mit 25%.

Das obige Beispiel hätte auch wie folgt geschrieben werden können:

```css
cross-fade(url(white.png) 0%, url(black.png)); /* fully black */
cross-fade(url(white.png) 25%, url(black.png)); /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png)); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png)); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png)); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

Wenn keine Prozentsätze deklariert werden, sind beide Bilder zu 50% opak, wobei ein Cross-Fade als gleichmäßige Mischung beider Bilder gerendert wird.
Das 50%/50%-Beispiel oben hätte die Prozentsätze nicht auflisten müssen, da bei einem ausgelassenen Prozentsatz die enthaltenen Prozentsätze addiert und von 100% subtrahiert werden.
Das Ergebnis, wenn größer als 0, wird dann gleichmäßig auf alle Bilder aufgeteilt, deren Prozentsätze weggelassen wurden.

Im letzten Beispiel ist die Summe beider Prozentsätze nicht 100%, und daher beinhalten beide Bilder ihre jeweiligen Opazitäten.

Wenn keine Prozentsätze deklariert werden und drei Bilder enthalten sind, ist jedes Bild zu 33,33% opak. Die beiden folgenden sind Zeilen (fast) identisch:

```css
cross-fade(url(red.png), url(yellow.png), url(blue.png)); /* all three will be 33.3333% opaque */
cross-fade(url(red.png) 33.33%, url(yellow.png) 33.33%, url(blue.png) 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation für die `cross-fade()`-Funktion erlaubt mehrere Bilder, wobei jedes Bild unabhängig von den anderen Werten Transparenzwerte haben kann.
Dies war nicht immer der Fall.
Die ursprüngliche Syntax, die in einigen Browsern implementiert wurde, erlaubte nur zwei Bilder, wobei die Summe der Transparenz dieser beiden Bilder genau 100% betrug.
Die ursprüngliche Syntax wird in Safari unterstützt und in Chrome, Opera und anderen auf Blink basierenden Browsern mit dem Präfix `-webkit-` unterstützt.

```css
cross-fade(url(white.png), url(black.png), 0%);   /* fully black */
cross-fade(url(white.png), url(black.png), 25%);  /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png), 50%);  /* 50% white, 50% black */
cross-fade(url(white.png), url(black.png), 75%);  /* 75% white, 25% black */
cross-fade(url(white.png), url(black.png), 100%); /* fully white */
```

In der implementierten Syntax werden die beiden durch Kommas getrennten Bilder zuerst deklariert, gefolgt von einem Komma und dem erforderlichen Prozentwert. Das Auslassen von Komma oder Prozent macht den Wert ungültig.
Das Prozent ist die Opazität des zuerst deklarierten Bildes. Der enthaltene Prozentsatz wird von 100% subtrahiert, wobei die Differenz die Opazität des zweiten Bildes ist.

Das Grün/Rot-Beispiel (mit den insgesamt 150% Prozentsätzen) und das Gelb/Rot/Blau-Beispiel (mit drei Bildern) aus dem Abschnitt zur Spezifikationssyntax sind in dieser Implementierung nicht möglich.

## Barrierefreiheit

Browser liefern keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ansagt und daher seinen Nutzern nichts vermittelt.
Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.
Wenn Sie Hintergrundbilder verwenden, stellen Sie sicher, dass der Farbkontrast groß genug ist, damit jeder Text über das Bild sowie bei fehlenden Bildern lesbar ist.

- [MDN Understanding WCAG, Guideline 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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
- Verlauf-Funktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
