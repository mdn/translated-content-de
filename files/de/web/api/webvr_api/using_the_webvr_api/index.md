---
title: Verwendung der WebVR API
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{DefaultAPISidebar("WebVR API")}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, wurde nur in wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte eine geringe Anzahl von Geräten.

Die WebVR API ist eine großartige Ergänzung für das Toolkit eines Webentwicklers und ermöglicht es, WebGL-Szenen in Virtual-Reality-Displays wie dem Oculus Rift und HTC Vive darzustellen. Aber wie fängt man mit der Entwicklung von VR-Apps für das Web an? Dieser Artikel wird Sie durch die Grundlagen führen.

## Erste Schritte

Um loszulegen, benötigen Sie:

- Unterstützende VR-Hardware.
  - Die günstigste Option ist die Verwendung eines mobilen Geräts, eines unterstützenden Browsers und einer Gerätehalterung (z. B. Google Cardboard). Dies wird nicht ganz so gut sein wie dedizierte Hardware, aber Sie müssen keinen leistungsstarken Computer oder ein dediziertes VR-Display kaufen.
  - Dedizierte Hardware kann teuer sein, bietet aber ein besseres Erlebnis. Die derzeit am besten mit WebVR kompatible Hardware ist das HTC VIVE und das Oculus Rift. Die Startseite von [webvr.info](https://webvr.info/) enthält weitere nützliche Informationen über verfügbare Hardware und welche Browser sie unterstützen.

- Einen Computer, der leistungsfähig genug ist, um VR-Szenen mit Ihrer dedizierten VR-Hardware zu rendern/anzuzeigen, falls erforderlich. Um eine Vorstellung davon zu bekommen, was Sie benötigen, schauen Sie sich den entsprechenden Leitfaden für das von Ihnen erworbene VR-System an (z. B. [VIVE READY Computers](https://www.vive.com/us/vive-ready/)).
- Einen unterstützenden Browser installiert — die neuesten [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder [Chrome](https://www.google.com/chrome/index.html) sind derzeit Ihre besten Optionen auf Desktop oder Mobilgeräten.

Sobald Sie alles zusammengebaut haben, können Sie testen, ob Ihr Setup mit WebVR funktioniert, indem Sie unser [einfaches A-Frame-Demo](https://mdn.github.io/webvr-tests/webvr/aframe-demo/) aufrufen und prüfen, ob die Szene gerendert wird und ob Sie in den VR-Anzeigemodus wechseln können, indem Sie den Button unten rechts drücken.

[A-Frame](https://aframe.io/) ist mit Abstand die beste Option, wenn Sie schnell eine WebVR-kompatible 3D-Szene erstellen möchten, ohne sich mit einer Menge neuen JavaScript-Codes auseinandersetzen zu müssen. Es zeigt Ihnen jedoch nicht, wie die rohe WebVR API funktioniert, und genau das werden wir als Nächstes behandeln.

## Einführung in unser Demo

Um zu veranschaulichen, wie die WebVR API funktioniert, werden wir unser raw-webgl-example studieren, das in etwa so aussieht:

![Ein grauer, sich drehender 3D-Würfel](capture1.png)

> [!NOTE]
> Sie können den [Quellcode unseres Demos](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) auf GitHub finden und [es live anschauen](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example/).

> [!NOTE]
> Wenn WebVR in Ihrem Browser nicht funktioniert, müssen Sie möglicherweise sicherstellen, dass es über Ihre Grafikkarte läuft. Bei NVIDIA-Karten gibt es beispielsweise, wenn das NVIDIA-Kontrollfeld korrekt eingerichtet ist, eine Kontextmenüoption — klicken Sie mit der rechten Maustaste auf Firefox und wählen Sie _Mit Grafikprozessor ausführen > Hochleistungs-NVIDIA-Prozessor_.

Unser Demo bietet das Nonplusultra der WebGL-Demos — einen rotierenden 3D-Würfel. Wir haben dies mit rohem [WebGL API](/de/docs/Web/API/WebGL_API)-Code implementiert. Wir werden keine grundlegenden JavaScript- oder WebGL-Kenntnisse vermitteln, sondern nur die WebVR-Teile.

Unser Demo umfasst auch:

- Einen Button, um unsere Szene für die Präsentation im VR-Display zu starten (und zu stoppen).
- Einen Button, um VR-Pose-Daten anzuzeigen (und zu verbergen), d.h. die Position und Orientierung des Headsets, die in Echtzeit aktualisiert werden.

Wenn Sie sich den Quellcode der [Haupt-JavaScript-Datei unseres Demos](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) ansehen, können Sie die WebVR-spezifischen Teile leicht finden, indem Sie im Vorfeld nach dem String "WebVR" in Kommentaren suchen.

> [!NOTE]
> Um mehr über grundlegendes JavaScript und WebGL zu erfahren, konsultieren Sie unser [JavaScript-Lernmaterial](/de/docs/Learn_web_development/Core/Scripting) und unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

## Wie funktioniert es?

An diesem Punkt schauen wir uns an, wie die WebVR-Teile des Codes funktionieren.

Eine typische (einfache) WebVR-App funktioniert so:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um eine Referenz auf Ihr VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um die Präsentation auf dem VR-Display zu starten.
3. WebVR's dedizierte Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) wird verwendet, um die Rendering-Schleife der App mit der richtigen Bildwiederholrate für das Display auszuführen.
4. Innerhalb der Render-Schleife erfassen Sie die Daten, die für die Anzeige des aktuellen Frames erforderlich sind ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen zweimal — einmal für die Ansicht in jedem Auge — die dargestellte Szene und übergeben die gerenderte Ansicht an das Display für die Anzeige an den Benutzer via ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

In den folgenden Abschnitten werden wir unser raw-webgl-demo im Detail betrachten und sehen, wo genau die obigen Funktionen verwendet werden.

### Beginnen mit einigen Variablen

Der erste WebVR-bezogene Code, dem Sie begegnen werden, ist dieser folgende Block:

```js
// WebVR variables

const frameData = new VRFrameData();
let vrDisplay;
const btn = document.querySelector(".stop-start");
let normalSceneFrame;
let vrSceneFrame;

const poseStatsBtn = document.querySelector(".pose-stats");
const poseStatsSection = document.querySelector("section");
poseStatsSection.style.visibility = "hidden"; // hide it initially

const posStats = document.querySelector(".pos");
const orientStats = document.querySelector(".orient");
const linVelStats = document.querySelector(".lin-vel");
const linAccStats = document.querySelector(".lin-acc");
const angVelStats = document.querySelector(".ang-vel");
const angAccStats = document.querySelector(".ang-acc");
let poseStatsDisplayed = false;
```

Lassen Sie uns kurz diese erklären:

- `frameData` enthält ein [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt, das mit dem [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData)-Konstruktor erstellt wird. Dies ist zunächst leer, wird aber später die Daten enthalten, die erforderlich sind, um jeden Frame im VR-Display darzustellen, und wird kontinuierlich aktualisiert, während die Render-Schleife läuft.
- `vrDisplay` ist anfänglich nicht initialisiert, wird aber später eine Referenz zu unserem VR-Headset ([`VRDisplay`](/de/docs/Web/API/VRDisplay) — das zentrale Steuerobjekt der API) enthalten.
- `btn` und `poseStatsBtn` halten Referenzen auf die zwei Buttons, die wir zur Steuerung unserer App verwenden.
- `normalSceneFrame` und `vrSceneFrame` sind anfänglich nicht initialisiert, werden später jedoch Referenzen zu [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) Aufrufen enthalten — diese werden die Ausführung einer normalen Render-Schleife und einer speziellen WebVR-Render-Schleife einleiten; wir erläutern später den Unterschied zwischen diesen beiden.
- Die anderen Variablen speichern Referenzen auf verschiedene Teile der VR-Pose-Daten-Anzeige-Box, die Sie in der unteren rechten Ecke der Benutzeroberfläche sehen können.

### Eine Referenz auf unser VR-Display erhalten

Zunächst einmal holen wir uns einen WebGL-Kontext, um damit 3D-Grafiken in das {{htmlelement("canvas")}}-Element in [unserem HTML](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) zu rendern. Dann überprüfen wir, ob der `gl`-Kontext verfügbar ist — falls ja, führen wir eine Reihe von Funktionen aus, um die Szene für die Anzeige einzurichten.

```js
const canvas = document.getElementById("gl-canvas");

initWebGL(canvas); // Initialize the GL context

// WebGL setup code here
```

Als Nächstes beginnen wir mit dem Prozess des tatsächlichen Renderns der Szene auf die Leinwand, indem wir die Leinwand so einstellen, dass sie den gesamten Browser-Viewport ausfüllt, und die Rendering-Schleife (`drawScene()`) zum ersten Mal ausführen. Dies ist die nicht-WebVR — normale — Render-Schleife.

```js
// draw the scene normally, without WebVR - for those who don't have it and want to see the scene in their browser

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

Jetzt kommen wir zu unserem ersten WebVR-spezifischen Code. Zunächst überprüfen wir, ob [`Navigator.getVRDisplays`](/de/docs/Web/API/Navigator/getVRDisplays) existiert — dies ist der Einstiegspunkt in die API und daher eine gute grundlegende Funktionsprüfung für WebVR. Wenn dies nicht existiert, protokollieren wir eine Nachricht, um anzuzeigen, dass WebVR 1.1 vom Browser nicht unterstützt wird.

```js
// WebVR: Check to see if WebVR is supported
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 supported");
  // ...
} else {
  console.log("WebVR API not supported by this browser.");
}
```

Der Rest des Codes wird innerhalb des `if (navigator.getVRDisplays) { }` Blocks ausgeführt, sodass er nur läuft, wenn WebVR unterstützt wird.

Zuerst führen wir die Funktion [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) aus. Diese gibt ein Versprechen zurück, das mit einem Array erfüllt wird, das alle mit dem Computer verbundenen VR-Anzeigegeräte enthält. Wenn keine verbunden sind, ist das Array leer.

Innerhalb des `then()` Blocks des Versprechens überprüfen wir, ob die Arraylänge größer als 0 ist; falls ja, setzen wir den Wert unserer `vrDisplay`-Variablen auf das 0-Index-Element im Array. `vrDisplay` enthält jetzt ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt, das unser verbundenes Display repräsentiert!

```js
// Then get the displays attached to the computer
navigator.getVRDisplays().then((displays) => {
  // If a display is available, use it to present the scene
  if (displays.length > 0) {
    vrDisplay = displays[0];
    console.log("Display found");
    // ...
  }
});
```

Der Rest des Codes geht in den `if (displays.length > 0) { }` Block, sodass er nur ausgeführt wird, wenn mindestens ein VR-Display verfügbar ist.

> [!NOTE]
> Es ist unwahrscheinlich, dass Sie mehrere VR-Displays an Ihren Computer angeschlossen haben, und dies ist nur ein einfaches Demo, daher reicht dies für jetzt.

### Starten und Stoppen der VR-Präsentation

Jetzt, da wir ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt haben, können wir es für eine Reihe von Dingen verwenden. Das nächste, was wir tun wollen, ist, Funktionalität zum Starten und Stoppen der Präsentation der WebGL-Inhalte auf dem Display zu verkabeln.

Fortsetzend mit dem vorherigen Codeblock, fügen wir nun einen Event-Listener zu unserem Start/Stopp-Button (`btn`) hinzu — wenn dieser Button geklickt wird, möchten wir prüfen, ob wir bereits auf dem Display präsentieren (wir tun dies auf eine ziemlich dumme Art, indem wir überprüfen, welchen Inhalt der Button [`textContent`](/de/docs/Web/API/Node/textContent) enthält).

Wenn das Display noch nicht präsentiert, verwenden wir die Methode [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent), um den Browser zu bitten, mit der Präsentation von Inhalten auf dem Display zu beginnen. Dies nimmt ein Array von [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Objekten als Parameter, die die Schichten repräsentieren, die Sie im Display präsentieren möchten.

Da die maximale Anzahl von Schichten, die Sie anzeigen können, derzeit 1 ist und das einzige erforderliche Objektmitglied die [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source)-Eigenschaft ist (welche eine Referenz auf das {{htmlelement("canvas")}} ist, das Sie in dieser Schicht präsentieren möchten; die anderen Parameter haben vernünftige Standardwerte — siehe [`leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) und [`rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds))), lautet der Parameter `[{ source: canvas }]`.

`requestPresent()` gibt ein Versprechen zurück, das erfüllt wird, wenn die Präsentation erfolgreich beginnt.

```js
// Starting the presentation when the button is clicked: It can only be called in response to a user gesture
btn.addEventListener("click", () => {
  if (btn.textContent === "Start VR display") {
    vrDisplay.requestPresent([{ source: canvas }]).then(() => {
      console.log("Presenting to WebVR display");
      // ...
    });
  } else {
    // ...
  }
});
```

Mit unserem erfolgreichen Präsentationsantrag möchten wir nun mit dem Einrichten des Renderings von Inhalten beginnen, die im VRDisplay präsentiert werden sollen. Zunächst stellen wir die Leinwand auf die gleiche Größe wie der VR-Displaybereich ein. Dazu holen wir die [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) für beide Augen mit [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters).

Dann führen wir einige einfache Berechnungen durch, um die Gesamtbreite des VRDisplay-Renderbereichs basierend auf den Augen- [`VREyeParameters.renderWidth`](/de/docs/Web/API/VREyeParameters/renderWidth) und [`VREyeParameters.renderHeight`](/de/docs/Web/API/VREyeParameters/renderHeight) zu berechnen.

```js
vrDisplay.requestPresent([{ source: canvas }]).then(() => {
  // ...
  // Set the canvas size to the size of the vrDisplay viewport

  const leftEye = vrDisplay.getEyeParameters("left");
  const rightEye = vrDisplay.getEyeParameters("right");

  canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
  canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);
  // ...
});
```

Als nächstes [stornieren wir die Animationsschleife](/de/docs/Web/API/Window/cancelAnimationFrame), die zuvor durch den [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Aufruf innerhalb der `drawScene()` Funktion in Gang gesetzt wurde, und rufen stattdessen `drawVRScene()` auf. Diese Funktion rendert die gleiche Szene wie zuvor, jedoch mit einem speziellen WebVR-Zauber. Die Schleife innerhalb hiervon wird durch WebVRs spezielle Methode [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) aufrechterhalten.

```js
vrDisplay.requestPresent([{ source: canvas }]).then(() => {
  // ...
  // stop the normal presentation, and start the vr presentation
  window.cancelAnimationFrame(normalSceneFrame);
  drawVRScene();
  // ...
});
```

Schließlich aktualisieren wir den Button-Text, sodass beim nächsten Drücken die Präsentation auf dem VR-Display beendet wird.

```js
vrDisplay.requestPresent([{ source: canvas }]).then(() => {
  // ...
  btn.textContent = "Exit VR display";
});
```

Um die VR-Präsentation zu stoppen, wenn der Button anschließend wieder gedrückt wird, rufen wir [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent) auf. Wir ändern auch den Textinhalt des Buttons zurück und tauschen die `requestAnimationFrame`-Aufrufe um. Sie können sehen, dass wir [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) verwenden, um die VR-Render-Schleife zu stoppen, und die normale Render-Schleife erneut starten, indem wir `drawScene()` aufrufen.

```js
if (btn.textContent === "Start VR display") {
  // ...
} else {
  vrDisplay.exitPresent();
  console.log("Stopped presenting to WebVR display");

  btn.textContent = "Start VR display";

  // Stop the VR presentation, and start the normal presentation
  vrDisplay.cancelAnimationFrame(vrSceneFrame);
  drawScene();
}
```

Sobald die Präsentation beginnt, können Sie die stereoskopische Ansicht im Browser sehen:

![Stereoskopische Ansicht des 3D-Würfels](capture2.png)

Weiter unten erfahren Sie, wie die stereoskopische Ansicht tatsächlich erzeugt wird.

### Warum hat WebVR sein eigenes requestAnimationFrame()?

Das ist eine gute Frage. Der Grund dafür ist, dass für ein reibungsloses Rendering innerhalb des VR-Displays der Inhalt bei der nativen Bildwiederholrate des Displays gerendert werden muss, nicht der des Computers. VR-Display-Bildwiederholraten sind höher als PC-Bildwiederholraten, typischerweise bis zu 90 fps. Die Rate wird sich von der Kernauffrischungsrate des Computers unterscheiden.

Beachten Sie, dass [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) identisch wie [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) ausgeführt, wenn das VR-Display nicht präsentiert, sodass Sie, wenn Sie wollten, nur eine einzige Rendering-Schleife verwenden könnten, anstatt der beiden, die wir in unserer App verwenden. Wir haben zwei verwendet, weil wir leicht unterschiedliche Dinge je nach Präsentationszustand des VR-Displays machen wollten und die Dinge zur besseren Verständlichkeit getrennt halten wollten.

### Rendering und Anzeige

An diesem Punkt haben wir den gesamten Code gesehen, der erforderlich ist, um auf die VR-Hardware zuzugreifen, unsere Szene auf der Hardware zu präsentieren und die Rendering-Schleife zu starten. Schauen wir uns nun den Code für die Rendering-Schleife an und erklären, wie die WebVR-spezifischen Teile davon funktionieren.

Zunächst beginnen wir die Definition unserer Rendering-Schleifenfunktion — `drawVRScene()`. Das Erste, was wir hier drinnen tun, ist ein Aufruf an [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame), um die Schleife am Laufen zu halten, nachdem sie einmal aufgerufen wurde (dies geschah früher in unserem Code, als wir mit der Präsentation auf dem VR-Display begonnen haben). Dieser Aufruf wird als Wert der globalen `vrSceneFrame`-Variable gesetzt, sodass wir die Schleife mit einem Aufruf an [`VRDisplay.cancelAnimationFrame()](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) stoppen können, sobald wir das VR-Präsentieren verlassen.

```js
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
  // ...
}
```

Als nächstes rufen wir [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) auf und übergeben ihm den Namen der Variable, die die Frame-Daten enthalten soll. Diese Initialisierung fand vorher statt — `frameData`. Nach Abschluss des Aufrufs enthält diese Variable die Daten, die benötigt werden, um den nächsten Frame auf dem VR-Gerät darzustellen, verpackt als [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt. Dieses enthält Dinge wie Projektions- und Ansichtsmatrizen für das korrekte Rendering der Szene für die linke und rechte Augenansicht sowie das aktuelle [`VRPose`](/de/docs/Web/API/VRPose)-Objekt, das Daten über das VR-Display wie Orientierung, Position usw. enthält.

Dies muss bei jedem Frame aufgerufen werden, damit die dargestellte Ansicht immer auf dem neuesten Stand ist.

```js
function drawVRScene() {
  // ...
  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);
  // ...
}
```

Nun holen wir die aktuelle [`VRPose`](/de/docs/Web/API/VRPose) aus der [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose)-Eigenschaft und speichern die Position und Orientierung zur späteren Verwendung, und senden die aktuelle Pose an die Pose-Statistik-Box für die Anzeige, falls die `poseStatsDisplayed`-Variable auf true gesetzt ist.

```js
function drawVRScene() {
  // ...
  // You can get the position, orientation, etc. of the display from the current frame's pose

  const curFramePose = frameData.pose;
  const curPos = curFramePose.position;
  const curOrient = curFramePose.orientation;
  if (poseStatsDisplayed) {
    displayPoseStats(curFramePose);
  }
  // ...
}
```

Wir löschen jetzt die Leinwand, bevor wir darauf zeichnen, damit der nächste Frame klar zu sehen ist und wir nicht auch den vorherigen gerenderten Frame sehen:

```js
function drawVRScene() {
  // ...
  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  // ...
}
```

Nun rendern wir die Ansicht für beide, das linke und das rechte Auge. Zunächst müssen wir Projektions- und Ansichtsortungen für die Verwendung im Rendering erstellen. Dabei handelt es sich um [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekte, die mit der Methode [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation) erstellt werden, bei der die Kennung des Shader-Programms und ein identifizierender Name als Parameter übergeben werden.

```js
function drawVRScene() {
  // ...
  // WebVR: Create the required projection and view matrix locations needed
  // for passing into the uniformMatrix4fv methods below

  const projectionMatrixLocation = gl.getUniformLocation(
    shaderProgram,
    "projMatrix",
  );
  const viewMatrixLocation = gl.getUniformLocation(shaderProgram, "viewMatrix");
  // ...
}
```

Der nächste Rendering-Schritt umfasst:

- Festlegen der Ansichtsbereichsgröße für das linke Auge mittels [`WebGLRenderingContext.viewport`](/de/docs/Web/API/WebGLRenderingContext/viewport) — logischerweise die erste Hälfte der Leinwandbreite und die volle Leinwandhöhe.
- Festlegen der Ansichts- und Projektionsmatrixwerte, die zum Rendern des linken Auges zu verwenden sind — dies geschieht mittels der Methode [`WebGLRenderingContext.uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix), die auf die zuvor abgerufenen Positionswerte verweist und die von dem [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt erhaltenen Matrizen nutzt.
- Ausführen der `drawGeometry()`-Funktion, die die eigentliche Szene rendert — aufgrund dessen, was wir in den vorherigen zwei Schritten festgelegt haben, wird sie nur für das linke Auge gerendert.

```js
function drawVRScene() {
  // ...
  // WebVR: Render the left eye's view to the left half of the canvas
  gl.viewport(0, 0, canvas.width * 0.5, canvas.height);
  gl.uniformMatrix4fv(
    projectionMatrixLocation,
    false,
    frameData.leftProjectionMatrix,
  );
  gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.leftViewMatrix);
  drawGeometry();
  // ...
}
```

Nun tun wir genau das gleiche, aber für das rechte Auge:

```js
function drawVRScene() {
  // ...
  // WebVR: Render the right eye's view to the right half of the canvas
  gl.viewport(canvas.width * 0.5, 0, canvas.width * 0.5, canvas.height);
  gl.uniformMatrix4fv(
    projectionMatrixLocation,
    false,
    frameData.rightProjectionMatrix,
  );
  gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.rightViewMatrix);
  drawGeometry();
  // ...
}
```

Als nächstes definieren wir unsere `drawGeometry()` Funktion. Der größte Teil davon ist nur allgemeiner WebGL-Code, der benötigt wird, um unseren 3D-Würfel zu zeichnen. Sie werden einige WebVR-spezifische Teile in den `mvTranslate()` und `mvRotate()` Funktionsaufrufen sehen — diese übergeben Matrizen an das WebGL-Programm, die die Translation und Rotation des Würfels für den aktuellen Frame definieren.

Sie werden sehen, dass wir diese Werte durch die Position (`curPos`) und Orientierung (`curOrient`) des VR-Displays modifizieren, die wir aus dem [`VRPose`](/de/docs/Web/API/VRPose) Objekt erhalten haben. Das Ergebnis ist, dass, zum Beispiel, wenn Sie Ihren Kopf nach links bewegen oder drehen, der x-Positionswert (`curPos[0]`) und der y-Grad-Wert (`[curOrient[1]`) zum x-Übersetzungwert hinzugefügt werden, was bedeutet, dass sich der Würfel nach rechts bewegen wird, wie Sie es erwarten, wenn Sie etwas ansehen und dann Ihren Kopf nach links bewegen/drehen.

Dies ist eine schnelle und einfache Möglichkeit, VR-Positionierungsdaten zu nutzen, aber es illustriert das grundlegende Prinzip.

```js
function drawGeometry() {
  // Establish the perspective with which we want to view the
  // scene. Our field of view is 45 degrees, with a width/height
  // ratio of 640:480, and we only want to see objects between 0.1 units
  // and 100 units away from the camera.
  perspectiveMatrix = makePerspective(45, 640.0 / 480.0, 0.1, 100.0);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  loadIdentity();

  // Now move the drawing position a bit to where we want to start
  // drawing the cube.
  mvTranslate([
    0.0 - curPos[0] * 25 + curOrient[1] * 25,
    5.0 - curPos[1] * 25 - curOrient[0] * 25,
    -15.0 - curPos[2] * 25,
  ]);

  // Save the current matrix, then rotate before we draw.
  mvPushMatrix();
  mvRotate(cubeRotation, [0.25, 0, 0.25 - curOrient[2] * 0.5]);

  // Draw the cube by binding the array buffer to the cube's vertices
  // array, setting attributes, and pushing it to GL.
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesBuffer);
  gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

  // Set the texture coordinates attribute for the vertices.
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesTextureCoordBuffer);
  gl.vertexAttribPointer(textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);

  // Specify the texture to map onto the faces.
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.uniform1i(gl.getUniformLocation(shaderProgram, "uSampler"), 0);

  // Draw the cube.
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);
  setMatrixUniforms();
  gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);

  // Restore the original matrix
  mvPopMatrix();
}
```

Der nächste Teil des Codes hat nichts mit WebVR zu tun — er aktualisiert einfach die Rotation des Würfels in jedem Frame:

```js
function drawVRScene() {
  // ...
  // Update the rotation for the next draw, if it's time to do so.
  let currentTime = new Date().getTime();
  if (lastCubeUpdateTime) {
    const delta = currentTime - lastCubeUpdateTime;

    cubeRotation += (30 * delta) / 1000.0;
  }
  lastCubeUpdateTime = currentTime;
  // ...
}
```

Der letzte Teil der Render-Schleife umfasst das Aufrufen von [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) — jetzt, wo die ganze Arbeit getan ist und wir die Darstellung auf dem {{htmlelement("canvas")}} gerendert haben, übermittelt diese Methode den Frame an das VR-Display, sodass er dort ebenfalls angezeigt wird.

```js
function drawVRScene() {
  // ...
  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

### Die Position (Position, Orientierung usw.) Daten anzeigen

In diesem Abschnitt erläutern wir die Funktion `displayPoseStats()`, die unsere aktualisierten Posendaten in jedem Frame anzeigt. Die Funktion ist ziemlich einfach.

Zunächst einmal speichern wir die sechs verschiedenen Eigenschaftswerte, die aus dem [`VRPose`](/de/docs/Web/API/VRPose) Objekt erhalten werden können, in eigenen Variablen — jede ist ein {{jsxref("Float32Array")}}.

```js
function displayPoseStats(pose) {
  const pos = pose.position;
  const orient = pose.orientation;
  const linVel = pose.linearVelocity;
  const linAcc = pose.linearAcceleration;
  const angVel = pose.angularVelocity;
  const angAcc = pose.angularAcceleration;
  // ...
}
```

Wir schreiben dann die Daten in die Informationsbox und aktualisieren sie in jedem Frame. Wir haben jeden Wert auf drei Dezimalstellen geklammert, indem wir [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) verwenden, da die Werte ansonsten schwer zu lesen sind.

Sie sollten beachten, dass wir einen bedingten Ausdruck verwendet haben, um zu erkennen, ob die Arrays für lineare Beschleunigung und Winkelbeschleunigung erfolgreich zurückgegeben werden, bevor wir die Daten anzeigen. Diese Werte werden von den meisten VR-Geräten bisher nicht gemeldet, sodass der Code einen Fehler auslösen würde, wenn wir dies nicht tun würden (die Arrays geben `null` zurück, wenn sie nicht erfolgreich gemeldet werden).

```js
function displayPoseStats(pose) {
  // ...
  posStats.textContent =
    `Position: ` +
    `x ${pos[0].toFixed(3)}, ` +
    `y ${pos[1].toFixed(3)}, ` +
    `z ${pos[2].toFixed(3)}`;
  orientStats.textContent =
    `Orientation: ` +
    `x ${orient[0].toFixed(3)}, ` +
    `y ${orient[1].toFixed(3)}, ` +
    `z ${orient[2].toFixed(3)}`;
  linVelStats.textContent =
    `Linear velocity: ` +
    `x ${linVel[0].toFixed(3)}, ` +
    `y ${linVel[1].toFixed(3)}, ` +
    `z ${linVel[2].toFixed(3)}`;
  angVelStats.textContent =
    `Angular velocity: ` +
    `x ${angVel[0].toFixed(3)}, ` +
    `y ${angVel[1].toFixed(3)}, ` +
    `z ${angVel[2].toFixed(3)}`;

  if (linAcc) {
    linAccStats.textContent =
      `Linear acceleration: ` +
      `x ${linAcc[0].toFixed(3)}, ` +
      `y ${linAcc[1].toFixed(3)}, ` +
      `z ${linAcc[2].toFixed(3)}`;
  } else {
    linAccStats.textContent = "Linear acceleration not reported";
  }

  if (angAcc) {
    angAccStats.textContent =
      `Angular acceleration: ` +
      `x ${angAcc[0].toFixed(3)}, ` +
      `y ${angAcc[1].toFixed(3)}, ` +
      `z ${angAcc[2].toFixed(3)}`;
  } else {
    angAccStats.textContent = "Angular acceleration not reported";
  }
}
```

## WebVR-Ereignisse

Die WebVR-Spezifikation enthält eine Reihe von Ereignissen, die ausgelöst werden und es unserem App-Code ermöglichen, auf Änderungen des VR-Display-Zustands zu reagieren (siehe [Window-Ereignisse](/de/docs/Web/API/WebVR_API#window_events)). Zum Beispiel:

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) — Wird ausgelöst, wenn sich der Präsentationszustand eines VR-Displays ändert — also wenn es von Präsentation zu Nicht-Präsentation übergeht oder umgekehrt.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) — Wird ausgelöst, wenn ein kompatibles VR-Display mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) — Wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.

Um zu demonstrieren, wie sie funktionieren, enthält unser einfaches Demo folgendes Beispiel:

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

Wie Sie sehen können, bietet das [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent) Objekt zwei nützliche Eigenschaften — [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display), das eine Referenz auf das [`VRDisplay`](/de/docs/Web/API/VRDisplay) enthält, auf das das Ereignis reagierte, und [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason), das einen menschenlesbaren Grund enthält, warum das Ereignis ausgelöst wurde.

Dies ist ein sehr nützliches Ereignis; Sie könnten es verwenden, um Fälle zu behandeln, in denen das Display unerwartet getrennt wird, sodass keine Fehler ausgelöst werden und der Benutzer über die Situation informiert wird. In Googles webvr.info Präsentationsdemo wird das Ereignis genutzt, um eine [`onVRPresentChange()` Funktion](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174) auszuführen, die die UI-Kontrollen entsprechend aktualisiert und die Leinwandgröße anpasst.

## Zusammenfassung

Dieser Artikel hat Ihnen die Grundlagen gezeigt, wie Sie eine einfache WebVR 1.1 App erstellen können, um Ihnen den Einstieg zu erleichtern.
