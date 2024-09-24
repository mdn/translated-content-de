---
title: Aufnehmen eines Media-Elements
slug: Web/API/MediaStream_Recording_API/Recording_a_media_element
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{DefaultAPISidebar("MediaStream Recording")}}

Während der Artikel „Verwendung der MediaStream Recording API“ die Verwendung der {{domxref("MediaRecorder")}}-Schnittstelle zur Erfassung eines von einem Hardwaregerät erzeugten {{domxref("MediaStream")}} demonstriert, wie es von {{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}} zurückgegeben wird, können Sie auch ein HTML-Media-Element (nämlich {{HTMLElement("audio")}} oder {{HTMLElement("video")}}) als Quelle des aufzunehmenden `MediaStream` verwenden. In diesem Artikel betrachten wir ein Beispiel, das genau das tut.

## Beispiel zur Aufnahme eines Media-Elements

### HTML

```html hidden
<p>
  Klicken Sie auf die Schaltfläche „Start Recording“, um die Videoaufnahme für ein paar Sekunden zu starten.
  Sie können die Aufnahme beenden, indem Sie auf die Schaltfläche „Stop Recording“ klicken. Die Schaltfläche „Download“
  lädt die empfangenen Daten herunter (obwohl sie in einer rohen, unverarbeiteten Form vorliegen,
  die nicht sehr nützlich ist).
</p>
<br />
```

Lassen Sie uns zunächst die wichtigsten Teile des HTML-Codes betrachten. Es gibt noch ein wenig mehr, aber das ist eher informativ und nicht Teil des Kernbetriebs der App.

```html
<div class="left">
  <div id="startButton" class="button">Start Recording</div>
  <h2>Preview</h2>
  <video id="preview" width="160" height="120" autoplay muted></video>
</div>
```

