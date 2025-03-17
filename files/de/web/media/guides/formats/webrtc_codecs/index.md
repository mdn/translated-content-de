---
title: Codecs verwendet von WebRTC
slug: Web/Media/Guides/Formats/WebRTC_codecs
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Die [WebRTC API](/de/docs/Web/API/WebRTC_API) ermöglicht es, Websites und Apps zu erstellen, die es Benutzern ermöglichen, in Echtzeit zu kommunizieren, wobei Audio und/oder Video sowie optionale Daten und andere Informationen verwendet werden. Um zu kommunizieren, müssen die beiden Geräte einen gemeinsamen Codec für jeden Track vereinbaren können, damit sie erfolgreich kommunizieren und die gemeinsam genutzten Medien präsentieren können. Dieser Leitfaden überprüft die Codecs, die von Browsern implementiert werden müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

## Containerlose Medien

WebRTC verwendet nackte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte für jeden Track, der von einem Peer zum anderen geteilt wird, ohne einen Container oder sogar ohne einen [`MediaStream`](/de/docs/Web/API/MediaStream), der mit den Tracks verbunden ist. Welche Codecs in diesen Tracks enthalten sein können, wird von der WebRTC-Spezifikation nicht festgelegt. Allerdings spezifiziert {{RFC(7742)}}, dass alle mit WebRTC kompatiblen Browser [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) und das Constrained Baseline-Profil von [H.264](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) für Video unterstützen müssen, und {{RFC(7874)}}, dass Browser mindestens den [Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)-Codec sowie das PCMA- und PCMU-Format von [G.711](/de/docs/Web/Media/Guides/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies) unterstützen müssen.

Diese beiden RFCs legen auch Optionen fest, die für jeden Codec unterstützt werden müssen, sowie spezielle Benutzerkomfortfunktionen wie Echounterdrückung. Dieser Leitfaden überprüft die Codecs, die von Browsern implementiert werden müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

Obwohl Kompression immer eine Notwendigkeit bei der Verarbeitung von Medien im Web ist, ist sie von besonderer Bedeutung beim Videokonferieren, um sicherzustellen, dass die Teilnehmer ohne Verzögerungen oder Unterbrechungen kommunizieren können. Von sekundärer Bedeutung ist die Notwendigkeit, Video und Audio zu synchronisieren, damit die Bewegungen und alle zusätzlichen Informationen (wie Folien oder eine Projektion) gleichzeitig mit dem entsprechenden Audio präsentiert werden.

## Allgemeine Codec-Anforderungen

Bevor die codecspezifischen Fähigkeiten und Anforderungen betrachtet werden, gibt es einige allgemeine Anforderungen, die von _jeder_ mit WebRTC verwendeten Codec-Konfiguration erfüllt werden müssen.

Sofern das {{Glossary("SDP", "SDP")}} nicht speziell etwas anderes signalisiert, muss der Webbrowser, der einen WebRTC-Video-Stream empfängt, in der Lage sein, Videos mit 20 FPS bei einer Mindestauflösung von 320 Pixel Breite und 240 Pixel Höhe zu verarbeiten. Es wird empfohlen, dass Videos mit einer Bildrate und Größe nicht niedriger als diese kodiert werden, da dies im Wesentlichen die Untergrenze von dem ist, was WebRTC im Allgemeinen zu verarbeiten erwartet wird.

