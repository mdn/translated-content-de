---
title: "RTCRtpTransceiver: setCodecPreferences()-Methode"
short-title: setCodecPreferences()
slug: Web/API/RTCRtpTransceiver/setCodecPreferences
l10n:
  sourceCommit: b5f89583f96e431ddad9b5be0b8cc2cc8e789006
---

{{APIRef("WebRTC")}}

Die **`setCodecPreferences()`**-Methode der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Schnittstelle wird verwendet, um die Codecs festzulegen, die der Transceiver zum Dekodieren von _empfangenen_ Daten in absteigender Präferenzreihenfolge zulässt.

Die mit dieser Methode festgelegten Präferenzen beeinflussen, welche Codecs mit dem entfernten Peer für die Codierung der gesendeten Daten ausgehandelt werden, einschließlich derjenigen, die für die Übertragung, Redundanz und Fehlerkorrektur verwendet werden.
Codecs, die nicht in der Präferenzliste enthalten sind, werden nicht Teil der Verhandlungen sein.
Beachten Sie, dass die von diesem Transceiver verwendeten Präferenzen für das _Senden_ von Inhalten von den Präferenzen des entfernten Peers abhängen.

Der empfohlene Weg, um die Codec-Präferenzen festzulegen, besteht darin, zuerst das Array der tatsächlich für das Dekodieren empfangener Daten unterstützten Codecs zu erhalten und sie dann in absteigender Präferenzreihenfolge neu zu ordnen.
Dies stellt sicher, dass das Array in der erforderlichen Reihenfolge angeordnet ist, keine nicht unterstützten Codecs enthält und auch die benötigten Codecs für die Übertragung, Redundanz und Fehlerkorrektur enthält.

Die angegebene Menge an Codecs wird für alle zukünftigen Verbindungen, die diesen Transceiver enthalten, verwendet, bis diese Methode erneut aufgerufen wird.

Beim Vorbereiten der Öffnung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sollten die Codecs mit `setCodecPreferences()` _vor_ dem Aufruf von entweder [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) oder [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) festgelegt werden, da diese die Verhandlung initiieren (und standardmäßig die Codec-Parameter aus der Standardkonfiguration des {{Glossary("user_agent", "User Agents")}} verwenden).

Die Codecs können geändert werden, wenn Sie eine laufende Kommunikation haben, aber Sie müssen zuerst `setCodecPreferences()` aufrufen und dann eine neue Verhandlung initiieren.
Eine WebRTC-Anwendung wird bereits Code dafür im [`negotiationneeded`-Ereignishandler](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) haben.
Beachten Sie jedoch, dass zum Zeitpunkt der Erstellung dieses Dokuments das Ereignis nicht automatisch ausgelöst wird, wenn Sie `setCodecPreferences()` aufrufen. Sie müssen also `onnegotiationneeded` selbst aufrufen.

Ein Leitfaden zu den von WebRTC unterstützten Codecs und den positiven und negativen Eigenschaften jedes Codecs finden Sie in [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

## Syntax

```js-nolint
setCodecPreferences(codecs)
```

### Parameter

- `codecs`

  - : Ein Array von Objekten, die die Parameter für einen der vom Transceiver unterstützten [Mediencodecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) in der Reihenfolge der Präferenz bereitstellen.
    Wenn `codecs` leer ist, werden die Codec-Konfigurationen alle auf die Standardeinstellungen des User Agents zurückgesetzt.

    > [!NOTE]
    > Alle Codecs, die nicht in `codecs` enthalten sind, werden während der Verbindungsverhandlung nicht berücksichtigt.
    > Dies ermöglicht es Ihnen, die Verwendung von Codecs zu verhindern, die Sie nicht verwenden möchten.

    Jedes Codec-Objekt im Array hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}

      - : Eine positive ganze Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
        Zum Beispiel gibt bei Audiocodecs ein Wert von 1 monauralen Ton an, während 2 Stereo angibt.

    - `clockRate`

      - : Eine positive ganze Zahl, die die Abtastrate des Codecs in Hertz (Hz) angibt.
        Die Abtastrate ist die Geschwindigkeit, mit der der RTP-Zeitstempel des Codecs voranschreitet.
        Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie zulassen.
        Die IANA führt eine [Liste der Codecs und ihrer Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Abtastraten.

    - `mimeType`

      - : Ein String, der den MIME-Mediatyp und Subtyp des Codecs angibt und als String der Form `"type/subtype"` spezifiziert ist.
        Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Siehe auch [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.

    - `sdpFmtpLine` {{optional_inline}}

      - : Ein String, der das formatspezifische Parameterfeld der `a=fmtp`-Zeile im {{Glossary("SDP", "SDP")}} angibt, das dem Codec entspricht, falls das Feld vorhanden ist.
        Wenn es kein Parameterfeld gibt, wird diese Eigenschaft ausgelassen.

### Rückgabewert

None ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `codecs`-Liste enthält ein oder mehrere Codecs, die vom [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) nicht unterstützt werden, der dem Transceiver zugeordnet ist.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `codecs`-Liste enthält nur Einträge für RTX, RED, FEC oder Komfortgeräusch oder ist eine leere Menge.
    Die Codecs müssen immer einen Codec für die Medien enthalten.

## Beispiele

### Erstellen des Arrays bevorzugter Codecs

Der empfohlene Weg, um Codec-Präferenzen festzulegen, besteht darin, zuerst das Array der tatsächlich für das Dekodieren empfangener Daten unterstützten Codecs zu erhalten und dann die Liste in absteigender Präferenzreihenfolge neu zu ordnen.

Es ist wichtig, mit der Liste der unterstützten Codecs zu beginnen (und nicht mit einer fest codierten Liste Ihrer bevorzugten Codecs), da, wenn Sie welche einfügen, die vom zugeordneten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) nicht unterstützt werden, der Browser eine `InvalidAccessError`-Ausnahme auslöst, wenn Sie die `setCodecPreferences()`-Methode aufrufen.
Darüber hinaus muss das Array geeignete Codecs für die Übertragung, Redundanz und Fehlerkorrektur enthalten, und das Starten mit der Liste der unterstützten Codecs stellt sicher, dass diese vorhanden sind.

Sie können die für die Daten-Dekodierung unterstützten Codecs mit der statischen Methode [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) wie folgt abrufen:

```js
const availReceiveCodecs = transceiver.receiver.getCapabilities("video").codecs;
```

Um das Codecs-Array in unsere bevorzugte Reihenfolge zu sortieren, können wir die folgende Sortierfunktion verwenden, um nach MIME-Typ zu sortieren (dies stammt aus [setCodecPreferences is now in all browsers!](https://blog.mozilla.org/webrtc/cross-browser-support-for-choosing-webrtc-codecs/) auf blog.mozilla.org (2024)).

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

Die Methode nimmt die Liste der unterstützten Codecs und ein Array, das die bevorzugten MIME-Typen in absteigender Reihenfolge enthält, und gibt das Array sortiert zurück.
Der untenstehende Code zeigt, wie dies verwendet wird, vorausgesetzt, Sie haben bereits eine Peer-Verbindung (`peerConnection`) eingerichtet:

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
- [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Einführung in das Real-Time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [Web-Medientechnologien](/de/docs/Web/Media)
