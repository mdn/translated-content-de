---
title: "Navigator: getUserMedia()-Methode"
short-title: getUserMedia()
slug: Web/API/Navigator/getUserMedia
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Media Capture and Streams")}}{{deprecated_header}}{{SecureContext_Header}}

Die veraltete **`Navigator.getUserMedia()`**-Methode bittet den Benutzer um Erlaubnis zur Nutzung von bis zu einem Videoeingabegerät (wie einer Kamera oder einem geteilten Bildschirm) und bis zu einem Audioeingabegerät (wie einem Mikrofon) als Quelle für einen [`MediaStream`](/de/docs/Web/API/MediaStream).

Wenn die Erlaubnis erteilt wird, wird ein `MediaStream`, dessen Video- und/oder Audiotracks von diesen Geräten stammen, an den angegebenen Success-Callback übergeben. Wird die Erlaubnis verweigert, existieren keine kompatiblen Eingabegeräte oder tritt ein anderer Fehler auf, wird der Fehler-Callback mit einem Objekt ausgeführt, das beschreibt, was schiefgelaufen ist. Wenn der Benutzer stattdessen überhaupt keine Wahl trifft, wird kein Callback ausgeführt.

> [!NOTE]
> Dies ist eine veraltete Methode.
> Bitte verwenden Sie stattdessen die neuere Methode [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia).
> Auch wenn sie technisch nicht als veraltet gilt, wird diese alte Callback-Version als solche bezeichnet, da die Spezifikation dringend empfiehlt, die neuere, Promise-zurückgebende Version zu verwenden.

## Syntax

```js-nolint
getUserMedia(constraints, successCallback, errorCallback)
```

### Parameter

- `constraints`
  - : Ein Objekt, das die Arten von Medien spezifiziert, die angefordert werden sollen, sowie alle Anforderungen für jede Art. Details finden Sie im Abschnitt [constraints](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) unter der modernen Methode [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) sowie im Artikel [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).
- `successCallback`

  - : Eine Funktion, die aufgerufen wird, wenn der Antrag auf Medienzugang genehmigt wird. Die Funktion wird mit einem Parameter aufgerufen: dem [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das den Medienstrom enthält. Ihr Callback kann dann den Stream dem gewünschten Objekt zuweisen (wie einem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element), wie im folgenden Beispiel gezeigt:

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
  - : Wenn der Aufruf fehlschlägt, wird die im `errorCallback` angegebene Funktion mit einem Objekt als einziges Argument aufgerufen; dieses
    Objekt basiert auf [`DOMException`](/de/docs/Web/API/DOMException).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Breite und Höhe

Hier ist ein Beispiel für die Nutzung von `getUserMedia()`, einschließlich Code zur Bewältigung der Präfixe verschiedener Browser. Beachten Sie, dass dies die veraltete Methode ist: Siehe den [Beispiele](/de/docs/Web/API/MediaDevices/getUserMedia#frame_rate)-Abschnitt unter der Methode [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) für moderne Beispiele.

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
- [WebRTC](/de/docs/Web/API/WebRTC_API) - die Einführungsseite zur API
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) - die API für die Medienstromobjekte
- [Webcam-Fotos aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) - ein Tutorial zur Verwendung von `getUserMedia()` zum Aufnehmen von Fotos anstelle von Videos.
