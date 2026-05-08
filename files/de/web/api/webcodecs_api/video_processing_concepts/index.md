---
title: Videoverarbeitungskonzepte
slug: Web/API/WebCodecs_API/Video_processing_concepts
l10n:
  sourceCommit: 98b1f612078d2716d9330e36c74351bddd77fa05
---

{{DefaultAPISidebar("WebCodecs API")}}

Bevor Sie mit der WebCodecs API arbeiten, ist es hilfreich, einige grundlegende Konzepte zu verstehen, wie Video funktioniert, wie es komprimiert wird und wie Videodateien strukturiert sind.
Dieser Leitfaden deckt die wichtigsten Konzepte ab: Videoframes, Codecs, Kodierung und Dekodierung, Container sowie Muxing und Demuxing.

## Videoframes

Ein Video ist eine Abfolge von Bildern, die schnell hintereinander angezeigt werden. Jedes Bild in der Sequenz wird als **Videoframe** bezeichnet, und jedes Frame hat einen zugeordneten Zeitstempel, der angibt, wann es angezeigt werden soll.

![Videoframes](video-frames.png)

Jedes Pixel in einem Videoframe wird durch einen Satz numerischer Farbkanalwerte repräsentiert. Unkomprimiert ist ein einzelnes 4K-Frame (~8 Millionen Pixel) ungefähr 25 MB groß. Bei 30 Frames pro Sekunde wäre eine Stunde unkomprimiertes 4K-Video über 3 TB groß, was für die Speicherung oder das Streaming unpraktisch groß ist.

Codecs wurden entwickelt, um Videos zu komprimieren, typischerweise um den Faktor 10 bis 100, um Videos angesichts der typischen Netz- und Speicherbeschränkungen von Geräten praktisch speichern und streamen zu können.

## Codecs

Ein **Codec** (kurz für Kodieren/Dekodieren) ist ein Algorithmus zum Komprimieren und Dekomprimieren von Videodaten. Codecs reduzieren die Dateigröße dramatisch — typischerweise um den Faktor 100 oder mehr durch eine Vielzahl unterschiedlicher Techniken. Während es eine Reihe von Video-Codecs gibt, die im Browser verwendet werden, wie `vp9`, `av1` und `h264`, wenden sie alle eine Form der folgenden Techniken an:

### Räumliche Komprimierung

Codecs entfernen selektiv hochfrequente Details aus jedem Frame — feine Texturen und scharfe Kanten, die für das menschliche Auge weniger wahrnehmbar sind.

![Wegwerfen von detaillierten Informationen](dct.png)

Die Menge an entfernten Details wird durch zwei Dinge bestimmt: die **Bitrate**, die festlegt, wie viel Daten der Ausgabestream verwendet, und den **Codec-String**, der das Profil und Level spezifiziert, das die Kodierungslogik bestimmt. Höhere Bitraten und leistungsfähigere Profile bewahren mehr Details auf Kosten größerer Dateigrößen. Die folgende Abbildung zeigt den Kompromiss zwischen Qualität und Bitrate, unter Verwendung von Baseline-`vp9` auf einem 1080p-Video:

![Bitraten-Leiter](bitrate-ladder.png)

### Temporale Komprimierung

Aufeinanderfolgende Frames in einem Video sind typischerweise visuell ähnlich. Anstatt jedes Videoframe als unabhängiges Bild zu kodieren, berechnen Videocodecs die Unterschiede zwischen den Frames und kodieren nur die Framedifferenzen in einer kompakten binären Darstellung. Codecs nutzen typischerweise eine Reihe von Techniken wie Bewegungskompensation, um die Datenmenge zu reduzieren, die erforderlich ist, um Framedifferenzen zu kodieren.

![Framedifferenzen](frame-diff.png)
Codecs speichern dann das erste Videoframe in einer Sequenz als Keyframe, und speichern nachfolgende Frames nur als Framedifferenzen (genannt Delta-Frames).

