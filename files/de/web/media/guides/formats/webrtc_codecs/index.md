---
title: Codecs, die von WebRTC verwendet werden
slug: Web/Media/Guides/Formats/WebRTC_codecs
l10n:
  sourceCommit: 5e3272a0eca109a48adeba7daf0a0d32d791bd69
---

Die [WebRTC API](/de/docs/Web/API/WebRTC_API) ermöglicht es, Websites und Apps zu erstellen, die Benutzern ermöglichen, in Echtzeit zu kommunizieren, indem sie Audio- und/oder Videodaten sowie optionale Daten und andere Informationen verwenden. Um zu kommunizieren, müssen sich die beiden Geräte auf einen gemeinsam verstandenen Codec für jede Spur einigen, damit sie erfolgreich kommunizieren und die freigegebenen Medien präsentieren können. Dieser Leitfaden überprüft die Codecs, die Browser umsetzen müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

## Containerlose Medien

WebRTC verwendet nackte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte für jede Spur, die von einem Peer zum anderen geteilt wird, ohne einen Container oder sogar einen [`MediaStream`](/de/docs/Web/API/MediaStream), der mit den Spuren assoziiert ist. Welche Codecs innerhalb dieser Spuren sein können, wird durch die WebRTC-Spezifikation nicht vorgegeben. Allerdings legt {{RFC(7742)}} fest, dass alle WebRTC-kompatiblen Browser [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) und das Constrained Baseline-Profil von [H.264](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) für Video unterstützen müssen, und {{RFC(7874)}} legt fest, dass Browser mindestens den [Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)-Codec sowie die PCMA- und PCMU-Formate von [G.711](/de/docs/Web/Media/Guides/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies) unterstützen müssen.

Diese beiden RFCs legen auch Optionen fest, die für jeden Codec unterstützt werden müssen, sowie spezifische Benutzerkomfortfunktionen wie Echo-Kompensation. In diesem Leitfaden werden die Codecs überprüft, die Browser umsetzen müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

Während Kompression beim Umgang mit Medien im Web immer notwendig ist, ist sie bei Videokonferenzen von besonderer Bedeutung, um sicherzustellen, dass die Teilnehmer ohne Verzögerungen oder Unterbrechungen kommunizieren können. Zweitrangig ist die Notwendigkeit, Video und Audio zu synchronisieren, damit die Bewegungen und alle zusätzlichen Informationen (wie Folien oder eine Projektion) gleichzeitig mit dem dazugehörigen Audio präsentiert werden.

## Allgemeine Codec-Anforderungen

Bevor man sich die codec-spezifischen Fähigkeiten und Anforderungen ansieht, gibt es einige allgemeine Anforderungen, die von _jeder_ Codec-Konfiguration erfüllt werden müssen, die mit WebRTC verwendet wird.

Es sei denn, der {{Glossary("SDP", "SDP")}} signalisiert explizit etwas anderes, muss der Webbrowser, der einen WebRTC-Videostream empfängt, in der Lage sein, Video mit 20 FPS bei einer minimalen Auflösung von 320 Pixeln Breite und 240 Pixeln Höhe zu verarbeiten. Es wird empfohlen, dass Video mit einer Bildrate und Größe kodiert wird, die nicht niedriger ist, da das im Wesentlichen die untere Grenze dessen ist, was WebRTC im Allgemeinen zu handhaben erwartet.

