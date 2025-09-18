---
title: Verwendung der Screen Capture API
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{DefaultAPISidebar("Screen Capture API")}}

In diesem Artikel werden wir untersuchen, wie die Screen Capture API und ihre Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwendet werden können, um einen Teil oder den gesamten Bildschirm für das Streaming, die Aufnahme oder das Teilen während einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Konferenzsitzung zu erfassen.

> [!NOTE]
> Es kann nützlich sein, darauf hinzuweisen, dass neuere Versionen des [WebRTC adapter.js shims](https://github.com/webrtcHacks/adapter) Implementierungen von `getDisplayMedia()` enthalten, um Bildschirmfreigabe in Browsern zu ermöglichen, die es unterstützen, aber die aktuelle Standard-API nicht implementieren. Dies funktioniert mindestens mit Chrome, Edge und Firefox.

## Erfassen von Bildschirm-Inhalten

Das Erfassen von Bildschirm-Inhalten als live [`MediaStream`](/de/docs/Web/API/MediaStream) wird durch den Aufruf von [`navigator.mediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) initiiert, der ein Promise zurückgibt, das zu einem Stream aufgelöst wird, der die live Bildschirm-Inhalte enthält. Das `displayMediaOptions` Objekt, das in den folgenden Beispielen referenziert wird, könnte in etwa so aussehen:

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

Sie können diesen Code entweder unter Verwendung einer asynchronen Funktion und des [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) Operators, wie oben gezeigt, oder durch direkte Verwendung des {{jsxref("Promise")}} schreiben, wie unten zu sehen.

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

Unabhängig von der Methode präsentiert der {{Glossary("user_agent", "User Agent")}} eine Benutzeroberfläche, die den Benutzer dazu auffordert, den Bildschirmbereich auszuwählen, der geteilt werden soll. Beide Implementierungen von `startCapture()` geben den [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der die aufgenommenen Display-Bilder enthält.

Siehe [Optionen und Einschränkungen](#optionen_und_einschränkungen) unten für weitere Informationen darüber, wie Sie den Typ der Oberfläche spezifizieren können, den Sie möchten, sowie andere Methoden, um den resultierenden Stream anzupassen.

### Beispiel eines Fensters, das dem Benutzer die Auswahl einer zu erfassenden Anzeigeoberfläche ermöglicht

![Screenshot von Chromes Fenster zur Auswahl einer Quelloberfläche](chrome-screen-capture-window.png)

Anschließend können Sie den erfassten Stream `captureStream` für alles verwenden, was einen Stream als Eingabe akzeptiert. Die [Beispiele](#beispiele) unten zeigen einige Möglichkeiten zur Verwendung des Streams.

### Sichtbare vs. logische Anzeigeoberflächen

Für die Zwecke der Screen Capture API ist eine **Anzeigeoberfläche** jedes Inhaltsobjekt, das von der API für Freigabezwecke ausgewählt werden kann. Freigabeoberflächen umfassen die Inhalte eines Browser-Tabs, eines vollständigen Fensters und eines Monitors (oder einer Gruppe von Monitoren, die zu einer Oberfläche kombiniert werden).

Es gibt zwei Arten von Anzeigeoberflächen. Eine **sichtbare Anzeigeoberfläche** ist eine Oberfläche, die auf dem Bildschirm vollständig sichtbar ist, wie das vorderste Fenster oder Tab oder der gesamte Bildschirm.

Eine **logische Anzeigeoberfläche** ist eine, die teilweise oder vollständig verdeckt ist, entweder durch Überlappung mit einem anderen Objekt oder indem sie vollständig verborgen oder außerhalb des Bildschirms ist. Wie diese von der Screen Capture API behandelt werden, variiert. Im Allgemeinen liefert der Browser ein Bild, das den verborgenen Teil der logischen Anzeigeoberfläche in irgendeiner Weise verdeckt, z. B. durch Unschärfe oder Ersetzen durch eine Farbe oder ein Muster. Dies geschieht aus Sicherheitsgründen, da der Inhalt, der vom Benutzer nicht gesehen werden kann, Daten enthalten kann, die er nicht teilen möchte.

Ein User Agent könnte die Erfassung des gesamten Inhalts eines verdeckten Fensters erlauben, nachdem er die Erlaubnis des Benutzers erhalten hat. In diesem Fall kann der User Agent den verdeckten Inhalt einbeziehen, entweder durch Abrufen der aktuellen Inhalte des verborgenen Teils des Fensters oder durch Präsentation der zuletzt sichtbaren Inhalte, wenn die aktuellen Inhalte nicht verfügbar sind.

### Optionen und Einschränkungen

Das in [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergebene Optionsobjekt wird verwendet, um Optionen für den resultierenden Stream festzulegen.

Die `video` und `audio` Objekte, die in das Optionsobjekt übergeben werden, können auch zusätzliche Einschränkungen für diese Medienspuren enthalten. Siehe [Eigenschaften von freigegebenen Bildschirmschienen](/de/docs/Web/API/MediaTrackConstraints#instance_properties_of_shared_screen_tracks) für Details zu zusätzlichen Einschränkungen zur Konfiguration eines Bildschirmaufnahme-Streams, die zu [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints), [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints) und [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) hinzugefügt werden.

Keine der Einschränkungen wird in irgendeiner Weise angewendet, bis der Inhalt zur Erfassung ausgewählt wurde. Die Einschränkungen ändern, was Sie im resultierenden Stream sehen. Beispielsweise wird, wenn Sie eine [`width`](/de/docs/Web/API/MediaTrackConstraints/width) Einschränkung für das Video angeben, diese angewendet, indem das Video skaliert wird, nachdem der Benutzer den zu teilenden Bereich ausgewählt hat. Es stellt keine Einschränkung für die Größe der Quelle selbst dar.

> [!NOTE]
> Einschränkungen verändern _niemals_ die Liste der von der Screen Sharing API zur Erfassung verfügbaren Quellen. Dies stellt sicher, dass Webanwendungen den Benutzer nicht zwingen können, spezifische Inhalte durch Einschränkung der Quellliste zu teilen, bis nur noch ein Element übrig bleibt.

Während die Display-Aufnahme aktiv ist, zeigt die Maschine, die die Bildschirm-Inhalte teilt, eine Art von Indikator an, damit der Benutzer weiß, dass die Freigabe stattfindet.

> [!NOTE]
> Aus Datenschutz- und Sicherheitsgründen sind Bildschirmfreigabequellen nicht durch [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) auflistbar. In verwandtem Zusammenhang wird das [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) Ereignis niemals gesendet, wenn sich die verfügbaren Quellen für `getDisplayMedia()` ändern.

### Erfassen von gemeinsam genutztem Audio

[`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) wird am häufigsten verwendet, um Video des Bildschirms eines Benutzers (oder Teile davon) zu erfassen. Jedoch können {{Glossary("user_agent", "User Agents")}} auch das Erfassen von Audio zusammen mit dem Videoinhalt ermöglichen. Die Quelle dieses Audios könnte das ausgewählte Fenster, das gesamte Audiosystem des Computers oder das Mikrofon des Benutzers sein (oder eine Kombination all dessen).

Bevor Sie ein Projekt starten, das die Freigabe von Audio erfordert, sollten Sie die [Browser-Kompatibilität](/de/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility) von `getDisplayMedia()` überprüfen, um festzustellen, ob die von Ihnen gewünschten Browser Unterstützung für Audio in erfassten Bildschirm-Streams bieten.

Um zu verlangen, dass der Bildschirm mit enthaltenem Audio geteilt wird, könnten die in `getDisplayMedia()` übergebenen Optionen so aussehen:

```js
const displayMediaOptions = {
  video: true,
  audio: true,
};
```

Dies erlaubt dem Benutzer völlige Freiheit, auszuwählen, was er möchte, innerhalb der Grenzen dessen, was der User Agent unterstützt. Dies könnte weiter verfeinert werden, indem zusätzliche Optionen und Einschränkungen innerhalb der `audio` und `video` Objekte spezifiziert werden:

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

In diesem Beispiel soll die gesamte Fensteroberfläche erfasst werden. Die Audiospur sollte idealerweise die Funktionen zur Geräuschunterdrückung und Echo-Reduzierung aktiviert haben, sowie eine ideale Audio-Sample-Rate von 44,1kHz und die Unterdrückung der lokalen Audiowiedergabe.

Zusätzlich gibt die App dem User Agent folgende Hinweise:

- Während der Bildschirmfreigabe eine Steuerung bereitzustellen, die es dem Benutzer ermöglicht, dynamisch den freigegebenen Tab zu wechseln.
- Den aktuellen Tab aus der Liste der dem Benutzer präsentierten Optionen auszublenden, wenn die Erfassung angefordert wird.
- Das Systemaudio nicht unter den dem Benutzer angebotenen möglichen Audioquellen einzuschließen.

Das Erfassen von Audio ist immer optional, und selbst wenn Webinhalte einen Stream mit sowohl Audio- als auch Videoanfragen, kann der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) dennoch nur einen Video-Track ohne Audio enthalten.

