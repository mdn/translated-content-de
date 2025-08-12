---
title: VerwendunHder Screen Capture API
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("Screen Capture API")}}

In diesem Artikel werden wir untersuchen, wie die Screen Capture API und ihre Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwendet werden, um Teile oder den gesamten Bildschirm für das Streaming, Aufnahme oder Teilen während einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Konferenzsitzung zu erfassen.

> [!NOTE]
> Es kann nützlich sein zu beachten, dass neuere Versionen des [WebRTC adapter.js shim](https://github.com/webrtcHacks/adapter) Implementierungen von `getDisplayMedia()` beinhalten, um Bildschirmfreigabe in Browsern zu ermöglichen, die es unterstützen, aber die aktuelle Standard-API nicht implementieren. Dies funktioniert mindestens mit Chrome, Edge und Firefox.

## Erfassen von Bildschirminhalten

Das Erfassen von Bildschirminhalten als Live-[`MediaStream`](/de/docs/Web/API/MediaStream) wird durch Aufruf von [`navigator.mediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) initiiert, welches ein Versprechen zurückgibt, das zu einem Stream auflöst, der die Live-Bildschirminhalte enthält. Das im unten stehenden Beispiel referenzierte Objekt `displayMediaOptions` könnte folgendermaßen aussehen:

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

### Starten der Bildschirmaufnahme: `async`/`await`-Stil

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

Sie können diesen Code entweder unter Verwendung einer asynchronen Funktion und des [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operators schreiben, wie oben gezeigt, oder das {{jsxref("Promise")}} direkt verwenden, wie unten zu sehen.

### Starten der Bildschirmaufnahme: `Promise`-Stil

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

In beiden Fällen reagiert der {{Glossary("user_agent", "User-Agent")}}, indem er eine Benutzeroberfläche präsentiert, die den Benutzer auffordert, den zu teilenden Bildschirmbereich auszuwählen. Beide Implementierungen von `startCapture()` geben den [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der die erfassten Displaybilder enthält.

Siehe [Optionen und Einschränkungen](#optionen_und_einschränkungen) weiter unten, um mehr über die Spezifizierung des gewünschten Oberflächentyps sowie andere Anpasungsmöglichkeiten für den resultierenden Stream zu erfahren.

### Beispiel eines Fensters, das dem Benutzer erlaubt, eine Display-Oberfläche zur Aufnahme auszuwählen

![Screenshot von Chromes Fenster zur Auswahl einer Quelloberfläche](chrome-screen-capture-window.png)

Sie können dann den erfassten Stream, `captureStream`, für alles verwenden, was einen Stream als Eingabe akzeptiert. Die [Beispiele](#beispiele) unten zeigen einige Möglichkeiten, den Stream zu nutzen.

### Sichtbare vs. logische Display-Oberflächen

Für die Zwecke der Screen Capture API ist eine **Display-Oberfläche** jedes Inhaltsobjekt, das für Freigabezwecke von der API ausgewählt werden kann. Freigabeoberflächen beinhalten den Inhalt eines Browser-Tabs, eines gesamten Fensters und eines Monitors (oder einer Gruppe von Monitoren, die zu einer Oberfläche kombiniert werden).

Es gibt zwei Arten von Display-Oberflächen. Eine **sichtbare Display-Oberfläche** ist eine Oberfläche, die vollständig auf dem Bildschirm sichtbar ist, wie z.B. das vorderste Fenster oder Tab oder der gesamte Bildschirm.

Eine **logische Display-Oberfläche** ist eine, die teilweise oder vollständig verdeckt ist, entweder indem sie zu einem gewissen Grad durch ein anderes Objekt überlappt wird oder indem sie vollständig versteckt oder außerhalb des Bildschirms ist. Wie diese von der Screen Capture API behandelt werden, variiert. Im Allgemeinen wird der Browser ein Bild bereitstellen, das den verdeckten Teil der logischen Display-Oberfläche in irgendeiner Weise verdeckt, zum Beispiel durch Unschärfe oder Ersetzen durch eine Farbe oder ein Muster. Dies wird aus Sicherheitsgründen gemacht, da Inhalte, die der Benutzer nicht sehen kann, Daten enthalten können, die er nicht teilen möchte.

Ein User-Agent könnte die Erfassung des gesamten Inhalts eines verdeckten Fensters auch nach Erhalt der Erlaubnis des Benutzers zulassen. In diesem Fall könnte der User-Agent den verdeckten Inhalt entweder durch Abfragen der aktuellen Inhalte des verdeckten Fensterteils einbeziehen oder, falls die aktuellen Inhalte nicht verfügbar sind, die zuletzt sichtbaren Inhalte darstellen.

### Optionen und Einschränkungen

Das an [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergebene Optionsobjekt wird verwendet, um Optionen für den resultierenden Stream festzulegen.

Die in das Optionsobjekt übergebenen `video`- und `audio`-Objekte können auch zusätzliche Einschränkungen für diese Medienspuren enthalten. Siehe [Eigenschaften von freigegebenen Bildschirmspuren](/de/docs/Web/API/MediaTrackConstraints#instance_properties_of_shared_screen_tracks) für Details zu zusätzlichen Einschränkungen zur Konfiguration eines Bildschirmaufnahme-Streams, die zu [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints), [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints) und [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) hinzugefügt wurden.

Keine der Einschränkungen werden in irgendeiner Weise angewendet, bis der zu erfassende Inhalt ausgewählt wurde. Die Einschränkungen verändern, was Sie im resultierenden Stream sehen. Beispielsweise wird eine Einschränkung der [`width`](/de/docs/Web/API/MediaTrackConstraints/width) für das Video durch Skalierung des Videos nach Auswahl des Bereichs zur Freigabe angewendet. Sie stellt keine Einschränkung der tatsächlichen Größe der Quelle dar.

> [!NOTE]
> Einschränkungen führen _niemals_ zu Änderungen an der Liste der durch die Screen Sharing API verfügbaren Quellen. Dies stellt sicher, dass Webanwendungen die Benutzer nicht zwingen können, spezifische Inhalte zu teilen, indem sie die Quellliste einschränken, bis nur noch ein Element übrig ist.

Während eine Bildschirmfreigabe aktiv ist, zeigt die Maschine, die Bildschirminhalte teilt, eine Form von Indikator an, damit der Benutzer weiß, dass eine Freigabe stattfindet.

> [!NOTE]
> Aus Datenschutz- und Sicherheitsgründen sind Bildschirmfreigabequellen nicht mit [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) auflistbar. In Zusammenhang damit wird das [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event)-Ereignis nie gesendet, wenn es Änderungen an den für `getDisplayMedia()` verfügbaren Quellen gibt.

### Erfassen von freigegebenem Audio

[`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) wird meist verwendet, um Video des Benutzerbildschirms (oder Teile davon) zu erfassen. Jedoch können {{Glossary("user_agent", "User-Agents")}} erlauben, dass Audio zusammen mit dem Videoinhalt erfasst wird. Die Quelle dieses Audios könnte das ausgewählte Fenster sein, das gesamte Audiosystem des Computers oder das Mikrofon des Benutzers (oder eine Kombination all dessen).

Bevor Sie ein Projekt starten, das die Freigabe von Audio erfordert, sollten Sie die [Browser-Kompatibilität](/de/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility) von `getDisplayMedia()` überprüfen, um zu sehen, ob die Browser, mit denen Sie kompatibel sein möchten, Unterstützung für Audio in erfassten Bildschirmstreams bieten.

Um zu beantragen, dass der Bildschirm mit eingeschlossenem Audio freigegeben wird, könnten die an `getDisplayMedia()` übergebenen Optionen folgendermaßen aussehen:

```js
const displayMediaOptions = {
  video: true,
  audio: true,
};
```

Dies ermöglicht dem Benutzer die vollkommene Freiheit, auszuwählen, was immer er möchte, innerhalb der Grenzen dessen, was der User-Agent unterstützt. Dies könnte weiter verfeinert werden, indem zusätzliche Optionen und Einschränkungen in den `audio`- und `video`-Objekten spezifiziert werden:

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

In diesem Beispiel soll die erfasste Display-Oberfläche das ganze Fenster sein. Die Audiospur sollte idealerweise Rauschunterdrückungs- und Echounterdrückungsmerkmale aktiviert haben, sowie eine ideale Audio-Samplerate von 44,1 kHz und eine Unterdrückung der lokalen Audiowiedergabe.

Zusätzlich deutet die App dem User-Agent an, dass er:

- Eine Steuerung während der Bildschirmfreigabe bereitstellen soll, um dem Benutzer das dynamische Wechseln des freigegebenen Tabs zu ermöglichen.
- Den aktuellen Tab in der Liste der Optionen auszublenden, die dem Benutzer bei Anfrage der Aufnahme präsentiert werden.
- Das Systemaudio nicht zu den möglichen Audiosquellen zählen soll, die dem Benutzer angeboten werden.

Das Erfassen von Audio ist immer optional, und selbst wenn Web-Inhalte einen Stream mit sowohl Audio als auch Video anfordern, kann der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) immer noch nur eine Videospur enthalten, ohne Audio.

