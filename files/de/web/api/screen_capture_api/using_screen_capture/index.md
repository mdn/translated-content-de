---
title: Die Screen Capture API verwenden
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{DefaultAPISidebar("Screen Capture API")}}

In diesem Artikel erfahren Sie, wie Sie mit der Screen Capture API und ihrer Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) einen Teil des Bildschirms oder den gesamten Bildschirm erfassen können, um ihn während einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Konferenz zu streamen, aufzuzeichnen oder zu teilen.

> [!NOTE]
> Neuere Versionen des [WebRTC adapter.js shim](https://github.com/webrtcHacks/adapter) enthalten Implementierungen von `getDisplayMedia()`. Damit lässt sich die Bildschirmfreigabe in Browsern nutzen, die sie unterstützen, aber die aktuelle Standard-API nicht implementieren. Dies funktioniert mindestens mit Chrome, Edge und Firefox.

## Bildschirminhalte erfassen

Um Bildschirminhalte als Live-[`MediaStream`](/de/docs/Web/API/MediaStream) zu erfassen, rufen Sie [`navigator.mediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) auf. Die Methode gibt ein Promise zurück, das mit einem Stream der aktuellen Bildschirminhalte erfüllt wird. Das in den folgenden Beispielen verwendete Objekt `displayMediaOptions` könnte so aussehen:

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

### Bildschirmaufnahme starten: mit `async`/`await`

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

Sie können diesen Code entweder mit einer asynchronen Funktion und dem Operator [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) schreiben, wie oben gezeigt, oder {{jsxref("Promise")}} direkt verwenden, wie im folgenden Beispiel.

### Bildschirmaufnahme starten: mit `Promise`

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

Unter [Optionen und Constraints](#optionen_und_constraints) erfahren Sie mehr darüber, wie Sie die gewünschte Art der Anzeigefläche angeben und den resultierenden Stream anpassen können.

### Beispiel eines Fensters zur Auswahl einer Anzeigefläche

![Screenshot des Chrome-Fensters zur Auswahl einer Quellfläche](chrome-screen-capture-window.png)

Den erfassten Stream `captureStream` können Sie anschließend überall dort verwenden, wo ein Stream als Eingabe akzeptiert wird. Die folgenden [Beispiele](#beispiele) zeigen einige Verwendungsmöglichkeiten.

### Sichtbare und logische Anzeigeflächen

Im Sinne der Screen Capture API ist eine **Anzeigefläche** jedes Inhaltsobjekt, das über die API zur Freigabe ausgewählt werden kann. Dazu gehören der Inhalt eines Browser-Tabs, ein vollständiges Fenster sowie ein Monitor oder mehrere zu einer Fläche zusammengefasste Monitore.

Es gibt zwei Arten von Anzeigeflächen. Eine **sichtbare Anzeigefläche** ist vollständig auf dem Bildschirm zu sehen, beispielsweise das vorderste Fenster oder Tab oder der gesamte Bildschirm.

Eine **logische Anzeigefläche** ist teilweise oder vollständig verdeckt: Sie wird von einem anderen Objekt überlagert oder ist ganz ausgeblendet beziehungsweise befindet sich außerhalb des sichtbaren Bildschirmbereichs. Wie die Screen Capture API damit umgeht, ist unterschiedlich. In der Regel stellt der Browser ein Bild bereit, in dem der verborgene Teil der logischen Anzeigefläche unkenntlich gemacht wird, etwa durch Unschärfe oder indem er durch eine Farbe oder ein Muster ersetzt wird. Dies dient der Sicherheit, da für die Person nicht sichtbare Inhalte Daten enthalten können, die sie nicht teilen möchte.

Ein User Agent kann die Erfassung des gesamten Inhalts eines verdeckten Fensters ermöglichen, nachdem die Person dies erlaubt hat. In diesem Fall kann er den verdeckten Inhalt einbeziehen, indem er entweder den aktuellen Inhalt des verborgenen Fensterbereichs erfasst oder, falls dieser nicht verfügbar ist, den zuletzt sichtbaren Inhalt wiedergibt.

### Optionen und Constraints

Mit dem an [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergebenen Optionsobjekt legen Sie Optionen für den resultierenden Stream fest.

Die Objekte `video` und `audio` innerhalb des Optionsobjekts können zusätzliche Constraints für die jeweiligen Medientracks enthalten. Unter [Eigenschaften freigegebener Bildschirmtracks](/de/docs/Web/API/MediaTrackConstraints#instance_properties_of_shared_screen_tracks) finden Sie Einzelheiten zu zusätzlichen Constraints für die Konfiguration eines Bildschirmaufnahmestreams, die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) hinzugefügt werden, zu den von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegebenen unterstützten Constraints und zu den von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgegebenen aktuellen Einstellungen.

Constraints werden erst angewendet, nachdem der zu erfassende Inhalt ausgewählt wurde. Sie verändern das Bild im resultierenden Stream. Wenn Sie beispielsweise einen [`width`](/de/docs/Web/API/MediaTrackConstraints/width)-Constraint für das Video angeben, wird das Video skaliert, nachdem die Person den freizugebenden Bereich ausgewählt hat. Dadurch wird die Größe der Quelle selbst nicht eingeschränkt.

> [!NOTE]
> Constraints verändern _niemals_ die Liste der Quellen, die über die Screen Capture API erfasst werden können. So wird verhindert, dass Webanwendungen eine Person zur Freigabe bestimmter Inhalte drängen, indem sie die Quellenliste auf einen einzigen Eintrag einschränken.

Während eine Bildschirmaufnahme läuft, zeigt das Gerät, das die Bildschirminhalte teilt, einen Hinweis an. So ist erkennbar, dass eine Freigabe stattfindet.

> [!NOTE]
> Aus Datenschutz- und Sicherheitsgründen lassen sich Quellen für die Bildschirmfreigabe nicht mit [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) auflisten. Entsprechend wird das Ereignis [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) nie ausgelöst, wenn sich die für `getDisplayMedia()` verfügbaren Quellen ändern.

### Geteiltes Audio erfassen

[`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) wird meist verwendet, um ein Video des Bildschirms oder eines Teils davon aufzunehmen. {{Glossary("user_agent", "User Agents")}} können jedoch auch die Erfassung von Audio zusammen mit dem Videoinhalt erlauben. Als Audioquelle kommen das ausgewählte Fenster, das gesamte Audiosystem des Computers oder das Mikrofon der Person infrage – auch in Kombination.

Wenn Ihr Projekt die Freigabe von Audio erfordert, prüfen Sie zunächst die [Browser-Kompatibilität](/de/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility) von `getDisplayMedia()`. So können Sie feststellen, ob die gewünschten Browser Audio in erfassten Bildschirmstreams unterstützen.

Um eine Bildschirmfreigabe einschließlich Audio anzufordern, könnten Sie `getDisplayMedia()` die folgenden Optionen übergeben:

```js
const displayMediaOptions = {
  video: true,
  audio: true,
};
```

Damit kann die Person innerhalb der vom User Agent unterstützten Möglichkeiten frei auswählen, was sie teilen möchte. Sie können die Anforderung durch zusätzliche Optionen und Constraints in den Objekten `audio` und `video` weiter eingrenzen:

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

In diesem Beispiel soll das gesamte Fenster als Anzeigefläche erfasst werden. Für den Audiotrack sollen möglichst Rauschunterdrückung und Echounterdrückung aktiviert sein. Außerdem werden eine bevorzugte Audio-Abtastrate von 44,1 kHz und die Unterdrückung der lokalen Audiowiedergabe angegeben.

Darüber hinaus signalisiert die Anwendung dem User Agent, dass er:

- während der Bildschirmfreigabe ein Bedienelement bereitstellen soll, mit dem die Person den geteilten Tab wechseln kann;
- den aktuellen Tab aus den Auswahlmöglichkeiten ausblenden soll, die bei der Anforderung der Aufnahme angezeigt werden;
- Systemaudio nicht unter den angebotenen Audioquellen aufführen soll.

Die Erfassung von Audio ist immer optional. Selbst wenn Webinhalte einen Stream mit Audio und Video anfordern, kann der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) nur einen Videotrack und keinen Audiotrack enthalten.

