---
title: "RTCRtpTransceiver: setCodecPreferences()-Methode"
short-title: setCodecPreferences()
slug: Web/API/RTCRtpTransceiver/setCodecPreferences
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`setCodecPreferences()`**-Methode der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Schnittstelle wird verwendet, um die Codecs festzulegen, die der Transceiver für das Dekodieren empfangener Daten in abnehmender Präferenzreihenfolge zulässt.

Die mit dieser Methode festgelegten Präferenzen beeinflussen, welche Codecs mit dem entfernten Peer für die Kodierung der gesendeten Daten ausgehandelt werden, einschließlich derjenigen, die für Wiederübertragung, Redundanz und Vorwärtsfehlerkorrektur verwendet werden. Codecs, die nicht in der Präferenzliste enthalten sind, werden nicht Bestandteil der Aushandlung. Beachten Sie, dass die Präferenzen, die dieser Transceiver zum _Senden_ von Inhalten verwendet, von den Präferenzen des entfernten Peers abhängen.

Die empfohlene Vorgehensweise zum Festlegen von Codec-Präferenzen besteht darin, zunächst das Array der Codecs zu erhalten, die tatsächlich für das Dekodieren empfangener Daten unterstützt werden, und diese dann in der Reihenfolge Ihrer abnehmenden Präferenz neu zu ordnen. Dies stellt sicher, dass das Array wie erforderlich geordnet ist, keine nicht unterstützten Codecs enthält und dass es auch Codecs enthält, die für Wiederübertragung, Redundanz und Vorwärtsfehlerkorrektur benötigt werden.

Der angegebene Satz von Codecs wird für alle zukünftigen Verbindungen verwendet, die diesen Transceiver enthalten, bis diese Methode erneut aufgerufen wird.

Bei der Vorbereitung zur Eröffnung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sollten die Codecs mit `setCodecParameters()` festgelegt werden, _bevor_ entweder [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) oder [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) aufgerufen werden, da diese die Verhandlung initiieren (und standardmäßig Codec-Parameter aus der [Standardkonfiguration des Benutzer-Agenten](/de/docs/Glossary/user_agent) verwenden).

Die Codecs können geändert werden, wenn Sie über eine laufende Kommunikation verfügen, aber Sie müssen zuerst `setCodecParameters()` aufrufen und dann eine neue Verhandlung anstoßen. Eine WebRTC-Anwendung wird bereits Code dafür im [`negotiationneeded`-Ereignishandler](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) haben. Beachten Sie jedoch, dass zum Zeitpunkt des Schreibens das Ereignis nicht automatisch ausgelöst wird, wenn Sie `setCodecParameters()` aufrufen, sodass Sie `onnegotiationneeded` selbst aufrufen müssen.

Ein Leitfaden zu den von WebRTC unterstützten Codecs – und den Vor- und Nachteilen jedes Codecs – finden Sie unter [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs).

## Syntax

```js-nolint
setCodecPreferences(codecs)
```

### Parameter

- `codecs`

  - : Ein Array von Objekten, die jeweils die Parameter für einen der unterstützten [Media-Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) des Transceivers bereitstellen, geordnet nach Präferenz. Wenn `codecs` leer ist, werden die Codec-Konfigurationen alle auf die Standardwerte des Benutzer-Agenten zurückgesetzt.

    > [!NOTE]
    > Alle Codecs, die nicht in `codecs` enthalten sind, werden bei der Aushandlung einer Verbindung nicht berücksichtigt.
    > Dies ermöglicht es Ihnen, die Verwendung von Codecs zu verhindern, die Sie nicht verwenden möchten.

    Jedes Codec-Objekt im Array hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}

      - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt. Zum Beispiel spezifiziert bei Audiocodecs ein Wert von 1 Mono-Ton, während 2 Stereo bedeutet.

    - `clockRate`

      - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt. Die Taktfrequenz ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet. Die meisten Codecs haben bestimmte Werte oder Wertbereiche, die sie zulassen. Die IANA führt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

    - `mimeType`

      - : Ein String, der den MIME-Medientyp und -subtyp des Codecs angibt, angegeben als String der Form `"type/subtype"`. Die von RTP verwendeten MIME-Typstrings unterscheiden sich von denen, die an anderer Stelle verwendet werden. Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2). Siehe auch [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, auf die hier verwiesen werden kann.

    - `sdpFmtpLine` {{optional_inline}}

      - : Ein String, der das Format-spezifische Parameterfeld von der `a=fmtp`-Zeile im [SDP](/de/docs/Glossary/SDP) angibt, das dem Codec entspricht, falls das Feld vorhanden ist. Falls es kein Parameterfeld gibt, wird diese Eigenschaft weggelassen.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `codecs`-Liste enthält einen oder mehrere Codecs, die vom `RTCRtpReceiver`, der mit dem Transceiver verbunden ist, nicht unterstützt werden.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `codecs`-Liste enthält nur Einträge für RTX, RED, FEC oder Comfort Noise oder ist eine leere Menge. Die Codecs müssen immer einen Codec für die Medien enthalten.

## Beispiele

### Erstellen des Arrays präferierter Codecs

Die empfohlene Vorgehensweise zum Festlegen von Codec-Präferenzen besteht darin, zunächst das Array der Codecs zu erhalten, die tatsächlich für das Dekodieren empfangener Daten unterstützt werden, und dann die Liste in der Reihenfolge abnehmender Präferenz neu zu ordnen.

Es ist wichtig, mit der Liste der unterstützten Codecs zu beginnen (und nicht mit einer hart codierten Liste Ihrer bevorzugten Codecs), da der Browser eine `InvalidAccessError`-Ausnahme auslöst, wenn Sie Codecs einbeziehen, die vom assoziierten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) nicht unterstützt werden, wenn Sie die Methode `setCodecPreferences()` aufrufen. Zudem muss das Array geeignete Codecs für Wiederübertragung, Redundanz und Vorwärtsfehlerkorrektur enthalten, und der Beginn mit der Liste der unterstützten Codecs stellt sicher, dass diese vorhanden sind.

Sie können die unterstützten Codecs für das Dekodieren von Daten mit der statischen Methode [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) abrufen, wie gezeigt:

```js
const availReceiveCodecs = transceiver.receiver.getCapabilities("video").codecs;
```

Um das Codecs-Array in unsere bevorzugte Reihenfolge umzuwandeln, können wir die unten angegebene Sortierfunktion verwenden, um nach MIME-Typ zu sortieren (dies stammt von [setCodecPreferences is now in all browsers!](https://blog.mozilla.org/webrtc/cross-browser-support-for-choosing-webrtc-codecs/) auf blog.mozilla.org (2024)).

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

Die Methode nimmt die Liste der unterstützten Codecs und ein Array, das die bevorzugten MIME-Typen in abnehmender Reihenfolge enthält, und gibt das in-place sortierte Array zurück. Der unten stehende Code zeigt, wie dies verwendet wird, vorausgesetzt, dass Sie bereits eine Peer-Verbindung (`peerConnection`) eingerichtet haben:

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
- [Webmedien-Technologien](/de/docs/Web/Media)
