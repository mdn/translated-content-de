---
title: Verwendung der WebVR-API
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Die WebVR-API wurde durch die [WebXR-API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl von Geräten.

Die WebVR-API ist eine großartige Ergänzung zum Werkzeugkasten eines Webentwicklers, da sie es ermöglicht, WebGL-Szenen in Virtual-Reality-Anzeigen wie dem Oculus Rift und HTC Vive darzustellen. Aber wie beginnen Sie mit der Entwicklung von VR-Apps für das Web? Dieser Artikel wird Sie durch die Grundlagen führen.

## Erste Schritte

Um loszulegen, benötigen Sie:

- Unterstützende VR-Hardware.

  - Die günstigste Option ist die Verwendung eines mobilen Geräts, eines unterstützenden Browsers und einer Gerätehalterung (z.B. Google Cardboard). Dies wird nicht ganz so gut sein wie dedizierte Hardware, aber Sie müssen keinen leistungsstarken Computer oder dedizierte VR-Anzeige kaufen.
  - Dedizierte Hardware kann teuer sein, bietet jedoch ein besseres Erlebnis. Die derzeit WebVR-kompatibelste Hardware ist der HTC VIVE und das Oculus Rift. Die Startseite von [webvr.info](https://webvr.info/) bietet einige weitere nützliche Informationen über verfügbare Hardware und welche Browser sie unterstützen.

- Einen Computer, der leistungsstark genug ist, um das Rendern/Anzeigen von VR-Szenen mit Ihrer dedizierten VR-Hardware zu bewältigen, falls erforderlich. Um Ihnen eine Vorstellung davon zu geben, was Sie benötigen, schauen Sie sich den relevanten Leitfaden für die VR an, die Sie kaufen (z.B. [VIVE READY Computers](https://www.vive.com/us/vive-ready/)).
- Einen unterstützenden Browser installiert — die neueste [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder [Chrome](https://www.google.com/chrome/index.html) sind derzeit Ihre besten Optionen, auf dem Desktop oder mobil.

Sobald Sie alles zusammen haben, können Sie überprüfen, ob Ihr Setup mit WebVR funktioniert, indem Sie zu unserem [einfachen A-Frame-Demo](https://mdn.github.io/webvr-tests/webvr/aframe-demo/) gehen und sehen, ob die Szene gerendert wird und Sie den VR-Anzeigemodus durch Drücken des Buttons unten rechts betreten können.

[A-Frame](https://aframe.io/) ist mit Abstand die beste Option, wenn Sie schnell eine WebVR-kompatible 3D-Szene erstellen möchten, ohne viele neue JavaScript-Codekenntnisse zu benötigen. Es lehrt jedoch nicht, wie die rohe WebVR-API funktioniert, und darauf werden wir als Nächstes eingehen.

## Einführung in unser Demo

Um zu veranschaulichen, wie die WebVR-API funktioniert, untersuchen wir unser Raw-WebGL-Beispiel, das in etwa so aussieht:

![Ein grauer, rotierender 3D-Würfel](capture1.png)

> [!NOTE]
> Sie können den [Quellcode unseres Demos](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) auf GitHub finden und [es live ansehen](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example/).

> [!NOTE]
> Wenn WebVR nicht in Ihrem Browser funktioniert, müssen Sie möglicherweise sicherstellen, dass es über Ihre Grafikkarte läuft. Zum Beispiel für NVIDIA-Karten, wenn Sie das NVIDIA-Kontrollfeld erfolgreich eingerichtet haben, gibt es eine Kontextmenüoption — klicken Sie mit der rechten Maustaste auf Firefox und wählen Sie _Mit Grafikprozessor ausführen > Hochleistungs-NVIDIA-Prozessor_.

Unser Demo zeigt das "Heilige Gral" der WebGL-Demos — einen rotierenden 3D-Würfel. Wir haben dies mit rohem [WebGL API](/de/docs/Web/API/WebGL_API) Code implementiert. Wir werden keine grundlegenden JavaScript- oder WebGL-Themen lehren, nur die WebVR-Teile.

Unser Demo enthält auch:

- Eine Schaltfläche, um unsere Szene im VR-Display zu starten (und zu stoppen).
- Eine Schaltfläche, um VR-Posendaten anzuzeigen (und zu verbergen), d.h. die Position und Orientierung des Headsets, die in Echtzeit aktualisiert werden.

Wenn Sie sich den Quellcode der [Haupt-JavaScript-Datei unseres Demos](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) ansehen, können Sie die WebVR-spezifischen Teile leicht finden, indem Sie nach dem String "WebVR" in den vorhergehenden Kommentaren suchen.

> [!NOTE]
> Wenn Sie mehr über grundlegendes JavaScript und WebGL erfahren möchten, lesen Sie unser [JavaScript-Lernmaterial](/de/docs/Learn/JavaScript) und unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

## Wie funktioniert es?

An diesem Punkt schauen wir uns genauer an, wie die WebVR-Teile des Codes funktionieren.

Eine typische (einfache) WebVR-App funktioniert folgendermaßen:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um einen Verweis auf Ihr VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um mit der Präsentation auf dem VR-Display zu beginnen.
3. Die dedizierte Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) von WebVR wird verwendet, um die Rendering-Schleife der App mit der richtigen Bildwiederholrate für das Display auszuführen.
4. Innerhalb der Rendering-Schleife holen Sie die Daten, die erforderlich sind, um die aktuelle Szene anzuzeigen ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die angezeigte Szene zweimal — einmal für die Ansicht in jedem Auge — und reichen dann die gerenderte Ansicht über ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)) an das Display weiter.

In den folgenden Abschnitten werden wir unser Raw-WebGL-Demo im Detail betrachten und sehen, wo genau die oben genannten Funktionen verwendet werden.

### Beginnen mit einigen Variablen

Der erste WebVR-bezogene Code, den Sie treffen werden, ist dieser folgende Block:

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

- `frameData` enthält ein [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt, das mit dem [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData) Konstruktor erstellt wurde. Dieses ist zunächst leer, wird später jedoch die Daten enthalten, die erforderlich sind, um jeden Frame zu rendern, der in der VR-Anzeige sichtbar werden soll, und wird ständig aktualisiert, während die Rendering-Schleife läuft.
- `vrDisplay` beginnt nicht initialisiert, wird jedoch später einen Verweis auf unser VR-Headset ([`VRDisplay`](/de/docs/Web/API/VRDisplay) — das zentrale Steuerobjekt der API) halten.
- `btn` und `poseStatsBtn` enthalten Verweise auf die beiden Schaltflächen, die wir zur Steuerung unserer App verwenden.
- `normalSceneFrame` und `vrSceneFrame` beginnen nicht initialisiert, werden später jedoch Verweise auf [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) Aufrufe enthalten — diese werden die Ausführung einer normalen Rendering-Schleife und einer speziellen WebVR-Rendering-Schleife einleiten; den Unterschied zwischen diesen beiden werden wir später erklären.
- Die anderen Variablen speichern Verweise auf verschiedene Teile des VR-Posendaten-Anzeigefelds, das Sie in der unteren rechten Ecke der Benutzeroberfläche sehen können.

### Einen Verweis auf unser VR-Display erhalten

Eine der Hauptfunktionen in unserem Code ist `start()` — wir führen diese Funktion aus, wenn der Körper vollständig geladen ist:

```js
// start
//
// Called when the body has loaded is created to get the ball rolling.

document.body.onload = start;
```

Zunächst holt `start()` einen WebGL-Kontext, um 3D-Grafiken auf das {{htmlelement("canvas")}}-Element in [unserem HTML](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) zu rendern. Wir prüfen dann, ob der `gl`-Kontext verfügbar ist — falls ja, führen wir eine Reihe von Funktionen aus, um die Szene zur Anzeige vorzubereiten.

```js
function start() {
  canvas = document.getElementById("gl-canvas");

  initWebGL(canvas);      // Initialize the GL context

  // WebGL setup code here
```

Als Nächstes beginnen wir mit dem Prozess, die Szene tatsächlich auf die Leinwand zu rendern, indem wir die Leinwand auf den gesamten Browser-Viewport setzen und die Rendering-Schleife (`drawScene()`) zum ersten Mal ausführen. Dies ist die nicht-WebVR — normale — Rendering-Schleife.

```js
// draw the scene normally, without WebVR - for those who don't have it and want to see the scene in their browser

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

Nun kommen wir zum ersten WebVR-spezifischen Code. Zuerst überprüfen wir, ob [`Navigator.getVRDisplays`](/de/docs/Web/API/Navigator/getVRDisplays) existiert — dies ist der Einstiegspunkt in die API und daher eine gute grundlegende Merkmalsüberprüfung für WebVR. Am Ende des Blocks (innerhalb der `else`-Klausel) sehen Sie, dass wir, falls dies nicht existiert, eine Nachricht protokollieren, die darauf hinweist, dass WebVR 1.1 nicht vom Browser unterstützt wird.

```js
  // WebVR: Check to see if WebVR is supported
  if (navigator.getVRDisplays) {
    console.log('WebVR 1.1 supported');
```

Innerhalb unseres `if () { }` Blocks führen wir die Funktion [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) aus. Diese gibt ein Versprechen zurück, das mit einem Array erfüllt wird, das alle mit dem Computer verbundenen VR-Anzeigegeräte enthält. Wenn keine verbunden sind, ist das Array leer.

```js
    // Then get the displays attached to the computer
    navigator.getVRDisplays().then((displays) => {
```

Innerhalb des `then()` Blocks des Versprechens überprüfen wir, ob die Array-Länge größer als 0 ist; wenn ja, setzen wir den Wert unserer `vrDisplay` Variablen auf das 0-Index-Element im Array. `vrDisplay` enthält nun ein [`VRDisplay`](/de/docs/Web/API/VRDisplay) Objekt, das unser verbundenes Display repräsentiert!

```js
      // If a display is available, use it to present the scene
      if (displays.length > 0) {
        vrDisplay = displays[0];
        console.log('Display found');
```

> [!NOTE]
> Es ist unwahrscheinlich, dass Sie mehrere VR-Anzeigen an Ihren Computer angeschlossen haben, und dies ist nur ein einfaches Demo, also wird dies für den Moment ausreichen.

### Starten und Stoppen der VR-Präsentation

Nun, da wir ein [`VRDisplay`](/de/docs/Web/API/VRDisplay) Objekt haben, können wir damit eine Reihe von Dingen tun. Als Nächstes möchten wir Funktionalität verkabeln, um die Präsentation des WebGL-Inhalts auf dem Display zu starten und zu stoppen.

Wir führen den vorherigen Codeblock fort, indem wir nun einen Event-Listener zu unserer Start-/Stopp-Schaltfläche (`btn`) hinzufügen — wenn diese Schaltfläche geklickt wird, möchten wir überprüfen, ob wir bereits auf dem Display präsentieren (wir machen dies auf ziemlich einfache Weise, indem wir überprüfen, was die [`textContent`](/de/docs/Web/API/Node/textContent) der Schaltfläche enthält).

Wenn das Display nicht bereits präsentiert, verwenden wir die Methode [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent), um den Browser zu bitten, mit dem Präsentieren von Inhalten auf dem Display zu beginnen. Dies nimmt als Parameter ein Array der [`VRLayerInit`](/de/docs/Web/API/VRLayerInit) Objekte, die die Schichten repräsentieren, die Sie im Display präsentieren möchten.

Da die maximale Anzahl von Schichten, die Sie anzeigen können, derzeit 1 ist und das einzige erforderliche Objektmitglied die [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source) Eigenschaft ist (die ein Verweis auf das {{htmlelement("canvas")}} ist, das Sie in dieser Schicht präsentieren möchten; die anderen Parameter erhalten sinnvolle Standardwerte — siehe [`leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) und [`rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds))), ist der Parameter \[{ source: canvas }].

`requestPresent()` gibt ein Versprechen zurück, das erfüllt wird, wenn die Präsentation erfolgreich beginnt.

```js
        // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
        btn.addEventListener('click', () => {
          if (btn.textContent === 'Start VR display') {
            vrDisplay.requestPresent([{ source: canvas }]).then(() => {
              console.log('Presenting to WebVR display');
```

Nach erfolgreicher Präsentationsanfrage möchten wir nun beginnen, Inhalte zum Anzeigen auf dem VRDisplay zu rendern. Zuerst setzen wir die Leinwand auf die gleiche Größe wie die VR-Anzeigefläche. Wir tun dies, indem wir die [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) für beide Augen mit [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) erhalten.

Dann führen wir einige einfache Berechnungen durch, um die Gesamtbreite des VRDisplay-Renderebereichs basierend auf der Augen [`VREyeParameters.renderWidth`](/de/docs/Web/API/VREyeParameters/renderWidth) und [`VREyeParameters.renderHeight`](/de/docs/Web/API/VREyeParameters/renderHeight) zu berechnen.

```js
// Set the canvas size to the size of the vrDisplay viewport

const leftEye = vrDisplay.getEyeParameters("left");
const rightEye = vrDisplay.getEyeParameters("right");

canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);
```

Als nächstes [stornieren wir die Animationsschleife](/de/docs/Web/API/Window/cancelAnimationFrame), die zuvor durch den Aufruf der [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Funktion in der `drawScene()` Funktion in Bewegung gesetzt wurde, und rufen stattdessen `drawVRScene()` auf. Diese Funktion rendert die gleiche Szene wie zuvor, jedoch mit etwas spezieller WebVR-Magie. Die Schleife hier wird durch die spezielle [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) Methode von WebVR aufrechterhalten.

```js
// stop the normal presentation, and start the vr presentation
window.cancelAnimationFrame(normalSceneFrame);
drawVRScene();
```

Abschließend aktualisieren wir den Text der Schaltfläche, sodass diese bei erneutem Drücken die Präsentation auf dem VR-Display stoppt.

```js
              btn.textContent = 'Exit VR display';
            });
```

Um die VR-Präsentation zu stoppen, wenn die Schaltfläche anschließend gedrückt wird, rufen wir [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent) auf. Wir kehren auch den Textinhalt der Schaltfläche um und tauschen die `requestAnimationFrame` Aufrufe aus. Hier sehen Sie, dass wir [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) verwenden, um die VR-Rendering-Schleife zu stoppen, und die normale Rendering-Schleife erneut starten, indem wir `drawScene()` aufrufen.

```js
          } else {
            vrDisplay.exitPresent();
            console.log('Stopped presenting to WebVR display');

            btn.textContent = 'Start VR display';

            // Stop the VR presentation, and start the normal presentation
            vrDisplay.cancelAnimationFrame(vrSceneFrame);
            drawScene();
          }
        });
      }
    });
  } else {
    console.log('WebVR API not supported by this browser.');
  }
}
```

Sobald die Präsentation beginnt, können Sie die stereoskopische Ansicht im Browser sehen:

![Stereoskopische Ansicht des 3D-Würfels](capture2.png)

Weiter unten erfahren Sie, wie die stereoskopische Ansicht tatsächlich erstellt wird.

### Warum hat WebVR seine eigene requestAnimationFrame()?

Das ist eine gute Frage. Der Grund ist, dass für ein flüssiges Rendering innerhalb der VR-Anzeige der Inhalt mit der nativen Bildwiederholrate des Displays und nicht mit der des Computers gerendert werden muss. VR-Anzeige-Bildwiederholraten sind höher als PC-Bildwiederholraten, typischerweise bis zu 90fps. Die Rate wird also von der Kern-Bildwiederholrate des Computers abweichen.

Beachten Sie, dass, wenn das VR-Display nicht präsentiert, [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) identisch mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) läuft. Wenn Sie möchten, könnten Sie also einfach eine einzige Rendering-Schleife nutzen, anstatt der zwei, die wir in unserer App verwenden. Wir haben zwei verwendet, weil wir leicht unterschiedliche Dinge tun wollten, abhängig davon, ob das VR-Display präsentiert oder nicht, und haben alles der Übersichtlichkeit halber getrennt gehalten.

### Rendern und Anzeige

An diesem Punkt haben wir den gesamten Code gesehen, der erforderlich ist, um auf die VR-Hardware zuzugreifen, zu verlangen, dass wir unsere Szene auf der Hardware präsentieren, und die Rendering-Schleife zu starten. Schauen wir uns nun den Code für die Rendering-Schleife an und erklären, wie die WebVR-spezifischen Teile davon funktionieren.

Zuerst beginnen wir mit der Definition unserer Rendering-Schleifenfunktion — `drawVRScene()`. Das erste, was wir hier drin tun, ist ein Anruf an [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) zu machen, um die Schleife am Laufen zu halten, nachdem sie einmal aufgerufen wurde (dies geschah zuvor in unserem Code, als wir begannen, mit der VR-Anzeige zu präsentieren). Dieser Aufruf wird als Wert der globalen `vrSceneFrame` Variablen gesetzt, sodass wir die Schleife mit einem Anruf an [`VRDisplay.cancelAnimationFrame()`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) stoppen können, sobald wir die VR-Präsentation beenden.

```js
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
```

Als nächstes rufen wir [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) auf und übergeben den Namen der Variablen, die wir zur Speicherung der Frame-Daten verwenden möchten. Wir haben dies zuvor initialisiert — `frameData`. Nach Abschluss des Aufrufs enthält diese Variablen die benötigten Daten, um den nächsten Frame zum VR-Gerät zu rendern, verpackt als [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt. Dies enthält Dinge wie Projektions- und Ansichts-Matrizen zum korrekten Rendern der Szene für die linke und rechte Augensicht und das aktuelle [`VRPose`](/de/docs/Web/API/VRPose) Objekt, das Daten über das VR-Display wie Orientierung, Position usw. enthält.

Dies muss bei jedem Frame aufgerufen werden, sodass die gerenderte Ansicht immer auf dem neuesten Stand ist.

```js
// Populate frameData with the data of the next frame to display
vrDisplay.getFrameData(frameData);
```

Nun holen wir das aktuelle [`VRPose`](/de/docs/Web/API/VRPose) aus der [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose) Eigenschaft, speichern die Position und Orientierung zur späteren Verwendung und senden die aktuelle Pose an das Pose-Statenfeld zur Anzeige, wenn die `poseStatsDisplayed` Variablen auf true gesetzt ist.

```js
// You can get the position, orientation, etc. of the display from the current frame's pose

const curFramePose = frameData.pose;
const curPos = curFramePose.position;
const curOrient = curFramePose.orientation;
if (poseStatsDisplayed) {
  displayPoseStats(curFramePose);
}
```

Wir löschen nun die Leinwand, bevor wir beginnen, darauf zu zeichnen, damit der nächste Frame deutlich gesehen wird und keine zuvor gerenderten Frames ebenfalls sichtbar sind:

```js
// Clear the canvas before we start drawing on it.

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
```

Nun rendern wir die Ansicht für beide Augen, links und rechts. Zuerst müssen wir Projektions- und Ansichtslocations für die Verwendung im Rendering erstellen. Diese sind [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation) Objekte, erstellt mit der [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation) Methode, der wir die Identifikation des Shader-Programms und einen identifizierenden Namen als Parameter übergeben.

```js
// WebVR: Create the required projection and view matrix locations needed
// for passing into the uniformMatrix4fv methods below

const projectionMatrixLocation = gl.getUniformLocation(
  shaderProgram,
  "projMatrix",
);
const viewMatrixLocation = gl.getUniformLocation(shaderProgram, "viewMatrix");
```

Der nächste Renderingschritt beinhaltet:

- Spezifizieren der Viewport-Größe für das linke Auge unter Verwendung von [`WebGLRenderingContext.viewport`](/de/docs/Web/API/WebGLRenderingContext/viewport) — dies ist logisch die erste Hälfte der Leinwandbreite und die volle Leinwandhöhe.
- Spezifizieren der Ansichts- und Projektionsmatrixwerte für das Rendern des linken Auges — dies geschieht mithilfe der [`WebGLRenderingContext.uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix) Methode, die mit den oben gegriffenen Standortwerten und den linken Matrizen aus dem [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt übergeben wird.
- Ausführen der `drawGeometry()` Funktion, die die eigentliche Szene rendert — aufgrund dessen, was wir in den vorherigen beiden Schritten spezifiziert haben, werden wir sie nur für das linke Auge rendern.

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

Wir tun nun genau dasselbe, aber für das rechte Auge:

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

Als Nächstes definieren wir unsere `drawGeometry()` Funktion. Das meiste davon ist allgemeiner WebGL-Code, der erforderlich ist, um unseren 3D-Würfel zu zeichnen. Sie werden einige WebVR-spezifische Teile in den `mvTranslate()` und `mvRotate()` Funktionsaufrufen sehen — diese übergeben Matrizen an das WebGL-Programm, die die Übersetzung und Rotation des Würfels für den aktuellen Frame definieren.

Sie sehen, dass wir diese Werte durch die Position (`curPos`) und Orientierung (`curOrient`) des VR-Displays modifizieren, die wir aus dem [`VRPose`](/de/docs/Web/API/VRPose) Objekt erhalten haben. Das Ergebnis ist, dass sich beispielsweise, wenn Sie den Kopf nach links bewegen oder drehen, der x-Positionswert (`curPos[0]`) und der y-Rotationswert (`[curOrient[1]`) zum x-Übersetzungswert hinzugefügt werden, was bedeutet, dass sich der Würfel nach rechts bewegt, wie Sie es erwarten würden, wenn Sie etwas ansehen und dann Ihren Kopf nach links bewegen/drehen.

Dies ist eine schnelle und schmutzige Möglichkeit, VR-Posen-Daten zu verwenden, aber es veranschaulicht das Grundprinzip.

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

Der nächste Teil des Codes hat nichts mit WebVR zu tun — er aktualisiert einfach die Rotation des Würfels bei jedem Frame:

```js
// Update the rotation for the next draw, if it's time to do so.
let currentTime = new Date().getTime();
if (lastCubeUpdateTime) {
  const delta = currentTime - lastCubeUpdateTime;

  cubeRotation += (30 * delta) / 1000.0;
}
lastCubeUpdateTime = currentTime;
```

Der letzte Teil der Rendering-Schleife besteht darin, dass wir [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) aufrufen — jetzt, da alle Arbeiten erledigt sind und wir das Display auf dem {{htmlelement("canvas")}} gerendert haben, sendet diese Methode den Frame an die VR-Anzeige, sodass er dort ebenfalls angezeigt wird.

```js
  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

### Anzeige der Posen-Daten (Position, Orientierung usw.)

In diesem Abschnitt werden wir die `displayPoseStats()` Funktion diskutieren, die unsere aktualisierten Posen-Daten bei jedem Frame anzeigt. Die Funktion ist recht einfach.

Zuerst speichern wir in eigenen Variablen die sechs verschiedenen Eigenschaftswerte, die aus dem [`VRPose`](/de/docs/Web/API/VRPose) Objekt erhältlich sind — jeder ist ein {{jsxref("Float32Array")}}.

```js
function displayPoseStats(pose) {
  const pos = pose.position;
  const orient = pose.orientation;
  const linVel = pose.linearVelocity;
  const linAcc = pose.linearAcceleration;
  const angVel = pose.angularVelocity;
  const angAcc = pose.angularAcceleration;
```

Dann schreiben wir die Daten in die Informationsbox und aktualisieren sie bei jedem Frame. Wir haben jeden Wert mit [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) auf drei Dezimalstellen geklammert, da die Werte sonst schwer zu lesen sind.

Sie sollten beachten, dass wir einen bedingten Ausdruck verwendet haben, um zu erkennen, ob die linearen und angularen Beschleunigungsarrays erfolgreich zurückgegeben werden, bevor wir die Daten anzeigen. Diese Werte werden von den meisten VR-Hardware derzeit noch nicht berichtet, sodass der Code einen Fehler werfen würde, wenn wir dies nicht täten (die Arrays geben `null` zurück, wenn sie nicht erfolgreich gemeldet werden).

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

Die WebVR-Spezifikation umfasst eine Reihe von Ereignissen, die ausgelöst werden, sodass unser App-Code auf Änderungen des Zustands des VR-Displays (siehe [Window-Events](/de/docs/Web/API/WebVR_API#window_events)) reagieren kann. Zum Beispiel:

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) — Wird ausgelöst, wenn sich der Präsentationszustand einer VR-Anzeige ändert — d.h. wechselt von Präsentation zu Nicht-Präsentation oder umgekehrt.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) — Wird ausgelöst, wenn eine kompatible VR-Anzeige mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) — Wird ausgelöst, wenn eine kompatible VR-Anzeige vom Computer getrennt wurde.

Um zu demonstrieren, wie sie funktionieren, enthält unser einfaches Demo das folgende Beispiel:

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

Wie Sie sehen können, bietet das [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent) Objekt zwei nützliche Eigenschaften — [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display), die einen Verweis auf das [`VRDisplay`](/de/docs/Web/API/VRDisplay) enthält, auf das das Ereignis als Reaktion ausgelöst wurde, und [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason), die einen für Menschen lesbaren Grund enthält, warum das Ereignis ausgelöst wurde.

Dies ist ein sehr nützliches Ereignis; Sie könnten es verwenden, um Fälle zu behandeln, bei denen das Display unerwartet getrennt wird, um zu verhindern, dass Fehler geworfen werden und um sicherzustellen, dass der Benutzer über die Situation informiert ist. In Googles Webvr.info-Präsentationsdemo wird das Ereignis verwendet, um eine [`onVRPresentChange()` Funktion](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174) auszuführen, die die UI-Steuerelemente entsprechend aktualisiert und die Leinwandgröße ändert.

## Zusammenfassung

Dieser Artikel hat Ihnen die Grundlagen aufgezeigt, wie man eine einfache WebVR 1.1 App erstellt, um Ihnen beim Einstieg zu helfen.