SDP unterstützt eine Codec-unabhängige Möglichkeit, bevorzugte Videoauflösungen anzugeben ({{RFC(6236)}}. Dies geschieht durch das Senden eines `a=image-attr` SDP-Attributs, um die maximale aufläsbare Auflösung anzugeben. Der Sender ist jedoch nicht verpflichtet, diesen Mechanismus zu unterstützen, daher müssen Sie darauf vorbereitet sein, Medien in einer anderen Auflösung zu empfangen, als Sie angefordert haben. Über diese einfache maximale Auflösungsanforderung hinaus können spezifische Codecs weitere Möglichkeiten bieten, um spezifische Medienkonfigurationen anzufordern.

## Unterstützte Video-Codecs

WebRTC etabliert einen grundlegenden Satz von Codecs, die alle konformen Browser unterstützen müssen. Einige Browser können sich entscheiden, auch andere Codecs zuzulassen.

Im Folgenden sind die Video-Codecs aufgeführt, die in jedem vollständig WebRTC-konformen Browser _erforderlich_ sind, sowie die Profile, die erforderlich sind, und die Browser, die die Anforderung tatsächlich erfüllen.

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
          Firefox 136+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP-Headererweiterung</a> mit VP8.
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
            <li>Firefox 137+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP-Headererweiterung</a> mit H264 auf dem Desktop.
            Firefox auf Android unterstützt den DD-Header nicht (<a href="https://bugzil.la/1947116">Firefox Bug 1947116</a>).</li>
            <li>Firefox 136+ unterstützt H.264 für Simulcast.</li>
            <li>Firefox für Android 73+ wird hardwareunterstützt.</li>
            <li>Firefox für Android Versionen 68 bis 72 unterstützen H.264 nicht (aufgrund einer Änderung der <a href="https://support.mozilla.org/en-US/kb/firefox-android-openh264">Google Play Store Anforderungen</a>, die Firefox daran hindern, den für die Verarbeitung von H.264 in WebRTC-Verbindungen erforderlichen OpenH264-Codec herunterzuladen und zu installieren).</li>
          </ul>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Für Details zu WebRTC-bezogenen Überlegungen für jeden Codec, siehe die Unterabschnitte unten, indem Sie den Links auf den jeweiligen Codecnamen folgen.

Vollständige Details, welche Video-Codecs und -Konfigurationen durch WebRTC unterstützt werden müssen, finden Sie in {{RFC(7742, "WebRTC Video Processing and Codec Requirements")}}. Es ist erwähnenswert, dass das RFC eine Vielzahl von video-bezogenen Anforderungen umfasst, einschließlich Farbräume (sRGB ist der bevorzugte, aber nicht erforderliche Standard-Farbraum), Empfehlungen für Webcam-Verarbeitungsfunktionen (automatischer Fokus, automatische Weißabgleich, automatische Lichtpegel) und so weiter.

> [!NOTE]
> Diese Anforderungen gelten für Webbrowser und andere vollständig WebRTC-konforme Produkte. Nicht-WebRTC-Produkte, die in gewissem Maße mit WebRTC kommunizieren können, unterstützen diese Codecs möglicherweise oder möglicherweise nicht, obwohl sie in den Spezifikationsdokumenten dazu ermutigt werden.

Neben den obligatorischen Codecs unterstützen einige Browser auch zusätzliche Codecs. Diese sind in der folgenden Tabelle aufgeführt.

<table class="standard-table">
  <caption>
    Andere Video-Codecs
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
        <p>Firefox unterstützt VP9 für Simulcast standardmäßig nicht (<a href="https://bugzil.la/1633876">Firefox Bug 1633876</a>).
        Firefox 136+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP-Headererweiterung</a> mit VP9.
        </p>
      </td>
    </tr>
    <tr>
      <th id="av1_table" scope="row"><a href="#av1">AV1</a></th>
      <td>—</td>
      <td>
        <p>Chrome (113+), Firefox (136+)</p>
        <p>Firefox 136 unterstützt AV1 für Simulcast und die <a href="/de/docs/Web/API/WebRTC_API/Protocols/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP-Headererweiterung</a>.</p>
      </td>
    </tr>
  </tbody>
</table>

### VP8

VP8, das wir in unserem [allgemeinen Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) [beschreiben](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8), hat spezifische Anforderungen, die befolgt werden müssen, wenn es verwendet wird, um eine Videospur in einer WebRTC-Verbindung zu kodieren oder zu dekodieren.

Sofern nicht anders signalisiert, verwendet VP8 quadratische Pixel (d.h. Pixel mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 1:1).

#### Weitere Anmerkungen

Das Netzwerk-Payload-Format zum Teilen von VP8 mit {{Glossary("RTP", "RTP")}} (wie bei der Verwendung von WebRTC) wird in {{RFC(7741, "RTP Payload Format for VP8 Video")}} beschrieben.

### AVC / H.264

Die Unterstützung für das Constrained Baseline (CB)-Profil von AVC ist in allen vollständig konformen WebRTC-Implementierungen erforderlich. CB ist ein Subset des Hauptprofils und ist speziell für Anwendungen mit geringer Komplexität und geringer Verzögerung wie mobiles Video und Videokonferenzen sowie für Plattformen mit geringeren Videoverarbeitungsfähigkeiten ausgelegt.

Unsere [Übersicht über AVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) und seine Funktionen finden Sie im Hauptleitfaden zu Videocodecs.

#### Besondere Anforderungen an Parameterunterstützung

AVC bietet eine Vielzahl von Parametern zur Steuerung optionaler Werte. Um die Zuverlässigkeit der gemeinsamen Nutzung von WebRTC-Medien auf verschiedenen Plattformen und Browsern zu verbessern, müssen WebRTC-Endpunkte, die AVC unterstützen, bestimmte Parameter auf bestimmte Weise behandeln. Manchmal bedeutet dies, dass ein Parameter unterstützt werden muss (oder nicht unterstützt werden darf). Manchmal bedeutet es, dass ein bestimmter Wert für einen Parameter erforderlich ist oder dass ein bestimmter Satz von Werten zugelassen werden muss. Und manchmal sind die Anforderungen komplexer.

##### Parameter, die nützlich, aber nicht erforderlich sind

Diese Parameter müssen vom WebRTC-Endpunkt nicht unterstützt werden und ihre Verwendung ist auch nicht erforderlich. Ihre Verwendung kann das Benutzererlebnis auf verschiedene Weise verbessern, muss aber nicht verwendet werden. In der Tat sind einige dieser ziemlich kompliziert zu verwenden.

- `max-br`
  - : Wenn angegeben und von der Software unterstützt, gibt der `max-br`-Parameter die maximale Videobitrate in Einheiten von 1.000 bps für VCL und 1.200 bps für NAL an. Details dazu finden Sie auf [Seite 47 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-47).
- `max-cpb`
  - : Wenn angegeben und von der Software unterstützt, bestimmt `max-cpb` die maximale codierte Bildpuffergröße. Dies ist ein ziemlich komplizierter Parameter, dessen Einheitengröße variieren kann. Details finden Sie auf [Seite 45 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-45).
- `max-dpb`
  - : Wenn angegeben und unterstützt, zeigt `max-dpb` die maximale Dekodierbildpuffergröße an, angegeben in Einheiten von 8/3 Makroblöcken. Weitere Details finden Sie [RFC 6184, Seite 46](https://datatracker.ietf.org/doc/html/rfc6184#page-46).
- `max-fs`
  - : Wenn angegeben und von der Software unterstützt, legt `max-fs` die maximale Größe eines einzelnen Videobildes fest, angegeben als Anzahl der Makroblöcke.
- `max-mbps`
  - : Wenn angegeben und von der Software unterstützt, ist dieser Wert eine Ganzzahl, die die maximale Rate angibt, mit der Makroblöcke pro Sekunde (in Makroblöcken pro Sekunde) verarbeitet werden sollten.
- `max-smbps`
  - : Wenn angegeben und von der Software unterstützt, spezifiziert dies eine Ganzzahl, die die maximale statische Makroblock-Verarbeitungsrate in statischen Makroblöcken pro Sekunde angibt (unter der hypothetischen Annahme, dass alle Makroblöcke statische Makroblöcke sind).

##### Parameter mit speziellen Anforderungen

Diese Parameter können erforderlich sein oder auch nicht, haben aber bei ihrer Verwendung besondere Anforderungen.

- `packetization-mode`
  - : Alle Endpunkte müssen Modus 1 (nicht-interleaved Modus) unterstützen. Die Unterstützung anderer Paketisierungsmodi ist optional, und der Parameter selbst muss nicht angegeben werden.
- `sprop-parameter-sets`
  - : Sequenz- und Bildinformationen für AVC können entweder in-Band oder out-of-Band gesendet werden. Wenn AVC mit WebRTC verwendet wird, müssen diese Informationen _in-Band_ signalisiert werden; der Parameter `sprop-parameter-sets` darf daher nicht im SDP enthalten sein.

##### Parameter, die spezifiziert werden müssen

Diese Parameter müssen immer angegeben werden, wenn AVC in einer WebRTC-Verbindung verwendet wird.

- `profile-level-id`
  - : Alle WebRTC-Implementierungen sind _gefordert_, diesen Parameter im SDP zu spezifizieren und zu interpretieren, um das vom Codec verwendete Teilprofil zu identifizieren. Der spezifische festgelegte Wert ist nicht definiert; wichtig ist, dass der Parameter überhaupt verwendet wird. Das ist nützlich zu beachten, da in {{RFC(6184)}} ("RTP Payload Format for H.264 Video"), `profile-level-id` vollständig optional ist.

#### Weitere Anforderungen

Um den Wechsel zwischen Hoch- und Querformaten zu unterstützen, können zwei Methoden verwendet werden. Die erste ist die Video Orientation (CVO) Header-Erweiterung für das RTP-Protokoll. Wenn dies jedoch nicht im SDP signalisiert wird, wird empfohlen, dass Browser Display Orientation SEI-Nachrichten unterstützen, obwohl dies nicht erforderlich ist.

Sofern nicht anders signalisiert, beträgt das Seitenverhältnis der Pixel 1:1, was anzeigt, dass die Pixel quadratisch sind.

#### Weitere Anmerkungen

Das Payload-Format, das für AVC in WebRTC verwendet wird, wird in {{RFC(6184, "RTP Payload Format for H.264 Video")}} beschrieben. AVC-Implementierungen für WebRTC müssen die speziellen "Filler Payload"- und "Full Frame Freeze"-SEI-Nachrichten unterstützen; diese werden verwendet, um nahtlos zwischen mehreren Eingabestreams zu wechseln.

### AV1

AV1 wird [allgemein beschrieben](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) im [Hauptleitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs).

#### Dependency Descriptor RTP Header Erweiterung

WebRTC unterstützt zwei Haupttechnologien zum effizienten Senden von Videos für den Verbrauch durch Empfänger, die mit unterschiedlichen Fähigkeiten und Netzwerkbedingungen arbeiten.

AV1 verwendet die [Dependency Descriptor (DD) RTP Header-Erweiterung](/de/docs/Web/API/WebRTC_API/Protocols/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension), um die Frame-Abhängigkeitsinformationen bereitzustellen, die zur Unterstützung von [Multi-Party Konferenzanwendungsfällen](/de/docs/Web/API/WebRTC_API/Protocols#multi-party_video_conferencing) erforderlich sind.

## Unterstützte Audio-Codecs

Die Audio-Codecs, die {{RFC(7874)}} festlegt, dass alle WebRTC-kompatiblen Browser unterstützen müssen, sind in der Tabelle unten dargestellt.

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

Weiter unten finden Sie weitere Details zu eventuellen WebRTC-spezifischen Überlegungen, die für jeden der oben aufgeführten Codecs bestehen.

Es ist nützlich zu beachten, dass {{RFC(7874)}} mehr als nur eine Liste von Audio-Codecs definiert, die ein WebRTC-kompatibler Browser unterstützen muss; es bietet auch Empfehlungen und Anforderungen für spezielle Audiofunktionen wie Echo-Kompensation, Rauschunterdrückung und Audio-Nivellierung.

> [!NOTE]
> Die obige Liste gibt den minimal erforderlichen Satz von Codecs an, die alle mit WebRTC-kompatiblen Endpunkten umsetzen müssen. Ein bestimmter Browser kann auch andere Codecs unterstützen; jedoch könnte die plattform- und geräteübergreifende Kompatibilität gefährdet sein, wenn Sie andere Codecs verwenden, ohne sorgfältig sicherzustellen, dass die Unterstützung in allen Browsern existiert, die Ihre Benutzer möglicherweise auswählen.

Neben den obligatorischen Audio-Codecs unterstützen einige Browser auch zusätzliche Codecs. Diese sind in der folgenden Tabelle aufgeführt.

<table class="standard-table">
  <caption>
    Andere Audio-Codecs
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

**[Internet Low Bitrate Codec](https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec)** (**iLBC**) ist ein Open-Source-Engbandcodec, der von Global IP Solutions und nun von Google entwickelt wurde, speziell für das Streaming von Sprachausgaben. Google und einige andere Browserentwickler haben es für WebRTC übernommen.

Der **[Internet Speech Audio Codec](https://en.wikipedia.org/wiki/Internet_Speech_Audio_Codec)** (**iSAC**) ist ein anderer Codec, der von Global IP Solutions entwickelt und nun im Besitz von Google ist, das ihn quelloffen gemacht hat. Er wird von Google Talk, QQ und anderen Instant-Messaging-Clients verwendet und ist speziell für Sprachübertragungen konzipiert, die innerhalb eines RTP-Streams gekapselt sind.

**[Komfortrauschen](https://en.wikipedia.org/wiki/Comfort_noise)** (**CN**) ist eine Form von künstlichem Hintergrundrauschen, das verwendet wird, um Lücken in einer Übertragung anstelle von reiner Stille zu füllen. Dies hilft, einen abrupten Effekt zu vermeiden, der auftreten kann, wenn Sprachaktivierung und ähnliche Funktionen einen Stream vorübergehend stoppen lassen - eine Fähigkeit, die als Diskontinuierliche Übertragung (DTX) bekannt ist. In {{RFC(3389)}} wird eine Methode zur Bereitstellung eines geeigneten Füllstoffs während der Stille beschrieben.

Komfortrauschen wird mit G.711 verwendet und kann möglicherweise mit anderen Codecs verwendet werden, die keine eingebaute CN-Funktion haben. Opus hat zum Beispiel seine eigene CN-Fähigkeit; daher wird die Verwendung von RFC 3389 CN mit dem Opus-Codec nicht empfohlen.

Ein Audio-Sender ist niemals verpflichtet, eine diskontinuierliche Übertragung oder Komfortrauschen zu verwenden.

### Opus

Das Opus-Format, definiert durch {{RFC(6716)}}, ist das primäre Format für Audio in WebRTC. Das RTP-Payload-Format für Opus ist in {{RFC(7587)}} zu finden. Allgemeine Informationen über Opus und seine Fähigkeiten und wie andere APIs Opus unterstützen können, finden Sie im [entsprechenden Abschnitt](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus) unseres [Leitfadens für Audio-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Sowohl der Sprachmodus als auch der allgemeine Audiomodus sollten unterstützt werden. Die Skalierbarkeit und Flexibilität von Opus sind nützlich, wenn mit Audio gearbeitet wird, das unterschiedliche Komplexitätsgrade haben kann. Die Unterstützung von in-Band-Stereosignalen ermöglicht die Unterstützung von Stereo, ohne den Demultiplexing-Prozess zu verkomplizieren.

Der gesamte unterstützte Bitratenbereich von Opus (6 kbps bis 510 kbps) wird in WebRTC unterstützt, wobei die Bitrate dynamisch geändert werden kann. Höhere Bitraten verbessern typischerweise die Qualität.

#### Bitratenempfehlungen

Bei einer Bildgröße von 20 Millisekunden zeigt die folgende Tabelle die empfohlenen Bitraten für verschiedene Medienformen:

| Medientyp                         | Empfohlener Bitratenbereich |
| --------------------------------- | --------------------------- |
| Schmalband-Sprache (NB)           | 8 bis 12 kbps               |
| Breitband-Sprache (WB)            | 16 bis 20 kbps              |
| Fullband-Sprache (FB)             | 28 bis 40 kbps              |
| Fullband-Mono-Musik (FB mono)     | 48 bis 64 kbps              |
| Fullband-Stereo-Musik (FB stereo) | 64 bis 128 kbps             |

Die Bitrate kann jederzeit angepasst werden. Um Netzwerküberlastungen zu vermeiden, sollte die durchschnittliche Audio-Bitrate die verfügbare Netzwerkbandbreite (abzüglich anderer bekannter oder erwarteter zusätzlicher Bandbreitenanforderungen) nicht überschreiten.

### G.711

G.711 definiert das Format für **Puls-Code-Modulation** (**PCM**)-Audio als eine Reihe von 8-Bit-Integer-Proben, die mit einer Samplingrate von 8.000 Hz aufgenommen werden, was zu einer Bitrate von 64 kbps führt. Sowohl [µ-law](https://en.wikipedia.org/wiki/M-law) als auch [A-law](https://en.wikipedia.org/wiki/A-law) Kodierungen sind erlaubt.

G.711 ist [von der ITU](https://www.itu.int/rec/T-REC-G.711-198811-I/en) definiert und sein Payload-Format ist in {{RFC(3551, "", "4.5.14")}} beschrieben.

WebRTC erfordert, dass G.711 8-Bit-Samples mit der standardmäßigen 64 kbps-Rate verwendet, obwohl G.711 einige andere Varianten unterstützt. Weder G.711.0 (verlustfreie Kompression), G.711.1 (Breitbandfähigkeit) noch andere Erweiterungen des G.711-Standards sind durch WebRTC vorgeschrieben.

Aufgrund seiner niedrigen Samplingrate und Probenaufnahmegröße wird die Audioqualität von G.711 nach heutigen Maßstäben allgemein als schlecht angesehen, obwohl sie in etwa dem entspricht, wie sich ein Festnetztelefon anhört. Es wird im Allgemeinen als kleinster gemeinsamer Nenner verwendet, um sicherzustellen, dass Browser eine Audioverbindung unabhängig von Plattformen und Browsern erreichen können, oder allgemein als Fallback-Option.

## Spezifizieren und Konfigurieren von Codecs

### Erhalten der unterstützten Codecs

Da ein bestimmter Browser und eine Plattform möglicherweise unterschiedliche Verfügbarkeiten unter den möglichen Codecs haben - und möglicherweise mehrere Profile oder Ebenen für einen bestimmten Codec unterstützen - ist der erste Schritt bei der Konfiguration von Codecs für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), die Liste der verfügbaren Codecs zu erhalten. Dazu müssen Sie zunächst eine Verbindung herstellen, auf der Sie die Liste abrufen können.

Es gibt einige Möglichkeiten, dies zu tun. Die effizienteste Möglichkeit ist die Verwendung der statischen Methode [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) (oder das Äquivalent [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) für einen Empfänger), indem Sie den Medientyp als Eingabewert angeben. Um beispielsweise die unterstützten Codecs für Video zu bestimmen, können Sie dies tun:

```js
codecList = RTCRtpSender.getCapabilities("video").codecs;
```

Jetzt ist `codecList` ein Array von [`codec`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#codecs) Objekten, von denen jedes eine Codec-Konfiguration beschreibt.
Auch in der Liste werden Einträge für [Retransmission](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#rtx_retransmission) (RTX), [Redundant Coding](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#red_redundant_audio_data) (RED) und [Forward Error Correction](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#fec_forward_error_correction) (FEC) vorhanden sein.

Wenn die Verbindung gerade im Aufbauprozess ist, können Sie das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignis verwenden, um den Abschluss der {{Glossary("ICE", "ICE")}} Kandidatensammlung zu überwachen und dann die Liste abzurufen.

```js
let codecList = null;

peerConnection.addEventListener("icegatheringstatechange", (event) => {
  if (peerConnection.iceGatheringState === "complete") {
    const senders = peerConnection.getSenders();

    senders.forEach((sender) => {
      if (sender.track.kind === "video") {
        codecList = sender.getParameters().codecs;
        return;
      }
    });
  }

  codecList = null;
});
```

Der Ereignishandler für `icegatheringstatechange` wird festgelegt; darin sehen wir nach, ob der ICE-Sammelstatus `complete` ist, was bedeutet, dass keine weiteren Kandidaten gesammelt werden. Die Methode [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) wird aufgerufen, um eine Liste aller von der Verbindung verwendeten [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Objekte zu erhalten.

Mit dieser in der Hand durchlaufen wir die Liste der Sender und suchen nach dem ersten, dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angibt, dass sein [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, was darauf hinweist, dass die Daten der Spur Videodaten sind. Dann rufen wir diese Methode `getParameters()` des Senders auf und setzen `codecList` auf die `codecs` Eigenschaft im zurückgegebenen Objekt und kehren dann zum Aufrufer zurück.

Wenn keine Videospur gefunden wird, setzen wir `codecList` auf `null`.

Bei Rückkehr ist `codecList` entweder `null`, um anzuzeigen, dass keine Videospuren gefunden wurden, oder es handelt sich um ein Array von [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) Objekten, von denen jedes eine erlaubte Codec-Konfiguration beschreibt. Von besonderer Bedeutung in diesen Objekten: die [`payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType) Eigenschaft, die ein Ein-Byte-Wert ist, der die beschriebene Konfiguration eindeutig identifiziert.

> [!NOTE]
> Die beiden hier gezeigten Methoden zum Abrufen von Codeclisten verwenden unterschiedliche Ausgabetypen in ihren Codeclisten. Beachten Sie dies bei der Verwendung der Ergebnisse.

### Anpassen der Codecliste

Sobald Sie eine Liste der verfügbaren Codecs haben, können Sie diese ändern und dann die überarbeitete Liste an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) senden, um die Codecliste neu anzuordnen. Dadurch ändern Sie die Präferenzreihenfolge der Codecs, sodass Sie WebRTC anweisen können, einen anderen Codec bevorzugt zu verwenden.

```js
function changeVideoCodec(mimeType) {
  const transceivers = peerConnection.getTransceivers();

  transceivers.forEach((transceiver) => {
    const kind = transceiver.sender.track.kind;
    let sendCodecs = RTCRtpSender.getCapabilities(kind).codecs;
    let recvCodecs = RTCRtpReceiver.getCapabilities(kind).codecs;

    if (kind === "video") {
      sendCodecs = preferCodec(mimeType);
      recvCodecs = preferCodec(mimeType);
      transceiver.setCodecPreferences([...sendCodecs, ...recvCodecs]);
    }
  });

  peerConnection.onnegotiationneeded();
}
```

In diesem Beispiel nimmt die Funktion `changeVideoCodec()` als Eingabe den MIME-Typ des Codecs, den Sie verwenden möchten. Der Code beginnt damit, eine Liste aller Überträger der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu erhalten.

Dann holen wir für jeden Überträger die Art der Medien, die durch den Überträger dargestellt werden, vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)'s Track's [`kind`](/de/docs/Web/API/MediaStreamTrack/kind). Wir erhalten auch die Listen aller von dem Browser unterstützten Codecs sowohl für das Senden als auch für das Empfangen von Video, indem wir die `getCapabilities()` statische Methode sowohl des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) verwenden.

Wenn das Medium Video ist, rufen wir die Methode `preferCodec()` sowohl für die Sender- als auch Empfänger-Codeclisten auf; diese Methode ordnet die Codecliste so um, wie wir es wollen (siehe unten).

Schließlich rufen wir die Methode [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)'s [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) auf, um anzugeben, dass die gegebenen Sende- und Empfangscodecs in der neu angeordneten Reihenfolge erlaubt sind.

Das wird für jeden Überträger auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gemacht; sobald alle Überträger aktualisiert wurden, rufen wir den [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignishandler auf, der ein neues Angebot erstellt, die lokale Beschreibung aktualisiert, das Angebot an den entfernten Peer sendet und so weiter, wodurch die Neuverhandlung der Verbindung ausgelöst wird.

Die `preferCodec()`-Funktion, die vom obigen Code aufgerufen wird, sieht so aus, dass ein bestimmter Codec an den Anfang der Liste gesetzt wird (um während der Verhandlung priorisiert zu werden):

```js
function preferCodec(codecs, mimeType) {
  let otherCodecs = [];
  let sortedCodecs = [];
  let count = codecs.length;

  codecs.forEach((codec) => {
    if (codec.mimeType === mimeType) {
      sortedCodecs.push(codec);
    } else {
      otherCodecs.push(codec);
    }
  });

  return sortedCodecs.concat(otherCodecs);
}
```

Dieser Code teilt die Codecliste einfach in zwei Arrays: eines, das Codecs enthält, deren MIME-Typ mit dem übereinstimmt, der durch den `mimeType`-Parameter angegeben wird, und das andere mit allen anderen Codecs. Sobald die Liste aufgeteilt ist, werden sie wieder miteinander verkettet, wobei die Einträge, die mit dem gegebenen `mimeType` übereinstimmen, zuerst erscheinen, gefolgt von allen anderen Codecs. Die umgestaltete Liste wird dann an den Aufrufer zurückgegeben.

## Standard-Codecs

Sofern nicht anders angegeben, sind die Standard- oder genauer die bevorzugten Codecs, die von der WebRTC-Implementierung jedes Browsers angefordert werden, in der Tabelle unten aufgeführt.

<table class="standard-table">
  <caption>
    Bevorzugte Codecs für WebRTC in großen Webbrowsern
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

Bevor Sie einen Codec wählen, der nicht zu den obligatorischen Codecs zählt (VP8 oder AVC für Video und Opus oder PCM für Audio), sollten Sie ernsthaft die potenziellen Nachteile in Betracht ziehen: Insbesondere kann davon ausgegangen werden, dass nur diese Codecs im Wesentlichen auf allen Geräten verfügbar sind, die WebRTC unterstützen.

Wenn Sie sich entscheiden, einen anderen als die obligatorischen Codecs bevorzugen, sollten Sie zumindest die Möglichkeit eines Rückfalls zu einem der obligatorischen Codecs berücksichtigen, wenn der von Ihnen bevorzugte Codec nicht unterstützt wird.

### Audio

Im Allgemeinen, wenn es verfügbar ist und das Audio, das Sie senden möchten, eine Samplingrate von mehr als 8 kHz hat, sollten Sie ernsthaft in Betracht ziehen, Opus als Ihren primären Codec zu verwenden. Für Verbindungen nur mit Sprache in einer eingeschränkten Umgebung kann die Verwendung von G.711 mit einer Samplingrate von 8 kHz eine akzeptable Gesprächserfahrung bieten, aber normalerweise werden Sie G.711 als Fallback-Option verwenden, da es andere Optionen gibt, die effizienter sind und besser klingen, wie Opus im Schmalbandmodus.

### Video

Bei der Entscheidung für einen Video-Codec (oder eine Sammlung von Codecs) spielen mehrere Faktoren eine Rolle.

#### Lizenzbedingungen

Bevor Sie einen Video-Codec auswählen, stellen Sie sicher, dass Sie sich der Lizenzanforderungen um den von Ihnen ausgewählten Codec bewusst sind; Sie finden Informationen über mögliche Lizenzierungsbedenken in unserem Hauptleitfaden zu Video-Codecs, die im Web verwendet werden. Von den beiden obligatorischen Codecs für Video - VP8 und AVC/H.264 - ist nur VP8 völlig lizenzfrei. Wenn Sie AVC auswählen, stellen Sie sicher, dass Sie sich über eventuelle Gebühren, die Sie möglicherweise zahlen müssen, im Klaren sind; abgesehen davon haben die Patentinhaber allgemein gesagt, dass sich die meisten typischen Website-Entwickler keine Sorgen über die Zahlung der Lizenzgebühren machen müssen, die sich typischerweise mehr auf die Entwickler der Kodierungs- und Dekodierungssoftware konzentrieren.

> [!WARNING]
> Die hier bereitgestellten Informationen stellen _keine_ Rechtsberatung dar! Stellen Sie sicher, dass Sie Ihre Haftung klären, bevor Sie endgültige Entscheidungen treffen, bei denen das Potenzial für Lizenzierungsprobleme besteht.

#### Leistungsanforderungen und Batterielebensdauer

Ein weiterer zu berücksichtigender Faktor - insbesondere auf mobilen Plattformen - ist der Einfluss eines Codecs auf die Batterielebensdauer. Wenn ein Codec auf einer bestimmten Plattform in Hardware gehandhabt wird, ermöglicht dieser Codec wahrscheinlich eine viel bessere Batterielebensdauer und weniger Wärmeproduktion.

Beispielsweise führte Safari für iOS und iPadOS WebRTC mit AVC als einzigem unterstütztem Video-Codec ein. AVC hat den Vorteil, auf iOS- und iPadOS-Geräten in Hardware kodiert und dekodiert werden zu können. Safari 12.1 führte im WebRTC-Bereich die Unterstützung für VP8 ein, was die Interoperabilität verbessert, jedoch auf Kosten - VP8 hat keine Hardwareunterstützung auf iOS-Geräten, sodass die Verwendung von VP8 zu einem erhöhten Prozessoraufwand und einer verringerten Batterielebensdauer führt.

#### Leistung

Glücklicherweise führen VP8 und AVC aus Endbenutzersicht ähnlich und sind gleichermaßen für die Verwendung in Videokonferenzen und anderen WebRTC-Lösungen geeignet. Die endgültige Entscheidung liegt bei Ihnen. Egal für welchen Codec Sie sich entscheiden, lesen Sie die Informationen in diesem Artikel, die über bestimmte Konfigurationsprobleme, mit denen Sie sich für diesen Codec auseinandersetzen müssen, Details enthalten.

Bedenken Sie, dass die Wahl eines Codecs, der nicht auf der Liste der obligatorischen Codecs steht, wahrscheinlich das Risiko birgt, einen Codec zu wählen, der nicht von einem Browser unterstützt wird, den Ihre Benutzer bevorzugen könnten. Weitere Informationen darüber, wie Sie die Unterstützung für Ihre bevorzugten Codecs anbieten können, während Sie dennoch in der Lage sind, auf Browser zurückzugreifen, die diesen Codec nicht implementieren, finden Sie im Artikel [Umgang mit Medien-Support-Problemen in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues).

## Sicherheitsimplikationen

Bei der Auswahl und Konfiguration von Codecs kommen interessante potenzielle Sicherheitsprobleme auf. WebRTC-Video wird durch Datagram Transport Layer Security ({{Glossary("DTLS", "DTLS")}}) geschützt, aber es ist theoretisch möglich für eine motivierte Partei, die Menge an Änderungen zu ermitteln, die von Frame zu Frame auftritt, wenn variable Bitrate (VBR)-Codecs verwendet werden, indem der Bitratenverlauf des Streams überwacht wird und wie sich dieser im Laufe der Zeit ändert. Dies könnte einem Angreifer potenziell ermöglichen, Rückschlüsse auf den Inhalt des Streams zu ziehen, gegeben den Anstieg und Rückgang der Bitrate.

Weitere Informationen zu Sicherheitsüberlegungen bei der Verwendung von AVC in WebRTC finden Sie in {{RFC(6184, "RTP Payload Format for H.264 Video: Security Considerations", 9)}}.

## RTP-Payload-Format-Medientypen

Es kann nützlich sein, sich die {{Glossary("IANA", "IANA")}}'s Liste von {{Glossary("RTP", "RTP")}} Payload-Format-Medientypen anzusehen; dies ist eine vollständige Liste der MIME-Medientypen, die für die _mögliche_ Verwendung in RTP-Streams wie denjenigen, die in WebRTC verwendet werden, definiert sind. Die meisten davon werden im WebRTC-Kontext nicht verwendet, aber die Liste kann dennoch nützlich sein.

Siehe auch {{RFC(4855)}}, das sich mit dem Registrierungsverzeichnis für Medientypen befasst.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in die WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Digitale Videokonzepte](/de/docs/Web/Media/Guides/Formats/Video_concepts)
- [Digitale Audiokonzepte](/de/docs/Web/Media/Guides/Formats/Audio_concepts)
