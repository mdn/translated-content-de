---
title: "Navigator: Methode getUserMedia()"
short-title: getUserMedia()
slug: Web/API/Navigator/getUserMedia
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Media Capture and Streams")}}{{deprecated_header}}{{SecureContext_Header}}

Die veraltete **`Navigator.getUserMedia()`** Methode fordert den Benutzer auf, die Erlaubnis zu erteilen, bis zu einem Videoeingabegerät (wie eine Kamera oder ein geteilter Bildschirm) und bis zu einem Audioeingabegerät (wie ein Mikrofon) als Quelle für einen {{domxref("MediaStream")}} zu verwenden.

Wenn die Erlaubnis erteilt wird, wird ein `MediaStream`, dessen Video- und/oder Audiotracks von diesen Geräten stammen, dem angegebenen Erfolgs-Callback übergeben.
Wird die Erlaubnis verweigert, sind keine kompatiblen Eingabegeräte vorhanden oder tritt ein anderer Fehler auf, wird das Fehler-Callback mit einem Objekt ausgeführt, das beschreibt, was schiefgegangen ist.
Wenn der Benutzer stattdessen keine Wahl trifft, wird kein Callback ausgeführt.

> [!NOTE]
> Dies ist eine Legacy-Methode.
> Bitte verwenden Sie die neuere {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} Methode.
> Auch wenn sie technisch nicht als veraltet gilt, wird diese alte Callback-Version als solche markiert, da die Spezifikation dringend dazu rät, die neuere, ein Promise zurückgebende Version zu verwenden.

## Syntax

```js-nolint
getUserMedia(constraints, successCallback, errorCallback)
```

### Parameter

- `constraints`
  - : Ein Objekt, das die Arten von Medien spezifiziert, die angefordert werden sollen, zusammen mit den Anforderungen für jeden Typ. Einzelheiten finden Sie im Abschnitt [constraints](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) unter der modernen {{domxref("MediaDevices.getUserMedia()")}} Methode sowie im Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).
- `successCallback`

  - : Eine Funktion, die aufgerufen wird, wenn die Anfrage für den Medienzugriff genehmigt wird. Die Funktion wird mit einem Parameter aufgerufen: dem {{domxref("MediaStream")}} Objekt, das den Medienstream enthält. Ihr Callback kann dann den Stream dem gewünschten Objekt zuweisen (wie einem {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element), wie im folgenden Beispiel gezeigt:

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
  - : Wenn der Aufruf fehlschlägt, wird die Funktion, die im `errorCallback` angegeben ist, mit einem Objekt als einziges Argument aufgerufen; dieses Objekt ist einem {{domxref("DOMException")}} nachempfunden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Breite und Höhe

Hier ist ein Beispiel für die Verwendung von `getUserMedia()`, einschließlich Code zur Bewältigung der Präfixe verschiedener Browser. Beachten Sie, dass dies die veraltete Methode ist: Siehe den Abschnitt [Beispiele](/de/docs/Web/API/MediaDevices/getUserMedia#frame_rate) unter der {{domxref("MediaDevices.getUserMedia()")}} für moderne Beispiele.

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

- {{domxref("MediaDevices.getUserMedia()")}}, das diese veraltete Methode ersetzt.
- [WebRTC](/de/docs/Web/API/WebRTC_API) - die Einführung in die API
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) - die API für die Medienstream-Objekte
- [Webcam-Fotos aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) - ein Tutorial zur Verwendung von `getUserMedia()` zum Aufnehmen von Fotos anstelle von Videos.
