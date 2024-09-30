---
title: "MediaRecorder: dataavailable-Ereignis"
short-title: dataavailable
slug: Web/API/MediaRecorder/dataavailable_event
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}

Das **`dataavailable`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn der MediaRecorder Mediendaten an Ihre Anwendung liefert. Die Daten werden in einem [`Blob`](/de/docs/Web/API/Blob)-Objekt bereitgestellt, das die Daten enthält. Dies geschieht in vier Situationen:

- Wenn der Medienstream endet, werden alle Mediendaten, die noch nicht an Ihren `ondataavailable`-Handler geliefert wurden, in einem einzigen [`Blob`](/de/docs/Web/API/Blob) übergeben.
- Wenn [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) aufgerufen wird, werden alle seit Beginn der Aufnahme oder seit dem letzten `dataavailable`-Ereignis erfassten Mediendaten in einem [`Blob`](/de/docs/Web/API/Blob) bereitgestellt; danach endet die Erfassung.
- Wenn [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) aufgerufen wird, werden alle seit Beginn der Aufnahme oder seit dem letzten `dataavailable`-Ereignis erfassten Mediendaten geliefert; dann wird ein neuer `Blob` erstellt und die Medienerfassung wird in diesen Blob fortgesetzt.
- Wenn eine `timeslice`-Eigenschaft in die [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start)-Methode übergeben wurde, die die Medienerfassung gestartet hat, wird ein `dataavailable`-Ereignis alle `timeslice` Millisekunden ausgelöst. Das bedeutet, dass jeder Blob eine bestimmte Zeitdauer hat (außer dem letzten Blob, der kürzer sein könnte, da er den Rest seit dem letzten Ereignis enthält). Wenn der Methodenaufruf so aussieht — `recorder.start(1000);` — wird das `dataavailable`-Ereignis nach jeder Sekunde der Medienerfassung ausgelöst, und unser Ereignishandler wird jede Sekunde mit einem Blob von Mediendaten aufgerufen, das eine Sekunde lang ist. Sie können `timeslice` zusammen mit [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) und [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) verwenden, um mehrere Blobs gleicher Länge plus andere kürzere Blobs zu erzeugen.

> [!NOTE]
> Wie andere Zeitwerte in Web-APIs ist `timeslice` nicht exakt und die tatsächlichen Intervalle können aufgrund anderer anstehender Aufgaben leicht verzögert sein. Verlassen Sie sich daher nicht auf `timeslice` und die Anzahl der empfangenen Stücke, um die verstrichene Zeit zu berechnen, da sich Fehler akkumulieren können. Führen Sie stattdessen einen separaten Timer mit [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) oder ähnlichem, der die Gesamtzeit seit dem Start aufzeichnet.

Der [`Blob`](/de/docs/Web/API/Blob), der die Mediendaten enthält, ist in der `data`-Eigenschaft des `dataavailable`-Ereignisses verfügbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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
  getUserMedia + Web Audio API Visualisierungsdemo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)
