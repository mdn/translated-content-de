---
title: "Testen Sie Ihre Fähigkeiten: Links"
short-title: Links
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Links
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Das Ziel dieses Tests ist es, Ihnen zu helfen, zu beurteilen, ob Sie verstehen, wie man [Links in HTML implementiert](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links).

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden zur Nutzung von Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

> [!NOTE]
> Einige der Links im Ausgangscode für diese Aufgaben haben das Attribut `target="_blank"` gesetzt, sodass sie versuchen, die verlinkte Seite in einem neuen Tab zu öffnen, anstatt im selben Tab. Dies ist nicht strikt die beste Praxis, aber wir haben es hier gemacht, damit die Seiten nicht im `<iframe>` der MDN Playground-Ausgabe geöffnet werden, wodurch Ihr Beispielcode verloren geht!

## Aufgabe 1

Bei dieser Aufgabe möchten wir, dass Sie die Links auf unserer Informationsseite über Wale ergänzen.

Um die Aufgabe zu erfüllen, aktualisieren Sie die Links wie folgt:

1. Der erste Link sollte zu einer Seite namens `whales.html` verlinken, die sich im gleichen Verzeichnis wie die aktuelle Seite befindet.
2. Geben Sie ihm einen Tooltip, der bei Überfahren mit der Maus dem Benutzer mitteilt, dass die Seite Informationen über Blauwale und Pottwale enthält.
3. Der zweite Link sollte so geändert werden, dass er ein Klick ermöglicht, um eine E-Mail im Standard-Mailprogramm des Benutzers zu öffnen, wobei der Empfänger auf "whales\@example.com" gesetzt ist.
4. Bonuspunkte, wenn Sie auch einstellen, dass die Betreffzeile der E-Mail automatisch mit "Frage zu Walen" ausgefüllt wird.

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
<summary>Klicken Sie hier, um die Lösung zu sehen</summary>

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

In dieser Aufgabe möchten wir, dass Sie die vier Links so ergänzen, dass sie zu den entsprechenden Orten führen.

Um die Aufgabe zu erfüllen, aktualisieren Sie die Links wie folgt:

1. Der erste Link sollte auf ein Bild namens `blue-whale.jpg` verlinken, das sich in einem Verzeichnis namens `blue` im aktuellen Verzeichnis befindet.
2. Der zweite Link sollte auf ein Bild namens `narwhal.jpg` verlinken, das sich in einem Verzeichnis namens `narwhal` befindet, das eine Verzeichnisebene über dem aktuellen Verzeichnis liegt.
3. Der dritte Link sollte zur UK Google Bildersuche verlinken. Die Basis-URL ist `https://www.google.co.uk`, und die Bildersuche befindet sich in einem Unterverzeichnis namens `imghp`.
4. Der vierte Link sollte zum Absatz ganz unten auf der aktuellen Seite verlinken. Er hat die ID `bottom`.

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
<summary>Klicken Sie hier, um die Lösung zu sehen</summary>

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

Die folgenden Links verweisen auf eine Informationsseite über Narwale, eine Support-E-Mail-Adresse und ein PDF-Datenblatt, das 4MB groß ist.

Um die Aufgabe zu erfüllen:

1. Nehmen Sie die vorhandenen Absätze mit schlecht geschriebenem Linktext und schreiben Sie sie so um, dass sie guten Linktext haben.
2. Fügen Sie eine Warnung für alle Links hinzu, die eine Warnung benötigen.

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
<summary>Klicken Sie hier, um die Lösung zu sehen</summary>

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
