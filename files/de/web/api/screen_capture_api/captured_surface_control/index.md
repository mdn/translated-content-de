---
title: Verwenden der Captured Surface Control API
slug: Web/API/Screen_Capture_API/Captured_Surface_Control
l10n:
  sourceCommit: 83a92f1eaf27dabf71beec6c548afb03171aa194
---

{{DefaultAPISidebar("Screen Capture API")}}

Dieser Leitfaden erläutert, wie man die von der Captured Surface Control API bereitgestellten Funktionen nutzt, um eine von der [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) aufgenommene Anzeigeoberfläche (Browser-Tab, Fenster oder Bildschirm) zu steuern.

## Hintergrund

Die Screen Capture API wird am häufigsten verwendet, um ein weiteres geöffnetes Tab oder Fenster auf Ihrem Gerät mit anderen Konferenzteilnehmern in einer Konferenz-App zu teilen, beispielsweise um eine neue Funktion zu demonstrieren oder einen Bericht zu präsentieren.

Ein wesentliches Problem dabei ist, dass man, wenn man mit der aufgenommenen Anzeigeoberfläche interagieren möchte, zum Beispiel um die Anzeige zu scrollen oder zu zoomen, dies nicht tun kann, ohne zu der aufgenommenen Anzeigeoberfläche zu wechseln. Dies führt zu mehreren Problemen und macht die App frustrierender als nötig. Nutzer des Bildschirmfreigabedienstes finden sich oft in der Situation, zwischen der Konferenz-App und der aufgenommenen Anzeigeoberfläche hin- und herwechseln zu müssen, um das Mediadisplay anzupassen, verspätete Nutzer hereinzulassen, Chatnachrichten zu lesen usw.

Die Captured Surface Control API löst diese Probleme, indem Entwicklern ermöglicht wird, eine begrenzte Anzahl von Funktionen zu implementieren, die Konferenzteilnehmern erlauben, die aufgenommene Anzeigeoberfläche direkt innerhalb der App zu steuern, ohne die Sicherheit zu gefährden.

Derzeit sind dies:

1. Zoomen der aufgenommenen Anzeigeoberfläche.
2. Verwenden von Mausrad-/Touchpad-Gesten (und anderen Äquivalenten), um die aufgenommene Anzeigeoberfläche zu scrollen.

Diese Funktionalität wird über das [`CaptureController`](/de/docs/Web/API/CaptureController)-Objekt bereitgestellt. Um eine aufgenommene Anzeigeoberfläche zu steuern, muss ein Capture-Controller in einen [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)-Aufruf innerhalb seines Optionsobjekts übergeben werden:

```js
controller = new CaptureController();

const displayMediaOptions = {
  controller,
};

videoElem.srcObject =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

Der Controller kann dann verwendet werden, um z. B. die aufgenommene Anzeigeoberfläche zu zoomen:

```js
controller.increaseZoomLevel();
```

In diesem Artikel werden wir den Code für eine grundlegende Bildschirmfreigabe-App durchgehen und zeigen, wie solche Funktionen implementiert werden.

## Eine Anmerkung zu Berechtigungen

Eine Website kann den Zugriff auf die Captured Surface Control API über die {{HTTPHeader("Permissions-Policy")}}-Richtlinie {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} oder den entsprechenden {{HTMLElement("iframe")}} [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)-Attributwert steuern:

```html
<iframe allow="captured-surface-control" src="/some-other-document.html">
  ...
</iframe>
```

Insbesondere die Methoden [`forwardWheel()`](/de/docs/Web/API/CaptureController/forwardWheel), [`increaseZoomLevel()`](/de/docs/Web/API/CaptureController/increaseZoomLevel), [`decreaseZoomLevel()`](/de/docs/Web/API/CaptureController/decreaseZoomLevel) und [`resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) werden durch diese Richtlinie gesteuert.

