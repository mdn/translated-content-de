---
title: Überlaufender Inhalt
slug: Learn_web_development/Core/Styling_basics/Overflow
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}

Überlauf tritt auf, wenn zu viel Inhalt vorhanden ist, um in eine Elementbox zu passen. In dieser Lektion lernen Sie, wie Sie Überlauf mit CSS verwalten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (Studieren Sie
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
          <li>Überlauf mit der <code>overflow</code>-Eigenschaft steuern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist Überlauf?

Alles in CSS ist eine Box. Sie können die Größe dieser Boxen beschränken, indem Sie Werte wie {{cssxref("width")}} und {{cssxref("height")}} zuweisen. **Überlauf tritt auf, wenn zu viel Inhalt in eine Box passen soll.** CSS bietet verschiedene Werkzeuge zur Verwaltung von Überlauf. Wenn Sie sich weiter mit CSS-Layout und dem Schreiben von CSS beschäftigen, werden Sie auf mehr Überlaufsituationen stoßen.

## CSS versucht "Datenverlust" zu vermeiden

Betrachten wir zwei Beispiele, die das Standardverhalten von CSS bei Überlauf veranschaulichen.

Das erste Beispiel ist eine Box, die durch das Setzen einer `height` eingeschränkt wurde. Dann fügen wir Inhalt hinzu, der den zugewiesenen Raum überschreitet. Der Inhalt läuft über die Box hinaus und fällt in den darunterliegenden Absatz.

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

Das zweite Beispiel ist ein Wort in einer Box. Die Box wurde zu klein für das Wort gemacht, und es bricht aus der Box heraus.

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

Sie fragen sich vielleicht, warum CSS auf so unordentliche Weise funktioniert und Inhalte außerhalb ihres beabsichtigten Containers anzeigt. Warum nicht überfließende Inhalte verstecken? Warum nicht die Größe des Containers anpassen, um den gesamten Inhalt aufzunehmen?

Wo immer möglich, versteckt CSS keine Inhalte. Dies würde zu Datenverlust führen. Das Problem mit Datenverlust ist, dass man ihn möglicherweise nicht bemerkt. Website-Besucher bemerken es möglicherweise nicht. Wenn der Absenden-Button in einem Formular verschwindet und niemand das Formular abschließen kann, könnte das ein großes Problem sein! Stattdessen lässt CSS Überlauf auf sichtbare Weise erscheinen. So erkennen Sie eher, dass es ein Problem gibt. Im schlimmsten Fall wird ein Seitenbesucher Sie darauf hinweisen, dass sich Inhalte überlappen.

Wenn Sie eine Box mit einer `width` oder einer `height` einschränken, vertraut CSS darauf, dass Sie wissen, was Sie tun. CSS geht davon aus, dass Sie das Potenzial für Überlauf verwalten. Im Allgemeinen ist es problematisch, die Blockabmessung einzuschränken, wenn die Box Text enthält. Es könnte mehr Text vorhanden sein als ursprünglich erwartet, als Sie die Seite gestalteten, oder der Text könnte größer sein (zum Beispiel, wenn der Benutzer die Schriftgröße erhöht hat).

## Die overflow-Eigenschaft

Die {{cssxref("overflow")}}-Eigenschaft hilft Ihnen, mit Überlauf von Inhalten eines Elements umzugehen. Mit dieser Eigenschaft können Sie dem Browser mitteilen, wie er mit Überlaufinhalten umgehen soll. Der Standardwert des [`<overflow>`](/de/docs/Web/CSS/overflow_value)-Wertetyps ist `visible`. Mit dieser Standardeinstellung kann man Inhalte sehen, wenn sie überlaufen.

### Überlaufende Inhalte ausblenden

Um Inhalte auszublenden, wenn sie überlaufen, können Sie `overflow: hidden` setzen. Dies tut genau das, was es sagt: Es blendet den Überlauf aus. Seien Sie vorsichtig, da dies einige Inhalte unsichtbar machen kann. Sie sollten dies nur tun, wenn das Ausblenden von Inhalten keine Probleme verursacht.

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

Stattdessen möchten Sie vielleicht Scrollleisten hinzufügen, wenn Inhalte überlaufen? Durch die Verwendung von `overflow: scroll` werden Browser mit sichtbaren Scrollleisten diese immer anzeigen - selbst wenn nicht genug Inhalt vorhanden ist, um einen Überlauf zu verursachen. Dies bietet den Vorteil, das Layout konsistent zu halten, anstatt Scrollleisten je nach Inhalt der Box ein- oder auszublenden.

Entfernen Sie etwas Inhalt aus der Box unten. Beachten Sie, wie die Scrollleisten bleiben, auch wenn kein Scrollen erforderlich ist:

> [!NOTE]
> Die Sichtbarkeit der Scrollleisten hängt vom Betriebssystem ab.
> Sie müssen möglicherweise die Einstellungen Ihres Browsers ändern, um Scrollleisten immer anzuzeigen, damit diese in den folgenden Beispielen immer sichtbar sind.

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

Im obigen Beispiel müssen wir nur entlang der `y`-Achse scrollen, jedoch erhalten wir Scrollleisten in beiden Achsen. Um nur entlang der `y`-Achse zu scrollen, könnten Sie die {{cssxref("overflow-y")}}-Eigenschaft verwenden, indem Sie `overflow-y: scroll` setzen.

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

Sie können auch das Scrollen entlang der x-Achse aktivieren, indem Sie {{cssxref("overflow-x")}} verwenden, obwohl dies nicht die empfohlene Methode ist, um lange Wörter unterzubringen! Wenn Sie ein langes Wort in einer kleinen Box haben, sollten Sie die {{cssxref("word-break")}}- oder {{cssxref("overflow-wrap")}}-Eigenschaft in Betracht ziehen. Darüber hinaus können einige der in [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) diskutierten Methoden Ihnen helfen, Boxen zu erstellen, die sich besser an unterschiedliche Inhaltsmengen anpassen.

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

Wie bei `scroll` erhalten Sie eine Scrollleiste in der Scrollrichtung, unabhängig davon, ob genug Inhalt vorhanden ist, um eine Scrollleiste zu verursachen.

> [!NOTE]
> Sie können das Scrollen entlang der Achsen x und y mit der `overflow`-Eigenschaft angeben, indem Sie zwei Werte übergeben. Wenn zwei Schlüsselwörter angegeben sind, gilt das erste für `overflow-x` und das zweite für `overflow-y`. Andernfalls werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Beispielsweise würde `overflow: scroll hidden` `overflow-x` auf `scroll` und `overflow-y` auf `hidden` setzen.

### Scrollleisten nur anzeigen, wenn nötig

Wenn Sie nur möchten, dass Scrollleisten erscheinen, wenn mehr Inhalt vorhanden ist, als in die Box passt, verwenden Sie `overflow: auto`. Dadurch kann der Browser entscheiden, ob Scrollleisten angezeigt werden sollen.

Im Beispiel unten entfernen Sie Inhalt, bis er in die Box passt. Sie sollten sehen, wie die Scrollleisten verschwinden:

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

Moderne Layout-Methoden (die Sie später im [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)-Modul kennenlernen werden) verwalten Überlauf. Sie arbeiten weitgehend ohne Annahmen oder Abhängigkeiten davon, wie viel Inhalt auf einer Webseite vorhanden sein wird.

Dies war nicht immer die Norm. In der Vergangenheit wurden einige Seiten mit festen Höhencontainern gebaut, um die Böden der Boxen auszurichten. Diese Boxen hatten möglicherweise keine Beziehung zueinander. Dies war fragil. Wenn Sie auf eine Box stoßen, in der Inhalte andere Inhalte auf der Seite in Altsystemen überlagern, werden Sie jetzt erkennen, dass dies mit Überlauf passiert. Idealerweise refaktorisieren Sie das Layout, um nicht auf feste Höhencontainer angewiesen zu sein.

Wenn Sie eine Website entwickeln, sollten Sie Überlauf immer im Auge behalten. Testen Sie Designs mit großen und kleinen Inhaltsmengen. Erhöhen und verringern Sie die Schriftgrößen um mindestens zwei Schritte. Stellen Sie sicher, dass Ihr CSS robust ist. Das Ändern von Überlaufwerten, um Inhalte auszublenden oder Scrollleisten hinzuzufügen, ist auf einige ausgewählte Anwendungsfälle beschränkt (zum Beispiel, wenn Sie beabsichtigen, eine scrollende Box zu haben).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow_Tasks).

## Zusammenfassung

Diese Lektion führte das Konzept des Überlaufs ein. Sie sollten verstehen, dass standardmäßiges CSS vermeidet, überlaufende Inhalte unsichtbar zu machen. Sie haben entdeckt, dass Sie potenziellen Überlauf verwalten können und auch, dass Sie Ihre Arbeit testen sollten, um sicherzustellen, dass sie nicht versehentlich problematischen Überlauf verursacht.

Im nächsten Artikel werden wir uns damit beschäftigen, wie spezielle Seitenmerkmale wie Bilder und Formularelemente gestaltet werden können.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}