## Nutzung des erfassten Streams

Das von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zurückgegebene {{jsxref("promise")}} löst sich zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) auf, der mindestens einen Videostream enthält, der den Bildschirm oder einen Bildschirmbereich enthält, und der basierend auf den beim Aufruf von `getDisplayMedia()` angegebenen Einschränkungen angepasst oder gefiltert wurde.

### Potenzielle Risiken

Datenschutz- und Sicherheitsprobleme im Zusammenhang mit der Bildschirmfreigabe sind meist nicht übermäßig ernst, aber sie existieren. Das größte potenzielle Problem ist, dass Benutzer ungewollt Inhalte teilen, die sie nicht teilen wollten.

Zum Beispiel können Datenschutz- und/oder sicherheitsverletzungen leicht auftreten, wenn der Benutzer seinen Bildschirm teilt und ein sichtbares Hintergrundfenster zufällig persönliche Informationen enthält oder wenn sein Passwortmanager im freigegebenen Stream sichtbar ist. Dieser Effekt kann verstärkt werden, wenn logische Display-Oberflächen erfasst werden, die möglicherweise Inhalte enthalten, von denen der Benutzer überhaupt nichts weiß.

User-Agents, die Datenschutz ernst nehmen, sollten Inhalte, die tatsächlich nicht auf dem Bildschirm sichtbar sind, verschleiern, es sei denn, es wurde eine Genehmigung zur Freigabe dieser Inhalte explizit erteilt.

