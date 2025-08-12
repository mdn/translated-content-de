---
title: "Testen Sie Ihre Fähigkeiten: Links"
short-title: Links
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Links
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu bewerten, ob Sie verstehen, wie man [Links in HTML implementiert](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links).

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

> [!NOTE]
> Einige der Links im Startcode für diese Aufgaben haben das `target="_blank"` Attribut gesetzt, sodass sie beim Anklicken versuchen, die verlinkte Seite in einem neuen Tab statt im selben Tab zu öffnen. Dies ist nicht strikt best practice, aber wir haben es hier getan, damit die Seiten nicht im MDN Playground Ausgabe-`<iframe>` geöffnet werden und Ihr Beispielcode dadurch verschwindet.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie helfen, die Links auf unserer Informationsseite über Wale zu ergänzen.

Um die Aufgabe abzuschließen, aktualisieren Sie die Links wie folgt:

1. Der erste Link sollte auf eine Seite namens `whales.html` verlinken, die sich im selben Verzeichnis wie die aktuelle Seite befindet.
2. Geben Sie ihm ein Tooltip, das bei Mouseover dem Benutzer sagt, dass die Seite Informationen über Blau- und Pottwale enthält.
3. Der zweite Link sollte in einen Link umgewandelt werden, den Sie anklicken können, um eine E-Mail in der Standardmailanwendung des Benutzers zu öffnen, wobei der Empfänger auf "whales\@example.com" gesetzt ist.
4. Bonuspunkte, wenn Sie es auch so einstellen, dass die Betreffzeile der E-Mail automatisch als "Question about Whales" ausgefüllt wird.

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
  background-color: white;
  color: #333333;
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

In dieser Aufgabe möchten wir, dass Sie die vier Links so ergänzen, dass sie an die richtigen Stellen verlinken.

Um die Aufgabe abzuschließen, aktualisieren Sie die Links wie folgt:

1. Der erste Link sollte auf ein Bild namens `blue-whale.jpg` verlinken, das sich in einem Verzeichnis namens `blue` innerhalb des aktuellen Verzeichnisses befindet.
2. Der zweite Link sollte auf ein Bild namens `narwhal.jpg` verlinken, das sich in einem Verzeichnis namens `narwhal` befindet, welches eine Verzeichnisebene oberhalb des aktuellen Verzeichnisses liegt.
3. Der dritte Link sollte zur UK Google Bildersuche verlinken. Die Basis-URL lautet `https://www.google.co.uk` und die Bildersuche befindet sich in einem Unterverzeichnis namens `imghp`.
4. Der vierte Link sollte auf den Absatz am Ende der aktuellen Seite verlinken. Dieser hat die ID `bottom`.

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
  background-color: white;
  color: #333333;
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

Die folgenden Links führen zu einer Infoseite über Narwale, einer Support-E-Mail-Adresse und einer PDF-Datei mit Informationen von 4 MB Größe.

Um die Aufgabe abzuschließen:

1. Nehmen Sie die vorhandenen Absätze mit schlecht geschriebenem Linktext und schreiben Sie sie so um, dass sie einen guten Linktext haben.
2. Fügen Sie jedem Link, der eine Warnung benötigt, eine Warnung hinzu.

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
  background-color: white;
  color: #333333;
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
