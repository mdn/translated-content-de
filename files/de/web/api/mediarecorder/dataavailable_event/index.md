---
title: "MediaRecorder: dataavailable-Ereignis"
short-title: dataavailable
slug: Web/API/MediaRecorder/dataavailable_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("MediaStream Recording")}}

Das **`dataavailable`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn der MediaRecorder Ihrer Anwendung Mediendaten zur Verfügung stellt. Die Daten werden in einem [`Blob`](/de/docs/Web/API/Blob)-Objekt bereitgestellt. Dies geschieht in vier Situationen:

- Wenn der Medienstrom endet, werden alle Mediendaten, die noch nicht an Ihren `ondataavailable`-Handler übergeben wurden, in einem einzigen [`Blob`](/de/docs/Web/API/Blob) bereitgestellt.
- Wenn [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) aufgerufen wird, werden alle Mediendaten, die seit Beginn der Aufzeichnung oder seit dem letzten `dataavailable`-Ereignis erfasst wurden, in einem [`Blob`](/de/docs/Web/API/Blob) bereitgestellt. Danach endet die Erfassung.
- Wenn [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) aufgerufen wird, werden alle Mediendaten bereitgestellt, die seit Beginn der Aufzeichnung oder seit dem letzten `dataavailable`-Ereignis erfasst wurden. Anschließend wird ein neuer `Blob` erstellt und die Medienerfassung darin fortgesetzt.
- Wenn der Methode [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start), mit der die Medienerfassung gestartet wurde, ein `timeslice`-Wert übergeben wurde, wird alle `timeslice` Millisekunden ein `dataavailable`-Ereignis ausgelöst. Normalerweise enthält daher jeder Blob Mediendaten mit einer bestimmten Dauer. Der letzte Blob kann kürzer sein, da er nur die seit dem letzten Ereignis verbleibenden Daten enthält. Lautet der Methodenaufruf beispielsweise `recorder.start(1000);`, wird das `dataavailable`-Ereignis nach jeder Sekunde der Medienerfassung ausgelöst. Unser Event-Handler wird dann jede Sekunde mit einem Blob aufgerufen, der eine Sekunde Mediendaten enthält. Sie können `timeslice` zusammen mit [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) und [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) verwenden, um mehrere gleich lange Blobs sowie weitere kürzere Blobs zu erzeugen.

> [!NOTE]
> Wie andere Zeitwerte in Web-APIs ist `timeslice` nicht exakt. Die tatsächlichen Intervalle können sich durch andere ausstehende Aufgaben, Browserfunktionen (etwa das Pausieren von Kamera und Mikrofon in Safari), browserspezifisches Verhalten (das Sperren des Bildschirms während einer Aufzeichnung in Chrome unter Android pausiert das `dataavailable`-Ereignis) oder andere Browserfehler verzögern. Dadurch können auch erheblich größere Datenabschnitte entstehen.
>
> Verlassen Sie sich daher bei der Berechnung der verstrichenen Zeit nicht auf `timeslice` und die Anzahl der empfangenen Datenabschnitte, da sich Fehler aufsummieren können. Verwenden Sie stattdessen einen separaten Timer mit [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) oder einer ähnlichen Lösung, um die seit dem Start insgesamt verstrichene Zeit zu erfassen.

Der [`Blob`](/de/docs/Web/API/Blob) mit den Mediendaten ist über die `data`-Eigenschaft des `dataavailable`-Ereignisses verfügbar.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("dataavailable", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ondataavailable = (event) => { }
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
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): Demo für MediaRecorder + getUserMedia + Visualisierung mit der Web Audio API, von [Chris Mills](https://github.com/chrisdavidmills) ([Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone)).
- [simpl.info-Demo zur MediaStream-Aufzeichnung](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)
- [Umgang mit sehr großen MediaRecorder-Datenabschnitten](https://blog.addpipe.com/dealing-with-huge-mediarecorder-slices/) auf addpipe.com (2024)
