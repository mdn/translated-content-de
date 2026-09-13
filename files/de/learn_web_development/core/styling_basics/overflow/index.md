---
title: Überlaufender Inhalt
short-title: Overflow
slug: Learn_web_development/Core/Styling_basics/Overflow
l10n:
  sourceCommit: 936233e89fd5714c957c5931b26dfb56c64f9a91
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}

Überlauf tritt auf, wenn zu viel Inhalt vorhanden ist, um in ein Elementfeld zu passen. In dieser Lektion lernen Sie, wie Sie Überlauf mit CSS verwalten können.

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
          <li>Den Überlauf mit der <code>overflow</code>-Eigenschaft kontrollieren. </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist Überlauf?

Alles in CSS ist eine Box. Sie können die Größe dieser Boxen begrenzen, indem Sie Werte für Eigenschaften wie {{cssxref("width")}} und {{cssxref("height")}} festlegen. **Überlauf tritt auf, wenn zu viel Inhalt in eine Box passt.** CSS bietet verschiedene Werkzeuge zur Verwaltung von Überlauf. Je weiter Sie sich mit CSS-Layout und dem Schreiben von CSS beschäftigen, desto mehr Überlaufsituationen werden Sie erleben.

## CSS versucht "Datenverlust" zu vermeiden

Lassen Sie uns zwei Beispiele betrachten, die das standardmäßige CSS-Überlaufverhalten demonstrieren.

Das erste Beispiel zeigt eine Box, die durch das Festlegen einer `height`-Eigenschaft eingeschränkt wurde. Der Inhalt der Box überschreitet den verfügbaren Platz und läuft daher über die Box hinaus in den darunterliegenden Absatz.

```html live-sample___block-overflow
<div class="box">
  This box has a height and a width. This means that if there is too much
  content to be displayed within the assigned height, there will be an overflow
  situation. If overflow is set to hidden, then any overflow will not be
  visible.
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

Das zweite Beispiel zeigt ein Wort in einer Box. Die Boxgröße ist für das Wort zu klein, daher bricht das Wort aus der Box heraus.

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

Sie fragen sich vielleicht, warum CSS auf solch unordentliche Weise arbeitet und Inhalte außerhalb ihres vorgesehenen Containers anzeigt. Warum nicht überflüssige Inhalte verstecken? Warum die Containergröße nicht anpassen, um den gesamten Inhalt aufzunehmen?

Wo immer möglich, versteckt CSS keine Inhalte. Dies würde zu Datenverlust führen. Das Problem mit Datenverlust ist, dass Sie oder die Besucher Ihrer Website ihn möglicherweise nicht bemerken. Wenn der Absenden-Button auf einem Formular verschwindet und niemand das Formular ausfüllen kann, könnte dies ein großes Problem sein! Stattdessen zeigt CSS Überläufe auf sichtbare Weise. Sie werden das Problem eher bemerken. Im schlimmsten Fall wird Ihnen ein Website-Besucher mitteilen, dass Inhalte überlappen.

Wenn Sie eine Box mit einer `width` oder einer `height` einschränken, vertraut CSS darauf, dass Sie wissen, was Sie tun. CSS geht davon aus, dass Sie das Potenzial für Überlauf verwalten. Im Allgemeinen ist es problematisch, die Blockdimension einzuschränken, wenn die Box Text enthält. Es kann mehr Text vorhanden sein, als Sie bei der Gestaltung der Website erwartet haben, oder der Text kann größer sein (zum Beispiel, wenn der Benutzer seine Schriftgröße erhöht hat).

## Die overflow-Eigenschaft

Die {{cssxref("overflow")}}-Eigenschaft erlaubt es Ihnen, anzugeben, wie der Browser mit überflüssigem Inhalt umgehen soll. Ihr Standardwert ist `visible`, was bedeutet, dass überflüssiger Inhalt sichtbar ist.

Die folgenden beiden `overflow`-Werte bieten das Verhalten, das Sie benötigen, um die meisten Überlaufprobleme zu beheben:

- `overflow: clip` schneidet den überflüssigen Inhalt ab, sodass er nie zu sehen ist.
- `overflow: auto` zeigt nur bei Bedarf Scrollleisten an, sodass der Benutzer die Boxen scrollen kann, um überflüssigen Inhalt zu lesen.

In den nächsten beiden Abschnitten wird erläutert, wie Sie diese Werte verwenden. Danach werden wir uns andere `overflow`-Werte ansehen und erklären, wie Sie den Überlauf auf den x- und y-Achsen separat kontrollieren können.

## Überflüssigen Inhalt ausblenden

Um Inhalt abzuschneiden, wenn er überläuft, setzen Sie `overflow: clip`. Alles, was nicht passt, wird am Rand der Box abgeschnitten und ist nicht mehr erreichbar. Dies bedeutet, dass einige Inhalte unsichtbar werden, daher sollten Sie dies nur tun, wenn das Verstecken kein Problem verursacht.

```html live-sample___clip
<div class="box">
  This box has a height and a width. This means that if there is too much
  content to be displayed within the assigned height, there will be an overflow
  situation. If overflow is set to clip, then any overflow will not be visible.
