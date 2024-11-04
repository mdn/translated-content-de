---
title: Überlaufender Inhalt
slug: Learn/CSS/Building_blocks/Overflowing_content
l10n:
  sourceCommit: 68772e87a84d6d6fc6a8e377dea4998afbeb511c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}

Überlauf tritt auf, wenn zu viel Inhalt vorhanden ist, um in ein Elementkästchen zu passen. In diesem Leitfaden werden Sie lernen, was Überlauf ist und wie man ihn handhabt.

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
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS: Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Den Überlauf verstehen und wie man ihn handhabt.</td>
    </tr>
  </tbody>
</table>

## Was ist Überlauf?

Alles in CSS ist ein Kasten. Sie können die Größe dieser Kästen einschränken, indem Sie Werte für {{cssxref("width")}} und {{cssxref("height")}} (oder {{cssxref("inline-size")}} und {{cssxref("block-size")}}) zuweisen. **Überlauf entsteht, wenn zu viel Inhalt in einen Kasten passt.** CSS bietet verschiedene Werkzeuge zur Verwaltung von Überläufen. Wenn Sie tiefer in CSS-Layouts und das Schreiben von CSS eintauchen, werden Sie auf mehr Überlaufsituationen stoßen.

## CSS versucht, "Datenverlust" zu vermeiden

Betrachten wir zwei Beispiele, die das Standardverhalten von CSS bei Überlauf demonstrieren.

Das erste Beispiel ist ein Kasten, der durch die Einstellung einer `height` eingeschränkt wurde. Dann fügen wir Inhalt hinzu, der den zugewiesenen Platz überschreitet. Der Inhalt fließt über den Kasten hinaus und fällt in den untenstehenden Absatz.

```html live-sample___block-overflow
<div class="box">
  This box has a height and a width. This means that if there is too much
  content to be displayed within the assigned height, there will be an overflow
  situation. If overflow is set to hidden then any overflow will not be visible.
</div>

<p>This content is outside of the box.</p>
```

```css live-sample___block-overflow
.box {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
}
```

{{EmbedLiveSample("block-overflow", "", "200px")}}

Das zweite Beispiel betrifft ein Wort in einem Kasten. Der Kasten wurde zu klein für das Wort gemacht, und so bricht es aus dem Kasten heraus.

```html live-sample___inline-overflow
<div class="word">Overflow</div>
```

```css live-sample___inline-overflow
.word {
  border: 1px solid #333333;
  width: 100px;
  font-size: 250%;
}
```

{{EmbedLiveSample("inline-overflow")}}

Sie fragen sich vielleicht, warum CSS auf solch chaotische Weise arbeitet und Inhalte außerhalb ihres vorgesehenen Containers anzeigt. Warum nicht den überlaufenden Inhalt verstecken? Warum nicht die Größe des Containers vergrößern, um allen Inhalt zu fassen?

Wo immer möglich, verbirgt CSS keinen Inhalt. Dies würde Datenverlust verursachen. Das Problem mit Datenverlust ist, dass Sie es möglicherweise nicht bemerken. Webseitenbesucher könnten es nicht bemerken. Wenn der Absende-Button auf einem Formular verschwindet und niemand das Formular ausfüllen kann, könnte das ein großes Problem sein! Stattdessen zeigt CSS den Überlauf auf sichtbare Weise an. Sie bemerken eher, dass es ein Problem gibt. Im schlimmsten Fall wird Ihnen ein Webseitenbesucher mitteilen, dass Inhalt überlappt.

Wenn Sie eine Box mit einer `width` oder einer `height` einschränken, vertraut CSS darauf, dass Sie wissen, was Sie tun. CSS geht davon aus, dass Sie den potenziellen Überlauf verwalten. Im Allgemeinen ist es problematisch, die Blockdimension einzuschränken, wenn der Kasten Text enthält. Es könnte mehr Text geben, als Sie ursprünglich bei der Gestaltung der Seite erwartet haben, oder der Text könnte größer sein (zum Beispiel, wenn der Benutzer seine Schriftgröße erhöht hat).

Die nächsten beiden Lektionen erklären verschiedene Ansätze zur Steuerung der Größen in einer Weise, die weniger anfällig für Überlauf ist. Wenn Sie jedoch eine feste Größe benötigen, können Sie auch steuern, wie sich der Überlauf verhält. Lesen Sie weiter!

