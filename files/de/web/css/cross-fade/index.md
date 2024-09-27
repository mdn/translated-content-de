---
title: cross-fade()
slug: Web/CSS/cross-fade
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`cross-fade()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) kann verwendet werden, um zwei oder mehr Bilder mit einer definierten Transparenz zu mischen. Sie kann für viele einfache Bildmanipulationen genutzt werden, wie zum Beispiel das Tönen eines Bildes mit einer Volltonfarbe oder das Hervorheben eines bestimmten Bereichs einer Seite durch das Kombinieren eines Bildes mit einem radialen Verlauf.

## Syntax

> [!WARNING]
> Die Spezifikation und die aktuellen Implementierungen haben unterschiedliche Syntaxen.
> Die Syntax der Spezifikation wird zuerst erklärt.

### Syntax der Spezifikation

Die `cross-fade()` Funktion nimmt eine Liste von Bildern mit einem Prozentsatz an, der angibt, wie viel von jedem Bild an Opazität beibehalten wird, wenn es mit den anderen Bildern vermischt wird. Der Prozentwert muss ohne Anführungszeichen angegeben werden, muss das '%' Symbol enthalten, und sein Wert muss zwischen 0% und 100% liegen.

Die Funktion kann in CSS überall dort verwendet werden, wo ein gewöhnlicher Bildverweis verwendet werden kann.

#### Cross-fade Prozentsätze

Betrachten Sie den Prozentsatz als einen Opazitätswert für jedes Bild. Dies bedeutet, dass ein Wert von 0% das Bild vollständig transparent macht, während ein Wert von 100% das Bild vollständig undurchsichtig macht.

```css
cross-fade(url(white.png) 0%, url(black.png) 100%); /* fully black */
cross-fade(url(white.png) 25%, url(black.png) 75%); /* 25% white, 75% black */
cross-fade(url(white.png) 50%, url(black.png) 50%); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png) 25%); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png) 0%); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

Wenn Prozentsätze weggelassen werden, werden alle angegebenen Prozentsätze zusammengezählt und von 100% subtrahiert. Wenn das Ergebnis größer als 0% ist, wird das Ergebnis gleichmäßig auf alle Bilder mit weggelassenen Prozentsätzen verteilt.

Im einfachsten Fall werden zwei Bilder ineinander übergeblendet. Dafür muss nur eines der Bilder einen Prozentsatz haben, das andere wird entsprechend überblendet. Zum Beispiel führt ein Wert von 0% für das erste Bild dazu, dass nur das zweite Bild angezeigt wird, während 100% nur das erste Bild anzeigt. Ein Wert von 25% zeigt das erste Bild zu 25% und das zweite zu 75%. Der Wert von 75% ist das Gegenteil und zeigt das erste Bild zu 75% und das zweite zu 25%.

Das obige könnte auch so geschrieben werden:

```css
cross-fade(url(white.png) 0%, url(black.png)); /* fully black */
cross-fade(url(white.png) 25%, url(black.png)); /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png)); /* 50% white, 50% black */
cross-fade(url(white.png) 75%, url(black.png)); /* 75% white, 25% black */
cross-fade(url(white.png) 100%, url(black.png)); /* fully white */
cross-fade(url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */
```

Wenn keine Prozentsätze angegeben sind, werden beide Bilder 50% undurchsichtig und die Überblendung erscheint als gleichmäßige Mischung beider Bilder. Das 50%/50% Beispiel oben benötigte keine angegebenen Prozentsätze, da bei weggelassenen Prozentwerten die enthaltenen Prozentsätze addiert und von 100% subtrahiert werden. Wenn das Ergebnis größer als 0 ist, wird es gleichmäßig auf alle Bilder mit weggelassenen Prozentsätzen verteilt.

Im letzten Beispiel ist die Summe beider Prozentsätze nicht 100%, und daher beinhalten beide Bilder ihre jeweiligen Opazitäten.

Wenn keine Prozentsätze angegeben sind und drei Bilder hinzugefügt werden, wird jedes Bild 33,33% undurchsichtig angezeigt. Die beiden folgenden sind (fast) identische Zeilen:

```css
cross-fade(url(red.png), url(yellow.png), url(blue.png)); /* all three will be 33.3333% opaque */
cross-fade(url(red.png) 33.33%, url(yellow.png) 33.33%, url(blue.png) 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation für die `cross-fade()` Funktion erlaubt mehrere Bilder und für jedes Bild unabhängige Transparenzwerte. Dies war nicht immer der Fall. Die ursprüngliche Syntax, die in einigen Browsern implementiert wurde, erlaubte nur zwei Bilder, wobei die Summe der Transparenz dieser beiden Bilder genau 100% betrug. Die ursprüngliche Syntax wird in Safari unterstützt und mit dem `-webkit-` Präfix in Chrome, Opera und anderen auf Blink basierenden Browsern unterstützt.

```css
cross-fade(url(white.png), url(black.png), 0%);   /* fully black */
cross-fade(url(white.png), url(black.png), 25%);  /* 25% white, 75% black */
cross-fade(url(white.png), url(black.png), 50%);  /* 50% white, 50% black */
cross-fade(url(white.png), url(black.png), 75%);  /* 75% white, 25% black */
cross-fade(url(white.png), url(black.png), 100%); /* fully white */
```

In der implementierten Syntax werden die beiden durch Kommata getrennten Bilder zuerst deklariert, gefolgt von einem Komma und einem erforderlichen Prozentwert. Das Auslassen des Kommas oder Prozentsatzes macht den Wert ungültig. Der Prozentwert ist die Opazität des zuerst deklarierten Bildes. Der enthaltene Prozentsatz wird von 100% subtrahiert, wobei die Differenz die Opazität des zweiten Bildes ist.

Das Green/Red-Beispiel (mit den Prozentsätzen, die insgesamt 150% betragen) und das Yellow/Red/Blue-Beispiel (mit drei Bildern) aus dem Abschnitt über die Syntax der Spezifikation sind in dieser Implementierung nicht möglich.

## Barrierefreiheit

Browser bieten keine besonderen Informationen über Hintergrundbilder für unterstützende Technologien. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher seinen Benutzern nichts vermittelt. Enthält das Bild Informationen, die entscheidend für das Verständnis des Gesamtzwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben. Wenn Sie Hintergrundbilder verwenden, stellen Sie sicher, dass der Farbkontrast groß genug ist, damit über dem Bild alle Texte lesbar sind, auch wenn die Bilder fehlen.

- [MDN Understanding WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ältere Syntax für `cross-fade`

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
