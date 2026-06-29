---
title: Von WebRTC verwendete Codecs
slug: Web/Media/Guides/Formats/WebRTC_codecs
l10n:
  sourceCommit: 37e31c37661c11fea2426ef583b7d5dd0be5d349
---

Die [WebRTC-API](/de/docs/Web/API/WebRTC_API) ermöglicht es, Websites und Apps zu erstellen, die es Benutzern ermöglichen, in Echtzeit zu kommunizieren, unter Verwendung von Audio und/oder Video sowie optionalen Daten und anderen Informationen. Um zu kommunizieren, müssen die beiden Geräte einen Codec für jede Spur verhandeln, den beide verstehen, damit sie erfolgreich kommunizieren und die geteilten Medien präsentieren können. Dieser Leitfaden überprüft die Codecs, die Browser implementieren müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

## Medien ohne Container

WebRTC verwendet nackte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte für jede Spur, die von einem Peer zum anderen geteilt wird, ohne einen Container oder sogar einen [`MediaStream`](/de/docs/Web/API/MediaStream), der mit den Spuren verbunden ist. Welche Codecs innerhalb dieser Spuren sein können, wird nicht durch die WebRTC-Spezifikation vorgeschrieben. Jedoch spezifiziert {{RFC(7742)}}, dass alle WebRTC-kompatiblen Browser [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) und [H.264](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) im Constrained-Baseline-Profil für Video unterstützen müssen, und {{RFC(7874)}} spezifiziert, dass Browser mindestens den [Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)-Codec sowie G.711s PCMA- und PCMU-Formate unterstützen müssen.

Diese beiden RFCs legen auch Optionen fest, die für jeden Codec unterstützt werden müssen, sowie spezifische Benutzerkomfortfunktionen wie Echo-Unterdrückung. Dieser Leitfaden überprüft die Codecs, die Browser implementieren müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

Während Komprimierung immer eine Notwendigkeit im Umgang mit Medien im Web ist, ist sie von zusätzlicher Bedeutung bei Videokonferenzen, um sicherzustellen, dass die Teilnehmer ohne Verzögerungen oder Unterbrechungen kommunizieren können. Von sekundärer Bedeutung ist die Notwendigkeit, Video und Audio zu synchronisieren, so dass Bewegungen und alle ergänzenden Informationen (z. B. Folien oder eine Projektion) gleichzeitig mit dem entsprechenden Audio präsentiert werden.

## Allgemeine Anforderungen an Codecs

Bevor wir uns die codec-spezifischen Fähigkeiten und Anforderungen ansehen, gibt es ein paar allgemeine Anforderungen, die von _jedem_ Codec-Konfiguration erfüllt werden müssen, die mit WebRTC verwendet wird.

Es sei denn, das {{Glossary("SDP", "SDP")}} signalisiert ausdrücklich etwas anderes, muss der Webbrowser, der einen WebRTC-Videostream empfängt, in der Lage sein, Video mit mindestens 20 FPS bei einer Mindestauflösung von 320 Pixeln Breite und 240 Pixeln Höhe zu verarbeiten. Es wird empfohlen, dass das Video mit einer Bildrate und Größe nicht unter diesem Wert kodiert wird, da dies im Wesentlichen die Untergrenze dessen ist, was WebRTC in der Regel verarbeiten soll.

