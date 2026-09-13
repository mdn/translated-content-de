---
title: Verwenden der Screen Capture API
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
l10n:
  sourceCommit: f4c221962681b1472cd57da60379ad7825fe5081
---

{{DefaultAPISidebar("Screen Capture API")}}

In diesem Artikel untersuchen wir, wie die Screen Capture API und ihre Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwendet werden, um einen Teil oder den gesamten Bildschirm für Streaming, Aufzeichnung oder Freigabe während einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Konferenzsitzung zu erfassen.

> [!NOTE]
> Es kann hilfreich sein zu wissen, dass aktuelle Versionen des [WebRTC-adapter.js-Shims](https://github.com/webrtcHacks/adapter) Implementierungen von `getDisplayMedia()` enthalten, um die Bildschirmfreigabe in Browsern zu ermöglichen, die sie unterstützen, aber die aktuelle Standard-API nicht implementieren. Dies funktioniert mindestens mit Chrome, Edge und Firefox.

## Bildschirm-inhalte erfassen

Die Erfassung von Bildschirminhalten als Live-[`MediaStream`](/de/docs/Web/API/MediaStream) wird durch Aufrufen von [`navigator.mediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) gestartet. Diese Methode gibt ein Promise zurück, das zu einem Stream mit den Live-Bildschirminhalten aufgelöst wird. Das in den folgenden Beispielen referenzierte Objekt `displayMediaOptions` könnte etwa wie folgt aussehen:

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

### Bildschirmaufnahme starten: Stil mit `async`/`await`

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

Sie können diesen Code entweder mit einer asynchronen Funktion und dem Operator [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) schreiben, wie oben gezeigt, oder direkt mit dem {{jsxref("Promise")}}, wie unten dargestellt.

### Bildschirmaufnahme starten: Stil mit `Promise`

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

In beiden Fällen reagiert der {{Glossary("user_agent", "User Agent")}}, indem er eine Benutzeroberfläche anzeigt, die den Benutzer auffordert, den freizugebenden Bildschirmbereich auszuwählen. Beide Implementierungen von `startCapture()` geben den [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der die erfassten Bildschirmbilder enthält.

Weitere Informationen dazu, wie Sie sowohl den gewünschten Oberflächentyp festlegen als auch den resultierenden Stream auf andere Weise anpassen können, finden Sie unten unter [Optionen und Einschränkungen](#optionen_und_einschränkungen).

### Beispiel eines Fensters, das dem Benutzer die Auswahl einer zu erfassenden Anzeigeoberfläche ermöglicht

![Screenshot des Chrome-Fensters zur Auswahl einer Quelloberfläche](chrome-screen-capture-window.png)

Sie können den erfassten Stream `captureStream` anschließend für alles verwenden, was einen Stream als Eingabe akzeptiert. Die folgenden [Beispiele](#beispiele) zeigen einige Möglichkeiten, den Stream zu verwenden.

### Sichtbare und logische Anzeigeoberflächen

Für die Zwecke der Screen Capture API ist eine **Anzeigeoberfläche** jedes Inhaltsobjekt, das von der API zur Freigabe ausgewählt werden kann. Freigabeoberflächen umfassen den Inhalt eines Browser-Tabs, ein vollständiges Fenster und einen Monitor (oder eine Gruppe von Monitoren, die zu einer Oberfläche zusammengefasst sind).

Es gibt zwei Arten von Anzeigeoberflächen. Eine **sichtbare Anzeigeoberfläche** ist eine Oberfläche, die vollständig auf dem Bildschirm sichtbar ist, etwa das vorderste Fenster oder der vorderste Tab oder der gesamte Bildschirm.

Eine **logische Anzeigeoberfläche** ist teilweise oder vollständig verdeckt, entweder weil sie in gewissem Umfang von einem anderen Objekt überlagert wird oder weil sie vollständig ausgeblendet ist bzw. sich außerhalb des Bildschirms befindet. Die Behandlung solcher Oberflächen durch die Screen Capture API ist unterschiedlich. Im Allgemeinen stellt der Browser ein Bild bereit, das den ausgeblendeten Teil der logischen Anzeigeoberfläche auf irgendeine Weise verdeckt, etwa durch Unschärfe oder durch Ersetzen durch eine Farbe oder ein Muster. Dies geschieht aus Sicherheitsgründen, da die Inhalte, die der Benutzer nicht sehen kann, Daten enthalten können, die er nicht freigeben möchte.

Ein User Agent kann die Erfassung des vollständigen Inhalts eines verdeckten Fensters zulassen, nachdem die Erlaubnis des Benutzers dafür eingeholt wurde. In diesem Fall kann der User Agent den verdeckten Inhalt einbeziehen, indem er entweder den aktuellen Inhalt des ausgeblendeten Fensterbereichs abruft oder den zuletzt sichtbaren Inhalt darstellt, falls der aktuelle Inhalt nicht verfügbar ist.

### Optionen und Einschränkungen

Das an [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergebene Optionsobjekt wird verwendet, um Optionen für den resultierenden Stream festzulegen.

Die an das Optionsobjekt übergebenen Objekte `video` und `audio` können außerdem zusätzliche Einschränkungen enthalten, die speziell für diese Medientracks gelten. Einzelheiten zu zusätzlichen Einschränkungen für die Konfiguration eines Bildschirmaufnahme-Streams, die zu [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints), [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints) und [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)) hinzugefügt werden, finden Sie unter [Eigenschaften freigegebener Bildschirm-Tracks](/de/docs/Web/API/MediaTrackConstraints#instance_properties_of_shared_screen_tracks).

Keine der Einschränkungen wird angewendet, bevor der zu erfassende Inhalt ausgewählt wurde. Die Einschränkungen verändern, was Sie im resultierenden Stream sehen. Wenn Sie beispielsweise eine Einschränkung für [`width`](/de/docs/Web/API/MediaTrackConstraints/width) für das Video angeben, wird sie durch Skalieren des Videos angewendet, nachdem der Benutzer den freizugebenden Bereich ausgewählt hat. Sie legt keine Einschränkung für die Größe der Quelle selbst fest.

> [!NOTE]
> Einschränkungen führen _niemals_ zu Änderungen an der Liste der Quellen, die von der Screen Sharing API zur Erfassung angeboten werden. Dadurch wird sichergestellt, dass Webanwendungen den Benutzer nicht dazu zwingen können, bestimmte Inhalte freizugeben, indem sie die Quellliste einschränken, bis nur noch ein Eintrag übrig bleibt.

Während eine Anzeigeerfassung aktiv ist, zeigt das Gerät, das Bildschirminhalte freigibt, eine Art von Indikator an, damit der Benutzer weiß, dass eine Freigabe stattfindet.

> [!NOTE]
> Aus Datenschutz- und Sicherheitsgründen können Quellen für die Bildschirmfreigabe nicht mit [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufgezählt werden. Damit zusammenhängend wird das Ereignis [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) niemals gesendet, wenn sich die für `getDisplayMedia()` verfügbaren Quellen ändern.

### Freigegebenes Audio erfassen

[`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) wird am häufigsten verwendet, um Video vom Bildschirm eines Benutzers oder von Teilen davon zu erfassen. {{Glossary("user_agent", "User Agents")}} können jedoch die Erfassung von Audio zusammen mit den Videoinhalten erlauben. Die Quelle dieses Audios kann das ausgewählte Fenster, das gesamte Audiosystem des Computers oder das Mikrofon des Benutzers sein – oder eine Kombination davon.

Bevor Sie ein Projekt starten, das die Freigabe von Audio erfordert, sollten Sie die [Browser-Kompatibilität](/de/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility) für `getDisplayMedia()` prüfen, um festzustellen, ob die Browser, mit denen Sie kompatibel sein möchten, Audio in erfassten Bildschirm-Streams unterstützen.

Um anzufordern, dass der Bildschirm mit eingeschlossenem Audio freigegeben wird, könnten die an `getDisplayMedia()` übergebenen Optionen wie folgt aussehen:

```js
const displayMediaOptions = {
  video: true,
  audio: true,
};
```

Dadurch hat der Benutzer innerhalb der Grenzen dessen, was der User Agent unterstützt, vollständige Freiheit, beliebige Optionen auszuwählen. Dies könnte durch Angabe zusätzlicher Optionen und Einschränkungen innerhalb der Objekte `audio` und `video` weiter verfeinert werden:

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

In diesem Beispiel soll die erfasste Anzeigeoberfläche das gesamte Fenster sein. Der Audiotrack sollte idealerweise die Funktionen zur Rauschunterdrückung und Echounterdrückung aktiviert haben, ebenso wie eine ideale Audio-Abtastrate von 44,1 kHz und die Unterdrückung der lokalen Audiowiedergabe.

Darüber hinaus weist die App den User Agent darauf hin, dass er Folgendes tun sollte:

- Während der Bildschirmfreigabe ein Steuerelement bereitstellen, mit dem der Benutzer den freigegebenen Tab dynamisch wechseln kann.
- Den aktuellen Tab aus der Liste der Optionen ausblenden, die dem Benutzer bei der Anforderung einer Erfassung angezeigt werden.
- Das Systemaudio nicht zu den möglichen Audioquellen zählen, die dem Benutzer angeboten werden.

Die Erfassung von Audio ist immer optional. Selbst wenn Webinhalte einen Stream mit Audio und Video anfordern, kann der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) daher weiterhin nur einen Videotrack ohne Audio enthalten.