![Keyframes vs Delta-Frames](key-frames.png)

Videos werden typischerweise mit Keyframes in regelmäßigen Abständen kodiert. Um das vollständige aktuelle Frame zur Anzeige eines bestimmten Delta-Frames zu konstruieren, müssen Sie das vorherige Keyframe und alle nachfolgenden Delta-Frames (in der Reihenfolge) bis zum aktuellen Delta-Frame dekodieren.
In WebCodecs hat das Interface `EncodedVideoChunk` eine Eigenschaft `type`, die den Wert `"key"` oder `"delta"` annehmen kann, um anzuzeigen, ob der Chunk ein Keyframe oder ein Delta-Frame darstellt.

Da Delta-Frames von allen vorhergehenden Frames seit dem letzten Keyframe abhängen, kann ein Decoder nicht von einem beliebigen Punkt in einem Video aus mit der Dekodierung beginnen — er muss immer von einem Keyframe aus beginnen. Dies hat zwei praktische Auswirkungen: **Suchen** zu einem bestimmten Zeitstempel erfordert, das nächstgelegene vorhergehende Keyframe zu finden und jedes Frame in der Reihenfolge bis zum Ziel zu dekodieren, und **Fehlerkorrektur** erfordert, bis zum nächsten Keyframe vorzuspulen, bevor die Dekodierung fortgesetzt wird.

Beim Kodieren mit einem `VideoEncoder` ist es möglich zu bestimmen, wann ein Frame als Keyframe oder Delta-Frame festgelegt werden soll, indem der Parameter `keyFrame` in der Encoder-Methode verwendet wird.

```js
 encoder.encode(frame, { keyFrame: /* */ })
```

## Kodierung und Dekodierung

### Codec-Kompatibilität

Damit Codecs nützlich sind, müssen Sie in der Lage sein, sowohl Videos mit einem Codec zu kodieren (ungekürztes Video in komprimierte Binärdaten zu verwandeln) als auch das gleiche Video mit demselben Codec zu dekodieren (die komprimierten Binärdaten wieder in ungekürzte Videoframes zu verwandeln). Die Videoindustrie hat sich daher auf eine Handvoll Standard-Codecs wie `vp9`, `h264`, `hevc` und `av1` geeinigt.

Anwendungen, die hauptsächlich Videoinhalte erstellen (z. B. Videobearbeitungswerkzeuge) und daher hauptsächlich Videos kodieren, wählen typischerweise einen Videocodec zur Kodierung, um die Kompatibilität mit Videoplayer-Software zu maximieren.

Anwendungen, die hauptsächlich Videoinhalte konsumieren (z. B. Videoplayer-Software) und daher hauptsächlich Videos dekodieren, werden typischerweise versuchen, so viele Codecs wie möglich zu unterstützen.

Anwendungen, die sowohl die Kodierung als auch die Dekodierung kontrollieren (z. B. eine Video-Streaming-Website), haben viel mehr Flexibilität bei der Auswahl der Codecs und können daher Codecs basierend auf Faktoren wie Kosten und Kodiergeschwindigkeit wählen.

### Kodierung ist aufwendig

Die Kodierung ist erheblich rechenintensiver als die Dekodierung, typischerweise um den Faktor 10 bis 100. Videoanwendungskonferenzen verwenden oft ältere Codecs wie `vp8`, weil, obwohl es bei der gleichen Bitrate zu einer niedrigeren Videoqualität führt, es auch weniger rechenintensiv ist als neuere Codecs wie `vp9`.

### Hardwarebeschleunigung

Die meisten Verbrauchsgeräte enthalten spezialisierte Hardware, die speziell zum Kodieren und Dekodieren von Videos entwickelt wurde. Die Nutzung dieser spezialisierten Chips für die Kodierung und Dekodierung wird als Hardwarebeschleunigung bezeichnet und kann Kodierungsaufgaben um den Faktor 100 im Vergleich zur standardmäßigen CPU-basierten Kodierung beschleunigen.

