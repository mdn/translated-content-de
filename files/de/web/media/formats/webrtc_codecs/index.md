---
title: Von WebRTC verwendete Codecs
slug: Web/Media/Formats/WebRTC_codecs
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Die [WebRTC-API](/de/docs/Web/API/WebRTC_API) ermöglicht es, Websites und Apps zu erstellen, die es Nutzern erlauben, in Echtzeit zu kommunizieren, indem Audio und/oder Video sowie optionale Daten und andere Informationen verwendet werden. Um zu kommunizieren, müssen sich die beiden Geräte auf einen gemeinsam verstandenen Codec für jede Spur einigen können, damit sie erfolgreich kommunizieren und die geteilten Medien präsentieren können. Dieser Leitfaden gibt einen Überblick über die Codecs, die Browser implementieren müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

## Containerlose Medien

WebRTC verwendet nackte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte für jede Spur, die von einem Peer zum anderen geteilt wird, ohne einen Container oder sogar einen [`MediaStream`](/de/docs/Web/API/MediaStream), der mit den Spuren verbunden ist. Welche Codecs in diesen Spuren verwendet werden können, ist im WebRTC-Standard nicht vorgeschrieben. Allerdings spezifiziert {{RFC(7742)}}, dass alle WebRTC-kompatiblen Browser [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8) und [H.264](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) im Constrained Baseline-Profil für Video unterstützen müssen, und {{RFC(7874)}} legt fest, dass Browser mindestens den [Opus](/de/docs/Web/Media/Formats/Audio_codecs#opus)-Codec sowie die PCMA- und PCMU-Formate von [G.711](/de/docs/Web/Media/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies) unterstützen müssen.

Diese beiden RFCs legen auch Optionen fest, die für jeden Codec unterstützt werden müssen, sowie spezifische Benutzerkomfortmerkmale wie Echo-Kompensation. Dieser Leitfaden gibt einen Überblick über die Codecs, die Browser implementieren müssen, sowie andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

Während die Komprimierung beim Umgang mit Medien im Web immer notwendig ist, ist sie bei Videokonferenzen besonders wichtig, um sicherzustellen, dass die Teilnehmer ohne Verzögerungen oder Unterbrechungen kommunizieren können. Von sekundärer Bedeutung ist die Notwendigkeit, Video und Audio zu synchronisieren, damit die Bewegungen und alle Nebeninformationen (wie Folien oder eine Projektion) gleichzeitig mit dem entsprechenden Audio präsentiert werden.

## Allgemeine Codec-Anforderungen

Bevor wir auf codec-spezifische Fähigkeiten und Anforderungen eingehen, gibt es einige allgemeine Anforderungen, die von _jeder_ Codec-Konfiguration erfüllt werden müssen, die mit WebRTC verwendet wird.

Sofern das [SDP](/de/docs/Glossary/SDP) keine anderen Signale sendet, muss der Webbrowser, der einen WebRTC-Videostream empfängt, in der Lage sein, Video mit mindestens 20 FPS bei einer Mindestauflösung von 320 Pixeln Breite und 240 Pixeln Höhe zu verarbeiten. Es wird empfohlen, dass das Video mit einer Bildrate und Größe kodiert wird, die nicht unter diesem Wert liegt, da dies im Wesentlichen die untere Grenze dessen ist, was WebRTC generell unterstützen soll.

SDP unterstützt eine codec-unabhängige Möglichkeit, bevorzugte Videoauflösungen anzugeben ({{RFC(6236)}}. Dies geschieht, indem ein `a=imageattr` SDP-Attribut gesendet wird, um die maximale akzeptable Auflösung anzugeben. Der Sender ist jedoch nicht verpflichtet, diesen Mechanismus zu unterstützen, daher müssen Sie darauf vorbereitet sein, Medien in einer anderen Auflösung zu erhalten als die, die Sie angefordert haben. Über diese einfache maximale Auflösungsanforderung hinaus können spezifische Codecs weitere Möglichkeiten bieten, um spezifische Medienkonfigurationen anzufordern.

## Unterstützte Videocodecs

WebRTC legt eine Basisreihe von Codecs fest, die alle konformen Browser unterstützen müssen. Einige Browser können auch andere Codecs zulassen.

Im Folgenden sind die Videocodecs aufgeführt, die _in jedem_ vollständig WebRTC-kompatiblen Browser erforderlich sind, sowie die Profile, die erforderlich sind, und die Browser, die tatsächliche Anforderungen erfüllen.

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
          Dies liegt an einer Änderung der Anforderungen des Google Play Stores, die Firefox daran hindern, den OpenH264-Codec herunterzuladen und zu installieren, der benötigt wird, um H.264 in WebRTC-Verbindungen zu handhaben. Weitere Details finden Sie in
          <a
            href="https://support.mozilla.org/en-US/kb/firefox-android-openh264"
            >diesem Artikel auf SUMO</a
          >.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Details zu WebRTC-bezogenen Überlegungen für jeden Codec finden Sie in den Unterabschnitten unten, indem Sie den Links für jeden Codec-Namen folgen.

Vollständige Details darüber, welche Videocodecs und Konfigurationen WebRTC unterstützen muss, finden Sie in {{RFC(7742, "WebRTC Video Processing and Codec Requirements")}}. Es ist erwähnenswert, dass das RFC eine Vielzahl von videobezogenen Anforderungen abdeckt, einschließlich Farbräume (sRGB ist der empfohlene, aber nicht erforderliche Standardfarbraum), Empfehlungen für Webcam-Verarbeitungsfunktionen (automatische Fokussierung, automatische Weißabgleiche, automatische Lichtpegel) usw.

> [!NOTE]
> Diese Anforderungen gelten für Webbrowser und andere vollständig WebRTC-konforme Produkte. Nicht-WebRTC-Produkte, die bis zu einem gewissen Grad mit WebRTC kommunizieren können, unterstützen diese Codecs möglicherweise oder möglicherweise nicht, obwohl sie durch die Spezifikationsdokumente dazu ermutigt werden.

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
      <th scope="row">VP9</th>
      <td>—</td>
      <td>Chrome (48+), Firefox</td>
    </tr>
  </tbody>
</table>

### VP8

VP8, das wir [allgemein beschreiben](/de/docs/Web/Media/Formats/Video_codecs#vp8) im Haupt-[Leitfaden zu Video-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Video_codecs), hat einige spezifische Anforderungen, die bei der Kodierung oder Dekodierung einer Videospur in einer WebRTC-Verbindung befolgt werden müssen.

Sofern nicht anders signalisiert, verwendet VP8 quadratische Pixel (d. h. Pixel mit einem [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) von 1:1).

#### Weitere Hinweise

Das Netzwerk-Payload-Format für das Teilen von VP8 mit [RTP](/de/docs/Glossary/RTP) (wie bei der Verwendung von WebRTC) wird in {{RFC(7741, "RTP Payload Format for VP8 Video")}} beschrieben.

### AVC / H.264

Die Unterstützung für das Constrained Baseline (CB)-Profil von AVC ist in allen vollständig konformen WebRTC-Implementierungen erforderlich. CB ist ein Teilmengensatz des Hauptprofils und wurde speziell für Anwendungen mit geringerer Komplexität und Verzögerung wie mobiles Video und Videokonferenzen sowie für Plattformen mit geringerer Videobearbeitungsleistung entwickelt.

Unsere [Übersicht über AVC](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) und seine Funktionen finden Sie im Hauptleitfaden für Video-Codecs.

#### Besondere Anforderungen an die Parameterauswahl

AVC bietet eine breite Palette von Parametern zur Steuerung optionaler Werte. Um die Zuverlässigkeit des WebRTC-Medienaustauschs auf mehreren Plattformen und Browsern zu verbessern, ist es erforderlich, dass WebRTC-Endpunkte, die AVC unterstützen, bestimmte Parameter auf spezifische Weise handhaben. Manchmal bedeutet dies, dass ein Parameter unterstützt werden muss (bzw. nicht unterstützt werden darf). Manchmal bedeutet es, dass ein bestimmter Wert für einen Parameter erforderlich ist oder dass eine bestimmte Gruppe von Werten ermöglicht werden muss. Und manchmal sind die Anforderungen komplexer.

##### Nützliche, aber nicht erforderliche Parameter

Diese Parameter müssen vom WebRTC-Endpunkt nicht unterstützt werden, und ihre Verwendung ist auch nicht erforderlich. Ihre Anwendung kann die Benutzererfahrung in verschiedenen Aspekten verbessern, muss jedoch nicht verwendet werden. Einige davon sind in der Tat ziemlich kompliziert zu verwenden.

- `max-br`
  - : Wenn spezifiziert und von der Software unterstützt, gibt der Parameter `max-br` die maximale Videobitrate in Einheiten von 1.000 bps für VCL und 1.200 bps für NAL an. Details zu diesem Punkt finden Sie auf [Seite 47 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-47).
- `max-cpb`
  - : Wenn spezifiziert und von der Software unterstützt, gibt `max-cpb` die maximale Größe des codierten Bildpuffers an. Dies ist ein ziemlich komplizierter Parameter, dessen Einheitengröße variieren kann. Details finden Sie auf [Seite 45 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-45).
- `max-dpb`
  - : Wenn spezifiziert und unterstützt, gibt `max-dpb` die maximale Größe des dekodierten Bildpuffers an, angegeben in Einheiten von 8/3 Makroblöcken. Weitere Details finden Sie in [RFC 6184, Seite 46](https://datatracker.ietf.org/doc/html/rfc6184#page-46).
- `max-fs`
  - : Wenn spezifiziert und von der Software unterstützt, gibt `max-fs` die maximale Größe eines einzelnen Videobilds an, angegeben als Anzahl von Makroblöcken.
- `max-mbps`
  - : Wenn spezifiziert und von der Software unterstützt, gibt dieser Wert eine ganze Zahl an, die die maximale Geschwindigkeit angibt, mit der Makroblöcke pro Sekunde verarbeitet werden sollen (in Makroblöcken pro Sekunde).
- `max-smbps`
  - : Wenn spezifiziert und von der Software unterstützt, gibt dieser Wert eine ganze Zahl an, die die maximale statische Makroblock-Verarbeitungsrate in statischen Makroblöcken pro Sekunde angibt (unter der hypothetischen Annahme, dass alle Makroblöcke statische Makroblöcke sind).

##### Parameter mit spezifischen Anforderungen

Diese Parameter sind möglicherweise erforderlich oder nicht, haben aber besondere Anforderungen bei ihrer Verwendung.

- `packetization-mode`
  - : Alle Endpunkte müssen Modus 1 (nicht-interleaved Mode) unterstützen. Die Unterstützung für andere Paketisierungsmodi ist optional, und der Parameter selbst muss nicht angegeben werden.
- `sprop-parameter-sets`
  - : Sequenz- und Bildinformationen für AVC können entweder in-band oder out-of-band gesendet werden. Wenn AVC mit WebRTC verwendet wird, _müssen_ diese Informationen in-band signalisiert werden; daher darf der `sprop-parameter-sets` Parameter im SDP _nicht_ enthalten sein.

##### Parameter, die spezifiziert werden müssen

Diese Parameter müssen angegeben werden, wenn AVC in einer WebRTC-Verbindung verwendet wird.

- `profile-level-id`
  - : Alle WebRTC-Implementierungen sind verpflichtet, diesen Parameter in ihrem SDP anzugeben und zu interpretieren, um das vom Codec verwendete Unterprofil zu identifizieren. Der spezifische Wert, der gesetzt wird, ist nicht definiert; wichtig ist, dass der Parameter überhaupt verwendet wird. Dies ist nützlich zu wissen, da in {{RFC(6184)}} ("RTP Payload Format for H.264 Video") `profile-level-id` vollständig optional ist.

#### Weitere Anforderungen

Um die Umschaltung zwischen Porträt- und Landschaftsorientierungen zu unterstützen, können zwei Methoden verwendet werden. Die erste ist die Video-Orientation (CVO) Header-Erweiterung des RTP-Protokolls. Wenn dies jedoch nicht im SDP als unterstützt signalisiert wird, wird empfohlen, dass Browser Display Orientation SEI-Nachrichten unterstützen, obwohl dies nicht erforderlich ist.

Sofern nicht anders signalisiert, beträgt das Pixelverhältnis 1:1, was bedeutet, dass die Pixel quadratisch sind.

#### Weitere Hinweise

Das Payload-Format für AVC in WebRTC wird in {{RFC(6184, "RTP Payload Format for H.264 Video")}} beschrieben. AVC-Implementierungen für WebRTC sind verpflichtet, die speziellen "Filler Payload" und "Full Frame Freeze" SEI-Nachrichten zu unterstützen; diese werden verwendet, um den nahtlosen Wechsel zwischen mehreren Eingabeströmen zu ermöglichen.

## Unterstützte Audiocodecs

Die Audiocodecs, die laut {{RFC(7874)}} alle WebRTC-kompatiblen Browser unterstützen müssen, sind in der folgenden Tabelle aufgeführt.

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

Weitere Details zu WebRTC-spezifischen Überlegungen für jeden der oben aufgeführten Codecs finden Sie weiter unten.

Es ist hilfreich zu wissen, dass {{RFC(7874)}} mehr als nur eine Liste von Audiocodecs definiert, die ein WebRTC-kompatibler Browser unterstützen muss; es bietet auch Empfehlungen und Anforderungen für spezielle Audiofunktionen wie Echo-Unterdrückung, Rauschunterdrückung und Audio-Pegelung.

> [!NOTE]
> Die obige Liste zeigt die minimale erforderliche Gruppe von Codecs, die alle WebRTC-kompatiblen Endpunkte implementieren müssen. Ein bestimmter Browser kann auch andere Codecs unterstützen; jedoch besteht das Risiko, dass die plattform- und geräteübergreifende Kompatibilität gefährdet ist, wenn Sie andere Codecs verwenden, ohne sorgfältig sicherzustellen, dass die Unterstützung in allen Browsern, die Ihre Nutzer wählen könnten, existiert.

Zusätzlich zu den obligatorischen Audiocodecs unterstützen einige Browser auch zusätzliche Codecs. Diese sind in der folgenden Tabelle aufgeführt.

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

**[Internet Low Bitrate Codec](https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec)** (**iLBC**) ist ein quelloffener Schmalbandcodec, der von Global IP Solutions und jetzt Google entwickelt wurde und speziell für das Streaming von Sprach-Audio konzipiert ist. Google und einige andere Browserentwickler haben ihn für WebRTC übernommen.

Der **[Internet Speech Audio Codec](https://en.wikipedia.org/wiki/Internet_Speech_Audio_Codec)** (**iSAC**) ist ein weiterer Codec, der von Global IP Solutions entwickelt wurde und jetzt im Besitz von Google ist, der ihn quelloffen gemacht hat. Er wird von Google Talk, QQ und anderen Instant-Messaging-Clients verwendet und ist speziell für Sprachübertragungen ausgelegt, die in einem RTP-Stream verkapselt sind.

**[Komfortrauschen](https://en.wikipedia.org/wiki/Comfort_noise)** (**CN**) ist eine Form von künstlichem Hintergrundrauschen, das verwendet wird, um Lücken in einer Übertragung zu füllen, anstatt reines Schweigen zu verwenden. Dies hilft, einen störenden Effekt zu vermeiden, der auftreten kann, wenn Sprachaktivierung und ähnliche Funktionen dazu führen, dass ein Stream vorübergehend das Senden von Daten stoppt - eine Fähigkeit, die als diskontinuierliche Übertragung (DTX) bekannt ist. In {{RFC(3389)}} wird eine Methode zur Bereitstellung eines geeigneten Füllers während der Stille beschrieben.

Komfortrauschen wird mit G.711 verwendet und kann potenziell mit anderen Codecs verwendet werden, die keine eingebaute CN-Funktion haben. Opus hat beispielsweise seine eigene CN-Fähigkeit; daher wird die Verwendung von RFC 3389 CN mit dem Opus-Codec nicht empfohlen.

Ein Audiosender ist niemals verpflichtet, diskontinuierliche Übertragungen oder Komfortrauschen zu verwenden.

### Opus

Das Opus-Format, definiert durch {{RFC(6716)}}, ist das primäre Format für Audio in WebRTC. Das RTP-Payload-Format für Opus findet sich in {{RFC(7587)}}. Weitere allgemeine Informationen über Opus und seine Fähigkeiten sowie darüber, wie andere APIs Opus unterstützen können, finden Sie im [entsprechenden Abschnitt](/de/docs/Web/Media/Formats/Audio_codecs#opus) unseres [Leitfadens zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs).

Sowohl die Sprach- als auch die allgemeinen Audio-Modi sollten unterstützt werden. Die Skalierbarkeit und Flexibilität von Opus sind nützlich, wenn es darum geht, mit Audio umzugehen, das unterschiedliche Grade an Komplexität aufweist. Die Unterstützung von In-Band-Stereo-Signalen ermöglicht die Unterstützung von Stereo, ohne den Demultiplexing-Prozess zu verkomplizieren.

Der gesamte Bereich der von Opus unterstützten Bitraten (6 kbps bis 510 kbps) wird in WebRTC unterstützt, wobei die Bitrate dynamisch geändert werden kann. Höhere Bitraten verbessern in der Regel die Qualität.

#### Bitratenempfehlungen

Bei einer Frame-Größe von 20 Millisekunden zeigt die folgende Tabelle die empfohlenen Bitraten für verschiedene Medienarten.

| Medientyp                              | Empfohlener Bitratenbereich |
| -------------------------------------- | --------------------------- |
| Schmalband-Sprache (NB)                | 8 bis 12 kbps               |
| Breitband-Sprache (WB)                 | 16 bis 20 kbps              |
| Vollband-Sprache (FB)                  | 28 bis 40 kbps              |
| Vollband-monophonische Musik (FB mono) | 48 bis 64 kbps              |
| Vollband-Stereo-Musik (FB stereo)      | 64 bis 128 kbps             |

Die Bitrate kann jederzeit angepasst werden. Um Netzwerküberlastungen zu vermeiden, sollte die durchschnittliche Audiobitrate die verfügbare Netzbandbreite (abzüglich anderer bekannter oder erwarteter zusätzlicher Bandbreitenanforderungen) nicht überschreiten.

### G.711

G.711 definiert das Format für **Puls-Code-Modulation** (**PCM**)-Audio als eine Reihe von 8-Bit-Integer-Proben, die mit einer Abtastrate von 8.000 Hz entnommen werden und eine Bitrate von 64 kbps ergeben. Sowohl [µ-law](https://en.wikipedia.org/wiki/M-law) als auch [A-law](https://en.wikipedia.org/wiki/A-law)-Kodierungen sind zulässig.

G.711 ist [definiert von der ITU](https://www.itu.int/rec/T-REC-G.711-198811-I/en), und ihr Payload-Format ist in {{RFC(3551, "", "4.5.14")}} definiert.

WebRTC verlangt, dass G.711 8-Bit-Proben mit der standardmäßigen Bitrate von 64 kbps verwendet, obwohl G.711 einige andere Variationen unterstützt. Weder G.711.0 (verlustfreie Komprimierung), G.711.1 (Breitbandfähigkeit) noch andere Erweiterungen des G.711-Standards sind durch WebRTC vorgeschrieben.

Aufgrund ihrer niedrigen Abtastrate und Probenwerte wird die Audioqualität von G.711 allgemein nach modernen Standards als schlecht angesehen, obwohl sie ungefähr dem entspricht, was wie ein Festnetztelefon klingt. Sie wird in der Regel als kleinster gemeinsamer Nenner verwendet, um sicherzustellen, dass Browser eine Audioverbindung unabhängig von Plattformen und Browsern herstellen können, oder allgemein als Rückfallebene.

## Angeben und Konfigurieren von Codecs

### Abrufen der unterstützten Codecs

Da ein bestimmter Browser und eine Plattform unterschiedliche Verfügbarkeiten unter den potenziellen Codecs haben können – und möglicherweise mehrere Profile oder Stufen für einen bestimmten Codec unterstützen – ist der erste Schritt bei der Konfiguration von Codecs für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), die Liste der verfügbaren Codecs zu erhalten. Um dies zu tun, müssen Sie zunächst eine Verbindung herstellen, auf der die Liste erhalten werden kann.

Es gibt ein paar Möglichkeiten, dies zu tun. Der effizienteste Weg ist die Verwendung der statischen Methode [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) (oder des Äquivalents [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) für einen Empfänger), wobei der Medientyp als Eingabeparameter angegeben wird. Zum Beispiel, um die unterstützten Codecs für Video zu bestimmen, können Sie dies tun:

```js
codecList = RTCRtpSender.getCapabilities("video").codecs;
```

Jetzt ist `codecList` ein Array von [`codec`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#codecs)-Objekten, die jeweils eine Codec-Konfiguration beschreiben.
In der Liste werden auch Einträge für [Retransmission](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#rtx_retransmission) (RTX), [Redundant Coding](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#red_redundant_audio_data) (RED) und [Forward Error Correction](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#fec_forward_error_correction) (FEC) vorhanden sein.

Wenn die Verbindung gerade dabei ist, gestartet zu werden, können Sie das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignis verwenden, um das Sammeln von [ICE](/de/docs/Glossary/ICE)-Kandidaten zu überwachen, und dann die Liste abrufen.

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

Der Ereignishandler für `icegatheringstatechange` wird eingerichtet; darin prüfen wir, ob der ICE-Sammlungsstatus `complete` ist, was bedeutet, dass keine weiteren Kandidaten gesammelt werden. Die Methode [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) wird aufgerufen, um eine Liste aller durch die Verbindung verwendeten [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte zu erhalten.

Mit dieser in der Hand durchlaufen wir die Liste der Sender und suchen nach dem ersten, dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angibt, dass sein [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, was darauf hinweist, dass die Daten der Spur Videomedien sind.
Wir rufen dann die Methode `getParameters()` des Senders auf und setzen `codecList` auf die `codecs`-Eigenschaft im zurückgegebenen Objekt und kehren dann zum Aufrufer zurück.

Wenn keine Videospur gefunden wird, setzen wir `codecList` auf `null`.

Bei der Rückkehr ist `codecList` entweder `null`, was anzeigt, dass keine Video-Tracks gefunden wurden, oder es ist ein Array von [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekten, die jeweils eine zulässige Codec-Konfiguration beschreiben. Besonders wichtig in diesen Objekten: die [`payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType)-Eigenschaft, die einen einzelnen Bytewert darstellt, der die beschriebene Konfiguration eindeutig identifiziert.

> [!NOTE]
> Die beiden hier gezeigten Methoden zum Erhalten von Codec-Listen verwenden unterschiedliche Ausgabetypen in ihren Codec-Listen. Beachten Sie dies bei der Verwendung der Ergebnisse.

### Anpassen der Codec-Liste

Sobald Sie eine Liste der verfügbaren Codecs haben, können Sie diese ändern und dann die überarbeitete Liste an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) senden, um die Codec-Liste umzugestalten. Dies ändert die Präferenzreihenfolge der Codecs und ermöglicht es Ihnen, WebRTC anzugeben, einen anderen Codec über alle anderen zu bevorzugen.

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

In diesem Beispiel nimmt die Funktion `changeVideoCodec()` als Eingabe den MIME-Typ des Codecs, den Sie verwenden möchten. Der Code beginnt damit, eine Liste aller [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)'s Transceiver zu erhalten.

Dann ermitteln wir für jeden Transceiver die Art der Medien, die der Transceiver vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)'s Track's [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) repräsentiert wird. Wir erhalten auch die Listen aller von dem Browser unterstützten Codecs zum Senden und Empfangen von Video, indem wir die statische Methode `getCapabilities()` sowohl von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) verwenden.

Wenn das Medium Video ist, rufen wir eine Methode namens `preferCodec()` für die Codec-Listen sowohl des Senders als auch des Empfängers auf; diese Methode ordnet die Codec-Liste nach unseren Wünschen neu (siehe unten).

Schließlich rufen wir die Methode [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) des [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) auf, um anzugeben, dass die angegebenen Sende- und Empfangscodecs erlaubt sind, in der neu arrangierten Reihenfolge.

Das wird für jeden Transceiver auf der `RTCPeerConnection` getan; sobald alle Transceiver aktualisiert sind, rufen wir den [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignishandler auf, der ein neues Angebot erstellt, die lokale Beschreibung aktualisiert, das Angebot an den entfernten Peer sendet und so weiter, wodurch die Neuverhandlung der Verbindung ausgelöst wird.

Das von dem obigen Beispiel aufgerufene `preferCodec()` Funktion sieht so aus, um einen bestimmten Codec an die Spitze der Liste zu setzen (damit er während der Verhandlungen priorisiert wird):

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

Dieser Code teilt einfach die Codec-Liste in zwei Arrays auf: eines mit Codecs, deren MIME-Typ mit dem vom `mimeType`-Parameter angegebenen übereinstimmt, und das andere mit allen anderen Codecs. Sobald die Liste aufgeteilt ist, werden sie wieder zusammengefügt, wobei die Einträge, die mit dem gegebenen `mimeType` übereinstimmen, zuerst stehen, gefolgt von allen anderen Codecs. Die neu angeordnete Liste wird dann an den Aufrufer zurückgegeben.

## Standard-Codecs

Sofern nicht anders angegeben, werden die Standard- oder genauer die bevorzugten Codecs, die von der Implementierung von WebRTC in jedem Browser angefordert werden, in der Tabelle unten angezeigt.

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

## Die richtige Auswahl des Codecs

Bevor Sie einen Codec auswählen, der nicht zu den obligatorischen Codecs (VP8 oder AVC für Video und Opus oder PCM für Audio) gehört, sollten Sie die potenziellen Nachteile ernsthaft in Betracht ziehen: Insbesondere können nur diese Codecs im Allgemeinen davon ausgegangen werden, dass sie auf allen Geräten verfügbar sind, die WebRTC unterstützen.

Wenn Sie einen anderen Codec als die obligatorischen bevorzugen, sollten Sie zumindest die Möglichkeit eines Fallbacks auf einen der obligatorischen Codecs erlauben, wenn die Unterstützung für den bevorzugten Codec nicht verfügbar ist.

### Audio

Wenn es verfügbar ist und das Audio, das Sie senden möchten, eine Abtastrate von mehr als 8 kHz hat, sollten Sie ernsthaft in Betracht ziehen, Opus als Ihren Hauptcodec zu verwenden. Für sprachbasierte Verbindungen in einer eingeschränkten Umgebung kann die Verwendung von G.711 bei einer Abtastrate von 8 kHz eine akzeptable Erfahrung für Konversation bieten, aber typischerweise werden Sie G.711 als Fallback-Option verwenden, da es andere Optionen gibt, die effizienter sind und besser klingen, wie Opus in seinem Schmalbandmodus.

### Video

Es gibt eine Reihe von Faktoren, die bei der Entscheidung für einen Video-Codec (oder eine Gruppe von Codecs) berücksichtigt werden müssen.

#### Lizenzbedingungen

Bevor Sie einen Video-Codec auswählen, sollten Sie sich über etwaige Lizenzanforderungen im Klaren sein, die um den ausgewählten Codec bestehen könnten. Informationen über mögliche Lizenzierungsprobleme finden Sie in unserem Haupt-[Leitfaden zu Video-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Video_codecs). Von den beiden obligatorischen Codecs für Video - VP8 und AVC/H.264 - ist nur VP8 völlig lizenzfrei. Wenn Sie AVC auswählen, stellen Sie sicher, dass Sie die möglicherweise erforderlichen Gebühren kennen; die Patentinhaber haben jedoch allgemein gesagt, dass die meisten typischen Website-Entwickler sich keine Sorgen machen müssen, die Lizenzgebühren zu zahlen, die üblicherweise eher auf die Entwickler der Kodierungs- und Dekodierungssoftware abzielen.

> [!WARNING]
> Die Informationen hier stellen _keine_ rechtliche Beratung dar! Stellen Sie sicher, dass Sie Ihr Haftungsrisiko bestätigen, bevor Sie endgültige Entscheidungen treffen, wenn Potenzial für Lizenzfragen besteht.

#### Leistungsanforderungen und Batterielebensdauer

Ein weiterer zu berücksichtigender Faktor – insbesondere auf mobilen Plattformen – ist die Auswirkung eines Codecs auf die Batterielebensdauer. Wenn ein Codec auf einer bestimmten Plattform in Hardware gehandhabt wird, wird dieser Codec wahrscheinlich eine viel bessere Batterielebensdauer und weniger Wärmeentwicklung ermöglichen.

Zum Beispiel hat Safari für iOS und iPadOS WebRTC mit AVC eingeführt, nur unterstützt. AVC hat den Vorteil, auf iOS- und iPadOS-Geräten in Hardware kodiert und dekodiert werden zu können. Safari 12.1 führte die Unterstützung von VP8 innerhalb von IRC ein, was die Interoperabilität verbessert, aber zu einem Kosten - VP8 hat keine Hardwareunterstützung auf iOS-Geräten, so dass seine Verwendung eine erhöhte Prozessorbelastung und eine verkürzte Batterielebensdauer verursacht.

#### Leistung

Zum Glück performen VP8 und AVC aus der Endnutzerperspektive ähnlich und sind gleichermaßen geeignet für den Einsatz in Videokonferenzen und anderen WebRTC-Lösungen. Die endgültige Entscheidung liegt bei Ihnen. Egal was Sie wählen, stellen Sie sicher, dass Sie die Informationen in diesem Artikel über alle besonderen Konfigurationsprobleme, mit denen Sie sich für diesen Codec auseinandersetzen müssen, lesen.

Beachten Sie, dass die Wahl eines Codecs, der nicht auf der Liste der obligatorischen Codecs steht, wahrscheinlich die Gefahr birgt, einen Codec auszuwählen, der von einem Browser, den Ihre Benutzer vielleicht bevorzugen, nicht unterstützt wird. Lesen Sie den Artikel [Umgang mit Medienunterstützungsproblemen im Webinhalt](/de/docs/Web/Media/Formats/Support_issues), um mehr darüber zu erfahren, wie Sie Unterstützung für Ihre bevorzugten Codecs anbieten können und dennoch in der Lage sind, Fallback für Browser zu bieten, die diesen Codec nicht implementieren.

## Sicherheitsimplikationen

Es gibt interessante potenzielle Sicherheitsprobleme, die beim Auswählen und Konfigurieren von Codecs auftreten können. WebRTC-Video ist mit Datagramm-Transport-Layer-Sicherheit ([DTLS](/de/docs/Glossary/DTLS)) geschützt, aber es ist theoretisch möglich, dass eine motivierte Partei die Menge der Änderungen, die von Frame zu Frame auftreten, ableiten kann, wenn variable Bitrate (VBR) Codecs verwendet werden, indem sie die Bitrate des Streams und deren Änderung im Lauf der Zeit überwacht. Dies könnte potenziell einem schlechten Akteur ermöglichen, etwas über den Inhalt des Streams abzuleiten, angesichts der Zu- und Abnahme der Bitrate.

Weitere Informationen zu Sicherheitsüberlegungen bei der Verwendung von AVC in WebRTC finden Sie in {{RFC(6184, "RTP Payload Format for H.264 Video: Security Considerations", 9)}}.

## RTP-Payload-Format Medientypen

Es kann nützlich sein, auf die [IANA](/de/docs/Glossary/IANA)-Liste der [RTP](/de/docs/Glossary/RTP)-Payload-Format Medientypen zu verweisen; dies ist eine vollständige Liste der MIME-Medientypen, die für die _potentielle_ Verwendung in RTP-Streams definiert sind, wie sie in WebRTC verwendet werden. Die meisten von diesen werden in WebRTC-Kontexten nicht verwendet, aber die Liste kann dennoch nützlich sein.

Siehe auch {{RFC(4855)}}, das die Mediatypen-Registrierung behandelt.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Leitfaden zu Video-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Video_codecs)
- [Leitfaden zu Audio-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs)
- [Digitale Videokonzepte](/de/docs/Web/Media/Formats/Video_concepts)
- [Digitale Audiokonzepte](/de/docs/Web/Media/Formats/Audio_concepts)
