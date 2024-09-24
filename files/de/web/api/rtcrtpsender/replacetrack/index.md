---
title: "RTCRtpSender: Die Methode replaceTrack()"
short-title: replaceTrack()
slug: Web/API/RTCRtpSender/replaceTrack
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("WebRTC")}}

Die Methode **`replaceTrack()`** des {{domxref("RTCRtpSender")}} ersetzt den aktuell als Quelle des Senders verwendeten Track durch einen neuen {{domxref("MediaStreamTrack")}}.

Der neue Track muss von der gleichen Medienart sein (Audio, Video usw.) und das Wechseln des Tracks sollte keine Verhandlung erfordern.

Zu den Anwendungsfällen für `replaceTrack()` gehört das häufige Bedürfnis, zwischen der hinteren und der vorderen Kamera eines Telefons zu wechseln. Mit `replaceTrack()` können Sie ein Track-Objekt für jede Kamera haben und bei Bedarf zwischen beiden wechseln. Siehe das Beispiel [Wechsel zwischen Videokameras](#wechsel_zwischen_videokameras) unten.

## Syntax

```js-nolint
replaceTrack(newTrack)
```

### Parameter

- `newTrack` {{optional_inline}}
  - : Ein {{domxref("MediaStreamTrack")}}, der den Track angibt, mit dem der aktuelle Quellentrack des `RTCRtpSender` ersetzt werden soll. Die {{domxref("MediaStreamTrack.kind", "Art")}} des neuen Tracks muss mit der des aktuellen Tracks übereinstimmen, ansonsten schlägt die Anfrage zum Ersetzen des Tracks fehl.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Track erfolgreich ersetzt wurde. Das Promise wird abgelehnt, wenn der Track aus irgendeinem Grund nicht ersetzt werden kann; dies liegt häufig daran, dass die Änderung eine Neukodierungsverhandlung erfordern würde, was nicht erlaubt ist (siehe [Dinge, die Verhandlung erfordern](#dinge,_die_verhandlung_erfordern)).

Wenn `newTrack` weggelassen wurde oder `null` war, stoppt `replaceTrack()` den Sender. In diesem Fall ist keine Verhandlung erforderlich.

Wenn das Promise erfüllt wird, erhält der Erfüllungs-Handler den Wert `undefined`.

### Ausnahmen

Wenn das zurückgegebene Promise abgelehnt wird, wird dem Ablehnungs-Handler eine der folgenden Ausnahmen zur Verfügung gestellt:

- `InvalidModificationError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn das Ersetzen des aktuellen Tracks des `RTCRtpSender` durch den neuen eine Verhandlung erfordern würde.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn der Track, auf dem diese Methode aufgerufen wurde, gestoppt und nicht aktiv ist.
- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn die `Art` des neuen Tracks nicht mit der des ursprünglichen Tracks übereinstimmt.

## Nutzungshinweise

### Dinge, die Verhandlung erfordern

Die meisten Track-Ersetzungen können ohne Neuverhandlung durchgeführt werden. Tatsächlich können sogar Änderungen, die erheblich erscheinen, ohne Verhandlung durchgeführt werden. Einige Änderungen können jedoch eine Verhandlung erfordern und somit `replaceTrack()` zum Scheitern bringen:

- Der neue Track hat eine Auflösung, die außerhalb der mit dem Peer vereinbarten Dimensionen liegt; jedoch erlauben es die meisten Browser-Endpunkte, die Auflösung zu ändern.
- Die Bildrate des neuen Tracks ist so hoch, dass die Codec-Blockrate überschritten wird.
- Der neue Track ist ein Video-Track und sein Rohzustand oder vorcodierter Zustand unterscheidet sich von dem des ursprünglichen Tracks.
- Der neue Track ist ein Audio-Track mit einer anderen Anzahl von Kanälen als der ursprüngliche.
- Medienquellen, die eingebettete Encoder — wie Hardware-Encoder — haben, können möglicherweise den vereinbarten Codec nicht bereitstellen. Softwarequellen implementieren den vereinbarten Codec möglicherweise nicht.

## Beispiele

### Wechsel zwischen Videokameras

```js
const localConnection = new RTCPeerConnection();
const remoteConnection = new RTCPeerConnection();
// Die Konfiguration dieser für die Verwendung der WebRTC-API kann unter
// https://developer.mozilla.org/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample
// erkundet werden
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
