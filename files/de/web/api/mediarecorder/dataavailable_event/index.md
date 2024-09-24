---
title: "MediaRecorder: dataavailable Ereignis"
short-title: dataavailable
slug: Web/API/MediaRecorder/dataavailable_event
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}

Das **`dataavailable`**-Ereignis der {{domxref("MediaRecorder")}}-Schnittstelle wird ausgelöst, wenn der MediaRecorder Mediendaten für die Verwendung in Ihrer Anwendung bereitstellt. Die Daten werden in einem {{domxref("Blob")}}-Objekt bereitgestellt, das die Daten enthält. Dies geschieht in vier Situationen:

- Wenn der Medienstrom endet, werden alle Mediendaten, die nicht bereits an Ihren `ondataavailable`-Handler geliefert wurden, in einem einzigen {{domxref("Blob")}} übergeben.
- Wenn {{domxref("MediaRecorder.stop()")}} aufgerufen wird, werden alle Mediendaten, die seit Beginn der Aufzeichnung oder seit dem letzten `dataavailable`-Ereignis erfasst wurden, in einem {{domxref("Blob")}} übergeben; danach endet die Erfassung.
- Wenn {{domxref("MediaRecorder.requestData()")}} aufgerufen wird, werden alle seit Beginn der Aufzeichnung oder seit dem letzten `dataavailable`-Ereignis erfassten Mediendaten übergeben; dann wird ein neuer `Blob` erstellt, und die Medienerfassung wird in diesem Blob fortgesetzt.
- Wenn eine `timeslice`-Eigenschaft in die Methode {{domxref("MediaRecorder.start()")}} übergeben wurde, die die Medienerfassung gestartet hat, wird alle `timeslice` Millisekunden ein `dataavailable`-Ereignis ausgelöst. Das bedeutet, dass jeder Blob eine bestimmte Zeitdauer hat (außer der letzte Blob, der möglicherweise kürzer ist, da er aus dem Rest seit dem letzten Ereignis besteht). Wenn der Methodenaufruf so aussah — `recorder.start(1000);` — würde das `dataavailable`-Ereignis nach jeder Sekunde der Medienerfassung ausgelöst werden, und unser Ereignis-Handler würde jede Sekunde mit einem Blob von Mediendaten aufgerufen werden, das eine Sekunde lang ist. Sie können `timeslice` zusammen mit {{domxref("MediaRecorder.stop()")}} und {{domxref("MediaRecorder.requestData()")}} verwenden, um mehrere gleich lange Blobs sowie andere kürzere Blobs zu erzeugen.

> [!NOTE]
> Wie andere Zeitwerte in Web-APIs ist `timeslice` nicht exakt, und die realen Intervalle können aufgrund anderer ausstehender Aufgaben leicht verzögert sein. Verlassen Sie sich daher nicht auf `timeslice` und die Anzahl der empfangenen Teile, um die verstrichene Zeit zu berechnen, da Fehler sich anhäufen können. Stattdessen sollten Sie einen separaten Timer unter Verwendung von {{domxref("Event.timeStamp")}} oder ähnlichen Methoden aufzeichnen, der die insgesamt seit dem Start verstrichene Zeit festhält.

Der {{domxref("Blob")}}, der die Mediendaten enthält, ist in der `dataavailable`-Eigenschaft des Ereignisses verfügbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("dataavailable", (event) => {});

ondataavailable = (event) => {};
```

## Ereignistyp

Ein {{domxref("BlobEvent")}}. Erbt von {{domxref("Event")}}.

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
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- {{domxref("Navigator.getUserMedia()")}}
