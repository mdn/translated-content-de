---
title: Verwendung der Screen Capture API
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{DefaultAPISidebar("Screen Capture API")}}

In diesem Artikel erfahren Sie, wie Sie mit der Screen Capture API und ihrer Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) einen Teil des Bildschirms oder den gesamten Bildschirm erfassen können, um ihn während einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Konferenzsitzung zu streamen, aufzuzeichnen oder zu teilen.

> [!NOTE]
> Neuere Versionen des [WebRTC-adapter.js-Shims](https://github.com/webrtcHacks/adapter) enthalten Implementierungen von `getDisplayMedia()`. Damit lässt sich die Bildschirmfreigabe in Browsern nutzen, die sie unterstützen, aber die aktuelle Standard-API nicht implementieren. Dies funktioniert mindestens mit Chrome, Edge und Firefox.

## Bildschirminhalte erfassen

Um Bildschirminhalte als Live-[`MediaStream`](/de/docs/Web/API/MediaStream) zu erfassen, rufen Sie [`navigator.mediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) auf. Die Methode gibt ein Promise zurück, das mit einem Stream der aktuellen Bildschirminhalte erfüllt wird. Das in den folgenden Beispielen verwendete Objekt `displayMediaOptions` könnte etwa so aussehen:

```js
const displayMediaOptions = {
  video: {
    displaySurface: "browser",
  },
  audio: {
    suppressLocalAudioPlayback: false,
  },
  preferCurrentTab: false,
  selfBrowserSurface: "exclude",
  systemAudio: "include",
  surfaceSwitching: "include",
  monitorTypeSurfaces: "include",
};
```

### Bildschirmerfassung starten: mit `async`/`await`

```js
async function startCapture(displayMediaOptions) {
  let captureStream = null;

  try {
    captureStream =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
  return captureStream;
}
```

Sie können diesen Code wie oben gezeigt mit einer asynchronen Funktion und dem Operator [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) schreiben oder das {{jsxref("Promise")}} direkt verwenden, wie im folgenden Beispiel.

### Bildschirmerfassung starten: mit `Promise`

```js
function startCapture(displayMediaOptions) {
  return navigator.mediaDevices
    .getDisplayMedia(displayMediaOptions)
    .catch((err) => {
      console.error(err);
      return null;
    });
}
```

In beiden Fällen zeigt der {{Glossary("user_agent", "User Agent")}} eine Benutzeroberfläche an, auf der die Person den freizugebenden Bildschirmbereich auswählen kann. Beide Implementierungen von `startCapture()` geben den [`MediaStream`](/de/docs/Web/API/MediaStream) mit den erfassten Bildschirminhalten zurück.

Unter [Optionen und Einschränkungen](#optionen_und_einschränkungen) erfahren Sie, wie Sie die gewünschte Art der Anzeigefläche festlegen und den resultierenden Stream anderweitig anpassen können.

### Beispiel eines Fensters zur Auswahl einer Anzeigefläche für die Erfassung

![Screenshot des Chrome-Fensters zur Auswahl einer Quellfläche](chrome-screen-capture-window.png)

Anschließend können Sie den erfassten Stream `captureStream` überall dort verwenden, wo ein Stream als Eingabe akzeptiert wird. Die folgenden [Beispiele](#beispiele) zeigen einige Möglichkeiten dafür.

### Sichtbare und logische Anzeigeflächen

Für die Screen Capture API ist eine **Anzeigefläche** jedes Inhaltsobjekt, das über die API zur Freigabe ausgewählt werden kann. Dazu gehören der Inhalt eines Browser-Tabs, eines vollständigen Fensters oder eines Monitors (beziehungsweise mehrerer Monitore, die zu einer Fläche zusammengefasst sind).

Es gibt zwei Arten von Anzeigeflächen. Eine **sichtbare Anzeigefläche** ist vollständig auf dem Bildschirm zu sehen, etwa das vorderste Fenster oder Tab oder der gesamte Bildschirm.

Eine **logische Anzeigefläche** ist teilweise oder vollständig verdeckt: Sie wird beispielsweise von einem anderen Objekt überlagert, ist ganz ausgeblendet oder befindet sich außerhalb des sichtbaren Bildschirmbereichs. Wie die Screen Capture API damit umgeht, ist unterschiedlich. Im Allgemeinen stellt der Browser ein Bild bereit, in dem der verborgene Teil der logischen Anzeigefläche auf irgendeine Weise unkenntlich gemacht wird, etwa durch Weichzeichnen oder durch Ersetzen mit einer Farbe oder einem Muster. Dies geschieht aus Sicherheitsgründen, da für die Person nicht sichtbare Inhalte Daten enthalten können, die sie nicht teilen möchte.

Ein User Agent kann die Erfassung des gesamten Inhalts eines verdeckten Fensters ermöglichen, nachdem die Person dies genehmigt hat. In diesem Fall kann er den verdeckten Inhalt einbeziehen, indem er den aktuellen Inhalt des verborgenen Fensterbereichs erfasst oder, falls dieser nicht verfügbar ist, den zuletzt sichtbaren Inhalt zeigt.

### Optionen und Einschränkungen

Mit dem an [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergebenen Optionsobjekt legen Sie Optionen für den resultierenden Stream fest.

Die Objekte `video` und `audio` im Optionsobjekt können außerdem zusätzliche, für die jeweiligen Medientracks geltende Einschränkungen enthalten. Unter [Eigenschaften freigegebener Bildschirmtracks](/de/docs/Web/API/MediaTrackConstraints#instance_properties_of_shared_screen_tracks) finden Sie Einzelheiten zu zusätzlichen Einschränkungen für die Konfiguration eines Bildschirmerfassungsstreams, die zu [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) hinzugefügt werden, sowie zu den von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegebenen unterstützten Einschränkungen und zu [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)).

Die Einschränkungen werden erst angewendet, nachdem der zu erfassende Inhalt ausgewählt wurde. Sie verändern die Darstellung im resultierenden Stream. Wenn Sie beispielsweise für das Video eine Einschränkung für [`width`](/de/docs/Web/API/MediaTrackConstraints/width) angeben, wird das Video skaliert, nachdem die Person den freizugebenden Bereich ausgewählt hat. Die Größe der Quelle selbst wird dadurch nicht beschränkt.

> [!NOTE]
> Einschränkungen verändern _niemals_ die Liste der Quellen, die über die Screen Capture API erfasst werden können. So können Webanwendungen niemanden dazu zwingen, bestimmte Inhalte zu teilen, indem sie die Quellenliste auf einen einzigen Eintrag einschränken.

Solange Bildschirminhalte erfasst und geteilt werden, zeigt das betreffende Gerät einen Hinweis an, damit die Person weiß, dass die Freigabe aktiv ist.

> [!NOTE]
> Aus Datenschutz- und Sicherheitsgründen lassen sich Quellen für die Bildschirmfreigabe nicht mit [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) auflisten. Damit zusammenhängend wird bei Änderungen der für `getDisplayMedia()` verfügbaren Quellen nie ein [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event)-Ereignis ausgelöst.

### Freigegebenes Audio erfassen

[`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) wird meist verwendet, um den Bildschirm einer Person oder Teile davon als Video zu erfassen. {{Glossary("user_agent", "User Agents")}} können jedoch auch die Erfassung von Audio zusammen mit dem Videoinhalt ermöglichen. Dieses Audio kann aus dem ausgewählten Fenster, dem gesamten Audiosystem des Computers oder dem Mikrofon der Person stammen – oder aus einer Kombination dieser Quellen.

Wenn für Ihr Projekt auch Audio geteilt werden muss, prüfen Sie vorab die [Browser-Kompatibilität](/de/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility) von `getDisplayMedia()`. So können Sie feststellen, ob die gewünschten Browser Audio in erfassten Bildschirmstreams unterstützen.

Um den Bildschirm einschließlich Audio freizugeben, könnten Sie die folgenden Optionen an `getDisplayMedia()` übergeben:

```js
const displayMediaOptions = {
  video: true,
  audio: true,
};
```

Damit kann die Person innerhalb der vom User Agent unterstützten Möglichkeiten frei auswählen, was sie teilen möchte. Durch zusätzliche Optionen und Einschränkungen in den Objekten `audio` und `video` lässt sich dies weiter anpassen:

```js
const displayMediaOptions = {
  video: {
    displaySurface: "window",
  },
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    sampleRate: 44100,
    suppressLocalAudioPlayback: true,
  },
  surfaceSwitching: "include",
  selfBrowserSurface: "exclude",
  systemAudio: "exclude",
};
```

In diesem Beispiel soll das gesamte Fenster als Anzeigefläche erfasst werden. Für den Audiotrack sollen nach Möglichkeit Rauschunterdrückung und Echounterdrückung aktiviert werden. Außerdem werden eine ideale Audio-Abtastrate von 44,1 kHz und die Unterdrückung der lokalen Audiowiedergabe angegeben.

Darüber hinaus gibt die Anwendung dem User Agent folgende Hinweise:

- Während der Bildschirmfreigabe soll eine Steuerung angeboten werden, mit der die Person dynamisch zu einem anderen freigegebenen Tab wechseln kann.
- Das aktuelle Tab soll nicht in der Auswahlliste erscheinen, die beim Anfordern der Erfassung angezeigt wird.
- Systemaudio soll nicht zu den angebotenen Audioquellen gehören.

Die Erfassung von Audio ist immer optional. Selbst wenn Webinhalte einen Stream mit Audio und Video anfordern, kann der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) nur einen Videotrack und kein Audio enthalten.

## Den erfassten Stream verwenden

Das von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zurückgegebene {{jsxref("Promise")}} wird mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) erfüllt. Dieser enthält mindestens einen Videostream mit dem Bildschirm oder Bildschirmbereich, dessen Inhalt entsprechend den beim Aufruf von `getDisplayMedia()` angegebenen Einschränkungen angepasst oder gefiltert wird.

