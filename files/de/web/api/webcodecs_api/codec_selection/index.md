---
title: Codec-Auswahl
slug: Web/API/WebCodecs_API/Codec_selection
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{DefaultAPISidebar("WebCodecs API")}}

Während Entwickler häufig auf Codecs mit ihrem Code-Identifier-String wie `vp9` oder `h264` verweisen, gibt es viele Konfigurationsprofile, Levels und andere Parameter, die genau steuern, wie die Daten kodiert und dekodiert werden.

Die [WebCodecs API](/de/docs/Web/API/WebCodecs_API) erfordert die Arbeit mit vollständig spezifizierten Codec-Strings, wie `vp09.00.40.08.00`, anstelle von mehrdeutigen Strings wie `vp9` oder `h264`. Vollständig spezifizierte Codec-Strings geben nicht nur die Codec-Familie an, sondern auch das Profil, Level und andere Parameter.

Die Auswahl des richtigen Strings hängt von Ihrem Anwendungsfall ab, wird jedoch hauptsächlich von Kompatibilitätsüberlegungen sowie der Hardware und Software, auf der Sie arbeiten möchten, beeinflusst. Dieser Leitfaden erklärt, wie Codec-Strings funktionieren, wie Sie die richtigen Codecs für [häufige Anwendungsfälle](#häufige_anwendungsfälle) auswählen und welche allgemeinen Ansätze es gibt, um auf alternative Codec-Strings zurückzugreifen, wenn Ihre Präferenzen nicht verfügbar sind.

## Dekodieren vs. Kodieren

Beim **Dekodieren** einer Video- oder Audiodatei wird der Codec durch die ursprüngliche Kodierung der Datei bestimmt — Sie wählen ihn nicht aus. Demultiplexing-Bibliotheken wie [Mediabunny](https://mediabunny.dev/) und [web-demuxer](https://github.com/bilibili/web-demuxer) extrahieren den richtigen Codec-String für eine gegebene Datei, den Sie direkt [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) oder [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) während der Konfiguration bereitstellen können.

Beim **Kodieren** wählen Sie den Codec aus. Der Rest dieses Leitfadens behandelt, wie man einen Codec auswählt.

## Video-Codecs

### Video-Codec-Familien

Bevor Sie einen Codec-String wie `vp09.00.40.08.00` oder `avc1.4d0034` auswählen, lohnt es sich, die Codec-Familien zu überprüfen.

#### H.264 (AVC)

H.264 ist einer der am weitesten unterstützten Codecs über Browser, Betriebssysteme und Verbrauchsgeräte hinweg. Es ist der am häufigsten verwendete Codec in MP4-Dateien, und Anwendungen, die Videos für die Wiedergabe in Drittanbieter-Software kodieren, wählen in der Regel H.264 als pragmatische Wahl für maximale Kompatibilität.

Obwohl beliebt, ist es wichtig zu beachten, dass H.264 ein patentierter Codec ist. Während Browser-Anbieter Lizenzen besitzen, die die in WebCodecs verwendeten H.264-Kodierer-Implementierungen abdecken, unterliegt der Codec in bestimmten Fällen Lizenzgebühren. Entwickler sollten die Nutzung zusammen mit rechtlichem Beistand überprüfen.

#### VP9

VP9 ist ein Open-Source-Codec, der von Google entwickelt wurde und bietet eine bessere Komprimierung als H.264 bei gleichbleibender Qualität. VP9 innerhalb von WebM-Containern wird von modernen Browsern weit unterstützt, mit einer Abdeckung, die mit H.264 vergleichbar ist oder diese übertrifft.

VP9 innerhalb von WebM-Containern wird auch von nativen Videoplayern unter Windows (Windows Media Player) und Drittanbieter-Playern wie VLC unterstützt, hat jedoch derzeit keine native Wiedergabeunterstützung auf macOS und iOS.

VP9 wird manchmal, aber nicht immer, als Codec innerhalb von MP4-Dateien unterstützt, da die Unterstützung für diese Konfiguration von der verwendeten Wiedergabesoftware abhängt.

VP9 wird häufig für interne Anwendungsfälle aufgrund seiner besseren Komprimierung oder bei Open-Source-Lizenzierungsanforderungen gewählt.

#### AV1

AV1 ist ein neuer Open-Source-Codec, der von der [Alliance for Open Media](https://aomedia.org/) entwickelt wurde. AV1 bietet eine bessere Komprimierung als sowohl H.264 als auch VP9 bei gleicher Qualität, und die Dekodierunterstützung hat nun weltweit über 90 % Abdeckung über Browser hinweg.

Die AV1-Kodierungsunterstützung ist auf Desktop-Browsern stark, jedoch eingeschränkt auf Safari und Android. AV1 bietet eine bessere Qualität pro Bit als VP9, erfordert jedoch mehr Rechenleistung zum Kodieren. Verbrauchergeräte haben zunehmend Unterstützung für AV1-Hardwarebeschleunigung, was das AV1-Kodieren praktikabler machen kann. Die Entscheidung, AV1 gegenüber VP9 zu verwenden, hängt typischerweise davon ab, ob die bessere Qualität pro Bit den zusätzlichen Kodierungsaufwand für einen bestimmten Anwendungsfall rechtfertigt.

#### HEVC (H.265)

HEVC bietet eine bessere Komprimierung als H.264, weist jedoch signifikante Lücken in der Browser-Kodierungsunterstützung außerhalb von Apple-Plattformen auf. Es wird nicht als allgemeines Kodierungsziel empfohlen.

Wie H.264 ist auch HEVC ein patentierter Codec. Der Codec unterliegt in bestimmten Fällen Lizenzgebühren. Entwickler sollten die Nutzung zusammen mit rechtlichem Beistand überprüfen.

### Codec-Container-Kompatibilität

Nicht alle Codecs werden von allen Containern unterstützt. Die folgende Tabelle behandelt die beiden häufigsten Webvideo-Container:

| Codec | MP4       | WebM |
| ----- | --------- | ---- |
| H.264 | Ja        | Nein |
| VP9   | Teilweise | Ja   |
| AV1   | Teilweise | Ja   |
| HEVC  | Ja        | Nein |

H.264 ist der Standard-Codec für MP4. VP9 und AV1 sind die Standard-Codecs für WebM. Während VP9 und AV1 in einigen Umgebungen teilweise MP4-Unterstützung haben, ist die Kombination mit WebM zuverlässiger.

### Auswahl des Codec-Strings

Für jede Codec-Familie gibt es Hunderte von möglichen Codec-Strings.

Jeder Codec-String kodiert ein **Profil** und **Level**, die die Fähigkeiten und die Kompatibilität des kodierten Streams bestimmen. Das Profil steuert, welche Kodierungsfunktionen aktiviert sind — niedrigere Profile wie Baseline sind einfacher und breiter kompatibel, während höhere Profile wie High eine bessere Komprimierung ermöglichen, jedoch auf leistungsfähigerer Hardware angewiesen sind. Das Level gibt die maximale Auflösung und Bitrate an, die der Stream verwenden kann. Im Allgemeinen sollten Sie niedrigere Profile und Levels bevorzugen, es sei denn, Sie benötigen speziell die höhere Auflösung oder Komprimierungseffizienz.

Die folgenden Tabellen bieten einen praktischen Ausgangspunkt für Codec-Strings, mit Levels und Profilen, die die Kodierungskompatibilität maximieren.

#### H.264

| Codec-String  | Profil   | Maximalauflösung | Unterstützung                                                      |
| ------------- | -------- | ---------------- | ------------------------------------------------------------------ |
| `avc1.42001f` | Baseline | 720p             | [99,6%](https://webcodecsfundamentals.org/codecs/avc1.42001f.html) |
| `avc1.4d0034` | Main     | 4K               | [98,9%](https://webcodecsfundamentals.org/codecs/avc1.4d0034.html) |
| `avc1.42003e` | Baseline | 8K               | [86,8%](https://webcodecsfundamentals.org/codecs/avc1.42003e.html) |
| `avc1.64003e` | High     | 8K               | [85,9%](https://webcodecsfundamentals.org/codecs/avc1.64003e.html) |

#### VP9

| Codec-String       | Level | Maximalauflösung | Unterstützung                                                            |
| ------------------ | ----- | ---------------- | ------------------------------------------------------------------------ |
| `vp09.00.30.08.00` | 3     | 720p             | [99,98%](https://webcodecsfundamentals.org/codecs/vp09.00.30.08.00.html) |
| `vp09.00.40.08.00` | 4     | 2K               | [99,96%](https://webcodecsfundamentals.org/codecs/vp09.00.40.08.00.html) |
| `vp09.00.50.08.00` | 5     | 4K               | [99,97%](https://webcodecsfundamentals.org/codecs/vp09.00.50.08.00.html) |
| `vp09.00.61.08.00` | 6.1   | 8K               | [99,97%](https://webcodecsfundamentals.org/codecs/vp09.00.61.08.00.html) |

#### AV1

| Codec-String    | Level | Maximalauflösung | Unterstützung                                                        |
| --------------- | ----- | ---------------- | -------------------------------------------------------------------- |
| `av01.0.05M.08` | 3.1   | 720p             | [87,9%](https://webcodecsfundamentals.org/codecs/av01.0.05M.08.html) |
| `av01.0.08M.08` | 4.0   | 1080p            | [87,8%](https://webcodecsfundamentals.org/codecs/av01.0.08M.08.html) |
| `av01.0.12M.08` | 5.0   | 4K               | [87,8%](https://webcodecsfundamentals.org/codecs/av01.0.12M.08.html) |

#### HEVC

| Codec-String       | Level | Maximalauflösung | Unterstützung                                                           |
| ------------------ | ----- | ---------------- | ----------------------------------------------------------------------- |
| `hvc1.1.6.L120.B0` | 4.0   | 1080p            | [73,6%](https://webcodecsfundamentals.org/codecs/hev1.1.6.L120.B0.html) |
| `hvc1.1.6.L150.B0` | 5.0   | 4K               | [73,6%](https://webcodecsfundamentals.org/codecs/hvc1.1.6.L150.B0.html) |
| `hvc1.1.6.L180.B0` | 6.0   | 8K               | [73,1%](https://webcodecsfundamentals.org/codecs/hvc1.1.6.L180.B0.html) |

Sehen Sie sich die [Codec-Support-Tabelle](https://webcodecsfundamentals.org/datasets/codec-support-table/) für eine vollständige Liste potenzieller Codec-Strings sowie die Unterstützung in Browsern und Geräten an.

### Format der Codec-Strings

Der vollständig qualifizierte Codec-String kodiert die Codec-Familie, das Profil, das Level und andere Parameter, die beeinflussen, welche Hardware den Stream kodieren oder dekodieren kann und in welcher Auflösung und Qualität.

Das Format dieser Codec-Strings ist im [W3C-Codec-Register](https://w3c.github.io/webcodecs/codec_registry.html) spezifiziert, und das Format ist für jede Codec-Familie unterschiedlich.

#### H.264

`avc1.4d0034`

- `avc1` – H.264/AVC-Codec-Identifier
- `4d` – Profil-IDC in Hexadezimal (`4d` = Main-Profil)
- `00` – Einschränkungsflags
- `34` – Level-IDC in Hexadezimal (`34` = Level 5.2, unterstützt bis zu 4K)

#### VP9

`vp09.00.40.08.00`

- `vp09` – VP9-Codec-Identifier
- `00` – Profil
- `40` – Level (`40` = Level 4.0, unterstützt bis zu 2K)
- `08` – Bittiefe (8-Bit)
- `00` – Chroma-Subsampling

#### AV1

`av01.0.05M.08`

- `av01` – AV1-Codec-Identifier
- `0` – Profil (Main)
- `05M` – Level und Tier (`05` = Level 3.1, `M` = Main-Tier)
- `08` – Bittiefe (8-Bit)

#### HEVC

`hvc1.1.6.L150.B0`

- `hvc1` – HEVC-Codec-Identifier (MP4/QuickTime-Variante)
- `1` – Profil (`1` = Main-Profil)
- `6` – Kompatibilitätsflags
- `L150` – Level × 30 (`L150` = Level 5.0, unterstützt bis zu 4K)
- `B0` – Tier und Einschränkungsflags (`B0` = Main-Tier)

## Audio-Codecs

### Opus

Opus ist ein Open-Source-Codec mit breiter Kodierungsunterstützung über Browser und Plattformen hinweg. Es ist der Standard-Audio-Codec für WebM-Dateien und die empfohlene Wahl für die meisten WebCodecs-Audio-Kodierungsanwendungsfälle.

### AAC

AAC ist der Standard-Audio-Codec für MP4-Dateien und wird benötigt, wenn MP4-Output angesteuert werden soll. Allerdings hat AAC-Kodierungsunterstützung in WebCodecs bemerkenswerte Lücken: Es wird in Firefox auf keiner Plattform unterstützt, auch nicht in irgendeinem Browser auf Desktop-Linux.

AAC-Kodierung wird universell in Safari-Versionen unterstützt, die [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) (Safari 26+) unterstützen, aber frühere Versionen von Safari unterstützen Audio-Kodierung generell nicht.

### MP3 und PCM

MP3 und PCM sind nicht weit verbreitet als Kodierungsziele, wobei die MP3-Kodierung derzeit von keinem großen Browser unterstützt wird. PCM (unkomprimiertes Audio) ist als [`AudioData`](/de/docs/Web/API/AudioData)-Format für die Rohdatenverarbeitung von Audio verfügbar, aber die Unterstützung für Kodierung mit `AudioEncoder` ist begrenzt.

### Audio-Codec-String-Referenz

Audio-Codec-Strings sind einfacher als Video-Codec-Strings. Opus erfordert keine zusätzlichen Parameter; AAC verwendet eine kurze Parameterzeichenfolge.

| Codec  | Codec-String | Container | Encoder-Unterstützung                                            | Decoder-Unterstützung                                            |
| ------ | ------------ | --------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Opus   | `opus`       | WebM      | [96,1%](https://webcodecsfundamentals.org/codecs/opus.html)      | [96,5%](https://webcodecsfundamentals.org/codecs/opus.html)      |
| AAC    | `mp4a.40.2`  | MP4       | [90,1%](https://webcodecsfundamentals.org/codecs/mp4a.40.2.html) | [96,4%](https://webcodecsfundamentals.org/codecs/mp4a.40.2.html) |
| MP3    | `mp3`        | —         | [0%](https://webcodecsfundamentals.org/codecs/mp3.html)          | [96,5%](https://webcodecsfundamentals.org/codecs/mp3.html)       |
| FLAC   | `flac`       | —         | [0%](https://webcodecsfundamentals.org/codecs/flac.html)         | [96,5%](https://webcodecsfundamentals.org/codecs/flac.html)      |
| Vorbis | `vorbis`     | WebM      | [3,8%](https://webcodecsfundamentals.org/codecs/vorbis.html)     | [96,5%](https://webcodecsfundamentals.org/codecs/vorbis.html)    |
| PCM    | `pcm-f32`    | —         | [8,7%](https://webcodecsfundamentals.org/codecs/pcm-f32.html)    | [94,6%](https://webcodecsfundamentals.org/codecs/pcm-f32.html)   |

Die niedrigere AAC-Kodierungsunterstützung spiegelt die oben beschriebenen Plattformlücken wider — Firefox (alle Plattformen), Desktop-Linux (alle Browser) und die teilweise Unterstützung von `AudioEncoder` auf Apple-Geräten. AAC hat mehrere Varianten — `mp4a.40.2` (AAC-LC) ist die Standardwahl zum Kodieren. `mp4a.40.5` und `mp4a.40.29` entsprechen HE-AAC-Konfigurationen, die Spectral Band Replication (SBR) verwenden, wodurch der Decoder Audio mit doppelter der konfigurierten Abtastrate ausgibt.

PCM ist in mehreren Varianten verfügbar: `pcm-f32` (32-Bit Fließkomma), `pcm-s16` (16-Bit vorzeichenbehaftet), `pcm-s24` (24-Bit vorzeichenbehaftet), `pcm-s32` (32-Bit vorzeichenbehaftet) und `pcm-u8` (8-Bit vorzeichenlos). Alle Varianten haben gleichwertige Browser-Unterstützung. Das `pcm-f32`-Format entspricht dem `f32-planar`-Layout, das von [`AudioData`](/de/docs/Web/API/AudioData) verwendet wird und ist die praktischste Wahl für die Rohdatenverarbeitung von Audio.

Verwenden Sie [`AudioEncoder.isConfigSupported()`](/de/docs/Web/API/AudioEncoder/isConfigSupported_static), um die Unterstützung zur Laufzeit zu überprüfen, bevor Sie einen `AudioEncoder` konfigurieren. Beachten Sie, dass `AudioEncoder` selbst nicht in allen Browsern verfügbar ist — prüfen Sie auf seine Existenz mit `typeof AudioEncoder !== "undefined"` bevor Sie `isConfigSupported()` aufrufen.

## Häufige Anwendungsfälle

Sie müssen einen Video-Codec und einen Audio-Codec zusammen mit dem Containerformat als Paket auswählen. Für praktische Schnellstartleitfäden, hier einige gängige Konfigurationen:

- **Ziel der maximalen Kompatibilität** (Video, das zur Wiedergabe in Drittanbieter-Software oder auf einer breiten Palette von Geräten gedacht ist): H.264 (z.B. `avc1.4d0034`) + AAC (`mp4a.40.2`) in einem MP4-Container ist in der Praxis die häufigste Wahl.
- **Open-Source-Projekte oder Anwendungen, die sowohl die Kodierung als auch die Wiedergabe kontrollieren** (z.B. interne Tools, In-App-Streaming): VP9 (z.B. `vp09.00.40.08.00`) + Opus (`opus`) in einem WebM-Container ist eine natürliche Wahl — beide sind Open-Source, und WebM ist der Standardcontainer für diese Kombination.
- **Maximale Kompression** (z.B. groß angelegtes Streaming): AV1 + Opus in einem WebM-Container, vorausgesetzt, Ihre Zielgruppe verfügt über ausreichende Hardwareunterstützung. Verwenden Sie [`VideoEncoder.isConfigSupported()`](/de/docs/Web/API/VideoEncoder/isConfigSupported_static), um die Unterstützung zu überprüfen, bevor Sie sich für diese Kombination entscheiden.

## Unterstützung zur Laufzeit überprüfen

Vor der Kodierung verwenden Sie [`VideoEncoder.isConfigSupported()`](/de/docs/Web/API/VideoEncoder/isConfigSupported_static), um zu überprüfen, ob eine gegebene Konfiguration auf dem aktuellen Gerät unterstützt wird:

```js
const { supported } = await VideoEncoder.isConfigSupported({
  codec: "avc1.4d0034",
  width: 1920,
  height: 1080,
});
```

Da die Hardware-Unterstützung je nach Gerät variiert, ist es gängig, Codec-Strings von höchster zu niedrigster Qualität zu testen und den ersten unterstützten zu verwenden:

```js
const candidates = ["avc1.64003e", "avc1.4d0034", "avc1.42003e", "avc1.42001f"];
let codecString;

for (const codec of candidates) {
  const { supported } = await VideoEncoder.isConfigSupported({
    codec,
    width: 1920,
    height: 1080,
    bitrate: 5_000_000,
    framerate: 30,
  });
  if (supported) {
    codecString = codec;
    break;
  }
}
```

Das gleiche Muster gilt für VP9:

```js
const candidates = [
  "vp09.00.61.08.00",
  "vp09.00.50.08.00",
  "vp09.00.40.08.00",
  "vp09.00.10.08.00",
];
let codecString;

for (const codec of candidates) {
  const { supported } = await VideoEncoder.isConfigSupported({
    codec,
    width: 1920,
    height: 1080,
    bitrate: 5_000_000,
    framerate: 30,
  });
  if (supported) {
    codecString = codec;
    break;
  }
}
```

Das gleiche Muster gilt für Audio. Da [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) nicht in allen Browsern verfügbar ist, prüfen Sie auf seine Existenz bevor Sie `isConfigSupported()` aufrufen:

```js
if (typeof AudioEncoder !== "undefined") {
  const { supported } = await AudioEncoder.isConfigSupported({
    codec: "opus",
    sampleRate: 48000,
    numberOfChannels: 2,
  });
}
```

## Siehe auch

- [WebCodecs Support Dataset](https://zenodo.org/records/19187467)
- [Videobearbeitungskonzepte](/de/docs/Web/API/WebCodecs_API/Video_processing_concepts)
- [Verwendung der WebCodecs API](/de/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
- [Codec-Support-Tabelle](https://webcodecsfundamentals.org/datasets/codec-support-table/) auf WebCodecs Fundamentals
- [`VideoEncoder.isConfigSupported()`](/de/docs/Web/API/VideoEncoder/isConfigSupported_static)
- [`VideoDecoder.isConfigSupported()`](/de/docs/Web/API/VideoDecoder/isConfigSupported_static)
- [`AudioEncoder.isConfigSupported()`](/de/docs/Web/API/AudioEncoder/isConfigSupported_static)
- [`AudioDecoder.isConfigSupported()`](/de/docs/Web/API/AudioDecoder/isConfigSupported_static)
