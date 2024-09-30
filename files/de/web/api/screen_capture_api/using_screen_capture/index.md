---
title: Verwendung der Screen Capture API
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Screen Capture API")}}

In diesem Artikel untersuchen wir, wie die Screen Capture API und ihre Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwendet werden können, um einen Teil oder den gesamten Bildschirm für Streaming, Aufzeichnungen oder Freigaben während einer [WebRTC](/de/docs/Web/API/WebRTC_API) Konferenzsitzung zu erfassen.

> [!NOTE]
> Es kann hilfreich sein zu wissen, dass neuere Versionen des [WebRTC adapter.js shim](https://github.com/webrtcHacks/adapter) Implementierungen von `getDisplayMedia()` enthalten, um die Bildschirmfreigabe in Browsern zu ermöglichen, die diese unterstützen, aber die aktuelle Standard-API nicht implementieren. Dies funktioniert zumindest mit Chrome, Edge und Firefox.

## Erfassen von Bildschirm-Inhalten

Das Erfassen von Bildschirm-Inhalten als Live-[`MediaStream`](/de/docs/Web/API/MediaStream) wird durch Aufrufen von [`navigator.mediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) initiiert, was ein Promise zurückgibt, das zu einem Stream mit den Live-Bildschirminhalten aufgelöst wird. Das `displayMediaOptions` Objekt, auf das in den untenstehenden Beispielen verwiesen wird, könnte so aussehen:

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

### Starten der Bildschirmaufnahme: `async`/`await` Stil

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

Sie können diesen Code entweder mit einer asynchronen Funktion und dem [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) Operator, wie oben gezeigt, oder direkt mit dem {{jsxref("Promise")}}, wie unten zu sehen, schreiben.

### Starten der Bildschirmaufnahme: `Promise` Stil

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

In beiden Fällen antwortet der [User Agent](/de/docs/Glossary/user_agent) mit einer Benutzeroberfläche, die den Benutzer auffordert, den Bildschirmbereich zu wählen, der geteilt werden soll. Beide dieser Implementierungen von `startCapture()` geben den [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der die erfassten Bildschirmbilder enthält.

Siehe [Optionen und Einschränkungen](#optionen_und_einschränkungen) weiter unten für weitere Informationen darüber, wie Sie den gewünschten Anzeigetyp angeben und andere Möglichkeiten, den resultierenden Stream anzupassen.

### Beispiel für ein Fenster, das dem Benutzer ermöglicht, eine Anzeigefläche zur Erfassung auszuwählen

![Screenshot von Chromes Fenster zur Auswahl einer Quellfläche](chrome-screen-capture-window.png)

Sie können anschließend den erfassten Stream, `captureStream`, für alles verwenden, das einen Stream als Eingabe akzeptiert. Die [Beispiele](#beispiele) unten zeigen einige Möglichkeiten, den Stream zu nutzen.

### Sichtbare vs. logische Anzeigeflächen

Im Kontext der Screen Capture API ist eine **Anzeigefläche** jedes Inhaltsobjekt, das von der API für Freigabezwecke ausgewählt werden kann. Freigabeoberflächen umfassen den Inhalt eines Browser-Tabs, eines vollständigen Fensters und eines Monitors (oder einer Gruppe von Monitoren, die zu einer Oberfläche kombiniert sind).

Es gibt zwei Arten von Anzeigeflächen. Eine **sichtbare Anzeigefläche** ist eine Oberfläche, die vollständig auf dem Bildschirm sichtbar ist, wie z. B. das vorderste Fenster oder der Tab, oder der gesamte Bildschirm.

Eine **logische Anzeigefläche** ist eine, die teilweise oder vollständig verdeckt ist, entweder indem sie von einem anderen Objekt zu einem gewissen Grad überlagert wird oder vollständig versteckt oder außerhalb des Bildschirms ist. Wie diese von der Screen Capture API behandelt werden, variiert. In der Regel stellt der Browser ein Bild bereit, das den verborgenen Teil der logischen Anzeigefläche auf irgendeine Weise verschleiert, z. B. durch Verwischen oder Ersetzen durch eine Farbe oder ein Muster. Dies geschieht aus Sicherheitsgründen, da der Benutzer nicht sichtbare Inhalte möglicherweise Daten enthalten, die sie nicht teilen möchten.

Ein User Agent könnte die Erfassung des gesamten Inhalts eines verdeckten Fensters erlauben, nachdem er die Erlaubnis des Benutzers dafür erhalten hat. In diesem Fall kann der User Agent den verdeckten Inhalt einbeziehen, indem er entweder die aktuellen Inhalte des versteckten Teils des Fensters abruft oder die zuletzt sichtbaren Inhalte präsentiert, wenn die aktuellen Inhalte nicht verfügbar sind.

### Optionen und Einschränkungen

Das in [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergebene Optionsobjekt wird verwendet, um Optionen für den resultierenden Stream festzulegen.

Die in das Optionsobjekt übergebenen `video` und `audio` Objekte können auch zusätzliche Einschränkungen enthalten, die speziell für diese Medientracks gelten. Weitere Informationen zu zusätzlichen Einschränkungen zur Konfiguration eines Bildschirmerfassungsstreams, die zu [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints), [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints) und [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) hinzugefügt werden, finden Sie unter [Eigenschaften von freigegebenen Bildschirmtracks](/de/docs/Web/API/MediaTrackConstraints#instance_properties_of_shared_screen_tracks).

Keine der Einschränkungen werden auf irgendeine Weise angewendet, bis der zu erfassende Inhalt ausgewählt wurde. Die Einschränkungen ändern, was Sie im resultierenden Stream sehen. Wenn Sie beispielsweise eine [`width`](/de/docs/Web/API/MediaTrackConstraints/width)-Einschränkung für das Video angeben, wird sie angewendet, indem das Video skaliert wird, nachdem der Benutzer den zu teilenden Bereich ausgewählt hat. Es legt keine Einschränkung für die Größe der Quelle selbst fest.

> [!NOTE]
> Einschränkungen _beeinflussen niemals_ die Liste der vom Screen Sharing API verfügbaren Quellen. Dies stellt sicher, dass Webanwendungen den Benutzer nicht zwingen können, bestimmte Inhalte zu teilen, indem sie die Quellenliste einschränken, bis nur ein Element übrig bleibt.

Während die Bildschirmübertragung aktiv ist, zeigt die Maschine, die Bildschirm-Inhalte freigibt, irgendeine Form von Anzeige, damit der Benutzer weiß, dass die Freigabe stattfindet.

> [!NOTE]
> Aus Datenschutz- und Sicherheitsgründen sind Bildschirmfreigabequellen nicht über [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) auflistbar. In diesem Zusammenhang wird das [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) Ereignis nie gesendet, wenn es Änderungen an den für `getDisplayMedia()` verfügbaren Quellen gibt.

### Erfassen von freigegebenem Audio

[`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) wird am häufigsten verwendet, um Video vom Bildschirm eines Nutzers (oder Teilen davon) zu erfassen. [User Agents](/de/docs/Glossary/user_agent) können jedoch erlauben, das Audio zusammen mit dem Videoinhalt zu erfassen. Die Quelle dieses Audios könnte das ausgewählte Fenster, das gesamte Audiosystem des Computers oder das Mikrofon des Benutzers (oder eine Kombination aus all dem) sein.

Bevor Sie ein Projekt starten, das die Freigabe von Audio erfordert, überprüfen Sie unbedingt die [Browser-Kompatibilität](/de/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility) für `getDisplayMedia()`, um zu sehen, ob die von Ihnen gewünschten Browser die Unterstützung für Audio in erfassten Bildschirmstreams haben.

Um zu verlangen, dass der Bildschirm inklusive Audio freigegeben wird, könnten die an `getDisplayMedia()` übergebenen Optionen so aussehen:

```js
const displayMediaOptions = {
  video: true,
  audio: true,
};
```

Dies erlaubt dem Benutzer die volle Freiheit, auszuwählen, was er möchte, innerhalb der Grenzen dessen, was der User Agent unterstützt. Dies könnte weiter verfeinert werden, indem zusätzliche Optionen und Einschränkungen in den `audio` und `video` Objekten angegeben werden:

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

In diesem Beispiel sollte die erfasste Anzeigefläche das gesamte Fenster sein. Der Audiotrack sollte idealerweise über Funktionen zur Rauschunterdrückung und Echokompensation verfügen, sowie eine ideale Audio-Samplerate von 44,1 kHz und die Unterdrückung der lokalen Audiowiedergabe.

Darüber hinaus gibt die App dem User Agent Hinweise, dass sie:

- Eine Steuerung während der Bildschirmfreigabe bereitstellt, mit der der Benutzer den freigegebenen Tab dynamisch wechseln kann.
- Den aktuellen Tab aus der Liste der Optionen ausblendet, die dem Benutzer bei der Anforderung der Aufnahme präsentiert werden.
- Kein Systemaudio der Liste der möglichen Audioquellen, die dem Benutzer angeboten werden, hinzufügt.

Das Erfassen von Audio ist stets optional, und selbst wenn Webinhalte einen Stream mit sowohl Audio als auch Video anfordern, kann der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) dennoch nur einen Videotrack ohne Audio enthalten.

