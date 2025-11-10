---
title: "MediaRecorder: dataavailable Ereignis"
short-title: dataavailable
slug: Web/API/MediaRecorder/dataavailable_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("MediaStream Recording")}}

Das **`dataavailable`** Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) Schnittstelle wird ausgelöst, wenn der MediaRecorder Mediendaten an Ihre Anwendung zur Nutzung liefert. Die Daten werden in einem [`Blob`](/de/docs/Web/API/Blob) Objekt bereitgestellt, das die Daten enthält. Dies tritt in vier Situationen auf:

- Wenn der Medienstream endet, werden alle Mediendaten, die noch nicht an Ihren `ondataavailable` Handler geliefert wurden, in einem einzelnen [`Blob`](/de/docs/Web/API/Blob) übergeben.
- Wenn [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) aufgerufen wird, werden alle Mediendaten, die seit Beginn der Aufnahme oder das letzte Mal, als ein `dataavailable` Ereignis auftrat, erfasst wurden, in einem [`Blob`](/de/docs/Web/API/Blob) übergeben; danach endet die Aufnahme.
- Wenn [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) aufgerufen wird, werden alle Mediendaten, die seit Beginn der Aufnahme oder dem letzten `dataavailable` Ereignis erfasst wurden, übergeben; dann wird ein neuer `Blob` erstellt und die Aufnahme wird in diesem Blob fortgesetzt.
- Wenn die Eigenschaft `timeslice` der Methode [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start), die die Medienaufnahme startet, übergeben wurde, wird alle `timeslice` Millisekunden ein `dataavailable` Ereignis ausgelöst. Das bedeutet, dass normalerweise jeder Blob eine bestimmte Zeitdauer hat (außer dem letzten Blob, der möglicherweise kürzer ist, da er das restliche Stück seit dem letzten Ereignis wäre). Wenn der Methodenaufruf beispielsweise so aussähe – `recorder.start(1000);` – würde das `dataavailable` Ereignis jede Sekunde der Medienaufnahme ausgelöst, und unser Ereignishandler würde jede Sekunde mit einem Blob von Mediendaten, der eine Sekunde lang ist, aufgerufen. Sie können `timeslice` zusammen mit [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) und [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) verwenden, um mehrere Blobs gleicher Länge plus anderer kürzerer Blobs zu produzieren.

> [!NOTE]
> Wie andere Zeitwerte in Web-APIs ist `timeslice` nicht exakt und die tatsächlichen Intervalle können aufgrund anderer anstehender Aufgaben, Browserfunktionen (wie das Pausieren der Kamera und des Mikrofons in Safari), browserspezifischer Verhaltensweisen (Bildschirm sperren während der Aufnahme in Chrome auf Android pausiert das `dataavailable` Ereignis) oder anderer Browserfehler verzögert werden. Solche Szenarien können auch zu deutlich größeren Datenmengen führen.
>
> Verlassen Sie sich daher nicht auf `timeslice` und die Anzahl der empfangenen Datenmengen, um die verstrichene Zeit zu berechnen, da Fehler sich summieren können. Stattdessen sollten Sie einen separaten Timer wie [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) oder ähnliches verwenden, der die gesamte seit dem Start verstrichene Zeit aufzeichnet.

Der [`Blob`](/de/docs/Web/API/Blob), der die Mediendaten enthält, ist in der `data` Eigenschaft des `dataavailable` Ereignisses verfügbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("dataavailable", (event) => { })

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
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API Visualisierungsdemo von [Chris Mills](https://github.com/chrisdavidmills) ([Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/) von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)
- [Umgang mit großen MediaRecorder-Datenstücken](https://blog.addpipe.com/dealing-with-huge-mediarecorder-slices/) auf addpipe.com (2024)