## Den erfassten Stream verwenden

Das von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zurückgegebene {{jsxref("Promise")}} wird zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst, der mindestens einen Videostream enthält, welcher den Bildschirm oder Bildschirmbereich beinhaltet und anhand der beim Aufruf von `getDisplayMedia()` angegebenen Einschränkungen angepasst oder gefiltert wird.

### Potenzielle Risiken

Datenschutz- und Sicherheitsprobleme im Zusammenhang mit der Bildschirmfreigabe sind in der Regel nicht allzu schwerwiegend, bestehen jedoch. Das größte potenzielle Problem besteht darin, dass Benutzer unbeabsichtigt Inhalte freigeben, die sie nicht freigeben wollten.

Beispielsweise können Datenschutz- und/oder Sicherheitsverletzungen leicht auftreten, wenn der Benutzer seinen Bildschirm freigibt und ein sichtbares Hintergrundfenster zufällig persönliche Informationen enthält oder wenn sein Passwort-Manager im freigegebenen Stream sichtbar ist. Dieser Effekt kann bei der Erfassung logischer Anzeigeoberflächen verstärkt werden, da diese Inhalte enthalten können, von denen der Benutzer nichts weiß und die er erst recht nicht sehen kann.

User Agents, die den Datenschutz ernst nehmen, sollten Inhalte verschleiern, die nicht tatsächlich auf dem Bildschirm sichtbar sind, sofern nicht ausdrücklich eine Berechtigung zum Teilen dieser Inhalte erteilt wurde.

