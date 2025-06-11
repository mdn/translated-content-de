---
title: "Testen Sie Ihre Fähigkeiten: Links"
short-title: Links
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Links
l10n:
  sourceCommit: a53950c7d4faad58184e06f0da370e685742a695
---

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie verstehen, wie man [Links in HTML implementiert](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links).

> [!NOTE]
> Sie können Lösungen im MDN Playground oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie helfen, die Links auf unserer Informationsseite über Wale zu ergänzen. Um die Aufgabe abzuschließen:

- Der erste Link sollte zu einer Seite namens `whales.html` führen, die sich im selben Verzeichnis wie die aktuelle Seite befindet.
- Wir hätten auch gerne, dass der Link einen Tooltip anzeigt, der dem Benutzer beim Überfahren mit der Maus sagt, dass die Seite Informationen zu Blau- und Pottwalen enthält.
- Der zweite Link sollte so gestaltet sein, dass er durch Klicken eine E-Mail in der Standard-Mail-Anwendung des Benutzers öffnet, wobei der Empfänger auf "whales\@example.com" gesetzt ist.
- Bonuspunkte gibt es, wenn Sie auch festlegen, dass die Betreffzeile der E-Mail automatisch als "Question about Whales" ausgefüllt wird.

> [!NOTE]
> Die Links im Ausgangscode haben das Attribut `target="_blank"` gesetzt, sodass sie beim Anklicken die verlinkte Seite in einem neuen Tab öffnen. Das ist nicht unbedingt best practice, aber wir haben es hier gemacht, damit die Seiten nicht im MDN Playground-Ausgabe-`<iframe>` geöffnet werden, was Ihren Beispielcode löschen würde!

Um loszulegen, können Sie auf **"Play"** im Codeblock unten klicken, um das Beispiel im MDN Playground zu bearbeiten, oder den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links1-download.html) und lokal in Ihrem eigenen Editor arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung am Ende des Abschnitts anzeigen.

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
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

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

In dieser Aufgabe möchten wir, dass Sie die vier Links ausfüllen, damit sie zu den entsprechenden Zielen führen. Um die Aufgabe abzuschließen:

- Der erste Link sollte zu einem Bild namens `blue-whale.jpg` führen, das sich in einem Verzeichnis namens `blue` im aktuellen Verzeichnis befindet.
- Der zweite Link sollte zu einem Bild namens `narwhal.jpg` führen, das sich in einem Verzeichnis namens `narwhal` befindet, das sich eine Verzeichnisebene über dem aktuellen Verzeichnis befindet.
- Der dritte Link sollte zur UK Google-Bildersuche führen. Die Basis-URL ist `https://www.google.co.uk`, und die Bildersuche befindet sich in einem Unterverzeichnis namens `imghp`.
- Der vierte Link sollte zum Absatz ganz unten auf der aktuellen Seite führen. Er hat die ID `bottom`.

> [!NOTE]
> Die ersten drei Links im Beispiel haben das Attribut `target="_blank"` gesetzt, sodass sie beim Anklicken die verlinkte Seite in einem neuen Tab öffnen. Das ist nicht unbedingt best practice, aber wir haben es hier gemacht, damit die Seiten nicht im MDN Playground-Ausgabe-`<iframe>` geöffnet werden, was Ihren Beispielcode löschen würde!

Um loszulegen, können Sie auf **"Play"** im Codeblock unten klicken, um das Beispiel im MDN Playground zu bearbeiten, oder den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links2-download.html) und lokal in Ihrem eigenen Editor arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung am Ende des Abschnitts anzeigen.

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
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

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

Die folgenden Links führen zu einer Informationsseite über Narwale, einer Support-E-Mail-Adresse, und einer PDF-Datei, die 4MB groß ist. In dieser Aufgabe möchten wir, dass Sie:

- Die vorhandenen Absätze mit schlecht geschriebenem Linktext nehmen und sie so umschreiben, dass sie guten Linktext haben.
- Eine Warnung zu Links hinzufügen, die eine Warnung benötigen.

> [!NOTE]
> Die ersten und dritten Links im Beispiel haben das Attribut `target="_blank"` gesetzt, sodass sie beim Anklicken die verlinkte Seite in einem neuen Tab öffnen. Das ist nicht unbedingt best practice, aber wir haben es hier gemacht, damit die Seiten nicht im MDN Playground-Ausgabe-`<iframe>` geöffnet werden, was Ihren Beispielcode löschen würde!

Um loszulegen, können Sie auf **"Play"** im Codeblock unten klicken, um das Beispiel im MDN Playground zu bearbeiten, oder den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links3-download.html) und lokal in Ihrem eigenen Editor arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung am Ende des Abschnitts anzeigen.

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
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

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
