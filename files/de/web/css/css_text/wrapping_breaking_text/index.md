---
title: Umbruch und Trennung von Text
slug: Web/CSS/CSS_text/Wrapping_breaking_text
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Dieser Leitfaden erklärt die verschiedenen Möglichkeiten, wie überlaufender Text in CSS gehandhabt werden kann.

## Was ist überlaufender Text?

In CSS, wenn Sie eine untrennbare Zeichenfolge wie ein sehr langes Wort haben, wird es standardmäßig jeden Container im Inline-Direktion überlaufen, der zu klein dafür ist. Dies können wir im folgenden Beispiel sehen: Das lange Wort erstreckt sich über die Grenze des Kastens, in dem es enthalten ist.

{{EmbedGHLiveSample("css-examples/css-text/inline-overflow.html", '100%', 420)}}

CSS zeigt Überläufe auf diese Weise an, weil das Alternativ etwas anderes machen könnte, was zum Datenverlust führen kann. In CSS bedeutet Datenverlust, dass ein Teil Ihres Inhalts verschwindet. Daher ist der Anfangswert von {{cssxref("overflow")}} `visible`, und wir können den überlaufenden Text sehen. Es ist im Allgemeinen besser, Überläufe zu sehen, auch wenn es unordentlich aussieht. Wenn Dinge verschwinden oder abgeschnitten werden, wie es bei `overflow` auf `hidden` eingestellt der Fall wäre, könnten Sie es beim Betrachten Ihrer Website nicht bemerken. Unordentlicher Überlauf ist zumindest leicht zu erkennen, und im schlimmsten Fall kann Ihr Besucher den Inhalt sehen und lesen, auch wenn er etwas seltsam aussieht.

Im nächsten Beispiel können Sie sehen, was passiert, wenn `overflow` auf `hidden` eingestellt ist.

{{EmbedGHLiveSample("css-examples/css-text/inline-overflow-hidden.html", '100%', 420)}}

## Bestimmung der Min-Content-Größe

Um die Mindestgröße des Kastens zu finden, der seinen Inhalt ohne Überläufe enthält, setzen Sie die {{cssxref("width")}}- oder {{cssxref("inline-size")}}-Eigenschaft des Kastens auf {{cssxref("min-content")}}.

{{EmbedGHLiveSample("css-examples/css-text/min-content.html", '100%', 420)}}

Die Verwendung von `min-content` ist daher eine Möglichkeit für überlaufende Kästen. Wenn es möglich ist, den Kasten wachsen zu lassen, um die für den Inhalt erforderliche Mindestgröße zu erreichen, jedoch nicht größer, wird Ihnen dieses Schlüsselwort diese Größe geben.

## Lange Wörter umbrechen

Wenn der Kasten eine feste Größe haben muss, oder Sie sicherstellen möchten, dass lange Wörter nicht überlaufen können, kann die Eigenschaft {{cssxref("overflow-wrap")}} helfen. Diese Eigenschaft wird ein Wort umbrechen, sobald es zu lang ist, um alleine in einer Zeile zu passen.

{{EmbedGHLiveSample("css-examples/css-text/overflow-wrap.html", '100%', 660)}}

> [!NOTE]
> Die Eigenschaft `overflow-wrap` wirkt auf die gleiche Weise wie die nicht standardisierte Eigenschaft `word-wrap`. Die Eigenschaft `word-wrap` wird jetzt von Browsern als Alias der Standard-Eigenschaft behandelt.

Eine alternative Eigenschaft, die Sie ausprobieren können, ist {{cssxref("word-break")}}. Diese Eigenschaft wird das Wort an der Stelle trennen, an der es überläuft. Sie wird einen Umbruch verursachen, auch wenn das Platzieren des Wortes in einer neuen Zeile es ermöglichen würde, ohne Trennung angezeigt zu werden.

Im nächsten Beispiel können Sie den Unterschied zwischen den beiden Eigenschaften bei der gleichen Textzeichenfolge vergleichen.

{{EmbedGHLiveSample("css-examples/css-text/word-break.html", '100%', 700)}}

Dies könnte nützlich sein, wenn Sie verhindern möchten, dass eine große Lücke entsteht, wenn gerade genug Platz für die Zeichenfolge vorhanden ist. Oder, wenn es ein anderes Element gibt, nach dem Sie den Umbruch nicht unmittelbar danach haben möchten.

Im folgenden Beispiel gibt es ein Kontrollkästchen und ein Label. Angenommen, Sie möchten, dass das Label umbricht, wenn es zu lang für die Box wird. Sie möchten jedoch nicht, dass es direkt nach dem Kontrollkästchen bricht.

{{EmbedGHLiveSample("css-examples/css-text/word-break-checkbox.html", '100%', 660)}}

## Hinzufügen von Bindestrichen

Um Bindestriche hinzuzufügen, wenn Wörter umbrochen werden, verwenden Sie die CSS-Eigenschaft {{cssxref("hyphens")}}. Mit einem Wert von `auto` kann der Browser Wörter automatisch an geeigneten Trennstellen gemäß den von ihm gewählten Regeln aufbrechen. Um etwas Kontrolle über den Prozess zu haben, verwenden Sie einen Wert von `manual` und fügen Sie dann ein hartes oder weiches Trennzeichen in die Zeichenfolge ein. Ein harter Umbruch (`‐`) wird immer brechen, selbst wenn es nicht nötig ist. Ein weicher Umbruch (`&shy;`) bricht nur, wenn ein Umbruch erforderlich ist.

{{EmbedGHLiveSample("css-examples/css-text/hyphens.html", '100%', 600)}}

Sie können auch die Eigenschaft {{cssxref("hyphenate-character")}} verwenden, um das Zeichen Ihrer Wahl anstelle des standardmäßigen Trennzeichens am Zeilenende (vor dem Trennungsumbruch) für die Sprache zu verwenden. Der Wert `auto` wählt den korrekten Wert, um einen Mittelstrichumbruch gemäß den typografischen Konventionen der aktuellen Inhaltssprache zu markieren.

CSS bietet zusätzliche Trennkontrolle: Die Eigenschaft {{cssxref("hyphenate-limit-chars")}} kann verwendet werden, um die minimale Wortlänge anzugeben, die eine Trennung zulässt, sowie die minimale Anzahl von Zeichen vor und nach dem Bindestrich.

## Das `<wbr>`-Element

Wenn Sie wissen, wo Sie eine lange Zeichenfolge umbrechen möchten, ist es auch möglich, das HTML-Element {{HTMLElement("wbr")}} einzufügen. Dies kann in Fällen nützlich sein, beispielsweise bei der Anzeige einer langen URL auf einer Seite. Sie können die Eigenschaft dann hinzufügen, um die Zeichenkette an sinnvollen Stellen aufzubrechen, die das Lesen erleichtern.

Im unten stehenden Beispiel bricht der Text an der Stelle des {{HTMLElement("wbr")}}.

{{EmbedGHLiveSample("css-examples/css-text/wbr.html", '100%', 460)}}

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
