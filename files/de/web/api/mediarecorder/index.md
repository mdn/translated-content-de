---
title: MediaRecorder
slug: Web/API/MediaRecorder
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{APIRef("MediaStream Recording")}}

Die **`MediaRecorder`**-Schnittstelle der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) bietet Funktionen zum einfachen Aufzeichnen von Medien. Sie wird mit dem Konstruktor [`MediaRecorder()`](/de/docs/Web/API/MediaRecorder/MediaRecorder) erstellt.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaRecorder()`](/de/docs/Web/API/MediaRecorder/MediaRecorder)
  - : Erstellt ein neues `MediaRecorder`-Objekt für die Aufzeichnung eines übergebenen [`MediaStream`](/de/docs/Web/API/MediaStream). Über Optionen lassen sich unter anderem der MIME-Typ des Containers (etwa `"video/webm"` oder `"video/mp4"`) sowie die Bitraten der Audio- und Videospuren oder eine gemeinsame Gesamtbitrate festlegen.

## Instanzeigenschaften

- [`MediaRecorder.mimeType`](/de/docs/Web/API/MediaRecorder/mimeType) {{ReadOnlyInline}}
  - : Gibt den MIME-Typ zurück, der beim Erstellen des `MediaRecorder`-Objekts als Aufzeichnungscontainer ausgewählt wurde.
- [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand des `MediaRecorder`-Objekts zurück (`inactive`, `recording` oder `paused`).
- [`MediaRecorder.stream`](/de/docs/Web/API/MediaRecorder/stream) {{ReadOnlyInline}}
  - : Gibt den Stream zurück, der beim Erstellen des `MediaRecorder` an den Konstruktor übergeben wurde.
- [`MediaRecorder.videoBitsPerSecond`](/de/docs/Web/API/MediaRecorder/videoBitsPerSecond) {{ReadOnlyInline}}
  - : Gibt die aktuell verwendete Bitrate für die Videocodierung zurück. Diese kann von der im Konstruktor angegebenen Bitrate abweichen, sofern eine angegeben wurde.
- [`MediaRecorder.audioBitsPerSecond`](/de/docs/Web/API/MediaRecorder/audioBitsPerSecond) {{ReadOnlyInline}}
  - : Gibt die aktuell verwendete Bitrate für die Audiocodierung zurück. Diese kann von der im Konstruktor angegebenen Bitrate abweichen, sofern eine angegeben wurde.
- [`MediaRecorder.audioBitrateMode`](/de/docs/Web/API/MediaRecorder/audioBitrateMode) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den für die Codierung von Audiospuren verwendeten Bitratenmodus zurück.

## Statische Methoden

- [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static)
  - : Eine statische Methode, die `true` oder `false` zurückgibt und damit angibt, ob der aktuelle User Agent den angegebenen Medien-MIME-Typ unterstützt.

## Instanzmethoden

- [`MediaRecorder.pause()`](/de/docs/Web/API/MediaRecorder/pause)
  - : Pausiert die Medienaufzeichnung.
- [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData)
  - : Fordert ein [`Blob`](/de/docs/Web/API/Blob) mit den bis dahin gespeicherten Daten an (oder mit den Daten, die seit dem letzten Aufruf von `requestData()` gespeichert wurden). Nach dem Aufruf dieser Methode wird die Aufzeichnung in einem neuen `Blob` fortgesetzt.
- [`MediaRecorder.resume()`](/de/docs/Web/API/MediaRecorder/resume)
  - : Setzt eine pausierte Medienaufzeichnung fort.
- [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start)
  - : Beginnt die Medienaufzeichnung. Der Methode kann optional ein `timeslice`-Argument mit einem Wert in Millisekunden übergeben werden. Ist dieses angegeben, werden die Medien in separaten Abschnitten dieser Dauer aufgezeichnet, statt wie standardmäßig in einem einzigen großen Abschnitt.
- [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop)
  - : Beendet die Aufzeichnung. Dabei wird ein [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis ausgelöst, das das abschließende `Blob` mit den gespeicherten Daten enthält. Danach erfolgt keine weitere Aufzeichnung.

## Ereignisse

Sie können diese Ereignisse mit `addEventListener()` überwachen oder der Eigenschaft `oneventname` dieser Schnittstelle einen Event-Listener zuweisen.

- [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)
  - : Wird regelmäßig ausgelöst, sobald jeweils `timeslice` Millisekunden Medien aufgezeichnet wurden (oder wenn die gesamte Aufzeichnung abgeschlossen ist, falls `timeslice` nicht angegeben wurde). Das Ereignis vom Typ [`BlobEvent`](/de/docs/Web/API/BlobEvent) enthält die aufgezeichneten Medien in seiner Eigenschaft [`data`](/de/docs/Web/API/BlobEvent/data).
- [`error`](/de/docs/Web/API/MediaRecorder/error_event)
  - : Wird ausgelöst, wenn ein schwerwiegender Fehler die Aufzeichnung beendet. Das empfangene Ereignis basiert auf der Schnittstelle [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent). Deren Eigenschaft [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error) enthält eine [`DOMException`](/de/docs/Web/API/DOMException), die den aufgetretenen Fehler beschreibt.
- [`pause`](/de/docs/Web/API/MediaRecorder/pause_event)
  - : Wird ausgelöst, wenn die Medienaufzeichnung pausiert wird.
- [`resume`](/de/docs/Web/API/MediaRecorder/resume_event)
  - : Wird ausgelöst, wenn die Medienaufzeichnung nach einer Pause fortgesetzt wird.
- [`start`](/de/docs/Web/API/MediaRecorder/start_event)
  - : Wird ausgelöst, wenn die Medienaufzeichnung beginnt.
- [`stop`](/de/docs/Web/API/MediaRecorder/stop_event)
  - : Wird ausgelöst, wenn die Medienaufzeichnung endet – entweder weil der [`MediaStream`](/de/docs/Web/API/MediaStream) endet oder weil die Methode [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) aufgerufen wird.

## Beispiel

```js
if (navigator.mediaDevices) {
  console.log("getUserMedia supported.");

  const constraints = { audio: true };
  let chunks = [];

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);

      record.onclick = () => {
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        record.style.background = "red";
        record.style.color = "black";
      };

      stop.onclick = () => {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        record.style.background = "";
        record.style.color = "";
      };

      mediaRecorder.onstop = (e) => {
        console.log("data available after MediaRecorder.stop() called.");

        const clipName = prompt("Enter a name for your sound clip");

        const clipContainer = document.createElement("article");
        const clipLabel = document.createElement("p");
        const audio = document.createElement("audio");
        const deleteButton = document.createElement("button");
        const mainContainer = document.querySelector("body");

        clipContainer.classList.add("clip");
        audio.setAttribute("controls", "");
        deleteButton.textContent = "Delete";
        clipLabel.textContent = clipName;

        clipContainer.appendChild(audio);
        clipContainer.appendChild(clipLabel);
        clipContainer.appendChild(deleteButton);
        mainContainer.appendChild(clipContainer);

        audio.controls = true;
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        chunks = [];
        const audioURL = URL.createObjectURL(blob);
        audio.src = audioURL;
        console.log("recorder stopped");

        deleteButton.onclick = (e) => {
          const evtTgt = e.target;
          evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
        };
      };

      mediaRecorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };
    })
    .catch((err) => {
      console.error(`The following error occurred: ${err}`);
    });
}
```

> [!NOTE]
> Dieses Codebeispiel ist von der Web-Dictaphone-Demo inspiriert. Einige Zeilen wurden der Kürze halber ausgelassen; den vollständigen Code finden Sie im [Quelltext](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): Demo zur Visualisierung mit MediaRecorder, getUserMedia und der Web Audio API, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelltext auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone))
- [Aufzeichnen eines Medienelements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [simpl.info-Demo zur MediaStream-Aufzeichnung](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): Webanwendung als HTML-Videosprachlabor, die MediaDevices und die MediaStream Recording API zur Videoaufzeichnung verwendet ([Quelltext auf GitHub](https://github.com/chrisjohndigital/OpenLang))
