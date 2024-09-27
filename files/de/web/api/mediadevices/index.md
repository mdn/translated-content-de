---
title: MediaDevices
slug: Web/API/MediaDevices
l10n:
  sourceCommit: b2875dbaa70efb5850084b9802803b439db325f5
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

Das **`MediaDevices`** Interface der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) bietet Zugriff auf verbundene Medieneingabegeräte wie Kameras und Mikrofone sowie auf Bildschirmfreigabe. Im Wesentlichen ermöglicht es den Zugriff auf jede Hardwarequelle von Mediendaten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanz-Methoden

_Erbt Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
  - : Besorgt ein Array mit Informationen über die auf dem System verfügbaren Medien-Ein- und Ausgabegeräte.
- [`getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
  - : Gibt ein Objekt zurück, das den [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints) entspricht und anzeigt, welche Einschränkungen auf dem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Interface unterstützt werden. Siehe [Media Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints), um mehr über Einschränkungen und ihren Einsatz zu erfahren.
- [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
  - : Fordert den Benutzer auf, ein Anzeigegerät oder einen Teil davon (wie ein Fenster) auszuwählen, um es als [`MediaStream`](/de/docs/Web/API/MediaStream) für Freigabe- oder Aufnahmezwecke zu erfassen. Gibt ein Promise zurück, das zu einem `MediaStream` aufgelöst wird.
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
  - : Nach Erlaubnis des Benutzers über ein Eingabeaufforderung schaltet es eine Kamera und/oder ein Mikrofon des Systems ein und bietet einen [`MediaStream`](/de/docs/Web/API/MediaStream), der eine Video- und/oder eine Audiospur mit der Eingabe enthält.
- [`selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) {{Experimental_Inline}}
  - : Fordert den Benutzer auf, ein bestimmtes Audioausgabegerät auszuwählen.

## Ereignisse

- [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event)
  - : Wird ausgelöst, wenn ein Medien-Ein- oder Ausgabegerät an den oder vom Computer des Benutzers angeschlossen oder entfernt wird.

## Beispiel

```js
// Put variables in global scope to make them available to the browser console.
const video = document.querySelector("video");
const constraints = {
  audio: false,
  video: true,
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then((stream) => {
    const videoTracks = stream.getVideoTracks();
    console.log("Got stream with constraints:", constraints);
    console.log(`Using video device: ${videoTracks[0].label}`);
    stream.onremovetrack = () => {
      console.log("Stream ended");
    };
    video.srcObject = stream;
  })
  .catch((error) => {
    if (error.name === "OverconstrainedError") {
      console.error(
        `The resolution ${constraints.video.width.exact}x${constraints.video.height.exact} px is not supported by your device.`,
      );
    } else if (error.name === "NotAllowedError") {
      console.error(
        "You need to grant this page permission to access your camera and microphone.",
      );
    } else {
      console.error(`getUserMedia error: ${error.name}`, error);
    }
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): Die API, zu der dieses Interface gehört.
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): Die API, die die [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) Methode definiert.
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`Navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices): Gibt eine Referenz auf ein `MediaDevices` Objekt zurück, das zum Zugriff auf Geräte verwendet werden kann.
- [CameraCaptureJS:](https://github.com/chrisjohndigital/CameraCaptureJS) HTML-Videoaufzeichnung und -wiedergabe mit `MediaDevices` und der MediaStream Recording API
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabore-Webanwendung unter Verwendung von `MediaDevices` und der MediaStream Recording API zur Videoaufnahme
