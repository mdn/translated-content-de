---
title: Verwendung der Screen Capture API
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Screen Capture API")}}

In diesem Artikel werden wir untersuchen, wie die Screen Capture API und ihre Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) genutzt werden können, um Teile oder den gesamten Bildschirm für Streaming, Aufnahmen oder das Teilen während einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Konferenzsession zu erfassen.

> [!NOTE]
> Es kann nützlich sein zu erwähnen, dass neuere Versionen des [WebRTC adapter.js shims](https://github.com/webrtcHacks/adapter) Implementierungen von `getDisplayMedia()` enthalten, um Bildschirmfreigabe in Browsern zu ermöglichen, die sie unterstützen, aber die aktuelle Standard-API nicht implementieren. Dies funktioniert zumindest mit Chrome, Edge und Firefox.

## Erfassen von Bildschirm-Inhalten

Das Erfassen von Bildschirm-Inhalten als Live-[`MediaStream`](/de/docs/Web/API/MediaStream) wird durch Aufrufen von [`navigator.mediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) initiiert, welches ein Promise zurückgibt, das zu einem Stream aufgelöst wird, der die Live-Bildschirm-Inhalte enthält. Das `displayMediaOptions`-Objekt, das in den folgenden Beispielen referenziert wird, könnte wie folgt aussehen:

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

Sie können diesen Code entweder unter Verwendung einer asynchronen Funktion und des [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operators schreiben, wie oben gezeigt, oder mit dem direkten Einsatz von {{jsxref("Promise")}}, wie unten beschrieben.

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

In beiden Fällen reagiert der {{Glossary("user_agent", "User-Agent")}}, indem er eine Benutzeroberfläche präsentiert, die den Nutzer auffordert, den zu teilenden Bildschirmbereich auszuwählen. Beide Implementierungen von `startCapture()` geben den [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der die aufgenommenen Bildschirmbilder enthält.

Siehe [Optionen und Einschränkungen](#optionen_und_einschränkungen) unten, um mehr darüber zu erfahren, wie Sie den Oberflächentyp angeben können, den Sie benötigen, sowie andere Möglichkeiten zur Anpassung des resultierenden Streams.

### Beispiel eines Fensters, das dem Benutzer erlaubt, eine Anzeigefläche für die Aufnahme auszuwählen

![Screenshot des Fensters von Chrome zur Auswahl einer Quellfläche](chrome-screen-capture-window.png)

Sie können den aufgenommenen Stream, `captureStream`, dann für alles verwenden, was einen Stream als Eingabe akzeptiert. Die [Beispiele](#beispiele) unten zeigen einige Möglichkeiten, den Stream zu nutzen.

### Sichtbare vs. logische Anzeigeflächen

Für die Zwecke der Screen Capture API ist eine **Anzeigefläche** jedes Inhaltsobjekt, das von der API für Freigabezwecke ausgewählt werden kann. Freigabeoberflächen umfassen die Inhalte eines Browser-Tabs, eines gesamten Fensters und eines Monitors (oder einer Gruppe von Monitoren, die zu einer Oberfläche zusammengefasst sind).

Es gibt zwei Arten von Anzeigeflächen. Eine **sichtbare Anzeigefläche** ist eine Fläche, die vollständig auf dem Bildschirm sichtbar ist, wie das vorderste Fenster oder der vorderste Tab, oder der gesamte Bildschirm.

Eine **logische Anzeigefläche** ist eine Fläche, die teilweise oder vollständig verdeckt ist, entweder indem sie von einem anderen Objekt zu einem gewissen Grad überlappt wird oder indem sie völlig versteckt oder außerhalb des Bildschirms ist. Wie diese von der Screen Capture API behandelt werden, variiert. Im Allgemeinen wird der Browser ein Bild zur Verfügung stellen, das den versteckten Teil der logischen Anzeigefläche in irgendeiner Weise verschleiert, etwa durch Unschärfe oder Ersetzen mit einer Farbe oder einem Muster. Dies geschieht aus Sicherheitsgründen, da der Inhalt, der für den Benutzer nicht sichtbar ist, Daten enthalten kann, die er nicht teilen möchte.

Ein User-Agent könnte die Aufnahme des gesamten Inhalts eines verdeckten Fensters erlauben, nachdem er die Erlaubnis des Benutzers dafür erhalten hat. In diesem Fall könnte der User-Agent den verdeckten Inhalt entweder durch Einholen der aktuellen Inhalte des versteckten Teils des Fensters einbeziehen oder durch Präsentieren der zuletzt sichtbaren Inhalte, falls die aktuellen Inhalte nicht verfügbar sind.

### Optionen und Einschränkungen

Das in [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergebene Optionsobjekt wird verwendet, um Optionen für den resultierenden Stream festzulegen.

Die im Optionsobjekt übergebenen `video`- und `audio`-Objekte können auch zusätzliche Einschränkungen enthalten, die sich speziell auf diese Medientracks beziehen. Weitere Einzelheiten zu zusätzlichen Einschränkungen zur Konfiguration eines Bildschirmaufnahme-Streams, die zu [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints), [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints) und [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) hinzugefügt werden, finden Sie unter [Eigenschaften von freigegebenen Bildschirm-Tracks](/de/docs/Web/API/MediaTrackConstraints#instance_properties_of_shared_screen_tracks).

Keine der Einschränkungen wird in irgendeiner Weise angewandt, bevor der zu erfassende Inhalt ausgewählt wurde. Die Einschränkungen ändern das, was Sie im resultierenden Stream sehen. Wenn Sie zum Beispiel eine [`width`](/de/docs/Web/API/MediaTrackConstraints/width)-Einschränkung für das Video angeben, wird sie durch Skalieren des Videos nach Auswahl des Bereichs zur Freigabe angewendet. Sie stellt keine Einschränkung der Größe der Quelle selbst dar.

> [!NOTE]
> Einschränkungen führen _niemals_ dazu, dass sich die Liste der vom Screen Sharing API zur Aufnahme verfügbaren Quellen ändert. Dies stellt sicher, dass Webanwendungen den Benutzer nicht zwingen können, bestimmte Inhalte zu teilen, indem die Quellenliste eingeschränkt wird, bis nur noch ein Element übrig ist.

Während der Bildschirmaufnahme wird die Maschine, die Bildschirm-Inhalte teilt, eine Art Indikator anzeigen, damit der Benutzer sich bewusst ist, dass eine Freigabe erfolgt.

> [!NOTE]
> Aus Datenschutz- und Sicherheitsgründen sind die Bildschirmfreigabequellen nicht über [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) auflistbar. In diesem Zusammenhang wird das Ereignis [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) niemals ausgelöst, wenn sich Änderungen bei den für `getDisplayMedia()` verfügbaren Quellen ergeben.

### Aufnehmen von freigegebenem Audio

[`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) wird am häufigsten genutzt, um Video des Bildschirms eines Nutzers (oder Teile davon) zu erfassen. Allerdings könnten {{Glossary("user_agent", "User-Agents")}} auch das Aufnehmen von Audio zusammen mit den Videoinhalten erlauben. Die Quelle dieses Audios könnte das ausgewählte Fenster sein, das gesamte Audiosystem des Computers oder das Mikrofon des Nutzers (oder eine Kombination aus all dem).

Bevor Sie ein Projekt starten, das die Freigabe von Audio erfordert, überprüfen Sie bitte die [Browser-Kompatibilität](/de/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility) von `getDisplayMedia()` um festzustellen, ob die Browser, mit denen Sie kompatibel sein möchten, Unterstützung für Audio in aufgezeichneten Bildschirm-Streams bieten.

Um zu beantragen, dass der Bildschirm mit enthaltenem Audio geteilt wird, könnten die an `getDisplayMedia()` übergebenen Optionen wie folgt aussehen:

```js
const displayMediaOptions = {
  video: true,
  audio: true,
};
```

Dies erlaubt dem Benutzer totale Freiheit, auszuwählen, was er will, innerhalb der Grenzen dessen, was der User-Agent unterstützt. Dies könnte weiter verfeinert werden, indem zusätzliche Optionen und Einschränkungen innerhalb der `audio`- und `video`-Objekte spezifiziert werden:

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

In diesem Beispiel wird die ganze Fenster-Anzeigefläche erfasst. Der Audiotrack sollte idealerweise Rauschunterdrückung und Echounterdrückungsfunktionen aktiviert haben, sowie eine ideale Audio-Samplerate von 44,1 kHz und Unterdrückung der lokalen Audiowiedergabe.

Zudem gibt die App dem User-Agent einen Hinweis:

- Ein Steuerungselement während der Bildschirmfreigabe bereitzustellen, das dem Benutzer erlaubt, die geteilte Registerkarte dynamisch zu wechseln.
- Die aktuelle Registerkarte aus der Liste der dem Nutzer präsentierten Optionen auszublenden, wenn die Aufnahme angefordert wird.
- Das Systemaudio nicht zu den möglichen dem Nutzer angebotenen Audioquellen zu zählen.

Das Aufnehmen von Audio ist immer optional, und selbst wenn Webinhalte einen Stream mit sowohl Audio als auch Video anfordern, kann der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) dennoch nur einen Videotrack, ohne Audio, enthalten.