## Den erfassten Stream verwenden

Das von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zurückgegebene {{jsxref("Promise")}} wird mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) erfüllt. Dieser enthält mindestens einen Videostream mit dem Bildschirm oder Bildschirmbereich, dessen Bild anhand der beim Aufruf von `getDisplayMedia()` angegebenen Constraints angepasst oder gefiltert wird.

### Mögliche Risiken

Datenschutz- und Sicherheitsprobleme bei der Bildschirmfreigabe sind meist nicht besonders schwerwiegend, können aber auftreten. Das größte Risiko besteht darin, dass Personen unbeabsichtigt Inhalte teilen, die sie nicht freigeben wollten.

Beispielsweise kann es leicht zu Datenschutz- oder Sicherheitsverletzungen kommen, wenn eine Person ihren Bildschirm teilt und ein sichtbares Fenster im Hintergrund persönliche Informationen enthält oder ihr Passwortmanager im geteilten Stream zu sehen ist. Bei der Erfassung logischer Anzeigeflächen kann sich dieses Risiko erhöhen: Sie können Inhalte enthalten, die der Person nicht einmal bekannt sind, geschweige denn für sie sichtbar.

User Agents, die den Datenschutz ernst nehmen, sollten Inhalte unkenntlich machen, die auf dem Bildschirm nicht tatsächlich sichtbar sind – es sei denn, die Freigabe genau dieser Inhalte wurde ausdrücklich erlaubt.

