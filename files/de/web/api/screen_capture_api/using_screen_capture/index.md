---
title: Verwendung der Screen Capture API
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Screen Capture API")}}

In diesem Artikel untersuchen wir, wie man die Screen Capture API und ihre Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwendet, um einen Teil oder den gesamten Bildschirm für Streaming, Aufnahmen oder das Teilen während einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Konferenzsitzung zu erfassen.

> [!NOTE]
> Es kann nützlich sein zu beachten, dass neuere Versionen des [WebRTC adapter.js shim](https://github.com/webrtcHacks/adapter) Implementierungen von `getDisplayMedia()` enthalten, um Screen-Sharing in Browsern zu ermöglichen, die es unterstützen, aber die aktuelle Standard-API nicht implementieren. Dies funktioniert mindestens mit Chrome, Edge und Firefox.

## Bildschirm-Inhalte erfassen

Das Erfassen von Bildschirm-Inhalten als Live-[`MediaStream`](/de/docs/Web/API/MediaStream) wird durch Aufruf von [`navigator.mediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) initiiert, was ein Promise zurückgibt, das zu einem Stream aufgelöst wird, der die Live-Bildschirm-Inhalte enthält. Das `displayMediaOptions`-Objekt, auf das in den unten stehenden Beispielen verwiesen wird, könnte in etwa so aussehen:

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

### Bildschirmaufnahme starten: `async`/`await`-Stil

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

Sie können diesen Code entweder mit einer asynchronen Funktion und dem [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator schreiben, wie oben gezeigt, oder indem Sie direkt das {{jsxref("Promise")}} verwenden, wie unten zu sehen.

### Bildschirmaufnahme starten: `Promise`-Stil

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

In beiden Fällen reagiert der {{Glossary("user_agent", "User Agent")}}, indem er eine Benutzeroberfläche präsentiert, die den Benutzer auffordert, den zu teilenden Bildschirmbereich auszuwählen. Beide Implementierungen von `startCapture()` geben den [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der die aufgenommenen Bildschirm-Inhalte enthält.

Siehe [Optionen und Einschränkungen](#optionen_und_einschränkungen) weiter unten, um mehr darüber zu erfahren, wie man die Art der gewünschten Oberfläche spezifiziert, sowie andere Möglichkeiten zur Anpassung des resultierenden Streams.

### Beispiel eines Fensters, das dem Benutzer ermöglicht, eine Anzeigefläche zur Erfassung auszuwählen

![Screenshot von Chromes Fenster zur Auswahl einer Quellfläche](chrome-screen-capture-window.png)

Sie können den aufgenommenen Stream, `captureStream`, dann für alles verwenden, was einen Stream als Eingabe akzeptiert. Die [Beispiele](#beispiele) unten zeigen einige Möglichkeiten zur Nutzung des Streams.

### Sichtbare vs. logische Anzeigeflächen

Für die Zwecke der Screen Capture API ist eine **Anzeigefläche** jedes Inhaltsobjekt, das von der API zu Teilungszwecken ausgewählt werden kann. Zu den teilbaren Flächen gehören die Inhalte eines Browser-Tabs, ein komplettes Fenster und ein Monitor (oder eine Gruppe von Monitoren, die zu einer Fläche kombiniert werden).

Es gibt zwei Arten von Anzeigeflächen. Eine **sichtbare Anzeigefläche** ist eine Fläche, die vollständig auf dem Bildschirm sichtbar ist, wie das vorderste Fenster oder Tab oder der gesamte Bildschirm.

Eine **logische Anzeigefläche** ist eine, die teilweise oder vollständig verdeckt ist, entweder indem sie von einem anderen Objekt überlagert wird oder vollständig verdeckt oder außerhalb des Bildschirms liegt. Wie diese von der Screen Capture API behandelt werden, variiert. Im Allgemeinen liefert der Browser ein Bild, das den verdeckten Teil der logischen Anzeigefläche auf irgendeine Weise verdeckt, zum Beispiel durch Unschärfe oder Ersetzung durch eine Farbe oder ein Muster. Dies geschieht aus Sicherheitsgründen, da der Benutzer nicht sichtbare Inhalte Daten enthalten können, die sie nicht teilen möchten.

Ein User Agent kann eine Aufnahme des gesamten Inhalts eines verdeckten Fensters nach der Einholung der Erlaubnis des Benutzers zulassen. In diesem Fall kann der User Agent den verdeckten Inhalt entweder durch Abrufen der aktuellen Inhalte des verdeckten Fensterteils oder durch Präsentation der zuletzt sichtbaren Inhalte einbeziehen, falls die aktuellen Inhalte nicht verfügbar sind.

### Optionen und Einschränkungen

Das Optionen-Objekt, das in [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergeben wird, wird verwendet, um Optionen für den resultierenden Stream festzulegen.

Die in das Optionen-Objekt übergebenen `video`- und `audio`-Objekte können zusätzliche Einschränkungen enthalten, die speziell für diese Medienspuren gelten. Siehe [Eigenschaften gemeinsam genutzter Bildschirmspuren](/de/docs/Web/API/MediaTrackConstraints#instance_properties_of_shared_screen_tracks) für Details zu zusätzlichen Einschränkungen zum Konfigurieren eines Bildschirmaufnahmestreams, die zu [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints), [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints) und [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) hinzugefügt werden.

Keine der Einschränkungen wird angewendet, bevor der zu erfassende Inhalt ausgewählt wurde. Die Einschränkungen ändern, was Sie im resultierenden Stream sehen. Wenn Sie beispielsweise eine [`width`](/de/docs/Web/API/MediaTrackConstraints/width)-Einschränkung für das Video festlegen, wird diese durch Skalierung des Videos angewendet, nachdem der Benutzer den zu teilenden Bereich ausgewählt hat. Es stellt keine Einschränkung der Größe der Quelle selbst dar.

> [!NOTE]
> Einschränkungen führen _niemals_ zu Änderungen an der Liste der vom Screen Sharing API erfassbaren Quellen. Dies stellt sicher, dass Webanwendungen den Benutzer nicht dazu zwingen können, bestimmte Inhalte zu teilen, indem die Quellliste auf nur einen Eintrag eingeschränkt wird.

Während die Bildschirmaufnahme aktiv ist, zeigt die Maschine, die die Bildschirm-Inhalte teilt, eine Art von Indikator an, damit der Benutzer weiß, dass das Teilen stattfindet.

> [!NOTE]
> Aus Datenschutz- und Sicherheitsgründen sind Bildschirmübertragungsquellen nicht mit [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufzählbar. Diesbezüglich wird auch niemals das [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event)-Ereignis gesendet, wenn es Änderungen der für `getDisplayMedia()` verfügbaren Quellen gibt.

### Erfassung gemeinsam genutzter Audioinhalte

[`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) wird am häufigsten verwendet, um Video von einem Bildschirm (oder Teilen davon) eines Benutzers aufzuzeichnen. {{Glossary("user_agent", "User Agents")}} können jedoch erlauben, Audio zusammen mit dem Video-Inhalt zu erfassen. Die Quelle dieses Audios könnte das ausgewählte Fenster, das gesamte Audiosystem des Computers oder das Mikrofon des Benutzers (oder eine Kombination davon) sein.

Bevor Sie ein Projekt starten, das die gemeinsame Nutzung von Audio erfordert, stellen Sie sicher, dass Sie die [Browser-Kompatibilität](/de/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility) für `getDisplayMedia()` überprüfen, um zu sehen, ob die Browser, mit denen Sie Kompatibilität wünschen, die Unterstützung für Audio in aufgenommenen Bildschirmstreams haben.

Um zu beantragen, dass der Bildschirm mit eingeschlossenem Audio geteilt wird, könnten die in `getDisplayMedia()` übergebenen Optionen so aussehen:

```js
const displayMediaOptions = {
  video: true,
  audio: true,
};
```

Dies ermöglicht dem Benutzer völlige Freiheit, auszuwählen, was er möchte, innerhalb der Grenzen dessen, was der User Agent unterstützt. Dies könnte weiter verfeinert werden, indem zusätzliche Optionen und Einschränkungen innerhalb der `audio`- und `video`-Objekte spezifiziert werden:

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

In diesem Beispiel soll die aufgenommene Anzeigefläche das gesamte Fenster sein. Die Audiospur sollte idealerweise mit Rauschunterdrückungs- und Echounterdrückungsfunktionen ausgestattet sein sowie eine ideale Audio-Sampling-Rate von 44,1 kHz und eine Unterdrückung der lokalen Audiowiedergabe aufweisen.

Außerdem gibt die App dem User Agent den Hinweis, dass er:

- Eine Steuerung während des Screen-Sharings bereitstellen soll, die es dem Benutzer erlaubt, den geteilten Tab dynamisch zu wechseln.
- Den aktuellen Tab aus der Liste der dem Benutzer präsentierten Optionen ausblenden soll, wenn die Aufnahme angefordert wird.
- Das System-Audio nicht in die möglichen Audiopquellen einbeziehen soll, die dem Benutzer angeboten werden.

Das Erfassen von Audio ist immer optional, und selbst wenn Webinhalte einen Stream mit sowohl Audio als auch Video anfordern, kann der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) dennoch nur einen Videotrack ohne Audio enthalten.

