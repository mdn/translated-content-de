---
title: Auswahl von Codecs
slug: Web/API/WebCodecs_API/Codec_selection
l10n:
  sourceCommit: 98b1f612078d2716d9330e36c74351bddd77fa05
---

{{DefaultAPISidebar("WebCodecs API")}}

Entwickler beziehen sich oft auf Codecs anhand ihrer Identifizierungszeichenfolge, wie `vp9` oder `h264`, aber es gibt viele Konfigurationsprofile, Ebenen und andere Parameter, die genau steuern, wie die Daten kodiert und dekodiert werden.

Die [WebCodecs API](/de/docs/Web/API/WebCodecs_API) erfordert die Arbeit mit vollständig spezifizierten Codec-Zeichenfolgen, wie `vp09.00.40.08.00`, anstelle von mehrdeutigen Zeichenfolgen wie `vp9` oder `h264`. Vollständig spezifizierte Codec-Zeichenfolgen geben nicht nur die Codec-Familie an, sondern auch das Profil, die Ebene und andere Parameter.

Die Auswahl der korrekten Zeichenfolge hängt von Ihrem Anwendungsfall ab, wird jedoch hauptsächlich durch Kompatibilitätsprobleme und die Hardware und Software beeinflusst, auf der Sie laufen möchten. Dieser Leitfaden erklärt, wie Codec-Zeichenfolgen funktionieren, wie man die richtigen Codecs für [häufige Anwendungsfälle](#häufige_anwendungsfälle) auswählt und gängige Ansätze für einen sanften Rückgriff auf alternative Codec-Zeichenfolgen, wenn Ihre Präferenzen nicht verfügbar sind.

## Dekodierung vs. Kodierung

Beim **Dekodieren** einer Video- oder Audiodatei wird der Codec durch die ursprüngliche Kodierung der Datei bestimmt – Sie wählen diesen nicht aus. Demultiplexing-Bibliotheken wie [Mediabunny](https://mediabunny.dev/) und [web-demuxer](https://github.com/bilibili/web-demuxer) extrahieren die korrekte Codec-Zeichenfolge für eine gegebene Datei, die Sie direkt an [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) oder [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) während der Konfiguration übergeben können.

Bei der **Kodierung** wählen Sie den Codec aus. Der Rest dieses Leitfadens behandelt, wie man einen Codec auswählt.

## Video-Codecs

### Video-Codec-Familien

Bevor Sie eine Codec-Zeichenfolge wie `vp09.00.40.08.00` oder `avc1.4d0034` auswählen, lohnt es sich, die Codec-Familien zu überprüfen.

#### H.264 (AVC)

H.264 ist einer der am weitesten unterstützten Codecs in Browsern, Betriebssystemen und Verbrauchsgeräten. Es ist der am häufigsten verwendete Codec in MP4-Dateien, und Anwendungen, die Videos für die Wiedergabe in Drittanbietersoftware kodieren, wählen typischerweise H.264 als pragmatische Wahl für maximale Kompatibilität.

Obwohl beliebt, sei darauf hingewiesen, dass H.264 ein patentierter Codec ist. Während Browseranbieter Lizenzen besitzen, die die H.264-Encoder-Implementierungen, die von WebCodecs verwendet werden, abdecken, unterliegt der Codec in bestimmten Fällen Lizenzgebühren. Entwickler sollten die Nutzung mit rechtlicher Beratung überprüfen.

#### VP9

VP9 ist ein von Google entwickelter Open-Source-Codec und bietet eine bessere Kompression als H.264 bei gleichwertiger Qualität. VP9 innerhalb von WebM-Containern wird in modernen Browsern weitgehend unterstützt, mit einer Reichweite, die mit H.264 vergleichbar ist oder diese übertrifft.

VP9 innerhalb von WebM-Containern wird auch von nativen Videoplayern unter Windows (Windows Media Player) und Drittspieler wie VLC unterstützt, fehlt jedoch derzeit die native Wiedergabeunterstützung auf macOS und iOS.

VP9 wird manchmal, aber nicht immer, als ein Codec innerhalb von MP4-Dateien unterstützt, da die Unterstützung für diese Konfiguration von der Wiedergabesoftware abhängt.

VP9 wird oft für interne Anwendungsfälle wegen seiner besseren Kompression oder wenn Open-Source-Lizenzierung wichtig ist, gewählt.

#### AV1

AV1 ist ein neuerer Open-Source-Codec, der von der [Alliance for Open Media](https://aomedia.org/) entwickelt wurde. AV1 bietet eine bessere Kompression als sowohl H.264 als auch VP9 bei derselben Qualität und die Dekodierungsunterstützung beträgt mittlerweile über 90 % global in Browsern.

Die AV1-Kodierungsunterstützung ist stark in Desktop-Browsern, jedoch eingeschränkt auf Safari und Android. AV1 bietet eine bessere Qualitäts-pro-Bit als VP9, ist jedoch rechenintensiver zu kodieren. Verbrauchsgeräte haben zunehmend Unterstützung für die AV1-Hardwarebeschleunigung, was die AV1-Kodierung praktischer machen kann. Die Entscheidung für AV1 über VP9 erfolgt typischerweise, wenn die bessere Qualität-pro-Bit den zusätzlichen Kodierungsaufwand für einen bestimmten Anwendungsfall rechtfertigt.

#### HEVC (H.265)

HEVC bietet eine bessere Kompression als H.264, hat jedoch erhebliche Lücken in der Browser-Kodierungsunterstützung außerhalb von Apple-Plattformen.
Er wird nicht als allgemeines Kodierungsziel empfohlen.

Wie H.264 ist HEVC ein patentierter Codec. Der Codec unterliegt in bestimmten Fällen Lizenzgebühren. Entwickler sollten die Nutzung mit rechtlicher Beratung überprüfen.

### Codec-Container-Kompatibilität

Nicht alle Codecs werden von allen Containern unterstützt. Die folgende Tabelle deckt die zwei häufigsten Webvideo-Container ab:

| Codec | MP4       | WebM |
| ----- | --------- | ---- |
| H.264 | Ja        | Nein |
| VP9   | Teilweise | Ja   |
| AV1   | Teilweise | Ja   |
| HEVC  | Ja        | Nein |

H.264 ist der Standardcodec für MP4. VP9 und AV1 sind die Standardcodecs für WebM. Während VP9 und AV1 in einigen Umgebungen Teilunterstützung für MP4 haben, ist die Kombination mit WebM zuverlässiger.

### Auswahl der Codec-Zeichenfolge

Für jede Codec-Familie gibt es Hunderte möglicher Codec-Zeichenfolgen.

Jede Codec-Zeichenfolge kodiert ein **Profil** und ein **Level**, die die Fähigkeiten und Kompatibilität des kodierten Streams bestimmen. Das Profil steuert, welche Kodierungsfunktionen aktiviert sind – niedrigere Profile wie Baseline sind einfacher und breiter kompatibel, während höhere Profile wie High eine bessere Kompression auf Kosten von mehr erforderlicher Hardware bieten. Das Level setzt die maximale Auflösung und Bitrate fest, die der Stream nutzen kann. Im Allgemeinen sollten niedrigere Profile und Level bevorzugt werden, es sei denn, Sie benötigen spezifisch die höhere Auflösung oder Kompressionseffizienz.

Die folgenden Tabellen bieten einen praktischen Ausgangspunkt für Codec-Zeichenfolgen, mit Levels und Profilen, die die Kodierungskompatibilität maximieren.

#### H.264

| Codec-Zeichenfolge | Profil   | Maximalauflösung | Unterstützung                                                      |
| ------------------ | -------- | ---------------- | ------------------------------------------------------------------ |
| `avc1.42001f`      | Baseline | 720p             | [99.6%](https://webcodecsfundamentals.org/codecs/avc1.42001f.html) |
| `avc1.4d0034`      | Main     | 4K               | [98.9%](https://webcodecsfundamentals.org/codecs/avc1.4d0034.html) |
| `avc1.42003e`      | Baseline | 8K               | [86.8%](https://webcodecsfundamentals.org/codecs/avc1.42003e.html) |
| `avc1.64003e`      | High     | 8K               | [85.9%](https://webcodecsfundamentals.org/codecs/avc1.64003e.html) |

#### VP9

| Codec-Zeichenfolge | Level | Maximalauflösung | Unterstützung                                                            |
| ------------------ | ----- | ---------------- | ------------------------------------------------------------------------ |
| `vp09.00.30.08.00` | 3     | 720p             | [99.98%](https://webcodecsfundamentals.org/codecs/vp09.00.30.08.00.html) |
| `vp09.00.40.08.00` | 4     | 2K               | [99.96%](https://webcodecsfundamentals.org/codecs/vp09.00.40.08.00.html) |
| `vp09.00.50.08.00` | 5     | 4K               | [99.97%](https://webcodecsfundamentals.org/codecs/vp09.00.50.08.00.html) |
| `vp09.00.61.08.00` | 6.1   | 8K               | [99.97%](https://webcodecsfundamentals.org/codecs/vp09.00.61.08.00.html) |

#### AV1

| Codec-Zeichenfolge | Level | Maximalauflösung | Unterstützung                                                        |
| ------------------ | ----- | ---------------- | -------------------------------------------------------------------- |
| `av01.0.05M.08`    | 3.1   | 720p             | [87.9%](https://webcodecsfundamentals.org/codecs/av01.0.05M.08.html) |
| `av01.0.08M.08`    | 4.0   | 1080p            | [87.8%](https://webcodecsfundamentals.org/codecs/av01.0.08M.08.html) |
| `av01.0.12M.08`    | 5.0   | 4K               | [87.8%](https://webcodecsfundamentals.org/codecs/av01.0.12M.08.html) |

#### HEVC

| Codec-Zeichenfolge | Level | Maximalauflösung | Unterstützung                                                           |
| ------------------ | ----- | ---------------- | ----------------------------------------------------------------------- |
| `hvc1.1.6.L120.B0` | 4.0   | 1080p            | [73.6%](https://webcodecsfundamentals.org/codecs/hev1.1.6.L120.B0.html) |
| `hvc1.1.6.L150.B0` | 5.0   | 4K               | [73.6%](https://webcodecsfundamentals.org/codecs/hvc1.1.6.L150.B0.html) |
| `hvc1.1.6.L180.B0` | 6.0   | 8K               | [73.1%](https://webcodecsfundamentals.org/codecs/hvc1.1.6.L180.B0.html) |

Sehen Sie die [Codec Support Table](https://webcodecsfundamentals.org/datasets/codec-support-table/) für eine umfassende Liste potenzieller Codec-Zeichenfolgen und Unterstützung über Browser & Geräte.

### Format der Codec-Zeichenfolge

Die vollständig qualifizierte Codec-Zeichenfolge kodiert die Codec-Familie, das Profil, das Level und andere Parameter, die beeinflussen, welche Hardware den Stream kodieren oder dekodieren kann und in welcher Auflösung und Qualität.

Das Format dieser Codec-Zeichenfolgen wird im [W3C codec registry](https://www.w3.org/TR/webcodecs-codec-registry/) festgelegt, und das Format unterscheidet sich für jede Codec-Familie.

#### H.264

`avc1.4d0034`

- `avc1` — H.264/AVC Codec-Identifikator
- `4d` — Profile IDC in Hexadezimal (`4d` = Main-Profil)
- `00` — Constraint Flags
- `34` — Level IDC in Hexadezimal (`34` = Level 5.2, unterstützt bis zu 4K)

#### VP9

`vp09.00.40.08.00`

- `vp09` — VP9 Codec-Identifikator
- `00` — Profil
- `40` — Level (`40` = Level 4.0, unterstützt bis zu 2K)
- `08` — Bit-Tiefe (8-Bit)
- `00` — Chroma Subsampling

#### AV1

`av01.0.05M.08`

- `av01` — AV1 Codec-Identifikator
- `0` — Profil (Main)
- `05M` — Level und Tier (`05` = Level 3.1, `M` = Main-Tier)
- `08` — Bit-Tiefe (8-Bit)

#### HEVC

`hvc1.1.6.L150.B0`

- `hvc1` — HEVC Codec-Identifikator (MP4/QuickTime-Variante)
- `1` — Profil (`1` = Main-Profil)
- `6` — Kompatibilitätsflags
- `L150` — Level × 30 (`L150` = Level 5.0, unterstützt bis zu 4K)
- `B0` — Tier und Constraint Flags (`B0` = Main-Tier)

## Audio-Codecs

### Opus

Opus ist ein Open-Source-Codec mit breiter Kodierungsunterstützung in Browsern und Plattformen. Es ist der Standard-Audiocodec für WebM-Dateien und die empfohlene Wahl für die meisten WebCodecs-Audiokodierungsanwendungen.

### AAC

AAC ist der Standard-Audiocodec für MP4-Dateien und wird benötigt, wenn Sie MP4-Ausgaben anstreben. Allerdings gibt es bei der AAC-Kodierungsunterstützung in WebCodecs bemerkenswerte Lücken: Es wird in Firefox auf keiner Plattform unterstützt oder in einem Browser auf Desktop-Linux.

AAC-Kodierung ist universell in Safari-Versionen unterstützt, die [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) unterstützen (Safari 26+), aber frühere Versionen von Safari unterstützen generell keine Audiokodierung.

### MP3 und PCM

MP3 und PCM werden nicht weitgehend als Kodierungsziele unterstützt, wobei MP3-Kodierung derzeit von keinem großen Browser unterstützt wird. PCM (unkomprimiertes Audio) ist als [`AudioData`](/de/docs/Web/API/AudioData)-Format für die Rohaudioverarbeitung verfügbar, aber die Unterstützung für die Kodierung mit `AudioEncoder` ist begrenzt.

### Audio-Codec-Zeichenfolgenreferenz

Audio-Codec-Zeichenfolgen sind einfacher als Video-Codec-Zeichenfolgen. Opus erfordert keine zusätzlichen Parameter; AAC verwendet eine kurze Parameterzeichenfolge.

| Codec  | Codec-Zeichenfolge | Container | Kodierer-Unterstützung                                           | Dekodierer-Unterstützung                                         |
| ------ | ------------------ | --------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Opus   | `opus`             | WebM      | [96.1%](https://webcodecsfundamentals.org/codecs/opus.html)      | [96.5%](https://webcodecsfundamentals.org/codecs/opus.html)      |
| AAC    | `mp4a.40.2`        | MP4       | [90.1%](https://webcodecsfundamentals.org/codecs/mp4a.40.2.html) | [96.4%](https://webcodecsfundamentals.org/codecs/mp4a.40.2.html) |
| MP3    | `mp3`              | —         | [0%](https://webcodecsfundamentals.org/codecs/mp3.html)          | [96.5%](https://webcodecsfundamentals.org/codecs/mp3.html)       |
| FLAC   | `flac`             | —         | [0%](https://webcodecsfundamentals.org/codecs/flac.html)         | [96.5%](https://webcodecsfundamentals.org/codecs/flac.html)      |
| Vorbis | `vorbis`           | WebM      | [3.8%](https://webcodecsfundamentals.org/codecs/vorbis.html)     | [96.5%](https://webcodecsfundamentals.org/codecs/vorbis.html)    |
| PCM    | `pcm-f32`          | —         | [8.7%](https://webcodecsfundamentals.org/codecs/pcm-f32.html)    | [94.6%](https://webcodecsfundamentals.org/codecs/pcm-f32.html)   |

Die geringere AAC-Kodierungsunterstützungszahl spiegelt die oben beschriebenen Plattformlücken wider — Firefox (alle Plattformen), Desktop-Linux (alle Browser) und teilweise Unterstützung für `AudioEncoder` auf Apple-Geräten. AAC hat mehrere Varianten — `mp4a.40.2` (AAC-LC) ist die Standardwahl für Kodierung. `mp4a.40.5` und `mp4a.40.29` entsprechen HE-AAC-Konfigurationen mit Spectral Band Replication (SBR), was dazu führt, dass der Dekodierer Audio bei doppelter der eingestellten Abtastrate ausgibt.

PCM ist in mehreren Varianten verfügbar: `pcm-f32` (32-Bit-Float), `pcm-s16` (16-Bit-Signed), `pcm-s24` (24-Bit-Signed), `pcm-s32` (32-Bit-Signed), und `pcm-u8` (8-Bit-Unsigned). Alle Varianten haben eine gleichwertige Browserunterstützung. Das `pcm-f32`-Format stimmt mit dem `f32-planar`-Layout überein, das von [`AudioData`](/de/docs/Web/API/AudioData) verwendet wird, und ist die praktischste Wahl für die Rohaudioverarbeitung.

Verwenden Sie [`AudioEncoder.isConfigSupported()`](/de/docs/Web/API/AudioEncoder/isConfigSupported_static), um die Unterstützung zur Laufzeit zu überprüfen, bevor Sie einen `AudioEncoder` konfigurieren. Beachten Sie, dass `AudioEncoder` nicht in allen Browsern verfügbar ist — prüfen Sie auf seine Existenz mit `typeof AudioEncoder !== "undefined"` bevor Sie `isConfigSupported()` aufrufen.

## Häufige Anwendungsfälle

Sie müssen einen Videocodec und einen Audiocodec zusammen mit dem Containerformat als Paket auswählen. Für praktische Schnellstartguidance, hier einige gängige Konfigurationen:

- **Maximale Kompatibilität anstreben** (Video zur Wiedergabe in Drittanbietersoftware oder auf einer Vielzahl von Geräten): H.264 (z.B. `avc1.4d0034`) + AAC (`mp4a.40.2`) in einem MP4-Container ist die gebräuchlichste Wahl in der Praxis.
- **Open-Source-Projekte oder Anwendungen, die sowohl die Kodierung als auch die Wiedergabe kontrollieren** (z.B. interne Werkzeuge, In-App-Streaming): VP9 (z.B. `vp09.00.40.08.00`) + Opus (`opus`) in einem WebM-Container ist eine natürliche Wahl — beide sind Open-Source, und WebM ist der Standardcontainer für diese Kombination.
- **Maximale Kompression** (z.B. large-scale streaming): AV1 + Opus in einem WebM-Container, vorausgesetzt, Ihre Zielgruppe hat eine ausreichende Hardwareunterstützung. Verwenden Sie [`VideoEncoder.isConfigSupported()`](/de/docs/Web/API/VideoEncoder/isConfigSupported_static), um dies zu verifizieren, bevor Sie sich für diese Kombination entscheiden.

## Unterstützung zur Laufzeit überprüfen

Vor der Kodierung verwenden Sie [`VideoEncoder.isConfigSupported()`](/de/docs/Web/API/VideoEncoder/isConfigSupported_static), um zu überprüfen, ob eine gegebene Konfiguration auf dem aktuellen Gerät unterstützt wird:

```js
const { supported } = await VideoEncoder.isConfigSupported({
  codec: "avc1.4d0034",
  width: 1920,
  height: 1080,
});
```

Da die Hardwareunterstützung je nach Gerät variiert, ist es ein gängiges Muster, Codec-Zeichenfolgen von höchster zu niedrigster Qualität zu testen und die erste unterstützte zu verwenden:

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

Dasselbe Muster gilt für Audio. Da [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) nicht in allen Browsern verfügbar ist, prüfen Sie auf dessen Existenz, bevor Sie `isConfigSupported()` aufrufen:

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
- [Konzepten der Videobearbeitung](/de/docs/Web/API/WebCodecs_API/Video_processing_concepts)
- [Verwendung der WebCodecs API](/de/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
- [Codec-Support-Tabelle](https://webcodecsfundamentals.org/datasets/codec-support-table/) auf WebCodecs Fundamentals
- [`VideoEncoder.isConfigSupported()`](/de/docs/Web/API/VideoEncoder/isConfigSupported_static)
- [`VideoDecoder.isConfigSupported()`](/de/docs/Web/API/VideoDecoder/isConfigSupported_static)
- [`AudioEncoder.isConfigSupported()`](/de/docs/Web/API/AudioEncoder/isConfigSupported_static)
- [`AudioDecoder.isConfigSupported()`](/de/docs/Web/API/AudioDecoder/isConfigSupported_static)
