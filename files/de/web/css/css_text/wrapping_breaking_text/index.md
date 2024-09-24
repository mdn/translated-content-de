---
title: Umbruch und Zeilenumbruch von Text
slug: Web/CSS/CSS_text/Wrapping_breaking_text
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Dieser Leitfaden erklärt die verschiedenen Möglichkeiten, wie überlaufender Text in CSS verwaltet werden kann.

## Was ist überlaufender Text?

In CSS wird, wenn Sie eine unzerbrechliche Zeichenfolge wie ein sehr langes Wort haben, dieses standardmäßig in jeglichen Container, der zu klein ist, im Inline-Richtung überlaufen. Dies können wir im folgenden Beispiel sehen: Das lange Wort erstreckt sich über die Grenzen des Kastens, in dem es enthalten ist.

{{EmbedGHLiveSample("css-examples/css-text/inline-overflow.html", '100%', 420)}}

CSS zeigt den Überlauf auf diese Weise an, da etwas anderes zu tun, Datenverlust verursachen könnte. In CSS bedeutet Datenverlust, dass ein Teil Ihres Inhalts verschwindet. Daher hat `overflow` als Anfangswert `visible`, und wir können den überlaufenden Text sehen. Es ist im Allgemeinen besser, den Überlauf sehen zu können, selbst wenn er unordentlich ist. Wenn Dinge verschwinden oder abgeschnitten werden, wie es passieren würde, wenn `overflow` auf `hidden` gesetzt wäre, könnten Sie es beim Vorschauen Ihrer Webseite nicht bemerken. Unordentlicher Überlauf ist zumindest leicht zu erkennen, und im schlimmsten Fall kann Ihr Besucher den Inhalt sehen und lesen, auch wenn er etwas seltsam aussieht.

Im nächsten Beispiel können Sie sehen, was passiert, wenn `overflow` auf `hidden` gesetzt ist.

{{EmbedGHLiveSample("css-examples/css-text/inline-overflow-hidden.html", '100%', 420)}}

## Ermitteln der min-content Größe

Um die minimale Größe des Kastens zu finden, der seine Inhalte ohne Überläufe enthält, setzen Sie die {{cssxref("width")}} oder {{cssxref("inline-size")}} Eigenschaft des Kastens auf {{cssxref("min-content")}}.

{{EmbedGHLiveSample("css-examples/css-text/min-content.html", '100%', 420)}}

Die Verwendung von `min-content` ist daher eine Möglichkeit für überlaufende Kästen. Wenn es möglich ist, den Kasten wachsen zu lassen, um die für den Inhalt erforderliche Mindestgröße zu erreichen, aber nicht größer, liefert die Verwendung dieses Schlüsselworts diese Größe.

## Lange Wörter trennen

Wenn der Kasten eine feste Größe haben muss oder Sie sicherstellen möchten, dass lange Wörter nicht überlaufen, kann die {{cssxref("overflow-wrap")}} Eigenschaft helfen. Diese Eigenschaft trennt ein Wort, sobald es zu lang wird, um allein in eine Zeile zu passen.

{{EmbedGHLiveSample("css-examples/css-text/overflow-wrap.html", '100%', 660)}}

> [!NOTE]
> Die `overflow-wrap`-Eigenschaft wirkt genauso wie die nicht standardisierte Eigenschaft `word-wrap`. Die `word-wrap`-Eigenschaft wird jetzt von Browsern als Alias der Standard-Eigenschaft behandelt.

Eine alternative Eigenschaft zum Ausprobieren ist {{cssxref("word-break")}}. Diese Eigenschaft wird das Wort an dem Punkt trennen, an dem es überläuft. Sie verursacht einen Umbruch, selbst wenn das Platzieren des Wortes auf einer neuen Zeile es ermöglichen würde, ohne Umbruch angezeigt zu werden.

Im nächsten Beispiel können Sie den Unterschied zwischen den beiden Eigenschaften auf derselben Textzeichenfolge vergleichen.

{{EmbedGHLiveSample("css-examples/css-text/word-break.html", '100%', 700)}}

Dies kann nützlich sein, wenn Sie verhindern möchten, dass eine große Lücke erscheint, wenn gerade genug Platz für die Zeichenfolge vorhanden ist. Oder wenn es ein anderes Element gibt, bei dem Sie nicht möchten, dass der Umbruch direkt danach erfolgt.

Im folgenden Beispiel gibt es ein Kontrollkästchen und ein Label. Angenommen, Sie möchten, dass das Label umbricht, wenn es zu lang für den Kasten ist. Sie möchten jedoch nicht, dass es direkt nach dem Kontrollkästchen bricht.

{{EmbedGHLiveSample("css-examples/css-text/word-break-checkbox.html", '100%', 660)}}

## Hinzufügen von Trennstrichen

Um Trennstriche hinzuzufügen, wenn Wörter getrennt werden, verwenden Sie die CSS {{cssxref("hyphens")}} Eigenschaft. Bei Verwendung des Werts `auto` kann der Browser Wörter automatisch an geeigneten Trennstellen brechen, wobei er beliebige Regeln befolgt, die er auswählt. Um ein gewisses Maß an Kontrolle über den Prozess zu haben, verwenden Sie den Wert `manual`, und fügen Sie dann ein festes oder weiches Trennzeichen in die Zeichenfolge ein. Ein festes Trennzeichen (`‐`) wird immer trennen, selbst wenn es nicht notwendig ist. Ein weiches Trennzeichen (`&shy;`) bricht nur, wenn es nötig ist.

{{EmbedGHLiveSample("css-examples/css-text/hyphens.html", '100%', 600)}}

Sie können auch die {{cssxref("hyphenate-character")}} Eigenschaft verwenden, um die Zeichenfolge Ihrer Wahl anstelle des Standard-Trennzeichens am Ende der Zeile (vor dem Trennlinienumbruch) für die Sprache zu verwenden. Der `auto` Wert wählt den korrekten Wert aus, um einen Mittelwort-Umbruch entsprechend den typografischen Konventionen der aktuellen Inhaltssprache zu markieren.

CSS bietet zusätzliche Kontrolle über Trennungen: die {{cssxref("hyphenate-limit-chars")}} Eigenschaft kann verwendet werden, um die Mindestlänge eines Wortes festzulegen, die eine Trennung erlaubt, sowie die minimale Anzahl von Zeichen vor und nach dem Trennzeichen.

## Das `<wbr>`-Element

Wenn Sie wissen, wo Sie eine lange Zeichenfolge trennen möchten, ist es auch möglich, das HTML-Element {{HTMLElement("wbr")}} einzufügen. Dies kann in Fällen nützlich sein, wie z. B. beim Anzeigen einer langen URL auf einer Seite. Sie können dann die Eigenschaft hinzufügen, um die Zeichenfolge an sinnvollen Stellen zu brechen, was das Lesen erleichtert.

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
- [Overflow and Data Loss in CSS](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
