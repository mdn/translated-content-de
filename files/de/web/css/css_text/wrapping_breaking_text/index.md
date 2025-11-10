---
title: Umbruch und Trennung von Text
slug: Web/CSS/CSS_text/Wrapping_breaking_text
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Dieser Leitfaden erklärt die verschiedenen Möglichkeiten, wie überlaufender Text mit CSS verwaltet werden kann.

## Was ist überlaufender Text?

In CSS, wenn Sie eine unteilbare Zeichenfolge haben, wie z. B. ein sehr langes Wort, wird es standardmäßig in einer zu kleinen Containerbox in der Inline-Richtung überlaufen. Wir können dies im folgenden Beispiel sehen: Das lange Wort erstreckt sich über die Grenzen des Containers hinaus.

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

CSS zeigt den Überlauf auf diese Weise an, da etwas anderes zu einem Datenverlust führen könnte. In CSS bedeutet Datenverlust, dass ein Teil Ihres Inhalts verschwindet. Daher ist der Anfangswert von {{cssxref("overflow")}} `visible`, und wir können den überlaufenden Text sehen. Es ist im Allgemeinen besser, den Überlauf zu sehen, auch wenn er unordentlich ist. Wenn Dinge verschwänden oder abgeschnitten würden, wie es der Fall wäre, wenn `overflow` auf `hidden` gesetzt wäre, könnten Sie es beim Vorschau Ihrer Website nicht bemerken. Unordentlicher Überlauf ist zumindest gut zu erkennen, und im schlimmsten Fall kann Ihr Besucher den Inhalt sehen und lesen, auch wenn er etwas seltsam aussieht.

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

## Ermittlung der min-content Größe

Um die Mindestgröße der Box zu finden, die ihren Inhalt ohne Überläufe enthält, setzen Sie die Eigenschaft {{cssxref("width")}} oder {{cssxref("inline-size")}} der Box auf {{cssxref("min-content")}}.

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

Die Verwendung von `min-content` ist daher eine Möglichkeit für überlaufende Boxen. Wenn es möglich ist, dass die Box auf die für den Inhalt erforderliche Mindestgröße wächst, aber nicht größer wird, erhalten Sie mit diesem Schlüsselwort diese Größe.

## Lange Wörter trennen

Wenn die Box eine feste Größe haben muss oder Sie sicherstellen möchten, dass lange Wörter nicht überlaufen können, dann kann die Eigenschaft {{cssxref("overflow-wrap")}} helfen. Diese Eigenschaft trennt ein Wort, sobald es zu lang ist, um alleine in eine Zeile zu passen.

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
> Die Eigenschaft `overflow-wrap` funktioniert auf die gleiche Weise wie die nicht standardisierte Eigenschaft `word-wrap`. Die `word-wrap`-Eigenschaft wird nun von Browsern als Alias der Standard-Eigenschaft angesehen.

Eine alternative Eigenschaft, die Sie ausprobieren können, ist {{cssxref("word-break")}}. Diese Eigenschaft bricht das Wort an der Stelle, an der es überläuft. Sie wird einen Umbruch bewirken, selbst wenn das Platzieren des Wortes in einer neuen Zeile es ermöglichen würde, ohne Umbruch angezeigt zu werden.

Im nächsten Beispiel können Sie den Unterschied zwischen den beiden Eigenschaften an derselben Zeichenfolge vergleichen.

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

Dies könnte nützlich sein, wenn Sie verhindern möchten, dass eine große Lücke erscheint, wenn gerade genug Platz für die Zeichenfolge vorhanden ist. Oder, wenn es ein anderes Element gibt, bei dem Sie nicht möchten, dass der Umbruch direkt danach erfolgt.

Im folgenden Beispiel gibt es ein Kontrollkästchen und eine Beschriftung. Angenommen, Sie möchten, dass die Beschriftung umbricht, sollte sie zu lang für die Box sein. Sie möchten jedoch nicht, dass sie direkt nach dem Kontrollkästchen umbricht.

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

## Hinzufügen von Trennstrichen

Um Trennstriche hinzuzufügen, wenn Wörter getrennt werden, verwenden Sie die CSS-Eigenschaft {{cssxref("hyphens")}}. Bei Verwendung des Werts `auto` kann der Browser automatisch Wörter an geeigneten Trennstellen brechen, basierend auf den Regeln, die er auswählt. Um etwas Kontrolle über den Prozess zu haben, verwenden Sie den Wert `manual`, und fügen Sie ein hartes (U+2010) oder weiches Trennzeichen (U+00AD) in die Zeichenfolge ein. Ein hartes Trennzeichen kann mit `‐` oder `&#x2010;` hinzugefügt werden, und ein weiches Trennzeichen kann mit den HTML-Zeichenkodierungen `&shy;`, `&#173;` oder `&#xad;` hinzugefügt werden. Ein hartes Trennzeichen wird immer brechen, selbst wenn es nicht notwendig ist. Ein weiches Trennzeichen bricht nur, wenn es erforderlich ist.

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

Sie können auch die Eigenschaft {{cssxref("hyphenate-character")}} verwenden, um anstelle des standardmäßigen Trennzeichens am Zeilenende (vor dem Trennstellenumbruch) für die Sprache eine Zeichenfolge Ihrer Wahl zu verwenden. Der `auto`-Wert wählt den richtigen Wert, um einen Zeilenumbruch in der Mitte eines Wortes entsprechend den typografischen Konventionen der aktuellen Inhaltssprache zu markieren.

CSS bietet zusätzliche Trennsteuerung: Die Eigenschaft {{cssxref("hyphenate-limit-chars")}} kann verwendet werden, um die Mindestwortlänge festzulegen, die eine Trennung zulässt, sowie die Mindestanzahl von Zeichen vor und nach dem Trennzeichen.

## Das `<wbr>` Element

Wenn Sie wissen, wo Sie eine lange Zeichenfolge trennen möchten, ist es auch möglich, das HTML-Element {{HTMLElement("wbr")}} einzufügen. Dies kann nützlich sein in Fällen wie der Anzeige einer langen URL auf einer Seite. Sie können dann die Eigenschaft hinzufügen, um die Zeichenfolge an sinnvollen Stellen zu unterbrechen, die es einfacher zu lesen machen.

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
- [Overflow and Data Loss in CSS](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
