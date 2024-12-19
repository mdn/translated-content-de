---
title: "Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung"
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio/Test_your_skills:_Multimedia_and_embedding
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

Ziel dieses Fähigkeitentests ist es, zu bewerten, ob Sie verstehen, wie man [Video- und Audioinhalte in HTML einbettet](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite ausprobieren oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), oder [Glitch](https://glitch.com/).
>
> Wenn Sie feststecken, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie eine Audiodatei auf die Seite einbetten. Sie müssen:

- Den Pfad zur Audiodatei in ein geeignetes Attribut einfügen, um sie auf der Seite einzubetten. Die Audiodatei heißt `audio.mp3` und befindet sich in einem Ordner innerhalb des aktuellen Ordners namens `media`.
- Ein Attribut hinzufügen, damit Browser einige Standard-Steuerelemente anzeigen.
- Angemessenen Fallback-Text für Browser hinzufügen, die `<audio>` nicht unterstützen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie einen etwas komplexeren Videoplayer kennzeichnen, der mehrere Quellen, Untertitel und andere Funktionen enthält. Sie müssen:

- Ein Attribut hinzufügen, damit Browser einige Standard-Steuerelemente anzeigen.
- Angemessenen Fallback-Text für Browser hinzufügen, die `<video>` nicht unterstützen.
- Mehrere Quellen hinzufügen, die die Pfade zu den Videodateien enthalten. Die Dateien heißen `video.mp4` und `video.webm` und befinden sich in einem Ordner innerhalb des aktuellen Ordners namens `media`.
- Den Browser im Voraus darüber informieren, welche Videoformate die Quellen angeben, damit er eine fundierte Entscheidung treffen kann, welche er im Voraus herunterladen soll.
- Dem `<video>` eine Breite und Höhe entsprechend seiner intrinsischen Größe (320 mal 240 Pixel) geben.
- Das Video standardmäßig stumm schalten.
- Die im `media`-Ordner enthaltenen Textspuren, in einer Datei namens `subtitles_en.vtt`, anzeigen, während das Video abgespielt wird. Sie müssen den Typ ausdrücklich als Untertitel festlegen und die Untertitelsprache auf Englisch setzen.
- Sicherstellen, dass die Leser die Untertitelsprache erkennen können, wenn sie die Standard-Steuerelemente verwenden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
