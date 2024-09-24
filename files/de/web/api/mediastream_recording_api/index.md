---
title: MediaStream-Aufnahme-API
slug: Web/API/MediaStream_Recording_API
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die **MediaStream-Aufnahme-API**, manchmal auch als _Media Recording API_ oder _MediaRecorder API_ bezeichnet, steht in enger Verbindung mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und der [WebRTC API](/de/docs/Web/API/WebRTC_API). Die MediaStream-Aufnahme-API ermöglicht es, die von einem {{domxref("MediaStream")}} oder {{domxref("HTMLMediaElement")}} Objekt erzeugten Daten zur Analyse, Verarbeitung oder Speicherung auf einer Festplatte zu erfassen. Es ist auch überraschend einfach zu bedienen.

## Konzepte und Verwendung

Die MediaStream-Aufnahme-API besteht aus einer einzigen Hauptschnittstelle, {{domxref("MediaRecorder")}}, die die gesamte Arbeit des Aufnehmens der Daten von einem {{domxref("MediaStream")}} übernimmt und sie Ihnen zur Verarbeitung bereitstellt. Die Daten werden durch eine Reihe von {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}}-Ereignissen geliefert, bereits in dem Format, das Sie beim Erstellen des `MediaRecorder` angeben. Sie können die Daten anschließend weiter verarbeiten oder speichern, wie gewünscht.

### Überblick über den Aufnahmevorgang

Der Prozess der Aufnahme eines Streams ist einfach:

1. Richten Sie einen {{domxref("MediaStream")}} oder ein {{domxref("HTMLMediaElement")}} (in Form eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements) ein, um als Quelle der Mediendaten zu dienen.
2. Erstellen Sie ein {{domxref("MediaRecorder")}}-Objekt und geben Sie den Quellstream sowie alle gewünschten Optionen an (wie den MIME-Typ des Containers oder die gewünschten Bitraten seiner Tracks).
3. Richten Sie {{domxref("MediaRecorder.dataavailable_event", "ondataavailable")}} als Ereignis-Handler für das {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}}-Ereignis ein; dies wird aufgerufen, wann immer Daten für Sie verfügbar sind.
4. Sobald das Quellmedium abgespielt wird und Sie den Punkt erreicht haben, an dem Sie bereit sind, das Video aufzunehmen, rufen Sie {{domxref("MediaRecorder.start()")}} auf, um mit der Aufnahme zu beginnen.
5. Ihr {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}}-Ereignis-Handler wird jedes Mal aufgerufen, wenn Daten bereit sind. Das Ereignis hat ein `data`-Attribut, dessen Wert ein {{domxref("Blob")}} enthält, das die Mediendaten enthält. Sie können ein `dataavailable`-Ereignis erzwingen, um die neuesten sounds zu erhalten, damit Sie sie filtern, speichern oder anderweitig verwenden können.
6. Die Aufnahme stoppt automatisch, wenn das Quellmedium aufhört zu spielen.
7. Sie können die Aufnahme jederzeit durch Aufruf von {{domxref("MediaRecorder.stop()")}} beenden.

> [!NOTE]
> Einzelne {{domxref("Blob")}}s, die Ausschnitte des aufgenommenen Mediums enthalten, sind möglicherweise nicht einzeln abspielbar. Das Medium muss vor der Wiedergabe neu zusammengesetzt werden.

Wenn während der Aufnahme etwas schief geht, wird ein {{domxref("MediaRecorder/error_event", "error")}}-Ereignis an den `MediaRecorder` gesendet. Sie können `error`-Ereignisse abhören, indem Sie einen {{domxref("MediaRecorder.error_event", "onerror")}}-Ereignis-Handler einrichten.

Beispiel: Hier verwenden wir eine HTML-Leinwand als Quelle des {{domxref("MediaStream")}} und stoppen die Aufnahme nach 9 Sekunden.

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

### Prüfung und Steuerung des Recorder-Status

