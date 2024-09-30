---
title: Umgang mit verschiedenen Textausrichtungen
slug: Learn/CSS/Building_blocks/Handling_different_text_directions
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks")}}

Viele der Eigenschaften und Werte, die wir bisher in unserem CSS-Lernen kennengelernt haben, sind mit den physischen Abmessungen unseres Bildschirms verbunden. Wir erstellen beispielsweise Ränder oben, rechts, unten und links einer Box. Diese physischen Abmessungen passen sehr gut zu Inhalten, die horizontal betrachtet werden. Standardmäßig unterstützt das Web tendenziell linksläufige Sprachen (z.B. Englisch oder Französisch) besser als rechtsläufige Sprachen (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch weiterentwickelt, um verschiedenen Richtungen von Inhalten besser zu unterstützen, einschließlich rechts-nach-links aber auch oben-nach-unten Inhalte (wie Japanisch) — diese unterschiedlichen Richtungen werden als **Schreibmodi** bezeichnet. Während Sie in Ihrem Studium voranschreiten und beginnen, mit Layouts zu arbeiten, wird ein Verständnis von Schreibmodi für Sie sehr hilfreich sein, daher stellen wir sie Ihnen nun vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegendes Wissen im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Arbeiten mit Dateien</a
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis der Bedeutung von Schreibmodi für modernes CSS.</td>
    </tr>
  </tbody>
</table>

## Was sind Schreibmodi?

Ein Schreibmodus in CSS bezieht sich darauf, ob der Text horizontal oder vertikal läuft. Die Eigenschaft {{cssxref("writing-mode")}} ermöglicht es uns, von einem Schreibmodus zu einem anderen zu wechseln. Sie müssen nicht in einer Sprache arbeiten, die einen vertikalen Schreibmodus verwendet, um dies tun zu wollen — Sie könnten den Schreibmodus auch aus kreativen Gründen für Teile Ihres Layouts ändern.

Im folgenden Beispiel haben wir eine Überschrift, die mit `writing-mode: vertical-rl` angezeigt wird. Der Text verläuft nun vertikal. Vertikaler Text ist im Grafikdesign üblich und kann eine Möglichkeit sein, Ihrem Webdesign ein interessanteres Aussehen und Gefühl zu verleihen.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/simple-vertical.html", '100%', 800)}}

Die drei möglichen Werte für die [`writing-mode`](/de/docs/Web/CSS/writing-mode) Eigenschaft sind:

- `horizontal-tb`: Blockfließrichtung von oben nach unten. Sätze verlaufen horizontal.
- `vertical-rl`: Blockfließrichtung von rechts nach links. Sätze verlaufen vertikal.
- `vertical-lr`: Blockfließrichtung von links nach rechts. Sätze verlaufen vertikal.

Die `writing-mode` Eigenschaft legt also tatsächlich die Richtung fest, in der Blockelemente auf der Seite angezeigt werden — entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in der der Text in Sätzen fließt.

## Schreibmodi und Block- und Inline-Layout

Wir haben bereits das [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) besprochen und die Tatsache, dass einige Dinge als Blockelemente angezeigt werden und andere als Inline-Elemente. Wie oben beschrieben, sind Block und Inline mit dem Schreibmodus des Dokuments verbunden und nicht mit dem physischen Bildschirm. Blöcke werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schreibmodus verwenden, der Text horizontal anzeigt, wie zum Beispiel Englisch.

Wenn wir uns ein Beispiel ansehen, wird dies deutlicher. Im nächsten Beispiel habe ich zwei Boxen, die eine Überschrift und einen Absatz enthalten. Die erste verwendet `writing-mode: horizontal-tb`, einen Schreibmodus, der horizontal und von oben nach unten geschrieben wird. Die zweite verwendet `writing-mode: vertical-rl`; dies ist ein Schreibmodus, der vertikal und von rechts nach links geschrieben wird.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/block-inline.html", '100%', 1200)}}

Wenn wir den Schreibmodus wechseln, ändern wir, welche Richtung Block und welche Inline ist. In einem `horizontal-tb`-Schreibmodus verläuft die Blockrichtung von oben nach unten; in einem `vertical-rl`-Schreibmodus verläuft die Blockrichtung horizontal von rechts nach links. Die **Block-Dimension** ist also immer die Richtung, in der Blöcke auf der Seite im verwendeten Schreibmodus angezeigt werden. Die **Inline-Dimension** ist immer die Richtung, in der ein Satz fließt.

Diese Abbildung zeigt die beiden Dimensionen in einem horizontalen Schreibmodus.![Die Block- und Inline-Achse für einen horizontalen Schreibmodus.](horizontal-tb.png)

Diese Abbildung zeigt die beiden Dimensionen in einem vertikalen Schreibmodus.

![Die Block- und Inline-Achse für einen vertikalen Schreibmodus.](vertical.png)

Sobald Sie beginnen, sich mit dem CSS-Layout zu beschäftigen, und insbesondere mit den neueren Layout-Methoden, wird diese Idee von Block und Inline sehr wichtig. Wir werden darauf später noch einmal zurückkommen.

### Richtung

Neben dem Schreibmodus haben wir auch die Textrichtung. Wie oben erwähnt, werden einige Sprachen wie Arabisch horizontal, aber von rechts nach links geschrieben. Dies ist wahrscheinlich nichts, was Sie aus kreativen Gründen verwenden würden — wenn Sie etwas rechts ausrichten möchten, gibt es andere Möglichkeiten, dies zu tun — aber es ist wichtig, dies als Teil der Natur von CSS zu verstehen. Das Web ist nicht nur für Sprachen, die von links nach rechts angezeigt werden!

Da sich der Schreibmodus und die Richtung des Textes ändern können, beziehen sich neuere CSS-Layout-Methoden nicht auf links und rechts sowie oben und unten. Stattdessen wird von _Anfang_ und _Ende_ in Verbindung mit dieser Idee von Inline und Block gesprochen. Machen Sie sich jetzt nicht zu viele Gedanken darüber, aber behalten Sie diese Ideen im Hinterkopf, wenn Sie anfangen, sich mit dem Layout zu beschäftigen; Sie werden es sehr hilfreich finden, um CSS zu verstehen.

## Logische Eigenschaften und Werte

Der Grund, zu diesem Zeitpunkt in Ihrem Lernprozess über Schreibmodi und Richtung zu sprechen, ist, dass wir bereits viele Eigenschaften betrachtet haben, die sich auf die physischen Abmessungen des Bildschirms beziehen, und diese machen mehr Sinn, wenn sie in einem horizontalen Schreibmodus sind.

Werfen wir einen Blick auf unsere beiden Boxen — eine mit einem `horizontal-tb`-Schreibmodus und eine mit `vertical-rl`. Ich habe beiden Boxen eine {{cssxref("width")}} gegeben. Sie können sehen, dass die Box im vertikalen Schreibmodus noch eine Breite hat, und dies führt zu einem Überlauf des Textes.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/width.html", '100%', 1200)}}

Was wir in diesem Szenario wirklich wollen, ist im Wesentlichen die Höhe mit der Breite in Übereinstimmung mit dem Schreibmodus zu tauschen. Wenn wir uns in einem vertikalen Schreibmodus befinden, möchten wir, dass sich die Box in der Blockdimension ausdehnt, so wie sie es im horizontalen Modus tut.

Um dies zu erleichtern, hat CSS kürzlich eine Reihe von abgebildeten Eigenschaften entwickelt. Diese ersetzen im Wesentlichen die physischen Eigenschaften — Dinge wie `width` und `height` — durch **logische**, oder **flussrelative** Versionen.

Die Eigenschaft, die auf `width` im horizontalschreibenden Modus abgebildet ist, nennt sich {{cssxref("inline-size")}} — sie bezieht sich auf die Größe in der Inline-Dimension. Die Eigenschaft für `height` heißt {{cssxref("block-size")}} und ist die Größe in der Block-Dimension. Sie können sehen, wie dies im folgenden Beispiel funktioniert, bei dem wir `width` durch `inline-size` ersetzt haben.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/inline-size.html", '100%', 1000)}}

### Logische Rand-, Rahmen- und Auffütterungseigenschaften

In den letzten beiden Lektionen haben wir das CSS-Boxmodell und die CSS-Ränder gelernt. Bei den Eigenschaften für Rand, Rahmen und Auffütterung finden Sie viele Instanzen von physischen Eigenschaften, zum Beispiel {{cssxref("margin-top")}}, {{cssxref("padding-left")}} und {{cssxref("border-bottom")}}. Auf die gleiche Weise, wie wir Zuordnungen für Breite und Höhe haben, gibt es auch Zuordnungen für diese Eigenschaften.

Die `margin-top`-Eigenschaft wird auf {{cssxref("margin-block-start")}} abgebildet — dies bezieht sich immer auf den Rand am Anfang der Block-Dimension.

Die {{cssxref("padding-left")}} Eigenschaft wird auf {{cssxref("padding-inline-start")}} zugeordnet, die Auffütterung, die am Anfang der Inline-Richtung angewendet wird. Dies ist dort, wo Sätze in diesem Schreibmodus beginnen. Die {{cssxref("border-bottom")}} Eigenschaft wird auf {{cssxref("border-block-end")}} zugeordnet, das ist der Rahmen am Ende der Block-Dimension.

Unten sehen Sie einen Vergleich zwischen physischen und logischen Eigenschaften.

**Wenn Sie den Schreibmodus der Boxen ändern, indem Sie die `writing-mode`-Eigenschaft auf `.box` zu `vertical-rl` wechseln, werden Sie sehen, wie die physischen Eigenschaften an ihre physische Richtung gebunden bleiben, während die logischen Eigenschaften mit dem Schreibmodus wechseln.**

**Sie können auch sehen, dass das {{htmlelement("Heading_Elements", "h2")}} einen schwarzen `border-bottom` hat. Können Sie herausfinden, wie dieser untere Rahmen immer unter dem Text in beiden Schreibmodi angezeigt wird?**

{{EmbedGHLiveSample("css-examples/learn/writing-modes/logical-mbp.html", '100%', 1300)}}

Es gibt eine Vielzahl von Eigenschaften, wenn man alle einzelnen Langformrahmen betrachtet, und Sie können alle abgebildeten Eigenschaften auf der MDN-Seite für [Logische Eigenschaft und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) sehen.

### Logische Werte

Wir haben bisher logische Eigenschaftsnamen betrachtet. Es gibt auch einige Eigenschaften, die physische Werte von `top`, `right`, `bottom` und `left` übernehmen. Auch diese Werte haben Zuordnungen zu logischen Werten — `block-start`, `inline-end`, `block-end` und `inline-start`.

Beispielsweise können Sie ein Bild nach links schweben lassen, um Text um das Bild herumlaufen zu lassen. Sie könnten `left` durch `inline-start` ersetzen, wie im folgenden Beispiel gezeigt.

**Ändern Sie den Schreibmodus in diesem Beispiel zu `vertical-rl`, um zu sehen, was mit dem Bild passiert. Ändern Sie `inline-start` zu `inline-end`, um die Schwebe zu ändern.**

{{EmbedGHLiveSample("css-examples/learn/writing-modes/float.html", '100%', 1000)}}

Hier verwenden wir auch logische Randwerte, um sicherzustellen, dass der Rand unabhängig vom verwendeten Schreibmodus an der richtigen Stelle ist.

### Sollten Sie physische oder logische Eigenschaften verwenden?

Die logischen Eigenschaften und Werte sind neuer als ihre physischen Entsprechungen und wurden daher erst kürzlich in den Browsern implementiert. Sie können jede Eigenschaftsseite auf MDN überprüfen, um zu sehen, wie weit die Browserunterstützung reicht. Wenn Sie keine mehreren Schreibmodi verwenden, ziehen Sie es vorerst möglicherweise vor, die physischen Versionen zu verwenden. Letztendlich erwarten wir jedoch, dass die Leute zu den logischen Versionen für die meisten Dinge übergehen werden, da sie viel Sinn machen, sobald Sie auch anfangen, mit Layout-Methoden wie Flexbox und Grid umzugehen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Schreibmodi und logische Eigenschaften](/de/docs/Learn/CSS/Building_blocks/Writing_Modes_Tasks).

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte werden in CSS immer wichtiger. Ein Verständnis der Block- und Inline-Richtung — und wie sich der Textfluss mit einem Wechsel des Schreibmodus ändert — wird zukünftig sehr nützlich sein. Es wird Ihnen helfen, CSS zu verstehen, selbst wenn Sie nie einen anderen Schreibmodus als einen horizontalen verwenden.

Im nächsten Artikel werfen wir einen genaueren Blick auf [Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) in CSS.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks")}}