### Erfassung von Anzeigeinhalten autorisieren

Bevor das Streaming erfasster Bildschirminhalte beginnen kann, fordert der {{Glossary("user_agent", "User Agent")}} den Benutzer auf, die Freigabeanfrage zu bestätigen und die freizugebenden Inhalte auszuwählen.

## Beispiele

### Bildschirmaufnahme streamen

In diesem Beispiel werden die Inhalte des erfassten Bildschirmbereichs in ein {{HTMLElement("video")}}-Element auf derselben Seite gestreamt.

#### JavaScript

Für die Umsetzung ist nicht besonders viel Code erforderlich. Wenn Sie mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zur Erfassung von Video von einer Kamera vertraut sind, wird Ihnen [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) sehr vertraut vorkommen.

##### Einrichtung

Zunächst werden einige Konstanten eingerichtet, um auf die Elemente der Seite zu verweisen, auf die wir zugreifen müssen: das {{HTMLElement("video")}}, in das die erfassten Bildschirminhalte gestreamt werden, ein Feld, in das protokollierte Ausgaben geschrieben werden, sowie die Schaltflächen zum Starten und Beenden der Erfassung von Bildschirmbildern.

Das Objekt `displayMediaOptions` enthält die an `getDisplayMedia()` zu übergebenden Optionen. Hier ist die Eigenschaft [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) auf `window` gesetzt, was angibt, dass das gesamte Fenster erfasst werden soll.

Abschließend werden Event-Listener eingerichtet, um Klicks des Benutzers auf die Schaltflächen zum Starten und Beenden zu erkennen.

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

Dadurch können wir [`console.log()`](/de/docs/Web/API/console/log_static) und [`console.error()`](/de/docs/Web/API/console/error_static) verwenden, um Informationen im Protokollfeld des Dokuments auszugeben.

##### Anzeigeerfassung starten

Die nachstehende Methode `startCapture()` startet die Erfassung eines [`MediaStream`](/de/docs/Web/API/MediaStream), dessen Inhalte aus einem vom Benutzer ausgewählten Bereich des Bildschirms stammen. `startCapture()` wird aufgerufen, wenn auf die Schaltfläche „Start Capture“ geklickt wird.

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

