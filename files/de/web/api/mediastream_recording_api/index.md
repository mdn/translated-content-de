---
title: MediaStream Recording API
slug: Web/API/MediaStream_Recording_API
l10n:
  sourceCommit: 937e773427bd62ab5b83ab13c62759053c2ca714
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die **MediaStream Recording API**, manchmal auch als _Media Recording API_ oder _MediaRecorder API_ bezeichnet, ist eng verbunden mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und der [WebRTC API](/de/docs/Web/API/WebRTC_API). Die MediaStream Recording API ermöglicht es, die von einem [`MediaStream`](/de/docs/Web/API/MediaStream) oder einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) erzeugten Daten für Analyse, Verarbeitung oder Speicherung auf der Festplatte zu erfassen. Sie ist auch überraschend einfach zu verwenden.

## Konzepte und Nutzung

Die MediaStream Recording API besteht aus einer einzigen Hauptschnittstelle, [`MediaRecorder`](/de/docs/Web/API/MediaRecorder), die die Aufgabe hat, die Daten von einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu nehmen und sie Ihnen zur Verarbeitung bereitzustellen. Die Daten werden durch eine Reihe von [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) Ereignissen geliefert, bereits in dem von Ihnen bei der Erstellung des `MediaRecorder` angegebenen Format. Sie können die Daten dann weiterverarbeiten oder wie gewünscht auf eine Datei schreiben.

### Überblick über den Aufnahmeprozess

Der Prozess des Aufnehmens eines Streams ist einfach:

1. Richten Sie einen [`MediaStream`](/de/docs/Web/API/MediaStream) oder ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (in Form eines {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements) ein, um als Quelle der Mediendaten zu dienen.
2. Erstellen Sie ein [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) Objekt und geben Sie den Quellstream sowie alle gewünschten Optionen an (z. B. den MIME-Typ des Containers oder die gewünschten Bitraten seiner Spuren).
3. Setzen Sie [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) auf einen Ereignishandler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) Ereignis; dies wird aufgerufen, wenn Daten für Sie verfügbar sind.
4. Sobald das Quellmedium abgespielt wird und Sie bereit sind, Video aufzunehmen, rufen Sie [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) auf, um die Aufnahme zu starten.
5. Ihr [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) Ereignishandler wird jedes Mal aufgerufen, wenn Daten bereit sind, die Sie nach Belieben verwenden können; das Ereignis hat ein `data` Attribut, dessen Wert ein [`Blob`](/de/docs/Web/API/Blob) ist, das die Mediendaten enthält. Sie können ein `dataavailable` Ereignis erzwingen, um sich den neuesten Klang liefern zu lassen, damit Sie ihn filtern, speichern oder was auch immer tun können.
6. Die Aufnahme stoppt automatisch, wenn das Quellmedium nicht mehr abgespielt wird.
7. Sie können die Aufnahme jederzeit durch einen Aufruf von [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) beenden.

> [!NOTE]
> Einzelne [`Blob`](/de/docs/Web/API/Blob)s, die Scheiben der aufgenommenen Medien enthalten, sind nicht unbedingt einzeln abspielbar. Die Medien müssen vor der Wiedergabe neu zusammengestellt werden.

Wenn während der Aufnahme etwas schiefgeht, wird ein [`error`](/de/docs/Web/API/MediaRecorder/error_event) Ereignis an den `MediaRecorder` gesendet. Sie können auf `error` Ereignisse hören, indem Sie einen [`onerror`](/de/docs/Web/API/MediaRecorder/error_event) Ereignishandler einrichten.

Im folgenden Beispiel verwenden wir ein HTML Canvas als Quelle des [`MediaStream`](/de/docs/Web/API/MediaStream) und beenden die Aufnahme nach 9 Sekunden.

```js
const canvas = document.querySelector("canvas");

// Optional frames per second argument.
const stream = canvas.captureStream(25);
const recordedChunks = [];

console.log(stream);
const options = { mimeType: "video/webm; codecs=vp9" };
const mediaRecorder = new MediaRecorder(stream, options);

mediaRecorder.ondataavailable = handleDataAvailable;
mediaRecorder.start();

function handleDataAvailable(event) {
  console.log("data-available");
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
    console.log(recordedChunks);
    download();
  } else {
    // …
  }
}
function download() {
  const blob = new Blob(recordedChunks, {
    type: "video/webm",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "test.webm";
  a.click();
  URL.revokeObjectURL(url);
}

// demo: to download after 9sec
setTimeout((event) => {
  console.log("stopping");
  mediaRecorder.stop();
}, 9000);
```

### Überprüfen und Steuern des Recorder-Status

Sie können auch die Eigenschaften des `MediaRecorder` Objekts verwenden, um den Status des Aufnahmeprozesses zu bestimmen, und seine Methoden [`pause()`](/de/docs/Web/API/MediaRecorder/pause) und [`resume()`](/de/docs/Web/API/MediaRecorder/resume), um die Aufnahme des Quellmediums zu pausieren und fortzusetzen.

