---
title: Verwendung der Screen Capture API
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{DefaultAPISidebar("Screen Capture API")}}

In diesem Artikel werden wir untersuchen, wie die Screen Capture API und ihre Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwendet werden können, um einen Teil oder den gesamten Bildschirm für Streaming, Aufnahme oder Freigabe während einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Konferenzsitzung zu erfassen.

> [!NOTE]
> Es kann nützlich sein zu beachten, dass neuere Versionen des [WebRTC adapter.js Shim](https://github.com/webrtcHacks/adapter) Implementierungen von `getDisplayMedia()` enthalten, um die Bildschirmfreigabe in Browsern zu ermöglichen, die es unterstützen, aber die aktuelle Standard-API nicht implementieren. Dies funktioniert zumindest mit Chrome, Edge und Firefox.

## Bildschirminhalt erfassen

Das Erfassen von Bildschirminhalt als Live-[`MediaStream`](/de/docs/Web/API/MediaStream) wird durch Aufrufen von [`navigator.mediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) initiiert, was ein Versprechen zurückgibt, das zu einem Stream mit dem Live-Bildschirminhalt aufgelöst wird. Das Objekt `displayMediaOptions`, das in den folgenden Beispielen referenziert wird, könnte folgendermaßen aussehen:

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

Sie können diesen Code entweder unter Verwendung einer asynchronen Funktion und des [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operators schreiben, wie oben gezeigt, oder das {{jsxref("Promise")}} direkt verwenden, wie unten gezeigt.

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

In beiden Fällen reagiert der {{Glossary("user_agent", "User Agent")}}, indem er eine Benutzeroberfläche präsentiert, die den Benutzer dazu auffordert, den zu teilenden Bildschirmbereich auszuwählen. Beide Implementierungen von `startCapture()` geben den [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der die aufgenommenen Display-Bilder enthält.

Weitere Informationen darüber, wie Sie den gewünschten Oberflächentyp angeben, sowie andere Möglichkeiten zum Anpassen des resultierenden Streams, finden Sie im Abschnitt [Optionen und Einschränkungen](#optionen_und_einschränkungen) weiter unten.

### Beispiel für ein Fenster, das es dem Benutzer ermöglicht, eine Display-Oberfläche zur Aufnahme auszuwählen

![Screenshot von Chromes Fenster zur Auswahl einer Quellenoberfläche](chrome-screen-capture-window.png)

Sie können dann den aufgenommenen Stream, `captureStream`, für alles verwenden, das einen Stream als Eingabe akzeptiert. Die [Beispiele](#beispiele) weiter unten zeigen einige Möglichkeiten zur Nutzung des Streams.

### Sichtbare vs. logische Anzeigeoberflächen

Im Kontext der Screen Capture API ist eine **Anzeigeoberfläche** jedes Inhaltsobjekt, das von der API für Freigabezwecke ausgewählt werden kann. Freigegebene Oberflächen umfassen den Inhalt eines Browser-Tabs, ein komplettes Fenster und einen Monitor (oder eine Gruppe von Monitoren, die zu einer Oberfläche zusammengefasst sind).

Es gibt zwei Arten von Anzeigeoberflächen. Eine **sichtbare Anzeigeoberfläche** ist eine Oberfläche, die vollständig auf dem Bildschirm sichtbar ist, wie zum Beispiel das vorderste Fenster oder der vorderste Tab, oder der gesamte Bildschirm.

Eine **logische Anzeigeoberfläche** ist eine, die teilweise oder vollständig verdeckt ist, entweder indem sie in gewissem Umfang von einem anderen Objekt überlappt wird oder vollständig verdeckt oder außerhalb des Bildschirms liegt. Wie diese von der Screen Capture API behandelt werden, variiert. Im Allgemeinen liefert der Browser ein Bild, das den versteckten Teil der logischen Anzeigeoberfläche in irgendeiner Weise verschleiert, etwa durch Unschärfe oder Ersetzung mit einer Farbe oder einem Muster. Dies geschieht aus Sicherheitsgründen, da der Inhalt, der vom Benutzer nicht gesehen werden kann, Daten enthalten kann, die er nicht teilen möchte.

Ein User Agent könnte die Erfassung des vollständigen Inhalts eines verdeckten Fensters erlauben, nachdem er die Erlaubnis des Benutzers dazu erhalten hat. In diesem Fall kann der User Agent den verdeckten Inhalt einbeziehen, entweder indem er den aktuellen Inhalt des verdeckten Teils des Fensters erhält oder indem er den zuletzt sichtbaren Inhalt darstellt, falls der aktuelle Inhalt nicht verfügbar ist.

### Optionen und Einschränkungen

Das in [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergebene Optionsobjekt wird verwendet, um Optionen für den resultierenden Stream festzulegen.

Die in das Optionsobjekt übergebenen `video`- und `audio`-Objekte können auch zusätzliche Einschränkungen enthalten, die spezifisch für diese Medientracks sind. Weitere Einzelheiten über zusätzliche Einschränkungen zur Konfiguration eines Bildschirmaufnahme-Streams, die den [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints), [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints) und [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) hinzugefügt werden, finden Sie unter [Eigenschaften von freigegebenen Bildschirm-Tracks](/de/docs/Web/API/MediaTrackConstraints#instance_properties_of_shared_screen_tracks).

Keine der Einschränkungen wird in irgendeiner Weise angewendet, bis der einzufangende Inhalt ausgewählt wurde. Die Einschränkungen verändern, was Sie in dem resultierenden Stream sehen. Wenn Sie beispielsweise eine [`width`](/de/docs/Web/API/MediaTrackConstraints/width)-Einschränkung für das Video angeben, wird sie angewendet, indem das Video skaliert wird, nachdem der Benutzer den zu teilenden Bereich ausgewählt hat. Sie stellt keine Einschränkung hinsichtlich der Größe der Quelle selbst dar.

> [!NOTE]
> Einschränkungen bewirken _nie_ eine Änderung der Liste der von der Screen Sharing API aufzunehmenden Quellen. Dies stellt sicher, dass Webanwendungen den Benutzer nicht dazu zwingen können, bestimmten Inhalt zu teilen, indem die Quellenliste so eingeschränkt wird, dass nur ein einziges Element übrig bleibt.

Während die Bildschirmfreigabe aktiv ist, wird die Maschine, die Bildschirminhalt teilt, eine Art Indikator anzeigen, damit der Benutzer weiß, dass gerade eine Freigabe stattfindet.

> [!NOTE]
> Aus Datenschutz- und Sicherheitsgründen sind Bildschirmfreigabequellen nicht mit [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufzählbar. In Zusammenhang damit wird das [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event)-Ereignis nie gesendet, wenn die verfügbaren Quellen für `getDisplayMedia()` geändert werden.

### Aufnahme von geteiltem Audio

[`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) wird am häufigsten verwendet, um Video vom Bildschirm eines Benutzers (oder Teilen davon) aufzunehmen. Allerdings können {{Glossary("user_agent", "User Agents")}} die Aufnahme von Audio zusammen mit dem Videoinhalt ermöglichen. Die Quelle dieses Audios könnte das ausgewählte Fenster, das gesamte Audiosystem des Computers oder das Mikrofon des Benutzers (oder eine Kombination all dieser) sein.

Bevor Sie ein Projekt starten, das die Freigabe von Audio erfordert, sollten Sie die [Browser-Kompatibilität](/de/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility) für `getDisplayMedia()` überprüfen, um sicherzustellen, ob die von Ihnen gewünschten Browser Unterstützung für Audio in aufgenommenen Bildschirmstreams haben.

Um zu verlangen, dass der Bildschirm mit Audio geteilt wird, könnten die in `getDisplayMedia()` übergebenen Optionen folgendermaßen aussehen:

```js
const displayMediaOptions = {
  video: true,
  audio: true,
};
```

Damit wird dem Benutzer völlige Freiheit eingeräumt, auszuwählen, was er innerhalb der Möglichkeiten, die der User Agent unterstützt, möchte. Dies könnte weiter verfeinert werden, indem zusätzliche Optionen und Einschränkungen innerhalb der `audio`- und `video`-Objekte spezifiziert werden:

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

In diesem Beispiel soll die aufgenommene Anzeigeoberfläche das gesamte Fenster sein. Der Audiotrack sollte idealerweise über Rauschunterdrückungs- und Echounterdrückungsfunktionen verfügen sowie über eine ideale Audio-Abtastrate von 44,1 kHz und die Unterdrückung der lokalen Audio-Wiedergabe.

Darüber hinaus gibt die App dem User Agent einen Hinweis darauf, dass er:

- Ein Kontrollfeld während der Bildschirmfreigabe bereitstellen sollte, das es dem Benutzer erlaubt, den freigegebenen Tab dynamisch zu wechseln.
- Den aktuellen Tab aus der Liste der dem Benutzer bei der Anforderungsaufforderung präsentierten Optionen auszublenden.
- Das Systemaudio nicht zu den vom Benutzer angebotenen möglichen Audioquellen hinzuzufügen.

Die Aufnahme von Audio ist immer optional, und selbst wenn Webinhalte einen Stream mit sowohl Audio als auch Video anfordern, kann der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) immer noch nur einen Videotrack enthalten, ohne Audio.

