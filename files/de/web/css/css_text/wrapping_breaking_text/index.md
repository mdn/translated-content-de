---
title: Umbruch und Trennung von Text
slug: Web/CSS/CSS_text/Wrapping_breaking_text
l10n:
  sourceCommit: 02cc92fc88215769a490124ed4b9ac5a0c1092d5
---

{{CSSRef}}

Dieser Leitfaden erklärt die verschiedenen Möglichkeiten, wie überlaufender Text in CSS verwaltet werden kann.

## Was ist überlaufender Text?

In CSS, wenn Sie eine untrennbare Zeichenfolge wie ein sehr langes Wort haben, wird es standardmäßig über jeden Container im Inline-Richtung überlaufen, der zu klein dafür ist. Wir können dies im folgenden Beispiel sehen: Das lange Wort erstreckt sich über die Grenze der Box hinaus, in der es enthalten ist.

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

CSS zeigt den Überlauf auf diese Weise an, da etwas anderes zu Datenverlust führen könnte. In CSS bedeutet Datenverlust, dass ein Teil Ihres Inhalts verschwindet. Daher ist der Anfangswert von {{cssxref("overflow")}} `visible`, und wir können den überlaufenden Text sehen. Es ist im Allgemeinen besser, den Überlauf sehen zu können, auch wenn er unordentlich ist. Wenn Dinge verschwinden oder abgeschnitten werden, wie es passieren würde, wenn `overflow` auf `hidden` gesetzt wäre, könnten Sie es beim Vorschauen Ihrer Website nicht bemerken. Unordentlicher Überlauf ist zumindest leicht zu erkennen, und im schlimmsten Fall kann Ihr Besucher den Inhalt sehen und lesen, auch wenn er etwas seltsam aussieht.

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

## Bestimmen der Mindestinhaltsgröße

Um die Mindestgröße der Box zu finden, die ihren Inhalt ohne Überlauf enthält, setzen Sie die {{cssxref("width")}}- oder {{cssxref("inline-size")}}-Eigenschaft der Box auf {{cssxref("min-content")}}.

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

Die Verwendung von `min-content` ist daher eine Möglichkeit für überlaufende Boxen. Wenn es möglich ist, die Box auf die Mindestgröße anwachsen zu lassen, die für den Inhalt erforderlich ist, aber nicht größer, dann gibt Ihnen dieses Schlüsselwort diese Größe.

## Lange Wörter umbrechen

Wenn die Box eine feste Größe haben muss oder Sie sicherstellen möchten, dass lange Wörter nicht überlaufen, kann die {{cssxref("overflow-wrap")}}-Eigenschaft helfen. Diese Eigenschaft bricht ein Wort, sobald es zu lang ist, um allein in eine Zeile zu passen.

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
> Die `overflow-wrap`-Eigenschaft wirkt in gleicher Weise wie die nicht standardisierte Eigenschaft `word-wrap`. Die `word-wrap`-Eigenschaft wird von Browsern nun als Alias der standardisierten Eigenschaft behandelt.

Eine alternative Eigenschaft zum Ausprobieren ist {{cssxref("word-break")}}. Diese Eigenschaft wird das Wort an der Stelle umbrechen, wo es überläuft. Sie verursacht einen Umbruch, selbst wenn das Platzieren des Wortes auf einer neuen Zeile es ohne Brechen anzeigen würde.

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

Dies könnte nützlich sein, wenn Sie verhindern möchten, dass ein großer Abstand erscheint, wenn gerade genug Platz für die Zeichenfolge vorhanden ist. Oder, wenn es ein anderes Element gibt, bei dem Sie nicht möchten, dass der Umbruch unmittelbar danach erfolgt.

Im folgenden Beispiel gibt es ein Kontrollkästchen und ein Etikett. Angenommen, Sie möchten, dass das Etikett umbrochen wird, falls es zu lang für die Box ist. Sie möchten jedoch nicht, dass es direkt nach dem Kontrollkästchen umbrochen wird.

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

## Hinzufügen von Trennstrichen

Um Trennstriche hinzuzufügen, wenn Wörter gebrochen werden, verwenden Sie die CSS-{{cssxref("hyphens")}}-Eigenschaft. Mit einem Wert von `auto` kann der Browser Wörter automatisch an geeigneten Trennstellen brechen, indem er beliebige Regeln befolgt, die er wählt. Um einen gewissen Grad an Kontrolle über den Prozess zu haben, verwenden Sie einen Wert von `manual`, und fügen Sie dann ein hartes oder weiches Trennzeichen in die Zeichenfolge ein. Ein hartes Trennzeichen (`‐`) wird immer umbrochen, auch wenn es nicht notwendig ist. Ein weiches Trennzeichen (`&shy;`) bricht nur, wenn das Brechen notwendig ist.

```html live-sample___hyphens
<div class="box">
  Llanfair­pwllgwyngy­llgogerychwyrndrobwllllantysiliogogogoch
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

Sie können auch die {{cssxref("hyphenate-character")}}-Eigenschaft verwenden, um anstelle des standardmäßigen Trennzeichens am Ende der Zeile (vor dem Trennungsumbruch) für die Sprache die von Ihnen bevorzugte Zeichenfolge zu verwenden. Der `auto`-Wert wählt den korrekten Wert zur Kennzeichnung eines Wortzwischenumbruches gemäß den typografischen Konventionen der aktuellen Inhaltssprache.

CSS bietet zusätzliche Kontrolle über die Silbentrennung: Die {{cssxref("hyphenate-limit-chars")}}-Eigenschaft kann verwendet werden, um die Mindestwortlänge festzulegen, die das Silbentrennen erlaubt, sowie die Mindestanzahl von Zeichen vor und nach dem Trennstrich.

## Das `<wbr>`-Element

Wenn Sie wissen, wo Sie eine lange Zeichenfolge brechen möchten, ist es auch möglich, das HTML-{{HTMLElement("wbr")}}-Element einzufügen. Dies kann in Fällen nützlich sein, wie zum Beispiel bei der Anzeige einer langen URL auf einer Seite. Sie können dann die Eigenschaft hinzufügen, um die Zeichenfolge an sinnvollen Stellen zu brechen, die das Lesen erleichtern.

Im folgenden Beispiel bricht der Text an der Stelle des {{HTMLElement("wbr")}}.

```html live-sample___wbr
<div class="box">
  Llanfair<wbr />pwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
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

- Das HTML-{{HTMLElement("wbr")}}-Element
- Die CSS-{{cssxref("word-break")}}-Eigenschaft
- Die CSS-{{cssxref("overflow-wrap")}}-Eigenschaft
- Die CSS-{{cssxref("white-space")}}-Eigenschaft
- Die CSS-{{cssxref("text-wrap")}}-Eigenschaft
- Die CSS-{{cssxref("hyphens")}}-Eigenschaft
- Die CSS-{{cssxref("hyphenate-character")}}-Eigenschaft
- Die CSS-{{cssxref("hyphenate-limit-chars")}}-Eigenschaft
- [Überlauf und Datenverlust in CSS](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
