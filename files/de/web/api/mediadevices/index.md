---
title: MediaDevices
slug: Web/API/MediaDevices
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

Die **`MediaDevices`**-Schnittstelle der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) ermöglicht den Zugriff auf angeschlossene Medieneingabegeräte wie Kameras und Mikrofone sowie auf die Bildschirmfreigabe. Damit können Sie auf Hardwarequellen für Mediendaten zugreifen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanzmethoden

_Erbt Methoden von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices)
  - : Liefert ein Array mit Informationen über die auf dem System verfügbaren Medieneingabe- und -ausgabegeräte.
- [`getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
  - : Gibt ein Objekt zurück, das angibt, welche einschränkbaren Eigenschaften von der Schnittstelle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) unterstützt werden. Weitere Informationen zu Constraints und ihrer Verwendung finden Sie unter [Media Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).
- [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
  - : Fordert die nutzende Person auf, einen Bildschirm oder einen Teil davon (etwa ein Fenster) auszuwählen, um ihn als [`MediaStream`](/de/docs/Web/API/MediaStream) für die Freigabe oder Aufzeichnung zu erfassen. Gibt ein Promise zurück, das mit einem `MediaStream` erfüllt wird.
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
  - : Aktiviert nach einer Berechtigungsabfrage eine Kamera und/oder ein Mikrofon des Systems und stellt einen [`MediaStream`](/de/docs/Web/API/MediaStream) bereit, der einen Videotrack und/oder einen Audiotrack mit den Eingabedaten enthält.
- [`selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) {{Experimental_Inline}}
  - : Fordert die nutzende Person auf, ein bestimmtes Audioausgabegerät auszuwählen.

## Ereignisse

- [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event)
  - : Wird ausgelöst, wenn ein Medieneingabe- oder -ausgabegerät an den Computer der nutzenden Person angeschlossen oder davon entfernt wird.

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

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): Die API, zu der diese Schnittstelle gehört.
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): Die API, die die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) definiert.
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`Navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices): Gibt eine Referenz auf ein `MediaDevices`-Objekt zurück, über das auf Geräte zugegriffen werden kann.
- [CameraCaptureJS:](https://github.com/chrisjohndigital/CameraCaptureJS) Erfassung und Wiedergabe von HTML-Videos mit `MediaDevices` und der MediaStream Recording API
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): Webanwendung für ein Sprachlabor mit HTML-Videos, die `MediaDevices` und die MediaStream Recording API zur Videoaufzeichnung verwendet