## Verwendung des erfassten Streams

Das von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zurückgegebene {{jsxref("promise")}} wird zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst, der mindestens einen Videostream enthält, der den Bildschirm oder Bildschirmbereich enthält und der basierend auf den spezifizierten Einschränkungen angepasst oder gefiltert wird, als `getDisplayMedia()` aufgerufen wurde.

### Potenzielle Risiken

Sicherheits- und Datenschutzprobleme im Zusammenhang mit der Bildschirmfreigabe sind in der Regel nicht allzu ernst, aber sie existieren. Das größte potenzielle Problem ist, dass Nutzer unbeabsichtigt Inhalte teilen, die sie nicht teilen wollten.

Zum Beispiel können Datenschutz- und/oder Sicherheitsverstöße leicht auftreten, wenn der Benutzer seinen Bildschirm teilt und ein sichtbares Hintergrundfenster zufällig persönliche Informationen enthält oder wenn sein Passwortmanager im freigegebenen Stream sichtbar ist. Dieser Effekt kann verstärkt werden, wenn logische Anzeigeflächen erfasst werden, die Inhalte enthalten können, die der Benutzer überhaupt nicht kennt, geschweige denn gesehen hat.

User Agents, die den Datenschutz ernst nehmen, sollten Inhalte verschleiern, die tatsächlich nicht auf dem Bildschirm sichtbar sind, es sei denn, es wurde die Autorisierung gegeben, diese Inhalte spezifisch zu teilen.

