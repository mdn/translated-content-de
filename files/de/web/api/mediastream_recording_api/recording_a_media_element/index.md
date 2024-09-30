---
title: Aufnahme eines Media Elements
slug: Web/API/MediaStream_Recording_API/Recording_a_media_element
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{DefaultAPISidebar("MediaStream Recording")}}

Während der Artikel zur Verwendung der MediaStream Recording API zeigt, wie Sie die [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle verwenden, um einen von einem Hardwaregerät erzeugten [`MediaStream`](/de/docs/Web/API/MediaStream) aufzuzeichnen, wie er von [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, können Sie auch ein HTML-Medienelement (nämlich {{HTMLElement("audio")}} oder {{HTMLElement("video")}}) als Quelle des zu aufzeichnenden `MediaStream` verwenden. In diesem Artikel sehen wir uns ein Beispiel an, das genau das tut.

## Beispiel für die Aufnahme eines Media Elements

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

Beginnen wir mit den wichtigsten Teilen des HTML. Es gibt noch etwas mehr, aber das ist nur informativ und nicht Teil der Kernfunktion der App.

```html
<div class="left">
  <div id="startButton" class="button">Start Recording</div>
  <h2>Preview</h2>
  <video id="preview" width="160" height="120" autoplay muted></video>
</div>
```

Wir präsentieren unsere Hauptschnittstelle in zwei Spalten. Auf der linken Seite befindet sich ein Startknopf und ein {{HTMLElement("video")}}-Element, das die Video-Vorschau anzeigt; dies ist das Video, das die Kamera des Benutzers sieht. Beachten Sie, dass das [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)-Attribut verwendet wird, sodass das Streamen von der Kamera sofort angezeigt wird, wenn es beginnt, und dass das [`muted`](/de/docs/Web/HTML/Element/video#muted)-Attribut spezifiziert ist, um sicherzustellen, dass der Ton aus dem Mikrofon des Benutzers nicht über die Lautsprecher ausgegeben wird, wodurch eine unschöne Rückkopplungsschleife entsteht.

```html
<div class="right">
  <div id="stopButton" class="button">Stop Recording</div>
  <h2>Recording</h2>
  <video id="recording" width="160" height="120" controls></video>
  <a id="downloadButton" class="button">Download</a>
</div>
```

Auf der rechten Seite sehen wir einen Stoppknopf und das `<video>`-Element, das für die Wiedergabe des aufgenommenen Videos verwendet wird. Beachten Sie, dass das Wiedergabefeld nicht auf Autoplay eingestellt ist (damit die Wiedergabe nicht sofort startet, sobald Medien eintreffen) und dass es auf [`controls`](/de/docs/Web/HTML/Element/video#controls) eingestellt ist, wodurch es dem Benutzer Steuerungen zum Abspielen, Pausieren usw. anzeigt.

Unter dem Wiedergabeelement befindet sich ein Knopf zum Herunterladen des aufgenommenen Videos.

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

Sehen wir uns jetzt den JavaScript-Code an; hier geschieht schließlich der Großteil der Aktion!

### Einrichten globaler Variablen

Wir beginnen mit der Einrichtung einiger globaler Variablen, die wir benötigen.

```js
let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");

let recordingTimeMS = 5000;
```

Die meisten davon sind Verweise auf Elemente, mit denen wir arbeiten müssen. Die letzte, `recordingTimeMS`, ist auf 5000 Millisekunden (5 Sekunden) eingestellt; dies gibt die Länge der Videos an, die wir aufnehmen werden.

### Hilfsfunktionen

Als nächstes erstellen wir einige Hilfsfunktionen, die später verwendet werden.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

Die Funktion `log()` wird verwendet, um Textzeichenfolgen an ein {{HTMLElement("div")}} auszugeben, sodass wir Informationen mit dem Benutzer teilen können. Nicht sehr hübsch, aber für unsere Zwecke ausreichend.

```js
function wait(delayInMS) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}
```

Die `wait()`-Funktion gibt ein neues {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die angegebene Anzahl von Millisekunden verstrichen ist. Sie funktioniert, indem sie eine [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwendet, die [`setTimeout()`](/de/docs/Web/API/SetTimeout) aufruft und den Auflösungs-Handler des Versprechens als Timeout-Handler-Funktion angibt. Das ermöglicht es uns, die Versprechen-Syntax bei der Verwendung von Timeouts zu verwenden, was sehr nützlich sein kann, wenn man Versprechen verkettet, wie wir später sehen werden.

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

`startRecording()` nimmt zwei Eingabeparameter: einen [`MediaStream`](/de/docs/Web/API/MediaStream), von dem aufgenommen werden soll, und die Länge der Aufnahme in Millisekunden. Wir nehmen nie mehr als die angegebene Anzahl Millisekunden Medien auf, obwohl `MediaRecorder` automatisch die Aufnahme stoppt, wenn die Medien vor diesem Zeitpunkt enden.

- Zuerst erstellen wir den `MediaRecorder`, der die Aufnahme des Eingabe-`stream` übernehmen wird.
- `data` ist ein Array, das zunächst leer ist und die [`Blob`](/de/docs/Web/API/Blob)s der Mediendaten enthält, die an unseren [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Event-Handler übergeben werden.
- Die `ondataavailable`-Zuweisung richtet den Handler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis ein. Die empfangene Event-`data`-Eigenschaft ist ein [`Blob`](/de/docs/Web/API/Blob), das die Mediendaten enthält. Der Ereignis-Handler schiebt den `Blob` in das `data`-Array.
- Wir beginnen den Aufnahmevorgang, indem wir [`recorder.start()`](/de/docs/Web/API/MediaRecorder/start) aufrufen und eine Nachricht an das Log ausgeben mit dem aktualisierten Status des Recorders und der Anzahl der Sekunden, die er aufnimmt.
- Wir erstellen ein neues {{jsxref("Promise")}}, namens `stopped`, das aufgelöst wird, wenn der [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event)-Event-Handler des `MediaRecorder` aufgerufen wird, und abgelehnt wird, wenn dessen [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Event-Handler aufgerufen wird. Der Ablehnungs-Handler erhält als Eingabe den Namen des aufgetretenen Fehlers.
- Wir erstellen ein weiteres neues `Promise`, genannt `recorded`, das aufgelöst wird, wenn die angegebene Anzahl von Millisekunden verstrichen ist. Bei Auflösung stoppt es den `MediaRecorder`, falls er noch aufnimmt.
- Schließlich verwenden wir {{jsxref("Promise.all")}}, um ein neues `Promise` zu erstellen, das erfüllt wird, wenn beide `Promise`s (`stopped` und `recorded`) aufgelöst wurden. Sobald das erfolgt, wird das Array `data` von `startRecording()` an seinen Aufrufer zurückgegeben.

### Beenden des Eingabestreams

Die Funktion `stop()` stoppt die Eingabemedien:

```js
function stop(stream) {
  stream.getTracks().forEach((track) => track.stop());
}
```

Dies funktioniert, indem [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) aufgerufen wird und {{jsxref("Array.forEach", "forEach()")}} verwendet wird, um [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) auf jedem Track im Stream aufzurufen.

### Abrufen eines Eingabestreams und Einrichten des Recorders

Sehen wir uns jetzt das komplizierteste Stück Code in diesem Beispiel an: unseren Event-Handler für Klicks auf den Startknopf:

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

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) wird aufgerufen, um einen neuen [`MediaStream`](/de/docs/Web/API/MediaStream) anzufordern, der sowohl Video- als auch Audiotracks enthält. Dies ist der Stream, den wir aufzeichnen werden.
- Wenn das von `getUserMedia()` zurückgegebene Promise aufgelöst wird, wird die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des Vorschau-{{HTMLElement("video")}}-Elements so eingestellt, dass sie der Eingabestream ist, wodurch das von der Kamera des Benutzers aufgenommene Video im Vorschaufenster angezeigt wird. Da das `<video>`-Element stummgeschaltet ist, wird der Ton nicht abgespielt. Der Link des „Download“-Buttons wird dann auch auf den Stream gesetzt. Danach ordnen wir `preview.captureStream()` an, `preview.mozCaptureStream()` aufzurufen, damit unser Code in Firefox funktioniert, wo die [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream)-Methode ein Präfix hat. Dann wird ein neues {{jsxref("Promise")}} erstellt und zurückgegeben, das aufgelöst wird, wenn das Vorschauvideo zu spielen beginnt.
- Wenn das Vorschaubild-Video zu spielen beginnt, wissen wir, dass es Medien aufzunehmen gibt, daher reagieren wir, indem wir die zuvor erstellte Funktion [`startRecording()`](#starten_der_medienaufnahme) aufrufen und den Vorschau-Video-Stream (als die aufzuzeichnenden Quellmedien) und `recordingTimeMS` als die Anzahl der Millisekunden, die aufgenommen werden sollen, übergeben. Wie bereits erwähnt, gibt `startRecording()` ein {{jsxref("Promise")}} zurück, dessen Auflösungs-Handler (der als Eingabe ein Array von [`Blob`](/de/docs/Web/API/Blob)-Objekten erhält, die die Teile der aufgezeichneten Mediendaten enthalten) aufgerufen wird, sobald die Aufnahme abgeschlossen ist.
- Der Auflösungs-Handler des Aufnahmeprozesses erhält als Eingabe ein Array von `Blob`s der Mediendaten, bekannt unter `recordedChunks`. Als erstes fügen wir die Stücke zu einem einzelnen [`Blob`](/de/docs/Web/API/Blob) mit dem MIME-Typ `"video/webm"` zusammen, indem wir die Tatsache nutzen, dass der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor Arrays von Objekten zu einem Objekt zusammenfügt. Dann wird [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwendet, um eine URL zu erstellen, die auf den Blob verweist; diese wird dann als Wert des Attributs [`src`](/de/docs/Web/HTML/Element/video#src) des Wiedergabeelements des aufgezeichneten Videos festgelegt (so dass Sie das Video vom Blob aus abspielen können) sowie als Ziel des Download-Button-Links.

  Dann wird das [`download`](/de/docs/Web/HTML/Element/a#download)-Attribut des Download-Buttons gesetzt. Während das `download`-Attribut ein Boolean sein kann, können Sie es auch auf eine Zeichenfolge setzen, die als Name für die heruntergeladene Datei verwendet werden soll. Indem wir das `download`-Attribut des Download-Links auf "RecordedVideo.webm" setzen, teilen wir dem Browser mit, dass das Anklicken des Buttons eine Datei mit dem Namen `"RecordedVideo.webm"` herunterladen soll, deren Inhalt das aufgezeichnete Video ist.

- Die Größe und der Typ des aufgezeichneten Mediums werden im Logbereich unter den beiden Videos und dem Download-Button ausgegeben.
- Der `catch()`-Block für alle `Promise`s gibt den Fehler im Logbereich aus, indem er unsere `log()`-Funktion aufruft.

### Bedienung des Stop-Buttons

Der letzte Teil des Codes fügt einen Handler für die [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse auf dem Stop-Button mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu:

```js
stopButton.addEventListener(
  "click",
  () => {
    stop(preview.srcObject);
  },
  false,
);
```

Dies ruft die zuvor behandelte Funktion [`stop()`](#beenden_des_eingabestreams) auf.

### Ergebnis

Wenn alles zusammen mit dem restlichen HTML und dem oben nicht gezeigten CSS zusammengefügt wird, sieht es so aus und funktioniert auf diese Weise:

{{ EmbedLiveSample('Example_of_recording_a_media_element', 600, 440) }}

Sie können sich {{LiveSampleLink("Example_of_recording_a_media_element", "die vollständige Demo hier ansehen")}}, und die Entwicklertools Ihres Browsers verwenden, um die Seite zu inspizieren und sich den gesamten Code anzusehen, einschließlich der Teile, die oben versteckt wurden, weil sie nicht entscheidend für die Erklärung sind, wie die APIs verwendet werden.

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Landing-Page
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
