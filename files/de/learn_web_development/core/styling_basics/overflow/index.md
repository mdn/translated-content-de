---
title: Überlaufender Inhalt
short-title: Overflow
slug: Learn_web_development/Core/Styling_basics/Overflow
l10n:
  sourceCommit: 78bdd004c24d256efc8372f18204ea58f83a1b5e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}

Ein Überlauf tritt auf, wenn zu viel Inhalt vorhanden ist, um ihn in ein Elementkasten zu passen. In dieser Lektion lernen Sie, wie Sie Überläufe mit CSS verwalten können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
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

Alles in CSS ist ein Kasten. Sie können die Größe dieser Kästen einschränken, indem Sie Werte wie {{cssxref("width")}} und {{cssxref("height")}} zuweisen. **Ein Überlauf passiert, wenn zu viel Inhalt in einen Kasten passt.** CSS bietet verschiedene Werkzeuge zur Verwaltung von Überläufen. Je weiter Sie in CSS Layouts und das Schreiben von CSS vertiefen, desto mehr Überlaufsituationen werden Sie begegnen.

## CSS versucht "Datenverlust" zu vermeiden

Betrachten wir zwei Beispiele, die das Standardverhalten von CSS zeigen, wenn ein Überlauf auftritt.

Das erste Beispiel zeigt einen Kasten, der durch die Einstellung einer `height` eingeschränkt ist. Der Inhalt des Kastens überschreitet den verfügbaren Raum, daher fließt er über den Kasten hinaus in den darunter liegenden Absatz.

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

Das zweite Beispiel zeigt ein Wort in einem Kasten. Der Kasten wurde zu klein für das Wort gemacht, sodass es aus dem Kasten herausbricht.

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

Vielleicht fragen Sie sich, warum CSS auf so unordentliche Weise funktioniert und Inhalt außerhalb seines vorgesehenen Containers anzeigt. Warum nicht den überfließenden Inhalt verstecken? Warum nicht die Größe des Containers anpassen, um den gesamten Inhalt aufzunehmen?

Wo immer möglich, versteckt CSS keinen Inhalt. Dies würde zu Datenverlust führen. Das Problem mit Datenverlust ist, dass Sie oder Besucher Ihrer Website es möglicherweise nicht bemerken. Wenn der Absende-Button auf einem Formular verschwindet und niemand das Formular abschließen kann, könnte dies ein großes Problem sein! Stattdessen verursacht CSS sichtbare Überläufe. Sie werden eher ein Problem bemerken. Im schlimmsten Fall wird ein Webseitenbesucher Sie darauf hinweisen, dass sich Inhalte überlappen.

Wenn Sie einen Kasten mit einer `width` oder einer `height` einschränken, vertraut CSS darauf, dass Sie wissen, was Sie tun. CSS geht davon aus, dass Sie das Potenzial für einen Überlauf verwalten. Im Allgemeinen ist das Einschränken der Blockdimension problematisch, wenn der Kasten Text enthält. Es kann mehr Text geben, als Sie bei der Gestaltung der Seite erwartet haben, oder der Text kann größer sein (zum Beispiel, wenn der Benutzer seine Schriftgröße vergrößert hat).

## Die overflow-Eigenschaft

Die {{cssxref("overflow")}}-Eigenschaft erlaubt es Ihnen zu spezifizieren, wie der Browser mit überlaufendem Inhalt umgehen soll. Der Standardwert des [`<overflow>`](/de/docs/Web/CSS/overflow_value)-Wertetyps ist `visible`. Mit dieser Standardeinstellung kann man den Inhalt sehen, wenn er überläuft.

### Überlaufenden Inhalt verstecken

Um Inhalt zu verstecken, wenn er überläuft, können Sie `overflow: hidden` setzen. Dies tut genau das, was es sagt: es versteckt Überlauf. Seien Sie sich bewusst, dass dies einige Inhalte unsichtbar machen kann. Sie sollten dies nur tun, wenn das Verstecken von Inhalt keine Probleme verursacht.

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

Versuchen Sie, das obige Beispiel zu bearbeiten, um den `overflow`-Wert auf `visible` zu setzen und dann zurück auf `hidden`, um zu sehen, was der Effekt ist.

### Überlaufenden Inhalt scrollbar machen

Stattdessen möchten Sie vielleicht Ihren Benutzern erlauben, den Inhalt zu scrollen, um alles zu lesen? Wenn Sie `overflow: scroll` auf überlaufendem Inhalt setzen, werden Browser mit sichtbaren Scrollbalken diese immer anzeigen – auch wenn nicht genug Inhalt vorhanden ist, um einen Überlauf zu verursachen. Dies bietet den Vorteil, das Layout konsistent zu halten, anstatt dass Scrollbalken je nach Menge des Inhalts im Container erscheinen oder verschwinden.