### Erfassung von Bildschirminhalten autorisieren

Bevor die Übertragung erfasster Bildschirminhalte beginnen kann, fordert der {{Glossary("user_agent", "User Agent")}} die Person auf, die Freigabeanfrage zu bestätigen und den freizugebenden Inhalt auszuwählen.

## Beispiele

### Bildschirmaufnahme streamen

In diesem Beispiel wird der Inhalt des erfassten Bildschirmbereichs in ein {{HTMLElement("video")}}-Element auf derselben Seite gestreamt.

#### JavaScript

Dafür ist nicht viel Code erforderlich. Wenn Sie bereits [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet haben, um ein Kameravideo zu erfassen, wird Ihnen [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) vertraut vorkommen.

##### Einrichtung

Zunächst werden Konstanten angelegt, die auf die benötigten Seitenelemente verweisen: das {{HTMLElement("video")}}-Element, in das die erfassten Bildschirminhalte gestreamt werden, einen Bereich für Protokollausgaben sowie die Schaltflächen zum Starten und Beenden der Bildschirmaufnahme.

Das Objekt `displayMediaOptions` enthält die Optionen, die an `getDisplayMedia()` übergeben werden. Hier ist die Eigenschaft [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) auf `window` gesetzt. Damit wird angegeben, dass das gesamte Fenster erfasst werden soll.

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

Dieses Beispiel überschreibt bestimmte Methoden von [`console`](/de/docs/Web/API/console), um ihre Meldungen im {{HTMLElement("pre")}}-Block mit der ID `log` auszugeben.

```js
console.log = (msg) => (logElem.textContent = `${logElem.textContent}\n${msg}`);
console.error = (msg) =>
  (logElem.textContent = `${logElem.textContent}\nError: ${msg}`);
```

Dadurch können wir mit [`console.log()`](/de/docs/Web/API/console/log_static) und [`console.error()`](/de/docs/Web/API/console/error_static) Informationen im Protokollbereich des Dokuments ausgeben.

##### Bildschirmaufnahme starten

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

Zunächst wird der Protokollbereich geleert, um Text eines vorherigen Verbindungsversuchs zu entfernen. Anschließend ruft `startCapture()` [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) auf und übergibt dabei das durch `displayMediaOptions` definierte Constraints-Objekt. Durch {{jsxref("Operators/await", "await")}} wird die nächste Codezeile erst ausgeführt, wenn das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} erfüllt wurde. Das Promise liefert dann einen [`MediaStream`](/de/docs/Web/API/MediaStream), der den Inhalt des von der Person ausgewählten Bildschirms, Fensters oder eines anderen Bereichs streamt.

Der Stream wird mit dem {{HTMLElement("video")}}-Element verbunden, indem der zurückgegebene `MediaStream` in dessen Eigenschaft [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) gespeichert wird.

