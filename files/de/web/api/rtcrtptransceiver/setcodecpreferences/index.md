---
title: "RTCRtpTransceiver: Methode setCodecPreferences()"
short-title: setCodecPreferences()
slug: Web/API/RTCRtpTransceiver/setCodecPreferences
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("WebRTC")}}

Die Methode **`setCodecPreferences()`** des Interfaces [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) wird verwendet, um die Codecs festzulegen, die der Transceiver zum Dekodieren _empfangener_ Daten zulässt, in absteigender Präferenzreihenfolge.

Die mit dieser Methode festgelegten Präferenzen beeinflussen, welche Codecs mit dem Remote-Peer für die Kodierung der von ihm gesendeten Daten ausgehandelt werden, einschließlich derjenigen, die für Neuübertragung, Redundanz und Vorwärtsfehlerkorrektur verwendet werden.
Codecs, die nicht in der Präferenzliste enthalten sind, sind nicht Teil der Aushandlung.
Beachten Sie, dass die von diesem Transceiver zum _Senden_ von Inhalten verwendeten Präferenzen von den Präferenzen des Remote-Peers abhängen.

Die empfohlene Vorgehensweise zum Festlegen von Codec-Präferenzen besteht darin, zunächst das Array der Codecs abzurufen, die tatsächlich zum Dekodieren empfangener Daten unterstützt werden, und sie dann in absteigender Präferenzreihenfolge neu anzuordnen.
Dadurch wird sichergestellt, dass das Array wie erforderlich sortiert ist, keine nicht unterstützten Codecs enthält und auch die für Neuübertragung, Redundanz und Vorwärtsfehlerkorrektur erforderlichen Codecs enthält.

Die angegebene Gruppe von Codecs wird für alle zukünftigen Verbindungen verwendet, die diesen Transceiver einschließen, bis diese Methode erneut aufgerufen wird.

Bei der Vorbereitung zum Öffnen einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sollten die Codecs mit `setCodecPreferences()` festgelegt werden, _bevor_ entweder [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) oder [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) aufgerufen wird, da diese die Aushandlung starten (und standardmäßig Codec-Parameter aus der Standardkonfiguration des {{Glossary("user_agent", "User-Agents")}} verwenden).

Die Codecs können während einer laufenden Kommunikation geändert werden, aber Sie müssen zuerst `setCodecPreferences()` aufrufen und dann eine neue Aushandlung starten.
Eine WebRTC-Anwendung verfügt hierfür bereits über Code im [`negotiationneeded`-Event-Handler](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event).
Beachten Sie jedoch, dass das Event zum Zeitpunkt der Erstellung dieses Dokuments nicht automatisch ausgelöst wird, wenn Sie `setCodecPreferences()` aufrufen. Sie müssen daher `onnegotiationneeded` selbst aufrufen.

