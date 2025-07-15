---
title: Umbruch und Trennung von Text
slug: Web/CSS/CSS_text/Wrapping_breaking_text
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Dieser Leitfaden erklärt die verschiedenen Möglichkeiten, wie überlaufender Text in CSS verwaltet werden kann.

## Was ist überlaufender Text?

In CSS, wenn Sie eine nicht trennbare Zeichenfolge wie ein sehr langes Wort haben, wird es standardmäßig in der Inline-Richtung jeden Container überfluten, der zu klein dafür ist. Wir können dies im folgenden Beispiel sehen: Das lange Wort überschreitet die Begrenzung des Kastens, in dem es enthalten ist.

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

CSS zeigt den Überlauf auf diese Weise an, weil eine alternative Behandlung zu Datenverlust führen könnte. In CSS bedeutet Datenverlust, dass ein Teil Ihres Inhalts verschwindet. Der Anfangswert von {{cssxref("overflow")}} ist `visible`, und wir können den überlaufenden Text sehen. Es ist generell besser, den Überlauf sehen zu können, auch wenn es unordentlich ist. Wenn Dinge verschwinden oder beschnitten werden würden, wie es der Fall wäre, wenn `overflow` auf `hidden` gesetzt wäre, könnten Sie dies beim Vorschau Ihrer Seite übersehen. Unordentlicher Überlauf ist zumindest leicht zu erkennen, und im schlimmsten Fall kann Ihr Besucher den Inhalt sehen und lesen, selbst wenn es etwas seltsam aussieht.

Im nächsten Beispiel können Sie sehen, was passiert, wenn `overflow` auf `hidden` gesetzt ist.

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

## Finden der Min-Content-Größe

Um die minimale Größe eines Kastens zu finden, der seinen Inhalt ohne Überlauf enthält, setzen Sie die {{cssxref("width")}} oder {{cssxref("inline-size")}} Eigenschaft des Kastens auf {{cssxref("min-content")}}.

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

Die Verwendung von `min-content` ist daher eine Möglichkeit für überlaufende Kästen. Wenn es möglich ist, dem Kasten zu erlauben, auf die minimale Größe zu wachsen, die für den Inhalt erforderlich ist, aber nicht größer, gibt Ihnen dieses Schlüsselwort diese Größe.

## Lange Wörter trennen

Wenn der Kasten eine feste Größe haben muss, oder Sie sicherstellen möchten, dass lange Wörter nicht überlaufen können, kann die {{cssxref("overflow-wrap")}} Eigenschaft helfen. Diese Eigenschaft wird ein Wort brechen, sobald es zu lang ist, um alleine in eine Zeile zu passen.

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
> Die `overflow-wrap`-Eigenschaft wirkt genauso wie die nicht standardisierte Eigenschaft `word-wrap`. Die `word-wrap`-Eigenschaft wird von Browsern jetzt als Alias der Standard-Eigenschaft behandelt.

Eine alternative Eigenschaft, die Sie ausprobieren können, ist {{cssxref("word-break")}}. Diese Eigenschaft wird das Wort an dem Punkt brechen, an dem es überläuft. Es wird einen Umbruch erzwingen, selbst wenn das Platzieren des Wortes in eine neue Zeile es erlauben würde, ohne Umbruch angezeigt zu werden.

Im nächsten Beispiel können Sie den Unterschied zwischen den beiden Eigenschaften an derselben Textzeichenfolge vergleichen.

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

Dies könnte nützlich sein, wenn Sie verhindern möchten, dass ein großer Abstand entsteht, wenn gerade genug Platz für die Zeichenfolge vorhanden ist. Oder wenn es ein anderes Element gibt, nach dem Sie nicht wollen, dass der Umbruch sofort erfolgt.

Im untenstehenden Beispiel gibt es ein Kontrollkästchen und ein Label. Angenommen, Sie möchten, dass das Label umbricht, sollte es zu lang für den Kasten sein. Sie möchten jedoch nicht, dass es direkt nach dem Kontrollkästchen umbricht.

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
  border: 1px solid #ccc;
  margin-block-end: 1em;
  padding: 10px;
}

.field-br {
  word-break: break-all;
}
```

{{EmbedLiveSample("word-break-checkbox", "", "210px")}}

## Hinzufügen von Bindestrichen

Um Bindestriche hinzuzufügen, wenn Wörter gebrochen werden, verwenden Sie die CSS-{{cssxref("hyphens")}}-Eigenschaft. Mit einem Wert von `auto` kann der Browser automatisch Wörter an geeigneten Trennstellen brechen, indem er den von ihm gewählten Regeln folgt. Um ein gewisses Maß an Kontrolle über den Prozess zu haben, verwenden Sie den Wert `manual` und fügen dann ein hartes (U+2010) oder weiches Trennzeichen (U+00AD) in die Zeichenfolge ein. Ein hartes Trennzeichen kann mit `‐` oder `&#x2010;` hinzugefügt werden, und ein weiches Trennzeichen kann mit den HTML-Zeichenkodierungen `&shy;`, `&#173;` oder `&#xad;` hinzugefügt werden. Ein hartes Trennzeichen wird immer brechen, selbst wenn es nicht notwendig ist. Ein weiches Trennzeichen bricht nur, wenn ein Bruch erforderlich ist.

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

Sie können auch die {{cssxref("hyphenate-character")}} Eigenschaft verwenden, um das Zeichen Ihrer Wahl anstelle des Standard-Trennzeichens am Ende der Zeile (vor dem Trennumbruch) für die Sprache zu verwenden. Der `auto`-Wert wählt den richtigen Wert, um einen Wortmittenumbruch entsprechend den typografischen Konventionen der aktuellen Inhaltssprache zu markieren.

CSS bietet zusätzliche Trennkontrolle: Mit der {{cssxref("hyphenate-limit-chars")}} Eigenschaft kann die Mindestwortlänge, die Trennung erlaubt, sowie die Mindestanzahl von Zeichen vor und nach dem Bindestrich festgelegt werden.

## Das `<wbr>`-Element

Wenn Sie wissen, wo Sie möchten, dass eine lange Zeichenfolge umgebrochen werden soll, können Sie das HTML-Element {{HTMLElement("wbr")}} einsetzen. Dies kann in Fällen nützlich sein, wie das Anzeigen einer langen URL auf einer Seite. Sie können dann die Eigenschaft hinzufügen, um die Zeichenfolge an sinnvollen Stellen umzubrechen, die das Lesen erleichtern.

Im untenstehenden Beispiel bricht der Text an der Position des {{HTMLElement("wbr")}}.

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
- Die CSS-Eigenschaft {{cssxref("hyphens")}}
- Die CSS-Eigenschaft {{cssxref("hyphenate-character")}}
- Die CSS-Eigenschaft {{cssxref("hyphenate-limit-chars")}}
- [Overflow und Datenverlust in CSS](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
