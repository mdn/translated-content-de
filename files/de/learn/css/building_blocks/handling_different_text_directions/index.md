---
title: Umgang mit verschiedenen Textrichtungen
slug: Learn/CSS/Building_blocks/Handling_different_text_directions
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks")}}

Viele der Eigenschaften und Werte, die wir bisher in unserem CSS-Lernen kennengelernt haben, sind an die physischen Dimensionen unseres Bildschirms gebunden. Wir erstellen beispielsweise Ränder oben, rechts, unten und links eines Kastens. Diese physischen Dimensionen passen sehr gut zu Inhalten, die horizontal betrachtet werden, und standardmäßig neigt das Web dazu, linksläufige Sprachen (z. B. Englisch oder Französisch) besser zu unterstützen als rechtsläufige Sprachen (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch weiterentwickelt, um besser verschiedene Richtungsläufe von Inhalten zu unterstützen, einschließlich rechtsläufiger, aber auch von oben nach unten gerichteter Inhalte (wie Japanisch) — diese verschiedenen Richtungsläufe werden als **Schreibmodi** bezeichnet. Im Laufe Ihres Studiums und wenn Sie beginnen, mit Layouts zu arbeiten, wird ein Verständnis der Schreibmodi für Sie sehr hilfreich sein, daher werden wir sie jetzt vorstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis der Bedeutung von Schreibmodi für modernes CSS.</td>
    </tr>
  </tbody>
</table>

## Was sind Schreibmodi?

Ein Schreibmodus in CSS bezieht sich darauf, ob der Text horizontal oder vertikal verläuft. Die {{cssxref("writing-mode")}}-Eigenschaft ermöglicht es uns, von einem Schreibmodus zu einem anderen zu wechseln. Sie müssen nicht in einer Sprache arbeiten, die einen vertikalen Schreibmodus verwendet, um dies tun zu wollen — Sie könnten auch den Schreibmodus von Teilen Ihres Layouts aus kreativen Gründen ändern.

Im folgenden Beispiel haben wir eine Überschrift, die mit `writing-mode: vertical-rl` angezeigt wird. Der Text läuft nun vertikal. Vertikaler Text ist in der Grafikgestaltung üblich und kann eine Möglichkeit sein, Ihrer Webgestaltung ein interessanteres Aussehen und Gefühl zu verleihen.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/simple-vertical.html", '100%', 800)}}

Die drei möglichen Werte für die [`writing-mode`](/de/docs/Web/CSS/writing-mode)-Eigenschaft sind:

- `horizontal-tb`: Blockflussrichtung von oben nach unten. Sätze verlaufen horizontal.
- `vertical-rl`: Blockflussrichtung von rechts nach links. Sätze verlaufen vertikal.
- `vertical-lr`: Blockflussrichtung von links nach rechts. Sätze verlaufen vertikal.

Die `writing-mode`-Eigenschaft legt in Wirklichkeit die Richtung fest, in der blockweise Elemente auf der Seite angezeigt werden — entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in die der Text in Sätzen fließt.

## Schreibmodi und Block- sowie Inline-Layout

Wir haben bereits über [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) gesprochen und darüber, dass einige Dinge als Block-Elemente und andere als Inline-Elemente angezeigt werden. Wie oben beschrieben, ist Block und Inline an den Schreibmodus des Dokuments und nicht an den physischen Bildschirm gebunden. Blöcke werden nur von der oberen zur unteren Seite angezeigt, wenn Sie einen Schreibmodus verwenden, der Text horizontal anzeigt, wie beispielsweise Englisch.

Wenn wir uns ein Beispiel ansehen, wird dies deutlicher. Im nächsten Beispiel habe ich zwei Kästchen, die eine Überschrift und einen Absatz enthalten. Das erste verwendet `writing-mode: horizontal-tb`, einen Schreibmodus, der horizontal und von oben nach unten geschrieben wird. Das zweite verwendet `writing-mode: vertical-rl`; dies ist ein Schreibmodus, der vertikal und von rechts nach links geschrieben wird.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/block-inline.html", '100%', 1200)}}

Wenn wir den Schreibmodus wechseln, ändern wir, welche Richtung Block und welche Inline ist. In einem `horizontal-tb`-Schreibmodus verläuft die Blockrichtung von oben nach unten; in einem `vertical-rl`-Schreibmodus verläuft die Blockrichtung horizontal von rechts nach links. Die **Blockdimension** ist also immer die Richtung, in der die Blöcke in dem verwendeten Schreibmodus auf der Seite angezeigt werden. Die **Inline-Dimension** ist immer die Richtung, in die ein Satz fließt.

Diese Abbildung zeigt die beiden Dimensionen in einem horizontalen Schreibmodus.![Anzeige der Block- und Inline-Achse für einen horizontalen Schreibmodus.](horizontal-tb.png)

Diese Abbildung zeigt die beiden Dimensionen in einem vertikalen Schreibmodus.

![Anzeige der Block- und Inline-Achse für einen vertikalen Schreibmodus.](vertical.png)

Sobald Sie beginnen, sich mit CSS-Layout und insbesondere den neueren Layout-Methoden zu beschäftigen, wird diese Idee von Block und Inline sehr wichtig. Wir werden später darauf zurückkommen.

### Richtung

Neben dem Schreibmodus haben wir auch die Textrichtung. Wie oben erwähnt, werden einige Sprachen wie Arabisch horizontal, aber von rechts nach links geschrieben. Dies ist wahrscheinlich nichts, was Sie aus kreativen Gründen verwenden — wenn Sie etwas rechts ausrichten möchten, gibt es andere Möglichkeiten, dies zu tun — jedoch ist es wichtig, dies als Teil der Natur von CSS zu verstehen. Das Web ist nicht nur für Sprachen, die von links nach rechts angezeigt werden!

Da sich der Schreibmodus und die Textrichtung ändern können, beziehen sich neuere CSS-Layout-Methoden nicht auf links und rechts sowie oben und unten. Stattdessen sprechen sie über _Anfang_ und _Ende_ zusammen mit dieser Idee von Inline und Block. Machen Sie sich jetzt keine Sorgen darüber, aber behalten Sie diese Ideen im Hinterkopf, wenn Sie beginnen, sich mit Layout zu befassen; Sie werden es für Ihr Verständnis von CSS sehr hilfreich finden.

## Logische Eigenschaften und Werte

Der Grund, warum wir in diesem Stadium Ihres Lernens über Schreibmodi und Richtung sprechen, ist, dass wir bereits viele Eigenschaften betrachtet haben, die an die physischen Dimensionen des Bildschirms gebunden sind, und diese machen mehr Sinn, wenn sie in einem horizontalen Schreibmodus stehen.

Betrachten wir unsere beiden Kästen noch einmal — einen mit einem `horizontal-tb`-Schreibmodus und einen mit `vertical-rl`. Ich habe beiden Kästen eine {{cssxref("width")}} gegeben. Sie können sehen, dass der Kasten im vertikalen Schreibmodus immer noch eine Breite besitzt, was dazu führt, dass der Text überläuft.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/width.html", '100%', 1200)}}

In diesem Szenario möchten wir im Wesentlichen die Höhe mit der Breite gemäß dem Schreibmodus tauschen. Wenn wir in einem vertikalen Schreibmodus sind, möchten wir, dass der Kasten wie im horizontalen Modus in der Blockdimension expandiert.

Um dies zu erleichtern, hat CSS kürzlich eine Reihe von zugeordneten Eigenschaften entwickelt. Diese ersetzen im Wesentlichen physische Eigenschaften — Dinge wie `width` und `height` — durch **logische** oder **flussbezogene** Versionen.

Die Eigenschaft, die mit `width` in einem horizontalen Schreibmodus zugeordnet ist, wird {{cssxref("inline-size")}} genannt — sie bezieht sich auf die Größe in der Inline-Dimension. Die Eigenschaft für `height` heißt {{cssxref("block-size")}} und ist die Größe in der Blockdimension. Sie können in dem folgenden Beispiel sehen, wie dies funktioniert, wo wir `width` durch `inline-size` ersetzt haben.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/inline-size.html", '100%', 1000)}}

### Logische Rand-, Rand- und Auffülleigenschaften

In den letzten beiden Lektionen haben wir das CSS-Boxmodell und CSS-Ränder gelernt. In den Rand-, Rand- und Auffülleigenschaften finden Sie viele Instanzen physischer Eigenschaften, beispielsweise {{cssxref("margin-top")}}, {{cssxref("padding-left")}}, und {{cssxref("border-bottom")}}. In gleicher Weise, wie wir Zuordnungen für Breite und Höhe haben, gibt es Zuordnungen für diese Eigenschaften.

Die Eigenschaft `margin-top` ist der {{cssxref("margin-block-start")}} zugeordnet — dies bezieht sich immer auf den Rand am Anfang der Blockdimension.

Die {{cssxref("padding-left")}}-Eigenschaft ist der {{cssxref("padding-inline-start")}} zugeordnet, die Auffüllung, die am Anfang der Inline-Richtung angewendet wird. Dies wird der Ort sein, an dem Sätze in diesem Schreibmodus beginnen. Die {{cssxref("border-bottom")}}-Eigenschaft ist dem {{cssxref("border-block-end")}} zugeordnet, was der Rand am Ende der Blockdimension ist.

Sie können unten einen Vergleich zwischen physischen und logischen Eigenschaften sehen.

**Wenn Sie den Schreibmodus der Kästen ändern, indem Sie die `writing-mode`-Eigenschaft an `.box` auf `vertical-rl` ändern, werden Sie sehen, wie die physischen Eigenschaften an ihrer physischen Richtung bleiben, während die logischen Eigenschaften mit dem Schreibmodus wechseln.**

**Sie können auch sehen, dass das {{htmlelement("Heading_Elements", "h2")}} eine schwarze `border-bottom` hat. Können Sie herausfinden, wie Sie diese untere Grenze immer unter den Text in beiden Schreibmodi bringen?**

{{EmbedGHLiveSample("css-examples/learn/writing-modes/logical-mbp.html", '100%', 1300)}}

Es gibt eine große Anzahl von Eigenschaften, wenn man alle einzelnen Rand-Longhands betrachtet, und Sie können alle zugeordneten Eigenschaften auf der MDN-Seite für [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) sehen.

### Logische Werte

Bisher haben wir uns logische Eigenschaftsnamen angesehen. Es gibt auch einige Eigenschaften, die physische Werte von `top`, `right`, `bottom`, und `left` annehmen. Diese Werte haben ebenfalls Zuordnungen zu logischen Werten — `block-start`, `inline-end`, `block-end`, und `inline-start`.

Zum Beispiel können Sie ein Bild nach links floaten, um Text dazu zu bringen, um das Bild zu fließen. Sie könnten `left` durch `inline-start` ersetzen, wie im unten gezeigten Beispiel.

**Ändern Sie den Schreibmodus in diesem Beispiel auf `vertical-rl`, um zu sehen, was mit dem Bild passiert. Ändern Sie `inline-start` zu `inline-end`, um das Floatergebnis zu ändern.**

{{EmbedGHLiveSample("css-examples/learn/writing-modes/float.html", '100%', 1000)}}

Hier verwenden wir auch logische Randwerte, um sicherzustellen, dass der Rand unabhängig vom Schreibmodus an der richtigen Stelle ist.

### Sollten Sie physische oder logische Eigenschaften verwenden?

Die logischen Eigenschaften und Werte sind neuer als ihre physischen Gegenstücke und wurden daher erst kürzlich in Browsern implementiert. Sie können alle Eigenschaftsseiten auf MDN überprüfen, um zu sehen, wie weit die Unterstützung der Browser zurückreicht. Wenn Sie keine mehreren Schreibmodi verwenden, möchten Sie für den Moment vielleicht lieber die physischen Versionen verwenden. Letztendlich erwarten wir jedoch, dass die Menschen für die meisten Dinge zu den logischen Versionen übergehen werden, da sie sehr viel Sinn ergeben, sobald Sie auch mit Layout-Methoden wie Flexbox und Grid arbeiten.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Schreibmodi und logische Eigenschaften](/de/docs/Learn/CSS/Building_blocks/Writing_Modes_Tasks).

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte werden in CSS immer wichtiger. Ein Verständnis der Block- und Inlinerichtung — und wie sich der Textfluss mit einem Wechsel des Schreibmodus ändert — wird in Zukunft sehr nützlich sein. Es wird Ihnen helfen, CSS zu verstehen, auch wenn Sie niemals einen anderen Schreibmodus als einen horizontalen verwenden.

Im nächsten Artikel werden wir uns mit [Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) in CSS näher befassen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks")}}
