---
title: "Navigator: getUserMedia() Methode"
short-title: getUserMedia()
slug: Web/API/Navigator/getUserMedia
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Media Capture and Streams")}}{{deprecated_header}}{{SecureContext_Header}}

Die veraltete **`Navigator.getUserMedia()`** Methode fordert den Benutzer um Erlaubnis auf, bis zu einem Videoeingabegerät (wie eine Kamera oder geteilten Bildschirm) und bis zu einem Audioeingabegerät (wie ein Mikrofon) als Quelle für einen [`MediaStream`](/de/docs/Web/API/MediaStream) zu verwenden.

Wenn die Erlaubnis erteilt wird, wird ein `MediaStream`, dessen Video- und/oder Audio-Tracks von diesen Geräten stammen, an den angegebenen Erfolgs-Callback übergeben. Wird die Erlaubnis verweigert, existieren keine kompatiblen Eingabegeräte oder tritt ein anderer Fehler auf, wird der Fehler-Callback mit einem Objekt ausgeführt, das beschreibt, was schiefgelaufen ist. Wenn der Benutzer keine Wahl trifft, wird keiner der Callback-Funktionen ausgeführt.

> [!NOTE]
> Dies ist eine veraltete Methode.
> Bitte verwenden Sie stattdessen die neuere [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) Methode.
> Obwohl technisch nicht veraltet, wird diese alte Callback-Version als veraltet markiert, da die Spezifikation stark zur Verwendung der neueren, eine Promise zurückgebenden Version rät.

## Syntax

```js-nolint
getUserMedia(constraints, successCallback, errorCallback)
```

### Parameter

- `constraints`
  - : Ein Objekt, das die Arten von Medien spezifiziert, die angefordert werden sollen, zusammen mit den Anforderungen für jede Art. Details finden Sie im Abschnitt [constraints](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) unter der modernen [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) Methode sowie im Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).
- `successCallback`

  - : Eine Funktion, die aufgerufen wird, wenn die Anfrage für den Medienzugriff genehmigt wird. Die Funktion wird mit einem Parameter aufgerufen: dem [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt, das den Medienstrom enthält. Ihr Callback kann dann den Stream dem gewünschten Objekt (wie einem {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element) zuweisen, wie im folgenden Beispiel gezeigt:

    ```js
    function successCallback(stream) {
      const video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        // Do something with the video here.
      };
    }
    ```

- `errorCallback`
  - : Wenn der Aufruf fehlschlägt, wird die Funktion, die im `errorCallback` spezifiziert ist, mit einem Objekt als einziges Argument aufgerufen; dieses Objekt basiert auf [`DOMException`](/de/docs/Web/API/DOMException).

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Breite und Höhe

Hier ist ein Beispiel für die Verwendung von `getUserMedia()`, einschließlich Code zur Bewältigung von Präfixen verschiedener Browser. Beachten Sie, dass dies die veraltete Methode ist: Siehe den Abschnitt [Beispiele](/de/docs/Web/API/MediaDevices/getUserMedia#frame_rate) unter der [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) für moderne Beispiele.

```js
navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia(
    { audio: true, video: { width: 1280, height: 720 } },
    (stream) => {
      const video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
      };
    },
    (err) => {
      console.error(`The following error occurred: ${err.name}`);
    },
  );
} else {
  console.log("getUserMedia not supported");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), die diese veraltete Methode ersetzt.
- [WebRTC](/de/docs/Web/API/WebRTC_API) - die Einführung in die API
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) - die API für die Medienstromobjekte
- [Webcam-Fotos aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) - ein Tutorial zur Verwendung von `getUserMedia()` zum Aufnehmen von Fotos statt Videos.
