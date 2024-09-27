---
title: Aufnahme eines Media-Elements
slug: Web/API/MediaStream_Recording_API/Recording_a_media_element
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{DefaultAPISidebar("MediaStream Recording")}}

Während der Artikel Verwenden der MediaStream-Aufzeichnungs-API die Verwendung der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle zur Erfassung eines von einem Hardwaregerät erzeugten [`MediaStream`](/de/docs/Web/API/MediaStream), wie es von [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, demonstriert, können Sie auch ein HTML-Media-Element (nämlich {{HTMLElement("audio")}} oder {{HTMLElement("video")}}) als Quelle des zu aufzeichnenden `MediaStream` verwenden. In diesem Artikel betrachten wir ein Beispiel, das genau dies tut.

## Beispiel zur Aufnahme eines Media-Elements

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

Beginnen wir mit den wichtigsten Teilen des HTML. Es gibt ein wenig mehr, aber das ist nur informativ und nicht Teil der Kernfunktion der Anwendung.

```html
<div class="left">
  <div id="startButton" class="button">Start Recording</div>
  <h2>Preview</h2>
  <video id="preview" width="160" height="120" autoplay muted></video>
</div>
```

Wir präsentieren unsere Hauptschnittstelle in zwei Spalten. Links befindet sich eine Starttaste und ein {{HTMLElement("video")}}-Element, das die Videovorschau anzeigt; dies ist das Video, das die Kamera des Benutzers sieht. Beachten Sie, dass das [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)-Attribut verwendet wird, sodass das Video sofort angezeigt wird, sobald der Stream von der Kamera beginnt. Das [`muted`](/de/docs/Web/HTML/Element/video#muted)-Attribut wird angegeben, um sicherzustellen, dass der Ton vom Mikrofon des Benutzers nicht über seine Lautsprecher ausgegeben wird, was eine unangenehme Rückkopplungsschleife verursachen würde.

```html
<div class="right">
  <div id="stopButton" class="button">Stop Recording</div>
  <h2>Recording</h2>
  <video id="recording" width="160" height="120" controls></video>
  <a id="downloadButton" class="button">Download</a>
</div>
```

Rechts sehen wir eine Stopptaste und das `<video>`-Element, das zur Wiedergabe des aufgezeichneten Videos verwendet wird. Beachten Sie, dass das Wiedergabefeld kein autoplay hat (die Wiedergabe startet also nicht sofort, wenn Medien ankommen) und [`controls`](/de/docs/Web/HTML/Element/video#controls) gesetzt ist, was es erlaubt, dem Benutzer Steuerungen zum Abspielen, Pausieren usw. anzuzeigen.

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

Nun schauen wir uns den JavaScript-Code an; hier passiert schließlich der Großteil der Aktion!

### Einrichten globaler Variablen

Wir beginnen damit, einige globale Variablen zu erstellen, die wir benötigen.

```js
let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");

let recordingTimeMS = 5000;
```

Die meisten davon sind Referenzen auf Elemente, mit denen wir arbeiten müssen. Die letzte, `recordingTimeMS`, ist auf 5000 Millisekunden (5 Sekunden) eingestellt; dies gibt die Länge der Videos an, die wir aufzeichnen werden.

### Hilfsfunktionen

Als Nächstes erstellen wir einige Hilfsfunktionen, die später verwendet werden.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

Die Funktion `log()` wird verwendet, um Textzeichenfolgen in ein {{HTMLElement("div")}} auszugeben, damit wir Informationen mit dem Benutzer teilen können. Nicht sehr hübsch, aber es erfüllt unseren Zweck.

```js
function wait(delayInMS) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}
```

Die Funktion `wait()` gibt ein neues {{jsxref("Promise")}} zurück, das nach Ablauf der angegebenen Anzahl von Millisekunden aufgelöst wird. Sie funktioniert, indem eine [Arrow-Funktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwendet wird, die [`setTimeout()`](/de/docs/Web/API/SetTimeout) aufruft und den Auflösungs-Handler des Promise als Timeout-Handler-Funktion angibt. Das ermöglicht es uns, bei der Arbeit mit Zeitüberschreitungen die Promise-Syntax zu verwenden, was sehr nützlich sein kann, wenn wir Promises verketteten, wie wir später sehen werden.

### Starten der Medienaufnahme

Die Funktion `startRecording()` übernimmt den Start des Aufnahmeprozesses:

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

`startRecording()` nimmt zwei Eingangswerte an: einen [`MediaStream`](/de/docs/Web/API/MediaStream), von dem aufgezeichnet werden soll, und die Länge in Millisekunden der Aufnahme, die gemacht werden soll. Wir nehmen niemals mehr als die angegebene Anzahl von Millisekunden an Medien auf, obwohl [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) automatisch die Aufnahme stoppt, wenn die Medien vorher zu Ende gehen.

- Zuerst erstellen wir den `MediaRecorder`, der die Aufnahme des Eingabestreams übernimmt.
- `data` ist ein Array, das zunächst leer ist und die [`Blob`](/de/docs/Web/API/Blob)s von Mediendaten enthält, die unserem [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignishandler zur Verfügung gestellt werden.
- Die Zuweisung `ondataavailable` richtet den Handler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis ein. Die `data`-Eigenschaft des empfangenen Ereignisses ist ein [`Blob`](/de/docs/Web/API/Blob), das die Mediendaten enthält. Der Ereignishandler schiebt das `Blob` in das `data`-Array.
- Wir starten den Aufnahmeprozess, indem wir [`recorder.start()`](/de/docs/Web/API/MediaRecorder/start) aufrufen und eine Nachricht an das Log ausgeben, die den aktualisierten Zustand des Recorders und die Anzahl der Sekunden angibt, für die aufgenommen wird.
- Wir erstellen ein neues {{jsxref("Promise")}}, das `stopped` genannt wird und aufgelöst wird, wenn der [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignishandler des `MediaRecorder` aufgerufen wird. Es wird abgelehnt, wenn der [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignishandler aufgerufen wird. Der Ablehnungshandler erhält als Eingabe den Namen des aufgetretenen Fehlers.
- Wir erstellen ein weiteres neues `Promise`, das `recorded` genannt wird, welches aufgelöst wird, wenn die angegebene Anzahl von Millisekunden verstrichen ist. Bei Auflösung stoppt es den `MediaRecorder`, falls dieser noch aufnimmt.
- Schließlich verwenden wir {{jsxref("Promise.all")}}, um ein neues `Promise` zu erstellen, das erfüllt wird, wenn beide `Promise`s (`stopped` und `recorded`) aufgelöst sind. Sobald das aufgelöst ist, wird das Array `data` von `startRecording()` an seinen Aufrufer zurückgegeben.

### Beenden des Eingabestreams

Die Funktion `stop()` beendet die Eingabemedien:

```js
function stop(stream) {
  stream.getTracks().forEach((track) => track.stop());
}
```

Dies geschieht, indem [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) aufgerufen wird und {{jsxref("Array.forEach", "forEach()")}} verwendet wird, um [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) für jeden Track im Stream aufzurufen.

### Abrufen eines Eingabestreams und Einrichten des Rekorders

Jetzt schauen wir uns das komplizierteste Stück Code in diesem Beispiel an: unseren Ereignishandler für Klicks auf die Starttaste:

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

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) wird aufgerufen, um einen neuen [`MediaStream`](/de/docs/Web/API/MediaStream) anzufordern, der sowohl Video- als auch Audiotracks enthält. Dies ist der Stream, den wir aufzeichnen werden.
- Wenn das Promise, das von `getUserMedia()` zurückgegeben wird, aufgelöst wird, wird die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des Vorschau-{{HTMLElement("video")}}-Elements so festgelegt, dass sie den Eingabestream darstellt, was dazu führt, dass das von der Kamera des Benutzers erfasste Video in der Vorschaukachel angezeigt wird. Da das `<video>`-Element stummgeschaltet ist, wird der Ton nicht abgespielt. Der Link der „Download“-Taste wird dann ebenfalls auf den Stream gesetzt. Dann arrangieren wir, dass `preview.captureStream()` `preview.mozCaptureStream()` aufruft, damit unser Code auf Firefox funktioniert, bei dem die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) vorangestellt ist. Dann wird ein neues {{jsxref("Promise")}} erstellt und zurückgegeben, das aufgelöst wird, wenn das Vorschauvideo zu spielen beginnt.
- Wenn das Vorschauvideo beginnt zu spielen, wissen wir, dass es Medien gibt, die aufgezeichnet werden können. Wir reagieren, indem wir die zuvor erstellte Funktion [`startRecording()`](#starten_der_medienaufnahme) aufrufen und den Vorschauvideostream (als die aufzuzeichnenden Quellmedien) und `recordingTimeMS` als die Anzahl der Millisekunden der aufzuzeichnenden Medien übergeben. Wie bereits erwähnt, gibt `startRecording()` ein {{jsxref("Promise")}} zurück, dessen Auflösungshandler aufgerufen wird (und als Eingabe ein Array von [`Blob`](/de/docs/Web/API/Blob)-Objekten enthält, die die Teile der aufgezeichneten Mediendaten enthalten), sobald die Aufnahme abgeschlossen ist.
- Der Auflösungs-Handler des Aufnahmeprozesses erhält als Eingabe ein Array von Mediendaten `Blob`s, die lokal als `recordedChunks` bekannt sind. Das Erste, was wir tun, ist, die Teile in einen einzelnen [`Blob`](/de/docs/Web/API/Blob) zu verschmelzen, dessen MIME-Typ `"video/webm"` ist, indem wir ausnutzen, dass der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor Arrays von Objekten in ein Objekt zu einem einzigen verschmelzen kann. Dann wird [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwendet, um eine URL zu erstellen, die auf das Blob verweist; dies wird dann der Wert des aufgezeichneten Videowiedergabeelements [`src`](/de/docs/Web/HTML/Element/video#src)-Attributs (sodass Sie das Video aus dem Blob abspielen können) sowie das Ziel des Download-Links der Schaltfläche.

  Dann wird das [`download`](/de/docs/Web/HTML/Element/a#download)-Attribut der Download-Schaltfläche gesetzt. Während das `download`-Attribut ein Boolean sein kann, können Sie es auch auf eine Zeichenfolge setzen, die als Name für die heruntergeladene Datei verwendet wird. Indem wir das `download`-Attribut des Download-Links auf „RecordedVideo.webm“ setzen, teilen wir dem Browser mit, dass ein Klick auf die Taste eine Datei namens „RecordedVideo.webm“ herunterladen soll, deren Inhalt das aufgezeichnete Video ist.

- Die Größe und der Typ der aufgezeichneten Medien werden im Log-Bereich unter den beiden Videos und dem Download-Button ausgegeben.
- Das `catch()` für alle `Promise`s gibt den Fehler im Log-Bereich aus, indem unsere `log()`-Funktion aufgerufen wird.

### Behandlung der Stopp-Taste

Der letzte Codeabschnitt fügt einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf der Stopp-Taste mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu:

```js
stopButton.addEventListener(
  "click",
  () => {
    stop(preview.srcObject);
  },
  false,
);
```

Dies ruft die zuvor beschriebene Funktion [`stop()`](#beenden_des_eingabestreams) auf.

### Ergebnis

Wenn alles zusammen mit dem Rest des HTML und dem oben nicht gezeigten CSS kombiniert wird, sieht es so aus und funktioniert wie folgt:

{{ EmbedLiveSample('Example_of_recording_a_media_element', 600, 440) }}

Sie können {{LiveSampleLink("Example_of_recording_a_media_element", "die vollständige Demo hier ansehen")}} und die Entwicklertools Ihres Browsers verwenden, um die Seite zu inspizieren und den gesamten Code zu betrachten, einschließlich der oben versteckten Teile, da sie nicht entscheidend für das Verständnis der Verwendung der APIs sind.

## Siehe auch

- [Hauptseite der Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
