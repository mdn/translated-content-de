---
title: Codecs used by WebRTC
slug: Web/Media/Guides/Formats/WebRTC_codecs
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

Die [WebRTC API](/de/docs/Web/API/WebRTC_API) macht es möglich, Websites und Apps zu erstellen, die es Benutzern ermöglichen, in Echtzeit zu kommunizieren, mit Audio und/oder Video sowie optionalen Daten und anderen Informationen. Um zu kommunizieren, müssen die beiden Geräte einen gemeinsamen Codec für jede Spur vereinbaren können, um erfolgreich kommunizieren und das geteilte Medium präsentieren zu können. Dieser Leitfaden überprüft die Codecs, die Browser implementieren müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

## Containerlose Medien

WebRTC verwendet unverpackte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekte für jede Spur, die von einem Peer zu einem anderen geteilt wird, ohne einen Container oder sogar einen [`MediaStream`](/de/docs/Web/API/MediaStream), der mit den Spuren verbunden ist. Welche Codecs in diesen Spuren sein können, ist nicht durch die WebRTC-Spezifikation festgelegt. Allerdings spezifiziert {{RFC(7742)}}, dass alle WebRTC-kompatiblen Browser [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) und [H.264](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264)'s Constrained Baseline Profil für Video unterstützen müssen, und {{RFC(7874)}} legt fest, dass Browser mindestens den [Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus) Codec sowie das PCMA und PCMU Format von [G.711](/de/docs/Web/Media/Guides/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies) unterstützen müssen.

Diese beiden RFCs legen auch Optionen fest, die für jeden Codec unterstützt werden müssen, sowie spezifische Benutzerkomfortmerkmale wie Echo-Unterdrückung. Dieser Leitfaden überprüft die Codecs, die Browser implementieren müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

Während Kompression beim Umgang mit Medien im Web immer notwendig ist, ist sie bei Videokonferenzen von zusätzlicher Bedeutung, um sicherzustellen, dass die Teilnehmer ohne Verzögerung oder Unterbrechungen kommunizieren können. Von sekundärer Bedeutung ist die Notwendigkeit, Video und Audio zu synchronisieren, sodass Bewegungen und jegliche Zusatzinformationen (wie Folien oder eine Projektion) zur gleichen Zeit wie das entsprechende Audio präsentiert werden.

## Allgemeine Codec-Anforderungen

Bevor man sich die codec-spezifischen Fähigkeiten und Anforderungen ansieht, gibt es ein paar allgemeine Anforderungen, die von _jedem_ Codec-Setup erfüllt werden müssen, das mit WebRTC verwendet wird.

Sofern das {{Glossary("SDP", "SDP")}} nichts anderes signalisiert, muss der Webbrowser, der einen WebRTC-Video-Stream empfängt, Videos mit mindestens 20 FPS bei einer minimalen Auflösung von 320 Pixeln Breite und 240 Pixeln Höhe verarbeiten können. Es wird empfohlen, Videos mit einer Bildrate und Größe zu kodieren, die nicht unter diesem Wert liegt, da dies im Wesentlichen die untere Grenze dessen ist, was WebRTC generell erwartet.

