---
title: Die WebVR API verwenden
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{DefaultAPISidebar("WebVR API")}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard verabschiedet, war nur in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl von Geräten.

Die WebVR API ist eine Bereicherung für das Werkzeugrepertoire von Webentwicklern: Mit ihr lassen sich WebGL-Szenen auf Virtual-Reality-Displays wie der Oculus Rift und der HTC Vive darstellen. Doch wie beginnen Sie mit der Entwicklung von VR-Anwendungen für das Web? Dieser Artikel führt Sie durch die Grundlagen.

## Erste Schritte

Für den Einstieg benötigen Sie:

- Geeignete VR-Hardware.
  - Die günstigste Möglichkeit ist ein Mobilgerät mit einem unterstützenden Browser und einer Halterung für das Gerät (z. B. Google Cardboard). Das Erlebnis ist nicht ganz so gut wie mit dedizierter Hardware, aber Sie müssen weder einen leistungsstarken Computer noch ein dediziertes VR-Display kaufen.
  - Dedizierte Hardware kann teuer sein, bietet aber ein besseres Erlebnis. Zu den derzeit am besten mit WebVR kompatiblen Geräten gehören die HTC VIVE und die Oculus Rift. Auf der Startseite von [webvr.info](https://webvr.info/) finden Sie weitere nützliche Informationen zu verfügbarer Hardware und dazu, welche Browser sie unterstützen.

- Falls Sie dedizierte VR-Hardware verwenden: einen Computer, der leistungsstark genug ist, um VR-Szenen zu rendern und darzustellen. Einen Anhaltspunkt für die Anforderungen bietet der jeweilige Leitfaden für das VR-Gerät, das Sie kaufen möchten (z. B. [VIVE READY Computers](https://www.vive.com/us/vive-ready/)).
- Einen installierten Browser, der WebVR unterstützt. Die aktuellen Versionen von [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/) oder [Chrome](https://www.google.com/chrome/index.html) sind derzeit die beste Wahl, sowohl auf Desktop- als auch auf Mobilgeräten.

Wenn Sie alles eingerichtet haben, können Sie mit unserer [einfachen A-Frame-Demo](https://mdn.github.io/webvr-tests/webvr/aframe-demo/) prüfen, ob Ihre Konfiguration mit WebVR funktioniert. Sehen Sie nach, ob die Szene gerendert wird und ob Sie über die Schaltfläche unten rechts in den VR-Anzeigemodus wechseln können.

[A-Frame](https://aframe.io/) ist mit Abstand die beste Wahl, wenn Sie schnell eine WebVR-kompatible 3D-Szene erstellen möchten, ohne viel neuen JavaScript-Code verstehen zu müssen. Allerdings erfahren Sie dabei nicht, wie die WebVR API direkt funktioniert. Damit beschäftigen wir uns als Nächstes.

## Unsere Demo

Um die Funktionsweise der WebVR API zu veranschaulichen, betrachten wir unser raw-webgl-example. Es sieht ungefähr so aus:

![Ein grauer, rotierender 3D-Würfel](capture1.png)

> [!NOTE]
> Den [Quellcode unserer Demo](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) finden Sie auf GitHub. Sie können sich die Demo auch [live ansehen](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example/).

> [!NOTE]
> Wenn WebVR in Ihrem Browser nicht funktioniert, müssen Sie möglicherweise sicherstellen, dass der Browser Ihre Grafikkarte verwendet. Bei NVIDIA-Karten kann beispielsweise eine entsprechende Option im Kontextmenü verfügbar sein, wenn Sie die NVIDIA-Systemsteuerung erfolgreich eingerichtet haben: Klicken Sie mit der rechten Maustaste auf Firefox und wählen Sie dann _Mit Grafikprozessor ausführen > NVIDIA Hochleistungsprozessor_.

Unsere Demo zeigt den Klassiker unter den WebGL-Demos: einen rotierenden 3D-Würfel. Wir haben ihn mit Code der [WebGL API](/de/docs/Web/API/WebGL_API) implementiert. JavaScript- und WebGL-Grundlagen behandeln wir hier nicht, sondern nur die WebVR-spezifischen Teile.

Unsere Demo enthält außerdem:

- Eine Schaltfläche, mit der sich die Darstellung unserer Szene auf dem VR-Display starten und beenden lässt.
- Eine Schaltfläche, mit der sich VR-Pose-Daten – also die Position und Ausrichtung des Headsets – ein- und ausblenden lassen. Die Daten werden in Echtzeit aktualisiert.

Im Quellcode der [JavaScript-Hauptdatei unserer Demo](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) finden Sie die WebVR-spezifischen Teile leicht, indem Sie in den vorangestellten Kommentaren nach „WebVR“ suchen.

> [!NOTE]
> Weitere Informationen zu JavaScript- und WebGL-Grundlagen finden Sie in unserem [JavaScript-Lernmaterial](/de/docs/Learn_web_development/Core/Scripting) und unserem [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

## Wie funktioniert das?

Sehen wir uns nun an, wie die WebVR-Teile des Codes funktionieren.

Eine typische, einfache WebVR-Anwendung funktioniert folgendermaßen:

1. Mit [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) erhalten Sie eine Referenz auf Ihr VR-Display.
2. Mit [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) beginnen Sie die Darstellung auf dem VR-Display.
3. Die WebVR-spezifische Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) führt die Rendering-Schleife der Anwendung mit der passenden Bildwiederholrate des Displays aus.
4. Innerhalb der Rendering-Schleife rufen Sie die für das aktuelle Frame benötigten Daten ab ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die Szene zweimal – einmal für jedes Auge – und übergeben anschließend die gerenderte Ansicht mit [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) an das Display, damit sie angezeigt wird.

In den folgenden Abschnitten betrachten wir unsere raw-webgl-demo genauer und sehen uns an, wo diese Funktionen verwendet werden.

### Zunächst einige Variablen

Der erste WebVR-bezogene Code, auf den Sie stoßen, ist dieser Block:

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

Sehen wir uns die Variablen kurz an:

- `frameData` enthält ein [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt, das mit dem Konstruktor [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData) erstellt wurde. Anfangs ist es leer. Später enthält es die Daten, die benötigt werden, um jedes Frame für das VR-Display zu rendern. Diese Daten werden während der Rendering-Schleife fortlaufend aktualisiert.
- `vrDisplay` ist anfangs nicht initialisiert. Später enthält die Variable eine Referenz auf unser VR-Headset ([`VRDisplay`](/de/docs/Web/API/VRDisplay), das zentrale Steuerungsobjekt der API).
- `btn` und `poseStatsBtn` enthalten Referenzen auf die beiden Schaltflächen, mit denen wir unsere Anwendung steuern.
- `normalSceneFrame` und `vrSceneFrame` sind anfangs nicht initialisiert. Später enthalten sie Referenzen auf Aufrufe von [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame). Diese starten eine normale beziehungsweise eine spezielle WebVR-Rendering-Schleife. Den Unterschied erläutern wir später.
- Die übrigen Variablen speichern Referenzen auf verschiedene Teile des Anzeigefelds für VR-Pose-Daten, das Sie unten rechts in der Benutzeroberfläche sehen.

### Eine Referenz auf unser VR-Display abrufen

Zunächst rufen wir einen WebGL-Kontext ab, um 3D-Grafiken im {{htmlelement("canvas")}}-Element [unserer HTML-Datei](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) zu rendern. Danach prüfen wir, ob der `gl`-Kontext verfügbar ist. Falls ja, führen wir mehrere Funktionen aus, um die Szene für die Darstellung vorzubereiten.

```js
const canvas = document.getElementById("gl-canvas");

initWebGL(canvas); // Initialize the GL context

// WebGL setup code here
```

Anschließend beginnen wir mit dem Rendern der Szene auf das Canvas: Wir stellen das Canvas so ein, dass es den gesamten Viewport des Browsers ausfüllt, und rufen die Rendering-Schleife (`drawScene()`) zum ersten Mal auf. Dies ist die normale Rendering-Schleife ohne WebVR.

```js
// draw the scene normally, without WebVR - for those who don't have it and want to see the scene in their browser

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

Nun folgt der erste WebVR-spezifische Code. Zunächst prüfen wir, ob [`Navigator.getVRDisplays`](/de/docs/Web/API/Navigator/getVRDisplays) vorhanden ist. Dies ist der Einstiegspunkt in die API und eignet sich daher für eine grundlegende Prüfung, ob WebVR unterstützt wird. Ist die Methode nicht vorhanden, protokollieren wir eine Meldung, dass der Browser WebVR 1.1 nicht unterstützt.

```js
// WebVR: Check to see if WebVR is supported
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 supported");
  // ...
} else {
  console.log("WebVR API not supported by this browser.");
}
```

Der restliche Code steht innerhalb des Blocks `if (navigator.getVRDisplays) { }` und wird daher nur ausgeführt, wenn WebVR unterstützt wird.

Zuerst rufen wir die Funktion [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) auf. Sie gibt ein Promise zurück, das mit einem Array aller an den Computer angeschlossenen VR-Displays erfüllt wird. Sind keine angeschlossen, ist das Array leer.

Im `then()`-Block des Promise prüfen wir, ob das Array mehr als einen Eintrag enthält. Falls ja, setzen wir unsere Variable `vrDisplay` auf den Eintrag mit dem Index 0. `vrDisplay` enthält nun ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt, das unser angeschlossenes Display repräsentiert.

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

Der restliche Code steht innerhalb des Blocks `if (displays.length > 0) { }` und wird daher nur ausgeführt, wenn mindestens ein VR-Display verfügbar ist.

> [!NOTE]
> Es ist unwahrscheinlich, dass mehrere VR-Displays an Ihren Computer angeschlossen sind. Für diese einfache Demo reicht dieser Ansatz daher aus.

### Die VR-Darstellung starten und beenden

Nun haben wir ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt, mit dem wir verschiedene Aktionen ausführen können. Als Nächstes richten wir die Funktion ein, mit der sich die Darstellung der WebGL-Inhalte auf dem Display starten und beenden lässt.

An den vorherigen Codeblock anschließend fügen wir unserer Start/Stopp-Schaltfläche (`btn`) einen Event-Listener hinzu. Wenn die Schaltfläche angeklickt wird, prüfen wir, ob bereits Inhalte auf dem Display dargestellt werden. Das tun wir auf recht einfache Weise, indem wir den [`textContent`](/de/docs/Web/API/Node/textContent) der Schaltfläche prüfen.

Falls das Display noch keine Inhalte darstellt, fordern wir den Browser mit der Methode [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) auf, mit der Darstellung zu beginnen. Die Methode erwartet als Parameter ein Array von [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Objekten, die die auf dem Display darzustellenden Ebenen repräsentieren.

Da derzeit höchstens eine Ebene dargestellt werden kann und das einzige erforderliche Objektmitglied die Eigenschaft [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source) ist – eine Referenz auf das {{htmlelement("canvas")}}, das in dieser Ebene dargestellt werden soll; die übrigen Parameter erhalten sinnvolle Standardwerte, siehe [`leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) und [`rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds) –, lautet der Parameter `[{ source: canvas }]`.

`requestPresent()` gibt ein Promise zurück, das erfüllt wird, sobald die Darstellung erfolgreich beginnt.

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

Nachdem die Anfrage zur Darstellung erfolgreich war, bereiten wir das Rendern der Inhalte für das VR-Display vor. Zunächst setzen wir das Canvas auf die Größe des Anzeigebereichs des VR-Displays. Dazu rufen wir mit [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) die [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) für beide Augen ab.

Anschließend berechnen wir anhand von [`VREyeParameters.renderWidth`](/de/docs/Web/API/VREyeParameters/renderWidth) und [`VREyeParameters.renderHeight`](/de/docs/Web/API/VREyeParameters/renderHeight) die Gesamtbreite des Rendering-Bereichs des VR-Displays.

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

Als Nächstes [beenden wir die Animationsschleife](/de/docs/Web/API/Window/cancelAnimationFrame), die zuvor durch den Aufruf von [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) innerhalb der Funktion `drawScene()` gestartet wurde. Stattdessen rufen wir `drawVRScene()` auf. Diese Funktion rendert dieselbe Szene wie zuvor, allerdings mit zusätzlichen WebVR-spezifischen Funktionen. Die Schleife wird hier durch die spezielle WebVR-Methode [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) aufrechterhalten.

```js
vrDisplay.requestPresent([{ source: canvas }]).then(() => {
  // ...
  // stop the normal presentation, and start the vr presentation
  window.cancelAnimationFrame(normalSceneFrame);
  drawVRScene();
  // ...
});
```

Zum Schluss ändern wir den Text der Schaltfläche, sodass beim nächsten Anklicken die Darstellung auf dem VR-Display beendet wird.

```js
vrDisplay.requestPresent([{ source: canvas }]).then(() => {
  // ...
  btn.textContent = "Exit VR display";
});
```

Wenn die Schaltfläche anschließend erneut angeklickt wird, beenden wir die VR-Darstellung mit [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent). Außerdem ändern wir den Schaltflächentext zurück und wechseln wieder zwischen den `requestAnimationFrame`-Aufrufen. Wie Sie sehen, beenden wir die VR-Rendering-Schleife mit [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) und starten durch einen Aufruf von `drawScene()` erneut die normale Rendering-Schleife.

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

Sobald die Darstellung beginnt, sehen Sie im Browser die stereoskopische Ansicht:

![Stereoskopische Ansicht eines 3D-Würfels](capture2.png)

Im Folgenden erfahren Sie, wie diese Ansicht erzeugt wird.

### Warum hat WebVR eine eigene requestAnimationFrame()-Methode?

Das ist eine gute Frage. Für eine flüssige Darstellung im VR-Display müssen die Inhalte mit dessen eigener Bildwiederholrate gerendert werden, nicht mit der des Computers. Die Bildwiederholrate von VR-Displays ist höher als die von PC-Displays und beträgt typischerweise bis zu 90 Bildern pro Sekunde. Sie kann sich von der Bildwiederholrate des Computers unterscheiden.

Beachten Sie, dass [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) genauso funktioniert wie [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame), solange keine Inhalte auf dem VR-Display dargestellt werden. Sie könnten daher auch nur eine einzige Rendering-Schleife statt der zwei Schleifen in unserer Anwendung verwenden. Wir verwenden zwei, weil wir je nach Darstellungszustand des VR-Displays leicht unterschiedliche Dinge tun möchten und die Abläufe zum besseren Verständnis getrennt halten wollen.

### Rendern und Anzeigen

Bis hierhin haben wir den gesamten Code betrachtet, der nötig ist, um auf die VR-Hardware zuzugreifen, die Darstellung unserer Szene darauf anzufordern und die Rendering-Schleife zu starten. Sehen wir uns nun den Code dieser Schleife an, insbesondere die WebVR-spezifischen Teile.

Zunächst definieren wir unsere Rendering-Schleifenfunktion `drawVRScene()`. Als Erstes rufen wir darin [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) auf, damit die Schleife nach ihrem ersten Aufruf weiterläuft. Dieser erste Aufruf erfolgte bereits an früherer Stelle im Code, als wir die Darstellung auf dem VR-Display gestartet haben. Wir speichern den Rückgabewert in der globalen Variable `vrSceneFrame`, damit wir die Schleife mit [`VRDisplay.cancelAnimationFrame()`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) beenden können, sobald die VR-Darstellung beendet wird.

```js
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
  // ...
}
```

Als Nächstes rufen wir [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) auf und übergeben die Variable, in der wir die Frame-Daten speichern möchten: die zuvor initialisierte Variable `frameData`. Nach dem Aufruf enthält sie die Daten, die benötigt werden, um das nächste Frame für das VR-Gerät zu rendern. Sie liegen als [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt vor. Dieses enthält unter anderem Projektions- und Ansichtsmatrizen, mit denen die Szene für das linke und rechte Auge korrekt gerendert wird, sowie das aktuelle [`VRPose`](/de/docs/Web/API/VRPose)-Objekt mit Daten zur Ausrichtung und Position des VR-Displays.

Diese Methode muss für jedes Frame aufgerufen werden, damit die gerenderte Ansicht stets aktuell ist.

```js
function drawVRScene() {
  // ...
  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);
  // ...
}
```

Nun lesen wir die aktuelle [`VRPose`](/de/docs/Web/API/VRPose) aus der Eigenschaft [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose) aus und speichern Position und Ausrichtung für die spätere Verwendung. Wenn die Variable `poseStatsDisplayed` auf true gesetzt ist, übergeben wir die aktuelle Pose außerdem an das Anzeigefeld für Pose-Daten.

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

Bevor wir mit dem Zeichnen beginnen, leeren wir das Canvas. So ist das nächste Frame klar zu sehen und zuvor gerenderte Frames bleiben nicht sichtbar:

```js
function drawVRScene() {
  // ...
  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  // ...
}
```

Nun rendern wir die Ansichten für das linke und das rechte Auge. Zunächst benötigen wir Speicherorte für die Projektions- und Ansichtsmatrizen. Dabei handelt es sich um [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekte, die mit der Methode [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation) erstellt werden. Als Parameter übergeben wir den Bezeichner des Shader-Programms und einen identifizierenden Namen.

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

- Die Größe des Viewports für das linke Auge mit [`WebGLRenderingContext.viewport`](/de/docs/Web/API/WebGLRenderingContext/viewport) festlegen. Dieser Bereich umfasst die erste Hälfte der Canvas-Breite und die gesamte Canvas-Höhe.
- Die Werte der Ansichts- und Projektionsmatrix für das linke Auge mit der Methode [`WebGLRenderingContext.uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix) festlegen. Dazu übergeben wir die zuvor ermittelten Speicherorte und die Matrizen für das linke Auge aus dem [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt.
- Die Funktion `drawGeometry()` ausführen, die die eigentliche Szene rendert. Aufgrund der Festlegungen in den vorherigen beiden Schritten wird sie nur für das linke Auge gerendert.

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

Anschließend führen wir dieselben Schritte für das rechte Auge aus:

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

Als Nächstes definieren wir unsere Funktion `drawGeometry()`. Der größte Teil davon ist allgemeiner WebGL-Code, der zum Zeichnen unseres 3D-Würfels benötigt wird. In den Aufrufen der Funktionen `mvTranslate()` und `mvRotate()` finden Sie einige WebVR-spezifische Teile: Sie übergeben Matrizen an das WebGL-Programm, die die Verschiebung und Drehung des Würfels für das aktuelle Frame festlegen.

Sie sehen, dass wir diese Werte anhand der Position (`curPos`) und Ausrichtung (`curOrient`) des VR-Displays ändern, die wir aus dem [`VRPose`](/de/docs/Web/API/VRPose)-Objekt erhalten haben. Wenn Sie beispielsweise Ihren Kopf nach links bewegen oder drehen, werden der Wert für die x-Position (`curPos[0]`) und der Wert für die y-Drehung (`[curOrient[1]`) zum Wert für die Verschiebung entlang der x-Achse addiert. Dadurch bewegt sich der Würfel nach rechts – wie Sie es erwarten würden, wenn Sie etwas ansehen und dann Ihren Kopf nach links bewegen oder drehen.

Dies ist eine einfache, pragmatische Art, VR-Pose-Daten zu verwenden, veranschaulicht aber das Grundprinzip.

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

Der nächste Codeabschnitt hat nichts mit WebVR zu tun: Er aktualisiert lediglich die Drehung des Würfels bei jedem Frame.

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

Im letzten Teil der Rendering-Schleife rufen wir [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) auf. Nachdem alle Vorbereitungen abgeschlossen sind und wir die Ansicht auf dem {{htmlelement("canvas")}} gerendert haben, übergibt diese Methode das Frame an das VR-Display, damit es auch dort angezeigt wird.

```js
function drawVRScene() {
  // ...
  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

### Pose-Daten (Position, Ausrichtung usw.) anzeigen

In diesem Abschnitt betrachten wir die Funktion `displayPoseStats()`, die bei jedem Frame die aktualisierten Pose-Daten anzeigt. Die Funktion ist recht einfach.

Zunächst speichern wir die sechs verschiedenen Eigenschaftswerte, die sich aus dem [`VRPose`](/de/docs/Web/API/VRPose)-Objekt auslesen lassen, jeweils in einer eigenen Variablen. Jeder dieser Werte ist ein {{jsxref("Float32Array")}}.

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

Anschließend schreiben wir die Daten in das Informationsfeld und aktualisieren es bei jedem Frame. Mit [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) begrenzen wir jeden Wert auf drei Nachkommastellen, da die Werte sonst schwer zu lesen wären.

Beachten Sie, dass wir mit einem bedingten Ausdruck prüfen, ob die Arrays für die lineare Beschleunigung und die Winkelbeschleunigung erfolgreich zurückgegeben wurden, bevor wir diese Daten anzeigen. Die meisten VR-Geräte liefern diese Werte bislang nicht. Ohne diese Prüfung würde der Code einen Fehler auslösen, da die Arrays `null` zurückgeben, wenn die Werte nicht erfolgreich ermittelt werden.

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

Die WebVR-Spezifikation definiert mehrere Ereignisse, auf die unser Anwendungscode reagieren kann, wenn sich der Zustand des VR-Displays ändert (siehe [Window-Ereignisse](/de/docs/Web/API/WebVR_API#window_events)). Zum Beispiel:

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) – Wird ausgelöst, wenn sich der Darstellungszustand eines VR-Displays ändert, also wenn die Darstellung beginnt oder endet.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) – Wird ausgelöst, wenn ein kompatibles VR-Display mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) – Wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.

Unsere einfache Demo enthält das folgende Beispiel, um die Funktionsweise zu zeigen:

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

Wie Sie sehen, stellt das [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)-Objekt zwei nützliche Eigenschaften bereit: [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display) enthält eine Referenz auf das [`VRDisplay`](/de/docs/Web/API/VRDisplay), auf dessen Zustandsänderung das Ereignis reagiert, und [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason) enthält einen für Menschen lesbaren Grund für das Ereignis.

Dieses Ereignis ist sehr nützlich: Sie können damit beispielsweise reagieren, wenn die Verbindung zum Display unerwartet unterbrochen wird. So vermeiden Sie Fehler und stellen sicher, dass die Benutzer über die Situation informiert werden. In Googles Präsentationsdemo auf webvr.info wird das Ereignis verwendet, um eine [`onVRPresentChange()`-Funktion](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174) auszuführen. Diese aktualisiert die Bedienelemente der Benutzeroberfläche und passt die Größe des Canvas an.

## Zusammenfassung

Dieser Artikel hat Ihnen die wichtigsten Grundlagen vermittelt, um mit der Entwicklung einer einfachen WebVR-1.1-Anwendung zu beginnen.
