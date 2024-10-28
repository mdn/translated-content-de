---
title: "Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung"
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es festzustellen, ob Sie verstehen, wie man [Video- und Audioinhalte in HTML einbettet](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content), einschließlich der Verwendung von [object, iframe und anderen Einbettungstechnologien](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies).

> [!NOTE]
> Sie können die Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über unsere [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie eine einfache Audiodatei auf der Seite einbetten. Sie müssen:

- Den Pfad zur Audiodatei einem geeigneten Attribut hinzufügen, um sie auf der Seite einzubetten. Die Audiodatei heißt `audio.mp3` und befindet sich in einem Ordner innerhalb des aktuellen Ordners namens `media`.
- Ein Attribut hinzufügen, um den Browsern anzuzeigen, dass sie einige Standardsteuerungen darstellen sollen.
- Einen geeigneten Fallback-Text für Browser hinzufügen, die `<audio>` nicht unterstützen.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie einen etwas komplexeren Videoplayer markieren, der mehrere Quellen, Untertitel und andere Funktionen umfasst. Sie müssen:

- Ein Attribut hinzufügen, um den Browsern anzuzeigen, dass sie einige Standardsteuerungen darstellen sollen.
- Einen geeigneten Fallback-Text für Browser hinzufügen, die `<video>` nicht unterstützen.
- Mehrere Quellen hinzufügen, die die Pfade zu den Videodateien enthalten. Die Dateien heißen `video.mp4` und `video.webm` und befinden sich in einem Ordner innerhalb des aktuellen Ordners namens `media`.
- Den Browser im Voraus wissen lassen, welche Videoformate die Quellen ansprechen, damit er eine informierte Entscheidung treffen kann, welche Datei er im Voraus herunterladen soll.
- Dem `<video>` eine Breite und Höhe gleich seiner intrinsischen Größe (320 x 240 Pixel) geben.
- Das Video standardmäßig stumm schalten.
- Die im Ordner `media` enthaltenen Textspuren in einer Datei namens `subtitles_en.vtt` anzeigen, wenn das Video abgespielt wird. Sie müssen den Typ explizit als Untertitel festlegen und die Untertitelsprache auf Englisch einstellen.
- Sicherstellen, dass die Leser die Untertitelsprache identifizieren können, wenn sie die Standardsteuerungen verwenden.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe möchten wir, dass Sie:

- Ein PDF in die Seite einbetten. Das PDF heißt `my-pdf.pdf` und befindet sich im Ordner `media`.
- Zu einer Sharing-Site wie YouTube oder Google Maps gehen und ein Video oder ein anderes Medienobjekt in die Seite einbetten.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed3.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
