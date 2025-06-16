---
title: Überlaufender Inhalt
short-title: Overflow
slug: Learn_web_development/Core/Styling_basics/Overflow
l10n:
  sourceCommit: d2317ab6c4301c3774f1f319fa3a532e94ba82f6
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}

Überlauf tritt auf, wenn zu viel Inhalt vorhanden ist, um in ein Elementfeld zu passen. In dieser Lektion lernen Sie, wie Sie Überlauf mit CSS verwalten können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie die
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
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

Alles in CSS ist ein Kasten. Sie können die Größe dieser Kästen durch Zuordnung von Werten wie {{cssxref("width")}} und {{cssxref("height")}} einschränken. **Überlauf passiert, wenn zu viel Inhalt vorhanden ist, um in einen Kasten zu passen.** CSS bietet verschiedene Werkzeuge zur Verwaltung von Überlauf. Wenn Sie tiefer in CSS-Layouts und CSS-Verfassen eintauchen, werden Sie auf mehr Überlaufsituationen stoßen.

## CSS versucht "Datenverlust" zu vermeiden

Betrachten wir zwei Beispiele, die das Standardverhalten von CSS bei Überlauf demonstrieren.

Das erste Beispiel zeigt einen Kasten, der durch Setzen einer `height` eingeschränkt wurde. Der Inhalt des Kastens übersteigt den verfügbaren Raum und läuft daher über den Kasten hinaus und fällt in den darunter liegenden Absatz.

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

Das zweite Beispiel zeigt ein Wort in einem Kasten. Der Kasten ist zu klein für das Wort und daher bricht es aus dem Kasten aus.

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

Vielleicht fragen Sie sich, warum CSS auf so chaotische Weise arbeitet und Inhalte außerhalb ihres vorgesehenen Containers anzeigt. Warum nicht den überlaufenden Inhalt verbergen? Warum nicht die Größe des Containers anpassen, um den gesamten Inhalt aufzunehmen?

Wo immer möglich, verbirgt CSS keinen Inhalt. Dies würde zu Datenverlust führen. Das Problem mit Datenverlust ist, dass Sie oder Besucher Ihrer Website es möglicherweise nicht bemerken. Wenn der Absende-Button auf einem Formular verschwindet und niemand das Formular ausfüllen kann, könnte dies ein großes Problem sein! Stattdessen tritt der Überlauf in CSS auf sichtbare Weise auf. So ist es wahrscheinlicher, dass Sie ein Problem bemerken. Im schlimmsten Fall wird Sie ein Website-Besucher darauf hinweisen, dass sich Inhalte überlagern.

Wenn Sie einen Kasten mit einer `width` oder einer `height` einschränken, vertraut CSS darauf, dass Sie wissen, was Sie tun. CSS geht davon aus, dass Sie das Potenzial für Überlauf verwalten. Im Allgemeinen ist das Einschränken der Blockdimension problematisch, wenn der Kasten Text enthält. Es kann mehr Text geben, als Sie beim Entwerfen der Site erwartet haben, oder der Text könnte größer sein (zum Beispiel, wenn der Nutzer die Schriftgröße erhöht hat).

## Die overflow-Eigenschaft

Die {{cssxref("overflow")}}-Eigenschaft ermöglicht es Ihnen, anzugeben, wie der Browser mit überlaufenden Inhalten umgehen soll. Der Standardwert des [`<overflow>`](/de/docs/Web/CSS/overflow_value)-Wertetyps ist `visible`. Mit dieser Standardeinstellung kann man den Inhalt sehen, wenn er überläuft.

### Überlaufenden Inhalt verbergen

Um Inhalt zu verbergen, wenn er überläuft, können Sie `overflow: hidden` setzen. Dies bewirkt genau das, was es sagt: es verbirgt Überlauf. Seien Sie sich bewusst, dass dadurch Inhalt unsichtbar werden kann. Sie sollten dies nur tun, wenn das Verbergen von Inhalten keine Probleme verursacht.

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

Versuchen Sie, das obige Beispiel zu bearbeiten und den `overflow`-Wert auf `visible` zu setzen und dann zurück auf `hidden`, um zu sehen, welchen Effekt dies hat.

### Scrollende, überlaufende Inhalte

Stattdessen möchten Sie vielleicht Ihren Benutzern erlauben, den gesamten Inhalt durch Scrollen zu lesen? Wenn Sie `overflow: scroll` auf überlaufende Inhalte setzen, werden Browser mit sichtbaren Scrollleisten diese immer anzeigen - selbst wenn nicht genügend Inhalt vorhanden ist, um einen Überlauf zu verursachen. Dies bietet den Vorteil, das Layout konsistent zu halten, anstatt dass Scrollleisten je nach Inhalt im Container erscheinen oder verschwinden.

