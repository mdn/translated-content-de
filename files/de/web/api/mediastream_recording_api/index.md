---
title: MediaStream Recording API
slug: Web/API/MediaStream_Recording_API
l10n:
  sourceCommit: 7efdbbe04ee2ba39340fb22d7ee9b4aaa6269385
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die **MediaStream Recording API**, manchmal auch als _Media Recording API_ oder _MediaRecorder API_ bezeichnet, steht in enger Verbindung mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und der [WebRTC API](/de/docs/Web/API/WebRTC_API). Die MediaStream Recording API ermöglicht es, die von einem [`MediaStream`](/de/docs/Web/API/MediaStream) oder einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) erzeugten Daten zu erfassen, um diese zu analysieren, zu verarbeiten oder auf der Festplatte zu speichern. Die Nutzung dieser API ist überraschend einfach.

## Konzepte und Nutzung

Die MediaStream Recording API besteht aus einem einzigen Hauptinterface, [`MediaRecorder`](/de/docs/Web/API/MediaRecorder), das die gesamte Arbeit übernimmt, um die Daten von einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu nehmen und sie Ihnen zur Verarbeitung zu liefern. Die Daten werden durch eine Serie von [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignissen geliefert und sind bereits in dem Format, das Sie bei der Erstellung des `MediaRecorders` spezifizieren. Sie können die Daten dann weiterverarbeiten oder bei Bedarf auf eine Datei schreiben.

### Überblick über den Aufnahmeprozess

Der Prozess der Aufnahme eines Streams ist einfach:

1. Richten Sie einen [`MediaStream`](/de/docs/Web/API/MediaStream) oder ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (in Form eines {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements) als Quelle der Mediendaten ein.
2. Erstellen Sie ein [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt und spezifizieren Sie den Quellstream und alle gewünschten Optionen (wie den MIME-Typ des Containers oder die gewünschten Bitraten seiner Tracks).
3. Setzen Sie [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) auf einen Ereignishandler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis; dies wird aufgerufen, wann immer Daten für Sie verfügbar sind.
4. Sobald das Quellmedium abgespielt wird und Sie den Punkt erreicht haben, an dem Sie bereit sind, Video aufzuzeichnen, rufen Sie [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) auf, um die Aufnahme zu starten.
5. Ihr [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignishandler wird jedes Mal aufgerufen, wenn Daten für Sie bereit sind; das Ereignis hat ein `data`-Attribut, dessen Wert ein [`Blob`](/de/docs/Web/API/Blob) ist, das die Mediendaten enthält. Sie können ein `dataavailable`-Ereignis erzwingen, wodurch der neueste Ton an Sie geliefert wird, damit Sie ihn filtern, speichern oder anderweitig nutzen können.
6. Die Aufnahme wird automatisch gestoppt, wenn das Quellmedium nicht mehr abgespielt wird.
7. Sie können die Aufnahme jederzeit stoppen, indem Sie [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) aufrufen.

> [!NOTE]
> Einzelne [`Blob`](/de/docs/Web/API/Blob)s, die Scheiben der aufgenommenen Medien enthalten, sind nicht unbedingt einzeln abspielbar. Die Medien müssen vor der Wiedergabe zusammengesetzt werden.

Wenn während der Aufnahme etwas schief geht, wird ein [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignis an den `MediaRecorder` gesendet. Sie können für `error`-Ereignisse lauschen, indem Sie einen [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignishandler einrichten.

In diesem Beispiel verwenden wir ein HTML-Canvas als Quelle des [`MediaStream`](/de/docs/Web/API/MediaStream) und stoppen die Aufnahme nach 9 Sekunden.

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

### Untersuchung und Steuerung des Aufnahmestatus

Sie können auch die Eigenschaften des `MediaRecorder`-Objekts verwenden, um den Zustand des Aufnahmeprozesses zu bestimmen, und seine Methoden [`pause()`](/de/docs/Web/API/MediaRecorder/pause) und [`resume()`](/de/docs/Web/API/MediaRecorder/resume), um die Aufnahme der Quellmedien zu pausieren und fortzusetzen.

Wenn Sie prüfen möchten, ob ein bestimmter MIME-Typ unterstützt wird, ist das ebenfalls möglich. Rufen Sie einfach [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) auf.

### Untersuchung potenzieller Eingangsquellen

Wenn Ihr Ziel darin besteht, Kamera- und/oder Mikrofoneingaben aufzuzeichnen, möchten Sie möglicherweise die verfügbaren Eingabegeräte untersuchen, bevor Sie mit dem Aufbau des `MediaRecorders` beginnen. Dazu müssen Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste der verfügbaren Mediengeräte zu erhalten. Sie können dann diese Liste untersuchen und die potenziellen Eingangsquellen identifizieren und die Liste sogar anhand gewünschter Kriterien filtern.

In diesem Codeausschnitt wird `enumerateDevices()` verwendet, um die verfügbaren Eingabegeräte zu untersuchen, solche zu finden, die Audioeingabegeräte sind, und {{HTMLElement("option")}}-Elemente zu erstellen, die dann einem {{HTMLElement("select")}}-Element hinzugefügt werden, das einen Eingangsquellenauswähler darstellt.

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

Ähnlicher Code kann verwendet werden, um dem Benutzer die Einschränkung des Gerätesets zu ermöglichen, das er verwenden möchte.

### Weitere Informationen

Um mehr darüber zu erfahren, wie Sie die MediaStream Recording API verwenden können, siehe [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API), die zeigt, wie die API zur Aufnahme von Audioclips verwendet wird. Ein zweiter Artikel, [Aufnahme eines Medien-Elements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element), beschreibt, wie ein Stream von einem {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Element empfangen und der aufgenommene Stream verwendet wird (in diesem Fall wird er aufgenommen und auf einer lokalen Festplatte gespeichert).

## Schnittstellen

- [`BlobEvent`](/de/docs/Web/API/BlobEvent)
  - : Jedes Mal, wenn ein Teil der Mediendaten fertig aufgenommen ist, wird es Verbrauchern in [`Blob`](/de/docs/Web/API/Blob)-Form mittels eines [`BlobEvent`](/de/docs/Web/API/BlobEvent) vom Typ `dataavailable` geliefert.
- [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)
  - : Das primäre Interface, das die MediaStream Recording API implementiert.
- [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Das Interface, das Fehler darstellt, die von der MediaStream Recording API geworfen werden. Seine [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error)-Eigenschaft ist ein [`DOMException`](/de/docs/Web/API/DOMException), das angibt, welcher Fehler aufgetreten ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Übersichtsseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton)
- [HTML5's Media Recorder API in Action on Chrome and Firefox](https://blog.addpipe.com/mediarecorder-api/)
- [MediaRecorder Polyfill](https://github.com/ai/audio-recorder-polyfill) für Safari und Edge
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): HTML-Videoaufnahme/Wiedergabe/Download mit getUserMedia und der MediaStream Recording API ([Quelle auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
- [Simple Video Recording Demo](https://codepen.io/anon/pen/gpmPzm)
- [Advanced Media Stream Recorder Sample](https://quickblox.github.io/javascript-media-recorder/sample/)
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung unter Verwendung von MediaDevices und der MediaStream Recording API für Videoaufnahmen ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [MediaStream Recorder API Now Available in Safari Technology Preview 73](https://blog.addpipe.com/safari-technology-preview-73-adds-limited-mediastream-recorder-api-support/)
