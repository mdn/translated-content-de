---
title: Umbruch und Zeilenumbruch
slug: Web/CSS/Guides/Text/Wrapping_breaking_text
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Leitfaden erklärt die verschiedenen Möglichkeiten, wie überlaufender Text in CSS verwaltet werden kann.

## Was ist überlaufender Text?

In CSS wird eine nicht trennbare Zeichenfolge, wie ein sehr langes Wort, standardmäßig über jeden Container hinauslaufen, der in der Inline-Richtung zu klein ist. Wir können dies im folgenden Beispiel sehen: das lange Wort erstreckt sich über die Grenze des enthaltenen Rahmens hinaus.

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

CSS zeigt Überläufe auf diese Weise an, weil andere Methoden zu Datenverlust führen könnten. Datenverlust in CSS bedeutet, dass ein Teil Ihres Inhalts verschwindet. Daher ist der anfängliche Wert von {{cssxref("overflow")}} `visible`, und wir können den überlaufenden Text sehen. Es ist im Allgemeinen besser, den Überlauf zu sehen, auch wenn er unordentlich ist. Wenn Dinge verschwinden oder abgeschnitten werden, wie es bei `overflow` auf `hidden` der Fall wäre, könnten Sie dies beim Vorschau Ihrer Website übersehen. Ein unordentlicher Überlauf ist zumindest leicht zu erkennen, und im schlimmsten Fall kann Ihr Besucher den Inhalt sehen und lesen, auch wenn er etwas seltsam aussieht.

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

## Bestimmen der Min-Content-Größe

Um die minimale Boxgröße zu finden, die ihren Inhalt ohne Überläufe enthält, setzen Sie die {{cssxref("width")}}- oder {{cssxref("inline-size")}}-Eigenschaft der Box auf {{cssxref("min-content")}}.

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

Die Verwendung von `min-content` ist somit eine Möglichkeit für überlaufende Boxen. Wenn es möglich ist, die Box auf die minimale für den Inhalt erforderliche Größe wachsen zu lassen, aber nicht größer, wird Ihnen dieses Keyword diese Größe geben.

## Lange Wörter trennen

Wenn die Box eine feste Größe haben muss oder Sie sicherstellen möchten, dass lange Wörter nicht überlaufen, kann die {{cssxref("overflow-wrap")}}-Eigenschaft helfen. Diese Eigenschaft bricht ein Wort, sobald es zu lang ist, um in einer Zeile zu bleiben.

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
> Die `overflow-wrap`-Eigenschaft funktioniert genauso wie die nicht standardisierte Eigenschaft `word-wrap`. Die `word-wrap`-Eigenschaft wird jetzt von Browsern als Alias der standardisierten Eigenschaft behandelt.

Eine alternative Eigenschaft zum Ausprobieren ist {{cssxref("word-break")}}. Diese Eigenschaft bricht das Wort an der Stelle, an der es überläuft. Sie wird einen Umbruch verursachen, selbst wenn das Platzieren des Wortes in einer neuen Zeile es erlauben würde, ohne Umbruch angezeigt zu werden.

Im nächsten Beispiel können Sie den Unterschied zwischen den beiden Eigenschaften bei derselben Zeichenfolge vergleichen.

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

Dies könnte nützlich sein, wenn Sie verhindern möchten, dass eine große Lücke entsteht, wenn gerade genug Platz für die Zeichenfolge vorhanden ist. Oder wenn es ein anderes Element gibt, bei dem Sie nicht möchten, dass der Umbruch sofort danach erfolgt.

Im Beispiel unten gibt es ein Kontrollkästchen und ein Label. Angenommen, Sie möchten, dass das Label umbricht, wenn es zu lang für die Box ist. Sie möchten jedoch nicht, dass es direkt nach dem Kontrollkästchen umbricht.

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

## Hinzufügen von Bindestrichen

Um Bindestriche hinzuzufügen, wenn Wörter umbrochen werden, verwenden Sie die CSS-Eigenschaft {{cssxref("hyphens")}}. Mit einem Wert von `auto` kann der Browser Wörter automatisch an geeigneten Trennstellen gemäß seiner Regeln brechen. Um etwas Kontrolle über den Prozess zu haben, verwenden Sie den Wert `manual` und fügen Sie ein hartes (U+2010) oder weiches Trennzeichen (U+00AD) in die Zeichenfolge ein. Ein hartes Trennzeichen kann mit `‐` oder `&#x2010;` und ein weiches Trennzeichen mit den HTML-Zeichencodes `&shy;`, `&#173;` oder `&#xad;` hinzugefügt werden. Ein hartes Trennzeichen wird immer umbrochen, selbst wenn es nicht notwendig ist. Ein weiches Trennzeichen wird nur dann gebrochen, wenn es notwendig ist.

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

Sie können auch die {{cssxref("hyphenate-character")}}-Eigenschaft verwenden, um eine Zeichenfolge Ihrer Wahl anstelle des Standardtrennzeichens für die Sprache am Ende der Zeile (vor dem Zeilenumbruchszeichen) zu verwenden. Der Wert `auto` wählt den richtigen Wert, um einen Zwischenwort-Zeilenumbruch gemäß den typografischen Konventionen der aktuellen Inhaltesprache zu markieren.

CSS bietet zusätzliche Kontrolle über Trennzeichen: Die {{cssxref("hyphenate-limit-chars")}}-Eigenschaft kann verwendet werden, um die Mindestwortlänge festzulegen, die eine Trennung ermöglicht, sowie die Mindestanzahl von Zeichen vor und nach dem Bindestrich.

## Das `<wbr>`-Element

Wenn Sie wissen, wo eine lange Zeichenfolge umgebrochen werden soll, können Sie das HTML-Element {{HTMLElement("wbr")}} einfügen. Dies kann nützlich sein, um eine lange URL auf einer Seite anzuzeigen. Sie können dann die Eigenschaft hinzufügen, um die Zeichenfolge an sinnvollen Stellen zu brechen, die das Lesen erleichtern.

Im folgenden Beispiel bricht der Text an der Position des {{HTMLElement("wbr")}}.

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
- [Überlauf und Datenverlust in CSS](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
