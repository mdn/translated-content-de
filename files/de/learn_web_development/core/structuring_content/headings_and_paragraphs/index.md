---
title: Überschriften und Absätze
slug: Learn_web_development/Core/Structuring_content/Headings_and_paragraphs
l10n:
  sourceCommit: d865c290ae97074157ca8fd3994015b2f393d370
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}

Eine der Hauptaufgaben von HTML besteht darin, Text eine Struktur zu geben, damit ein Browser ein HTML-Dokument so anzeigen kann, wie es der Entwickler beabsichtigt. Dieser Artikel erklärt, wie {{Glossary("HTML", "HTML")}} verwendet werden kann, um eine grundlegende Seitenstruktur bereitzustellen, indem Überschriften und Absätze definiert werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wie man mit Überschriften und dem darunterliegenden Inhalt eine gute Dokumentstruktur erstellt.</li>
          <li>Verwendung von semantischem HTML anstelle von präsentationellem HTML und warum das wichtig ist.</li>
          <li>Die Notwendigkeit, Überschriftsebenen logisch zu verwenden, d.h. keine Ebenen zu überspringen oder sie willkürlich zu verwenden, nur weil Sie eine bestimmte Schriftgröße erreichen möchten (das ist eine Aufgabe für CSS).</li>
          <li>SEO-Vorteile: zum Beispiel werden Schlüsselwörter in Überschriften verstärkt.</li>
          <li>Barrierefreiheitsvorteile: Assistive Technologien (AT) wie Bildschirmleser verwenden Überschriften (und andere Orientierungspunkte) als Wegweiser, um Inhalte zu navigieren. HTML-Dokumente sind für AT-Benutzer sehr schwer zu nutzen ohne Überschriften.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Überschriften und Absätze

Die meisten strukturierten Texte bestehen aus Überschriften und Absätzen, egal, ob Sie eine Geschichte, eine Zeitung, ein Lehrbuch oder eine Zeitschrift lesen.

![Ein Beispiel für das Titelblatt einer Zeitung, das die Verwendung einer Überschrift der obersten Ebene, Unterüberschriften und Absätze zeigt.](newspaper_small.jpg)

Strukturierte Inhalte machen das Leseerlebnis einfacher und angenehmer.

In HTML muss jeder Absatz in ein {{htmlelement("p")}}-Element eingeschlossen werden, so:

```html
<p>I am a paragraph, oh yes I am.</p>
```

Jede Überschrift muss in ein Überschriftselement eingeschlossen werden:

```html
<h1>I am the title of the story.</h1>
```

Es gibt sechs Überschriftselemente: {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}}, und {{htmlelement("Heading_Elements", "h6")}}. Jedes Element repräsentiert eine unterschiedliche Ebene im Dokument; `<h1>` repräsentiert die Hauptüberschrift, `<h2>` repräsentiert Unterüberschriften, `<h3>` repräsentiert Unterunterüberschriften, und so weiter.

## Umsetzung der strukturellen Hierarchie

In diesem Beispiel repräsentiert das `<h1>`-Element den Titel der Geschichte, die `<h2>`-Elemente repräsentieren den Titel jedes Kapitels, und die `<h3>`-Elemente repräsentieren Unterabschnitte jedes Kapitels:

```html
<h1>The Crushing Bore</h1>

<p>By Chris Mills</p>

<h2>Chapter 1: The dark night</h2>

<p>
  It was a dark night. Somewhere, an owl hooted. The rain lashed down on the…
</p>

<h2>Chapter 2: The eternal silence</h2>

<p>Our protagonist could not so much as a whisper out of the shadowy figure…</p>

<h3>The specter speaks</h3>

<p>
  Several more hours had passed, when all of a sudden the specter sat bolt
  upright and exclaimed, "Please have mercy on my soul!"
</p>
```

Es liegt wirklich an Ihnen, was die beteiligten Elemente darstellen, solange die Hierarchie Sinn macht. Sie müssen nur ein paar Best Practices beachten, wenn Sie solche Strukturen erstellen:

