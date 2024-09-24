---
title: "RTCRtpTransceiver: setCodecPreferences()-Methode"
short-title: setCodecPreferences()
slug: Web/API/RTCRtpTransceiver/setCodecPreferences
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`setCodecPreferences()`**-Methode des {{domxref("RTCRtpTransceiver")}}-Interfaces wird verwendet, um die Codecs festzulegen, die der Transceiver für das Dekodieren von _empfangenen_ Daten in absteigender Prioritätsreihenfolge zulässt.

Die mit dieser Methode festgelegten Präferenzen beeinflussen, welche Codecs mit dem entfernten Partner für die Codierung der von ihm gesendeten Daten ausgehandelt werden, einschließlich derjenigen, die für erneute Übertragungen, Redundanz und Vorwärtsfehlerkorrektur verwendet werden. Codecs, die nicht in der Präferenzliste enthalten sind, werden nicht in die Verhandlung einbezogen. Beachten Sie, dass die von diesem Transceiver für das _Senden_ von Inhalten verwendeten Präferenzen von den Präferenzen des entfernten Partners abhängen.

Der empfohlene Weg, um Codec-Präferenzen festzulegen, besteht darin, zuerst das Array der Codecs zu erhalten, die tatsächlich für das Dekodieren empfangener Daten unterstützt werden, und diese dann in absteigender Präferenzordnung neu zu ordnen. Dies stellt sicher, dass das Array in der erforderlichen Reihenfolge geordnet ist, keine nicht unterstützten Codecs enthält und auch Codecs enthält, die für erneute Übertragungen, Redundanz und Vorwärtsfehlerkorrektur benötigt werden.

Die angegebene Menge an Codecs wird für alle zukünftigen Verbindungen verwendet, die diesen Transceiver beinhalten, bis diese Methode erneut aufgerufen wird.

Bei der Vorbereitung zum Öffnen einer {{domxref("RTCPeerConnection")}} sollten die Codecs mit `setCodecPreferences()` _vor_ dem Aufrufen von entweder {{domxref("RTCPeerConnection.createOffer()")}} oder {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}}, da diese die Verhandlung initiieren (und standardmäßig Codec-Parameter aus der Standardkonfiguration des {{Glossary("user agent", "Benutzeragenten")}} verwenden).

Die Codecs können geändert werden, während eine Kommunikation im Gange ist, aber Sie müssen zuerst `setCodecPreferences()` aufrufen und dann eine neue Verhandlung einleiten. Eine WebRTC-Anwendung wird bereits Code dafür im [`negotiationneeded`-Ereignishandler](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) haben. Beachten Sie jedoch, dass zum Zeitpunkt des Schreibens das Ereignis nicht automatisch ausgelöst wird, wenn Sie `setCodecPreferences()` aufrufen, sodass Sie `onnegotiationneeded` selbst aufrufen müssen.

Ein Leitfaden zu den von WebRTC unterstützten Codecs—und zu den positiven und negativen Merkmalen jedes Codecs—finden Sie in [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs).

## Syntax

```js-nolint
setCodecPreferences(codecs)
```

### Parameter

