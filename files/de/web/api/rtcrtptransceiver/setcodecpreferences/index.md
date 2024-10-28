---
title: "RTCRtpTransceiver: Methode setCodecPreferences()"
short-title: setCodecPreferences()
slug: Web/API/RTCRtpTransceiver/setCodecPreferences
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{APIRef("WebRTC")}}

Die Methode **`setCodecPreferences()`** der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Schnittstelle wird verwendet, um die Codecs festzulegen, die der Transceiver zum Dekodieren empfangener Daten zulässt, in absteigender Präferenzreihenfolge.

Die mit dieser Methode festgelegten Präferenzen beeinflussen, welche Codecs mit dem entfernten Peer für die Codierung der gesendeten Daten ausgehandelt werden, einschließlich derjenigen, die für Weiterübertragung, Redundanz und Fehlerkorrektur verwendet werden. Codecs, die nicht in der Präferenzliste enthalten sind, werden nicht Teil der Verhandlung sein. Beachten Sie, dass die Präferenzen, die dieser Transceiver für das Senden von Inhalten verwendet, von den Präferenzen des entfernten Peers abhängen.

Der empfohlene Weg, um Codec-Präferenzen festzulegen, besteht darin, zunächst das Array der tatsächlich unterstützten Codecs für das Dekodieren empfangener Daten zu erhalten und sie dann in absteigender Präferenzreihenfolge neu anzuordnen. Dies stellt sicher, dass das Array wie erforderlich geordnet ist, keine nicht unterstützten Codecs enthält und auch Codecs umfasst, die für Weiterübertragung, Redundanz und Fehlerkorrektur benötigt werden.

Der angegebene Satz von Codecs wird für alle zukünftigen Verbindungen verwendet, die diesen Transceiver einschließen, bis diese Methode erneut aufgerufen wird.

Beim Vorbereiten einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sollten die Codecs mit `setCodecParameters()` festgelegt werden, _bevor_ entweder [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) oder [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) aufgerufen werden, da diese die Verhandlung einleiten (und standardmäßig Codec-Parameter aus der {{Glossary("user_agent", "Standardkonfiguration des Benutzeragenten")}} verwenden).

Die Codecs können geändert werden, wenn Sie eine laufende Kommunikation haben, aber Sie müssen zuerst `setCodecParameters()` aufrufen und dann eine neue Verhandlung einleiten. Eine WebRTC-Anwendung wird bereits Code hierfür im [`negotiationneeded`-Ereignishandler](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) haben. Beachten Sie jedoch, dass zum Zeitpunkt des Schreibens das Ereignis nicht automatisch ausgelöst wird, wenn Sie `setCodecParameters()` aufrufen. Daher müssen Sie `onnegotiationneeded` selbst aufrufen.

Ein Leitfaden zu den von WebRTC unterstützten Codecs und den positiven und negativen Merkmalen jedes Codecs finden Sie unter [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs).

## Syntax

```js-nolint
setCodecPreferences(codecs)
```

### Parameter

- `codecs`

  - : Ein Array von Objekten, das die Parameter für einen der vom Transceiver unterstützten [Media Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) in Präferenzreihenfolge bereitstellt. Wenn `codecs` leer ist, werden alle Codec-Konfigurationen auf die Standardeinstellungen des Benutzeragenten zurückgesetzt.

    > [!NOTE]
    > Alle nicht in `codecs` enthaltenen Codecs werden während des Verhandlungsvorgangs nicht berücksichtigt. Dies ermöglicht es Ihnen, die Verwendung von Codecs zu verhindern, die Sie nicht verwenden möchten.

    Jedes Codec-Objekt im Array hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}

      - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt. Zum Beispiel gibt ein Wert von 1 bei Audiocodecs Mono-Sound an, während 2 Stereo angibt.

    - `clockRate`

      - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt. Die Taktfrequenz ist die Rate, mit der sich der RTP-Zeitstempel des Codecs weiterbewegt. Die meisten Codecs haben spezifische oder zulässige Wertebereiche. Die IANA führt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

    - `mimeType`

      - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt, als String in der Form `"type/subtype"`. Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden. Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2). Siehe auch [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details über potenzielle Codecs, die hier referenziert werden könnten.

    - `sdpFmtpLine` {{optional_inline}}

      - : Ein String, der das formatspezifische Parameterfeld von der `a=fmtp`-Zeile im {{Glossary("SDP", "SDP")}} angibt, das dem Codec entspricht, falls das Feld vorhanden ist. Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `codecs`-Liste enthält einen oder mehrere Codecs, die vom [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der mit dem Transceiver verbunden ist, nicht unterstützt werden.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `codecs`-Liste enthält nur Einträge für RTX, RED, FEC oder Comfort Noise oder ist eine leere Menge. Die Codecs müssen immer einen Codec für die Medien enthalten.

## Beispiele

### Erstellen des Arrays bevorzugter Codecs

Der empfohlene Weg, um Codec-Präferenzen festzulegen, besteht darin, zunächst das Array der tatsächlich unterstützten Codecs für das Dekodieren empfangener Daten zu erhalten und die Liste dann in absteigender Präferenzreihenfolge neu anzuordnen.

Es ist wichtig, mit der Liste der unterstützten Codecs zu beginnen (und nicht mit einer fest kodierten Liste Ihrer bevorzugten Codecs), da, wenn Sie welche einschließen, die vom zugehörigen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) nicht unterstützt werden, der Browser eine `InvalidAccessError`-Ausnahme auslöst, wenn Sie die `setCodecPreferences()`-Methode aufrufen. Darüber hinaus muss das Array geeignete Codecs für Weiterübertragung, Redundanz und Vorwärtsfehlerkorrektur enthalten, und der Start mit der Liste der unterstützten Codecs stellt sicher, dass diese vorhanden sind.

Sie können die Codecs, die zum Dekodieren von Daten unterstützt werden, mit der statischen Methode [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) abrufen, wie unten gezeigt:

```js
const availReceiveCodecs = transceiver.receiver.getCapabilities("video").codecs;
```

Um das Codec-Array in unsere bevorzugte Reihenfolge zu bringen, können wir die untenstehende Sortierfunktion verwenden, um nach MIME-Typ zu sortieren (dies stammt von [setCodecPreferences is now in all browsers!](https://blog.mozilla.org/webrtc/cross-browser-support-for-choosing-webrtc-codecs/) auf blog.mozilla.org (2024)).

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

Die Methode nimmt die Liste der unterstützten Codecs und ein Array, das die bevorzugten MIME-Typen in absteigender Reihenfolge enthält, und gibt das Array sortiert zurück. Der folgende Code zeigt, wie dies verwendet wird, vorausgesetzt, dass Sie bereits eine Peer-Verbindung (`peerConnection`) eingerichtet haben:

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
- [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [Web-Medientechnologien](/de/docs/Web/Media)