## Verwendung des aufgenommenen Streams

Das von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zurückgegebene {{jsxref("Promise")}} wird zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst, das mindestens einen Videostream enthält, das den Bildschirm oder Bildschirmbereich enthält, und das basierend auf den bei der Aufrufung von `getDisplayMedia()` spezifizierten Einschränkungen angepasst oder gefiltert wurde.

### Potenzielle Risiken

Datenschutz- und Sicherheitsprobleme im Zusammenhang mit Bildschirmfreigabe sind in der Regel nicht übermäßig ernst, aber sie existieren. Das größte potenzielle Problem besteht darin, dass Benutzer Inhalte versehentlich teilen, die sie nicht teilen wollten.

Zum Beispiel können Datenschutz- und/oder Sicherheitsverletzungen leicht auftreten, wenn der Benutzer seinen Bildschirm teilt und ein sichtbares Hintergrundfenster persönliche Informationen enthält oder wenn ihr Passwortmanager im geteilten Stream sichtbar ist. Dieser Effekt kann verstärkt werden, wenn logische Anzeigeoberflächen aufgenommen werden, die Inhalte enthalten können, die der Benutzer überhaupt nicht kennt, geschweige denn sieht.

User Agents, die den Datenschutz ernst nehmen, sollten Inhalte verschleiern, die tatsächlich nicht auf dem Bildschirm sichtbar sind, es sei denn, es wurde eine Berechtigung gegeben, diesen Inhalt spezifisch zu teilen.

