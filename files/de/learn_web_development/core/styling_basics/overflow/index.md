---
title: Überlaufender Inhalt
short-title: Overflow
slug: Learn_web_development/Core/Styling_basics/Overflow
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}

Überlauf tritt auf, wenn es zu viel Inhalt gibt, um in ein Element-Box zu passen. In dieser Lektion lernen Sie, wie Sie Überlauf mit CSS verwalten können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was Überlauf ist.</li>
          <li>Steuern des Überlaufs mit der <code>overflow</code>-Eigenschaft.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist Überlauf?

Alles in CSS ist eine Box. Sie können die Größe dieser Boxen einschränken, indem Sie Werte wie {{cssxref("width")}} und {{cssxref("height")}} zuweisen. **Überlauf tritt auf, wenn zu viel Inhalt in eine Box passen soll.** CSS bietet verschiedene Werkzeuge zur Verwaltung von Überlauf. Wenn Sie mit CSS-Layout und der Erstellung von CSS fortfahren, werden Sie auf mehr Überlaufsituationen stoßen.

## CSS versucht "Datenverlust" zu vermeiden

Betrachten wir zwei Beispiele, die das Standardverhalten von CSS bei Überlauf veranschaulichen.

Im ersten Beispiel wird eine Box gezeigt, die durch Festlegen einer `height` eingeschränkt wurde. Der Inhalt der Box überschreitet den verfügbaren Platz, daher fließt er über die Box und gerät in den darunterliegenden Absatz.

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

Das zweite Beispiel zeigt ein Wort in einer Box. Die Box wurde zu klein für das Wort gemacht und so bricht es aus der Box aus.

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

Sie fragen sich vielleicht, warum CSS so chaotisch funktioniert und Inhalte außerhalb ihres vorgesehenen Containers anzeigt. Warum den überfließenden Inhalt nicht verbergen? Warum die Größe des Containers nicht anpassen, um den gesamten Inhalt aufzunehmen?

Wo immer möglich, verbirgt CSS keinen Inhalt. Dies würde zu Datenverlust führen. Das Problem mit Datenverlust ist, dass Sie oder Besucher Ihrer Website es möglicherweise nicht bemerken. Wenn der Absende-Button auf einem Formular verschwindet und niemand das Formular ausfüllen kann, könnte dies zu einem großen Problem werden! Stattdessen fließt CSS auf sichtbare Weise über. Sie werden eher sehen, dass es ein Problem gibt. Im schlimmsten Fall wird ein Seitenbesucher Sie darauf hinweisen, dass Inhalte überlappen.

Wenn Sie eine Box mit einer `width` oder einer `height` einschränken, vertraut CSS darauf, dass Sie wissen, was Sie tun. CSS geht davon aus, dass Sie das Potenzial für Überlauf verwalten. Im Allgemeinen ist das Einschränken der Blockdimension problematisch, wenn die Box Text enthält. Es kann mehr Text geben, als Sie beim Entwerfen der Seite erwartet haben, oder der Text kann größer sein (zum Beispiel, wenn der Benutzer seine Schriftgröße erhöht hat).

## Die overflow-Eigenschaft

Die {{cssxref("overflow")}}-Eigenschaft ermöglicht es Ihnen, festzulegen, wie der Browser mit überfließendem Inhalt umgehen soll. Der Standardwert des [`<overflow>`](/de/docs/Web/CSS/Reference/Values/overflow_value)-Werttyps ist `visible`. Mit dieser Standardeinstellung kann man den Inhalt sehen, wenn er überläuft.

### Überlaufenden Inhalt ausblenden

Um Inhalte auszublenden, wenn sie überlaufen, können Sie `overflow: hidden` setzen. Dies tut genau das, was es sagt: es versteckt den Überlauf. Seien Sie sich bewusst, dass dadurch einige Inhalte unsichtbar werden können. Sie sollten dies nur tun, wenn das Verbergen von Inhalten keine Probleme verursacht.

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

Versuchen Sie, das obige Beispiel zu bearbeiten, um den `overflow`-Wert auf `visible` und dann zurück auf `hidden` zu setzen, um zu sehen, welche Wirkung es hat.

### Scrollenden überlaufenden Inhalt

Vielleicht möchten Sie Ihren Benutzern lieber die Möglichkeit geben, den Inhalt zu scrollen, um alles zu lesen? Wenn Sie bei überfließendem Inhalt `overflow: scroll` setzen, zeigen Browser mit sichtbaren Scroll-Leisten diese immer an – auch wenn nicht genügend Inhalt vorhanden ist, um überzulaufen. Dies bietet den Vorteil, das Layout konsistent zu halten, anstatt dass Scroll-Leisten je nach Menge des Inhalts im Container erscheinen oder verschwinden.

