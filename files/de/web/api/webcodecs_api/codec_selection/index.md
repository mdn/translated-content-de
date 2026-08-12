---
title: Codec-Auswahl
slug: Web/API/WebCodecs_API/Codec_selection
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

{{DefaultAPISidebar("WebCodecs API")}}

Während Entwickler in der Regel auf Codecs mit ihrem Code-Identifier-String wie `vp9` oder `h264` verweisen, gibt es viele Konfigurationsprofile, Level und andere Parameter, die genau steuern, wie die Daten kodiert und dekodiert werden.

Die [WebCodecs-API](/de/docs/Web/API/WebCodecs_API) erfordert die Arbeit mit vollständig spezifizierten Codec-Strings, wie `vp09.00.40.08.00`, anstelle von ungenauen Strings wie `vp9` oder `h264`. Vollständig spezifizierte Codec-Strings detaillieren nicht nur die Codec-Familie, sondern auch das Profil, den Level und andere Parameter.

Die Auswahl des richtigen Strings hängt von Ihrem Anwendungsfall ab, wird jedoch hauptsächlich von Kompatibilitätsbedenken sowie der Hardware und Software, auf der Sie arbeiten möchten, beeinflusst. Dieser Leitfaden erklärt, wie Codec-Strings funktionieren, wie Sie die richtigen Codecs für [häufige Anwendungsfälle](#häufige_anwendungsfälle) auswählen und welche Ansätze es für ein reibungsloses Zurückfallen auf alternative Codec-Strings gibt, wenn Ihre Präferenzen nicht verfügbar sind.

## Dekodieren vs. Kodieren

Beim **Dekodieren** einer Video- oder Audiodatei bestimmt der Codec, wie die Datei ursprünglich kodiert wurde – Sie wählen ihn nicht aus. Demuxing-Bibliotheken wie [Mediabunny](https://mediabunny.dev/) und [web-demuxer](https://github.com/bilibili/web-demuxer) extrahieren den korrekten Codec-String für eine gegebene Datei, den Sie direkt an [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) oder [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) während der Konfiguration verwenden können.

Beim **Kodieren** wählen Sie den Codec. Der Rest dieses Leitfadens behandelt, wie man einen Codec auswählt.

## Video-Codecs

### Familien von Video-Codecs

Bevor Sie einen Codec-String wie `vp09.00.40.08.00` oder `avc1.4d0034` auswählen, lohnt es sich, die Codec-Familien zu überprüfen.

#### H.264 (AVC)

H.264 ist einer der am weitesten unterstützten Codecs in Browsern, Betriebssystemen und Verbrauchergeräten. Er ist der am häufigsten verwendete Codec in MP4-Dateien, und Anwendungen, die Videos für die Wiedergabe in Drittanbieter-Software kodieren, wählen in der Regel H.264 als pragmatische Wahl für maximale Kompatibilität.

Obwohl er beliebt ist, sollte beachtet werden, dass H.264 ein patentierter Codec ist. Während Browseranbieter Lizenzen halten, die die in WebCodecs verwendeten H.264-Encoder-Implementierungen abdecken, unterliegt der Codec in bestimmten Fällen Lizenzgebühren. Entwickler sollten die Nutzung mit rechtlichem Beistand überprüfen.

#### VP9

VP9 ist ein von Google entwickelter Open-Source-Codec und bietet bei gleicher Qualität eine bessere Kompression als H.264. VP9 in WebM-Containern wird von modernen Browsern weitgehend unterstützt, mit einer Abdeckung, die mit H.264 vergleichbar ist oder diese übersteigt.

VP9 in WebM-Containern wird auch von nativen Videoplayern auf Windows (Windows Media Player) und Drittanbieter-Playern wie VLC unterstützt, jedoch fehlt derzeit die native Wiedergabeunterstützung auf macOS und iOS.

VP9 wird manchmal, aber nicht immer, als Codec innerhalb von MP4-Dateien unterstützt, da die Unterstützung für diese Konfiguration von der Wiedergabesoftware abhängt.

VP9 wird oft für interne Anwendungsfälle aufgrund seiner besseren Komprimierung oder wenn Open-Source-Lizenzen wichtig sind, gewählt.

#### AV1

AV1 ist ein neuerer Open-Source-Codec, der von der [Alliance for Open Media](https://aomedia.org/) entwickelt wurde. AV1 bietet eine bessere Kompression als sowohl H.264 als auch VP9 bei gleicher Qualität, und die Dekodierungsunterstützung beträgt mittlerweile über 90 % weltweit in Browsern.

Die Codierunterstützung für AV1 ist in Desktop-Browsern stark, jedoch auf Safari und Android begrenzt. AV1 bietet eine bessere Qualität pro Bit als VP9, ist jedoch rechenintensiver zu kodieren. Verbrauchergeräte unterstützen zunehmend die AV1-Hardware-Beschleunigung, was die AV1-Kodierung praktischer machen kann. Die Entscheidung, AV1 über VP9 zu verwenden, hängt in der Regel davon ab, ob die bessere Qualität pro Bit die zusätzliche Kodierungsüberlast für einen bestimmten Anwendungsfall rechtfertigt.

#### HEVC (H.265)

HEVC bietet eine bessere Kompression als H.264, weist jedoch erhebliche Lücken in der browserseitigen Kodierungsunterstützung außerhalb der Apple-Plattformen auf.
Es wird nicht als allgemeines Kodierungsziel empfohlen.

Wie H.264 ist HEVC ein patentierter Codec. Der Codec unterliegt in bestimmten Fällen Lizenzgebühren. Entwickler sollten die Nutzung mit rechtlichem Beistand überprüfen.

### Kompatibilität von Codec und Container

Nicht alle Codecs werden von allen Containern unterstützt.
Die folgende Tabelle behandelt die beiden häufigsten Web-Video-Container:

| Codec | MP4      | WebM |
| ----- | -------- | ---- |
| H.264 | Ja       | Nein |
| VP9   | Partiell | Ja   |
| AV1   | Partiell | Ja   |
| HEVC  | Ja       | Nein |

H.264 ist der Standard-Codec für MP4. VP9 und AV1 sind die Standard-Codecs für WebM.
Obwohl VP9 und AV1 in einigen Umgebungen teilweise MP4-Unterstützung haben, ist die Koppelung mit WebM zuverlässiger.

### Auswahl von Codec-Strings

Für jede Codec-Familie gibt es Hunderte von möglichen Codec-Strings.

Jeder Codec-String kodiert ein **Profil** und einen **Level**, die die Fähigkeiten und Kompatibilität des kodierten Streams bestimmen. Das Profil steuert, welche Kodierungsfunktionen aktiviert sind – niedrigere Profile wie Baseline sind einfacher und breiter kompatibel, während höhere Profile wie High eine bessere Kompression bei der Voraussetzung einer leistungsfähigeren Hardware ermöglichen. Der Level setzt die maximale Auflösung und Bitrate, die der Stream verwenden kann. Im Allgemeinen sollten niedrigere Profile und Level bevorzugt werden, es sei denn, Sie benötigen speziell die höhere Auflösung oder Kompressionseffizienz.

Die folgenden Tabellen bieten einen praktischen Ausgangspunkt für Codec-Strings mit Leveln und Profilen, die die Kodierungskompatibilität maximieren.

#### H.264

| Codec-String  | Profil   | Max. Auflösung | Unterstützung                                                      |
| ------------- | -------- | -------------- | ------------------------------------------------------------------ |
| `avc1.42001f` | Baseline | 720p           | [99,6%](https://webcodecsfundamentals.org/codecs/avc1.42001f.html) |
| `avc1.4d0034` | Main     | 4K             | [98,9%](https://webcodecsfundamentals.org/codecs/avc1.4d0034.html) |
| `avc1.42003e` | Baseline | 8K             | [86,8%](https://webcodecsfundamentals.org/codecs/avc1.42003e.html) |
| `avc1.64003e` | High     | 8K             | [85,9%](https://webcodecsfundamentals.org/codecs/avc1.64003e.html) |

#### VP9

| Codec-String       | Level | Max. Auflösung | Unterstützung                                                            |
| ------------------ | ----- | -------------- | ------------------------------------------------------------------------ |
| `vp09.00.30.08.00` | 3     | 720p           | [99,98%](https://webcodecsfundamentals.org/codecs/vp09.00.30.08.00.html) |
| `vp09.00.40.08.00` | 4     | 2K             | [99,96%](https://webcodecsfundamentals.org/codecs/vp09.00.40.08.00.html) |
| `vp09.00.50.08.00` | 5     | 4K             | [99,97%](https://webcodecsfundamentals.org/codecs/vp09.00.50.08.00.html) |
| `vp09.00.61.08.00` | 6.1   | 8K             | [99,97%](https://webcodecsfundamentals.org/codecs/vp09.00.61.08.00.html) |

#### AV1

| Codec-String    | Level | Max. Auflösung | Unterstützung                                                        |
| --------------- | ----- | -------------- | -------------------------------------------------------------------- |
| `av01.0.05M.08` | 3.1   | 720p           | [87,9%](https://webcodecsfundamentals.org/codecs/av01.0.05M.08.html) |
| `av01.0.08M.08` | 4.0   | 1080p          | [87,8%](https://webcodecsfundamentals.org/codecs/av01.0.08M.08.html) |
| `av01.0.12M.08` | 5.0   | 4K             | [87,8%](https://webcodecsfundamentals.org/codecs/av01.0.12M.08.html) |

#### HEVC

| Codec-String       | Level | Max. Auflösung | Unterstützung                                                           |
| ------------------ | ----- | -------------- | ----------------------------------------------------------------------- |
| `hvc1.1.6.L120.B0` | 4.0   | 1080p          | [73,6%](https://webcodecsfundamentals.org/codecs/hev1.1.6.L120.B0.html) |
| `hvc1.1.6.L150.B0` | 5.0   | 4K             | [73,6%](https://webcodecsfundamentals.org/codecs/hvc1.1.6.L150.B0.html) |
| `hvc1.1.6.L180.B0` | 6.0   | 8K             | [73,1%](https://webcodecsfundamentals.org/codecs/hvc1.1.6.L180.B0.html) |

Siehe die [Codec-Unterstützungs-Tabelle](https://webcodecsfundamentals.org/datasets/codec-support-table/) für eine vollständige Liste potenzieller Codec-Strings und Unterstützung über Browser und Geräte hinweg.

### Codec-String-Format

Der vollständig qualifizierte Codec-String kodiert die Codec-Familie, das Profil, den Level und andere Parameter, die beeinflussen, welche Hardware den Stream kodieren oder dekodieren kann und mit welcher Auflösung und Qualität.

Das Format für diese Codec-Strings wird im [W3C Codecs-Register](https://w3c.github.io/webcodecs/codec_registry.html) festgelegt, und das Format ist für jede Codec-Familie unterschiedlich.

#### H.264

`avc1.4d0034`

- `avc1` — H.264/AVC-Codec-Identifikator
- `4d` — Profil-IDC in Hexadezimal (`4d` = Main-Profil)
- `00` — Einschränkungsflaggen
- `34` — Level-IDC in Hexadezimal (`34` = Level 5.2, unterstützt bis zu 4K)

#### VP9

`vp09.00.40.08.00`

- `vp09` — VP9-Codec-Identifikator
- `00` — Profil
- `40` — Level (`40` = Level 4.0, unterstützt bis zu 2K)
- `08` — Bit-Tiefe (8-Bit)
- `00` — Chroma-Subsampling

#### AV1

`av01.0.05M.08`

- `av01` — AV1-Codec-Identifikator
- `0` — Profil (Main)
- `05M` — Level und Tier (`05` = Level 3.1, `M` = Main-Tier)
- `08` — Bit-Tiefe (8-Bit)

#### HEVC

`hvc1.1.6.L150.B0`

- `hvc1` — HEVC-Codec-Identifikator (MP4/QuickTime-Variante)
- `1` — Profil (`1` = Main-Profil)
- `6` — Kompatibilitätsflaggen
- `L150` — Level × 30 (`L150` = Level 5.0, unterstützt bis zu 4K)
- `B0` — Tier- und Einschränkungsflaggen (`B0` = Main-Tier)

## Audio-Codecs

### Opus

Opus ist ein Open-Source-Codec mit umfassender Codierungsunterstützung über Browser und Plattformen hinweg. Es ist der Standard-Audiocodec für WebM-Dateien und die empfohlene Wahl für die meisten WebCodecs-Audiokodierungs-Anwendungsfälle.

### AAC

AAC ist der Standard-Audiocodec für MP4-Dateien und erforderlich, wenn eine MP4-Ausgabe angestrebt wird. Allerdings weist die AAC-Kodierungsunterstützung in WebCodecs bemerkenswerte Lücken auf: Sie wird in Firefox auf keiner Plattform und in keinem Browser auf Desktop-Linux unterstützt.

Die AAC-Kodierung wird universell in Safari-Versionen unterstützt, die [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) (Safari 26+) unterstützen, aber frühere Versionen von Safari unterstützen generell keine Audiokodierung.

### MP3 und PCM

MP3 und PCM werden als Kodierungsziele nicht weitgehend unterstützt, wobei die MP3-Kodierung derzeit von keinem großen Browser unterstützt wird. PCM (unkomprimiertes Audio) ist als [`AudioData`](/de/docs/Web/API/AudioData)-Format für die Verarbeitung von Roh-Audio verfügbar, jedoch ist die Unterstützung für die Kodierung mit `AudioEncoder` begrenzt.

### Referenz für Audio-Codec-Strings

Audio-Codec-Strings sind einfacher als Video-Codec-Strings. Opus erfordert keine zusätzlichen Parameter; AAC verwendet einen kurzen Parameter-String.

| Codec  | Codec-String | Container | Kodierungsunterstützung                                          | Dekodierungsunterstützung                                        |
| ------ | ------------ | --------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Opus   | `opus`       | WebM      | [96,1%](https://webcodecsfundamentals.org/codecs/opus.html)      | [96,5%](https://webcodecsfundamentals.org/codecs/opus.html)      |
| AAC    | `mp4a.40.2`  | MP4       | [90,1%](https://webcodecsfundamentals.org/codecs/mp4a.40.2.html) | [96,4%](https://webcodecsfundamentals.org/codecs/mp4a.40.2.html) |
| MP3    | `mp3`        | —         | [0%](https://webcodecsfundamentals.org/codecs/mp3.html)          | [96,5%](https://webcodecsfundamentals.org/codecs/mp3.html)       |
| FLAC   | `flac`       | —         | [0%](https://webcodecsfundamentals.org/codecs/flac.html)         | [96,5%](https://webcodecsfundamentals.org/codecs/flac.html)      |
| Vorbis | `vorbis`     | WebM      | [3,8%](https://webcodecsfundamentals.org/codecs/vorbis.html)     | [96,5%](https://webcodecsfundamentals.org/codecs/vorbis.html)    |
| PCM    | `pcm-f32`    | —         | [8,7%](https://webcodecsfundamentals.org/codecs/pcm-f32.html)    | [94,6%](https://webcodecsfundamentals.org/codecs/pcm-f32.html)   |

Die niedrigere AAC-Kodierungsunterstützung spiegelt die oben beschriebenen Plattformunterschiede wider — Firefox (alle Plattformen), Desktop-Linux (alle Browser) sowie partielle Unterstützung für `AudioEncoder` auf Apple-Geräten. AAC hat mehrere Varianten — `mp4a.40.2` (AAC-LC) ist die Standardwahl für die Kodierung. `mp4a.40.5` und `mp4a.40.29` entsprechen HE-AAC-Konfigurationen, die Spektralbandreplikation (SBR) verwenden und dazu führen, dass der Decoder Audio mit doppelter konfigurierter Abtastrate ausgibt.

PCM ist in mehreren Varianten verfügbar: `pcm-f32` (32-Bit-Float), `pcm-s16` (16-Bit-Signed), `pcm-s24` (24-Bit-Signed), `pcm-s32` (32-Bit-Signed) und `pcm-u8` (8-Bit-Unsigned). Alle Varianten haben eine äquivalente Browserunterstützung. Das `pcm-f32`-Format entspricht dem `f32-planar`-Layout, das von [`AudioData`](/de/docs/Web/API/AudioData) verwendet wird, und ist die praktischste Wahl für die Verarbeitung von Roh-Audio.

Verwenden Sie [`AudioEncoder.isConfigSupported()`](/de/docs/Web/API/AudioEncoder/isConfigSupported_static), um die Unterstützung zur Laufzeit zu überprüfen, bevor Sie einen `AudioEncoder` konfigurieren. Beachten Sie, dass `AudioEncoder` selbst nicht in allen Browsern verfügbar ist — überprüfen Sie mit `typeof AudioEncoder !== "undefined"`, ob dieser vorhanden ist, bevor Sie `isConfigSupported()` aufrufen.

## Häufige Anwendungsfälle

Sie müssen einen Video-Codec und einen Audio-Codec sowie das Containerformat zusammen als Paket auswählen. Für eine praktische Schnellstart-Anleitung hier einige häufige Konfigurationen:

- **Ziel: Maximale Kompatibilität** (Video, das für die Wiedergabe in Drittanbieter-Software oder auf einer breiten Palette von Geräten gedacht ist): H.264 (z. B. `avc1.4d0034`) + AAC (`mp4a.40.2`) in einem MP4-Container ist die häufigste Wahl in der Praxis.
- **Open-Source-Projekte oder Anwendungen, die sowohl die Kodierung als auch die Wiedergabe steuern** (z. B. interne Tools, In-App-Streaming): VP9 (z. B. `vp09.00.40.08.00`) + Opus (`opus`) in einem WebM-Container ist eine natürliche Kombination — beide sind Open-Source, und WebM ist der Standard-Container für diese Kombination.
- **Maximale Kompression** (z. B. großflächiges Streaming): AV1 + Opus in einem WebM-Container, sofern Ihre Zielgruppe ausreichende Hardwareunterstützung hat. Verwenden Sie [`VideoEncoder.isConfigSupported()`](/de/docs/Web/API/VideoEncoder/isConfigSupported_static), um dies zu überprüfen, bevor Sie sich für diese Kombination entscheiden.

## Überprüfung der Unterstützung zur Laufzeit

Bevor Sie kodieren, verwenden Sie [`VideoEncoder.isConfigSupported()`](/de/docs/Web/API/VideoEncoder/isConfigSupported_static), um zu überprüfen, ob eine bestimmte Konfiguration auf dem aktuellen Gerät unterstützt wird:

```js
const { supported } = await VideoEncoder.isConfigSupported({
  codec: "avc1.4d0034",
  width: 1920,
  height: 1080,
});
```

Da die Hardwareunterstützung je nach Gerät variiert, besteht ein gängiges Muster darin, Codec-Strings von höchster bis niedrigster Qualität zu testen und den ersten unterstützten zu verwenden:

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

Dasselbe Muster gilt für VP9:

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

Dasselbe Muster gilt für Audio. Da [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) nicht in allen Browsern verfügbar ist, überprüfen Sie vor dem Aufruf von `isConfigSupported()` die Existenz:

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

- [WebCodecs-Unterstützungs-Dataset](https://zenodo.org/records/19187467)
- [Konzepte zur Videoverarbeitung](/de/docs/Web/API/WebCodecs_API/Video_processing_concepts)
- [Verwendung der WebCodecs-API](/de/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
- [Codec-Unterstützungs-Tabelle](https://webcodecsfundamentals.org/datasets/codec-support-table/) auf WebCodecs Fundamentals
- [`VideoEncoder.isConfigSupported()`](/de/docs/Web/API/VideoEncoder/isConfigSupported_static)
- [`VideoDecoder.isConfigSupported()`](/de/docs/Web/API/VideoDecoder/isConfigSupported_static)
- [`AudioEncoder.isConfigSupported()`](/de/docs/Web/API/AudioEncoder/isConfigSupported_static)
- [`AudioDecoder.isConfigSupported()`](/de/docs/Web/API/AudioDecoder/isConfigSupported_static)
