---
title: Verwendung der Screen Capture API
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{DefaultAPISidebar("Screen Capture API")}}

In diesem Artikel erfahren Sie, wie Sie mit der Screen Capture API und ihrer Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) einen Teil des Bildschirms oder den gesamten Bildschirm erfassen können, um ihn während einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Konferenz zu streamen, aufzuzeichnen oder zu teilen.

> [!NOTE]
> Neuere Versionen des [WebRTC-adapter.js-Shims](https://github.com/webrtcHacks/adapter) enthalten Implementierungen von `getDisplayMedia()`. Damit lässt sich die Bildschirmfreigabe in Browsern nutzen, die sie unterstützen, aber die aktuelle Standard-API nicht implementieren. Dies funktioniert zumindest mit Chrome, Edge und Firefox.

## Bildschirminhalte erfassen

Um Bildschirminhalte als Live-[`MediaStream`](/de/docs/Web/API/MediaStream) zu erfassen, rufen Sie [`navigator.mediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) auf. Die Methode gibt ein Promise zurück, das zu einem Stream mit den Live-Bildschirminhalten aufgelöst wird. Das in den folgenden Beispielen verwendete Objekt `displayMediaOptions` könnte etwa so aussehen:

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

Sie können diesen Code entweder wie oben gezeigt mit einer asynchronen Funktion und dem Operator [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) schreiben oder {{jsxref("Promise")}} direkt verwenden, wie im folgenden Beispiel.

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

In beiden Fällen zeigt der {{Glossary("user_agent", "User Agent")}} eine Benutzeroberfläche an, auf der die Person den freizugebenden Bildschirmbereich auswählt. Beide Implementierungen von `startCapture()` geben den [`MediaStream`](/de/docs/Web/API/MediaStream) mit den erfassten Bildschirminhalten zurück.

Weitere Informationen dazu, wie Sie die gewünschte Art der Anzeigefläche festlegen und den resultierenden Stream anpassen, finden Sie unten unter [Optionen und Constraints](#optionen_und_constraints).

### Beispiel eines Fensters zur Auswahl einer Anzeigefläche für die Aufnahme

![Screenshot des Chrome-Fensters zur Auswahl einer Quellfläche](chrome-screen-capture-window.png)

Den erfassten Stream `captureStream` können Sie anschließend überall dort verwenden, wo ein Stream als Eingabe akzeptiert wird. Die folgenden [Beispiele](#beispiele) zeigen einige Verwendungsmöglichkeiten.

### Sichtbare und logische Anzeigeflächen

Im Sinne der Screen Capture API ist eine **Anzeigefläche** jedes Inhaltsobjekt, das über die API zur Freigabe ausgewählt werden kann. Dazu gehören der Inhalt eines Browser-Tabs, ein vollständiges Fenster und ein Monitor (oder mehrere zu einer Fläche zusammengefasste Monitore).

Es gibt zwei Arten von Anzeigeflächen. Eine **sichtbare Anzeigefläche** ist vollständig auf dem Bildschirm zu sehen, beispielsweise das vorderste Fenster oder der vorderste Tab oder der gesamte Bildschirm.

Eine **logische Anzeigefläche** ist teilweise oder vollständig verdeckt: Sie wird beispielsweise von einem anderen Objekt überlagert oder ist ganz ausgeblendet beziehungsweise außerhalb des sichtbaren Bildschirmbereichs. Wie die Screen Capture API damit umgeht, ist unterschiedlich. Im Allgemeinen stellt der Browser ein Bild bereit, das den nicht sichtbaren Teil der logischen Anzeigefläche auf irgendeine Weise unkenntlich macht, etwa durch Weichzeichnen oder durch Ersetzen mit einer Farbe oder einem Muster. Dies dient der Sicherheit, da die für die Person nicht sichtbaren Inhalte Daten enthalten könnten, die sie nicht teilen möchte.

Ein User Agent kann die Erfassung des gesamten Inhalts eines verdeckten Fensters zulassen, nachdem die Person dafür ihre Zustimmung gegeben hat. In diesem Fall kann der User Agent die verdeckten Inhalte einbeziehen: entweder indem er den aktuellen Inhalt des ausgeblendeten Fensterbereichs erfasst oder, falls dieser nicht verfügbar ist, den zuletzt sichtbaren Inhalt zeigt.

### Optionen und Constraints

Das an [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergebene Optionsobjekt legt Optionen für den resultierenden Stream fest.

Die Objekte `video` und `audio` innerhalb des Optionsobjekts können außerdem zusätzliche Constraints für die jeweiligen Medientracks enthalten. Unter [Eigenschaften freigegebener Bildschirmtracks](/de/docs/Web/API/MediaTrackConstraints#instance_properties_of_shared_screen_tracks) finden Sie Einzelheiten zu den zusätzlichen Constraints für die Konfiguration eines Bildschirmaufnahme-Streams, die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) hinzugefügt werden, zu den von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegebenen unterstützten Constraints und zu den aktuellen Einstellungen, die [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgibt.

Die Constraints werden erst angewendet, nachdem der zu erfassende Inhalt ausgewählt wurde. Sie verändern, was im resultierenden Stream zu sehen ist. Wenn Sie beispielsweise für das Video einen [`width`](/de/docs/Web/API/MediaTrackConstraints/width)-Constraint angeben, wird das Video skaliert, nachdem die Person den freizugebenden Bereich ausgewählt hat. Dadurch wird die Größe der Quelle selbst nicht eingeschränkt.

> [!NOTE]
> Constraints verändern _niemals_ die Liste der Quellen, die über die Screen Sharing API für die Aufnahme zur Verfügung stehen. So wird verhindert, dass Webanwendungen eine Person zur Freigabe bestimmter Inhalte zwingen, indem sie die Quellenliste auf einen einzigen Eintrag beschränken.

Während eine Bildschirmaufnahme läuft, zeigt das Gerät, dessen Bildschirminhalte geteilt werden, einen Hinweis an, damit die Person erkennt, dass eine Freigabe stattfindet.

> [!NOTE]
> Aus Datenschutz- und Sicherheitsgründen lassen sich Quellen für die Bildschirmfreigabe nicht mit [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) auflisten. Ebenso wird das Ereignis [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) nie ausgelöst, wenn sich die für `getDisplayMedia()` verfügbaren Quellen ändern.

### Freigegebenes Audio erfassen

[`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) wird meist verwendet, um ein Video des Bildschirms einer Person oder eines Teils davon aufzunehmen. {{Glossary("user_agent", "User Agents")}} können jedoch auch die Aufnahme von Audio zusammen mit dem Videoinhalt ermöglichen. Als Audioquelle kommen das ausgewählte Fenster, das gesamte Audiosystem des Computers oder das Mikrofon der Person infrage – auch in Kombination.

Wenn Ihr Projekt die Freigabe von Audio erfordert, prüfen Sie vorab die [Browser-Kompatibilität](/de/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility) von `getDisplayMedia()`. So können Sie feststellen, ob die Browser, die Sie unterstützen möchten, Audio in Bildschirmaufnahme-Streams unterstützen.

Um eine Bildschirmfreigabe einschließlich Audio anzufordern, könnten die an `getDisplayMedia()` übergebenen Optionen so aussehen:

```js
const displayMediaOptions = {
  video: true,
  audio: true,
};
```

Damit kann die Person innerhalb der vom User Agent unterstützten Möglichkeiten frei auswählen, was sie teilen möchte. Durch zusätzliche Optionen und Constraints in den Objekten `audio` und `video` lässt sich dies weiter präzisieren:

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

In diesem Beispiel soll das gesamte Fenster als Anzeigefläche erfasst werden. Für den Audiotrack sollten nach Möglichkeit Rauschunterdrückung und Echounterdrückung aktiviert sein. Außerdem sind eine Audio-Abtastrate von idealerweise 44,1 kHz und die Unterdrückung der lokalen Audiowiedergabe vorgesehen.

Zusätzlich signalisiert die Anwendung dem User Agent, dass er:

- während der Bildschirmfreigabe ein Steuerelement bereitstellen soll, mit dem die Person den freigegebenen Tab dynamisch wechseln kann;
- den aktuellen Tab aus der Liste der Auswahlmöglichkeiten ausblenden soll, die bei der Aufnahmeanfrage angezeigt wird;
- das Systemaudio nicht unter den angebotenen Audioquellen aufführen soll.

Die Audioaufnahme ist immer optional. Selbst wenn Webinhalte einen Stream mit Audio und Video anfordern, kann der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) nur einen Videotrack und keinen Audiotrack enthalten.

