---
title: "Testen Sie Ihre Fähigkeiten: Audio und Video"
short-title: "Test: Audio und Video"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video
l10n:
  sourceCommit: 22f3449c84d562b561a284cd2cebf5410ea98e6c
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content")}}

Mit diesem Kompetenztest können Sie überprüfen, ob Sie verstanden haben, wie Sie [Video- und Audioinhalte in HTML einbetten](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

> [!NOTE]
> Wenn Sie Hilfe benötigen, lesen Sie unseren Leitfaden zur Verwendung von [„Testen Sie Ihre Fähigkeiten“](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Audio und Video 1

In dieser Aufgabe sollen Sie eine Audiodatei in die Seite einbetten.

So lösen Sie die Aufgabe:

1. Fügen Sie den Pfad zur Audiodatei in ein geeignetes Attribut ein, um sie auf der Seite einzubetten. Die Datei heißt `audio.mp3` und ist unter `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/audio-video/audio.mp3` verfügbar.
2. Fügen Sie ein Attribut hinzu, damit Browser einige Standardsteuerelemente anzeigen.

Der Ausgangspunkt für die Aufgabe sieht so aus:

{{ EmbedLiveSample('audio-1', "100%", 150) }}

Dies ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___audio-1
<h1>Basic audio embed</h1>

<audio></audio>
```

<!-- Shared styles -->

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

Das aktualisierte Ergebnis sollte so aussehen:

{{ EmbedLiveSample('audio-1-finished', "100%", 180) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiger HTML-Code sollte so aussehen:

```html live-sample___audio-1-finished
<h1>Basic audio embed</h1>

<audio
  controls
  src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/audio-video/audio.mp3"></audio>
```

</details>

## Audio und Video 2

In dieser Aufgabe sollen Sie einen etwas komplexeren Videoplayer mit mehreren Quellen, Untertiteln und weiteren Funktionen auszeichnen.

So lösen Sie die Aufgabe:

1. Fügen Sie ein Attribut hinzu, damit Browser einige Standardsteuerelemente anzeigen.
2. Fügen Sie mehrere Quellen mit den Pfaden zu den Videodateien hinzu. Die Dateien heißen `video.mp4` und `video.webm` und sind unter den folgenden Pfaden verfügbar:
   1. `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/audio-video/video.mp4`
   2. `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/audio-video/video.webm`
3. Teilen Sie dem Browser vorab mit, welche Videoformate die Quellen enthalten, damit er entscheiden kann, welche Datei er herunterladen soll.
4. Geben Sie dem `<video>`-Element eine Breite und Höhe entsprechend der Originalgröße des Videos (320 × 240 Pixel).
5. Schalten Sie das Video standardmäßig stumm.
6. Zeigen Sie bei der Wiedergabe des Videos die Textspuren aus der Datei `subtitles_en.vtt` an. Legen Sie den Typ ausdrücklich auf Untertitel und die Untertitelsprache auf Englisch fest. Setzen Sie außerdem das Attribut `default`, damit die Textspur standardmäßig angezeigt wird.
   > [!NOTE]
   > Eine Kopie der Untertiteldatei befindet sich im selben Verzeichnis wie diese Seite, um Probleme mit [Cross-Origin-Anfragen](/de/docs/Web/HTTP/Guides/CORS) zu vermeiden: Wenn Sie die Aufgabe direkt auf MDN im MDN Playground bearbeiten, benötigen Sie lediglich den Pfad `subtitles_en.vtt`. Wenn Sie das Beispiel auf Ihrem lokalen Dateisystem nachbilden möchten, finden Sie eine Kopie unter `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/audio-video/subtitles_en.vtt`.
7. Stellen Sie sicher, dass Benutzer die Untertitelsprache erkennen können, wenn sie die Standardsteuerelemente verwenden.

Der Ausgangspunkt für die Aufgabe sieht so aus:

{{EmbedLiveSample('video-1', "100%", 300)}}

Dies ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___video-1
<h1>Video embed</h1>

<video></video>
```

Das aktualisierte Ergebnis sollte so aussehen:

{{EmbedLiveSample('video-1-finished', "100%", 380)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiger HTML-Code sollte so aussehen:

```html live-sample___video-1-finished
<h1>Video embed</h1>

<video controls width="320" height="240" muted>
  <source
    src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/audio-video/video.mp4"
    type="video/mp4" />
  <source
    src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/audio-video/video.webm"
    type="video/webm" />
  <track
    kind="subtitles"
    src="subtitles_en.vtt"
    srclang="en"
    label="English"
    default />
</video>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content")}}