Sehen wir uns dies in Aktion an. Bearbeiten Sie das folgende Beispiel, um einige Inhalte aus dem `box`-`<div>` zu entfernen. Beachten Sie, wie die Scrollbalken bleiben, auch wenn kein Scrollen notwendig ist:

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
> Die Sichtbarkeit von Scrollbalken hängt vom Betriebssystem ab.
> Möglicherweise müssen Sie Ihre Browsereinstellungen ändern, um Scrollbalken immer anzuzeigen, damit diese in den folgenden Beispielen immer sichtbar sind.

Im obigen Beispiel müssen wir nur entlang der `y`-Achse scrollen, jedoch bekommen wir Scrollbalken auf beiden Achsen. Um nur auf der `y`-Achse zu scrollen, können Sie die {{cssxref("overflow-y")}}-Eigenschaft verwenden und `overflow-y: scroll` setzen. Versuchen Sie, diese Eigenschaft im obigen Beispiel zu setzen.

Sie können auch das Scrollen entlang der x-Achse mit {{cssxref("overflow-x")}} aktivieren, obwohl dies keine empfohlene Methode ist, um lange Wörter aufzunehmen! Wenn Sie ein langes Wort in einem kleinen Kasten haben, sollten Sie die {{cssxref("word-break")}} oder {{cssxref("overflow-wrap")}}-Eigenschaften in Betracht ziehen. Darüber hinaus können einige der Methoden, die in [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) besprochen werden, Ihnen helfen, Kästen zu erstellen, die besser mit wechselnden Inhaltsmengen skalieren.

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

Wie bei `scroll` erhalten Sie einen Scrollbalken in der Scrollrichtung, unabhängig davon, ob genug Inhalt vorhanden ist, um einen Scrollbalken zu verursachen.

> [!NOTE]
> Sie können die x- und y-Achsen-Scrollen mit der `overflow`-Eigenschaft festlegen, indem Sie zwei Werte angeben. Wenn zwei Schlüsselwörter angegeben werden, gilt das erste für `overflow-x` und das zweite für `overflow-y`. Andernfalls werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Beispielsweise würde `overflow: scroll hidden` `overflow-x` auf `scroll` und `overflow-y` auf `hidden` setzen.

### Scrollbalken nur bei Bedarf anzeigen

Wenn Sie möchten, dass Scrollbalken nur erscheinen, wenn mehr Inhalt vorhanden ist, als in den Kasten passt, verwenden Sie `overflow: auto`. Dies erlaubt es dem Browser zu bestimmen, ob Scrollbalken angezeigt werden sollen.

Im folgenden Beispiel entfernen Sie den Inhalt, bis er in den Kasten passt. Sie sollten sehen, wie die Scrollbalken verschwinden:

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

Moderne Layoutmethoden (die Sie später im Modul [CSS Layout](/de/docs/Learn_web_development/Core/CSS_layout) kennenlernen werden) verwalten Überläufe. Sie arbeiten weitgehend ohne Annahmen oder Abhängigkeiten davon, wie viel Inhalt auf einer Webseite sein wird.

Das war nicht immer die Norm. In der Vergangenheit wurden einige Webseiten mit Containern fester Höhe erstellt, um die Böden der Kästen auszurichten. Diese Kästen hatten möglicherweise sonst keine Beziehung zueinander. Dies war fragil. Wenn Sie auf einen Kasten stoßen, in dem Inhalte andere Inhalte überlagern, werden Sie jetzt erkennen, dass Überlauf möglicherweise die Ursache dafür ist. Im Idealfall werden Sie das Layout neu gestalten, um sich nicht auf Container mit fester Höhe zu verlassen.

Beim Entwickeln einer Seite sollten Sie Überläufe immer im Hinterkopf behalten. Testen Sie Designs mit großen und kleinen Mengen an Inhalten. Erhöhen und verringern Sie die Schriftgröße um mindestens zwei Schritte. Stellen Sie sicher, dass Ihr CSS robust ist. Das Ändern von Überlaufwerten, um Inhalte zu verstecken oder Scrollbalken hinzuzufügen, ist für ausgewählte Anwendungsfälle reserviert (zum Beispiel, wenn Sie beabsichtigen, einen scrollbaren Kasten zu haben).

## Zusammenfassung

Diese Lektion hat das Konzept des Überlaufs eingeführt. Sie sollten verstehen, dass CSS standardmäßig vermeidet, überlaufenden Inhalt unsichtbar zu machen. Sie haben herausgefunden, dass Sie potenziellen Überlauf verwalten können, und dass Sie Ihre Arbeit testen sollten, um sicherzustellen, dass sie nicht versehentlich problematische Überläufe verursacht.

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie das Verständnis und die Informationen, die wir über Überläufe bereitgestellt haben, behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}
