---
title: MediaStream Recording API
slug: Web/API/MediaStream_Recording_API
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die **MediaStream Recording API**, manchmal auch als _Media Recording API_ oder _MediaRecorder API_ bezeichnet, steht in enger Verbindung mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und der [WebRTC API](/de/docs/Web/API/WebRTC_API). Die MediaStream Recording API ermöglicht es, die von einem [`MediaStream`](/de/docs/Web/API/MediaStream)- oder [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt erzeugten Daten zur Analyse, Verarbeitung oder zum Speichern auf der Festplatte zu erfassen. Es ist auch überraschend einfach zu handhaben.

## Konzepte und Verwendung

Die MediaStream Recording API besteht aus einer einzigen Hauptschnittstelle, [`MediaRecorder`](/de/docs/Web/API/MediaRecorder), die die gesamte Arbeit übernimmt, die Daten von einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu nehmen und Ihnen zur Verarbeitung bereitzustellen. Die Daten werden durch eine Reihe von [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignissen geliefert, bereits im Format, das Sie beim Erstellen des `MediaRecorders` angeben. Sie können die Daten dann weiterverarbeiten oder nach Belieben auf eine Datei schreiben.

### Überblick über den Aufnahmeprozess

Der Prozess der Aufzeichnung eines Streams ist einfach:

1. Richten Sie einen [`MediaStream`](/de/docs/Web/API/MediaStream) oder [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (in Form eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements) ein, um als Quelle der Mediendaten zu dienen.
2. Erstellen Sie ein [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt, das den Quellstream und alle gewünschten Optionen (wie den MIME-Typ des Containers oder die gewünschten Bitraten seiner Tracks) angibt.
3. Setzen Sie [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) auf einen Ereignishandler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis; dieser wird aufgerufen, wann immer Daten für Sie verfügbar sind.
4. Sobald das Quellmedium abgespielt wird und Sie bereit sind, mit der Aufnahme zu beginnen, rufen Sie [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) auf, um die Aufnahme zu starten.
5. Ihr [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignishandler wird jedes Mal aufgerufen, wenn Daten bereit sind, mit denen Sie tun können, was Sie wollen; das Ereignis hat ein `data`-Attribut, dessen Wert ein [`Blob`](/de/docs/Web/API/Blob) ist, der die Mediendaten enthält. Sie können ein `dataavailable`-Ereignis erzwingen, um den neuesten Ton an Sie zu liefern, damit Sie ihn filtern, speichern oder anderweitig verarbeiten können.
6. Die Aufnahme stoppt automatisch, wenn das Quellmedium die Wiedergabe beendet.
7. Sie können die Aufnahme jederzeit stoppen, indem Sie [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) aufrufen.

> [!NOTE]
> Einzelne [`Blob`](/de/docs/Web/API/Blob)s, die Aufzeichnungen der Medien enthalten, sind möglicherweise nicht einzeln abspielbar. Die Medien müssen vor der Wiedergabe neu zusammengesetzt werden.

Wenn während der Aufnahme etwas schiefgeht, wird ein [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignis an den `MediaRecorder` gesendet. Sie können auf `error`-Ereignisse hören, indem Sie einen [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignishandler einrichten.

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
  window.URL.revokeObjectURL(url);
}

// demo: to download after 9sec
setTimeout((event) => {
  console.log("stopping");
  mediaRecorder.stop();
}, 9000);
```

### Überprüfung und Steuerung des Recorder-Status

Sie können auch die Eigenschaften des `MediaRecorder`-Objekts verwenden, um den Status des Aufnahmeprozesses zu bestimmen, und seine Methoden [`pause()`](/de/docs/Web/API/MediaRecorder/pause) und [`resume()`](/de/docs/Web/API/MediaRecorder/resume), um die Aufnahme des Quellmediums zu pausieren und fortzusetzen.

Wenn Sie überprüfen müssen oder möchten, ob ein bestimmter MIME-Typ unterstützt wird, ist das ebenfalls möglich. Rufen Sie einfach [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) auf.

### Untersuchung potenzieller Eingabequellen

Wenn Sie Kamera- und/oder Mikrofoneingaben aufzeichnen möchten, sollten Sie möglicherweise die verfügbaren Eingabegeräte prüfen, bevor Sie beginnen, den `MediaRecorder` zu konstruieren. Dazu müssen Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste der verfügbaren Mediengeräte zu erhalten. Sie können diese Liste dann überprüfen und die potenziellen Eingabequellen identifizieren und sogar die Liste basierend auf gewünschten Kriterien filtern.

In diesem Code-Schnipsel wird `enumerateDevices()` verwendet, um die verfügbaren Eingabegeräte zu überprüfen, diejenigen zu finden, die Audioeingabegeräte sind, und {{HTMLElement("option")}}-Elemente zu erstellen, die dann zu einem {{HTMLElement("select")}}-Element hinzugefügt werden, das einen Eingabequellen-Auswahlknopf darstellt.

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

Ähnlicher Code kann verwendet werden, um dem Nutzer zu ermöglichen, die Menge der Geräte, die er verwenden möchte, einzuschränken.

### Für weitere Informationen

Um mehr über die Verwendung der MediaStream Recording API zu erfahren, lesen Sie [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API), die zeigt, wie die API zur Aufnahme von Audioclips verwendet wird. Ein zweiter Artikel, [Aufzeichnung eines Media-Elements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element), beschreibt, wie man einen Stream von einem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element erhält und den erfassten Stream verwendet (in diesem Fall, um ihn auf einer lokalen Festplatte aufzuzeichnen und zu speichern).

## Schnittstellen

- [`BlobEvent`](/de/docs/Web/API/BlobEvent)
  - : Jedes Mal, wenn ein Medienchuck fertig aufgezeichnet wurde, wird er den Verbrauchern in [`Blob`](/de/docs/Web/API/Blob)-Form über ein [`BlobEvent`](/de/docs/Web/API/BlobEvent) vom Typ `dataavailable` übermittelt.
- [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)
  - : Die primäre Schnittstelle, die die MediaStream Recording API implementiert.
- [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die Schnittstelle, die Fehler repräsentiert, die von der MediaStream Recording API ausgelöst werden. Ihre [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error)-Eigenschaft ist ein [`DOMException`](/de/docs/Web/API/DOMException), das den aufgetretenen Fehler spezifiziert.

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
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): HTML-Video-Erfassung/Wiedergabe/Download mit getUserMedia und der MediaStream Recording API ([Quellcode auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
- [Einfaches Videoaufnahme-Demo](https://codepen.io/anon/pen/gpmPzm)
- [Fortgeschrittenes Media Stream Recorder Beispiel](https://quickblox.github.io/javascript-media-recorder/sample/)
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung, die MediaDevices und die MediaStream Recording API zur Videoaufzeichnung verwendet ([Quellcode auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [MediaStream Recorder API jetzt verfügbar in Safari Technology Preview 73](https://blog.addpipe.com/safari-technology-preview-73-adds-limited-mediastream-recorder-api-support/)