- Vorzugsweise sollten Sie ein einzelnes `<h1>` pro Seite verwenden—dies ist die Überschrift der obersten Ebene und alle anderen stehen in der Hierarchie darunter.
- Stellen Sie sicher, dass Sie die Überschriften in der richtigen Reihenfolge in der Hierarchie verwenden. Verwenden Sie keine `<h3>`-Elemente, um Unterüberschriften zu repräsentieren, gefolgt von `<h2>`-Elementen, um Unterunterüberschriften zu repräsentieren—das ergibt keinen Sinn und führt zu seltsamen Ergebnissen.
- Von den sechs verfügbaren Überschriftsebenen sollten Sie nicht mehr als drei pro Seite verwenden, es sei denn, Sie halten es für notwendig. Dokumente mit vielen Ebenen (zum Beispiel eine tiefe Überschriftenhierarchie) werden unhandlich und schwer zu navigieren. In solchen Fällen ist es ratsam, den Inhalt auf mehrere Seiten zu verteilen, wenn möglich.

## Warum brauchen wir Struktur?

Um diese Frage zu beantworten, schauen wir uns [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) an—ein schönes Hummus-Rezept. Der Körper dieses Dokuments enthält derzeit mehrere Inhaltsstücke. Sie sind in keiner Weise formatiert, aber sie sind durch Zeilenumbrüche getrennt (Enter/Return gedrückt, um zur nächsten Zeile zu gelangen).

Wenn Sie jedoch das Dokument in Ihrem Browser öffnen, werden Sie sehen, dass der Text als großer Block erscheint!

![Eine Webseite, die eine Wand aus unformatiertem Text zeigt, da es keine Elemente auf der Seite gibt, um sie zu strukturieren.](screen_shot_2017-03-29_at_09.20.35.png)

Das liegt daran, dass es keine Elemente gibt, die dem Inhalt Struktur geben, sodass der Browser nicht weiß, was eine Überschrift und was ein Absatz ist. Darüber hinaus:

