---
title: Aufnehmen eines Medienelements
slug: Web/API/MediaStream_Recording_API/Recording_a_media_element
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{DefaultAPISidebar("MediaStream Recording")}}

Während der Artikel Verwendung der MediaStream Recording API die Verwendung der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle demonstriert, um einen von einem Hardwaregerät erzeugten [`MediaStream`](/de/docs/Web/API/MediaStream) zu erfassen, wie er von [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, können Sie auch ein HTML-Medienelement (namentlich {{HTMLElement("audio")}} oder {{HTMLElement("video")}}) als Quelle des aufzuzeichnenden `MediaStream` verwenden. In diesem Artikel werden wir ein Beispiel betrachten, das genau dies tut.

## Beispiel zur Aufnahme eines Medienelements

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

Lassen Sie uns mit den wesentlichen Teilen des HTML beginnen. Es gibt noch ein wenig mehr, jedoch dient es eher informativen Zwecken als der Hauptfunktion der Anwendung.

```html
<div class="left">
  <div id="startButton" class="button">Start Recording</div>
  <h2>Preview</h2>
  <video id="preview" width="160" height="120" autoplay muted></video>
</div>
```

Wir präsentieren unsere Hauptschnittstelle in zwei Spalten. Links befindet sich eine Starttaste und ein {{HTMLElement("video")}}-Element, das die Videovorschau anzeigt; dies ist das Video, das die Kamera des Benutzers sieht. Beachten Sie, dass das [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)-Attribut verwendet wird, sodass das Video sofort angezeigt wird, sobald der Stream von der Kamera eintrifft, und das [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted)-Attribut angegeben wird, um sicherzustellen, dass der Ton vom Mikrofon des Benutzers nicht auf die Lautsprecher ausgegeben wird und eine unschöne Rückkopplungsschleife verursacht.

```html
<div class="right">
  <div id="stopButton" class="button">Stop Recording</div>
  <h2>Recording</h2>
  <video id="recording" width="160" height="120" controls></video>
  <a id="downloadButton" class="button">Download</a>
</div>
```

Rechts sehen wir eine Stopptaste und das `<video>`-Element, das zur Wiedergabe des aufgenommenen Videos verwendet wird. Beachten Sie, dass das Wiedergabefeld kein Autoplay gesetzt hat (damit die Wiedergabe nicht sofort beginnt, sobald Medien ankommen) und es hat [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls) gesetzt, was ihm sagt, dem Benutzer Steuerungen zum Abspielen, Anhalten usw. anzuzeigen.

Unter dem Wiedergabeelement befindet sich eine Taste zum Herunterladen des aufgenommenen Videos.

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

Schauen wir uns nun den JavaScript-Code an; hier passiert schließlich der größte Teil der Aktion!

### Einrichten globaler Variablen

Wir beginnen damit, einige globale Variablen zu etablieren, die wir benötigen.

```js
let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");

let recordingTimeMS = 5000;
```

Die meisten davon sind Referenzen auf Elemente, mit denen wir arbeiten müssen. Die letzte, `recordingTimeMS`, ist auf 5000 Millisekunden (5 Sekunden) eingestellt; dies bestimmt die Länge der Videos, die wir aufnehmen.

### Hilfsfunktionen

Als nächstes erstellen wir einige Hilfsfunktionen, die später verwendet werden.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

Die Funktion `log()` wird verwendet, um Textzeichenketten an ein {{HTMLElement("div")}} auszugeben, damit wir Informationen mit dem Benutzer teilen können. Nicht sehr hübsch, aber sie erfüllt ihren Zweck.

```js
function wait(delayInMS) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}
```

Die Funktion `wait()` gibt ein neues {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die angegebene Anzahl von Millisekunden verstrichen ist. Sie arbeitet, indem eine [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwendet wird, die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufruft und den Auflösungsbehandler des Promises als Timeout-Handler-Funktion angibt. Dies ermöglicht es uns, die Promise-Syntax zu verwenden, wenn wir Timeouts verwenden, was sehr praktisch beim Verketten von Promises sein kann, wie wir später sehen werden.

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

`startRecording()` nimmt zwei Eingabeparameter entgegen: einen [`MediaStream`](/de/docs/Web/API/MediaStream), von dem aufgenommen werden soll, und die Aufnahmelänge in Millisekunden. Wir nehmen nie mehr als die angegebene Anzahl von Millisekunden an Medien auf, obwohl, wenn die Medien vorher aufhören, [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) automatisch auch mit der Aufnahme aufhört.

- Wir erstellen zuerst den `MediaRecorder`, der die Aufnahme des Eingabe-`stream` handhaben wird.
- `data` ist ein Array, das zunächst leer ist und die [`Blob`](/de/docs/Web/API/Blob)s der Mediendaten enthält, die unserem [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignishandler zur Verfügung gestellt werden.
- Die Zuweisung an `ondataavailable` richtet den Handler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis ein. Die `data`-Eigenschaft des empfangenen Ereignisses ist ein [`Blob`](/de/docs/Web/API/Blob), das die Mediendaten enthält. Der Ereignishandler fügt das `Blob` dem `data`-Array hinzu.
- Wir starten den Aufnahmeprozess, indem wir [`recorder.start()`](/de/docs/Web/API/MediaRecorder/start) aufrufen, und geben eine Nachricht in das Log aus mit dem aktualisierten Zustand des Recorders und der Anzahl der Sekunden, für die aufgenommen wird.
- Wir erstellen ein neues {{jsxref("Promise")}}, namens `stopped`, das aufgelöst wird, wenn der [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignishandler des `MediaRecorder` aufgerufen wird, und abgelehnt wird, wenn sein [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignishandler aufgerufen wird. Der Ablehnungs-Handler erhält als Eingabe den Namen des aufgetretenen Fehlers.
- Wir erstellen ein weiteres neues `Promise`, namens `recorded`, das aufgelöst wird, wenn die angegebene Anzahl von Millisekunden verstrichen ist. Bei Auflösung stoppt es den `MediaRecorder`, falls er aufnimmt.
- Schließlich nutzen wir {{jsxref("Promise.all")}}, um ein neues `Promise` zu erstellen, das erfüllt wird, wenn beide `Promise`s (`stopped` und `recorded`) aufgelöst wurden. Sobald das erfüllt ist, wird das Array `data` von `startRecording()` an seinen Aufrufer zurückgegeben.

### Beenden des Eingabestreams

Die Funktion `stop()` stoppt die eingehenden Medien:

```js
function stop(stream) {
  stream.getTracks().forEach((track) => track.stop());
}
```

Dies funktioniert, indem [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) aufgerufen wird und mit {{jsxref("Array.forEach", "forEach()")}} [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) auf jedem Track im Stream aufgerufen wird.

### Abrufen eines Eingabestreams und Einrichten des Recorders

Sehen wir uns nun das komplexeste Stück Code in diesem Beispiel an: unseren Ereignishandler für Klicks auf die Starttaste:

```js
startButton.addEventListener("click", () => {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then((stream) => {
      preview.srcObject = stream;
      downloadButton.href = stream;
      preview.captureStream = preview.captureStream || preview.mozCaptureStream;
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
});
```

Wenn ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis eintritt, passiert Folgendes:

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) wird aufgerufen, um einen neuen [`MediaStream`](/de/docs/Web/API/MediaStream) anzufordern, der sowohl Video- als auch Audiotracks enthält. Dies ist der Stream, den wir aufnehmen werden.
- Wenn das von `getUserMedia()` zurückgegebene Promise aufgelöst wird, wird die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des Vorschau-{{HTMLElement("video")}}-Elements auf den Eingabestream gesetzt, was dazu führt, dass das Video, das von der Kamera des Benutzers aufgenommen wird, in der Vorschaubox angezeigt wird. Da das `<video>`-Element stummgeschaltet ist, wird der Ton nicht abgespielt. Der Link der "Download"-Schaltfläche wird dann ebenfalls auf den Stream gesetzt. Dann arrangieren wir `preview.captureStream()`, um `preview.mozCaptureStream()` aufzurufen, damit unser Code auch auf Firefox funktioniert, wo die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) ein Präfix hat. Dann wird ein neues {{jsxref("Promise")}} erstellt und zurückgegeben, das aufgelöst wird, wenn das Vorschaubild zu spielen beginnt.
- Wenn das Vorschauvideo zu spielen beginnt, wissen wir, dass es Medien aufzunehmen gibt, also antworten wir mit dem Aufruf der zuvor erstellten Funktion [`startRecording()`](#starten_der_medienaufnahme), wobei wir den Vorschauvideostream (als aufzunehmende Medieneingabe) und `recordingTimeMS` als Anzahl der Millisekunden der aufzunehmenden Medien übergeben. Wie bereits erwähnt, gibt `startRecording()` ein {{jsxref("Promise")}} zurück, dessen Auflösungs-Handler aufgerufen wird (unter Verwendung eines Arrays von [`Blob`](/de/docs/Web/API/Blob)-Objekten, die die Stücke der aufgezeichneten Mediendaten enthalten), sobald die Aufnahme abgeschlossen ist.
- Der Auflösungs-Handler des Aufnahmeprozesses erhält ein Array von Mediadaten-`Blob`s unter dem Namen `recordedChunks` als Eingabe. Als erstes führen wir die Stücke zu einem einzigen [`Blob`](/de/docs/Web/API/Blob) zusammen, dessen MIME-Typ `"video/webm"` ist, indem wir den Vorteil nutzen, dass der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor Arrays von Objekten zu einem Objekt zusammenfügt. Dann wird [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwendet, um eine URL zu erstellen, die auf das Blob verweist; dies wird dann als Wert des `src`-Attributs des Wiedergabeelements des aufgenommenen Videos sowie als Ziel des Download-Buttons gesetzt.

  Dann wird das [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut des Download-Buttons gesetzt. Während das `download`-Attribut ein Boolean sein kann, können Sie es auch auf einen String setzen, der als Name für die heruntergeladene Datei verwendet wird. Durch das Setzen des `download`-Attributs des Download-Links auf "RecordedVideo.webm" teilen wir dem Browser mit, dass das Anklicken der Schaltfläche eine Datei namens `"RecordedVideo.webm"` herunterladen soll, deren Inhalt das aufgezeichnete Video ist.

- Die Größe und der Typ der aufgezeichneten Medien werden im Logbereich unter den beiden Videos und dem Download-Button ausgegeben.
- Das `catch()` für alle `Promise`s gibt den Fehler im Logbereich aus, indem unsere `log()`-Funktion aufgerufen wird.

### Umgang mit der Stopptaste

Der letzte Teil des Codes fügt einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf der Stopptaste mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu:

```js
stopButton.addEventListener("click", () => {
  stop(preview.srcObject);
});
```

Dies ruft die zuvor behandelte Funktion [`stop()`](#beenden_des_eingabestreams) auf.

### Ergebnis

Wenn alles zusammen mit dem restlichen HTML und dem oben nicht gezeigten CSS kombiniert wird, sieht es so aus und funktioniert folgendermaßen:

{{EmbedLiveSample('Example_of_recording_a_media_element', '600', '440', , , , 'camera;microphone')}}

Sie können dieses Beispiel auch im Playground mithilfe des "Play"-Buttons öffnen, der es Ihnen ermöglicht, den kombinierten Code anzusehen, einschließlich der Teile, die oben ausgeblendet wurden, da sie nicht entscheidend für die Erklärung sind, wie die APIs verwendet werden.

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Übersichtsseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
