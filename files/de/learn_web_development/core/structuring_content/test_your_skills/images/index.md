---
title: "Testen Sie Ihre Fähigkeiten: HTML-Bilder"
short-title: "Test: Bilder"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Images
l10n:
  sourceCommit: 1cf3cb0fb22bf89c780fefe74c3db7f1b9e8ca09
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, einzuschätzen, ob Sie [Bilder und deren Einbettung in HTML](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Nutzungsleitfaden. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Bilder 1

In dieser Aufgabe sollen Sie ein Bild von einigen Blaubeeren in die Seite einbetten.

Um die Aufgabe abzuschließen:

1. Fügen Sie den Pfad zum Bild in ein geeignetes Attribut ein, um es in die Seite einzubetten. Das Bild heißt `blueberries.jpg` und ist verfügbar unter dem Pfad `https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true`.
2. Fügen Sie einen alternativen Text in ein geeignetes Attribut ein, um das Bild für Personen zu beschreiben, die es nicht sehen können.
3. Geben Sie dem `<img>`-Element ein `width`-Attribut von `400` und ein geeignetes `height`-Attribut, damit es im korrekten {{Glossary("aspect_ratio", "Seitenverhältnis")}} angezeigt wird und beim Laden kein erneutes Rendern verursacht. Die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes ist 615 x 419 Pixel.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('images-1', "100%", 200) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___images-1
<h1>Basic image embed</h1>

<img />

<p>You should see a picture of some blueberries above.</p>
```

<!-- Gemeinsamer/setup CSS-Code -->

```css hidden live-sample___images-1 live-sample___images-2 live-sample___images-3 live-sample___images-1-finished live-sample___images-2-finished live-sample___images-3-finished
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

Der aktualisierte Inhalt sollte so aussehen:

{{ EmbedLiveSample('images-1-finished', "100%", 460) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

```html-nolint live-sample___images-1-finished
<h1>Basic image embed</h1>

<img src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true"
     alt="blueberries" width="400" height="273" />

<p>You should see a picture of some blueberries above.</p>
```

Wir haben den korrekten `height`-Wert mit der Berechnung 400 x 419/615 ermittelt.

</details>

## Bilder 2

In dieser Aufgabe haben Sie bereits ein voll ausgestattetes Bild, aber wir möchten, dass Sie einen Tooltip hinzufügen, der erscheint, wenn das Bild mit der Maus überfahren wird. Sie sollten einige geeignete Informationen in den Tooltip einfügen.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('images-2', "100%", 600) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___images-2
<h1>Basic image title</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/larch.jpg?raw=true"
  alt="Several tall evergreen trees called larches" />
```

Wir haben keinen fertigen Inhalt für diese Aufgabe bereitgestellt, da er genauso aussieht wie der Ausgangspunkt.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

```html-nolint live-sample___images-2-finished
<h1>Basic image title</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/larch.jpg?raw=true"
  alt="Several tall evergreen trees called larches"
  title="And now, Number 1, The Larch" />
```

</details>

## Bilder 3

In dieser Aufgabe wird Ihnen sowohl ein voll ausgestattetes Bild als auch etwas Beschriftungstext zur Verfügung gestellt. Was Sie hier tun müssen, ist, Elemente hinzuzufügen, die das Bild mit der Beschriftung verbinden.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('images-3', "100%", 600) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___images-3
<h1>Image and caption</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/firefox.png?raw=true"
  alt="An abstract flaming fox wrapping around a blue sphere"
  width="446"
  height="460" />
The 2019 Firefox logo
```

```css hidden live-sample___images-3 live-sample___images-3-finished
figcaption {
  font-style: italic;
}
```

Der aktualisierte Inhalt sollte so aussehen:

{{ EmbedLiveSample('images-3-finished', "100%", 640) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

```html live-sample___images-3-finished
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