## Verwendung des aufgenommenen Streams

Der von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zurückgegebene {{jsxref("promise")}} wird zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst, der mindestens einen Videostream enthält, der den Bildschirm oder den Bildschirmbereich umfasst und der auf Grundlage der bei Aufruf von `getDisplayMedia()` spezifizierten Einschränkungen angepasst oder gefiltert ist.

### Potenzielle Risiken

Datenschutz- und Sicherheitsprobleme im Zusammenhang mit Bildschirmfreigabe sind zwar in der Regel nicht besonders schwerwiegend, aber sie existieren. Das größte potenzielle Problem besteht darin, dass Benutzer versehentlich Inhalte teilen, die sie nicht freigeben wollten.

Beispielsweise können Datenschutz- und/oder Sicherheitsverletzungen leicht auftreten, wenn der Benutzer seinen Bildschirm teilt und ein im Hintergrund sichtbares Fenster persönliche Informationen enthält, oder wenn ihr Passwortmanager im freigegebenen Stream sichtbar ist. Dieser Effekt kann verstärkt werden, wenn logische Anzeigeflächen erfasst werden, die möglicherweise Inhalte enthalten, über die der Benutzer nicht Bescheid weiß oder die er gar nicht sieht.

User-Agents, die Datenschutz ernst nehmen, sollten Inhalte verschleiern, die tatsächlich nicht auf dem Bildschirm sichtbar sind, es sei denn, es wurde die Berechtigung erteilt, diese Inhalte speziell zu teilen.

