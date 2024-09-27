---
title: "MediaRecorder: dataavailable-Ereignis"
short-title: dataavailable
slug: Web/API/MediaRecorder/dataavailable_event
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}

Das **`dataavailable`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn der MediaRecorder Mediendaten zur Verwendung an Ihre Anwendung liefert. Die Daten werden in einem [`Blob`](/de/docs/Web/API/Blob)-Objekt bereitgestellt, das die Daten enthält. Dies geschieht in vier Situationen:

- Wenn der Medienstream endet, werden alle Mediendaten, die noch nicht an Ihren `ondataavailable`-Handler geliefert wurden, in einem einzigen [`Blob`](/de/docs/Web/API/Blob) übergeben.
- Wenn [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) aufgerufen wird, werden alle seit Beginn der Aufnahme oder seit dem letzten `dataavailable`-Ereignis erfassten Mediendaten in einem [`Blob`](/de/docs/Web/API/Blob) geliefert; danach endet die Erfassung.
- Wenn [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) aufgerufen wird, werden alle seit Beginn der Aufnahme oder seit dem letzten `dataavailable`-Ereignis erfassten Mediendaten geliefert; dann wird ein neues `Blob` erstellt und die Medienerfassung wird in dieses Blob fortgesetzt.
- Wenn eine `timeslice`-Eigenschaft an die Methode [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start), die die Medienerfassung startete, übergeben wurde, wird alle `timeslice` Millisekunden ein `dataavailable`-Ereignis ausgelöst. Das bedeutet, dass jedes Blob eine bestimmte Zeitdauer hat (außer dem letzten Blob, das möglicherweise kürzer ist, da es den restlichen Zeitraum seit dem letzten Ereignis umfasst). Wenn der Methodenaufruf also so aussah — `recorder.start(1000);` — würde das `dataavailable`-Ereignis nach jeder Sekunde Medienerfassung ausgelöst, und unser Ereignishandler würde jede Sekunde mit einem einsekündigen Blob Mediendaten aufgerufen. Sie können `timeslice` zusammen mit [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) und [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) verwenden, um mehrere Blobs gleicher Länge sowie andere kürzere Blobs zu erzeugen.

> [!NOTE]
> Wie andere Zeitwerte in Web-APIs ist auch `timeslice` nicht exakt, und die tatsächlichen Intervalle können aufgrund anderer anstehender Aufgaben leicht verzögert werden. Vertrauen Sie daher nicht auf `timeslice` und die Anzahl der empfangenen Abschnitte, um die vergangene Zeit zu berechnen, da sich Fehler summieren können. Verwenden Sie stattdessen einen separaten Timer mit [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) oder ähnlichem, um die Gesamtzeit seit dem Start zu erfassen.

Der [`Blob`](/de/docs/Web/API/Blob), der die Mediendaten enthält, ist in der `data`-Eigenschaft des `dataavailable`-Ereignisses verfügbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("dataavailable", (event) => {});

ondataavailable = (event) => {};
```

## Ereignistyp

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
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API Visualisierungs-Demo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording-Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)