### Autorisierung der Erfassung von Anzeigeflächen-Inhalten

Bevor das Streaming der erfassten Bildschirm-Inhalte beginnen kann, bittet der [User Agent](/de/docs/Glossary/user_agent) den Nutzer, die Freigabeanforderung zu bestätigen und die Inhalte auszuwählen, die geteilt werden sollen.

## Beispiele

### Streaming einer Bildschirmaufnahme

In diesem Beispiel werden die Inhalte des erfassten Bildschirmbereichs in ein {{HTMLElement("video")}}-Element auf derselben Seite gestreamt.

#### JavaScript

Es benötigt nicht allzu viel Code, um dies zum Laufen zu bringen, und wenn Sie mit der Verwendung von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) vertraut sind, um Video von einer Kamera zu erfassen, werden Sie feststellen, dass [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) sehr ähnlich ist.

##### Einrichtung

Zuerst werden einige Konstanten eingerichtet, um auf die Elemente auf der Seite zuzugreifen, auf die wir zugreifen müssen: das {{HTMLElement("video")}}, in das die erfassten Bildschirminhalte gestreamt werden, ein Feld, in das protokollierte Ausgaben gezeichnet werden, und die Start- und Stop-Schaltflächen, die die Aufnahme von Bildschirmbildern ein- und ausschalten.

Das Objekt `displayMediaOptions` enthält die Optionen, die an `getDisplayMedia()` übergeben werden sollen; hier wird die [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) Eigenschaft auf `window` gesetzt, was angibt, dass das gesamte Fenster erfasst werden soll.

Schließlich werden Ereignislisten eingerichtet, um Benutzerklicks auf die Start- und Stop-Schaltflächen zu erkennen.

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
startElem.addEventListener(
  "click",
  (evt) => {
    startCapture();
  },
  false,
);

stopElem.addEventListener(
  "click",
  (evt) => {
    stopCapture();
  },
  false,
);
```

##### Protokollierung des Inhalts

In diesem Beispiel werden bestimmte [`console`](/de/docs/Web/API/Console) Methoden überschrieben, um ihre Nachrichten im {{HTMLElement("pre")}}-Block mit der ID `log` auszugeben.

```js
console.log = (msg) => (logElem.textContent = `${logElem.textContent}\n${msg}`);
console.error = (msg) =>
  (logElem.textContent = `${logElem.textContent}\nError: ${msg}`);
