---
title: Aufzeichnen eines Media-Elements
slug: Web/API/MediaStream_Recording_API/Recording_a_media_element
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{DefaultAPISidebar("MediaStream Recording")}}

Während der Artikel zur Verwendung der MediaStream Recording API die Verwendung der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle zur Erfassung eines durch ein Hardwaregerät erzeugten [`MediaStream`](/de/docs/Web/API/MediaStream) demonstriert, wie er von [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, können Sie auch ein HTML-Media-Element (nämlich {{HTMLElement("audio")}} oder {{HTMLElement("video")}}) als Quelle des aufzuzeichnenden `MediaStream` verwenden. In diesem Artikel betrachten wir ein Beispiel, das genau das tut.

## Beispiel für die Aufzeichnung eines Media-Elements

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

Lassen Sie uns mit den wichtigsten Teilen des HTML beginnen. Es gibt noch ein wenig mehr als das, aber das ist nur informativ und nicht Teil des Hauptbetriebs der App.

```html
<div class="left">
  <div id="startButton" class="button">Start Recording</div>
  <h2>Preview</h2>
  <video id="preview" width="160" height="120" autoplay muted></video>
</div>
```

Wir präsentieren unsere Hauptschnittstelle in zwei Spalten. Links befindet sich ein Startknopf und ein {{HTMLElement("video")}}-Element, das die Videovorschau anzeigt; dies ist das Video, das die Kamera des Benutzers sieht. Beachten Sie, dass das [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)-Attribut verwendet wird, sodass das Video sofort angezeigt wird, sobald der Stream von der Kamera eintrifft, und das [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted)-Attribut angegeben ist, um sicherzustellen, dass der Ton des Mikrofons des Benutzers nicht über die Lautsprecher ausgegeben wird, was zu einer unschönen Rückkopplungsschleife führen würde.

```html
<div class="right">
  <div id="stopButton" class="button">Stop Recording</div>
  <h2>Recording</h2>
  <video id="recording" width="160" height="120" controls></video>
  <a id="downloadButton" class="button">Download</a>
</div>
```

Rechts sehen wir einen Stop-Knopf und das `<video>`-Element, das zur Wiedergabe des aufgezeichneten Videos verwendet wird. Beachten Sie, dass das Wiedergabefeld kein Autoplay eingestellt hat (damit die Wiedergabe nicht sofort beginnt, sobald das Medium eintrifft) und es hat [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls) eingestellt, was bedeutet, dass dem Benutzer Steuerelemente zur Verfügung gestellt werden, um Play, Pause und so weiter zu bedienen.

Unter dem Wiedergabeelement befindet sich ein Knopf zum Herunterladen des aufgezeichneten Videos.

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

Nun schauen wir uns den JavaScript-Code an; hier passiert schließlich das meiste!

### Festlegen globaler Variablen

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

Die meisten davon sind Referenzen zu Elementen, mit denen wir arbeiten müssen. Die letzte, `recordingTimeMS`, ist auf 5000 Millisekunden (5 Sekunden) gesetzt; dies gibt die Länge der Videos an, die wir aufzeichnen werden.

### Hilfsfunktionen

Als Nächstes erstellen wir einige Hilfsfunktionen, die später verwendet werden.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

Die `log()`-Funktion wird verwendet, um Textzeichenfolgen an ein {{HTMLElement("div")}} auszugeben, damit wir Informationen mit dem Benutzer teilen können. Nicht sehr hübsch, aber es erledigt den Job für unsere Zwecke.

```js
function wait(delayInMS) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}
```

Die `wait()`-Funktion gibt ein neues {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die angegebene Anzahl von Millisekunden verstrichen ist. Es funktioniert, indem eine [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwendet wird, die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufruft und den Auflösungs-Handler des Promise als Timeout-Handler-Funktion angibt. Dadurch können wir die Promise-Syntax beim Verwenden von Zeitüberschreitungen nutzen, was sehr nützlich sein kann, wenn wir Promises verketten, wie wir später sehen werden.

### Start der Medienaufnahme

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

`startRecording()` nimmt zwei Eingabeparameter an: ein [`MediaStream`](/de/docs/Web/API/MediaStream), von dem aufgenommen werden soll, und die Länge in Millisekunden der zu erstellenden Aufnahme. Wir nehmen nie mehr als die angegebene Anzahl von Millisekunden auf, obwohl, wenn die Medien vorher stoppen, auch der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) die Aufnahme automatisch stoppt.

- Zuerst erstellen wir den `MediaRecorder`, der die Aufnahme des Eingabe-`stream` behandelt.
- `data` ist ein Array, das zunächst leer ist und die [`Blob`](/de/docs/Web/API/Blob)s der Mediendaten enthält, die unserem [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignishandler zur Verfügung gestellt werden.
- Die `ondataavailable`-Zuweisung richtet den Handler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis ein. Die `data`-Eigenschaft des empfangenen Ereignisses ist ein [`Blob`](/de/docs/Web/API/Blob), das die Mediendaten enthält. Der Ereignishandler schiebt den `Blob` auf das `data`-Array.
- Wir starten den Aufnahmevorgang durch Aufruf von [`recorder.start()`](/de/docs/Web/API/MediaRecorder/start) und geben eine Nachricht im Log aus, die den aktualisierten Zustand des Recorders und die Anzahl der Sekunden, die er aufnehmen wird, enthält.
- Wir erstellen ein neues {{jsxref("Promise")}}, genannt `stopped`, das aufgelöst wird, wenn der [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignishandler des `MediaRecorder` aufgerufen wird und das abgelehnt wird, wenn sein [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignishandler aufgerufen wird. Der Ablehnungshandler erhält als Eingabe den Namen des aufgetretenen Fehlers.
- Wir erstellen ein weiteres neues `Promise`, genannt `recorded`, das aufgelöst wird, wenn die angegebene Anzahl von Millisekunden verstrichen ist. Nach der Auflösung stoppt es den `MediaRecorder`, wenn er aufnimmt.
- Schließlich verwenden wir {{jsxref("Promise.all")}}, um ein neues `Promise` zu erstellen, das erfüllt wird, wenn beide `Promise`s (`stopped` und `recorded`) aufgelöst wurden. Sobald dies aufgelöst ist, wird das Array `data` von `startRecording()` an seinen Aufrufer zurückgegeben.

### Stoppen des Eingabestreams

Die `stop()`-Funktion stoppt die Eingabemedien:

```js
function stop(stream) {
  stream.getTracks().forEach((track) => track.stop());
}
```

Dies funktioniert, indem [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) aufgerufen wird, um mit {{jsxref("Array.forEach", "forEach()")}} auf jede Spur im Stream [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) aufzurufen.

### Abrufen eines Eingabestreams und Einrichten des Recorders

Nun sehen wir uns den kompliziertesten Codeabschnitt in diesem Beispiel an: unseren Ereignishandler für Klicks auf den Startknopf:

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

Wenn ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis eintritt, passiert Folgendes:

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) wird aufgerufen, um einen neuen [`MediaStream`](/de/docs/Web/API/MediaStream) anzufordern, der sowohl Video- als auch Audiotracks enthält. Dies ist der Stream, den wir aufzeichnen werden.
- Wenn das von `getUserMedia()` zurückgegebene Promise aufgelöst wird, wird die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des Vorschau-{{HTMLElement("video")}}-Elements auf den Eingabestream gesetzt, wodurch das von der Kamera des Benutzers aufgenommene Video im Vorschaukasten angezeigt wird. Da das `<video>`-Element stummgeschaltet ist, wird der Ton nicht abgespielt. Der Link des "Download"-Knopfes wird dann ebenfalls auf den Stream gesetzt. Dann arrangieren wir, dass `preview.captureStream()` `preview.mozCaptureStream()` aufruft, damit unser Code in Firefox funktioniert, bei dem die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) mit einem Präfix versehen ist. Dann wird ein neues {{jsxref("Promise")}} erstellt, das aufgelöst wird, wenn das Vorschauvideo zu spielen beginnt, und dieses wird zurückgegeben.
- Wenn das Vorschauvideo zu spielen beginnt, wissen wir, dass es Medien zum Aufzeichnen gibt, also reagieren wir, indem wir die zuvor erstellte [`startRecording()`](#start_der_medienaufnahme)-Funktion aufrufen und den Vorschau-Video-Stream (als aufzuzeichnende Medienquelle) und `recordingTimeMS` als Anzahl der Millisekunden, die aufgezeichnet werden sollen, übergeben. Wie zuvor erwähnt, gibt `startRecording()` ein {{jsxref("Promise")}} zurück, dessen Auflösungs-Handler (der ein Array von [`Blob`](/de/docs/Web/API/Blob)-Objekten erhält, das die Teile der aufgezeichneten Mediendaten enthält) aufgerufen wird, sobald die Aufnahme abgeschlossen ist.
- Der Auflösungs-Handler des Aufnahmeprozesses erhält als Eingabe ein Array von Mediendaten-`Blob`s, lokal bekannt als `recordedChunks`. Das erste, was wir tun, ist, die Teile zu einem einzigen [`Blob`](/de/docs/Web/API/Blob) zusammenzuführen, dessen MIME-Typ `"video/webm"` ist, indem wir den Vorteil der Tatsache nutzen, dass der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor Arrays von Objekten zu einem Objekt zusammenfügt. Dann wird [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwendet, um eine URL zu erstellen, die auf den Blob verweist; dies wird dann der Wert des `src`-Attributs des Wiedergabe-Elements des aufgezeichneten Videos, damit Sie das Video aus dem Blob abspielen können, sowie das Ziel des Download-Buttons.

  Dann wird das [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut des Download-Knopfes gesetzt. Während das `download`-Attribut ein Boolean sein kann, können Sie es auch auf eine Zeichenkette setzen, um es als Namen für die heruntergeladene Datei zu verwenden. Indem wir das `download`-Attribut des Download-Links auf "RecordedVideo.webm" setzen, sagen wir dem Browser, dass ein Klick auf die Schaltfläche eine Datei namens `"RecordedVideo.webm"` herunterlädt, deren Inhalt das aufgezeichnete Video ist.

- Die Größe und der Typ der aufgezeichneten Medien werden im Logbereich unterhalb der beiden Videos und des Download-Knopfes ausgegeben.
- Das `catch()` für alle `Promise`s gibt den Fehler im Protokollbereich aus, indem es unsere `log()`-Funktion aufruft.

### Umgang mit dem Stop-Knopf

Der letzte Codeabschnitt fügt einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf dem Stop-Knopf mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu:

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

Wenn alles mit dem Rest des nicht gezeigten HTML und CSS zusammengefügt wird, sieht es so aus und funktioniert so:

{{EmbedLiveSample('Example_of_recording_a_media_element', '600', '440', , , , 'camera;microphone')}}

Sie können {{LiveSampleLink("Example_of_recording_a_media_element", "das vollständige Demo hier ansehen")}} und die Entwicklertools Ihres Browsers verwenden, um die Seite zu inspizieren und sich den gesamten Code anzusehen, einschließlich der Teile, die oben verborgen sind, da sie nicht entscheidend für die Erklärung sind, wie die APIs verwendet werden.

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Übersichtsseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