## Den erfassten Stream verwenden

Das von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zurückgegebene {{jsxref("Promise")}} wird zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst. Dieser enthält mindestens einen Videostream mit dem Bildschirm oder Bildschirmbereich. Der Stream wird entsprechend den beim Aufruf von `getDisplayMedia()` angegebenen Constraints angepasst oder gefiltert.

### Mögliche Risiken

Datenschutz- und Sicherheitsprobleme bei der Bildschirmfreigabe sind in der Regel nicht besonders schwerwiegend, kommen aber vor. Das größte potenzielle Problem besteht darin, dass Personen versehentlich Inhalte teilen, die sie nicht teilen wollten.

Datenschutz- oder Sicherheitsverletzungen können beispielsweise leicht auftreten, wenn eine Person ihren Bildschirm teilt und ein sichtbares Fenster im Hintergrund persönliche Informationen enthält oder ihr Passwortmanager im freigegebenen Stream zu sehen ist. Bei der Erfassung logischer Anzeigeflächen kann dieses Problem noch verstärkt werden: Diese können Inhalte enthalten, von denen die Person nicht einmal weiß, geschweige denn, dass sie sie sehen kann.

User Agents, die den Datenschutz ernst nehmen, sollten Inhalte, die auf dem Bildschirm nicht tatsächlich sichtbar sind, unkenntlich machen – es sei denn, die Freigabe genau dieser Inhalte wurde ausdrücklich genehmigt.

