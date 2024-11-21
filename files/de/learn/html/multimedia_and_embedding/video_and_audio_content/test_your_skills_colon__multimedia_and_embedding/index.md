---
title: "Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung"
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie verstehen, wie man [Video- und Audioinhalte in HTML einbettet](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content), einschließlich der Verwendung von [object, iframe und anderen Einbettungstechnologien](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies).

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie eine Audiodatei auf der Seite einbetten. Sie müssen:

- Den Pfad zur Audiodatei zu einem geeigneten Attribut hinzufügen, um sie auf der Seite einzubetten. Die Audiodatei heißt `audio.mp3` und befindet sich in einem Ordner innerhalb des aktuellen Ordners, der `media` heißt.
- Ein Attribut hinzufügen, damit Browser einige Standard-Steuerelemente anzeigen.
- Einen geeigneten Fallback-Text hinzufügen für Browser, die `<audio>` nicht unterstützen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie einen etwas komplexeren Videoplayer mit mehreren Quellen, Untertiteln und weiteren Features kennzeichnen. Sie müssen:

- Ein Attribut hinzufügen, damit Browser einige Standard-Steuerelemente anzeigen.
- Einen geeigneten Fallback-Text hinzufügen für Browser, die `<video>` nicht unterstützen.
- Mehrere Quellen hinzufügen, die die Pfade zu den Videodateien enthalten. Die Dateien heißen `video.mp4` und `video.webm` und befinden sich in einem Ordner innerhalb des aktuellen Ordners, der `media` heißt.
- Dem Browser im Voraus mitteilen, welche Videoformate die Quellen ansprechen, damit er eine fundierte Entscheidung treffen kann, welche er im Voraus herunterladen soll.
- Dem `<video>` eine Breite und Höhe entsprechend seiner intrinsischen Größe (320 x 240 Pixel) geben.
- Das Video standardmäßig stumm schalten.
- Die Textspuren, die im `media`-Ordner in einer Datei namens `subtitles_en.vtt` enthalten sind, beim Abspielen des Videos anzeigen. Sie müssen den Typ explizit als Untertitel festlegen und die Sprache der Untertitel auf Englisch einstellen.
- Sicherstellen, dass die Leser die Untertitelsprache identifizieren können, wenn sie die Standard-Steuerelemente verwenden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe möchten wir, dass Sie:

- Ein PDF auf der Seite einbetten. Das PDF heißt `my-pdf.pdf` und befindet sich im Ordner `media`.
- Eine Sharing-Site wie YouTube oder Google Maps besuchen und ein Video oder ein anderes Medienelement auf der Seite einbetten.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed3.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
