---
title: Verwendung der Screen Capture API
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Screen Capture API")}}

In diesem Artikel werden wir untersuchen, wie die Screen Capture API und ihre Methode {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} genutzt werden, um ein Bildschirmteil oder den gesamten Bildschirm für das Streaming, die Aufzeichnung oder das Teilen während einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Konferenzsitzung zu erfassen.

> [!NOTE]
> Es ist nützlich zu wissen, dass neuere Versionen des [WebRTC adapter.js Shims](https://github.com/webrtcHacks/adapter) Implementierungen von `getDisplayMedia()` enthalten, um das Teilen des Bildschirms in Browsern zu ermöglichen, die es unterstützen, aber die aktuelle Standard-API nicht implementieren. Dies funktioniert mindestens mit Chrome, Edge und Firefox.

## Erfassung von Bildschirminhalten

Das Erfassen von Bildschirminhalten als ein Live-{{domxref("MediaStream")}} wird durch einen Aufruf von {{domxref("MediaDevices.getDisplayMedia", "navigator.mediaDevices.getDisplayMedia()")}} initiiert, welches ein Promise zurückgibt, das sich zu einem Stream mit den Live-Bildschirminhalten auflöst. Das im folgenden Beispiel referenzierte Objekt `displayMediaOptions` könnte wie folgt aussehen:

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

### Start der Bildschirmerfassung: `async`/`await`-Stil

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

Sie können diesen Code entweder mit einer asynchronen Funktion und dem [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator schreiben, wie oben gezeigt, oder das {{jsxref("Promise")}} direkt verwenden, wie unten gezeigt.

### Start der Bildschirmerfassung: `Promise`-Stil

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

In beiden Fällen antwortet der {{Glossary("user agent")}}, indem er eine Benutzeroberfläche präsentiert, die den Benutzer auffordert, den zu teilenden Bildschirmbereich auszuwählen. Beide Implementierungen von `startCapture()` geben den {{domxref("MediaStream")}} zurück, der die erfassten Bildschirmbilder enthält.

Siehe [Optionen und Einschränkungen](#optionen_und_einschränkungen) unten für weitere Informationen darüber, wie Sie den gewünschten Oberflächentyp angeben können und andere Möglichkeiten zur Anpassung des resultierenden Streams.

### Beispiel eines Fensters, das dem Benutzer die Auswahl einer anzuzeigenden Oberfläche ermöglicht

![Screenshot des Chrome-Fensters zur Auswahl der Quelle](chrome-screen-capture-window.png)

Sie können den erfassten Stream, `captureStream`, dann für alles verwenden, was einen Stream als Eingabe akzeptiert. Die [Beispiele](#beispiele) unten zeigen einige Möglichkeiten, wie der Stream verwendet werden kann.

### Sichtbare vs. logische Anzeigeflächen

Im Kontext der Screen Capture API ist eine **Anzeigefläche** jedes Inhaltsobjekt, das von der API für Teilzwecke ausgewählt werden kann. Zu teilende Oberflächen beinhalten die Inhalte eines Browser-Tabs, eines vollständigen Fensters und eines Monitors (oder einer Gruppe von Monitoren, die zu einer Oberfläche zusammengefasst sind).

Es gibt zwei Arten von Anzeigeflächen: Eine **sichtbare Anzeigefläche** ist eine Oberfläche, die vollständig auf dem Bildschirm sichtbar ist, wie das vorderste Fenster oder der Tab oder der gesamte Bildschirm.

Eine **logische Anzeigefläche** ist eine, die teilweise oder vollständig verdeckt ist, entweder durch Überlappung durch ein anderes Objekt oder weil sie vollständig verdeckt oder vom Bildschirm verschwunden ist. Wie diese von der Screen Capture API behandelt werden, ist unterschiedlich. In der Regel wird vom Browser ein Bild bereitgestellt, das den verdeckten Teil der logischen Anzeigefläche auf irgendeine Weise verdeckt, z. B. durch Unschärfe oder Ersetzung durch eine Farbe oder ein Muster. Dies geschieht aus Sicherheitsgründen, da der Inhalt, der für den Benutzer nicht sichtbar ist, Daten enthalten kann, die er nicht teilen möchte.

Ein Benutzeragent kann die Erfassung des gesamten Inhalts eines verdeckten Fensters nach Einholung der Zustimmung des Benutzers zulassen. In diesem Fall kann der Benutzeragent den verdeckten Inhalt einbeziehen, entweder indem er die aktuellen Inhalte des verdeckten Teils des Fensters erhält oder die zuletzt sichtbaren Inhalte anzeigt, wenn die aktuellen Inhalte nicht verfügbar sind.

### Optionen und Einschränkungen

Das Optionsobjekt, das an {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} übergeben wird, dient dazu, Optionen für den resultierenden Stream festzulegen.

Die in das Optionsobjekt übergebenen `video`- und `audio`-Objekte können auch zusätzliche Einschränkungen enthalten, die spezifisch für diese Medientracks sind. Siehe [Eigenschaften freigegebener Bildschirmtraces](/de/docs/Web/API/MediaTrackConstraints#instance_properties_of_shared_screen_tracks) für Details zu zusätzlichen Einschränkungen zur Konfiguration eines Bildschirmaufnahme-Streams, die zu {{domxref("MediaTrackConstraints")}}, {{domxref("MediaTrackSupportedConstraints")}} und {{domxref("MediaTrackSettings")}} hinzugefügt werden.

Keine der Einschränkungen wird auf irgendeine Weise angewendet, bevor der Inhalt zur Erfassung ausgewählt wurde. Die Einschränkungen verändern, was Sie im resultierenden Stream sehen. Wenn Sie zum Beispiel eine {{domxref("MediaTrackConstraints.width", "Breite")}}-Einschränkung für das Video angeben, wird sie angewendet, indem das Video nach Auswahl des Benutzerbereichs skaliert wird. Sie stellt keine Einschränkung für die Größe der Quelle selbst dar.

> [!NOTE]
> Einschränkungen führen _niemals_ zu Änderungen an der Liste der Quellen, die vom Screen Sharing API erfasst werden können. Dies stellt sicher, dass Webanwendungen den Benutzer nicht dazu zwingen können, bestimmte Inhalte zu teilen, indem sie die Quellliste so einschränken, dass nur noch ein Element übrig bleibt.

Während die Bildschirmübertragung aktiv ist, wird die Maschine, die Bildschirminhalte teilt, eine Form von Anzeige haben, die den Benutzer darauf hinweist, dass gerade eine Übertragung stattfindet.

> [!NOTE]
> Aus Datenschutz- und Sicherheitsgründen sind Bildschirmübertragungsquellen über {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}} nicht aufzulisten. In diesem Zusammenhang wird das {{domxref("MediaDevices/devicechange_event", "devicechange")}}-Ereignis auch nie gesendet, wenn sich die verfügbaren Quellen für `getDisplayMedia()` ändern.

### Erfassung von gemeinsamem Audio

{{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} wird am häufigsten verwendet, um Video vom Bildschirm eines Benutzers (oder Teilen davon) zu erfassen. Allerdings dürfen {{Glossary("user agent", "Benutzeragenten")}} auch die Erfassung von Audio zusammen mit den Videoinhalten zulassen. Die Quelle dieses Audios könnte das ausgewählte Fenster, das gesamte Audiosystem des Computers oder das Mikrofon des Benutzers (oder eine Kombination davon) sein.

Bevor Sie ein Projekt beginnen, das die Erfassung von Audio erfordert, sollten Sie die [Browserkompatibilität](/de/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility) für `getDisplayMedia()` prüfen, um festzustellen, ob die von Ihnen gewünschten Browser Audio in erfassten Bildschirm-Streams unterstützen.

Um zu verlangen, dass der Bildschirm mit einbezogenem Audio freigegeben wird, könnten die in `getDisplayMedia()` übergebenen Optionen so aussehen:

```js
const displayMediaOptions = {
  video: true,
  audio: true,
};
```

Dies gibt dem Benutzer die volle Freiheit, zu wählen, was er möchte, innerhalb der Grenzen dessen, was der Benutzeragent unterstützt. Dies könnte weiter verfeinert werden, indem zusätzliche Optionen und Einschränkungen innerhalb der `audio`- und `video`-Objekte angegeben werden:

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

In diesem Beispiel soll die gesamte Fensteroberfläche erfasst werden. Der Audiotrack sollte idealerweise Funktionen zur Geräuschunterdrückung und Echoschutz aktiviert haben sowie eine ideale Audio-Abtastrate von 44,1 kHz und Unterdrückung der lokalen Audiowiedergabe.

Darüber hinaus gibt die App dem Benutzeragenten den Hinweis, er solle:

- Eine Steuerung während der Bildschirmübertragung bereitstellen, die es dem Benutzer ermöglicht, den freigegebenen Tab dynamisch zu wechseln.
- Den aktuellen Tab aus der Liste der dem Benutzer angezeigten Optionen beim Anfordern der Freigabe auszuschließen.
- Das Systemaudio nicht zu den möglichen dem Benutzer angebotenen Audioquellen hinzufügen.

Die Erfassung von Audio ist immer optional, und selbst wenn Web-Inhalte einen Stream mit sowohl Audio als auch Video anfordern, kann der zurückgegebene {{domxref("MediaStream")}} nur einen Videotrack ohne Audio enthalten.

## Verwendung des erfassten Streams

Das von {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} zurückgegebene {{jsxref("promise")}} wird zu einem {{domxref("MediaStream")}} aufgelöst, das mindestens einen Videotrack enthält, der den Bildschirm oder Bildschirmbereich enthält und der auf Basis der beim Aufruf von `getDisplayMedia()` festgelegten Einschränkungen angepasst oder gefiltert ist.

### Potenzielle Risiken

Datenschutz- und Sicherheitsbedenken beim Bildschirmteilen sind normalerweise nicht allzu gravierend, aber sie existieren. Das größte potenzielle Problem besteht darin, dass Benutzer versehentlich Inhalte teilen, die sie nicht teilen wollten.

Zum Beispiel können Datenschutz- und/oder Sicherheitsverletzungen leicht auftreten, wenn der Benutzer seinen Bildschirm teilt und ein sichtbares Hintergrundfenster zufällig persönliche Informationen enthält oder wenn ihr Passwort-Manager im freigegebenen Stream sichtbar ist. Dieser Effekt kann verstärkt werden, wenn logische Anzeigeflächen erfasst werden, die möglicherweise Inhalte enthalten, die der Benutzer gar nicht kennt, geschweige denn sieht.

Benutzeragenten, die den Datenschutz ernst nehmen, sollten Inhalte verschleiern, die tatsächlich nicht sichtbar auf dem Bildschirm sind, es sei denn, es wurde die Erlaubnis erteilt, diese Inhalte speziell zu teilen.

### Autorisierung der Erfassung von Anzeigeinhalten

Bevor das Streaming der erfassten Bildschirminhalte beginnen kann, wird der {{Glossary("user agent")}} den Benutzer bitten, die Freigabeforderung zu bestätigen und die Inhalte auszuwählen, die geteilt werden sollen.

## Beispiele

### Streaming von Bildschirmaufzeichnungen

In diesem Beispiel werden die Inhalte des erfassten Bildschirmbereichs in ein {{HTMLElement("video")}}-Element derselben Seite gestreamt.

#### JavaScript

Es ist nicht allzu viel Code erforderlich, um dies zu realisieren, und wenn Sie damit vertraut sind, {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} zu verwenden, um Video von einer Kamera zu erfassen, werden Sie feststellen, dass {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} sehr vertraut wirkt.

##### Einrichtung

Zuerst werden einige Konstanten eingerichtet, um auf die Elemente der Seite zu verweisen, auf die wir Zugriff benötigen: das {{HTMLElement("video")}}, in das die erfassten Bildschirminhalte gestreamt werden, ein Bereich, in dem die protokollierten Ausgaben gezeichnet werden, und die Start- und Stop-Schaltflächen, die das Ein- und Ausschalten der Erfassung von Bildschirmbildern steuern.

Das Objekt `displayMediaOptions` enthält die Optionen, die bei `getDisplayMedia()` übergeben werden; hier ist die {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}}-Eigenschaft auf `window` gesetzt, was bedeutet, dass das gesamte Fenster erfasst werden soll.

Schließlich werden Event-Listener festgelegt, um zu erkennen, wenn der Benutzer auf die Start- und Stop-Schaltflächen klickt.

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

##### Protokollierungsinhalt

Dieses Beispiel überschreibt bestimmte {{domxref("console")}}-Methoden, um deren Nachrichten in den {{HTMLElement("pre")}}-Block auszugeben, dessen ID `log` ist.

```js
console.log = (msg) => (logElem.textContent = `${logElem.textContent}\n${msg}`);
console.error = (msg) =>
  (logElem.textContent = `${logElem.textContent}\nError: ${msg}`);
```

Dies ermöglicht es uns, {{domxref("console/log_static", "console.log()")}} und {{domxref("console.error_static", "console.error()")}} zu verwenden, um Informationen im Protokollierungsbereich des Dokuments zu speichern.

##### Starten der Display-Erfassung

Die Methode `startCapture()` startet die Erfassung eines {{domxref("MediaStream")}}, dessen Inhalte aus einem vom Benutzer ausgewählten Bildschirmbereich stammen. `startCapture()` wird aufgerufen, wenn die Schaltfläche "Start Capture" geklickt wird.

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

Nach dem Leeren des Inhalts des Protokolls, um eventuelle verbliebene Texte vom vorherigen Verbindungsversuch zu entfernen, ruft `startCapture()` {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} auf und übergibt das durch `displayMediaOptions` definierte Einschränkungsobjekt. Mit dem {{jsxref("Operators/await", "await")}} wird die folgende Codezeile erst ausgeführt, nachdem das von `getDisplayMedia()` zurückgegebene {{jsxref("promise")}} aufgelöst wird. Nach der Auflösung gibt das Promise ein {{domxref("MediaStream")}} zurück, das die Inhalte des vom Benutzer ausgewählten Bildschirms, Fensters oder Bereichs streamen wird.

Der Stream wird mit dem {{HTMLElement("video")}}-Element verbunden, indem der zurückgegebene `MediaStream` in das {{domxref("HTMLMediaElement.srcObject", "srcObject")}} des Elements gespeichert wird.

Die Funktion `dumpOptionsInfo()` — die wir gleich untersuchen werden — gibt Informationen über den Stream in das Protokollfeld zur pädagogischen Zwecke aus.

Wenn eines davon scheitert, gibt die [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Klausel eine Fehlermeldung in das Protokollfeld aus.

##### Beenden der Display-Erfassung

Die Methode `stopCapture()` wird aufgerufen, wenn die Schaltfläche "Stop Capture" geklickt wird. Sie stoppt den Stream, indem sie die Track-Liste mit {{domxref("MediaStream.getTracks()")}} abruft und dann die `stop()`-Methode jedes Tracks aufruft. Danach wird `srcObject` auf `null` gesetzt, um sicherzustellen, dass auch der letzte Interessierte versteht, dass kein Stream mehr verbunden ist.

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### Konfigurationsinformationen ausgeben

Aus Informationsgründen ruft die oben gezeigte `startCapture()`-Methode eine Methode namens `dumpOptions()` auf, die die aktuellen Track-Einstellungen sowie die Einschränkungen ausgibt, die beim Erstellen des Streams festgelegt wurden.

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.log("Track settings:");
  console.log(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.log("Track constraints:");
  console.log(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

Die Trackliste wird durch Aufrufen von {{domxref("MediaStream.getVideoTracks", "getVideoTracks()")}} für den erfassten Bildschirm-{{domxref("MediaStream")}} abgerufen. Die aktuell wirksamen Einstellungen werden mit {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} und die festgelegten Einschränkungen mit {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} abgerufen.

#### HTML

Das HTML beginnt mit einem einführenden Absatz und geht dann in den Kern des Themas über.

```html
<p>
  Dieses Beispiel zeigt Ihnen die Inhalte des ausgewählten Bereichs Ihres Displays.
  Klicken Sie auf die Schaltfläche "Start Capture", um zu beginnen.
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

Die wichtigsten Teile des HTML-Codes sind:

1. Eine {{HTMLElement("button")}} mit der Beschriftung "Start Capture", die beim Klicken die Funktion `startCapture()` aufruft, um den Zugriff zu beantragen und die Erfassung von Bildschirminhalten zu starten.
2. Ein zweiter Button "Stop Capture", der beim Klicken `stopCapture()` aufruft, um die Erfassung von Bildschirminhalten zu beenden.
3. Ein {{HTMLElement("video")}}, in das die erfassten Bildschirminhalte gestreamt werden.
4. Ein {{HTMLElement("pre")}}-Block, in den der abgefangene {{domxref("console")}}-Methodentext eingefügt wird.

#### CSS

Das CSS ist in diesem Beispiel vollständig kosmetisch. Das Video bekommt einen Rahmen und seine Breite wird so eingestellt, dass es fast den gesamten verfügbaren horizontalen Raum einnimmt (`width: 98%`). {{cssxref("max-width")}} wird auf `860px` gesetzt, um eine absolute Obergrenze für die Videogröße festzulegen,

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

Das Endprodukt sieht so aus. Wenn Ihr Browser die Screen Capture API unterstützt, wird durch Klicken auf "Start Capture" die Oberfläche des {{Glossary("user agent", "user agents")}} angezeigt, um einen Bildschirm, ein Fenster oder einen Tab zum Teilen auszuwählen.

{{EmbedLiveSample("Streaming screen capture", 640, 800, "", "", "", "display-capture")}}

## Sicherheit

Um zu funktionieren, wenn die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) aktiviert ist, benötigen Sie die Berechtigung `display-capture`. Dies kann mit dem {{HTTPHeader("Permissions-Policy")}} {{Glossary("HTTP")}}-Header erfolgen oder – wenn Sie die Screen Capture API in einem {{HTMLElement("iframe")}} verwenden, durch das `allow`-Attribut des `<iframe>`-Elements.

Beispielsweise wird diese Zeile in den HTTP-Headern die Screen Capture API für das Dokument und für alle darin eingebetteten {{HTMLElement("iframe")}}-Elemente aktivieren, die aus dem gleichen Ursprung geladen werden:

```http
Permissions-Policy: display-capture=(self)
```

Wenn Sie die Bildschirmaufnahme innerhalb eines `<iframe>` ausführen, können Sie die Berechtigung nur für diesen Frame beantragen, was klarer sicherer ist als das allgemeine Anfordern der Berechtigung:

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fotos mit WebRTC aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)
- {{domxref("HTMLCanvasElement.captureStream()")}}, um einen {{domxref("MediaStream")}} mit den Live-Inhalten eines {{HTMLElement("canvas")}} zu erhalten
