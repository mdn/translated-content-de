---
title: Konzepte der Videobearbeitung
slug: Web/API/WebCodecs_API/Video_processing_concepts
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{DefaultAPISidebar("WebCodecs API")}}

Bevor Sie mit der WebCodecs API arbeiten, ist es hilfreich, einige grundlegende Konzepte darüber zu verstehen, wie Video funktioniert, wie es komprimiert wird und wie Videodateien strukturiert sind. Dieser Leitfaden behandelt die Schlüsselkonzepte: Videoframes, Codecs, Kodierung und Dekodierung, Container sowie Multiplexing und Demultiplexing.

## Videoframes

Ein Video ist eine Abfolge von Bildern, die in schneller Folge angezeigt werden. Jedes Bild in der Abfolge wird als **Videoframe** bezeichnet, und jeder Frame hat einen zugehörigen Zeitstempel, der angibt, wann er angezeigt werden soll.

![Videoframes](video-frames.png)

Jedes Pixel in einem Videoframe wird durch eine Reihe von numerischen Farbkanalwerten dargestellt. Unkomprimiert ist ein einzelner 4K-Frame (~8 Millionen Pixel) ungefähr 25 MB groß. Bei 30 Frames pro Sekunde würde eine Stunde unkomprimiertes 4K-Video über 3 TB groß sein, was für die Speicherung oder das Streaming unpraktisch groß ist.

Codecs wurden entwickelt, um Video zu komprimieren, typischerweise um 1-2 Größenordnungen, um Videoinhalte unter den üblichen Netzwerk- und Speicherbeschränkungen von Geräten praktisch speichern und streamen zu können.

## Codecs

Ein **Codec** (kurz für Kodieren/Dekodieren) ist ein Algorithmus zur Komprimierung und Dekomprimierung von Videodaten. Codecs reduzieren die Dateigröße drastisch — typischerweise um den Faktor 100 oder mehr durch eine Vielzahl unterschiedlicher Techniken. Während im Browser einige Videocodecs wie `vp9`, `av1` und `h264` verwendet werden, wenden sie alle einige der folgenden Techniken an:

### Räumliche Kompression

Codecs entfernen selektiv hochfrequente Details aus jedem Frame — feine Texturen und scharfe Kanten, die für das menschliche Auge weniger wahrnehmbar sind.

![Entfernen von hochdetaillierten Informationen](dct.png)

Der Grad der entfernten Details wird von zwei Dingen bestimmt: der **Bitrate**, die bestimmt, wie viel Daten der Ausgabestream verwendet, und dem **Codec-String**, der das Profil und die Ebene spezifiziert, die die Kodierungslogik regeln. Höhere Bitraten und fähigere Profile bewahren mehr Details auf Kosten größerer Dateigrößen. Das Folgende zeigt das Gleichgewicht zwischen Qualität und Bitrate, unter Verwendung von Baseline `vp9` auf einem 1080p-Video:

![Bitratenleiter](bitrate-ladder.png)

### Zeitliche Kompression

Aufeinanderfolgende Frames in einem Video sind typischerweise visuell ähnlich zueinander. Anstatt jeden Videoframe als unabhängiges Bild zu kodieren, berechnen Videocodecs den Unterschied zwischen den Frames und kodieren nur die Frame-Differenzen in einer kompakten binären Darstellung. Codecs verwenden typischerweise eine Reihe von Techniken wie Bewegungsentschädigung, um die Datenmenge zu reduzieren, die erforderlich ist, um Frame-Differenzen zu kodieren.

![Framedifferenzen](frame-diff.png)
Codecs speichern dann den ersten Videoframe in einer Sequenz als Schlüsselbild und speichern anschließende Frames nur als Frame-Differenzen (sogenannte Delta-Frames).

![Schlüsselframes vs. Delta-Frames](key-frames.png)

