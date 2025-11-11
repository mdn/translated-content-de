---
title: "Testen Sie Ihre Fähigkeiten: HTML-Bilder"
short-title: "Test: Bilder"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Images
l10n:
  sourceCommit: 0c5ffb96e0bc78052597ce91fc25d44ced58ff94
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

Ziel dieses Fähigkeitentests ist es, Ihnen zu helfen, zu beurteilen, ob Sie [Bilder und wie sie in HTML eingebettet werden](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Verwendung von Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie ein Bild von Blaubeeren in die Seite einbetten.

Um die Aufgabe abzuschließen:

1. Fügen Sie den Pfad zum Bild in ein geeignetes Attribut ein, um es auf der Seite einzubetten. Das Bild heißt `blueberries.jpg`, und es ist unter dem Pfad `https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true` verfügbar.
2. Fügen Sie einigen alternativen Text in ein geeignetes Attribut ein, um das Bild zu beschreiben, für Personen, die es nicht sehen können.
3. Geben Sie dem `<img>`-Element ein `width`-Attribut von `400` und ein geeignetes `height`-Attribut, damit es im korrekten {{Glossary("aspect_ratio", "Seitenverhältnis")}} angezeigt wird und beim Laden kein Neurendering verursacht. Die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes beträgt 615 x 419 Pixel.

```html live-sample___images-1
<h1>Basic image embed</h1>

<img />

<p>You should see a picture of some blueberries above.</p>
```

<!-- Gemeinsamer/setup CSS-Code -->

```css hidden live-sample___images-1 live-sample___images-2 live-sample___images-3
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

* {
  box-sizing: border-box;
}

img {
  border: 1px solid black;
}
```

{{ EmbedLiveSample('images-1', "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html-nolint
<h1>Basic image embed</h1>

<img src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true"
     alt="blueberries" width="400" height="273" />

<p>You should see a picture of some blueberries above.</p>
```

Wir haben den richtigen `height`-Wert mit der Berechnung 400 x 419/615 ermittelt.

</details>

## Aufgabe 2

In dieser Aufgabe haben Sie bereits ein funktionsreiches Bild, aber wir möchten, dass Sie einen Tooltip hinzufügen, der angezeigt wird, wenn das Bild mit der Maus berührt wird. Sie sollten einige geeignete Informationen in den Tooltip einfügen.

```html live-sample___images-2
<h1>Basic image title</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/larch.jpg?raw=true"
  alt="Several tall evergreen trees called larches" />
```

{{ EmbedLiveSample('images-2', "100%", 600) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html-nolint
<h1>Basic image title</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/larch.jpg?raw=true"
  alt="Several tall evergreen trees called larches"
  title="And now, Number 1, The Larch" />
```

</details>

## Aufgabe 3

In dieser Aufgabe erhalten Sie sowohl ein funktionsreiches Bild als auch einen Bildunterschriftstext. Was Sie hier tun müssen, ist, Elemente hinzuzufügen, die das Bild mit der Bildunterschrift verknüpfen.

```html live-sample___images-3
<h1>Image and caption</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/firefox.png?raw=true"
  alt="An abstract flaming fox wrapping around a blue sphere"
  width="446"
  height="460" />
The 2019 Firefox logo
```

```css hidden live-sample___images-3
figcaption {
  font-style: italic;
}
```

{{ EmbedLiveSample('images-3', "100%", 600) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html
<h1>Image and caption</h1>

<figure>
  <img
    src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/firefox.png?raw=true"
    alt="An abstract flaming fox wrapping around a blue sphere"
    width="446"
    height="460" />
  <figcaption>The 2019 Firefox logo</figcaption>
</figure>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
