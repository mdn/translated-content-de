---
title: Text umbrechen und Zeilenumbrüche einfügen
slug: Web/CSS/Guides/Text/Wrapping_breaking_text
l10n:
  sourceCommit: 2f5d0e19eb706f36f837b84855f581f4bd087d15
---

Dieser Leitfaden erläutert die verschiedenen Möglichkeiten, überlaufenden Text in CSS zu handhaben.

## Was ist überlaufender Text?

Wenn Sie in CSS eine Zeichenfolge haben, die nicht umgebrochen werden kann, beispielsweise ein sehr langes Wort, läuft sie standardmäßig in Inline-Richtung über jeden Container hinaus, der dafür zu klein ist. Das folgende Beispiel zeigt, wie das lange Wort über die Begrenzung des umgebenden Kastens hinausragt.

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

CSS stellt Überläufe so dar, weil eine andere Vorgehensweise zu Datenverlust führen könnte. Datenverlust bedeutet in CSS, dass ein Teil des Inhalts verschwindet. Deshalb ist der Anfangswert von {{cssxref("overflow")}} `visible`: Der überlaufende Text bleibt sichtbar. Im Allgemeinen ist es besser, einen Überlauf sehen zu können, auch wenn das unordentlich aussieht. Würde der Inhalt verschwinden oder abgeschnitten, wie es bei `overflow: hidden` der Fall wäre, könnten Sie das bei der Vorschau Ihrer Website übersehen. Ein unordentlicher Überlauf fällt zumindest auf. Im schlimmsten Fall können Besucher den Inhalt trotzdem sehen und lesen, auch wenn er etwas merkwürdig aussieht.

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

Um die Mindestgröße zu ermitteln, bei der der Kasten seinen Inhalt ohne Überlauf aufnehmen kann, setzen Sie seine Eigenschaft {{cssxref("width")}} oder {{cssxref("inline-size")}} auf {{cssxref("min-content")}}.

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

`min-content` ist daher eine Möglichkeit, mit überlaufenden Kästen umzugehen. Wenn der Kasten auf die für seinen Inhalt erforderliche Mindestgröße wachsen darf, aber nicht größer werden soll, liefert Ihnen dieses Schlüsselwort genau diese Größe.

## Lange Wörter umbrechen

Wenn der Kasten eine feste Größe haben muss oder Sie sicherstellen möchten, dass lange Wörter nicht überlaufen, kann die Eigenschaft {{cssxref("overflow-wrap")}} helfen. Sie bricht ein Wort um, sobald es zu lang ist, um allein in eine Zeile zu passen.

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
> Die Eigenschaft `overflow-wrap` verhält sich genauso wie die nicht standardisierte Eigenschaft `word-wrap`. Browser behandeln `word-wrap` inzwischen als Alias für die standardisierte Eigenschaft.

Eine weitere Möglichkeit ist {{cssxref("word-break")}}. Diese Eigenschaft bricht ein Wort an der Stelle um, an der es überlaufen würde. Der Umbruch erfolgt selbst dann, wenn das Wort in einer neuen Zeile ohne Umbruch dargestellt werden könnte.

Im nächsten Beispiel können Sie die Wirkung der beiden Eigenschaften auf dieselbe Zeichenfolge vergleichen.

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

Das kann nützlich sein, wenn Sie verhindern möchten, dass eine große Lücke entsteht, obwohl für die Zeichenfolge gerade noch genügend Platz vorhanden ist. Es kann auch hilfreich sein, wenn der Umbruch nicht unmittelbar nach einem anderen Element erfolgen soll.

Im folgenden Beispiel gibt es ein Kontrollkästchen und eine Beschriftung. Angenommen, die Beschriftung soll umgebrochen werden, wenn sie zu lang für den Kasten ist. Der Umbruch soll jedoch nicht direkt nach dem Kontrollkästchen erfolgen.

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

Um Wörter beim Umbruch mit Trennzeichen zu versehen, verwenden Sie die CSS-Eigenschaft {{cssxref("hyphens")}}. Beim Wert `auto` kann der Browser Wörter gemäß den von ihm verwendeten Regeln automatisch an geeigneten Stellen trennen. Wenn Sie den Vorgang beeinflussen möchten, verwenden Sie den Wert `manual` und fügen Sie ein hartes (U+2010) oder weiches Trennzeichen (U+00AD) in die Zeichenfolge ein. Ein hartes Trennzeichen können Sie mit `‐` oder `&#x2010;` einfügen, ein weiches Trennzeichen mit den HTML-Zeichenreferenzen `&shy;`, `&#173;` oder `&#xad;`. Ein hartes Trennzeichen bewirkt immer einen Umbruch, auch wenn er nicht erforderlich ist. Ein weiches Trennzeichen bewirkt nur dann einen Umbruch, wenn dieser nötig ist.

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

Mit der Eigenschaft {{cssxref("hyphenate-character")}} können Sie außerdem eine Zeichenfolge Ihrer Wahl anstelle des für die Sprache standardmäßig verwendeten Trennzeichens am Zeilenende einsetzen. Der Wert `auto` wählt entsprechend den typografischen Konventionen der aktuellen Inhaltssprache das passende Zeichen, um einen Zeilenumbruch innerhalb eines Wortes zu kennzeichnen.

CSS bietet weitere Möglichkeiten, die Worttrennung zu steuern: Mit der Eigenschaft {{cssxref("hyphenate-limit-chars")}} können Sie sowohl die Mindestlänge eines Wortes festlegen, ab der eine Trennung zulässig ist, als auch die Mindestanzahl von Zeichen vor und nach dem Trennzeichen. Mit der Eigenschaft {{cssxref("hyphenate-limit-lines")}} können Sie die Anzahl aufeinanderfolgender Zeilen mit Worttrennungen begrenzen.

## Das Element `<wbr>`

Wenn Sie wissen, an welcher Stelle eine lange Zeichenfolge umgebrochen werden darf, können Sie auch das HTML-Element {{HTMLElement("wbr")}} verwenden. Das Element `<wbr>` markiert eine mögliche Umbruchstelle: Läuft das Wort über, wird es an dieser Stelle umgebrochen. So können Sie sinnvolle Abschnitte einer Zeichenfolge, etwa einer langen URL, zusammenhalten.

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
- Die CSS-Eigenschaft {{cssxref("hyphens")}}
- Die CSS-Eigenschaft {{cssxref("hyphenate-character")}}
- Die CSS-Eigenschaft {{cssxref("hyphenate-limit-chars")}}
- Die CSS-Eigenschaft {{cssxref("hyphenate-limit-lines")}}
- [Überlauf und Datenverlust in CSS](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
