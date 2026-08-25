---
title: Überschriften und Absätze
slug: Learn_web_development/Core/Structuring_content/Headings_and_paragraphs
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}

Eine der Hauptaufgaben von HTML besteht darin, Text so zu strukturieren, dass ein Browser ein HTML-Dokument so anzeigen kann, wie es der Entwickler beabsichtigt. Dieser Artikel erklärt, wie {{Glossary("HTML", "HTML")}} verwendet werden kann, um grundlegende Seitenstrukturen zu definieren, indem Überschriften und Absätze festgelegt werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wie man eine gute Dokumentstruktur mit Überschriften und untergeordnetem Inhalt erstellt.</li>
          <li>Die Verwendung von semantischem HTML statt präsentationellem HTML und warum dies wichtig ist.</li>
          <li>Die Notwendigkeit, Überschriftenebenen logisch zu verwenden, d.h. keine Ebenen zu überspringen oder sie willkürlich zu nutzen, um eine bestimmte Schriftgröße zu erreichen (dafür ist CSS zuständig).</li>
          <li>SEO-Vorteile: Zum Beispiel werden Schlüsselwörter in Überschriften hervorgehoben.</li>
          <li>Barrierefreiheitsvorteile: Assistive Technologien (AT) wie Bildschirmleser verwenden Überschriften (und andere Orientierungspunkte) als Wegweiser zur Navigation durch den Inhalt. HTML-Dokumente sind für AT-Nutzer sehr schwierig zu verwenden, wenn keine Überschriften vorhanden sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Überschriften und Absätze

Die meisten strukturierten Texte bestehen aus Überschriften und Absätzen, egal ob Sie eine Geschichte, eine Zeitung, ein College-Lehrbuch oder eine Zeitschrift lesen.

![Ein Beispiel für das Titelblatt einer Zeitung, das die Verwendung einer Hauptüberschrift, von Unterüberschriften und Absätzen zeigt.](newspaper_small.jpg)

Strukturierter Inhalt macht das Leseerlebnis einfacher und angenehmer.

In HTML muss jeder Absatz in einem {{htmlelement("p")}}-Element eingeschlossen sein, wie folgt:

```html
<p>I am a paragraph, oh yes I am.</p>
```

Jede Überschrift muss in einem Überschriftselement eingeschlossen sein:

```html
<h1>I am the title of the story.</h1>
```

Es gibt sechs Überschriftselemente: {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}} und {{htmlelement("Heading_Elements", "h6")}}. Jedes Element stellt eine andere Ebene des Inhalts im Dokument dar; `<h1>` repräsentiert die Hauptüberschrift, `<h2>` repräsentiert Unterüberschriften, `<h3>` repräsentiert Unter-Unterüberschriften und so weiter.

## Umsetzung der strukturellen Hierarchie

Zum Beispiel repräsentiert im Folgenden das `<h1>`-Element den Titel der Geschichte, die `<h2>`-Elemente repräsentieren die Titel der einzelnen Kapitel, und die `<h3>`-Elemente repräsentieren die Unterabschnitte jedes Kapitels:

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

Es liegt wirklich an Ihnen, was die beteiligten Elemente darstellen, solange die Hierarchie Sinn ergibt. Sie müssen nur ein paar bewährte Praktiken im Auge behalten, während Sie solche Strukturen erstellen:

- Vorzugsweise sollten Sie eine einzelne `<h1>` pro Seite verwenden—dies ist die oberste Ebene der Überschrift, und alle anderen stehen darunter in der Hierarchie.
- Stellen Sie sicher, dass Sie die Überschriften in der richtigen Reihenfolge in der Hierarchie verwenden. Verwenden Sie keine `<h3>`-Elemente, um Unterüberschriften darzustellen, gefolgt von `<h2>`-Elementen, um Unter-Unterüberschriften darzustellen—das ergibt keinen Sinn und führt zu seltsamen Ergebnissen.
- Von den sechs verfügbaren Überschriftsebenen sollten Sie nicht mehr als drei pro Seite verwenden, es sei denn, Sie halten es für notwendig. Dokumente mit vielen Ebenen (zum Beispiel eine tiefe Überschriftenhierarchie) werden unhandlich und schwer navigierbar. In solchen Fällen ist es ratsam, den Inhalt über mehrere Seiten zu verteilen, wenn möglich.

## Warum benötigen wir Struktur?

Um diese Frage zu beantworten, werfen wir einen Blick auf [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html)—ein schönes Rezept für Hummus. Der Body dieses Dokuments enthält derzeit mehrere Inhaltsstücke. Sie sind in keiner Weise markiert, sondern nur durch Zeilenumbrüche getrennt (Enter/Return gedrückt, um zur nächsten Zeile zu wechseln).