### Mögliche Risiken

Datenschutz- und Sicherheitsprobleme bei der Bildschirmfreigabe sind meist nicht besonders schwerwiegend, können aber auftreten. Das größte potenzielle Problem besteht darin, dass Personen versehentlich Inhalte teilen, die sie nicht freigeben wollten.

So kann es beispielsweise leicht zu Datenschutz- oder Sicherheitsverletzungen kommen, wenn während der Bildschirmfreigabe ein sichtbares Fenster im Hintergrund persönliche Informationen enthält oder ein Passwortmanager im geteilten Stream zu sehen ist. Bei der Erfassung logischer Anzeigeflächen kann dieses Problem noch größer sein, da diese Inhalte enthalten können, von denen die Person nichts weiß und die sie erst recht nicht sehen kann.

User Agents, die den Datenschutz ernst nehmen, sollten Inhalte unkenntlich machen, die auf dem Bildschirm nicht tatsächlich sichtbar sind – es sei denn, die Freigabe genau dieser Inhalte wurde genehmigt.

### Erfassung von Bildschirminhalten genehmigen

Bevor die Übertragung erfasster Bildschirminhalte beginnen kann, fordert der {{Glossary("user_agent", "User Agent")}} die Person auf, die Freigabe zu bestätigen und den freizugebenden Inhalt auszuwählen.

