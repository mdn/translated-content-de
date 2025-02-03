---
title: Codecs, die von WebRTC verwendet werden
slug: Web/Media/Guides/Formats/WebRTC_codecs
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Die [WebRTC API](/de/docs/Web/API/WebRTC_API) ermöglicht es, Websites und Apps zu erstellen, die es Benutzern ermöglichen, in Echtzeit zu kommunizieren, wobei Audio und/oder Video sowie optionale Daten und andere Informationen genutzt werden. Um zu kommunizieren, müssen sich die beiden Geräte auf einen gemeinsam verstandenen Codec für jeden Track einigen, damit sie erfolgreich kommunizieren und die geteilten Medien präsentieren können. Dieser Leitfaden überprüft die Codecs, die Browser implementieren müssen, sowie andere Codecs, die von einigen oder allen Browsern für WebRTC unterstützt werden.

## Medien ohne Container

WebRTC verwendet nackte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte für jeden Track, der von einem Peer zum anderen übertragen wird, ohne einen Container oder auch nur einem [`MediaStream`](/de/docs/Web/API/MediaStream), der mit den Tracks verbunden ist. Welche Codecs in diesen Tracks enthalten sein können, ist nicht durch die WebRTC-Spezifikation vorgeschrieben. Allerdings spezifiziert {{RFC(7742)}}, dass alle WebRTC-kompatiblen Browser [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) und [H.264](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264)'s Constrained Baseline Profile für Video unterstützen müssen, und {{RFC(7874)}} spezifiziert, dass Browser mindestens den [Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus) Codec sowie die PCMA- und PCMU-Formate von [G.711](/de/docs/Web/Media/Guides/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies) unterstützen müssen.

Diese beiden RFCs legen auch Optionen fest, die für jeden Codec unterstützt werden müssen, sowie spezifische Benutzerkomfortmerkmale wie Echounterdrückung. Dieser Leitfaden überprüft die Codecs, die Browser implementieren müssen, sowie andere Codecs, die von einigen oder allen Browsern für WebRTC unterstützt werden.

Während die Kompression beim Umgang mit Medien im Web immer erforderlich ist, ist sie bei Videokonferenzen von besonderer Bedeutung, um sicherzustellen, dass die Teilnehmer ohne Verzögerungen oder Unterbrechungen kommunizieren können. Von untergeordneter Bedeutung ist die Notwendigkeit, Video und Audio zu synchronisieren, damit Bewegungen und alle zusätzlichen Informationen (wie Folien oder eine Projektion) gleichzeitig mit dem entsprechenden Audio präsentiert werden.

## Allgemeine Codec-Anforderungen

Bevor wir uns die spezifischen Fähigkeiten und Anforderungen der Codecs ansehen, gibt es einige allgemeine Anforderungen, die von _jeder_ Codec-Konfiguration erfüllt werden müssen, die mit WebRTC verwendet wird.

Sofern das {{Glossary("SDP", "SDP")}} nicht ausdrücklich etwas anderes signalisiert, muss der Webbrowser, der einen WebRTC-Videostream empfängt, in der Lage sein, Videos mit mindestens 20 FPS bei einer Mindestauflösung von 320 Pixel in der Breite und 240 Pixel in der Höhe zu verarbeiten. Es wird empfohlen, dass Video mit einer Bildrate und Größe kodiert wird, die nicht niedriger ist, da dies im Wesentlichen die Untergrenze dessen darstellt, was WebRTC im Allgemeinen zu bewältigen erwartet wird.

SDP unterstützt eine codec-unabhängige Möglichkeit, bevorzugte Videoauflösungen anzugeben ({{RFC(6236)}}). Dies wird durch das Senden eines `a=image-attr` SDP-Attributs getan, um die maximale akzeptable Auflösung anzugeben. Der Sender ist nicht verpflichtet, diesen Mechanismus zu unterstützen, daher müssen Sie darauf vorbereitet sein, Medien in einer anderen als der angeforderten Auflösung zu empfangen. Über diese einfache maximale Auflösungsanforderung hinaus können spezifische Codecs weitere Möglichkeiten bieten, um bestimmte Medienkonfigurationen anzufordern.

## Unterstützte Videocodecs

WebRTC etabliert eine Basislinie von Codecs, die alle konformen Browser unterstützen müssen. Einige Browser können auch andere Codecs zulassen.