Wenn Sie prüfen möchten, ob ein bestimmter MIME-Typ unterstützt wird, ist dies ebenfalls möglich. Rufen Sie einfach [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) auf.

### Überprüfen potenzieller Eingabequellen

Wenn Sie planen, Kamera- und/oder Mikrofoneingaben aufzuzeichnen, möchten Sie möglicherweise die verfügbaren Eingabegeräte überprüfen, bevor Sie mit dem Aufbau des `MediaRecorder` beginnen. Dazu müssen Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste der verfügbaren Mediengeräte zu erhalten. Sie können dann diese Liste überprüfen und die potenziellen Eingabequellen identifizieren und sogar die Liste nach gewünschten Kriterien filtern.

In diesem Code-Snippet wird `enumerateDevices()` verwendet, um die verfügbaren Eingabegeräte zu überprüfen, solche zu lokalisieren, die Audioeingabegeräte sind, und {{HTMLElement("option")}} Elemente zu erstellen, die dann einem {{HTMLElement("select")}} Element hinzugefügt werden, das einen Eingabequellen-Wähler darstellt.

```js
navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices.forEach((device) => {
    const menu = document.getElementById("input-devices");
    if (device.kind === "audioinput") {
      const item = document.createElement("option");
      item.textContent = device.label;
      item.value = device.deviceId;
      menu.appendChild(item);
    }
  });
});
```

Ähnlicher Code kann verwendet werden, um dem Benutzer zu ermöglichen, die Menge der Geräte einzuschränken, die er verwenden möchte.

### Weitere Informationen

Um mehr über die Verwendung der MediaStream Recording API zu lernen, lesen Sie [Using the MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API), das zeigt, wie Sie die API verwenden, um Audio-Clips aufzuzeichnen. Ein zweiter Artikel, [Recording a media element](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element), beschreibt, wie man einen Stream von einem {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element empfängt und den erfassten Stream verwendet (in diesem Fall aufnehmen und auf einer lokalen Festplatte speichern).

## Schnittstellen

- [`BlobEvent`](/de/docs/Web/API/BlobEvent)
  - : Jedes Mal, wenn ein Chunk von Mediendaten fertig aufgenommen wurde, wird es den Nutzern in [`Blob`](/de/docs/Web/API/Blob) Form über ein [`BlobEvent`](/de/docs/Web/API/BlobEvent) vom Typ `dataavailable` geliefert.
- [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)
  - : Die primäre Schnittstelle, die die MediaStream Recording API implementiert.
- [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die Schnittstelle, die Fehler darstellt, die von der MediaStream Recording API geworfen werden. Ihre [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error) Eigenschaft ist eine [`DOMException`](/de/docs/Web/API/DOMException), die den aufgetretenen Fehler spezifiziert.

## Beispiele

### Grundlegende Videoaufnahme

```html
<button id="record-btn">Start</button>
<video id="player" src="" autoplay controls></video>
```

```js
const recordBtn = document.getElementById("record-btn");
const video = document.getElementById("player");

let chunks = [];
let isRecording = false;
let mediaRecorder = null;

const constraints = { video: true };

recordBtn.addEventListener("click", async () => {
  if (!isRecording) {
    // Acquire a recorder on load
    if (!mediaRecorder) {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.addEventListener("dataavailable", (e) => {
        console.log("data available");
        chunks.push(e.data);
      });
      mediaRecorder.addEventListener("stop", (e) => {
        console.log("onstop fired");
        const blob = new Blob(chunks, { type: "video/ogv; codecs=opus" });
        video.src = window.URL.createObjectURL(blob);
      });
      mediaRecorder.addEventListener("error", (e) => {
        console.error("An error occurred:", e);
      });
    }
    isRecording = true;
    recordBtn.textContent = "Stop";
    chunks = [];
    mediaRecorder.start();
    console.log("recorder started");
  } else {
    isRecording = false;
    recordBtn.textContent = "Start";
    mediaRecorder.stop();
    console.log("recorder stopped");
  }
});
```

<!-- TODO: wieder aktivieren, wenn blob:-URLs durch CSP-Einstellungen erlaubt sind -->
<!-- {{EmbedLiveSample("Basic video recording", , "400", , , , "camera")}} -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Startseite der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton)
- [HTML5's Media Recorder API in Action on Chrome and Firefox](https://blog.addpipe.com/mediarecorder-api/)
- [MediaRecorder Polyfill](https://github.com/ai/audio-recorder-polyfill) für Safari und Edge
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): HTML-Videoaufnahme/-wiedergabe/-download mit getUserMedia und der MediaStream Recording API ([Quelle auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
- [Fortgeschrittenes Media-Stream-Recorder-Beispiel](https://quickblox.github.io/javascript-media-recorder/sample/)
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung unter Verwendung von MediaDevices und der MediaStream Recording API zur Videoaufzeichnung ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [MediaStream Recorder API jetzt verfügbar in Safari Technology Preview 73](https://blog.addpipe.com/safari-technology-preview-73-adds-limited-mediastream-recorder-api-support/)
