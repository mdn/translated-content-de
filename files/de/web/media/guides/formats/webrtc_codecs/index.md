---
title: Von WebRTC verwendete Codecs
slug: Web/Media/Guides/Formats/WebRTC_codecs
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

Die [WebRTC API](/de/docs/Web/API/WebRTC_API) ermöglicht es, Websites und Apps zu entwickeln, die es Benutzern ermöglichen, in Echtzeit zu kommunizieren, unter Verwendung von Audio und/oder Video sowie optionalen Daten und anderen Informationen. Damit die Kommunikation funktioniert, müssen die beiden Geräte sich auf einen gemeinsam verstandenen Codec für jeden Track einigen, um die gemeinsame Medieninhalte erfolgreich zu kommunizieren und zu präsentieren. Dieser Leitfaden bietet einen Überblick über die Codecs, die Browser implementieren müssen, sowie über andere Codecs, die von einigen oder allen Browsern für WebRTC unterstützt werden.

## Medien ohne Container

WebRTC verwendet rohe [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte für jeden Track, der von einem Peer zum anderen geteilt wird, ohne einen Container oder sogar ein [`MediaStream`](/de/docs/Web/API/MediaStream), das mit den Tracks assoziiert ist. Welche Codecs in diesen Tracks vorhanden sein können, wird von der WebRTC-Spezifikation nicht vorgeschrieben. Allerdings spezifiziert {{RFC(7742)}}, dass alle WebRTC-kompatiblen Browser [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) und [H.264](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264)'s Constrained Baseline-Profil für Video unterstützen müssen, und {{RFC(7874)}}, dass Browser mindestens den [Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)-Codec sowie [G.711](/de/docs/Web/Media/Guides/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies)'s PCMA- und PCMU-Formate unterstützen müssen.

Diese beiden RFCs legen auch Optionen fest, die für jeden Codec unterstützt werden müssen, sowie spezifische Benutzerkomfortfunktionen wie Echounterdrückung. Dieser Leitfaden bietet einen Überblick über die Codecs, die Browser implementieren müssen, sowie über andere Codecs, die von einigen oder allen Browsern für WebRTC unterstützt werden.

Während die Komprimierung bei der Arbeit mit Medien im Web immer eine Notwendigkeit ist, ist sie bei Videokonferenzen von besonderer Bedeutung, um sicherzustellen, dass die Teilnehmer ohne Verzögerungen oder Unterbrechungen kommunizieren können. Von sekundärer Bedeutung ist es, Audio und Video synchron zu halten, sodass die Bewegungen und alle zusätzlichen Informationen (wie Folien oder eine Projektion) gleichzeitig mit dem entsprechenden Audio angezeigt werden.

## Allgemeine Codec-Anforderungen

Bevor auf codec-spezifische Fähigkeiten und Anforderungen eingegangen wird, gibt es ein paar allgemeine Anforderungen, die von _jedem_ mit WebRTC verwendeten Codec erfüllt werden müssen.

Sofern im {{Glossary("SDP", "SDP")}} nicht anders angegeben, muss der Webbrowser, der einen WebRTC-Videostream empfängt, in der Lage sein, Video mit mindestens 20 FPS und einer minimalen Auflösung von 320 Pixeln Breite und 240 Pixeln Höhe zu verarbeiten. Es wird empfohlen, das Video mit einer Bildrate und Größe nicht niedriger als diese zu codieren, da dies im Wesentlichen die Untergrenze dessen ist, was WebRTC im Allgemeinen erwartet zu verarbeiten.

SDP unterstützt eine codec-unabhängige Möglichkeit, bevorzugte Videoauflösungen anzugeben ({{RFC(6236)}}). Dies geschieht durch das Senden eines `a=image-attr` SDP-Attributs, um die maximale akzeptable Auflösung anzugeben. Der Sender ist jedoch nicht verpflichtet, diesen Mechanismus zu unterstützen, so dass Sie darauf vorbereitet sein müssen, Medien in einer anderen als der angeforderten Auflösung zu empfangen. Über diese maximale Auflösungsanforderung hinaus können bestimmte Codecs weitere Möglichkeiten bieten, um spezifische Medienkonfigurationen anzufordern.

## Unterstützte Video-Codecs

WebRTC legt eine Grundmenge von Codecs fest, die alle kompatiblen Browser unterstützen müssen. Einige Browser können auch die Verwendung weiterer Codecs zulassen.

Unten sind die Video-Codecs aufgeführt, die in jedem vollständig WebRTC-konformen Browser erforderlich sind, sowie die Profile, die erforderlich sind, und die Browser, die die Anforderung tatsächlich erfüllen.

<table class="standard-table">
  <caption>
    Pflichtvideo-Codecs
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
          Firefox 136+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP-Kopfzeilenerweiterung</a> mit VP8.
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
            <li>Firefox 137+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP-Kopfzeilenerweiterung</a> mit H264 auf dem Desktop.
            Firefox auf Android unterstützt die DD-Kopfzeile nicht (<a href="https://bugzil.la/1947116">Firefox-Bug 1947116</a>).</li>
            <li>Firefox 136+ unterstützt H.264 für Simulcast.</li>
            <li>Firefox für Android 73+ ist hardwareunterstützt.</li>
            <li>Firefox für Android-Versionen 68 bis 72 unterstützen H.264 nicht (aufgrund einer Änderung der <a href="https://support.mozilla.org/en-US/kb/firefox-android-openh264">Google Play Store-Anforderungen</a>, die verhindern, dass Firefox den OpenH264-Codec herunterlädt und installiert, der für die Handhabung von H.264 in WebRTC-Verbindungen benötigt wird).</li>
          </ul>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Details zu WebRTC-bezogenen Überlegungen für jeden Codec finden Sie in den nachfolgenden Abschnitten, indem Sie die Links zu den Namen der einzelnen Codecs folgen.

Vollständige Details, welche Video-Codecs und Konfigurationen WebRTC unterstützen muss, finden Sie in {{RFC(7742, "WebRTC Video Processing and Codec Requirements")}}. Es ist erwähnenswert, dass das RFC eine Vielzahl von video-bezogenen Anforderungen abdeckt, darunter Farbräume (sRGB ist der bevorzugte, aber nicht vorgeschriebene Standardfarbraum), Empfehlungen für Webcam-Verarbeitungsfunktionen (automatischer Fokus, automatischer Weißabgleich, automatisches Lichtniveau) usw.

> [!NOTE]
> Diese Anforderungen gelten für Webbrowser und andere vollständig WebRTC-konforme Produkte. Nicht-WebRTC-Produkte, die in gewissem Umfang mit WebRTC kommunizieren können, müssen diese Codecs möglicherweise nicht unterstützen, obwohl sie von den Spezifikationsdokumenten dazu ermutigt werden.

Zusätzlich zu den obligatorischen Codecs unterstützen einige Browser auch zusätzliche Codecs. Diese sind in der folgenden Tabelle aufgeführt.

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
        <p>Firefox unterstützt VP9 standardmäßig nicht für Simulcast (<a href="https://bugzil.la/1633876">Firefox-Bug 1633876</a>).
        Firefox 136+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP-Kopfzeilenerweiterung</a> mit VP9.
        </p>
      </td>
    </tr>
    <tr>
      <th id="av1_table" scope="row"><a href="#av1">AV1</a></th>
      <td>—</td>
      <td>
        <p>Chrome (113+), Firefox (136+)</p>
        <p>Firefox 136 unterstützt AV1 für Simulcast und die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP-Kopfzeilenerweiterung</a>.</p>
      </td>
    </tr>
  </tbody>
</table>

### VP8

VP8, den wir [allgemein beschreiben](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) im Haupt-[Leitfaden zu auf dem Web verwendeten Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs), hat einige spezifische Anforderungen, die erfüllt werden müssen, wenn er zur Kodierung oder Dekodierung eines Videotracks in einer WebRTC-Verbindung verwendet wird.

Sofern nicht anders signalisiert, verwendet VP8 quadratische Pixel (d.h. Pixel mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 1:1).

#### Weitere Hinweise

Das Netzwerk-Payload-Format zur Freigabe von VP8 unter Verwendung von {{Glossary("RTP", "RTP")}} (wie bei der Verwendung von WebRTC) wird in {{RFC(7741, "RTP Payload Format for VP8 Video")}} beschrieben.

### AVC / H.264

Die Unterstützung für das Constrained Baseline (CB)-Profil von AVC ist in allen vollständig konformen WebRTC-Implementierungen erforderlich. CB ist eine Teilmenge des Hauptprofils und speziell für Anwendungen mit niedriger Komplexität und geringer Verzögerung konzipiert, wie z. B. mobile Videos und Videokonferenzen, sowie für Plattformen mit geringerer Leistungsfähigkeit bei der Videobearbeitung.

Unsere [Übersicht über AVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) und seine Funktionen finden Sie im Hauptleitfaden für Videocodecs.

#### Unterstützungsanforderungen für spezielle Parameter

AVC bietet eine breite Palette von Parametern zur Steuerung optionaler Werte. Um die Zuverlässigkeit des WebRTC-Medienaustauschs über mehrere Plattformen und Browser hinweg zu verbessern, ist es erforderlich, dass WebRTC-Endpunkte, die AVC unterstützen, bestimmte Parameter in bestimmter Weise behandeln. Manchmal bedeutet das, dass ein Parameter unterstützt (oder nicht unterstützt) werden muss. Manchmal bedeutet es, einen spezifischen Wert für einen Parameter zu verlangen oder dass eine bestimmte Menge von Werten erlaubt ist. Und manchmal sind die Anforderungen komplexer.

##### Parameter, die nützlich, aber nicht erforderlich sind

Diese Parameter müssen vom WebRTC-Endpunkt nicht unterstützt werden, und ihre Verwendung ist ebenfalls nicht erforderlich. Ihre Verwendung kann die Benutzererfahrung in verschiedener Hinsicht verbessern, muss jedoch nicht verwendet werden. Tatsächlich sind einige von ihnen ziemlich kompliziert zu verwenden.

- `max-br`
  - : Wenn angegeben und von der Software unterstützt, gibt der Parameter `max-br` die maximale Videobitrate in Einheiten von 1.000 bps für VCL und 1.200 bps für NAL an. Details hierzu finden sich auf [Seite 47 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-47).
- `max-cpb`
  - : Wenn angegeben und von der Software unterstützt, gibt `max-cpb` die maximale Größe des codierten Bildpuffers an. Dies ist ein ziemlich komplexer Parameter, dessen Einheitengröße variieren kann. Siehe [Seite 45 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-45) für Details.
- `max-dpb`
  - : Wenn angegeben und unterstützt, gibt `max-dpb` die maximale Größe des dekodierten Bildpuffers an, in Einheiten von 8/3 Makroblöcken. Siehe [RFC 6184, Seite 46](https://datatracker.ietf.org/doc/html/rfc6184#page-46) für weitere Details.
- `max-fs`
  - : Wenn angegeben und von der Software unterstützt, gibt `max-fs` die maximale Größe eines einzelnen Videoframes an, ausgedrückt als Anzahl von Makroblöcken.
- `max-mbps`
  - : Wenn angegeben und von der Software unterstützt, ist dieser Wert eine ganze Zahl, die die maximale Rate angibt, mit der Makroblöcke pro Sekunde (in Makroblöcken pro Sekunde) verarbeitet werden sollten.
- `max-smbps`
  - : Wenn angegeben und von der Software unterstützt, gibt dieser Wert eine ganze Zahl an, die die maximale Verarbeitungsgeschwindigkeit für statische Makroblöcke in statischen Makroblöcken pro Sekunde angibt (unter der hypothetischen Annahme, dass alle Makroblöcke statische Makroblöcke sind).

##### Parameter mit besonderen Anforderungen

Diese Parameter können erforderlich oder optional sein, haben jedoch einige spezielle Anforderungen, wenn sie verwendet werden.

- `packetization-mode`
  - : Alle Endpunkte müssen Modus 1 (nicht verschachtelter Modus) unterstützen. Die Unterstützung anderer Packetisierungsmodi ist optional, und der Parameter selbst muss nicht angegeben werden.
- `sprop-parameter-sets`
  - : Sequenz- und Bildinformationen für AVC können entweder in-band oder out-of-band gesendet werden. Wenn AVC mit WebRTC verwendet wird, _müssen_ diese Informationen in-band signalisiert werden; der Parameter `sprop-parameter-sets` darf daher _nicht_ in das SDP aufgenommen werden.

##### Parameter, die angegeben werden müssen

Diese Parameter müssen jedes Mal angegeben werden, wenn AVC in einer WebRTC-Verbindung verwendet wird.

- `profile-level-id`
  - : Alle WebRTC-Implementierungen sind _verpflichtet_, diesen Parameter in ihrem SDP anzugeben und zu interpretieren, um das verwendete Sub-Profil des Codecs zu identifizieren. Der spezifische Wert, der gesetzt wird, ist nicht definiert; was wichtig ist, ist, dass der Parameter überhaupt verwendet wird. Dies ist nützlich zu beachten, da in {{RFC(6184)}} ("RTP-Payload-Format für H.264-Video") `profile-level-id` völlig optional ist.

#### Weitere Anforderungen

Um die Unterstützung beim Wechseln zwischen Hoch- und Querformat zu gewährleisten, gibt es zwei Methoden, die verwendet werden können. Die erste ist die Videoorientierung (CVO) Kopfzeilenerweiterung des RTP-Protokolls. Wenn dies jedoch nicht im SDP als unterstützt signalisiert wird, wird empfohlen, dass Browser Display-Orientierung SEI-Nachrichten unterstützen, auch wenn dies nicht erforderlich ist.

Sofern nicht anders signalisiert, ist das Pixel-Seitenverhältnis 1:1, was anzeigt, dass die Pixel quadratisch sind.

#### Weitere Hinweise

Das für AVC in WebRTC verwendete Payload-Format ist in {{RFC(6184, "RTP Payload Format for H.264 Video")}} beschrieben. AVC-Implementierungen für WebRTC müssen die speziellen "Füller-Payload" und "Volle Frame-Einfrier"-SEI-Nachrichten unterstützen; diese werden verwendet, um einen nahtlosen Wechsel zwischen mehreren Eingabeströmen zu unterstützen.

### AV1

AV1 ist [allgemein beschrieben](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) im Haupt-[Leitfaden zu auf dem Web verwendeten Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs).

#### Abhängigkeit Descriptor RTP Header Erweiterung

WebRTC unterstützt zwei Haupttechnologien zum effizienten Senden von Videos für Empfänger mit unterschiedlichen Fähigkeiten und Netzbedingungen.

AV1 verwendet die [Dependency Descriptor (DD) RTP Header Erweiterung](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension), um die Frame-Abhängigkeitsinformationen bereitzustellen, die erforderlich sind, um [Anwendungsfälle für Mehrparteienkonferenzen](/de/docs/Web/API/WebRTC_API/Protocols#multi-party_video_conferencing) zu unterstützen.

## Unterstützte Audio-Codecs

Die Audio-Codecs, die {{RFC(7874)}} vorschreibt, dass alle WebRTC-kompatiblen Browser unterstützen müssen, sind in der folgenden Tabelle gezeigt.

<table class="standard-table">
  <caption>
    Pflicht-Audio-Codecs
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

Siehe unten für weitere Details zu eventuellen WebRTC-spezifischen Überlegungen, die für jeden oben aufgeführten Codec bestehen.

Es ist nützlich zu beachten, dass {{RFC(7874)}} mehr als eine Liste von Audio-Codecs definiert, die ein WebRTC-kompatibler Browser unterstützen muss; es bietet auch Empfehlungen und Anforderungen für spezielle Audiofunktionen wie Echounterdrückung, Rauschreduzierung und Audiopegelung.

> [!NOTE]
> Die obige Liste gibt die minimale erforderliche Menge an Codecs an, die alle WebRTC-kompatiblen Endpunkte implementieren müssen. Ein bestimmter Browser kann auch andere Codecs unterstützen; jedoch kann die plattform- und geräteübergreifende Kompatibilität gefährdet sein, wenn Sie andere Codecs verwenden, ohne sorgfältig sicherzustellen, dass die Unterstützung in allen Browsern vorhanden ist, die Ihre Benutzer möglicherweise wählen.

Zusätzlich zu den obligatorischen Audio-Codecs unterstützen einige Browser auch zusätzliche Codecs. Diese sind in der folgenden Tabelle aufgeführt.

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

**[Internet Low Bitrate Codec](https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec)** (**iLBC**) ist ein Open-Source-Schmalband-Codec, der von Global IP Solutions und jetzt von Google entwickelt wurde, speziell für das Streaming von Sprach-Audio. Google und einige andere Browserentwickler haben es für WebRTC übernommen.

Der **[Internet Speech Audio Codec](https://en.wikipedia.org/wiki/Internet_Speech_Audio_Codec)** (**iSAC**) ist ein weiterer Codec, der von Global IP Solutions entwickelt wurde und jetzt Google gehört, welches es als Open-Source angeboten hat. Es wird von Google Talk, QQ und anderen Instant-Messaging-Clients verwendet und ist speziell für Sprachübertragungen konzipiert, die in einem RTP-Stream gekapselt sind.

**[Komfortrauschen](https://en.wikipedia.org/wiki/Comfort_noise)** (**CN**) ist eine Form von künstlichem Hintergrundrauschen, das verwendet wird, um Lücken in einer Übertragung zu füllen, anstatt reine Stille zu verwenden. Dies hilft, einen erschreckenden Effekt zu vermeiden, der auftreten kann, wenn die Sprachaktivierung und ähnliche Funktionen einen Stream vorübergehend stoppen lassen - eine Fähigkeit, die als Diskontinuierliche Übertragung (DTX) bekannt ist. In {{RFC(3389)}} ist eine Methode zur Bereitstellung eines geeigneten Füllers während der Stille beschrieben.

Komfortrauschen wird mit G.711 verwendet und kann potenziell mit anderen Codecs verwendet werden, die keine eingebaute CN-Funktion haben. Opus, zum Beispiel, hat seine eigene CN-Fähigkeit; daher wird die Verwendung von RFC 3389 CN mit dem Opus-Codec nicht empfohlen.

Ein Audiosender muss niemals diskontinuierliche Übertragung oder Komfortrauschen verwenden.

### Opus

Das Opus-Format, definiert durch {{RFC(6716)}} ist das primäre Format für Audio in WebRTC. Das RTP-Payload-Format für Opus findet sich in {{RFC(7587)}}. Allgemeine Informationen über Opus und seine Fähigkeiten sowie darüber, wie andere APIs Opus unterstützen können, finden Sie im entsprechenden Abschnitt unseres [Leitfadens zu auf dem Web verwendeten Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus).

Sowohl der Sprach- als auch der allgemeine Audiomodus sollten unterstützt werden. Die Skalierbarkeit und Flexibilität von Opus sind nützlich, wenn mit Audio umgegangen wird, das unterschiedliche Komplexitätsgrade haben kann. Seine Unterstützung von in-Band-Stereosignalen ermöglicht die Unterstützung von Stereo, ohne den Demultiplexing-Prozess zu verkomplizieren.

Der gesamte Bereich der von Opus unterstützten Bitraten (6 kbps bis 510 kbps) wird in WebRTC unterstützt, wobei die Bitrate dynamisch geändert werden kann. Höhere Bitraten verbessern in der Regel die Qualität.

#### Empfehlungen zur Bitrate

Bei einer Bildgröße von 20 Millisekunden zeigt die folgende Tabelle die empfohlenen Bitraten für verschiedene Medienformen.

| Medientyp                         | Empfohlener Bitratenbereich |
| --------------------------------- | --------------------------- |
| Schmalband-Sprache (NB)           | 8 bis 12 kbps               |
| Breitband-Sprache (WB)            | 16 bis 20 kbps              |
| Vollband-Sprache (FB)             | 28 bis 40 kbps              |
| Vollband-Mono-Musik (FB mono)     | 48 bis 64 kbps              |
| Vollband-Stereo-Musik (FB stereo) | 64 bis 128 kbps             |

Die Bitrate kann jederzeit angepasst werden. Um Netzwerküberlastungen zu vermeiden, sollte die durchschnittliche Audiobitrate die verfügbare Netzwerkbandbreite (abzüglich anderer bekannter oder erwarteter zusätzlicher Bandbreitenanforderungen) nicht überschreiten.

### G.711

G.711 definiert das Format für **Pulscodemodulation** (**PCM**)-Audio als eine Reihe von 8-Bit-Ganzzahlsamples, die bei einer Abtastrate von 8.000 Hz aufgenommen werden und eine Bitrate von 64 kbps ergeben. Sowohl [µ-law](https://en.wikipedia.org/wiki/M-law) als auch [A-law](https://en.wikipedia.org/wiki/A-law)-Kodierungen sind erlaubt.

G.711 ist [von der ITU definiert](https://www.itu.int/rec/T-REC-G.711-198811-I/en) und sein Payload-Format ist in {{RFC(3551, "", "4.5.14")}} definiert.

WebRTC erfordert, dass G.711 8-Bit-Samples bei der Standardrate von 64 kbps verwendet, obwohl G.711 einige andere Varianten unterstützt. Weder G.711.0 (verlustfreie Komprimierung), G.711.1 (Breitband-Fähigkeit) noch andere Erweiterungen des G.711-Standards sind von WebRTC vorgeschrieben.

Aufgrund seiner niedrigen Abtastrate und Samplegröße wird die G.711-Audioqualität nach modernen Standards allgemein als schlecht angesehen, auch wenn sie in etwa dem Klang entspricht, den ein Festnetztelefon bietet. Sie wird im Allgemeinen als kleinster gemeinsamer Nenner verwendet, um sicherzustellen, dass Browser eine Audi

overbindung unabhängig von Plattformen und Browsern herstellen können, oder als allgemeine Fallback-Option.

## Spezifizierung und Konfiguration von Codecs

### Ermitteln der unterstützten Codecs

Da ein bestimmter Browser und eine Plattform eine unterschiedliche Verfügbarkeit unter den möglichen Codecs haben können — und möglicherweise mehrere Profile oder Ebenen für einen bestimmten Codec unterstützt werden — besteht der erste Schritt bei der Konfiguration von Codecs für ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) darin, die Liste der verfügbaren Codecs zu erhalten. Dazu müssen Sie zunächst eine Verbindung herstellen, um die Liste zu erhalten.

Es gibt ein paar Möglichkeiten, dies zu tun. Die effizienteste Methode ist, die statische Methode [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) (oder das Äquivalent [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) für einen Empfänger) zu verwenden, wobei der Medientyp als Eingabeparameter angegeben wird. Um z. B. die unterstützten Codecs für Video zu ermitteln, können Sie dies tun:

```js
codecList = RTCRtpSender.getCapabilities("video").codecs;
```

Jetzt ist `codecList` ein Array aus [`codec`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#codecs)-Objekten, die jeweils eine Codec-Konfiguration beschreiben. Ebenso werden in der Liste Einträge für [Retransmission](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#rtx_retransmission) (RTX), [redundante Kodierung](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#red_redundant_audio_data) (RED) und [Vorwärtsfehlerkorrektur](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#fec_forward_error_correction) (FEC) vorhanden sein.

Wenn sich die Verbindung im Aufbau befindet, können Sie das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignis verwenden, um zu überwachen, wann das Sammeln von {{Glossary("ICE", "ICE")}}-Kandidaten abgeschlossen ist, und dann die Liste abrufen.

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

Der Ereignishandler für `icegatheringstatechange` wird festgelegt. Darin prüfen wir, ob der ICE-Sammelzustand `complete` ist, was anzeigt, dass keine weiteren Kandidaten gesammelt werden. Die Methode [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) wird aufgerufen, um eine Liste aller [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte zu erhalten, die von der Verbindung verwendet werden.

Mit dieser Liste in der Hand durchlaufen wir die Liste der Sender und suchen nach dem ersten, dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) anzeigt, dass sein [Typ](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, was darauf hinweist, dass die Daten des Tracks Videomedien sind. Dann rufen wir die Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) dieses Senders auf und setzen `codecList` auf die `codecs`-Eigenschaft im zurückgegebenen Objekt und kehren dann zum Aufrufer zurück.

Wenn kein Videotrack gefunden wird, setzen wir `codecList` auf `null`.

Bei der Rückkehr ist `codecList` entweder `null`, was anzeigt, dass keine Videotracks gefunden wurden, oder es handelt sich um ein Array aus [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekten, die jeweils eine zugelassene Codec-Konfiguration beschreiben. Besonders wichtig in diesen Objekten ist die [`payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType)-Eigenschaft, die einen Ein-Byte-Wert darstellt, der die beschriebene Konfiguration eindeutig identifiziert.

> [!NOTE]
> Die beiden hier gezeigten Methoden zum Abrufen von Codec-Listen verwenden unterschiedliche Ausgabetypen in ihren Codec-Listen. Seien Sie sich dessen bewusst, wenn Sie die Ergebnisse verwenden.

### Anpassen der Codec-Liste

Sobald Sie eine Liste der verfügbaren Codecs haben, können Sie diese ändern und dann die überarbeitete Liste an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) senden, um die Codec-Liste neu zu ordnen. Dies ändert die Präferenzreihenfolge der Codecs und lässt Sie WebRTC mitteilen, dass ein anderer Codec bevorzugt wird.

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

In diesem Beispiel nimmt die Funktion `changeVideoCodec()` als Eingabe den MIME-Typ des gewünschten Codecs entgegen. Der Code beginnt damit, eine Liste aller Transceiver der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) abzurufen.

Dann holen wir uns für jeden Transceiver den Medientyp, den der Transceiver darstellt, von der Spur des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), indem wir den [Typ](/de/docs/Web/API/MediaStreamTrack/kind) des Tracks erhalten. Ebenso holen wir die Listen aller von dem Browser unterstützten Codecs, sowohl für das Senden als auch Empfangen von Video, mithilfe der `getCapabilities()`-statischen Methode von sowohl [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) ein.

Wenn das Medium Video ist, rufen wir eine Methode namens `preferCodec()` für die Codec-Listen sowohl des Senders als auch des Empfängers auf; diese Methode ordnet die Codec-Liste in der gewünschten Weise um (siehe unten).

Schließlich rufen wir die Methode [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)'s [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) auf, um anzugeben, dass die angegebenen Sende- und Empfangs-Codecs in der neu angeordneten Reihenfolge erlaubt sind.

Damit ist dies für jeden Transceiver auf der `RTCPeerConnection` abgeschlossen; sobald alle Transceiver aktualisiert wurden, rufen wir den [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignishandler auf, der ein neues Angebot erstellt, die lokale Beschreibung aktualisiert, das Angebot an den Remote-Peer sendet und so weiter, was die Neuverhandlung der Verbindung auslöst.

Die vom obigen Code aufgerufene `preferCodec()`-Funktion sieht folgendermaßen aus, um einen angegebenen Codec an den Anfang der Liste zu verschieben (während der Verhandlung priorisiert zu werden):

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

Dieser Code teilt nur die Codec-Liste in zwei Arrays auf: eines, das Codecs enthält, deren MIME-Typ mit dem durch den `mimeType`-Parameter angegebenen übereinstimmt, und das andere mit allen anderen Codecs. Sobald die Liste aufgeteilt ist, werden sie wieder zusammengefügt, wobei die Einträge, die dem gegebenen `mimeType` entsprechen, zuerst kommen, gefolgt von allen anderen Codecs. Die neu angeordnete Liste wird dann an den Aufrufer zurückgegeben.

## Standard-Codecs

Sofern nicht anders angegeben, entsprechen die standardmäßigen oder, genauer gesagt, bevorzugten Codecs, die von jeder Browser-Implementierung von WebRTC angefordert werden, den Codecs, die in der untenstehenden Tabelle angezeigt werden.

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
      <td>VP9 (Firefox 46 und später)<br />VP8</td>
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

## Auswahl des richtigen Codecs

Bevor Sie sich für einen Codec entscheiden, der nicht zu den obligatorischen Codecs gehört (VP8 oder AVC für Video und Opus oder PCM für Audio), sollten Sie die potenziellen Nachteile ernsthaft in Betracht ziehen: Insbesondere können nur diese Codecs allgemein auf allen Geräten als verfügbar vorausgesetzt werden, die WebRTC unterstützen.

Wenn Sie sich entscheiden, einen anderen Codec als die obligatorischen zu bevorzugen, sollten Sie mindestens einen Fallback zu einem der obligatorischen Codecs zulassen, wenn die Unterstützung für den bevorzugten Codec nicht vorhanden ist.

### Audio

Im Allgemeinen, wenn es verfügbar ist und das Audio, das Sie senden möchten, eine Abtastrate von mehr als 8 kHz hat, sollten Sie ernsthaft in Erwägung ziehen, Opus als Ihren primären Codec zu verwenden. Für reine Sprachverbindungen in einer eingeschränkten Umgebung kann die Verwendung von G.711 bei einer Abtastrate von 8 kHz ein akzeptables Konversationserlebnis bieten, aber normalerweise verwenden Sie G.711 als Fallback-Option, da es andere Optionen gibt, die effizienter sind und besser klingen, wie zum Beispiel Opus in seinem Schmalbandmodus.

### Video

Es gibt eine Reihe von Faktoren, die bei der Auswahl eines Video-Codecs (oder einerset Codecs) zur Unterstützung berücksichtigt werden müssen.

#### Lizenzbedingungen

Bevor Sie sich für einen Video-Codec entscheiden, sollten Sie sicherstellen, dass Sie sich über die Lizenzanforderungen im Klaren sind, die für den gewählten Codec gelten; Informationen zu möglichen Lizenzierungsfragen finden Sie in unserem Hauptleitfaden zu auf dem Web verwendeten Videocodecs. Von den beiden obligatorischen Codecs für Video — VP8 und AVC/H.264 — hat nur VP8 keine Lizenzanforderungen. Wenn Sie AVC auswählen, stellen Sie sicher, dass Sie: sich über mögliche Gebühren im Klaren sind, die Sie möglicherweise zahlen müssen; das gesagt, die Patentinhaber haben im Allgemeinen erklärt, dass die meisten typischen Website-Entwickler sich keine Sorgen um die Lizenzgebühren machen müssen, die typischerweise mehr auf die Entwickler der Codierungs- und Decodierungssoftware ausgerichtet sind.

> [!WARNING]
> Die hier bereitgestellten Informationen stellen _keine_ Rechtsberatung dar! Stellen Sie sicher, dass Sie Ihr Risiko für Haftung prüfen, bevor Sie endgültige Entscheidungen treffen, bei denen potenziell Lizenzprobleme bestehen.

#### Leistungsanforderungen und Akkulaufzeit

Ein weiterer zu berücksichtigender Faktor – insbesondere auf mobilen Plattformen – ist die Auswirking eines Codecs auf die Akkulaufzeit. Wenn ein Codec auf einer bestimmten Plattform in Hardware verarbeitet wird, ist dies wahrscheinlich mit einer viel besseren Akkulaufzeit und weniger Wärmeerzeugung verbunden.

Zum Beispiel hat Safari für iOS und iPadOS WebRTC eingeführt, wobei AVC der einzige unterstützte Video-Codec ist. AVC hat den Vorteil, auf iOS und iPadOS in Hardware codiert und dekodiert werden zu können. Safari 12.1 führte die Unterstützung für VP8 innerhalb von IRC ein, was die Interoperabilität verbessert, jedoch zu einem Nachteil führt — VP8 hat keine Hardwareunterstützung auf iOS-Geräten, sodass die Verwendung eine erhöhte Prozessorbelastung und verringerte Akkulaufzeit verursacht.

#### Leistung

Glücklicherweise bieten VP8 und AVC aus Sicht des Endverbrauchers eine ähnliche Leistung und eignen sich gleichermaßen gut für Videokonferenzen und andere WebRTC-Lösungen. Die endgültige Entscheidung liegt bei Ihnen. Welchen Sie auch wählen, stellen Sie sicher, dass Sie die in diesem Artikel bereitgestellten Informationen über alle spezifischen Konfigurationsprobleme lesen, mit denen Sie bei diesem Codec konfrontiert werden könnten.

Denken Sie daran, dass bei der Auswahl eines Codecs, der nicht auf der Liste der obligatorischen Codecs steht, die Gefahr besteht, einen Codec auszuwählen, der von einem Browser, den Ihre Benutzer möglicherweise bevorzugen, nicht unterstützt wird. Lesen Sie den Artikel [Umgang mit Problemen bei der Medienunterstützung in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues), um mehr darüber zu erfahren, wie Sie Unterstützung für Ihre bevorzugten Codecs bieten können, während Sie dennoch auf Browser zurückgreifen können, die diesen Codec nicht implementieren.

## Sicherheitsimplikationen

Bei der Auswahl und Konfiguration von Codecs gibt es interessante potenzielle Sicherheitsfragen. WebRTC-Video wird mithilfe der Datagram Transport Layer Security ({{Glossary("DTLS", "DTLS")}}) geschützt, aber es ist theoretisch möglich, dass eine motivierte Partei aus dem Bitratenverhalten der Variable-Bitrate (VBR)-Codecs ableitet, wie viel Änderung von Frame zu Frame auftritt, indem sie die Bitrate des Streams überwacht, und wie sie sich über die Zeit ändert. Dies könnte einem Angreifer potenziell ermöglichen, Rückschlüsse auf den Inhalt des Streams zu ziehen, angesichts des Schwebe- und Flussverhaltens der Bitrate.

Weitere Informationen zu Sicherheitsbetrachtungen bei der Verwendung von AVC in WebRTC finden Sie in {{RFC(6184, "RTP Payload Format for H.264 Video: Security Considerations", 9)}}.

## RTP-Payload-Format-Medien-Typen

Es kann nützlich sein, sich die {{Glossary("IANA", "IANA")}}'s Liste der {{Glossary("RTP", "RTP")}} Payload-Format-Medientypen anzusehen; dies ist eine vollständige Liste der MIME-Medientypen, die für die _potentielle_ Verwendung in RTP-Streams definiert sind, wie sie in WebRTC verwendet werden. Die meisten davon werden in WebRTC-Kontexten nicht verwendet, aber die Liste kann dennoch nützlich sein.

Siehe auch {{RFC(4855)}}, der das Register der Medientypen behandelt.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Leitfaden zu auf dem Web verwendeten Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Leitfaden zu auf dem Web verwendeten Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Digitale Videokonzepte](/de/docs/Web/Media/Guides/Formats/Video_concepts)
- [Digitale Audiokonzepte](/de/docs/Web/Media/Guides/Formats/Audio_concepts)
