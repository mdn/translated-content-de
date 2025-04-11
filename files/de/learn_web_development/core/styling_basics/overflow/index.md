---
title: Überlaufender Inhalt
short-title: Overflow
slug: Learn_web_development/Core/Styling_basics/Overflow
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}

Überlauf ist das, was passiert, wenn zu viel Inhalt vorhanden ist, um in ein Elementbox zu passen. In dieser Lektion lernen Sie, wie Sie Überlauf mit CSS verwalten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenbestimmung</a>.
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

Alles in CSS ist eine Box. Sie können die Größe dieser Boxen durch Zuweisen von Werten wie {{cssxref("width")}} und {{cssxref("height")}} begrenzen. **Überlauf passiert, wenn zu viel Inhalt vorhanden ist, um in eine Box zu passen.** CSS bietet verschiedene Werkzeuge zur Verwaltung von Überlauf. Wenn Sie weiter mit CSS-Layout und CSS-Schreiben fortfahren, werden Sie auf mehr Überlaufsituationen stoßen.

## CSS versucht "Datenverlust" zu vermeiden

Betrachten wir zwei Beispiele, die das Standardverhalten von CSS bei Überlauf demonstrieren.

Das erste Beispiel ist eine Box, die durch Setzen einer `height` eingeschränkt wurde. Dann fügen wir Inhalt hinzu, der den zugewiesenen Raum überschreitet. Der Inhalt läuft aus der Box heraus und fällt in den darunter liegenden Absatz.

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

Das zweite Beispiel ist ein Wort in einer Box. Die Box wurde zu klein für das Wort gemacht und es läuft aus der Box heraus.

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

Möglicherweise fragen Sie sich, warum CSS auf solch chaotische Weise funktioniert und Inhalte außerhalb ihres vorgesehenen Containers anzeigt. Warum nicht überlaufende Inhalte ausblenden? Warum nicht die Größe des Containers anpassen, um den gesamten Inhalt aufzunehmen?

Wo immer möglich, versteckt CSS keine Inhalte. Dies würde Datenverlust verursachen. Das Problem mit Datenverlust ist, dass Sie es möglicherweise nicht bemerken. Website-Besucher könnten es nicht bemerken. Wenn der Senden-Button in einem Formular verschwindet und niemand das Formular ausfüllen kann, könnte das ein großes Problem sein! Stattdessen überläuft CSS auf sichtbare Weise. Es ist wahrscheinlicher, dass Sie ein Problem bemerken. Im schlimmsten Fall wird ein Seitenbesucher Sie darauf hinweisen, dass Inhalte überlappen.

Wenn Sie eine Box mit einer `width` oder einer `height` einschränken, vertraut CSS darauf, dass Sie wissen, was Sie tun. CSS geht davon aus, dass Sie das Potenzial für Überlauf verwalten. Im Allgemeinen ist das Einschränken der Blockdimension problematisch, wenn die Box Text enthält. Es kann mehr Text vorhanden sein, als Sie beim Design der Seite erwartet haben, oder der Text kann größer sein (z.B. wenn der Benutzer seine Schriftgröße vergrößert hat).

## Die Eigenschaft overflow

Die {{cssxref("overflow")}}-Eigenschaft hilft Ihnen, den Überlauf von Inhalten eines Elements zu verwalten. Mit dieser Eigenschaft können Sie einem Browser mitteilen, wie er mit Überlauf-Inhalten umgehen soll. Der Standardwert des [`<overflow>`](/de/docs/Web/CSS/overflow_value)-Wertetypen ist `visible`. Mit dieser Standardeinstellung kann man Inhalte sehen, wenn sie überlaufen.

### Überlaufende Inhalte ausblenden

Um Inhalte auszublenden, wenn sie überlaufen, können Sie `overflow: hidden` festlegen. Dies tut genau das: es blendet den Überlauf aus. Seien Sie sich bewusst, dass dadurch einige Inhalte unsichtbar werden können. Sie sollten dies nur tun, wenn das Ausblenden von Inhalten keine Probleme verursacht.

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

### Überlaufende Inhalte scrollen

Stattdessen möchten Sie vielleicht Scrollbalken hinzufügen, wenn Inhalte überlaufen? Mit `overflow: scroll` zeigen Browser mit sichtbaren Scrollleisten diese immer an — selbst wenn nicht genügend Inhalt zum Überlaufen vorhanden ist. Dies bietet den Vorteil, dass das Layout konsistent bleibt, anstatt dass Scrollleisten erscheinen oder verschwinden, abhängig von der Menge des Inhalts im Container.

