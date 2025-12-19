---
title: Überlaufender Inhalt
short-title: Overflow
slug: Learn_web_development/Core/Styling_basics/Overflow
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}

Überlauf tritt auf, wenn es zu viel Inhalt gibt, um in ein Element-Box zu passen. In dieser Lektion lernen Sie, wie Sie Überlauf mithilfe von CSS verwalten können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (Studieren Sie
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
          <li>Überlauf mit der <code>overflow</code>-Eigenschaft kontrollieren. </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist Überlauf?

Alles in CSS ist eine Box. Sie können die Größe dieser Boxen einschränken, indem Sie Werte wie {{cssxref("width")}} und {{cssxref("height")}} zuweisen. **Überlauf entsteht, wenn zu viel Inhalt in eine Box passt.** CSS bietet verschiedene Werkzeuge zur Verwaltung von Überlauf. Je weiter Sie mit CSS Layouts und dem Schreiben von CSS fortschreiten, desto häufiger werden Sie auf Überlaufsituationen stoßen.

## CSS versucht "Datenverlust" zu vermeiden

Lassen Sie uns zwei Beispiele betrachten, die das Standardverhalten von CSS beim Auftreten von Überlauf demonstrieren.

Das erste Beispiel zeigt eine Box, die durch die Einstellung einer `height` eingeschränkt wurde. Der Inhalt der Box überschreitet den verfügbaren Raum, daher überläuft er die Box und fällt in den darunterliegenden Absatz.

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

Das zweite Beispiel zeigt ein Wort in einer Box. Die Box wurde zu klein gemacht, um das Wort aufzunehmen, und so bricht es aus der Box heraus.

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

Sie fragen sich vielleicht, warum CSS auf so chaotische Weise funktioniert und Inhalte außerhalb ihres beabsichtigten Containers anzeigt. Warum nicht überfließende Inhalte verbergen? Warum nicht die Größe des Containers anpassen, um alle Inhalte aufzunehmen?

Wann immer es möglich ist, verbirgt CSS keine Inhalte. Dies würde zu Datenverlust führen. Das Problem mit Datenverlust ist, dass Sie oder Besucher Ihrer Website es möglicherweise nicht bemerken. Wenn der Senden-Button eines Formulars verschwindet und niemand das Formular ausfüllen kann, könnte dies ein großes Problem sein! Stattdessen tritt Überlauf bei CSS auf sichtbare Weise auf. Sie werden wahrscheinlicher sehen, dass ein Problem vorliegt. Im schlimmsten Fall wird ein Seitenbesucher Sie darauf hinweisen, dass sich Inhalte überlappen.

Wenn Sie eine Box mit einer `width` oder einer `height` einschränken, vertraut CSS darauf, dass Sie wissen, was Sie tun. CSS geht davon aus, dass Sie das Potenzial für Überlauf verwalten. Im Allgemeinen ist es problematisch, die Blockdimension einzuschränken, wenn die Box Text enthält. Es könnte mehr Text geben, als Sie beim Entwerfen der Seite erwartet haben, oder der Text könnte größer sein (zum Beispiel, wenn der Benutzer seine Schriftgröße erhöht hat).

## Die overflow-Eigenschaft

Die {{cssxref("overflow")}}-Eigenschaft ermöglicht es Ihnen, festzulegen, wie der Browser mit überfließenden Inhalten umgehen soll. Der Standardwert des {{cssxref("&lt;overflow&gt;")}}-Werttyps ist `visible`. Mit dieser Standardeinstellung kann man Inhalte sehen, wenn sie überlaufen.

### Verbergen von überfließenden Inhalten

Um Inhalte bei Überlauf zu verbergen, können Sie `overflow: hidden` setzen. Dies tut genau das, was es sagt: es verbirgt Überlauf. Seien Sie sich bewusst, dass dies einige Inhalte unsichtbar machen kann. Sie sollten dies nur tun, wenn das Verbergen von Inhalten keine Probleme verursacht.

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

Versuchen Sie das obige Beispiel zu bearbeiten, um den `overflow`-Wert auf `visible` und dann zurück auf `hidden` zu setzen, um zu sehen, welche Wirkung dies hat.

### Scrollen von überfließenden Inhalten

Vielleicht möchten Sie Ihren Benutzern lieber erlauben, den Inhalt zu scrollen, um alles zu lesen? Wenn Sie `overflow: scroll` auf überfließendem Inhalt setzen, werden Browser mit sichtbaren Scrollleisten diese immer anzeigen—auch wenn nicht genug Inhalt vorhanden ist, um überzulaufen. Dies bietet den Vorteil, das Layout konsistent zu halten, anstatt dass Scrollleisten je nach Menge des Inhalts im Container erscheinen oder verschwinden.

Sehen wir uns das in Aktion an. Bearbeiten Sie das folgende Beispiel, um etwas Inhalt aus dem `box`-`<div>` zu entfernen. Beachten Sie, wie die Scrollleisten bleiben, auch wenn kein Scrollen notwendig ist:

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
> Die Sichtbarkeit von Scrollleisten hängt vom Betriebssystem ab.
> Möglicherweise müssen Sie die Einstellungen Ihres Browsers ändern, um Scrollleisten immer anzuzeigen, damit die Scrollleisten in den folgenden Beispielen immer sichtbar sind.

Im obigen Beispiel müssen wir nur auf der y-Achse scrollen, dennoch erhalten wir Scrollleisten auf beiden Achsen. Um nur auf der y-Achse zu scrollen, könnten Sie die {{cssxref("overflow-y")}}-Eigenschaft verwenden, indem Sie `overflow-y: scroll` setzen. Versuchen Sie, diese Eigenschaft im obigen Beispiel zu setzen.

Sie können auch das Scrollen entlang der x-Achse aktivieren, indem Sie {{cssxref("overflow-x")}} verwenden, obwohl dies keine empfohlene Methode ist, um lange Wörter unterzubringen! Wenn Sie ein langes Wort in einer kleinen Box haben, sollten Sie die Eigenschaften {{cssxref("word-break")}} oder {{cssxref("overflow-wrap")}} in Betracht ziehen. Darüber hinaus können einige der in [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) besprochenen Methoden Ihnen helfen, Boxen zu erstellen, die besser mit unterschiedlichen Inhaltsmengen skalieren.

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

Wie bei `scroll` erhalten Sie eine Scrollleiste in der Scrollrichtung, egal ob genug Inhalt vorhanden ist, um eine Scrollleiste zu verursachen oder nicht.

> [!NOTE]
> Sie können das Scrollen auf der x- und y-Achse mit der `overflow`-Eigenschaft angeben, indem Sie zwei Werte übergeben. Wenn zwei Schlüsselwörter angegeben sind, gilt das erste für `overflow-x` und das zweite für `overflow-y`. Andernfalls werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Zum Beispiel würde `overflow: scroll hidden` `overflow-x` auf `scroll` und `overflow-y` auf `hidden` setzen.

### Scrollleisten nur anzeigen, wenn nötig

Wenn Sie möchten, dass Scrollleisten nur dann erscheinen, wenn mehr Inhalt vorhanden ist, als in die Box passt, verwenden Sie `overflow: auto`. Dies ermöglicht es dem Browser zu bestimmen, ob Scrollleisten angezeigt werden sollten.

Im folgenden Beispiel entfernen Sie Inhalt, bis er in die Box passt. Sie sollten sehen, dass die Scrollleisten verschwinden:

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

Moderne Layoutmethoden (die Sie später im [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) Modul kennenlernen werden) verwalten Überlauf. Sie funktionieren größtenteils ohne Annahmen oder Abhängigkeiten von der Menge an Inhalten, die auf einer Webseite vorhanden sein werden.

Das war nicht immer die Norm. In der Vergangenheit wurden einige Websites mit Containern fester Höhe erstellt, um Boxböden auszurichten. Diese Boxen könnten sonst keinen Bezug zueinander haben. Das war zerbrechlich. Wenn Sie auf eine Box stoßen, bei der sich Inhalte über andere Inhalte überlagern, erkennen Sie jetzt, dass Überlauf durchaus die Ursache dafür sein kann. Idealerweise werden Sie das Layout so umgestalten, dass es nicht auf Containern fester Höhe basiert.

Beim Entwickeln einer Seite sollten Sie immer den Überlauf im Auge behalten. Testen Sie Designs mit großen und kleinen Mengen an Inhalten. Erhöhen und verringern Sie die Schriftgrößen um mindestens zwei Schritte. Stellen Sie sicher, dass Ihr CSS robust ist. Das Ändern von Überlaufwerten, um Inhalte zu verbergen oder Scrollleisten hinzuzufügen, ist auf wenige ausgewählte Anwendungsfälle beschränkt (zum Beispiel, wenn Sie beabsichtigen, eine scrollbare Box zu verwenden).

## Zusammenfassung

Diese Lektion führte das Konzept des Überlaufs ein. Sie sollten verstehen, dass CSS standardmäßig vermeidet, überlaufende Inhalte unsichtbar zu machen. Sie haben herausgefunden, dass Sie potenziellen Überlauf verwalten können und sollten auch sicherstellen, dass Ihre Arbeit keine versehentlichen Problemüberläufe verursacht.

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie die Informationen, die wir über Überlauf bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}