### Freigabe von Bildschirminhalten genehmigen

Bevor die Übertragung erfasster Bildschirminhalte beginnen kann, fordert der {{Glossary("user_agent", "User Agent")}} die Person auf, die Freigabeanfrage zu bestätigen und die freizugebenden Inhalte auszuwählen.

## Beispiele

### Bildschirmaufnahme streamen

In diesem Beispiel wird der Inhalt des erfassten Bildschirmbereichs in ein {{HTMLElement("video")}}-Element auf derselben Seite gestreamt.

#### HTML

Der HTML-Code beginnt mit einem einleitenden Absatz, gefolgt von den wesentlichen Elementen.

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

1. Ein {{HTMLElement("button")}} mit der Beschriftung „Start Capture“, der beim Anklicken die Funktion `startCapture()` aufruft, um Zugriff auf Bildschirminhalte anzufordern und deren Aufnahme zu starten.
2. Ein zweiter Button mit der Beschriftung „Stop Capture“, der beim Anklicken `stopCapture()` aufruft und die Aufnahme der Bildschirminhalte beendet.
3. Ein {{HTMLElement("video")}}-Element, in das die erfassten Bildschirminhalte gestreamt werden.
4. Ein {{HTMLElement("pre")}}-Block, in den die abgefangene [`console`](/de/docs/Web/API/console)-Methode protokollierten Text schreibt.

#### CSS

Das CSS dient in diesem Beispiel ausschließlich der Darstellung. Das Video erhält einen Rahmen, und seine Breite wird so festgelegt, dass es fast den gesamten verfügbaren horizontalen Platz einnimmt (`width: 98%`). {{cssxref("max-width")}} wird auf `860px` gesetzt, um die Größe des Videos nach oben zu begrenzen.

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

#### JavaScript

Damit das Beispiel funktioniert, ist nicht viel Code nötig. Wenn Sie bereits [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet haben, um Videos von einer Kamera aufzunehmen, wird Ihnen [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) vertraut vorkommen.

##### Einrichtung

Zunächst werden einige Konstanten eingerichtet, die auf die benötigten Seitenelemente verweisen: das {{HTMLElement("video")}}-Element, in das die erfassten Bildschirminhalte gestreamt werden, ein Ausgabefeld für Protokollmeldungen sowie die Buttons zum Starten und Beenden der Bildschirmaufnahme.

Das Objekt `displayMediaOptions` enthält die Optionen, die an `getDisplayMedia()` übergeben werden. Hier ist die Eigenschaft [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) auf `window` gesetzt. Das gibt an, dass das gesamte Fenster erfasst werden soll.

Abschließend werden Event-Listener eingerichtet, die Klicks auf die Start- und Stopp-Buttons erkennen.

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

##### Meldungen protokollieren

Dieses Beispiel überschreibt bestimmte Methoden von [`console`](/de/docs/Web/API/console), sodass deren Meldungen im {{HTMLElement("pre")}}-Block mit der ID `log` ausgegeben werden.

```js
console.log = (msg) => (logElem.textContent = `${logElem.textContent}\n${msg}`);
console.error = (msg) =>
  (logElem.textContent = `${logElem.textContent}\nError: ${msg}`);
```

So können wir mit [`console.log()`](/de/docs/Web/API/console/log_static) und [`console.error()`](/de/docs/Web/API/console/error_static) Informationen im Protokollfeld des Dokuments ausgeben.

##### Bildschirmaufnahme starten

Die folgende Methode `startCapture()` startet die Erfassung eines [`MediaStream`](/de/docs/Web/API/MediaStream), dessen Inhalt aus einem von der Person ausgewählten Bildschirmbereich stammt. `startCapture()` wird aufgerufen, wenn der Button „Start Capture“ angeklickt wird.

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

Nachdem der Inhalt des Protokollfelds gelöscht wurde, um Text von einem vorherigen Verbindungsversuch zu entfernen, ruft `startCapture()` [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) auf und übergibt dabei das durch `displayMediaOptions` definierte Constraints-Objekt. Durch {{jsxref("Operators/await", "await")}} wird die nächste Codezeile erst ausgeführt, wenn das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} aufgelöst wurde. Das Promise liefert dann einen [`MediaStream`](/de/docs/Web/API/MediaStream), der den Inhalt des von der Person ausgewählten Bildschirms, Fensters oder anderen Bereichs streamt.

