---
title: "RTCRtpTransceiver: setCodecPreferences()-Methode"
short-title: setCodecPreferences()
slug: Web/API/RTCRtpTransceiver/setCodecPreferences
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("WebRTC")}}

Die **`setCodecPreferences()`**-Methode der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Schnittstelle wird verwendet, um die Codecs festzulegen, die der Transceiver für das Dekodieren _empfangener_ Daten in absteigender Präferenz zulässt.

Die mit dieser Methode festgelegten Präferenzen beeinflussen, welche Codecs mit dem entfernten Peer für die Kodierung der gesendeten Daten verhandelt werden, einschließlich derjenigen, die für Wiederübertragung, Redundanz und Vorwärtsfehlerkorrektur verwendet werden.
Codecs, die nicht in der Präferenzliste enthalten sind, werden nicht Teil der Verhandlung sein.
Beachten Sie, dass die von diesem Transceiver für das _Senden_ von Inhalten verwendeten Präferenzen von den Präferenzen des entfernten Peers abhängen.

Die empfohlene Vorgehensweise für das Festlegen von Codec-Präferenzen besteht darin, zunächst das Array der Codecs zu erhalten, die tatsächlich für das Dekodieren empfangener Daten unterstützt werden, und diese dann in absteigender Präferenzreihenfolge neu zu ordnen.
Dies stellt sicher, dass das Array wie erforderlich geordnet ist, keine nicht unterstützten Codecs enthält und dass es auch Codecs enthält, die für Wiederübertragung, Redundanz und Vorwärtsfehlerkorrektur benötigt werden.

Die angegebene Codec-Menge wird für alle zukünftigen Verbindungen verwendet, die diesen Transceiver beinhalten, bis diese Methode erneut aufgerufen wird.

Vor dem Öffnen einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sollten die Codecs mit `setCodecParameters()` festgelegt werden, _bevor_ entweder [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) oder [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) aufgerufen wird, da diese die Verhandlung initiieren (und standardmäßig Codec-Parameter aus der {{Glossary("user_agent", "Standardkonfiguration des Benutzeragenten")}} verwenden).

Die Codecs können geändert werden, während eine Kommunikation im Gange ist, aber Sie müssen zuerst `setCodecParameters()` aufrufen und dann eine neue Verhandlung beginnen.
Eine WebRTC-Anwendung wird bereits Code hierfür im [`negotiationneeded`-Ereignishandler](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) haben.
Beachten Sie jedoch, dass zum Zeitpunkt des Schreibens das Ereignis nicht automatisch ausgelöst wird, wenn Sie `setCodecParameters()` aufrufen, sodass Sie `onnegotiationneeded` selbst aufrufen müssen.

Einen Leitfaden zu den von WebRTC unterstützten Codecs – und die positiven und negativen Eigenschaften eines jeden Codecs – finden Sie in [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

## Syntax

```js-nolint
setCodecPreferences(codecs)
```

### Parameter

- `codecs`

  - : Ein Array von Objekten, die jeweils die Parameter für einen der vom Transceiver unterstützten [Medien-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) bereitstellen, geordnet nach Präferenz.
    Wenn `codecs` leer ist, werden alle Codec-Konfigurationen auf die Standardeinstellungen des Benutzeragenten zurückgesetzt.

    > [!NOTE]
    > Alle Codecs, die nicht in `codecs` enthalten sind, werden bei der Verhandlung einer Verbindung nicht berücksichtigt.
    > Dies ermöglicht es Ihnen, die Verwendung von Codecs zu verhindern, die Sie nicht verwenden möchten.

    Jedes Codec-Objekt im Array hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}

      - : Eine positive Ganzzahl, die die Anzahl der von diesem Codec unterstützten Kanäle angibt.
        Beispielsweise gibt für Audio-Codecs ein Wert von 1 Mono-Sound an, während 2 Stereo bedeutet.

    - `clockRate`

      - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die Taktfrequenz ist die Rate, mit der der RTP-Zeitstempel des Codecs voranschreitet.
        Die meisten Codecs haben spezifische Werte oder Bereiche von Werten, die sie zulassen.
        Die IANA führt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

    - `mimeType`

      - : Ein String, der den MIME-Medientyp und -Subtyp des Codecs angibt, spezifiziert als String der Form `"type/subtype"`.
        Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von denen, die anderswo verwendet werden.
        Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Siehe auch [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.

    - `sdpFmtpLine` {{optional_inline}}

      - : Ein String, der das format-spezifische Parameterfeld von der `a=fmtp`-Zeile im {{Glossary("SDP", "SDP")}} angibt, das dem Codec entspricht, falls das Feld vorhanden ist.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `codecs`-Liste enthält einen oder mehrere Codecs, die von dem mit dem Transceiver verbundenen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) nicht unterstützt werden.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `codecs`-Liste enthält nur Einträge für RTX, RED, FEC oder Comfort Noise oder ist eine leere Menge.
    Die Codecs müssen immer einen Codec für die Medien enthalten.

## Beispiele

### Erstellen des Arrays der bevorzugten Codecs

Die empfohlene Methode, um Codec-Präferenzen festzulegen, besteht darin, zunächst das Array der Codecs zu erhalten, die tatsächlich für das Dekodieren empfangener Daten unterstützt werden, und dann die Liste in absteigender Präferenzreihenfolge neu zu ordnen.

Es ist wichtig, mit der Liste der unterstützten Codecs zu beginnen (und nicht mit einer fest kodierten Liste Ihrer bevorzugten Codecs), denn wenn Sie einen einschließen, der nicht vom zugehörigen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) unterstützt wird, löst der Browser beim Aufruf der `setCodecPreferences()`-Methode eine `InvalidAccessError`-Ausnahme aus.
Darüber hinaus muss das Array geeignete Codecs für Wiederübertragung, Redundanz und Vorwärtsfehlerkorrektur enthalten, und das Starten mit der Liste der unterstützten Codecs stellt sicher, dass diese vorhanden sind.

Sie können die für das Dekodieren von Daten unterstützten Codecs mit der statischen Methode [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) wie folgt abrufen:

```js
const availReceiveCodecs = transceiver.receiver.getCapabilities("video").codecs;
```

Um das Codeks-Array in unsere bevorzugte Reihenfolge zu bringen, können wir die untenstehende Sortierfunktion verwenden, um nach MIME-Typ zu sortieren (dies stammt von [setCodecPreferences is now in all browsers!](https://blog.mozilla.org/webrtc/cross-browser-support-for-choosing-webrtc-codecs/) auf blog.mozilla.org (2024)).

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

Die Methode nimmt die Liste der unterstützten Codecs und ein Array mit den bevorzugten MIME-Typen in absteigender Reihenfolge und gibt das sortierte Array zurück.
Der untenstehende Code zeigt, wie dies verwendet wird, vorausgesetzt, dass Sie bereits eine Peer-Verbindung (`peerConnection`) eingerichtet haben:

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
- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [Web-Medientechnologien](/de/docs/Web/Media)