H.264 und H.265 Kodierungen sind am häufigsten hardwarebeschleunigt, während die hardwarebeschleunigte Kodierung von VP9 und AV1 weniger verbreitet ist. Die hardwarebeschleunigte Dekodierung ist für alle wichtigen Codecs weit verbreitet, obwohl die AV1-Dekodierbeschleunigung aufgrund ihrer relativen Neuheit noch begrenzter ist.

Einer der wichtigsten Vorteile der WebCodecs API ist die Möglichkeit, hardwarebeschleunigte Kodierung zu verwenden, was Anwendungen wie Videobearbeitung und Hochleistungs-Streaming auf Verbrauchsgeräten praktisch macht.

## Container

Codecs befassen sich nur mit der Kodierung von rohen Mediendaten in eine binär komprimierte Form und umgekehrt. Eine Videodatei, wie eine WebM-, MP4- oder MKV-Datei, enthält sowohl Metadaten wie Spurinformationen, Dauer usw., als auch kodierte Mediendaten.

![Container](containers.png)

Jeder Typ von Videodatei hat sein eigenes Containterspezifikationsformat, wie die [WebM Spezifikation](https://www.w3.org/TR/mse-byte-stream-format-webm/) und die [MP4 Spezifikation](https://github.com/alfg/quick-dive-into-mp4), die festlegt, wie Metadaten und kodierte Medien innerhalb des Dateistreams formatiert und gespeichert werden sollen.

Ein gegebenes Containerformat kann tatsächlich eine Vielzahl verschiedener Codecs unterstützen. Hier sind die gängigsten Container und die Codecs, die sie unterstützen:

| Container     | Video-Codecs           | Audio-Codecs         |
| ------------- | ---------------------- | -------------------- |
| MP4 (.mp4)    | H.264, H.265, AV1      | AAC, MP3, Opus       |
| WebM (.webm)  | VP8, VP9, AV1          | Vorbis, Opus         |
| MKV (.mkv)    | H.264, H.265, VP9, AV1 | AAC, MP3, Opus, FLAC |
| MPEG-TS (.ts) | H.264, H.265           | AAC, MP3             |
| OGG (.ogg)    | Theora                 | Vorbis, Opus         |

Ein Videoplayer muss sowohl der Containterspezifikation folgen, um Metadaten und kodierte Chunks zu extrahieren (genannt Demuxing), als auch das kodierte Video/Audio dekodieren, um die Videodatei abzuspielen.

Während das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) sowohl Demuxing als auch Dekodierung übernimmt und hauptsächlich die Formate MP4 und WebM unterstützt, befasst sich die WebCodecs API nicht mit Containerformaten.

Um ein Video mit WebCodecs abzuspielen, ist es notwendig, sowohl die Datei zu demuxen (typischerweise mithilfe einer Demuxing-Bibliothek) als auch die kodierten Chunks zu dekodieren.

![Demuxing](decoder-demuxer.png)

Ebenso ist es beim Schreiben einer Videodatei mit WebCodecs notwendig, auch der Containterspezifikation zu folgen, Metadaten zu schreiben und die kodierten Chunks an der richtigen Position im Ausgabedateistream zu platzieren. Dies wird als Muxing bezeichnet und wird nicht nativ von der WebCodecs API behandelt, sondern erfordert eine Drittanbieter-Bibliothek wie [Mediabunny](https://mediabunny.dev/).

Siehe den Abschnitt [Muxing und Demuxing](/de/docs/Web/API/WebCodecs_API#muxing_and_demuxing) auf der Übersichtsseite zur WebCodecs API für Bibliotheksoptionen zum Demuxen und Muxen.

## Siehe auch

- [Videocodec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [WebCodecs API](/de/docs/Web/API/WebCodecs_API)
- [Verwendung der WebCodecs API](/de/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
- [Codecauswahl](/de/docs/Web/API/WebCodecs_API/Codec_selection)
