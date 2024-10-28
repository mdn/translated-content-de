---
title: Codecs, die von WebRTC verwendet werden
slug: Web/Media/Formats/WebRTC_codecs
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Die [WebRTC-API](/de/docs/Web/API/WebRTC_API) ermöglicht es, Websites und Apps zu erstellen, die es Nutzern erlauben, in Echtzeit zu kommunizieren, mit Audio und/oder Video sowie optionalen Daten und anderen Informationen. Damit die Kommunikation funktioniert, müssen sich die beiden Geräte auf einen gemeinsam verstandenen Codec für jede Spur einigen, damit sie erfolgreich kommunizieren und die geteilten Medien präsentieren können. Dieser Leitfaden untersucht die Codecs, die Browser implementieren müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

## Containerlose Medien

WebRTC verwendet nackte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte für jede Spur, die von einem Peer zum anderen geteilt wird, ohne einen Container oder sogar einen [`MediaStream`](/de/docs/Web/API/MediaStream), der mit den Spuren assoziiert ist. Welche Codecs innerhalb dieser Spuren sein können, ist nicht durch die WebRTC-Spezifikation vorgeschrieben. Allerdings spezifiziert {{RFC(7742)}}, dass alle WebRTC-kompatiblen Browser [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8) und [H.264](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) im Constrained Baseline Profil für Video unterstützen müssen, und {{RFC(7874)}} gibt an, dass Browser mindestens den [Opus](/de/docs/Web/Media/Formats/Audio_codecs#opus)-Codec sowie die PCMA- und PCMU-Formate von [G.711](/de/docs/Web/Media/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies) unterstützen müssen.

Diese beiden RFCs legen auch Optionen fest, die für jeden Codec unterstützt werden müssen, sowie spezifische Benutzerkomfortmerkmale wie Echounterdrückung. Dieser Leitfaden geht auf die Codecs ein, die Browser implementieren müssen, sowie auf andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

Da Kompression immer notwendig ist, wenn es um Medien im Web geht, ist es besonders wichtig, sie bei Videokonferenzen zu verwenden, um sicherzustellen, dass die Teilnehmer ohne Verzögerungen oder Unterbrechungen kommunizieren können. Von sekundärer Bedeutung ist die Notwendigkeit, dass das Video und Audio synchron bleiben, sodass Bewegungen und alle zusätzlichen Informationen (wie Folien oder eine Projektion) gleichzeitig mit dem dazugehörigen Audio präsentiert werden.

## Allgemeine Codec-Anforderungen

Bevor wir die spezifischen Fähigkeiten und Anforderungen von Codecs betrachten, gibt es einige allgemeine Anforderungen, die von _jedem_ Codec-Konfiguration, die mit WebRTC verwendet wird, erfüllt werden müssen.

Sofern das {{Glossary("SDP", "SDP")}} nicht speziell etwas anderes signalisiert, muss der Webbrowser, der einen WebRTC-Videostream empfängt, in der Lage sein, Video mit mindestens 20 FPS bei einer minimalen Auflösung von 320 Pixel Breite und 240 Pixel Höhe zu verarbeiten. Es wird empfohlen, das Video mit einer Bildrate und Größe zu kodieren, die nicht darunter liegt, da dies im Wesentlichen die Untergrenze dessen ist, was WebRTC im Allgemeinen zu handhaben erwartet wird.

SDP unterstützt eine codec-unabhängige Möglichkeit zur Spezifikation bevorzugter Videoauflösungen ({{RFC(6236)}}. Dies erfolgt durch das Senden eines `a=image-attr` SDP-Attributs, um die maximal akzeptable Auflösung anzugeben. Der Sender ist nicht verpflichtet, diesen Mechanismus zu unterstützen, jedoch muss man darauf vorbereitet sein, Medien in einer anderen Auflösung als der angeforderten zu erhalten. Über diese einfache Anfrage nach maximaler Auflösung hinaus bieten spezifische Codecs möglicherweise weitere Möglichkeiten zur Anforderung bestimmter Medienkonfigurationen.

## Unterstützte Videocodecs

WebRTC legt eine Basissatz von Codecs fest, die alle konformen Browser unterstützen müssen. Einige Browser können auch die Verwendung anderer Codecs erlauben.

Unten sind die Videocodecs aufgeführt, die in jedem voll WebRTC-konformen Browser _erforderlich_ sind, sowie die erforderlichen Profile und die Browser, die die Anforderung tatsächlich erfüllen.

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
          Dies liegt an einer Änderung der Anforderungen des Google Play Stores, die verhindern,
          dass Firefox den OpenH264-Codec herunterladen und installieren kann, der zum
          Behandeln von H.264 in WebRTC-Verbindungen erforderlich ist. Siehe
          <a
            href="https://support.mozilla.org/en-US/kb/firefox-android-openh264"
            >diesen Artikel auf SUMO</a
          >
          für Details.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Für Details zu WebRTC-bezogenen Überlegungen für jeden Codec siehe die Unterabschnitte unten, indem Sie den Links auf den Namen jedes Codecs folgen.

Vollständige Details zu den Video-Codecs und Konfigurationen, die WebRTC unterstützen muss, finden Sie in {{RFC(7742, "WebRTC Video Processing and Codec Requirements")}}. Es ist bemerkenswert, dass das RFC eine Vielzahl von videobezogenen Anforderungen abdeckt, einschließlich Farbräume (sRGB ist der bevorzugte, aber nicht erforderliche, Standardfarbraum), Empfehlungen für Webcam-Verarbeitungsfunktionen (automatischer Fokus, automatischer Weißabgleich, automatisches Lichtlevel) usw.

> [!NOTE]
> Diese Anforderungen gelten für Webbrowser und andere vollständig WebRTC-konforme Produkte. Nicht-WebRTC-Produkte, die in gewissem Maße mit WebRTC kommunizieren können, unterstützen diese Codecs möglicherweise oder möglicherweise nicht, obwohl sie durch die Spezifikationsdokumente dazu ermutigt werden.

Neben den obligatorischen Codecs unterstützen einige Browser auch zusätzliche Codecs. Diese sind in der folgenden Tabelle aufgeführt.

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

VP8, das wir [allgemein beschreiben](/de/docs/Web/Media/Formats/Video_codecs#vp8) im Haupt-[Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Video_codecs), hat einige spezifische Anforderungen, die befolgt werden müssen, wenn es verwendet wird, um eine Videospur in einer WebRTC-Verbindung zu kodieren oder zu dekodieren.

Sofern nicht anders signalisiert, verwendet VP8 quadratische Pixel (das heißt, Pixel mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 1:1).

#### Weitere Hinweise

Das Netzwerk-Nutzlastformat für das Teilen von VP8 mittels {{Glossary("RTP", "RTP")}} (zum Beispiel bei der Verwendung von WebRTC) wird in {{RFC(7741, "RTP Payload Format for VP8 Video")}} beschrieben.

### AVC / H.264

Die Unterstützung für das Constrained Baseline (CB)-Profil von AVC ist in allen vollständig konformen WebRTC-Implementierungen erforderlich. CB ist ein Subset des Hauptprofils und wurde speziell für Anwendungen mit geringer Komplexität und geringer Verzögerung entwickelt, wie zum Beispiel mobile Videos und Videokonferenzen sowie Plattformen mit geringerer Videoverarbeitungsleistung.

Unser [Überblick über AVC](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) und seine Funktionen finden Sie im Hauptleitfaden zu Videocodecs.

#### Besondere Anforderungen an die Unterstützung von Parametern

AVC bietet eine breite Palette von Parametern zur Steuerung optionaler Werte. Um die Zuverlässigkeit des WebRTC-Medien-Sharing über mehrere Plattformen und Browser zu verbessern, ist es erforderlich, dass WebRTC-Endpunkte, die AVC unterstützen, bestimmte Parameter auf bestimmte Weise behandeln. Manchmal bedeutet das, dass ein Parameter unterstützt werden muss (oder nicht unterstützt werden darf). Manchmal bedeutet es, dass ein spezifischer Wert für einen Parameter erforderlich ist, oder dass eine spezifische Menge von Werten erlaubt sein muss. Und manchmal sind die Anforderungen komplizierter.

##### Parameter, die nützlich, aber nicht erforderlich sind

Diese Parameter müssen vom WebRTC-Endpunkt nicht unterstützt werden, und ihre Nutzung ist auch nicht erforderlich. Ihre Nutzung kann das Benutzererlebnis auf verschiedene Weise verbessern, muss es jedoch nicht. Tatsächlich sind einige dieser Parameter recht kompliziert zu verwenden.

- `max-br`
  - : Wenn angegeben und von der Software unterstützt, gibt der Parameter `max-br` die maximale Videobitrate in Einheiten von 1.000 bps für VCL und 1.200 bps für NAL an. Weitere Details finden Sie auf [Seite 47 des RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-47).
- `max-cpb`
  - : Wenn angegeben und unterstützt, spezifiziert `max-cpb` die maximale Größe des kodierten Bildpuffers. Dies ist ein recht komplizierter Parameter, dessen Einheitengröße variieren kann. Details finden Sie auf [Seite 45 des RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-45).
- `max-dpb`
  - : Wenn angegeben und unterstützt, gibt `max-dpb` die maximale Größe des dekodierten Bildpuffers an, angegeben in Einheiten von 8/3 Makroblöcken. Für weitere Details siehe [RFC 6184, Seite 46](https://datatracker.ietf.org/doc/html/rfc6184#page-46).
- `max-fs`
  - : Wenn angegeben und von der Software unterstützt, gibt `max-fs` die maximale Größe eines einzelnen Videorahmens an, angegeben als Anzahl von Makroblöcken.
- `max-mbps`
  - : Wenn angegeben und unterstützt, ist dieser Wert eine Ganzzahl, die die maximale Rate angibt, mit der Makroblöcke pro Sekunde verarbeitet werden sollten (in Makroblöcken pro Sekunde).
- `max-smbps`
  - : Wenn angegeben und von der Software unterstützt, gibt dies eine Ganzzahl an, die die maximale statische Makroblockverarbeitungsrate in statischen Makroblöcken pro Sekunde angibt (unter der hypothetischen Annahme, dass alle Makroblöcke statische Makroblöcke sind).

##### Parameter mit spezifischen Anforderungen

Diese Parameter sind möglicherweise nicht erforderlich, aber haben spezielle Anforderungen, wenn sie verwendet werden.

- `packetization-mode`
  - : Alle Endpunkte müssen Modus 1 (non-interleaved mode) unterstützen. Die Unterstützung anderer Paketisierungsmodi ist optional, und der Parameter selbst muss nicht angegeben werden.
- `sprop-parameter-sets`
  - : Sequenz- und Bildinformationen für AVC können entweder innerhalb des Streams oder außerhalb gesendet werden. Wenn AVC mit WebRTC verwendet wird, _muss_ diese Information innerhalb des Streams signalisiert werden; der Parameter `sprop-parameter-sets` darf daher _nicht_ im SDP enthalten sein.

##### Parameter, die spezifiziert werden müssen

Diese Parameter müssen angegeben werden, wann immer AVC in einer WebRTC-Verbindung verwendet wird.

- `profile-level-id`
  - : Alle WebRTC-Implementierungen sind _verpflichtet_, diesen Parameter in ihrem SDP anzugeben und zu interpretieren, wobei das Subprofil identifiziert wird, das vom Codec verwendet wird. Der spezifische Wert, der gesetzt wird, ist nicht definiert; wichtig ist, dass der Parameter überhaupt verwendet wird. Dies ist nützlich zu beachten, da in {{RFC(6184)}} ("RTP Payload Format for H.264 Video") `profile-level-id` vollständig optional ist.

#### Weitere Anforderungen

Zum Unterstützen des Wechsels zwischen Hochkant- und Querformat gibt es zwei Methoden. Die erste ist die Videoorientierungserweiterung (CVO) des RTP-Protokolls. Wenn dies jedoch nicht im SDP als unterstützt signalisiert wird, wird empfohlen, dass Browser Display Orientation SEI-Nachrichten unterstützen, obwohl dies nicht erforderlich ist.

Sofern nicht anders signalisiert, beträgt das Seitenverhältnis der Pixel 1:1, was bedeutet, dass die Pixel quadratisch sind.

#### Weitere Hinweise

Das Nutzlastformat für AVC in WebRTC wird in {{RFC(6184, "RTP Payload Format for H.264 Video")}} beschrieben. WebRTC-Implementierungen von AVC müssen die speziellen "Füller-Nutzlast"- und "Full-Frame-Freeze" SEI-Nachrichten unterstützen; diese werden verwendet, um nahtlos zwischen mehreren Eingabestreams zu wechseln.

## Unterstützte Audiocodecs

Die Audiocodecs, die {{RFC(7874)}} vorschreibt, dass alle WebRTC-kompatiblen Browser unterstützen müssen, sind in der Tabelle unten gezeigt.

<table class="standard-table">
  <caption>
    Obligatorische Audiocodecs
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
        <a href="/de/docs/Web/Media/Formats/Audio_codecs#opus">Opus</a>
      </th>
      <td>Chrome, Edge, Firefox, Safari</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies"
          >G.711 PCM (A-law)</a
        >
      </th>
      <td>Chrome, Firefox, Safari</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies"
          >G.711 PCM (µ-law)</a
        >
      </th>
      <td>Chrome, Firefox, Safari</td>
    </tr>
  </tbody>
</table>

Siehe unten für weitere Details zu WebRTC-spezifischen Überlegungen, die für jeden der oben genannten Codecs existieren.

Es ist nützlich zu beachten, dass {{RFC(7874)}} mehr als eine Liste von Audiocodecs definiert, die ein WebRTC-kompatibler Browser unterstützen muss; es bietet auch Empfehlungen und Anforderungen für spezielle Audiofunktionen wie Echounterdrückung, Rauschreduzierung und Audiopegelanpassung.

> [!NOTE]
> Die obige Liste zeigt die minimale erforderliche Menge von Codecs an, die alle WebRTC-kompatiblen Endpunkte implementieren müssen. Ein gegebener Browser kann auch andere Codecs unterstützen; jedoch könnte die plattform- und geräteübergreifende Kompatibilität gefährdet sein, wenn Sie andere Codecs verwenden, ohne sorgfältig sicherzustellen, dass Unterstützung in allen Browsern besteht, die Ihre Benutzer möglicherweise wählen.

Neben den obligatorischen Audiocodecs unterstützen einige Browser auch zusätzliche Codecs. Diese sind in der folgenden Tabelle aufgeführt.

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

Der **[Internet Low Bitrate Codec](https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec)** (**iLBC**) ist ein quelloffener Schmalbandcodec, der von Global IP Solutions und jetzt von Google entwickelt wurde und speziell für das Streamen von Sprachaudio entwickelt wurde. Google und einige andere Browserentwickler haben es für WebRTC übernommen.

Der **[Internet Speech Audio Codec](https://en.wikipedia.org/wiki/Internet_Speech_Audio_Codec)** (**iSAC**) ist ein weiterer Codec, der von Global IP Solutions entwickelt und jetzt von Google besessen wird, der ihn als Open-Source veröffentlicht hat. Es wird von Google Talk, QQ und anderen Instant-Messaging-Clients verwendet und ist speziell für Sprachübertragungen konzipiert, die innerhalb eines RTP-Streams kapsuliert sind.

**[Comfort noise](https://en.wikipedia.org/wiki/Comfort_noise)** (**CN**) ist eine Form von künstlichem Hintergrundrauschen, das verwendet wird, um Lücken in einer Übertragung zu füllen, anstelle von reinem Schweigen. Dies hilft, einen störenden Effekt zu vermeiden, der auftreten kann, wenn die Sprachaktivierung und ähnliche Funktionen einen Stream dazu veranlassen, vorübergehend keine Daten mehr zu senden – eine Fähigkeit, die als diskontinuierliche Übertragung (DTX) bekannt ist. In {{RFC(3389)}}, eine Methode zur Bereitstellung eines geeigneten Füllers während der Stille.

Comfort Noise wird mit G.711 verwendet und kann potenziell mit anderen Codecs verwendet werden, die keine eingebaute CN-Funktion haben. Opus hat zum Beispiel seine eigene CN-Funktionalität; daher wird die Verwendung von RFC 3389 CN mit dem Opus-Codec nicht empfohlen.

Ein Audiosender ist niemals verpflichtet, diskontinuierliche Übertragung oder Comfort Noise zu verwenden.

### Opus

Das Opus-Format, definiert durch {{RFC(6716)}}, ist das primäre Format für Audio in WebRTC. Das RTP-Payload-Format für Opus ist in {{RFC(7587)}} zu finden. Allgemeine Informationen über Opus und seine Fähigkeiten sowie wie andere APIs Opus unterstützen können, finden Sie im [entsprechenden Abschnitt](/de/docs/Web/Media/Formats/Audio_codecs#opus) unseres [Leitfadens zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs).

Sowohl der Sprach- als auch der allgemeine Audiomodus sollten unterstützt werden. Opus' Skalierbarkeit und Flexibilität sind nützlich beim Umgang mit Audio, das möglicherweise unterschiedliche Grade an Komplexität aufweist. Seine Unterstützung von Stereo-Signalen ermöglicht Unterstützung für Stereo, ohne den Demultiplex-Prozess zu erschweren.

Der gesamte Bereich der von Opus unterstützten Bitraten (6 kbps bis 510 kbps) wird in WebRTC unterstützt, wobei die Bitrate dynamisch geändert werden kann. Höhere Bitraten verbessern in der Regel die Qualität.

#### Bitratenempfehlungen

Bei einer Bildgröße von 20 Millisekunden zeigt die folgende Tabelle die empfohlenen Bitraten für verschiedene Arten von Medien.

| Medientyp                          | Empfohlener Bitratenbereich |
| ---------------------------------- | --------------------------- |
| Schmalbandsprachkommunikation (NB) | 8 bis 12 kbps               |
| Breitbandsprachkommunikation (WB)  | 16 bis 20 kbps              |
| Vollbandsprachkommunikation (FB)   | 28 bis 40 kbps              |
| Vollbandmonomusik (FB mono)        | 48 bis 64 kbps              |
| Vollbandstereomusik (FB stereo)    | 64 bis 128 kbps             |

Die Bitrate kann jederzeit angepasst werden. Um Netzwerküberlastung zu vermeiden, sollte die durchschnittliche Audiobitrate die verfügbare Netzwerkbandbreite (abzüglich aller anderen bekannten oder erwarteten zusätzlichen Bandbreitenanforderungen) nicht überschreiten.

### G.711

G.711 definiert das Format für **Puls-Code-Modulation** (**PCM**) Audio als eine Serie von 8-Bit-Ganzzahl-Abtastungen, die bei einer Abtastrate von 8.000 Hz aufgenommen werden, was zu einer Bitrate von 64 kbps führt. Sowohl [µ-law](https://en.wikipedia.org/wiki/M-law) als auch [A-law](https://en.wikipedia.org/wiki/A-law) Kodierungen sind erlaubt.

G.711 ist [definiert von der ITU](https://www.itu.int/rec/T-REC-G.711-198811-I/en) und sein Nutzlastformat ist in {{RFC(3551, "", "4.5.14")}} definiert.

WebRTC erfordert, dass G.711 8-Bit-Abtastungen bei der Standardrate von 64 kbps verwendet, obwohl G.711 einige andere Varianten unterstützt. Weder G.711.0 (verlustfreie Kompression), G.711.1 (Breitbandfähigkeit) noch andere Erweiterungen des G.711-Standards sind durch WebRTC vorgegeben.

Aufgrund seiner niedrigen Abtastrate und Abtastgröße wird die Audioqualität von G.711 nach modernen Standards im Allgemeinen als schlecht angesehen, obwohl es ungefähr dem entspricht, wie ein Festnetztelefon klingt. Es wird im Allgemeinen als kleinster gemeinsamer Nenner verwendet, um sicherzustellen, dass Browser eine Audiowiedergabe erreichen können, unabhängig von Plattform und Browsern, oder als allgemeine Rückfalloption.

## Spezifizierung und Konfiguration von Codecs

### Abrufen der unterstützten Codecs

Da ein bestimmter Browser und eine bestimmte Plattform möglicherweise unterschiedliche Verfügbarkeiten unter den potenziellen Codecs aufweisen – und möglicherweise mehrere Profile oder Ebenen für einen bestimmten Codec unterstützt werden – ist der erste Schritt bei der Konfiguration von Codecs für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), die Liste der verfügbaren Codecs zu erhalten. Dazu müssen Sie zuerst eine Verbindung herstellen, über die Sie die Liste abrufen können.

Es gibt einige Möglichkeiten, dies zu tun. Der effektivste Weg ist die Verwendung der statischen Methode [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) (oder des entsprechenden [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) für einen Empfänger), wobei der Medientyp als Eingabeparameter angegeben wird. Um beispielsweise die unterstützten Codecs für Video zu bestimmen, können Sie dies tun:

```js
codecList = RTCRtpSender.getCapabilities("video").codecs;
```

Jetzt ist `codecList` ein Array von [`codec`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#codecs)-Objekten, von denen jedes eine Codec-Konfiguration beschreibt.
In der Liste sind auch Einträge für [Retransmission](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#rtx_retransmission) (RTX), [Redundant Coding](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#red_redundant_audio_data) (RED) und [Forward Error Correction](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#fec_forward_error_correction) (FEC) enthalten.

Wenn die Verbindung im Aufbau ist, können Sie das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignis verwenden, um auf den Abschluss der {{Glossary("ICE", "ICE")}}-Kandidatensammlung zu warten und dann die Liste abzurufen.

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

Der Ereignishandler für `icegatheringstatechange` wird eingerichtet; darin prüfen wir, ob der ICE-Sammlungsstatus `complete` ist, was bedeutet, dass keine weiteren Kandidaten gesammelt werden. Die Methode [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) wird aufgerufen, um eine Liste aller [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte zu erhalten, die von der Verbindung verwendet werden.

Damit in der Hand gehen wir durch die Liste der Sender und suchen nach dem ersten, dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) anzeigt, dass sein [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, was bedeutet, dass die Spur Daten als Videomedien enthält.
Wir rufen dann die `getParameters()`-Methode dieses Senders auf und setzen `codecList` auf die `codecs`-Eigenschaft im zurückgegebenen Objekt und kehren dann zum Anrufer zurück.

Wenn keine Videospur gefunden wird, setzen wir `codecList` auf `null`.

Nach der Rückkehr ist `codecList` entweder `null`, um anzuzeigen, dass keine Videospuren gefunden wurden, oder es ist ein Array von [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekten, die jeweils eine erlaubte Codec-Konfiguration beschreiben. Von besonderer Bedeutung in diesen Objekten ist die [`payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType)-Eigenschaft, die ein einbytegroßer Wert ist, der die beschriebene Konfiguration eindeutig identifiziert.

> [!NOTE]
> Die beiden hier gezeigten Methoden zum Abrufen von Listen von Codecs verwenden unterschiedliche Ausgabetypen in ihren Codec-Listen. Beachten Sie dies bei der Verwendung der Ergebnisse.

### Anpassen der Codec-Liste

Sobald Sie eine Liste der verfügbaren Codecs haben, können Sie diese ändern und dann die überarbeitete Liste an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) senden, um die Codec-Liste neu zu ordnen. Dies ändert die Präferenzreihenfolge der Codecs, was Ihnen ermöglicht, WebRTC anzuweisen, einen bestimmten Codec allen anderen vorzuziehen.

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

In diesem Beispiel nimmt die Funktion `changeVideoCodec()` als Eingabe den MIME-Typ des Codecs, den Sie verwenden möchten. Der Code beginnt mit dem Abrufen einer Liste aller Transceiver der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Dann holen wir für jeden Transceiver den Medientyp, der durch das Transceiver vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)'s track's [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) dargestellt wird, und wir holen die Listen aller vom Browser unterstützten Codecs sowohl für das Senden als auch für das Empfangen von Video, unter Verwendung der `getCapabilities()`-statischen Methode sowohl von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver).

Wenn die Medienart Video ist, rufen wir eine Methode namens `preferCodec()` für die Codec-Listen von sowohl Sender als auch Empfänger auf; diese Methode kategorisiert die Codec-Liste neu so, wie wir es möchten (siehe unten).

Schließlich rufen wir die [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)'s [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences)-Methode auf, um anzugeben, dass die angegebenen Sende- und Empfangs-Codecs in der neu geordneten Reihenfolge erlaubt sind.

Das wird für jeden Transceiver auf der `RTCPeerConnection` gemacht; sobald alle Transceiver aktualisiert sind, rufen wir den [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignishandler auf, der ein neues Angebot erstellt, die lokale Beschreibung aktualisiert, das Angebot an den entfernten Peer sendet und so weiter, wodurch die Neuverhandlung der Verbindung ausgelöst wird.

Die `preferCodec()`-Funktion, die oben vom Code aufgerufen wird, sieht so aus, um einen angegebenen Codec an die Spitze der Liste zu verschieben (während der Verhandlung priorisiert zu werden):

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

Dieser Code teilt die Codec-Liste einfach in zwei Arrays auf: eines enthält Codecs, deren MIME-Typ mit dem übereinstimmt, der durch den `mimeType`-Parameter spezifiziert ist, und das andere mit allen anderen Codecs. Sobald die Liste aufgeteilt wurde, werden sie wieder zusammengefügt, wobei die Einträge, die mit dem angegebenen `mimeType` übereinstimmen, zuerst kommen, gefolgt von allen anderen Codecs. Die neu geordnete Liste wird dann an den Anrufer zurückgegeben.

## Standardcodecs

Sofern nicht anders angegeben, sind die standardmäßigen – oder, genauer gesagt, bevorzugten – Codecs, die von der Implementierung von WebRTC durch jeden Browser angefordert werden, in der folgenden Tabelle aufgeführt.

<table class="standard-table">
  <caption>
    Bevorzugte Codecs für WebRTC in wichtigen Webbrowsern
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

## Wahl des richtigen Codecs

Bevor Sie sich für einen Codec entscheiden, der nicht zu den obligatorischen Codecs gehört (VP8 oder AVC für Video und Opus oder PCM für Audio), sollten Sie ernsthaft die potenziellen Nachteile in Betracht ziehen: insbesondere sind nur diese Codecs in der Regel auf im Wesentlichen allen Geräten verfügbar, die WebRTC unterstützen.

Wenn Sie sich entscheiden, einen anderen Codec als die obligatorischen zu bevorzugen, sollten Sie zumindest die Möglichkeit eines Fallbacks auf einen der obligatorischen Codecs einplanen, falls Unterstützung für den von Ihnen bevorzugten Codec nicht verfügbar ist.

### Audio

Im Allgemeinen sollten Sie, wenn verfügbar und die von Ihnen gesendeten Audiodaten eine Abtastrate von mehr als 8 kHz haben, unbedingt Opus als Ihren Hauptcodec in Betracht ziehen. Für sprachbasierte Verbindungen in einer eingeschränkten Umgebung kann die Verwendung von G.711 mit einer Abtastrate von 8 kHz eine akzeptable Erfahrung für Gespräche bieten, aber typischerweise werden Sie G.711 als Fallback-Option verwenden, da es andere Optionen gibt, die effizienter sind und besser klingen, wie zum Beispiel Opus in seinem Schmalbandmodus.

### Video

Es gibt eine Reihe von Faktoren, die bei der Entscheidung über einen Video-Codec (oder eine Gruppe von Codecs), die Sie unterstützen möchten, eine Rolle spielen.

#### Lizenzbedingungen

Bevor Sie sich für einen Videocodec entscheiden, sollten Sie sich über eventuelle lizenzrechtliche Anforderungen bezüglich des von Ihnen gewählten Codecs informieren; Sie finden Informationen über mögliche Lizenzprobleme in unserem Hauptleitfaden zu [Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Video_codecs). Von den beiden obligatorischen Codecs für Video - VP8 und AVC/H.264 - ist nur VP8 vollständig lizenzfrei. Wenn Sie sich für AVC entscheiden, stellen Sie sicher, dass Sie sich der potenziellen Gebühren bewusst sind, die Sie möglicherweise zahlen müssen; das gesagt, haben die Patentinhaber im Allgemeinen erklärt, dass die meisten typischen Website-Entwickler sich keine Sorgen über die Zahlung von Lizenzgebühren machen sollten, die typischerweise mehr auf die Entwickler der Codierungs- und Dekodierungssoftware ausgerichtet sind.

> [!WARNING]
> Die hier bereitgestellten Informationen stellen _keine_ Rechtsberatung dar! Stellen Sie sicher, dass Sie Ihre Haftungsrisiken überprüfen, bevor Sie endgültige Entscheidungen treffen, wenn ein potenzielles Risiko für Lizenzprobleme besteht.

#### Leistungsanforderungen und Batterielebensdauer

Ein weiterer zu berücksichtigender Faktor – besonders auf mobilen Plattformen – ist die Auswirkung eines Codecs auf die Batterielebensdauer. Wenn ein Codec auf einer bestimmten Plattform in Hardware gehandhabt wird, ermöglicht dieser Codec wahrscheinlich eine viel bessere Batterielebensdauer und geringere Wärmeentwicklung.

Zum Beispiel führte Safari für iOS und iPadOS WebRTC mit AVC als einzigem unterstütztem Videocodec ein. AVC hat den Vorteil, dass es auf iOS und iPadOS in Hardware kodiert und dekodiert werden kann. Safari 12.1 führte innerhalb von IRC Unterstützung für VP8 ein, was die Interoperabilität verbessert, aber zu Kosten – VP8 hat keine Hardwareunterstützung auf iOS-Geräten, sodass die Verwendung zu einer erhöhten Prozessorauslastung und reduzierter Batterielebensdauer führt.

#### Leistung

Glücklicherweise performen VP8 und AVC aus der Sicht des Endbenutzers ähnlich und sind für den Einsatz in Videokonferenzen und anderen WebRTC-Lösungen gleichermaßen geeignet. Die endgültige Entscheidung liegt bei Ihnen. Welchen Sie auch wählen, lesen Sie unbedingt die Informationen in diesem Artikel über etwaige spezifische Konfigurationsprobleme, mit denen Sie für diesen Codec umgehen müssen.

Bedenken Sie, dass die Auswahl eines Codecs, der nicht auf der Liste der obligatorischen Codecs steht, das Risiko birgt, einen Codec auszuwählen, der von einem Browser, den Ihre Benutzer bevorzugen, nicht unterstützt wird. Sehen Sie sich den Artikel [Behandlung von Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Formats/Support_issues) an, um mehr darüber zu erfahren, wie Sie Unterstützung für Ihre bevorzugten Codecs bieten können, während Sie gleichzeitig in der Lage sind, auf Browser zurückzugreifen, die diesen Codec nicht implementieren.

## Sicherheitsimplikationen

Es gibt interessante potenzielle Sicherheitsprobleme, die bei der Auswahl und Konfiguration von Codecs auftreten. WebRTC-Video wird mit Datagram Transport Layer Security ({{Glossary("DTLS", "DTLS")}}) geschützt, aber es ist theoretisch möglich, dass eine motivierte Partei die Menge an Änderungen, die von Frame zu Frame auftreten, ableiten kann, wenn Variable Bit Rate (VBR)-Codecs verwendet werden, indem sie die Bitrate des Streams und deren Änderungen im Zeitverlauf überwacht. Dies könnte einem böswilligen Akteur potenziell ermöglichen, etwas über den Inhalt des Streams abzuleiten, angesichts der Ebbe und Flut der Bitrate.

Für weitere Informationen zu Sicherheitsbetrachtungen bei der Verwendung von AVC in WebRTC siehe {{RFC(6184, "RTP Payload Format for H.264 Video: Security Considerations", 9)}}.

## RTP-Nutzlastformat-Mediatypen

Es kann nützlich sein, auf die {{Glossary("IANA", "IANA")}} Liste der {{Glossary("RTP", "RTP")}}-Nutzlastformat-Mediatypen zu verweisen; dies ist eine vollständige Liste der MIME-Mediatypen, die für _potenzielle_ Verwendung in RTP-Streams definiert sind, wie sie in WebRTC verwendet werden. Die meisten von ihnen werden in WebRTC-Kontexten nicht verwendet, aber die Liste kann dennoch nützlich sein.

Siehe auch {{RFC(4855)}}, das das Register der Medientypen behandelt.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Video_codecs)
- [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs)
- [Digitale Videokonzepte](/de/docs/Web/Media/Formats/Video_concepts)
- [Digitale Audiokonzepte](/de/docs/Web/Media/Formats/Audio_concepts)
