---
title: "Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung"
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es zu überprüfen, ob Sie verstehen, wie man [Video- und Audioinhalte in HTML einbettet](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) und auch [Objekt-, Iframe- und andere Einbettungstechnologien](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies) verwendet.

> [!NOTE]
> Sie können die Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich an uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

## Aufgabe 1

In dieser Aufgabe sollen Sie eine einfache Audiodatei auf der Seite einbetten. Sie müssen:

- Den Pfad zur Audiodatei in einem geeigneten Attribut hinzufügen, um sie auf der Seite einzubetten. Die Audiodatei heißt `audio.mp3` und befindet sich in einem Ordner im aktuellen Ordner namens `media`.
- Ein Attribut hinzufügen, damit Browser einige Standard-Steuerelemente anzeigen.
- Einen geeigneten Fallback-Text für Browser hinzufügen, die `<audio>` nicht unterstützen.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel zu erstellen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe sollen Sie einen etwas komplexeren Videoplayer mit mehreren Quellen, Untertiteln und weiteren Funktionen markieren. Sie müssen:

- Ein Attribut hinzufügen, damit Browser einige Standard-Steuerelemente anzeigen.
- Einen geeigneten Fallback-Text für Browser hinzufügen, die `<video>` nicht unterstützen.
- Mehrere Quellen hinzufügen, die die Pfade zu den Videodateien enthalten. Die Dateien heißen `video.mp4` und `video.webm` und befinden sich in einem Ordner im aktuellen Ordner namens `media`.
- Den Browser im Voraus über die Videoformate informieren, auf die die Quellen verweisen, damit er eine fundierte Entscheidung treffen kann, welche er im Voraus herunterladen soll.
- Dem `<video>` eine Breite und Höhe in seiner intrinsischen Größe (320 x 240 Pixel) geben.
- Das Video standardmäßig stumm schalten.
- Die im Ordner `media` enthaltenen Textspuren in einer Datei namens `subtitles_en.vtt` anzeigen, wenn das Video abgespielt wird. Sie müssen den Typ ausdrücklich als Untertitel festlegen und die Untertitelsprache auf Englisch einstellen.
- Sicherstellen, dass die Leser die Untertitelsprache mit den Standard-Steuerelementen identifizieren können.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel zu erstellen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe sollen Sie:

- Ein PDF in die Seite einbetten. Das PDF heißt `mypdf.pdf` und befindet sich im Ordner `media`.
- Zu einer Sharing-Seite wie YouTube oder Google Maps gehen und ein Video oder ein anderes Medienobjekt in die Seite einbetten.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel zu erstellen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed3.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
