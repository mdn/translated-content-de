---
title: "Navigator: getUserMedia() Methode"
short-title: getUserMedia()
slug: Web/API/Navigator/getUserMedia
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Media Capture and Streams")}}{{deprecated_header}}{{SecureContext_Header}}

Die veraltete **`Navigator.getUserMedia()`** Methode fordert den Benutzer auf, die Erlaubnis zur Nutzung von bis zu einem Videoeingabegerät (wie einer Kamera oder einem geteilten Bildschirm) und bis zu einem Audioeingabegerät (wie einem Mikrofon) als Quelle für einen [`MediaStream`](/de/docs/Web/API/MediaStream) zu erteilen.

Wenn die Erlaubnis erteilt wird, wird ein `MediaStream`, dessen Video- und/oder Audiotracks von diesen Geräten stammen, an den angegebenen Erfolgs-Callback geliefert. Wenn die Erlaubnis verweigert wird, keine kompatiblen Eingabegeräte existieren oder ein anderer Fehler auftritt, wird der Fehler-Callback mit einem Objekt ausgeführt, das beschreibt, was schiefgelaufen ist. Wenn der Benutzer stattdessen keine Wahl trifft, wird kein Callback ausgeführt.

> [!NOTE]
> Dies ist eine veraltete Methode.
> Bitte verwenden Sie stattdessen die neuere [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia).
> Obwohl technisch nicht veraltet, wird diese alte Callback-Version als solche markiert, da die Spezifikation dringend empfiehlt, die neuere, versprechensbasierte Version zu verwenden.

## Syntax

```js-nolint
getUserMedia(constraints, successCallback, errorCallback)
```

### Parameter

- `constraints`
  - : Ein Objekt, das die Arten von Medien angibt, die angefordert werden sollen, zusammen mit allen Anforderungen für jede Art. Für Details siehe den [Abschnitt über die Beschränkungen](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) unter der modernen [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) Methode sowie den Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).
- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn die Anfrage auf Medienzugang genehmigt wird. Die Funktion wird mit einem Parameter aufgerufen: dem [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt, das den Medienstrom enthält. Ihr Callback kann dann den Stream dem gewünschten Objekt zuweisen (wie einem {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element), wie im folgenden Beispiel gezeigt:

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
  - : Wenn der Aufruf fehlschlägt, wird die im `errorCallback` angegebene Funktion mit einem Objekt als alleinigem Argument aufgerufen; dieses Objekt basiert auf [`DOMException`](/de/docs/Web/API/DOMException).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Breite und Höhe

Hier ist ein Beispiel für die Verwendung von `getUserMedia()`, einschließlich Code zur Anpassung an Präfixe verschiedener Browser. Beachten Sie, dass dies der veraltete Weg ist: Siehe den [Beispielabschnitt](/de/docs/Web/API/MediaDevices/getUserMedia#frame_rate)
unter der [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) für moderne Beispiele.

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

- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), welche diese veraltete Methode ersetzt.
- [WebRTC](/de/docs/Web/API/WebRTC_API) - die Einführungsseite zur API
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) - die API für die
  Medienstromobjekte
- [Aufnahmen von Webcam-Fotos](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) - ein
  Tutorial zur Verwendung von `getUserMedia()` für das Aufnehmen von Fotos anstelle von Videos.
