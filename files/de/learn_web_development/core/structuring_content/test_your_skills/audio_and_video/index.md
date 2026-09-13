---
title: "Testen Sie Ihr Wissen: Audio und Video"
short-title: "Test: Audio und Video"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content")}}

Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie verstehen, wie man [Video- und Audioinhalte in HTML einbettet](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Audio und Video 1

In dieser Aufgabe möchten wir Sie bitten, eine Audiodatei in die Seite einzubetten.

Um diese Aufgabe abzuschließen:

1. Fügen Sie den Pfad zur Audiodatei in ein entsprechendes Attribut ein, um sie in die Seite einzubetten. Das Audio heißt `audio.mp3` und ist unter dem Pfad `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3` verfügbar.
2. Fügen Sie ein Attribut hinzu, damit Browser einige Standardsteuerungen anzeigen.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('audio-1', "100%", 150) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___audio-1
<h1>Basic audio embed</h1>

<audio></audio>
```

<!-- Gemeinsame Stile -->

```css hidden live-sample___video-1 live-sample___audio-1 live-sample___video-1-finished live-sample___audio-1-finished
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

audio,
video {
  border: 1px solid black;
}
```

Der aktualisierte Inhalt sollte so aussehen:

{{ EmbedLiveSample('audio-1-finished', "100%", 180) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html live-sample___audio-1-finished
<h1>Basic audio embed</h1>

<audio
  controls
  src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3"></audio>
```

</details>

## Audio und Video 2

In dieser Aufgabe möchten wir Sie bitten, einen etwas komplexeren Videoplayer zu markieren, der mehrere Quellen, Untertitel und andere Funktionen enthält.

Um diese Aufgabe abzuschließen:

1. Fügen Sie ein Attribut hinzu, damit Browser einige Standardsteuerungen anzeigen.
2. Fügen Sie mehrere Quellen hinzu, die die Pfade zu den Videodateien enthalten. Die Dateien heißen `video.mp4` und `video.webm` und sind unter den folgenden Pfaden verfügbar:
   1. `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4`
   2. `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.webm`
3. Informieren Sie den Browser im Voraus, auf welche Videoformate die Quellen verweisen, damit er eine fundierte Wahl treffen kann, welche er im Voraus herunterladen soll.
4. Geben Sie dem `<video>` eine Breite und Höhe, die seiner intrinsischen Größe (320 mal 240 Pixel) entspricht.
5. Stellen Sie sicher, dass das Video standardmäßig stummgeschaltet ist.
6. Zeigen Sie die Textspuren an, die in der Datei `https://raw.githubusercontent.com/mdn/learning-area/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/subtitles_en.vtt` enthalten sind, wenn das Video abgespielt wird. Sie müssen den Typ explizit als Untertitel festlegen und die Untertitelsprache auf Englisch setzen.
7. Stellen Sie sicher, dass die Leser die Untertitelsprache identifizieren können, wenn sie die Standardsteuerungen verwenden.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample('video-1', "100%", 300)}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___video-1
<h1>Video embed</h1>

<video></video>
```

Der aktualisierte Inhalt sollte so aussehen:

{{EmbedLiveSample('video-1-finished', "100%", 380)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html live-sample___video-1-finished
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
</video>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content")}}