Videos werden typischerweise mit Schlüsselframes in regelmäßigen Abständen kodiert. Um das vollständige aktuelle Frame für die Anzeige eines bestimmten Delta-Frames zu konstruieren, müssen Sie das vorherige Schlüsselframe und alle nachfolgenden Delta-Frames (in der Reihenfolge) bis zum aktuellen Delta-Frame dekodieren.
In WebCodecs hat das `EncodedVideoChunk`-Interface eine `type`-Eigenschaft, die den Wert `"key"` oder `"delta"` annehmen kann, um anzuzeigen, ob das Chunk ein Schlüsselframe oder ein Delta-Frame darstellt.

Da Delta-Frames von allen vorherigen Frames seit dem letzten Schlüsselframe abhängen, kann ein Dekoder nicht an einem beliebigen Punkt in einem Video mit dem Dekodieren beginnen — er muss immer mit einem Schlüsselframe beginnen. Dies hat zwei praktische Auswirkungen: **Suchen** zu einem bestimmten Zeitstempel erfordert das Finden des am nächsten vorhergehenden Schlüsselframes und das Dekodieren jedes Frames in der Reihenfolge bis zum Ziel, und **Fehlererholung** erfordert das Überspringen bis zum nächsten Schlüsselframe, bevor das Dekodieren fortgesetzt wird.

Beim Kodieren mit einem `VideoEncoder` ist es möglich zu bestimmen, wann ein Frame als Schlüsselframe oder Delta-Frame festgelegt wird, indem der `keyFrame`-Parameter in der Encoder-Methode verwendet wird.

```js
encoder.encode(frame, { keyFrame: true });
```

## Kodierung und Dekodierung

### Codec-Kompatibilität

Um nützlich zu sein, müssen Sie in der Lage sein, sowohl Video mit einem Codec zu kodieren (nicht verarbeitetes Video in komprimierte Binärdaten umwandeln) als auch dasselbe Video mit demselben Codec zu dekodieren (die komprimierten Binärdaten wieder in rohe Videoframes umwandeln). Daher hat sich die Videoindustrie um eine Handvoll Standard-Codecs wie `vp9`, `h264`, `hevc` und `av1` gruppiert.

Anwendungen, die hauptsächlich Videoinhalte erstellen (z. B. Video-Bearbeitungstools) und daher hauptsächlich Video kodieren, wählen typischerweise einen Videocodec zur Kodierung, um die Kompatibilität mit Videoplayer-Software zu maximieren.

Anwendungen, die hauptsächlich Videoinhalte konsumieren (z. B. Videoplayer-Software) und daher hauptsächlich Video dekodieren, werden typischerweise versuchen, so viele Codecs wie möglich zu unterstützen.

Anwendungen, die sowohl Kodierung als auch Dekodierung steuern (z. B. eine Video-Streaming-Website), haben viel mehr Flexibilität bei der Codec-Wahl und können daher Codecs basierend auf Faktoren wie Kosten und Kodierungsgeschwindigkeit wählen.

### Kodierung ist aufwändig

Kodierung ist erheblich rechenintensiver als Dekodierung, typischerweise um 1-2 Größenordnungen. Videokonferenzanwendungen verwenden häufig ältere Codecs wie `vp8`, da sie, obwohl sie bei gleicher Bitrate zu niedrigerer Videoqualität führen, auch weniger rechenintensiv als neuere Codecs wie `vp9` sind.

### Hardware-Beschleunigung

Die meisten Verbrauchergeräte verfügen über spezielle Hardware, die speziell für die Video-Kodierung und -Dekodierung entwickelt wurde. Die Nutzung dieser speziellen Chips für Kodierung und Dekodierung wird als Hardware-Beschleunigung bezeichnet und kann Kodierungsaufgaben im Vergleich zur herkömmlichen CPU-basierten Kodierung um 2 Größenordnungen beschleunigen.

