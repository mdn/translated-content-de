---
title: Codecs verwendet von WebRTC
slug: Web/Media/Formats/WebRTC_codecs
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Die [WebRTC API](/de/docs/Web/API/WebRTC_API) ermöglicht es, Websites und Apps zu erstellen, die es Benutzern erlauben, in Echtzeit zu kommunizieren, indem sie Audio und/oder Video sowie optionale Daten und andere Informationen verwenden. Um zu kommunizieren, müssen sich die beiden Geräte auf einen gemeinsamen Codec für jede Spur einigen, damit sie erfolgreich kommunizieren und die geteilten Medien präsentieren können. Dieser Leitfaden beleuchtet die Codecs, die Browser implementieren müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

## Containerlose Medien

WebRTC verwendet nackte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte für jeden Track, der von einem Peer zum anderen geteilt wird, ohne einen Container oder sogar einen [`MediaStream`](/de/docs/Web/API/MediaStream), der mit den Tracks verbunden ist. Welche Codecs innerhalb dieser Tracks sein können, wird durch die WebRTC-Spezifikation nicht vorgeschrieben. Allerdings spezifiziert {{RFC(7742)}}, dass alle WebRTC-kompatiblen Browser [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8) und das Constrained Baseline-Profil von [H.264](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) für Video unterstützen müssen, und {{RFC(7874)}} legt fest, dass Browser mindestens den [Opus](/de/docs/Web/Media/Formats/Audio_codecs#opus)-Codec sowie die PCMA- und PCMU-Formate von [G.711](/de/docs/Web/Media/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies) unterstützen müssen.

Diese beiden RFCs legen auch Optionen fest, die für jeden Codec unterstützt werden müssen, sowie spezifische Benutzerkomfortfunktionen wie Echounterdrückung. Dieser Leitfaden beleuchtet die Codecs, die Browser implementieren müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

Während Kompression auf dem Web immer notwendig ist, ist sie bei Videokonferenzen von besonderer Bedeutung, um sicherzustellen, dass die Teilnehmer ohne Verzögerung oder Unterbrechungen kommunizieren können. Zweitrangig ist der Bedarf, das Video und Audio zu synchronisieren, sodass Bewegungen und zusätzliche Informationen (wie Folien oder eine Projektion) zur gleichen Zeit wie das entsprechende Audio präsentiert werden.

## Allgemeine Anforderungen an Codecs

Bevor man sich codec-spezifische Fähigkeiten und Anforderungen anschaut, gibt es einige allgemeine Anforderungen, die von _jedem_ mit WebRTC verwendeten Codec-Konfiguration erfüllt werden müssen.

Sofern durch das [SDP](/de/docs/Glossary/SDP) nicht anders signalisiert, muss der Webbrowser, der einen WebRTC-Videostream empfängt, in der Lage sein, Video mit mindestens 20 FPS bei einer Mindestauflösung von 320 Pixeln Breite und 240 Pixeln Höhe zu verarbeiten. Es wird ermutigt, dass Video mit einer Bildfrequenz und Größe nicht unter dieser unteren Grenze codiert wird, da dies im Wesentlichen das untere Ende dessen ist, was WebRTC im Allgemeinen handhaben soll.

SDP unterstützt eine codec-unabhängige Methode zur Spezifikation bevorzugter Videoauflösungen ({{RFC(6236)}}. Dies geschieht durch Senden eines `a=imageattr` SDP-Attributs, um die maximale akzeptable Auflösung anzuzeigen. Der Sender muss diesen Mechanismus jedoch nicht unterstützen, daher muss man darauf vorbereitet sein, Medien in einer anderen Auflösung zu empfangen, als man angefordert hat. Über diese einfache maximale Auflösungsanforderung hinaus können spezifische Codecs weitere Möglichkeiten bieten, um bestimmte Medienkonfigurationen zu erfragen.

## Unterstützte Video-Codecs

WebRTC legt einen Grundsatz von Codecs fest, die alle konformen Browser unterstützen müssen. Einige Browser können sich entscheiden, auch andere Codecs zuzulassen.

Im Folgenden sind die Video-Codecs aufgelistet, die in jedem vollständig WebRTC-konformen Browser _erforderlich_ sind, sowie die erforderlichen Profile und die Browser, die tatsächlich die Anforderung erfüllen.

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
          Dies ist auf eine Änderung der Google Play Store-Anforderungen zurückzuführen, die Firefox daran hindern,
          den OpenH264-Codec herunterzuladen und zu installieren, der für die Verarbeitung von H.264 in WebRTC-Verbindungen benötigt wird. Siehe
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

Für Details zu WebRTC-bezogenen Überlegungen für jeden Codec, siehe die folgenden Unterabschnitte, indem Sie den Links auf den Namen jedes Codecs folgen.

Vollständige Details darüber, welche Video-Codecs und Konfigurationen WebRTC unterstützen muss, finden Sie in {{RFC(7742, "WebRTC Video Processing and Codec Requirements")}}. Es ist bemerkenswert, dass das RFC eine Vielzahl von video-bezogenen Anforderungen abdeckt, einschließlich Farbräume (sRGB ist der bevorzugte, aber nicht erforderliche, Standardfarbraum), Empfehlungen für Webcam-Verarbeitungsfunktionen (automatischer Fokus, automatischer Weißabgleich, automatisches Lichtniveau) und so weiter.

> [!NOTE]
> Diese Anforderungen gelten für Webbrowser und andere vollständig WebRTC-konforme Produkte. Nicht WebRTC-Produkte, die bis zu einem gewissen Grad mit WebRTC kommunizieren können, unterstützen möglicherweise diese Codecs nicht, obwohl sie von den Spezifikationsdokumenten dazu ermutigt werden.

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
      <th scope="row">VP9</th>
      <td>—</td>
      <td>Chrome (48+), Firefox</td>
    </tr>
  </tbody>
</table>

### VP8

VP8, den wir [allgemein beschreiben](/de/docs/Web/Media/Formats/Video_codecs#vp8) im Hauptleitfaden zu den [Video-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Video_codecs), hat einige spezifische Anforderungen, die befolgt werden müssen, wenn man ihn verwendet, um eine Videospur in einer WebRTC-Verbindung zu kodieren oder dekodieren.

Sofern nicht anders signalisiert, wird VP8 quadratische Pixel verwenden (das heißt, Pixel mit einem [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) von 1:1).

#### Weitere Anmerkungen

Das Netzwerk-Payload-Format zum Teilen von VP8 über [RTP](/de/docs/Glossary/RTP) (wie bei der Verwendung von WebRTC) wird in {{RFC(7741, "RTP Payload Format for VP8 Video")}} beschrieben.

### AVC / H.264

Die Unterstützung des Constrained Baseline (CB) Profils von AVC ist in allen vollständig konformen WebRTC-Implementierungen erforderlich. CB ist ein Teil des Hauptprofils und wurde speziell für Anwendungen mit geringer Komplexität und geringer Verzögerung wie mobile Videoübertragung und Videokonferenzen sowie für Plattformen mit geringerer Videoverarbeitungskapazität entwickelt.

Unsere [Übersicht über AVC](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) und seine Funktionen finden Sie im Hauptleitfaden zu Video-Codecs.

#### Besondere Anforderungen an die Parameterunterstützung

AVC bietet eine breite Palette von Parametern zur Steuerung optionaler Werte. Um die Zuverlässigkeit der WebRTC-Medienübertragung über mehrere Plattformen und Browser zu verbessern, ist es erforderlich, dass WebRTC-Endgeräte, die AVC unterstützen, bestimmte Parameter auf spezifische Weise handhaben. Manchmal bedeutet dies, dass ein Parameter unterstützt werden muss (oder nicht unterstützt werden darf). Manchmal bedeutet es, dass ein bestimmter Wert für einen Parameter erforderlich ist, oder dass eine bestimmte Menge von Werten erlaubt ist. Und manchmal sind die Anforderungen komplexer.

##### Parameter, die nützlich, aber nicht erforderlich sind

Diese Parameter müssen vom WebRTC-Endpunkt nicht unterstützt werden, und ihre Verwendung ist auch nicht erforderlich. Ihre Verwendung kann das Benutzererlebnis auf verschiedene Weise verbessern, muss aber nicht verwendet werden. Tatsächlich sind einige dieser Parameter ziemlich kompliziert zu verwenden.

- `max-br`
  - : Wenn angegeben und vom Software unterstützt, gibt der Parameter `max-br` die maximale Video-Bitrate in Einheiten von 1.000 bps für VCL und 1.200 bps für NAL an. Details hierzu finden Sie auf [Seite 47 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-47).
- `max-cpb`
  - : Wenn angegeben und vom Software unterstützt, spezifiziert `max-cpb` die maximale Größe des codierten Bildpuffers. Dies ist ein ziemlich komplizierter Parameter, dessen Einheitengröße variieren kann. Siehe [Seite 45 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-45) für Details.
- `max-dpb`
  - : Wenn angegeben und unterstützt, gibt `max-dpb` die maximale Größe des dekodierten Bildpuffers an, angegeben in Einheiten von 8/3 Makroblöcken. Siehe [RFC 6184, Seite 46](https://datatracker.ietf.org/doc/html/rfc6184#page-46) für weitere Details.
- `max-fs`
  - : Wenn angegeben und vom Software unterstützt, spezifiziert `max-fs` die maximale Größe eines einzelnen Video-Frames, angegeben als Anzahl von Makroblöcken.
- `max-mbps`
  - : Wenn angegeben und vom Software unterstützt, ist dieser Wert eine ganze Zahl, die die maximale Rate angibt, mit der Makroblöcke pro Sekunde verarbeitet werden sollten (in Makroblöcken pro Sekunde).
- `max-smbps`
  - : Wenn angegeben und vom Software unterstützt, spezifiziert dieser eine ganze Zahl, die die maximale statische Makroblock-Verarbeitungsrate in statischen Makroblöcken pro Sekunde angibt (unter der hypothetischen Annahme, dass alle Makroblöcke statische Makroblöcke sind).

##### Parameter mit spezifischen Anforderungen

Diese Parameter können erforderlick sein oder nicht, haben jedoch besondere Anforderungen, wenn sie verwendet werden.

- `packetization-mode`
  - : Alle Endpunkte müssen den Modus 1 (nicht-interleaved Modus) unterstützen. Die Unterstützung anderer Paketisierungsmodi ist optional, und es ist nicht erforderlich, dass der Parameter angezeigt wird.
- `sprop-parameter-sets`
  - : Sequenz- und Bildinformationen für AVC können entweder im oder außerhalb des Bandes gesendet werden. Wenn AVC mit WebRTC verwendet wird, _müssen_ diese Informationen im Band signalisiert werden; der Parameter `sprop-parameter-sets` darf daher _nicht_ im SDP enthalten sein.

##### Parameter, die spezifiziert werden müssen

Diese Parameter müssen immer spezifiziert werden, wenn AVC in einer WebRTC-Verbindung verwendet wird.

- `profile-level-id`
  - : Alle WebRTC-Implementierungen _müssen_ diesen Parameter in ihrem SDP spezifizieren und interpretieren, um das vom Codec verwendete Subprofil zu identifizieren. Der spezifische Wert, der festgesetzt wird, ist nicht definiert; wichtig ist, dass der Parameter überhaupt verwendet wird. Dies ist nützlich zu beachten, da in {{RFC(6184)}} ("RTP Payload Format for H.264 Video") `profile-level-id` völlig optional ist.

#### Weitere Anforderungen

Für die Unterstützung des Wechsels zwischen Hoch- und Querformat stehen zwei Methoden zur Verfügung. Die erste ist die Videoorientierung (CVO)-Header-Erweiterung des RTP-Protokolls. Wenn dies jedoch nicht im SDP als unterstützt signalisiert wird, wird empfohlen, dass Browser Display Orientation SEI-Nachrichten unterstützen, dies ist jedoch nicht erforderlich.

Sofern nicht anders signalisiert, beträgt das Pixel-Seitenverhältnis 1:1, was bedeutet, dass die Pixel quadratisch sind.

#### Weitere Anmerkungen

Das für AVC in WebRTC verwendete Payload-Format wird in {{RFC(6184, "RTP Payload Format for H.264 Video")}} beschrieben. AVC-Implementierungen für WebRTC sind verpflichtet, die speziellen SEI-Nachrichten "Füllpayload" und "Full Frame Freeze" zu unterstützen; diese werden verwendet, um nahtlos zwischen mehreren Eingangsströmen umzuschalten.

## Unterstützte Audio-Codecs

Die Audio-Codecs, die {{RFC(7874)}} vorschreibt, dass alle WebRTC-kompatiblen Browser unterstützen müssen, sind in der folgenden Tabelle dargestellt.

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

Siehe unten für weitere Details zu spezifischen WebRTC-Überlegungen, die für jeden der oben aufgeführten Codecs bestehen.

Es ist nützlich zu beachten, dass {{RFC(7874)}} mehr als eine Liste von Audio-Codecs definiert, die ein WebRTC-kompatibler Browser unterstützen muss; es bietet auch Empfehlungen und Anforderungen für spezielle Audiofunktionen wie Echounterdrückung, Rauschunterdrückung und Audioausgleich.

> [!NOTE]
> Die obige Liste gibt den minimalen erforderlichen Satz von Codecs an, die alle WebRTC-kompatiblen Endpunkte implementieren müssen. Ein gegebener Browser kann auch andere Codecs unterstützen; die plattform- und geräteübergreifende Kompatibilität kann jedoch gefährdet sein, wenn Sie andere Codecs verwenden, ohne sorgfältig sicherzustellen, dass Unterstützung in allen von Ihren Benutzern möglicherweise gewählten Browsern besteht.

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

**[Internet Low Bitrate Codec](https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec)** (**iLBC**) ist ein quelloffener Schmalband-Codec, der von Global IP Solutions und nun Google entwickelt wurde, speziell für das Streaming von Sprach-Audio. Google und einige andere Browser-Entwickler haben ihn für WebRTC übernommen.

Der **[Internet Speech Audio Codec](https://en.wikipedia.org/wiki/Internet_Speech_Audio_Codec)** (**iSAC**) ist ein weiterer Codec, der von Global IP Solutions entwickelt und nun von Google im Besitz ist, der ebenfalls quelloffen ist. Er wird von Google Talk, QQ und anderen Instant-Messaging-Clients verwendet und ist speziell für Sprachübertragungen konzipiert, die in einem RTP-Stream gekapselt sind.

**[Comfort Noise](https://en.wikipedia.org/wiki/Comfort_noise)** (**CN**) ist eine Form von künstlichem Hintergrundrauschen, das verwendet wird, um Lücken in einer Übertragung zu füllen, anstatt reiner Stille. Dies trägt dazu bei, einen erschreckenden Effekt zu vermeiden, der auftreten kann, wenn beispielsweise Sprachaktivierung und ähnliche Funktionen dazu führen, dass ein Stream vorübergehend aufhört, Daten zu senden - eine Fähigkeit, die als Diskontinuierliche Übertragung (DTX) bekannt ist. In {{RFC(3389)}} wird eine Methode zur Bereitstellung eines geeigneten Füllstoffs während Pausen beschrieben.

Comfort Noise wird mit G.711 verwendet und kann potenziell mit anderen Codecs verwendet werden, die keine eigene CN-Funktion haben. Opus hat zum Beispiel seine eigene CN-Fähigkeit; daher wird die Verwendung von RFC 3389 CN mit dem Opus-Codec nicht empfohlen.

Ein Audiosender ist niemals verpflichtet, eine diskontinuierliche Übertragung oder Comfort Noise zu verwenden.

### Opus

Das Opus-Format, das durch {{RFC(6716)}} definiert ist, ist das primäre Format für Audio in WebRTC. Das RTP-Payload-Format für Opus findet sich in {{RFC(7587)}}. Allgemeine Informationen über Opus und seine Fähigkeiten sowie darüber, wie andere APIs Opus unterstützen können, finden Sie im [entsprechenden Abschnitt](/de/docs/Web/Media/Formats/Audio_codecs#opus) unseres [Leitfadens zu Audio-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs).

Sowohl der Sprach- als auch der allgemeine Audiomodus sollten unterstützt werden. Die Skalierbarkeit und Flexibilität von Opus sind nützlich beim Umgang mit Audio, das unterschiedliche Komplexitätsgrade haben kann. Die Unterstützung von In-Band-Stereo-Signalen ermöglicht die Unterstützung von Stereo, ohne den Demultiplexing-Prozess zu verkomplizieren.

Der gesamte von Opus unterstützte Bereich von Bitraten (6 kbps bis 510 kbps) wird in WebRTC unterstützt, wobei die Bitrate dynamisch geändert werden darf. Höhere Bitraten verbessern typischerweise die Qualität.

#### Bitraten-Empfehlungen

Bei einer 20-Millisekunden-Framegröße zeigt die folgende Tabelle die empfohlenen Bitraten für verschiedene Medienformen an.

| Medientyp                           | Empfohlener Bitratenbereich |
| ---------------------------------- | -------------------------- |
| Schmalband-Sprache (NB)            | 8 bis 12 kbps              |
| Breitband-Sprache (WB)             | 16 bis 20 kbps             |
| Vollband-Sprache (FB)              | 28 bis 40 kbps             |
| Vollband-Mono-Musik (FB mono)      | 48 bis 64 kbps             |
| Vollband-Stereo-Musik (FB stereo)  | 64 bis 128 kbps            |

Die Bitrate kann jederzeit angepasst werden. Um Netzwerküberlastungen zu vermeiden, sollte die durchschnittliche Audio-Bitrate die verfügbare Netzwerkbandbreite (abzüglich anderer bekannter oder voraussichtlicher zusätzlicher Bandbreitenanforderungen) nicht überschreiten.

### G.711

G.711 definiert das Format für **Pulse Code Modulation** (**PCM**)-Audio als eine Reihe von 8-Bit-Ganzzahldaten, die mit einer Abtastrate von 8.000 Hz aufgenommen werden, was zu einer Bitrate von 64 kbps führt. Sowohl [µ-law](https://en.wikipedia.org/wiki/M-law) als auch [A-law](https://en.wikipedia.org/wiki/A-law) Kodierungen sind erlaubt.

G.711 ist [vom ITU definiert](https://www.itu.int/rec/T-REC-G.711-198811-I/en) und sein Payload-Format ist definiert in {{RFC(3551, "", "4.5.14")}}.

WebRTC verlangt, dass G.711 8-Bit-Daten mit der standardmäßigen 64 kbps-Rate verwendet, obwohl G.711 einige andere Variationen unterstützt. Weder G.711.0 (verlustfreie Komprimierung), G.711.1 (Breitbandfähigkeit) noch andere Erweiterungen des G.711-Standards sind von WebRTC vorgeschrieben.

Aufgrund seiner niedrigen Abtastrate und Datenbreite wird die Audioqualität von G.711 nach modernen Maßstäben allgemein als schlecht angesehen, obwohl sie etwa dem entspricht, was ein Festnetztelefon klingt. Es wird allgemein als kleinster gemeinsamer Nenner verwendet, um sicherzustellen, dass Browser eine Audioverbindung unabhängig von Plattformen und Browsern erreichen können, oder als allgemeine Fallback-Option.

## Spezifikation und Konfiguration von Codecs

### Abrufen der unterstützten Codecs

Da ein gegebener Browser und eine Plattform möglicherweise unterschiedliche Verfügbarkeit unter den potentiellen Codecs haben und mehrere Profile oder Ebenen für einen gegebenen Codec unterstützen können, ist der erste Schritt bei der Konfiguration von Codecs für einen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), die Liste der verfügbaren Codecs abzurufen. Dazu müssen Sie zuerst eine Verbindung herstellen, auf der die Liste abgerufen werden kann.

Es gibt ein paar Möglichkeiten, dies zu tun. Der effizienteste Weg ist die Verwendung der statischen Methode [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) (oder das Äquivalent [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) für einen Empfänger), wobei der Medientyp als Eingabeparameter spezifiziert wird. Zum Beispiel, um die unterstützten Codecs für Video zu bestimmen, können Sie dies tun:

```js
codecList = RTCRtpSender.getCapabilities("video").codecs;
```

Jetzt ist `codecList` ein Array von [`codec`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#codecs) Objekten, von denen jedes eine Codec-Konfiguration beschreibt.
In der Liste werden auch Einträge für [Retransmission](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#rtx_retransmission) (RTX), [Redundante Kodierung](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#red_redundant_audio_data) (RED) und [Forward Error Correction](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#fec_forward_error_correction) (FEC) vorhanden sein.

Wenn sich die Verbindung im Startprozess befindet, können Sie das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignis verwenden, um das Ende der [ICE](/de/docs/Glossary/ICE) Kandidatensammlung zu beobachten und dann die Liste abrufen.

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

Der Ereignis-Handler für `icegatheringstatechange` wird eingerichtet; darin überprüfen wir, ob der ICE-Sammlungszustand `complete` ist, was bedeutet, dass keine weiteren Kandidaten gesammelt werden. Die Methode [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) wird aufgerufen, um eine Liste aller von der Verbindung verwendeten [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Objekte abzurufen.

Mit dieser Hand durchlaufen wir die Liste der Sender und suchen den ersten, dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) anzeigt, dass sein [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, was bedeutet, dass die Daten des Tracks Videomedien sind. Dann rufen wir die Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) dieses Senders auf und setzen `codecList` auf die `codecs`-Eigenschaft im zurückgegebenen Objekt und kehren dann zum Aufrufer zurück.

Wenn kein Videotrack gefunden wird, setzen wir `codecList` auf `null`.

Bei der Rückkehr ist `codecList` entweder `null`, um anzuzeigen, dass keine Videotracks gefunden wurden, oder es ist ein Array von [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) Objekten, die jeweils eine zulässige Codec-Konfiguration beschreiben. Besonders wichtig in diesen Objekten: die [`payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType) Eigenschaft, die ein Ein-Byte-Wert ist, der die beschriebene Konfiguration eindeutig identifiziert.

> [!NOTE]
> Die beiden Methoden zum Erlangen von Listen von Codecs, die hier gezeigt werden, verwenden unterschiedliche Ausgabetypen in ihren Codec-Listen. Beachten Sie dies bei der Verwendung der Ergebnisse.

### Anpassen der Codec-Liste

Sobald Sie eine Liste der verfügbaren Codecs haben, können Sie sie ändern und die überarbeitete Liste an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) senden, um die Codec-Liste neu anzuordnen. Dies ändert die Reihenfolge der Vorliebe der Codecs, sodass Sie WebRTC mitteilen können, einen anderen Codec mehr als die anderen zu bevorzugen.

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

In diesem Beispiel nimmt die Funktion `changeVideoCodec()` als Eingabe den MIME-Typ des Codecs an, den Sie verwenden möchten. Der Code beginnt damit, eine Liste aller [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Tauschempfänger zu erhalten.

Dann erhalten wir für jedes Transceiver den Medientyp, der vom Transceiver durch den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)'s Track's [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) repräsentiert wird. Wir erhalten auch die Listen aller vom Browser unterstützten Codecs sowohl für das Senden als auch für das Empfangen von Videos mithilfe der `getCapabilities()`-statischen Methode sowohl von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver).

Wenn die Medien Video sind, rufen wir eine Methode namens `preferCodec()` sowohl für die Sendelisten als auch für die Empfangs-Codec-Listen auf; diese Methode ordnet die Codec-Liste entsprechend unserer Wünsche um (siehe unten).

Schließlich rufen wir die Methode [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)'s [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) auf, um festzulegen, dass die angegebenen Sendungs- und Empfangs-Codec-Listen erlaubt sind, in der neu angeordneten Reihenfolge.

Das geschieht für jeden Transceiver auf der `RTCPeerConnection`; sobald alle Transceiver aktualisiert wurden, rufen wir den [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignishandler auf, der ein neues Angebot erstellt, die lokale Beschreibung aktualisiert, das Angebot an den entfernten Peer sendet und so weiter, wodurch die Neuaushandlung der Verbindung ausgelöst wird.

Die `preferCodec()`-Funktion, die durch den obigen Code aufgerufen wird, sieht so aus, um einen bestimmten Codec an die Spitze der Liste zu verschieben (um während der Aushandlung priorisiert zu werden):

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

Dieser Code teilt die Codec-Liste in zwei Arrays auf: eins, das Codecs enthält, deren MIME-Typ mit dem durch den Parameter `mimeType` angegebenen übereinstimmt, und das andere mit allen anderen Codecs. Sobald die Liste aufgeteilt wurde, werden sie so wieder zusammengefügt, dass die Einträge, die mit dem gegebenen `mimeType` übereinstimmen, zuerst kommen, gefolgt von allen anderen Codecs. Die neu angeordnete Liste wird dann an den Aufrufer zurückgegeben.

## Standard-Codecs

Sofern nicht anders angegeben, zeigen die von jedem Browser's WebRTC-Implementierung angeforderten Standard- oder genauer gesagt bevorzugten Codecs in der unten stehenden Tabelle.

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

## Auswahl des richtigen Codecs

Bevor Sie sich für einen Codec entscheiden, der nicht zu den obligatorischen Codecs gehört (VP8 oder AVC für Video und Opus oder PCM für Audio), sollten Sie die potenziellen Nachteile ernsthaft in Betracht ziehen: Insbesondere können nur diese Codecs im Allgemeinen als auf nahezu allen Geräten verfügbar angenommen werden, die WebRTC unterstützen.

Wenn Sie sich dafür entscheiden, einen anderen Codec als die obligatorischen zu bevorzugen, sollten Sie zumindest eine Rückfalloption auf einen der obligatorischen Codecs ermöglichen, falls die Unterstützung für den bevorzugten Codec nicht verfügbar ist.

### Audio

Im Allgemeinen sollten Sie, wenn es verfügbar ist und das Audio, das Sie senden möchten, eine Abtastrate von mehr als 8 kHz hat, ernsthaft in Betracht ziehen, Opus als Ihren Hauptcodec zu verwenden. Für sprachbasierte Verbindungen in einer eingeschränkten Umgebung kann die Verwendung von G.711 mit einer 8 kHz Abtastrate eine akzeptable Erfahrung für Gespräche bieten, aber typischerweise werden Sie G.711 als Fallback-Option verwenden, da es effizientere und besser klingende Optionen gibt, wie Opus in seinem Schmalband-Modus.

### Video

Bei der Entscheidung über einen Video-Codec (oder eine Gruppe von Codecs), die unterstützt werden sollen, spielen mehrere Faktoren eine Rolle.

#### Lizenzbedingungen

Bevor Sie sich für einen Video-Codec entscheiden, sollten Sie sich über etwaige Lizenzanforderungen des ausgewählten Codecs im Klaren sein; Sie können Informationen über mögliche Lizenzierungskonzepte in unserem Hauptleitfaden zu [Video-Codecs, die auf dem Web verwendet werden](/de/docs/Web/Media/Formats/Video_codecs) finden. Von den beiden obligatorischen Codecs für Video - VP8 und AVC/H.264 - ist nur VP8 vollständig lizenzfrei. Wenn Sie AVC auswählen, stellen Sie sicher, dass Sie auf etwaige Gebühren aufpassen, die Sie möglicherweise zahlen müssen; die Patentinhaber haben jedoch im Allgemeinen gesagt, dass sich die meisten typischen Website-Entwickler keine Sorgen um Lizenzgebühren machen müssen, die sich in der Regel mehr auf die Entwickler der Kodierungs- und Dekodierungssoftware konzentrieren.

> [!WARNING]
> Die hier bereitgestellten Informationen stellen _keine_ Rechtsberatung dar! Stellen Sie sicher, dass Sie Ihre Haftungsaussichten bestätigen, bevor Sie endgültige Entscheidungen treffen, bei denen möglicherweise Lizenzfragen auftreten.

#### Leistungsbedarf und Batterielebensdauer

Ein weiterer Faktor, den Sie in Betracht ziehen sollten - besonders auf mobilen Plattformen - ist die Auswirkung eines Codecs auf die Batterielebensdauer. Wenn ein Codec auf einer bestimmten Plattform hardwareseitig behandelled wird, wird dieser Codec wahrscheinlich eine viel bessere Batterielebensdauer und weniger Wärmeentwicklung ermöglichen.

Zum Beispiel führte Safari für iOS und iPadOS WebRTC mit AVC als einzigen unterstützten Video-Codec ein. AVC bietet den Vorteil, auf iOS und iPadOS hardwareseitig kodiert und dekodiert werden zu können. Safari 12.1 führte die Unterstützung von VP8 innerhalb IRC ein, was die Interoperabilität verbessert, jedoch zu einem Preis - VP8 hat keine hardwareseitige Unterstützung auf iOS-Geräten, so dass seine Verwendung eine erhöhte Prozessorbelastung und eine verringerte Batterielebensdauer verursacht.

#### Leistung

Glücklicherweise leisten VP8 und AVC aus der Endbenutzersicht ähnlich und sind gleichermaßen für die Verwendung in Videokonferenzen und anderen WebRTC-Lösungen geeignet. Die endgültige Entscheidung liegt bei Ihnen. Egal, welche Sie wählen, lesen Sie unbedingt die Informationen in diesem Artikel über etwaige spezifische Konfigurationsprobleme, mit denen Sie bei diesem Codec konfrontiert werden könnten.

Denken Sie daran, dass die Auswahl eines Codecs, der nicht auf der Liste der obligatorischen Codecs steht, wahrscheinlich das Risiko birgt, einen Codec auszuwählen, der nicht von einem Browser unterstützt wird, den Ihre Benutzer möglicherweise bevorzugen. Lesen Sie den Artikel [Umgang mit Medien-Support-Problemen in Web-Inhalten](/de/docs/Web/Media/Formats/Support_issues), um mehr darüber zu erfahren, wie Sie Unterstützung für Ihre bevorzugten Codecs bieten können, während Sie gleichzeitig in der Lage sind, auf Browser zurückzufallen, die diesen Codec nicht implementiert haben.

## Sicherheitsaspekte

Es gibt interessante potenzielle Sicherheitsprobleme, die bei der Auswahl und Konfiguration von Codecs auftreten. WebRTC-Video wird mit Datagram Transport Layer Security ([DTLS](/de/docs/Glossary/DTLS)) geschützt, aber es ist theoretisch möglich, dass eine motivierte Partei die Menge an Änderungen erfassen kann, die von Frame zu Frame bei der Verwendung von Codecs mit variabler Bitrate (VBR) auftritt, indem sie die Bitrate des Streams und wie sie sich im Laufe der Zeit ändert, überwacht. Dies könnte potenziell einem Angreifer erlauben, etwas über den Inhalt des Streams zu erlernen, angesichts des Auf und Ab der Bitrate.

Weitere Informationen zu Sicherheitsüberlegungen bei der Verwendung von AVC in WebRTC finden Sie in {{RFC(6184, "RTP Payload Format for H.264 Video: Security Considerations", 9)}}.

## Medien-Typen für RTP-Payload-Formate

Es kann nützlich sein, sich die [IANA](/de/docs/Glossary/IANA)-Liste der [RTP](/de/docs/Glossary/RTP)-Payload-Format-Medientypen anzusehen; dies ist eine vollständige Liste der MIME-Medientypen, die für die _mögliche_ Verwendung in RTP-Streams definiert sind, wie sie in WebRTC verwendet werden. Die meisten davon werden in WebRTC-Kontexten nicht verwendet, aber die Liste kann dennoch nützlich sein.

Siehe auch {{RFC(4855)}}, die das Verzeichnis der Medientypen abdeckt.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Leitfaden zu Video-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Video_codecs)
- [Leitfaden zu Audio-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs)
- [Digitale Videokonzepte](/de/docs/Web/Media/Formats/Video_concepts)
- [Digitale Audiokonzepte](/de/docs/Web/Media/Formats/Audio_concepts)
