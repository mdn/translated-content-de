---
title: Aufnahme eines Medien-Elements
slug: Web/API/MediaStream_Recording_API/Recording_a_media_element
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{DefaultAPISidebar("MediaStream Recording")}}

Während der Artikel zur Verwendung der MediaStream Recording API die Nutzung der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle zur Erfassung eines von einem Hardwaregerät erzeugten [`MediaStream`](/de/docs/Web/API/MediaStream) demonstriert, wie es durch [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bereitgestellt wird, können Sie auch ein HTML-Medien-Element (nämlich {{HTMLElement("audio")}} oder {{HTMLElement("video")}}) als Quelle des aufzuzeichnenden `MediaStream` verwenden. In diesem Artikel betrachten wir ein Beispiel, das genau dies tut.

## Beispiel für die Aufnahme eines Medien-Elements

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

Beginnen wir mit einem Blick auf die wesentlichen Teile des HTML. Es gibt ein wenig mehr, aber das ist eher informativ und nicht Teil der Kernfunktion der App.

```html
<div class="left">
  <div id="startButton" class="button">Start Recording</div>
  <h2>Preview</h2>
  <video id="preview" width="160" height="120" autoplay muted></video>
</div>
```

Wir präsentieren unsere Hauptschnittstelle in zwei Spalten. Auf der linken Seite befindet sich ein Startknopf und ein {{HTMLElement("video")}}-Element, das die Videovorschau anzeigt; dies ist das Video, das die Kamera des Benutzers sieht. Beachten Sie, dass das Attribut [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay) verwendet wird, damit das Video sofort angezeigt wird, sobald der Stream von der Kamera eintrifft, und dass das Attribut [`muted`](/de/docs/Web/HTML/Element/video#muted) angegeben ist, um sicherzustellen, dass der Ton des Mikrofons des Benutzers nicht auf die Lautsprecher ausgegeben wird, was eine unschöne Rückkopplungsschleife verursacht.

```html
<div class="right">
  <div id="stopButton" class="button">Stop Recording</div>
  <h2>Recording</h2>
  <video id="recording" width="160" height="120" controls></video>
  <a id="downloadButton" class="button">Download</a>
</div>
```

Auf der rechten Seite sehen wir einen Stoppknopf und das `<video>`-Element, das zur Wiedergabe des aufgezeichneten Videos verwendet wird. Beachten Sie, dass das Wiedergabefeld nicht auf Autoplay gesetzt ist (so dass die Wiedergabe nicht sofort beginnt, sobald Medien eintreffen), und dass es `controls` gesetzt hat, was es dem Benutzer ermöglicht, Steuerungen zu zeigen, um abzuspielen, zu pausieren usw.

Unter dem Wiedergabeelement befindet sich ein Button zum Herunterladen des aufgezeichneten Videos.

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

Jetzt werfen wir einen Blick auf den JavaScript-Code; hier passiert schließlich der Großteil der Aktion!

### Einrichten globaler Variablen

Wir beginnen mit der Einrichtung einiger globaler Variablen, die wir benötigen werden.

```js
let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");

let recordingTimeMS = 5000;
```

Die meisten davon sind Referenzen auf Elemente, mit denen wir arbeiten müssen. Die letzte Variable, `recordingTimeMS`, ist auf 5000 Millisekunden (5 Sekunden) gesetzt; dies gibt die Länge der Videos an, die wir aufzeichnen werden.

### Hilfsfunktionen

Als nächstes erstellen wir einige Hilfsfunktionen, die später verwendet werden.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

Die Funktion `log()` wird verwendet, um Textzeichenfolgen an ein {{HTMLElement("div")}} auszugeben, damit wir Informationen mit dem Benutzer teilen können. Nicht sehr hübsch, aber für unsere Zwecke erfüllt sie ihren Zweck.

```js
function wait(delayInMS) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}
```

Die Funktion `wait()` gibt ein neues {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die angegebene Anzahl von Millisekunden verstrichen ist. Sie funktioniert, indem eine [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwendet wird, die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufruft und dabei den Auflösungs-Handler des Versprechens als Timeout-Handler-Funktion angibt. Dadurch können wir Promises-Syntax bei der Verwendung von Timeouts verwenden, was sehr praktisch sein kann, wenn wir Promises verketten, wie wir später sehen werden.

### Starten der Medienaufnahme

Die Funktion `startRecording()` kümmert sich um den Start des Aufnahmeprozesses:

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

`startRecording()` nimmt zwei Eingabeparameter: einen [`MediaStream`](/de/docs/Web/API/MediaStream), von dem aufgezeichnet werden soll, und die Länge in Millisekunden der Aufnahme, die gemacht werden soll. Wir zeichnen niemals mehr als die angegebene Anzahl von Millisekunden Medien auf, obwohl die Aufnahme auch automatisch gestoppt wird, wenn das Medium vor Ablauf dieser Zeit stoppt.

- Wir erstellen zuerst den `MediaRecorder`, der die Aufnahme des Eingangs-`stream` handhaben wird.
- `data` ist ein Array, das anfänglich leer ist und die [`Blob`](/de/docs/Web/API/Blob)s der Mediendaten enthält, die von unserem [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis-Handler bereitgestellt werden.
- Die Zuweisung von `ondataavailable` richtet den Handler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis ein. Das empfangene Ereignis verfügt über eine `data`-Eigenschaft, die ein [`Blob`](/de/docs/Web/API/Blob) enthält, der die Mediendaten darstellt. Der Ereignishandler fügt den `Blob` dem `data` Array hinzu.
- Wir starten den Aufnahmeprozess, indem wir [`recorder.start()`](/de/docs/Web/API/MediaRecorder/start) aufrufen und eine Nachricht ins Log ausgeben, die den aktualisierten Zustand des Recorders und die Anzahl der Sekunden, die er aufzeichnen wird, anzeigt.
- Wir erstellen ein neues {{jsxref("Promise")}}, namens `stopped`, das aufgelöst wird, wenn der [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignis-Handler des `MediaRecorder` aufgerufen wird, und abgelehnt wird, wenn dessen [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignis-Handler aufgerufen wird. Der Ablehnungs-Handler erhält den Namen des aufgetretenen Fehlers als Eingabe.
- Wir erstellen ein weiteres neues `Promise`, namens `recorded`, das aufgelöst wird, wenn die angegebene Anzahl von Millisekunden verstrichen ist. Bei der Auflösung wird der `MediaRecorder` gestoppt, falls er aufzeichnet.
- Schließlich verwenden wir {{jsxref("Promise.all")}}, um ein neues `Promise` zu erstellen, das erfüllt wird, wenn beide `Promise`s (`stopped` und `recorded`) aufgelöst wurden. Sobald dies aufgelöst ist, wird das Array `data` von `startRecording()` an seinen Aufrufer zurückgegeben.

### Anhalten des Eingangsstreams

Die Funktion `stop()` hält die Eingangsmedien an:

```js
function stop(stream) {
  stream.getTracks().forEach((track) => track.stop());
}
```

Dies funktioniert, indem [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) aufgerufen wird und {{jsxref("Array.forEach", "forEach()")}} verwendet wird, um [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) für jeden Track im Stream aufzurufen.

### Abrufen eines Eingangsstreams und Einrichten des Recorders

Schauen wir uns nun das komplizierteste Stück Code in diesem Beispiel an: unseren Ereignishandler für Klicks auf den Startknopf:

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

Wenn ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis eintritt, passiert Folgendes:

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) wird aufgerufen, um einen neuen [`MediaStream`](/de/docs/Web/API/MediaStream) anzufordern, der sowohl Video- als auch Audiotracks enthält. Dies ist der Stream, den wir aufnehmen werden.
- Wenn das von `getUserMedia()` zurückgegebene Promise aufgelöst wird, wird die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des Vorschau-{{HTMLElement("video")}}-Elements auf den Eingangsstream gesetzt, was dazu führt, dass das von der Kamera des Nutzers erfasste Video im Vorschaukasten angezeigt wird. Da das `<video>`-Element stummgeschaltet ist, wird der Ton nicht abgespielt. Der Link des „Download“-Buttons wird dann auch auf den Stream verwiesen. Dann arrangieren wir, dass `preview.captureStream()` `preview.mozCaptureStream()` aufruft, damit unser Code auf Firefox funktioniert, wo die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) ein Präfix hat. Dann wird ein neues {{jsxref("Promise")}} erstellt und zurückgegeben, das aufgelöst wird, wenn das Vorschauvideo zu spielen beginnt.
- Wenn das Vorschauvideo zu spielen beginnt, wissen wir, dass es Medien gibt, die aufgenommen werden können, also reagieren wir, indem wir die zuvor erstellte Funktion [`startRecording()`](#starten_der_medienaufnahme) aufrufen, die das Vorschauviedostream als Ausgangsmedien zur Aufnahme und `recordingTimeMS` als Anzahl von Millisekunden der aufzuzeichnenden Medien übergibt. Wie bereits erwähnt, gibt `startRecording()` ein {{jsxref("Promise")}} zurück, dessen Auflösungshandler aufgerufen wird (der als Eingabe ein Array von [`Blob`](/de/docs/Web/API/Blob)-Objekten erhält, das die Stücke der aufgezeichneten Mediendaten enthält), sobald die Aufnahme abgeschlossen ist.
- Der Auflösungsbehandlungsprozess der Aufnahme erhält als Eingabe ein Array von Medien-Daten-`Blob`s, lokal bekannt als `recordedChunks`. Das erste, was wir tun, ist die Stücke zu einem einzigen [`Blob`](/de/docs/Web/API/Blob) mit dem MIME-Typ `"video/webm"` zusammenzuführen, indem wir den Fakt nutzen, dass der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor Arrays von Objekten zu einem Objekt zusammenführt. Dann wird [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwendet, um eine URL zu erstellen, die auf den Blob verweist; dies wird dann zum Wert des `src`-Attributs des aufgezeichneten Videowiedergabeelements gemacht (damit Sie das Video aus dem Blob abspielen können), sowie zum Ziel des Downloadlink des Buttons.

  Dann wird das [`download`](/de/docs/Web/HTML/Element/a#download)-Attribut des Download-Buttons gesetzt. Während das `download`-Attribut ein Boolean sein kann, können Sie es auch auf einen String setzen, der als Name für die herunterzuladende Datei verwendet werden soll. Indem wir das `download`-Attribut des Downloadlinks auf "RecordedVideo.webm" setzen, teilen wir dem Browser mit, dass das Klicken auf den Button eine Datei mit dem Namen `"RecordedVideo.webm"` heruntergeladen werden soll, deren Inhalt das aufgezeichnete Video ist.

- Die Größe und der Typ des aufgezeichneten Mediums werden im Logbereich unterhalb der beiden Videos und des Download-Buttons ausgegeben.
- Die `catch()`-Methode für alle `Promise`s gibt den Fehler in den Logbereich aus, indem unsere `log()`-Funktion aufgerufen wird.

### Umgang mit dem Stoppknopf

Das letzte Stück Code fügt einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf dem Stoppknopf hinzu, unter Verwendung von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js
stopButton.addEventListener(
  "click",
  () => {
    stop(preview.srcObject);
  },
  false,
);
```

Dies ruft die zuvor behandelte Funktion [`stop()`](#anhalten_des_eingangsstreams) auf.

### Ergebnis

Zusammen mit dem restlichen HTML und dem CSS, das oben nicht gezeigt wurde, sieht es so aus und funktioniert folgendermaßen:

{{ EmbedLiveSample('Example_of_recording_a_media_element', 600, 440) }}

Sie können {{LiveSampleLink("Example_of_recording_a_media_element", "das vollständige Demo hier ansehen")}} und die Entwickler-Tools Ihres Browsers verwenden, um die Seite zu inspizieren und sich den gesamten Code anzusehen, einschließlich der Teile, die oben verborgen sind, weil sie für die Erklärung, wie die APIs verwendet werden, nicht entscheidend sind.

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Startseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