Lassen Sie uns dies in Aktion sehen. Bearbeiten Sie das folgende Beispiel, um etwas Inhalt aus dem `box`-`<div>` zu entfernen. Beachten Sie, wie die Scroll-Leisten bleiben, auch wenn kein Bedarf zum Scrollen besteht:

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
> Die Sichtbarkeit der Scroll-Leiste hängt vom Betriebssystem ab.
> Möglicherweise müssen Sie Ihre Browsereinstellungen ändern, um die Scroll-Leisten immer anzuzeigen, damit die Scroll-Leisten in den folgenden Beispielen immer sichtbar sind.

Im obigen Beispiel müssen wir nur entlang der `y`-Achse scrollen, allerdings erhalten wir Scroll-Leisten auf beiden Achsen. Um nur entlang der `y`-Achse zu scrollen, können Sie die {{cssxref("overflow-y")}}-Eigenschaft verwenden und `overflow-y: scroll` setzen. Versuchen Sie, diese Eigenschaft im obigen Beispiel zu setzen.

Sie können auch das Scrollen entlang der x-Achse mit {{cssxref("overflow-x")}} aktivieren, obwohl dies keine empfohlene Methode ist, um lange Wörter unterzubringen! Wenn Sie ein langes Wort in einer kleinen Box haben, ziehen Sie die Verwendung der {{cssxref("word-break")}}- oder {{cssxref("overflow-wrap")}}-Eigenschaften in Betracht. Darüber hinaus können einige der in [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) diskutierten Methoden Ihnen helfen, Boxen zu erstellen, die besser mit unterschiedlichen Inhaltsmengen skalieren.

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

Wie bei `scroll` erhalten Sie eine Scroll-Leiste in der scrollenden Dimension, egal ob genug Inhalt vorhanden ist, um eine Scroll-Leiste zu verursachen oder nicht.

> [!NOTE]
> Sie können x- und y-Achsenscrollen mithilfe der `overflow`-Eigenschaft spezifizieren, indem Sie zwei Werte angeben. Wenn zwei Schlüsselwörter angegeben sind, gilt das erste für `overflow-x` und das zweite für `overflow-y`. Andernfalls werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Zum Beispiel würde `overflow: scroll hidden` `overflow-x` auf `scroll` und `overflow-y` auf `hidden` setzen.

### Scroll-Leisten nur bei Bedarf anzeigen

Wenn Sie möchten, dass Scroll-Leisten nur dann erscheinen, wenn mehr Inhalt vorhanden ist, als in die Box passt, verwenden Sie `overflow: auto`. Dies ermöglicht es dem Browser, zu bestimmen, ob es Scroll-Leisten anzeigen sollte.

Im folgenden Beispiel entfernen Sie Inhalt, bis er in die Box passt. Sie sollten sehen, dass die Scroll-Leisten verschwinden:

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

Moderne Layoutmethoden (die Sie später im [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) Modul kennenlernen werden) verwalten Überlauf. Sie funktionieren weitgehend ohne Annahmen oder Abhängigkeiten davon, wie viel Inhalt auf einer Webseite sein wird.

Das war nicht immer die Norm. In der Vergangenheit wurden einige Seiten mit Containern fester Höhe erstellt, um Box-Unterseiten auszurichten. Diese Boxen hatten möglicherweise sonst keinen Bezug zueinander. Dies war fragil. Wenn Sie auf eine Box stoßen, bei der der Inhalt anderen Inhalt überlagert, werden Sie jetzt erkennen, dass Überlauf die Ursache dafür sein kann. Idealerweise überarbeiten Sie das Layout, um nicht auf Container mit fester Höhe angewiesen zu sein.

Beim Entwickeln einer Webseite sollten Sie Überlauf immer im Hinterkopf behalten. Testen Sie Designs mit großen und kleinen Inhaltsmengen. Vergrößern und verkleinern Sie Schriftgrößen um mindestens zwei Stufen. Stellen Sie sicher, dass Ihr CSS robust ist. Das Ändern von Überlaufwerten, um Inhalte zu verbergen oder Scroll-Leisten hinzuzufügen, ist auf einige ausgewählte Anwendungsfälle beschränkt (zum Beispiel, wenn Sie beabsichtigen, eine scrollende Box zu haben).

## Zusammenfassung

Diese Lektion führte das Konzept des Überlaufs ein. Sie sollten verstehen, dass Standard-CSS das Unsichtbarmachen von überlaufendem Inhalt vermeidet. Sie haben entdeckt, dass Sie potenziellen Überlauf verwalten können und sollten auch Ihre Arbeit testen, um sicherzustellen, dass sie nicht versehentlich problematischen Überlauf verursacht.

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie die bereitgestellten Informationen zu Überlauf verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}
