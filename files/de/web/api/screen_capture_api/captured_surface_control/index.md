---
title: Verwendung der API zur Kontrolle der erfassten Oberfläche
slug: Web/API/Screen_Capture_API/Captured_Surface_Control
l10n:
  sourceCommit: 1d4acd0cc450af2e293b9856d5763b92a0812e30
---

{{DefaultAPISidebar("Screen Capture API")}}

Dieser Leitfaden erklärt, wie Sie die Funktionen der API zur Kontrolle der erfassten Oberfläche nutzen können, um eine erfasste Anzeigeoberfläche (Browser-Tab, Fenster oder Bildschirm) zu steuern, die durch die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) erfasst wird.

## Hintergrund

Die Screen Capture API wird meist verwendet, um einen anderen offenen Tab oder ein Fenster auf Ihrem Gerät mit anderen Konferenzteilnehmern in einer Konferenz-App zu teilen, beispielsweise um eine neue Funktion zu demonstrieren oder einen Bericht zu präsentieren.

Ein wesentliches Problem dabei ist, dass Sie, wenn Sie mit der erfassten Anzeigeoberfläche interagieren möchten, beispielsweise um diese zu scrollen oder heranzuzoomen, dies nicht tun können, ohne zur erfassten Anzeigeoberfläche zu wechseln. Dies führt zu mehreren Problemen und macht die App frustrierender als nötig. Bildschirmfreigabe-Nutzer müssen ständig zwischen der Konferenz-App und der erfassten Anzeigeoberfläche hin- und herwechseln, um Medienanzeige-Anpassungen vorzunehmen, spät kommende Teilnehmer hereinzulassen, Chat-Nachrichten zu lesen usw.

Die API zur Kontrolle der erfassten Oberfläche löst diese Probleme, indem sie Anwendungsentwicklern ermöglicht, eine begrenzte Menge von Funktionen zu implementieren, die von Konferenzteilnehmern genutzt werden können, um die erfasste Anzeigeoberfläche direkt innerhalb der App zu steuern, ohne die Sicherheit zu gefährden.

Aktuell sind dies:

1. Das Heranzoomen der erfassten Anzeigeoberfläche.
2. Die Verwendung von Mausrad-/Touchpad-Gesten (und anderer Äquivalente) zum Scrollen der erfassten Anzeigeoberfläche.

Diese Funktionalität ist über das [`CaptureController`](/de/docs/Web/API/CaptureController)-Objekt zugänglich. Um eine erfasste Anzeigeoberfläche zu steuern, muss ein Capture-Controller in einen [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)-Aufruf im Optionsobjekt übergeben werden:

```js
controller = new CaptureController();

const displayMediaOptions = {
  controller,
};

videoElem.srcObject =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

Der Controller kann dann verwendet werden, um beispielsweise die erfasste Anzeigeoberfläche heranzuzoomen:

```js
controller.increaseZoomLevel();
```

In diesem Artikel gehen wir den Code einer einfachen Bildschirmübertragungs-App durch, die zeigt, wie solche Funktionen implementiert werden.

## Eine Anmerkung zu Berechtigungen

Eine Website kann den Zugriff auf die API zur Kontrolle der erfassten Oberfläche mit der {{HTTPHeader("Permissions-Policy")}}-Richtlinie {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} oder dem entsprechenden Attributwert [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) des {{HTMLElement("iframe")}}-Elements steuern:

```html
<iframe allow="captured-surface-control" src="/some-other-document.html">
  ...
</iframe>
```

Insbesondere werden die Methoden [`forwardWheel()`](/de/docs/Web/API/CaptureController/forwardWheel), [`increaseZoomLevel()`](/de/docs/Web/API/CaptureController/increaseZoomLevel), [`decreaseZoomLevel()`](/de/docs/Web/API/CaptureController/decreaseZoomLevel) und [`resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) durch diese Richtlinie gesteuert.

Die Standard-Zulassungsliste für `captured-surface-control` ist `self`, was jedem Inhalt innerhalb desselben Ursprungs erlaubt, die API zur Kontrolle der erfassten Oberfläche zu verwenden.

