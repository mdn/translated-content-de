---
title: MediaStream Recording API
slug: Web/API/MediaStream_Recording_API
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die **MediaStream Recording API**, manchmal auch als _Media Recording API_ oder _MediaRecorder API_ bezeichnet, ist eng mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und der [WebRTC API](/de/docs/Web/API/WebRTC_API) verbunden. Die MediaStream Recording API ermöglicht es, die von einem [`MediaStream`](/de/docs/Web/API/MediaStream) oder einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Objekt erzeugten Daten zur Analyse, Verarbeitung oder Speicherung auf einer Festplatte zu erfassen. Die Arbeit mit dieser API ist auch überraschend einfach.

## Konzepte und Verwendung

Die MediaStream Recording API besteht aus einem einzigen wesentlichen Interface, [`MediaRecorder`](/de/docs/Web/API/MediaRecorder), das die gesamte Arbeit übernimmt, die Daten von einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu übernehmen und Ihnen zur Verarbeitung zur Verfügung zu stellen. Die Daten werden durch eine Reihe von [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) Ereignissen geliefert, bereits im Format, das Sie bei der Erstellung des `MediaRecorder` angegeben haben. Sie können die Daten dann weiterverarbeiten oder nach Belieben auf eine Datei schreiben.

### Überblick über den Aufnahmeprozess

Der Prozess der Aufnahme eines Streams ist einfach:

1. Richten Sie einen [`MediaStream`](/de/docs/Web/API/MediaStream) oder ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (in Form eines {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements) ein, um als Quelle der Mediendaten zu dienen.
2. Erstellen Sie ein [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) Objekt und spezifizieren Sie den Quellstream und alle gewünschten Optionen (wie den MIME-Typ des Containers oder die gewünschten Bitraten seiner Tracks).
3. Legen Sie [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) als Event-Handler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) Ereignis fest; dies wird aufgerufen, wann immer Daten für Sie verfügbar sind.
4. Sobald das Quellmedium abgespielt wird und Sie bereit sind, Video aufzunehmen, rufen Sie [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) auf, um die Aufnahme zu beginnen.
5. Ihr [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) Ereignishandler wird jedes Mal aufgerufen, wenn Daten für Sie bereit sind; das Ereignis hat ein `data` Attribut, dessen Wert ein [`Blob`](/de/docs/Web/API/Blob) ist, das die Mediendaten enthält. Sie können ein `dataavailable` Ereignis auslösen, um den neuesten Sound zu liefern, damit Sie ihn filtern, speichern oder anderweitig verwenden können.
6. Die Aufnahme stoppt automatisch, wenn das Quellmedium aufhört zu spielen.
7. Sie können die Aufnahme jederzeit durch Aufruf von [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) beenden.

> [!NOTE]
> Einzelne [`Blob`](/de/docs/Web/API/Blob)s, die Abschnitte der aufgenommenen Medien enthalten, sind möglicherweise nicht einzeln abspielbar. Die Medien müssen vor der Wiedergabe neu zusammengesetzt werden.

Wenn während der Aufnahme etwas schiefgeht, wird ein [`error`](/de/docs/Web/API/MediaRecorder/error_event) Ereignis an den `MediaRecorder` gesendet. Sie können auf `error` Ereignisse lauschen, indem Sie einen [`onerror`](/de/docs/Web/API/MediaRecorder/error_event) Event-Handler einrichten.

Beispiel: Hier verwenden wir ein HTML Canvas als Quelle des [`MediaStream`](/de/docs/Web/API/MediaStream) und stoppen die Aufnahme nach 9 Sekunden.

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

### Untersuchung und Kontrolle des Recorder-Status

Sie können auch die Eigenschaften des `MediaRecorder` Objekts verwenden, um den Zustand des Aufnahmeprozesses zu bestimmen, sowie seine Methoden [`pause()`](/de/docs/Web/API/MediaRecorder/pause) und [`resume()`](/de/docs/Web/API/MediaRecorder/resume), um die Aufnahme des Quellmediums zu pausieren und wieder aufzunehmen.

Wenn Sie überprüfen müssen oder möchten, ob ein bestimmter MIME-Typ unterstützt wird, ist das ebenfalls möglich. Rufen Sie einfach [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) auf.

### Untersuchung potenzieller Eingabequellen

Wenn Ihr Ziel darin besteht, Kamera- und/oder Mikrofoneingaben aufzuzeichnen, möchten Sie möglicherweise die verfügbaren Eingabegeräte prüfen, bevor Sie mit der Konstruktion des `MediaRecorder` beginnen. Dazu müssen Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste der verfügbaren Mediengeräte zu erhalten. Sie können diese Liste dann prüfen und die potenziellen Eingabequellen identifizieren und sogar die Liste basierend auf gewünschten Kriterien filtern.

In diesem Code-Schnipsel wird `enumerateDevices()` verwendet, um die verfügbaren Eingabegeräte zu prüfen, diejenigen zu finden, die Audioeingabegeräte sind, und {{HTMLElement("option")}} Elemente zu erstellen, die dann zu einem {{HTMLElement("select")}} Element hinzugefügt werden, das eine Eingabequellenauswahl darstellt.

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

Ein ähnlicher Code kann verwendet werden, um dem Benutzer zu ermöglichen, die Menge der Geräte, die sie verwenden möchten, einzuschränken.

### Für weitere Informationen

Um mehr über die Verwendung der MediaStream Recording API zu erfahren, siehe [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API), die zeigt, wie die API verwendet wird, um Audio-Clips aufzunehmen. Ein zweiter Artikel, [Aufnahme eines Medienelements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element), beschreibt, wie man einen Stream von einem {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element empfängt und den erfassten Stream benutzt (in diesem Fall wird er aufgenommen und auf einer lokalen Festplatte gespeichert).

## Schnittstellen

- [`BlobEvent`](/de/docs/Web/API/BlobEvent)
  - : Jedes Mal, wenn ein Abschnitt der Mediendaten fertig aufgenommen ist, wird er den Konsumenten in [`Blob`](/de/docs/Web/API/Blob) Form mit einem [`BlobEvent`](/de/docs/Web/API/BlobEvent) vom Typ `dataavailable` übergeben.
- [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)
  - : Das primäre Interface, das die MediaStream Recording API implementiert.
- [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Das Interface, das Fehler darstellt, die von der MediaStream Recording API ausgelöst werden. Seine [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error) Eigenschaft ist ein [`DOMException`](/de/docs/Web/API/DOMException), das den aufgetretenen Fehler spezifiziert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Startseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton)
- [HTML5's Media Recorder API in Action on Chrome and Firefox](https://blog.addpipe.com/mediarecorder-api/)
- [MediaRecorder polyfill](https://github.com/ai/audio-recorder-polyfill) für Safari und Edge
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): HTML Videoaufnahme/-wiedergabe/-download mit getUserMedia und der MediaStream Recording API ([Quellcode auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
- [Einfaches Videoaufnahme-Demo](https://codepen.io/anon/pen/gpmPzm)
- [Erweitertes Media-Stream-Recorder-Beispiel](https://quickblox.github.io/javascript-media-recorder/sample/)
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML Video Sprachlabor Webanwendung unter Verwendung von MediaDevices und der MediaStream Recording API für Videoaufnahmen ([Quellcode auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [MediaStream Recorder API Jetzt Verfügbar im Safari Technology Preview 73](https://blog.addpipe.com/safari-technology-preview-73-adds-limited-mediastream-recorder-api-support/)
