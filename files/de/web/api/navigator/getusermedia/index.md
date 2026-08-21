---
title: "Navigator: getUserMedia() Methode"
short-title: getUserMedia()
slug: Web/API/Navigator/getUserMedia
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

Die veraltete Methode **`Navigator.getUserMedia()`** fordert den Benutzer auf, die Erlaubnis zu erteilen, bis zu einem Videoeingabegerät (wie eine Kamera oder geteilten Bildschirm) und bis zu einem Audioeingabegerät (wie ein Mikrofon) als Quelle für einen [`MediaStream`](/de/docs/Web/API/MediaStream) zu verwenden.

Wenn die Erlaubnis erteilt wird, wird ein `MediaStream`, dessen Video- und/oder Audiotracks von diesen Geräten stammen, dem angegebenen Erfolgs-Callback übergeben. Wenn die Erlaubnis verweigert wird, keine kompatiblen Eingabegeräte vorhanden sind oder eine andere Fehlerbedingung eintritt, wird der Fehler-Callback mit einem Objekt ausgeführt, das beschreibt, was schiefgelaufen ist. Wenn der Benutzer hingegen keine Wahl trifft, wird kein Callback ausgeführt.

> [!NOTE]
> Dies ist eine veraltete Methode.
> Bitte verwenden Sie stattdessen die neuere Methode [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia).
> Obwohl technisch nicht veraltet, wird diese alte Callback-Version als solche markiert, da die Spezifikation stark empfiehlt, die neuere, versprechensbasierte Version zu verwenden.

## Syntax

```js-nolint
getUserMedia(constraints, successCallback, errorCallback)
```

### Parameter

- `constraints`
  - : Ein Objekt, das die Arten von Medien angibt, die angefordert werden sollen, sowie alle Anforderungen für jeden Typ. Weitere Details finden Sie im Abschnitt [constraints](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) unter der modernen Methode [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) sowie im Artikel [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).
- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn die Anforderung für den Medienzugriff genehmigt wird. Die Funktion wird mit einem Parameter aufgerufen: dem [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das den Medienstrom enthält. Ihr Callback kann dann den Stream dem gewünschten Objekt zuweisen (wie einem {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element), wie im folgenden Beispiel gezeigt:

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
  - : Wenn der Aufruf fehlschlägt, wird die im `errorCallback` angegebene Funktion mit einem Objekt als einziges Argument aufgerufen; dieses Objekt ist an [`DOMException`](/de/docs/Web/API/DOMException) angelehnt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Breite und Höhe

Hier ist ein Beispiel für die Verwendung von `getUserMedia()`, einschließlich Code zur Bewältigung von Präfixen verschiedener Browser. Beachten Sie, dass dies die veraltete Art ist, es zu tun: siehe den Abschnitt [Beispiele](/de/docs/Web/API/MediaDevices/getUserMedia#frame_rate) unter der modernen Methode [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) für aktuelle Beispiele.

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

- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), das diese veraltete Methode ersetzt.
- [WebRTC](/de/docs/Web/API/WebRTC_API) - die Einführungsseite zur API
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) - die API für die Medienstromobjekte
- [Webcam-Fotos aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) - ein Tutorial zur Verwendung von `getUserMedia()` zum Aufnehmen von Fotos anstatt Video.
