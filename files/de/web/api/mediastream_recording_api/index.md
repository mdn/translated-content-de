---
title: MediaStream Recording API
slug: Web/API/MediaStream_Recording_API
l10n:
  sourceCommit: 47b1321d6cac5c7093583162c4cf73e015cc4905
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die **MediaStream Recording API**, manchmal auch als _Media Recording API_ oder _MediaRecorder API_ bezeichnet, ist eng mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und der [WebRTC API](/de/docs/Web/API/WebRTC_API) verbunden. Mit der MediaStream Recording API können Sie die von einem [`MediaStream`](/de/docs/Web/API/MediaStream)- oder [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt erzeugten Daten zur Analyse, Verarbeitung oder Speicherung auf einem Datenträger erfassen. Die API ist zudem überraschend einfach zu verwenden.

## Konzepte und Verwendung

Die MediaStream Recording API besteht im Wesentlichen aus einer Schnittstelle, [`MediaRecorder`](/de/docs/Web/API/MediaRecorder). Sie übernimmt die Daten aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) und stellt sie Ihnen zur Verarbeitung bereit. Die Daten werden über eine Reihe von [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignissen geliefert, bereits in dem Format, das Sie beim Erstellen des `MediaRecorder` festlegen. Anschließend können Sie die Daten nach Bedarf weiterverarbeiten oder in eine Datei schreiben.

### Überblick über den Aufnahmevorgang

Die Aufnahme eines Streams ist einfach:

1. Richten Sie einen [`MediaStream`](/de/docs/Web/API/MediaStream) oder ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (als {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element) als Quelle der Mediendaten ein.
2. Erstellen Sie ein [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt und geben Sie den Quell-Stream sowie die gewünschten Optionen an, etwa den MIME-Typ des Containers oder die gewünschten Bitraten seiner Tracks.
3. Richten Sie mit [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) einen Event-Handler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis ein. Er wird aufgerufen, sobald Daten verfügbar sind.
4. Wenn das Quellmedium abgespielt wird und Sie mit der Videoaufnahme beginnen möchten, rufen Sie [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) auf.
5. Ihr Event-Handler für [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) wird jedes Mal aufgerufen, wenn Daten zur Verarbeitung bereitstehen. Das Ereignis besitzt ein `data`-Attribut, dessen Wert ein [`Blob`](/de/docs/Web/API/Blob) mit den Mediendaten ist. Sie können ein `dataavailable`-Ereignis auch gezielt auslösen, um die neuesten Audiodaten zu erhalten und sie beispielsweise zu filtern oder zu speichern.
6. Die Aufnahme endet automatisch, wenn die Wiedergabe des Quellmediums endet.
7. Sie können die Aufnahme jederzeit durch Aufrufen von [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) beenden.

> [!NOTE]
> Einzelne [`Blob`](/de/docs/Web/API/Blob)s mit Ausschnitten der aufgenommenen Medien lassen sich nicht unbedingt einzeln abspielen. Vor der Wiedergabe müssen die Mediendaten wieder zusammengesetzt werden.

Falls während der Aufnahme ein Fehler auftritt, wird ein [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignis an den `MediaRecorder` gesendet. Sie können auf `error`-Ereignisse reagieren, indem Sie einen Event-Handler über [`onerror`](/de/docs/Web/API/MediaRecorder/error_event) einrichten.

Im folgenden Beispiel verwenden wir ein HTML-Canvas als Quelle des [`MediaStream`](/de/docs/Web/API/MediaStream) und beenden die Aufnahme nach 9 Sekunden.

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

### Status des Recorders prüfen und steuern

Sie können auch die Eigenschaften des `MediaRecorder`-Objekts verwenden, um den Status des Aufnahmevorgangs zu bestimmen. Mit den Methoden [`pause()`](/de/docs/Web/API/MediaRecorder/pause) und [`resume()`](/de/docs/Web/API/MediaRecorder/resume) können Sie die Aufnahme des Quellmediums pausieren und fortsetzen.

Sie können außerdem prüfen, ob ein bestimmter MIME-Typ unterstützt wird. Rufen Sie dazu [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) auf.

### Mögliche Eingabequellen prüfen

Wenn Sie Kamera- und/oder Mikrofoneingaben aufnehmen möchten, sollten Sie die verfügbaren Eingabegeräte prüfen, bevor Sie den `MediaRecorder` erstellen. Rufen Sie dazu [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf, um eine Liste der verfügbaren Mediengeräte zu erhalten. Anschließend können Sie die Liste durchsehen, mögliche Eingabequellen identifizieren und sie nach gewünschten Kriterien filtern.

Im folgenden Codeausschnitt wird `enumerateDevices()` verwendet, um die verfügbaren Eingabegeräte zu prüfen, Audioeingabegeräte zu finden und {{HTMLElement("option")}}-Elemente zu erstellen. Diese werden dann einem {{HTMLElement("select")}}-Element hinzugefügt, mit dem sich eine Eingabequelle auswählen lässt.

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

Mit ähnlichem Code können Sie Benutzerinnen und Benutzern ermöglichen, die Auswahl der Geräte einzuschränken, die sie verwenden möchten.

### Weitere Informationen

Weitere Informationen zur Verwendung der MediaStream Recording API finden Sie unter [Die MediaStream Recording API verwenden](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API). Der Artikel zeigt, wie Sie mit der API Audioclips aufnehmen. Ein zweiter Artikel, [Ein Medienelement aufnehmen](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element), beschreibt, wie Sie einen Stream von einem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element erhalten und den erfassten Stream verwenden – in diesem Fall, indem Sie ihn aufnehmen und auf einem lokalen Datenträger speichern.

## Schnittstellen

- [`BlobEvent`](/de/docs/Web/API/BlobEvent)
  - : Sobald die Aufnahme eines Mediendatenabschnitts abgeschlossen ist, wird er über ein [`BlobEvent`](/de/docs/Web/API/BlobEvent) vom Typ `dataavailable` als [`Blob`](/de/docs/Web/API/Blob) an die Empfänger übermittelt.
- [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)
  - : Die zentrale Schnittstelle, die die MediaStream Recording API implementiert.
- [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die Schnittstelle zur Darstellung von Fehlern, die von der MediaStream Recording API ausgelöst werden. Ihre [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error)-Eigenschaft ist eine [`DOMException`](/de/docs/Web/API/DOMException), die den aufgetretenen Fehler beschreibt.

## Beispiele

### Einfache Videoaufnahme

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

<!-- TODO: re-enable when blob: URLs are allowed by CSP settings -->
<!-- {{EmbedLiveSample("Basic video recording", , "400", , , , "camera")}} -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Übersichtsseite zur [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [simpl.info-Demo zur MediaStream-Aufnahme](https://simpl.info/mediarecorder/) von [Sam Dutton](https://github.com/samdutton)
- [Die Media Recorder API von HTML5 im Einsatz in Chrome und Firefox](https://blog.addpipe.com/mediarecorder-api/)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Aufnehmen, Abspielen und Herunterladen von HTML-Videos mit getUserMedia und der MediaStream Recording API ([Quellcode auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
- [Fortgeschrittenes Beispiel für die Aufnahme von Medienstreams](https://quickblox.github.io/javascript-media-recorder/sample/)
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): Webanwendung für ein Videosprachlabor, die MediaDevices und die MediaStream Recording API zur Videoaufnahme verwendet ([Quellcode auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [MediaStream Recorder API jetzt in Safari Technology Preview 73 verfügbar](https://blog.addpipe.com/safari-technology-preview-73-adds-limited-mediastream-recorder-api-support/)