## Beispiele

### Bildschirmerfassung streamen

In diesem Beispiel wird der Inhalt des erfassten Bildschirmbereichs in ein {{HTMLElement("video")}}-Element auf derselben Seite gestreamt.

#### JavaScript

Dafür ist nicht viel Code nötig. Wenn Sie bereits [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet haben, um Video von einer Kamera zu erfassen, wird Ihnen [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) vertraut vorkommen.

##### Einrichtung

Zunächst werden einige Konstanten für den Zugriff auf Seitenelemente festgelegt: das {{HTMLElement("video")}}-Element, in das die erfassten Bildschirminhalte gestreamt werden, ein Bereich für Protokollausgaben sowie die Schaltflächen zum Starten und Beenden der Bildschirmerfassung.

Das Objekt `displayMediaOptions` enthält die Optionen, die an `getDisplayMedia()` übergeben werden. Hier ist die Eigenschaft [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) auf `window` gesetzt. Dies gibt an, dass das gesamte Fenster erfasst werden soll.

Schließlich werden Event-Listener eingerichtet, die Klicks auf die Schaltflächen zum Starten und Beenden erkennen.

```js
const videoElem = document.getElementById("video");
const logElem = document.getElementById("log");
const startElem = document.getElementById("start");
const stopElem = document.getElementById("stop");

// Options for getDisplayMedia()

const displayMediaOptions = {
  video: {
    displaySurface: "window",
  },
  audio: false,
};

// Set event listeners for the start and stop buttons
startElem.addEventListener("click", (evt) => {
  startCapture();
});

stopElem.addEventListener("click", (evt) => {
  stopCapture();
});
```

##### Inhalte protokollieren

Dieses Beispiel überschreibt bestimmte Methoden von [`console`](/de/docs/Web/API/console), damit ihre Meldungen im {{HTMLElement("pre")}}-Block mit der ID `log` ausgegeben werden.

```js
console.log = (msg) => (logElem.textContent = `${logElem.textContent}\n${msg}`);
console.error = (msg) =>
  (logElem.textContent = `${logElem.textContent}\nError: ${msg}`);
```

So können Sie mit [`console.log()`](/de/docs/Web/API/console/log_static) und [`console.error()`](/de/docs/Web/API/console/error_static) Informationen im Protokollbereich des Dokuments ausgeben.

##### Bildschirmerfassung starten

Die folgende Methode `startCapture()` startet die Erfassung eines [`MediaStream`](/de/docs/Web/API/MediaStream), dessen Inhalt aus einem von der Person ausgewählten Bildschirmbereich stammt. `startCapture()` wird aufgerufen, wenn auf die Schaltfläche „Start Capture“ geklickt wird.

```js
async function startCapture() {
  logElem.textContent = "";

  try {
    videoElem.srcObject =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    dumpOptionsInfo();
  } catch (err) {
    console.error(err);
  }
}
```

Nachdem `startCapture()` das Protokoll geleert und damit verbliebenen Text eines vorherigen Verbindungsversuchs entfernt hat, ruft die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) mit dem durch `displayMediaOptions` definierten Einschränkungsobjekt auf. Durch {{jsxref("Operators/await", "await")}} wird die nächste Codezeile erst ausgeführt, wenn das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} erfüllt ist. Das Promise liefert dann einen [`MediaStream`](/de/docs/Web/API/MediaStream), der den Inhalt des von der Person ausgewählten Bildschirms, Fensters oder anderen Bereichs streamt.

