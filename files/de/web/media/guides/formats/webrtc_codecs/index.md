---
title: Von WebRTC verwendete Codecs
slug: Web/Media/Guides/Formats/WebRTC_codecs
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

Die [WebRTC API](/de/docs/Web/API/WebRTC_API) ermöglicht Websites und Apps, über die Benutzer in Echtzeit per Audio und/oder Video sowie optional über Daten und andere Informationen kommunizieren können. Damit die Kommunikation funktioniert, müssen sich die beiden Geräte für jeden Track auf einen Codec einigen, den beide verstehen. Dieser Leitfaden behandelt die Codecs, die Browser implementieren müssen, sowie weitere Codecs, die einige oder alle Browser für WebRTC unterstützen.

## Medien ohne Container

WebRTC verwendet für jeden Track, der zwischen Peers geteilt wird, einzelne [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte – ohne Container und sogar ohne einen den Tracks zugeordneten [`MediaStream`](/de/docs/Web/API/MediaStream). Die WebRTC-Spezifikation schreibt nicht vor, welche Codecs diese Tracks enthalten dürfen. {{RFC(7742)}} legt jedoch fest, dass alle WebRTC-kompatiblen Browser für Video [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) und das Constrained-Baseline-Profil von [H.264](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) unterstützen müssen. Nach {{RFC(7874)}} müssen Browser mindestens den Codec [Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus) sowie die Formate PCMA und PCMU von [G.711](/de/docs/Web/Media/Guides/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies) unterstützen.

Diese beiden RFCs legen außerdem fest, welche Optionen für die einzelnen Codecs unterstützt werden müssen, und behandeln Funktionen für eine angenehmere Nutzung, etwa die Echounterdrückung. Dieser Leitfaden behandelt die Codecs, die Browser implementieren müssen, sowie weitere Codecs, die einige oder alle Browser für WebRTC unterstützen.

Bei Medien im Web ist Komprimierung immer notwendig. Bei Videokonferenzen ist sie besonders wichtig, damit die Teilnehmer ohne Verzögerungen oder Unterbrechungen kommunizieren können. Außerdem müssen Video und Audio synchron bleiben, damit Bewegungen und begleitende Informationen – beispielsweise Folien oder eine Projektion – gleichzeitig mit dem zugehörigen Ton wiedergegeben werden.

## Allgemeine Anforderungen an Codecs

Bevor wir die Fähigkeiten und Anforderungen einzelner Codecs betrachten, sind einige allgemeine Anforderungen zu beachten, die für _jede_ mit WebRTC verwendete Codec-Konfiguration gelten.

Sofern das {{Glossary("SDP", "SDP")}} nicht ausdrücklich etwas anderes signalisiert, muss ein Webbrowser, der einen WebRTC-Videostream empfängt, Video mit mindestens 20 FPS und einer Auflösung von mindestens 320 × 240 Pixeln verarbeiten können. Es wird empfohlen, Video nicht mit einer geringeren Bildrate oder Auflösung zu codieren, da dies im Wesentlichen die Untergrenze dessen ist, was WebRTC üblicherweise verarbeiten können sollte.

SDP bietet eine codecunabhängige Möglichkeit, bevorzugte Videoauflösungen anzugeben ({{RFC(6236)}}). Dazu wird ein SDP-Attribut `a=image-attr` gesendet, das die maximal akzeptable Auflösung angibt. Der Sender muss diesen Mechanismus allerdings nicht unterstützen. Sie sollten daher darauf vorbereitet sein, Medien in einer anderen als der angeforderten Auflösung zu empfangen. Über diese Anforderung einer maximalen Auflösung hinaus können einzelne Codecs weitere Möglichkeiten bieten, bestimmte Medienkonfigurationen anzufordern.

## Unterstützte Video-Codecs

WebRTC legt eine Grundausstattung an Codecs fest, die alle konformen Browser unterstützen müssen. Manche Browser unterstützen darüber hinaus weitere Codecs.

Die folgende Tabelle zeigt die Video-Codecs, die in jedem vollständig WebRTC-konformen Browser _erforderlich_ sind, die jeweils erforderlichen Profile und die Browser, die diese Anforderungen tatsächlich erfüllen.

<table class="standard-table">
  <caption>
    Obligatorische Video-Codecs
  </caption>
  <thead>
    <tr>
      <th scope="row">Codec-Name</th>
      <th scope="col">Profil(e)</th>
      <th scope="col">Browser-Kompatibilität</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="vp8_table" scope="row"><a href="#vp8">VP8</a></th>
      <td>—</td>
      <td><p>Chrome, Edge, Firefox, Safari (12.1+)</p>
        <p>
          Firefox 134 unterstützt VP8 für <a href="/de/docs/Web/API/WebRTC_API/Protocols#simulcast">Simulcast</a>.
          Firefox 136+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD-RTP-Header-Erweiterung</a> mit VP8.
        </p>
      </td>
    </tr>
    <tr>
      <th id="h264_table" scope="row"><a href="#avc_h.264">AVC / H.264</a></th>
      <td>Constrained Baseline (CB)</td>
      <td>
        <p>Chrome (52+), Edge, Firefox, Safari</p>
        <p>
          <ul>
            <li>Firefox 137+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD-RTP-Header-Erweiterung</a> mit H264 auf Desktop-Systemen.
            Firefox für Android unterstützt den DD-Header nicht (<a href="https://bugzil.la/1947116">Firefox-Bug 1947116</a>).</li>
            <li>Firefox 136+ unterstützt H.264 für Simulcast.</li>
            <li>Firefox für Android 73+ bietet Hardwareunterstützung.</li>
            <li>Firefox für Android in den Versionen 68 bis 72 unterstützt H.264 nicht. Grund dafür ist eine Änderung der <a href="https://support.mozilla.org/en-US/kb/firefox-android-openh264">Anforderungen des Google Play Store</a>, die Firefox daran hindert, den für H.264 in WebRTC-Verbindungen benötigten OpenH264-Codec herunterzuladen und zu installieren.</li>
          </ul>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Einzelheiten zu WebRTC-spezifischen Aspekten der Codecs finden Sie in den folgenden Unterabschnitten, die über die Codec-Namen verlinkt sind.

Alle Anforderungen an Video-Codecs und -Konfigurationen, die WebRTC unterstützen muss, finden Sie in {{RFC(7742, "WebRTC Video Processing and Codec Requirements")}}. Der RFC behandelt auch weitere Anforderungen rund um Video, darunter Farbräume (sRGB ist der bevorzugte, aber nicht vorgeschriebene Standardfarbraum) sowie Empfehlungen für Webcam-Funktionen wie automatischen Fokus, automatischen Weißabgleich und automatische Belichtungsanpassung.

> [!NOTE]
> Diese Anforderungen gelten für Webbrowser und andere vollständig WebRTC-konforme Produkte. Produkte, die selbst nicht WebRTC-konform sind, aber in gewissem Umfang mit WebRTC kommunizieren können, unterstützen diese Codecs möglicherweise nicht. Die Spezifikationen empfehlen jedoch ihre Unterstützung.

Neben den obligatorischen Codecs unterstützen manche Browser weitere Codecs. Diese sind in der folgenden Tabelle aufgeführt.

<table class="standard-table">
  <caption>
    Weitere Video-Codecs
  </caption>
  <thead>
    <tr>
      <th scope="row">Codec-Name</th>
      <th scope="col">Profil(e)</th>
      <th scope="col">Browser-Kompatibilität</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="vp9_table" scope="row">VP9</th>
      <td>—</td>
      <td>
        <p>Chrome (48+), Firefox</p>
        <p>Firefox unterstützt VP9 standardmäßig nicht für Simulcast (<a href="https://bugzil.la/1633876">Firefox-Bug 1633876</a>).
        Firefox 136+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD-RTP-Header-Erweiterung</a> mit VP9.
        </p>
      </td>
    </tr>
    <tr>
      <th id="av1_table" scope="row"><a href="#av1">AV1</a></th>
      <td>—</td>
      <td>
        <p>Chrome (113+), Firefox (136+)</p>
        <p>Firefox 136 unterstützt AV1 für Simulcast und die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD-RTP-Header-Erweiterung</a>.</p>
      </td>
    </tr>
    <tr>
      <th id="h265_table" scope="row"><a href="#hevc_h.265">HEVC / H.265</th>
      <td>—</td>
      <td>
        Chrome (136+).
      </td>
    </tr>
  </tbody>
</table>

### VP8

VP8 wird im [allgemeinen Überblick](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) unseres [Leitfadens zu Video-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Video_codecs) beschrieben. Für das Codieren oder Decodieren eines Video-Tracks in einer WebRTC-Verbindung gelten darüber hinaus einige besondere Anforderungen.

Sofern nichts anderes signalisiert wird, verwendet VP8 quadratische Pixel, also Pixel mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 1:1.

#### Weitere Hinweise

Das Netzwerk-Payload-Format für die Übertragung von VP8 über {{Glossary("RTP", "RTP")}}, beispielsweise bei der Verwendung von WebRTC, ist in {{RFC(7741, "RTP Payload Format for VP8 Video")}} beschrieben.

### AVC / H.264

Alle vollständig konformen WebRTC-Implementierungen müssen das Constrained-Baseline-Profil (CB) von AVC unterstützen. CB ist eine Teilmenge des Main-Profils und wurde speziell für Anwendungen mit geringer Komplexität und niedriger Latenz entwickelt, beispielsweise mobile Videoanwendungen und Videokonferenzen. Es eignet sich auch für Plattformen mit weniger leistungsfähiger Videoverarbeitung.

Einen [Überblick über AVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) und seine Funktionen finden Sie im allgemeinen Leitfaden zu Video-Codecs.

### HEVC / H.265

Einen [Überblick über HEVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) und seine Funktionen finden Sie im allgemeinen Leitfaden zu Video-Codecs.

#### Besondere Anforderungen an die Unterstützung von Parametern

AVC bietet zahlreiche Parameter zur Steuerung optionaler Werte. Damit die Freigabe von WebRTC-Medien über verschiedene Plattformen und Browser hinweg zuverlässiger funktioniert, müssen WebRTC-Endpunkte, die AVC unterstützen, bestimmte Parameter auf festgelegte Weise behandeln. Manchmal muss ein Parameter unterstützt werden – oder darf gerade nicht unterstützt werden. In anderen Fällen ist ein bestimmter Wert vorgeschrieben oder eine bestimmte Menge von Werten zulässig. Einige Anforderungen sind noch komplexer.

##### Nützliche, aber nicht erforderliche Parameter

WebRTC-Endpunkte müssen diese Parameter nicht unterstützen; ihre Verwendung ist ebenfalls nicht erforderlich. Sie können die Benutzererfahrung auf verschiedene Weise verbessern, müssen aber nicht verwendet werden. Einige davon sind tatsächlich recht kompliziert in der Anwendung.

- `max-br`
  - : Falls der Parameter angegeben und von der Software unterstützt wird, legt `max-br` die maximale Video-Bitrate fest, in Einheiten von 1.000 bps für VCL und 1.200 bps für NAL. Einzelheiten finden Sie auf [Seite 47 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-47).
- `max-cpb`
  - : Falls der Parameter angegeben und von der Software unterstützt wird, legt `max-cpb` die maximale Größe des Puffers für codierte Bilder fest. Dieser Parameter ist recht komplex; die Größe seiner Einheit kann variieren. Einzelheiten finden Sie auf [Seite 45 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-45).
- `max-dpb`
  - : Falls der Parameter angegeben und unterstützt wird, bezeichnet `max-dpb` die maximale Größe des Puffers für decodierte Bilder, angegeben in Einheiten von 8/3 Makroblöcken. Weitere Einzelheiten finden Sie auf [Seite 46 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-46).
- `max-fs`
  - : Falls der Parameter angegeben und von der Software unterstützt wird, legt `max-fs` die maximale Größe eines einzelnen Videoframes als Anzahl von Makroblöcken fest.
- `max-mbps`
  - : Falls der Parameter angegeben und von der Software unterstützt wird, gibt dieser ganzzahlige Wert die maximale Rate an, mit der Makroblöcke pro Sekunde verarbeitet werden sollen (in Makroblöcken pro Sekunde).
- `max-smbps`
  - : Falls der Parameter angegeben und von der Software unterstützt wird, legt dieser ganzzahlige Wert die maximale Verarbeitungsrate statischer Makroblöcke pro Sekunde fest. Dabei wird hypothetisch angenommen, dass alle Makroblöcke statisch sind.

##### Parameter mit besonderen Anforderungen

Diese Parameter können erforderlich sein oder nicht; bei ihrer Verwendung gelten jedoch besondere Anforderungen.

- `packetization-mode`
  - : Alle Endpunkte müssen Modus 1 (nicht verschachtelter Modus) unterstützen. Die Unterstützung anderer Paketierungsmodi ist optional; auch der Parameter selbst muss nicht angegeben werden.
- `sprop-parameter-sets`
  - : Sequenz- und Bildinformationen für AVC können entweder in-band oder out-of-band übertragen werden. Wird AVC mit WebRTC verwendet, _müssen_ diese Informationen in-band signalisiert werden. Der Parameter `sprop-parameter-sets` darf daher _nicht_ im SDP enthalten sein.

##### Parameter, die angegeben werden müssen

Diese Parameter müssen bei jeder Verwendung von AVC in einer WebRTC-Verbindung angegeben werden.

- `profile-level-id`
  - : Alle WebRTC-Implementierungen _müssen_ diesen Parameter in ihrem SDP angeben und auswerten, um das vom Codec verwendete Unterprofil zu identifizieren. Welcher konkrete Wert gesetzt wird, ist nicht festgelegt; entscheidend ist, dass der Parameter verwendet wird. Das ist bemerkenswert, weil `profile-level-id` in {{RFC(6184)}} („RTP Payload Format for H.264 Video“) vollständig optional ist.

#### Weitere Anforderungen

Für den Wechsel zwischen Hoch- und Querformat stehen zwei Methoden zur Verfügung. Die erste ist die Header-Erweiterung für die Videoausrichtung (CVO) im RTP-Protokoll. Falls die Unterstützung dafür nicht im SDP signalisiert wird, wird Browsern empfohlen, Display-Orientation-SEI-Nachrichten zu unterstützen; vorgeschrieben ist dies jedoch nicht.

Sofern nichts anderes signalisiert wird, beträgt das Pixelseitenverhältnis 1:1. Die Pixel sind also quadratisch.

#### Weitere Hinweise

Das für AVC in WebRTC verwendete Payload-Format wird in {{RFC(6184, "RTP Payload Format for H.264 Video")}} beschrieben. AVC-Implementierungen für WebRTC müssen die speziellen SEI-Nachrichten „filler payload“ und „full frame freeze“ unterstützen. Diese ermöglichen einen nahtlosen Wechsel zwischen mehreren Eingabestreams.

### AV1

AV1 wird im [allgemeinen Überblick](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) unseres [Leitfadens zu Video-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Video_codecs) beschrieben.

#### Dependency-Descriptor-RTP-Header-Erweiterung

WebRTC unterstützt zwei wesentliche Technologien, um Video effizient an Empfänger mit unterschiedlichen Fähigkeiten und Netzwerkbedingungen zu übertragen.

AV1 verwendet die [Dependency-Descriptor-(DD-)RTP-Header-Erweiterung](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension), um Informationen über Abhängigkeiten zwischen Frames bereitzustellen. Diese werden für [Videokonferenzen mit mehreren Teilnehmern](/de/docs/Web/API/WebRTC_API/Protocols#multi-party_video_conferencing) benötigt.

## Unterstützte Audio-Codecs

Die folgende Tabelle zeigt die Audio-Codecs, die nach {{RFC(7874)}} von allen WebRTC-kompatiblen Browsern unterstützt werden müssen.

<table class="standard-table">
  <caption>
    Obligatorische Audio-Codecs
  </caption>
  <thead>
    <tr>
      <th scope="row">Codec-Name</th>
      <th scope="col">Browser-Kompatibilität</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus">Opus</a>
      </th>
      <td>Chrome, Edge, Firefox, Safari</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies"
          >G.711 PCM (A-law)</a
        >
      </th>
      <td>Chrome, Firefox, Safari</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies"
          >G.711 PCM (µ-law)</a
        >
      </th>
      <td>Chrome, Firefox, Safari</td>
    </tr>
  </tbody>
</table>

Weitere Einzelheiten zu WebRTC-spezifischen Aspekten der aufgeführten Codecs finden Sie in den folgenden Abschnitten.

{{RFC(7874)}} enthält nicht nur eine Liste der Audio-Codecs, die ein WebRTC-konformer Browser unterstützen muss. Er formuliert auch Empfehlungen und Anforderungen für spezielle Audiofunktionen wie Echounterdrückung, Rauschunterdrückung und Pegelanpassung.

> [!NOTE]
> Die obige Liste zeigt die mindestens erforderlichen Codecs, die alle WebRTC-kompatiblen Endpunkte implementieren müssen. Ein Browser kann weitere Codecs unterstützen. Wenn Sie diese verwenden, ohne zuvor ihre Unterstützung in allen für Ihre Benutzer infrage kommenden Browsern sorgfältig zu prüfen, kann jedoch die Kompatibilität zwischen Plattformen und Geräten gefährdet sein.

Neben den obligatorischen Audio-Codecs unterstützen manche Browser weitere Codecs. Diese sind in der folgenden Tabelle aufgeführt.

<table class="standard-table">
  <caption>
    Weitere Audio-Codecs
  </caption>
  <thead>
    <tr>
      <th scope="row">Codec-Name</th>
      <th scope="col">Browser-Kompatibilität</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">G.722</th>
      <td>Chrome, Firefox, Safari</td>
    </tr>
    <tr>
      <th scope="row">iLBC</th>
      <td>Chrome, Safari</td>
    </tr>
    <tr>
      <th scope="row">iSAC</th>
      <td>Chrome, Safari</td>
    </tr>
  </tbody>
</table>

Der **[Internet Low Bitrate Codec](https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec)** (**iLBC**) ist ein Open-Source-Schmalbandcodec, der von Global IP Solutions und später Google speziell für das Streaming von Sprache entwickelt wurde. Google und einige andere Browserentwickler haben ihn für WebRTC übernommen.

Der **[Internet Speech Audio Codec](https://en.wikipedia.org/wiki/Internet_Speech_Audio_Codec)** (**iSAC**) ist ein weiterer Codec, der von Global IP Solutions entwickelt wurde. Er gehört inzwischen Google, das seinen Quellcode veröffentlicht hat. Er wird von Google Talk, QQ und anderen Instant-Messaging-Clients verwendet und wurde speziell für Sprachübertragungen innerhalb eines RTP-Streams entwickelt.

**[Comfort Noise](https://en.wikipedia.org/wiki/Comfort_noise)** (**CN**) ist künstliches Hintergrundrauschen, das Übertragungslücken statt völliger Stille ausfüllt. Dadurch lässt sich ein störender Effekt vermeiden, der auftreten kann, wenn Sprachaktivierung oder ähnliche Funktionen bewirken, dass ein Stream vorübergehend keine Daten sendet. Diese Fähigkeit wird als Discontinuous Transmission (DTX) bezeichnet. {{RFC(3389)}} beschreibt eine Methode, um für Sprechpausen ein geeignetes Füllsignal bereitzustellen.

Comfort Noise wird mit G.711 verwendet und kann möglicherweise auch mit anderen Codecs ohne integrierte CN-Funktion eingesetzt werden. Opus verfügt beispielsweise über eine eigene CN-Funktion; die Verwendung von CN nach RFC 3389 mit dem Opus-Codec wird daher nicht empfohlen.

Ein Audio-Sender muss weder Discontinuous Transmission noch Comfort Noise verwenden.

### Opus

Das in {{RFC(6716)}} definierte Opus-Format ist das wichtigste Audioformat für WebRTC. Das RTP-Payload-Format für Opus ist in {{RFC(7587)}} beschrieben. Allgemeinere Informationen über Opus, seine Fähigkeiten und seine Unterstützung durch andere APIs finden Sie im [entsprechenden Abschnitt](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus) unseres [Leitfadens zu Audio-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Sowohl der Sprachmodus als auch der allgemeine Audiomodus sollten unterstützt werden. Die Skalierbarkeit und Flexibilität von Opus sind besonders bei Audio mit unterschiedlicher Komplexität nützlich. Da Opus Stereo-Signale in-band unterstützt, lässt sich Stereo ohne zusätzlichen Aufwand beim Demultiplexing verwenden.

WebRTC unterstützt den gesamten von Opus abgedeckten Bitratenbereich von 6 kbps bis 510 kbps. Die Bitrate kann dynamisch geändert werden. Höhere Bitraten verbessern in der Regel die Qualität.

#### Empfehlungen zur Bitrate

Bei einer Frame-Dauer von 20 Millisekunden gelten für verschiedene Medienarten die folgenden empfohlenen Bitraten.

| Medienart                            | Empfohlener Bitratenbereich |
| ------------------------------------ | --------------------------- |
| Schmalband-Sprache (NB)              | 8 bis 12 kbps               |
| Breitband-Sprache (WB)               | 16 bis 20 kbps              |
| Vollband-Sprache (FB)                | 28 bis 40 kbps              |
| Mono-Musik im Vollband (FB mono)     | 48 bis 64 kbps              |
| Stereo-Musik im Vollband (FB stereo) | 64 bis 128 kbps             |

Die Bitrate kann jederzeit angepasst werden. Um eine Überlastung des Netzwerks zu vermeiden, sollte die durchschnittliche Audio-Bitrate die verfügbare Netzwerkbandbreite nicht überschreiten, abzüglich des bekannten oder voraussichtlichen zusätzlichen Bandbreitenbedarfs.

### G.711

G.711 definiert das Format für Audio mit **Pulse Code Modulation** (**PCM**) als Folge von 8-Bit-Integer-Samples mit einer Abtastrate von 8.000 Hz. Daraus ergibt sich eine Bitrate von 64 kbps. Sowohl die [µ-law-](https://en.wikipedia.org/wiki/M-law) als auch die [A-law-Codierung](https://en.wikipedia.org/wiki/A-law) sind zulässig.

G.711 ist [von der ITU definiert](https://www.itu.int/rec/T-REC-G.711-198811-I/en); sein Payload-Format ist in {{RFC(3551, "", "4.5.14")}} festgelegt.

WebRTC verlangt für G.711 8-Bit-Samples mit der standardmäßigen Bitrate von 64 kbps, obwohl G.711 auch andere Varianten unterstützt. Weder G.711.0 (verlustfreie Komprimierung) noch G.711.1 (Breitbandfähigkeit) oder andere Erweiterungen des G.711-Standards sind für WebRTC vorgeschrieben.

Aufgrund der niedrigen Abtastrate und Sample-Größe gilt die Audioqualität von G.711 nach heutigen Maßstäben allgemein als schlecht, auch wenn sie ungefähr der eines Festnetztelefons entspricht. G.711 dient meist als kleinster gemeinsamer Nenner, um unabhängig von Plattform und Browser eine Audioverbindung zu ermöglichen, oder allgemein als Ausweichoption.

## Codecs angeben und konfigurieren

### Unterstützte Codecs abrufen

Welche Codecs verfügbar sind und welche Profile oder Levels eines Codecs unterstützt werden, kann je nach Browser und Plattform variieren. Wenn Sie die Codecs für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) konfigurieren, sollten Sie daher zuerst die Liste der verfügbaren Codecs abrufen. Dazu müssen Sie zunächst eine Verbindung herstellen, für die Sie die Liste abrufen können.

Hierfür gibt es mehrere Möglichkeiten. Am effizientesten ist die statische Methode [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) beziehungsweise für einen Empfänger [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static). Geben Sie den Medientyp als Eingabeparameter an. Um beispielsweise die unterstützten Video-Codecs zu ermitteln, gehen Sie so vor:

```js
codecList = RTCRtpSender.getCapabilities("video").codecs;
```

`codecList` ist nun ein Array von [`codec`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#codecs)-Objekten, die jeweils eine Codec-Konfiguration beschreiben. Die Liste enthält außerdem Einträge für [Retransmission](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#rtx_retransmission) (RTX), [Redundant Coding](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#red_redundant_audio_data) (RED) und [Forward Error Correction](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#fec_forward_error_correction) (FEC).

Wenn die Verbindung gerade aufgebaut wird, können Sie mit dem Ereignis [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) verfolgen, wann das Sammeln der {{Glossary("ICE", "ICE")}}-Kandidaten abgeschlossen ist, und anschließend die Liste abrufen.

```js
let codecList = null;

peerConnection.addEventListener("icegatheringstatechange", (event) => {
  if (peerConnection.iceGatheringState === "complete") {
    const senders = peerConnection.getSenders();

    senders.forEach((sender) => {
      if (sender.track.kind === "video") {
        codecList = sender.getParameters().codecs;
      }
    });
  }

  codecList = null;
});
```

Zunächst wird der Ereignishandler für `icegatheringstatechange` eingerichtet. Darin prüfen wir, ob der ICE-Sammelstatus `complete` lautet, also keine weiteren Kandidaten mehr gesammelt werden. Mit [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) rufen wir dann eine Liste aller von der Verbindung verwendeten [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte ab.

Anschließend durchsuchen wir die Senderliste nach dem ersten Sender, dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) für [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) den Wert `video` angibt. Dies zeigt an, dass der Track Videodaten enthält. Dann rufen wir die Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) dieses Senders auf, weisen die Eigenschaft `codecs` des zurückgegebenen Objekts `codecList` zu und kehren zum Aufrufer zurück.

Wird kein Video-Track gefunden, setzen wir `codecList` auf `null`.

Nach der Rückkehr ist `codecList` somit entweder `null`, wenn kein Video-Track gefunden wurde, oder ein Array von [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekten, die jeweils eine zulässige Codec-Konfiguration beschreiben. Besonders wichtig ist darin die Eigenschaft [`payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType): Ihr Wert ist ein Byte groß und identifiziert die beschriebene Konfiguration eindeutig.

> [!NOTE]
> Die beiden hier gezeigten Methoden zum Abrufen von Codec-Listen verwenden unterschiedliche Ausgabetypen für ihre Listeneinträge. Berücksichtigen Sie dies bei der Verwendung der Ergebnisse.

### Codec-Liste anpassen

Sobald Sie die Liste der verfügbaren Codecs haben, können Sie sie ändern und die neue Liste an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) übergeben. Damit ändern Sie die Reihenfolge der Codec-Präferenzen und können WebRTC anweisen, einen anderen Codec gegenüber den übrigen zu bevorzugen.

```js
function changeVideoCodec(mimeType) {
  const transceivers = peerConnection.getTransceivers();

  transceivers.forEach((transceiver) => {
    const kind = transceiver.sender.track.kind;
    let sendCodecs = RTCRtpSender.getCapabilities(kind).codecs;
    let recvCodecs = RTCRtpReceiver.getCapabilities(kind).codecs;

    if (kind === "video") {
      sendCodecs = preferCodec(sendCodecs, mimeType);
      recvCodecs = preferCodec(recvCodecs, mimeType);
      transceiver.setCodecPreferences([...sendCodecs, ...recvCodecs]);
    }
  });

  // Manually trigger a new negotiation (setCodecPreferences() does not automatically do so).
  peerConnection.onnegotiationneeded();
}
```

In diesem Beispiel erwartet die Funktion `changeVideoCodec()` den MIME-Typ des gewünschten Codecs als Eingabe. Der Code ruft zunächst eine Liste aller Transceiver der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ab.

Anschließend ermitteln wir für jeden Transceiver anhand von [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des Tracks seines [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), welchen Medientyp er verarbeitet. Außerdem rufen wir mit der statischen Methode `getCapabilities()` von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) die Listen aller Codecs ab, die der Browser zum Senden beziehungsweise Empfangen von Video unterstützt.

Handelt es sich um Video, rufen wir `preferCodec()` sowohl für die Codec-Liste des Senders als auch für die des Empfängers auf. Diese Methode ordnet die Listen wie gewünscht neu an (siehe unten).

Abschließend rufen wir für den [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) die Methode [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) auf. Damit legen wir die zulässigen Sende- und Empfangs-Codecs in der neu festgelegten Reihenfolge fest.

Das geschieht für jeden Transceiver der `RTCPeerConnection`. Sobald alle Transceiver aktualisiert sind, rufen wir den Ereignishandler [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) auf. Er erstellt ein neues Angebot, aktualisiert die lokale Beschreibung, sendet das Angebot an den entfernten Peer und löst so eine erneute Aushandlung der Verbindung aus.

Die vom obigen Code aufgerufene Funktion `preferCodec()` sieht wie folgt aus. Sie verschiebt einen angegebenen Codec an den Anfang der Liste, damit er bei der Aushandlung bevorzugt wird:

```js
function preferCodec(codecs, mimeType) {
  let otherCodecs = [];
  let sortedCodecs = [];

  codecs.forEach((codec) => {
    if (codec.mimeType.toLowerCase() === mimeType.toLowerCase()) {
      sortedCodecs.push(codec);
    } else {
      otherCodecs.push(codec);
    }
  });

  return sortedCodecs.concat(otherCodecs);
}
```

Dieser Code teilt die Codec-Liste in zwei Arrays auf: Das erste enthält Codecs, deren MIME-Typ dem Parameter `mimeType` entspricht, das zweite alle übrigen Codecs. Anschließend werden die Arrays wieder zusammengefügt, wobei die Einträge mit passendem `mimeType` vor allen anderen stehen. Die neu geordnete Liste wird an den Aufrufer zurückgegeben.

## Standard-Codecs

Sofern nichts anderes angegeben ist, zeigt die folgende Tabelle die Codecs, die die WebRTC-Implementierung des jeweiligen Browsers standardmäßig anfordert – genauer gesagt: bevorzugt.

<table class="standard-table">
  <caption>
    Bevorzugte Codecs für WebRTC in den wichtigsten Webbrowsern
  </caption>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Audio</th>
      <th scope="col">Video</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chrome</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Edge</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Firefox</th>
      <td></td>
      <td>VP9 (Firefox 46 und neuer)<br />VP8</td>
    </tr>
    <tr>
      <th scope="row">Opera</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Safari</th>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Den richtigen Codec auswählen

Bevor Sie einen Codec wählen, der nicht zu den obligatorischen Codecs gehört – VP8 oder AVC für Video sowie Opus oder PCM für Audio –, sollten Sie mögliche Nachteile sorgfältig abwägen. Insbesondere können Sie im Allgemeinen nur bei diesen Codecs davon ausgehen, dass sie auf praktisch allen WebRTC-fähigen Geräten verfügbar sind.

Wenn Sie einen anderen Codec bevorzugen, sollten Sie zumindest den Rückgriff auf einen der obligatorischen Codecs ermöglichen, falls der gewünschte Codec nicht unterstützt wird.

### Audio

Wenn Opus verfügbar ist und das zu sendende Audio eine Abtastrate von mehr als 8 kHz hat, sollten Sie Opus in der Regel als primären Codec in Betracht ziehen. Bei reinen Sprachverbindungen unter eingeschränkten Bedingungen kann G.711 mit einer Abtastrate von 8 kHz eine für Gespräche akzeptable Qualität liefern. Meist werden Sie G.711 jedoch als Ausweichoption verwenden, da andere Möglichkeiten wie Opus im Schmalbandmodus effizienter sind und besser klingen.

### Video

Bei der Entscheidung, welchen Video-Codec oder welche Kombination von Codecs Sie unterstützen möchten, spielen mehrere Faktoren eine Rolle.

#### Lizenzbedingungen

Informieren Sie sich vor der Auswahl eines Video-Codecs über die damit verbundenen Lizenzanforderungen. Hinweise auf mögliche Lizenzfragen finden Sie in unserem allgemeinen [Leitfaden zu Video-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Video_codecs). Von den beiden obligatorischen Video-Codecs – VP8 und AVC/H.264 – ist nur VP8 vollständig frei von Lizenzanforderungen. Wenn Sie AVC wählen, sollten Sie sich über mögliche Gebühren informieren. Die Patentinhaber haben allerdings im Allgemeinen erklärt, dass sich die meisten typischen Website-Entwickler keine Sorgen um Lizenzgebühren machen müssen. Diese betreffen üblicherweise eher die Entwickler von Software zum Codieren und Decodieren.

> [!WARNING]
> Die Informationen hier stellen _keine_ Rechtsberatung dar! Prüfen Sie mögliche Haftungsrisiken, bevor Sie eine endgültige Entscheidung treffen, bei der Lizenzfragen eine Rolle spielen könnten.

#### Energiebedarf und Akkulaufzeit

Ein weiterer Faktor ist – insbesondere auf Mobilgeräten – der Einfluss eines Codecs auf die Akkulaufzeit. Wenn ein Codec auf einer Plattform hardwareseitig verarbeitet wird, ermöglicht er wahrscheinlich eine deutlich längere Akkulaufzeit und eine geringere Wärmeentwicklung.

Safari für iOS und iPadOS führte WebRTC beispielsweise mit AVC als einzigem unterstützten Video-Codec ein. AVC hat auf iOS und iPadOS den Vorteil, dass er hardwareseitig codiert und decodiert werden kann. Safari 12.1 führte die Unterstützung von VP8 in IRC ein. Das verbessert die Interoperabilität, hat aber einen Preis: VP8 wird auf iOS-Geräten nicht hardwareseitig unterstützt. Seine Verwendung belastet daher den Prozessor stärker und verkürzt die Akkulaufzeit.

#### Leistung

Glücklicherweise bieten VP8 und AVC aus Sicht der Endbenutzer eine ähnliche Leistung und eignen sich gleichermaßen für Videokonferenzen und andere WebRTC-Anwendungen. Die endgültige Entscheidung liegt bei Ihnen. Für welchen Codec Sie sich auch entscheiden: Lesen Sie die Informationen in diesem Artikel zu möglichen Besonderheiten bei seiner Konfiguration.

Bedenken Sie, dass ein Codec außerhalb der Liste der obligatorischen Codecs möglicherweise von einem Browser nicht unterstützt wird, den Ihre Benutzer bevorzugen. Im Artikel [Umgang mit Problemen bei der Medienunterstützung in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues) erfahren Sie, wie Sie Ihre bevorzugten Codecs unterstützen und zugleich eine Ausweichmöglichkeit für Browser anbieten, die diese Codecs nicht implementieren.

## Sicherheitsaspekte

Bei der Auswahl und Konfiguration von Codecs können Sicherheitsfragen auftreten. WebRTC-Video wird durch Datagram Transport Layer Security ({{Glossary("DTLS", "DTLS")}}) geschützt. Theoretisch könnte jedoch eine entsprechend motivierte Person bei Codecs mit variabler Bitrate (VBR) aus der Bitrate des Streams und ihren Veränderungen im Zeitverlauf ableiten, wie stark sich aufeinanderfolgende Frames unterscheiden. Aus den Schwankungen der Bitrate ließen sich unter Umständen Rückschlüsse auf den Inhalt des Streams ziehen.

Weitere Informationen zu Sicherheitsaspekten bei der Verwendung von AVC in WebRTC finden Sie in {{RFC(6184, "RTP Payload Format for H.264 Video: Security Considerations", 9)}}.

## Medientypen für RTP-Payload-Formate

Die Liste der {{Glossary("IANA", "IANA")}} mit Medientypen für {{Glossary("RTP", "RTP")}}-Payload-Formate kann hilfreich sein. Sie enthält alle MIME-Medientypen, die für eine _potenzielle_ Verwendung in RTP-Streams wie denen von WebRTC definiert sind. Die meisten davon werden im WebRTC-Kontext nicht verwendet; die Liste kann dennoch nützlich sein.

Siehe auch {{RFC(4855)}}, der das Register der Medientypen behandelt.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Leitfaden zu Video-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Leitfaden zu Audio-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Grundlagen digitaler Videos](/de/docs/Web/Media/Guides/Formats/Video_concepts)
- [Grundlagen digitaler Audiosignale](/de/docs/Web/Media/Guides/Formats/Audio_concepts)