Nachdem der Inhalt des Protokolls gelöscht wurde, um verbliebenen Text vom vorherigen Verbindungsversuch zu entfernen, ruft `startCapture()` [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) auf und übergibt ihm das durch `displayMediaOptions` definierte Einschränkungsobjekt. Durch die Verwendung von {{jsxref("Operators/await", "await")}} wird die folgende Codezeile erst ausgeführt, nachdem das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} aufgelöst wurde. Nach der Auflösung gibt das Promise einen [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der die Inhalte des vom Benutzer ausgewählten Bildschirms, Fensters oder anderen Bereichs streamt.

Der Stream wird mit dem {{HTMLElement("video")}}-Element verbunden, indem der zurückgegebene `MediaStream` in [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des Elements gespeichert wird.

Die Funktion `dumpOptionsInfo()`, die wir gleich betrachten werden, gibt zu Lernzwecken Informationen über den Stream im Protokollfeld aus.

Falls etwas davon fehlschlägt, gibt die Klausel [`catch()`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) eine Fehlermeldung im Protokollfeld aus.

##### Anzeigeerfassung beenden

Die Methode `stopCapture()` wird aufgerufen, wenn auf die Schaltfläche „Stop Capture“ geklickt wird. Sie beendet den Stream, indem sie mithilfe von [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) dessen Trackliste abruft und dann die Methode [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop) jedes Tracks aufruft. Danach wird `srcObject` auf `null` gesetzt, damit für alle Interessierten klar ist, dass kein Stream verbunden ist.

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### Konfigurationsinformationen ausgeben

Zu Informationszwecken ruft die oben gezeigte Methode `startCapture()` eine Methode namens `dumpOptions()` auf, die die aktuellen Track-Einstellungen sowie die Einschränkungen ausgibt, die beim Erstellen auf den Stream angewendet wurden.

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.log("Track settings:");
  console.log(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.log("Track constraints:");
  console.log(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

Die Trackliste wird durch Aufrufen von [`getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) auf dem [`MediaStream`](/de/docs/Web/API/MediaStream) des erfassten Bildschirms abgerufen. Die aktuell wirksamen Einstellungen werden mit [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abgerufen, und die festgelegten Einschränkungen mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints).

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

1. Ein mit „Start Capture“ beschriftetes {{HTMLElement("button")}}, das beim Anklicken die Funktion `startCapture()` aufruft, um Zugriff auf Bildschirminhalte anzufordern und deren Erfassung zu starten.
2. Eine zweite Schaltfläche „Stop Capture“, die beim Anklicken `stopCapture()` aufruft, um die Erfassung von Bildschirminhalten zu beenden.
3. Ein {{HTMLElement("video")}}, in das die erfassten Bildschirminhalte gestreamt werden.
4. Ein {{HTMLElement("pre")}}-Block, in den durch die abgefangene [`console`](/de/docs/Web/API/console)-Methode protokollierter Text eingefügt wird.

#### CSS

Das CSS ist in diesem Beispiel rein kosmetisch. Das Video erhält einen Rahmen, und seine Breite wird so festgelegt, dass es nahezu den gesamten verfügbaren horizontalen Platz einnimmt (`width: 98%`). {{cssxref("max-width")}} wird auf `860px` gesetzt, um eine absolute Obergrenze für die Größe des Videos festzulegen.

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

Das Endergebnis sieht wie folgt aus. Wenn Ihr Browser die Screen Capture API unterstützt, wird durch Klicken auf „Start Capture“ die Oberfläche des {{Glossary("user_agent", "User Agents")}} zur Auswahl eines freizugebenden Bildschirms, Fensters oder Tabs angezeigt.

{{EmbedLiveSample("Streaming screen capture", 640, 800, "", "", "", "display-capture")}}

## Sicherheit

Damit die Funktion bei aktivierter [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) funktioniert, benötigen Sie die Berechtigung `display-capture`. Dies kann mithilfe des {{Glossary("HTTP", "HTTP")}}-Headers {{HTTPHeader("Permissions-Policy")}} erfolgen oder, wenn Sie die Screen Capture API in einem {{HTMLElement("iframe")}} verwenden, mit dem Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) des `<iframe>`-Elements.

Beispielsweise aktiviert diese Zeile in den HTTP-Headern die Screen Capture API für das Dokument und alle eingebetteten {{HTMLElement("iframe")}}-Elemente, die vom selben Ursprung geladen werden:

```http
Permissions-Policy: display-capture=(self)
```

Wenn Sie die Bildschirmaufnahme innerhalb eines `<iframe>` durchführen, können Sie die Berechtigung nur für diesen Frame anfordern, was eindeutig sicherer ist als eine allgemeinere Berechtigungsanforderung:

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Standbilder mit WebRTC aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)
- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream), um einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit den Live-Inhalten eines {{HTMLElement("canvas")}} zu erhalten
