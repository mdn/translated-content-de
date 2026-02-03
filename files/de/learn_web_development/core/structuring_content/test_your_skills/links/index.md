---
title: "Testen Sie Ihre Fähigkeiten: Links"
short-title: "Test: Links"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Links
l10n:
  sourceCommit: 1cf3cb0fb22bf89c780fefe74c3db7f1b9e8ca09
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}

Ziel dieser Fähigkeitsprüfung ist es, Ihnen zu helfen zu beurteilen, ob Sie verstanden haben, wie man [Links in HTML implementiert](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links).

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Verwendung der Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

> [!NOTE]
> Einige der Links im Startcode für diese Aufgaben haben das Attribut `target="_blank"` gesetzt, so dass bei einem Klick darauf die verlinkte Seite in einem neuen Tab öffnet, anstatt im gleichen Tab. Dies ist nicht die streng beste Praxis, aber wir haben es hier so gemacht, damit die Seiten nicht im MDN Playground Ausgabe-`<iframe>` geöffnet werden und dadurch Ihr Beispielcode entfernt wird!

## Links 1

In dieser Aufgabe möchten wir, dass Sie uns helfen, die Links auf unserer Informationsseite über Wale zu vervollständigen.

Um die Aufgabe abzuschließen, aktualisieren Sie die Links wie folgt:

1. Der erste Link sollte mit einer Seite namens `whales.html` verlinkt werden, die im gleichen Verzeichnis wie die aktuelle Seite liegt.
2. Geben Sie ihm ein Tooltip, das dem Benutzer bei Hover anzeigt, dass die Seite Informationen über Blauwale und Pottwale enthält.
3. Der zweite Link sollte in einen Link umgewandelt werden, auf den Sie klicken können, um eine E-Mail in der Standard-Mailanwendung des Benutzers zu öffnen, mit dem Empfänger "whales\@example.com".
4. Bonuspunkte, wenn Sie es auch so einstellen, dass die Betreffzeile der E-Mail automatisch mit "Frage zu Walen" ausgefüllt wird.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('links-1', "100%", 170) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

```css hidden live-sample___links-1 live-sample___links-1-finished
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
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

Der aktualisierte Inhalt sollte folgendermaßen aussehen:

{{ EmbedLiveSample('links-1-finished', "100%", 170) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

```html-nolint live-sample___links-1-finished
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

## Links 2

In dieser Aufgabe möchten wir, dass Sie die vier Links ausfüllen, sodass sie an die entsprechenden Stellen verlinken.

Um die Aufgabe abzuschließen, aktualisieren Sie die Links wie folgt:

1. Der erste Link sollte zu einem Bild namens `blue-whale.jpg` verlinken, das sich in einem Verzeichnis namens `blue` innerhalb des aktuellen Verzeichnisses befindet.
2. Der zweite Link sollte zu einem Bild namens `narwhal.jpg` verlinken, das sich in einem Verzeichnis namens `narwhal` befindet, welches sich eine Verzeichnisebene über dem aktuellen Verzeichnis befindet.
3. Der dritte Link sollte zur UK-Google-Bildersuche verlinken. Die Basis-URL ist `https://www.google.co.uk`, und die Bildersuche befindet sich in einem Unterverzeichnis namens `imghp`.
4. Der vierte Link sollte zu dem Absatz am Ende der aktuellen Seite verlinken. Dieser hat die ID `bottom`.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('links-2', "100%", 200) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

```css hidden live-sample___links-2 live-sample___links-2-finished
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
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

Der aktualisierte Inhalt sollte folgendermaßen aussehen:

{{ EmbedLiveSample('links-2-finished', "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

```html-nolint live-sample___links-2-finished
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

## Links 3

Die folgenden Links verweisen auf eine Informationsseite über Narwale, eine Support-E-Mail-Adresse und eine 4MB große PDF-Datei mit Fakten.

Um die Aufgabe abzuschließen:

1. Nehmen Sie die vorhandenen Absätze mit schlecht geschriebenem Linktext und schreiben Sie sie so um, dass sie guten Linktext haben.
2. Fügen Sie eine Warnung zu allen Links hinzu, die eine Warnung benötigen.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('links-3', "100%", 200) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
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

Wir haben keine abgeschlossene Inhaltserstellung für diese Aufgabe bereitgestellt, da dies die Lösung verraten würde.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

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

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}
