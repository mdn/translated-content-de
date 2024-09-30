---
title: "RTCRtpSender: Methode replaceTrack()"
short-title: replaceTrack()
slug: Web/API/RTCRtpSender/replaceTrack
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("WebRTC")}}

Die Methode **`replaceTrack()`** des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) ersetzt die momentan als Quelle des Senders verwendete Spur mit einer neuen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack).

Die neue Spur muss vom gleichen Medientyp sein (Audio, Video usw.) und der Wechsel der Spur sollte keine Neuverhandlung erfordern.

Zu den Anwendungsfällen für `replaceTrack()` gehört der häufige Bedarf, zwischen den rückseitigen und den frontseitigen Kameras eines Telefons zu wechseln. Mit `replaceTrack()` können Sie ein Spur-Objekt für jede Kamera haben und bei Bedarf zwischen den beiden wechseln. Siehe das Beispiel [Wechseln zwischen Videokameras](#wechseln_zwischen_videokameras) unten.

## Syntax

```js-nolint
replaceTrack(newTrack)
```

### Parameter

- `newTrack` {{optional_inline}}
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der die Spur spezifiziert, mit der die aktuelle Quellspur des `RTCRtpSender` ersetzt werden soll. Die `kind` der neuen Spur muss mit der der aktuellen Spur übereinstimmen, sonst schlägt die Anforderung zum Ersetzen der Spur fehl.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Spur erfolgreich ersetzt wurde. Das Versprechen wird abgelehnt, wenn die Spur aus irgendeinem Grund nicht ersetzt werden kann; dies liegt häufig daran, dass die Änderung eine Neuverhandlung des Codecs erfordern würde, was nicht erlaubt ist (siehe [Dinge, die eine Neuverhandlung erfordern](#dinge,_die_eine_neuverhandlung_erfordern)).

Wenn `newTrack` weggelassen wurde oder `null` war, stoppt `replaceTrack()` den Sender. In diesem Fall ist keine Neuverhandlung erforderlich.

Wenn das Versprechen erfüllt ist, erhält der Erfüllungshandler einen Wert von `undefined`.

### Ausnahmen

Wenn das zurückgegebene Versprechen abgelehnt wird, wird dem Ablehnungshandler einer der folgenden Ausnahmen bereitgestellt:

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Ersetzen der aktuellen Spur des `RTCRtpSender` durch die neue eine Neuverhandlung erfordern würde.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Spur, auf der diese Methode aufgerufen wurde, gestoppt statt ausgeführt wird.
- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn die `kind` der neuen Spur nicht mit der ursprünglichen Spur übereinstimmt.

## Nutzungshinweise

### Dinge, die eine Neuverhandlung erfordern

Die meisten Spurwechsel können ohne Neuverhandlung durchgeführt werden. Tatsächlich können sogar Änderungen, die groß erscheinen, ohne Neuverhandlung durchgeführt werden. Einige Änderungen können jedoch eine Neuverhandlung erfordern und damit dazu führen, dass `replaceTrack()` fehlschlägt:

- Die neue Spur hat eine Auflösung, die außerhalb der mit dem Gegenüber verhandelten Dimensionen liegt; jedoch erlauben die meisten Browser-Endpunkte Änderungen der Auflösung.
- Die Bildrate der neuen Spur ist hoch genug, um die Blockrate des Codecs zu überschreiten.
- Die neue Spur ist eine Videospur und ihr Roh- oder Vorab-codierter Zustand unterscheidet sich von dem der ursprünglichen Spur.
- Die neue Spur ist eine Audiospur mit einer anderen Anzahl von Kanälen als die ursprüngliche.
- Medienquellen, die über integrierte Encoder verfügen — wie Hardware-Encoder — können möglicherweise den verhandelten Codec nicht bereitstellen. Softwarequellen implementieren möglicherweise den verhandelten Codec nicht.

## Beispiele

### Wechseln zwischen Videokameras

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
