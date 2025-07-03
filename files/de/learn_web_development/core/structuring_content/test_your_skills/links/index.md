---
title: "Testen Sie Ihre Fähigkeiten: Links"
short-title: Links
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Links
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Ziel dieses Tests ist es, zu beurteilen, ob Sie verstehen, wie man [Links in HTML implementiert](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links).

> [!NOTE]
> Sie können Lösungen im MDN Playground oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
>
> Wenn Sie feststecken, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie die Links auf unserer Informationsseite über Wale ergänzen. Um die Aufgabe zu vervollständigen:

- Der erste Link sollte auf eine Seite namens `whales.html` verweisen, die sich im selben Verzeichnis wie die aktuelle Seite befindet.
- Wir möchten außerdem, dass er einen Tooltip hat, der dem Benutzer beim Überfahren mit der Maus mitteilt, dass die Seite Informationen über Blauwale und Pottwale enthält.
- Der zweite Link sollte in einen Link umgewandelt werden, den der Benutzer anklicken kann, um eine E-Mail in der Standard-Mail-Anwendung zu öffnen, wobei der Empfänger auf „whales\@example.com“ gesetzt ist.
- Bonuspunkte gibt es, wenn Sie es auch so einstellen, dass die Betreffzeile der E-Mail automatisch als „Frage zu Walen“ ausgefüllt wird.

> [!NOTE]
> Die Links im Startcode haben das Attribut `target="_blank"`, sodass sie beim Anklicken die verlinkte Seite in einem neuen Tab öffnen. Das ist nicht unbedingt best practice, aber wir haben es hier so gemacht, damit die Seiten nicht im MDN Playground-Ausgabe-`<iframe>` geöffnet werden und Ihr Beispielcode damit verloren geht!

Um zu beginnen, können Sie auf **"Play"** im untenstehenden Codeblock klicken, um das Beispiel im MDN Playground zu bearbeiten, oder Sie [laden den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links1-download.html) und arbeiten lokal in Ihrem eigenen Editor.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_ Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung am Ende des Abschnitts einsehen.

```html live-sample___links-1
<h1>Information on Whales</h1>

<p>
  For more information on our conservation activities and which Whales we study,
  see our <a target="_blank">Whales page</a>.
</p>

<p>
  If you want to ask our team more questions, feel free to
  <a target="_blank">email us</a>.
</p>
```

```css hidden live-sample___links-1
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

h1 {
  font-size: 2rem;
  margin: 0;
  color: purple;
}

p {
  color: gray;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}
```