## Die overflow-Eigenschaft

Die {{cssxref("overflow")}}-Eigenschaft hilft Ihnen, den Überlauf von Inhalt eines Elements zu verwalten. Mit dieser Eigenschaft können Sie einem Browser mitteilen, wie er überlaufenden Inhalt handhaben soll. Der Standardwert des [`<overflow>`](/de/docs/Web/CSS/overflow_value) Werts ist `visible`. Mit dieser Standardeinstellung kann man den Inhalt sehen, wenn er überläuft.

Um Inhalt abzuschneiden, wenn er überläuft, können Sie `overflow: hidden` einstellen. Dies tut genau das, was es sagt: Es verbirgt den Überlauf. Seien Sie jedoch vorsichtig, da dies dazu führen kann, dass einige Inhalte unsichtbar werden. Sie sollten dies nur tun, wenn das Verbergen von Inhalten keine Probleme verursacht.

```html live-sample___hidden
<div class="box">
  This box has a height and a width. This means that if there is too much
  content to be displayed within the assigned height, there will be an overflow
  situation. If overflow is set to hidden then any overflow will not be visible.
</div>

<p>This content is outside of the box.</p>
```

```css live-sample___hidden
.box {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow: hidden;
}
```

{{EmbedLiveSample("hidden", "", "200px")}}

Möglicherweise möchten Sie stattdessen Bildlaufleisten hinzufügen, wenn der Inhalt überläuft? Bei der Verwendung von `overflow: scroll` zeigen Browser mit sichtbaren Bildlaufleisten diese stets an, auch wenn nicht genug Inhalt vorhanden ist, um einen Überlauf zu verursachen. Dies bietet den Vorteil, das Layout konsistent zu halten, anstatt dass Bildlaufleisten je nach der Menge des Inhalts im Container erscheinen oder verschwinden.

Entfernen Sie etwas Inhalt aus dem Kasten unten. Beachten Sie, wie die Bildlaufleisten bestehen bleiben, selbst wenn kein Bildlauf erforderlich ist:

> [!NOTE]
> Die Sichtbarkeit von Bildlaufleisten hängt vom Betriebssystem ab.
> Möglicherweise müssen Sie Ihre Browsereinstellungen ändern, um Bildlaufleisten immer anzuzeigen, damit diese in den folgenden Beispielen immer sichtbar sind.

```html live-sample___scroll
<div class="box">
  This box has a height and a width. This means that if there is too much
  content to be displayed within the assigned height, there will be an overflow
  situation. If overflow is set to hidden then any overflow will not be visible.
</div>

<p>This content is outside of the box.</p>
```

```css live-sample___scroll
.box {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow: scroll;
}
```

{{EmbedLiveSample("scroll", "", "200px")}}

Im obigen Beispiel müssen wir nur auf der `y`-Achse scrollen, dennoch erhalten wir Bildlaufleisten auf beiden Achsen. Um nur auf der `y`-Achse zu scrollen, könnten Sie die {{cssxref("overflow-y")}}-Eigenschaft verwenden und `overflow-y: scroll` einstellen.

```html live-sample___scroll-y
<div class="box">
  This box has a height and a width. This means that if there is too much
  content to be displayed within the assigned height, there will be an overflow
  situation. If overflow is set to hidden then any overflow will not be visible.
</div>

<p>This content is outside of the box.</p>
```

```css live-sample___scroll-y
.box {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow-y: scroll;
}
```

{{EmbedLiveSample("scroll-y", "", "200px")}}

Sie können auch das Scrollen entlang der x-Achse mit {{cssxref("overflow-x")}} aktivieren, obwohl dies nicht empfohlen wird, um lange Wörter unterzubringen! Wenn Sie ein langes Wort in einem kleinen Kasten haben, sollten Sie die Verwendung der {{cssxref("word-break")}}- oder {{cssxref("overflow-wrap")}}-Eigenschaft in Betracht ziehen. Darüber hinaus könnten einige der in [Größenbestimmung von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) besprochenen Methoden Ihnen helfen, Kästen zu erstellen, die besser mit unterschiedlichen Mengen an Inhalt skalieren.

```html live-sample___scroll-x
<div class="word">Overflow</div>
```

```css live-sample___scroll-x
.word {
  border: 5px solid #333333;
  width: 100px;
  font-size: 250%;
  overflow-x: scroll;
}
```

{{EmbedLiveSample("scroll-x")}}

