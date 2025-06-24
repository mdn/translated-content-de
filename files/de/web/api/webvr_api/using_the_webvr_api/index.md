---
title: Verwendung der WebVR-API
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Die WebVR-API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, wurde in sehr wenigen Browsern implementiert und standardmäßig aktiviert, und unterstützte nur eine geringe Anzahl von Geräten.

Die WebVR-API ist eine fantastische Erweiterung des Werkzeugkastens von Webentwicklern, die es ermöglicht, WebGL-Szenen in virtuellen Realitätssystemen wie Oculus Rift und HTC Vive darzustellen. Aber wie beginnen Sie mit der Entwicklung von VR-Apps für das Web? Dieser Artikel wird Sie durch die Grundlagen führen.

## Erste Schritte

Um loszulegen, benötigen Sie:

- Unterstützende VR-Hardware.

  - Die günstigste Option ist die Verwendung eines mobilen Geräts, eines unterstützenden Browsers und einer Gerätehalterung (z. B. Google Cardboard). Dies bietet keine so gute Erfahrung wie dedizierte Hardware, aber Sie müssen keinen leistungsstarken Computer oder ein dediziertes VR-Display erwerben.
  - Dedizierte Hardware kann teuer sein, bietet jedoch eine bessere Erfahrung. Die momentan am meisten WebVR-kompatible Hardware ist der HTC VIVE und der Oculus Rift. Auf der Startseite von [webvr.info](https://webvr.info/) finden Sie weitere nützliche Informationen über verfügbare Hardware und welche Browser sie unterstützen.

- Einen Computer, der leistungsfähig genug ist, um VR-Szenen mit Ihrer dedizierten VR-Hardware darzustellen, falls erforderlich. Um eine Vorstellung davon zu bekommen, was Sie benötigen, sehen Sie sich den entsprechenden Leitfaden für das VR-System an, das Sie kaufen (z. B. [VIVE READY Computer](https://www.vive.com/us/vive-ready/)).
- Einen unterstützenden Browser installiert — der neueste [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder [Chrome](https://www.google.com/chrome/index.html) sind derzeit Ihre besten Optionen auf dem Desktop oder mobil.

Sobald Sie alles zusammengebaut haben, können Sie testen, ob Ihre Einrichtung mit WebVR funktioniert, indem Sie zu unserem [einfachen A-Frame-Demo](https://mdn.github.io/webvr-tests/webvr/aframe-demo/) gehen und überprüfen, ob die Szene gerendert wird und ob Sie den VR-Anzeigemodus durch Drücken der Schaltfläche unten rechts aktivieren können.

[A-Frame](https://aframe.io/) ist mit Abstand die beste Option, wenn Sie schnell eine WebVR-kompatible 3D-Szene erstellen möchten, ohne dabei eine Menge neuer JavaScript-Codes zu verstehen. Es lehrt Sie allerdings nicht, wie die rohe WebVR-API funktioniert, und darauf kommen wir als nächstes.

## Vorstellung unseres Demos

Um zu veranschaulichen, wie die WebVR-API funktioniert, werden wir unser raw-webgl-example untersuchen, das ungefähr so aussieht:

![Ein grauer rotierender 3D-Würfel](capture1.png)

> [!NOTE]
> Sie finden den [Quellcode unseres Demos](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) auf GitHub und können es auch [live ansehen](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example/).

> [!NOTE]
> Wenn WebVR in Ihrem Browser nicht funktioniert, müssen Sie möglicherweise sicherstellen, dass es über Ihre Grafikkarte läuft. Beispielsweise gibt es bei NVIDIA-Karten, wenn Sie das NVIDIA Control Panel erfolgreich eingerichtet haben, eine Kontextmenüoption — klicken Sie mit der rechten Maustaste auf Firefox und wählen Sie _Mit Grafikprozessor ausführen > Hochleistungs-NVIDIA-Prozessor_.

Unser Demo zeigt den heiligen Gral der WebGL-Demos — einen rotierenden 3D-Würfel. Wir haben dies mit rohem [WebGL API](/de/docs/Web/API/WebGL_API) Code implementiert. Wir werden weder grundlegendes JavaScript noch WebGL lehren, nur die WebVR-Teile.

Unser Demo enthält auch:

- Eine Schaltfläche, um unsere Szene zu starten (und zu stoppen), die im VR-Display präsentiert wird.
- Eine Schaltfläche, um VR-Posendaten anzuzeigen (und auszublenden), d.h. die Position und Orientierung des Headsets, in Echtzeit aktualisiert.

Wenn Sie sich den Quellcode der [JavaScript-Hauptdatei unseres Demos](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) ansehen, können Sie die webVR-spezifischen Teile leicht finden, indem Sie nach dem String "WebVR" in den vorstehenden Kommentaren suchen.

> [!NOTE]
> Für mehr Informationen über grundlegendes JavaScript und WebGL, konsultieren Sie unser [JavaScript-Lernmaterial](/de/docs/Learn_web_development/Core/Scripting) und unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

## Wie funktioniert es?

An diesem Punkt wollen wir uns ansehen, wie die WebVR-Teile des Codes funktionieren.

Eine typische (einfache) WebVR-App funktioniert so:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um eine Referenz auf Ihr VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um mit der Präsentation auf dem VR-Display zu beginnen.
3. Die dedizierte WebVR-Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) wird verwendet, um die Rendering-Schleife der App mit der richtigen Bildwiederholrate für das Display auszuführen.
4. In der Rendering-Schleife holen Sie die Daten ab, die erforderlich sind, um den aktuellen Frame anzuzeigen ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die angezeigte Szene zweimal — einmal für die Sicht in jedem Auge — und übermitteln dann die gerenderte Ansicht an das Display, um sie dem Benutzer anzuzeigen ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

In den folgenden Abschnitten werden wir unser raw-webgl-demo im Detail betrachten und sehen, wo genau die oben genannten Funktionen verwendet werden.

### Beginnen mit einigen Variablen

Der erste WebVR-bezogene Code, dem Sie begegnen werden, ist der folgende Block:

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

Lassen Sie uns diese kurz erklären:

- `frameData` enthält ein [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt, das mit dem [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData)-Konstruktor erstellt wurde. Dies ist anfangs leer, wird aber später die Daten enthalten, die erforderlich sind, um jeden Frame darzustellen, der im VR-Display gezeigt wird, und wird ständig aktualisiert, während die Rendering-Schleife läuft.
- `vrDisplay` startet nicht initialisiert, wird aber später eine Referenz auf unser VR-Headset halten ([`VRDisplay`](/de/docs/Web/API/VRDisplay) — das zentrale Steuerobjekt der API).
- `btn` und `poseStatsBtn` halten Referenzen auf die beiden Schaltflächen, die wir zur Steuerung unserer App verwenden.
- `normalSceneFrame` und `vrSceneFrame` starten nicht initialisiert, werden aber später Referenzen auf die Aufrufe [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) halten — diese werden den Betrieb einer normalen Rendering-Schleife und einer speziellen WebVR-Rendering-Schleife einleiten; wir werden später den Unterschied zwischen diesen beiden erklären.
- Die anderen Variablen speichern Referenzen auf verschiedene Teile des VR-Posedaten-Anzeige-Bereichs, den Sie in der unteren rechten Ecke der Benutzeroberfläche sehen können.

### Eine Referenz auf unser VR-Display erhalten

Eine der Hauptfunktionen in unserem Code ist `start()` — wir führen diese Funktion aus, wenn der Body das Laden beendet hat:

```js
// start
//
// Called when the body has loaded is created to get the ball rolling.

document.body.onload = start;
```

Zu Beginn ruft `start()` einen WebGL-Kontext ab, um 3D-Grafiken in das {{htmlelement("canvas")}}-Element in [unserem HTML](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) zu rendern. Anschließend überprüfen wir, ob der `gl`-Kontext verfügbar ist — wenn ja, führen wir eine Reihe von Funktionen aus, um die Szene für die Darstellung vorzubereiten.

```js
function start() {
  canvas = document.getElementById("gl-canvas");

  initWebGL(canvas); // Initialize the GL context

  // WebGL setup code here
```

Als nächstes beginnen wir mit dem eigentlichen Rendering der Szene auf dem Canvas, indem wir das Canvas auf die gesamte Ansicht des Browsers skalieren und die Rendering-Schleife (`drawScene()`) zum ersten Mal ausführen. Dies ist die nicht-WebVR — normale — Rendering-Schleife.

```js
// draw the scene normally, without WebVR - for those who don't have it and want to see the scene in their browser

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

Nun zu unserem ersten WebVR-spezifischen Code. Zuerst überprüfen wir, ob [`Navigator.getVRDisplays`](/de/docs/Web/API/Navigator/getVRDisplays) existiert — dies ist der Einstieg in die API und daher eine gute grundlegende Funktionsprüfung für WebVR. Am Ende des Blocks (innerhalb der `else`-Klausel) sehen Sie, dass wir, wenn dies nicht existiert, eine Nachricht protokollieren, um anzuzeigen, dass WebVR 1.1 vom Browser nicht unterstützt wird.

```js
  // WebVR: Check to see if WebVR is supported
  if (navigator.getVRDisplays) {
    console.log("WebVR 1.1 supported");
```

Innerhalb unseres `if () { }` Blocks führen wir die [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) Funktion aus. Diese gibt ein Versprechen zurück, das mit einem Array erfüllt wird, das alle mit dem Computer verbundenen VR-Display-Geräte enthält. Wenn keines angeschlossen ist, wird das Array leer sein.

```js
    // Then get the displays attached to the computer
    navigator.getVRDisplays().then((displays) => {
```

Innerhalb des `then()`-Blocks des Versprechens überprüfen wir, ob die Array-Länge größer als 0 ist; wenn ja, setzen wir den Wert unserer `vrDisplay`-Variablen auf das 0-Index-Element im Array. `vrDisplay` enthält nun ein [`VRDisplay`](/de/docs/Web/API/VRDisplay) Objekt, das unser verbundenes Display repräsentiert!

```js
      // If a display is available, use it to present the scene
      if (displays.length > 0) {
        vrDisplay = displays[0];
        console.log("Display found");
```

> [!NOTE]
> Es ist unwahrscheinlich, dass Sie mehrere VR-Displays an Ihren Computer angeschlossen haben, und dies ist nur eine einfache Demo, daher reicht das für den Moment aus.

### Start und Stopp der VR-Präsentation

Jetzt, da wir ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt haben, können wir es verwenden, um eine Vielzahl von Dingen zu tun. Das nächste, was wir tun möchten, ist die Funktionalität zur Präsentation des WebGL-Inhalts auf das Display ein- und auszuschalten.

Wir setzen fort mit dem vorherigen Codeblock, indem wir nun einen Ereignislistener zu unserem Start/Stopp-Button (`btn`) hinzufügen — wenn dieser Button geklickt wird, möchten wir überprüfen, ob wir bereits auf dem Display präsentieren (wir tun dies auf recht dumme Weise, indem wir prüfen, was der Button [`textContent`](/de/docs/Web/API/Node/textContent) enthält).

Wenn das Display noch nicht präsentiert wird, verwenden wir die Methode [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent), um den Browser zu bitten, mit der Präsentation von Inhalten auf dem Display zu beginnen. Dies nimmt als Parameter ein Array von [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Objekten auf, die die Schichten repräsentieren, die Sie im Display präsentieren möchten.

Da die maximale Anzahl von anzeigbaren Schichten derzeit 1 ist und das einzige erforderliche Objektmitglied die [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source)-Eigenschaft ist (die eine Referenz auf das {{htmlelement("canvas")}} ist, das Sie in dieser Schicht präsentieren möchten; die anderen Parameter haben sinnvolle Standardwerte — siehe [`leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) und [`rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds))), ist der Parameter \[{ source: canvas }].

`requestPresent()` gibt ein Versprechen zurück, das erfüllt wird, wenn die Präsentation erfolgreich beginnt.

```js
        // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
        btn.addEventListener("click", () => {
          if (btn.textContent === "Start VR display") {
            vrDisplay.requestPresent([{ source: canvas }]).then(() => {
              console.log("Presenting to WebVR display");
```

Nachdem unser Präsentationswunsch erfolgreich war, möchten wir nun mit der Einrichtung beginnen, Inhalte für den VRDisplay zu rendern. Zuerst setzen wir das Canvas auf die gleiche Größe wie der VR-Anzeigebereich. Wir tun dies, indem wir die [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) für beide Augen mit [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) abrufen.

Dann führen wir eine einfache mathematische Berechnung durch, um die Gesamthöhe des VRDisplay-Renderbereichs basierend auf der Augen- [`VREyeParameters.renderWidth`](/de/docs/Web/API/VREyeParameters/renderWidth) und [`VREyeParameters.renderHeight`](/de/docs/Web/API/VREyeParameters/renderHeight) zu berechnen.

```js
// Set the canvas size to the size of the vrDisplay viewport

const leftEye = vrDisplay.getEyeParameters("left");
const rightEye = vrDisplay.getEyeParameters("right");

canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);
```

Als nächstes [stornieren wir die Animations-Schleife](/de/docs/Web/API/Window/cancelAnimationFrame), die zuvor durch den Aufruf von [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) innerhalb der `drawScene()`-Funktion in Gang gesetzt wurde, und rufen stattdessen `drawVRScene()` auf. Diese Funktion rendert dieselbe Szene wie zuvor, jedoch mit einigen speziellen WebVR-Magie. Die Schleife hier wird durch die spezielle [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame)-Methode von WebVR aufrechterhalten.

```js
// stop the normal presentation, and start the vr presentation
window.cancelAnimationFrame(normalSceneFrame);
drawVRScene();
```

Schließlich aktualisieren wir den Text der Schaltfläche, sodass beim nächsten Drücken die Präsentation auf dem VR-Display gestoppt wird.

```js
              btn.textContent = "Exit VR display";
            });
```

Um die VR-Präsentation zu stoppen, wenn die Schaltfläche anschließend gedrückt wird, rufen wir [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent) auf. Wir kehren auch den Textinhalt der Schaltfläche um und tauschen die `requestAnimationFrame`-Aufrufe aus. Sie sehen hier, dass wir [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) verwenden, um die VR-Rendering-Schleife zu stoppen, und die normale Rendering-Schleife wieder starten, indem wir `drawScene()` aufrufen.

```js
          } else {
            vrDisplay.exitPresent();
            console.log("Stopped presenting to WebVR display");

            btn.textContent = "Start VR display";

            // Stop the VR presentation, and start the normal presentation
            vrDisplay.cancelAnimationFrame(vrSceneFrame);
            drawScene();
          }
        });
      }
    });
  } else {
    console.log("WebVR API not supported by this browser.");
  }
}
```

Sobald die Präsentation beginnt, können Sie die stereoskopische Ansicht im Browser sehen:

![Stereoskopische Ansicht des 3D-Würfels](capture2.png)

Sie werden unten lernen, wie die stereoskopische Ansicht tatsächlich erzeugt wird.

### Warum hat WebVR seine eigene requestAnimationFrame()?

Dies ist eine gute Frage. Der Grund ist, dass für eine reibungslose Darstellung im VR-Display der Inhalt mit der nativen Bildwiederholrate des Displays dargestellt werden muss, nicht der des Computers. VR-Display-Bildwiederholraten sind größer als die der PCs und erreichen typischerweise bis zu 90fps. Die Rate wird sich von der Kernbildwiederholrate des Computers unterscheiden.

Beachten Sie, dass wenn das VR-Display nicht präsentiert, [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) identisch wie [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) läuft, sodass Sie, wenn Sie möchten, nur eine einzige Rendering-Schleife verwenden könnten, anstatt der zwei, die wir in unserer App verwenden. Wir haben zwei verwendet, weil wir leicht unterschiedliche Dinge tun wollten, je nachdem, ob das VR-Display präsentiert oder nicht, und um die Dinge zur besseren Verständlichkeit separat zu halten.

### Rendering und Anzeige

An diesem Punkt haben wir den gesamten Code gesehen, der erforderlich ist, um auf die VR-Hardware zuzugreifen, zu fordern, dass wir unsere Szene auf der Hardware präsentieren, und die Rendering-Schleife zu starten. Sehen wir uns nun den Code für die Rendering-Schleife an und erklären, wie die WebVR-spezifischen Teile funktionieren.

Zuerst beginnen wir mit der Definition unserer Rendering-Schleifenfunktion — `drawVRScene()`. Das erste, was wir innen tun, ist einen Anruf bei [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame), um die Schleife nach dem ersten Aufruf am Laufen zu halten (dies geschah früher in unserem Code, als wir mit der Präsentation auf dem VR-Display begannen). Dieser Aufruf wird als Wert der globalen `vrSceneFrame`-Variable gesetzt, sodass wir die Schleife mit einem Aufruf von [`VRDisplay.cancelAnimationFrame()`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) stoppen können, sobald wir die VR-Präsentation verlassen.

```js
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
```

Als nächstes rufen wir [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) auf, wobei wir den Namen der Variablen übergeben, die wir verwenden möchten, um die Frame-Daten zu enthalten. Dies haben wir bereits früher initialisiert — `frameData`. Nach dem Abschluss des Aufrufs wird diese Variable die Daten enthalten, die benötigt werden, um den nächsten Frame auf dem VR-Gerät darzustellen, verpackt als [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt. Dies enthält Dinge wie Projektions- und Ansichts-Matrizen, um die Szene korrekt für die linke und rechte Augenansicht darzustellen, und das aktuelle [`VRPose`](/de/docs/Web/API/VRPose) Objekt, das Daten über das VR-Display wie Orientierung, Position usw. enthält.

Dies muss bei jedem Frame aufgerufen werden, damit die dargestellte Ansicht stets auf dem neuesten Stand ist.

```js
// Populate frameData with the data of the next frame to display
vrDisplay.getFrameData(frameData);
```

Jetzt holen wir uns das aktuelle [`VRPose`](/de/docs/Web/API/VRPose) aus der [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose) Eigenschaft, speichern die Position und Orientierung zur späteren Verwendung und senden die aktuelle Pose an das Posendaten-Statistikfeld zur Anzeige, wenn die Variable `poseStatsDisplayed` auf wahr gesetzt ist.

```js
// You can get the position, orientation, etc. of the display from the current frame's pose

const curFramePose = frameData.pose;
const curPos = curFramePose.position;
const curOrient = curFramePose.orientation;
if (poseStatsDisplayed) {
  displayPoseStats(curFramePose);
}
```

Wir löschen nun das Canvas, bevor wir darauf zeichnen, damit der nächste Frame klar zu sehen ist und wir nicht auch vorher gerenderte Frames sehen:

```js
// Clear the canvas before we start drawing on it.

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
```

Nun rendern wir die Ansicht für beide Augen, links und rechts. Zuerst müssen wir Projektions- und Ansichts-Positionen für die Verwendung beim Rendering erstellen. Dies sind [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation) Objekte, die mit der Methode [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation) erstellt wurden, indem wir ihr die Kennung des Shader-Programms und einen identifizierenden Namen als Parameter übergeben.

```js
// WebVR: Create the required projection and view matrix locations needed
// for passing into the uniformMatrix4fv methods below

const projectionMatrixLocation = gl.getUniformLocation(
  shaderProgram,
  "projMatrix",
);
const viewMatrixLocation = gl.getUniformLocation(shaderProgram, "viewMatrix");
```

Der nächste Rendering-Schritt beinhaltet:

- Festlegen der Viewport-Größe für das linke Auge mittels [`WebGLRenderingContext.viewport`](/de/docs/Web/API/WebGLRenderingContext/viewport) — dies ist logisch die erste Hälfte der Canvas-Breite und die volle Canvas-Höhe.
- Festlegen der Ansichts- und Projektions-Matrix-Werte, die zum Rendern des linken Auges verwendet werden — dies geschieht mit der Methode [`WebGLRenderingContext.uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix), der wir die oben abgerufenen Positionswerte und die aus dem [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt erhaltenen linken Matrizen übergeben.
- Ausführen der `drawGeometry()`-Funktion, die die eigentliche Szene rendert — aufgrund dessen, was wir in den vorherigen zwei Schritten spezifiziert haben, rendert wir es nur für das linke Auge.

```js
// WebVR: Render the left eye's view to the left half of the canvas
gl.viewport(0, 0, canvas.width * 0.5, canvas.height);
gl.uniformMatrix4fv(
  projectionMatrixLocation,
  false,
  frameData.leftProjectionMatrix,
);
gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.leftViewMatrix);
drawGeometry();
```

Wir machen nun genau dasselbe, aber für das rechte Auge:

```js
// WebVR: Render the right eye's view to the right half of the canvas
gl.viewport(canvas.width * 0.5, 0, canvas.width * 0.5, canvas.height);
gl.uniformMatrix4fv(
  projectionMatrixLocation,
  false,
  frameData.rightProjectionMatrix,
);
gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.rightViewMatrix);
drawGeometry();
```

Als nächstes definieren wir unsere `drawGeometry()`-Funktion. Der größte Teil davon ist nur allgemeiner WebGL-Code, der erforderlich ist, um unseren 3D-Würfel zu zeichnen. Sie werden einige WebVR-spezifische Teile in den `mvTranslate()`- und `mvRotate()`-Funktionsaufrufen sehen — diese übergeben Matrizen an das WebGL-Programm, die die Übersetzung und Rotation des Würfels für den aktuellen Frame definieren

Sie werden sehen, dass wir diese Werte durch die Position (`curPos`) und Orientierung (`curOrient`) des VR-Displays modifizieren, die wir aus dem [`VRPose`](/de/docs/Web/API/VRPose) Objekt erhalten haben. Das Ergebnis ist, dass sich zum Beispiel der Würfel nach rechts bewegt, während Sie Ihren Kopf nach links bewegen oder drehen, was Sie erwarten würden, wenn Sie etwas ansehen und dann Ihren Kopf nach links bewegen/drehen.

Dies ist eine schnelle und einfache Möglichkeit, VR-Pose-Daten zu verwenden, aber es veranschaulicht das grundlegende Prinzip.

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

Der nächste Teil des Codes hat nichts mit WebVR zu tun — er aktualisiert lediglich die Rotation des Würfels in jedem Frame:

```js
// Update the rotation for the next draw, if it's time to do so.
let currentTime = new Date().getTime();
if (lastCubeUpdateTime) {
  const delta = currentTime - lastCubeUpdateTime;

  cubeRotation += (30 * delta) / 1000.0;
}
lastCubeUpdateTime = currentTime;
```

Im letzten Teil der Rendering-Schleife rufen wir [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) auf — nun, da alle Arbeiten erledigt sind und wir das Display auf dem {{htmlelement("canvas")}} gerendert haben, übermittelt diese Methode dann den Frame an das VR-Display, sodass es auch dort angezeigt wird.

```js
  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

### Anzeige der Pose (Position, Orientierung usw.) Daten

In diesem Abschnitt werden wir die Funktion `displayPoseStats()` diskutieren, die unsere aktualisierten Posendaten in jedem Frame anzeigt. Die Funktion ist ziemlich einfach.

Zuerst speichern wir die sechs verschiedenen Eigenschaftswerte, die aus dem [`VRPose`](/de/docs/Web/API/VRPose)-Objekt abrufbar sind, in ihren eigenen Variablen — jede davon ist ein {{jsxref("Float32Array")}}.

```js
function displayPoseStats(pose) {
  const pos = pose.position;
  const orient = pose.orientation;
  const linVel = pose.linearVelocity;
  const linAcc = pose.linearAcceleration;
  const angVel = pose.angularVelocity;
  const angAcc = pose.angularAcceleration;
```

Dann schreiben wir die Daten in die Informationsbox und aktualisieren sie in jedem Frame. Wir haben jeden Wert mit [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) auf drei Dezimalstellen gekürzt, da sonst die Werte schwer zu lesen sind.

Sie sollten beachten, dass wir einen bedingten Ausdruck verwendet haben, um zu erkennen, ob die linearen Beschleunigungen und die Winkelbeschleunigungen erfolgreich zurückgegeben werden, bevor wir die Daten anzeigen. Diese Werte werden derzeit von den meisten VR-Hardware-Geräten noch nicht gemeldet, sodass der Code einen Fehler werfen würde, wenn wir dies nicht tun würden (die Arrays geben `null` zurück, wenn sie nicht erfolgreich gemeldet werden).

```js
  posStats.textContent = `Position: ` +
    `x ${pos[0].toFixed(3)}, ` +
    `y ${pos[1].toFixed(3)}, ` +
    `z ${pos[2].toFixed(3)}`;
  orientStats.textContent = `Orientation: ` +
    `x ${orient[0].toFixed(3)}, ` +
    `y ${orient[1].toFixed(3)}, ` +
    `z ${orient[2].toFixed(3)}`;
  linVelStats.textContent = `Linear velocity: ` +
    `x ${linVel[0].toFixed(3)}, ` +
    `y ${linVel[1].toFixed(3)}, ` +
    `z ${linVel[2].toFixed(3)}`;
  angVelStats.textContent = `Angular velocity: ` +
    `x ${angVel[0].toFixed(3)}, ` +
    `y ${angVel[1].toFixed(3)}, ` +
    `z ${angVel[2].toFixed(3)}`;

  if (linAcc) {
    linAccStats.textContent = `Linear acceleration: ` +
      `x ${linAcc[0].toFixed(3)}, ` +
      `y ${linAcc[1].toFixed(3)}, ` +
      `z ${linAcc[2].toFixed(3)}`;
  } else {
    linAccStats.textContent = 'Linear acceleration not reported';
  }

  if (angAcc) {
    angAccStats.textContent = `Angular acceleration: ` +
    `x ${angAcc[0].toFixed(3)}, ` +
    `y ${angAcc[1].toFixed(3)}, ` +
    `z ${angAcc[2].toFixed(3)}`;
  } else {
    angAccStats.textContent = 'Angular acceleration not reported';
  }
}
```

## WebVR-Ereignisse

Die WebVR-Spezifikation enthält eine Reihe von Ereignissen, die ausgelöst werden, sodass unser App-Code auf Änderungen des Zustands des VR-Displays reagieren kann (siehe [Window events](/de/docs/Web/API/WebVR_API#window_events)). Zum Beispiel:

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) — Wird ausgelöst, wenn sich der Präsentationsstatus eines VR-Displays ändert — d.h. wenn es von Präsentieren zu Nicht-Präsentieren wechselt oder umgekehrt.
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

Wie Sie sehen können, bietet das [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)-Objekt zwei nützliche Eigenschaften — [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display), das eine Referenz auf das [`VRDisplay`](/de/docs/Web/API/VRDisplay) enthält, auf das das Ereignis als Antwort ausgelöst wurde, und [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason), das einen lesbaren Grund angibt, warum das Ereignis ausgelöst wurde.

Dies ist ein sehr nützliches Ereignis; Sie könnten es verwenden, um Fälle zu handhaben, in denen das Display unerwartet getrennt wird, Fehler stoppen und sicherstellen, dass der Benutzer über die Situation informiert ist. In Googles webvr.info-Präsentationsdemo wird das Ereignis verwendet, um eine [`onVRPresentChange()` Funktion](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174) auszuführen, die die UI-Steuerelemente entsprechend aktualisiert und das Canvas anpasst.

## Zusammenfassung

Dieser Artikel hat Ihnen die Grundlagen zur Erstellung einer einfachen WebVR 1.1-App vermittelt, um Ihnen den Einstieg zu erleichtern.