</div>

<p>This content is outside of the box.</p>
```

```css live-sample___clip
.box {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow: clip;
}
```

{{EmbedLiveSample("clip", "", "200px")}}

Versuchen Sie, dieses Beispiel zu bearbeiten und setzen Sie `overflow` auf `visible` und dann wieder auf `clip`, um den Effekt zu sehen.

> [!NOTE]
> Standardmäßig schneidet `clip` Inhalte am Rand der Box ab. Die {{cssxref("overflow-clip-margin")}}-Eigenschaft verschiebt diesen Abschneidungsrand nach außen und lässt eine bestimmte Menge des überflüssigen Inhalts sichtbar bleiben, bevor der Rest abgeschnitten wird.

## Überflüssigen Inhalt scrollen

Möglicherweise möchten Sie, dass Benutzer den Inhalt scrollen, um ihn vollständig zu lesen. Wenn Sie `overflow: auto` setzen, wird die Box scrollbar und Browser mit sichtbaren Scrollleisten zeigen eine Scrollleiste nur dann an, wenn tatsächlich zu viel Inhalt vorhanden ist, um hineinzupassen.

Im folgenden Beispiel entfernen Sie Inhalt aus dem `<div>`, bis er nicht mehr überläuft. Sie sollten sehen, dass die Scrollleiste verschwindet:

```html live-sample___auto
<div class="box">
  This box has a height and a width. This means that if there is too much
  content to be displayed within the assigned height, there will be an overflow
  situation. If overflow is set to auto, then scrollbars appear only when
  needed.
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

> [!NOTE]
> Die Sichtbarkeit von Scrollleisten hängt vom Betriebssystem ab.
> Möglicherweise müssen Sie Ihre Browsereinstellungen ändern, um Scrollleisten immer anzuzeigen, damit sie in den nächsten Beispielen sichtbar werden.

## Den Überlauf auf jeder Achse kontrollieren

