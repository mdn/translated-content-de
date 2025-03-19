---
title: Überlaufender Inhalt
short-title: Overflow
slug: Learn_web_development/Core/Styling_basics/Overflow
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}

Überlauf tritt auf, wenn zu viel Inhalt vorhanden ist, um in eine Elementbox zu passen. In dieser Lektion werden Sie lernen, wie man Überlauf mit CSS verwaltet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenanpassung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was Überlauf ist.</li>
          <li>Überlauf mit der <code>overflow</code>-Eigenschaft steuern. </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist Überlauf?

Alles in CSS ist eine Box. Sie können die Größe dieser Boxen einschränken, indem Sie Werte wie {{cssxref("width")}} und {{cssxref("height")}} zuweisen. **Überlauf tritt auf, wenn zu viel Inhalt in eine Box passt.** CSS bietet verschiedene Werkzeuge, um den Überlauf zu verwalten. Mit fortschreitendem CSS-Layout und CSS-Schreiben werden Sie auf mehr Überlaufsituationen stoßen.

## CSS versucht, "Datenverlust" zu vermeiden

Betrachten wir zwei Beispiele, die das Standardverhalten von CSS bei Überlauf verdeutlichen.

Das erste Beispiel ist eine Box, die durch Setzen einer `height` eingeschränkt wurde. Dann fügen wir Inhalt hinzu, der den zugewiesenen Raum überschreitet. Der Inhalt überläuft die Box und fällt in den darunterliegenden Absatz hinein.

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

Das zweite Beispiel ist ein Wort in einer Box. Die Box wurde zu klein für das Wort gemacht, und so bricht es aus der Box aus.

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

Sie könnten sich fragen, warum CSS auf so unordentliche Weise arbeitet und Inhalte außerhalb ihres vorgesehenen Containers anzeigt. Warum nicht überlaufenden Inhalt ausblenden? Warum nicht die Größe des Containers skalieren, um allen Inhalt aufzunehmen?

Sofern möglich, versteckt CSS keine Inhalte. Das würde zu Datenverlust führen. Das Problem bei Datenverlust ist, dass Sie ihn möglicherweise nicht bemerken. Website-Besucher bemerken ihn möglicherweise nicht. Wenn der Absende-Button in einem Formular verschwindet und niemand das Formular ausfüllen kann, könnte das ein großes Problem sein! Stattdessen zeigt CSS überlaufenden Inhalt auf sichtbare Weise an. So ist es wahrscheinlicher, dass Sie ein Problem bemerken. Im schlimmsten Fall wird Ihnen ein Seitenbesucher mitteilen, dass sich Inhalte überschneiden.

Wenn Sie eine Box mit `width` oder `height` einschränken, vertraut CSS darauf, dass Sie wissen, was Sie tun. CSS geht davon aus, dass Sie das Potenzial für Überlauf steuern. Im Allgemeinen ist das Einschränken der Blockdimension problematisch, wenn die Box Text enthält. Es kann mehr Text geben, als Sie beim Entwerfen der Seite erwartet haben, oder der Text kann größer sein (zum Beispiel, wenn der Benutzer seine Schriftgröße erhöht hat).

## Die overflow-Eigenschaft

Die {{cssxref("overflow")}}-Eigenschaft hilft Ihnen, den Überlauf des Inhalts eines Elements zu verwalten. Mit dieser Eigenschaft können Sie dem Browser vermitteln, wie er mit überlaufendem Inhalt umgehen soll. Der Standardwert des [`<overflow>`](/de/docs/Web/CSS/overflow_value)-Wertetyps ist `visible`. Mit dieser Standardeinstellung kann man den Inhalt sehen, wenn er überläuft.

### Überlaufende Inhalte ausblenden

Um Inhalte auszublenden, wenn sie überlaufen, können Sie `overflow: hidden` setzen. Dies tut genau das, was es sagt: Es versteckt Überlauf. Beachten Sie, dass dadurch einige Inhalte unsichtbar werden können. Sie sollten dies nur tun, wenn das Ausblenden von Inhalten keine Probleme verursacht.

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

### Scrollen bei überlaufendem Inhalt

Vielleicht möchten Sie stattdessen Bildlaufleisten hinzufügen, wenn Inhalte überlaufen? Mit `overflow: scroll` zeigen Browser mit sichtbaren Bildlaufleisten diese immer an – selbst wenn nicht genug Inhalt vorhanden ist, um einen Überlauf zu verursachen. Dies bietet den Vorteil, das Layout konsistent zu halten, anstatt dass Bildlaufleisten je nach Inhalt im Container erscheinen oder verschwinden.