Wenn Sie das Dokument jedoch [in Ihrem Browser öffnen](https://mdn.github.io/learning-area/html/introduction-to-html/html-text-formatting/text-start.html), sehen Sie, dass der Text als großer Block erscheint!

![Eine Webseite, die eine Wand von unformatiertem Text zeigt, weil keine Elemente auf der Seite vorhanden sind, um sie zu strukturieren.](screen_shot_2017-03-29_at_09.20.35.png)

Dies liegt daran, dass keine Elemente vorhanden sind, um dem Inhalt Struktur zu geben, sodass der Browser nicht weiß, was eine Überschrift und was ein Absatz ist. Darüber hinaus:

- Nutzer, die sich eine Webseite ansehen, tendieren dazu, schnell zu scannen, um relevanten Inhalt zu finden, oft lesen sie zunächst nur die Überschriften. (Normalerweise [verbringen wir sehr wenig Zeit auf einer Webseite](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/).) Wenn sie innerhalb weniger Sekunden nichts Brauchbares sehen, werden sie wahrscheinlich frustriert und gehen woanders hin.
- Suchmaschinen, die Ihre Seite indexieren, betrachten den Inhalt von Überschriften als wichtige Schlüsselwörter, um das Suchranking der Seite zu beeinflussen. Ohne Überschriften wird Ihre Seite im Hinblick auf {{Glossary("SEO", "SEO")}} (Search Engine Optimization) schlecht abschneiden.
- Menschen mit starker Sehbehinderung lesen Webseiten oft nicht; sie hören sie stattdessen. Dies geschieht mit Hilfe einer Software, die als [Bildschirmleser](https://en.wikipedia.org/wiki/Screen_reader) bezeichnet wird. Diese Software bietet Möglichkeiten, schnell auf bestimmte Textinhalte zuzugreifen. Unter den verschiedenen verwendeten Techniken bieten sie eine Gliederung des Dokuments, indem sie die Überschriften vorlesen, sodass ihre Nutzer die benötigten Informationen schnell finden können. Wenn Überschriften nicht verfügbar sind, sind sie gezwungen, sich das ganze Dokument vorlesen zu lassen.
- Um Inhalt mit {{Glossary("CSS", "CSS")}} zu gestalten oder mit {{Glossary("JavaScript", "JavaScript")}} interessante Dinge zu machen, müssen Sie Elemente haben, die den relevanten Inhalt umschließen, damit CSS/JavaScript ihn effektiv ansprechen kann.

Deshalb müssen wir unserem Inhalt strukturelles Markup geben.

## Dem Inhalt Struktur geben

Lassen Sie uns direkt einsteigen und Sie eine kleine Code-Herausforderung lösen, um Übung mit HTML-Überschriften und -Absätzen zu erhalten:

1. Klicken Sie auf **„Play“** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Umschließen Sie den geeigneten Text am Anfang des Inhalts in einem `<h1>`-Element, um ihn in eine Hauptüberschrift zu verwandeln.
3. Es gibt zwei Wortpaare, die in `<h2>`-Elemente eingeschlossen werden sollten, um sie in Überschriften der zweiten Ebene umzuwandeln.
4. Umschließen Sie die verbleibenden Sätze in `<p>`-Elemente, um sie in Absätze zu verwandeln. Ein `<p>`-Element sollte unter jedem `<h2>`-Element stehen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche "_Reset_" im MDN Playground löschen. Wenn Sie wirklich festsitzen, können Sie die Lösung unterhalb des Codeblocks ansehen.

```html live-sample___headings_paragraphs
Favorite body parts The brain Lovely shape and color. Also does thinkin' stuff.
The feet Knobbly and ugly, but useful for getting about.
```

{{ EmbedLiveSample('headings_paragraphs', "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML-Element sollte folgendermaßen aussehen:

```html
<h1>Favorite body parts</h1>

<h2>The brain</h2>

<p>Lovely shape and color. Also does thinkin' stuff.</p>

<h2>The feet</h2>

<p>Knobbly and ugly, but useful for getting about.</p>
```

</details>

## Warum brauchen wir Semantik?

Semantik wird überall um uns herum benötigt—wir verlassen uns auf frühere Erfahrungen, um zu erkennen, welche Funktion ein Alltagsobjekt hat; wenn wir etwas sehen, wissen wir, welche Funktion es haben wird. So erwarten wir beispielsweise, dass ein rotes Licht bedeutet „Stopp“ und ein grünes Licht „Los“. Wenn die falschen Semantiken angewendet werden, kann es sehr schnell kompliziert werden. (Verwendet irgendein Land Rot, um „Los“ zu bedeuten? Hoffentlich nicht.)

In ähnlicher Weise müssen wir sicherstellen, dass wir die richtigen Elemente verwenden und unserem Inhalt die richtige Bedeutung, Funktion oder Erscheinung geben. In diesem Zusammenhang ist das `{{htmlelement("Heading_Elements", "&lt;h1>")}}`-Element auch ein semantisches Element, das dem Text, den es umschließt, die Rolle (oder Bedeutung) „eine Top-Level-Überschrift auf Ihrer Seite“ gibt.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig gibt der Browser diesem eine große Schriftgröße, um es wie eine Überschrift aussehen zu lassen (obwohl Sie es mit CSS so gestalten könnten, wie Sie wollten). Wichtiger ist, dass sein semantischer Wert auf mehrere Weisen genutzt wird, zum Beispiel von Suchmaschinen und Bildschirmlesern (wie oben erwähnt).

Andererseits könnten Sie jedes Element _wie_ eine Top-Level-Überschrift _aussehen_ lassen. Betrachten Sie folgendes:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```

Dies ist ein {{htmlelement("span")}}-Element. Es hat keine Semantik. Sie verwenden es, um Inhalt einzuschließen, wenn Sie CSS darauf anwenden möchten (oder mit JavaScript etwas damit tun), ohne ihm eine zusätzliche Bedeutung zu geben. (Sie werden später im Kurs mehr darüber erfahren.) Wir haben etwas CSS darauf angewendet, um es wie eine Top-Level-Überschrift aussehen zu lassen, aber da es keinen semantischen Wert hat, erhält es keine der oben beschriebenen zusätzlichen Vorteile. Es ist ratsam, das relevante HTML-Element für die jeweilige Aufgabe zu verwenden.

## Zusammenfassung

Dies schließt unsere Studie über HTML-Überschriften und Absätze ab. Als Nächstes werden wir uns mit weiteren Aspekten von semantischem HTML beschäftigen: die Hervorhebung von Wörtern.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}
