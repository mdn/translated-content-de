---
title: "Testen Sie Ihre Fähigkeiten: HTML-Bilder"
short-title: Images
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Images
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie [Bilder und wie man sie in HTML einbettet](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Nutzung der Fähigkeitstests](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe sollen Sie ein Bild von einigen Blaubeeren in die Seite einbetten.

Um die Aufgabe zu erledigen:

1. Fügen Sie den Pfad des Bildes zu einem geeigneten Attribut hinzu, um es auf der Seite einzubetten. Das Bild heißt `blueberries.jpg` und ist unter dem Pfad `https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true` verfügbar.
2. Fügen Sie einen alternativen Text zu einem geeigneten Attribut hinzu, um das Bild für Personen zu beschreiben, die es nicht sehen können.
3. Geben Sie dem `<img>`-Element eine geeignete `width`, damit es im korrekten {{Glossary("aspect_ratio", "Seitenverhältnis")}} angezeigt wird und genug Platz auf der Seite ist, um es darzustellen. Die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes beträgt 615 x 419 Pixel.

```html live-sample___images-1
<h1>Basic image embed</h1>

<img />
```

<!-- Gemeinsamer/Setup-CSS-Code -->

```css hidden live-sample___images-1 live-sample___images-2 live-sample___images-3
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

* {
  box-sizing: border-box;
}

img {
  border: 1px solid black;
}
```

{{ EmbedLiveSample('images-1', "100%", 150) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html-nolint
<h1>Basic image embed</h1>

<img src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true"
     alt="A pile of small blue berries"
     width="400" />
```

</details>

## Aufgabe 2

In dieser Aufgabe haben Sie bereits ein voll funktionsfähiges Bild, aber wir möchten, dass Sie einen Tooltip hinzufügen, der angezeigt wird, wenn das Bild mit der Maus berührt wird. Sie sollten einige geeignete Informationen in den Tooltip einfügen.

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

In dieser Aufgabe erhalten Sie sowohl ein voll funktionsfähiges Bild als auch einen Beschriftungstext. Was Sie hier tun müssen, ist, Elemente hinzuzufügen, die das Bild mit der Beschriftung verknüpfen.

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