```

Dies ermöglicht uns die Verwendung von [`console.log()`](/de/docs/Web/API/Console/log_static) und [`console.error()`](/de/docs/Web/API/Console/error_static), um Informationen in das Protokollfeld im Dokument zu protokollieren.

##### Starten der Display-Aufnahme

Die Methode `startCapture()`, unten, startet die Aufnahme eines [`MediaStream`](/de/docs/Web/API/MediaStream), dessen Inhalte aus einem vom Benutzer ausgewählten Bildschirmbereich stammen. `startCapture()` wird aufgerufen, wenn die Schaltfläche "Start Capture" geklickt wird.

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

Nachdem der Inhalt des Protokolls gelöscht wurde, um eventuell übrig gebliebenen Text aus dem vorherigen Verbindungsversuch zu entfernen, ruft `startCapture()` [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) auf und übergibt das durch `displayMediaOptions` definierte Einschränkungsobjekt. Mit der Verwendung von {{jsxref("Operators/await", "await")}} wird die folgende Codezeile erst ausgeführt, nachdem das von `getDisplayMedia()` zurückgegebene {{jsxref("promise")}} aufgelöst ist. Nach der Auflösung gibt das Promise einen [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der den Inhalt des vom Benutzer ausgewählten Bildschirms, Fensters oder einer anderen Region streamt.

Der Stream wird mit dem {{HTMLElement("video")}}-Element verbunden, indem der zurückgegebene `MediaStream` in das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des Elements gespeichert wird.

Die `dumpOptionsInfo()` Funktion, die wir uns gleich ansehen werden, gibt Informationen über den Stream in das Protokollfeld aus, um zu Lehrzwecken zu dienen.

Wenn eines davon fehlschlägt, gibt die [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Klausel eine Fehlermeldung in das Protokollfeld aus.

##### Beenden der Display-Aufnahme

Die `stopCapture()` Methode wird aufgerufen, wenn die Schaltfläche "Stop Capture" geklickt wird. Sie stoppt den Stream, indem sie die Trackliste unter Verwendung von [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) erhält und dann die [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop) Methode jedes Tracks aufruft. Sobald das erledigt ist, wird `srcObject` auf `null` gesetzt, um sicherzustellen, dass jedem Interessierten klar ist, dass kein Stream verbunden ist.

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### Ausgeben von Konfigurationsinformationen

Zu Informationszwecken ruft die oben gezeigte Methode `startCapture()` eine Methode namens `dumpOptions()` auf, die die aktuellen Trackeinstellungen sowie die beim Erstellen des Streams festgelegten Einschränkungen ausgibt.

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.log("Track settings:");
  console.log(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.log("Track constraints:");
  console.log(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

Die Trackliste wird durch Aufruf von [`getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) auf dem erfassten Bildschirm-`MediaStream` erhalten. Die aktuell in Kraft befindlichen Einstellungen werden mit [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) und die festgelegten Einschränkungen mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) erhalten.

#### HTML

Das HTML beginnt mit einem einleitenden Absatz und geht dann in den Kern der Sache über.

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

Die wichtigsten Teile des HTML sind:

1. Ein {{HTMLElement("button")}}, beschriftet mit "Start Capture", der beim Klicken die `startCapture()` Funktion aufruft, um Zugriff auf die Bildschirm-Inhalte zu verlangen und diese zu erfassen.
2. Ein zweiter Button, "Stop Capture", der beim Klicken `stopCapture()` aufruft, um die Erfassung von Bildschirm-Inhalten zu unterbrechen.
3. Ein {{HTMLElement("video")}}, in das die erfassten Bildschirm-Inhalte gestreamt werden.
4. Ein {{HTMLElement("pre")}} Block, in den protokollierter Text durch die abgefangene [`console`](/de/docs/Web/API/Console) Methode platziert wird.

#### CSS

Das CSS ist in diesem Beispiel rein kosmetisch. Das Video erhält einen Rahmen, und seine Breite wird so festgelegt, dass es nahezu den gesamten verfügbaren horizontalen Raum einnimmt (`width: 98%`). {{cssxref("max-width")}} wird auf `860px` festgelegt, um eine absolute Obergrenze für die Größe des Videos zu setzen.

```css
#video {
  border: 1px solid #999;
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

Das Endprodukt sieht wie folgt aus. Wenn Ihr Browser die Screen Capture API unterstützt, wird beim Klicken auf "Start Capture" die Benutzeroberfläche des [User Agents](/de/docs/Glossary/user_agent) angezeigt, um einen Bildschirm, ein Fenster oder einen Tab zur Freigabe auszuwählen.

{{EmbedLiveSample("Streaming screen capture", 640, 800, "", "", "", "display-capture")}}

## Sicherheit

Um zu funktionieren, wenn die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) aktiviert ist, benötigen Sie die `display-capture` Berechtigung. Dies kann mit dem {{HTTPHeader("Permissions-Policy")}} [HTTP](/de/docs/Glossary/HTTP) Header oder—wenn Sie die Screen Capture API in einem {{HTMLElement("iframe")}} verwenden—dem `allow` Attribut des `<iframe>` Elements geschehen.

Zum Beispiel aktiviert diese Zeile in den HTTP-Headern die Screen Capture API für das Dokument und alle eingebetteten {{HTMLElement("iframe")}} Elemente, die vom selben Ursprung geladen werden:

```http
Permissions-Policy: display-capture=(self)
```

Wenn Sie die Bildschirmaufnahme innerhalb eines `<iframe>` durchführen, können Sie die Berechtigung nur für diesen Frame anfordern, was klar sicherer ist, als allgemeinere Berechtigungen anzufordern:

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Aufnehmen von Standbildern mit WebRTC](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)
- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream), um einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit den Live-Inhalten eines {{HTMLElement("canvas")}} zu erhalten
