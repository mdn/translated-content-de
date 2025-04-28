---
title: "Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung"
short-title: Audio und Video
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Multimedia_and_embedding
l10n:
  sourceCommit: 93f54b6e1fdfef1375233abb265f101bd6866f99
---

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie verstehen, wie man [Video- und Audioinhalte in HTML einbettet](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie eine Audiodatei auf der Seite einbetten. Sie müssen:

- Den Pfad zur Audiodatei zu einem entsprechenden Attribut hinzufügen, um sie auf der Seite einzubetten. Das Audio heißt `audio.mp3` und befindet sich in einem Ordner innerhalb des aktuellen Ordners namens `media`.
- Ein Attribut hinzufügen, um Browsern zu ermöglichen, einige Standardsteuerungen anzuzeigen.
- Einen geeigneten Fallback-Text für Browser hinzufügen, die `<audio>` nicht unterstützen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie einen etwas komplexeren Videoplayer mit mehreren Quellen, Untertiteln und anderen Funktionen kennzeichnen. Sie müssen:

- Ein Attribut hinzufügen, um Browsern zu ermöglichen, einige Standardsteuerungen anzuzeigen.
- Einen geeigneten Fallback-Text für Browser hinzufügen, die `<video>` nicht unterstützen.
- Mehrere Quellen hinzufügen, die die Pfade zu den Videodateien enthalten. Die Dateien heißen `video.mp4` und `video.webm` und befinden sich in einem Ordner innerhalb des aktuellen Ordners namens `media`.
- Den Browser im Voraus wissen lassen, auf welche Videoformate die Quellen verweisen, damit er eine informierte Entscheidung darüber treffen kann, welche er im Voraus herunterladen soll.
- Dem `<video>` eine Breite und eine Höhe gleich seiner intrinsischen Größe (320 mal 240 Pixel) geben.
- Das Video standardmäßig stumm schalten.
- Die im Ordner `media` enthaltenen Textspuren anzeigen, in einer Datei namens `subtitles_en.vtt`, wenn das Video abgespielt wird. Sie müssen den Typ explizit als Untertitel und die Untertitelsprache als Englisch festlegen.
- Sicherstellen, dass die Leser die Untertitelsprache identifizieren können, wenn sie die Standardsteuerungen verwenden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