- Benutzer, die sich eine Webseite ansehen, neigen dazu, schnell zu scannen, um relevante Inhalte zu finden, und lesen oft zunächst nur die Überschriften. (Wir verbringen normalerweise [nur sehr kurze Zeit auf einer Webseite](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/).) Wenn sie innerhalb weniger Sekunden nichts Nützliches sehen, werden sie wahrscheinlich frustriert sein und woanders hingehen.
- Suchmaschinen, die Ihre Seite indexieren, betrachten den Inhalt der Überschriften als wichtige Schlüsselwörter, die die Suchrankings der Seite beeinflussen. Ohne Überschriften wird Ihre Seite in Bezug auf {{Glossary("SEO", "SEO")}} (Search Engine Optimization) schlecht abschneiden.
- Stark sehbehinderte Menschen lesen oft keine Webseiten; sie hören sie stattdessen. Dies geschieht mit einer Software namens [Screen Reader](https://en.wikipedia.org/wiki/Screen_reader). Diese Software bietet Möglichkeiten, schnellen Zugriff auf bestimmte Textinhalte zu erhalten. Unter den verschiedenen verwendeten Techniken geben sie eine Gliederung des Dokuments, indem sie die Überschriften vorlesen, was ihren Benutzern ermöglicht, die benötigten Informationen schnell zu finden. Wenn Überschriften nicht vorhanden sind, sind sie gezwungen, das gesamte Dokument laut vorlesen zu lassen.
- Um Inhalte mit {{Glossary("CSS", "CSS")}} zu stylen oder sie mit {{Glossary("JavaScript", "JavaScript")}} interessante Dinge tun zu lassen, müssen Sie Elemente haben, die den relevanten Inhalt umschließen, sodass CSS/JavaScript ihn effektiv ansteuern kann.

Daher müssen wir unserem Inhalt strukturelles Markup geben.

## Dem Inhalt Struktur geben

Legen Sie gleich los und lösen Sie eine kleine Codeaufgabe, um Praxiserfahrung mit HTML-Überschriften und Absätzen zu sammeln:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Umschließen Sie den entsprechenden Text zu Beginn des Inhalts in einem `<h1>`-Element, um ihn in eine Hauptüberschrift zu verwandeln.
3. Es gibt zwei Wortpaare, die in `<h2>`-Elemente eingeschlossen werden sollten, um sie in Überschriften der zweiten Ebene zu verwandeln.
4. Umschließen Sie die verbleibenden Sätze in `<p>`-Elemente, um sie in Absätze zu verwandeln. Ein `<p>`-Element sollte unter jedem `<h2>`-Element stehen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit dem _Reset_-Button im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock einsehen.

```html live-sample___headings_paragraphs
Favorite body parts The brain Lovely shape and color. Also does thinkin' stuff.
The feet Knobbly and ugly, but useful for getting about.
```

{{ EmbedLiveSample('headings_paragraphs', "100%", 60) }}

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML-Element sollte so aussehen:

```html
<h1>Favorite body parts</h1>

<h2>The brain</h2>

<p>Lovely shape and color. Also does thinkin' stuff.</p>

<h2>The feet</h2>

<p>Knobbly and ugly, but useful for getting about.</p>
```

</details>

## Warum brauchen wir Semantik?

Semantik wird überall um uns herum verwendet—wir verlassen uns auf frühere Erfahrungen, um uns zu sagen, welche Funktion ein Alltagsgegenstand hat; wenn wir etwas sehen, wissen wir, welche Funktion es haben wird. So erwarten wir zum Beispiel, dass ein rotes Ampellicht „Stop“ bedeutet und ein grünes Ampellicht „Go“. Dinge können schnell kompliziert werden, wenn die falsche Semantik angewendet wird. (Verwendet irgendein Land Rot, um „Go“ zu bedeuten? Wir hoffen nicht.)

In ähnlicher Weise müssen wir sicherstellen, dass wir die richtigen Elemente verwenden und unseren Inhalten die korrekte Bedeutung, Funktion oder Erscheinung geben. In diesem Kontext ist das `{{htmlelement("Heading_Elements", "&lt;h1>")}}`-Element ebenfalls ein semantisches Element, das dem Text, den es umschließt, die Rolle (oder Bedeutung) einer „Überschrift der obersten Ebene auf Ihrer Seite“ gibt.

```html
<h1>This is a top level heading</h1>
```

Der Browser gibt ihm standardmäßig eine große Schriftgröße, um es wie eine Überschrift aussehen zu lassen (obwohl Sie es mit CSS so stylen könnten, dass es wie etwas anderes aussieht, was Sie möchten). Viel wichtiger ist, dass sein semantischer Wert auf verschiedene Weise genutzt wird, zum Beispiel von Suchmaschinen und Bildschirmlesern (wie oben erwähnt).

Andererseits könnten Sie jedes Element _wie_ eine Überschrift der obersten Ebene _aussehen_ lassen. Betrachten Sie das folgende Beispiel:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```

Dies ist ein {{htmlelement("span")}}-Element. Es hat keine Semantik. Sie verwenden es, um Inhalte zu umschließen, wenn Sie ihnen mit CSS ein Aussehen verleihen möchten (oder etwas mit JavaScript damit machen möchten), ohne ihnen eine zusätzliche Bedeutung zu geben. (Darüber erfahren Sie später im Kurs mehr.) Wir haben etwas CSS darauf angewendet, um es wie eine Überschrift der obersten Ebene aussehen zu lassen, aber da es keinen semantischen Wert hat, wird es keinen der oben beschriebenen zusätzlichen Vorteile einschließen. Es ist eine gute Idee, das relevante HTML-Element für die jeweilige Aufgabe zu verwenden.

## Zusammenfassung

Damit schließen wir unser Studium der HTML-Überschriften und Absätze ab. Als nächstes werden wir uns mit weiteren Aspekten von semantischem HTML beschäftigen: den Worten Nachdruck zu verleihen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}
