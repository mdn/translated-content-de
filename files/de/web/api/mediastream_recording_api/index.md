---
title: MediaStream Recording API
slug: Web/API/MediaStream_Recording_API
l10n:
  sourceCommit: 6608a12cb9974fe37c6505520b952058d8f9b70d
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die **MediaStream Recording API**, manchmal auch als _Media Recording API_ oder _MediaRecorder API_ bezeichnet, ist eng verknüpft mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und der [WebRTC API](/de/docs/Web/API/WebRTC_API). Die MediaStream Recording API ermöglicht es, die von einem [`MediaStream`](/de/docs/Web/API/MediaStream)- oder [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt generierten Daten zur Analyse, Verarbeitung oder Speicherung auf einer Festplatte zu erfassen. Sie ist zudem überraschend einfach zu handhaben.

## Konzepte und Verwendung

Die MediaStream Recording API besteht aus einer einzigen Hauptschnittstelle, [`MediaRecorder`](/de/docs/Web/API/MediaRecorder), die sämtliche Arbeiten übernimmt, um die Daten aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu entnehmen und Ihnen zur Verarbeitung zur Verfügung zu stellen. Die Daten werden durch eine Serie von [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignissen geliefert, die bereits im Format vorliegen, das Sie beim Erstellen des `MediaRecorder` angegeben haben. Sie können die Daten dann weiter verarbeiten oder nach Belieben auf die Festplatte schreiben.

### Überblick über den Aufnahmeprozess

Der Prozess zur Aufnahme eines Streams ist einfach:

1. Richten Sie ein [`MediaStream`](/de/docs/Web/API/MediaStream) oder [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (in Form eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements) ein, das als Quelle der Mediendaten dient.
2. Erstellen Sie ein [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt und geben Sie den Quellstream sowie alle gewünschten Optionen (wie den MIME-Typ des Containers oder die gewünschten Bitraten seiner Tracks) an.
3. Setzen Sie [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) auf einen Ereignishandler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis; dieser wird aufgerufen, wann immer Daten für Sie verfügbar sind.
4. Sobald das Quellmedium abgespielt wird und Sie den Punkt erreicht haben, an dem Sie bereit sind, Video aufzunehmen, rufen Sie [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) auf, um die Aufnahme zu starten.
5. Ihr [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignishandler wird jedes Mal aufgerufen, wenn Daten bereit sind, die Sie nach Belieben verwenden können; das Ereignis hat ein `data`-Attribut, dessen Wert ein [`Blob`](/de/docs/Web/API/Blob) ist, der die Mediendaten enthält. Sie können ein `dataavailable`-Ereignis erzwingen, damit die neuesten Daten an Sie geliefert werden, damit Sie sie filtern, speichern oder anderweitig verarbeiten können.
6. Die Aufnahme wird automatisch gestoppt, wenn das Quellmedium die Wiedergabe beendet.
7. Sie können die Aufnahme jederzeit beenden, indem Sie [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) aufrufen.

> [!NOTE]
> Einzelne [`Blob`](/de/docs/Web/API/Blob)s, die Teile der aufgenommenen Medien enthalten, sind möglicherweise nicht individuell abspielbar. Die Medien müssen vor der Wiedergabe wieder zusammengesetzt werden.

Wenn während der Aufnahme etwas schief geht, wird ein [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignis an den `MediaRecorder` gesendet. Sie können auf `error`-Ereignisse hören, indem Sie einen [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignishandler einrichten.

In diesem Beispiel verwenden wir eine HTML-Canvas als Quelle des [`MediaStream`](/de/docs/Web/API/MediaStream) und stoppen die Aufnahme nach 9 Sekunden.

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

### Untersuchung und Steuerung des Recorder-Status

Sie können auch die Eigenschaften des `MediaRecorder`-Objekts verwenden, um den Status des Aufnahmeprozesses zu bestimmen, und seine Methoden [`pause()`](/de/docs/Web/API/MediaRecorder/pause) und [`resume()`](/de/docs/Web/API/MediaRecorder/resume), um die Aufnahme des Quellmediums zu pausieren und fortzusetzen.

Wenn Sie überprüfen müssen oder möchten, ob ein bestimmter MIME-Typ unterstützt wird, ist das ebenfalls möglich. Rufen Sie einfach [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) auf.

### Untersuchung potenzieller Eingabequellen

Wenn Sie beabsichtigen, Kamera- und/oder Mikrofoneingaben aufzuzeichnen, möchten Sie möglicherweise die verfügbaren Eingabegeräte untersuchen, bevor Sie den `MediaRecorder` einrichten. Dazu müssen Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste der verfügbaren Mediengeräte zu erhalten. Sie können diese Liste dann überprüfen und die potenziellen Eingabequellen identifizieren und sogar die Liste basierend auf gewünschten Kriterien filtern.

In diesem Code-Snippet wird `enumerateDevices()` verwendet, um die verfügbaren Eingabegeräte zu untersuchen, diejenigen zu lokalisieren, die Audioeingabegeräte sind, und {{HTMLElement("option")}}-Elemente zu erstellen, die dann einem {{HTMLElement("select")}}-Element hinzugefügt werden, das einen Eingabequellenauswähler darstellt.

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

Ähnlicher Code kann verwendet werden, um dem Benutzer zu erlauben, die gewünschte Gerätemenge einzuschränken.

### Weitere Informationen

Um mehr über die Verwendung der MediaStream Recording API zu erfahren, siehe [Using the MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API), das zeigt, wie die API verwendet werden kann, um Audioclips aufzuzeichnen. Ein zweiter Artikel, [Recording a media element](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element), beschreibt, wie ein Stream von einem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element empfangen und der erfasste Stream verwendet wird (in diesem Fall durch Aufzeichnung und Speicherung auf einer lokalen Festplatte).

## Schnittstellen

- [`BlobEvent`](/de/docs/Web/API/BlobEvent)
  - : Jedes Mal, wenn ein Abschnitt von Mediendaten aufgezeichnet wurde, wird er in [`Blob`](/de/docs/Web/API/Blob)-Form über ein [`BlobEvent`](/de/docs/Web/API/BlobEvent) des Typs `dataavailable` an die Verbraucher geliefert.
- [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)
  - : Die primäre Schnittstelle, die die MediaStream Recording API implementiert.
- [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die Schnittstelle, die Fehler darstellt, die durch die MediaStream Recording API ausgelöst werden. Ihre [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error)-Eigenschaft ist ein [`DOMException`](/de/docs/Web/API/DOMException), die den aufgetretenen Fehler angibt.

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
      mediaRecorder.addEventListener("dataavailable", () => {
        console.log("data available");
        chunks.push(e.data);
      });
      mediaRecorder.addEventListener("stop", (e) => {
        console.log("onstop fired");
        const blob = new Blob(chunks, { type: "video/ogv; codecs=opus" });
        video.src = window.URL.createObjectURL(blob);
      });
      mediaRecorder.addEventListener("error", (e) => {
        console.error("An error occured:", e);
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

<!-- TODO: Wieder aktivieren, wenn blob: URLs von den CSP-Einstellungen erlaubt werden -->
<!-- {{EmbedLiveSample("Basic video recording", , "400", , , , "camera")}} -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Ausgangsseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton)
- [HTML5's Media Recorder API in Action on Chrome and Firefox](https://blog.addpipe.com/mediarecorder-api/)
- [MediaRecorder-Polyfill](https://github.com/ai/audio-recorder-polyfill) für Safari und Edge
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): HTML-Videoaufnahme/-wiedergabe/-download mit getUserMedia und der MediaStream Recording API ([Quelle auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
- [Erweitertes Media Stream Recorder-Beispiel](https://quickblox.github.io/javascript-media-recorder/sample/)
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Videosprachlabor-Webanwendung unter Verwendung von MediaDevices und der MediaStream Recording API für Videoaufnahmen ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [MediaStream Recorder API jetzt verfügbar in Safari Technology Preview 73](https://blog.addpipe.com/safari-technology-preview-73-adds-limited-mediastream-recorder-api-support/)
