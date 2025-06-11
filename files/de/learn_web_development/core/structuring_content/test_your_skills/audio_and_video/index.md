---
title: "Testen Sie Ihre Fähigkeiten: Audio und Video"
short-title: Audio und Video
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video
l10n:
  sourceCommit: a53950c7d4faad58184e06f0da370e685742a695
---

Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie verstehen, wie man [Video- und Audioinhalte in HTML einbettet](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

> [!NOTE]
> Sie können Lösungen im MDN Playground oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie eine Audiodatei auf der Seite einbetten. Sie müssen:

- Den Pfad zur Audiodatei in ein geeignetes Attribut einfügen, um sie auf der Seite einzubetten. Die Audio-Datei heißt `audio.mp3` und ist unter folgendem Pfad verfügbar: `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3`.
- Ein Attribut hinzufügen, um Browser dazu zu bringen, einige Standardsteuerungen anzuzeigen.
- Einen geeigneten Fallback-Text für Browser hinzufügen, die `<audio>` nicht unterstützen.

Um loszulegen, können Sie auf **"Play"** im Code-Block unten klicken, um das Beispiel im MDN Playground zu bearbeiten, oder [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed1-download.html) und lokal in Ihrem eigenen Editor arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung am Ende des Abschnitts anzeigen.

```html live-sample___audio-1
<h1>Basic audio embed</h1>

<audio></audio>
```

<!-- Gemeinsame Styles -->

```css hidden live-sample___video-1 live-sample___audio-1
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

audio, video {
  border: 1px solid black;
}
```

{{ EmbedLiveSample('audio-1', "100%", 150) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html
<h1>Basic audio embed</h1>

<audio
  controls
  src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3">
  <p>
    Your browser doesn't support HTML audio.
    <a
      href="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3"
      >Download the track here</a
    >
    instead.
  </p>
</audio>
```

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie einen etwas komplexeren Video-Player markieren, der mehrere Quellen, Untertitel und andere Funktionen enthält. Sie müssen:

- Ein Attribut hinzufügen, um Browser dazu zu bringen, einige Standardsteuerungen anzuzeigen.
- Einen geeigneten Fallback-Text für Browser hinzufügen, die `<video>` nicht unterstützen.
- Mehrere Quellen hinzufügen, die die Pfade zu den Videodateien enthalten. Die Dateien heißen `video.mp4` und `video.webm` und sind unter den folgenden Pfaden verfügbar:
  - `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4`
  - `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.webm`
- Dem Browser im Voraus mitteilen, auf welche Videoformate die Quellen verweisen, damit er eine fundierte Entscheidung treffen kann, welche heruntergeladen werden sollen.
- Dem `<video>` eine Breite und Höhe geben, die seiner intrinsischen Größe entspricht (320 mal 240 Pixel).
- Das Video standardmäßig stumm schalten.
- Die im `media`-Ordner enthaltenen Textspuren in einer Datei namens `https://raw.githubusercontent.com/mdn/learning-area/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/subtitles_en.vtt` anzeigen, wenn das Video abgespielt wird. Sie müssen den Typ ausdrücklich als Untertitel setzen und die Untertitelsprache auf Englisch einstellen.
- Sicherstellen, dass die Leser die Untertitelsprache erkennen können, wenn sie die Standardsteuerungen verwenden.

Um loszulegen, können Sie auf **"Play"** im Code-Block unten klicken, um das Beispiel im MDN Playground zu bearbeiten, oder [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed2-download.html) und lokal in Ihrem eigenen Editor arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung am Ende des Abschnitts anzeigen.

```html live-sample___video-1
<h1>Video embed</h1>

<video></video>
```

{{EmbedLiveSample('video-1', "100%", 300)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html
<h1>Video embed</h1>

<video controls width="320" height="240" muted>
  <source
    src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4"
    type="video/mp4" />
  <source
    src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.webm"
    type="video/webm" />
  <track
    kind="subtitles"
    src="https://raw.githubusercontent.com/mdn/learning-area/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/subtitles_en.vtt"
    srclang="en"
    label="English" />
  <p>
    Your browser doesn't support HTML video.
    <a
      href="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4">
      Download the track here
    </a>
    instead.
  </p>
</video>
```

</details>