Der Stream wird mit dem {{HTMLElement("video")}}-Element verbunden, indem der zurückgegebene `MediaStream` in dessen Eigenschaft [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) gespeichert wird.

Die Funktion `dumpOptionsInfo()` – die wir uns gleich ansehen – gibt zu Anschauungszwecken Informationen über den Stream im Protokollfeld aus.

Falls dabei ein Fehler auftritt, gibt die [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Klausel eine Fehlermeldung im Protokollfeld aus.

##### Bildschirmaufnahme beenden

Die Methode `stopCapture()` wird aufgerufen, wenn der Button „Stop Capture“ angeklickt wird. Sie beendet den Stream, indem sie mit [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) dessen Track-Liste abruft und anschließend für jeden Track die Methode [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop) aufruft. Danach wird `srcObject` auf `null` gesetzt, damit erkennbar ist, dass kein Stream mehr verbunden ist.

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### Konfigurationsinformationen ausgeben

Zu Informationszwecken ruft die oben gezeigte Methode `startCapture()` eine Methode namens `dumpOptions()` auf. Sie gibt die aktuellen Track-Einstellungen sowie die Constraints aus, die beim Erstellen des Streams festgelegt wurden.

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.log("Track settings:");
  console.log(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.log("Track constraints:");
  console.log(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

Die Track-Liste wird abgerufen, indem [`getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) für den [`MediaStream`](/de/docs/Web/API/MediaStream) der Bildschirmaufnahme aufgerufen wird. Die aktuell geltenden Einstellungen werden mit [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) und die festgelegten Constraints mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) abgerufen.

#### Ergebnis

Das fertige Beispiel sieht so aus. Wenn Ihr Browser die Screen Capture API unterstützt, öffnet ein Klick auf „Start Capture“ die Benutzeroberfläche des {{Glossary("user_agent", "User Agents")}}, auf der Sie einen Bildschirm, ein Fenster oder einen Tab zur Freigabe auswählen können.

{{EmbedLiveSample("Streaming screen capture", 640, 800, "", "", "", "display-capture")}}

## Sicherheit

Damit die Bildschirmaufnahme bei aktivierter [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) funktioniert, benötigen Sie die Berechtigung `display-capture`. Diese können Sie über den {{Glossary("HTTP", "HTTP")}}-Header {{HTTPHeader("Permissions-Policy")}} erteilen oder – wenn Sie die Screen Capture API in einem {{HTMLElement("iframe")}} verwenden – über das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) des `<iframe>`-Elements.

Die folgende Zeile in den HTTP-Headern aktiviert beispielsweise die Screen Capture API für das Dokument und alle eingebetteten {{HTMLElement("iframe")}}-Elemente, die vom selben Origin geladen werden:

```http
Permissions-Policy: display-capture=(self)
```

Wenn Sie eine Bildschirmaufnahme innerhalb eines `<iframe>` durchführen, können Sie die Berechtigung nur für diesen Frame anfordern. Das ist deutlich sicherer, als die Berechtigung allgemeiner zu erteilen:

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Standbilder mit WebRTC aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)
- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream), um einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem Live-Inhalt eines {{HTMLElement("canvas")}} zu erhalten
