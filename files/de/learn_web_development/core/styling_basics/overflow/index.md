---
title: Überlaufender Inhalt
short-title: Overflow
slug: Learn_web_development/Core/Styling_basics/Overflow
l10n:
  sourceCommit: 001a6992ec60f0dccd073a3db223c320835188ad
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}

Überlauf tritt auf, wenn zu viel Inhalt vorhanden ist, um in einen Elementkasten zu passen. In dieser Lektion lernen Sie, wie Sie Überlauf mit CSS verwalten können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenveränderung</a>.
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

Alles in CSS ist ein Kasten. Sie können die Größe dieser Kästen einschränken, indem Sie Werte wie {{cssxref("width")}} und {{cssxref("height")}} zuweisen. **Überlauf tritt auf, wenn zu viel Inhalt in einen Kasten passt.** CSS bietet verschiedene Werkzeuge zur Verwaltung von Überläufen. Wenn Sie sich weiter mit CSS-Layout und dem Schreiben von CSS beschäftigen, werden Sie auf mehr Überlaufsituationen stoßen.

## CSS versucht, "Datenverlust" zu vermeiden

Betrachten wir zwei Beispiele, die das Standardverhalten von CSS bei Auftreten von Überläufen demonstrieren.

Das erste Beispiel zeigt einen Kasten, der durch Festlegen einer `height` eingeschränkt wurde. Der Inhalt des Kastens übersteigt den verfügbaren Platz und fließt daher aus dem Kasten heraus und fällt in den darunter liegenden Absatz.

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

Im zweiten Beispiel gibt es ein Wort in einem Kasten. Der Kasten wurde zu klein für das Wort gemacht und so bricht es aus dem Kasten heraus.

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

Sie fragen sich vielleicht, warum CSS auf solch chaotische Weise funktioniert und Inhalte außerhalb ihres vorgesehenen Containers anzeigt. Warum nicht überlaufende Inhalte verstecken? Warum nicht die Größe des Containers anpassen, um den gesamten Inhalt aufzunehmen?

Wo immer möglich, versteckt CSS keine Inhalte. Dies würde zu einem Datenverlust führen. Das Problem mit Datenverlust ist, dass Sie oder Besucher Ihrer Website es möglicherweise nicht bemerken. Wenn der Absenden-Button in einem Formular verschwindet und niemand das Formular abschließen kann, könnte das ein großes Problem sein! Stattdessen lässt CSS Inhalte auf sichtbare Weise überlaufen. Sie werden eher bemerken, dass es ein Problem gibt. Im schlimmsten Fall wird ein Website-Besucher Sie darauf hinweisen, dass Inhalte überlagert sind.

Wenn Sie einen Kasten mit einem `width` oder `height` einschränken, vertraut CSS darauf, dass Sie wissen, was Sie tun. CSS geht davon aus, dass Sie das Potenzial für Überlauf steuern. Im Allgemeinen ist es problematisch, die Blockdimension zu beschränken, wenn der Kasten Text enthält. Es kann mehr Text vorhanden sein, als Sie bei der Gestaltung der Website erwartet haben, oder der Text kann größer sein (zum Beispiel, wenn der Benutzer die Schriftgröße erhöht hat).

## Die overflow-Eigenschaft

Die {{cssxref("overflow")}}-Eigenschaft ermöglicht es Ihnen zu spezifizieren, wie der Browser mit überlaufendem Inhalt umgehen soll. Der Standardwert des [`<overflow>`](/de/docs/Web/CSS/overflow_value)-Wertetyps ist `visible`. Mit dieser Standardeinstellung kann man den Inhalt sehen, wenn er überläuft.

### Überlaufende Inhalte verstecken

Um Inhalte bei Überlauf zu verstecken, können Sie `overflow: hidden` setzen. Das tut genau das, was der Name sagt: es versteckt den Überlauf. Seien Sie sich bewusst, dass dies einige Inhalte unsichtbar machen kann. Sie sollten dies nur tun, wenn das Verstecken von Inhalten keine Probleme verursacht.

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

Versuchen Sie, das obige Beispiel zu bearbeiten, um den `overflow`-Wert auf `visible` zu setzen und dann wieder auf `hidden`, um den Effekt zu sehen.

### Überlaufende Inhalte scrollen

Stattdessen möchten Sie vielleicht, dass Ihre Benutzer den Inhalt scrollen, um alles zu lesen? Wenn Sie `overflow: scroll` auf überlaufendem Inhalt setzen, zeigen Browser mit sichtbaren Scrollleisten diese immer an – auch wenn nicht genug Inhalt vorhanden ist, um einen Überlauf zu verursachen. Dies bietet den Vorteil, das Layout konsistent zu halten, anstatt dass Scrollleisten je nach Inhalt im Container erscheinen oder verschwinden.