Nachfolgend sind die Videocodecs aufgeführt, die in jedem vollständig WebRTC-kompatiblen Browser _erforderlich_ sind, sowie die Profile, die erforderlich sind, und die Browser, die diese Anforderung tatsächlich erfüllen.

<table class="standard-table">
  <caption>
    Verbindliche Videocodecs
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
      <th scope="row"><a href="#vp8">VP8</a></th>
      <td>—</td>
      <td>Chrome, Edge, Firefox, Safari (12.1+)</td>
    </tr>
    <tr>
      <th scope="row"><a href="#avc_h.264">AVC / H.264</a></th>
      <td>Constrained Baseline (CB)</td>
      <td>
        <p>Chrome (52+), Edge, Firefox, Safari</p>
        <p>
          Firefox für Android 68 und später unterstützen AVC (H.264) nicht mehr.
          Dies liegt an einer Änderung der Anforderungen des Google Play Store, die
          verhindern, dass Firefox den OpenH264-Codec herunterlädt und installiert,
          der zum Umgang mit H.264 in WebRTC-Verbindungen benötigt wird. Details finden
          Sie in
          <a
            href="https://support.mozilla.org/en-US/kb/firefox-android-openh264"
            >diesem Artikel auf SUMO</a
          >.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Details zu WebRTC-bezogenen Überlegungen für jeden Codec finden Sie in den Unterabschnitten unten, indem Sie die Links zu den Namen der jeweiligen Codecs folgen.

Vollständige Details zu den Video-Codecs und Konfigurationen, die WebRTC unterstützen muss, finden Sie in {{RFC(7742, "WebRTC Video Processing and Codec Requirements")}}. Es ist erwähnenswert, dass das RFC eine Vielzahl von video-bezogenen Anforderungen abdeckt, einschließlich Farbräume (sRGB ist der bevorzugte, aber nicht erforderliche Standardfarbraum), Empfehlungen für Webcam-Verarbeitungsfunktionen (automatischer Fokus, automatische Weißabgleich, automatische Lichtpegel) und so weiter.

> [!NOTE]
> Diese Anforderungen gelten für Webbrowser und andere vollständig WebRTC-konforme Produkte. Nicht-WebRTC-Produkte, die in gewissem Umfang mit WebRTC kommunizieren können, unterstützen diese Codecs möglicherweise oder möglicherweise nicht, obwohl sie in den Spezifikationsdokumenten dazu ermutigt werden.

Zusätzlich zu den verbindlichen Codecs unterstützen einige Browser auch zusätzliche Codecs. Diese sind in der folgenden Tabelle aufgeführt.

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
      <th scope="row">VP9</th>
      <td>—</td>
      <td>Chrome (48+), Firefox</td>
    </tr>
  </tbody>
</table>

### VP8

VP8, das wir [allgemein beschreiben](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) im Haupt-[Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs), hat einige spezifische Anforderungen, die befolgt werden müssen, wenn es verwendet wird, um einen Videostream in einer WebRTC-Verbindung zu kodieren oder zu dekodieren.

Sofern nicht anders signalisiert, wird VP8 quadratische Pixel verwenden (d.h. Pixel mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 1:1).

#### Weitere Hinweise

Das Netzwerk-Payload-Format für das Teilen von VP8 mithilfe von {{Glossary("RTP", "RTP")}} (z.B. bei der Verwendung von WebRTC) wird in {{RFC(7741, "RTP Payload Format for VP8 Video")}} beschrieben.

### AVC / H.264

Unterstützung für AVC's Constrained Baseline (CB) Profile ist in allen vollständig konformen WebRTC-Implementierungen erforderlich. CB ist ein Unterprofil des Hauptprofils und ist speziell für Anwendungen mit niedriger Komplexität und niedriger Latenz ausgelegt, wie mobile Video- und Videokonferenzen, sowie für Plattformen mit weniger leistungsfähigen Videoverarbeitungsfähigkeiten.

Unser [Überblick über AVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) und seine Funktionen finden Sie im Hauptleitfaden zu Videocodecs.

#### Anforderungen an die Sonderparameterunterstützung