## Verwendung des aufgenommenen Streams

Das von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zurückgegebene {{jsxref("promise")}} wird zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst, der mindestens einen Videostream enthält, der den Bildschirm oder den Bildschirmbereich zeigt und basierend auf den spezifizierten Einschränkungen angepasst oder gefiltert wurde, als `getDisplayMedia()` aufgerufen wurde.

### Potenzielle Risiken

Datenschutz- und Sicherheitsprobleme im Zusammenhang mit dem Screen-Sharing sind normalerweise nicht allzu schwerwiegend, aber sie existieren. Das größte potenzielle Problem ist, dass Benutzer Inhalte unabsichtlich teilen, die sie nicht teilen wollten.

Zum Beispiel können Datenschutz- und/oder Sicherheitsverletzungen leicht auftreten, wenn der Benutzer seinen Bildschirm teilt und ein sichtbar im Hintergrund befindliches Fenster zufällig persönliche Informationen enthält oder wenn sein Passwort-Manager im geteilten Stream sichtbar ist. Dieser Effekt kann verstärkt werden, wenn logische Anzeigeflächen erfasst werden, die möglicherweise Inhalte enthalten, über die der Benutzer überhaupt nichts weiß, geschweige sieht.

User Agents, die Datenschutz ernst nehmen, sollten Inhalte, die tatsächlich nicht sichtbar auf dem Bildschirm sind, verschleiern, es sei denn, es wurde die Erlaubnis erteilt, diese Inhalte speziell zu teilen.

