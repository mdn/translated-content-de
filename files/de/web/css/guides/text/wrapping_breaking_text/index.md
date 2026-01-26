---
title: Umbruch und Aufteilung von Text
slug: Web/CSS/Guides/Text/Wrapping_breaking_text
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Dieser Leitfaden erklärt die verschiedenen Möglichkeiten, wie überfließender Text in CSS gehandhabt werden kann.

## Was ist überfließender Text?

In CSS, wenn Sie eine nicht trennbare Zeichenkette wie ein sehr langes Wort haben, wird es standardmäßig den Container, der zu klein dafür ist, in der Inline-Richtung überfließen. Dies sehen wir im folgenden Beispiel: Das lange Wort ragt über die Begrenzung des Kastens hinaus, in dem es enthalten ist.

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

CSS zeigt Überlauf auf diese Weise an, da etwas anderes zu Datenverlust führen könnte. Datenverlust in CSS bedeutet, dass einige Ihrer Inhalte verschwinden. Daher ist der Anfangswert von {{cssxref("overflow")}} `visible`, und wir können den überfließenden Text sehen. Es ist im Allgemeinen besser, den Überlauf sehen zu können, selbst wenn er unordentlich ist. Wenn Dinge verschwänden oder wie bei `overflow` auf `hidden` gesetzt abgeschnitten würden, könnten Sie das beim Vorschau Ihrer Website nicht erkennen. Ein unordentlicher Überlauf ist zumindest erkennbar, und im schlimmsten Fall kann Ihr Besucher den Inhalt sehen und lesen, auch wenn er etwas seltsam aussieht.

Im nächsten Beispiel sehen Sie, was passiert, wenn `overflow` auf `hidden` gesetzt ist.

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

## Finden der min-content-Größe

Um die minimale Größe des Kastens zu finden, die seine Inhalte ohne Überläufe enthält, setzen Sie die {{cssxref("width")}} oder {{cssxref("inline-size")}} Eigenschaft des Kastens auf {{cssxref("min-content")}}.

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

Die Verwendung von `min-content` ist daher eine Möglichkeit für überfließende Kästen. Wenn es machbar ist, den Kasten wachsen zu lassen, um die minimale Größe zu erreichen, die für den Inhalt erforderlich ist, aber nicht größer, wird Ihnen die Verwendung dieses Schlüsselworts diese Größe geben.

## Lange Wörter umbrechen

Wenn der Kasten eine feste Größe haben muss oder Sie sicherstellen möchten, dass lange Wörter nicht überlaufen können, dann kann die {{cssxref("overflow-wrap")}} Eigenschaft helfen. Diese Eigenschaft wird ein Wort brechen, sobald es zu lang ist, um in eine Zeile alleine zu passen.

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
> Die `overflow-wrap` Eigenschaft funktioniert auf die gleiche Weise wie die nicht standardisierte Eigenschaft `word-wrap`. Die `word-wrap` Eigenschaft wird jetzt von Browsern als Alias der standardisierten Eigenschaft behandelt.

Eine alternative Eigenschaft, die ausprobiert werden kann, ist {{cssxref("word-break")}}. Diese Eigenschaft wird das Wort an der Stelle brechen, an der es überfließt. Es wird einen Umbruch verursachen, selbst wenn das Platzieren des Wortes auf einer neuen Zeile es ermöglichen würde, es ohne Unterbrechung anzuzeigen.

Im nächsten Beispiel können Sie den Unterschied zwischen den beiden Eigenschaften am gleichen Textstring vergleichen.

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

Dies könnte nützlich sein, wenn Sie verhindern möchten, dass eine große Lücke entsteht, wenn gerade genug Platz für den String vorhanden ist. Oder, wo es ein weiteres Element gibt, bei dem Sie nicht möchten, dass der Umbruch direkt danach erfolgt.

Im untenstehenden Beispiel gibt es ein Kontrollkästchen und ein Label. Angenommen, Sie möchten, dass das Label umbricht, sollte es zu lang für den Kasten sein. Sie möchten jedoch nicht, dass es direkt nach dem Kontrollkästchen bricht.

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

## Hinzufügen von Trennzeichen

Um Trennzeichen beim Brechen von Wörtern hinzuzufügen, verwenden Sie die CSS {{cssxref("hyphens")}} Eigenschaft. Mit einem Wert von `auto` kann der Browser Wörter automatisch an geeigneten Trennstellen brechen, indem er die von ihm gewählten Regeln befolgt. Um etwas Kontrolle über den Prozess zu haben, verwenden Sie den Wert `manual`, und fügen Sie ein hartes (U+2010) oder ein weiches Trennzeichen (U+00AD) in die Zeichenfolge ein. Ein hartes Trennzeichen kann mit `‐` oder `&#x2010;` hinzugefügt werden, und ein weiches Trennzeichen kann mit den HTML-Zeichenzeichencodes `&shy;`, `&#173;` oder `&#xad;` hinzugefügt werden. Ein hartes Trennzeichen wird immer brechen, auch wenn es nicht notwendig ist. Ein weiches Trennzeichen bricht nur, wenn es notwendig ist.

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

Sie können auch die {{cssxref("hyphenate-character")}} Eigenschaft verwenden, um eine Zeichenfolge Ihrer Wahl anstelle des standardmäßigen Trennzeichens am Ende der Zeile (vor dem Trennstrich) für die Sprache zu verwenden. Der Wert `auto` wählt den korrekten Wert, um einen Wortumbruchsstrich entsprechend den typografischen Konventionen der aktuellen Inhaltssprache zu markieren.

CSS bietet zusätzliche Kontrolle über das Trennen: Die {{cssxref("hyphenate-limit-chars")}} Eigenschaft kann verwendet werden, um die minimale Wortlänge festzulegen, die Trennungen ermöglicht, sowie die minimale Anzahl von Zeichen vor und nach dem Trennzeichen.

## Das `<wbr>` Element

Wenn Sie wissen, wo Sie möchten, dass eine lange Zeichenfolge bricht, ist es auch möglich, das HTML {{HTMLElement("wbr")}} Element einzufügen. Dies kann in Fällen nützlich sein, wie z.B. bei der Anzeige einer langen URL auf einer Seite. Sie können dann die Eigenschaft hinzufügen, um die Zeichenfolge an sinnvollen Stellen zu brechen, was das Lesen erleichtert.

Im untenstehenden Beispiel bricht der Text an der Stelle des {{HTMLElement("wbr")}}.

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

- Das HTML {{HTMLElement("wbr")}} Element
- Die CSS {{cssxref("word-break")}} Eigenschaft
- Die CSS {{cssxref("overflow-wrap")}} Eigenschaft
- Die CSS {{cssxref("white-space")}} Eigenschaft
- Die CSS {{cssxref("text-wrap")}} Eigenschaft
- Die CSS {{cssxref("hyphens")}} Eigenschaft
- Die CSS {{cssxref("hyphenate-character")}} Eigenschaft
- Die CSS {{cssxref("hyphenate-limit-chars")}} Eigenschaft
- [Überlauf und Datenverlust in CSS](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