### Genehmigung zur Erfassung von Display-Inhalten

Bevor das Streaming der erfassten Bildschirminhalte beginnen kann, wird der {{Glossary("user_agent", "User-Agent")}} den Benutzer bitten, die Freigabeanfrage zu bestätigen und die zu teilenden Inhalte auszuwählen.

## Beispiele

### Streaming der Bildschirmaufnahme

In diesem Beispiel werden die Inhalte des erfassten Bildschirmbereichs in ein {{HTMLElement("video")}}-Element auf derselben Seite gestreamt.

#### JavaScript

Es ist nicht viel Code erforderlich, um dies zu bewerkstelligen, und wenn Sie mit der Verwendung von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zur Erfassung von Video von einer Kamera vertraut sind, wird Ihnen [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) sehr vertraut vorkommen.

##### Einrichtung

Zuerst werden einige Konstanten eingerichtet, um die Elemente auf der Seite zu referenzieren, auf die wir Zugriff benötigen: das {{HTMLElement("video")}}, in das die erfassten Bildschirminhalte gestreamt werden sollen, ein Bereich, in den Protokollausgaben gezeichnet werden, und die Start- und Stopp-Schaltflächen, die das Ein- und Ausschalten der Bildaufnahme steuern.

Das Objekt `displayMediaOptions` enthält die Optionen, die an `getDisplayMedia()` übergeben werden; hier wird die [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)-Eigenschaft auf `window` gesetzt, um anzugeben, dass das gesamte Fenster erfasst werden soll.

Schließlich werden Ereignislistener eingerichtet, um Benutzerklicks auf die Start- und Stopp-Schaltflächen zu erkennen.

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

##### Protokollierung von Inhalten

Dieses Beispiel überschreibt bestimmte Methoden von [`console`](/de/docs/Web/API/console), um deren Nachrichten in den {{HTMLElement("pre")}}-Block zu leiten, dessen ID `log` ist.

```js
console.log = (msg) => (logElem.textContent = `${logElem.textContent}\n${msg}`);
console.error = (msg) =>
  (logElem.textContent = `${logElem.textContent}\nError: ${msg}`);
```

Dies ermöglicht es uns, [`console.log()`](/de/docs/Web/API/console/log_static) und [`console.error()`](/de/docs/Web/API/console/error_static) zu verwenden, um Informationen in das Protokollfeld im Dokument zu schreiben.

##### Starten der Bildschirmaufnahme

Die Methode `startCapture()` unten startet die Erfassung eines [`MediaStream`](/de/docs/Web/API/MediaStream), dessen Inhalte aus einem vom Benutzer ausgewählten Bereich des Bildschirms stammen. `startCapture()` wird aufgerufen, wenn die "Start Capture"-Schaltfläche geklickt wird.

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

