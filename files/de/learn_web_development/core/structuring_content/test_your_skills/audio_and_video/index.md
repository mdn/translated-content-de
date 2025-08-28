---
title: "Testen Sie Ihre Fähigkeiten: Audio und Video"
short-title: "Test: Audio und Video"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video
l10n:
  sourceCommit: 25a3f6c781777a135143b0edd4b5e1f85857b802
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content")}}

Ziel dieses Fähigkeitstests ist es, Ihnen dabei zu helfen, zu beurteilen, ob Sie verstehen, wie man [Video- und Audioinhalte in HTML einbettet](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Usage Guide. Sie können auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) Kontakt mit uns aufnehmen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie eine Audiodatei auf der Seite einbetten.

Um diese Aufgabe abzuschließen:

1. Fügen Sie den Pfad zur Audiodatei einem geeigneten Attribut hinzu, um sie auf der Seite einzubetten. Die Audiodatei heißt `audio.mp3` und ist unter dem Pfad `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3` verfügbar.
2. Fügen Sie ein Attribut hinzu, um Browsern die Anzeige einiger Standardsteuerungen zu ermöglichen.

```html live-sample___audio-1
<h1>Basic audio embed</h1>

<audio></audio>
```

<!-- Gemeinsame Stile -->

```css hidden live-sample___video-1 live-sample___audio-1
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

* {
  box-sizing: border-box;
}

audio,
video {
  border: 1px solid black;
}
```

{{ EmbedLiveSample('audio-1', "100%", 150) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

```html
<h1>Basic audio embed</h1>

<audio
  controls
  src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3"></audio>
```

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie einen etwas komplexeren Videoplayer mit mehreren Quellen, Untertiteln und weiteren Funktionen auszeichnen.

Um diese Aufgabe abzuschließen:

1. Fügen Sie ein Attribut hinzu, damit Browser einige Standardsteuerungen anzeigen.
2. Fügen Sie mehrere Quellen hinzu, die die Pfade zu den Videodateien enthalten. Die Dateien heißen `video.mp4` und `video.webm` und sind unter den folgenden Pfaden verfügbar:
   1. `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4`
   2. `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.webm`
3. Lassen Sie den Browser im Voraus wissen, welche Videoformate die Quellen ansprechen, damit er im Voraus eine fundierte Entscheidung treffen kann, welche herunterzuladen ist.
4. Geben Sie dem `<video>` eine Breite und Höhe, die seiner intrinsischen Größe entspricht (320 x 240 Pixel).
5. Lassen Sie das Video standardmäßig stumm geschaltet abspielen.
6. Lassen Sie die Textspuren, die sich im Ordner `media` befinden, in einer Datei mit dem Namen `https://raw.githubusercontent.com/mdn/learning-area/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/subtitles_en.vtt` anzeigen, wenn das Video abgespielt wird. Sie müssen den Typ explizit als Untertitel festlegen und die Untertitelsprache auf Englisch setzen.
7. Stellen Sie sicher, dass die Leser die Untertitelsprache identifizieren können, wenn sie die Standardsteuerungen verwenden.

```html live-sample___video-1
<h1>Video embed</h1>

<video></video>
```

{{EmbedLiveSample('video-1', "100%", 300)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

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
</video>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content")}}