Wenn die Berechtigung durch die Website-Politik erlaubt ist, kann der Benutzer dann die Erlaubnis zum Zugriff auf die gesteuerten APIs gewähren (oder verweigern). Dies kann entweder eine explizite Berechtigung sein, die durch das Reagieren auf eine Aufforderung gewährt wird, oder eine implizite Berechtigung, die durch das Interagieren mit einem Kontrollmechanismus, der eine der Methoden aufruft ({{Glossary("Transient_activation", "transiente Aktivierung")}}), erteilt wird, wenn die Benutzererlaubnis nicht ausdrücklich verweigert wurde.

Siehe auch [Screen Capture API > Sicherheitsüberlegungen](/de/docs/Web/API/Screen_Capture_API#security_considerations).

## App-HTML

Der Markup-Code für unsere Beispiel-App sieht wie folgt aus:

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

Dieser enthält zwei Sets von {{htmlelement("button")}}-Elementen — eines zum Starten und Stoppen der Bildschirmaufnahme und eines zur Steuerung des Zooms der erfassten Anzeigeoberfläche. Letzteres enthält auch ein {{htmlelement("output")}}-Element, um den aktuellen Zoomlevel auszugeben.

Schließlich fügen wir ein {{htmlelement("video")}}-Element hinzu, um die erfasste Anzeigeoberfläche anzuzeigen.

## App-CSS

Das App-CSS ist minimal; es ist erwähnenswert, dass wir dem `<video>` ein {{cssxref("max-width")}} von `100%` gegeben haben, sodass es innerhalb des `<body>` eingeschränkt ist. Das `<video>` könnte dramatisch wachsen, wenn die erfasste Anzeigeoberfläche darin eingebettet ist (seine Größe ist die inhärente Größe der Erfassung), was zu Überlaufproblemen führen könnte, wenn wir es nicht einschränken würden.

```css live-sample___surface-control-demo
body {
  max-width: 640px;
  margin: 0 auto;
}

video {
  max-width: 100%;
}
```

## Anfangsinstallation

In unserem ersten Skriptabschnitt definieren wir die Variablen, die wir zum Einrichten der App benötigen:

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

Wir blenden dann zunächst die Steuerleiste für die Oberfläche aus, indem wir ihre CSS-Eigenschaft {{cssxref("display")}} auf `none` setzen, und deaktivieren die Stopp-Schaltfläche, indem wir ihr [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-Attribut auf `true` setzen. Diese Steuerelemente sind nicht relevant, bis wir die Aufnahme gestartet haben, also wollen wir den Benutzer nicht verwirren, indem wir sie von Anfang an anzeigen.

```js live-sample___surface-control-demo
zoomControls.style.display = "none";
stopBtn.disabled = true;
```

## Kontrolle der Bildschirmaufnahme

Als Nächstes fügen wir `click`-Ereignislistener (mithilfe von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)) zu den Start- und Stopp-Schaltflächen hinzu, um die Bildschirmaufnahme zu starten und zu stoppen, wenn sie gedrückt werden.

```js live-sample___surface-control-demo
startBtn.addEventListener("click", startCapture);
stopBtn.addEventListener("click", stopCapture);
```

Die `startCapture()`-Funktion, die die Bildschirmaufnahme startet, sieht folgendermaßen aus. Wir erstellen zuerst einen neuen `CaptureController` und übergeben ihn in unser [`MediaDisplayOptions`](/de/docs/Web/API/MediaDevices/getDisplayMedia#options)-Objekt, zusammen mit einem [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)-Einschränkung, die die App dazu veranlasst, das Teilen von Browser-Tabs zu empfehlen.

Jetzt ist es an der Zeit, unsere Medien zu erfassen; wir tun dies mit einem Aufruf von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), an den wir unsere Optionen übergeben und das resultierende Versprechen als Wert der [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des `<video>`-Elements setzen. Wenn es aufgelöst wird, setzen wir die Funktion fort, indem wir [`CaptureController.resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) aufrufen und den Inhalt des `<output>`-Elements auf `100%` setzen. Dies ist nicht unbedingt notwendig, aber es kann verwirrend sein, wenn Sie einen Tab erfassen und feststellen, dass er bereits heraus- oder herangezoomt ist. Den Zoomlevel beim Erfassen auf `100%` zu setzen, erscheint etwas logischer. Diese Codezeilen behandeln den Fall, in dem die App ohne Drücken von "Stop Capture" aktualisiert wird und dann die Erfassung erneut gestartet wird.

Unser nächster Schritt ist das Abrufen der Zoomlevels, die die erfasste Anzeigeoberfläche unterstützt, mit einem Aufruf von [`CaptureController.getSupportedZoomLevels()`](/de/docs/Web/API/CaptureController/getSupportedZoomLevels) und das Speichern des resultierenden Arrays in der `zoomLevels`-Variable.

Als Nächstes verwenden wir das `zoomlevelchange`-Ereignis des Controllers, um zu erkennen, wann der Zoomlevel geändert wird, den aktuellen `zoomLevel` in das `<output>`-Element zu schreiben und die benutzerdefinierte Funktion `updateZoomButtonState()` aufzurufen. Diese Funktion wird das `zoomLevels`-Array abfragen, um zu überprüfen, ob der Benutzer nach jeder Zoom-Änderung weiter hinein- oder herauszoomen kann. Wir erklären `updateZoomButtonState()` später.

Wir blenden danach unsere Zoom-Steuerelemente mit `display: block` ein, aktivieren unsere Stopp-Schaltfläche und deaktivieren unsere Start-Schaltfläche, sodass der Zustand der Steuerelemente nach dem Start der Aufnahme sinnvoll ist.

Um unsere Funktion zu beenden, rufen wir [`CaptureController.setFocusBehavior()`](/de/docs/Web/API/CaptureController/setFocusBehavior) auf, um zu verhindern, dass der Fokus beim Start der Erfassung zur erfassten Anzeigeoberfläche verschoben wird, und rufen unsere benutzerdefinierte `startForwarding()`-Funktion auf, um das Scrollen der erfassten Anzeigeoberfläche mit Rad-/Touchpad-Gesten zu ermöglichen. Wir erklären diese Funktion später.

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

Nun zur Definition unserer `stopCapture()`-Funktion, die die Bildschirmaufnahme stoppt. Wir beginnen diese Funktion erneut mit einem Aufruf von [`CaptureController.resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) und setzen den Inhalt des `<output>`-Elements auf `100%`, damit der Zoomlevel zurückgesetzt wird. Dies behandelt den Fall, in dem Sie die Aufnahme durch Drücken von "Stop Capture" stoppen und dann erneut starten.

Dann durchlaufen wir alle mit dem [`MediaStream`](/de/docs/Web/API/MediaStream) assoziierten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte und stoppen sie alle mit einem Aufruf von [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop). Dann rufen wir die Funktion `resetApp()` auf, die das `srcObject` des `<video>`-Elements wieder auf `null` setzt, die Zoom-Steuerelemente ausblendet, die Stopp-Schaltfläche deaktiviert und die Start-Schaltfläche aktiviert.

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

## Implementierung der Zoom-Steuerungen

Im nächsten Abschnitt unseres Skripts verbinden wir unsere Zoom-Schaltflächen mit entsprechenden `click`-Handler-Funktionen, damit wir die erfasste Anzeigeoberfläche ein- und auszoomen können. Die Funktionen, die sie beim Klicken ausführen, sind wie folgt:

- "Verkleinern"-Schaltfläche: `decreaseZoom()`. Diese ruft die Methode [`CaptureController.decreaseZoomLevel()`](/de/docs/Web/API/CaptureController/decreaseZoomLevel) auf, um die erfasste Oberfläche zu verkleinern.
- "Vergrößern"-Schaltfläche: `increaseZoom()`. Diese ruft die Methode [`CaptureController.increaseZoomLevel()`](/de/docs/Web/API/CaptureController/increaseZoomLevel) auf, um die erfasste Oberfläche zu vergrößern.
- "Zoom zurücksetzen"-Schaltfläche: `resetZoom()`. Diese ruft die Methode [`CaptureController.resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) auf, um die erfasste Oberfläche auf ihren Ausgangs-Zoomfaktor (`100%`) zurückzusetzen.

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
> Es ist im Allgemeinen eine bewährte Praxis, `decreaseZoomLevel()` und `increaseZoomLevel()` innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks aufzurufen, da der Zoomlevel asynchron von einer anderen Entität als der Anwendung geändert werden könnte, was zu einem Fehler führen kann. Beispielsweise könnte der Benutzer direkt mit der erfassten Oberfläche interagieren, um sie zu vergrößern oder zu verkleinern.

Wenn sich der Zoom ändert, wird das `zoomlevelchange`-Ereignis des Controllers ausgelöst, was dazu führt, dass der Code, den wir früher in der `startCapture()`-Funktion gesehen haben, ausgeführt wird, der den aktualisierten Zoomlevel in das `<output>`-Element schreibt und die Funktion `updateZoomButtonState()` ausführt, um den Benutzer daran zu hindern, zu weit hinein- oder herauszuzoomen.

```js
controller.addEventListener("zoomlevelchange", () => {
  outputElem.textContent = `${controller.zoomLevel}%`;
  updateZoomButtonState();
});
```

## Weiterleiten von Radereignissen an die erfasste Anzeigeoberfläche

Früher, am Ende der `startCapture()`-Funktion, haben wir die `startForwarding()`-Funktion ausgeführt, die es ermöglicht, die erfasste Anzeigeoberfläche von der erfassenden App aus zu scrollen. Diese führt die Methode [`CaptureController.forwardWheel()`](/de/docs/Web/API/CaptureController/forwardWheel) aus, an die wir eine Referenz zum `<video>`-Element übergeben. Wenn das resultierende Versprechen aufgelöst wird, beginnt der Browser, alle auf dem `<video>` ausgelösten [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignisse an den erfassten Tab oder das Fenster weiterzuleiten, sodass es gescrollt wird.

```js live-sample___surface-control-demo
async function startForwarding() {
  try {
    await controller.forwardWheel(videoElem);
  } catch (e) {
    console.log(e);
  }
}
```

## Verhindern, dass der Benutzer zu weit hinein- und herauszoomt

Schließlich ist es an der Zeit, die `updateZoomButtonState()`-Funktion zu definieren, die innerhalb der `zoomlevelchange`-Ereignishandler-Funktion, die Sie früher gesehen haben, ausgeführt wird. Das Problem, das sie löst, besteht darin, dass, wenn Sie versuchen, unter das minimale unterstützte Zoomlevel herauszuzoomen oder über das maximale unterstützte Zoomlevel hereinzuzoomen, `decreaseZoomLevel()`/`increaseZoomLevel()` eine `InvalidStateError`-[`DOMException`](/de/docs/Web/API/DOMException) auslöst.

Die `updateZoomButtonState()`-Funktion vermeidet dieses Problem, indem sie zuerst sicherstellt, dass sowohl die "Verkleinern"- als auch die "Vergrößern"-Schaltflächen aktiviert sind. Sie führt dann zwei Überprüfungen durch:

- Wenn der aktuelle Zoomlevel (zurückgegeben durch die `CaptureController.zoomLevel`-Eigenschaft) gleich dem minimal unterstützten Zoomlevel ist (gespeichert im ersten Wert des `zoomLevels`-Arrays), deaktivieren wir die "Verkleinern"-Schaltfläche, damit der Benutzer nicht weiter herauszoomen kann.
- Wenn der aktuelle Zoomlevel gleich dem maximal unterstützten Zoomlevel ist (gespeichert im letzten Wert des `zoomLevels`-Arrays), deaktivieren wir die "Vergrößern"-Schaltfläche, sodass der Benutzer nicht weiter hereinzuzoomen kann.

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

Die fertige Demo wird folgendermaßen dargestellt:

{{EmbedLiveSample("surface-control-demo", , "500px", , , , "display-capture; captured-surface-control")}}
