---
title: "Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung"
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie verstehen, wie man [Video- und Audioinhalte in HTML einbettet](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content), auch unter Verwendung von [object, iframe und anderen Einbettungstechnologien](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies).

> [!NOTE]
> Sie können die Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie eine einfache Audiodatei auf der Seite einbetten. Sie müssen:

- Den Pfad zur Audiodatei in einem geeigneten Attribut angeben, um sie auf der Seite einzubetten. Das Audio heißt `audio.mp3` und befindet sich in einem Ordner im aktuellen Ordner mit dem Namen `media`.
- Ein Attribut hinzufügen, um den Browsern anzuzeigen, dass sie einige Standardsteuerungen darstellen sollen.
- Einen geeigneten Fallback-Text für Browser hinzufügen, die `<audio>` nicht unterstützen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie einen etwas komplexeren Videoplayer auszeichnen, der mehrere Quellen, Untertitel und andere Funktionen umfasst. Sie müssen:

- Ein Attribut hinzufügen, um den Browsern anzuzeigen, dass sie einige Standardsteuerungen darstellen sollen.
- Einen geeigneten Fallback-Text für Browser hinzufügen, die `<video>` nicht unterstützen.
- Mehrere Quellen hinzufügen, die die Pfade zu den Videodateien enthalten. Die Dateien heißen `video.mp4` und `video.webm` und befinden sich in einem Ordner im aktuellen Ordner mit dem Namen `media`.
- Den Browser im Voraus wissen lassen, auf welche Videoformate die Quellen verweisen, damit er eine fundierte Entscheidung treffen kann, welche er vorab herunterladen soll.
- Dem `<video>` eine Breite und Höhe geben, die der intrinsischen Größe entspricht (320 x 240 Pixel).
- Das Video standardmäßig stumm schalten.
- Die Textspuren, die sich im Ordner `media` befinden, in einer Datei namens `subtitles_en.vtt` anzeigen, wenn das Video abgespielt wird. Sie müssen den Typ ausdrücklich als Untertitel festlegen und die Untertitelsprache auf Englisch.
- Sicherstellen, dass die Leser die Untertitelsprache identifizieren können, wenn sie die Standardsteuerungen verwenden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe möchten wir, dass Sie:

- Eine PDF-Datei auf der Seite einbetten. Das PDF heißt `mypdf.pdf` und befindet sich im Ordner `media`.
- Eine Webseite wie YouTube oder Google Maps aufrufen und ein Video oder ein anderes Medienelement auf der Seite einbetten.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed3.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