### Freigabe von Bildschirm-Inhalten autorisieren

Bevor das Streaming der erfassten Bildschirm-Inhalte beginnen kann, wird der {{Glossary("user_agent", "User-Agent")}} den Benutzer bitten, die Freigabeanfrage zu bestätigen und die zu teilenden Inhalte auszuwählen.

## Beispiele

### Streaming der Bildschirmaufnahme

In diesem Beispiel werden die Inhalte des aufgenommenen Bildschirmbereichs in ein {{HTMLElement("video")}}-Element auf derselben Seite gestreamt.

#### JavaScript

Es ist nicht viel Code erforderlich, um dies zum Laufen zu bringen, und wenn Sie mit der Verwendung von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zur Erfassung von Video von einer Kamera vertraut sind, wird Ihnen [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) sehr vertraut vorkommen.

##### Einrichtung

Zuerst werden einige Konstanten eingerichtet, um auf die Elemente auf der Seite zu verweisen, auf die wir zugreifen müssen: das {{HTMLElement("video")}}, in das die erfassten Bildschirm-Inhalte gestreamt werden, ein Kasten, in den protokollierte Ausgaben gezeichnet werden, sowie die Start- und Stop-Schaltflächen, die die Erfassung von Bildschirmbildern ein- und ausschalten.

Das Objekt `displayMediaOptions` enthält die Optionen, die an `getDisplayMedia()` übergeben werden; hier ist die [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)-Eigenschaft auf `window` gesetzt, was angibt, dass das ganze Fenster erfasst werden soll.

Schließlich werden Ereignis-Listener eingerichtet, um Benutzerklicks auf die Start- und Stop-Schaltflächen zu erkennen.

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

Dieses Beispiel überschreibt bestimmte Methoden von [`console`](/de/docs/Web/API/Console), um deren Nachrichten im {{HTMLElement("pre")}}-Block auszugeben, dessen ID `log` ist.

```js
console.log = (msg) => (logElem.textContent = `${logElem.textContent}\n${msg}`);
console.error = (msg) =>
  (logElem.textContent = `${logElem.textContent}\nError: ${msg}`);
```

Dadurch können wir [`console.log()`](/de/docs/Web/API/Console/log_static) und [`console.error()`](/de/docs/Web/API/Console/error_static) verwenden, um Informationen in das Protokollfeld im Dokument zu schreiben.

##### Starten der Bildschirmaufnahme

Die untenstehende Methode `startCapture()` startet die Erfassung eines [`MediaStream`](/de/docs/Web/API/MediaStream), dessen Inhalte aus einem vom Benutzer ausgewählten Bereich des Bildschirms stammen. `startCapture()` wird aufgerufen, wenn die "Start Capture"-Schaltfläche geklickt wird.

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