Der Stream wird mit dem {{HTMLElement("video")}}-Element verbunden, indem der zurückgegebene `MediaStream` in dessen Eigenschaft [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) gespeichert wird.

Die Funktion `dumpOptionsInfo()` – die wir uns gleich ansehen – gibt zu Demonstrationszwecken Informationen über den Stream im Protokollbereich aus.

Falls dabei ein Fehler auftritt, gibt die [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Klausel eine Fehlermeldung im Protokollbereich aus.

##### Bildschirmerfassung beenden

Die Methode `stopCapture()` wird aufgerufen, wenn auf die Schaltfläche „Stop Capture“ geklickt wird. Sie beendet den Stream, indem sie mit [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) dessen Trackliste abruft und für jeden Track die Methode [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop) aufruft. Anschließend wird `srcObject` auf `null` gesetzt, damit erkennbar ist, dass kein Stream mehr verbunden ist.

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### Konfigurationsinformationen ausgeben

Zu Informationszwecken ruft die oben gezeigte Methode `startCapture()` eine Methode namens `dumpOptions()` auf. Diese gibt die aktuellen Trackeinstellungen und die Einschränkungen aus, die bei der Erstellung des Streams festgelegt wurden.

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.log("Track settings:");
  console.log(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.log("Track constraints:");
  console.log(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

Die Trackliste wird abgerufen, indem [`getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) für den [`MediaStream`](/de/docs/Web/API/MediaStream) des erfassten Bildschirms aufgerufen wird. Die aktuell wirksamen Einstellungen werden mit [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) und die festgelegten Einschränkungen mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) abgerufen.

#### HTML

Der HTML-Code beginnt mit einem einleitenden Absatz, bevor die wesentlichen Elemente folgen.

```html
<p>
  This example shows you the contents of the selected part of your display.
  Click the Start Capture button to begin.
</p>

<p>
  <button id="start">Start Capture</button>&nbsp;<button id="stop">
    Stop Capture
  </button>
</p>

<video id="video" autoplay></video>
<br />

<strong>Log:</strong>
<br />
<pre id="log"></pre>
```

Die wichtigsten Bestandteile des HTML-Codes sind:

1. Ein {{HTMLElement("button")}} mit der Beschriftung „Start Capture“, der beim Anklicken die Funktion `startCapture()` aufruft, um Zugriff auf Bildschirminhalte anzufordern und deren Erfassung zu starten.
2. Eine zweite Schaltfläche mit der Beschriftung „Stop Capture“, die beim Anklicken `stopCapture()` aufruft, um die Erfassung zu beenden.
3. Ein {{HTMLElement("video")}}-Element, in das die erfassten Bildschirminhalte gestreamt werden.
4. Ein {{HTMLElement("pre")}}-Block, in den die überschriebene [`console`](/de/docs/Web/API/console)-Methode protokollierten Text schreibt.

#### CSS

Das CSS dient in diesem Beispiel ausschließlich der Gestaltung. Das Video erhält einen Rahmen und seine Breite wird so festgelegt, dass es fast den gesamten verfügbaren horizontalen Platz einnimmt (`width: 98%`). {{cssxref("max-width")}} wird auf `860px` gesetzt, um eine absolute Obergrenze für die Größe des Videos festzulegen.

```css
#video {
  border: 1px solid #999999;
  width: 98%;
  max-width: 860px;
}

#log {
  width: 25rem;
  height: 15rem;
  border: 1px solid black;
  padding: 0.5rem;
  overflow: scroll;
}
```

#### Ergebnis

Das Ergebnis sieht folgendermaßen aus. Wenn Ihr Browser die Screen Capture API unterstützt, öffnet ein Klick auf „Start Capture“ die Oberfläche des {{Glossary("user_agent", "User Agents")}}, auf der Sie einen Bildschirm, ein Fenster oder ein Tab zur Freigabe auswählen können.

{{EmbedLiveSample("Streaming screen capture", 640, 800, "", "", "", "display-capture")}}

## Sicherheit

Damit die API bei aktivierter [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) funktioniert, benötigen Sie die Berechtigung `display-capture`. Sie können diese über den {{Glossary("HTTP", "HTTP")}}-Header {{HTTPHeader("Permissions-Policy")}} erteilen oder – wenn Sie die Screen Capture API in einem {{HTMLElement("iframe")}} verwenden – über das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) des `<iframe>`-Elements.

Beispielsweise aktiviert die folgende Zeile in den HTTP-Headern die Screen Capture API für das Dokument und alle eingebetteten {{HTMLElement("iframe")}}-Elemente, die vom selben Ursprung geladen werden:

```http
Permissions-Policy: display-capture=(self)
```

Wenn Sie die Bildschirmerfassung innerhalb eines `<iframe>` durchführen, können Sie die Berechtigung nur für diesen Frame anfordern. Das ist deutlich sicherer, als sie allgemeiner anzufordern:

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Standbilder mit WebRTC aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)
- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream), um einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem aktuellen Inhalt eines {{HTMLElement("canvas")}} zu erhalten