{{ EmbedLiveSample('links-1', "100%", 170) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html-nolint
<h1>Information on Whales</h1>

<p>
  For more information on our conservation activities and which Whales we study,
  see our <a target="_blank" href="whales.html" title="Includes information on Blue Whales and Sperm Whales">
  Whales page</a>.
</p>

<p>
  If you want to ask our team more questions, feel free to
  <a target="_blank" href="mailto:whales@example.com?subject=Question%20about%20Whales">
  email us</a>.
</p>
```

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie die vier Links so ausfüllen, dass sie zu den entsprechenden Orten verlinken. Um die Aufgabe zu vervollständigen:

- Der erste Link sollte auf ein Bild namens `blue-whale.jpg` verlinken, das sich in einem Verzeichnis namens `blue` im aktuellen Verzeichnis befindet.
- Der zweite Link sollte auf ein Bild namens `narwhal.jpg` verlinken, das sich in einem Verzeichnis namens `narwhal`, welches sich eine Verzeichnisebene oberhalb des aktuellen Verzeichnisses befindet.
- Der dritte Link sollte auf die UK Google Bildersuche verlinken. Die Basis-URL ist `https://www.google.co.uk`, und die Bildersuche befindet sich in einem Unterverzeichnis namens `imghp`.
- Der vierte Link sollte zu dem Absatz am Ende der aktuellen Seite verlinken. Dieser hat die ID `bottom`.

> [!NOTE]
> Die ersten drei Links im Beispiel haben das Attribut `target="_blank"`, sodass sie beim Anklicken die verlinkte Seite in einem neuen Tab öffnen. Das ist nicht unbedingt best practice, aber wir haben es hier so gemacht, damit die Seiten nicht im MDN Playground-Ausgabe-`<iframe>` geöffnet werden und Ihr Beispielcode damit verloren geht!

Um zu beginnen, können Sie auf **"Play"** im untenstehenden Codeblock klicken, um das Beispiel im MDN Playground zu bearbeiten, oder Sie [laden den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links2-download.html) und arbeiten lokal in Ihrem eigenen Editor.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_ Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung am Ende des Abschnitts einsehen.

```html live-sample___links-2
<h1>List path tests</h1>

<ul>
  <li><a target="_blank">Link me to the blue whale image</a></li>
  <li><a target="_blank">Link me to the narwhal image</a></li>
  <li><a target="_blank">Link me to Google image search</a></li>
  <li><a>Link me to the paragraph at the bottom of the page</a></li>
</ul>

<div></div>

<p id="bottom">The bottom of the page!</p>
```

```css hidden live-sample___links-2
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

h1 {
  font-size: 2rem;
  margin: 0;
  color: purple;
}

li {
  color: gray;
  margin: 0.5em 0;
}

div {
  height: 600px;
}
```

{{ EmbedLiveSample('links-2', "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html-nolint
<h1>List path tests</h1>

<ul>
  <li><a target="_blank" href="blue/blue-whale.jpg">
    Link me to the blue whale image
  </a></li>
  <li><a target="_blank" href="../narwhal/narwhal.jpg">
    Link me to the narwhal image
  </a></li>
  <li><a target="_blank" href="https://www.google.co.uk/imghp">
    Link me to Google image search
  </a></li>
  <li><a href="#bottom">
    Link me to the paragraph at the bottom of the page
  </a></li>
</ul>

<div></div>

<p id="bottom">The bottom of the page!</p>
```

</details>

## Aufgabe 3

Die folgenden Links verweisen auf eine Info-Seite über Narwale, eine Support-E-Mail-Adresse und ein PDF-Datenblatt, das 4MB groß ist. In dieser Aufgabe möchten wir, dass Sie:

- Die bestehenden Absätze mit schlecht geschriebenen Linktexten nehmen und sie so umschreiben, dass sie guten Linktext haben.
- Eine Warnung zu Links hinzufügen, die einer Warnung bedürfen.

> [!NOTE]
> Der erste und dritte Link im Beispiel haben das Attribut `target="_blank"`, sodass sie beim Anklicken die verlinkte Seite in einem neuen Tab öffnen. Das ist nicht unbedingt best practice, aber wir haben es hier so gemacht, damit die Seiten nicht im MDN Playground-Ausgabe-`<iframe>` geöffnet werden und Ihr Beispielcode damit verloren geht!

Um zu beginnen, können Sie auf **"Play"** im untenstehenden Codeblock klicken, um das Beispiel im MDN Playground zu bearbeiten, oder Sie [laden den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links3-download.html) und arbeiten lokal in Ihrem eigenen Editor.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_ Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung am Ende des Abschnitts einsehen.

```html live-sample___links-3
<p>
  We do lots of work with Narwhals. To find out more about this work,
  <a href="narwhals.html" target="_blank">click here</a>.
</p>

<p>
  You can email our support team if you have any more questions —
  <a href="mailto:whales@example.com">click here</a> to do so.
</p>

<p>
  You can also <a href="factfile.pdf" target="_blank">click here</a> to download
  our factfile, which contains lots more information, including an FAQ.
</p>
```

```css hidden live-sample___links-3
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

p {
  color: gray;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}
```

{{ EmbedLiveSample('links-3', "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html-nolint
<p>
  We do lots of work with Narwhals. <a href="narwhals.html" target="_blank">Find out more about this work</a>.
</p>

<p>
  You can <a href="mailto:whales@example.com">email our support team</a> if you have any more questions.
</p>

<p>
  You can also <a href="factfile.pdf" target="_blank">download
  our factfile</a> (PDF, 4MB), which contains lots more information, including an FAQ.
</p>
```

</details>
