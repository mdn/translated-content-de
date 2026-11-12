---
title: CSS-Funktion `cross-fade()`
short-title: cross-fade()
slug: Web/CSS/Reference/Values/cross-fade
l10n:
  sourceCommit: 5cea7df435db1905b06d693b0192ef1e2166d6a7
---

Die **`cross-fade()`**-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) von [CSS](/de/docs/Web/CSS) kann verwendet werden, um zwei oder mehr Bilder mit festgelegter Transparenz zu überblenden.
Sie eignet sich für viele einfache Bildbearbeitungen, etwa um ein Bild mit einer Volltonfarbe einzufärben oder einen bestimmten Bereich der Seite hervorzuheben, indem ein Bild mit einem radialen Farbverlauf kombiniert wird.

## Syntax

> [!WARNING]
> Die Spezifikation und die aktuellen Implementierungen verwenden unterschiedliche Syntaxen.
> Zuerst wird die Syntax der Spezifikation erläutert.

### Syntax der Spezifikation

Die Funktion `cross-fade()` nimmt eine Liste von Bildern entgegen. Für jedes Bild kann ein Prozentwert angegeben werden, der festlegt, wie viel seiner Deckkraft beim Überblenden mit den anderen Bildern erhalten bleibt. Der Prozentwert muss ohne Anführungszeichen geschrieben werden, das Zeichen `'%'` enthalten und zwischen 0% und 100% liegen.

Die Funktion kann in CSS überall dort verwendet werden, wo auch eine gewöhnliche Bildreferenz zulässig ist.

#### Prozentwerte für die Überblendung

Betrachten Sie den Prozentwert als Deckkraftwert für jedes Bild. Ein Wert von 0% bedeutet, dass das Bild vollständig transparent ist; bei 100% ist es vollständig deckend.

```css
cross-fade(url("white.png") 0%, url("black.png") 100%); /* fully black */
cross-fade(url("white.png") 25%, url("black.png") 75%); /* 25% white, 75% black */
cross-fade(url("white.png") 50%, url("black.png") 50%); /* 50% white, 50% black */
cross-fade(url("white.png") 75%, url("black.png") 25%); /* 75% white, 25% black */
cross-fade(url("white.png") 100%, url("black.png") 0%); /* fully white */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* both green and red at 75% */
```

Wenn Prozentwerte weggelassen werden, werden alle angegebenen Prozentwerte addiert und von `100%` abgezogen.
Ist das Ergebnis größer als 0%, wird es gleichmäßig auf alle Bilder ohne angegebenen Prozentwert verteilt.

Im einfachsten Fall werden zwei Bilder ineinander überblendet. Dafür muss nur für eines der Bilder ein Prozentwert angegeben werden; das andere wird entsprechend überblendet.
Ein Wert von 0% für das erste Bild führt beispielsweise dazu, dass nur das zweite Bild sichtbar ist, während bei 100% nur das erste Bild sichtbar ist.
Bei einem Wert von 25% wird das erste Bild mit 25% und das zweite mit 75% dargestellt. Bei 75% ist es umgekehrt: Das erste Bild wird mit 75% und das zweite mit 25% dargestellt.

Das obige Beispiel hätte auch so geschrieben werden können:

```css
cross-fade(url("white.png") 0%, url("black.png")); /* fully black */
cross-fade(url("white.png") 25%, url("black.png")); /* 25% white, 75% black */
cross-fade(url("white.png"), url("black.png")); /* 50% white, 50% black */
cross-fade(url("white.png") 75%, url("black.png")); /* 75% white, 25% black */
cross-fade(url("white.png") 100%, url("black.png")); /* fully white */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* both green and red at 75% */
```

Wenn keine Prozentwerte angegeben werden, haben beide Bilder eine Deckkraft von 50% und werden zu gleichen Teilen ineinander überblendet.
Im obigen Beispiel mit 50%/50% mussten die Prozentwerte nicht angegeben werden: Wird ein Prozentwert weggelassen, werden die angegebenen Prozentwerte addiert und von 100% abgezogen.
Ist das Ergebnis größer als 0, wird es gleichmäßig auf alle Bilder ohne angegebenen Prozentwert verteilt.

Im letzten Beispiel ergeben die beiden Prozentwerte zusammen nicht 100%. Daher werden beide Bilder mit ihrer jeweils angegebenen Deckkraft dargestellt.

Wenn keine Prozentwerte angegeben werden und drei Bilder enthalten sind, hat jedes Bild eine Deckkraft von 33,33%. Die folgenden beiden Zeilen sind (fast) identisch:

```css
cross-fade(url("red.png"), url("yellow.png"), url("blue.png")); /* all three will be 33.3333% opaque */
cross-fade(url("red.png") 33.33%, url("yellow.png") 33.33%, url("blue.png") 33.33%);
```

### Ältere, implementierte Syntax

```css
cross-fade( <image>, <image>, <percentage> )
```

Die Spezifikation der Funktion `cross-fade()` erlaubt mehrere Bilder, deren Transparenzwerte unabhängig voneinander festgelegt werden können.
Das war nicht immer so.
Die ursprüngliche Syntax, die in einigen Browsern implementiert wurde, erlaubte nur zwei Bilder. Die Transparenzwerte dieser beiden Bilder mussten zusammen genau 100% ergeben.
Die ursprüngliche Syntax wird von Safari unterstützt und mit dem Präfix `-webkit-` auch von Chrome, Opera und anderen Blink-basierten Browsern.

```css
cross-fade(url("white.png"), url("black.png"), 0%);   /* fully black */
cross-fade(url("white.png"), url("black.png"), 25%);  /* 25% white, 75% black */
cross-fade(url("white.png"), url("black.png"), 50%);  /* 50% white, 50% black */
cross-fade(url("white.png"), url("black.png"), 75%);  /* 75% white, 25% black */
cross-fade(url("white.png"), url("black.png"), 100%); /* fully white */
```

In der implementierten Syntax werden zuerst die beiden durch ein Komma getrennten Bilder angegeben, gefolgt von einem weiteren Komma und einem erforderlichen Prozentwert. Fehlt das Komma oder der Prozentwert, ist der Wert ungültig.
Der Prozentwert gibt die Deckkraft des zuerst angegebenen Bildes an. Er wird von 100% abgezogen; die Differenz ist die Deckkraft des zweiten Bildes.

Das grün-rote Beispiel (dessen Prozentwerte zusammen 150% ergeben) und das gelb-rot-blaue Beispiel (mit drei Bildern) aus dem Abschnitt zur Syntax der Spezifikation sind mit dieser Implementierung nicht möglich.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser stellen assistiven Technologien keine besonderen Informationen über Hintergrundbilder bereit. Das ist vor allem für Screenreader wichtig: Ein Screenreader kündigt ein Hintergrundbild nicht an und vermittelt seinen Nutzern daher keine Informationen darüber.
Wenn das Bild Informationen enthält, die für das Verständnis des übergeordneten Zwecks der Seite entscheidend sind, sollten Sie diese im Dokument semantisch beschreiben.
Achten Sie bei der Verwendung von Hintergrundbildern auf einen ausreichenden Farbkontrast, damit Text sowohl über dem Bild als auch ohne das Bild gut lesbar ist.

- [MDN: Erläuterungen zu WCAG-Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erläuterung des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Ältere Syntax für `cross-fade()`

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
- [CSS-Farbverläufe verwenden](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Farbverlaufsfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
