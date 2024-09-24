---
title: MediaRecorder
slug: Web/API/MediaRecorder
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}

Das **`MediaRecorder`**-Interface der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) bietet Funktionen zum einfachen Aufzeichnen von Medien. Es wird mit dem {{domxref("MediaRecorder.MediaRecorder", "MediaRecorder()")}}-Konstruktor erstellt.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("MediaRecorder.MediaRecorder", "MediaRecorder()")}}
  - : Erzeugt ein neues `MediaRecorder`-Objekt, dem ein {{domxref("MediaStream")}} zur Aufnahme gegeben wird. Es gibt Optionen, um Dinge wie den MIME-Typ des Containers (z. B. `"video/webm"` oder `"video/mp4"`) und die Bitraten der Audio- und Videospuren oder eine einzelne Gesamtratenbitrate einzustellen.

## Instanzeigenschaften

- {{domxref("MediaRecorder.mimeType")}} {{ReadOnlyInline}}
  - : Gibt den MIME-Typ zurück, der als Aufnahmecontainer für das `MediaRecorder`-Objekt bei dessen Erstellung ausgewählt wurde.
- {{domxref("MediaRecorder.state")}} {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand des `MediaRecorder`-Objekts zurück (`inactive`, `recording` oder `paused`).
- {{domxref("MediaRecorder.stream")}} {{ReadOnlyInline}}
  - : Gibt den Stream zurück, der beim Erstellen des `MediaRecorder`-Objekts in den Konstruktor übergeben wurde.
- {{domxref("MediaRecorder.videoBitsPerSecond")}} {{ReadOnlyInline}}
  - : Gibt die verwendete Videocodierungs-Bitrate zurück. Diese kann von der im Konstruktor angegebenen Bitrate abweichen (falls angegeben).
- {{domxref("MediaRecorder.audioBitsPerSecond")}} {{ReadOnlyInline}}
  - : Gibt die verwendete Audiocodierungs-Bitrate zurück. Diese kann von der im Konstruktor angegebenen Bitrate abweichen (falls angegeben).
- {{domxref("MediaRecorder.audioBitrateMode")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Bitratemodus zurück, der zur Kodierung von Audiospuren verwendet wird.

## Statische Methoden

- {{domxref("MediaRecorder.isTypeSupported_static", "MediaRecorder.isTypeSupported()")}}
  - : Eine statische Methode, die einen `true`- oder `false`-Wert zurückgibt, der angibt, ob der gegebene MIME-Medientyp vom aktuellen Benutzer-Agent unterstützt wird.

## Instanzmethoden

- {{domxref("MediaRecorder.pause()")}}
  - : Pausiert die Aufnahme von Medien.
- {{domxref("MediaRecorder.requestData()")}}
  - : Fordert ein {{domxref("Blob")}} an, das die bisher gespeicherten Daten enthält (oder seit dem letzten Aufruf von `requestData()`). Nach dem Aufruf dieser Methode wird die Aufnahme fortgesetzt, jedoch in einem neuen `Blob`.
- {{domxref("MediaRecorder.resume()")}}
  - : Nimmt die Aufnahme von Medien nach einer Pause wieder auf.
- {{domxref("MediaRecorder.start()")}}
  - : Beginnt mit der Aufnahme von Medien; diese Methode kann optional ein `timeslice`-Argument mit einem Wert in Millisekunden übernehmen. Wenn dies angegeben ist, wird das Medium in separaten Abschnitten dieser Dauer aufgenommen, anstatt dem Standardverhalten, das Medium in einem einzigen großen Abschnitt aufzunehmen.
- {{domxref("MediaRecorder.stop()")}}
  - : Beendet die Aufnahme, woraufhin ein {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}}-Ereignis ausgelöst wird, das das endgültige `Blob` der gespeicherten Daten enthält. Es erfolgt keine weitere Aufnahme.

## Ereignisse

Diese Ereignisse mit `addEventListener()` überwachen oder einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- {{domxref("MediaRecorder/dataavailable_event", "dataavailable")}}
  - : Wird periodisch jedes Mal ausgelöst, wenn `timeslice` Millisekunden eines Mediums aufgezeichnet wurden (oder wenn das gesamte Medium aufgezeichnet wurde, falls `timeslice` nicht angegeben wurde). Das Ereignis, vom Typ {{domxref("BlobEvent")}}, enthält das aufgezeichnete Medium in seiner {{domxref("BlobEvent.data", "data")}}-Eigenschaft.
- {{domxref("MediaRecorder/error_event", "error")}}
  - : Wird ausgelöst, wenn schwerwiegende Fehler die Aufnahme stoppen. Das empfangene Ereignis basiert auf der {{domxref("MediaRecorderErrorEvent")}}-Schnittstelle, deren {{domxref("MediaRecorderErrorEvent.error", "error")}}-Eigenschaft eine {{domxref("DOMException")}} enthält, die den tatsächlichen Fehler beschreibt, der aufgetreten ist.
- {{domxref("MediaRecorder/pause_event", "pause")}}
  - : Wird ausgelöst, wenn die Medienaufnahme pausiert wird.
- {{domxref("MediaRecorder/resume_event", "resume")}}
  - : Wird ausgelöst, wenn die Medienaufnahme nach einer Pause fortgesetzt wird.
- {{domxref("MediaRecorder/start_event", "start")}}
  - : Wird ausgelöst, wenn die Medienaufnahme beginnt.
- {{domxref("MediaRecorder/stop_event", "stop")}}
  - : Wird ausgelöst, wenn die Medienaufnahme endet, entweder wenn der {{domxref("MediaStream")}} endet oder nachdem die {{domxref("MediaRecorder.stop()")}}-Methode aufgerufen wurde.

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
> Dieses Codebeispiel ist inspiriert von der Web Dictaphone-Demo. Einige Zeilen wurden der Kürze halber weggelassen; [sehen Sie sich die Quelle an](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone) für den vollständigen Code.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungs-Demo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [Aufnahme eines Medienelements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- {{domxref("MediaDevices.getUserMedia()")}}
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung, die MediaDevices und die MediaStream Recording API zur Videoaufnahme verwendet ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