Nach dem Löschen der Inhalte des Protokolls, um eventuelle verbleibende Texte vom vorherigen Verbindungsversuch zu entfernen, ruft `startCapture()` [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) auf, wobei das durch `displayMediaOptions` definierte Einschränkungsobjekt übergeben wird. Unter Verwendung von {{jsxref("Operators/await", "await")}} wird die folgende Codezeile erst ausgeführt, nachdem das von `getDisplayMedia()` zurückgegebene {{jsxref("promise")}} aufgelöst wurde. Nach der Auflösung gibt das Versprechen einen [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der die Inhaltsströme des Bildschirms, Fensters oder eines anderen vom Benutzer ausgewählten Bereichs enthält.

Der Stream wird mit dem {{HTMLElement("video")}}-Element verbunden, indem der zurückgegebene `MediaStream` in das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Element des Videos gespeichert wird.

Die `dumpOptionsInfo()`-Funktion, die wir gleich anschauen werden, gibt Informationen über den Stream in das Protokollfeld aus, zu Ausbildungszwecken.

Falls einer dieser Schritte fehlschlägt, gibt die [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Klausel eine Fehlermeldung in das Protokollfeld aus.

##### Beenden der Bildschirmaufnahme

Die Methode `stopCapture()` wird aufgerufen, wenn die "Stop Capture"-Schaltfläche geklickt wird. Sie stoppt den Stream, indem sie seine Spur-Liste mit [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) abruft und dann die [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop)-Methode jeder Spur aufruft. Danach wird `srcObject` auf `null` gesetzt, um zu verdeutlichen, dass kein Stream verbunden ist.

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### Ausgabe von Konfigurationsinformationen

Die oben gezeigte Methode `startCapture()` ruft zu Informationszwecken eine Methode namens `dumpOptions()` auf, die die aktuellen Spur-Einstellungen sowie die bei der Erstellung des Streams auferlegten Einschränkungen ausgibt.

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.log("Track settings:");
  console.log(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.log("Track constraints:");
  console.log(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

Die Spurliste wird durch Aufruf von [`getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) auf dem erfassten Display-`MediaStream`(/de/docs/Web/API/MediaStream) erhalten. Die aktuell aktiven Einstellungen werden mit [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abgefragt und die festgelegten Einschränkungen mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints).

#### HTML

Das HTML beginnt mit einem einführenden Absatz und geht dann in das Wesentliche über.

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

Die Schlüsselteile des HTMLs sind:

1. Ein {{HTMLElement("button")}}, beschriftet mit "Start Capture", das beim Klicken die `startCapture()`-Funktion aufruft, um Zugriff auf die Bildschirminhalte zu beantragen und mit der Erfassung zu beginnen.
2. Eine zweite Schaltfläche, "Stop Capture", die bei Klick `stopCapture()` aufruft, um die Erfassung der Bildschirminhalte zu beenden.
3. Ein {{HTMLElement("video")}}, in das die erfassten Bildschirminhalte gestreamt werden.
4. Ein {{HTMLElement("pre")}}-Block, in den Protokolltexte durch die abgefangene [`console`](/de/docs/Web/API/console)-Methode ausgegeben werden.

#### CSS

Das CSS ist in diesem Beispiel rein kosmetisch. Das Video erhält einen Rahmen, und seine Breite wird so eingestellt, dass sie nahezu den gesamten verfügbaren horizontalen Raum ausfüllt (`width: 98%`). {{cssxref("max-width")}} ist auf `860px` gesetzt, um eine absolute Obergrenze für die Videogröße festzulegen,

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

Das Endprodukt sieht so aus. Wenn Ihr Browser die Screen Capture API unterstützt, zeigt ein Klick auf "Start Capture" die Benutzeroberfläche des {{Glossary("user_agent", "User-Agents")}}, um einen Bildschirm, ein Fenster oder einen Tab zur Freigabe auszuwählen.

{{EmbedLiveSample("Streaming screen capture", 640, 800, "", "", "", "display-capture")}}

## Sicherheit

Um zu funktionieren, wenn die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) aktiviert ist, benötigen Sie die Berechtigung `display-capture`. Dies kann über den {{HTTPHeader("Permissions-Policy")}} {{Glossary("HTTP", "HTTP")}}-Header erfolgen oder — falls Sie die Screen Capture API in einem {{HTMLElement("iframe")}} verwenden, über das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)-Attribut des `<iframe>`-Elements.

Zum Beispiel würde diese Zeile in den HTTP-Headern die Screen Capture API für das Dokument und alle eingebetteten {{HTMLElement("iframe")}}-Elemente, die von derselben Quelle geladen werden, aktivieren:

```http
Permissions-Policy: display-capture=(self)
```

Wenn Sie die Bildschirmaufnahme innerhalb eines `<iframe>`s durchführen, können Sie die Berechtigung nur für diesen Frame beantragen, was offensichtlich sicherer ist, als allgemein die Berechtigung anzufordern:

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Aufnahme von Standbildern mit WebRTC](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)
- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream), um einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit den Live-Inhalten eines {{HTMLElement("canvas")}} zu erhalten.
