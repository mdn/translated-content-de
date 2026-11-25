---
title: Text umbrechen und Zeilenumbrüche einfügen
slug: Web/CSS/Guides/Text/Wrapping_breaking_text
l10n:
  sourceCommit: eeebbb874aeb67641b37122adf7aac42c5b8f45a
---

Dieser Leitfaden erläutert die verschiedenen Möglichkeiten, überlaufenden Text in CSS zu behandeln.

## Was ist überlaufender Text?

Wenn Sie in CSS eine nicht umbrechbare Zeichenfolge haben, etwa ein sehr langes Wort, ragt sie standardmäßig in Inline-Richtung über jeden Container hinaus, der für sie zu klein ist. Das zeigt das folgende Beispiel: Das lange Wort ragt über die Begrenzung des umgebenden Kastens hinaus.

```html live-sample___inline-overflow
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___inline-overflow
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
}
```

{{EmbedLiveSample("inline-overflow")}}

CSS zeigt Überlauf auf diese Weise an, weil eine andere Behandlung zu Datenverlust führen könnte. Datenverlust bedeutet in CSS, dass ein Teil Ihres Inhalts verschwindet. Deshalb ist der Anfangswert von {{cssxref("overflow")}} `visible`: Der überlaufende Text bleibt sichtbar. Im Allgemeinen ist es besser, Überlauf zu sehen, auch wenn das Ergebnis unordentlich aussieht. Würde der Inhalt verschwinden oder abgeschnitten, wie es bei `overflow: hidden` der Fall wäre, könnten Sie das bei der Vorschau Ihrer Website übersehen. Ein unordentlicher Überlauf fällt zumindest auf. Im ungünstigsten Fall können Besucher den Inhalt trotzdem sehen und lesen, auch wenn er etwas seltsam aussieht.

Das nächste Beispiel zeigt, was geschieht, wenn `overflow` auf `hidden` gesetzt ist.

```html live-sample___inline-overflow-hidden
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___inline-overflow-hidden
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
  overflow: hidden;
}
```

{{EmbedLiveSample("inline-overflow-hidden")}}

## Die min-content-Größe ermitteln

Um die kleinste Größe zu ermitteln, bei der der Kasten seinen Inhalt ohne Überlauf aufnehmen kann, setzen Sie die Eigenschaft {{cssxref("width")}} oder {{cssxref("inline-size")}} des Kastens auf {{cssxref("min-content")}}.

```html live-sample___min-content
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___min-content
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: min-content;
}
```

{{EmbedLiveSample("min-content")}}

`min-content` ist daher eine Möglichkeit, mit überlaufenden Kästen umzugehen. Wenn der Kasten auf die für seinen Inhalt erforderliche Mindestgröße wachsen darf, aber nicht größer werden soll, liefert Ihnen dieses Schlüsselwort die passende Größe.

## Lange Wörter umbrechen

Wenn der Kasten eine feste Größe haben muss oder Sie verhindern möchten, dass lange Wörter überlaufen, kann die Eigenschaft {{cssxref("overflow-wrap")}} helfen. Sie bricht ein Wort um, sobald es zu lang ist, um allein in eine Zeile zu passen.

```html live-sample___overflow-wrap
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___overflow-wrap
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
  overflow-wrap: break-word;
}
```

{{EmbedLiveSample("overflow-wrap")}}

> [!NOTE]
> Die Eigenschaft `overflow-wrap` funktioniert genauso wie die nicht standardisierte Eigenschaft `word-wrap`. Browser behandeln `word-wrap` inzwischen als Alias der standardisierten Eigenschaft.

Eine weitere Möglichkeit ist {{cssxref("word-break")}}. Diese Eigenschaft bricht ein Wort an der Stelle um, an der es überläuft. Sie erzwingt einen Umbruch auch dann, wenn das Wort in einer neuen Zeile ohne Umbruch dargestellt werden könnte.

Im nächsten Beispiel können Sie die Wirkung der beiden Eigenschaften anhand derselben Zeichenfolge vergleichen.

```html live-sample___word-break
<div class="box box1">A Very LongWordThatHasNoBreakingPossibilities</div>

<div class="box box2">A Very LongWordThatHasNoBreakingPossibilities</div>
```

```css live-sample___word-break
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 30ch;
  margin-block-end: 1em;
}
.box1 {
  word-break: break-all;
}

.box2 {
  overflow-wrap: break-word;
}
```

{{EmbedLiveSample("word-break", "", "210px")}}

Das kann nützlich sein, wenn Sie eine große Lücke vermeiden möchten, obwohl die Zeichenfolge beinahe noch in die Zeile passen würde. Es kann auch hilfreich sein, wenn der Umbruch nicht direkt nach einem anderen Element erfolgen soll.