Entfernen Sie einige Inhalte aus der Box unten. Beachten Sie, wie die Bildlaufleisten bleiben, auch wenn kein Scrollen erforderlich ist:

> [!NOTE]
> Die Sichtbarkeit der Bildlaufleisten hängt vom Betriebssystem ab.
> Möglicherweise müssen Sie Ihre Browsereinstellungen ändern, um Bildlaufleisten immer anzuzeigen, damit sie in den folgenden Beispielen immer angezeigt werden.

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

Im obigen Beispiel müssen wir nur auf der `y`-Achse scrollen, dennoch erhalten wir Bildlaufleisten auf beiden Achsen. Um nur auf der `y`-Achse zu scrollen, könnten Sie die {{cssxref("overflow-y")}}-Eigenschaft verwenden und `overflow-y: scroll` setzen.

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

Sie können auch das Scrollen entlang der x-Achse aktivieren, indem Sie {{cssxref("overflow-x")}} verwenden, obwohl dies nicht die empfohlene Methode ist, um lange Wörter unterzubringen! Wenn Sie ein langes Wort in einer kleinen Box haben, sollten Sie die {{cssxref("word-break")}}- oder {{cssxref("overflow-wrap")}}-Eigenschaft in Betracht ziehen. Darüber hinaus können einige der in [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) diskutierten Methoden Ihnen helfen, Boxen zu erstellen, die besser mit unterschiedlichen Mengen an Inhalten skalieren.

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

Wie bei `scroll` erhalten Sie eine Bildlaufleiste in der scrollenden Dimension, unabhängig davon, ob es genug Inhalt gibt, um eine Bildlaufleiste zu verursachen.

> [!NOTE]
> Sie können das Scrollen der x- und y-Achse mit der `overflow`-Eigenschaft spezifizieren, indem Sie zwei Werte angeben. Wenn zwei Schlüsselwörter angegeben sind, wird das erste auf `overflow-x` und das zweite auf `overflow-y` angewendet. Andernfalls werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Zum Beispiel würde `overflow: scroll hidden` `overflow-x` auf `scroll` und `overflow-y` auf `hidden` setzen.

### Bildlaufleisten nur bei Bedarf anzeigen

Wenn Sie möchten, dass Bildlaufleisten nur dann erscheinen, wenn mehr Inhalt vorhanden ist, als in die Box passt, verwenden Sie `overflow: auto`. Dadurch kann der Browser bestimmen, ob Bildlaufleisten angezeigt werden sollen.

Im folgenden Beispiel entfernen Sie Inhalte, bis sie in die Box passen. Sie sollten sehen, wie die Bildlaufleisten verschwinden:

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

## Unerwünschter Überlauf im Webdesign

Moderne Layout-Methoden (die Sie später im [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)-Modul kennenlernen werden) verwalten Überlauf. Sie funktionieren weitgehend ohne Annahmen oder Abhängigkeiten davon, wie viel Inhalt auf einer Webseite vorhanden sein wird.

Dies war nicht immer die Norm. In der Vergangenheit wurden einige Websites mit Containern fester Höhe gebaut, um die Unterseiten von Boxen auszurichten. Diese Boxen hatten ansonsten möglicherweise keine Beziehung zueinander. Dies war zerbrechlich. Wenn Sie auf eine Box stoßen, in der sich Inhalt in Legacy-Anwendungen überlagert, werden Sie jetzt erkennen, dass dies mit Überlauf zusammenhängt. Idealerweise werden Sie das Layout umstrukturieren, um nicht auf Container mit fester Höhe angewiesen zu sein.

Beim Entwickeln einer Website sollten Sie Überlauf immer im Hinterkopf behalten. Testen Sie Designs mit großen und kleinen Mengen an Inhalten. Erhöhen und verringern Sie die Schriftgrößen um mindestens zwei Stufen. Stellen Sie sicher, dass Ihr CSS robust ist. Das Ändern von Überlaufwerten, um Inhalte auszublenden oder Bildlaufleisten hinzuzufügen, ist für einige ausgewählte Anwendungsfälle reserviert (zum Beispiel, wenn Sie beabsichtigen, eine scrollbare Box zu haben).

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow_Tasks).

## Zusammenfassung

Diese Lektion führte das Konzept des Überlaufs ein. Sie sollten verstehen, dass CSS standardmäßig verhindert, dass überlaufender Inhalt unsichtbar wird. Sie haben entdeckt, dass Sie potenziellen Überlauf verwalten können, und auch, dass Sie Ihre Arbeit testen sollten, um sicherzustellen, dass sie nicht versehentlich problematischen Überlauf verursacht.

Im nächsten Artikel werden wir uns ansehen, wie man das Styling von speziellen Seitenelementen wie Bildern und Formularelementen behandelt.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}