## Nutzung des erfassten Streams

Das von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zurückgegebene {{jsxref("promise")}} wird zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst, das mindestens einen Videostream enthält, der den Bildschirm oder den Bildschirmbereich umfasst, und der basierend auf den spezifizierten Einschränkungen angepasst oder gefiltert wird, als `getDisplayMedia()` aufgerufen wurde.

### Potenzielle Risiken

Datenschutz- und Sicherheitsprobleme im Zusammenhang mit der Bildschirmfreigabe sind in der Regel nicht übermäßig ernst, aber sie existieren. Das größte mögliche Problem ist, dass Benutzer unbeabsichtigt Inhalte freigeben, die sie nicht teilen möchten.

Zum Beispiel können Datenschutz- und/oder Sicherheitsverletzungen leicht auftreten, wenn der Benutzer seinen Bildschirm teilt und ein sichtbares Hintergrundfenster zufällig persönliche Informationen enthält, oder wenn ihr Passwort-Manager im freigegebenen Stream sichtbar ist. Dieser Effekt kann verstärkt werden, wenn logische Anzeigeoberflächen erfasst werden, die Inhalte enthalten können, von denen der Benutzer nicht einmal weiß, geschweige denn sieht.

User Agents, die Datenschutz ernst nehmen, sollten Inhalte, die tatsächlich nicht auf dem Bildschirm sichtbar sind, verschleiern, es sei denn, es wurde die Berechtigung erteilt, diese Inhalte spezifisch zu teilen.