Sie können auch die Eigenschaften des `MediaRecorder`-Objekts verwenden, um den Zustand des Aufnahmevorgangs festzustellen, und seine {{domxref("MediaRecorder.pause", "pause()")}}- und {{domxref("MediaRecorder.resume", "resume()")}}-Methoden, um die Aufnahme des Quellmediums zu pausieren und fortzusetzen.

Wenn Sie prüfen müssen oder möchten, ob ein bestimmter MIME-Typ unterstützt wird, ist dies ebenfalls möglich. Rufen Sie einfach {{domxref("MediaRecorder.isTypeSupported_static", "MediaRecorder.isTypeSupported()")}} auf.

### Untersuchung potenzieller Eingangsquellen

Wenn Ihr Ziel darin besteht, Kamera- und/oder Mikrofoneingaben aufzuzeichnen, möchten Sie möglicherweise die verfügbaren Eingabegeräte untersuchen, bevor Sie mit der Konstruktion des `MediaRecorder` beginnen. Dazu müssen Sie {{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}} aufrufen, um eine Liste der verfügbaren Mediengeräte zu erhalten. Sie können diese Liste dann prüfen, um die potenziellen Eingangsquellen zu identifizieren und die Liste sogar nach gewünschten Kriterien filtern.

In diesem Code-Snippet wird `enumerateDevices()` verwendet, um die verfügbaren Eingabegeräte zu untersuchen, diejenigen zu finden, die Audiogeräte sind, und {{HTMLElement("option")}}-Elemente zu erstellen, die dann einem {{HTMLElement("select")}}-Element hinzugefügt werden, das eine Quellenauswahl darstellt.

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

Ähnliche Codes können verwendet werden, um dem Benutzer zu ermöglichen, die gewünschten Geräte einzuschränken.

### Weitere Informationen

Um mehr über die Verwendung der MediaStream-Aufnahme-API zu erfahren, siehe [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API), die zeigt, wie man die API zur Aufnahme von Audioclips verwendet. Ein zweiter Artikel, [Aufnahme eines Medienelements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element), beschreibt, wie man einen Stream von einem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element erhält und den aufgenommenen Stream verwendet (in diesem Fall ihn aufzeichnet und auf einer lokalen Festplatte speichert).

## Schnittstellen

- {{domxref("BlobEvent")}}
  - : Jedes Mal, wenn ein Datenstück des Mediums fertig aufgezeichnet wurde, wird es den Verbrauchern in {{domxref("Blob")}}-Form unter Verwendung eines {{domxref("BlobEvent")}} vom Typ `dataavailable` übergeben.
- {{domxref("MediaRecorder")}}
  - : Die Hauptschnittstelle, die die MediaStream Recording API implementiert.
- {{domxref("MediaRecorderErrorEvent")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Die Schnittstelle, die Fehler darstellt, die von der MediaStream Recording API geworfen werden. Ihre {{domxref("MediaRecorderErrorEvent.error", "error")}}-Eigenschaft ist eine {{domxref("DOMException")}}, die den aufgetretenen Fehler angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Startseite
- {{domxref("MediaDevices.getUserMedia()")}}
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton)
- [HTML5's Media Recorder API in Action on Chrome and Firefox](https://blog.addpipe.com/mediarecorder-api/)
- [MediaRecorder Polyfill](https://github.com/ai/audio-recorder-polyfill) für Safari und Edge
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): HTML-Videoaufnahme/-wiedergabe/-download unter Verwendung von getUserMedia und der MediaStream Recording API ([Quelle auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
- [Einfaches Videoaufnahme-Demo](https://codepen.io/anon/pen/gpmPzm)
- [Erweitertes Media-Stream-Rekorder-Beispiel](https://quickblox.github.io/javascript-media-recorder/sample/)
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung mit MediaDevices und der MediaStream Recording API für Videoaufzeichnungen ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [MediaStream Recorder API jetzt verfügbar in Safari Technology Preview 73](https://blog.addpipe.com/safari-technology-preview-73-adds-limited-mediastream-recorder-api-support/)
