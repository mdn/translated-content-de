---
title: Aufzeichnen eines Medienelements
slug: Web/API/MediaStream_Recording_API/Recording_a_media_element
l10n:
  sourceCommit: ed19ad8c789e0d621841033aecd535c5474d1ea5
---

{{DefaultAPISidebar("MediaStream Recording")}}

Während der Artikel "Using the MediaStream Recording API" die Verwendung der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle zum Erfassen eines von einem Hardwaregerät erzeugten [`MediaStream`](/de/docs/Web/API/MediaStream) demonstriert, wie er von [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bereitgestellt wird, können Sie auch ein HTML-Medienelement (nämlich {{HTMLElement("audio")}} oder {{HTMLElement("video")}}) als Quelle des aufzuzeichnenden `MediaStream` verwenden. In diesem Artikel sehen wir uns ein Beispiel an, das genau das tut.

## Beispiel zur Aufzeichnung eines Medienelements

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

Beginnen wir mit den wesentlichen Teilen des HTML. Es gibt noch etwas mehr, aber das dient nur informativen Zwecken und ist nicht Teil der Kernfunktionalität der Anwendung.

```html
<div class="left">
  <div id="startButton" class="button">Start Recording</div>
  <h2>Preview</h2>
  <video id="preview" width="160" height="120" autoplay muted></video>
</div>
```

Unsere Hauptschnittstelle präsentieren wir in zwei Spalten. Auf der linken Seite befindet sich eine Starttaste und ein {{HTMLElement("video")}}-Element, das die Video-Vorschau anzeigt; dies ist das Video, das die Kamera des Benutzers sieht. Beachten Sie, dass das Attribut [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay) verwendet wird, sodass das Video sofort angezeigt wird, sobald der Stream von der Kamera eintrifft, und dass das Attribut [`muted`](/de/docs/Web/HTML/Element/video#muted) angegeben ist, um sicherzustellen, dass der Ton des Mikrofons des Benutzers nicht auf deren Lautsprecher ausgegeben wird, was zu einer unschönen Rückkopplungsschleife führen könnte.

```html
<div class="right">
  <div id="stopButton" class="button">Stop Recording</div>
  <h2>Recording</h2>
  <video id="recording" width="160" height="120" controls></video>
  <a id="downloadButton" class="button">Download</a>
</div>
```

Rechts sehen wir eine Stopptaste und das `<video>`-Element, das zur Wiedergabe des aufgezeichneten Videos verwendet wird. Beachten Sie, dass das Wiedergabefeld kein Autoplay eingestellt hat (damit die Wiedergabe nicht sofort gestartet wird, sobald Medien eintreffen) und dass es [`controls`](/de/docs/Web/HTML/Element/video#controls) gesetzt hat, was anzeigt, dass es die Benutzersteuerungen zum Abspielen, Anhalten und dergleichen anzeigt.

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

Nun sehen wir uns den JavaScript-Code an; hier geschieht schließlich der Großteil der Aktionen!

### Einrichtung globaler Variablen

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

Die meisten davon sind Referenzen zu Elementen, mit denen wir arbeiten müssen. Die letzte, `recordingTimeMS`, ist auf 5000 Millisekunden (5 Sekunden) eingestellt; das gibt die Länge der Videos an, die wir aufzeichnen werden.

### Hilfsfunktionen

Als Nächstes erstellen wir einige Hilfsfunktionen, die später verwendet werden.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

Die `log()`-Funktion wird verwendet, um Textzeichenfolgen in ein {{HTMLElement("div")}} auszugeben, damit wir Informationen mit dem Benutzer teilen können. Nicht sehr hübsch, aber für unsere Zwecke ausreichend.

```js
function wait(delayInMS) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}
```

Die `wait()`-Funktion gibt ein neues {{jsxref("Promise")}} zurück, das aufgelöst wird, nachdem die angegebene Anzahl von Millisekunden vergangen ist. Sie funktioniert, indem sie eine [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwendet, die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufruft und den Auflösungs-Handler des Promise als die Timeout-Handler-Funktion angibt. Das lässt uns die Promise-Syntax bei der Verwendung von Timeouts nutzen, was sehr nützlich sein kann, wenn Promises verkettet werden sollen, wie wir später sehen werden.

### Start der Medienaufzeichnung

Die Funktion `startRecording()` übernimmt den Start des Aufnahmevorgangs:

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

`startRecording()` nimmt zwei Eingabeparameter: ein [`MediaStream`](/de/docs/Web/API/MediaStream), von dem aus aufgenommen werden soll, und die Länge der Aufnahme in Millisekunden. Wir zeichnen immer nur die angegebene Anzahl von Millisekunden auf, obwohl [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) das Aufnehmen automatisch stoppt, wenn die Medien vor Ablauf der Zeit stoppen.

- Wir erstellen zuerst den `MediaRecorder`, der die Aufnahme des Eingabestreams verwaltet.
- `data` ist ein Array, das zu Beginn leer ist und die [`Blob`](/de/docs/Web/API/Blob)s der Mediendaten enthält, die unserem [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) Event-Handler zur Verfügung gestellt werden.
- Die `ondataavailable`-Zuweisung richtet den Handler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis ein. Die empfangenen `data`-Eigenschaft des Ereignisses ist ein [`Blob`](/de/docs/Web/API/Blob), das die Mediendaten enthält. Der Ereignishandler fügt das `Blob` dem `data`-Array hinzu.
- Wir starten den Aufnahmeprozess, indem wir [`recorder.start()`](/de/docs/Web/API/MediaRecorder/start) aufrufen, und geben eine Nachricht im Protokoll aus, die den aktualisierten Zustand des Recorders und die Anzahl der Sekunden anzeigt, die er aufzeichnen wird.
- Wir erstellen ein neues {{jsxref("Promise")}} mit dem Namen `stopped`, das aufgelöst wird, wenn der [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event)-Event-Handler des `MediaRecorder` aufgerufen wird, und abgelehnt wird, wenn sein [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Event-Handler aufgerufen wird. Der Ablehnungshandler erhält als Eingabe den Namen des aufgetretenen Fehlers.
- Wir erstellen ein weiteres neues `Promise` mit dem Namen `recorded`, das aufgelöst wird, wenn die angegebene Anzahl von Millisekunden vergangen ist. Bei der Auflösung stoppt es den `MediaRecorder`, falls dieser noch aufnimmt.
- Schließlich verwenden wir {{jsxref("Promise.all")}}, um ein neues `Promise` zu erstellen, das erfüllt wird, wenn beide `Promise`s (`stopped` und `recorded`) aufgelöst wurden. Sobald dies aufgelöst ist, wird das Array `data` von `startRecording()` an seinen Aufrufer zurückgegeben.

### Stoppen des Eingabestreams

Die Funktion `stop()` stoppt die Eingabemedien:

```js
function stop(stream) {
  stream.getTracks().forEach((track) => track.stop());
}
```

Dies geschieht, indem [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) aufgerufen wird, und {{jsxref("Array.forEach", "forEach()")}} verwendet wird, um [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) auf jedem Track im Stream aufzurufen.

### Abrufen eines Eingabestreams und Einrichten des Recorders

Sehen wir uns nun das komplizierteste Stück Code in diesem Beispiel an: unseren Ereignishandler für Klicks auf die Starttaste:

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
        return new Promise((resolve) => (preview.onplaying = resolve));
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

Wenn ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auftritt, passiert Folgendes:

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) wird aufgerufen, um einen neuen [`MediaStream`](/de/docs/Web/API/MediaStream) anzufordern, der sowohl Video- als auch Audiotracks enthält. Das ist der Stream, den wir aufzeichnen werden.
- Wenn das von `getUserMedia()` zurückgegebene Promise aufgelöst wird, wird die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des Vorschau-{{HTMLElement("video")}}-Elements auf den Eingabestream gesetzt, wodurch das von der Kamera des Benutzers erfasste Video im Vorschaufeld angezeigt wird. Da das `<video>`-Element stummgeschaltet ist, wird der Ton nicht abgespielt. Der Link der "Herunterladen"-Schaltfläche wird dann ebenfalls auf den Stream gesetzt. Dann arrangieren wir, dass `preview.captureStream()` `preview.mozCaptureStream()` aufruft, damit unser Code in Firefox funktioniert, auf dem die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) ein Präfix hat. Anschließend wird ein neues {{jsxref("Promise")}} erstellt und zurückgegeben, das aufgelöst wird, wenn das Vorschauvideo zu spielen beginnt.
- Wenn das Vorschauvideo zu spielen beginnt, wissen wir, dass es Medien gibt, die aufgezeichnet werden können. Daher antworten wir, indem wir die zuvor erstellte Funktion [`startRecording()`](#start_der_medienaufzeichnung) aufrufen und den Vorschaustream (als Quellmedien, die aufgenommen werden sollen) und `recordingTimeMS` als die Anzahl der Millisekunden, die aufgenommen werden sollen, übergeben. Wie bereits erwähnt, gibt `startRecording()` ein {{jsxref("Promise")}} zurück, dessen Auflösungshandler aufgerufen wird (und als Eingabe ein Array von [`Blob`](/de/docs/Web/API/Blob)-Objekten mit den aufgezeichneten Mediendatenstücken erhält), wenn die Aufnahme abgeschlossen ist.
- Der Auflösungshandler des Aufnahmeprozesses erhält als Eingabe ein Array von Mediendaten-`Blob`s, lokal bekannt als `recordedChunks`. Das Erste, was wir tun, ist, die Stücke zu einem einzigen [`Blob`](/de/docs/Web/API/Blob) zusammenzuführen, dessen MIME-Typ `"video/webm"` ist, indem wir die Tatsache nutzen, dass der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor Arrays von Objekten zu einem Objekt verkettet. Dann wird [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwendet, um eine URL zu erstellen, die auf das Blob verweist; diese wird dann zum Wert des `src`-Attributs (damit Sie das Video aus dem Blob abspielen können) des Wiedergabefeldes des aufgezeichneten Videos sowie zum Ziel des Links der Download-Schaltfläche gemacht.

  Dann wird das [`download`](/de/docs/Web/HTML/Element/a#download)-Attribut der Download-Schaltfläche gesetzt. Während das `download`-Attribut ein Boolean sein kann, können Sie es auch auf eine Zeichenfolge setzen, die als Name für die heruntergeladene Datei verwendet werden soll. Durch das Setzen des `download`-Attributs des Download-Links auf "RecordedVideo.webm" teilen wir dem Browser mit, dass beim Klicken der Schaltfläche eine Datei namens "RecordedVideo.webm" heruntergeladen werden soll, deren Inhalt das aufgezeichnete Video ist.

- Die Größe und der Typ des aufgezeichneten Mediums werden an den Protokollbereich unterhalb der beiden Videos und der Download-Schaltfläche ausgegeben.
- Das `catch()` für alle `Promise`s gibt den Fehler durch einen Aufruf unserer `log()`-Funktion an den Protokollbereich aus.

### Handhabung der Stopptaste

Der letzte Codeabschnitt fügt einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf der Stopptaste hinzu, indem [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwendet wird:

```js
stopButton.addEventListener(
  "click",
  () => {
    stop(preview.srcObject);
  },
  false,
);
```

Dies ruft die zuvor behandelte [`stop()`](#stoppen_des_eingabestreams)-Funktion auf.

### Ergebnis

Wenn alles zusammengefügt wird, einschließlich des restlichen HTML und des oben nicht gezeigten CSS, sieht es so aus und funktioniert wie folgt:

{{EmbedLiveSample('Example_of_recording_a_media_element', '600', '440', , , , 'camera;microphone')}}

Sie können {{LiveSampleLink("Example_of_recording_a_media_element", "die vollständige Demo hier ansehen")}} und die Entwicklertools Ihres Browsers verwenden, um die Seite zu inspizieren und den gesamten Code anzusehen, einschließlich der Teile, die oben ausgeblendet sind, da sie nicht kritisch für die Erklärung der Verwendung der APIs sind.

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Landing Page
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
