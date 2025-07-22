---
title: MediaStream Recording API
slug: Web/API/MediaStream_Recording_API
l10n:
  sourceCommit: 1d4acd0cc450af2e293b9856d5763b92a0812e30
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die **MediaStream Recording API**, manchmal auch _Media Recording API_ oder _MediaRecorder API_ genannt, ist eng verbunden mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und der [WebRTC API](/de/docs/Web/API/WebRTC_API). Die MediaStream Recording API ermöglicht es, die von einem [`MediaStream`](/de/docs/Web/API/MediaStream) oder einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Objekt erzeugten Daten zu erfassen, um sie zu analysieren, zu verarbeiten oder auf die Festplatte zu speichern. Außerdem ist sie überraschend einfach zu verwenden.

## Konzepte und Verwendung

Die MediaStream Recording API besteht aus einer einzigen Hauptschnittstelle, [`MediaRecorder`](/de/docs/Web/API/MediaRecorder), die die gesamte Arbeit übernimmt, die Daten von einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu nehmen und sie zur Verarbeitung bereitzustellen. Die Daten werden durch eine Reihe von [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Events geliefert, die bereits in dem Format vorliegen, das Sie beim Erstellen des `MediaRecorders` spezifiziert haben. Sie können die Daten dann weiter verarbeiten oder nach Wunsch auf Datei schreiben.

### Übersicht des Aufnahmeprozesses

Der Prozess zum Aufnehmen eines Streams ist einfach:

1. Richten Sie einen [`MediaStream`](/de/docs/Web/API/MediaStream) oder ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (in Form eines {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements) ein, um als Quelle der Mediendaten zu dienen.
2. Erstellen Sie ein [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt, wobei Sie den Quellstream und alle gewünschten Optionen angeben (wie beispielsweise den MIME-Typ des Containers oder die gewünschten Bitraten der Tracks).
3. Setzen Sie [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) auf einen Event-Handler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Event; dies wird aufgerufen, wenn Daten für Sie verfügbar sind.
4. Sobald das Quellmedium abgespielt wird und der Punkt erreicht ist, an dem Sie bereit sind, Video aufzunehmen, rufen Sie [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) auf, um mit der Aufnahme zu beginnen.
5. Ihr [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Event-Handler wird jedes Mal aufgerufen, wenn es Daten gibt, die Sie nach Belieben verwenden können; das Event hat ein `data`-Attribut, dessen Wert ein [`Blob`](/de/docs/Web/API/Blob) ist, das die Mediendaten enthält. Sie können ein `dataavailable`-Event erzwingen, wodurch die aktuellen Daten an Sie geliefert werden, sodass Sie sie filtern, speichern oder anderweitig verwenden können.
6. Die Aufnahme stoppt automatisch, wenn das Quellmedium aufhört, abzuspielen.
7. Sie können die Aufnahme jederzeit durch Aufrufen von [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) beenden.

> [!NOTE]
> Einzelne [`Blob`](/de/docs/Web/API/Blob)s, die Teile der aufgenommenen Medien enthalten, sind nicht notwendigerweise einzeln abspielbar. Die Medien müssen vor der Wiedergabe neu zusammengesetzt werden.

Wenn während der Aufnahme etwas schiefgeht, wird ein [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Event an den `MediaRecorder` gesendet. Sie können `error`-Events überwachen, indem Sie einen [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Event-Handler einrichten.

In diesem Beispiel verwenden wir eine HTML-Leinwand als Quelle des [`MediaStream`](/de/docs/Web/API/MediaStream) und stoppen die Aufnahme nach 9 Sekunden.

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

### Untersuchung und Kontrolle des Recorder-Status

Sie können auch die Eigenschaften des `MediaRecorder`-Objekts nutzen, um den Zustand des Aufnahmeprozesses zu bestimmen, und seine Methoden [`pause()`](/de/docs/Web/API/MediaRecorder/pause) und [`resume()`](/de/docs/Web/API/MediaRecorder/resume) verwenden, um die Aufnahme des Quellmediums zu pausieren und fortzusetzen.

Wenn Sie prüfen möchten, ob ein bestimmter MIME-Typ unterstützt wird, ist das ebenfalls möglich. Sie müssen nur [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) aufrufen.

### Untersuchung potenzieller Eingabequellen

Wenn Ihr Ziel ist, Kamera- und/oder Mikrofoneingaben aufzuzeichnen, möchten Sie vielleicht die verfügbaren Eingabegeräte untersuchen, bevor Sie mit dem Aufbau des `MediaRecorder` beginnen. Dazu müssen Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste der verfügbaren Mediengeräte zu erhalten. Sie können diese Liste dann untersuchen und mögliche Eingabequellen identifizieren und die Liste sogar basierend auf gewünschten Kriterien filtern.

In diesem Code-Snippet wird `enumerateDevices()` verwendet, um die verfügbaren Eingabegeräte zu untersuchen, jene zu finden, die Audioeingabegeräte sind, und {{HTMLElement("option")}}-Elemente zu erstellen, die dann zu einem {{HTMLElement("select")}}-Element hinzugefügt werden, das eine Eingabequellenauswahl darstellt.

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

Ähnlicher Code kann verwendet werden, um es dem Benutzer zu ermöglichen, die Menge der Geräte einzuschränken, die er/sie verwenden möchte.

### Weitere Informationen

Um mehr über die Verwendung der MediaStream Recording API zu erfahren, lesen Sie [Using the MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API), die zeigt, wie man die API benutzt, um Audioclips aufzunehmen. Ein zweiter Artikel, [Recording a media element](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element), beschreibt, wie man einen Stream von einem {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Element empfängt und den erfassten Stream verwendet (in diesem Fall ihn aufnimmt und auf eine lokale Festplatte speichert).

## Schnittstellen

- [`BlobEvent`](/de/docs/Web/API/BlobEvent)
  - : Jedes Mal, wenn ein Medien-Datenblock fertig aufgenommen wurde, wird er den Verbrauchern in Form eines [`Blob`](/de/docs/Web/API/Blob)s über ein [`BlobEvent`](/de/docs/Web/API/BlobEvent) vom Typ `dataavailable` bereitgestellt.
- [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)
  - : Die primäre Schnittstelle, die die MediaStream Recording API implementiert.
- [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die Schnittstelle, die Fehler darstellt, die von der MediaStream Recording API geworfen werden. Ihre [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error)-Eigenschaft ist eine [`DOMException`](/de/docs/Web/API/DOMException), die den aufgetretenen Fehler spezifiziert.

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

<!-- TODO: Wieder aktivieren, wenn blob: URLs durch CSP-Einstellungen erlaubt sind -->
<!-- {{EmbedLiveSample("Basic video recording", , "400", , , , "camera")}} -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Übersichtsseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton)
- [HTML5's Media Recorder API in Action on Chrome and Firefox](https://blog.addpipe.com/mediarecorder-api/)
- [MediaRecorder polyfill](https://github.com/ai/audio-recorder-polyfill) für Safari und Edge
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): HTML-Videoaufnahme/-wiedergabe/-download mithilfe von getUserMedia und der MediaStream Recording API ([Source auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
- [Advanced media stream recorder sample](https://quickblox.github.io/javascript-media-recorder/sample/)
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Videosprachlabor-Webanwendung mit MediaDevices und der MediaStream Recording API zur Videoaufnahme ([Source auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [MediaStream Recorder API Now Available in Safari Technology Preview 73](https://blog.addpipe.com/safari-technology-preview-73-adds-limited-mediastream-recorder-api-support/)