Lassen Sie uns dies in Aktion sehen. Bearbeiten Sie das folgende Beispiel, um etwas Inhalt aus dem `box`-`<div>` zu entfernen. Beachten Sie, wie die Scrollleisten erhalten bleiben, auch wenn kein Scrollen erforderlich ist:

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
> Die Sichtbarkeit der Scrollleisten hängt vom Betriebssystem ab.
> Sie müssen möglicherweise Ihre Browsereinstellungen ändern, um immer Scrollleisten anzuzeigen, damit die Scrollleisten in den folgenden Beispielen immer angezeigt werden.

Im obigen Beispiel müssen wir nur auf der `y`-Achse scrollen, allerdings erhalten wir Scrollleisten auf beiden Achsen. Um nur auf der `y`-Achse zu scrollen, könnten Sie die {{cssxref("overflow-y")}}-Eigenschaft verwenden und `overflow-y: scroll` setzen. Versuchen Sie, diese Eigenschaft im obigen Beispiel zu setzen.

Sie können auch das Scrollen entlang der x-Achse aktivieren, indem Sie {{cssxref("overflow-x")}} verwenden, obwohl dies nicht empfohlen wird, um lange Wörter unterzubringen! Wenn Sie ein langes Wort in einem kleinen Kasten haben, sollten Sie die {{cssxref("word-break")}}- oder {{cssxref("overflow-wrap")}}-Eigenschaften in Betracht ziehen. Darüber hinaus können einige der in [Größenveränderung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) diskutierten Methoden Ihnen helfen, Kästen zu erstellen, die besser mit unterschiedlichen Inhaltsmengen skalieren.

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

Wie bei `scroll` erhalten Sie eine Scrollleiste in der scrollenden Dimension, unabhängig davon, ob es genug Inhalt gibt, um eine Scrollleiste zu verursachen oder nicht.

> [!NOTE]
> Sie können x- und y-Achsen-Scrolling mit der `overflow`-Eigenschaft spezifizieren, indem Sie zwei Werte übergeben. Wenn zwei Schlüsselwörter angegeben sind, gilt das erste für `overflow-x` und das zweite für `overflow-y`. Andernfalls werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Zum Beispiel würde `overflow: scroll hidden` `overflow-x` auf `scroll` setzen und `overflow-y` auf `hidden`.

### Scrollleisten nur bei Bedarf anzeigen

Wenn Sie möchten, dass Scrollleisten nur dann erscheinen, wenn mehr Inhalt vorhanden ist, als in den Kasten passt, verwenden Sie `overflow: auto`. Damit kann der Browser entscheiden, ob er Scrollleisten anzeigen soll.

Im folgenden Beispiel entfernen Sie Inhalte, bis sie in den Kasten passen. Sie sollten sehen, wie die Scrollleisten verschwinden:

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

Moderne Layout-Methoden (die Sie später im [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)-Modul kennenlernen werden) verwalten den Überlauf. Sie funktionieren weitgehend ohne Annahmen oder Abhängigkeiten davon, wie viel Inhalt auf einer Webseite vorhanden sein wird.

Das war nicht immer die Norm. In der Vergangenheit wurden einige Websites mit festgelegten Höhen bei den Containern gebaut, um die Unterseiten der Kästen auszurichten. Diese Kästen konnten sonst keinerlei Beziehung zueinander haben. Das war fragil. Wenn Sie auf einen Kasten stoßen, bei dem sich Inhalte überlagern, erkennen Sie jetzt, dass der Überlauf möglicherweise die Ursache dafür ist. Idealerweise werden Sie das Layout umgestalten, um nicht auf Container mit fester Höhe angewiesen zu sein.

Beim Entwickeln einer Site sollten Sie den Überlauf immer im Auge behalten. Testen Sie Designs mit großen und kleinen Inhaltsmengen. Erhöhen und verringern Sie die Schriftgrößen um mindestens zwei Einheiten. Stellen Sie sicher, dass Ihr CSS robust ist. Das Ändern von Überlaufwerten, um Inhalte zu verstecken oder Scrollleisten hinzuzufügen, ist nur für einige ausgewählte Anwendungsfälle reserviert (zum Beispiel, wenn Sie beabsichtigen, einen scrollenden Kasten zu haben).

## Zusammenfassung

Diese Lektion führte das Konzept des Überlaufs ein. Sie sollten verstehen, dass standardmäßig CSS vermieden wird, überlaufende Inhalte unsichtbar zu machen. Sie haben entdeckt, dass Sie potenziellen Überlauf verwalten können und dass Sie auch Ihre Arbeit testen sollten, um sicherzustellen, dass sie keinen problematischen Überlauf verursacht.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie die bereitgestellten Informationen über Überlauf verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}
