---
title: MediaStream Recording API
slug: Web/API/MediaStream_Recording_API
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die **MediaStream Recording API**, manchmal auch als _Media Recording API_ oder _MediaRecorder API_ bezeichnet, ist eng mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und der [WebRTC API](/de/docs/Web/API/WebRTC_API) verbunden. Die MediaStream Recording API ermöglicht es, die von einem [`MediaStream`](/de/docs/Web/API/MediaStream) oder [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt erzeugten Daten zur Analyse, Verarbeitung oder Speicherung auf der Festplatte zu erfassen. Es ist auch überraschend einfach zu verwenden.

## Konzepte und Nutzung

Die MediaStream Recording API besteht aus einem einzigen wesentlichen Interface, dem [`MediaRecorder`](/de/docs/Web/API/MediaRecorder), das die gesamte Arbeit übernimmt, die Daten von einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu entnehmen und zur Verarbeitung zur Verfügung zu stellen. Die Daten werden über eine Reihe von [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignissen geliefert, bereits in dem Format, das Sie beim Erstellen des `MediaRecorder` angegeben haben. Sie können die Daten dann weiterverarbeiten oder nach Belieben auf Datei schreiben.

### Überblick über den Aufnahmeprozess

Das Aufnehmen eines Streams ist einfach:

1. Richen Sie einen [`MediaStream`](/de/docs/Web/API/MediaStream) oder [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (in Form eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements) ein, um als Quelle der Mediendaten zu dienen.
2. Erstellen Sie ein [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt, indem Sie den Quellstream und alle gewünschten Optionen (wie den MIME-Typ des Containers oder die gewünschten Bitraten seiner Tracks) angeben.
3. Setzen Sie [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) auf einen Ereignishandler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis; dies wird aufgerufen, wann immer Daten für Sie verfügbar sind.
4. Sobald die Quellmedien abgespielt werden und Sie bereit sind, Video aufzunehmen, rufen Sie [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) auf, um mit der Aufnahme zu beginnen.
5. Ihr [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignishandler wird jedes Mal aufgerufen, wenn Daten für Sie bereit sind; das Ereignis hat ein `data`-Attribut, dessen Wert ein [`Blob`](/de/docs/Web/API/Blob) ist, das die Mediendaten enthält. Sie können ein `dataavailable`-Ereignis erzwingen, um Ihnen den neuesten Ton zu liefern, damit Sie ihn filtern, speichern oder was auch immer können.
6. Die Aufnahme wird automatisch beendet, wenn die Quellmedien nicht mehr spielen.
7. Sie können die Aufnahme jederzeit beenden, indem Sie [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) aufrufen.

> [!NOTE]
> Einzelne [`Blob`](/de/docs/Web/API/Blob)s, die Slices des aufgezeichneten Mediums enthalten, sind möglicherweise nicht einzeln abspielbar. Die Medien müssen vor der Wiedergabe neu zusammengesetzt werden.

Falls während der Aufnahme etwas schiefgeht, wird ein [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignis an den `MediaRecorder` gesendet. Sie können auf `error`-Ereignisse lauschen, indem Sie einen [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignishandler einrichten.

Im folgenden Beispiel verwenden wir eine HTML-Canvas als Quelle des [`MediaStream`](/de/docs/Web/API/MediaStream) und stoppen die Aufnahme nach 9 Sekunden.

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
  window.URL.revokeObjectURL(url);
}

// demo: to download after 9sec
setTimeout((event) => {
  console.log("stopping");
  mediaRecorder.stop();
}, 9000);
```

### Überprüfen und Steuern des Recorder-Status

Sie können auch die Eigenschaften des `MediaRecorder`-Objekts verwenden, um den Zustand des Aufnahmeprozesses zu bestimmen, und dessen Methoden [`pause()`](/de/docs/Web/API/MediaRecorder/pause) und [`resume()`](/de/docs/Web/API/MediaRecorder/resume), um die Aufnahme der Quellmedien zu pausieren und fortzusetzen.

Falls Sie überprüfen möchten, ob ein bestimmter MIME-Typ unterstützt wird, ist das ebenfalls möglich. Rufen Sie einfach [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) auf.

### Untersuchung potenzieller Eingabequellen

Wenn Ihr Ziel darin besteht, Kamera- und/oder Mikrofoneingaben aufzuzeichnen, möchten Sie möglicherweise die verfügbaren Eingabegeräte prüfen, bevor Sie mit dem Aufbau des `MediaRecorder` beginnen. Dazu müssen Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste der verfügbaren Mediageräte zu erhalten. Sie können diese Liste dann prüfen, potenzielle Eingabequellen identifizieren und die Liste sogar nach gewünschten Kriterien filtern.

In diesem Code-Snippet wird `enumerateDevices()` verwendet, um die verfügbaren Eingabegeräte zu prüfen, diejenigen zu lokalisieren, die Audioeingabegeräte sind, und {{HTMLElement("option")}}-Elemente zu erstellen, die dann einem {{HTMLElement("select")}}-Element hinzugefügt werden, das einen Eingabequellenauswahler darstellt.

```js
navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices.forEach((device) => {
    const menu = document.getElementById("inputdevices");
    if (device.kind === "audioinput") {
      const item = document.createElement("option");
      item.textContent = device.label;
      item.value = device.deviceId;
      menu.appendChild(item);
    }
  });
});
```

Ähnlicher Code kann verwendet werden, um den Benutzern die Möglichkeit zu geben, die Menge der Geräte einzuschränken, die sie verwenden möchten.

### Weitere Informationen

Um mehr über die Verwendung der MediaStream Recording API zu erfahren, siehe [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API), das zeigt, wie man die API verwendet, um Audioschnipsel aufzunehmen. Ein zweiter Artikel, [Aufnahme eines Medienelements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element), beschreibt, wie ein Stream von einem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element empfangen und der aufgezeichnete Stream (in diesem Fall die Aufnahme und deren Speicherung auf einer lokalen Festplatte) verwendet wird.

## Schnittstellen

- [`BlobEvent`](/de/docs/Web/API/BlobEvent)
  - : Jedes Mal, wenn ein Stück Mediendaten fertig aufgezeichnet wurde, wird es Verbrauchern in [`Blob`](/de/docs/Web/API/Blob)-Form mit einem [`BlobEvent`](/de/docs/Web/API/BlobEvent) vom Typ `dataavailable` bereitgestellt.
- [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)
  - : Das primäre Interface, das die MediaStream Recording API implementiert.
- [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Das Interface, das Fehler repräsentiert, die von der MediaStream Recording API ausgelöst werden. Seine [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error)-Eigenschaft ist ein [`DOMException`](/de/docs/Web/API/DOMException), das spezifiziert, welcher Fehler aufgetreten ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Hauptseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton)
- [HTML5's Media Recorder API in Action on Chrome and Firefox](https://blog.addpipe.com/mediarecorder-api/)
- [MediaRecorder Polyfill](https://github.com/ai/audio-recorder-polyfill) für Safari und Edge
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): HTML-Videoaufnahme/-wiedergabe/-download mit getUserMedia und der MediaStream Recording API ([Quelle auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
- [Einfaches Videoaufnahme-Demo](https://codepen.io/anon/pen/gpmPzm)
- [Erweitertes Media-Stream-Recorder-Muster](https://quickblox.github.io/javascript-media-recorder/sample/)
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung mit MediaDevices und der MediaStream Recording API zur Videoaufnahme ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [MediaStream Recorder API jetzt in Safari Technology Preview 73 verfügbar](https://blog.addpipe.com/safari-technology-preview-73-adds-limited-mediastream-recorder-api-support/)
