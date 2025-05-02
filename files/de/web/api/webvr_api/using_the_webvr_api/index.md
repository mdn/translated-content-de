---
title: Verwendung der WebVR-API
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: b16d05494dd1252531451ebc3e995ea0f2a9007b
---

{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Die WebVR-API wurde durch die [WebXR-API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, wurde nur in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte eine geringe Anzahl von Geräten.

Die WebVR-API ist eine fantastische Ergänzung zum Werkzeugkasten eines Webentwicklers und ermöglicht es, WebGL-Szenen in Virtual-Reality-Displays wie dem Oculus Rift und HTC Vive zu präsentieren. Aber wie fängt man an, VR-Apps für das Web zu entwickeln? Dieser Artikel wird Sie durch die Grundlagen führen.

## Einstieg

Um loszulegen, benötigen Sie:

- Unterstützende VR-Hardware.

  - Die günstigste Option ist die Verwendung eines mobilen Geräts, eines unterstützenden Browsers und einer Gerätehalterung (z. B. Google Cardboard). Dies wird nicht ganz so gut sein wie dedizierte Hardware, aber Sie müssen keinen leistungsstarken Computer oder dediziertes VR-Display kaufen.
  - Dedizierte Hardware kann kostspielig sein, bietet jedoch ein besseres Erlebnis. Die derzeit am besten mit WebVR kompatible Hardware ist die HTC VIVE und das Oculus Rift. Die Startseite von [webvr.info](https://webvr.info/) bietet weitere nützliche Informationen zu verfügbaren Geräten und welche Browser sie unterstützen.

- Einen Computer, der leistungsfähig genug ist, um das Rendern/Anzeigen von VR-Szenen mit Ihrer dedizierten VR-Hardware zu bewältigen, falls erforderlich. Um Ihnen eine Vorstellung davon zu geben, was Sie benötigen, schauen Sie sich den entsprechenden Leitfaden für die VR an, die Sie erwerben (z. B. [VIVE READY Computers](https://www.vive.com/us/vive-ready/)).
- Einen unterstützenden Browser installiert — die neueste Version von [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder [Chrome](https://www.google.com/chrome/index.html) sind derzeit Ihre besten Optionen auf Desktop oder Mobilgerät.

Sobald alles zusammengebaut ist, können Sie testen, ob Ihr Setup mit WebVR funktioniert, indem Sie zu unserem [einfachen A-Frame-Demo](https://mdn.github.io/webvr-tests/webvr/aframe-demo/) gehen und sehen, ob die Szene dargestellt wird und ob Sie den VR-Displaymodus aktivieren können, indem Sie den Knopf unten rechts drücken.

[A-Frame](https://aframe.io/) ist mit Abstand die beste Option, wenn Sie schnell eine WebVR-kompatible 3D-Szene erstellen möchten, ohne eine Menge neuen JavaScript-Code zu verstehen. Es zeigt jedoch nicht, wie die rohe WebVR-API funktioniert, und darauf werden wir als nächstes eingehen.

## Vorstellung unseres Demos

Um zu veranschaulichen, wie die WebVR-API funktioniert, betrachten wir unser raw-webgl-example, das ungefähr so aussieht:

![Ein grauer rotierender 3D-Würfel](capture1.png)

> [!NOTE]
> Sie können den [Quellcode unseres Demos](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) auf GitHub finden und es sich [live ansehen](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example/).

> [!NOTE]
> Wenn WebVR in Ihrem Browser nicht funktioniert, müssen Sie möglicherweise sicherstellen, dass es über Ihre Grafikkarte läuft. Bei NVIDIA-Karten beispielsweise, wenn Sie das NVIDIA-Kontrollfeld erfolgreich eingerichtet haben, wird eine Kontextmenüoption verfügbar sein — klicken Sie mit der rechten Maustaste auf Firefox und wählen Sie _Mit Grafikprozessor ausführen > NVIDIA Hochleistungsprozessor_.

Unser Demo präsentiert das heilige Gral der WebGL-Demos — einen rotierenden 3D-Würfel. Wir haben dies mit rohem [WebGL API](/de/docs/Web/API/WebGL_API)-Code umgesetzt. Wir werden keine grundlegenden JavaScript- oder WebGL-Kenntnisse lehren, nur die WebVR-Teile.

Unser Demo verfügt auch über:

- Einen Button, um unsere Szene zu starten (und zu stoppen), die im VR-Display präsentiert wird.
- Einen Button, um VR-Pose-Daten anzuzeigen (und zu verstecken), d.h. die Position und Orientierung des Headsets, die in Echtzeit aktualisiert werden.

Wenn Sie sich den Quellcode der [Haupt-JavaScript-Datei unseres Demos](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) ansehen, können Sie die WebVR-spezifischen Teile leicht finden, indem Sie nach dem String "WebVR" in den vorausgehenden Kommentaren suchen.

> [!NOTE]
> Um mehr über grundlegendes JavaScript und WebGL zu erfahren, konsultieren Sie unser [JavaScript-Lernmaterial](/de/docs/Learn_web_development/Core/Scripting) und unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

## Wie funktioniert es?

An diesem Punkt betrachten wir, wie die WebVR-Teile des Codes funktionieren.

Eine typische (einfache) WebVR-App funktioniert wie folgt:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um eine Referenz auf Ihr VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um mit der Präsentation auf dem VR-Display zu beginnen.
3. WebVRs spezielle Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) wird verwendet, um die Rendering-Schleife der App mit der richtigen Bildfrequenz für das Display auszuführen.
4. Innerhalb der Rendering-Schleife holen Sie die Daten ab, die zur Anzeige des aktuellen Rahmens erforderlich sind ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die angezeigte Szene zweimal — einmal für die Ansicht in jedem Auge — und senden dann die gerenderte Ansicht zur Anzeige an den Nutzer ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

In den folgenden Abschnitten werden wir unser raw-webgl-demo im Detail betrachten und sehen, wo genau die oben genannten Funktionen verwendet werden.

### Beginn mit einigen Variablen

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

Lassen Sie uns diese kurz erläutern:

- `frameData` enthält ein [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt, das mit Hilfe des [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData)-Konstruktors erstellt wird. Dieses ist zunächst leer, enthält jedoch später die Daten, die erforderlich sind, um jedes Frame zur Anzeige im VR-Display zu rendern, und wird ständig aktualisiert, während die Rendering-Schleife läuft.
- `vrDisplay` beginnt nicht initialisiert, wird aber später eine Referenz auf unser VR-Headset halten ([`VRDisplay`](/de/docs/Web/API/VRDisplay) — das zentrale Steuerobjekt der API).
- `btn` und `poseStatsBtn` halten Referenzen zu den beiden Buttons, die wir zur Steuerung unserer App verwenden.
- `normalSceneFrame` und `vrSceneFrame` starten uninitialisiert, halten aber später Referenzen auf [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame)-Aufrufe — diese werden die Ausführung einer normalen Rendering-Schleife und einer speziellen WebVR-Rendering-Schleife initiieren; wir erklären später den Unterschied zwischen diesen beiden.
- Die anderen Variablen speichern Referenzen auf verschiedene Teile des VR-Pose-Daten-Display-Feldes, das Sie in der unteren rechten Ecke der Benutzeroberfläche sehen können.

### Eine Referenz auf unser VR-Display bekommen

Eine der wichtigsten Funktionen in unserem Code ist `start()` — wir führen diese Funktion aus, wenn der Körper vollständig geladen ist:

```js
// start
//
// Called when the body has loaded is created to get the ball rolling.

document.body.onload = start;
```

Zuerst ruft `start()` einen WebGL-Kontext ab, um 3D-Grafiken in das {{htmlelement("canvas")}}-Element in [unserem HTML](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) zu rendern. Wir überprüfen dann, ob der `gl`-Kontext verfügbar ist — wenn ja, führen wir eine Anzahl von Funktionen aus, um die Szene für die Anzeige einzurichten.

```js
function start() {
  canvas = document.getElementById("gl-canvas");

  initWebGL(canvas); // Initialize the GL context

  // WebGL setup code here
```

Als nächstes beginnen wir mit dem Prozess, die Szene tatsächlich auf die Leinwand zu rendern, indem wir die Leinwand so einstellen, dass sie den gesamten Browser-Viewport ausfüllt, und die Rendering-Schleife (`drawScene()`) zum ersten Mal ausführen. Dies ist die nicht-WebVR — normale — Rendering-Schleife.

```js
// draw the scene normally, without WebVR - for those who don't have it and want to see the scene in their browser

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

Kommen wir nun zu unserem ersten WebVR-spezifischen Code. Zuerst prüfen wir, ob [`Navigator.getVRDisplays`](/de/docs/Web/API/Navigator/getVRDisplays) existiert — dies ist der Einstiegspunkt in die API und daher ein gutes grundlegendes Feature zur Erkennung von WebVR. Am Ende des Blocks (im `else`-Zweig) sehen Sie, dass wir, falls dies nicht existiert, eine Nachricht protokollieren, um anzuzeigen, dass WebVR 1.1 vom Browser nicht unterstützt wird.

```js
  // WebVR: Check to see if WebVR is supported
  if (navigator.getVRDisplays) {
    console.log("WebVR 1.1 supported");
```

Innerhalb unseres `if () { }`-Blocks führen wir die Funktion [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) aus. Diese gibt ein Versprechen zurück, das mit einem Array erfüllt wird, das alle mit dem Computer verbundenen VR-Display-Geräte enthält. Wenn keine verbunden sind, ist das Array leer.

```js
    // Then get the displays attached to the computer
    navigator.getVRDisplays().then((displays) => {
```

Innerhalb des `then()`-Blocks des Versprechens prüfen wir, ob die Array-Länge größer als 0 ist; wenn ja, setzen wir den Wert unserer `vrDisplay`-Variablen auf das Element mit dem Index 0 im Array. `vrDisplay` enthält jetzt ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt, das unser verbundenes Display darstellt!

```js
      // If a display is available, use it to present the scene
      if (displays.length > 0) {
        vrDisplay = displays[0];
        console.log("Display found");
```

> [!NOTE]
> Es ist unwahrscheinlich, dass Sie mehrere VR-Displays an Ihren Computer angeschlossen haben, und dies ist nur ein einfaches Demo, daher reicht dies vorerst aus.

### Starten und Stoppen der VR-Präsentation

Jetzt, da wir ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt haben, können wir damit eine Reihe von Dingen tun. Als nächstes wollen wir die Funktionalität zum Starten und Stoppen der Präsentation des WebGL-Inhalts auf dem Display einrichten.

Indem wir mit dem vorherigen Code-Block fortfahren, fügen wir jetzt einen Ereignis-Listener zu unserem Start/Stop-Button (`btn`) hinzu — wenn dieser Button geklickt wird, wollen wir prüfen, ob wir bereits auf dem Display präsentieren (wir tun dies auf eine ziemlich einfache Art und Weise, indem wir überprüfen, was der Button [`textContent`](/de/docs/Web/API/Node/textContent) enthält).

Wenn das Display noch nicht präsentiert, verwenden wir die Methode [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent), um den Browser aufzufordern, mit der Präsentation von Inhalten auf dem Display zu beginnen. Dies erfordert als Parameter ein Array von [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Objekten, die die Schichten repräsentieren, die Sie im Display präsentieren möchten.

Da die maximale Anzahl an Schichten, die Sie anzeigen können, derzeit 1 ist und das einzige erforderliche Objektmitglied die [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source)-Eigenschaft ist (diese ist eine Referenz auf das {{htmlelement("canvas")}}, das Sie in dieser Schicht präsentieren möchten; die anderen Parameter erhalten sinnvolle Standardwerte — siehe [`leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) und [`rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds))), ist der Parameter \[{ source: canvas }].

`requestPresent()` gibt ein Versprechen zurück, das erfüllt wird, wenn die Präsentation erfolgreich beginnt.

```js
        // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
        btn.addEventListener("click", () => {
          if (btn.textContent === "Start VR display") {
            vrDisplay.requestPresent([{ source: canvas }]).then(() => {
              console.log("Presenting to WebVR display");
```

Mit unserem erfolgreichen Präsentationsantrag wollen wir nun mit dem Einrichten der Darstellung von Inhalten beginnen, die wir dem VRDisplay präsentieren möchten. Zuerst setzen wir die Leinwand auf die gleiche Größe wie der VR-Displaybereich. Dies tun wir, indem wir die [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) für beide Augen mit Hilfe von [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) abrufen.

Anschließend führen wir einige einfache Berechnungen durch, um die Gesamtbreite des VRDisplay-Renderbereichs basierend auf der augenbezogenen [`VREyeParameters.renderWidth`](/de/docs/Web/API/VREyeParameters/renderWidth) und [`VREyeParameters.renderHeight`](/de/docs/Web/API/VREyeParameters/renderHeight) zu berechnen.

```js
// Set the canvas size to the size of the vrDisplay viewport

const leftEye = vrDisplay.getEyeParameters("left");
const rightEye = vrDisplay.getEyeParameters("right");

canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);
```

Als nächstes [stornieren wir die Animationsschleife](/de/docs/Web/API/Window/cancelAnimationFrame), die zuvor durch den [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Aufruf innerhalb der `drawScene()`-Funktion in Gang gesetzt wurde, und anstelle davon wird `drawVRScene()` aufgerufen. Diese Funktion rendert die gleiche Szene wie zuvor, jedoch mit etwas spezieller WebVR-Magie. Die Schleife hier wird durch WebVRs spezielle Methode [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) aufrechterhalten.

```js
// stop the normal presentation, and start the vr presentation
window.cancelAnimationFrame(normalSceneFrame);
drawVRScene();
```

Schließlich aktualisieren wir den Text des Buttons, damit beim nächsten Druck die Präsentation auf dem VR-Display beendet wird.

```js
              btn.textContent = "Exit VR display";
            });
```

Um die VR-Präsentation zu beenden, wenn der Button erneut gedrückt wird, rufen wir [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent) auf. Wir kehren auch den Textinhalt des Buttons um und wechseln die `requestAnimationFrame`-Aufrufe. Sie können hier sehen, dass wir [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) verwenden, um die VR-Rendering-Schleife zu stoppen, und die normale Rendering-Schleife wieder starten, indem wir `drawScene()` aufrufen.

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

Weiter unten erfahren Sie, wie die stereoskopische Ansicht tatsächlich erzeugt wird.

### Warum hat WebVR seine eigene requestAnimationFrame()?

Das ist eine gute Frage. Der Grund ist, dass für eine flüssige Darstellung im VR-Display der Inhalt mit der nativen Bildwiederholrate des Displays gerendert werden muss, nicht mit der des Computers. Die Bildwiederholraten von VR-Displays sind höher als die von PCs, typischerweise bis zu 90fps. Die Rate unterscheidet sich von der Kernwiederholrate des Computers.

Beachten Sie, dass [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) nicht präsentiert, wenn VR nicht präsentiert, sondern identisch wie [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) arbeitet. Wenn Sie wollten, könnten Sie also eine einzige Rendering-Schleife verwenden, anstatt der zwei, die wir in unserem app verwenden. Wir haben zwei genutzt, weil wir je nachdem, ob das VR-Display präsentiert oder nicht, leicht unterschiedliche Dinge tun wollten und sie zur besseren Verständlichkeit trennen.

### Rendering und Anzeige

An diesem Punkt haben wir den gesamten Code gesehen, der erforderlich ist, um auf die VR-Hardware zuzugreifen, die Präsentation unserer Szene auf der Hardware zu beantragen und die Rendering-Schleife zu starten. Schauen wir uns nun den Code für die Rendering-Schleife an und erklären, wie die WebVR-spezifischen Teile davon funktionieren.

Zuallererst beginnen wir die Definition unserer Rendering-Schleifenfunktion — `drawVRScene()`. Das Erste, was wir hier tun, ist ein Aufruf von [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame), um die Schleife am Laufen zu halten, nachdem sie einmal aufgerufen wurde (dies geschah früher in unserem Code, als wir mit der Präsentation auf das VR-Display begannen). Dieser Aufruf wird als Wert der globalen `vrSceneFrame`-Variable gesetzt, so dass wir die Schleife mit einem Aufruf von [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) beenden können, sobald wir das VR-Präsentieren beenden.

```js
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
```

Als nächstes rufen wir [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) auf, wobei wir den Namen der Variablen übergeben, die wir zur Speicherung der Frame-Daten verwenden möchten. Diese haben wir bereits früher initialisiert — `frameData`. Nach Abschluss des Aufrufs wird diese Variable die Daten enthalten, die benötigt werden, um das nächste Frame auf das VR-Gerät zu rendern, verpackt als [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt. Dieses enthält Dinge wie Projektions- und Ansichtsmatrizen, um die Szene korrekt für die linke und rechte Augenansicht zu rendern, und das aktuelle [`VRPose`](/de/docs/Web/API/VRPose)-Objekt, das Daten über das VR-Display wie Orientierung, Position usw. enthält.

Dies muss bei jedem Frame aufgerufen werden, damit die gerenderte Ansicht immer aktuell ist.

```js
// Populate frameData with the data of the next frame to display
vrDisplay.getFrameData(frameData);
```

Nun holen wir die aktuelle [`VRPose`](/de/docs/Web/API/VRPose) aus der [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose)-Eigenschaft, speichern die Position und Orientierung zur späteren Verwendung und senden die aktuelle Pose an das Pose-Statistikfeld zur Anzeige, wenn die Variable `poseStatsDisplayed` auf wahr gesetzt ist.

```js
// You can get the position, orientation, etc. of the display from the current frame's pose

const curFramePose = frameData.pose;
const curPos = curFramePose.position;
const curOrient = curFramePose.orientation;
if (poseStatsDisplayed) {
  displayPoseStats(curFramePose);
}
```

Wir löschen nun die Leinwand, bevor wir darauf zeichnen, damit das nächste Frame klar zu sehen ist und wir keine zuvor gerenderten Frames sehen:

```js
// Clear the canvas before we start drawing on it.

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
```

Wir rendern nun die Ansicht sowohl für das linke als auch für das rechte Auge. Zuerst müssen wir Projektions- und Standortparameter zur Verwendung beim Rendering erstellen. Diese sind [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekte, erstellt mit der Methode [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation), der die Kennung des Shader-Programms und einen identifizierenden Namen als Parameter übergeben wird.

```js
// WebVR: Create the required projection and view matrix locations needed
// for passing into the uniformMatrix4fv methods below

const projectionMatrixLocation = gl.getUniformLocation(
  shaderProgram,
  "projMatrix",
);
const viewMatrixLocation = gl.getUniformLocation(shaderProgram, "viewMatrix");
```

Der nächste Render-Schritt umfasst:

- Festlegung der Viewport-Größe für das linke Auge, mit [`WebGLRenderingContext.viewport`](/de/docs/Web/API/WebGLRenderingContext/viewport) — dies ist logischerweise die erste Hälfte der Leinwandbreite und die volle Leinwandhöhe.
- Festlegung der Ansicht und Projektionsmatrix-Werte, die zum Rendern des linken Auges verwendet werden sollen — dies geschieht mit der Methode [`WebGLRenderingContext.uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix), der wir die oben abgerufenen Positionswerte und die linken Matrizen aus dem [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt übergeben.
- Ausführung der `drawGeometry()`-Funktion, die die tatsächliche Szene rendert — aufgrund dessen, was wir in den vorherigen beiden Schritten festgelegt haben, wird sie nur für das linke Auge gerendert.

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

Wir tun nun genau das Gleiche, aber für das rechte Auge:

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

Anschließend definieren wir unsere `drawGeometry()`-Funktion. Der Großteil davon ist nur gewöhnlicher WebGL-Code, der erforderlich ist, um unseren 3D-Würfel zu zeichnen. Sie werden einige WebVR-spezifische Teile in den Aufrufen der `mvTranslate()` und `mvRotate()`-Funktionen sehen — diese übergeben Matrizen an das WebGL-Programm, die die Translation und Rotation des Würfels für das aktuelle Frame definieren.

Sie werden sehen, dass wir diese Werte um die Position (`curPos`) und Orientierung (`curOrient`) des VR-Displays, die wir aus dem [`VRPose`](/de/docs/Web/API/VRPose)-Objekt erhalten haben, modifizieren. Das Ergebnis ist, dass der Würfel, wenn Sie z. B. Ihren Kopf nach links bewegen oder drehen, nach rechts bewegt wird, da die x-Positionswert (`curPos[0]`) und y-Rotationswert (`[curOrient[1]`) zu den x-Translationswerten hinzugefügt werden.

Das ist eine schnelle und grundlegende Art, die VR-Posedaten zu verwenden, aber es veranschaulicht das grundlegende Prinzip.

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
// Update the rotation for the next draw, if it's time to do so.
let currentTime = new Date().getTime();
if (lastCubeUpdateTime) {
  const delta = currentTime - lastCubeUpdateTime;

  cubeRotation += (30 * delta) / 1000.0;
}
lastCubeUpdateTime = currentTime;
```

Der letzte Teil der Rendering-Schleife besteht darin, dass wir [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) aufrufen — nachdem alle Arbeiten erledigt wurden und wir die Anzeige auf der {{htmlelement("canvas")}} gerendert haben, reicht diese Methode das Frame an das VR-Display ein, damit es dort ebenfalls angezeigt wird.

```js
  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

### Hinzufügen der Posedaten (Position, Orientierung, usw.)

In diesem Abschnitt werden wir die `displayPoseStats()`-Funktion diskutieren, die unsere aktualisierten Pose-Daten in jedem Frame anzeigt. Die Funktion ist recht einfach.

Zuallererst speichern wir die sechs verschiedenen Eigenschaftswerte, die aus dem [`VRPose`](/de/docs/Web/API/VRPose)-Objekt abrufbar sind, in jeweils eigenen Variablen — jede davon ist ein {{jsxref("Float32Array")}}.

```js
function displayPoseStats(pose) {
  const pos = pose.position;
  const orient = pose.orientation;
  const linVel = pose.linearVelocity;
  const linAcc = pose.linearAcceleration;
  const angVel = pose.angularVelocity;
  const angAcc = pose.angularAcceleration;
```

Wir schreiben dann die Daten in die Informationsbox und aktualisieren sie bei jedem Frame. Wir haben jeden Wert auf drei Dezimalstellen mit [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) begrenzt, da die Werte sonst schwer zu lesen sind.

Sie sollten beachten, dass wir einen Bedingungsausdruck verwendet haben, um festzustellen, ob die linearen Beschleunigungs- und Winkelbeschleunigungs-Arrays erfolgreich zurückgegeben werden, bevor wir die Daten anzeigen. Diese Werte werden von den meisten VR-Geräten derzeit nicht gemeldet, so dass der Code einen Fehler werfen würde, wenn wir dies nicht tun würden (die Arrays geben `null` zurück, wenn sie nicht erfolgreich gemeldet werden).

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

Die WebVR-Spezifikation enthält eine Reihe von Ereignissen, die ausgelöst werden und es unserem Code ermöglichen, auf Änderungen des Zustands des VR-Displays zu reagieren (siehe [Window-Ereignisse](/de/docs/Web/API/WebVR_API#window_events)). Zum Beispiel:

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) — Wird ausgelöst, wenn sich der Präsentationszustand eines VR-Displays ändert — z.B. von Präsentieren zu Nicht-Präsentieren oder umgekehrt.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) — Wird ausgelöst, wenn ein kompatibles VR-Display an den Computer angeschlossen wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) — Wird ausgelöst, wenn ein kompatibles VR-Display von Computers getrennt wurde.

Um zu demonstrieren, wie sie funktionieren, enthält unser einfaches Demo das folgende Beispiel:

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

Wie Sie sehen können, bietet das [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)-Objekt zwei nützliche Eigenschaften — [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display), das eine Referenz auf das [`VRDisplay`](/de/docs/Web/API/VRDisplay), auf das das Ereignis als Antwort ausgelöst wurde, enthält, und [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason), das einen leicht verständlichen Grund enthält, warum das Ereignis ausgelöst wurde.

Dieses ist ein sehr nützliches Ereignis; Sie könnten es verwenden um Fälle zu handhaben, wo das Display unerwartet getrennt wird, um Fehler zu verhindern und sicherzustellen, dass der Benutzer über die Situation informiert ist. In Googles webvr.info Präsentations-Demo wird das Ereignis verwendet, um eine [`onVRPresentChange()` Funktion](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174) auszuführen, die die UI-Steuerelemente je nach Bedarf aktualisiert und die Leinwandgröße anpasst.

## Zusammenfassung

Dieser Artikel hat Ihnen die Grundlagen gegeben, wie man eine einfache WebVR 1.1-App erstellt, um Ihnen den Einstieg zu erleichtern.
