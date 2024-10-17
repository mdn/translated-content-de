---
title: "MediaRecorder: dataavailable-Event"
short-title: dataavailable
slug: Web/API/MediaRecorder/dataavailable_event
l10n:
  sourceCommit: e4678a89b823949ab3f90fc1480a790a22d89510
---

{{APIRef("MediaStream Recording")}}

Das **`dataavailable`**-Event des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces wird ausgelöst, wenn der MediaRecorder Mediendaten für Ihre Anwendung bereitstellt. Die Daten werden in einem [`Blob`](/de/docs/Web/API/Blob)-Objekt bereitgestellt, das die Daten enthält. Dies geschieht in vier Situationen:

- Wenn der Medienstream endet, werden alle Mediendaten, die noch nicht an Ihren `ondataavailable`-Handler geliefert wurden, in einem einzigen [`Blob`](/de/docs/Web/API/Blob) übergeben.
- Wenn [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) aufgerufen wird, werden alle Mediendaten, die seit Beginn der Aufnahme oder seit dem letzten `dataavailable`-Event erfasst wurden, in einem [`Blob`](/de/docs/Web/API/Blob) geliefert; danach endet die Aufnahme.
- Wenn [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) aufgerufen wird, werden alle Mediendaten, die seit Beginn der Aufnahme oder seit dem letzten `dataavailable`-Event erfasst wurden, geliefert; dann wird ein neuer `Blob` erstellt und die Medienspeicherung wird in diesem Blob fortgesetzt.
- Wenn eine `timeslice`-Eigenschaft in die Methode [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) übergeben wurde, die die Medienaufnahme gestartet hat, wird ein `dataavailable`-Event alle `timeslice`-Millisekunden ausgelöst. Das bedeutet, dass normalerweise jeder Blob eine bestimmte Zeitdauer hat (außer dem letzten Blob, der kürzer sein kann, da er nur das übrig gebliebene von dem letzten Event enthält). Wenn der Methodenaufruf beispielsweise so aussah — `recorder.start(1000);` — dann würde das `dataavailable`-Event jede Sekunde der Medienaufnahme ausgelöst und unser Event-Handler würde jede Sekunde mit einem einsekündigen Blob von Mediendaten aufgerufen werden. Man kann `timeslice` zusammen mit [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) und [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) verwenden, um mehrere gleich lange Blobs plus andere kürzere Blobs zu erzeugen.

> [!NOTE]
> Wie andere Zeitangaben in Web-APIs ist `timeslice` nicht genau und die realen Intervalle können aufgrund von ausstehenden Aufgaben, Browser-Funktionen (wie das Pausieren der Kamera und des Mikrofons in Safari), browserspezifischen Verhaltensweisen (wie das Sperren des Bildschirms während der Aufnahme auf Chrome auf Android, das das `dataavailable`-Event pausiert) oder anderen Browserfehlern verzögert werden. Solche Szenarien können auch zu deutlich größeren Chunk-Größen führen.
>
> Verlassen Sie sich daher nicht auf `timeslice` und die Anzahl der erhaltenen Chunks, um die verstrichene Zeit zu berechnen, da sich Fehler ansammeln können. Stattdessen sollten Sie einen separaten Timer verwenden, der mit [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) oder ähnlichem die insgesamt seit dem Start verstrichene Zeit aufzeichnet.

Der [`Blob`](/de/docs/Web/API/Blob), der die Mediendaten enthält, ist in der `dataavailable`-Eigenschaft des Events verfügbar.

## Syntax

Verwenden Sie den Eventnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("dataavailable", (event) => {});

ondataavailable = (event) => {};
```

## Event-Typ

Ein [`BlobEvent`](/de/docs/Web/API/BlobEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("BlobEvent")}}

## Beispiel

```js
const chunks = [];

mediaRecorder.onstop = (e) => {
  console.log("data available after MediaRecorder.stop() called.");

  const audio = document.createElement("audio");
  audio.controls = true;
  const blob = new Blob(chunks, { type: mediaRecorder.mimeType });
  const audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;
  console.log("recorder stopped");
};

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [Web-Diktiergerät](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungsdemo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)
- [Umgang mit großen MediaRecorder-Chunks](https://blog.addpipe.com/dealing-with-huge-mediarecorder-slices/) auf addpipe.com (2024)
