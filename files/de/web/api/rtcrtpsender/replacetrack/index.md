---
title: "RTCRtpSender: Methode replaceTrack()"
short-title: replaceTrack()
slug: Web/API/RTCRtpSender/replaceTrack
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("WebRTC")}}

Die Methode **`replaceTrack()`** des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) ersetzt den derzeit verwendeten Track als Quelle des Senders durch einen neuen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack).

Der neue Track muss die gleiche Art von Medien (Audio, Video, etc.) haben, und das Umschalten des Tracks sollte keine Verhandlung erfordern.

Einer der Anwendungsfälle für `replaceTrack()` ist der häufige Bedarf, zwischen der Rück- und Frontkamera eines Telefons zu wechseln. Mit `replaceTrack()` können Sie ein Track-Objekt für jede Kamera haben und bei Bedarf zwischen diesen wechseln. Siehe das Beispiel [Wechsel der Videokameras](#wechsel_der_videokameras) unten.

## Syntax

```js-nolint
replaceTrack(newTrack)
```

### Parameter

- `newTrack` {{optional_inline}}
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der den Track angibt, mit dem der aktuelle Quellentrack des `RTCRtpSender` ersetzt werden soll. Der neue Track muss die gleiche [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) haben wie der aktuelle Track, andernfalls schlägt die Ersetzung fehl.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Track erfolgreich ersetzt wurde. Das Promise wird abgelehnt, wenn der Track aus irgendeinem Grund nicht ersetzt werden kann; häufig ist dies der Fall, weil die Änderung eine Neuaushandlung des Codecs erfordern würde, was nicht erlaubt ist (siehe [Dinge, die Verhandlung erfordern](#dinge,_die_verhandlung_erfordern)).

Wenn `newTrack` ausgelassen oder `null` war, stoppt `replaceTrack()` den Sender. Eine Verhandlung ist in diesem Fall nicht erforderlich.

Wenn das Promise erfüllt wird, erhält der Erfüllungs-Handler einen Wert von `undefined`.

### Ausnahmen

Wenn das zurückgegebene Promise abgelehnt wird, wird dem Ablehnungs-Handler eine der folgenden Ausnahmen bereitgestellt:

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Ersetzen des aktuellen Tracks des `RTCRtpSender` durch den neuen eine Verhandlung erfordern würde.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Track, auf dem diese Methode aufgerufen wurde, gestoppt ist, anstatt zu laufen.
- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn die `kind` des neuen Tracks nicht mit der des ursprünglichen Tracks übereinstimmt.

## Hinweise zur Verwendung

### Dinge, die Verhandlung erfordern

Die meisten Track-Ersetzungen können ohne Neuaushandlung durchgeführt werden. Tatsächlich können selbst Änderungen, die riesig erscheinen, ohne Verhandlung durchgeführt werden. Einige Änderungen können jedoch eine Verhandlung erfordern und somit `replaceTrack()` fehlschlagen lassen:

- Der neue Track hat eine Auflösung, die außerhalb der mit dem Gegenüber verhandelten Dimensionen liegt; jedoch erlauben die meisten Browser-Endpunkte Auflösungsänderungen.
- Die Bildrate des neuen Tracks ist so hoch, dass die Blockrate des Codecs überschritten wird.
- Der neue Track ist ein Videotrack und sein roher oder vorcodierter Zustand unterscheidet sich von dem des ursprünglichen Tracks.
- Der neue Track ist ein Audiotrack mit einer anderen Anzahl von Kanälen als der ursprüngliche.
- Medienquellen, die über integrierte Encoder verfügen — wie Hardware-Encoder — können den verhandelten Codec möglicherweise nicht bereitstellen. Software-Quellen implementieren den verhandelten Codec möglicherweise nicht.

## Beispiele

### Wechsel der Videokameras

```js
const localConnection = new RTCPeerConnection();
const remoteConnection = new RTCPeerConnection();
// Configuring these to use the WebRTC API can be explored at
// https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample
const connections = [localConnection, remoteConnection];
function setCamera(selectedCamera) {
  navigator.mediaDevices
    .getUserMedia({
      video: {
        deviceId: {
          exact: selectedCamera,
        },
      },
    })
    .then((stream) => {
      const [videoTrack] = stream.getVideoTracks();
      connections.forEach((pc) => {
        const sender = pc
          .getSenders()
          .find((s) => s.track.kind === videoTrack.kind);
        console.log("Found sender:", sender);
        sender.replaceTrack(videoTrack);
      });
    })
    .catch((err) => {
      console.error(`Error happened: ${err}`);
    });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
