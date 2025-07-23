---
title: "Testen Sie Ihre Fähigkeiten: Audio und Video"
short-title: Audio und Video
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen einzuschätzen, ob Sie verstehen, wie man [Video- und Audioinhalte in HTML einbettet](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

> [!NOTE]
> Um Unterstützung zu erhalten, lesen Sie unseren [Leitfaden zur Nutzung von Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) mit uns in Kontakt treten.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie eine Audiodatei auf der Seite einbetten.

Um diese Aufgabe zu erfüllen:

1. Fügen Sie den Pfad zur Audiodatei einem geeigneten Attribut hinzu, um sie auf der Seite einzubetten. Das Audio wird `audio.mp3` genannt und ist unter folgendem Pfad verfügbar: `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3`.
2. Fügen Sie ein Attribut hinzu, damit Browser einige Standard-Steuerelemente anzeigen.
3. Fügen Sie geeigneten Fallback-Text für Browser hinzu, die `<audio>` nicht unterstützen.

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
}

audio,
video {
  border: 1px solid black;
}
```

{{ EmbedLiveSample('audio-1', "100%", 150) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte wie folgt aussehen:

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

In dieser Aufgabe möchten wir, dass Sie einen etwas komplexeren Videoplayer mit mehreren Quellen, Untertiteln und anderen Funktionen versehen.

Um diese Aufgabe zu erfüllen:

1. Fügen Sie ein Attribut hinzu, damit Browser einige Standard-Steuerelemente anzeigen.
2. Fügen Sie geeigneten Fallback-Text für Browser hinzu, die `<video>` nicht unterstützen.
3. Fügen Sie mehrere Quellen hinzu, die die Pfade zu den Videodateien enthalten. Die Dateien heißen `video.mp4` und `video.webm` und sind unter den folgenden Pfaden verfügbar:
   1. `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4`
   2. `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.webm`
4. Geben Sie dem Browser im Voraus an, auf welche Videoformate die Quellen verweisen, damit er eine fundierte Entscheidung darüber treffen kann, welches er im Voraus herunterladen soll.
5. Geben Sie dem `<video>` eine Breite und Höhe entsprechend seiner intrinsischen Größe (320 x 240 Pixel).
6. Machen Sie das Video standardmäßig stumm.
7. Zeigen Sie die im `media`-Ordner enthaltenen Textspuren in einer Datei namens `https://raw.githubusercontent.com/mdn/learning-area/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/subtitles_en.vtt` an, wenn das Video abgespielt wird. Sie müssen den Typ explizit als Untertitel festlegen und die Untertitelsprache auf Englisch setzen.
8. Stellen Sie sicher, dass die Leser die Untertitelsprache erkennen können, wenn sie die Standard-Steuerelemente verwenden.

```html live-sample___video-1
<h1>Video embed</h1>

<video></video>
```

{{EmbedLiveSample('video-1', "100%", 300)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte wie folgt aussehen:

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