Wir präsentieren unsere Hauptschnittstelle in zwei Spalten. Auf der linken Seite befindet sich eine Startschaltfläche und ein {{HTMLElement("video")}}-Element, das die Videovorschau anzeigt; dies ist das Video, das die Kamera des Benutzers sieht. Beachten Sie, dass das [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)-Attribut verwendet wird, damit das Video sofort angezeigt wird, sobald der Stream von der Kamera eintrifft, und das [`muted`](/de/docs/Web/HTML/Element/video#muted)-Attribut angegeben ist, um sicherzustellen, dass der Ton des Mikrofons des Benutzers nicht an die Lautsprecher ausgegeben wird, was eine unschöne Rückkopplungsschleife verursacht.

```html
<div class="right">
  <div id="stopButton" class="button">Stop Recording</div>
  <h2>Recording</h2>
  <video id="recording" width="160" height="120" controls></video>
  <a id="downloadButton" class="button">Download</a>
</div>
```

Auf der rechten Seite sehen wir eine Stop-Schaltfläche und das `<video>`-Element, das zur Wiedergabe des aufgenommenen Videos verwendet wird. Beachten Sie, dass das Wiedergabefeld nicht auf "autoplay" gesetzt ist (damit die Wiedergabe nicht sofort beginnt, sobald Medien ankommen) und es hat die Einstellung [`controls`](/de/docs/Web/HTML/Element/video#controls), die dem Benutzer Steuerungselemente zur Wiedergabe, Pause usw. zeigt.

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

Nun schauen wir uns den JavaScript-Code an, denn hier findet der größte Teil der Aktion statt!

### Einrichten von globalen Variablen

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

Die meisten dieser Variablen sind Referenzen auf Elemente, mit denen wir arbeiten müssen. Die letzte, `recordingTimeMS`, ist auf 5000 Millisekunden (5 Sekunden) eingestellt; dies gibt die Länge der Videos an, die wir aufnehmen werden.

### Hilfsfunktionen

Als nächstes erstellen wir einige Hilfsfunktionen, die später verwendet werden.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

Die Funktion `log()` wird verwendet, um Textzeichenfolgen in ein {{HTMLElement("div")}}-Element auszugeben, damit wir Informationen mit dem Benutzer teilen können. Nicht sehr hübsch, aber es erfüllt für unsere Zwecke seinen Zweck.

```js
function wait(delayInMS) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}
```

Die Funktion `wait()` gibt ein neues {{jsxref("Promise")}} zurück, das gelöst wird, wenn die angegebene Anzahl von Millisekunden vergangen ist. Sie arbeitet, indem sie eine [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwendet, die {{domxref("setTimeout()")}} aufruft und den Auflösungs-Handler des Versprechens als Timeout-Handler-Funktion angibt. So können wir die Promise-Syntax bei der Verwendung von Timeouts nutzen, was sehr praktisch sein kann, wenn wir Promises verketten, wie wir später sehen werden.

### Starten der Medienaufnahme

Die Funktion `startRecording()` übernimmt das Starten des Aufnahmeprozesses:

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

`startRecording()` nimmt zwei Eingangsparameter: einen {{domxref("MediaStream")}}, aus dem aufgenommen werden soll, und die Länge der Aufnahme in Millisekunden. Wir nehmen immer nicht mehr als die angegebene Anzahl von Millisekunden Medien auf, obwohl, wenn die Medien vorher stoppen, {{domxref("MediaRecorder")}} die Aufnahme ebenfalls automatisch stoppt.

- Zuerst erstellen wir den `MediaRecorder`, der das Aufnehmen des Eingangsstreams übernimmt.
- `data` ist ein Array, das anfangs leer ist und die {{domxref("Blob")}}s der Mediendaten enthält, die unserem {{domxref("MediaRecorder.dataavailable_event", "ondataavailable")}}-Ereignis-Handler bereitgestellt werden.
- Die Zuweisung `ondataavailable` richtet den Handler für das {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}}-Ereignis ein. Die empfangene Eigenschaft `data` des Ereignisses ist ein {{domxref("Blob")}}, das die Mediendaten enthält. Der Ereignis-Handler fügt das `Blob` dem `data`-Array hinzu.
- Wir starten den Aufnahmeprozess, indem wir {{domxref("MediaRecorder.start", "recorder.start()")}} aufrufen und eine Nachricht an das Log mit dem aktualisierten Zustand des Recorders und der Anzahl der Sekunden ausgeben, die aufgenommen werden.
- Wir erstellen ein neues {{jsxref("Promise")}}, namens `stopped`, das aufgelöst wird, wenn der {{domxref("MediaRecorder.stop_event", "onstop")}}-Ereignis-Handler des `MediaRecorders` aufgerufen wird, und zurückgewiesen wird, wenn der {{domxref("MediaRecorder.error_event", "onerror")}}-Ereignis-Handler aufgerufen wird. Der Zurückweisungshandler erhält als Eingabe den Namen des aufgetretenen Fehlers.
- Wir erstellen ein weiteres neues `Promise`, namens `recorded`, das aufgelöst wird, wenn die angegebene Anzahl von Millisekunden vergangen ist. Nach der Auflösung stoppt es den `MediaRecorder`, falls er aufzeichnet.
- Schließlich verwenden wir {{jsxref("Promise.all")}}, um ein neues `Promise` zu erstellen, das erfüllt wird, wenn beide `Promise`s (`stopped` und `recorded`) aufgelöst wurden. Sobald dies aufgelöst ist, wird das Array `data` von `startRecording()` an seinen Aufrufer zurückgegeben.

### Beenden des Eingangsstreams

Die Funktion `stop()` stoppt die Eingangsmedien:

```js
function stop(stream) {
  stream.getTracks().forEach((track) => track.stop());
}
```

Dies funktioniert, indem es {{domxref("MediaStream.getTracks()")}} aufruft, unter Verwendung von {{jsxref("Array.forEach", "forEach()")}}, um {{domxref("MediaStreamTrack.stop()")}} auf jedem Track im Stream aufzurufen.

### Abrufen eines Eingangsstreams und Einrichten des Recorders

Nun sehen wir uns den komplexesten Teil des Codes in diesem Beispiel an: unseren Ereignis-Handler für Klicks auf die Start-Schaltfläche:

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
          log("Kamera oder Mikrofon nicht gefunden. Aufnahme nicht möglich.");
        } else {
          log(error);
        }
      });
  },
  false,
);
```

Wenn ein {{domxref("Element/click_event", "click")}}-Ereignis auftritt, passiert Folgendes:

- {{domxref("MediaDevices.getUserMedia")}} wird aufgerufen, um einen neuen {{domxref("MediaStream")}} mit sowohl Video- als auch Audiotracks anzufordern. Dies ist der Stream, den wir aufnehmen werden.
- Wenn das von `getUserMedia()` zurückgegebene Versprechen aufgelöst wird, wird die {{domxref("HTMLMediaElement.srcObject","srcObject")}}-Eigenschaft des Vorschau-{{HTMLElement("video")}}-Elements auf den Eingangsstream gesetzt, was dazu führt, dass das von der Kamera des Benutzers aufgenommene Video im Vorschaubereich angezeigt wird. Da das `<video>`-Element stummgeschaltet ist, wird der Ton nicht abgespielt. Der Link der "Download"-Schaltfläche wird dann ebenfalls auf den Stream gesetzt. Danach arrangieren wir uns so, dass `preview.captureStream()` `preview.mozCaptureStream()` aufruft, sodass unser Code in Firefox funktioniert, wo die Methode {{domxref("HTMLMediaElement.captureStream()")}} vorangestellt ist. Dann wird ein neues {{jsxref("Promise")}} erstellt und zurückgegeben, das sich auflöst, sobald das Vorschauvideo zu spielen beginnt.
- Wenn das Vorschauvideo zu spielen beginnt, wissen wir, dass es Medien gibt, die aufgenommen werden können. Deshalb antworten wir, indem wir die zuvor erstellte [`startRecording()`](#starten_der_medienaufnahme) Funktion aufrufen, wobei wir den Vorschau-Videostream (als zu aufnehmende Quellmedien) und `recordingTimeMS` als Anzahl der Millisekunden der aufzunehmenden Medien übergeben. Wie bereits erwähnt, gibt `startRecording()` ein {{jsxref("Promise")}} zurück, dessen Auflösungs-Handler aufgerufen wird (und als Eingabe ein Array von {{domxref("Blob")}}-Objekten mit den aufgezeichneten Mediendaten erhält), sobald die Aufnahme abgeschlossen ist.
- Der Auflösungs-Handler des Aufnahmeprozesses erhält als Eingabe ein Array von Mediendaten-`Blob`s, die lokal als `recordedChunks` bekannt sind. Als erstes fügen wir die Chunks zu einem einzigen {{domxref("Blob")}} mit dem MIME-Typ `"video/webm"` zusammen, indem wir nutzen, dass der {{domxref("Blob.Blob", "Blob()")}}-Konstruktor Arrays von Objekten in ein Objekt verkettet. Dann wird {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} verwendet, um eine URL zu erstellen, die auf das Blob verweist; diese wird dann zum Wert des [`src`](/de/docs/Web/HTML/Element/video#src)-Attributs des Wiedergabe-Elements des aufgenommenen Videos gemacht (sodass Sie das Video aus dem Blob abspielen können), sowie als Ziel des Download-Links der Schaltfläche.

  Dann wird das [`download`](/de/docs/Web/HTML/Element/a#download)-Attribut der Download-Schaltfläche gesetzt. Während das `download`-Attribut als Boolescher Wert verstanden werden kann, kann es auch auf eine Zeichenfolge gesetzt werden, um sie als Namen für die heruntergeladene Datei zu verwenden. Durch das Setzen des `download`-Attributs des Download-Links auf "RecordedVideo.webm" informieren wir den Browser, dass das Klicken auf die Schaltfläche eine Datei namens `"RecordedVideo.webm"` herunterladen sollte, deren Inhalte das aufgenommene Video sind.

- Die Größe und der Typ der aufgezeichneten Medien werden im Logbereich unter den beiden Videos und der Download-Schaltfläche ausgegeben.
- Das `catch()` für alle `Promise`s gibt den Fehler durch Aufruf unserer `log()`-Funktion im Protokollierungsbereich aus.

### Umgang mit der Stop-Taste

Der letzte Teil des Codes fügt einen Handler für das {{domxref("Element/click_event", "click")}}-Ereignis der Stopp-Schaltfläche hinzu, indem {{domxref("EventTarget.addEventListener", "addEventListener()")}} verwendet wird:

```js
stopButton.addEventListener(
  "click",
  () => {
    stop(preview.srcObject);
  },
  false,
);
```

Dies ruft die zuvor behandelte [`stop()`](#beenden_des_eingangsstreams)-Funktion auf.

### Ergebnis

Wenn alles zusammen mit dem Rest des nicht oben gezeigten HTML- und CSS-Codes zusammengestellt wird, sieht es so aus und funktioniert so:

{{ EmbedLiveSample('Example_of_recording_a_media_element', 600, 440) }}

Sie können sich {{LiveSampleLink("Example_of_recording_a_media_element", "hier die vollständige Demo ansehen")}} und die Entwicklertools Ihres Browsers verwenden, um die Seite zu inspizieren und den gesamten Code anzusehen, einschließlich der Teile, die oben ausgeblendet sind, weil sie für die Erklärung, wie die APIs verwendet werden, nicht entscheidend sind.

## Siehe auch

- [Media Capture und Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Startseite
- {{domxref("MediaDevices.getUserMedia()")}}