Wie bei `scroll` erhalten Sie eine Bildlaufleiste in der Scrollrichtung, unabhängig davon, ob genügend Inhalt vorhanden ist, um eine Bildlaufleiste zu verursachen.

> [!NOTE]
> Sie können das Scrollen auf der x- und y-Achse mit der `overflow`-Eigenschaft angeben, indem Sie zwei Werte übergeben. Wenn zwei Schlüsselwörter angegeben sind, wird das erste auf `overflow-x` und das zweite auf `overflow-y` angewendet. Andernfalls werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Zum Beispiel würde `overflow: scroll hidden` `overflow-x` auf `scroll` und `overflow-y` auf `hidden` setzen.

Wenn Sie möchten, dass Bildlaufleisten nur erscheinen, wenn es mehr Inhalt gibt, als in den Kasten passt, verwenden Sie `overflow: auto`. Dies ermöglicht es dem Browser zu bestimmen, ob er Bildlaufleisten anzeigen soll.

Im folgenden Beispiel entfernen Sie Inhalte, bis sie in den Kasten passen. Sie sollten sehen, dass die Bildlaufleisten verschwinden:

```html live-sample___auto
<div class="box">
  This box has a height and a width. This means that if there is too much
  content to be displayed within the assigned height, there will be an overflow
  situation. If overflow is set to hidden then any overflow will not be visible.
</div>

<p>This content is outside of the box.</p>
```

```css live-sample___auto
.box {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow: auto;
}
```

{{EmbedLiveSample("auto", "", "200px")}}

## Überlauf etabliert einen Block Formatting Context

Wenn Sie die `<overflow>`-Werte `scroll` und `auto` verwenden, erstellen Sie einen [**Block Formatting Context** (BFC)](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Dies bedeutet, dass der Inhalt eines Elementkastens mit diesen `overflow`-Werten ein selbst enthaltenes Layout erhält. Inhalt außerhalb eines solchen Elementkastens kann nicht in den Kasten eindringen, und nichts aus dem Elementkasten kann in das umliegende Layout eindringen. Dies ermöglicht das Scrollverhalten, da aller Boxinhalt enthalten bleiben muss und nicht überlappen darf, um ein konsistentes Scroll-Erlebnis zu schaffen.

## Unerwünschter Überlauf im Webdesign

Moderne Layoutmethoden (beschrieben in [CSS-Layout](/de/docs/Learn/CSS/CSS_layout)) verwalten Überläufe. Sie arbeiten weitgehend ohne Annahmen oder Abhängigkeiten darüber, wie viel Inhalt es auf einer Webseite geben wird.

Das war nicht immer die Norm. In der Vergangenheit wurden einige Seiten mit Containern fester Höhe gebaut, um die Unterseiten von Kästen auszurichten. Diese Kästen hatten möglicherweise sonst keine Beziehung zueinander. Das war fragil. Wenn Sie auf ein Kästchen stoßen, in dem Inhalte andere Inhalte auf der Seite überlagern, in älteren Anwendungen, werden Sie jetzt erkennen, dass dies bei Überlauf passiert. Idealerweise werden Sie das Layout umgestalten, um nicht auf Container mit fester Höhe angewiesen zu sein.

Berücksichtigen Sie bei der Entwicklung einer Webseite immer den Überlauf. Testen Sie Designs mit großen und kleinen Mengen an Inhalt. Erhöhen und verringern Sie die Schriftgrößen um mindestens zwei Stufen. Stellen Sie sicher, dass Ihr CSS robust ist. Die Änderung von Overflow-Werten, um Inhalte zu verstecken oder Bildlaufleisten hinzuzufügen, ist nur für einige ausgewählte Anwendungsfälle vorbehalten (zum Beispiel, wenn Sie einen scrollenden Kasten beabsichtigen).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflow_Tasks).

## Zusammenfassung

Diese Lektion hat das Konzept des Überlaufs eingeführt. Sie sollten verstehen, dass CSS standardmäßig vermeidet, überlaufende Inhalte unsichtbar zu machen. Sie haben entdeckt, dass Sie potenziellen Überlauf verwalten können und auch, dass Sie Ihre Arbeit testen sollten, um sicherzustellen, dass sie nicht versehentlich problematischen Überlauf verursacht.

Im nächsten Artikel werden wir die häufigsten [Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units) in CSS betrachten.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}
