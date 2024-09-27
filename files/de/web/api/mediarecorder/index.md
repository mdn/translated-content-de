---
title: MediaRecorder
slug: Web/API/MediaRecorder
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}

Die **`MediaRecorder`**-Schnittstelle der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) bietet Funktionen, um Medien einfach aufzunehmen. Sie wird mit dem [`MediaRecorder()`](/de/docs/Web/API/MediaRecorder/MediaRecorder)-Konstruktor erstellt.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaRecorder()`](/de/docs/Web/API/MediaRecorder/MediaRecorder)
  - : Erstellt ein neues `MediaRecorder`-Objekt, wenn ein [`MediaStream`](/de/docs/Web/API/MediaStream) zur Aufnahme bereitgestellt wird. Es stehen Optionen zur Verfügung, wie z.B. das Festlegen des MIME-Typs des Containers (wie `"video/webm"` oder `"video/mp4"`) und der Bitraten der Audio- und Videospuren oder einer einzelnen Gesamtbitrate.

## Instanz-Eigenschaften

- [`MediaRecorder.mimeType`](/de/docs/Web/API/MediaRecorder/mimeType) {{ReadOnlyInline}}
  - : Gibt den MIME-Typ zurück, der als Aufnahmecontainer für das `MediaRecorder`-Objekt beim Erstellen ausgewählt wurde.
- [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) {{ReadOnlyInline}}
  - : Gibt den aktuellen Status des `MediaRecorder`-Objekts zurück (`inactive`, `recording` oder `paused`.)
- [`MediaRecorder.stream`](/de/docs/Web/API/MediaRecorder/stream) {{ReadOnlyInline}}
  - : Gibt den Stream zurück, der in den Konstruktor übergeben wurde, als der `MediaRecorder` erstellt wurde.
- [`MediaRecorder.videoBitsPerSecond`](/de/docs/Web/API/MediaRecorder/videoBitsPerSecond) {{ReadOnlyInline}}
  - : Gibt die verwendete Video-Codierungs-Bitrate zurück. Diese kann von der im Konstruktor angegebenen Bitrate abweichen (falls angegeben).
- [`MediaRecorder.audioBitsPerSecond`](/de/docs/Web/API/MediaRecorder/audioBitsPerSecond) {{ReadOnlyInline}}
  - : Gibt die verwendete Audio-Codierungs-Bitrate zurück. Diese kann von der im Konstruktor angegebenen Bitrate abweichen (falls angegeben).
- [`MediaRecorder.audioBitrateMode`](/de/docs/Web/API/MediaRecorder/audioBitrateMode) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Bitratenmodus zurück, der zur Codierung von Audiospuren verwendet wird.

## Statische Methoden

- [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static)
  - : Eine statische Methode, die einen `true`- oder `false`-Wert zurückgibt, der anzeigt, ob der angegebene MIME-Medientyp vom aktuellen User-Agent unterstützt wird.

## Instanz-Methoden

- [`MediaRecorder.pause()`](/de/docs/Web/API/MediaRecorder/pause)
  - : Pausiert die Aufnahme von Medien.
- [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData)
  - : Fordert ein [`Blob`](/de/docs/Web/API/Blob) an, das die bisher gespeicherten Daten enthält (oder seit dem letzten Aufruf von `requestData()`). Nach dem Aufruf dieser Methode wird die Aufnahme fortgesetzt, jedoch in einem neuen `Blob`.
- [`MediaRecorder.resume()`](/de/docs/Web/API/MediaRecorder/resume)
  - : Setzt die Aufnahme von Medien fort, nachdem sie pausiert wurde.
- [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start)
  - : Beginnt die Aufnahme von Medien; dieser Methode kann optional ein `timeslice`-Argument mit einem Wert in Millisekunden übergeben werden. Wenn dies angegeben ist, wird das Medium in separaten Abschnitten dieser Dauer erfasst, anstatt das Medium in einem einzelnen großen Abschnitt aufzunehmen.
- [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop)
  - : Stoppt die Aufnahme, woraufhin ein [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis mit dem finalen `Blob` der gespeicherten Daten ausgelöst wird. Es erfolgt keine weitere Aufnahme.

## Ereignisse

Diese Ereignisse können mit `addEventListener()` oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle überwacht werden.

- [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)
  - : Wird periodisch ausgelöst, jedes Mal, wenn `timeslice` Millisekunden Medien aufgenommen wurden (oder wenn das gesamte Medium aufgenommen wurde, falls `timeslice` nicht angegeben wurde). Das Ereignis vom Typ [`BlobEvent`](/de/docs/Web/API/BlobEvent) enthält das aufgenommene Medium in seiner [`data`](/de/docs/Web/API/BlobEvent/data)-Eigenschaft.
- [`error`](/de/docs/Web/API/MediaRecorder/error_event)
  - : Wird ausgelöst, wenn kritische Fehler die Aufnahme stoppen. Das empfangene Ereignis basiert auf der [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent)-Schnittstelle, deren [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error)-Eigenschaft eine [`DOMException`](/de/docs/Web/API/DOMException) enthält, die den tatsächlichen aufgetretenen Fehler beschreibt.
- [`pause`](/de/docs/Web/API/MediaRecorder/pause_event)
  - : Wird ausgelöst, wenn die Medienaufnahme pausiert wird.
- [`resume`](/de/docs/Web/API/MediaRecorder/resume_event)
  - : Wird ausgelöst, wenn die Medienaufnahme nach einer Pause fortgesetzt wird.
- [`start`](/de/docs/Web/API/MediaRecorder/start_event)
  - : Wird ausgelöst, wenn die Medienaufnahme beginnt.
- [`stop`](/de/docs/Web/API/MediaRecorder/stop_event)
  - : Wird ausgelöst, wenn die Medienaufnahme endet, entweder wenn der [`MediaStream`](/de/docs/Web/API/MediaStream) endet, oder nachdem die Methode [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) aufgerufen wurde.

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
> Dieses Code-Beispiel ist vom Web Dictaphone-Demo inspiriert. Einige Zeilen wurden der Kürze halber ausgelassen; [sehen Sie sich die Quelle an](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone) für den vollständigen Code.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungs-Demo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [Aufnahme eines Medienelements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung unter Verwendung von MediaDevices und der MediaStream Recording API zur Videoaufnahme ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