- `codecs`

  - : Ein Array von Objekten, von denen jedes die Parameter für einen der vom Transceiver unterstützten [Media-Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) in bevorzugter Reihenfolge bereitstellt.
    Wenn `codecs` leer ist, werden alle Codec-Konfigurationen auf die Standardwerte des Benutzeragenten zurückgesetzt.

    > [!NOTE]
    > Alle Codecs, die nicht in `codecs` enthalten sind, werden während des Aushandlungsprozesses einer Verbindung nicht berücksichtigt.
    > Auf diese Weise können Sie die Verwendung von Codecs verhindern, die Sie nicht verwenden möchten.

    Jedes Codec-Objekt im Array hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}

      - : Eine positive ganze Zahl, die angibt, wie viele Kanäle der Codec unterstützt.
        Zum Beispiel gibt für Audio-Codecs ein Wert von 1 Mono-Sound an, während 2 Stereo bedeutet.

    - `clockRate`

      - : Eine positive ganze Zahl, die die Abtastrate des Codecs in Hertz (Hz) angibt.
        Die Abtastrate ist die Rate, mit der sich der RTP-Zeitstempel des Codecs erhöht.
        Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie zulassen.
        Die IANA pflegt eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Abtastraten.

    - `mimeType`

      - : Ein String, der den MIME-Mediatyp und Subtyp des Codecs angibt, spezifiziert als eine Zeichenkette der Form `"type/subtype"`.
        Die MIME-Typ-Zeichenfolgen, die von RTP verwendet werden, unterscheiden sich von denen, die an anderer Stelle verwendet werden.
        IANA pflegt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Siehe auch [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.

    - `sdpFmtpLine` {{optional_inline}}

      - : Eine Zeichenfolge, die das formatspezifische Parameterfeld der `a=fmtp`-Zeile im {{Glossary("SDP")}} angibt, die dem Codec entspricht, falls das Feld vorhanden ist.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft ausgelassen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Die `codecs`-Liste enthält einen oder mehrere Codecs, die von dem mit dem Transceiver verbundenen {{domxref("RTCRtpReceiver")}} nicht unterstützt werden.
- `InvalidModificationError` {{domxref("DOMException")}}
  - : Die `codecs`-Liste enthält nur Einträge für RTX, RED, FEC oder Comfort Noise oder ist eine leere Menge.
    Die Codecs müssen immer einen Codec für die Medien enthalten.

## Beispiele

### Erstellen des Arrays bevorzugter Codecs

Der empfohlene Weg, um Codec-Präferenzen festzulegen, besteht darin, zuerst das Array der Codecs zu erhalten, die tatsächlich für das Dekodieren empfangener Daten unterstützt werden, und dann die Liste in absteigender Präferenzreihenfolge neu zu ordnen.

Es ist wichtig, mit der Liste der unterstützten Codecs zu beginnen (und nicht mit einer fest codierten Liste Ihrer bevorzugten Codecs), da, wenn Sie Codecs einschließen, die nicht vom zugehörigen {{domxref("RTCRtpReceiver")}} unterstützt werden, der Browser eine `InvalidAccessError`-Ausnahme wirft, wenn Sie die `setCodecPreferences()`-Methode aufrufen. Darüber hinaus muss das Array geeignete Codecs für erneute Übertragungen, Redundanz und Vorwärtsfehlerkorrektur enthalten, und mit der Liste der unterstützten Codecs zu beginnen, stellt sicher, dass diese vorhanden sind.

Sie können die Codecs, die für die Decodierung von Daten unterstützt werden, mit der statischen Methode {{domxref("RTCRtpReceiver.getCapabilities_static", "RTCRtpReceiver.getCapabilities()")}} wie gezeigt erhalten:

```js
const availReceiveCodecs = transceiver.receiver.getCapabilities("video").codecs;
```

Um das Codecs-Array in unsere bevorzugte Reihenfolge neu zu ordnen, können wir die untenstehende Sortierfunktion verwenden, um nach MIME-Typ zu sortieren (dieses Beispiel stammt aus [setCodecPreferences is now in all browsers!](https://blog.mozilla.org/webrtc/cross-browser-support-for-choosing-webrtc-codecs/) auf blog.mozilla.org (2024)).

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

Die Methode nimmt die Liste der unterstützten Codecs und ein Array, das die bevorzugten MIME-Typen in abnehmender Reihenfolge enthält, und gibt das Array sortiert zurück. Der untenstehende Code zeigt, wie dies verwendet wird, vorausgesetzt, dass Sie bereits eine Peer-Verbindung (`peerConnection`) eingerichtet haben:

```js
// Holen Sie die unterstützten Codecs und sortieren Sie nach den bevorzugten Codecs
const supportedCodecs = RTCRtpReceiver.getCapabilities("video").codecs;
const preferredCodecs = ["video/H264", "video/VP8", "video/VP9"];
const sortedCodecs = sortByMimeTypes(supportedCodecs, preferredCodecs);

// Holen Sie den Transceiver für die Verbindung und setzen Sie die Präferenzen
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