SDP bietet eine codec-unabhängige Möglichkeit, bevorzugte Videoauflösungen zu spezifizieren ({{RFC(6236)}}. Dies geschieht, indem ein `a=image-attr` SDP-Attribut gesendet wird, um die maximal akzeptable Auflösung anzuzeigen. Der Sender ist jedoch nicht verpflichtet, diesen Mechanismus zu unterstützen, daher müssen Sie darauf vorbereitet sein, Medien in einer anderen Auflösung zu empfangen, als Sie angefordert haben. Über diese maximale Auflösungsanfrage hinaus können spezifische Codecs weitere Möglichkeiten bieten, spezifische Medienkonfigurationen anzufordern.

## Unterstützte Videocodecs

WebRTC etabliert einen grundlegenden Satz von Codecs, die alle konformen Browser unterstützen müssen. Einige Browser können auch andere Codecs zulassen.

Im Folgenden sind die Videocodecs aufgelistet, die in jedem voll WebRTC-konformen Browser _erforderlich_ sind, sowie die Profile, die erforderlich sind, und die Browser, die diese Anforderung tatsächlich erfüllen.

<table class="standard-table">
  <caption>
    Obligatorische Videocodecs
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
            <li>Firefox 137+ unterstützt die <a href="/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension">DD RTP Header-Erweiterung</a> mit H.264 auf dem Desktop.
            Firefox auf Android unterstützt die DD-Header-Erweiterung nicht (<a href="https://bugzil.la/1947116">Firefox-Bug 1947116</a>).</li>
            <li>Firefox 136+ unterstützt H.264 für Simulcast.</li>
            <li>Firefox für Android 73+ wird hardwareunterstützt.</li>
            <li>Firefox für Android-Versionen 68 bis 72 unterstützen H.264 nicht (aufgrund einer Änderung der <a href="https://support.mozilla.org/en-US/kb/firefox-android-openh264">Anforderungen des Google Play Stores</a>, die verhindern, dass Firefox den OpenH264-Codec herunterlädt und installiert, der benötigt wird, um H.264 in WebRTC-Verbindungen zu verarbeiten).</li>
          </ul>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Für Details zu WebRTC-bezogenen Überlegungen für jeden Codec sehen Sie sich die folgenden Unterabschnitte an, indem Sie den Links auf die Namen der einzelnen Codecs folgen.

Vollständige Details zu den Video-Codecs und Konfigurationen, die WebRTC unterstützen muss, finden Sie in {{RFC(7742, "WebRTC Video Processing and Codec Requirements")}}. Es ist erwähnenswert, dass das RFC eine Vielzahl von videobezogenen Anforderungen abdeckt, einschließlich Farbräume (sRGB ist der bevorzugte, aber nicht erforderliche Standardfarbraum), Empfehlungen für Webcam-Verarbeitungsfunktionen (automatischer Fokus, automatischer Weißabgleich, automatische Lichtniveauanpassung) und so weiter.

> [!NOTE]
> Diese Anforderungen gelten für Webbrowser und andere vollständig WebRTC-konforme Produkte. Nicht-WebRTC-Produkte, die in gewissem Umfang mit WebRTC kommunizieren können, unterstützen diese Codecs möglicherweise oder möglicherweise nicht, obwohl sie dazu aufgefordert werden.

Zusätzlich zu den obligatorischen Codecs unterstützen einige Browser auch zusätzliche Codecs. Diese sind in der folgenden Tabelle aufgeführt.

<table class="standard-table">
  <caption>
    Andere Videocodecs
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
  </tbody>
</table>

### VP8

VP8, das wir [allgemein beschreiben](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) im Haupt-[Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs), hat einige spezielle Anforderungen, die befolgt werden müssen, wenn es verwendet wird, um ein Videotrack auf einer WebRTC-Verbindung zu kodieren oder zu dekodieren.

Sofern nicht anders signalisiert, wird VP8 quadratische Pixel verwenden (d.h. Pixel mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 1:1).

#### Andere Hinweise

Das Netzwerk-Payload-Format für die gemeinsame Nutzung von VP8 mit {{Glossary("RTP", "RTP")}} (wie bei der Verwendung von WebRTC) wird in {{RFC(7741, "RTP Payload Format for VP8 Video")}} beschrieben.

### AVC / H.264

Die Unterstützung für das Constrained Baseline (CB) Profil von AVC ist in allen vollständig-konformen WebRTC-Implementierungen erforderlich. CB ist ein Unterset des Hauptprofils und ist speziell für Anwendungen mit geringer Komplexität und geringen Verzögerungen ausgelegt, wie z.B. mobile Videos und Videokonferenzen, sowie für Plattformen mit geringeren Videobearbeitungsfähigkeiten.

Eine Übersicht über [AVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) und seine Eigenschaften finden Sie im Hauptleitfaden zu Videocodecs.

#### Besondere Unterstützungsvorgaben für Parameter

AVC bietet eine breite Palette von Parametern zur Steuerung optionaler Werte. Um die Zuverlässigkeit des WebRTC-Medienaustauschs über mehrere Plattformen und Browser hinweg zu verbessern, ist es erforderlich, dass WebRTC-Endpunkte, die AVC unterstützen, bestimmte Parameter auf spezielle Weise behandeln. Manchmal bedeutet dies, dass ein Parameter unterstützt oder nicht unterstützt werden muss. Manchmal bedeutet es, einen spezifischen Wert für einen Parameter zu fordern oder eine spezifische Menge von Werten zuzulassen. Und manchmal sind die Anforderungen komplexer.

##### Nützliche, aber nicht erforderliche Parameter

Diese Parameter müssen nicht vom WebRTC-Endpunkt unterstützt werden, und ihre Verwendung ist ebenfalls nicht erforderlich. Ihre Verwendung kann das Benutzererlebnis auf verschiedene Weisen verbessern, muss jedoch nicht verwendet werden. Tatsächlich sind einige davon ziemlich kompliziert in der Anwendung.

- `max-br`
  - : Wenn spezifiziert und vom Software unterstützt, gibt der Parameter `max-br` die maximale Videobitrate in Einheiten von 1.000 bps für VCL und 1.200 bps für NAL an. Details dazu finden Sie auf [Seite 47 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-47).
- `max-cpb`
  - : Wenn spezifiziert und vom Software unterstützt, gibt `max-cpb` die maximale Größe des codierten Bildpuffers an. Dies ist ein ziemlich komplizierter Parameter, dessen Einheitengröße variieren kann. Siehe [Seite 45 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-45) für Details.
- `max-dpb`
  - : Wenn spezifiziert und unterstützt, gibt `max-dpb` die maximale Größe des dekodierten Bildpuffers an, angegeben in Einheiten von 8/3 Makroblöcken. Siehe [RFC 6184, Seite 46](https://datatracker.ietf.org/doc/html/rfc6184#page-46) für weitere Details.
- `max-fs`
  - : Wenn spezifiziert und vom Software unterstützt, gibt `max-fs` die maximale Größe eines einzelnen Videoframes an, angegeben als Anzahl der Makroblöcke.
- `max-mbps`
  - : Wenn spezifiziert und vom Software unterstützt, ist dieser Wert ein ganzzahliger Wert, der die maximale Verarbeitungsgeschwindigkeit für Makroblöcke pro Sekunde angibt (in Makroblöcken pro Sekunde).
- `max-smbps`
  - : Wenn spezifiziert und vom Software unterstützt, gibt dies einen ganzzahligen Wert an, der die maximale Verarbeitungsgeschwindigkeit für statische Makroblöcke in statischen Makroblöcken pro Sekunde angibt (unter der hypothetischen Annahme, dass alle Makroblöcke statische Makroblöcke sind).

##### Parameter mit spezifischen Anforderungen

Diese Parameter sind möglicherweise erforderlich oder nicht, haben jedoch einige spezielle Anforderungen, wenn sie verwendet werden.

- `packetization-mode`
  - : Alle Endpunkte müssen Modus 1 (nicht verschachtelter Modus) unterstützen. Die Unterstützung für andere Fragmentierungsmodi ist optional, und der Parameter selbst muss nicht spezifiziert werden.
- `sprop-parameter-sets`
  - : Sequenz- und Bildinformationen für AVC können entweder im Band oder außer Band gesendet werden. Wenn AVC mit WebRTC verwendet wird, müssen diese Informationen im Band signalisiert werden; daher darf der Parameter `sprop-parameter-sets` nicht im SDP enthalten sein.

##### Parameter, die spezifiziert werden müssen

Diese Parameter müssen immer spezifiziert werden, wenn AVC in einer WebRTC-Verbindung verwendet wird.

- `profile-level-id`
  - : Alle WebRTC-Implementierungen sind verpflichtet, diesen Parameter in ihrem SDP zu spezifizieren und zu interpretieren, um das von den Codec verwendete Unterprofil zu identifizieren. Der spezifische Wert, der gesetzt wird, ist nicht definiert; wichtig ist, dass der Parameter überhaupt verwendet wird. Dies ist wichtig zu beachten, da in {{RFC(6184)}} ("RTP Payload Format for H.264 Video") `profile-level-id` vollständig optional ist.

#### Weitere Anforderungen

Um die Unterstützung des Wechsels zwischen Hoch- und Querformat zu ermöglichen, gibt es zwei Methoden, die verwendet werden können. Die erste ist die Video-Orientierungs (CVO)-Header-Erweiterung des RTP-Protokolls. Wenn dies jedoch nicht im SDP als unterstützt signalisiert wird, wird dringend empfohlen, dass Browser Display Orientation SEI-Nachrichten unterstützen, obwohl dies nicht erforderlich ist.

Sofern nicht anders signalisiert, beträgt das Pixel-Seitenverhältnis 1:1, was darauf hinweist, dass die Pixel quadratisch sind.

#### Andere Hinweise

Das Datenlastformat für AVC in WebRTC wird in {{RFC(6184, "RTP Payload Format for H.264 Video")}} beschrieben. AVC-Implementierungen für WebRTC sind verpflichtet, spezielle SEI-Nachrichten für "Fülllostskörper" und "vollständige Frame-Freezes" zu unterstützen; diese werden verwendet, um zwischen mehreren Eingabeströmen nahtlos zu wechseln.

### AV1

AV1 wird [allgemein beschrieben](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) im Haupt-[Leitfaden zu Videocodecs, die auf dem Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs).

#### Dependency Descriptor RTP Header-Erweiterung

WebRTC unterstützt zwei Haupttechnologien, um Video effizient zu senden, sodass es von Empfängern mit unterschiedlichen Fähigkeiten und Netzwerkbedingungen konsumiert werden kann.

AV1 verwendet die [Dependency Descriptor (DD) RTP Header-Erweiterung](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension), um die Frame-Abhängigkeitsinformationen bereitzustellen, die erforderlich sind, um [Mehrparteien-Konferenzanwendungsfälle](/de/docs/Web/API/WebRTC_API/Protocols#multi-party_video_conferencing) zu unterstützen.

## Unterstützte Audio-Codecs

Die von {{RFC(7874)}} vorgeschriebenen Audio-Codecs, die alle WebRTC-kompatiblen Browser unterstützen müssen, sind in der folgenden Tabelle gezeigt.

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

Siehe unten für weitere Details zu spezifischen WebRTC-Überlegungen für jeden der oben aufgeführten Codecs.

Es ist nützlich zu beachten, dass {{RFC(7874)}} mehr als eine Liste von Audio-Codecs definiert, die ein WebRTC-konformer Browser unterstützen muss; es liefert auch Empfehlungen und Anforderungen für spezielle Audio-Funktionen wie Echo-Unterdrückung, Rauschunterdrückung und Audio-Lautstärkeanpassung.

> [!NOTE]
> Die obige Liste gibt den minimal erforderlichen Satz von Codecs an, die alle WebRTC-kompatiblen Endpunkte implementieren müssen. Ein bestimmter Browser kann auch andere Codecs unterstützen; die plattform- und geräteübergreifende Kompatibilität kann jedoch gefährdet sein, wenn Sie andere Codecs verwenden, ohne sicherzustellen, dass Unterstützung in allen Browsern vorhanden ist, die Ihre Benutzer möglicherweise bevorzugen.

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

**[Internet Low Bitrate Codec](https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec)** (**iLBC**) ist ein Open-Source-Schmalband-Codec, der von Global IP Solutions und jetzt von Google entwickelt wurde, und speziell für das Streaming von Sprach-Audio entwickelt wurde. Google und einige andere Browserentwickler haben es für WebRTC übernommen.

Der **[Internet Speech Audio Codec](https://en.wikipedia.org/wiki/Internet_Speech_Audio_Codec)** (**iSAC**) ist ein weiterer Codec, der von Global IP Solutions entwickelt wurde und jetzt Google gehört, das ihn als Open-Source zur Verfügung gestellt hat. Er wird von Google Talk, QQ und anderen Instant-Messaging-Clients verwendet und wurde speziell für Sprachübertragungen entwickelt, die in einem RTP-Stream verkapselt sind.

**[Komfortgeräusch](https://en.wikipedia.org/wiki/Comfort_noise)** (**CN**) ist eine Form von künstlichem Hintergrundgeräusch, das verwendet wird, um Lücken in einer Übertragung zu füllen, anstatt reine Stille zu verwenden. Dies hilft, einen erschütternden Effekt zu vermeiden, der auftreten kann, wenn Sprachaktivierung und ähnliche Funktionen einen Stream dazu veranlassen, vorübergehend keine Daten mehr zu senden – eine Fähigkeit, die als Diskontinuierliche Übertragung (DTX) bekannt ist. In {{RFC(3389)}} wird eine Methode zur Bereitstellung eines geeigneten Füllers während der Stille beschrieben.

Komfortgeräusch wird mit G.711 verwendet und kann möglicherweise mit anderen Codecs verwendet werden, die keine eingebaute CN-Funktion haben. Opus, zum Beispiel, hat seine eigene CN-Fähigkeit; daher wird die Verwendung von RFC 3389 CN mit dem Opus-Codec nicht empfohlen.

Ein Audiosender ist nie verpflichtet, diskontinuierliche Übertragung oder Komfortgeräusch zu verwenden.

### Opus

Das Opus-Format, definiert durch {{RFC(6716)}} ist das primäre Format für Audio in WebRTC. Das RTP-Payload-Format für Opus findet sich in {{RFC(7587)}}. Weitere allgemeine Informationen zu Opus und seinen Fähigkeiten, sowie wie andere APIs Opus unterstützen können, finden Sie im [entsprechenden Abschnitt](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus) unseres [Leitfadens zu Audiocodecs, die auf dem Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Sowohl die Sprach- als auch die allgemeinen Audiomodi sollten unterstützt werden. Die Skalierbarkeit und Flexibilität von Opus sind nützlich, wenn es um Audio geht, das unterschiedliche Komplexitätsgrade aufweisen kann. Seine Unterstützung von eingebetteten Stereo-Signalen ermöglicht die Unterstützung von Stereo, ohne den Demultiplexing-Prozess zu verkomplizieren.

Der gesamte Bereich der von Opus unterstützten Bitraten (6 kbps bis 510 kbps) wird in WebRTC unterstützt, wobei die Bitrate dynamisch geändert werden darf. Höhere Bitraten verbessern in der Regel die Qualität.

#### Bitratemempfehlungen

Bei einer Frame-Größe von 20 Millisekunden zeigt die folgende Tabelle die empfohlenen Bitraten für verschiedene Medienformen.

| Medientyp                         | Empfohlener Bitratenbereich |
| --------------------------------- | --------------------------- |
| Schmalband-Sprache (NB)           | 8 bis 12 kbps               |
| Breitband-Sprache (WB)            | 16 bis 20 kbps              |
| Vollband-Sprache (FB)             | 28 bis 40 kbps              |
| Vollband mono Musik (FB mono)     | 48 bis 64 kbps              |
| Vollband Stereo Musik (FB stereo) | 64 bis 128 kbps             |

Die Bitrate kann jederzeit angepasst werden. Um Netzwerkkonflikte zu vermeiden, sollte die durchschnittliche Audio-Bitrate die verfügbare Netzwerkbandbreite nicht überschreiten (abzüglich aller anderen bekannten oder erwarteten zusätzlichen Bandbreitenanforderungen).

### G.711

G.711 definiert das Format für **Puls-Code-Modulation** (**PCM**) Audio als eine Serie von 8-Bit-Integer-Samples, die mit einer Abtastrate von 8.000 Hz aufgenommen werden, was zu einer Bitrate von 64 kbps führt. Sowohl [µ-law](https://en.wikipedia.org/wiki/M-law) als auch [A-law](https://en.wikipedia.org/wiki/A-law) Codierungen sind erlaubt.

G.711 ist [von der ITU definiert](https://www.itu.int/rec/T-REC-G.711-198811-I/en) und sein Nutzlastformat wird in {{RFC(3551, "", "4.5.14")}} definiert.

WebRTC fordert, dass G.711 8-Bit-Samples mit der standardmäßigen 64 kbps-Rate verwendet, obwohl G.711 einige andere Varianten unterstützt. Weder G.711.0 (verlustfreie Komprimierung), G.711.1 (Breitbandfähigkeit) noch irgendwelche anderen Erweiterungen des G.711-Standards sind von WebRTC vorgeschrieben.

Aufgrund seiner niedrigen Abtastrate und Abtastgröße wird die Audioqualität von G.711 nach modernen Maßstäben in der Regel als schlecht angesehen, obwohl sie etwa dem entspricht, was ein Festnetztelefon klingt. Es wird in der Regel als kleinster gemeinsamer Nenner verwendet, um sicherzustellen, dass Browser eine Audioverbindung unabhängig von Plattformen und Browsern herstellen können, oder allgemein als Fallback-Option.

## Spezifizieren und Konfigurieren von Codecs

### Abrufen der unterstützten Codecs

Da ein bestimmter Browser und eine Plattform möglicherweise unterschiedliche Verfügbarkeiten unter den potenziellen Codecs haben - und möglicherweise mehrere Profile oder Ebenen für einen bestimmten Codec unterstützt werden -, ist der erste Schritt bei der Konfiguration von Codecs für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), die Liste der verfügbaren Codecs zu erhalten. Um dies zu tun, müssen Sie zuerst eine Verbindung herstellen, auf der Sie die Liste abrufen können.

Es gibt ein paar Möglichkeiten, dies zu tun. Der effizienteste Weg ist die Verwendung der statischen Methode [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) (oder des äquivalenten [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) für einen Empfänger), bei dem der Medientyp als Eingabeparameter angegeben wird. Um beispielsweise die unterstützten Codecs für Video zu bestimmen, können Sie dies tun:

```js
codecList = RTCRtpSender.getCapabilities("video").codecs;
```

Jetzt ist `codecList` ein Array von [`codec`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#codecs)-Objekten, von denen jedes eine Codec-Konfiguration beschreibt.
Auch in der Liste enthalten sind Einträge für [Retransmission](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#rtx_retransmission) (RTX), [redundante Kodierung](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#red_redundant_audio_data) (RED) und [Forward Error Correction](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#fec_forward_error_correction) (FEC).

Wenn die Verbindung im Begriff ist, gestartet zu werden, können Sie das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignis verwenden, um das Ende des {{Glossary("ICE", "ICE")}}-Kandidaten-Sammelns zu beobachten, und dann die Liste abrufen.

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

Der Ereignishandler für `icegatheringstatechange` wird eingerichtet; in ihm schauen wir, ob der ICE-Sammelstatus `complete` ist, was bedeutet, dass keine weiteren Kandidaten gesammelt werden. Die Methode [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) wird aufgerufen, um eine Liste aller [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte zu erhalten, die von der Verbindung verwendet werden.

Mit dieser Liste in der Hand gehen wir durch die Liste der Sender und suchen nach dem ersten, dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) anzeigt, dass seine [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, was darauf hindeutet, dass die Daten der Spur Videomedien sind.
Wir rufen dann die Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) dieses Senders auf und setzen `codecList` auf die `codecs`-Eigenschaft im zurückgegebenen Objekt und kehren dann zum Aufrufer zurück.

Wenn keine Videospur gefunden wird, setzen wir `codecList` auf `null`.

Bei der Rückkehr ist `codecList` entweder `null`, um anzuzeigen, dass keine Videospuren gefunden wurden, oder es ist ein Array von [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekten, von denen jede eine zulässige Codec-Konfiguration beschreibt. Besonders wichtig in diesen Objekten: die [`payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType)-Eigenschaft, die einen ein Byte großen Wert enthält, der die beschriebene Konfiguration eindeutig identifiziert.

> [!NOTE]
> Die beiden Methoden zum Abrufen von Codec-Listen, die hier gezeigt werden, verwenden unterschiedliche Ausgabetypen in ihren Codec-Listen. Seien Sie sich dessen bewusst, wenn Sie die Ergebnisse verwenden.

### Anpassen der Codec-Liste

Sobald Sie eine Liste der verfügbaren Codecs haben, können Sie diese verändern und die überarbeitete Liste an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) senden, um die Reihenfolge der Präferenz der Codecs zu ändern, was Ihnen ermöglicht, WebRTC mitzuteilen, einen anderen Codec als alle anderen zu bevorzugen.

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

In diesem Beispiel nimmt die Funktion `changeVideoCodec()` als Eingabe den MIME-Typ des Codec, den Sie verwenden möchten. Der Code beginnt mit dem Abrufen einer Liste aller Transceiver von der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Dann holen wir für jeden Transceiver die Art der Medien, die durch den Transceiver repräsentiert wird, von der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Spur's [`kind`](/de/docs/Web/API/MediaStreamTrack/kind). Wir holen auch die Listen aller von dem Browser für das Senden und Empfangen von Video unterstützten Codecs, indem wir die `getCapabilities()` statische Methode sowohl von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) aufrufen.

Wenn die Medien Video sind, rufen wir eine Methode namens `preferCodec()` für beide, die Liste der Sendecodecs und die Liste der Empfangs codecs auf; diese Methode ordnet die Codec-Liste auf die gewünschte Weise neu (siehe unten).

Schließlich rufen wir die Methode [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)'s [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) auf, um anzugeben, dass die angegebenen Sende- und Empfangs-Codecs erlaubt sind, in der neu geordneten Reihenfolge.

Das wird für jeden Transceiver in der `RTCPeerConnection` gemacht; sobald alle Transceiver aktualisiert wurden, rufen wir den [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignishandler auf, welcher ein neues Angebot erstellt, die lokale Beschreibung aktualisiert, das Angebot an den entfernten Peer sendet und so weiter, wodurch die Neuverhandlung der Verbindung angestoßen wird.

Die `preferCodec()`-Funktion, die von dem oben genannten Code aufgerufen wird, sieht so aus, um einen angegebenen Codec an die Spitze der Liste zu verschieben (um während der Verhandlung priorisiert zu werden):

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

Dieser Code teilt einfach die Codec-Liste in zwei Arrays auf: eines enthält Codecs, deren MIME-Typ mit dem durch den `mimeType`-Parameter angegebenen Typ übereinstimmt, und das andere mit allen anderen Codecs. Sobald die Liste aufgeteilt wurde, werden sie wieder zusammengefügt, wobei die Einträge, die mit dem angegebenen `mimeType` übereinstimmen, zuerst erscheinen, gefolgt von allen anderen Codecs. Die neu angeordnete Liste wird dann an den Aufrufer zurückgegeben.

## Standard-Codecs

Sofern nicht anders angegeben, sind die Standard- oder genauer gesagt bevorzugte Codecs, die von den Implementierungen von WebRTC in jedem Browser angefordert werden, in der folgenden Tabelle aufgeführt.

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

## Die richtige Codec-Auswahl

Bevor Sie einen Codec auswählen, der nicht zu den obligatorischen Codecs gehört (VP8 oder AVC für Video und Opus oder PCM für Audio), sollten Sie ernsthaft die potenziellen Nachteile in Betracht ziehen: Insbesondere kann nur davon ausgegangen werden, dass diese Codecs auf im Wesentlichen allen Geräten verfügbar sind, die WebRTC unterstützen.

Wenn Sie sich entscheiden, einen anderen Codec als die obligatorischen zu bevorzugen, sollten Sie zumindest einen Rückfall auf einen der obligatorischen Codecs zulassen, wenn die Unterstützung für den Codec, den Sie bevorzugen, nicht verfügbar ist.

### Audio

Im Allgemeinen sollten Sie, wenn es verfügbar ist und das Audio, das Sie senden möchten, eine Abtastrate von mehr als 8 kHz hat, ernsthaft in Betracht ziehen, Opus als Ihren primären Codec zu verwenden. Für ausschließlich sprachbasierte Verbindungen in einer eingeschränkten Umgebung kann die Verwendung von G.711 bei einer Abtastrate von 8 kHz ein akzeptables Erlebnis für ein Gespräch bieten, aber typischerweise werden Sie G.711 als Fallback-Option verwenden, da es andere Optionen gibt, die effizienter sind und besser klingen, wie etwa Opus in seinem Schmalbandmodus.

### Video

Es gibt eine Reihe von Faktoren, die bei der Entscheidung über die Unterstützung eines Video-Codecs (oder einer Gruppe von Codecs) ins Spiel kommen.

#### Lizenzbedingungen

Bevor Sie einen Videocodec auswählen, stellen Sie sicher, dass Ihnen alle Lizenzanforderungen des von Ihnen ausgewählten Codecs bekannt sind; Sie können Informationen über mögliche Lizenzprobleme in unserem Haupt-[Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs) finden. Von den beiden obligatorischen Codecs für Video - VP8 und AVC/H.264 - ist nur VP8 völlig frei von Lizenzanforderungen. Wenn Sie AVC auswählen, stellen Sie sicher, dass Sie sich der potenziellen Gebühren bewusst sind, die Sie zahlen müssen; das gesagt, haben die Patentinhaber im Allgemeinen gesagt, dass die meisten typischen Webentwickler sich keine Sorgen über die Zahlung von Lizenzgebühren machen sollten, die typischerweise mehr auf die Entwickler der Kodierungs- und Dekodierungssoftware fokussiert sind.

> [!WARNING]
> Die hier bereitgestellten Informationen stellen _keine_ Rechtsberatung dar! Stellen Sie sicher, dass Sie Ihre Haftung bestätigen, bevor Sie endgültige Entscheidungen treffen, bei denen die Möglichkeit von Lizenzproblemen besteht.

#### Leistungsbedarf und Batterielebensdauer

Ein weiterer Faktor, der insbesondere auf mobilen Plattformen berücksichtigt werden sollte, ist die Auswirkung eines Codecs auf die Batterielebensdauer. Wenn ein Codec auf einer bestimmten Plattform hardwareseitig behandelt wird, ermöglicht dieser Codec wahrscheinlich eine deutlich bessere Batterielebensdauer und eine geringere Wärmeproduktion.

Zum Beispiel führte Safari für iOS und iPadOS WebRTC mit AVC als einzig unterstütztem Videocodec ein. AVC hat den Vorteil, auf iOS und iPadOS hardwareseitig enkodiert und dekodiert werden zu können. Safari 12.1 führte die Unterstützung von VP8 innerhalb von IRC ein, was die Interoperabilität verbessert, aber mit Kosten verbunden ist - VP8 hat auf iOS-Geräten keine Hardwareunterstützung, daher verursacht seine Verwendung einen erhöhten Prozessoraufwand und eine reduzierte Batterielebensdauer.

#### Leistung

Glücklicherweise sind VP8 und AVC aus der Sicht des Endverbrauchers ähnlich leistungsfähig und sind gleichermaßen für die Verwendung in Videokonferenzen und anderen WebRTC-Lösungen geeignet. Die endgültige Entscheidung liegt bei Ihnen. Welche Sie auch wählen, lesen Sie die in diesem Artikel bereitgestellten Informationen über ggf spezielle Konfigurationsprobleme, mit denen Sie bei diesem Codec auseinandersetzen müssen.

Beachten Sie, dass die Auswahl eines Codecs, der nicht auf der Pflichtcodec-Liste steht, wahrscheinlich das Risiko birgt, einen Codec auszuwählen, der von einem Browser, den Ihre Benutzer möglicherweise bevorzugen, nicht unterstützt wird. Sehen Sie sich den Artikel [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues) an, um mehr darüber zu erfahren, wie Sie die Unterstützung für Ihre bevorzugten Codecs anbieten können, während sie trotzdem auf Browser zurückgreifen können, die diesen Codec nicht implementieren.

## Sicherheitsimplikationen

Bei der Auswahl und Konfiguration von Codecs treten interessante potenzielle Sicherheitsprobleme auf. WebRTC-Video wird durch Datagram Transport Layer Security ({{Glossary("DTLS", "DTLS")}}) geschützt, aber es ist theoretisch möglich, dass eine motivierte Partei die Menge der Änderungen, die von Frame zu Frame bei der Verwendung von variabler Bitrate (VBR) Codecs auftreten, ableiten kann, indem sie den Bitraten-Stream und dessen Veränderung im Laufe der Zeit überwacht. Dies könnte potentiell einem böswilligen Akteur ermöglichen, etwas über den Inhalt des Streams abzuleiten, angesichts des Auf und Abs der Bitrate.

Für mehr über sicherheitsbedingte Überlegungen bei der Verwendung von AVC in WebRTC, siehe {{RFC(6184, "RTP Payload Format for H.264 Video: Security Considerations", 9)}}.

## RTP Payload-Format Medientypen

Es könnte nützlich sein, auf die {{Glossary("IANA", "IANA")}}-Liste von {{Glossary("RTP", "RTP")}} Nutzlast-Format Medientypen zu verweisen; dies ist eine vollständige Liste der MIME-Medientypen, die für den _möglichen_ Gebrauch in RTP-Streams definiert sind, wie sie in WebRTC verwendet werden. Die meisten davon werden nicht in WebRTC-Kontexten verwendet, aber die Liste könnte dennoch nützlich sein.

Siehe auch {{RFC(4855)}}, der sich mit der Registrierung von Medientypen befasst.

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Leitfaden zu den im Web verwendeten Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Leitfaden zu den im Web verwendeten Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Konzepte für digitales Video](/de/docs/Web/Media/Guides/Formats/Video_concepts)
- [Konzepte für digitales Audio](/de/docs/Web/Media/Guides/Formats/Audio_concepts)
