---
title: MediaRecorder
slug: Web/API/MediaRecorder
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}

Die **`MediaRecorder`**-Schnittstelle der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) bietet Funktionen zum einfachen Aufzeichnen von Medien. Sie wird mit dem [`MediaRecorder()`](/de/docs/Web/API/MediaRecorder/MediaRecorder)-Konstruktor erstellt.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaRecorder()`](/de/docs/Web/API/MediaRecorder/MediaRecorder)
  - : Erstellt ein neues `MediaRecorder`-Objekt, basierend auf einem [`MediaStream`](/de/docs/Web/API/MediaStream), das aufgezeichnet werden soll. Es stehen Optionen zur Verfügung, um Dinge einzustellen wie den MIME-Typ des Containers (z. B. `"video/webm"` oder `"video/mp4"`) und die Bitraten der Audio- und Videospuren oder eine einzige Gesamtbitrate.

## Instanz-Eigenschaften

- [`MediaRecorder.mimeType`](/de/docs/Web/API/MediaRecorder/mimeType) {{ReadOnlyInline}}
  - : Gibt den MIME-Typ zurück, der als Aufzeichnungscontainer für das `MediaRecorder`-Objekt ausgewählt wurde, als es erstellt wurde.
- [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand des `MediaRecorder`-Objekts zurück (`inactive`, `recording` oder `paused`).
- [`MediaRecorder.stream`](/de/docs/Web/API/MediaRecorder/stream) {{ReadOnlyInline}}
  - : Gibt den Stream zurück, der beim Erstellen des `MediaRecorder` in den Konstruktor übergeben wurde.
- [`MediaRecorder.videoBitsPerSecond`](/de/docs/Web/API/MediaRecorder/videoBitsPerSecond) {{ReadOnlyInline}}
  - : Gibt die verwendete Video-Codierungsrate zurück. Diese kann sich von der im Konstruktor angegebenen Bitrate unterscheiden (falls diese angegeben wurde).
- [`MediaRecorder.audioBitsPerSecond`](/de/docs/Web/API/MediaRecorder/audioBitsPerSecond) {{ReadOnlyInline}}
  - : Gibt die verwendete Audio-Codierungsrate zurück. Diese kann sich von der im Konstruktor angegebenen Bitrate unterscheiden (falls diese angegeben wurde).
- [`MediaRecorder.audioBitrateMode`](/de/docs/Web/API/MediaRecorder/audioBitrateMode) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Bitratenmodus zurück, der zum Codieren von Audiospuren verwendet wird.

## Statische Methoden

- [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static)
  - : Eine statische Methode, die einen `true`- oder `false`-Wert zurückgibt, der anzeigt, ob der gegebene MIME-Medientyp vom aktuellen Benutzeragenten unterstützt wird.

## Instanz-Methoden

- [`MediaRecorder.pause()`](/de/docs/Web/API/MediaRecorder/pause)
  - : Pausiert die Aufzeichnung von Medien.
- [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData)
  - : Fordert ein [`Blob`](/de/docs/Web/API/Blob) an, das die bisher empfangenen gespeicherten Daten enthält (oder seit dem letzten Aufruf von `requestData()`). Nach dem Aufruf dieser Methode wird die Aufzeichnung fortgesetzt, jedoch in einem neuen `Blob`.
- [`MediaRecorder.resume()`](/de/docs/Web/API/MediaRecorder/resume)
  - : Setzt die Aufnahme von Medien nach einer Pause fort.
- [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start)
  - : Beginnt mit der Aufnahme von Medien; dieser Methode kann optional ein `timeslice`-Argument mit einem Wert in Millisekunden übergeben werden. Wenn dies angegeben ist, wird das Medium in separaten Abschnitten dieser Dauer aufgenommen, anstatt im Standardverhalten das Medium in einem großen Abschnitt aufzunehmen.
- [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop)
  - : Beendet die Aufzeichnung, woraufhin ein [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis ausgelöst wird, das den finalen `Blob` der gespeicherten Daten enthält. Es erfolgt keine weitere Aufzeichnung.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` ab oder weisen Sie einen Ereignislistener der `oneventname`-Eigenschaft dieser Schnittstelle zu.

- [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)
  - : Wird periodisch jedes Mal ausgelöst, wenn `timeslice` Millisekunden Medien aufgezeichnet wurden (oder wenn das gesamte Medium aufgezeichnet wurde, falls `timeslice` nicht angegeben wurde). Das Ereignis, vom Typ [`BlobEvent`](/de/docs/Web/API/BlobEvent), enthält die aufgezeichneten Medien in seiner [`data`](/de/docs/Web/API/BlobEvent/data)-Eigenschaft.
- [`error`](/de/docs/Web/API/MediaRecorder/error_event)
  - : Wird ausgelöst, wenn es zu schwerwiegenden Fehlern kommt, die die Aufzeichnung stoppen. Das empfangene Ereignis basiert auf der [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent)-Schnittstelle, deren [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error)-Eigenschaft eine [`DOMException`](/de/docs/Web/API/DOMException) enthält, die den tatsächlich aufgetretenen Fehler beschreibt.
- [`pause`](/de/docs/Web/API/MediaRecorder/pause_event)
  - : Wird ausgelöst, wenn die Medienaufnahme pausiert wird.
- [`resume`](/de/docs/Web/API/MediaRecorder/resume_event)
  - : Wird ausgelöst, wenn die Medienaufnahme nach einer Pause fortgesetzt wird.
- [`start`](/de/docs/Web/API/MediaRecorder/start_event)
  - : Wird ausgelöst, wenn die Medienaufnahme startet.
- [`stop`](/de/docs/Web/API/MediaRecorder/stop_event)
  - : Wird ausgelöst, wenn die Medienaufnahme endet, entweder wenn der [`MediaStream`](/de/docs/Web/API/MediaStream) endet oder nachdem die Methode [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) aufgerufen wurde.

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
> Dieses Code-Beispiel ist vom Web Diktiergerät-Demo inspiriert. Einige Zeilen wurden der Kürze halber weggelassen; [sehen Sie sich die Quelle an](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone), um den vollständigen Code zu erhalten.

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
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung unter Verwendung von MediaDevices und der MediaStream Recording API für Videoaufnahmen ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
