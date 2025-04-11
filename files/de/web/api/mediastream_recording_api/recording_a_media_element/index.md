---
title: Aufzeichnen eines Medienelements
slug: Web/API/MediaStream_Recording_API/Recording_a_media_element
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("MediaStream Recording")}}

Während der Artikel Verwendung der MediaStream Recording API zeigt, wie die [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle verwendet wird, um einen von einem Hardwaregerät erzeugten [`MediaStream`](/de/docs/Web/API/MediaStream) aufzuzeichnen, wie er von [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, können Sie auch ein HTML-Medienelement (nämlich {{HTMLElement("audio")}} oder {{HTMLElement("video")}}) als Quelle des aufzuzeichnenden `MediaStream` verwenden. In diesem Artikel betrachten wir ein Beispiel, das genau dies tut.

## Beispiel für die Aufnahme eines Medienelements

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

Lassen Sie uns zunächst die wichtigsten Teile des HTML anschauen. Es gibt noch ein wenig mehr, aber das ist eher informativ und gehört nicht zur Kernfunktion der Anwendung.

```html
<div class="left">
  <div id="startButton" class="button">Start Recording</div>
  <h2>Preview</h2>
  <video id="preview" width="160" height="120" autoplay muted></video>
</div>
```

Wir präsentieren unsere Hauptschnittstelle in zwei Spalten. Links befindet sich ein Startknopf und ein {{HTMLElement("video")}}-Element, das die Videovorschau anzeigt; dies ist das Video, das die Kamera des Nutzers sieht. Beachten Sie, dass das [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)-Attribut verwendet wird, sodass das Video sofort angezeigt wird, sobald der Stream von der Kamera ankommt, und dass das [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted)-Attribut angegeben wird, um sicherzustellen, dass der Ton des Mikrofons des Nutzers nicht auf seine Lautsprecher ausgegeben wird, was eine unschöne Rückkopplung verursachen würde.

```html
<div class="right">
  <div id="stopButton" class="button">Stop Recording</div>
  <h2>Recording</h2>
  <video id="recording" width="160" height="120" controls></video>
  <a id="downloadButton" class="button">Download</a>
</div>
```

Rechts sehen wir einen Stop-Knopf und das `<video>`-Element, das zur Wiedergabe des aufgezeichneten Videos verwendet wird. Beachten Sie, dass das Wiedergabefeld kein Autoplay gesetzt hat (damit die Wiedergabe nicht sofort startet, sobald das Medium ankommt), und dass [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls) gesetzt ist, was bedeutet, dass Nutzern Steuerelemente zum Abspielen, Pausieren usw. gezeigt werden.

Unter dem Wiedergabe-Element befindet sich ein Button zum Herunterladen des aufgezeichneten Videos.

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

Nun lassen Sie uns den JavaScript-Code betrachten, hier passiert schließlich das meiste!

### Globale Variablen einrichten

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

Die meisten davon sind Referenzen auf Elemente, mit denen wir arbeiten müssen. Die letzte, `recordingTimeMS`, ist auf 5000 Millisekunden (5 Sekunden) gesetzt; dies legt die Länge der Videos fest, die wir aufzeichnen werden.

### Hilfsfunktionen

Als nächstes erstellen wir einige Hilfsfunktionen, die später verwendet werden.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

Die Funktion `log()` wird verwendet, um Textstrings in ein {{HTMLElement("div")}} auszugeben, damit wir Informationen mit dem Nutzer teilen können. Nicht sehr hübsch, aber es erledigt den Job für unsere Zwecke.

```js
function wait(delayInMS) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}
```

Die Funktion `wait()` gibt ein neues {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die angegebene Anzahl von Millisekunden vergangen ist. Es funktioniert, indem eine [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwendet wird, die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufruft und den Auflösungs-Handler des Versprechens als Timeout-Handler-Funktion angibt. Dadurch können wir Versprechen-Syntax bei der Verwendung von Zeitüberschreitungen nutzen, was sehr nützlich sein kann, wenn man Versprechen verkettet, wie wir später sehen werden.

### Starten der Medienaufnahme

Die Funktion `startRecording()` kümmert sich um den Start des Aufnahmevorgangs:

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

`startRecording()` nimmt zwei Eingabeparameter an: einen [`MediaStream`](/de/docs/Web/API/MediaStream), von dem aufgezeichnet werden soll, und die Länge in Millisekunden der Aufnahme, die gemacht werden soll. Wir zeichnen immer nur maximal die angegebene Anzahl von Millisekunden des Mediums auf, obwohl [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) die Aufnahme automatisch stoppt, wenn das Medium vor Erreichen dieser Zeit stoppt.

- Wir erstellen zunächst den `MediaRecorder`, der die Aufnahme des Eingangs-`streams` übernimmt.
- `data` ist ein Array, das anfangs leer ist und die [`Blob`](/de/docs/Web/API/Blob)s der bereitgestellten Mediendaten unserer [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignisbehandlung speichert.
- Die Zuordnung von `ondataavailable` richtet den Handler für das [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis ein. Die empfangene Eigenschaft `data` des Ereignisses ist ein [`Blob`](/de/docs/Web/API/Blob), das die Mediendaten enthält. Der Ereignishandler schiebt das `Blob` in das `data`-Array.
- Wir starten den Aufnahmevorgang, indem wir [`recorder.start()`](/de/docs/Web/API/MediaRecorder/start) aufrufen und eine Nachricht in das Protokoll ausgeben, die den aktualisierten Zustand des Recorders und die Anzahl der Sekunden enthält, die aufgenommen werden.
- Wir erstellen ein neues {{jsxref("Promise")}} mit dem Namen `stopped`, das aufgelöst wird, wenn der [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignis-Handler des `MediaRecorder` aufgerufen wird, und abgelehnt wird, wenn dessen [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignis-Handler aufgerufen wird. Der Ablehnungshandler erhält als Eingabe den Namen des aufgetretenen Fehlers.
- Wir erstellen ein weiteres neues `Promise`, genannt `recorded`, das aufgelöst wird, wenn die angegebene Anzahl von Millisekunden verstrichen ist. Beim Auflösen stoppt es den `MediaRecorder`, falls er noch aufnimmt.
- Schließlich verwenden wir {{jsxref("Promise.all")}}, um ein neues `Promise` zu erstellen, das erfüllt wird, wenn beide `Promise`s (`stopped` und `recorded`) aufgelöst wurden. Sobald dies geschieht, wird das Array `data` von `startRecording()` an seinen Aufrufer zurückgegeben.

### Stoppen des Eingangsstreams

Die Funktion `stop()` stoppt die Eingangsmedien:

```js
function stop(stream) {
  stream.getTracks().forEach((track) => track.stop());
}
```

Dies funktioniert, indem [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) aufgerufen wird und {{jsxref("Array.forEach", "forEach()")}} verwendet wird, um [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) auf jedem Track im Stream aufzurufen.

### Abrufen eines Eingangsstreams und Einrichten des Recorders

Nun betrachten wir den kompliziertesten Teil des Codes in diesem Beispiel: unseren Ereignishandler für Klicks auf den Startknopf:

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
- Wenn das von `getUserMedia()` zurückgegebene Promise erfüllt wird, wird die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des Vorschau-{{HTMLElement("video")}}-Elements auf den Eingangsstream gesetzt, was dazu führt, dass das Video, das von der Kamera des Nutzers erfasst wird, im Vorschaufenster angezeigt wird. Da das `<video>`-Element stummgeschaltet ist, wird der Ton nicht abgespielt. Der Link des "Download"-Buttons wird dann ebenfalls auf den Stream gesetzt. Dann arrangieren wir, dass `preview.captureStream()` `preview.mozCaptureStream()` aufruft, damit unser Code unter Firefox funktioniert, wo die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) ein Präfix hat. Dann wird ein neues {{jsxref("Promise")}} erstellt und zurückgegeben, das aufgelöst wird, wenn das Vorschauvideo zu spielen beginnt.
- Wenn das Vorschauvideo zu spielen beginnt, wissen wir, dass Medien zum Aufzeichnen vorhanden sind. Daher rufen wir die zuvor erstellte [`startRecording()`](#starten_der_medienaufnahme)-Funktion auf und übergeben den Vorschaustreamp als die aufzuzeichnenden Quellmedien und `recordingTimeMS` als Anzahl der Millisekunden, die aufgezeichnet werden sollen. Wie zuvor erwähnt, gibt `startRecording()` ein {{jsxref("Promise")}} zurück, dessen Auflösungshandler (der ein Array von [`Blob`](/de/docs/Web/API/Blob)-Objekten mit den Teilen der aufgezeichneten Mediendaten empfängt) aufgerufen wird, sobald die Aufnahme abgeschlossen ist.
- Der Auflösungshandler des Aufnahmevorgangs erhält als Eingabe ein Array von Mediendaten-Blobs, die lokal als `recordedChunks` bekannt sind. Das erste, was wir tun, ist, die Teile in ein einzelnes [`Blob`](/de/docs/Web/API/Blob) zu verschmelzen, dessen MIME-Typ `"video/webm"` ist, indem wir nutzen, dass der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor Arrays von Objekten zu einem Objekt zusammenfügt. Dann wird [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwendet, um eine URL zu erstellen, die auf das Blob verweist; diese wird dann als Wert des Wiedergabeelements für aufgezeichnetes Video [`src`](/de/docs/Web/HTML/Reference/Elements/video#src)-Attribut festgelegt (damit das Video aus dem Blob abgespielt werden kann) sowie als Ziel des Download-Buttons.

  Dann wird das [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut des Download-Buttons gesetzt. Während das `download`-Attribut ein Boolean sein kann, können Sie es auch auf einen String setzen, um ihn als Namen für die heruntergeladene Datei zu verwenden. Indem Sie das `download`-Attribut des Download-Links auf "RecordedVideo.webm" setzen, teilen wir dem Browser mit, dass durch Klicken auf den Button eine Datei namens `"RecordedVideo.webm"` heruntergeladen werden soll, deren Inhalt das aufgezeichnete Video ist.

- Die Größe und der Typ der aufgezeichneten Medien werden im Protokollbereich unter den beiden Videos und dem Download-Button ausgegeben.
- Die `catch()`-Methode für alle `Promise`s gibt den Fehler an den Protokollbereich aus, indem sie unsere `log()`-Funktion aufruft.

### Handhabung des Stop-Knopfes

Der letzte Teil des Codes fügt einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis des Stop-Knopfes mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu:

```js
stopButton.addEventListener(
  "click",
  () => {
    stop(preview.srcObject);
  },
  false,
);
```

Diese Funktion ruft die zuvor behandelte [`stop()`](#stoppen_des_eingangsstreams)-Funktion auf.

### Ergebnis

Wenn alles zusammengefügt wird, einschließlich der oben nicht gezeigten HTML- und CSS-Teile, sieht es so aus und funktioniert so:

{{EmbedLiveSample('Example_of_recording_a_media_element', '600', '440', , , , 'camera;microphone')}}

Sie können {{LiveSampleLink("Example_of_recording_a_media_element", "hier die vollständige Demo ansehen")}}, und verwenden Sie die Entwicklertools Ihres Browsers, um die Seite zu inspizieren und den gesamten Code anzusehen, einschließlich der oben verborgenen Teile, die nicht kritisch für die Erklärung sind, wie die APIs verwendet werden.

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Übersichtsseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