Die Funktion `dumpOptionsInfo()`, die wir gleich näher betrachten, gibt zu Demonstrationszwecken Informationen über den Stream im Protokollbereich aus.

Falls dabei ein Fehler auftritt, gibt der [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block eine Fehlermeldung im Protokollbereich aus.

##### Bildschirmaufnahme beenden

Die Methode `stopCapture()` wird aufgerufen, wenn auf die Schaltfläche „Stop Capture“ geklickt wird. Sie ruft mit [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) die Trackliste des Streams ab und beendet jeden Track mit dessen Methode [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop). Danach wird `srcObject` auf `null` gesetzt, damit erkennbar ist, dass kein Stream mehr verbunden ist.

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### Konfigurationsinformationen ausgeben

Zu Informationszwecken ruft die oben gezeigte Methode `startCapture()` eine Methode namens `dumpOptions()` auf. Diese gibt sowohl die aktuellen Trackeinstellungen als auch die Constraints aus, die beim Erstellen des Streams festgelegt wurden.

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.log("Track settings:");
  console.log(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.log("Track constraints:");
  console.log(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

Die Trackliste wird abgerufen, indem [`getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) für den [`MediaStream`](/de/docs/Web/API/MediaStream) der Bildschirmaufnahme aufgerufen wird. Die aktuell geltenden Einstellungen werden mit [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abgerufen, die festgelegten Constraints mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints).

#### HTML

Das HTML beginnt mit einem einleitenden Absatz. Danach folgen die wesentlichen Elemente.

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

Die wichtigsten Bestandteile des HTML sind:

1. Ein {{HTMLElement("button")}} mit der Beschriftung „Start Capture“. Bei einem Klick ruft er die Funktion `startCapture()` auf, um Zugriff auf Bildschirminhalte anzufordern und deren Erfassung zu starten.
2. Eine zweite Schaltfläche mit der Beschriftung „Stop Capture“. Bei einem Klick ruft sie `stopCapture()` auf, um die Erfassung zu beenden.
3. Ein {{HTMLElement("video")}}-Element, in das die erfassten Bildschirminhalte gestreamt werden.
4. Ein {{HTMLElement("pre")}}-Block, in den die abgefangene [`console`](/de/docs/Web/API/console)-Methode Protokolltext schreibt.

#### CSS

Das CSS dient in diesem Beispiel ausschließlich der Darstellung. Das Video erhält einen Rahmen und eine Breite, die nahezu den gesamten verfügbaren horizontalen Platz einnimmt (`width: 98%`). Mit {{cssxref("max-width")}} wird bei `860px` eine absolute Obergrenze für die Videobreite festgelegt.

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

So sieht das fertige Beispiel aus. Wenn Ihr Browser die Screen Capture API unterstützt, öffnet ein Klick auf „Start Capture“ die Benutzeroberfläche des {{Glossary("user_agent", "User Agents")}}, in der Sie einen Bildschirm, ein Fenster oder ein Tab zur Freigabe auswählen können.

{{EmbedLiveSample("Streaming screen capture", 640, 800, "", "", "", "display-capture")}}

## Sicherheit

Damit die API bei aktivierter [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) funktioniert, benötigen Sie die Berechtigung `display-capture`. Diese können Sie über den {{Glossary("HTTP", "HTTP")}}-Header {{HTTPHeader("Permissions-Policy")}} erteilen oder – wenn Sie die Screen Capture API in einem {{HTMLElement("iframe")}} verwenden – über das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) des `<iframe>`-Elements.

Die folgende Zeile in den HTTP-Headern aktiviert beispielsweise die Screen Capture API für das Dokument und alle eingebetteten {{HTMLElement("iframe")}}-Elemente, die vom selben Origin geladen werden:

```http
Permissions-Policy: display-capture=(self)
```

Wenn Sie eine Bildschirmaufnahme innerhalb eines `<iframe>` durchführen, können Sie die Berechtigung nur für diesen Frame anfordern. Das ist sicherer, als die Berechtigung allgemeiner zu erteilen:

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Standbilder mit WebRTC aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)
- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream), um einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem aktuellen Inhalt eines {{HTMLElement("canvas")}}-Elements zu erhalten
