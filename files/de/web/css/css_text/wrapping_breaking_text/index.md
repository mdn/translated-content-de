---
title: Umbruch und Zeilenumbruch von Text
slug: Web/CSS/CSS_text/Wrapping_breaking_text
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Dieser Leitfaden erklärt die verschiedenen Möglichkeiten, wie überlaufender Text in CSS verwaltet werden kann.

## Was ist überlaufender Text?

In CSS, wenn Sie eine unbrechbare Zeichenkette wie ein sehr langes Wort haben, wird es standardmäßig in die Inline-Richtung jedes zu kleine Container überlaufen. Dies können Sie im folgenden Beispiel sehen: Das lange Wort ragt über den Rand der Box hinaus, in der es enthalten ist.

{{EmbedGHLiveSample("css-examples/css-text/inline-overflow.html", '100%', 420)}}

CSS zeigt den Überlauf auf diese Weise an, da andere Maßnahmen zu Datenverlust führen könnten. In CSS bedeutet Datenverlust, dass ein Teil Ihres Inhalts verschwindet. Daher ist der anfängliche Wert von {{cssxref("overflow")}} `visible`, und wir können den überlaufenden Text sehen. Es ist im Allgemeinen besser, den Überlauf sehen zu können, auch wenn er unordentlich ist. Wenn Elemente verschwinden oder abgeschnitten würden, wie es bei `overflow` auf `hidden` der Fall wäre, könnten Sie es bei der Vorschau Ihrer Website möglicherweise nicht bemerken. Unordentlicher Überlauf ist zumindest leicht zu erkennen, und im schlimmsten Fall kann Ihr Besucher den Inhalt sehen und lesen, auch wenn er etwas seltsam aussieht.

Im nächsten Beispiel können Sie sehen, was passiert, wenn `overflow` auf `hidden` gesetzt ist.

{{EmbedGHLiveSample("css-examples/css-text/inline-overflow-hidden.html", '100%', 420)}}

## Die min-content-Größe finden

Um die Mindestgröße der Box zu ermitteln, die ihren Inhalt ohne Überlauf enthält, setzen Sie die {{cssxref("width")}}- oder {{cssxref("inline-size")}}-Eigenschaft der Box auf {{cssxref("min-content")}}.

{{EmbedGHLiveSample("css-examples/css-text/min-content.html", '100%', 420)}}

Die Verwendung von `min-content` ist daher eine Möglichkeit für überlaufende Boxen. Wenn es möglich ist, der Box zu ermöglichen, bis zur Mindestgröße für den Inhalt zu wachsen, jedoch nicht größer, wird Ihnen dieses Schlüsselwort diese Größe geben.

## Lange Wörter umbrechen

Wenn die Box eine feste Größe haben muss oder Sie sicherstellen möchten, dass lange Wörter nicht überlaufen, kann die {{cssxref("overflow-wrap")}}-Eigenschaft helfen. Diese Eigenschaft wird ein Wort brechen, sobald es zu lang ist, um auf eine Zeile zu passen.

{{EmbedGHLiveSample("css-examples/css-text/overflow-wrap.html", '100%', 660)}}

> [!NOTE]
> Die `overflow-wrap`-Eigenschaft funktioniert genauso wie die nicht standardisierte Eigenschaft `word-wrap`. Die `word-wrap`-Eigenschaft wird jetzt von Browsern als Alias der standardisierten Eigenschaft behandelt.

Eine alternative Eigenschaft zum Ausprobieren ist {{cssxref("word-break")}}. Diese Eigenschaft wird das Wort an dem Punkt brechen, an dem es überläuft. Sie wird einen Bruch verursachen, selbst wenn das Platzieren des Wortes auf einer neuen Zeile es ermöglichen würde, ohne zu brechen.

Im nächsten Beispiel können Sie den Unterschied zwischen den beiden Eigenschaften an derselben Textzeichenkette vergleichen.

{{EmbedGHLiveSample("css-examples/css-text/word-break.html", '100%', 700)}}

Dies könnte nützlich sein, wenn Sie vermeiden möchten, dass ein großer Abstand erscheint, wenn gerade genug Platz für die Zeichenkette vorhanden ist. Oder wenn es ein anderes Element gibt, bei dem Sie nicht möchten, dass der Bruch unmittelbar danach auftritt.

Im folgenden Beispiel gibt es ein Kontrollkästchen und ein Label. Nehmen wir an, Sie möchten, dass das Label bricht, sollte es zu lang für die Box sein. Sie möchten jedoch nicht, dass es direkt nach dem Kontrollkästchen bricht.

{{EmbedGHLiveSample("css-examples/css-text/word-break-checkbox.html", '100%', 660)}}

## Hinzufügen von Bindestrichen

Um Bindestriche hinzuzufügen, wenn Wörter gebrochen sind, verwenden Sie die CSS-Eigenschaft {{cssxref("hyphens")}}. Mit dem Wert `auto` darf der Browser automatisch Wörter an geeigneten Trennstellen brechen, dabei befolgt er beliebige Regeln. Um etwas Kontrolle über den Prozess zu haben, verwenden Sie den Wert `manual` und fügen Sie dann ein hartes oder weiches Trennzeichen in die Zeichenkette ein. Ein harter Bruch (`‐`) wird immer brechen, auch wenn es nicht nötig ist. Ein weicher Bruch (`&shy;`) bricht nur, wenn es notwendig ist.

{{EmbedGHLiveSample("css-examples/css-text/hyphens.html", '100%', 600)}}

Sie können auch die Eigenschaft {{cssxref("hyphenate-character")}} verwenden, um statt des Standardtrennzeichens am Zeilenende (vor dem Zeilenumbruch durch Silbentrennung) für die Sprache das Zeichen Ihrer Wahl zu verwenden. Der Wert `auto` wählt das richtige Zeichen, um einen Zeilenumbruch mitten im Wort gemäß den typografischen Konventionen der aktuellen Sprache des Inhalts zu markieren.

CSS bietet zusätzliche Silbentrennungskontrolle: Mit der Eigenschaft {{cssxref("hyphenate-limit-chars")}} kann die Mindestlänge des Wortes festgelegt werden, die eine Silbentrennung zulässt, sowie die Mindestanzahl von Zeichen vor und nach dem Bindestrich.

## Das `<wbr>`-Element

Wenn Sie wissen, wo Sie eine lange Zeichenkette brechen möchten, können Sie auch das HTML-Element {{HTMLElement("wbr")}} einfügen. Dies kann in Fällen nützlich sein, wie z. B. bei der Anzeige einer langen URL auf einer Seite. Sie können dann die Eigenschaft hinzufügen, um die Zeichenkette an sinnvollen Stellen zu brechen, die das Lesen erleichtern.

Im folgenden Beispiel bricht der Text an der Stelle des {{HTMLElement("wbr")}}.

{{EmbedGHLiveSample("css-examples/css-text/wbr.html", '100%', 460)}}

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