### Autorisierung der Aufnahme von Anzeigeinhalten

Bevor das Streaming von aufgenommenen Bildschirminhalten beginnen kann, wird der {{Glossary("user_agent", "User Agent")}} den Benutzer bitten, die Freigabeanforderung zu bestätigen und den zu teilenden Inhalt auszuwählen.

## Beispiele

### Bildschirmaufnahme-Streaming

In diesem Beispiel werden die Inhalte des aufgenommenen Bildschirmbereichs in einem {{HTMLElement("video")}}-Element auf derselben Seite gestreamt.

#### JavaScript

Es ist nicht allzu viel Code erforderlich, um dies zum Laufen zu bringen, und wenn Sie vertraut mit der Verwendung von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zur Videoaufnahme von einer Kamera sind, wird Ihnen [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) sehr vertraut erscheinen.

##### Einrichtung

Zuerst werden einige Konstanten eingerichtet, um auf die Seitenelemente zu verweisen, auf die wir Zugriff benötigen: das {{HTMLElement("video")}}, in das der aufgenommene Bildschirminhalt gestreamt wird, eine Box, in der geloggte Ausgaben gezeichnet werden, und die Start- und Stopp-Tasten, die die Aufnahme von Bildschirmbildern ein- und ausschalten.

Das Objekt `displayMediaOptions` enthält die Optionen, die in `getDisplayMedia()` übergeben werden; hier wird die Eigenschaft [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) auf `window` gesetzt, was angibt, dass das gesamte Fenster aufgenommen werden soll.

Schließlich werden Ereignis-Listener eingerichtet, um Benutzerklicks auf die Start- und Stopp-Tasten zu erkennen.

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

##### Inhalte loggen

In diesem Beispiel werden bestimmte Methoden der [`console`](/de/docs/Web/API/console) überschrieben, um ihre Nachrichten an den {{HTMLElement("pre")}}-Block auszugeben, dessen ID `log` ist.

```js
console.log = (msg) => (logElem.textContent = `${logElem.textContent}\n${msg}`);
console.error = (msg) =>
  (logElem.textContent = `${logElem.textContent}\nError: ${msg}`);
```

Dadurch können wir [`console.log()`](/de/docs/Web/API/console/log_static) und [`console.error()`](/de/docs/Web/API/console/error_static) verwenden, um Informationen in das Logbuch im Dokument zu schreiben.

##### Bildschirmaufnahme starten

Die Methode `startCapture()`, unten, startet die Aufnahme eines [`MediaStream`](/de/docs/Web/API/MediaStream), dessen Inhalte aus einem vom Benutzer ausgewählten Bereich des Bildschirms stammen. `startCapture()` wird aufgerufen, wenn die Schaltfläche "Start Capture" geklickt wird.

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

