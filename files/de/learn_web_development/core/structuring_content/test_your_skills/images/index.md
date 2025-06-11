---
title: "Testen Sie Ihre Fähigkeiten: HTML-Bilder"
short-title: Images
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Images
l10n:
  sourceCommit: a53950c7d4faad58184e06f0da370e685742a695
---

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie [Bilder und wie man sie in HTML einbettet](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) verstehen.

> [!NOTE]
> Sie können Lösungen im MDN Playground oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie feststecken, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie ein Bild von einigen Blaubeeren auf der Seite einbetten. Sie müssen:

- Den Pfad zum Bild in ein geeignetes Attribut einfügen, um es auf der Seite einzubetten. Das Bild heißt `blueberries.jpg` und ist unter dem Pfad `https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true` verfügbar.
- Einen alternativen Text in ein geeignetes Attribut einfügen, um das Bild für Personen zu beschreiben, die es nicht sehen können.
- Dem `<img>`-Element eine geeignete `width` geben, damit es im richtigen {{Glossary("aspect_ratio", "Seitenverhältnis")}} angezeigt wird und genügend Platz auf der Seite bleibt, um es darzustellen. Die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes beträgt 615 x 419 Pixel.

Um zu beginnen, können Sie **"Play"** im untenstehenden Codeblock klicken, um das Beispiel im MDN Playground zu bearbeiten, oder [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images1-download.html) und lokal in Ihrem eigenen Editor arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit dem _Reset_-Button im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung am Ende des Abschnitts ansehen.

```html live-sample___images-1
<h1>Basic image embed</h1>

<img />
```

<!-- Gemeinsamer/setup CSS-Code -->

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

In dieser Aufgabe haben Sie bereits ein funktionsfähiges Bild, aber wir möchten, dass Sie einen Tooltip hinzufügen, der erscheint, wenn man mit der Maus über das Bild fährt. Sie sollten einige geeignete Informationen in den Tooltip einfügen.

Um zu beginnen, können Sie **"Play"** im untenstehenden Codeblock klicken, um das Beispiel im MDN Playground zu bearbeiten, oder [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images2-download.html) und lokal in Ihrem eigenen Editor arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit dem _Reset_-Button im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung am Ende des Abschnitts ansehen.

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

In dieser Aufgabe wird Ihnen sowohl ein funktionsfähiges Bild als auch ein Bildunterschriftstext zur Verfügung gestellt. Was Sie hier tun müssen, ist, Elemente hinzuzufügen, die das Bild mit der Bildunterschrift verknüpfen.

Um zu beginnen, können Sie **"Play"** im untenstehenden Codeblock klicken, um das Beispiel im MDN Playground zu bearbeiten, oder [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images3-download.html) und lokal in Ihrem eigenen Editor arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit dem _Reset_-Button im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung am Ende des Abschnitts ansehen.

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
