---
title: MediaDevices
slug: Web/API/MediaDevices
l10n:
  sourceCommit: b2875dbaa70efb5850084b9802803b439db325f5
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

Das **`MediaDevices`**-Interface der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) bietet Zugang zu verbundenen Medieneingabegeräten wie Kameras und Mikrofonen sowie zu Bildschirmfreigaben. Im Wesentlichen ermöglicht es den Zugriff auf jede Hardwarequelle für Mediendaten.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanzmethoden

_Erbt Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
  - : Erhält ein Array mit Informationen über die auf dem System verfügbaren Medienein- und -ausgabegeräte.
- [`getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
  - : Gibt ein Objekt zurück, das den [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints) entspricht und angibt, welche einschränkbaren Eigenschaften auf dem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interface unterstützt werden. Siehe [Media Streams-API](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints), um mehr über Einschränkungen und deren Verwendung zu erfahren.
- [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
  - : Fordert den Benutzer auf, ein Display oder einen Teil eines Displays (wie ein Fenster) auszuwählen, um es als [`MediaStream`](/de/docs/Web/API/MediaStream) für Freigabe- oder Aufnahmezwecke aufzunehmen. Gibt ein Versprechen zurück, das in einen `MediaStream` aufgelöst wird.
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
  - : Schaltet mit Erlaubnis des Benutzers über ein Eingabefenster eine Kamera und/oder ein Mikrofon auf dem System ein und stellt einen [`MediaStream`](/de/docs/Web/API/MediaStream) bereit, der eine Videospur und/oder eine Audiospur mit dem Eingang enthält.
- [`selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) {{Experimental_Inline}}
  - : Fordert den Benutzer auf, ein bestimmtes Audioausgabegerät auszuwählen.

## Ereignisse

- [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event)
  - : Wird ausgelöst, wenn ein Medien-Eingabe- oder -Ausgabegerät an den, oder von dem Computer des Benutzers entfernt wird.

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
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): Die API, die die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) definiert.
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`Navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices): Gibt eine Referenz auf ein `MediaDevices`-Objekt zurück, das zum Zugriff auf Geräte verwendet werden kann.
- [CameraCaptureJS:](https://github.com/chrisjohndigital/CameraCaptureJS) HTML-Videokapazität und -wiedergabe mit `MediaDevices` und der MediaStream Recording API
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Videosprachenlabor-Webanwendung mit `MediaDevices` und der MediaStream Recording API für Videoaufnahmen