Sehen wir uns das in Aktion an. Bearbeiten Sie das folgende Beispiel, um einige Inhalte aus dem `box`-`<div>` zu entfernen. Beachten Sie, wie die Scrollleisten erhalten bleiben, auch wenn kein Scrollen erforderlich ist:

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
> Die Sichtbarkeit der Scrollbalken hängt vom Betriebssystem ab.
> Möglicherweise müssen Sie Ihre Browsereinstellungen ändern, um die Scrollbalken in den folgenden Beispielen immer anzuzeigen.

Im obigen Beispiel müssen wir nur auf der `y`-Achse scrollen, doch wir erhalten Scrollleisten auf beiden Achsen. Um nur auf der `y`-Achse zu scrollen, könnten Sie die {{cssxref("overflow-y")}}-Eigenschaft verwenden, indem Sie `overflow-y: scroll` setzen. Versuchen Sie, diese Eigenschaft im obigen Beispiel zu setzen.

Sie können das Scrollen entlang der x-Achse auch aktivieren, indem Sie {{cssxref("overflow-x")}} verwenden, obwohl dies keine empfohlene Methode ist, um lange Wörter unterzubringen! Wenn Sie ein langes Wort in einem kleinen Kasten haben, sollten Sie die Eigenschaften {{cssxref("word-break")}} oder {{cssxref("overflow-wrap")}} in Betracht ziehen. Außerdem können einige der in [Größen von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) diskutierten Methoden Ihnen helfen, Kästen zu erstellen, die besser mit unterschiedlichen Inhaltsmengen skalieren.

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

Wie bei `scroll` erhalten Sie einen Scrollbalken in der Scrollrichtung, unabhängig davon, ob genügend Inhalt vorhanden ist, um einen Scrollbalken zu verursachen.

> [!NOTE]
> Sie können das Scrollen auf der x- und y-Achse mit der `overflow`-Eigenschaft angeben, indem Sie zwei Werte übergeben. Wenn zwei Schlüsselwörter angegeben sind, gilt das erste für `overflow-x` und das zweite für `overflow-y`. Andernfalls werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Zum Beispiel würde `overflow: scroll hidden` `overflow-x` auf `scroll` und `overflow-y` auf `hidden` setzen.

### Nur Scrollleisten anzeigen, wenn nötig

Wenn Sie nur möchten, dass Scrollleisten erscheinen, wenn mehr Inhalt vorhanden ist, als in den Kasten passt, verwenden Sie `overflow: auto`. Dadurch kann der Browser bestimmen, ob er Scrollleisten anzeigen soll.

Im folgenden Beispiel entfernen Sie Inhalte, bis sie in den Kasten passen. Sie sollten sehen, dass die Scrollleisten verschwinden:

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

Moderne Layoutmethoden (die Sie später im [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)-Modul kennenlernen werden) verwalten den Überlauf. Sie arbeiten weitgehend ohne Annahmen oder Abhängigkeiten davon, wie viel Inhalt auf einer Webseite vorhanden sein wird.

Dies war nicht immer die Norm. In der Vergangenheit wurden einige Seiten mit Containern fester Höhe gebaut, um die Unterseiten von Kästen auszurichten. Diese Kästen hatten möglicherweise sonst keine Beziehung zueinander. Dies war fragil. Wenn Sie auf einen Kasten stoßen, bei dem sich Inhalte überlagern, werden Sie jetzt erkennen, dass Überlauf gut die Ursache dafür sein kann. Idealerweise werden Sie das Layout umstrukturieren, um nicht auf Container fester Höhe angewiesen zu sein.

Wenn Sie eine Website entwickeln, denken Sie immer an den Überlauf. Testen Sie Designs mit großen und kleinen Mengen an Inhalten. Erhöhen und verringern Sie die Schriftgröße um mindestens zwei Stufen. Stellen Sie sicher, dass Ihr CSS robust ist. Das Ändern von Überlaufwerten, um Inhalte zu verbergen oder Scrollleisten hinzuzufügen, ist einigen wenigen ausgewählten Anwendungsfällen vorbehalten (zum Beispiel, wenn Sie beabsichtigen, einen scrollenden Kasten zu haben).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow).

## Zusammenfassung

Diese Lektion hat das Konzept des Überlaufs eingeführt. Sie sollten verstehen, dass CSS standardmäßig vermeidet, überlaufende Inhalte unsichtbar zu machen. Sie haben entdeckt, dass Sie den potenziellen Überlauf verwalten können und sollten auch Ihre Arbeit testen, um sicherzustellen, dass sie nicht versehentlich problematischen Überlauf verursacht.

Im nächsten Artikel werden wir uns damit befassen, wie man spezielle Seitenmerkmale wie Bilder und Formularelemente stylen kann.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}