SDP unterstützt eine codec-unabhängige Möglichkeit, um bevorzugte Videoauflösungen zu spezifizieren ({{RFC(6236)}}. Dies wird durch das Senden eines `a=image-attr` SDP-Attributs zur Angabe der maximal akzeptablen Auflösung erreicht. Der Sender ist jedoch nicht verpflichtet, diesen Mechanismus zu unterstützen, daher müssen Sie darauf vorbereitet sein, Medien in einer anderen Auflösung zu empfangen als angefordert. Über diese maximale Auflösungsanfrage hinaus können spezifische Codecs weitere Möglichkeiten bieten, um nach bestimmten Medienkonfigurationen zu fragen.

## Unterstützte Videocodecs

WebRTC legt eine Baseline von Codecs fest, die alle kompatiblen Browser unterstützen müssen. Einige Browser können auch andere Codecs zulassen.

Im Folgenden sind die Videocodecs aufgeführt, die in jedem vollständig WebRTC-kompatiblen Browser _erforderlich_ sind, sowie die Profile, die erforderlich sind und die Browser, die tatsächlich die Anforderungen erfüllen.

<table class="standard-table">
  <caption>
    Obligatorische Videocodecs
  </caption>
  <thead>
    <tr>
      <th scope="col">Codec-Name</th>
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
          Firefox 136+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP Header Erweiterung</a> mit VP8.
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
            <li>Firefox 137+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP Header Erweiterung</a> mit H264 auf dem Desktop.
            Firefox auf Android unterstützt den DD Header nicht (<a href="https://bugzil.la/1947116">Firefox Bug 1947116</a>).</li>
            <li>Firefox 136+ unterstützt H.264 für Simulcast.</li>
            <li>Firefox für Android 73+ ist hardwareunterstützt.</li>
            <li>Firefox für Android Versionen 68 bis 72 unterstützen H.264 nicht (aufgrund einer Änderung in den <a href="https://support.mozilla.org/en-US/kb/firefox-android-openh264">Google Play Store Anforderungen</a>, die verhindern, dass Firefox das für WebRTC-Verbindungen benötigte OpenH264-Codec herunterlädt und installiert).</li>
          </ul>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Für Details zu WebRTC-bezogenen Überlegungen für jeden Codec, siehe die nachstehenden Unterabschnitte, indem Sie den Links auf den Namen jedes Codecs folgen.

Vollständige Details darüber, welche Video-Codecs und Konfigurationen WebRTC unterstützen muss, finden sich in {{RFC(7742, "WebRTC Video Processing and Codec Requirements")}}. Es ist anzumerken, dass das RFC eine Vielzahl von videobezogenen Anforderungen abdeckt, einschließlich Farbräume (sRGB ist der bevorzugte, aber nicht erforderliche Standard-Farbraum), Empfehlungen für Webcam-Verarbeitungsfunktionen (automatischer Fokus, automatischer Weißabgleich, automatische Lichtstufung) und so weiter.

> [!NOTE]
> Diese Anforderungen gelten für Webbrowser und andere vollständig WebRTC-kompatible Produkte. Nicht-WebRTC-Produkte, die in gewissem Umfang mit WebRTC kommunizieren können, unterstützen möglicherweise diese Codecs nicht, obwohl sie von den Spezifikationsdokumenten dazu ermutigt werden.

Zusätzlich zu den obligatorischen Codecs unterstützen einige Browser auch weitere Codecs. Diese sind in der folgenden Tabelle aufgeführt.

<table class="standard-table">
  <caption>
    Andere Videocodecs
  </caption>
  <thead>
    <tr>
      <th scope="col">Codec-Name</th>
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
        <p>Firefox unterstützt VP9 nicht standardmäßig für Simulcast (<a href="https://bugzil.la/1633876">Firefox Bug 1633876</a>).
        Firefox 136+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP Header Erweiterung</a> mit VP9.
        </p>
      </td>
    </tr>
    <tr>
      <th id="av1_table" scope="row"><a href="#av1">AV1</a></th>
      <td>—</td>
      <td>
        <p>Chrome (113+), Firefox (136+)</p>
        <p>Firefox 136 unterstützt AV1 für Simulcast und die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP Header Erweiterung</a>.</p>
      </td>
    </tr>
  </tbody>
</table>

### VP8

VP8, das wir [allgemein beschreiben](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) in unserem Hauptleitfaden zu Video-Codecs, die im Web verwendet werden, hat einige spezifische Anforderungen, die beim Kodieren oder Dekodieren einer Videospur in einer WebRTC-Verbindung eingehalten werden müssen.

Sofern nichts anderes signalisiert wird, verwendet VP8 quadratische Pixel (also Pixel mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 1:1).

#### Weitere Anmerkungen

Das Netzwerk-Nutzlastformat für die Freigabe von VP8 mit {{Glossary("RTP", "RTP")}} (z. B. bei der Verwendung von WebRTC) wird in {{RFC(7741, "RTP Payload Format for VP8 Video")}} beschrieben.

### AVC / H.264

Die Unterstützung des Constrained Baseline (CB) Profils von AVC ist in allen vollständig WebRTC-kompatiblen Implementierungen erforderlich. CB ist ein Teil des Hauptprofils und ist speziell für Anwendungen mit niedriger Komplexität, niedriger Latenz, wie mobile Video- und Videokonferenzen, sowie für Plattformen mit geringeren Videoverarbeitungsfähigkeiten entwickelt.

Unsere [Übersicht über AVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) und seine Funktionen finden Sie im Hauptleitfaden zu Videocodecs.

#### Anforderungen an unterstützte Sonderparameter

AVC bietet eine Vielzahl von Parametern zur Steuerung optionaler Werte. Um die Zuverlässigkeit von WebRTC-Medienfreigaben über mehrere Plattformen und Browser hinweg zu verbessern, wird erwartet, dass WebRTC-Endpunkte, die AVC unterstützen, bestimmte Parameter auf bestimmte Weise behandeln. Manchmal bedeutet dies, dass ein Parameter unterstützt werden muss (oder nicht unterstützt werden darf). Manchmal bedeutet es, einen bestimmten Wert für einen Parameter zu verlangen oder einen bestimmten Satz von Werten zuzulassen. Und manchmal sind die Anforderungen komplexer.

##### Parameter, die nützlich, aber nicht erforderlich sind

Diese Parameter müssen vom WebRTC-Endpunkt nicht unterstützt werden, und ihre Verwendung ist ebenfalls nicht erforderlich. Ihre Verwendung kann das Benutzererlebnis auf verschiedene Weise verbessern, muss aber nicht verwendet werden. In der Tat sind einige von ihnen recht kompliziert in der Anwendung.

- `max-br`
  - : Falls angegeben und von der Software unterstützt, spezifiziert der Parameter `max-br` die maximale Videobitrate in Einheiten von 1.000 bps für VCL und 1.200 bps für NAL. Details dazu finden Sie auf [Seite 47 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-47).
- `max-cpb`
  - : Falls angegeben und von der Software unterstützt, spezifiziert `max-cpb` die maximale Größe des kodierten Pufferrahmens. Dies ist ein ziemlich komplizierter Parameter, dessen Einheitengröße variieren kann. Siehe [Seite 45 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-45) für Details.
- `max-dpb`
  - : Falls angegeben und unterstützt, gibt `max-dpb` die maximale Größe des dekodierten Pufferrahmens an, gemessen in Einheiten von 8/3 Makroblöcken. Weitere Details finden Sie in [RFC 6184, Seite 46](https://datatracker.ietf.org/doc/html/rfc6184#page-46).
- `max-fs`
  - : Falls angegeben und von der Software unterstützt, spezifiziert `max-fs` die maximale Größe eines einzelnen Videorahmens, gemessen als Anzahl der Makroblöcke.
- `max-mbps`
  - : Falls angegeben und von der Software unterstützt, ist dieser Wert ein Integer, der die maximale Rate spezifiziert, mit der Makroblöcke verarbeitet werden sollen (in Makroblöcken pro Sekunde).
- `max-smbps`
  - : Falls angegeben und von der Software unterstützt, spezifiziert dieser Parameter einen Integer, der die maximale statische Makroblock-Verarbeitungsrate in statischen Makroblöcken pro Sekunde angibt (unter der hypothetischen Annahme, dass alle Makroblöcke statische Makroblöcke sind).

##### Parameter mit spezifischen Anforderungen

Diese Parameter können erforderlich oder nicht erforderlich sein, haben jedoch einige spezielle Anforderungen bei ihrer Verwendung.

- `packetization-mode`
  - : Alle Endpunkte sind verpflichtet, Modus 1 (nicht-verschachtelter Modus) zu unterstützen. Die Unterstützung für andere Paketisierungsmodi ist optional, und der Parameter selbst muss nicht angegeben werden.
- `sprop-parameter-sets`
  - : Sequenz- und Bildinformationen für AVC können entweder innerhalb oder außerhalb des Bandes gesendet werden. Wenn AVC mit WebRTC verwendet wird, _muss_ diese Information innerhalb des Bandes signalisiert werden; der `sprop-parameter-sets` Parameter darf daher _nicht_ im SDP enthalten sein.

##### Parameter, die angegeben werden müssen

Diese Parameter müssen immer angegeben werden, wenn AVC in einer WebRTC-Verbindung verwendet wird.

- `profile-level-id`
  - : Alle WebRTC-Implementierungen sind _verpflichtet_, diesen Parameter in ihrem SDP zu spezifizieren und zu interpretieren, um das von dem Codec verwendete Subprofil zu identifizieren. Der spezifische einzustellende Wert ist nicht definiert; wichtig ist, dass der Parameter überhaupt verwendet wird. Dies ist nützlich zu beachten, da der `profile-level-id` in {{RFC(6184)}} ("RTP Nutzlastformat für H.264 Video") vollständig optional ist.

#### Andere Anforderungen

Zum Zweck der Unterstützung des Wechsels zwischen Hoch- und Querformaten gibt es zwei Methoden, die genutzt werden können. Die erste ist die Videoorientierung (CVO) Header Erweiterung des RTP-Protokolls. Wenn dies jedoch nicht als unterstützt im SDP signalisiert wird, wird empfohlen, dass Browser Display Orientation SEI-Nachrichten unterstützen, auch wenn es nicht erforderlich ist.

Sofern nichts anderes signalisiert wird, beträgt das Pixel-Seitenverhältnis 1:1, was bedeutet, dass Pixel quadratisch sind.

#### Weitere Anmerkungen

Das Nutzlastformat, das für AVC in WebRTC verwendet wird, wird in {{RFC(6184, "RTP Payload Format for H.264 Video")}} beschrieben. Implementierungen von AVC für WebRTC müssen die speziellen „Füller-Nutzlast“- und „Vollbild-Einfrierung“-SEI-Nachrichten unterstützen; sie werden verwendet, um den nahtlosen Wechsel zwischen mehreren Eingabeströmen zu unterstützen.

### AV1

AV1 wird [allgemein beschrieben](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) im Hauptleitfaden zu Video-Codecs, die im Web verwendet werden.

#### Dependency Descriptor RTP Header Extension

WebRTC unterstützt zwei Haupttechnologien zum effizienten Senden von Videos an Empfänger, die mit unterschiedlichen Fähigkeiten und Netzwerkbedingungen arbeiten.

AV1 verwendet die [Dependency Descriptor (DD) RTP Header Erweiterung](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension), um Frame-Abhängigkeitsinformationen bereitzustellen, die für die Unterstützung von [Multi-Party-Konferenzen](/de/docs/Web/API/WebRTC_API/Protocols#multi-party_video_conferencing) erforderlich sind.

## Unterstützte Audiocodecs

Die Audiocodecs, die {{RFC(7874)}} vorschreibt, dass alle WebRTC-kompatiblen Browser unterstützen müssen, sind in der folgenden Tabelle dargestellt.

<table class="standard-table">
  <caption>
    Obligatorische Audiocodecs
  </caption>
  <thead>
    <tr>
      <th scope="col">Codec-Name</th>
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

Für weitere Details zu WebRTC-spezifischen Überlegungen, die für jeden der oben genannten Codecs existieren, siehe unten.

Es ist hilfreich zu beachten, dass {{RFC(7874)}} mehr als nur eine Liste von Audiocodecs definiert, die ein WebRTC-kompatibler Browser unterstützen muss; es bietet auch Empfehlungen und Anforderungen für spezielle Audiofunktionen wie Echo-Unterdrückung, Geräuschreduzierung und Audio-Pegelsteuerung.

> [!NOTE]
> Die obige Liste zeigt das Mindestset von Codecs, das alle WebRTC-kompatiblen Endpunkte implementieren müssen. Ein bestimmter Browser kann auch andere Codecs unterstützen; jedoch könnte die Plattform- und geräteübergreifende Kompatibilität gefährdet sein, falls Sie andere Codecs ohne sorgsame Sicherstellung der Unterstützung in allen Browsern, die Ihre Benutzer möglicherweise wählen, verwenden.

Zusätzlich zu den obligatorischen Audiocodecs unterstützen einige Browser auch weitere Codecs. Diese sind in der folgenden Tabelle aufgeführt.

<table class="standard-table">
  <caption>
    Andere Audiocodecs
  </caption>
  <thead>
    <tr>
      <th scope="col">Codec-Name</th>
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

Der **[Internet Low Bitrate Codec](https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec)** (**iLBC**) ist ein Open-Source-Schmalspurcodec, der von Global IP Solutions und jetzt Google entwickelt wurde, speziell für das Streaming von Sprach-Audio. Google und einige andere Browser-Entwickler haben ihn für WebRTC übernommen.

Der **[Internet Speech Audio Codec](https://en.wikipedia.org/wiki/Internet_Speech_Audio_Codec)** (**iSAC**) ist ein weiterer Codec, entwickelt von Global IP Solutions und jetzt im Besitz von Google, das ihn Open-Source gemacht hat. Er wird von Google Talk, QQ und anderen Instant-Messaging-Clients verwendet und ist speziell für Sprachübertragungen entwickelt, die in einen RTP-Stream eingekapselt sind.

**[Komfortgeräusch](https://en.wikipedia.org/wiki/Comfort_noise)** (**CN**) ist eine Form von künstlichem Hintergrundgeräusch, das verwendet wird, um Lücken in einer Übertragung zu füllen, anstatt reinen Stille zu verwenden. Dies hilft, einen Schockeffekt zu vermeiden, der auftreten kann, wenn Sprachaktivierung und ähnliche Funktionen einen Stream vorübergehend zum Stoppen der Datenübertragung führen – eine Fähigkeit, die als diskontinuierliche Übertragung (DTX) bekannt ist. In {{RFC(3389)}} wird eine Methode beschrieben, um einen geeigneten Füller während der Stille zu verwenden.

Komfortgeräusch wird mit G.711 verwendet und kann potenziell mit anderen Codecs verwendet werden, die keine eingebaute CN-Funktion haben. Opus beispielsweise verfügt über eine eigene CN-Fähigkeit; daher wird die Verwendung von RFC 3389 CN mit dem Opus Codec nicht empfohlen.

Ein Audio-Sender ist niemals verpflichtet, diskontinuierliche Übertragungen oder Komfortgeräusche zu verwenden.

### Opus

Das Opus-Format, definiert durch {{RFC(6716)}}, ist das primäre Format für Audio in WebRTC. Das RTP-Nutzlastformat für Opus ist in {{RFC(7587)}} zu finden. Allgemeine Informationen über Opus und seine Fähigkeiten sowie seine Unterstützung anderer APIs finden sich im [entsprechenden Abschnitt](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus) unseres [Leitfadens zu Audio-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Es sollte sowohl der Sprach- als auch der allgemeine Audiomodus unterstützt werden. Opus' Skalierbarkeit und Flexibilität sind nützlich, wenn man mit Audio zu tun hat, das unterschiedliche Komplexitätsgrade aufweisen kann. Seine Unterstützung für eingebettete Stereosignale ermöglicht die Unterstützung für Stereo, ohne den Entmischungsprozess zu verkomplizieren.

Der gesamte Bereich der von Opus unterstützten Bitraten (6 kbps bis 510 kbps) wird in WebRTC unterstützt, und die Bitrate darf dynamisch geändert werden. Höhere Bitraten verbessern typischerweise die Qualität.

#### Bitraten-Empfehlungen

Gegeben einer 20-Millisekunden-Framegröße zeigt die folgende Tabelle die empfohlenen Bitraten für verschiedene Formen von Medien.

| Medientyp                         | Empfohlener Bitratenbereich |
| --------------------------------- | --------------------------- |
| Schmalband-Sprache (NB)           | 8 bis 12 kbps               |
| Breitband-Sprache (WB)            | 16 bis 20 kbps              |
| Vollband-Sprache (FB)             | 28 bis 40 kbps              |
| Vollband-Mono-Musik (FB mono)     | 48 bis 64 kbps              |
| Vollband-Stereo-Musik (FB stereo) | 64 bis 128 kbps             |

Die Bitrate kann jederzeit angepasst werden. Um Netzwerkkongestion zu vermeiden, sollte die durchschnittliche Audio-Bitrate die verfügbare Netzwerkbandbreite (abzüglich aller anderen bekannten oder vorhersehbaren zusätzlichen Bandbreitenanforderungen) nicht überschreiten.

### G.711

G.711 definiert das Format für **Pulse Code Modulation** (**PCM**) Audio als eine Serie von 8-Bit-Integer-Samples, die mit einer Abtastrate von 8.000 Hz aufgenommen werden, was zu einer Bitrate von 64 kbps führt. Sowohl [µ-law](https://en.wikipedia.org/wiki/M-law) als auch [A-law](https://en.wikipedia.org/wiki/A-law) Kodierungen sind erlaubt.

G.711 ist [von der ITU definiert](https://www.itu.int/rec/T-REC-G.711-198811-I/en) und sein Nutzlastformat ist in {{RFC(3551, "", "4.5.14")}} definiert.

WebRTC erfordert, dass G.711 8-Bit-Samples bei der Standard-64-kbps-Rate verwendet, obwohl G.711 einige andere Variationen unterstützt. Weder G.711.0 (verlustfreie Kompression), noch G.711.1 (Breitbandfähigkeit), noch irgendwelche anderen Erweiterungen des G.711-Standards werden von WebRTC vorgeschrieben.

Aufgrund seiner niedrigen Abtastrate und Samplegröße wird die Audioqualität von G.711 nach modernen Standards allgemein als schlecht angesehen, obwohl sie ungefähr dem entspricht, wie ein Festnetztelefon klingt. Es wird allgemein als der kleinste gemeinsame Nenner verwendet, um sicherzustellen, dass Browser unabhängig von Plattformen und Browsern eine Audioverbindung erreichen können, oder als allgemeine Fallback-Option.

## Spezifizieren und Konfigurieren von Codecs

### Die unterstützten Codecs abrufen

Da ein bestimmter Browser und eine bestimmte Plattform möglicherweise unterschiedliche Verfügbarkeiten unter den potenziellen Codecs aufweisen – und möglicherweise mehrere Profile oder Level für einen bestimmten Codec unterstützt werden – besteht der erste Schritt bei der Konfiguration von Codecs für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) darin, die Liste der verfügbaren Codecs zu erhalten. Dazu müssen Sie zunächst eine Verbindung aufbauen, um die Liste abzurufen.

Es gibt ein paar Möglichkeiten, wie Sie dies tun können. Der effizienteste Weg ist, die statische Methode [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) (oder die entsprechende [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) für einen Empfänger) zu verwenden, wobei der Medientyp als Eingabeparameter angegeben wird. Um beispielsweise die unterstützten Codecs für Video zu bestimmen, können Sie dies tun:

```js
codecList = RTCRtpSender.getCapabilities("video").codecs;
```

Nun ist `codecList` ein Array von [`codec`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#codecs) Objekten, die jeweils eine Codec-Konfiguration beschreiben.
Auch in der Liste werden Einträge für [Retransmission](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#rtx_retransmission) (RTX), [Redundant Coding](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#red_redundant_audio_data) (RED) und [Forward Error Correction](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#fec_forward_error_correction) (FEC) vorhanden sein.

Wenn die Verbindung im Aufbau begriffen ist, können Sie das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignis verwenden, um das Abschluss des {{Glossary("ICE", "ICE")}} Kandidatensammelns zu beobachten, und dann die Liste abrufen.

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

Der Ereignishandler für `icegatheringstatechange` wird eingerichtet; in ihm prüfen wir, ob der ICE-Sammelstatus `complete` ist, was anzeigt, dass keine weiteren Kandidaten gesammelt werden. Die Methode [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) wird aufgerufen, um eine Liste aller [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Objekte zu erhalten, die von der Verbindung verwendet werden.

Mit diesem in der Hand durchlaufen wir die Liste der Sender und suchen nach dem ersten, dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) anzeigt, dass ihr [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, was anzeigt, dass die Daten der Spur Video-Medien sind.
Wir rufen dann die Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) dieses Senders auf und setzen `codecList` auf die `codecs`-Eigenschaft im zurückgegebenen Objekt, und kehren dann zum Aufrufer zurück.

Wenn keine Videospur gefunden wird, setzen wir `codecList` auf `null`.

Bei der Rückkehr ist `codecList` entweder `null`, um anzuzeigen, dass keine Videospuren gefunden wurden, oder es ist ein Array von [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) Objekten, die jeweils eine erlaubte Codec-Konfiguration beschreiben. Von besonderer Bedeutung in diesen Objekten: die [`payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType) Eigenschaft, die ein einbyte-Wert ist, der die beschriebene Konfiguration eindeutig identifiziert.

> [!NOTE]
> Die beiden hier gezeigten Methoden zur Erlangung von Codec-Listen verwenden unterschiedliche Ausgabetypen in ihren Codec-Listen. Beachten Sie dies bei der Verwendung der Ergebnisse.

### Die Codec-Liste anpassen

Sobald Sie eine Liste der verfügbaren Codecs haben, können Sie diese ändern und dann die überarbeitete Liste an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) senden, um die Codec-Liste zu ändern. Dies ändert die Präferenzreihenfolge der Codecs und ermöglicht es Ihnen, WebRTC zu sagen, dass ein anderer Codec über alle anderen bevorzugt wird.

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

In diesem Beispiel nimmt die Funktion `changeVideoCodec()` als Eingabe den MIME-Typ des Codecs, den Sie verwenden möchten. Der Code beginnt mit der Erlangung einer Liste aller [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)'s Transceiver.

Dann, für jeden Transceiver, erhalten wir den Medientyp, der durch den Transceiver repräsentiert wird, vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)'s Spur's [`kind`](/de/docs/Web/API/MediaStreamTrack/kind). Wir erhalten auch die Listen aller von dem Browser unterstützten Codecs sowohl für das Senden als auch für das Empfangen von Video, indem die `getCapabilities()` statische Methode sowohl des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) verwendet wird.

Wenn das Medium Video ist, rufen wir eine Methode namens `preferCodec()` sowohl für den Sender als auch Empfänger's Codec-Listen auf; diese Methode ändert die Codec-Liste in der gewünschten Weise (siehe unten).

Schließlich rufen wir die Methode [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)'s [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) auf, um anzugeben, dass die angegebenen Send- und Empfangscodecs in der neu geordneten Reihenfolge erlaubt sind.

Dies wird für jeden Transceiver auf der `RTCPeerConnection` durchgeführt; sobald alle Transceiver aktualisiert wurden, rufen wir den [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignishandler auf, der ein neues Angebot erstellt, die lokale Beschreibung aktualisiert, das Angebot an den entfernten Peer sendet und so weiter und damit die Neuverhandlung der Verbindung auslöst.

Die `preferCodec()` Funktion, die vom obigen Code aufgerufen wird, sieht folgendermaßen aus, um einen bestimmten Codec an den Anfang der Liste zu verschieben (um bei der Verhandlung priorisiert zu werden):

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

Dieser Code teilt die Codec-Liste nur in zwei Arrays auf: eines, das Codecs enthält, deren MIME-Typ mit dem durch den `mimeType` Parameter angegebenen übereinstimmt, und das andere mit allen anderen Codecs. Sobald die Liste aufgeteilt ist, werden sie mit den Einträgen, die mit `mimeType` übereinstimmen, zuerst gefolgt von allen anderen Codecs, wieder zusammengefügt. Die neu angeordnete Liste wird dann an den Aufrufer zurückgegeben.

## Standard-Codecs

Sofern nicht anders angegeben, sind die von der WebRTC-Implementierung jedes Browsers angeforderten Standard- oder genauer gesagt bevorzugten Codecs in der folgenden Tabelle aufgeführt.

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

## Den richtigen Codec wählen

Bevor Sie einen Codec auswählen, der nicht einer der obligatorischen Codecs ist (VP8 oder AVC für Video und Opus oder PCM für Audio), sollten Sie die potenziellen Nachteile ernsthaft in Betracht ziehen: Insbesondere können nur diese Codecs im Allgemeinen auf im Wesentlichen allen Geräten, die WebRTC unterstützen, verfügbar angenommen werden.

Wenn Sie sich entscheiden, einen anderen Codec als die obligatorischen zu bevorzugen, sollten Sie zumindest eine Rückfallmöglichkeit auf einen der obligatorischen Codecs zulassen, falls die Unterstützung für den von Ihnen bevorzugten Codec nicht verfügbar ist.

### Audio

Im Allgemeinen sollten Sie, wenn es verfügbar ist und das Audio, das Sie senden möchten, eine Abtastrate von mehr als 8 kHz hat, stark in Betracht ziehen, Opus als Ihren primären Codec zu verwenden. Für sprachbasierte Verbindungen in einer eingeschränkten Umgebung kann die Verwendung von G.711 mit einer Abtastrate von 8 kHz eine akzeptable Erfahrung für Gespräche bieten, aber typischerweise werden Sie G.711 als Rückfalloption verwenden, da es andere Optionen gibt, die effizienter sind und besser klingen, wie Opus in seinem Schmalbandmodus.

### Video

Es gibt eine Reihe von Faktoren, die bei der Entscheidung über einen Videocodec (oder eine Gruppe von Codecs) zum Tragen kommen.

#### Lizenzbedingungen

Bevor Sie einen Videocodec auswählen, stellen Sie sicher, dass Ihnen alle Lizenzanforderungen rund um den von Ihnen gewählten Codec bekannt sind; Sie finden Informationen über mögliche Lizenzierungsbedenken in unserem Hauptleitfaden zu Video-Codecs, die im Web verwendet werden. Von den zwei obligatorischen Codecs für Video – VP8 und AVC/H.264 – ist nur VP8 völlig frei von Lizenzanforderungen. Wenn Sie AVC auswählen, stellen Sie sicher, dass Sie sich potenzieller Gebühren bewusst sind, die Sie möglicherweise zahlen müssen; festgestellt, dass die Patentinhaber im Allgemeinen gesagt haben, dass die meisten typischen Website-Entwickler sich keine Sorgen machen müssen, die Lizenzgebühren zu zahlen, die sich typischerweise mehr auf die Entwickler von Kodierungs- und Dekodierungssoftware konzentrieren.

> [!WARNING]
> Die hier gegebenen Informationen stellen _keine_ Rechtsberatung dar! Stellen Sie sicher, dass Sie Ihre Haftung in Bezug auf rechtliche Fragen bestätigen, bevor Sie endgültige Entscheidungen treffen, bei denen die Möglichkeit von Lizenzproblemen besteht.

#### Leistungsbedarf und Batterielebensdauer

Ein weiterer zu berücksichtigender Faktor – insbesondere auf mobilen Plattformen – ist der Einfluss, den ein Codec auf die Batterielebensdauer haben kann. Wenn ein Codec auf einer bestimmten Plattform in Hardware verarbeitet wird, ist es wahrscheinlich, dass dieser Codec eine viel bessere Akkulaufzeit und eine geringere Wärmeproduktion ermöglicht.

Beispielsweise führte Safari für iOS und iPadOS WebRTC mit AVC als einzig unterstütztem Videocodec ein. AVC hat den Vorteil, auf iOS und iPadOS hardwarekodiert und -dekodiert zu werden. Safari 12.1 führte die Unterstützung für VP8 innerhalb von IRC ein, was die Interoperabilität verbessert, jedoch zu einem Kosten führt – VP8 hat keine Hardwareunterstützung auf iOS-Geräten, daher führt seine Verwendung zu einer erhöhten Prozessorbelastung und reduzierter Akkulaufzeit.

#### Leistung

Glücklicherweise sind VP8 und AVC aus Sicht des Endnutzers ähnlich in ihrer Leistung und für den Einsatz in Videokonferenzen und anderen WebRTC-Lösungen gleichermaßen geeignet. Die endgültige Entscheidung liegt bei Ihnen. Egal für welchen Codec Sie sich entscheiden, lesen Sie unbedingt die Informationen in diesem Artikel über eventuell zu berücksichtigende Konfigurationsprobleme für den von Ihnen gewählten Codec.

Denken Sie daran, dass die Auswahl eines Codecs, der nicht auf der Liste der obligatorischen Codecs steht, wahrscheinlich das Risiko birgt, einen Codec auszuwählen, der von einem Browser, den Ihre Benutzer bevorzugen könnten, nicht unterstützt wird. Lesen Sie den Artikel [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues), um mehr darüber zu erfahren, wie Sie Unterstützung für Ihre bevorzugten Codecs anbieten können, während Sie dennoch in der Lage sind, auf Browser zurückzugreifen, die diesen Codec nicht implementieren.

## Sicherheitsimplikationen

Es gibt interessante potenzielle Sicherheitsprobleme, die bei der Auswahl und Konfiguration von Codecs auftreten können. WebRTC-Video wird durch Datagram Transport Layer Security ({{Glossary("DTLS", "DTLS")}}) geschützt, aber es ist theoretisch möglich für eine motivierte Partei, die Menge der Veränderungen, die von Frame zu Frame auftreten, zu erfassen, wenn variable Bitrate (VBR) Codecs verwendet werden, indem sie die Bitrate des Streams überwacht und wie sie sich im Laufe der Zeit ändert. Dies könnte potenziell einem Angreifer ermöglichen, etwas über den Inhalt des Streams abzuleiten, angesichts der Ebbe und Flut der Bitrate.

Weitere Informationen zu Sicherheitsüberlegungen bei der Verwendung von AVC in WebRTC finden Sie in {{RFC(6184, "RTP Payload Format for H.264 Video: Sicherheitserwägungen", 9)}}.

## RTP-Nutzlastformat-Medientypen

Es kann nützlich sein, die Liste der {{Glossary("IANA", "IANA")}} über {{Glossary("RTP", "RTP")}} Nutzlastformat-Medientypen zu konsultieren; dies ist eine vollständige Liste der MIME-Medientypen, die für _potenzielle_ Zwecke in RTP-Streams, wie denen, die in WebRTC verwendet werden, definiert sind. Die meisten von ihnen werden nicht in WebRTC-Kontexten verwendet, aber die Liste kann dennoch nützlich sein.

Siehe auch {{RFC(4855)}}, das das Register der Medientypen abdeckt.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Leitfaden zu Video-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Leitfaden zu Audio-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Digitale Videokonzepte](/de/docs/Web/Media/Guides/Formats/Video_concepts)
- [Digitale Audiokonzepte](/de/docs/Web/Media/Guides/Formats/Audio_concepts)
