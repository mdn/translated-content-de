---
title: Aufnehmen eines Media-Elements
slug: Web/API/MediaStream_Recording_API/Recording_a_media_element
l10n:
  sourceCommit: e0f97a8a4e8a2fc45f1a7bdc8d1e3f524ccb627d
---

{{DefaultAPISidebar("MediaStream Recording")}}

Während der Artikel zur Verwendung der MediaStream Recording API die Nutzung des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces zur Aufnahme eines [`MediaStream`](/de/docs/Web/API/MediaStream), der von einem Hardwaregerät generiert und von [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, demonstriert, können Sie auch ein HTML-Media-Element (nämlich {{HTMLElement("audio")}} oder {{HTMLElement("video")}}) als Quelle für den aufzuzeichnenden `MediaStream` verwenden. In diesem Artikel betrachten wir ein Beispiel, das genau das tut.

## Beispiel für die Aufnahme eines Media-Elements

### HTML

```html hidden
<p>
  Click the "Start Recording" button to begin video recording for a few seconds.
  You can stop recording by clicking the "Stop Recording" button. The "Download"
  button will download the received data (although it's in a raw, unwrapped form
  that isn't very useful).
</p>
<br />
```

Beginnen wir mit den wichtigsten Teilen des HTML-Codes. Es gibt noch ein wenig mehr, aber das ist eher informativ als Teil des Kernbetriebs der App.

```html
<div class="left">
  <div id="startButton" class="button">Start Recording</div>
  <h2>Preview</h2>
  <video id="preview" width="160" height="120" autoplay muted></video>
</div>
```

Wir präsentieren unsere Hauptschnittstelle in zwei Spalten. Links befindet sich eine Start-Taste und ein {{HTMLElement("video")}}-Element, das die Video-Vorschau zeigt; dies ist das Video, das die Kamera des Benutzers sieht. Beachten Sie, dass das [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)-Attribut verwendet wird, damit das Video sofort angezeigt wird, wenn der Stream von der Kamera zu laufen beginnt, und das [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted)-Attribut spezifiziert ist, um sicherzustellen, dass der Ton vom Mikrofon des Benutzers nicht auf seine Lautsprecher ausgegeben wird, was eine unangenehme Rückkopplungsschleife verursachen könnte.

```html
<div class="right">
  <div id="stopButton" class="button">Stop Recording</div>
  <h2>Recording</h2>
  <video id="recording" width="160" height="120" controls></video>
  <a id="downloadButton" class="button">Download</a>
</div>
```

Rechts sehen wir eine Stop-Taste und das `<video>`-Element, das zur Wiedergabe des aufgezeichneten Videos verwendet wird. Beachten Sie, dass das Wiedergabefeld nicht auf Autoplay gesetzt ist (sodass die Wiedergabe nicht startet, sobald Medien ankommen) und dass es mit [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls) ausgestattet ist, was dem Benutzer ermöglicht, Steuerungen zum Abspielen, Pausieren usw. anzuzeigen.

Unter dem Wiedergabeelement befindet sich eine Schaltfläche zum Herunterladen des aufgezeichneten Videos.

```html hidden
<div class="bottom">
  <pre id="log"></pre>
</div>
```

```css hidden
body {
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
}

video {
  margin-top: 2px;
  border: 1px solid black;
}

.button {
  cursor: pointer;
  display: block;
  width: 160px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  text-decoration: none;
}

h2 {
  margin-bottom: 4px;
}

.left {
  margin-right: 10px;
  float: left;
  width: 160px;
  padding: 0px;
}

.right {
  margin-left: 10px;
  float: left;
  width: 160px;
  padding: 0px;
}

.bottom {
  clear: both;
  padding-top: 10px;
}
```

Schauen wir uns nun den JavaScript-Code an; hier passiert schließlich der Großteil der Aktionen!

### Einrichten globaler Variablen

Wir beginnen mit der Festlegung einiger globaler Variablen, die wir benötigen werden.

```js
let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");

let recordingTimeMS = 5000;
```

Die meisten davon sind Referenzen auf Elemente, mit denen wir arbeiten müssen. Die letzte, `recordingTimeMS`, ist auf 5000 Millisekunden (5 Sekunden) eingestellt; sie gibt die Länge der Videos an, die wir aufnehmen werden.

### Dienstfunktionen

Als nächstes erstellen wir einige Dienstfunktionen, die später verwendet werden.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

Die `log()`-Funktion wird verwendet, um Textzeichenfolgen an ein {{HTMLElement("div")}} auszugeben, damit wir Informationen mit dem Benutzer teilen können. Nicht sehr hübsch, aber es erfüllt für unsere Zwecke seinen Zweck.

```js
function wait(delayInMS) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}
```

Die `wait()`-Funktion gibt ein neues {{jsxref("Promise")}} zurück, das sich auflöst, wenn die angegebene Anzahl von Millisekunden verstrichen ist. Sie funktioniert, indem sie eine [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwendet, die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufruft, wobei der Auflösungs-Handler des Promise als Timeout-Handler-Funktion angegeben wird. Dadurch können wir die Promise-Syntax verwenden, wenn wir mit Timeouts arbeiten, was sehr nützlich beim Verketten von Promises sein kann, wie wir später sehen werden.

### Starten der Medienaufnahme

Die `startRecording()`-Funktion behandelt den Start des Aufnahmevorgangs:

```js
function startRecording(stream, lengthInMS) {
  let recorder = new MediaRecorder(stream);
  let data = [];

  recorder.ondataavailable = (event) => data.push(event.data);
  recorder.start();
  log(`${recorder.state} for ${lengthInMS / 1000} seconds…`);

  let stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve;
    recorder.onerror = (event) => reject(event.name);
  });

  let recorded = wait(lengthInMS).then(() => {
    if (recorder.state === "recording") {
      recorder.stop();
    }
  });

  return Promise.all([stopped, recorded]).then(() => data);
}
```

`startRecording()` nimmt zwei Eingabeparameter entgegen: einen [`MediaStream`](/de/docs/Web/API/MediaStream), von dem aufgenommen werden soll, und die Länge in Millisekunden der Aufnahme. Wir zeichnen immer nicht mehr als die angegebene Anzahl von Millisekunden auf, auch wenn die Medien vorher stoppen, beendet [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) die Aufnahme automatisch ebenfalls.

- Zuerst erstellen wir den `MediaRecorder`, der die Aufnahme des Eingabe-`streams` verarbeitet.
- `data` ist ein Array, das anfänglich leer ist und die [`Blob`](/de/docs/Web/API/Blob)s der Mediendaten enthält, die unserem [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignishandler übergeben werden.
- Die `ondataavailable`-Zuweisung richtet den Handler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis ein. Die empfangene Veranstaltung enthält in ihrer `data`-Eigenschaft ein [`Blob`](/de/docs/Web/API/Blob), das die Mediendaten enthält. Der Ereignishandler fügt das `Blob` dem `data`-Array hinzu.
- Wir starten den Aufnahmeprozess, indem wir [`recorder.start()`](/de/docs/Web/API/MediaRecorder/start) aufrufen und eine Nachricht an das Log ausgeben, die den aktualisierten Zustand des Recorders und die Anzahl der Sekunden angibt, für die aufgenommen wird.
- Wir erstellen ein neues {{jsxref("Promise")}}, benannt `stopped`, das aufgelöst wird, wenn der [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignishandler von `MediaRecorder` aufgerufen wird und abgewiesen wird, wenn sein [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignishandler aufgerufen wird. Der Ablehnungshandler erhält als Eingabe den Namen des aufgetretenen Fehlers.
- Wir erstellen ein weiteres neues `Promise`, benannt `recorded`, das aufgelöst wird, wenn die angegebene Anzahl von Millisekunden verstrichen ist. Bei Auflösung wird `MediaRecorder` gestoppt, falls es noch aufnimmt.
- Schließlich verwenden wir {{jsxref("Promise.all")}}, um ein neues `Promise` zu erstellen, das erfüllt wird, wenn beide `Promises` (`stopped` und `recorded`) aufgelöst wurden. Sobald dies aufgelöst ist, wird das Array `data` von `startRecording()` an seinen Aufrufer zurückgegeben.

### Beenden des Eingabestreams

Die `stop()`-Funktion beendet den Eingabemedienstream:

```js
function stop(stream) {
  stream.getTracks().forEach((track) => track.stop());
}
```

Dies wird erreicht, indem [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) aufgerufen und {{jsxref("Array.forEach", "forEach()")}} verwendet wird, um [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) für jeden Track im Stream aufzurufen.

### Abrufen eines Eingabestreams und Einrichten des Recorders

Nun schauen wir auf das komplizierteste Stück Code in diesem Beispiel: unseren Ereignishandler für Klicks auf die Starttaste:

```js
startButton.addEventListener(
  "click",
  () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        preview.srcObject = stream;
        downloadButton.href = stream;
        preview.captureStream =
          preview.captureStream || preview.mozCaptureStream;
        return new Promise((resolve) => {
          preview.onplaying = resolve;
        });
      })
      .then(() => startRecording(preview.captureStream(), recordingTimeMS))
      .then((recordedChunks) => {
        let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
        recording.src = URL.createObjectURL(recordedBlob);
        downloadButton.href = recording.src;
        downloadButton.download = "RecordedVideo.webm";

        log(
          `Successfully recorded ${recordedBlob.size} bytes of ${recordedBlob.type} media.`,
        );
      })
      .catch((error) => {
        if (error.name === "NotFoundError") {
          log("Camera or microphone not found. Can't record.");
        } else {
          log(error);
        }
      });
  },
  false,
);
```

Wenn ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auftritt, geschieht Folgendes:

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) wird aufgerufen, um einen neuen [`MediaStream`](/de/docs/Web/API/MediaStream) anzufordern, der sowohl Video- als auch Audiotracks enthält. Dies ist der Stream, den wir aufnehmen werden.
- Wenn das von `getUserMedia()` zurückgegebene Promise aufgelöst wird, wird die Eigenschaft [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des Vorschau-{{HTMLElement("video")}}-Elements auf den Eingabestream gesetzt, was dazu führt, dass das von der Kamera des Benutzers aufgenommene Video im Vorschaufenster angezeigt wird. Da das `<video>`-Element stummgeschaltet ist, wird der Ton nicht abgespielt. Der Link der "Download"-Schaltfläche wird dann ebenfalls auf den Stream gesetzt. Danach arrangieren wir, dass `preview.captureStream()` `preview.mozCaptureStream()` aufruft, sodass unser Code in Firefox funktioniert, in dem die [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream)-Methode ein Präfix hat. Dann wird ein neues {{jsxref("Promise")}} erstellt und zurückgegeben, das aufgelöst wird, wenn die Vorschau des Videos zu spielen beginnt.
- Wenn die Vorschau des Videos zu spielen beginnt, wissen wir, dass es Medien gibt, die aufgezeichnet werden können. Daher reagieren wir, indem wir die zuvor erstellte [`startRecording()`](#starten_der_medienaufnahme)-Funktion aufrufen und den Vorschau-Video-Stream (als Quelle der aufzunehmenden Medien) und `recordingTimeMS` als die Anzahl von Millisekunden der aufzuzeichnenden Medien übergeben. Wie zuvor erwähnt, gibt `startRecording()` ein {{jsxref("Promise")}} zurück, dessen Auflösungshandler (empfängt ein Array von [`Blob`](/de/docs/Web/API/Blob)-Objekten, die die aufgezeichneten Medien-Daten enthalten) beim Abschluss der Aufnahme aufgerufen wird.
- Der Auflösungshandler des Aufnahmeprozesses erhält ein Array von Medien-`Blob`s, lokal bekannt als `recordedChunks`. Das Erste, was wir tun, ist die Chunks in ein einziges [`Blob`](/de/docs/Web/API/Blob) mit dem MIME-Typ `"video/webm"` zu verschmelzen, indem wir die Tatsache nutzen, dass der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor Arrays von Objekten zu einem Objekt zusammenfügt. Dann wird [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwendet, um eine URL zu erstellen, die auf das Blob verweist; dies wird dann zum Wert des `src`-Attributs des aufgezeichneten Videowiedergabeelements (damit Sie das Video aus dem Blob abspielen können) sowie zum Ziel des Download-Link der Schaltfläche gemacht.

  Dann wird das [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut des Download-Buttons gesetzt. Während das `download`-Attribut ein Boolean sein kann, können Sie es auch auf eine Zeichenkette setzen, um einen Namen für die heruntergeladene Datei zu verwenden. Indem wir das `download`-Attribut des Download-Links auf "RecordedVideo.webm" setzen, teilen wir dem Browser mit, dass beim Klicken auf die Schaltfläche eine Datei namens `"RecordedVideo.webm"` heruntergeladen werden soll, deren Inhalt das aufgezeichnete Video ist.

- Die Größe und der Typ der aufgezeichneten Medien werden im Logbereich unter den beiden Videos und der Download-Schaltfläche ausgegeben.
- Der `catch()`-Block für alle Promises gibt den Fehler durch Aufrufen unserer `log()`-Funktion im Logbereich aus.

### Behandeln der Stop-Taste

Das letzte Code-Fragment fügt einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf der Stop-Taste mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu:

```js
stopButton.addEventListener(
  "click",
  () => {
    stop(preview.srcObject);
  },
  false,
);
```

Dies ruft die zuvor behandelte [`stop()`](#beenden_des_eingabestreams)-Funktion auf.

### Ergebnis

Wenn alles zusammen mit dem Rest des HTML und dem oben nicht gezeigten CSS kombiniert wird, sieht es so aus und funktioniert so:

{{EmbedLiveSample('Example_of_recording_a_media_element', '600', '440', , , , 'camera;microphone')}}

Sie können dieses Beispiel auch im Playground mit der "Play"-Schaltfläche öffnen, die es Ihnen ermöglicht, den kombinierten Code zu betrachten, einschließlich der oben verborgenen Teile, da diese nicht entscheidend für die Erklärung sind, wie die APIs verwendet werden.

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Hauptseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