Wenn Sie ein einzelnes Schlüsselwort als Wert für die `overflow`-Eigenschaft angeben, wird das Überlaufverhalten für die x- _und_ y-Achse eines Containers festgelegt. Im vorherigen Beispiel, wenn Sie `overflow` auf `scroll` setzen (was Scrollleisten so setzt, dass sie [immer angezeigt werden](#scrollleisten_immer_anzeigen), unabhängig davon, ob der Inhalt überläuft), sehen Sie Scrollleisten auf beiden Achsen. Um die Achsen separat zu steuern, verwenden Sie die Eigenschaften {{cssxref("overflow-x")}} und {{cssxref("overflow-y")}}. Versuchen Sie, `overflow-y: auto` im Beispiel zu setzen.

Das nächste Beispiel zeigt das Aktivieren des Scrollens entlang der x-Achse mit `overflow-x`, obwohl dies für das Aufnehmen langer Wörter nicht empfohlen wird! Wenn Sie ein langes Wort in einer kleinen Box haben, sollten Sie die Eigenschaften {{cssxref("word-break")}} oder {{cssxref("overflow-wrap")}} in Betracht ziehen, um das Wort über mehrere Zeilen zu brechen. Darüber hinaus können einige der in [Elementgrößenanpassung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) diskutierten Methoden Ihnen helfen, Boxen zu erstellen, die besser mit unterschiedlichen Inhaltsmengen skalieren.

```html live-sample___scroll-x
<div class="word">Overflow</div>
```

```css live-sample___scroll-x
.word {
  border: 5px solid #333333;
  width: 100px;
  font-size: 250%;
  overflow-x: auto;
}
```

{{EmbedLiveSample("scroll-x")}}

> [!NOTE]
> Sie können den Überlauf auch separat für die x- und y-Achse angeben, indem Sie der `overflow`-Eigenschaft zwei Schlüsselwortwerte übergeben: Der erste gilt für `overflow-x` und der zweite gilt für `overflow-y`. Zum Beispiel würde `overflow: clip auto` `overflow-x` auf `clip` und `overflow-y` auf `auto` setzen.

`clip` ist der einzige Wert, den Sie mit `visible` auf der anderen Achse kombinieren können. Wenn Sie eine Achse auf einen Scrollwert (`auto`, `scroll` oder `hidden`) setzen und die andere auf `visible`, wird der Wert `visible` stattdessen zu `auto` berechnet, da eine Box nicht auf einer Achse scrollen kann, während der Inhalt aus der anderen herausläuft. So schneidet `overflow: clip visible` horizontal ab und lässt den Inhalt vertikal überlaufen, während `overflow: hidden visible` sich wie `overflow: hidden auto` verhält.

## Scrollleisten immer anzeigen

Das Setzen von `overflow: scroll` macht die Box scrollbar wie `overflow: auto`, außer dass Browser mit sichtbaren Scrollleisten sie immer anzeigen, selbst wenn der Inhalt nicht überläuft.

Der Hauptgrund für die Verwendung von `scroll` ist Layout-Konsistenz: Die Scrollleiste ist immer da; daher verschiebt sich der Inhalt nicht, wenn sich die Inhaltsmenge zwischen überlaufend und nicht überlaufend ändert. In einem solchen Fall ist es jedoch in der Regel besser, `overflow: auto` mit einem {{cssxref("scrollbar-gutter")}}-Wert von `stable` zu kombinieren, da es den Raum reserviert, ohne zu erzwingen, dass eine Scrollleiste gezeichnet wird.

## Der Wert hidden

Sie werden häufig `overflow: hidden` im bestehenden Code finden. Wie `clip` schneidet es den überflüssigen Inhalt ab und zeigt keine Scrollleisten an. Im Gegensatz zu `clip` macht es die Box jedoch zu einem Scrollcontainer, und der Inhalt kann mit anderen Mitteln gescrollt werden, z. B. mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) oder durch Tabben zu einem fokussierbaren Element weiter unten im Inhalt, wie einem [Verknüpfungselement](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links).

Sie sollten den `clip`-Wert die meiste Zeit verwenden; `hidden` ist nur erforderlich, wenn Sie das oben beschriebene Scrollverhalten benötigen.

## Ungewollter Überlauf im Webdesign

Moderne Layoutmethoden (die Sie später im Modul [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) kennenlernen werden) verwalten Überlauf. Sie arbeiten größtenteils ohne Annahmen oder Abhängigkeiten davon, wie viel Inhalt auf einer Webseite vorhanden sein wird.

Dies war nicht immer die Norm. In der Vergangenheit wurden einige Websites mit Containern fester Höhe erstellt, um die Unterseiten von Boxen auszurichten. Diese Boxen hätten sonst keine Beziehung zueinander gehabt. Dies war fragil. Wenn Sie auf eine Box stoßen, in der sich Inhalte überlagern, werden Sie jetzt erkennen, dass Überlauf die Ursache sein könnte. Idealerweise sollten Sie das Layout überarbeiten, um Container mit fester Höhe zu vermeiden.

Wenn Sie eine Website entwickeln, sollten Sie den Überlauf immer im Hinterkopf behalten. Testen Sie Designs mit großen und kleinen Inhaltsmengen. Erhöhen und verringern Sie die Schriftgrößen um mindestens zwei Stufen. Stellen Sie sicher, dass Ihr CSS robust ist. Das Ändern von Überlaufwerten, um Inhalte auszublenden oder Scrollleisten hinzuzufügen, ist nur für wenige ausgewählte Anwendungsfälle vorgesehen (zum Beispiel, wenn Sie möchten, dass Ihre Scrollbox immer Scrollleisten anzeigt).

## Zusammenfassung

Diese Lektion führte das Konzept des Überlaufs ein. Standardmäßig vermeidet CSS, überflüssigen Inhalt unsichtbar zu machen. Sie können potenziellen Überlauf verwalten, und Sie sollten Ihre Arbeit testen, um sicherzustellen, dass sie nicht versehentlich problematischen Überlauf verursacht.

Im nächsten Artikel stellen wir Ihnen einige Tests vor, die Sie verwenden können, um zu prüfen, wie gut Sie die Informationen, die wir über Überlauf bereitgestellt haben, verstanden und verinnerlicht haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}
