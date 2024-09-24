---
title: Von WebRTC verwendete Codecs
slug: Web/Media/Formats/WebRTC_codecs
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Die [WebRTC API](/de/docs/Web/API/WebRTC_API) ermöglicht es, Websites und Apps zu erstellen, die es Nutzern erlauben, in Echtzeit zu kommunizieren und dabei Audio und/oder Video sowie optionale Daten und andere Informationen zu verwenden. Damit die Kommunikation funktioniert, müssen sich die beiden Geräte auf einen gemeinsam verstandenen Codec für jeden Track einigen, um die Medien korrekt übertragen und darstellen zu können. Dieser Leitfaden gibt einen Überblick über die Codecs, die Browser implementieren müssen, sowie über andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

## Containerlose Medien

WebRTC verwendet reine {{domxref("MediaStreamTrack")}}-Objekte für jeden Track, der von einem Peer zum anderen geteilt wird, ohne einen Container oder sogar ein {{domxref("MediaStream")}}, das mit den Tracks verknüpft ist. Welche Codecs in diesen Tracks verwendet werden können, ist in der WebRTC-Spezifikation nicht vorgegeben. Trotzdem spezifiziert {{RFC(7742)}}, dass alle WebRTC-kompatiblen Browser [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8) und den Constrained Baseline-Profil von [H.264](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) für Video unterstützen müssen, und {{RFC(7874)}} spezifiziert, dass Browser mindestens den [Opus](/de/docs/Web/Media/Formats/Audio_codecs#opus) Codec sowie die PCMA- und PCMU-Formate von [G.711](/de/docs/Web/Media/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies) unterstützen müssen.

Diese beiden RFCs legen auch Optionen fest, die für jeden Codec unterstützt werden müssen, sowie spezifische Benutzerkomfortfeatures wie Echo-Kompensation. Dieser Leitfaden gibt einen Überblick über die Codecs, die Browser implementieren müssen, sowie über andere Codecs, die einige oder alle Browser für WebRTC unterstützen.

Während Kompression bei der Verarbeitung von Medien im Web immer notwendig ist, ist sie bei Videokonferenzen besonders wichtig, um sicherzustellen, dass die Teilnehmer ohne Verzögerungen oder Unterbrechungen kommunizieren können. Zweitrangig ist die Notwendigkeit, Video und Audio zu synchronisieren, sodass Bewegungen und alle zusätzlichen Informationen (wie Folien oder Projektionen) zur gleichen Zeit wie das entsprechende Audio dargestellt werden.

## Allgemeine Codec-Anforderungen

Bevor spezifische Fähigkeiten und Anforderungen von Codecs betrachtet werden, gibt es einige allgemeine Anforderungen, die von _jeder_ Codec-Konfiguration erfüllt werden müssen, wenn sie mit WebRTC verwendet wird.

Sofern im {{Glossary("SDP")}} nichts anderes signalisiert wird, muss der Webbrowser, der einen WebRTC-Videostream empfängt, in der Lage sein, Video mit 20 FPS bei einer minimalen Auflösung von 320 Pixeln Breite und 240 Pixeln Höhe zu verarbeiten. Es wird empfohlen, dass Video mit einer Bildrate und Größe nicht darunter kodiert wird, da dies im Wesentlichen die Untergrenze dessen ist, was WebRTC in der Regel verarbeiten soll.

SDP unterstützt eine codec-unabhängige Möglichkeit, bevorzugte Videoauflösungen anzugeben ({{RFC(6236)}}). Dies geschieht durch das Senden eines `a=imageattr` SDP-Attributs, um die maximale akzeptable Auflösung anzuzeigen. Der Sender muss diesen Mechanismus jedoch nicht unterstützen, sodass Sie darauf vorbereitet sein müssen, Medien in einer anderen Auflösung als der angeforderten zu empfangen. Über diese einfache Anfrage nach maximaler Auflösung hinaus können spezifische Codecs weitere Möglichkeiten bieten, um bestimmte Medienkonfigurationen zu erfragen.

## Unterstützte Video-Codec

WebRTC legt eine Mindestauswahl an Codecs fest, die alle konformen Browser unterstützen müssen. Einige Browser können auch die Verwendung anderer Codecs zulassen.

Unten sind die Video-Codec aufgelistet, die in jedem vollständig WebRTC-konformen Browser _erforderlich_ sind, sowie die Profile, die erforderlich sind, und die Browser, die diese Anforderung tatsächlich erfüllen.

<table class="standard-table">
  <caption>
    Obligatorische Video-Codecs
  </caption>
  <thead>
    <tr>
      <th scope="row">Codec-Name</th>
      <th scope="col">Profile(s)</th>
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
          Dies ist auf eine Änderung der Anforderungen des Google Play Stores zurückzuführen, die verhindern,
          dass Firefox den zum Verarbeiten von H.264 in WebRTC-Verbindungen benötigten OpenH264-Codec herunterlädt und installiert. Siehe
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

Für Details zu WebRTC-bezogenen Überlegungen für jeden Codec siehe die unten stehenden Unterabschnitte durch die Links auf den Namen jedes Codecs.

Vollständige Details zu den Videocodecs und Konfigurationen, die von WebRTC unterstützt werden müssen, finden Sie in {{RFC(7742, "WebRTC Video Processing and Codec Requirements")}}. Es ist erwähnenswert, dass die RFC eine Vielzahl von video-bezogenen Anforderungen abdeckt, einschließlich Farbräume (sRGB ist der bevorzugte, aber nicht erforderliche Standardfarbraum), Empfehlungen für Webcam-Verarbeitungsfunktionen (automatischer Fokus, automatische Weißabgleiche, automatisches Lichtniveau) usw.

> [!NOTE]
> Diese Anforderungen gelten für Webbrowser und andere vollständig WebRTC-konforme Produkte. Nicht-WebRTC-Produkte, die zu einem gewissen Grad mit WebRTC kommunizieren können, unterstützen diese Codecs möglicherweise nicht, obwohl die Spezifikationsdokumente dazu ermutigen.

Zusätzlich zu den obligatorischen Codecs unterstützen einige Browser auch zusätzliche Codecs. Diese sind in der folgenden Tabelle aufgeführt.

<table class="standard-table">
  <caption>
    Andere Video-Codecs
  </caption>
  <thead>
    <tr>
      <th scope="row">Codec-Name</th>
      <th scope="col">Profile(s)</th>
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

VP8, das wir [allgemein beschreiben](/de/docs/Web/Media/Formats/Video_codecs#vp8) im Hauptleitfaden zu [auf dem Web verwendeten Videocodecs](/de/docs/Web/Media/Formats/Video_codecs), hat einige spezifische Anforderungen, die bei der Verwendung zur Kodierung oder Dekodierung eines Videotracks in einer WebRTC-Verbindung befolgt werden müssen.

Sofern nicht anders signalisiert, wird VP8 quadratische Pixel verwenden (d. h. Pixel mit einem {{glossary("aspect ratio")}} von 1:1).

#### Weitere Anmerkungen

Das Netzwerk-Payload-Format für die gemeinsame Nutzung von VP8 über {{Glossary("RTP")}} (wie bei Verwendung von WebRTC) ist beschrieben in {{RFC(7741, "RTP Payload Format for VP8 Video")}}.

### AVC / H.264

Die Unterstützung des Constrained Baseline (CB) Profils von AVC ist in allen vollständig konformen WebRTC-Implementierungen erforderlich. CB ist ein Teil des Hauptprofils und wurde speziell für Anwendungen mit geringer Komplexität und niedriger Latenz wie Mobilvideo und Videokonferenzen sowie für Plattformen mit geringeren Videoverarbeitungsfähigkeiten entwickelt.

Unser [Überblick über AVC](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) und seine Eigenschaften finden Sie im Hauptleitfaden für Videocodecs.

#### Besondere Unterstützungsanforderungen für Parameter

AVC bietet eine Vielzahl von Parametern zur Steuerung optionaler Werte. Um die Zuverlässigkeit der Medienfreigabe über WebRTC-Plattformen und -Browser hinweg zu verbessern, müssen WebRTC-Endpunkte, die AVC unterstützen, bestimmte Parameter auf bestimmte Weise behandeln. Manchmal bedeutet dies, dass ein Parameter unterstützt werden muss (oder nicht unterstützt werden darf). Manchmal bedeutet es, dass ein spezifischer Wert für einen Parameter erforderlich ist oder dass eine bestimmte Wertemenge erlaubt sein muss. Und manchmal sind die Anforderungen komplexer.

##### Parameter, die nützlich, aber nicht erforderlich sind

Diese Parameter müssen vom WebRTC-Endpunkt nicht unterstützt werden und ihre Nutzung ist auch nicht erforderlich. Ihre Verwendung kann das Benutzererlebnis auf verschiedene Weise verbessern, muss jedoch nicht verwendet werden. Tatsächlich sind einige dieser Parameter recht kompliziert zu verwenden.

- `max-br`
  - : Wenn angegeben und von der Software unterstützt, gibt der Parameter `max-br` die maximale Videobitrate in Einheiten von 1.000 bps für VCL und 1.200 bps für NAL an. Einzelheiten dazu finden Sie auf [Seite 47 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-47).
- `max-cpb`
  - : Wenn angegeben und von der Software unterstützt, gibt `max-cpb` die maximale Größe des kodierten Bildpuffers an. Dies ist ein ziemlich komplizierter Parameter, dessen Einheitsgröße variieren kann. Siehe [Seite 45 von RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-45) für Details.
- `max-dpb`
  - : Wenn angegeben und unterstützt, gibt `max-dpb` die maximale Größe des dekodierten Bildpuffers an, angegeben in Einheiten von 8/3 Makroblöcken. Siehe [RFC 6184, Seite 46](https://datatracker.ietf.org/doc/html/rfc6184#page-46) für weitere Details.
- `max-fs`
  - : Wenn angegeben und von der Software unterstützt, spezifiziert `max-fs` die maximale Größe eines einzelnen Videoframes, angegeben als Anzahl der Makroblöcke.
- `max-mbps`
  - : Wenn angegeben und von der Software unterstützt, ist dieser Wert eine ganze Zahl, die die maximale Rate angibt, mit der Makroblöcke pro Sekunde verarbeitet werden sollten (in Makroblöcken pro Sekunde).
- `max-smbps`
  - : Wenn angegeben und von der Software unterstützt, gibt dieser Parameter eine ganze Zahl an, die die maximale statische Makroblockverarbeitungsrate in statischen Makroblöcken pro Sekunde angibt (unter der hypothetischen Annahme, dass alle Makroblöcke statische Makroblöcke sind).

##### Parameter mit spezifischen Anforderungen

Diese Parameter sind möglicherweise erforderlich oder auch nicht, haben jedoch besondere Anforderungen bei der Verwendung.

- `packetization-mode`
  - : Alle Endpunkte müssen Modus 1 (nicht-interleaved Mode) unterstützen. Die Unterstützung anderer Packetisierungsmodi ist optional und der Parameter selbst muss nicht angegeben werden.
- `sprop-parameter-sets`
  - : Sequenz- und Bildinformationen für AVC können entweder inline oder out-of-band gesendet werden. Wenn AVC mit WebRTC verwendet wird, _muss_ diese Information inline signalisiert werden; der Parameter `sprop-parameter-sets` darf daher _nicht_ im SDP enthalten sein.

##### Parameter, die angegeben werden müssen

Diese Parameter müssen bei der Verwendung von AVC in einer WebRTC-Verbindung angegeben werden.

- `profile-level-id`
  - : Alle WebRTC-Implementierungen sind _verpflichtet_, diesen Parameter in ihrem SDP zu spezifizieren und zu interpretieren, der das Unterprofil identifiziert, das vom Codec verwendet wird. Der spezifische Wert, der gesetzt wird, ist nicht definiert; wichtig ist, dass der Parameter überhaupt verwendet wird. Dies ist nützlich zu wissen, da im {{RFC(6184)}} ("RTP Payload Format for H.264 Video") `profile-level-id` vollständig optional ist.

#### Andere Anforderungen

Um die Unterstützung des Wechsels zwischen Porträt- und Landschaftsorientierung zu ermöglichen, gibt es zwei Methoden, die verwendet werden können. Die erste ist die Videoorientierung (CVO) Header-Erweiterung für das RTP-Protokoll. Wird dies jedoch nicht im SDP als unterstützt signalisiert, wird empfohlen, dass Browser Display Orientation SEI-Nachrichten unterstützen, obwohl dies nicht erforderlich ist.

Sofern nichts anderes signalisiert wird, beträgt das Pixel-Seitenverhältnis 1:1, was darauf hinweist, dass die Pixel quadratisch sind.

#### Weitere Anmerkungen

Das Payload-Format, das für AVC in WebRTC verwendet wird, ist in {{RFC(6184, "RTP Payload Format for H.264 Video")}} beschrieben. AVC-Implementierungen für WebRTC müssen die speziellen "Füller-Payload"- und "Vollframe-Freeze"-SEI-Nachrichten unterstützen; diese werden verwendet, um nahtlos zwischen mehreren Eingabeströmen zu wechseln.

## Unterstützte Audio-Codecs

Die durch {{RFC(7874)}} vorgeschriebenen Audio-Codecs, die alle WebRTC-kompatiblen Browser unterstützen müssen, sind in der Tabelle unten dargestellt.

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

Siehe unten für weitere Details zu WebRTC-spezifischen Überlegungen, die für jeden der oben aufgeführten Codecs existieren.

Es ist nützlich zu beachten, dass {{RFC(7874)}} mehr als eine Liste von Audio-Codecs definiert, die ein WebRTC-konformer Browser unterstützen muss; es gibt auch Empfehlungen und Anforderungen für spezielle Audiofunktionen wie Echo-Kompensation, Rauschunterdrückung und Audio-Leveling.

> [!NOTE]
> Die obige Liste legt die Mindestanforderung an Codecs fest, die alle WebRTC-kompatiblen Endpunkte implementieren müssen. Ein bestimmter Browser kann auch andere Codecs unterstützen; jedoch kann die plattformübergreifende und geräteübergreifende Kompatibilität gefährdet sein, wenn Sie andere Codecs verwenden, ohne sorgfältig zu überprüfen, dass die Unterstützung in allen Browsern vorhanden ist, die Ihre Benutzer wählen könnten.

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

Der **[Internet Low Bitrate Codec](https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec)** (**iLBC**) ist ein quelloffener Schmalband-Codec, der von Global IP Solutions und jetzt von Google entwickelt wurde, speziell für das Streaming von Sprach-Audio. Google und einige andere Browserentwickler haben es für WebRTC übernommen.

Der **[Internet Speech Audio Codec](https://en.wikipedia.org/wiki/Internet_Speech_Audio_Codec)** (**iSAC**) ist ein weiterer von Global IP Solutions und jetzt von Google entwickelter Codec, der quelloffen ist. Er wird von Google Talk, QQ und anderen Instant-Messaging-Clients verwendet und ist speziell für Sprachübertragungen konzipiert, die in einem RTP-Stream gekapselt sind.

**[Komfortgeräusch](https://en.wikipedia.org/wiki/Comfort_noise)** (**CN**) ist eine Form von künstlichem Hintergrundgeräusch, das verwendet wird, um Lücken in einer Übertragung zu füllen, anstatt reines Schweigen zu senden. Dies hilft, einen schroffen Effekt zu vermeiden, der auftreten kann, wenn Sprachaktivierung und ähnliche Funktionen dazu führen, dass ein Stream temporär aufhört, Daten zu senden - eine Fähigkeit genannt Diskontinuierliche Übertragung (DTX). In {{RFC(3389)}} wird eine Methode beschrieben, um einen geeigneten Ersatz während der Stille zu verwenden.

Komfortgeräusch wird mit G.711 verwendet und kann potenziell mit anderen Codecs verwendet werden, die kein eingebautes CN-Feature haben. Opus hat zum Beispiel seine eigene CN-Fähigkeit; daher wird die Verwendung von RFC 3389 CN mit dem Opus-Codec nicht empfohlen.

Ein Audio-Sender ist niemals verpflichtet, diskontinuierliche Übertragung oder Komfortgeräusch zu verwenden.

### Opus

Das Opus-Format, definiert durch {{RFC(6716)}} ist das primäre Format für Audio in WebRTC. Das RTP-Payload-Format für Opus ist in {{RFC(7587)}} zu finden. Weitere allgemeine Informationen über Opus und seine Fähigkeiten sowie darüber, wie andere APIs Opus unterstützen können, finden Sie im [entsprechenden Abschnitt](/de/docs/Web/Media/Formats/Audio_codecs#opus) unseres [Leitfadens zu Audio-Codecs, die auf dem Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs).

Sowohl der Sprach- als auch der allgemeine Audiomodus sollten unterstützt werden. Die Skalierbarkeit und Flexibilität von Opus sind nützlich, wenn man mit Audio zu tun hat, das unterschiedliche Komplexitätsgrade haben kann. Die Unterstützung von Stereo-Signalen in Opus ermöglicht es, Stereo zu unterstützen, ohne den Demultiplex-Prozess zu komplizieren.

Der gesamte Bereich der von Opus unterstützten Bitraten (6 kbps bis 510 kbps) wird in WebRTC unterstützt, wobei die Bitrate dynamisch verändert werden kann. Höhere Bitraten verbessern typischerweise die Qualität.

#### Bitrateneempfehlungen

Bei einer Bildgröße von 20 Millisekunden zeigt die folgende Tabelle die empfohlenen Bitraten für verschiedene Medienformen.

| Medientyp                          | Empfohlener Bitratenbereich |
| ---------------------------------- | --------------------------- |
| Schmalband-Sprache (NB)            | 8 bis 12 kbps               |
| Breitband-Sprache (WB)             | 16 bis 20 kbps              |
| Vollband-Sprache (FB)              | 28 bis 40 kbps              |
| Vollband monaurale Musik (FB mono) | 48 bis 64 kbps              |
| Vollband Stereo Musik (FB stereo)  | 64 bis 128 kbps             |

Die Bitrate kann jederzeit angepasst werden. Um Netzüberlastung zu vermeiden, sollte die durchschnittliche Audiobitrate die verfügbare Netzbandbreite (abzüglich aller anderen bekannten oder zu erwartenden zusätzlichen Bandbreitenanforderungen) nicht überschreiten.

### G.711

G.711 definiert das Format für **Puls-Code-Modulation** (**PCM**)-Audio als eine Serie von 8-Bit-Ganzzahlproben, die mit einer Abtastrate von 8.000 Hz aufgenommen werden und eine Bitrate von 64 kbps ergeben. Sowohl [µ-law](https://en.wikipedia.org/wiki/M-law) als auch [A-law](https://en.wikipedia.org/wiki/A-law)-Kodierungen sind erlaubt.

G.711 ist [von der ITU definiert](https://www.itu.int/rec/T-REC-G.711-198811-I/en) und sein Payload-Format ist definiert in {{RFC(3551, "", "4.5.14")}}.

WebRTC erfordert, dass G.711 8-Bit Proben mit der Standardrate von 64 kbps verwendet, obwohl G.711 einige andere Variationen unterstützt. Weder G.711.0 (verlustfreie Kompression), G.711.1 (Breitbandfähigkeit) noch andere Erweiterungen des G.711-Standards sind von WebRTC vorgeschrieben.

Angesichts seiner niedrigen Abtastrate und Samplegröße wird G.711-Audioqualität nach modernen Standards allgemein als schlecht angesehen, obwohl es ungefähr dem entspricht, wie sich ein Festnetztelefon anhört. Es wird im Allgemeinen als geringster gemeinsamer Nenner verwendet, um sicherzustellen, dass Browser eine Audioverbindung unabhängig von Plattformen und Browsern herstellen können, oder als allgemeine Fallback-Option.

## Spezifizieren und Konfigurieren von Codecs

### Die unterstützten Codecs erhalten

Da ein bestimmter Browser und eine bestimmte Plattform über unterschiedliche Verfügbarkeit unter den potenziellen Codecs verfügen kann und möglicherweise mehrere Profile oder Level für einen bestimmten Codec unterstützt werden, ist der erste Schritt bei der Konfiguration von Codecs für eine {{domxref("RTCPeerConnection")}}, die Liste der verfügbaren Codecs zu erhalten. Um dies zu tun, müssen Sie zuerst eine Verbindung herstellen, auf der die Liste abgerufen werden kann.

Es gibt ein paar Möglichkeiten, dies zu tun. Der effizienteste Weg ist die Verwendung der statischen Methode {{domxref("RTCRtpSender/getCapabilities_static", "RTCRtpSender.getCapabilities()")}} (oder das Äquivalent {{domxref("RTCRtpReceiver/getCapabilities_static", "RTCRtpReceiver.getCapabilities()")}} für einen Empfänger), wobei der Medientyp als Eingabeparameter angegeben wird. Um beispielsweise die unterstützten Codecs für Video zu bestimmen, können Sie dies tun:

```js
codecList = RTCRtpSender.getCapabilities("video").codecs;
```

Jetzt ist `codecList` ein Array von [`codec`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#codecs)-Objekten, von denen jedes eine Codec-Konfiguration beschreibt.
Auch in der Liste werden Einträge für [Retransmission](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#rtx_retransmission) (RTX), [Redundant Coding](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#red_redundant_audio_data) (RED) und [Forward Error Correction](/de/docs/Web/API/RTCRtpSender/getCapabilities_static#fec_forward_error_correction) (FEC) vorhanden sein.

Wenn die Verbindung gerade gestartet wird, können Sie das Ereignis {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}} verwenden, um auf das Ende der Sammlung von {{Glossary("ICE")}}-Kandidaten zu warten, und dann die Liste abrufen.

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

Der Ereignishandler für `icegatheringstatechange` wird eingerichtet; darin sehen wir nach, ob der ICE-Gathering-Status `complete` ist, was anzeigt, dass keine weiteren Kandidaten gesammelt werden. Die Methode {{domxref("RTCPeerConnection.getSenders()")}} wird aufgerufen, um eine Liste aller durch die Verbindung verwendeten {{domxref("RTCRtpSender")}}-Objekte zu erhalten.

Mit dieser in der Hand durchlaufen wir die Liste der Sender und suchen nach dem ersten, dessen {{domxref("MediaStreamTrack")}} angibt, dass sein {{domxref("MediaStreamTrack.kind", "kind")}} `video` ist, was darauf hinweist, dass die Daten des Tracks Videomedien sind.
Wir rufen dann die {{domxref("RTCRtpSender.getParameters", "getParameters()")}}-Methode des Senders auf und setzen `codecList` auf die `codecs`-Eigenschaft im zurückgegebenen Objekt. Dann kehren wir zum Aufrufer zurück.

Wenn kein Videotrack gefunden wird, setzen wir `codecList` auf `null`.

Beim Zurückkehren ist `codecList` entweder `null`, um anzuzeigen, dass keine Videotracks gefunden wurden, oder es ist ein Array von {{domxref("RTCCodecStats")}}-Objekten, von denen jedes eine erlaubte Codec-Konfiguration beschreibt. Von besonderer Wichtigkeit in diesen Objekten ist die {{domxref("RTCCodecStats.payloadType", "payloadType")}}-Eigenschaft, ein einbyte Wert, der die beschriebene Konfiguration eindeutig identifiziert.

> [!NOTE]
> Die beiden hier gezeigten Methoden zum Abrufen von Codec-Listen verwenden unterschiedliche Ausgabetypen in ihren Codec-Listen. Seien Sie sich dies bewusst, wenn Sie die Ergebnisse verwenden.

### Die Codec-Liste anpassen

Sobald Sie eine Liste der verfügbaren Codecs haben, können Sie diese ändern und dann die überarbeitete Liste an {{domxref("RTCRtpTransceiver.setCodecPreferences()")}} senden, um die Codec-Liste neu zu ordnen. Dies ändert die Priorisierungsreihenfolge der Codecs, sodass Sie WebRTC mitteilen können, dass ein anderer Codec gegenüber allen anderen bevorzugt werden soll.

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

In diesem Beispiel nimmt die Funktion `changeVideoCodec()` als Eingabe den MIME-Typ des Codecs an, den Sie verwenden möchten. Der Code startet mit dem Abrufen einer Liste aller Transceiver der {{domxref("RTCPeerConnection")}}.

Dann erhalten wir für jeden Transceiver die Art der Medien, die der Transceiver vom {{domxref("RTCRtpSender")}}'s Track's {{domxref("MediaStreamTrack.kind", "kind")}} repräsentiert. Wir erhalten auch die Listen aller vom Browser unterstützten Codecs sowohl für das Senden als auch für das Empfangen von Video mit der statischen Methode `getCapabilities()` von sowohl {{domxref("RTCRtpSender")}} als auch {{domxref("RTCRtpReceiver")}}.

Wenn die Medien Video sind, rufen wir eine Methode namens `preferCodec()` sowohl für die Codec-Listen des Senders als auch des Empfängers auf; diese Methode ordnet die Codec-Liste so, wie wir es möchten (siehe unten).

Zum Schluss rufen wir die {{domxref("RTCRtpTransceiver")}}'s {{domxref("RTCRtpTransceiver.setCodecPreferences", "setCodecPreferences()")}} Methode auf, um anzugeben, dass die angegebenen Sende- und Empfangs-Codecs in der neu angeordneten Reihenfolge zulässig sind.

Dies wird für jeden Transceiver auf der `RTCPeerConnection` getan; sobald alle Transceiver aktualisiert wurden, rufen wir den {{domxref("RTCPeerConnection.negotiationneeded_event", "onnegotiationneeded")}}-Ereignishandler auf, der ein neues Angebot erstellt, die lokale Beschreibung aktualisiert, das Angebot an den Remote-Peer sendet usw., wodurch eine erneute Verhandlung der Verbindung ausgelöst wird.

Die von dem oben genannten Code aufgerufene Funktion `preferCodec()` sieht so aus, um einen bestimmten Codec an die Spitze der Liste zu setzen (um ihn während der Verhandlung zu priorisieren):

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

Dieser Code teilt die Codec-Liste in zwei Arrays: eines, das Codecs enthält, deren MIME-Typ mit dem angegebenen `mimeType`-Parameter übereinstimmt, und das andere mit allen anderen Codecs. Sobald die Liste aufgeteilt ist, werden sie mit den Einträgen, die dem gegebenen `mimeType` entsprechen, zuerst und gefolgt von allen anderen Codecs erneut zusammengefügt. Die neu angeordnete Liste wird dann an den Aufrufer zurückgegeben.

## Standardcodecs

Sofern nicht anders angegeben, sind die in der folgenden Tabelle gezeigten Standard- oder, genauer gesagt bevorzugten, Codecs, die von der Implementierung von WebRTC in jedem Browser angefordert werden.

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
      <td>VP9 (Firefox 46 and later)<br />VP8</td>
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

Bevor Sie sich für einen Codec entscheiden, der nicht einer der obligatorischen Codecs ist (VP8 oder AVC für Video und Opus oder PCM für Audio), sollten Sie die potenziellen Nachteile ernsthaft in Betracht ziehen: Insbesondere können nur diese Codecs im Allgemeinen davon ausgegangen werden, dass sie auf nahezu allen Geräten vorhanden sind, die WebRTC unterstützen.

Wenn Sie sich entscheiden, einen anderen Codec als die obligatorischen zu bevorzugen, sollten Sie zumindest die Möglichkeit eines Rückfalls auf einen der obligatorischen Codecs vorsehen, wenn die Unterstützung für den von Ihnen bevorzugten Codec nicht verfügbar ist.

### Audio

Im Allgemeinen sollten Sie, wenn es verfügbar ist und das Audio, das Sie senden möchten, eine Abtastrate von mehr als 8 kHz aufweist, ernsthaft in Erwägung ziehen, Opus als Primärcodec zu verwenden. Für reine Sprachverbindungen in einer eingeschränkten Umgebung kann die Verwendung von G.711 mit einer Abtastrate von 8 kHz eine akzeptable Erfahrung für Gespräche bieten, aber in der Regel verwenden Sie G.711 als Fallback-Option, da es andere Optionen gibt, die effizienter und besser klingen, wie etwa Opus im Schmalbandmodus.

### Video

Es gibt eine Reihe von Faktoren, die bei der Entscheidung für einen Video-Codec (oder einen Satz von Codecs) eine Rolle spielen.

#### Lizenzbedingungen

Bevor Sie sich für einen Video-Codec entscheiden, stellen Sie sicher, dass Sie sich der lizenzrechtlichen Anforderungen bewusst sind, die mit dem von Ihnen gewählten Codec verbunden sind; Sie finden Informationen zu möglichen Lizenzierungsbedenken im Hauptleitfaden zu [auf dem Web verwendeten Videocodecs](/de/docs/Web/Media/Formats/Video_codecs). Von den beiden obligatorischen Codecs für Video - VP8 und AVC/H.264 - ist nur VP8 vollständig frei von Lizenzanforderungen. Wenn Sie sich für AVC entscheiden, stellen Sie sicher, dass Sie sich über etwaige Gebühren, die Sie möglicherweise zahlen müssen, im Klaren sind; die Patentinhaber haben jedoch generell gesagt, dass sich die meisten typischen Website-Entwickler keine Sorgen über die Zahlung der Lizenzgebühren machen müssen, die sich typischerweise eher auf die Entwickler der Encoding- und Decoding-Software konzentrieren.

> [!WARNING]
> Die hier bereitgestellten Informationen stellen _keine_ Rechtsberatung dar! Stellen Sie sicher, dass Sie Ihr Haftungsrisiko bestätigt haben, bevor Sie endgültige Entscheidungen treffen, bei denen potenziell Möglichkeiten für Lizenzierungsprobleme bestehen.

#### Leistungs- und Batterielebensdauer

Ein weiterer Faktor, den Sie berücksichtigen sollten - insbesondere auf mobilen Plattformen - ist der Einfluss eines Codecs auf die Batterielebensdauer. Wenn ein Codec auf einer bestimmten Plattform in Hardware bearbeitet wird, ist dieser Codec wahrscheinlich in der Lage, eine deutlich bessere Batterielebensdauer und weniger Wärmeentwicklung zu ermöglichen.

Zum Beispiel führte Safari für iOS und iPadOS WebRTC mit AVC als einzigem unterstützten Video-Codec ein. AVC hat den Vorteil, auf iOS und iPadOS in Hardware kodiert und dekodiert werden zu können. Safari 12.1 führte die Unterstützung für VP8 innerhalb von IRC ein, was die Interoperabilität verbessert, aber zu einem Kostenanstieg führt - VP8 hat keine Hardwareunterstützung auf iOS-Geräten, was zu einer erhöhten Prozessorbelastung und einer verkürzten Batterielebensdauer führt, wenn dies verwendet wird.

#### Leistung

Glücklicherweise ähneln sich VP8 und AVC aus der Sicht des Endbenutzers in der Leistung und sind gleichermaßen geeignet für die Verwendung in Videokonferenzen und anderen WebRTC-Lösungen. Die endgültige Entscheidung liegt bei Ihnen. Egal, was Sie wählen, lesen Sie unbedingt die Informationen in diesem Artikel zu etwaigen Konfigurationsproblemen, mit denen Sie bei diesem Codec umgehen müssen.

Beachten Sie, dass die Auswahl eines Codecs, der nicht auf der Liste der obligatorischen Codecs steht, wahrscheinlich das Risiko birgt, einen Codec zu wählen, der von einem Browser, den Ihre Benutzer möglicherweise bevorzugen, nicht unterstützt wird. Lesen Sie [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Formats/Support_issues), um mehr darüber zu erfahren, wie Sie Unterstützung für Ihre bevorzugten Codecs bieten können, während Sie trotzdem in der Lage sind, auf Browser, die diesen Codec nicht implementieren, zurückzufallen.

## Sicherheitsimplikationen

Es gibt interessante potenzielle Sicherheitsprobleme, die bei der Auswahl und Konfiguration von Codecs auftreten können. WebRTC-Video ist durch Datagram Transport Layer Security ({{Glossary("DTLS")}}) geschützt, aber es ist theoretisch möglich, dass eine motivierte Partei die Menge der Änderungen von Frame zu Frame bei der Verwendung von variablen Bitrate (VBR)-Codecs ableiten kann, indem sie die Bitrate des Streams überwacht und wie sie sich über die Zeit verändert. Dies könnte es einem böswilligen Akteur potenziell ermöglichen, etwas über den Inhalt des Streams abzuleiten, angesichts des Anstiegs und Abfalls der Bitrate.

Weitere Informationen zu Sicherheitsüberlegungen beim Einsatz von AVC in WebRTC finden Sie in {{RFC(6184, "RTP Payload Format for H.264 Video: Security Considerations", 9)}}.

## RTP-Payload-Format Medientypen

Es kann nützlich sein, auf die {{Glossary("IANA")}}-Liste der {{Glossary("RTP")}}-Payload-Format Medientypen zu verweisen; dies ist eine vollständige Liste der MIME-Medientypen, die für den _potenziellen_ Einsatz in RTP-Streams definiert sind, wie sie z. B. in WebRTC verwendet werden. Die meisten davon werden nicht in WebRTC-Kontexten verwendet, aber die Liste kann dennoch nützlich sein.

Siehe auch {{RFC(4855)}}, das sich mit dem Medienarten-Register befasst.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Leitfaden zu auf dem Web verwendeten Videocodecs](/de/docs/Web/Media/Formats/Video_codecs)
- [Leitfaden zu auf dem Web verwendeten Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs)
- [Konzepte des digitalen Videos](/de/docs/Web/Media/Formats/Video_concepts)
- [Konzepte des digitalen Audios](/de/docs/Web/Media/Formats/Audio_concepts)