Nachdem die Inhalte des Logs geleert wurden, um alle verbleibenden Texte vom vorherigen Verbindungsversuch zu entfernen, ruft `startCapture()` [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) auf und übergibt das durch `displayMediaOptions` definierte Einschränkungsobjekt. Durch die Nutzung von {{jsxref("Operators/await", "await")}} wird die folgende Zeile des Codes erst ausgeführt, nachdem das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} aufgelöst wurde. Bei Auflösung gibt das Versprechen einen [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der den Inhalt des Bildschirms, Fensters oder eines anderen vom Benutzer ausgewählten Bereichs streamt.

Der Stream wird mit dem {{HTMLElement("video")}}-Element verbunden, indem der zurückgegebene `MediaStream` im [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des Elements gespeichert wird.

Die Funktion `dumpOptionsInfo()`, die wir gleich betrachten werden, gibt Informationen über den Stream in das Logbuch aus, zu Lernzwecken.

Sollte dies fehlschlagen, gibt der [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Abschnitt eine Fehlermeldung in das Logbuch aus.

##### Bildschirmaufnahme stoppen

Die Methode `stopCapture()` wird aufgerufen, wenn die Schaltfläche "Stop Capture" geklickt wird. Sie stoppt den Stream, indem sie seine Trackliste mit [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) abruft und dann die [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop)-Methode jedes Tracks aufruft. Sobald das erledigt ist, wird `srcObject` auf `null` gesetzt, um sicherzustellen, dass jeder, der interessiert ist, versteht, dass kein Stream verbunden ist.

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### Konfigurationsinformationen ausgeben

Aus Informationsgründen ruft die oben gezeigte Methode `startCapture()` eine Methode namens `dumpOptions()` auf, die die aktuellen Track-Einstellungen sowie die beim Erstellen des Streams festgelegten Einschränkungen ausgibt.

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.log("Track settings:");
  console.log(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.log("Track constraints:");
  console.log(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

Die Trackliste wird durch Aufruf von [`getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) auf dem aufgenommenen Bildschirm-`MediaStream`(/de/docs/Web/API/MediaStream) erhalten. Die aktuell wirksamen Einstellungen werden mit [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) und die festgelegten Einschränkungen mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) abgerufen.

#### HTML

Das HTML beginnt mit einem einführenden Absatz und geht dann ins Eingemachte.

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

Die Schlüsselteile des HTML sind:

1. Ein {{HTMLElement("button")}} mit der Beschriftung "Start Capture", der beim Klicken die Funktion `startCapture()` aufruft, um auf die Bildschirminhalte zuzugreifen und deren Aufnahme zu beginnen.
2. Ein zweiter Button, "Stop Capture", der beim Klicken `stopCapture()` aufruft, um die Aufnahme der Bildschirminhalte zu beenden.
3. Ein {{HTMLElement("video")}}, in das die aufgenommenen Bildschirminhalte gestreamt werden.
4. Ein {{HTMLElement("pre")}}-Block, in den durch die abgefangene [`console`](/de/docs/Web/API/console)-Methode Protokolltexte eingefügt werden.

#### CSS

Das CSS ist in diesem Beispiel rein kosmetisch. Das Video erhält einen Rahmen und seine Breite wird so eingestellt, dass es fast die gesamte verfügbare horizontale Fläche einnimmt (`width: 98%`). {{cssxref("max-width")}} wird auf `860px` gesetzt, um eine absolute Obergrenze für die Größe des Videos festzulegen.

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

Das Endprodukt sieht folgendermaßen aus. Wenn Ihr Browser die Screen Capture API unterstützt, wird beim Klicken auf "Start Capture" die Benutzeroberfläche des {{Glossary("user_agent", "User Agent")}} zur Auswahl eines zu teilenden Bildschirms, Fensters oder Tabs präsentiert.

{{EmbedLiveSample("Streaming screen capture", 640, 800, "", "", "", "display-capture")}}

## Sicherheit

Um zu funktionieren, wenn die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) aktiviert ist, benötigen Sie die Berechtigung `display-capture`. Dies kann durch die Verwendung des {{HTTPHeader("Permissions-Policy")}} {{Glossary("HTTP", "HTTP")}}-Headers oder - wenn Sie die Screen Capture API in einem {{HTMLElement("iframe")}} verwenden - mit dem `<iframe>`-Elementattribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) vorgenommen werden.

Beispielsweise aktiviert diese Zeile in den HTTP-Headern die Screen Capture API für das Dokument und eingebettete {{HTMLElement("iframe")}}-Elemente, die von derselben Quelle geladen werden:

```http
Permissions-Policy: display-capture=(self)
```

Wenn Sie Bildschirmaufnahme innerhalb eines `<iframe>` durchführen, können Sie die Berechtigung nur für diesen Rahmen anfordern, was klarerweise sicherer ist, als die Berechtigung allgemeiner anzufordern:

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Stillfotos mit WebRTC aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)
- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream), um einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem Live-Inhalt eines {{HTMLElement("canvas")}} zu erhalten
