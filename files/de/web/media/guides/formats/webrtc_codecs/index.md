---
title: Codecs, die von WebRTC verwendet werden
slug: Web/Media/Guides/Formats/WebRTC_codecs
l10n:
  sourceCommit: 64d995ef99a84226348832ed398e9edc7809e53e
---

Die [WebRTC API](/de/docs/Web/API/WebRTC_API) ermöglicht es, Websites und Apps zu erstellen, die Nutzern Echtzeitkommunikation unter Verwendung von Audio und/oder Video sowie optionalen Daten und weiteren Informationen erlauben. Damit die Kommunikation funktioniert, müssen sich die beiden Geräte auf einen gemeinsamen Codec für jeden Track einigen, um die Medien erfolgreich übertragen und darstellen zu können. Dieser Leitfaden untersucht die Codecs, die Browser implementieren müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

## Medien ohne Container

WebRTC verwendet rohe [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte für jeden Track, der von einem Peer zum anderen geteilt wird, ohne einen Container oder sogar einen [`MediaStream`](/de/docs/Web/API/MediaStream), der mit den Tracks assoziiert ist. Welche Codecs in diesen Tracks enthalten sein können, wird durch die WebRTC-Spezifikation nicht vorgeschrieben. Allerdings legt {{RFC(7742)}} fest, dass alle WebRTC-kompatiblen Browser [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) und [H.264](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264)s Constrained Baseline-Profil für Video unterstützen müssen, und {{RFC(7874)}} spezifiziert, dass Browser mindestens den [Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)-Codec sowie die PCMA- und PCMU-Formate von [G.711](/de/docs/Web/Media/Guides/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies) unterstützen müssen.

Diese beiden RFCs legen auch Optionen fest, die für jeden Codec unterstützt werden müssen, sowie bestimmte Benutzerkomfort-Funktionen wie Echo-Unterdrückung. Dieser Leitfaden überprüft die Codecs, die Browser implementieren müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

Während Kompression immer notwendig ist, wenn es um Medien im Web geht, ist sie beim Videokonferenzieren von zusätzlicher Bedeutung, um sicherzustellen, dass die Teilnehmer ohne Verzögerung oder Unterbrechungen kommunizieren können. Von sekundärer Bedeutung ist das Bedürfnis, Video und Audio zu synchronisieren, sodass Bewegungen und alle Zusatzinformationen (z. B. Folien oder eine Projektion) gleichzeitig mit dem zugehörigen Audio präsentiert werden.

## Allgemeine Codec-Anforderungen

Bevor wir uns die codec-spezifischen Fähigkeiten und Anforderungen ansehen, gibt es einige allgemeine Anforderungen, die von _allen_ Codec-Konfigurationen erfüllt werden müssen, die mit WebRTC verwendet werden.

Sofern das {{Glossary("SDP", "SDP")}} nichts anderes angibt, muss der Webbrowser, der einen WebRTC-Videostream empfängt, in der Lage sein, Video mit 20 FPS bei einer Mindestauflösung von 320 Pixel Breite und 240 Pixel Höhe zu verarbeiten. Es wird empfohlen, Video mit einer Bildrate und Größe nicht unter diesem Niveau zu kodieren, da dies im Wesentlichen die untere Grenze darstellt, die WebRTC im Allgemeinen erwartet.

SDP unterstützt eine codec-unabhängige Möglichkeit, bevorzugte Videoauflösungen zu spezifizieren ({{RFC(6236)}}. Dies geschieht durch das Senden eines `a=image-attr` SDP-Attributs, um die maximal akzeptable Auflösung anzugeben. Der Sender ist jedoch nicht verpflichtet, diesen Mechanismus zu unterstützen, daher müssen Sie darauf vorbereitet sein, Medien in einer anderen als der angeforderten Auflösung zu empfangen. Zusätzlich zu dieser maximalen Auflösungsanforderung können spezifische Codecs weitere Möglichkeiten bieten, spezifische Medienkonfigurationen anzufordern.

## Unterstützte Video-Codecs

WebRTC legt eine Basislinie von Codecs fest, die alle konformen Browser unterstützen müssen. Einige Browser können auch andere Codecs zulassen.

Nachfolgend sind die Videocodecs aufgeführt, die in jedem vollständig WebRTC-konformen Browser _erforderlich_ sind, sowie die Profile, die erforderlich sind und die Browser, die die Anforderung tatsächlich erfüllen.

<table class="standard-table">
  <caption>
    Pflichtvideo-Codecs
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
            <li>Firefox 137+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP Header-Erweiterung</a> mit H264 auf dem Desktop.
            Firefox auf Android unterstützt den DD-Header nicht (<a href="https://bugzil.la/1947116">Firefox Bug 1947116</a>).</li>
            <li>Firefox 136+ unterstützt H.264 für Simulcast.</li>
            <li>Firefox für Android 73+ ist hardwareunterstützt.</li>
            <li>Firefox für Android-Versionen 68 bis 72 unterstützen H.264 nicht (aufgrund einer Änderung in den <a href="https://support.mozilla.org/en-US/kb/firefox-android-openh264">Google Play Store-Anforderungen</a>, die verhindern, dass Firefox den benötigten OpenH264-Codec herunterladen und installieren kann, um H.264 in WebRTC-Verbindungen zu verarbeiten).</li>
          </ul>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Details zu WebRTC-bezogenen Überlegungen für jeden Codec finden Sie in den Unterabschnitten, indem Sie den Links auf den Namen jedes Codecs folgen.

Vollständige Details darüber, welche Videocodecs und Konfigurationen WebRTC unterstützen muss, finden Sie in {{RFC(7742, "WebRTC Video Processing and Codec Requirements")}}. Es ist bemerkenswert, dass das RFC eine Vielzahl von videobezogenen Anforderungen abdeckt, einschließlich Farbräume (sRGB ist der bevorzugte, aber nicht erforderliche Standardfarbraum), Empfehlungen für Webcam-Verarbeitungsfunktionen (automatischer Fokus, automatischer Weißabgleich, automatische Lichtpegel) usw.

> [!NOTE]
> Diese Anforderungen gelten für Webbrowser und andere vollständig WebRTC-konforme Produkte. Nicht-WebRTC-Produkte, die in gewissem Maße mit WebRTC kommunizieren können, unterstützen diese Codecs möglicherweise nicht, obwohl sie in den Spezifikationsdokumenten dazu ermutigt werden.

Zusätzlich zu den Pflichtcodecs unterstützen einige Browser auch weitere Codecs. Diese sind in der folgenden Tabelle aufgeführt.

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
        <p>Firefox unterstützt VP9 nicht standardmäßig für Simulcast (<a href="https://bugzil.la/1633876">Firefox Bug 1633876</a>).
        Firefox 136+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP Header-Erweiterung</a> mit VP9.
        </p>
      </td>
    </tr>
    <tr>
      <th id="av1_table" scope="row"><a href="#av1">AV1</a></th>
      <td>—</td>
      <td>
        <p>Chrome (113+), Firefox (136+)</p>
        <p>Firefox 136 unterstützt AV1 für Simulcast und die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP Header-Erweiterung</a>.</p>
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

VP8, das wir [allgemein beschreiben](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) im Haupt-[Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs), hat einige spezifische Anforderungen, die befolgt werden müssen, wenn es zum Kodieren oder Dekodieren eines Videotracks in einer WebRTC-Verbindung verwendet wird.

Sofern nicht anders signalisiert, verwendet VP8 quadratische Pixel (das heißt, Pixel mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 1:1).

#### Weitere Hinweise

Das Netzwerknutzlastformat zum Teilen von VP8 über {{Glossary("RTP", "RTP")}} (wie bei der Verwendung von WebRTC) wird in {{RFC(7741, "RTP Payload Format for VP8 Video")}} beschrieben.

### AVC / H.264

Unterstützung für das Constrained Baseline (CB)-Profil von AVC ist in allen vollständig konformen WebRTC-Implementierungen erforderlich. CB ist ein Unterset des Hauptprofils und speziell entwickelt für Anwendungen mit geringer Komplexität und niedriger Verzögerung wie mobile Video- und Videokonferenzen sowie für Plattformen mit geringer Leistungsfähigkeit in der Videobearbeitung.

Unser [Überblick über AVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) und seine Funktionen finden Sie im Hauptleitfaden für Videocodecs.

### HEVC / H.265

Unser [Überblick über HEVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) und seine Funktionen finden Sie im Hauptleitfaden für Videocodecs.

#### Spezielle Unterstützung von Parameteranforderungen

AVC bietet eine breite Palette von Parametern zur Steuerung optionaler Werte. Um die Zuverlässigkeit des WebRTC-Medienaustauschs über mehrere Plattformen und Browser hinweg zu verbessern, ist es erforderlich, dass WebRTC-Endpunkte, die AVC unterstützen, bestimmte Parameter auf spezifische Weise handhaben. Manchmal bedeutet dies, dass ein Parameter zwingend unterstützt werden muss (oder nicht). Manchmal bedeutet es, einen bestimmten Wert für einen Parameter zu verlangen oder dass ein bestimmter Satz von Werten zugelassen wird. Und manchmal sind die Anforderungen komplexer.

##### Parameter, die nützlich, aber nicht erforderlich sind

Diese Parameter müssen nicht vom WebRTC-Endpunkt unterstützt werden, und ihre Verwendung ist ebenfalls nicht erforderlich. Ihre Verwendung kann das Benutzererlebnis auf verschiedene Weise verbessern, muss aber nicht verwendet werden. Tatsächlich sind einige davon recht kompliziert in der Anwendung.

- `max-br`
  - : Wenn angegeben und vom Software unterstützt, spezifiziert der `max-br`-Parameter die maximale Videobitrate in Einheiten von 1.000 bps für VCL und 1.200 bps für NAL. Details finden Sie auf [Seite 47 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-47).
- `max-cpb`
  - : Wenn angegeben und von der Software unterstützt, spezifiziert `max-cpb` die maximale Größe des kodierten Bildpuffers. Dies ist ein ziemlich komplizierter Parameter, dessen Einheitengröße variieren kann. Siehe [Seite 45 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-45) für Details.
- `max-dpb`
  - : Wenn angegeben und unterstützt, gibt `max-dpb` die maximale dekodierte Bildpuffergröße an, in Einheiten von 8/3 Makroblöcken. Siehe [RFC 6184, Seite 46](https://datatracker.ietf.org/doc/html/rfc6184#page-46) für weitere Details.
- `max-fs`
  - : Wenn angegeben und von der Software unterstützt, spezifiziert `max-fs` die maximale Größe eines einzelnen Videorahmens, angegeben als Anzahl der Makroblöcke.
- `max-mbps`
  - : Wenn angegeben und von der Software unterstützt, gibt dieser Wert eine Ganzzahl an, die die maximale Anzahl an Makroblöcken angibt, die pro Sekunde verarbeitet werden sollten (in Makroblöcken pro Sekunde).
- `max-smbps`
  - : Wenn angegeben und von der Software unterstützt, gibt dies eine Ganzzahl an, die die maximale statische Makroblockverarbeitungsrate in statischen Makroblöcken pro Sekunde angibt (unter der hypothetischen Annahme, dass alle Makroblöcke statische Makroblöcke sind).

##### Parameter mit spezifischen Anforderungen

Diese Parameter müssen zwar nicht zwingend erforderlich sein, haben aber bei Verwendung spezielle Anforderungen.

- `packetization-mode`
  - : Alle Endpunkte müssen Modus 1 (nicht-verschachtelten Modus) unterstützen. Die Unterstützung für andere Paketisierungsmodi ist optional, und der Parameter selbst muss nicht zwingend angegeben werden.
- `sprop-parameter-sets`
  - : Sequenz- und Bildinformationen für AVC können entweder im Band oder außerhalb des Bandes gesendet werden. Wenn AVC mit WebRTC verwendet wird, müssen diese Informationen _im Band_ signalisiert werden; der `sprop-parameter-sets`-Parameter darf daher _nicht_ im SDP enthalten sein.

##### Parameter, die spezifiziert werden müssen

Diese Parameter müssen bei der Verwendung von AVC in einer WebRTC-Verbindung immer angegeben werden.

- `profile-level-id`
  - : Alle WebRTC-Implementierungen sind _verpflichtet_, diesen Parameter in ihrem SDP zu spezifizieren und zu interpretieren, um das Subprofil zu identifizieren, das vom Codec verwendet wird. Der spezifische Wert, der gesetzt wird, ist nicht definiert; was zählt, ist, dass der Parameter überhaupt verwendet wird. Dies ist bemerkenswert, da in {{RFC(6184)}} ("RTP Payload Format for H.264 Video") `profile-level-id` völlig optional ist.

#### Weitere Anforderungen

Um die Unterstützung des Wechsels zwischen Hoch- und Querformat zu ermöglichen, gibt es zwei Methoden, die verwendet werden können. Die erste ist die Videoorientierung (CVO) Header-Erweiterung zum RTP-Protokoll. Wenn dies jedoch nicht im SDP signalisiert wird, wird empfohlen, dass Browser Display Orientation SEI-Nachrichten unterstützen, obwohl dies nicht erforderlich ist.

Sofern nicht anders signalisiert, beträgt das Pixel-Seitenverhältnis 1:1, was darauf hinweist, dass die Pixel quadratisch sind.

#### Weitere Hinweise

Das Nutzlastformat, das für AVC in WebRTC verwendet wird, wird in {{RFC(6184, "RTP Payload Format for H.264 Video")}} beschrieben. AVC-Implementierungen für WebRTC müssen die speziellen SEI-Nachrichten "Füll- Payload" und "Vollbild-Freeze" unterstützen; diese werden verwendet, um das nahtlose Umschalten zwischen mehreren Eingabestreams zu unterstützen.

### AV1

AV1 wird [allgemein beschrieben](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) im Haupt-[Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs).

#### Abhängigkeit-Descriptor RTP Header-Erweiterung

WebRTC unterstützt zwei Haupttechnologien für die effiziente Übertragung von Video für Empfänger mit unterschiedlichen Fähigkeiten und Netzwerkbedingungen.

AV1 verwendet die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension), um die für [mehrteilige Konferenzanwendungsfälle](/de/docs/Web/API/WebRTC_API/Protocols#multi-party_video_conferencing) benötigten Frame-Abhängigkeitsinformationen bereitzustellen.

## Unterstützte Audio-Codecs

Die Audio-Codecs, die {{RFC(7874)}} vorschreibt, die alle WebRTC-kompatiblen Browser unterstützen müssen, sind in der folgenden Tabelle aufgeführt.

<table class="standard-table">
  <caption>
    Pflichtaudio-Codecs
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

Unten finden Sie weitere Details zu eventuell bestehenden WebRTC-spezifischen Überlegungen für jeden der oben aufgeführten Codecs.

Es ist erwähnenswert, dass {{RFC(7874)}} nicht nur eine Liste von Audio-Codecs definiert, die ein WebRTC-konformer Browser unterstützen muss; es bietet auch Empfehlungen und Anforderungen für spezielle Audiofunktionen wie Echo-Unterdrückung, Rauschunterdrückung und Audiopegel-Kontrolle.

> [!NOTE]
> Die obige Liste gibt den mindestens erforderlichen Satz von Codecs an, die alle WebRTC-kompatiblen Endpunkte implementieren müssen. Ein bestimmter Browser kann auch andere Codecs unterstützen; jedoch kann die plattform- und geräteübergreifende Kompatibilität gefährdet sein, wenn Sie andere Codecs verwenden, ohne sorgfältig sicherzustellen, dass Unterstützung in allen Browsern besteht, die Ihre Benutzer wählen könnten.

Zusätzlich zu den Pflichtaudio-Codecs unterstützen einige Browser auch andere Codecs. Diese sind in der folgenden Tabelle aufgeführt.

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

Der **[Internet Low Bitrate Codec](https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec)** (**iLBC**) ist ein Open-Source-Schmalband-Codec, der von Global IP Solutions und jetzt Google entwickelt wurde, speziell für das Streaming von Sprach-Audio. Google und einige andere Browser-Entwickler haben ihn für WebRTC übernommen.

Der **[Internet Speech Audio Codec](https://en.wikipedia.org/wiki/Internet_Speech_Audio_Codec)** (**iSAC**) ist ein weiterer Codec, der von Global IP Solutions entwickelt wurde und nun im Besitz von Google ist, welches ihn als Open Source zur Verfügung gestellt hat. Er wird von Google Talk, QQ und anderen Instant-Messaging-Clients genutzt und ist speziell für Sprachübertragungen ausgelegt, die in einen RTP-Stream gekapselt sind.

**[Komfortgeräusch](https://en.wikipedia.org/wiki/Comfort_noise)** (**CN**) ist eine Form von künstlichem Hintergrundgeräusch, das anstelle von reiner Stille verwendet wird, um Lücken in einer Übertragung zu füllen. Dies hilft, einen abrupten Effekt zu vermeiden, der auftreten kann, wenn Sprachaktivierung und ähnliche Funktionen dazu führen, dass ein Stream vorübergehend das Senden von Daten stoppt – eine Fähigkeit, die als Diskontinuierliche Übertragung (DTX) bekannt ist. In {{RFC(3389)}} wird eine Methode bereitgestellt, um eine geeignete Füllung während der Stille anzubieten.

Komfortgeräusch wird mit G.711 verwendet und kann potenziell auch mit anderen Codecs verwendet werden, die keine integrierte CN-Funktion haben. Opus beispielsweise hat eine eigene CN-Fähigkeit; daher wird die Verwendung von RFC 3389 CN mit dem Opus-Codec nicht empfohlen.

Ein Audio-Sender ist niemals verpflichtet, diskontinuierliche Übertragung oder Komfortgeräusch zu verwenden.

### Opus

Das Opus-Format, definiert durch {{RFC(6716)}} ist das primäre Format für Audio in WebRTC. Das RTP-Nutzlastformat für Opus ist in {{RFC(7587)}} zu finden. Sie finden weitere allgemeine Informationen über Opus und seine Fähigkeiten sowie darüber, wie andere APIs Opus unterstützen können, in dem [entsprechenden Abschnitt](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus) unseres [Leitfadens für Audio-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Sowohl der Sprach- als auch der allgemeine Audiomodus sollten unterstützt werden. Die Skalierbarkeit und Flexibilität von Opus sind nützlich, wenn es um Audio geht, das unterschiedliche Komplexitätsgrade aufweisen kann. Die Unterstützung von In-Band-Stereosignalen ermöglicht die Unterstützung von Stereo, ohne den Demultiplexing-Prozess zu verkomplizieren.

Der gesamte von Opus unterstützte Bitratenbereich (6 kbps bis 510 kbps) wird in WebRTC unterstützt, wobei die Bitrate dynamisch geändert werden kann. Höhere Bitraten verbessern typischerweise die Qualität.

#### Bitratenempfehlungen

Bei einer Rahmenlänge von 20 Millisekunden zeigt die folgende Tabelle die empfohlenen Bitraten für verschiedene Medienformen.

| Medientyp                                    | Empfohlenes Bitratenbereich |
| -------------------------------------------- | --------------------------- |
| Schmalband-Sprachübertragung (NB)            | 8 bis 12 kbps               |
| Breitband-Sprachübertragung (WB)             | 16 bis 20 kbps              |
| Vollband-Sprachübertragung (FB)              | 28 bis 40 kbps              |
| Vollband-Mono-Musikübertragung (FB Mono)     | 48 bis 64 kbps              |
| Vollband-Stereo-Musikübertragung (FB Stereo) | 64 bis 128 kbps             |

Die Bitrate kann jederzeit angepasst werden. Um Netzwerkkonflikte zu vermeiden, sollte die durchschnittliche Audiobitrate die verfügbare Netzwerkbandbreite nicht überschreiten (abzüglich jeglicher anderer bekannter oder erwarteter zusätzlicher Bandbreitenanforderungen).

### G.711

G.711 definiert das Format für **Puls-Code-Modulation** (**PCM**) Audio als eine Serie von 8-Bit-Integer-Samples, die bei einer Abtastrate von 8.000 Hz genommen werden, was zu einer Bitrate von 64 kbps führt. Sowohl [µ-law](https://en.wikipedia.org/wiki/M-law) als auch [A-law](https://en.wikipedia.org/wiki/A-law) Encodings sind erlaubt.

G.711 ist von der [ITU definiert](https://www.itu.int/rec/T-REC-G.711-198811-I/en) und sein Nutzlastformat ist in {{RFC(3551, "", "4.5.14")}} definiert.

WebRTC erfordert, dass G.711 8-Bit-Samples bei der standardmäßigen 64 kbps-Rate verwendet, obwohl G.711 einige andere Variationen unterstützt. Weder G.711.0 (verlustfreie Kompression), G.711.1 (Breitbandfähigkeit) noch irgendeine andere Erweiterung des G.711-Standards sind durch WebRTC vorgeschrieben.

Aufgrund seiner niedrigen Abtastrate und der Samplegröße wird die Audioqualität von G.711 nach modernen Maßstäben allgemein als schlecht angesehen, obwohl es ungefähr dem entspricht, wie sich ein Festnetztelefon anhört. Es wird im Allgemeinen als kleinster gemeinsamer Nenner verwendet, um sicherzustellen, dass Browser eine Audioverbindung herstellen können, ungeachtet von Plattformen und Browsern, oder im Allgemeinen als Fallback-Option.

## Spezifizierung und Konfiguration von Codecs

### Abrufen der unterstützten Codecs

Da ein bestimmter Browser und eine Plattform möglicherweise eine unterschiedliche Verfügbarkeit unter den potenziellen Codecs aufweisen und möglicherweise mehrere Profile oder Ebenen für einen bestimmten Codec unterstützen, besteht der erste Schritt bei der Konfiguration von Codecs für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) darin, die Liste der verfügbaren Codecs zu erhalten. Dazu müssen Sie zuerst eine Verbindung herstellen, auf der Sie die Liste erhalten können.

Es gibt einige Möglichkeiten, dies zu tun. Der effizienteste Weg ist die Verwendung der statischen Methode [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) (oder der äquivalenten [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) für einen Empfänger), bei der der Medientyp als Eingabeparameter spezifiziert wird. Um beispielsweise die unterstützten Codecs für Video zu ermitteln, können Sie dies tun:

```js
codecList = RTCRtpSender.getCapabilities("video").codecs;
```

Jetzt ist `codecList` ein Array von [`codec`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#codecs)-Objekten, die jeweils eine Codec-Konfiguration beschreiben.
Auch in der Liste werden Einträge für [Retransmission](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#rtx_retransmission) (RTX), [redundante Kodierung](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#red_redundant_audio_data) (RED) und [Vorwärtsfehlerkorrektur](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#fec_forward_error_correction) (FEC) vorhanden sein.

Wenn sich die Verbindung im Prozess des Startens befindet, können Sie das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignis verwenden, um auf den Abschluss der {{Glossary("ICE", "ICE")}}-Kandidatensammlung zu achten und dann die Liste abzurufen.

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

Der Ereignishandler für `icegatheringstatechange` wird etabliert; darin überprüfen wir, ob der ICE-Sammlungsstatus `complete` ist, was darauf hinweist, dass keine weiteren Kandidaten gesammelt werden. Die Methode [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) wird aufgerufen, um eine Liste aller [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte zu erhalten, die von der Verbindung verwendet werden.

Mit dieser Liste in der Hand gehen wir die Liste der Sender durch und suchen nach dem ersten, dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angibt, dass sein [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, was darauf hinweist, dass die Track-Daten Videomedien sind.
Wir rufen dann die [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters)-Methode dieses Senders auf und setzen `codecList` auf die `codecs`-Eigenschaft im zurückgegebenen Objekt und kehren dann zum Aufrufer zurück.

Wenn kein Videotrack gefunden wird, setzen wir `codecList` auf `null`.

Am Ende ist `codecList` entweder `null`, was darauf hinweist, dass keine Videotracks gefunden wurden, oder es ist ein Array von [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekten, die jeweils eine zulässige Codec-Konfiguration beschreiben. Von besonderer Bedeutung in diesen Objekten ist die [`payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType)-Eigenschaft, die ein Ein-Byte-Wert ist, der die beschriebene Konfiguration eindeutig identifiziert.

> [!NOTE]
> Die hier gezeigten zwei Methoden zum Abrufen von Codeclisten verwenden unterschiedliche Ausgabetypen in ihren Codeclisten. Beachten Sie dies bei der Verwendung der Ergebnisse.

### Anpassung der Codecliste

Sobald Sie eine Liste der verfügbaren Codecs haben, können Sie diese ändern und dann die überarbeitete Liste an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) senden, um die Präferenzreihenfolge der Codecs zu ändern. Dies ändert die Reihenfolge der Präferenz der Codecs und ermöglicht es Ihnen, WebRTC anzuweisen, einen anderen Codec anderen vorzuziehen.

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

In diesem Beispiel nimmt die Funktion `changeVideoCodec()` als Eingabe den MIME-Typ des gewünschten Codecs an. Der Code beginnt mit dem Abrufen einer Liste aller `RTCRtpTransceiver` des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Dann erhalten wir für jeden Transceiver die Art der Medien, die durch den Transceiver vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)'s Track's [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) repräsentiert werden. Wir erhalten auch die Listen aller Codecs, die für das Senden und Empfangen von Videos vom Browser unterstützt werden, durch die Nutzung der `getCapabilities()`-statischen Methode sowohl des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver).

Wenn es sich bei den Medien um Video handelt, rufen wir eine Methode namens `preferCodec()` sowohl für die Sender- als auch die Empfängerliste der Codecs auf; diese Methode ordnet die Codecliste in der gewünschten Weise um (siehe unten).

Schließlich rufen wir die [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)'s [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences)-Methode auf, um anzugeben, dass die angegebenen Send- und Empfangscodecs in der neu umgeordneten Reihenfolge zulässig sind.

Das wird für jeden Transceiver auf der `RTCPeerConnection` durchgeführt; sobald alle Transceiver aktualisiert wurden, rufen wir den [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignishandler auf, der ein neues Angebot erstellt, die lokale Beschreibung aktualisiert, das Angebot an den entfernten Peer sendet und so weiter, wodurch die Neuverhandlung der Verbindung ausgelöst wird.

Die `preferCodec()`-Funktion, die vom oben gezeigten Code aufgerufen wird, sieht so aus, um einen bestimmten Codec an die Spitze der Liste zu verschieben (um bei der Verhandlung priorisiert zu werden):

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

Dieser Code teilt einfach die Codecliste in zwei Arrays: eines, das Codecs enthält, deren MIME-Typ mit dem angegebenen `mimeType`-Parameter übereinstimmt, und das andere mit allen anderen Codecs. Sobald die Liste aufgeteilt wurde, werden sie wieder zusammengefügt, wobei die Einträge, die mit dem angegebenen `mimeType` übereinstimmen, zuerst kommen, gefolgt von allen anderen Codecs. Die umgeordnete Liste wird dann an den Aufrufer zurückgegeben.

## Standard-Codecs

Sofern nicht anders angegeben, werden die von jeder Browser-Implementierung von WebRTC angeforderten Standard- oder, genauer gesagt, bevorzugten Codecs in der folgenden Tabelle aufgeführt.

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
      <td>VP9 (Firefox 46 und höher)<br />VP8</td>
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

Bevor Sie sich für einen Codec entscheiden, der nicht einer der Pflichtcodecs ist (VP8 oder AVC für Video und Opus oder PCM für Audio), sollten Sie die potenziellen Nachteile ernsthaft in Betracht ziehen: Insbesondere können nur diese Codecs allgemein angenommen werden, auf fast allen Geräten verfügbar zu sein, die WebRTC unterstützen.

Wenn Sie sich dafür entscheiden, einen anderen als die Pflichtcodecs zu bevorzugen, sollten Sie zumindest den Rückgriff auf einen der Pflichtcodecs ermöglichen, falls keine Unterstützung für den bevorzugten Codec vorhanden ist.

### Audio

Im Allgemeinen sollten Sie, wenn es verfügbar ist und das Audio, das Sie senden möchten, eine Abtastrate von mehr als 8 kHz aufweist, ernsthaft in Betracht ziehen, Opus als Ihren primären Codec zu verwenden. Für sprachbasierte Verbindungen in einer eingeschränkten Umgebung kann die Verwendung von G.711 bei einer 8 kHz-Abtastrate ein akzeptables Erlebnis für Gespräche bieten, aber typischerweise wird G.711 als Fallback-Option verwendet, da es andere Optionen gibt, die effizienter sind und besser klingen, wie Opus in seinem Schmalbandmodus.

### Video

Es gibt eine Reihe von Faktoren, die berücksichtigt werden müssen, wenn es darum geht, einen Video-Codec (oder eine Reihe von Codecs) zu unterstützen.

#### Lizenzbedingungen

Bevor Sie einen Videocodec auswählen, sollten Sie sich über eventuell vorhandene Lizenzanforderungen rund um den von Ihnen gewählten Codec im Klaren sein. Sie finden Informationen über mögliche Lizenzierungsbedenken in unserem Haupt-[Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs). Von den beiden Pflichtcodecs für Video – VP8 und AVC/H.264 – ist nur VP8 völlig frei von Lizenzierungsanforderungen. Wenn Sie AVC auswählen, sollten Sie sich über mögliche Gebühren im Klaren sein, die Sie möglicherweise zahlen müssen; dennoch haben die Patentinhaber im Allgemeinen gesagt, dass die meisten typischen Website-Entwickler sich keine Sorgen um die Zahlung von Lizenzgebühren machen sollten, die in der Regel eher auf die Entwickler der Kodierungs- und Dekodierungssoftware abzielen.

> [!WARNING]
> Die hier enthaltenen Informationen stellen _keine_ rechtliche Beratung dar! Stellen Sie sicher, dass Sie Ihre Haftung bestätigen, bevor Sie endgültige Entscheidungen treffen, wenn potenzielle Lizenzprobleme bestehen.

#### Energiebedarf und Akkulaufzeit

Ein weiterer zu berücksichtigender Faktor, insbesondere auf mobilen Plattformen, ist die Auswirkung eines Codecs auf die Akkulaufzeit. Wenn ein Codec auf einer bestimmten Plattform in Hardware verarbeitet wird, ermöglicht dieser Codec wahrscheinlich eine viel bessere Akkulaufzeit und weniger Wärmeentwicklung.

Beispielsweise führte Safari für iOS und iPadOS WebRTC mit AVC als einzigem unterstütztem Videocodec ein. AVC hat den Vorteil, dass es auf iOS und iPadOS in Hardware kodiert und dekodiert werden kann. Safari 12.1 führte innerhalb von IRC Unterstützung für VP8 ein, was die Interoperabilität verbessert, jedoch auf Kosten – VP8 hat auf iOS-Geräten keine Hardware-Unterstützung, daher verursacht seine Verwendung eine erhöhte Prozessorbelastung und verringerte Akkulaufzeit.

#### Leistung

Glücklicherweise sind VP8 und AVC aus Endbenutzersicht ähnlich leistungsfähig und für den Einsatz in Videokonferenzen und anderen WebRTC-Lösungen gleich gut geeignet. Die endgültige Entscheidung liegt bei Ihnen. Welchen auch immer Sie wählen, stellen Sie sicher, dass Sie die in diesem Artikel bereitgestellten Informationen zu eventuell erforderlichen Konfigurationsproblemen beachten, mit denen Sie für diesen Codec konfrontiert sein könnten.

Beachten Sie, dass die Auswahl eines Codecs, der nicht auf der Liste der Pflichtcodecs steht, wahrscheinlich das Risiko birgt, einen Codec auszuwählen, der von einem Browser, den Ihre Benutzer bevorzugen könnten, nicht unterstützt wird. Sehen Sie sich den Artikel [Probleme mit der Medienunterstützung in Webinhalten behandeln](/de/docs/Web/Media/Guides/Formats/Support_issues) an, um zu erfahren, wie Sie Unterstützung für Ihre bevorzugten Codecs anbieten können, während Sie dennoch auf Browser zurückgreifen können, die diesen Codec nicht implementieren.

## Sicherheitsimplikationen

Es gibt interessante potenzielle Sicherheitsprobleme, die bei der Auswahl und Konfiguration von Codecs auftreten können. WebRTC-Video ist durch Datagram Transport Layer Security ({{Glossary("DTLS", "DTLS")}}) geschützt, aber es ist theoretisch möglich, dass eine motivierte Partei die Menge an Veränderung, die von Frame zu Frame auftritt, von variablen Bitraten (VBR) Codecs ableiten kann, indem sie die Bitrate des Streams und wie sie sich über die Zeit verändert, überwacht. Dies könnte potenziell einem Angreifer ermöglichen, etwas über den Inhalt des Streams abzuleiten, angesichts der Auf- und Abbewegungen der Bitrate.

Weitere Informationen zu Sicherheitsüberlegungen beim Einsatz von AVC in WebRTC finden Sie in {{RFC(6184, "RTP Payload Format for H.264 Video: Security Considerations", 9)}}.

## Medienformate für RTP-Nutzlast

Es kann nützlich sein, auf die {{Glossary("IANA", "IANA")}}-Liste der {{Glossary("RTP", "RTP")}}-Nutzlastformats-Medientypen zu verweisen; dies ist eine vollständige Liste der MIME-Medientypen, die für die _potenzielle_ Verwendung in RTP-Streams, wie sie in WebRTC verwendet werden, definiert sind. Die meisten davon werden in WebRTC-Kontexten nicht verwendet, aber die Liste kann dennoch nützlich sein.

Siehe auch {{RFC(4855)}}, das die Registrierung von Medientypen behandelt.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Leitfaden für Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Leitfaden für Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Digitale Videokonzepte](/de/docs/Web/Media/Guides/Formats/Video_concepts)
- [Digitale Audiokonzepte](/de/docs/Web/Media/Guides/Formats/Audio_concepts)