### Autorisierung der Erfassung von Display-Inhalten

Bevor das Streaming der erfassten Bildschirm-Inhalte beginnen kann, wird der {{Glossary("user_agent", "User Agent")}} den Benutzer bitten, die Freigabeanfrage zu bestätigen und den Inhalt auszuwählen, der geteilt werden soll.

## Beispiele

### Streamen der Bildschirmaufnahme

In diesem Beispiel werden die Inhalte des erfassten Bildschirmbereichs in ein {{HTMLElement("video")}} Element auf derselben Seite gestreamt.

#### JavaScript

Es ist nicht viel Code erforderlich, um dies zu realisieren, und wenn Sie mit der Verwendung von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zur Erfassung von Video von einer Kamera vertraut sind, wird Ihnen [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) sehr vertraut erscheinen.

##### Einrichtung

Zuerst werden einige Konstanten eingerichtet, um auf die Elemente der Seite zu verweisen, auf die wir Zugriff benötigen: das {{HTMLElement("video")}}, in welches die erfassten Bildschirm-Inhalte gestreamt werden, ein Kasten, in den protokollierte Ausgaben gezeichnet werden, sowie die Start- und Stop-Tasten, die die Erfassung von Bildschirmbildern ein- und ausschalten.

Das Objekt `displayMediaOptions` enthält die Optionen, die an `getDisplayMedia()` übergeben werden sollen. In diesem Fall gibt die [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) Eigenschaft `window` an, was bedeutet, dass das gesamte Fenster erfasst werden soll.

Schließlich werden Ereignis-Listener eingerichtet, um Benutzer-Klicks auf die Start- und Stop-Tasten zu erkennen.

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

##### Protokollierung von Inhalten

Dieses Beispiel überschreibt bestimmte [`console`](/de/docs/Web/API/console) Methoden, um ihre Nachrichten in den {{HTMLElement("pre")}} Block auszugeben, dessen ID `log` ist.

```js
console.log = (msg) => (logElem.textContent = `${logElem.textContent}\n${msg}`);
console.error = (msg) =>
  (logElem.textContent = `${logElem.textContent}\nError: ${msg}`);
```

Damit können wir [`console.log()`](/de/docs/Web/API/console/log_static) und [`console.error()`](/de/docs/Web/API/console/error_static) verwenden, um Informationen in die Logfeld im Dokument zu protokollieren.

##### Starten der Display-Erfassung

Die `startCapture()` Methode startet die Erfassung eines [`MediaStream`](/de/docs/Web/API/MediaStream), dessen Inhalte aus einem vom Benutzer ausgewählten Bereich des Bildschirms entnommen werden. `startCapture()` wird aufgerufen, wenn die Schaltfläche "Start Capture" angeklickt wird.

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

