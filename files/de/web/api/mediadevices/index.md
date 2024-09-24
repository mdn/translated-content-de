---
title: MediaDevices
slug: Web/API/MediaDevices
l10n:
  sourceCommit: b2875dbaa70efb5850084b9802803b439db325f5
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

Die **`MediaDevices`**-Schnittstelle der {{domxref("Media Capture and Streams API", "", "", "nocode")}} bietet Zugriff auf angeschlossene Media-Eingabegeräte wie Kameras und Mikrofone sowie Bildschirmfreigabe. Im Wesentlichen ermöglicht sie Ihnen den Zugriff auf jede Hardwarequelle von Mediendaten.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("EventTarget")}}._

## Instanzmethoden

_Erbt Methoden von ihrer übergeordneten Schnittstelle, {{domxref("EventTarget")}}._

- {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}}
  - : Erhält ein Array von Informationen über die im System verfügbaren Media-Eingabe- und Ausgabe-Geräte.
- {{domxref("MediaDevices.getSupportedConstraints", "getSupportedConstraints()")}}
  - : Gibt ein Objekt zurück, das den {{domxref("MediaTrackSupportedConstraints")}} entspricht und anzeigt, welche einschränkbaren Eigenschaften auf der {{domxref("MediaStreamTrack")}}-Schnittstelle unterstützt werden. Weitere Informationen zu Einschränkungen und deren Verwendung finden Sie in der [Media Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).
- {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}
  - : Fordert den Benutzer auf, ein Display oder einen Teil eines Displays (z. B. ein Fenster) auszuwählen, das als {{domxref("MediaStream")}} zum Teilen oder Aufzeichnen erfasst werden soll. Gibt ein Promise zurück, das in einen `MediaStream` aufgelöst wird.
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : Mit der Zustimmung des Benutzers über eine Eingabeaufforderung schaltet es eine Kamera und/oder ein Mikrofon im System ein und stellt einen {{domxref("MediaStream")}} zur Verfügung, der einen Videospur und/oder eine Audiospur mit der Eingabe enthält.
- {{domxref("MediaDevices.selectAudioOutput", "selectAudioOutput()") }} {{Experimental_Inline}}
  - : Fordert den Benutzer auf, ein bestimmtes Audio-Ausgabegerät auszuwählen.

## Ereignisse

- {{domxref("MediaDevices/devicechange_event", "devicechange")}}
  - : Wird ausgelöst, wenn ein Media-Eingabe- oder -Ausgabegerät an den Computer des Benutzers angeschlossen oder von ihm entfernt wird.

## Beispiel

```js
// Variablen im globalen Bereich setzen, um sie in der Browser-Konsole verfügbar zu machen.
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
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): Die API, die die Methode {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} definiert.
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- {{domxref("Navigator.mediaDevices")}}: Gibt eine Referenz zu einem `MediaDevices`-Objekt zurück, das zum Zugriff auf Geräte verwendet werden kann.
- [CameraCaptureJS:](https://github.com/chrisjohndigital/CameraCaptureJS) HTML-Videoaufnahme und Wiedergabe mit `MediaDevices` und der MediaStream Recording API
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Videosprachlabor-Webanwendung, die `MediaDevices` und die MediaStream Recording API für Videoaufnahmen verwendet
