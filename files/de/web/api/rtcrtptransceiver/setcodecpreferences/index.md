---
title: "RTCRtpTransceiver: setCodecPreferences() Methode"
short-title: setCodecPreferences()
slug: Web/API/RTCRtpTransceiver/setCodecPreferences
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`setCodecPreferences()`** Methode des [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) Interfaces wird verwendet, um die Codecs festzulegen, die der Transceiver für das Dekodieren _empfangener_ Daten zulässt, in abnehmender Reihenfolge der Präferenz.

Die Präferenzen, die mit dieser Methode festgelegt werden, beeinflussen, welche Codecs mit dem entfernten Gegenüber für das Kodieren der gesendeten Daten verhandelt werden, einschließlich derer, die für Wiederübertragung, Redundanz und Vorwärtsfehlerkorrektur verwendet werden. Codecs, die nicht in der Präferenzliste enthalten sind, werden nicht Teil der Verhandlung sein. Beachten Sie, dass die Präferenzen, die dieser Transceiver für das _Senden_ von Inhalten verwendet, von den Präferenzen des entfernten Gegenübers abhängen.

Die empfohlene Methode, um Codec-Präferenzen festzulegen, besteht darin, zuerst das Array der Codecs zu holen, die tatsächlich für das Dekodieren empfangener Daten unterstützt werden, und dann die Präferenzreihenfolge in abnehmender Reihenfolge neu anzuordnen. Dies stellt sicher, dass das Array in der erforderlichen Reihenfolge steht, keine nicht unterstützten Codecs enthält und auch Codecs beinhaltet, die für Wiederübertragung, Redundanz und Vorwärtsfehlerkorrektur benötigt werden.

Das angegebene Set von Codecs wird für alle zukünftigen Verbindungen verwendet, die diesen Transceiver einschließen, bis diese Methode erneut aufgerufen wird.

Bei der Vorbereitung zur Öffnung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sollten die Codecs mit `setCodecParameters()` _vor_ dem Aufruf von entweder [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) oder [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) eingestellt werden, da diese die Verhandlung initiieren (und standardmäßig Codec-Parameter aus der Standardkonfiguration des {{Glossary("user_agent", "User-Agents")}} verwenden).

Die Codecs können geändert werden, wenn Sie eine laufende Kommunikation haben, aber Sie müssen zuerst `setCodecParameters()` aufrufen und dann eine neue Verhandlung starten. Eine WebRTC-Anwendung wird bereits Code dafür im [`negotiationneeded` Ereignis-Handler](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) haben. Beachten Sie jedoch, dass zum Zeitpunkt des Schreibens das Ereignis nicht automatisch ausgelöst wird, wenn Sie `setCodecParameters()` aufrufen, sodass Sie `onnegotiationneeded` selbst aufrufen müssen.

Ein Leitfaden zu Codecs, die von WebRTC unterstützt werden – und die positiven und negativen Eigenschaften jedes Codecs – finden Sie in [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs).

## Syntax

```js-nolint
setCodecPreferences(codecs)
```

### Parameter

- `codecs`

  - : Ein Array von Objekten, die jeweils die Parameter für einen der vom Transceiver unterstützten [Medien-Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) bereitstellen, geordnet nach Präferenz. Wenn `codecs` leer ist, werden die Codec-Konfigurationen alle auf die Standardwerte des User-Agents zurückgesetzt.

    > [!NOTE]
    > Alle Codecs, die nicht in `codecs` enthalten sind, werden bei der Aushandlung einer Verbindung nicht berücksichtigt. Dies ermöglicht es Ihnen, die Verwendung von Codecs zu verhindern, die Sie nicht verwenden möchten.

    Jedes Codec-Objekt im Array hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}

      - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt. Zum Beispiel gibt ein Wert von 1 für Audiocodecs Monauralton an, während 2 Stereo anzeigt.

    - `clockRate`

      - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt. Die Taktfrequenz ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet. Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie erlauben. Die IANA führt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

    - `mimeType`

      - : Eine Zeichenkette, die den MIME-Medientyp und -Subtyp des Codecs angibt, spezifiziert als Zeichenkette im Format `"type/subtype"`. Die MIME-Typenstrings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden. Die IANA führt ein [Register der gültigen MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2). Siehe auch [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.

    - `sdpFmtpLine` {{optional_inline}}

      - : Eine Zeichenkette, die das format-spezifische Parameterfeld von der `a=fmtp`-Zeile im {{Glossary("SDP", "SDP")}} angibt, das dem Codec entspricht, falls das Feld vorhanden ist. Wenn es kein Parameterfeld gibt, wird diese Eigenschaft weggelassen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `codecs`-Liste enthält einen oder mehrere Codecs, die vom [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der mit dem Transceiver verbunden ist, nicht unterstützt werden.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `codecs`-Liste enthält nur Einträge für RTX, RED, FEC oder Comfort Noise oder ist eine leere Menge. Die Codecs müssen immer einen Codec für das Medium enthalten.

## Beispiele

### Erstellen des Arrays bevorzugter Codecs

Die empfohlene Methode, um Codec-Präferenzen festzulegen, besteht darin, zuerst das Array der Codecs zu holen, die tatsächlich für das Dekodieren empfangener Daten unterstützt werden, und dann die Liste in abnehmender Präferenzreihenfolge neu zu ordnen.

Es ist wichtig, mit der Liste der unterstützten Codecs zu beginnen (und nicht mit einer hart codierten Liste Ihrer bevorzugten Codecs), da der Browser eine `InvalidAccessError`-Ausnahme auslöst, wenn Sie das `setCodecPreferences()`-Methode aufrufen, wenn Sie welche einschließen, die vom verbundenen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) nicht unterstützt werden. Zusätzlich muss das Array geeignete Codecs für Wiederübertragung, Redundanz und Vorwärtsfehlerkorrektur enthalten, und indem Sie mit der Liste der unterstützten Codecs beginnen, stellen Sie sicher, dass diese vorhanden sind.

Sie können die für das Dekodieren von Daten unterstützten Codecs mit der statischen Methode [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) erhalten, wie gezeigt:

```js
const availReceiveCodecs = transceiver.receiver.getCapabilities("video").codecs;
```

Um das Codecs-Array nach unserer bevorzugten Reihenfolge neu zu ordnen, können wir die folgende Sortierfunktion verwenden, um nach MIME-Typ zu sortieren (dies stammt aus [setCodecPreferences is now in all browsers!](https://blog.mozilla.org/webrtc/cross-browser-support-for-choosing-webrtc-codecs/) auf blog.mozilla.org (2024)).

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

Die Methode nimmt die Liste der unterstützten Codecs und ein Array enthaltend die bevorzugten MIME-Typen in abnehmender Reihenfolge und gibt das Array vor Ort sortiert zurück. Der folgende Code zeigt, wie dies verwendet wird, vorausgesetzt, Sie haben bereits eine Peer-Verbindung (`peerConnection`) eingerichtet:

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
