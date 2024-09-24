---
title: Umgang mit unterschiedlichen Schreibrichtungen
slug: Learn/CSS/Building_blocks/Handling_different_text_directions
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks")}}

Viele der Eigenschaften und Werte, mit denen wir uns bisher in unserem CSS-Lernprozess beschäftigt haben, sind an die physikalischen Dimensionen unseres Bildschirms gebunden. Wir erstellen zum Beispiel Ränder oben, rechts, unten und links eines Kastens. Diese physikalischen Dimensionen passen sehr gut zu horizontal betrachtetem Inhalt, und standardmäßig unterstützt das Web tendenziell Sprachen, die von links nach rechts gehen (z. B. Englisch oder Französisch), besser als solche, die von rechts nach links gehen (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch weiterentwickelt, um eine bessere Unterstützung verschiedener Inhaltsrichtungen zu bieten, einschließlich von rechts-nach-links, aber auch von oben nach unten (wie Japanisch) — diese verschiedenen Richtungen werden als **Schreibmodi** bezeichnet. Da Sie in Ihrem Studium voranschreiten und beginnen, mit Layouts zu arbeiten, wird ein Verständnis der Schreibmodi sehr hilfreich für Sie sein, daher werden wir sie jetzt einführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis der Bedeutung von Schreibmodi im modernen CSS.</td>
    </tr>
  </tbody>
</table>

## Was sind Schreibmodi?

Ein Schreibmodus in CSS bezieht sich darauf, ob der Text horizontal oder vertikal verläuft. Die Eigenschaft {{cssxref("writing-mode")}} ermöglicht es uns, von einem Schreibmodus in einen anderen zu wechseln. Sie müssen nicht in einer Sprache arbeiten, die einen vertikalen Schreibmodus verwendet, um dies tun zu wollen — Sie könnten den Schreibmodus eines Teils Ihres Layouts auch aus kreativen Gründen ändern.

Im untenstehenden Beispiel haben wir eine Überschrift, die mit `writing-mode: vertical-rl` angezeigt wird. Der Text läuft nun vertikal. Vertikaler Text ist im Grafikdesign üblich und kann eine Möglichkeit sein, Ihrem Webdesign ein interessanteres Aussehen und Gefühl zu verleihen.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/simple-vertical.html", '100%', 800)}}

Die drei möglichen Werte für die [`writing-mode`](/de/docs/Web/CSS/writing-mode) Eigenschaft sind:

- `horizontal-tb`: Blockflussrichtung von oben nach unten. Sätze laufen horizontal.
- `vertical-rl`: Blockflussrichtung von rechts nach links. Sätze laufen vertikal.
- `vertical-lr`: Blockflussrichtung von links nach rechts. Sätze laufen vertikal.

Also legt die `writing-mode`-Eigenschaft tatsächlich die Richtung fest, in der Block-Elemente auf der Seite angezeigt werden — entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in der der Text in Sätzen verläuft.

## Schreibmodi und Block- sowie Inline-Layout

Wir haben bereits über [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) gesprochen und darüber, dass einige Dinge als Blockelemente und andere als Inlineelemente angezeigt werden. Wie oben beschrieben, ist Block und Inline an den Schreibmodus des Dokuments gebunden und nicht an den physikalischen Bildschirm. Blöcke werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schreibmodus verwenden, der Text horizontal anzeigt, wie z. B. Englisch.

Wenn wir uns ein Beispiel ansehen, wird das klarer. Im nächsten Beispiel habe ich zwei Kästen, die eine Überschrift und einen Absatz enthalten. Der erste verwendet `writing-mode: horizontal-tb`, einen Schreibmodus, der horizontal und von oben nach unten verläuft. Der zweite verwendet `writing-mode: vertical-rl`; dies ist ein Schreibmodus, der vertikal und von rechts nach links verläuft.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/block-inline.html", '100%', 1200)}}

Wenn wir den Schreibmodus ändern, ändern wir, welche Richtung Block und welche Inline ist. In einem `horizontal-tb` Schreibmodus verläuft die Blockrichtung von oben nach unten; in einem `vertical-rl` Schreibmodus verläuft die Blockrichtung horizontal von rechts nach links. Die **Blockdimension** ist also immer die Richtung, in der Blöcke auf der Seite im verwendeten Schreibmodus angezeigt werden. Die **Inlinedimension** ist immer die Richtung, in der ein Satz verläuft.

Diese Abbildung zeigt die beiden Dimensionen in einem horizontalen Schreibmodus.![Anzeige der Block- und Inline-Achse für einen horizontalen Schreibmodus.](horizontal-tb.png)

Diese Abbildung zeigt die beiden Dimensionen in einem vertikalen Schreibmodus.

![Anzeige der Block- und Inline-Achse für einen vertikalen Schreibmodus.](vertical.png)

Sobald Sie beginnen, sich mit dem CSS-Layout, insbesondere mit den neueren Layoutmethoden, zu befassen, wird diese Idee von Block und Inline sehr wichtig. Wir werden später darauf zurückkommen.

### Richtung

Zusätzlich zum Schreibmodus gibt es auch die Textrichtung. Wie oben erwähnt, werden einige Sprachen wie Arabisch horizontal, aber von rechts nach links geschrieben. Dies ist wahrscheinlich nichts, was Sie aus kreativen Gründen verwenden würden — wenn Sie etwas rechtsbündig ausrichten möchten, gibt es andere Möglichkeiten dafür — jedoch ist es wichtig, dies als Teil der Natur von CSS zu verstehen. Das Web ist nicht nur für Sprachen, die von links nach rechts angezeigt werden!

Da sich der Schreibmodus und die Textrichtung ändern können, beziehen sich neuere CSS-Layoutmethoden nicht mehr auf links und rechts, oben und unten. Stattdessen wird von _Start_ und _Ende_ in Verbindung mit dieser Idee von Inline und Block gesprochen. Machen Sie sich jetzt keine Sorgen darüber, aber behalten Sie diese Ideen im Kopf, während Sie sich mit Layouts beschäftigen; Sie werden es als sehr hilfreich bei Ihrem Verständnis von CSS empfinden.

## Logische Eigenschaften und Werte

Der Grund, an dieser Stelle Ihres Lernens über Schreibmodi und Richtung zu sprechen, ist, dass wir uns bereits viele Eigenschaften angesehen haben, die an die physikalischen Dimensionen des Bildschirms gebunden sind, und diese machen mehr Sinn in einem horizontalen Schreibmodus.

Werfen wir einen Blick auf unsere beiden Kästen — einen mit einem `horizontal-tb` Schreibmodus und einen mit `vertical-rl`. Ich habe beiden Kästen eine {{cssxref("width")}} zugewiesen. Sie können sehen, dass der Kasten im vertikalen Schreibmodus immer noch eine Breite hat, wodurch der Text überläuft.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/width.html", '100%', 1200)}}

Was wir in diesem Szenario wirklich wollen, ist im Grunde genommen die Höhe mit der Breite entsprechend dem Schreibmodus zu tauschen. Wenn wir in einem vertikalen Schreibmodus sind, wollen wir, dass der Kasten sich in der Blockdimension so ausdehnt, wie er es im horizontalen Modus tut.

Um dies zu erleichtern, hat CSS kürzlich eine Reihe von zugeordneten Eigenschaften entwickelt. Diese ersetzen im Wesentlichen physikalische Eigenschaften — wie `width` und `height` — durch **logische**, oder **fließ-relativ** Versionen.

Die der Breite zugeordnete Eigenschaft im horizontalen Schreibmodus wird {{cssxref("inline-size")}} genannt — sie bezieht sich auf die Größe in der Inlinedimension. Die Eigenschaft für die Höhe wird {{cssxref("block-size")}} genannt und bezieht sich auf die Größe in der Blockdimension. Sie können sehen, wie das funktioniert, im Beispiel unten, wo wir `width` durch `inline-size` ersetzt haben.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/inline-size.html", '100%', 1000)}}

### Logische Rand-, Rahmen- und Polstereigenschaften

In den letzten beiden Lektionen haben wir über das CSS-Boxmodell und CSS-Rahmen gelernt. In den Rand-, Rahmen- und Polstereigenschaften finden Sie viele Beispiele für physikalische Eigenschaften, wie {{cssxref("margin-top")}}, {{cssxref("padding-left")}}, und {{cssxref("border-bottom")}}. Auf die gleiche Weise, wie es Zuordnungen für Breite und Höhe gibt, gibt es auch Zuordnungen für diese Eigenschaften.

Die Eigenschaft `margin-top` ist zu {{cssxref("margin-block-start")}} zugeordnet — dies bezieht sich immer auf den Rand am Anfang der Blockdimension.

Die Eigenschaft {{cssxref("padding-left")}} ist zu {{cssxref("padding-inline-start")}} zugeordnet, die Polsterung, die am Anfang der Inlinerichtung angewendet wird. Dies wird der Ort sein, an dem Sätze in diesem Schreibmodus beginnen. Die Eigenschaft {{cssxref("border-bottom")}} ist zu {{cssxref("border-block-end")}} zugeordnet, was der Rahmen am Ende der Blockdimension ist.

Sie können unten einen Vergleich zwischen physikalischen und logischen Eigenschaften sehen.

**Wenn Sie den Schreibmodus der Kästen ändern, indem Sie die `writing-mode` Eigenschaft auf `.box` auf `vertical-rl` umstellen, werden Sie sehen, wie die physikalischen Eigenschaften an ihre physikalische Richtung gebunden bleiben, während die logischen Eigenschaften sich mit dem Schreibmodus ändern.**

**Sie können auch sehen, dass das {{htmlelement("Heading_Elements", "h2")}} ein schwarzes `border-bottom` hat. Können Sie herausfinden, wie Sie diesen unteren Rahmen immer unter den Text in beiden Schreibmodi bringen können?**

{{EmbedGHLiveSample("css-examples/learn/writing-modes/logical-mbp.html", '100%', 1300)}}

Es gibt eine große Anzahl von Eigenschaften, wenn man alle einzelnen Rahmenaufschrifteigenschaften bedenkt, und Sie können alle zugeordneten Eigenschaften auf der MDN-Seite für [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) sehen.

### Logische Werte

Bisher haben wir uns logische Eigenschaftsnamen angesehen. Es gibt auch einige Eigenschaften, die physikalische Werte von `top`, `right`, `bottom`, und `left` annehmen. Diese Werte haben ebenfalls Zuordnungen zu logischen Werten — `block-start`, `inline-end`, `block-end`, und `inline-start`.

Zum Beispiel können Sie ein Bild nach links floaten, um Text um das Bild herumlaufen zu lassen. Sie könnten `left` durch `inline-start` ersetzen, wie im Beispiel unten gezeigt.

**Ändern Sie den Schreibmodus in diesem Beispiel auf `vertical-rl`, um zu sehen, was mit dem Bild passiert. Ändern Sie `inline-start` zu `inline-end`, um das Floaten zu ändern.**

{{EmbedGHLiveSample("css-examples/learn/writing-modes/float.html", '100%', 1000)}}

Hier verwenden wir auch logische Randwerte, um sicherzustellen, dass der Rand unabhängig vom Schreibmodus an der richtigen Stelle ist.

### Sollten Sie physikalische oder logische Eigenschaften verwenden?

Die logischen Eigenschaften und Werte sind neuer als ihre physikalischen Entsprechungen und wurden daher erst kürzlich in Browsern implementiert. Sie können auf jeder Eigenschaftsseite auf MDN nachsehen, wie weit die Browserunterstützung zurückgeht. Wenn Sie keine mehrere Schreibmodi verwenden, ziehen Sie es vielleicht vor, vorerst die physikalischen Versionen zu verwenden. Letztendlich erwarten wir jedoch, dass die meisten Menschen zu den logischen Versionen übergehen werden, da sie viel Sinn machen, sobald Sie auch mit Layoutmethoden wie Flexbox und Grid beginnen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Schreibmodi und logische Eigenschaften](/de/docs/Learn/CSS/Building_blocks/Writing_Modes_Tasks).

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte werden im CSS immer wichtiger. Ein Verständnis der Block- und Inlinerichtung — und wie sich der Textfluss mit einer Änderung des Schreibmodus ändert — wird sehr nützlich sein. Es wird Ihnen beim Verständnis von CSS helfen, auch wenn Sie nie einen anderen als einen horizontalen Schreibmodus verwenden.

Im nächsten Artikel werfen wir einen genauen Blick auf [Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) in CSS.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks")}}