### Erfassung von Bildschirm-Inhalten genehmigen

Bevor das Streaming von aufgenommenen Bildschirm-Inhalten beginnen kann, wird der {{Glossary("user_agent", "User Agent")}} den Benutzer bitten, die Freigabeanforderung zu bestätigen und die freizugebenden Inhalte auszuwählen.

## Beispiele

### Streaming der Bildschirmaufnahme

In diesem Beispiel werden die Inhalte des aufgenommenen Bildschirmbereichs in ein {{HTMLElement("video")}}-Element auf derselben Seite gestreamt.

#### JavaScript

Es ist nicht viel Code erforderlich, um dies zu realisieren, und wenn Sie damit vertraut sind, [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zu verwenden, um Video von einer Kamera zu erfassen, werden Sie feststellen, dass [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) sehr vertraut ist.

##### Einrichtung

Zuerst werden einige Konstanten eingerichtet, um auf die Elemente auf der Seite zu verweisen, auf die wir Zugriff benötigen: das {{HTMLElement("video")}}, in das die aufgenommenen Bildschirm-Inhalte gestreamt werden, eine Box, in die Protokoll-Ausgaben gezeichnet werden, sowie die Start- und Stop-Schaltflächen, die die Bildschirmaufnahme starten und stoppen.

Das Objekt `displayMediaOptions` enthält die Optionen, die in `getDisplayMedia()` übergeben werden; hier ist die [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)-Eigenschaft auf `window` gesetzt, was bedeutet, dass das gesamte Fenster erfasst werden soll.

Schließlich werden Ereignis-Listener eingerichtet, um Benutzeraktionen auf den Start- und Stop-Schaltflächen zu erkennen.

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

In diesem Beispiel überschreiben bestimmte [`console`](/de/docs/Web/API/console)-Methoden ihre Nachrichten an den {{HTMLElement("pre")}}-Block, dessen ID `log` ist.

```js
console.log = (msg) => (logElem.textContent = `${logElem.textContent}\n${msg}`);
console.error = (msg) =>
  (logElem.textContent = `${logElem.textContent}\nError: ${msg}`);
```

Dies ermöglicht es uns, [`console.log()`](/de/docs/Web/API/console/log_static) und [`console.error()`](/de/docs/Web/API/console/error_static) zu verwenden, um Informationen in das Protokoll-Feld im Dokument zu protokollieren.

##### Bildschirmaufnahme starten

Die Methode `startCapture()`, unten gezeigt, startet die Aufnahme eines [`MediaStream`](/de/docs/Web/API/MediaStream), dessen Inhalte aus einem vom Benutzer ausgewählten Bereich des Bildschirms stammen. `startCapture()` wird aufgerufen, wenn die "Capture starten"-Schaltfläche geklickt wird.

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

Nach dem Löschen der Log-Inhalte, um jeglichen Resttext des vorhergehenden Verbindungsversuchs zu entfernen, ruft `startCapture()` [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) auf und übergibt das Einschränkungs-Objekt, das durch `displayMediaOptions` definiert ist. Mit der Verwendung von {{jsxref("Operators/await", "await")}} wird die folgende Codezeile nicht ausgeführt, bis das durch `getDisplayMedia()` zurückgegebene {{jsxref("promise")}} aufgelöst ist. Nach der Auflösung gibt das Promise einen [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der den Inhalt des vom Benutzer ausgewählten Bildschirms, Fensters oder anderen Bereichs streamt.

Der Stream wird mit dem {{HTMLElement("video")}}-Element verbunden, indem der zurückgegebene `MediaStream` in das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des Elements gespeichert wird.

Die `dumpOptionsInfo()`-Funktion, die wir uns gleich ansehen werden, gibt Informationen über den Stream zu Lernzwecken in das Log-Feld aus.

Sollte eines davon fehlschlagen, gibt der [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Abschnitt eine Fehlermeldung in das Log-Feld aus.

##### Bildschirmaufnahme stoppen

Die Methode `stopCapture()` wird aufgerufen, wenn die "Capture stoppen"-Schaltfläche geklickt wird. Sie beendet den Stream, indem sie dessen Trackliste mit [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) abruft und dann die Methode [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop) für jeden Track aufruft. Nachdem das erledigt ist, wird `srcObject` auf `null` gesetzt, um sicherzustellen, dass es für alle Beteiligten klar ist, dass kein Stream connected ist.

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### Konfigurationsinformationen ausgeben

Aus Informationszwecken ruft die oben gezeigte `startCapture()`-Methode eine Methode namens `dumpOptions()` auf, die die aktuellen Track-Einstellungen sowie die Einschränkungen des Streams ausgibt, die bei dessen Erstellung festgelegt wurden.

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.log("Track settings:");
  console.log(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.log("Track constraints:");
  console.log(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

Die Liste der Tracks wird abgerufen, indem [`getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) auf dem aufgezeichneten Bildschirm-`MediaStream`](/de/docs/Web/API/MediaStream) aufgerufen wird. Die aktuell wirkenden Einstellungen werden mit [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abgerufen und die festgelegten Einschränkungen werden mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) abgerufen.

#### HTML

Das HTML beginnt mit einem einleitenden Absatz und kommt dann zum Wesentlichen.

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

1. Ein {{HTMLElement("button")}} mit der Aufschrift "Capture Starten", das beim Klicken die Funktion `startCapture()` aufruft, um den Zugriff auf Bildschirm-Inhalte zu beantragen und mit der Aufnahme zu beginnen.
2. Eine zweite Schaltfläche, "Capture Stoppen", die beim Klicken `stopCapture()` aufruft, um die Aufnahme der Bildschirm-Inhalte zu beenden.
3. Ein {{HTMLElement("video")}}, in das die aufgenommenen Bildschirm-Inhalte gestreamt werden.
4. Ein {{HTMLElement("pre")}}-Block, in den protokollierte Textausgaben durch die abgefangene [`console`](/de/docs/Web/API/console)-Methode gezeichnet werden.

#### CSS

Das CSS ist in diesem Beispiel rein kosmetisch. Das Video erhält einen Rahmen und seine Breite wird so festgelegt, dass sie nahezu den gesamten verfügbaren horizontalen Raum einnimmt (`width: 98%`). {{cssxref("max-width")}} ist auf `860px` gesetzt, um eine absolute Obergrenze für die Video-Größe zu setzen.

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

Das Endprodukt sieht so aus. Wenn Ihr Browser die Screen Capture API unterstützt, wird durch Klicken auf "Capture Starten" die {{Glossary("user_agent", "Benutzeroberfläche")}} des Benutzer-Agenten angezeigt, um den zu teilenden Bildschirm, das Fenster oder den Tab auszuwählen.

{{EmbedLiveSample("Streaming screen capture", 640, 800, "", "", "", "display-capture")}}

## Sicherheit

Damit sie funktionieren, wenn [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) aktiviert ist, benötigen Sie die Berechtigung `display-capture`. Dies kann mithilfe des {{HTTPHeader("Permissions-Policy")}} {{Glossary("HTTP", "HTTP")}}-Headers oder – wenn Sie die Screen Capture API in einem {{HTMLElement("iframe")}} verwenden – mittels des Attributs [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) des `<iframe>`-Elements erfolgen.

Zum Beispiel aktiviert diese Zeile in den HTTP-Headern die Screen Capture API für das Dokument und alle eingebetteten {{HTMLElement("iframe")}}-Elemente, die von derselben Herkunft geladen werden:

```http
Permissions-Policy: display-capture=(self)
```

Wenn Sie die Bildschirmaufnahme innerhalb eines `<iframe>` durchführen, können Sie die Berechtigung nur für diesen Rahmen anfordern, was offensichtlich sicherer ist, als die Berechtigung generell anzufordern:

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Aufnahme von Standbildern mit WebRTC](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)
- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) zur Erfassung eines [`MediaStream`](/de/docs/Web/API/MediaStream) mit den Live-Inhalten eines {{HTMLElement("canvas")}}