H.264- und H.265-Kodierungen werden am häufigsten hardwarebeschleunigt, während die hardwarebeschleunigte Kodierung von VP9 und AV1 weniger verbreitet ist. Hardwarebeschleunigte Dekodierung ist breit verfügbar für alle wichtigen Codecs, obwohl die AV1-Dekodierungsbeschleunigung aufgrund ihrer relativen Neuheit noch begrenzter ist.

Einer der Hauptvorteile der WebCodecs API ist die Möglichkeit, hardwarebeschleunigte Kodierung zu verwenden, wodurch Anwendungen wie Videobearbeitung und leistungsstarkes Streaming auf Verbrauchergeräten praktisch werden.

## Container

Codecs behandeln nur die Kodierung von rohen Mediendaten in eine binäre komprimierte Form und umgekehrt. Eine Videodatei, wie eine WebM-, MP4- oder MKV-Datei, enthält sowohl Metadaten wie Spurinformationen, Dauer etc. als auch kodierte Mediendaten.

![Container](containers.png)

Jeder Videodateityp hat seine eigene Containerspezifikation, wie die [WebM-Spezifikation](https://w3c.github.io/mse-byte-stream-format-webm/) und die [MP4-Spezifikation](https://github.com/alfg/quick-dive-into-mp4), die festlegt, wie Metadaten und kodierte Medien innerhalb des Dateistreams formatiert und gespeichert werden sollen.

Ein bestimmtes Containerformat kann tatsächlich eine Vielzahl unterschiedlicher Codecs unterstützen. Hier sind die gängigsten Container und die von ihnen unterstützten Codecs:

| Container     | Video-Codecs           | Audio-Codecs         |
| ------------- | ---------------------- | -------------------- |
| MP4 (.mp4)    | H.264, H.265, AV1      | AAC, MP3, Opus       |
| WebM (.webm)  | VP8, VP9, AV1          | Vorbis, Opus         |
| MKV (.mkv)    | H.264, H.265, VP9, AV1 | AAC, MP3, Opus, FLAC |
| MPEG-TS (.ts) | H.264, H.265           | AAC, MP3             |
| OGG (.ogg)    | Theora                 | Vorbis, Opus         |

Ein Videoplayer muss sowohl der Containerspezifikation folgen, um Metadaten und kodierte Chunks zu extrahieren (Demultiplexing), als auch das kodierte Video/Audio dekodieren, um die Videodatei abzuspielen.

Während das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) sowohl Demultiplexing als auch Dekodierung behandelt und hauptsächlich MP4- und WebM-Formate unterstützt, beschäftigt sich die WebCodecs API nicht mit Containerformaten.

Um ein Video mit WebCodecs abzuspielen, ist es notwendig, sowohl die Datei demultiplexen (typischerweise mit einer Demultiplexing-Bibliothek) als auch die kodierten Chunks zu dekodieren.

![Demultiplexing](decoder-demuxer.png)

Ebenso ist es notwendig, um eine Videodatei mit WebCodecs zu schreiben, auch der Containerspezifikation zu folgen, Metadaten zu schreiben und die kodierten Chunks an der richtigen Position im Ausgabestream zu platzieren. Dies wird als Multiplexing bezeichnet und wird nicht nativ von der WebCodecs API behandelt. Stattdessen ist eine Drittanbieterbibliothek wie [Mediabunny](https://mediabunny.dev/) erforderlich.

Siehe den Abschnitt [Muxing und Demuxing](/de/docs/Web/API/WebCodecs_API#muxing_and_demuxing) auf der Übersichtseite der WebCodecs API für Bibliotheksoptionen für Demultiplexing und Multiplexing.

## Siehe auch

- [Video-Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [WebCodecs API](/de/docs/Web/API/WebCodecs_API)
- [Verwendung der WebCodecs API](/de/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
- [Auswahl eines Codecs](/de/docs/Web/API/WebCodecs_API/Codec_selection)
