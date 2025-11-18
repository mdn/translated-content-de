---
title: "RTCRtpTransceiver: setCodecPreferences() Methode"
short-title: setCodecPreferences()
slug: Web/API/RTCRtpTransceiver/setCodecPreferences
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Die **`setCodecPreferences()`**-Methode der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Schnittstelle wird verwendet, um die Codecs festzulegen, die der Transceiver zum Dekodieren _empfangener_ Daten zulässt, in absteigender Präferenzreihenfolge.

Die mit dieser Methode festgelegten Präferenzen beeinflussen, welche Codecs mit dem entfernten Peer zum Encodieren der gesendeten Daten ausgehandelt werden, einschließlich derjenigen, die für Wiederübertragung, Redundanz und Vorwärtsfehlerkorrektur verwendet werden.
Codecs, die nicht in der Präferenzliste enthalten sind, werden nicht Teil der Verhandlung sein.
Beachten Sie, dass die Präferenzen, die dieser Transceiver für das _Senden_ von Inhalten verwendet, von den Präferenzen des entfernten Peers abhängen.

Der empfohlene Weg, um Codec-Präferenzen festzulegen, besteht darin, zuerst das Array der Codecs zu holen, die tatsächlich zum Dekodieren empfangener Daten unterstützt werden, und dann diese in absteigender Präferenzordnung neu zu ordnen.
Dies stellt sicher, dass das Array in der erforderlichen Reihenfolge geordnet ist, keine nicht unterstützten Codecs enthält und auch die Codecs umfasst, die für Wiederübertragung, Redundanz und Vorwärtsfehlerkorrektur benötigt werden.

Die angegebene Menge an Codecs wird für alle zukünftigen Verbindungen verwendet, die diesen Transceiver beinhalten, bis diese Methode erneut aufgerufen wird.

Beim Vorbereiten der Eröffnung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sollten die Codecs mit `setCodecPreferences()` _vor_ dem Aufruf von entweder [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) oder [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) festgelegt werden, da diese die Verhandlung initiieren (und standardmäßig Codec-Parameter aus der {{Glossary("user_agent", "Benutzeragentur")}} Standardkonfiguration verwenden).

Die Codecs können geändert werden, wenn Sie eine laufende Kommunikation haben, aber Sie müssen zuerst `setCodecPreferences()` aufrufen und dann eine neue Verhandlung einleiten.
Eine WebRTC-Anwendung wird dafür bereits Code im [`negotiationneeded` Event-Handler](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) haben.
Beachten Sie jedoch, dass zum Zeitpunkt des Schreibens das Ereignis nicht automatisch ausgelöst wird, wenn Sie `setCodecPreferences()` aufrufen, daher müssen Sie `onnegotiationneeded` selbst aufrufen.

Ein Leitfaden zu den von WebRTC unterstützten Codecs—und den positiven und negativen Eigenschaften jedes Codecs—finden Sie unter [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

## Syntax

```js-nolint
setCodecPreferences(codecs)
```

### Parameter

- `codecs`
  - : Ein Array von Objekten, die jeweils die Parameter eines der vom Transceiver unterstützten [Mediencodecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) bereitstellen, in Präferenzreihenfolge sortiert.
    Wenn `codecs` leer ist, werden die Codec-Konfigurationen auf die Standardeinstellungen der Benutzeragentur zurückgesetzt.

    > [!NOTE]
    > Alle Codecs, die nicht in `codecs` enthalten sind, werden bei der Aushandlung einer Verbindung nicht berücksichtigt.
    > So können Sie die Verwendung von Codecs verhindern, die Sie nicht verwenden möchten.

    Jedes Codec-Objekt im Array hat die folgenden Eigenschaften:
    - `channels` {{optional_inline}}
      - : Eine positive ganze Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
        Zum Beispiel gibt ein Wert von 1 für Audio-Codecs monauralen Klang an, während 2 Stereo bedeutet.

    - `clockRate`
      - : Eine positive ganze Zahl, die die Abtastrate des Codecs in Hertz (Hz) angibt.
        Die Abtastrate ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
        Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie zulassen.
        Die IANA führt eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Abtastraten.

    - `mimeType`
      - : Eine Zeichenkette, die den MIME-Medientyp und -Untertyp des Codecs angibt und als Zeichenkette in der Form `"type/subtype"` spezifiziert ist.
        Die MIME-Typzeichenketten, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Siehe auch [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für weitere Informationen zu potenziellen Codecs, die hier referenziert werden könnten.

    - `sdpFmtpLine` {{optional_inline}}
      - : Eine Zeichenkette, die das formatspezifische Parameterfeld von der `a=fmtp`-Zeile im {{Glossary("SDP", "SDP")}} angibt, das dem Codec entspricht, falls vorhanden.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `codecs`-Liste enthält einen oder mehrere Codecs, die vom [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der dem Transceiver zugeordnet ist, nicht unterstützt werden.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `codecs`-Liste enthält nur Einträge für RTX, RED, FEC oder Comfort Noise oder ist ein leeres Set.
    Die Codecs müssen immer einen Codec für die Medien enthalten.

## Beispiele

### Das Array bevorzugter Codecs erstellen

Der empfohlene Weg, um Codec-Präferenzen festzulegen, besteht darin, zuerst das Array der Codecs zu holen, die tatsächlich zum Dekodieren empfangener Daten unterstützt werden, und dann die Liste in absteigender Präferenzordnung neu zu ordnen.

Es ist wichtig, mit der Liste der unterstützten Codecs zu beginnen (und nicht mit einer fest kodierten Liste Ihrer bevorzugten Codecs), da der Browser eine `InvalidAccessError`-Ausnahme wirft, wenn Sie einen einbeziehen, der vom zugehörigen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) nicht unterstützt wird, wenn Sie die `setCodecPreferences()`-Methode aufrufen.
Außerdem muss das Array geeignete Codecs für Wiederübertragung, Redundanz und Vorwärtsfehlerkorrektur enthalten, und der Start mit der Liste der unterstützten Codecs stellt sicher, dass diese vorhanden sind.

Sie können die Codecs, die zum Dekodieren von Daten unterstützt werden, mit der statischen Methode [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) abrufen, wie unten gezeigt:

```js
const availReceiveCodecs = transceiver.receiver.getCapabilities("video").codecs;
```

Um das Codec-Array in unserer bevorzugten Reihenfolge neu zu ordnen, können wir die unten stehende Sortierungsmethode verwenden, um nach MIME-Typ zu sortieren (dies stammt aus [setCodecPreferences is now in all browsers!](https://blog.mozilla.org/webrtc/cross-browser-support-for-choosing-webrtc-codecs/) auf blog.mozilla.org (2024)).

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

Die Methode nimmt die Liste der unterstützten Codecs und ein Array mit den bevorzugten MIME-Typen in absteigender Reihenfolge und gibt das in-place sortierte Array zurück.
Der folgende Code zeigt, wie dies verwendet wird, vorausgesetzt, Sie haben bereits eine Peerverbindung (`peerConnection`) eingerichtet:

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
- [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [Web-Medientechnologien](/de/docs/Web/Media)