Die Standard-Zulassungsliste für `captured-surface-control` ist `self`, was bedeutet, dass alle Inhalte innerhalb desselben Ursprungs die Captured Surface Control verwenden können.

Wenn die Berechtigung durch die Website-Politik erlaubt ist, kann der Nutzer dann die Erlaubnis zum Zugriff auf die gesteuerten APIs gewähren (oder verweigern). Dies kann entweder eine explizite Berechtigung sein, die durch die Reaktion auf eine Aufforderung gewährt wird, oder eine implizite Berechtigung, die durch die Interaktion mit einem Steuerelement, das eine der Methoden aufruft ({{Glossary("Transient_activation", "transiente Aktivierung")}}), wenn die Benutzerberechtigung nicht explizit verweigert wurde.

Siehe auch [Screen Capture API > Sicherheitsüberlegungen](/de/docs/Web/API/Screen_Capture_API#security_considerations).

## App-HTML

Das Markup für unsere Beispiel-App sieht wie folgt aus:

```html live-sample___surface-control-demo
<h1>Captured Surface Control API demo</h1>

<p>
  <button id="start">Start Capture</button>
  <button id="stop">Stop Capture</button>
</p>
<p id="zoom-controls">
  <button id="dec">Zoom -</button>
  <output>100%</output>
  <button id="inc">Zoom +</button>
  <button id="reset">Reset zoom</button>
</p>

<video autoplay></video>
```

Dieses enthält zwei Sätze von {{htmlelement("button")}}-Elementen — eines zum Starten und Stoppen der Bildschirmaufnahme und eines zur Steuerung des Zooms der aufgenommenen Anzeigeoberfläche. Letzteres enthält auch ein {{htmlelement("output")}}-Element, um den aktuellen Zoomfaktor anzuzeigen.

Abschließend fügen wir ein {{htmlelement("video")}}-Element hinzu, um die aufgenommene Anzeigeoberfläche darzustellen.

## App-CSS

Das CSS der App ist minimal; es ist erwähnenswert, dass wir dem `<video>` eine {{cssxref("max-width")}} von `100%` gegeben haben, damit es innerhalb des `<body>` eingeschränkt ist. Das `<video>` könnte erheblich wachsen, wenn die aufgenommene Anzeigeoberfläche eingebettet wird (seine Größe ist die intrinsische Größe der Aufnahme), was Überlaufprobleme verursachen könnte, wenn wir es nicht einschränken würden.

```css live-sample___surface-control-demo
body {
  max-width: 640px;
  margin: 0 auto;
}

video {
  max-width: 100%;
}
```

## Ersteinrichtung

In unserem ersten Skriptabschnitt definieren wir die Variablen, die wir benötigen, um die App einzurichten:

```js live-sample___surface-control-demo
// Grab references to the <video> element and zoom controls
const videoElem = document.querySelector("video");
const zoomControls = document.getElementById("zoom-controls");

// Grab references to the start and stop capture buttons
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

// Grab references to the zoom out, in, and reset buttons,
// and the zoom level output
const decBtn = document.getElementById("dec");
const outputElem = document.querySelector("output");
const incBtn = document.getElementById("inc");
const resetBtn = document.getElementById("reset");

// Define variables to store the controller and the zoom levels
// in, when we later create them
let controller = undefined;
let zoomLevels = undefined;
```

Dann blenden wir die Steuerungsleiste für die Oberfläche initial aus, indem wir ihre {{cssxref("display")}}-CSS-Eigenschaft auf `none` setzen, und deaktivieren die Stop-Taste, indem wir ihr [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-Attribut auf `true` setzen. Diese Steuerungen sind nicht relevant, bis wir mit der Aufnahme begonnen haben, daher wollen wir den Nutzer nicht zu Beginn verwirren, indem wir sie anzeigen.

```js live-sample___surface-control-demo
zoomControls.style.display = "none";
stopBtn.disabled = true;
```

## Steuerung der Bildschirmaufnahme

Als Nächstes fügen wir den Start- und Stop-Buttons `click`-Event-Listener hinzu (mithilfe von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)), um die Bildschirmaufnahme zu starten und zu stoppen, wenn sie gedrückt werden.

```js live-sample___surface-control-demo
startBtn.addEventListener("click", startCapture);
stopBtn.addEventListener("click", stopCapture);
```

Die Funktion `startCapture()`, die die Bildschirmaufnahme startet, sieht folgendermaßen aus. Zunächst erstellen wir einen neuen `CaptureController` und übergeben ihn in unser [`MediaDisplayOptions`](/de/docs/Web/API/MediaDevices/getDisplayMedia#options)-Objekt, zusammen mit einer [`displaysurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)-Einschränkung, die der App empfiehlt, Browser-Tabs zu teilen.

Jetzt ist es an der Zeit, unsere Medien aufzunehmen; dies tun wir mithilfe eines [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)-Aufrufs, an den wir unsere Optionen übergeben und das resultierende Versprechen als Wert der [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des `<video>`-Elements setzen. Wenn es aufgelöst ist, setzen wir die Funktion fort, indem wir [`CaptureController.resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) aufrufen und den Inhalt des `<output>`-Elements auf `100%` setzen. Dies ist nicht unbedingt erforderlich, aber es kann etwas verwirrend sein, wenn Sie ein Tab aufnehmen und feststellen, dass es bereits heraus- oder hineingezoomt ist. Das Festlegen des Zoomfaktors auf `100%` beim Aufnehmen fühlt sich logischer an. Diese Codezeilen behandeln den Fall, dass die App ohne Drücken von "Stop Capture" aktualisiert wird und die Aufnahme dann erneut gestartet wird.

Unser nächster Schritt ist es, [`CaptureController.getSupportedZoomLevels()`](/de/docs/Web/API/CaptureController/getSupportedZoomLevels) aufzurufen, um die Zoomstufen abzurufen, die die aufgenommene Anzeigeoberfläche unterstützt, und das resultierende Array in der `zoomLevels`-Variablen zu speichern.

Anschließend verwenden wir das `zoomlevelchange`-Event des Controllers, um zu erkennen, wann sich der Zoomfaktor ändert, den aktuellen [`zoomlevel`](/de/docs/Web/API/CaptureController/zoomLevel) in das `<output>`-Element zu schreiben und die benutzerdefinierte Funktion `updateZoomButtonState()` aufzurufen. Diese Funktion wird das `zoomLevels`-Array abfragen, um zu überprüfen, ob der Benutzer nach jeder Zoomänderung weiter hinaus- oder hineinzoomen kann. Wir werden `updateZoomButtonState()` später erklären.

Wir blenden unsere Zoom-Steuerungen dann mit `display: block` ein, aktivieren unseren Stop-Button und deaktivieren unseren Start-Button, sodass der Zustand der Steuerungen nach dem Start der Aufnahme sinnvoll ist.

Um unsere Funktion abzuschließen, rufen wir [`CaptureController.setFocusBehavior()`](/de/docs/Web/API/CaptureController/setFocusBehavior) auf, um zu verhindern, dass der Fokus auf die aufgenommene Anzeigeoberfläche wechselt, wenn die Aufnahme startet, und rufen unsere benutzerdefinierte Funktion `startForwarding()` auf, um das Scrollen der aufgenommenen Anzeigeoberfläche mit Rad-/Touchpad-Gesten zu ermöglichen. Diese Funktion werden wir später erklären.

```js live-sample___surface-control-demo
async function startCapture() {
  try {
    // Create a new CaptureController instance
    controller = new CaptureController();

    // Options for getDisplayMedia()
    const displayMediaOptions = {
      controller,
      video: {
        displaySurface: "browser",
      },
    };

    // Capture a tab and display it inside the video element
    videoElem.srcObject =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);

    // Reset the zoom level when capture starts
    controller.resetZoomLevel();
    outputElem.textContent = `100%`;

    // Get zoom levels for the current captured display surface
    zoomLevels = controller.getSupportedZoomLevels();

    // Report zoom level when it changes
    controller.addEventListener("zoomlevelchange", () => {
      outputElem.textContent = `${controller.zoomLevel}%`;
      updateZoomButtonState();
    });

    zoomControls.style.display = "block";
    stopBtn.disabled = false;
    startBtn.disabled = true;

    // Stop the focus from jumping to the captured tab, if you are self-sharing
    controller.setFocusBehavior("focus-capturing-application");

    // Start forwarding wheel events
    startForwarding();
  } catch (e) {
    console.error(e);
  }
}
```

Nun zur Definition unserer `stopCapture()`-Funktion, die die Bildschirmaufnahme stoppt. Wir beginnen diese Funktion, indem wir erneut [`CaptureController.resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) aufrufen und den Inhalt des `<output>`-Elements auf `100%` setzen, damit der Zoomfaktor zurückgesetzt wird. Dies behandelt den Fall, dass Sie die Aufnahme durch Drücken auf "Stop Capture" beenden und dann erneut starten.

Dann gehen wir alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte durch, die mit dem [`MediaStream`](/de/docs/Web/API/MediaStream) verbunden sind und stoppen sie alle. Dann rufen wir die `resetApp()`-Funktion auf, welche das `srcObject` des `<video>`-Elements auf `null` setzt, die Zoom-Steuerungen ausblendet, den Stop-Button deaktiviert und den Start-Button aktiviert.

```js live-sample___surface-control-demo
function stopCapture() {
  let tracks = videoElem.srcObject.getTracks();
  tracks.forEach((track) => track.stop());
  resetApp();
}

function resetApp() {
  videoElem.srcObject = null;
  zoomControls.style.display = "none";
  stopBtn.disabled = true;
  startBtn.disabled = false;
}
```

## Umsetzung der Zoom-Steuerungen

Im nächsten Abschnitt unseres Skripts verknüpfen wir unsere Zoom-Buttons mit den entsprechenden `click`-Handler-Funktionen, damit wir die aufgenommene Anzeigeoberfläche herein- und herauszoomen können. Die Funktionen, die sie beim Klicken ausführen, sind wie folgt:

- "Zoom out"-Button: `decreaseZoom()`. Diese Funktion ruft die [`CaptureController.decreaseZoomLevel()`](/de/docs/Web/API/CaptureController/decreaseZoomLevel)-Methode auf, wodurch die aufgenommene Oberfläche verkleinert wird.
- "Zoom in"-Button: `increaseZoom()`. Diese Funktion ruft die [`CaptureController.increaseZoomLevel()`](/de/docs/Web/API/CaptureController/increaseZoomLevel)-Methode auf, wodurch die aufgenommene Oberfläche vergrößert wird.
- "Reset zoom"-Button: `resetZoom()`. Diese Funktion ruft die [`CaptureController.resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel)-Methode auf, wodurch die aufgenommene Oberfläche auf ihren Ausgangszoomfaktor zurückgesetzt wird, der `100` ist.

```js live-sample___surface-control-demo
decBtn.addEventListener("click", decreaseZoom);
incBtn.addEventListener("click", increaseZoom);
resetBtn.addEventListener("click", resetZoom);

async function decreaseZoom() {
  try {
    await controller.decreaseZoomLevel();
  } catch (e) {
    console.log(e);
  }
}

async function increaseZoom() {
  try {
    await controller.increaseZoomLevel();
  } catch (e) {
    console.log(e);
  }
}

async function resetZoom() {
  await controller.resetZoomLevel();
}
```

> [!NOTE]
> Es ist allgemein eine bewährte Praxis, `decreaseZoomLevel()` und `increaseZoomLevel()` innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks aufzurufen, da der Zoomlevel asynchron von einer anderen Entität als der Anwendung geändert werden könnte, was dazu führen könnte, dass ein Fehler ausgelöst wird. Zum Beispiel könnte der Nutzer direkt mit der aufgenommenen Oberfläche interagieren, um herein- oder herauszuzoomen.

Wenn sich der Zoom ändert, löst das `zoomlevelchange`-Event des Controllers aus, was dazu führt, dass der Code, den wir zuvor in der `startCapture()`-Funktion gesehen haben, ausgeführt wird, den aktualisierten Zoomlevel in das `<output>`-Element schreibt und die Funktion `updateZoomButtonState()` ausführt, um zu verhindern, dass der Benutzer zu weit hinein- oder hinauszoomt.

```js
controller.addEventListener("zoomlevelchange", () => {
  outputElem.textContent = `${controller.zoomLevel}%`;
  updateZoomButtonState();
});
```

## Weiterleiten von Radevents an die aufgenommene Anzeigeoberfläche

Früher, am Ende der `startCapture()`-Funktion, führten wir die `startForwarding()`-Funktion aus, die es ermöglicht, die aufgenommene Anzeigeoberfläche aus der aufnehmenden App heraus zu scrollen. Diese Funktion führt die Methode [`CaptureController.forwardWheel()`](/de/docs/Web/API/CaptureController/forwardWheel) aus, an die wir eine Referenz auf das `<video>`-Element übergeben. Wenn das resultierende Versprechen erfüllt ist, beginnt der Browser, alle [`wheel`](/de/docs/Web/API/Element/wheel_event)-Events, die auf dem `<video>` ausgelöst werden, an den aufgenommenen Tab oder das Fenster weiterzuleiten, sodass dieser scrollen wird.

```js live-sample___surface-control-demo
async function startForwarding() {
  try {
    await controller.forwardWheel(videoElem);
  } catch (e) {
    console.log(e);
  }
}
```

## Verhindern, dass der Benutzer zu weit hinein- oder herauszoomt

Abschließend definieren wir die `updateZoomButtonState()`-Funktion, die innerhalb der `zoomlevelchange`-Event-Handler-Funktion ausgeführt wird, die Sie zuvor gesehen haben. Das Problem, das dies löst, ist, dass, wenn Sie versuchen, unter den minimal unterstützten Zoomlevel herauszuzoomen oder über den maximal unterstützten Zoomlevel hereinzuzoomen, `decreaseZoomLevel()`/`increaseZoomLevel()` einen `InvalidStateError`-[`DOMException`](/de/docs/Web/API/DOMException) auslösen wird.

Die `updateZoomButtonState()`-Funktion vermeidet dieses Problem, indem sie zunächst sicherstellt, dass sowohl der "Zoom out"-Button als auch der "Zoom in"-Button aktiviert sind. Dann werden zwei Überprüfungen durchgeführt:

- Wenn der aktuelle Zoomlevel (zurückgegeben von der `CaptureController.zoomLevel`-Eigenschaft) gleich dem minimal unterstützten Zoomlevel ist (gespeichert im ersten Wert des `zoomLevels`-Arrays), deaktivieren wir den "Zoom out"-Button, sodass der Benutzer nicht weiter herauszoomen kann.
- Wenn der aktuelle Zoomlevel gleich dem maximal unterstützten Zoomlevel ist (gespeichert im letzten Wert des `zoomLevels`-Arrays), deaktivieren wir den "Zoom in"-Button, sodass der Benutzer nicht weiter hereinzommen kann.

```js live-sample___surface-control-demo
function updateZoomButtonState() {
  decBtn.disabled = false;
  incBtn.disabled = false;
  if (controller.zoomLevel === zoomLevels[0]) {
    decBtn.disabled = true;
  } else if (controller.zoomLevel === zoomLevels[zoomLevels.length - 1]) {
    incBtn.disabled = true;
  }
}
```

## Fertige Demo

Die fertige Demo wird wie folgt gerendert:

{{EmbedLiveSample("surface-control-demo", , "500px", , , , "display-capture; captured-surface-control")}}
