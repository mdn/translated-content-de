---
title: Überfüllender Inhalt
short-title: Overflow
slug: Learn_web_development/Core/Styling_basics/Overflow
l10n:
  sourceCommit: d94f783daceb9635b94a4041bae68af31adfaa6c
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}

Als Overflow bezeichnet man, wenn zu viel Inhalt in ein Elementfeld passt. In dieser Lektion lernen Sie, wie Sie Overflow mit CSS verwalten können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (Studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was Overflow ist.</li>
          <li>Control overflow with the <code>overflow</code>-Eigenschaft.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist Overflow?

Alles in CSS ist eine Box. Sie können die Größe dieser Boxen einschränken, indem Sie Werte wie {{cssxref("width")}} und {{cssxref("height")}} zuweisen. **Overflow tritt auf, wenn zu viel Inhalt in eine Box passt.** CSS bietet verschiedene Werkzeuge zur Verwaltung von Overflow. Je weiter Sie mit CSS-Layout und der Erstellung von CSS fortschreiten, desto häufiger werden Sie auf Overflow-Situationen stoßen.

## CSS versucht "Datenverlust" zu vermeiden

Lassen Sie uns zwei Beispiele betrachten, die das Standardverhalten von CSS bei Auftreten von Overflow demonstrieren.

Das erste Beispiel zeigt eine Box, die durch das Setzen einer `height` eingeschränkt wurde. Der Inhalt der Box überschreitet den verfügbaren Platz, daher läuft er aus der Box heraus und in den darunterliegenden Absatz hinein.

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

Das zweite Beispiel besteht aus einem Wort in einer Box. Die Box wurde zu klein für das Wort gemacht, sodass es aus der Box herausbricht.

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

Sie fragen sich vielleicht, warum CSS auf so unordentliche Weise wirkt und Inhalt außerhalb seines vorgesehenen Containers anzeigt. Warum nicht überflüssigen Inhalt verbergen? Warum nicht die Containergröße anpassen, um den gesamten Inhalt aufzunehmen?

Wo immer möglich, verbirgt CSS keinen Inhalt. Das würde zu Datenverlust führen. Das Problem mit Datenverlust ist, dass Sie oder Besucher Ihrer Website es möglicherweise nicht bemerken. Wenn der „Senden“-Button in einem Formular verschwindet und niemand das Formular ausfüllen kann, könnte das ein großes Problem sein! Stattdessen erfolgt das Overflow in CSS auf sichtbarere Weise. Sie erkennen leichter, dass ein Problem besteht. Im schlimmsten Fall wird ein Website-Besucher Sie darauf aufmerksam machen, dass sich Inhalte überschneiden.

Wenn Sie eine Box mit `width` oder `height` einschränken, vertraut CSS darauf, dass Sie wissen, was Sie tun. CSS nimmt an, dass Sie das Potenzial für Overflow verwalten. Im Allgemeinen ist das Einschränken der Blockdimension problematisch, wenn die Box Text enthält. Es kann mehr Text geben, als Sie beim Entwerfen der Site erwartet haben, oder der Text kann größer sein (zum Beispiel, wenn der Benutzer die Schriftgröße erhöht hat).

## Die overflow-Eigenschaft

Die {{cssxref("overflow")}}-Eigenschaft ermöglicht es Ihnen, anzugeben, wie der Browser mit überlaufenden Inhalten umgehen soll. Der Standardwert des [`<overflow>`](/de/docs/Web/CSS/overflow_value) Wertetyps ist `visible`. Mit dieser Standardeinstellung kann man den Inhalt sehen, wenn er überläuft.

### Überlaufende Inhalte verbergen

Um Inhalte zu verbergen, wenn sie überlaufen, können Sie `overflow: hidden` einstellen. Dies tut genau das, was es sagt: Es verbirgt Overflow. Seien Sie sich bewusst, dass dadurch einige Inhalte unsichtbar werden können. Sie sollten dies nur tun, wenn das Verbergen von Inhalten keine Probleme verursacht.

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

Versuchen Sie, das obige Beispiel zu bearbeiten und den `overflow`-Wert auf `visible` zu setzen und dann wieder auf `hidden`, um zu sehen, welchen Effekt es hat.

### Überlaufende Inhalte scrollen

Stattdessen möchten Sie vielleicht Ihren Benutzern erlauben, den Inhalt zu scrollen, um alles zu lesen? Wenn Sie `overflow: scroll` auf überlaufenden Inhalt setzen, werden Browser mit sichtbaren Bildlaufleisten diese immer anzeigen, auch wenn nicht genügend Inhalt für Overflow vorhanden ist. Dies bietet den Vorteil, dass das Layout konsistent bleibt, anstatt dass Bildlaufleisten abhängig von der Menge des Inhalts im Container erscheinen oder verschwinden.

Lassen Sie uns dies in Aktion sehen. Bearbeiten Sie das folgende Beispiel, um etwas Inhalt aus dem `box`-`<div>` zu entfernen. Beachten Sie, wie die Bildlaufleisten weiterhin angezeigt werden, auch wenn kein Bedarf zum Scrollen besteht:

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

> [!NOTE]
> Die Sichtbarkeit der Bildlaufleiste hängt vom Betriebssystem ab.
> Möglicherweise müssen Sie Ihre Browsereinstellungen ändern, um Bildlaufleisten immer anzuzeigen, damit sie in den folgenden Beispielen immer sichtbar sind.

Im obigen Beispiel müssen wir nur auf der `y`-Achse scrollen, bekommen jedoch Bildlaufleisten auf beiden Achsen. Um nur auf der `y`-Achse zu scrollen, könnten Sie die {{cssxref("overflow-y")}}-Eigenschaft verwenden und `overflow-y: scroll` setzen. Versuchen Sie, diese Eigenschaft im obigen Beispiel zu setzen.

Sie können auch das Scrollen entlang der x-Achse aktivieren, indem Sie {{cssxref("overflow-x")}} verwenden, obwohl dies nicht zur Aufnahme von langen Wörtern empfohlen wird! Wenn Sie ein langes Wort in einer kleinen Box haben, sollten Sie die {{cssxref("word-break")}} oder {{cssxref("overflow-wrap")}} Eigenschaften verwenden. Zusätzlich könnten einige der im [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) diskutierten Methoden helfen, Boxen zu erstellen, die mit variierenden Mengen an Inhalt besser skalieren.

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

Wie bei `scroll` bekommen Sie eine Bildlaufleiste in der Scrollrichtung, unabhängig davon, ob genügend Inhalt vorhanden ist, um eine Bildlaufleiste zu verursachen.

> [!NOTE]
> Sie können das Scrollen in der x- und y-Achse mit der `overflow`-Eigenschaft festlegen, indem zwei Werte übergeben werden. Wenn zwei Schlüsselwörter angegeben sind, gilt das erste für `overflow-x` und das zweite für `overflow-y`. Andernfalls werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Zum Beispiel würde `overflow: scroll hidden` `overflow-x` auf `scroll` und `overflow-y` auf `hidden` setzen.

### Bildlaufleisten nur bei Bedarf anzeigen

Wenn Sie nur dann Bildlaufleisten anzeigen möchten, wenn mehr Inhalt vorhanden ist, als in die Box passt, verwenden Sie `overflow: auto`. Dies ermöglicht es dem Browser, zu bestimmen, ob Bildlaufleisten angezeigt werden sollen.

Im folgenden Beispiel entfernen Sie so viel Inhalt, bis er in die Box passt. Sie sollten sehen, dass die Bildlaufleisten verschwinden:

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

## Unerwünschter Overflow im Webdesign

Moderne Layoutmethoden (mit denen Sie sich später im [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)-Modul beschäftigen werden) verwalten Overflow. Sie funktionieren weitgehend ohne Annahmen oder Abhängigkeiten davon, wie viel Inhalt auf einer Webseite vorhanden sein wird.

Das war nicht immer die Norm. In der Vergangenheit wurden einige Websites mit festen Höhencontainern gebaut, um Boxböden auszurichten. Diese Boxen hatten sonst möglicherweise keine Beziehung zueinander. Dies war sehr fragil. Wenn Sie auf eine Box stoßen, bei der Inhalte andere Inhalte überlagern, erkennen Sie jetzt, dass Overflow wahrscheinlich die Ursache dafür ist. Idealerweise werden Sie das Layout refaktorisieren, um nicht auf feste Höhencontainer angewiesen zu sein.

Wenn Sie eine Website entwickeln, denken Sie immer an Overflow. Testen Sie Designs mit großen und kleinen Mengen an Inhalt. Erhöhen und verringern Sie Schriftgrößen um mindestens zwei Schritte. Stellen Sie sicher, dass Ihr CSS robust ist. Änderungen von Overflow-Werten, um Inhalte zu verbergen oder Bildlaufleisten hinzuzufügen, sind für einige ausgewählte Anwendungsfälle reserviert (zum Beispiel, wenn Sie die Intention haben, eine scrollbare Box zu haben).

## Zusammenfassung

Diese Lektion führte das Konzept des Overflows ein. Sie sollten verstehen, dass standardmäßiges CSS vermeidet, überlaufende Inhalte unsichtbar zu machen. Sie haben entdeckt, dass Sie potenziellen Overflow verwalten können und auch, dass Sie Ihre Arbeit testen sollten, um sicherzustellen, dass sie nicht versehentlich problematischen Overflow verursacht.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie die bereitgestellten Informationen über Overflow verstanden und beibehalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}