Entfernen Sie einige Inhalte aus der Box unten. Beachten Sie, wie die Scrollleisten bleiben, selbst wenn kein Scrollen erforderlich ist:

> [!NOTE]
> Die Sichtbarkeit der Scrollleisten hängt vom Betriebssystem ab.
> Möglicherweise müssen Sie Ihre Browsereinstellungen ändern, um Scrollleisten immer anzuzeigen, damit sie in den folgenden Beispielen immer angezeigt werden.

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

Im obigen Beispiel müssen wir nur auf der `y`-Achse scrollen, allerdings bekommen wir Scrollleisten auf beiden Achsen. Um nur auf der `y`-Achse zu scrollen, könnten Sie die {{cssxref("overflow-y")}}-Eigenschaft verwenden und `overflow-y: scroll` festlegen.

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

Sie können auch das Scrollen entlang der x-Achse aktivieren, indem Sie {{cssxref("overflow-x")}} verwenden, obwohl dies nicht empfohlen wird, um lange Wörter zu behandeln! Wenn Sie ein langes Wort in einer kleinen Box haben, ziehen Sie in Betracht, die {{cssxref("word-break")}}- oder {{cssxref("overflow-wrap")}}-Eigenschaft zu verwenden. Zusätzlich können einige der in [Größenbestimmung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) diskutierten Methoden Ihnen helfen, Boxen zu erstellen, die besser mit unterschiedlichen Inhaltsmengen skalieren.

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

Wie bei `scroll` erhalten Sie einen Scrollbalken in der Scroll-Dimension, unabhängig davon, ob genug Inhalt vorhanden ist, um einen Scrollbalken zu verursachen.

> [!NOTE]
> Sie können das Scrollen auf der x- und y-Achse mit der `overflow`-Eigenschaft angeben, indem Sie zwei Werte übergeben. Wenn zwei Schlüsselwörter angegeben sind, gilt das erste für `overflow-x` und das zweite für `overflow-y`. Andernfalls werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Zum Beispiel würde `overflow: scroll hidden` `overflow-x` auf `scroll` und `overflow-y` auf `hidden` setzen.

### Scrollleisten nur bei Bedarf anzeigen

Wenn Sie möchten, dass Scrollleisten nur erscheinen, wenn mehr Inhalt vorhanden ist, als in die Box passt, verwenden Sie `overflow: auto`. Dies ermöglicht es dem Browser zu bestimmen, ob Scrollleisten angezeigt werden sollen.

Im folgenden Beispiel entfernen Sie so lange Inhalte, bis sie in die Box passen. Sie sollten sehen, wie die Scrollleisten verschwinden:

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

## Ungewollter Überlauf im Webdesign

Moderne Layout-Methoden (die Sie später im [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)-Modul kennenlernen werden) verwalten den Überlauf. Sie arbeiten weitgehend ohne Annahmen oder Abhängigkeiten darüber, wie viel Inhalt auf einer Webseite sein wird.

Dies war nicht immer die Norm. In der Vergangenheit wurden einige Websites mit Behältern fester Höhe gebaut, um die Unterseiten der Boxen auszurichten. Diese Boxen hatten ansonsten möglicherweise keine Beziehung zueinander. Dies war fragil. Wenn Sie auf eine Box stoßen, bei der Inhalte sich auf der Seite in Altsystemen überlappen, erkennen Sie jetzt, dass dies bei Überlauf passiert. Idealerweise werden Sie das Layout umgestalten, um nicht auf Container mit fester Höhe angewiesen zu sein.

Wenn Sie eine Website entwickeln, behalten Sie immer den Überlauf im Auge. Testen Sie Designs mit großen und kleinen Mengen an Inhalten. Erhöhen und verringern Sie die Schriftgrößen um mindestens zwei Stufen. Stellen Sie sicher, dass Ihr CSS robust ist. Das Ändern von Überlaufwerten zum Verstecken von Inhalten oder zum Hinzufügen von Scrollleisten ist auf einige ausgewählte Anwendungsfälle beschränkt (zum Beispiel, wenn Sie beabsichtigen, eine scrollbare Box zu haben).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow).

## Zusammenfassung

Diese Lektion führte das Konzept des Überlaufs ein. Sie sollten verstehen, dass CSS standardmäßig vermeidet, überlaufende Inhalte unsichtbar zu machen. Sie haben entdeckt, dass Sie potenziellen Überlauf verwalten können und auch, dass Sie Ihre Arbeit testen sollten, um sicherzustellen, dass sie nicht versehentlich problematischen Überlauf verursacht.

Im nächsten Artikel werden wir uns ansehen, wie Sie spezielle Seitenmerkmale wie Bilder und Formularelemente stylen können.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}
