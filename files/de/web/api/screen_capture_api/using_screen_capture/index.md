---
title: Verwendung der Screen Capture API
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Screen Capture API")}}

In diesem Artikel werden wir untersuchen, wie die Screen Capture API und ihre Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwendet werden, um einen Teil oder den gesamten Bildschirm für das Streaming, die Aufnahme oder das Teilen während einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Konferenzsitzung zu erfassen.

> [!NOTE]
> Es kann nützlich sein zu beachten, dass neuere Versionen des [WebRTC adapter.js Shim](https://github.com/webrtcHacks/adapter) Implementierungen von `getDisplayMedia()` enthalten, um das Teilen von Bildschirmen in Browsern zu ermöglichen, die es unterstützen, aber die aktuelle Standard-API nicht implementieren. Dies funktioniert mindestens mit Chrome, Edge und Firefox.

## Erfassen von Bildschirminhalten

Das Erfassen von Bildschirminhalten als Live-`MediaStream` wird durch Aufrufen von [`navigator.mediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) initiiert, welches ein Versprechen zurückgibt, das in einen Stream aufgelöst wird, der die Live-Bildschirminhalte enthält. Das `displayMediaOptions`-Objekt, das in den nachstehenden Beispielen referenziert wird, könnte ungefähr so aussehen:

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

Sie können diesen Code entweder mit einer asynchronen Funktion und dem [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator schreiben, wie oben gezeigt, oder direkt mit dem {{jsxref("Promise")}}, wie unten zu sehen ist.

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

In jedem Fall reagiert der [User-Agent](/de/docs/Glossary/user_agent), indem er eine Benutzeroberfläche präsentiert, die den Benutzer auffordert, den Bildschirmbereich auszuwählen, der geteilt werden soll. Beide Implementierungen von `startCapture()` geben den `MediaStream` zurück, der die erfassten Bildschirminhalte enthält.

Siehe [Optionen und Einschränkungen](#optionen_und_einschränkungen) unten, um mehr darüber zu erfahren, wie der zu erfassende Oberflächentyp angegeben werden kann, sowie andere Möglichkeiten zur Anpassung des resultierenden Streams.

### Beispiel eines Fensters, das den Benutzer die Auswahl einer Anzeigefläche für die Aufnahme ermöglicht

![Screenshot von Chromes Fenster zur Auswahl einer Quelloberfläche](chrome-screen-capture-window.png)

Der erfasste Stream, `captureStream`, kann dann für alles verwendet werden, das einen Stream als Eingabe akzeptiert. Die [Beispiele](#beispiele) unten zeigen einige Möglichkeiten, den Stream zu verwenden.

### Sichtbare vs. logische Anzeigeflächen

Für die Zwecke der Screen Capture API ist eine **Anzeigefläche** ein beliebiges Inhaltsobjekt, das von der API für Freigabezwecke ausgewählt werden kann. Zu den Freigabeflächen gehören die Inhalte eines Browser-Tabs, eines vollständigen Fensters und eines Monitors (oder einer Gruppe von Monitoren, die zu einer Oberfläche kombiniert werden).

Es gibt zwei Arten von Anzeigeflächen. Eine **sichtbare Anzeigefläche** ist eine Fläche, die vollständig auf dem Bildschirm sichtbar ist, wie z. B. das vorderste Fenster oder Tab, oder der gesamte Bildschirm.

Eine **logische Anzeigefläche** ist eine Fläche, die teilweise oder vollständig verdeckt ist, entweder indem sie in gewissem Maße von einem anderen Objekt überlappt wird oder indem sie vollständig verdeckt oder außerhalb des Bildschirms ist. Wie diese von der Screen Capture API behandelt werden, variiert. Im Allgemeinen stellt der Browser ein Bild zur Verfügung, das den verdeckten Teil der logischen Anzeigefläche auf irgendeine Weise verdeckt, z. B. durch Verwischen oder Ersetzen mit einer Farbe oder einem Muster. Dies geschieht aus Sicherheitsgründen, da der nicht sichtbare Inhalt Daten enthalten kann, die der Benutzer nicht teilen möchte.

Ein User-Agent könnte das Erfassen des gesamten Inhalts eines verdeckten Fensters erlauben, nachdem die Zustimmung des Benutzers eingeholt wurde. In diesem Fall kann der User-Agent den verdeckten Inhalt einbeziehen, entweder indem er den aktuellen Inhalt des verdeckten Teils des Fensters erhält oder indem er den zuletzt sichtbaren Inhalt präsentiert, falls der aktuelle Inhalt nicht verfügbar ist.

### Optionen und Einschränkungen

Das in [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergebene Optionsobjekt wird verwendet, um Optionen für den resultierenden Stream festzulegen.

Die in das Optionsobjekt übergebenen `video`- und `audio`-Objekte können auch zusätzliche Einschränkungen enthalten, die für diese Medientracks spezifisch sind. Lesen Sie [Eigenschaften von geteilten Bildschirm-Tracks](/de/docs/Web/API/MediaTrackConstraints#instance_properties_of_shared_screen_tracks) für Details zu zusätzlichen Einschränkungen zum Konfigurieren eines Bildschirmaufnahmestreams, die zu [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints), [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints) und [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) hinzugefügt wurden.

Keine der Einschränkungen wird auf irgendeine Art angewandt, bevor der aufzuzeichnende Inhalt ausgewählt wurde. Die Einschränkungen ändern, was Sie im resultierenden Stream sehen. Beispielsweise wird eine [`width`](/de/docs/Web/API/MediaTrackConstraints/width)-Einschränkung für das Video angewendet, indem das Video skaliert wird, nachdem der Benutzer den Bereich zum Teilen ausgewählt hat. Sie legt keine Einschränkung für die Größe der Quelle selbst fest.

> [!NOTE]
> Einschränkungen ändern niemals die Liste der Quellen, die von der Screen Sharing API für die Aufnahme verfügbar sind. Dies stellt sicher, dass Webanwendungen den Benutzer nicht zwingen können, spezifische Inhalte zu teilen, indem die Quellliste so lange eingeschränkt wird, bis nur noch ein Element übrig bleibt.

Während die Anzeigeaufnahme aktiv ist, wird die Maschine, die Bildschirminhalte teilt, irgendeine Art von Indikator anzeigen, damit der Benutzer sich bewusst ist, dass eine Freigabe stattfindet.

> [!NOTE]
> Aus Gründen der Privatsphäre und Sicherheit sind Quellen für das Teilen von Bildschirminhalten nicht aufrufbar mit [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices). In diesem Zusammenhang wird das [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) Ereignis nie gesendet, wenn es Änderungen an den für `getDisplayMedia()` verfügbaren Quellen gibt.

### Aufnehmen von geteiltem Audio

[`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) wird am häufigsten verwendet, um Video vom Bildschirm eines Benutzers (oder Teilen davon) zu erfassen. [User-Agents](/de/docs/Glossary/user_agent) können jedoch die Aufnahme von Audio zusammen mit dem Videoinhalt zulassen. Die Quelle dieses Audios könnte das ausgewählte Fenster, das gesamte Audiosystem des Computers oder das Mikrofon des Benutzers (oder eine Kombination von all dem) sein.

Bevor Sie mit einem Projekt beginnen, das das Teilen von Audio erfordert, überprüfen Sie die [Browser-Kompatibilität](/de/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility) für `getDisplayMedia()`, um zu sehen, ob die von Ihnen gewünschten Browser Unterstützung für Audio in erfassten Bildschirmstreams bieten.

Um anzufordern, dass der Bildschirm mit inklusive Audio geteilt wird, könnten die an `getDisplayMedia()` übergebenen Optionen so aussehen:

```js
const displayMediaOptions = {
  video: true,
  audio: true,
};
```

Dies ermöglicht es dem Benutzer, innerhalb der Grenzen dessen, was der User-Agent unterstützt, frei auszuwählen, was immer er möchte. Dies könnte weiter verfeinert werden, indem zusätzliche Optionen und Einschränkungen innerhalb der `audio`- und `video`-Objekte spezifiziert werden:

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

In diesem Beispiel soll die erfasste Anzeigefläche das gesamte Fenster sein. Das Audiotrack sollte idealerweise über Rauschunterdrückungs- und Echokancellationsfunktionen verfügen sowie eine ideale Audio-Samplerate von 44,1 kHz haben und die lokale Audiowiedergabe unterdrücken.

Darüber hinaus gibt die App dem User-Agent den Hinweis, dass er:

- Während der Bildschirmfreigabe ein Steuerelement zur Verfügung stellen sollte, das dem Benutzer erlaubt, das freigegebene Tab dynamisch zu wechseln.
- Das aktuelle Tab von der Liste der Optionen ausblenden sollte, die dem Benutzer präsentiert werden, wenn die Aufnahme angefordert wird.
- Das Systemaudio nicht zu den möglichen Audioquellen hinzufügen sollte, die dem Benutzer angeboten werden.

Das Aufnehmen von Audio ist immer optional, und selbst wenn Webinhalte einen Stream mit sowohl Audio- als auch Videoinhalten anfordern, kann der zurückgegebene `MediaStream` dennoch nur ein Videotrack ohne Audio haben.

## Verwendung des erfassten Streams

Das von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zurückgegebene {{jsxref("promise")}} wird in einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst, der mindestens einen Videostream enthält, der den Bildschirm oder den Bildschirmbereich enthält und basierend auf den Randbedingungen angepasst oder gefiltert wird, die beim Aufruf von `getDisplayMedia()` angegeben wurden.

### Potenzielle Risiken

Datenschutz- und Sicherheitsfragen im Zusammenhang mit der Bildschirmfreigabe sind normalerweise nicht allzu schwerwiegend, aber sie existieren. Das größte potenzielle Problem besteht darin, dass Benutzer unbeabsichtigt Inhalte teilen, die sie nicht teilen wollten.

Beispielsweise können Datenschutz- und/oder Sicherheitsverletzungen leicht auftreten, wenn der Benutzer seinen Bildschirm freigibt und ein sichtbares Hintergrundfenster persönliche Informationen enthält oder wenn sein Passwortmanager im freigegebenen Stream sichtbar ist. Dieser Effekt kann verstärkt werden, wenn logische Anzeigeflächen erfasst werden, die Inhalte enthalten können, von denen der Benutzer überhaupt nichts weiß, geschweige denn sieht.

User-Agents, die den Datenschutz ernst nehmen, sollten Inhalte verbergen, die tatsächlich nicht sichtbar sind, es sei denn, es wurde die Erlaubnis erteilt, diesen Inhalt speziell freizugeben.

### Autorisierung der Erfassung von Anzeigeflächen

Bevor das Streaming der erfassten Bildschirminhalte beginnen kann, wird der [User-Agent](/de/docs/Glossary/user_agent) den Benutzer bitten, die Freigabeanfrage zu bestätigen und den Inhalt auszuwählen, der geteilt werden soll.

## Beispiele

### Streamen von Bildschirmaufnahmen

In diesem Beispiel werden die Inhalte des erfassten Bildschirmbereichs in ein {{HTMLElement("video")}} Element auf derselben Seite gestreamt.

#### JavaScript

Es ist nicht allzu viel Code erforderlich, um dies zu ermöglichen, und wenn Sie mit der Verwendung von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zur Erfassung von Video über eine Kamera vertraut sind, werden Sie sehen, dass [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) sehr vertraut ist.

##### Einrichtung

Zuerst werden einige Konstanten eingerichtet, um die Elemente auf der Seite zu referenzieren, auf die wir zugreifen müssen: das {{HTMLElement("video")}}, in das die erfassten Bildschirminhalte gestreamt werden, ein Block, in den die protokollierten Ausgaben gezeichnet werden, sowie die Start- und Stopp-Schaltflächen, die das Erfassen von Bildschirmbildern ein- und ausschalten.

Das Objekt `displayMediaOptions` enthält die Optionen, die an `getDisplayMedia()` übergeben werden; hier wird die [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)-Eigenschaft auf `window` gesetzt, um anzugeben, dass das ganze Fenster erfasst werden soll.

Schließlich werden Ereignislistener eingerichtet, um Benutzerklicks auf den Start- und Stopp-Schaltflächen zu erkennen.

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

##### Protokollieren von Inhalten

Dieses Beispiel überschreibt bestimmte Methoden der [`console`](/de/docs/Web/API/Console), um deren Meldungen in den {{HTMLElement("pre")}} Block zu Ausgabe, dessen ID `log` ist.

```js
console.log = (msg) => (logElem.textContent = `${logElem.textContent}\n${msg}`);
console.error = (msg) =>
  (logElem.textContent = `${logElem.textContent}\nError: ${msg}`);
```

Dies ermöglicht es uns, [`console.log()`](/de/docs/Web/API/Console/log_static) und [`console.error()`](/de/docs/Web/API/Console/error_static) zu verwenden, um Informationen in das Protokollfeld im Dokument einzugeben.

##### Starten der Anzeigeflächenaufnahme

Die Methode `startCapture()`, die unten gezeigt wird, startet die Erfassung eines [`MediaStream`](/de/docs/Web/API/MediaStream), dessen Inhalte aus einem vom Benutzer ausgewählten Bereich des Bildschirms stammen. `startCapture()` wird aufgerufen, wenn die Schaltfläche "Capture starten" geklickt wird.

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

Nachdem die Inhalte des Protokolls gelöscht wurden, um verbleibenden Text vom vorherigen Verbindungsversuch zu entfernen, ruft `startCapture()` [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) auf und gibt dabei das Randbedingungen-Objekt weiter, das durch `displayMediaOptions` definiert ist. Mit {{jsxref("Operators/await", "await")}} wird die folgende Codezeile erst ausgeführt, nachdem das {{jsxref("promise")}} von `getDisplayMedia()` aufgelöst wurde. Nach der Auflösung gibt das Versprechen einen [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der den Inhalt des Bildschirms, Fensters oder eines anderen, vom Benutzer ausgewählten Bereichs streamt.

Der Stream wird mit dem {{HTMLElement("video")}} Element verbunden, indem der zurückgegebene `MediaStream` in das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des Elements gespeichert wird.

Die `dumpOptionsInfo()` Funktion—die wir uns gleich anschauen werden—gibt Informationen über den Stream aus Bildungszwecken ins Protokollfeld aus.

Falls dies fehlschlägt, gibt die [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Klausel eine Fehlermeldung in das Protokollfeld aus.

##### Stoppen der Anzeigeflächenaufnahme

Die Methode `stopCapture()` wird aufgerufen, wenn die Schaltfläche "Capture beenden" geklickt wird. Sie stoppt den Stream, indem sie die Trackliste mithilfe von [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) abruft und dann die `stop()` Methode jedes Tracks aufruft. Sobald dies abgeschlossen ist, wird `srcObject` auf `null` gesetzt, um sicherzustellen, dass jedem Interessierten bewusst ist, dass kein Stream verbunden ist.

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### Konfigurationsinformationen ausgeben

Zu Informationszwecken ruft die oben gezeigte Methode `startCapture()` eine Methode namens `dumpOptions()` auf, die die aktuellen Trackeinstellungen sowie die zum Zeitpunkt der Erstellung an den Stream gestellten Einschränkungen ausgibt.

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.log("Track settings:");
  console.log(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.log("Track constraints:");
  console.log(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

Die Trackliste wird durch Aufruf von [`getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) auf dem erfassten Bildschirm-`MediaStream` abgerufen. Die derzeit wirksamen Einstellungen werden mithilfe von [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) und die festgelegten Einschränkungen mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) eingeholt.

#### HTML

Das HTML beginnt mit einem einleitenden Absatz, bevor es zum Wesentlichen übergeht.

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

Die Schlüsselelemente der HTML sind:

1. Ein {{HTMLElement("button")}} mit der Beschriftung "Capture starten", der beim Klicken die Funktion `startCapture()` aufruft, um Zugriff auf Bildschirm-Inhalte zu beanspruchen und mit der Erfassung zu beginnen.
2. Eine zweite Schaltfläche "Capture beenden", die bei Klick `stopCapture()` aufruft, um die Erfassung von Bildschirm-Inhalten zu beenden.
3. Ein {{HTMLElement("video")}}, in das die erfassten Bildschirm-Inhalte gestreamt werden.
4. Ein {{HTMLElement("pre")}} Block, in den der mittels der abgefangenen [`console`](/de/docs/Web/API/Console) Methode protokollierte Text eingegeben wird.

#### CSS

Die CSS ist in diesem Beispiel rein kosmetisch. Das Video erhält einen Rahmen und seine Breite wird so gesetzt, dass es fast den gesamten zur Verfügung stehenden horizontalen Platz beansprucht (`width: 98%`). {{cssxref("max-width")}} ist auf `860px` eingestellt, um eine absolute Obergrenze für die Videogröße festzulegen.

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

#### Resultat

Das Endprodukt sieht so aus. Wenn Ihr Browser die Screen Capture API unterstützt, zeigt ein Klick auf "Capture starten" die Oberfläche des [User-Agents](/de/docs/Glossary/user_agent) zur Auswahl eines Bildschirms, Fensters oder Tabs zur Freigabe.

{{EmbedLiveSample("Streaming screen capture", 640, 800, "", "", "", "display-capture")}}

## Sicherheit

Um zu funktionieren, wenn [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) aktiviert ist, benötigen Sie das `display-capture` Recht. Dies kann mithilfe des {{HTTPHeader("Permissions-Policy")}} [HTTP](/de/docs/Glossary/HTTP)-Headers erfolgen, oder—wenn Sie die Screen Capture API in einem {{HTMLElement("iframe")}} verwenden, über das Attribut [`allow`](/de/docs/Web/HTML/Element/iframe#allow) des `<iframe>` Elements.

Beispielsweise ermöglicht diese Zeile in den HTTP-Headern die Screen Capture API für das Dokument und alle eingebetteten {{HTMLElement("iframe")}} Elemente, die von derselben Herkunft geladen werden:

```http
Permissions-Policy: display-capture=(self)
```

Wenn Sie die Bildschirmaufnahme innerhalb eines `<iframe>` durchführen, können Sie die Erlaubnis nur für dieses Frame anfordern, was eindeutig sicherer ist als die allgemeinere Beantragung der Erlaubnis.

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Standbilder mit WebRTC aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)
- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) zum Erhalten eines [`MediaStream`](/de/docs/Web/API/MediaStream) mit den Live-Inhalten eines {{HTMLElement("canvas")}}
