---
title: Zeilenumbrüche und Textumbruch
slug: Web/CSS/CSS_text/Wrapping_breaking_text
l10n:
  sourceCommit: 587c39b8fe43e66c79c2055b4791a60483049e82
---

{{CSSRef}}

Dieser Leitfaden erklärt die verschiedenen Möglichkeiten, wie überlaufender Text in CSS verwaltet werden kann.

## Was ist überlaufender Text?

In CSS wird ein untrennbares Zeichenfolgen wie ein sehr langes Wort standardmäßig den Container in der Zeilenrichtung überlaufen, wenn dieser zu klein ist. Dies sehen wir im folgenden Beispiel: Das lange Wort erstreckt sich über die Begrenzung des Rahmens, in dem es enthalten ist.

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

CSS zeigt den Überlauf auf diese Weise an, da eine andere Darstellung zu Datenverlust führen könnte. Datenverlust in CSS bedeutet, dass ein Teil Ihres Inhalts verschwindet. Daher ist der anfängliche Wert von {{cssxref("overflow")}} `visible`, und wir können den überlaufenden Text sehen. Es ist im Allgemeinen besser, den Überlauf zu sehen, selbst wenn er unordentlich ist. Wenn etwas verschwinden oder abgeschnitten werden würde, wie es der Fall wäre, wenn `overflow` auf `hidden` gesetzt ist, würden Sie es möglicherweise nicht bemerken, wenn Sie Ihre Website voransicht. Unordentlicher Überlauf ist zumindest leicht zu erkennen, und im schlimmsten Fall kann Ihr Besucher den Inhalt sehen und lesen, auch wenn er etwas seltsam aussieht.

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

## Bestimmung der min-content-Größe

Um die minimale Größe der Box zu finden, die ihren Inhalt ohne Überlauf enthält, setzen Sie die {{cssxref("width")}}- oder {{cssxref("inline-size")}}-Eigenschaft der Box auf {{cssxref("min-content")}}.

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

Die Verwendung von `min-content` ist daher eine Möglichkeit für Boxen mit Überlauf. Wenn es möglich ist, die Box auf die minimale Größe anwachsen zu lassen, die für den Inhalt erforderlich ist, aber nicht größer, gibt Ihnen dieses Schlüsselwort diese Größe.

## Lange Wörter umbrechen

Wenn die Box eine feste Größe benötigt oder Sie sicherstellen möchten, dass lange Wörter nicht überlaufen, kann die Eigenschaft {{cssxref("overflow-wrap")}} helfen. Diese Eigenschaft wird das Wort brechen, sobald es zu lang ist, um in eine Zeile zu passen.

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
> Die `overflow-wrap`-Eigenschaft wirkt auf die gleiche Weise wie die nicht standardisierte Eigenschaft `word-wrap`. Die `word-wrap`-Eigenschaft wird von Browsern jetzt als Alias für die standardisierte Eigenschaft behandelt.

Eine alternative Eigenschaft, die Sie ausprobieren können, ist {{cssxref("word-break")}}. Diese Eigenschaft bricht das Wort an der Stelle, an der es überläuft. Sie bewirkt einen Zeilenumbruch, selbst wenn die Platzierung des Wortes auf einer neuen Zeile es ermöglichen würde, ohne Umbruch angezeigt zu werden.

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

Dies könnte nützlich sein, wenn Sie verhindern möchten, dass eine große Lücke entsteht, wenn gerade genug Platz für die Zeichenfolge vorhanden ist. Oder wenn es ein anderes Element gibt, nach dem Sie den Umbruch nicht unmittelbar passieren lassen möchten.

Im folgenden Beispiel gibt es ein Kontrollkästchen und eine Beschriftung. Angenommen, Sie möchten, dass die Beschriftung umbricht, sollte sie zu lang für die Box sein. Sie möchten jedoch nicht, dass der Umbruch direkt nach dem Kontrollkästchen erfolgt.

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

## Hinzufügen von Trennzeichen

Um Trennzeichen hinzuzufügen, wenn Wörter umgebrochen werden, verwenden Sie die CSS-Eigenschaft {{cssxref("hyphens")}}. Bei einem Wert von `auto` kann der Browser Wörter automatisch an geeigneten Trennstellen brechen, indem er beliebige Regeln befolgt, die er wählt. Um etwas Kontrolle über den Prozess zu haben, verwenden Sie einen Wert von `manual` und fügen dann ein hartes (U+2010) oder ein weiches Trennzeichen (U+00AD) in die Zeichenfolge ein. Ein hartes Trennzeichen kann mit `‐` oder `&#x2010;` hinzugefügt werden, und ein weiches Trennzeichen kann mit den HTML-Zeichenkodierungen `&shy;`, `&#173;` oder `&#xad;` hinzugefügt werden. Ein hartes Trennzeichen wird immer brechen, auch wenn dies nicht notwendig ist. Ein weiches Trennzeichen bricht nur, wenn es nötig ist.

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

Sie können auch die CSS-Eigenschaft {{cssxref("hyphenate-character")}} verwenden, um anstelle des standardmäßigen Trennzeichens am Zeilenende (vor dem Trennungsumbruch) für die Sprache eine eigene Zeichenfolge zu verwenden. Der `auto`-Wert wählt den korrekten Wert aus, um einen Wortumbruch entsprechend den typografischen Konventionen der aktuellen Inhaltssprache zu kennzeichnen.

CSS bietet zusätzliche Kontrolle über die Trennung: Die Eigenschaft {{cssxref("hyphenate-limit-chars")}} kann verwendet werden, um die Mindestlänge des Wortes festzulegen, die eine Trennung zulässt, sowie die Mindestanzahl von Zeichen vor und nach dem Trennzeichen.

## Das `<wbr>`-Element

Wenn Sie wissen, wo eine lange Zeichenfolge brechen soll, dann ist es auch möglich, das HTML-Element {{HTMLElement("wbr")}} einzufügen. Dies kann in Fällen nützlich sein, wie z. B. bei der Anzeige einer langen URL auf einer Seite. Sie können dann die Eigenschaft hinzufügen, um die Zeichenfolge an sinnvollen Stellen zu brechen, die das Lesen erleichtern.

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

- Das HTML-Element {{HTMLElement("wbr")}}
- Die CSS-Eigenschaft {{cssxref("word-break")}}
- Die CSS-Eigenschaft {{cssxref("overflow-wrap")}}
- Die CSS-Eigenschaft {{cssxref("white-space")}}
- Die CSS-Eigenschaft {{cssxref("text-wrap")}}
- Die CSS-Eigenschaft {{cssxref("hyphens")}}
- Die CSS-Eigenschaft {{cssxref("hyphenate-character")}}
- Die CSS-Eigenschaft {{cssxref("hyphenate-limit-chars")}}
- [Overflow and Data Loss in CSS](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