Im folgenden Beispiel gibt es eine Checkbox und ein Label. Angenommen, das Label soll umbrochen werden, wenn es für den Kasten zu lang ist. Der Umbruch soll aber nicht direkt nach der Checkbox erfolgen.

```html live-sample___word-break-checkbox
<div class="field">
  <input id="one" type="checkbox" /><label for="one">
    LongWordThatHasNoBreakingPossibilities
  </label>
</div>

<div class="field field-br">
  <input id="two" type="checkbox" /><label for="two">
    LongWordThatHasNoBreakingPossibilities
  </label>
</div>
```

```css live-sample___word-break-checkbox
.field {
  inline-size: 150px;
  border: 1px solid #cccccc;
  margin-block-end: 1em;
  padding: 10px;
}

.field-br {
  word-break: break-all;
}
```

{{EmbedLiveSample("word-break-checkbox", "", "210px")}}

## Trennzeichen hinzufügen

Um beim Trennen von Wörtern Trennzeichen hinzuzufügen, verwenden Sie die CSS-Eigenschaft {{cssxref("hyphens")}}. Beim Wert `auto` kann der Browser Wörter automatisch an geeigneten Trennstellen nach den von ihm verwendeten Regeln trennen. Wenn Sie mehr Kontrolle darüber benötigen, verwenden Sie den Wert `manual` und fügen Sie ein hartes Trennzeichen (U+2010) oder ein weiches Trennzeichen (U+00AD) in die Zeichenfolge ein. Ein hartes Trennzeichen können Sie mit `‐` oder `&#x2010;` einfügen, ein weiches Trennzeichen mit den HTML-Zeichenreferenzen `&shy;`, `&#173;` oder `&#xad;`. Ein hartes Trennzeichen führt immer zur Trennung, auch wenn diese nicht erforderlich ist. Ein weiches Trennzeichen führt nur dann zur Trennung, wenn ein Umbruch nötig ist.

```html live-sample___hyphens
<div class="box">
  Llanfair&shy;pwllgwyngyll&shy;gogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___hyphens
.box {
  inline-size: 150px;
  overflow-wrap: break-word;
  hyphens: manual;
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
}
```

{{EmbedLiveSample("hyphens")}}

Mit der Eigenschaft {{cssxref("hyphenate-character")}} können Sie außerdem eine Zeichenfolge Ihrer Wahl anstelle des sprachabhängigen Standardtrennzeichens am Zeilenende verwenden, unmittelbar vor dem Zeilenumbruch durch die Worttrennung. Der Wert `auto` wählt entsprechend den typografischen Konventionen der aktuellen Inhaltssprache das passende Zeichen für einen Zeilenumbruch innerhalb eines Wortes.

CSS bietet weitere Möglichkeiten zur Steuerung der Worttrennung: Mit der Eigenschaft {{cssxref("hyphenate-limit-chars")}} können Sie die Mindestlänge eines trennbaren Wortes sowie die Mindestanzahl an Zeichen vor und nach dem Trennzeichen festlegen. Mit {{cssxref("hyphenate-limit-lines")}} können Sie die Anzahl aufeinanderfolgender Zeilen mit Worttrennung begrenzen.

## Das `<wbr>`-Element

Wenn Sie wissen, an welcher Stelle eine lange Zeichenfolge umbrochen werden darf, können Sie auch das HTML-Element {{HTMLElement("wbr")}} verwenden. Das `<wbr>`-Element kennzeichnet eine mögliche Umbruchstelle: Läuft das Wort über, wird es an dieser Stelle umbrochen. So können Sie sinnvolle Teile der Zeichenfolge zusammenhalten, etwa bei langen URLs.

Im folgenden Beispiel kann der Browser den Text an der Stelle von {{HTMLElement("wbr")}} umbrechen.

```html live-sample___wbr
<div class="box">
  Llanfair<wbr />pwllgwyngyll<wbr />gogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___wbr
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
}
```

{{EmbedLiveSample("wbr")}}

## Siehe auch

- Das HTML-Element {{HTMLElement("wbr")}}
- Die CSS-Eigenschaft {{cssxref("word-break")}}
- Die CSS-Eigenschaft {{cssxref("overflow-wrap")}}
- Die CSS-Eigenschaft {{cssxref("white-space")}}
- Die CSS-Eigenschaft {{cssxref("text-wrap")}}
- Die CSS-Eigenschaft {{cssxref("wrap-inside")}}
- Die CSS-Eigenschaft {{cssxref("hyphens")}}
- Die CSS-Eigenschaft {{cssxref("hyphenate-character")}}
- Die CSS-Eigenschaft {{cssxref("hyphenate-limit-chars")}}
- Die CSS-Eigenschaft {{cssxref("hyphenate-limit-lines")}}
- [Überlauf und Datenverlust in CSS](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