AVC bietet eine Vielzahl von Parametern zur Steuerung optionaler Werte. Um die Zuverlässigkeit der WebRTC-Medienfreigabe über mehrere Plattformen und Browser hinweg zu verbessern, müssen WebRTC-Endpunkte, die AVC unterstützen, bestimmte Parameter auf spezifische Weise handhaben. Manchmal bedeutet das, dass ein Parameter unterstützt oder nicht unterstützt werden muss. Manchmal bedeutet es, einen bestimmten Wert für einen Parameter zu verlangen oder zuzulassen, dass ein bestimmter Satz von Werten erlaubt ist. Und manchmal sind die Anforderungen komplexer.

##### Parameter, die nützlich, aber nicht erforderlich sind

Diese Parameter müssen nicht vom WebRTC-Endpunkt unterstützt werden, und deren Verwendung ist auch nicht erforderlich. Ihre Verwendung kann das Benutzererlebnis auf verschiedene Weise verbessern, muss aber nicht verwendet werden. Tatsächlich sind einige dieser Parameter recht kompliziert zu verwenden.

- `max-br`
  - : Wenn angegeben und vom Software unterstützt, gibt der Parameter `max-br` die maximale Videobitrate in Einheiten von 1.000 bps für VCL und 1.200 bps für NAL an. Details hierzu finden Sie auf [Seite 47 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-47).
- `max-cpb`
  - : Wenn angegeben und unterstützt, legt `max-cpb` die maximale Größe des codierten Bildpuffers fest. Dies ist ein ziemlich komplizierter Parameter, dessen Einheitengröße variieren kann. Siehe [Seite 45 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-45) für weitere Details.