SDP unterstützt eine codec-unabhängige Möglichkeit, bevorzugte Videoauflösungen anzugeben ({{RFC(6236)}}. Dies geschieht durch Senden eines `a=image-attr` SDP-Attributs, um die maximale akzeptable Auflösung anzugeben. Der Sender ist jedoch nicht verpflichtet, diesen Mechanismus zu unterstützen, daher müssen Sie darauf vorbereitet sein, Medien in einer anderen Auflösung zu empfangen als die, die Sie angefordert haben. Über diese maximale Auflösungsanforderung hinaus können spezifische Codecs weitere Möglichkeiten bieten, spezifische Medieneinstellungen anzufordern.

## Unterstützte Video-Codecs

WebRTC legt eine Reihe von Basis-Codecs fest, die alle kompatiblen Browser unterstützen müssen. Einige Browser können auch andere Codecs zulassen.

Unten sind die Video-Codec, die in jedem vollständig WebRTC-kompatiblen Browser _erforderlich_ sind, sowie die Profile, die erforderlich sind, und die Browser, die diese Anforderungen tatsächlich erfüllen.

<table class="standard-table">
  <caption>
    Verpflichtende Video-Codecs
  </caption>
  <thead>
    <tr>
      <th scope="row">Codec-Name</th>
      <th scope="col">Profile</th>
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
          Firefox 136+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP Header-Erweiterung</a> mit VP8.
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
            <li>Firefox 137+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP Header-Erweiterung</a> mit H264 auf Desktop.
            Firefox auf Android unterstützt den DD Header nicht (<a href="https://bugzil.la/1947116">Firefox Bug 1947116</a>).</li>
            <li>Firefox 136+ unterstützt H.264 für Simulcast.</li>
            <li>Firefox für Android 73+ wird hardwareseitig unterstützt.</li>
            <li>Firefox für Android Versionen 68 bis 72 unterstützen H.264 nicht (aufgrund einer Änderung in den <a href="https://support.mozilla.org/en-US/kb/firefox-android-openh264">Google Play Store Anforderungen</a>, die verhindern, dass Firefox den OpenH264-Codec herunterlädt und installiert, der benötigt wird, um H.264 in WebRTC-Verbindungen zu verarbeiten).</li>
          </ul>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Details zu WebRTC-bezogenen Überlegungen für jeden Codec finden Sie in den untenstehenden Unterabschnitten, indem Sie den Links auf den Namen jedes Codecs folgen.

Vollständige Details zu den Video-Codecs und Konfigurationen, die WebRTC unterstützen muss, finden Sie in {{RFC(7742, "WebRTC Video Processing and Codec Requirements")}}. Es ist bemerkenswert, dass das RFC eine Vielzahl von video-bezogenen Anforderungen abdeckt, einschließlich Farbräume (sRGB ist der bevorzugte, aber nicht erforderliche Standardfarbraum), Empfehlungen für Webcam-Verarbeitungsfunktionen (automatischer Fokus, automatischer Weißabgleich, automatisches Lichtniveau) und so weiter.

> [!NOTE]
> Diese Anforderungen gelten für Webbrowser und andere voll-WebRTC-kompatible Produkte. Nicht-WebRTC-Produkte, die bis zu einem gewissen Grad mit WebRTC kommunizieren können, unterstützen diese Codecs möglicherweise oder nicht, obwohl sie durch die Spezifikationsdokumente dazu ermutigt werden.

Zusätzlich zu den verpflichtenden Codecs unterstützen einige Browser auch zusätzliche Codecs. Diese sind in der folgenden Tabelle aufgeführt.

<table class="standard-table">
  <caption>
    Andere Video-Codecs
  </caption>
  <thead>
    <tr>
      <th scope="row">Codec-Name</th>
      <th scope="col">Profile</th>
      <th scope="col">Browser-Kompatibilität</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="vp9_table" scope="row">VP9</th>
      <td>—</td>
      <td>
        <p>Chrome (48+), Firefox</p>
        <p>Firefox unterstützt standardmäßig kein VP9 für Simulcast (<a href="https://bugzil.la/1633876">Firefox Bug 1633876</a>).
        Firefox 136+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP Header-Erweiterung</a> mit VP9.
        </p>
      </td>
    </tr>
    <tr>
      <th id="av1_table" scope="row"><a href="#av1">AV1</a></th>
      <td>—</td>
      <td>
        <p>Chrome (113+), Firefox (136+)</p>
        <p>Firefox 136 unterstützt AV1 für Simulcast und die <a href="/de/docs/Web/API/WebRTC_API/Protocols/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP Header-Erweiterung</a>.</p>
      </td>
    </tr>
  </tbody>
</table>

### VP8

VP8, das wir [allgemein beschreiben](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) im Haupt-[Leitfaden zu den auf dem Web verwendeten Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs), hat einige spezifische Anforderungen, die befolgt werden müssen, wenn es verwendet wird, um einen Video-Track in einer WebRTC-Verbindung zu kodieren oder zu dekodieren.

Sofern nicht anders signalisiert, verwendet VP8 quadratische Pixel (d.h. Pixel mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 1:1).

#### Weitere Hinweise

Das Netzwerk-Payload-Format zum Teilen von VP8 mit {{Glossary("RTP", "RTP")}} (wie beim Verwenden von WebRTC) wird beschrieben in {{RFC(7741, "RTP Payload Format for VP8 Video")}}.

### AVC / H.264

Unterstützung für das Constrained Baseline (CB)-Profil von AVC ist in allen vollständig konformen WebRTC-Implementierungen erforderlich. CB ist ein Unterset des Hauptprofils und ist speziell für Anwendungen mit niedriger Komplexität und niedriger Latenz wie mobile Videos und Videokonferenzen sowie für Plattformen mit geringeren Leistungsfähigkeiten zur Videobearbeitung entwickelt.

Unser [Überblick über AVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) und seine Funktionen finden Sie im Hauptleitfaden zu den Video-Codecs.

#### Besondere Anforderungen an die Unterstützung von Parametern

AVC bietet eine Vielzahl von Parametern zur Steuerung optionaler Werte. Um die Zuverlässigkeit der gemeinsamen Nutzung von WebRTC-Medien auf mehreren Plattformen und Browsern zu verbessern, ist es erforderlich, dass WebRTC-Endpunkte, die AVC unterstützen, bestimmte Parameter auf bestimmte Weise verarbeiten. Manchmal bedeutet dies, dass ein Parameter unterstützt werden muss (oder nicht unterstützt werden darf). Manchmal bedeutet es, dass ein bestimmter Wert für einen Parameter erforderlich ist, oder dass ein bestimmter Satz von Werten erlaubt ist. Und manchmal sind die Anforderungen komplizierter.

##### Parameter, die nützlich, aber nicht erforderlich sind

Diese Parameter müssen von dem WebRTC-Endpunkt nicht unterstützt werden, und ihre Verwendung ist auch nicht erforderlich. Ihre Verwendung kann die Benutzererfahrung auf verschiedene Weise verbessern, muss jedoch nicht verwendet werden. Tatsächlich sind einige davon ziemlich kompliziert zu verwenden.

- `max-br`
  - : Wenn angegeben und von der Software unterstützt, gibt der `max-br`-Parameter die maximale Videobitrate in Einheiten von 1.000 bps für VCL und 1.200 bps für NAL an. Details hierzu finden Sie auf [Seite 47 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-47).
- `max-cpb`
  - : Wenn angegeben und von der Software unterstützt, spezifiziert `max-cpb` die maximale Größe des kodierten Bildpuffers. Dies ist ein ziemlich komplizierter Parameter, dessen Einheitsgröße variieren kann. Siehe [Seite 45 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-45) für Details.
- `max-dpb`
  - : Wenn angegeben und unterstützt, gibt `max-dpb` die maximale Größe des decodierten Bildpuffers an, angegeben in Einheiten von 8/3 Makroblöcken. Siehe [RFC 6184, Seite 46](https://datatracker.ietf.org/doc/html/rfc6184#page-46) für weitere Details.
- `max-fs`
  - : Wenn angegeben und von der Software unterstützt, gibt `max-fs` die maximale Größe eines einzelnen Videobildes an, angegeben als Anzahl von Makroblöcken.
- `max-mbps`
  - : Wenn angegeben und von der Software unterstützt, ist dieser Wert eine ganze Zahl, die die maximale Rate angibt, mit der Makroblöcke pro Sekunde verarbeitet werden sollen (in Makroblöcken pro Sekunde).
- `max-smbps`
  - : Wenn angegeben und von der Software unterstützt, gibt dieser Wert eine ganze Zahl an, die die maximale statische Makroblock-Verarbeitungsrate in statischen Makroblöcken pro Sekunde spezifiziert (unter der hypothetischen Annahme, dass alle Makroblöcke statische Makroblöcke sind).

##### Parameter mit spezifischen Anforderungen

Diese Parameter können erforderlich sein oder nicht, haben aber bei Verwendung spezielle Anforderungen.

- `packetization-mode`
  - : Alle Endpunkte müssen den Modus 1 (nicht-interleaved Mode) unterstützen. Die Unterstützung anderer Paketisierungsmodi ist optional und der Parameter selbst muss nicht angegeben werden.
- `sprop-parameter-sets`
  - : Sequenz- und Bildinformationen für AVC können entweder innerhalb oder außerhalb des Bandes gesendet werden. Wenn AVC mit WebRTC verwendet wird, muss diese Information im Band signalisiert werden; der Parameter `sprop-parameter-sets` darf daher nicht im SDP enthalten sein.

##### Parameter, die angegeben werden müssen

Diese Parameter müssen immer angegeben werden, wenn AVC in einer WebRTC-Verbindung verwendet wird.

- `profile-level-id`
  - : Alle WebRTC-Implementierungen müssen diesen Parameter in ihrem SDP angeben und interpretieren, um das Unterprofil zu identifizieren, das vom Codec verwendet wird. Der spezifische Wert, der festgelegt wird, ist nicht definiert; wichtig ist, dass der Parameter überhaupt verwendet wird. Dies ist nützlich zu beachten, da in {{RFC(6184)}} ("RTP Payload Format for H.264 Video") `profile-level-id` vollständig optional ist.

#### Andere Anforderungen

Zur Unterstützung des Umschaltens zwischen Portrait- und Landschaftsorientierung gibt es zwei Methoden, die verwendet werden können. Die erste ist die Video-Orientierungs-Erweiterung (CVO) für das RTP-Protokoll. Falls dies jedoch nicht im SDP als unterstützt signalisiert wird, wird empfohlen, dass Browser SEI-Meldungen zur Display-Orientierung unterstützen, obwohl dies nicht erforderlich ist.

Sofern nicht anders signalisiert, beträgt das Seitenverhältnis der Pixel 1:1, was bedeutet, dass die Pixel quadratisch sind.

#### Weitere Hinweise

Das für AVC in WebRTC verwendete Payload-Format wird in {{RFC(6184, "RTP Payload Format for H.264 Video")}} beschrieben. WebRTC-AVC-Implementierungen müssen die speziellen "Filler-Payload"- und "Full Frame Freeze"-SEI-Nachrichten unterstützen; diese werden verwendet, um das reibungslose Umschalten zwischen mehreren Eingabeströmen zu unterstützen.

### AV1

AV1 wird [allgemein beschrieben](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) im Hauptleitfaden zu den im Web verwendeten Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs).

#### Dependency Descriptor RTP Header-Erweiterung

WebRTC unterstützt zwei Haupttechnologien für das effiziente Senden von Videos für Empfänger, die mit unterschiedlichen Fähigkeiten und Netzwerkbedingungen arbeiten.

AV1 verwendet die [Dependency Descriptor (DD) RTP Header-Erweiterung](/de/docs/Web/API/WebRTC_API/Protocols/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension), um Frame-Abhängigkeitsinformationen bereitzustellen, die zur Unterstützung von [Multi-Party-Konferenzfällen](/de/docs/Web/API/WebRTC_API/Protocols#multi-party_video_conferencing) benötigt werden.

## Unterstützte Audio-Codecs

Die Audio-Codecs, die {{RFC(7874)}} vorschreibt, dass alle mit WebRTC kompatiblen Browser unterstützen müssen, sind in der folgenden Tabelle aufgeführt.

<table class="standard-table">
  <caption>
    Verpflichtende Audio-Codecs
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

Nachstehend finden Sie weitere Einzelheiten zu möglichen WebRTC-spezifischen Überlegungen für jeden der oben aufgeführten Codecs.

Es ist nützlich zu beachten, dass {{RFC(7874)}} mehr als nur eine Liste von Audio-Codecs definiert, die ein WebRTC-kompatibler Browser unterstützen muss; es bietet auch Empfehlungen und Anforderungen für spezielle Audio-Funktionen wie Echounterdrückung, Rauschunterdrückung und Audio-Pegelanpassung.

> [!NOTE]
> Die obige Liste gibt den minimal erforderlichen Satz von Codecs an, den alle mit WebRTC kompatiblen Endpunkte implementieren müssen. Ein gegebener Browser kann auch andere Codecs unterstützen; jedoch kann die Kompatibilität zwischen Plattformen und Geräten gefährdet sein, wenn Sie andere Codecs ohne sorgfältige Sicherstellung der Unterstützung in allen Browsern, die Ihre Benutzer wählen könnten, verwenden.

Zusätzlich zu den verpflichtenden Audio-Codecs unterstützen einige Browser auch zusätzliche Codecs. Diese sind in der folgenden Tabelle aufgeführt.

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

**[Internet Low Bitrate Codec](https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec)** (**iLBC**) ist ein quelloffener Schmalband-Codec, der von Global IP Solutions und jetzt von Google entwickelt wurde, speziell für das Streaming von Sprach-Audio. Google und einige andere Browser-Entwickler haben es für WebRTC übernommen.

Der **[Internet Speech Audio Codec](https://en.wikipedia.org/wiki/Internet_Speech_Audio_Codec)** (**iSAC**) ist ein weiterer Codec, der von Global IP Solutions entwickelt und jetzt von Google übernommen wurde, das ihn quelloffen gemacht hat. Es wird von Google Talk, QQ und anderen Instant-Messaging-Clients verwendet und speziell für Sprachübertragungen entwickelt, die in einen RTP-Stream gekapselt sind.

**[Comfort Noise](https://en.wikipedia.org/wiki/Comfort_noise)** (**CN**) ist eine Form von künstlichem Hintergrundrauschen, das verwendet wird, um Lücken in einer Übertragung anstelle von reinem Schweigen zu füllen. Dies hilft, einen erschreckenden Effekt zu vermeiden, der auftreten kann, wenn Sprachaktivierung und ähnliche Funktionen einen Stream vorübergehend stoppen, um eine Fähigkeit namens Diskontinuierliche Übertragung (DTX) zu ermöglichen. In {{RFC(3389)}} wird eine Methode zur Bereitstellung eines geeigneten Fillers während der Stille beschrieben.

Comfort Noise wird mit G.711 verwendet und kann potenziell mit anderen Codecs verwendet werden, die keine integrierte CN-Funktion haben. Opus hat beispielsweise seine eigene CN-Fähigkeit; daher wird die Verwendung von RFC 3389 CN mit dem Opus-Codec nicht empfohlen.

Ein Audio-Sender ist nie verpflichtet, diskontinuierliche Übertragung oder Komfortrauschen zu verwenden.

### Opus

Das Opus-Format, definiert durch {{RFC(6716)}} ist das Hauptformat für Audio in WebRTC. Das RTP-Payload-Format für Opus ist in {{RFC(7587)}} zu finden. Allgemeine Informationen zu Opus und seinen Fähigkeiten und wie andere APIs Opus unterstützen können, finden Sie im [entsprechenden Abschnitt](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus) unseres [Leitfadens zu den im Web verwendeten Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Sowohl der Sprach- als auch der allgemeine Audiomodus sollten unterstützt werden. Die Skalierbarkeit und Flexibilität von Opus sind nützlich, wenn mit Audio gearbeitet wird, das unterschiedliche Komplexitätsgrade aufweisen kann. Seine Unterstützung von In-Band-Stereo-Signalen ermöglicht die Unterstützung von Stereo ohne die Demultiplexing-Prozess zu komplizieren.

Der gesamte Bereich der von Opus unterstützten Bitraten (6 kbps bis 510 kbps) wird in WebRTC unterstützt, wobei es möglich ist, die Bitrate dynamisch zu ändern. Höhere Bitraten verbessern in der Regel die Qualität.

#### Bitratempfehlungen

Bei einer Frame-Größe von 20 Millisekunden zeigt die folgende Tabelle die empfohlenen Bitraten für verschiedene Medienformen.

| Medientyp                             | Empfohlener Bitratenbereich |
| ------------------------------------- | --------------------------- |
| Sprachkommunikation (NB)              | 8 bis 12 kbps               |
| Breites Band Sprache (WB)             | 16 bis 20 kbps              |
| Volles Band Sprache (FB)              | 28 bis 40 kbps              |
| Volles Band monaurale Musik (FB mono) | 48 bis 64 kbps              |
| Volles Band Stereo-Musik (FB Stereo)  | 64 bis 128 kbps             |

Die Bitrate kann jederzeit angepasst werden. Um Netzwerküberlastung zu vermeiden, sollte die durchschnittliche Audio-Bitrate nicht die verfügbare Netzwerkbandbreite überschreiten (abzüglich aller anderen bekannten oder erwarteten Bandbreitenanforderungen).

### G.711

G.711 definiert das Format für **Puls-Code-Modulation** (**PCM**) Audio als eine Reihe von 8-Bit-Ganzzahlen, die bei einer Abtastrate von 8.000 Hz aufgenommen wurden, was zu einer Bitrate von 64 kbps führt. Sowohl [µ-law](https://en.wikipedia.org/wiki/M-law) als auch [A-law](https://en.wikipedia.org/wiki/A-law) Kodierungen sind erlaubt.

G.711 wird [von der ITU definiert](https://www.itu.int/rec/T-REC-G.711-198811-I/en) und sein Payload-Format ist in {{RFC(3551, "", "4.5.14")}} definiert.

WebRTC erfordert, dass G.711 8-Bit-Samples bei der Standardrate von 64 kbps verwendet, obwohl G.711 einige andere Variationen unterstützt. Weder G.711.0 (verlustfreie Kompression), G.711.1 (Breitbandfähigkeit) noch andere Erweiterungen des G.711-Standards sind durch WebRTC vorgeschrieben.

Aufgrund seiner niedrigen Abtastrate und Größe wird die Audioqualität von G.711 nach modernen Maßstäben allgemein als schlecht angesehen, obwohl sie ungefähr dem entspricht, was ein Festnetztelefon klingt. Es wird im Allgemeinen als kleinster gemeinsamer Nenner verwendet, um sicherzustellen, dass Browser eine Audioverbindung unabhängig von Plattformen und Browsern erreichen können, oder als allgemeine Fallback-Option.

## Spezifizieren und Konfigurieren von Codecs

### Abrufen der unterstützten Codecs

Da ein gegebener Browser und eine Plattform möglicherweise unterschiedliche Verfügbarkeiten unter den potenziellen Codecs haben und möglicherweise mehrere Profile oder Levels für einen gegebenen Codec unterstützt werden, besteht der erste Schritt bei der Konfiguration von Codecs für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) darin, die Liste der verfügbaren Codecs abzurufen. Dazu müssen Sie zuerst eine Verbindung herstellen, um die Liste abzurufen.

Es gibt mehrere Möglichkeiten, dies zu tun. Der effizienteste Weg ist die Nutzung der statischen Methode [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) (oder der äquivalenten [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) für einen Empfänger), bei der der Medientyp als Eingabeparameter spezifiziert wird. Beispielsweise, um die unterstützten Codecs für Video zu bestimmen, können Sie dies tun:

```js
codecList = RTCRtpSender.getCapabilities("video").codecs;
```

Jetzt ist `codecList` ein Array von [`codec`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#codecs)-Objekten, die jede eine Codec-Konfiguration beschreiben.
Ebenso werden in der Liste Einträge für [Retransmission](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#rtx_retransmission) (RTX), [redundante Kodierung](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#red_redundant_audio_data) (RED) und [Vorwärtsfehlerkorrektur](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#fec_forward_error_correction) (FEC) stehen.

Wenn die Verbindung im Begriff ist, gestartet zu werden, können Sie das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignis verwenden, um auf das Abschließen des Prozesses des Einsammelns von {{Glossary("ICE", "ICE")}}-Kandidaten zu achten, und dann die Liste abrufen.

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

Der Ereignis-Handler für `icegatheringstatechange` ist festgelegt; darin schauen wir nach, ob der ICE-Sammelstatus `complete` ist, was anzeigt, dass keine weiteren Kandidaten mehr gesammelt werden. Die Methode [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) wird aufgerufen, um eine Liste aller [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte, die von der Verbindung verwendet werden, zu erhalten.

Mit dieser Liste in der Hand gehen wir durch die Liste der Sender und suchen nach dem ersten, dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) anzeigt, dass sein [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, was anzeigt, dass die Daten des Tracks Videomedien sind.
Dann rufen wir die Methode `getParameters()` dieses Senders auf und setzen `codecList` auf die `codecs`-Eigenschaft im zurückgegebenen Objekt und kehren dann zum Aufrufer zurück.

Wenn kein Video-Track gefunden wird, setzen wir `codecList` auf `null`.

Nach der Rückkehr ist `codecList` also entweder `null`, um anzuzeigen, dass keine Videotracks gefunden wurden, oder es ist ein Array von [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekten, jede beschreibt eine zulässige Codec-Konfiguration. Von besonderer Bedeutung in diesen Objekten: die [`payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType)-Eigenschaft, die ein Ein-Byte-Wert ist, der die beschriebene Konfiguration eindeutig identifiziert.

> [!NOTE]
> Die hier gezeigten zwei Methoden zum Abrufen von Codec-Listen verwenden unterschiedliche Ausgabetypen in ihren Codec-Listen. Beachten Sie dies bei der Verwendung der Ergebnisse.

### Anpassen der Codec-Liste

Sobald Sie eine Liste der verfügbaren Codecs haben, können Sie sie ändern und dann die überarbeitete Liste an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) senden, um die Codec-Liste zu verändern. Dies ändert die Präferenzreihenfolge der Codecs und ermöglicht es Ihnen, WebRTC zu bitten, einen anderen Codec allen anderen vorzuziehen.

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

In diesem Beispiel nimmt die Funktion `changeVideoCodec()` als Eingabe den MIME-Typ des Codecs, den Sie verwenden möchten. Der Code beginnt damit, eine Liste aller Transceiver in der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu erhalten.

Dann, für jeden Transceiver, erhalten wir die Art des Mediums, das durch den Transceiver repräsentiert wird, von der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)'s Track's [`kind`](/de/docs/Web/API/MediaStreamTrack/kind). Wir erhalten auch die Listen aller Codecs, die vom Browser sowohl für das Senden als auch für das Empfangen von Video unterstützt werden, indem wir die statische Methode `getCapabilities()` von sowohl [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) verwenden.

Wenn das Medium Video ist, rufen wir eine Methode namens `preferCodec()` für die Codec-Listen des Senders und des Empfängers auf; diese Methode ordnet die Codec-Liste so an, wie wir es möchten (siehe unten).

Schließlich rufen wir die Methode [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)'s [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) auf, um anzugeben, dass die angegebenen Sende- und Empfangs- Codecs in der neu geordneten Reihenfolge erlaubt sind.

Dies wird für jeden Transceiver in der `RTCPeerConnection` gemacht; nachdem alle Transceiver aktualisiert wurden, rufen wir den [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Event-Handler auf, der ein neues Angebot erstellt, die lokale Beschreibung aktualisiert, das Angebot zum entfernten Peer sendet und so weiter, wodurch die Neuverhandlung der Verbindung ausgelöst wird.

Die `preferCodec()`-Funktion, die vom obigen Code aufgerufen wird, sieht so aus, um einen bestimmten Codec an die Spitze der Liste zu verschieben (um während der Aushandlung priorisiert zu werden):

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

Dieser Code teilt einfach die Codec-Liste in zwei Arrays auf: eines, das Codecs enthält, deren MIME-Typ mit dem übereinstimmt, der vom `mimeType`-Parameter spezifiziert wird, und das andere mit allen anderen Codecs. Sobald die Liste aufgeteilt ist, werden sie mit den Einträgen, die mit dem angegebenen `mimeType` übereinstimmen, zuerst wieder zusammengefügt, gefolgt von allen anderen Codecs. Die neu angeordnete Liste wird dann zum Aufrufer zurückgegeben.

## Standard-Codecs

Sofern nicht anders angegeben, sind die von jedem Browser bevorzugten — oder korrekter die bevorzugten — Codecs für die Implementierung von WebRTC in der folgenden Tabelle aufgeführt.

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

Bevor Sie einen Codec wählen, der nicht einer der verpflichtenden Codecs (VP8 oder AVC für Video und Opus oder PCM für Audio) ist, sollten Sie ernsthaft die potenziellen Nachteile in Betracht ziehen: Insbesondere können nur diese Codecs allgemein als verfügbar auf praktisch allen Geräten, die WebRTC unterstützen, angenommen werden.

Wenn Sie sich entscheiden, einen anderen Codec als die verpflichtenden zu bevorzugen, sollten Sie zumindest einen Fallback auf einen der verpflichtenden Codecs erlauben, wenn die Unterstützung für den bevorzugten Codec nicht vorhanden ist.

### Audio

Im Allgemeinen, wenn es verfügbar ist und das Audio, das Sie senden möchten, eine Abtastrate größer als 8 kHz hat, sollten Sie ernsthaft erwägen, Opus als Ihren Hauptcodec zu verwenden. Für stimmbezogene Verbindungen in einer eingeschränkten Umgebung kann G.711 bei einer Abtastrate von 8 kHz ein akzeptables Erlebnis für Gespräche bieten, aber in der Regel verwenden Sie G.711 als Fallback-Option, da es andere Optionen gibt, die effizienter sind und besser klingen, wie Opus im Schmalbandmodus.

### Video

Es gibt eine Reihe von Faktoren, die bei der Entscheidung über einen Video-Codec (oder eine Reihe von Codecs) zu unterstützen berücksichtigt werden müssen.

#### Lizenzbestimmungen

Bevor Sie einen Video-Codec wählen, stellen Sie sicher, dass Sie sich über die Lizenzanforderungen für den ausgewählten Codec im Klaren sind; Sie finden Informationen über mögliche Lizenzierungsprobleme in unserem Hauptleitfaden zu den im Web verwendeten Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs). Von den beiden verpflichtenden Codecs für Video—VP8 und AVC/H.264—hat nur VP8 keine Lizenzierungsanforderungen. Wenn Sie AVC wählen, stellen Sie sicher, dass Sie sich möglicher Gebühren bewusst sind, die Sie zahlen müssen; allerdings haben die Patentinhaber im Allgemeinen gesagt, dass die meisten typischen Website-Entwickler sich nicht um Lizenzgebühren kümmern müssen, die sich in der Regel mehr auf die Entwickler der Kodierungs- und Dekodierungssoftware konzentrieren.

> [!WARNING]
> Die hier bereitgestellten Informationen stellen _keine_ Rechtsberatung dar! Stellen Sie sicher, dass Sie Ihre Haftungsfrage bestätigen, bevor Sie endgültige Entscheidungen treffen, bei denen potenziell Lizenzierungsprobleme bestehen.

#### Energiebedarf und Akkulaufzeit

Ein weiterer zu berücksichtigender Faktor—besonders auf mobilen Plattformen—ist der Einfluss, den ein Codec auf die Akkulaufzeit haben kann. Wenn ein Codec auf einer bestimmten Plattform hardwareseitig gehandhabt wird, ist dieser Codec wahrscheinlich besser für die Akkulaufzeit und die Wärmeproduktion.

Zum Beispiel führte Safari für iOS und iPadOS WebRTC mit AVC als einzigem unterstützten Video-Codec ein. AVC hat den Vorteil, auf iOS und iPadOS hardwareseitig kodiert und dekodiert werden zu können. Safari 12.1 führte die Unterstützung für VP8 innerhalb von IRC ein, was die Interoperabilität verbessert, jedoch mit Kosten—VP8 hat keine Hardwareunterstützung auf iOS-Geräten, so dass dessen Verwendung zu erhöhter Prozessorbelastung und verringerter Akkulaufzeit führt.

#### Leistung

Glücklicherweise leisten VP8 und AVC aus der Endbenutzerperspektive ähnlich und sind gleichermaßen für die Verwendung in Videokonferenzen und anderen WebRTC-Lösungen geeignet. Die endgültige Entscheidung obliegt Ihnen. Unabhängig davon, was Sie wählen, lesen Sie die in diesem Artikel bereitgestellten Informationen über etwaige spezielle Konfigurationsthemen, mit denen Sie sich bei diesem Codec auseinandersetzen müssen.

Denken Sie daran, dass die Auswahl eines Codecs, der nicht auf der Liste der verpflichtenden Codecs steht, wahrscheinlich das Risiko birgt, einen Codec auszuwählen, der nicht von einem Browser unterstützt wird, den Ihre Benutzer möglicherweise bevorzugen. Lesen Sie den Artikel [Umgang mit Medienunterstützungsproblemen im Web-Content](/de/docs/Web/Media/Guides/Formats/Support_issues), um zu erfahren, wie Sie Unterstützung für Ihre bevorzugten Codecs anbieten können, während Sie dennoch auf Browser zurückgreifen können, die diesen Codec nicht implementieren.

## Sicherheitsimplikationen

Es gibt interessante potenzielle Sicherheitsprobleme, die sich bei der Auswahl und Konfiguration von Codecs ergeben. WebRTC-Video wird durch Datagram Transport Layer Security ({{Glossary("DTLS", "DTLS")}}) geschützt, aber theoretisch ist es für eine motivierte Partei möglich, die Menge an Veränderung abzuleiten, die von Frame zu Frame auftritt, wenn variable Bitrate (VBR)-Codecs verwendet werden, indem die Bitrate des Streams und wie sie sich im Laufe der Zeit ändert, überwacht wird. Dies könnte potenziell einem Angreifer ermöglichen, etwas über den Inhalt des Streams aus dem Auf und Ab der Bitrate abzuleiten.

Weitere Informationen zu Sicherheitsüberlegungen bei der Verwendung von AVC in WebRTC finden Sie in {{RFC(6184, "RTP Payload Format for H.264 Video: Security Considerations", 9)}}.

## RTP Payload-Format-Medientypen

Es kann nützlich sein, sich die {{Glossary("IANA", "IANA")}}-Liste der {{Glossary("RTP", "RTP")}}-Payload-Format-Medientypen anzusehen; dies ist eine vollständige Liste der MIME-Medientypen, die für den _potenziellen_ Einsatz in RTP-Streams, wie sie in WebRTC verwendet werden, definiert sind. Die meisten davon werden nicht in WebRTC-Kontexten verwendet, aber die Liste kann dennoch nützlich sein.

Siehe auch {{RFC(4855)}}, das sich mit dem Register der Medientypen befasst.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Leitfaden zu den im Web verwendeten Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Leitfaden zu den im Web verwendeten Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Konzepte digitaler Videos](/de/docs/Web/Media/Guides/Formats/Video_concepts)
- [Konzepte digitaler Audios](/de/docs/Web/Media/Guides/Formats/Audio_concepts)