Nachdem der Inhalt des Protokolls gelöscht wurde, um verbliebenen Text vom vorherigen Verbindungsversuch zu entfernen, ruft `startCapture()` [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) auf und übergibt das durch `displayMediaOptions` definierte Einschränkungsobjekt. Mit Verwendung von {{jsxref("Operators/await", "await")}} wird die folgende Codezeile erst dann ausgeführt, nachdem das durch `getDisplayMedia()` zurückgegebene {{jsxref("promise")}} aufgelöst wurde. Nach der Auflösung gibt das Promise einen [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der die Inhalte des vom Benutzer ausgewählten Bildschirms, Fensters oder eines anderen Bereichs streamt.

Der Stream wird an das {{HTMLElement("video")}}-Element angeschlossen, indem der zurückgegebene `MediaStream` in das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des Elements gespeichert wird.

Die Funktion `dumpOptionsInfo()`, die wir in einem Moment anschauen werden, legt Informationen über den Stream im Protokollfeld zum Lernzweck ab.

Falls einer dieser Schritte fehlschlägt, gibt der [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Klausel eine Fehlermeldung im Protokollfeld aus.

##### Beenden der Bildschirmaufnahme

Die Methode `stopCapture()` wird aufgerufen, wenn die "Stop Capture"-Schaltfläche geklickt wird. Sie stoppt den Stream, indem sie dessen Trackliste mit [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) abruft und jede Spur mit der Methode [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop) beendet. Danach wird `srcObject` auf `null` gesetzt, um für jeden Interessierten klarzustellen, dass kein Stream verbunden ist.

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### Protokollierung der Konfigurationsinformationen

Zu Informationszwecken ruft die oben gezeigte Methode `startCapture()` eine Methode namens `dumpOptions()` auf, die die aktuellen Tracheinstellungen sowie die dem Stream bei seiner Erstellung auferlegten Einschränkungen ausgibt.

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.log("Track settings:");
  console.log(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.log("Track constraints:");
  console.log(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

Die Trackliste wird abgerufen, indem [`getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) auf dem aufgenommenen Bildschirm-`MediaStream` aufgerufen wird. Die derzeit geltenden Einstellungen werden mit [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abgerufen und die festgelegten Einschränkungen mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) erhalten.

#### HTML

Das HTML beginnt mit einem einführenden Absatz, bevor es in die eigentlichen Inhalte geht.

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

1. Ein {{HTMLElement("button")}} mit der Aufschrift "Start Capture", das beim Klicken die Funktion `startCapture()` aufruft, um Zugriff auf die Bildschirm-Inhalte zu beantragen und die Aufnahme zu starten.
2. Ein zweiter Button, "Stop Capture", der beim Klick `stopCapture()` aufruft, um die Aufnahme der Bildschirm-Inhalte zu beenden.
3. Ein {{HTMLElement("video")}}, in das die aufgenommenen Bildschirm-Inhalte gestreamt werden.
4. Ein {{HTMLElement("pre")}}-Block, in den durch die abgefangenen [`console`](/de/docs/Web/API/Console)-Methoden protokollierter Text ausgegeben wird.

#### CSS

Das CSS ist in diesem Beispiel komplett kosmetisch. Das Video wird mit einem Rahmen versehen, und seine Breite wird so eingestellt, dass es nahezu den gesamten verfügbaren horizontalen Raum einnimmt (`width: 98%`). {{cssxref("max-width")}} wird auf `860px` gesetzt, um eine absolute Obergrenze für die Größe des Videos festzulegen.

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

Das Endprodukt sieht so aus. Wenn Ihr Browser die Screen Capture API unterstützt, wird durch Klicken auf "Start Capture" die Benutzeroberfläche des {{Glossary("user_agent", "User-Agents")}} zum Auswählen eines Bildschirms, Fensters oder Tabs zur Freigabe präsentiert.

{{EmbedLiveSample("Streaming screen capture", 640, 800, "", "", "", "display-capture")}}

## Sicherheit

Um zu funktionieren, wenn die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) aktiviert ist, benötigen Sie die `display-capture`-Berechtigung. Dies kann mithilfe des {{HTTPHeader("Permissions-Policy")}} {{Glossary("HTTP", "HTTP")}} Headers erfolgen oder—falls Sie die Screen Capture API in einem {{HTMLElement("iframe")}} verwenden—über das [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attribut des `<iframe>`-Elements.

Beispielsweise aktiviert diese Zeile in den HTTP-Headern die Screen Capture API für das Dokument und alle eingebetteten {{HTMLElement("iframe")}}-Elemente, die aus demselben Ursprung geladen werden:

```http
Permissions-Policy: display-capture=(self)
```

Wenn Sie Bildschirmaufnahme innerhalb eines `<iframe>` durchführen, können Sie die Berechtigung nur für diesen Rahmen anfordern, was eindeutig sicherer ist als das allgemeine Anfordern von Berechtigungen:

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Aufnehmen von Standbildern mit WebRTC](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)
- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) zum Erhalten eines [`MediaStream`](/de/docs/Web/API/MediaStream) mit den Live-Inhalten eines {{HTMLElement("canvas")}}
