---
title: Umbruch und Trennung von Text
slug: Web/CSS/Guides/Text/Wrapping_breaking_text
l10n:
  sourceCommit: d4569d185ccab9b722eb849c033ef69f8f44d107
---

Dieser Leitfaden erklärt die verschiedenen Wege, wie überlaufender Text in CSS verwaltet werden kann.

## Was ist überlaufender Text?

In CSS, wenn Sie eine nicht trennbare Zeichenkette wie ein sehr langes Wort haben, wird es standardmäßig jede zu kleine Containerumgebung in der Inline-Richtung überlaufen. Dies können wir im folgenden Beispiel sehen: das lange Wort erstreckt sich über die Grenze des enthaltenen Kästchens hinaus.

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

CSS zeigt den Überlauf auf diese Weise an, weil etwas anderes zu tun Datenverlust verursachen könnte. In CSS bedeutet Datenverlust, dass einige Inhalte verschwinden. Der anfängliche Wert von {{cssxref("overflow")}} ist `visible`, und wir können den überlaufenden Text sehen. Es ist im Allgemeinen besser, Überlauf sehen zu können, auch wenn er unordentlich ist. Wenn Dinge verschwinden oder beschnitten werden würden, wie es passiert, wenn `overflow` auf `hidden` gesetzt ist, könnten Sie es möglicherweise beim Vorschau Ihrer Seite nicht bemerken. Unordentlicher Überlauf ist zumindest erkennbar, und im schlimmsten Fall kann Ihr Besucher den Inhalt sehen und lesen, auch wenn er etwas seltsam aussieht.

Im folgenden Beispiel können Sie sehen, was passiert, wenn `overflow` auf `hidden` eingestellt ist.

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

Um die Mindestgröße des Kastens zu finden, die seinen Inhalt ohne Überläufe enthält, setzen Sie die Eigenschaft {{cssxref("width")}} oder {{cssxref("inline-size")}} des Kastens auf {{cssxref("min-content")}}.

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

Die Verwendung von `min-content` ist daher eine Möglichkeit für überlaufende Kästchen. Wenn es möglich ist, dem Kasten zu erlauben, auf die Mindestgröße zu wachsen, die für den Inhalt erforderlich ist, aber nicht größer, wird mit diesem Schlüsselwort diese Größe erreicht.

## Lange Wörter brechen

Wenn der Kasten eine feste Größe haben muss oder Sie sicherstellen möchten, dass lange Wörter nicht überlaufen, kann die Eigenschaft {{cssxref("overflow-wrap")}} helfen. Diese Eigenschaft wird ein Wort brechen, sobald es zu lang ist, um auf einer Linie zu passen.

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
> Die Eigenschaft `overflow-wrap` wirkt auf dieselbe Weise wie die nicht standardisierte Eigenschaft `word-wrap`. Die Eigenschaft `word-wrap` wird jetzt von Browsern als Alias der standardisierten Eigenschaft behandelt.

Eine alternative Eigenschaft, die Sie ausprobieren können, ist {{cssxref("word-break")}}. Diese Eigenschaft wird das Wort an dem Punkt brechen, an dem es überläuft. Sie wird sogar einen Umbruch verursachen, wenn das Platzieren des Wortes auf einer neuen Linie es ermöglichen würde, ohne Trennung angezeigt zu werden.

Im folgenden Beispiel können Sie den Unterschied zwischen den beiden Eigenschaften am selben Textstring vergleichen.

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

Dies könnte nützlich sein, wenn Sie verhindern möchten, dass ein großer Abstand erscheint, wenn gerade genug Platz für den String vorhanden ist. Oder, wo es ein anderes Element gibt, nach dem Sie nicht möchten, dass der Umbruch direkt danach erfolgt.

Im Beispiel unten gibt es ein Kontrollkästchen und ein Label. Angenommen, Sie möchten, dass sich das Label bricht, sollte es zu lang für den Kasten sein. Sie wollen jedoch nicht, dass es direkt nach dem Kontrollkästchen gebrochen wird.

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

Um beim Brechen von Wörtern Trennstriche hinzuzufügen, verwenden Sie die CSS-Eigenschaft {{cssxref("hyphens")}}. Bei Verwendung des Werts `auto` ist der Browser frei, automatisch Wörter an geeigneten Trennstellen zu brechen, basierend auf welchen Regeln auch immer er wählt. Um etwas Kontrolle über den Prozess zu haben, verwenden Sie den Wert `manual`, dann fügen Sie ein festes (U+2010) oder ein weiches Trennzeichen (U+00AD) in die Zeichenkette ein. Ein festes Trennzeichen kann mit `‐` oder `&#x2010;` hinzugefügt werden, und ein weiches Trennzeichen kann mit den HTML-Zeichenkodierungen `&shy;`, `&#173;`, oder `&#xad;` hinzugefügt werden. Ein festes Trennzeichen wird immer brechen, auch wenn es nicht notwendig ist zu brechen. Ein weiches bricht nur, wenn es notwendig ist.

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

Sie können auch die Eigenschaft {{cssxref("hyphenate-character")}} verwenden, um das zu verwendende Zeichen Ihrer Wahl anstelle des Standard-Trennzeichens am Ende der Linie (vor dem Trennungsumbruch) für die Sprache anzugeben. Der Wert `auto` wählt den korrekten Wert aus, um einen Wortumbruch nach den typografischen Konventionen der aktuellen Inhaltssprache zu markieren.

CSS bietet zusätzlich Kontrolle über die Trennung: die Eigenschaft {{cssxref("hyphenate-limit-chars")}} kann verwendet werden, um die minimale Wortlänge festzulegen, die eine Trennung erlaubt, sowie die minimale Anzahl von Zeichen vor und nach dem Bindestrich.

## Das `<wbr>`-Element

Wenn Sie wissen, wo Sie möchten, dass eine lange Zeichenkette gebrochen werden darf, können Sie auch das HTML-Element {{HTMLElement("wbr")}} verwenden. Das `<wbr>`-Element führt eine Umbruchmöglichkeit ein—wenn das Wort überläuft, wird es an dieser Position umbrochen. Dies ermöglicht es, sinnvolle Segmente in der Zeichenkette zu bewaren, wie z.B. lange URLs.

Im folgenden Beispiel kann der Browser den Text an der Stelle des {{HTMLElement("wbr")}} brechen.

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