Einen Leitfaden zu den von WebRTC unterstützten Codecs – und den positiven und negativen Eigenschaften jedes Codecs – finden Sie unter [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

## Syntax

```js-nolint
setCodecPreferences(codecs)
```

### Parameter

- `codecs`
  - : Ein Array von Objekten, die jeweils die Parameter für einen der vom Transceiver unterstützten [Medien-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) bereitstellen, sortiert nach Präferenz.
    Wenn `codecs` leer ist, werden alle Codec-Konfigurationen auf die Standardwerte des User-Agents zurückgesetzt.

    > [!NOTE]
    > Codecs, die nicht in `codecs` enthalten sind, werden beim Aushandeln einer Verbindung nicht berücksichtigt.
    > Damit können Sie die Verwendung von Codecs verhindern, die Sie nicht verwenden möchten.

    Jedes Codec-Objekt im Array hat die folgenden Eigenschaften:
    - `channels` {{optional_inline}}
      - : Eine positive ganze Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
        Bei Audio-Codecs gibt beispielsweise ein Wert von 1 monauralen Klang an, während 2 Stereo angibt.

    - `clockRate`
      - : Eine positive ganze Zahl, die die Clock-Rate des Codecs in Hertz (Hz) angibt.
        Die Clock-Rate ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
        Die meisten Codecs erlauben bestimmte Werte oder Wertebereiche.
        Die IANA führt eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), einschließlich ihrer Clock-Rates.

    - `mimeType`
      - : Ein String, der den MIME-Medientyp und -Untertyp des Codecs angibt, im Format `"type/subtype"`.
        Die von RTP verwendeten MIME-Type-Strings unterscheiden sich von denen, die andernorts verwendet werden.
        Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-2).
        Weitere Informationen zu möglichen Codecs, auf die hier verwiesen werden könnte, finden Sie auch unter [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das formatspezifische Parameterfeld aus der dem Codec entsprechenden `a=fmtp`-Zeile in der {{Glossary("SDP", "SDP")}} enthält, falls das Feld vorhanden ist.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Liste `codecs` enthält einen oder mehrere Codecs, die vom mit dem Transceiver verknüpften [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) nicht unterstützt werden.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Liste `codecs` enthält nur Einträge für RTX, RED, FEC oder Comfort Noise oder ist eine leere Menge.
    Die Codecs müssen immer einen Codec für das Medium enthalten.

## Beispiele

### Erstellen des Arrays bevorzugter Codecs

Die empfohlene Vorgehensweise zum Festlegen von Codec-Präferenzen besteht darin, zunächst das Array der Codecs abzurufen, die tatsächlich zum Dekodieren empfangener Daten unterstützt werden, und die Liste dann in absteigender Präferenzreihenfolge neu anzuordnen.

Es ist wichtig, mit der Liste der unterstützten Codecs zu beginnen (und nicht mit einer fest codierten Liste Ihrer bevorzugten Codecs), denn wenn Sie Codecs einschließen, die vom verknüpften [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) nicht unterstützt werden, löst der Browser beim Aufruf der Methode `setCodecPreferences()` eine Ausnahme vom Typ `InvalidAccessError` aus.
Zusätzlich muss das Array geeignete Codecs für Neuübertragung, Redundanz und Vorwärtsfehlerkorrektur enthalten. Wenn Sie mit der Liste der unterstützten Codecs beginnen, wird sichergestellt, dass diese vorhanden sind.

Sie können die für das Dekodieren von Daten unterstützten Codecs mit der statischen Methode [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) abrufen, wie gezeigt:

```js
const availReceiveCodecs = transceiver.receiver.getCapabilities("video").codecs;
```

Um das Codec-Array in unsere bevorzugte Reihenfolge zu bringen, können wir die folgende Sortierfunktion verwenden, um nach MIME-Typ zu sortieren (diese stammt aus [setCodecPreferences is now in all browsers!](https://blog.mozilla.org/webrtc/cross-browser-support-for-choosing-webrtc-codecs/) auf blog.mozilla.org (2024)).

```js
function sortByMimeTypes(codecs, preferredOrder) {
  return codecs.sort((a, b) => {
    const indexA = preferredOrder.indexOf(a.mimeType);
    const indexB = preferredOrder.indexOf(b.mimeType);
    const orderA = indexA >= 0 ? indexA : Number.MAX_VALUE;
    const orderB = indexB >= 0 ? indexB : Number.MAX_VALUE;
    return orderA - orderB;
  });
}
```

Die Methode übernimmt die Liste unterstützter Codecs und ein Array mit den bevorzugten MIME-Typen in absteigender Reihenfolge und gibt das an Ort und Stelle sortierte Array zurück.
Der folgende Code zeigt, wie dies verwendet wird, unter der Annahme, dass Sie bereits eine Peer-Verbindung (`peerConnection`) eingerichtet haben:

```js
// Get supported codecs the sort using preferred codecs
const supportedCodecs = RTCRtpReceiver.getCapabilities("video").codecs;
const preferredCodecs = ["video/H264", "video/VP8", "video/VP9"];
const sortedCodecs = sortByMimeTypes(supportedCodecs, preferredCodecs);

// Get transceiver for connection and set the preferences
const [transceiver] = peerConnection.getTransceivers();
transceiver.setCodecPreferences(sortedCodecs); // <---
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [setCodecPreferences is now in all browsers!](https://blog.mozilla.org/webrtc/cross-browser-support-for-choosing-webrtc-codecs/) auf blog.mozilla.org (2024)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [Webmedientechnologien](/de/docs/Web/Media)