- `max-dpb`
  - : Wenn angegeben und unterstützt, gibt `max-dpb` die maximale Größe des decodierten Bildpuffers an, angegeben in Einheiten von 8/3 Makroblöcke. Siehe [RFC 6184, Seite 46](https://datatracker.ietf.org/doc/html/rfc6184#page-46) für weitere Details.
- `max-fs`
  - : Wenn angegeben und vom Software unterstützt, spezifiziert `max-fs` die maximale Größe eines einzelnen Videobildes, angegeben als Anzahl der Makroblöcke.
- `max-mbps`
  - : Wenn angegeben und unterstützt, ist dieser Wert eine Ganzzahl, die die maximale Rate angibt, mit der Makroblöcke pro Sekunde verarbeitet werden sollen (in Makroblöcken pro Sekunde).
- `max-smbps`
  - : Wenn angegeben und unterstützt, gibt dieser Wert eine Ganzzahl an, die die maximale Rate der statischen Makroblock-Verarbeitung in statischen Makroblöcken pro Sekunde angibt (unter der hypothetische Annahme, dass alle Makroblöcke statische Makroblöcke sind).

##### Parameter mit spezifischen Anforderungen

Diese Parameter können erforderlich oder optional sein, haben jedoch einige spezielle Anforderungen, wenn sie verwendet werden.

- `packetization-mode`
  - : Alle Endpunkte müssen den Modus 1 (nicht-verschachtelter Modus) unterstützen. Die Unterstützung anderer Paketisierungsmodi ist optional, und der Parameter muss nicht zwingend angegeben werden.
- `sprop-parameter-sets`
  - : Die Sequenz- und Bildinformationen für AVC können entweder eingebettet oder außerhalb des Bandes gesendet werden. Wenn AVC mit WebRTC verwendet wird, _müssen_ diese Informationen im Band signalisiert werden; daher darf der Parameter `sprop-parameter-sets` nicht im SDP enthalten sein.

##### Parameter, die angegeben werden müssen

Diese Parameter müssen immer angegeben werden, wenn AVC in einer WebRTC-Verbindung verwendet wird.

- `profile-level-id`
  - : Alle WebRTC-Implementierungen sind _verpflichtet_, diesen Parameter in ihrem SDP anzugeben und zu interpretieren, der das von dem Codec verwendete Subprofil identifiziert. Der spezifische Wert, der gesetzt wird, ist nicht definiert; wichtig ist, dass der Parameter überhaupt verwendet wird. Dies ist nützlich zu beachten, da in {{RFC(6184)}} ("RTP Payload Format for H.264 Video"), `profile-level-id` vollständig optional ist.

#### Weitere Anforderungen

Zur Unterstützung des Wechsels zwischen Hoch- und Querformat können zwei Methoden verwendet werden. Die erste Methode ist die Videodrehung (CVO) Header-Erweiterung des RTP-Protokolls. Wenn dies jedoch im SDP nicht als unterstützt signalisiert wird, wird empfohlen, dass Browser Display Orientation SEI-Nachrichten unterstützen, obwohl dies nicht erforderlich ist.

Sofern nicht anders signalisiert, beträgt das Pixel-Seitenverhältnis 1:1, was bedeutet, dass die Pixel quadratisch sind.

#### Weitere Hinweise

Das Payload-Format für AVC in WebRTC wird in {{RFC(6184, "RTP Payload Format for H.264 Video")}} beschrieben. WebRTC-Implementierungen von AVC sind verpflichtet, die speziellen SEI-Nachrichten „Füller-Payload“ und „Vollbild-Freeze“ zu unterstützen; diese werden verwendet, um nahtlose Wechsel zwischen mehreren Eingabestreams zu unterstützen.

## Unterstützte Audiocodecs

Die Audio-Codecs, die {{RFC(7874)}} vorschreibt, die alle WebRTC-kompatiblen Browser unterstützen müssen, sind in der folgenden Tabelle aufgeführt.

<table class="standard-table">
  <caption>
    Verbindliche Audiocodecs
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

Weitere Details zu WebRTC-spezifischen Überlegungen für jeden der oben aufgeführten Codecs finden Sie unten.

Es ist nützlich zu beachten, dass {{RFC(7874)}} mehr als eine Liste von Audio-Codecs definiert, die ein WebRTC-konformer Browser unterstützen muss; es bietet auch Empfehlungen und Anforderungen für spezielle Audiofunktionen wie Echounterdrückung, Rauschunterdrückung und Audiogruppierung.

> [!NOTE]
> Die obige Liste zeigt das Minimum an erforderlichen Codecs, die alle WebRTC-kompatiblen Endpunkte implementieren müssen. Ein bestimmter Browser kann auch andere Codecs unterstützen; jedoch kann die Kompatibilität über Plattformen und Geräte gefährdet sein, wenn Sie andere Codecs verwenden, ohne sorgfältig sicherzustellen, dass Unterstützung in allen Browsern vorhanden ist, die Ihre Benutzer möglicherweise bevorzugen.

Zusätzlich zu den verbindlichen Audiocodecs unterstützen einige Browser auch zusätzliche Codecs. Diese sind in der folgenden Tabelle aufgeführt.

<table class="standard-table">
  <caption>
    Andere Audiocodecs
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

Der **[Internet Low Bitrate Codec](https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec)** (**iLBC**) ist ein Open-Source-Schmalbandcodec, der von Global IP Solutions und jetzt von Google entwickelt wurde, und speziell für das Streamen von Sprach-Audio konzipiert ist. Google und einige andere Browser-Entwickler haben ihn für WebRTC übernommen.

Der **[Internet Speech Audio Codec](https://en.wikipedia.org/wiki/Internet_Speech_Audio_Codec)** (**iSAC**) ist ein weiterer Codec, der von Global IP Solutions entwickelt wurde und jetzt im Besitz von Google ist, das ihn als Open-Source bereitgestellt hat. Er wird von Google Talk, QQ und anderen Instant-Messaging-Clients verwendet und speziell für Sprachübertragungen entwickelt, die in einen RTP-Stream gekapselt sind.

**[Komfortgeräusch](https://en.wikipedia.org/wiki/Comfort_noise)** (**CN**) ist eine Form von künstlichem Hintergrundgeräusch, das verwendet wird, um Lücken in einer Übertragung zu füllen, anstelle von reinem Schweigen. Dies hilft zu vermeiden, dass ein störender Effekt auftritt, wenn die Sprachaktivierung und ähnliche Funktionen den Stream veranlassen, die Datenübertragung vorübergehend zu stoppen - eine Fähigkeit, die als Diskontinuierliche Übertragung (DTX) bekannt ist. In {{RFC(3389)}} gibt es eine Methode zur Bereitstellung eines geeigneten Füllers, der während der Stille verwendet werden kann.

Komfortgeräusch wird mit G.711 verwendet und kann potenziell auch mit anderen Codecs verwendet werden, die keine eingebaute CN-Funktion haben. Opus hat zum Beispiel seine eigene CN-Funktionalität; daher wird die Verwendung von RFC 3389 CN mit dem Opus-Codec nicht empfohlen.

Ein Audio-Sender ist niemals verpflichtet, diskontinuierliche Übertragung oder Komfortgeräusch zu verwenden.

### Opus

Das Opus-Format, definiert durch {{RFC(6716)}}, ist das primäre Format für Audio in WebRTC. Das RTP-Payload-Format für Opus findet sich in {{RFC(7587)}}. Weitere allgemeine Informationen über Opus und seine Fähigkeiten sowie darüber, wie andere APIs Opus unterstützen können, finden Sie im [entsprechenden Abschnitt](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus) unseres [Leitfadens zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Sowohl der Sprach- als auch der allgemeine Audiomodus sollten unterstützt werden. Die Skalierbarkeit und Flexibilität von Opus sind nützlich, wenn es um Audio geht, das unterschiedliche Grade an Komplexität haben kann. Seine Unterstützung von eingebetteten Stereo-Signalen ermöglicht die Unterstützung von Stereo ohne eine komplizierte Demultiplexing-Prozess.

Der gesamte Bereich der von Opus unterstützten Bitraten (6 kbps bis 510 kbps) wird in WebRTC unterstützt, wobei die Bitrate dynamisch geändert werden kann. Höhere Bitraten verbessern in der Regel die Qualität.

#### Bitratempfehlungen

Bei einer Bildgröße von 20 Millisekunden zeigt die folgende Tabelle die empfohlenen Bitraten für verschiedene Medienarten.

| Medientyp                           | Empfohlener Bitratenbereich |
| ----------------------------------- | --------------------------- |
| Schmalband-Sprache (NB)             | 8 bis 12 kbps               |
| Breitband-Sprache (WB)              | 16 bis 20 kbps              |
| Vollband-Sprache (FB)               | 28 bis 40 kbps              |
| Vollband-monophones Musik (FB mono) | 48 bis 64 kbps              |
| Vollband-Stereo-Musik (FB Stereo)   | 64 bis 128 kbps             |

Die Bitrate kann jederzeit angepasst werden. Um Netzwerküberlastungen zu vermeiden, sollte die durchschnittliche Audio-Bitrate die verfügbare Netzwerkkapazität nicht übersteigen (abzüglich aller anderen bekannten oder zu erwartenden zusätzlichen Bandbreitenanforderungen).

### G.711

G.711 definiert das Format für **Puls-Code-Modulation** (**PCM**)-Audio als eine Reihe von 8-Bit-Integer-Proben, die mit einer Abtastfrequenz von 8.000 Hz aufgenommen werden, was eine Bitrate von 64 kbps ergibt. Sowohl [µ-law](https://en.wikipedia.org/wiki/M-law) als auch [A-law](https://en.wikipedia.org/wiki/A-law)-Kodierungen sind erlaubt.

G.711 wird [durch die ITU definiert](https://www.itu.int/rec/T-REC-G.711-198811-I/en) und sein Payload-Format wird in {{RFC(3551, "", "4.5.14")}} definiert.

WebRTC erfordert, dass G.711 8-Bit-Proben in der Standard-Bitrate von 64 kbps verwendet, obwohl G.711 einige andere Variationen unterstützt. Weder G.711.0 (verlustfreie Kompression), G.711.1 (Breitbandfähigkeit) noch eine andere Erweiterung des G.711-Standards werden von WebRTC vorgeschrieben.

Aufgrund ihrer niedrigen Abtastrate und Probengröße wird G.711-Audioqualität nach modernen Maßstäben im Allgemeinen als schlecht angesehen, obwohl sie etwa dem entspricht, was ein Festnetztelefon klingt. Es wird im Allgemeinen als kleinster gemeinsamer Nenner verwendet, um sicherzustellen, dass Browser eine Audiokonferenz unabhängig von Plattformen und Browsern herstellen können, oder allgemein als Fallback-Option.

## Codecs spezifizieren und konfigurieren

### Die unterstützten Codecs abrufen

Da ein gegebener Browser und eine Plattform unterschiedliche Verfügbarkeit unter den potenziellen Codecs haben können – und möglicherweise mehrere Profile oder Ebenen für einen gegebenen Codec unterstützt werden – ist der erste Schritt bei der Konfiguration von Codecs für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), die Liste der verfügbaren Codecs zu erhalten. Um dies zu tun, müssen Sie zunächst eine Verbindung herstellen, auf der Sie die Liste erhalten können.

Es gibt ein paar Wege, wie Sie das tun können. Der effizienteste Weg ist, die statische Methode [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) (oder das Äquivalent [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) für einen Empfänger) zu verwenden, indem Sie den Medientyp als Eingabeparameter angeben. Zum Beispiel, um die unterstützten Codecs für Video zu bestimmen, können Sie dies tun:

```js
codecList = RTCRtpSender.getCapabilities("video").codecs;
```

Nun ist `codecList` ein Array von [`codec`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#codecs)-Objekten, die jeweils eine Codec-Konfiguration beschreiben.
Auch in der Liste werden Einträge für [Retransmission](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#rtx_retransmission) (RTX), [Redundant Coding](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#red_redundant_audio_data) (RED) und [Forward Error Correction](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#fec_forward_error_correction) (FEC) vorhanden sein.

Wenn die Verbindung im Prozess des Startens ist, können Sie das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignis verwenden, um das Abschließen des {{Glossary("ICE", "ICE")}}-Kandidaten-Sammelns zu überwachen, und dann die Liste abrufen.

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

Der Ereignishandler für `icegatheringstatechange` wird eingerichtet; in ihm prüfen wir, ob der ICE-Sammelstatus `complete` ist, was anzeigt, dass keine weiteren Kandidaten gesammelt werden. Die Methode [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) wird aufgerufen, um eine Liste aller von der Verbindung verwendeten [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte zu erhalten.

Damit in der Hand, durchlaufen wir die Liste der Sender und suchen nach dem ersten, bei dem die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angibt, dass sein [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, was anzeigt, dass die Daten des Tracks Videomedien sind.
Dann rufen wir die `getParameters()`-Methode dieses Senders auf und setzen `codecList` auf die `codecs`-Eigenschaft im zurückgegebenen Objekt und kehren dann zum Aufrufer zurück.

Wenn kein Videotrack gefunden wird, setzen wir `codecList` auf `null`.

Bei der Rückkehr ist `codecList` also entweder `null`, um anzuzeigen, dass keine Videotracks gefunden wurden, oder es ist ein Array von [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekten, die jeweils eine erlaubte Codec-Konfiguration beschreiben. Von besonderer Bedeutung in diesen Objekten: die [`payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType)-Eigenschaft, die ein Ein-Byte-Wert ist, der die beschriebene Konfiguration eindeutig identifiziert.

> [!NOTE]
> Die beiden Methoden zum Abrufen von Codec-Listen, die hier gezeigt werden, verwenden unterschiedliche Ausgabetypen in ihren Codec-Listen. Beachten Sie dies bei der Verwendung der Ergebnisse.

### Die Codec-Liste anpassen

Sobald Sie eine Liste der verfügbaren Codecs haben, können Sie sie ändern und die überarbeitete Liste an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) senden, um die Codec-Liste neu anzuordnen. Dies ändert die Präferenzreihenfolge der Codecs und ermöglicht es Ihnen, WebRTC anzuweisen, einen anderen Codec allen anderen vorzuziehen.

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

In diesem Beispiel nimmt die Funktion `changeVideoCodec()` als Eingabe den MIME-Typ des Codecs, den Sie verwenden möchten. Der Code beginnt, indem er eine Liste aller Transceiver der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erhält.

Dann holen wir für jeden Transceiver die Art der vom Transceiver dargestellten Medien vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)'s Track's [`kind`](/de/docs/Web/API/MediaStreamTrack/kind). Wir erhalten auch die Listen aller vom Browser unterstützten Codecs sowohl für das Senden als auch für den Empfang von Videos, mittels der statischen Methode `getCapabilities()` sowohl von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver).

Wenn die Medien Video sind, rufen wir sowohl für die Sender- als auch die Empfängercodec-Liste eine Methode namens `preferCodec()` auf; diese Methode ordnet die Codec-Liste auf die gewünschte Weise neu (siehe unten).

Schließlich rufen wir die [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)'s [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) Methode auf, um anzugeben, dass die gegebenen Sende- und Empfangs-Codecs in der neu angeordneten Reihenfolge erlaubt sind.

Das wird für jeden Transceiver auf der `RTCPeerConnection` gemacht; sobald alle Transceiver aktualisiert wurden, rufen wir den [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignishandler auf, der ein neues Angebot erstellt, die lokale Beschreibung aktualisiert, das Angebot an den entfernten Peer sendet und so weiter, wodurch die Neuverhandlung der Verbindung ausgelöst wird.

Die Funktion `preferCodec()`, die vom obigen Code aufgerufen wird, sieht folgendermaßen aus, um einen angegebenen Codec an die Spitze der Liste zu setzen (um während der Aushandlung priorisiert zu werden):

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

Dieser Code teilt die Codec-Liste einfach in zwei Arrays auf: eines, das Codecs enthält, deren MIME-Typ mit dem durch den `mimeType`-Parameter angegebenen übereinstimmt, und das andere mit allen anderen Codecs. Sobald die Liste aufgeteilt wurde, werden sie wieder zusammengefügt mit den Einträgen, die dem gegebenen `mimeType` entsprechen, zuerst, gefolgt von allen anderen Codecs. Die neu geordnete Liste wird dann an den Aufrufer zurückgegeben.

## Standard-Codecs

Sofern nicht anders angegeben, werden die Standard- oder, genauer gesagt, bevorzugten Codecs, die von den Implementierungen der WebRTC in jedem Browser angefordert werden, in der folgenden Tabelle dargestellt.

<table class="standard-table">
  <caption>
    Bevorzugte Codecs für WebRTC in den großen Webbrowsern
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

Bevor Sie einen Codec wählen, der nicht einer der verbindlichen Codecs ist (VP8 oder AVC für Video und Opus oder PCM für Audio), sollten Sie die potenziellen Nachteile ernsthaft in Betracht ziehen: Insbesondere können nur diese Codecs im Allgemeinen auf allen Geräten, die WebRTC unterstützen, als verfügbar angenommen werden.

Wenn Sie sich entscheiden, einen anderen Codec als die verbindlichen zu bevorzugen, sollten Sie zumindest die Möglichkeit eines Fallbacks auf einen der verbindlichen Codecs zulassen, wenn die Unterstützung für den von Ihnen bevorzugten Codec nicht verfügbar ist.

### Audio

Im Allgemeinen sollten Sie, wenn es verfügbar ist und das Audio, das Sie senden möchten, eine Abtastrate von mehr als 8 kHz hat, ernsthaft die Verwendung von Opus als Ihren primären Codec in Betracht ziehen. Für sprachbasierte Verbindungen in einer eingeschränkten Umgebung kann die Verwendung von G.711 bei einer Abtastrate von 8 kHz ein akzeptables Erlebnis für Gespräche bieten, aber typischerweise werden Sie G.711 als Fallback-Option verwenden, da es andere Optionen gibt, die effizienter sind und besser klingen, wie Opus in seinem Schmalbandmodus.

### Video

Es gibt eine Reihe von Faktoren, die bei der Entscheidung über einen Video-Codec (oder eine Codec-Gruppe) zu unterstützen, eine Rolle spielen.

#### Lizenzbedingungen

Bevor Sie sich für einen Videocodec entscheiden, stellen Sie sicher, dass Sie über alle Lizenzanforderungen zu dem von Ihnen ausgewählten Codec informiert sind; Sie finden Informationen zu möglichen Lizenzbedenken in unserem Haupt-[Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs). Von den beiden verbindlichen Codecs für Video – VP8 und AVC/H.264 – ist nur VP8 vollständig frei von Lizenzanforderungen. Wenn Sie sich für AVC entscheiden, stellen Sie sicher, dass Sie sich über mögliche Gebühren im Klaren sind, die Sie möglicherweise zahlen müssen; dennoch haben die Patentinhaber im Allgemeinen erklärt, dass die meisten typischen Website-Entwickler sich nicht um die Zahlung von Lizenzgebühren kümmern müssen, die sich typischerweise mehr auf die Entwickler der Kodierungs- und Dekodierungssoftware konzentrieren.

> [!WARNING]
> Die hier gegebenen Informationen stellen _keine_ Rechtsberatung dar! Stellen Sie sicher, dass Sie Ihre Haftung prüfen, bevor Sie endgültige Entscheidungen treffen, bei denen das Potenzial für Lizenzfragen besteht.

#### Leistungsanforderungen und Akkulaufzeit

Ein weiterer Faktor, der insbesondere auf mobilen Plattformen berücksichtigt werden muss, sind die Auswirkungen, die ein Codec auf die Akkulaufzeit haben kann. Wenn ein Codec in der Hardware auf einer bestimmten Plattform verarbeitet wird, kann dieser Codec wahrscheinlich eine viel bessere Akkulaufzeit und weniger Wärmeentwicklung ermöglichen.

Safari für iOS und iPadOS hat zum Beispiel WebRTC mit AVC als einzigem unterstützten Videocodec eingeführt. AVC hat den Vorteil, auf iOS und iPadOS in der Hardware kodiert und dekodiert werden zu können. Safari 12.1 führte Unterstützung für VP8 innerhalb von IRC ein, was die Interoperabilität verbessert, jedoch zu einem Preis – VP8 hat keine Hardwareunterstützung auf iOS-Geräten, sodass die Verwendung eine erhöhte Prozessorbelastung und verringerte Akkulaufzeit verursacht.

#### Leistung

Glücklicherweise bieten VP8 und AVC aus der Perspektive des Endbenutzers ähnliche Leistungen und sind gleichermaßen geeignet für den Einsatz in Videokonferenzen und anderen WebRTC-Lösungen. Die endgültige Entscheidung liegt bei Ihnen. Egal für welchen Sie sich entscheiden, stellen Sie sicher, dass Sie die in diesem Artikel bereitgestellten Informationen zu den jeweiligen Konfigurationsproblemen lesen, mit denen Sie bei diesem Codec konfrontiert werden können.

Denken Sie daran, dass die Auswahl eines Codecs, der nicht in der Liste der verbindlichen Codecs ist, wahrscheinlich das Risiko birgt, einen Codec auszuwählen, der von einem Browser, den Ihre Benutzer möglicherweise bevorzugen, nicht unterstützt wird. Lesen Sie den Artikel [Probleme bei der Unterstützung von Medien in Webinhalten beheben](/de/docs/Web/Media/Guides/Formats/Support_issues), um mehr darüber zu erfahren, wie Sie Unterstützung für Ihre bevorzugten Codecs bieten können, während Sie gleichzeitig eine Unterstützung für Browser ermöglichen, die diesen Codec nicht implementieren.

## Sicherheitsimplikationen

Während der Auswahl und Konfiguration von Codecs gibt es interessante potenzielle Sicherheitsprobleme. WebRTC-Video wird mit Datagram Transport Layer Security ({{Glossary("DTLS", "DTLS")}}) geschützt, aber es ist theoretisch möglich, dass eine motivierte Partei die Menge an Änderungen, die von Frame zu Frame auftritt, wenn variable Bitrate (VBR)-Codecs verwendet werden, ableiten kann, indem sie die Bitrate des Streams und wie sie sich im Laufe der Zeit ändert, überwacht. Dies könnte potenziell einem Angreifer ermöglichen, etwas über den Inhalt des Streams abzuleiten, angesichts des Flusses der Bitrate.

Weitere Informationen zu Sicherheitsüberlegungen bei der Verwendung von AVC in WebRTC finden Sie in {{RFC(6184, "RTP-Payload-Format für H.264-Video: Sicherheitsüberlegungen", 9)}}.

## RTP-Payload-Format Medientypen

Es kann nützlich sein, auf die {{Glossary("IANA", "IANA")}}-Liste der {{Glossary("RTP", "RTP")}}-Payload-Format Medientypen zu verweisen; dies ist eine vollständige Liste der MIME-Medientypen, die für _potentielle_ Verwendung in RTP-Streams definiert sind, wie sie in WebRTC verwendet werden. Die meisten davon werden nicht in WebRTC-Kontexten verwendet, aber die Liste kann dennoch nützlich sein.

Siehe auch {{RFC(4855)}}, das das Register der Medientypen abdeckt.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Digitale Videokonzepte](/de/docs/Web/Media/Guides/Formats/Video_concepts)
- [Digitale Audiokonzepte](/de/docs/Web/Media/Guides/Formats/Audio_concepts)