Nach dem Löschen der Inhalte des Protokolls, um etwaigen Resttext vom vorherigen Verbindungsversuch zu beseitigen, ruft `startCapture()` [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) auf und übergibt dabei das durch `displayMediaOptions` definierte Einschränkungsobjekt. Durch die Verwendung von {{jsxref("Operators/await", "await")}} wird die folgende Codezeile erst ausgeführt, nachdem das durch `getDisplayMedia()` zurückgegebene {{jsxref("promise")}} aufgelöst wurde. Nach der Auflösung gibt das Promise einen [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der die Inhalte des Bildschirms, Fensters oder eines anderen vom Benutzer ausgewählten Bereichs streamt.

Der Stream wird mit dem {{HTMLElement("video")}} Element verbunden, indem der zurückgegebene `MediaStream` in das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des Elements gespeichert wird.

Die `dumpOptionsInfo()` Funktion — die wir uns gleich ansehen werden — gibt Informationen über den Stream in das Protokollfeld aus, zu Bildungszwecken.

Wenn irgendetwas davon fehlschlägt, gibt die [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Klausel eine Fehlermeldung in das Protokollfeld aus.

##### Beenden der Display-Erfassung

Die `stopCapture()` Methode wird aufgerufen, wenn die Schaltfläche "Stop Capture" angeklickt wird. Sie stoppt den Stream, indem sie seine Liste von Tracks mit [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) abruft und dann die [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop) Methode jedes Tracks aufruft. Sobald das erledigt ist, wird `srcObject` auf `null` gesetzt, um sicherzustellen, dass jedem Interessierten klar ist, dass kein Stream verbunden ist.

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### Ausgabe von Konfigurationsinformationen

Der Informierungszwecke halber ruft die oben gezeigte `startCapture()` Methode eine Methode namens `dumpOptions()` auf, die die aktuellen Track-Einstellungen sowie die bei der Erstellung des Streams festgelegten Einschränkungen ausgibt.

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.log("Track settings:");
  console.log(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.log("Track constraints:");
  console.log(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

Die Track-Liste wird durch Aufrufen von [`getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) auf dem erfassten Bildschirm [`MediaStream`](/de/docs/Web/API/MediaStream) abgerufen. Die aktuell in Kraft befindlichen Einstellungen werden mit [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) und die festgelegten Einschränkungen mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) erlangt.

#### HTML

Das HTML beginnt mit einem einleitenden Absatz und geht dann auf das Wesentliche ein.

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

1. Ein {{HTMLElement("button")}} mit der Aufschrift "Start Capture", der bei einem Klick die Funktion `startCapture()` aufruft, um den Zugriff anzufordern und die Bildschirm-Inhalte zu erfassen.
2. Ein zweiter Button, "Stop Capture", der bei Klick `stopCapture()` aufruft, um die Erfassung der Bildschirm-Inhalte zu beenden.
3. Ein {{HTMLElement("video")}}, in das die erfassten Bildschirm-Inhalte gestreamt werden.
4. Ein {{HTMLElement("pre")}} Block, in den der vom abgefangenen [`console`](/de/docs/Web/API/console) method ausgegebene Text platziert wird.

#### CSS

Das CSS ist in diesem Beispiel rein kosmetischer Natur. Das Video erhält einen Rahmen, und seine Breite wird so eingestellt, dass sie fast den gesamten verfügbaren horizontalen Raum einnimmt (`width: 98%`). {{cssxref("max-width")}} wird auf `860px` gesetzt, um eine absolute Obergrenze für die Größe des Videos festzulegen,

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

Das Endprodukt sieht so aus. Wenn Ihr Browser die Screen Capture API unterstützt, wird beim Klicken auf "Start Capture" die {{Glossary("user_agent", "Benutzeroberfläche")}} für die Auswahl eines Bildschirms, Fensters oder Tabs zum Teilen angezeigt.

{{EmbedLiveSample("Streaming screen capture", 640, 800, "", "", "", "display-capture")}}

## Sicherheit

Um zu funktionieren, wenn [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) aktiviert ist, benötigen Sie die Berechtigung `display-capture`. Dies kann mit dem {{HTTPHeader("Permissions-Policy")}} {{Glossary("HTTP", "HTTP")}} Header oder – falls Sie die Screen Capture API in einem {{HTMLElement("iframe")}} verwenden – mit dem [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut des `<iframe>` Elements erfolgen.

Zum Beispiel wird diese Zeile in den HTTP-Headern die Screen Capture API für das Dokument und alle eingebetteten {{HTMLElement("iframe")}} Elemente aktivieren, die vom selben Ursprung geladen werden:

```http
Permissions-Policy: display-capture=(self)
```

Wenn Sie die Bildschirmaufnahme innerhalb eines `<iframe>` durchführen, können Sie die Erlaubnis nur für dieses Frame anfordern, was eindeutig sicherer ist als die allgemeinere Anforderung der Berechtigung:

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Aufnehmen von Standbildern mit WebRTC](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)
- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) zum Erhalt eines [`MediaStream`](/de/docs/Web/API/MediaStream) mit den Live-Inhalten eines {{HTMLElement("canvas")}}
