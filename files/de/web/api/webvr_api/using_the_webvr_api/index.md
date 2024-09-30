---
title: Die Verwendung der WebVR API
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine geringe Anzahl von Geräten.

Die WebVR API ist eine fantastische Ergänzung für das Werkzeugset der Webentwickler und ermöglicht es, WebGL-Szenen in Virtual-Reality-Displays wie dem Oculus Rift und HTC Vive darzustellen. Aber wie fangen Sie mit der Entwicklung von VR-Apps für das Web an? Dieser Artikel führt Sie durch die Grundlagen.

## Einstieg

Um zu beginnen, benötigen Sie:

- Unterstützende VR-Hardware.

  - Die günstigste Option ist die Verwendung eines mobilen Geräts, eines unterstützenden Browsers und einer Gerätehalterung (z.B. Google Cardboard). Dies bietet nicht die gleiche Qualität wie dedizierte Hardware, aber Sie müssen keinen leistungsstarken Computer oder ein spezielles VR-Display kaufen.
  - Dedizierte Hardware kann teuer sein, bietet jedoch ein besseres Erlebnis. Die derzeit mit WebVR kompatibelste Hardware ist das HTC VIVE und das Oculus Rift. Auf der Startseite von [webvr.info](https://webvr.info/) finden Sie weitere nützliche Informationen über verfügbare Hardware und welche Browser sie unterstützen.

- Einen Computer, der leistungsfähig genug ist, um das Rendern/die Anzeige von VR-Szenen mit Ihrer dedizierten VR-Hardware zu bewältigen, falls erforderlich. Um eine Vorstellung davon zu bekommen, was Sie benötigen, werfen Sie einen Blick auf den entsprechenden Leitfaden für das VR-Gerät, das Sie kaufen (z.B. [VIVE READY Computers](https://www.vive.com/us/vive-ready/)).
- Einen unterstützenden Browser — der neueste [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder [Chrome](https://www.google.com/chrome/index.html) sind derzeit Ihre besten Optionen, sowohl auf dem Desktop als auch auf mobilen Geräten.

Sobald Sie alles zusammengebaut haben, können Sie testen, ob Ihr Setup mit WebVR funktioniert, indem Sie zu unserem [einfachen A-Frame-Demo](https://mdn.github.io/webvr-tests/webvr/aframe-demo/) gehen und prüfen, ob die Szene gerendert wird und ob Sie den VR-Anzeigemodus betreten können, indem Sie die Schaltfläche unten rechts drücken.

[A-Frame](https://aframe.io/) ist mit Abstand die beste Wahl, wenn Sie schnell eine WebVR-kompatible 3D-Szene erstellen möchten, ohne eine Reihe neuer JavaScript-Codes verstehen zu müssen. Es lehrt jedoch nicht, wie die rohe WebVR API funktioniert, und darauf werden wir als Nächstes eingehen.

## Beispielführung

Um zu veranschaulichen, wie die WebVR API funktioniert, werden wir unser raw-webgl-example studieren, das etwa so aussieht:

![Ein grauer drehender 3D-Würfel](capture1.png)

> [!NOTE]
> Sie können den [Quellcode unseres Demos](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) auf GitHub finden und [es live ansehen](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example/).

> [!NOTE]
> Wenn WebVR in Ihrem Browser nicht funktioniert, müssen Sie möglicherweise sicherstellen, dass es über Ihre Grafikkarte läuft. Beispielsweise für NVIDIA-Karten: Wenn Sie das NVIDIA Control Panel erfolgreich eingerichtet haben, wird es eine Kontextmenüoption geben — klicken Sie mit der rechten Maustaste auf Firefox und wählen Sie _Mit Grafikprozessor ausführen > Hochleistungs-NVIDIA-Prozessor_.

Unser Demo zeigt den heiligen Gral der WebGL-Demos — einen rotierenden 3D-Würfel. Wir haben dies mit rohem [WebGL API](/de/docs/Web/API/WebGL_API)-Code implementiert. Wir werden keine grundlegenden JavaScript- oder WebGL-Kenntnisse lehren, nur die WebVR-Teile.

Unser Demo umfasst auch:

- Eine Schaltfläche, um unsere Szene im VR-Display zu starten (und zu stoppen).
- Eine Schaltfläche, um VR-Pose-Daten anzuzeigen (und zu verbergen), d.h. die Position und die Orientierung des Headsets, die in Echtzeit aktualisiert werden.

Wenn Sie sich den Quellcode der [JavaScript-Datei unseres Demos](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) ansehen, können Sie die WebVR-spezifischen Teile leicht finden, indem Sie nach dem String "WebVR" in den vorangestellten Kommentaren suchen.

> [!NOTE]
> Um mehr über grundlegendes JavaScript und WebGL zu erfahren, konsultieren Sie unser [JavaScript-Lernmaterial](/de/docs/Learn/JavaScript) und unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

## Wie funktioniert es?

An diesem Punkt wollen wir uns ansehen, wie die WebVR-Teile des Codes arbeiten.

Eine typische (einfache) WebVR-App funktioniert so:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um eine Referenz auf Ihr VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um die Präsentation auf das VR-Display zu starten.
3. WebVRs spezielle Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) wird verwendet, um die Rendering-Schleife der App mit der richtigen Bildwiederholfrequenz für das Display auszuführen.
4. Innerhalb der Rendering-Schleife holen Sie die Daten, die erforderlich sind, um den aktuellen Frame anzuzeigen ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die angezeigte Szene zweimal — einmal für die Sicht in jedem Auge — und senden die gerenderte Sicht dann an das Display zur Anzeige an den Benutzer über ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

In den folgenden Abschnitten werden wir unser raw-webgl-demo im Detail betrachten und sehen, wo genau die obigen Funktionen verwendet werden.

### Beginn mit einigen Variablen

Der erste WebVR-bezogene Code, dem Sie begegnen, ist dieser folgende Block:

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

- `frameData` enthält ein [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt, das mit dem [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData) Konstruktor erstellt wurde. Dieses ist zunächst leer, enthält jedoch später die Daten, die erforderlich sind, um jeden Frame zu rendern, der im VR-Display angezeigt werden soll, und wird ständig aktualisiert, während die Render-Schleife läuft.
- `vrDisplay` beginnt nicht initialisiert, wird aber später eine Referenz auf unser VR-Headset ([`VRDisplay`](/de/docs/Web/API/VRDisplay) — das zentrale Steuerobjekt der API) halten.
- `btn` und `poseStatsBtn` halten Referenzen auf die beiden Schaltflächen, die wir zur Steuerung unserer App verwenden.
- `normalSceneFrame` und `vrSceneFrame` beginnen nicht initialisiert, werden aber später Referenzen auf [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame)-Aufrufe halten — diese werden das Laufen einer normalen Render-Schleife und einer speziellen WebVR-Render-Schleife einleiten; den Unterschied zwischen diesen beiden werden wir später erklären.
- Die anderen Variablen speichern Referenzen auf verschiedene Teile der VR-Pose-Datenanzeigebox, die Sie in der unteren rechten Ecke der Benutzeroberfläche sehen können.

### Eine Referenz auf unser VR-Display erhalten

Eine der Hauptfunktionen in unserem Code ist `start()` — wir führen diese Funktion aus, wenn der Body das Laden abgeschlossen hat:

```js
// start
//
// Called when the body has loaded is created to get the ball rolling.

document.body.onload = start;
```

Zu Beginn holt `start()` einen WebGL-Kontext, um 3D-Grafiken in das {{htmlelement("canvas")}}-Element in [unserem HTML](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) zu rendern. Dann prüfen wir, ob der `gl`-Kontext verfügbar ist — falls ja, führen wir eine Reihe von Funktionen aus, um die Szene zur Anzeige einzurichten.

```js
function start() {
  canvas = document.getElementById("glcanvas");

  initWebGL(canvas);      // Initialize the GL context

  // WebGL setup code here
```

Als nächstes beginnen wir den Prozess, die Szene tatsächlich auf die Leinwand zu rendern, indem wir die Leinwand auf die gesamte Größe des Browser-Viewports einstellen und die Render-Schleife (`drawScene()`) zum ersten Mal ausführen. Dies ist die nicht-WebVR — normale — Render-Schleife.

```js
// draw the scene normally, without WebVR - for those who don't have it and want to see the scene in their browser

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

Nun zu unserem ersten WebVR-spezifischen Code. Zuerst prüfen wir, ob [`Navigator.getVRDisplays`](/de/docs/Web/API/Navigator/getVRDisplays) existiert — dies ist der Einstiegspunkt in die API und daher eine gute grundlegende Feature-Erkennung für WebVR. Am Ende des Blocks (innerhalb der `else`-Klausel) sehen Sie, dass wir, falls dies nicht existiert, eine Nachricht protokollieren, um darauf hinzuweisen, dass WebVR 1.1 nicht vom Browser unterstützt wird.

```js
  // WebVR: Check to see if WebVR is supported
  if (navigator.getVRDisplays) {
    console.log('WebVR 1.1 supported');
```

Innerhalb unseres `if () { }` Blocks führen wir die [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays)-Funktion aus. Dies gibt ein Versprechen zurück, das bei erfolgreicher Erfüllung ein Array enthält, das alle VR-Display-Geräte enthält, die mit dem Computer verbunden sind. Wenn keine angeschlossen sind, ist das Array leer.

```js
    // Then get the displays attached to the computer
    navigator.getVRDisplays().then((displays) => {
```

Im `then()` Block des Versprechens prüfen wir, ob die Länge des Arrays größer als 0 ist; wenn ja, setzen wir den Wert unserer `vrDisplay`-Variablen auf das 0-Index-Element im Array. `vrDisplay` enthält jetzt ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt, das unser angeschlossenes Display repräsentiert!

```js
      // If a display is available, use it to present the scene
      if (displays.length > 0) {
        vrDisplay = displays[0];
        console.log('Display found');
```

> [!NOTE]
> Es ist unwahrscheinlich, dass Sie mehrere VR-Displays an Ihren Computer angeschlossen haben, und dies ist nur eine einfache Demo, also wird dies für jetzt ausreichen.

### Starten und Stoppen der VR-Präsentation

Jetzt, da wir ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt haben, können wir es für eine Reihe von Funktionen verwenden. Als nächstes möchten wir eine Funktion hinzufügen, um die Präsentation des WebGL-Inhalts auf dem Display zu starten und zu stoppen.

Wir führen den vorherigen Codeblock fort und fügen nun einen Ereignislistener zu unserer Start/Stopp-Schaltfläche (`btn`) hinzu — wenn diese Schaltfläche geklickt wird, möchten wir prüfen, ob wir bereits auf dem Display präsentieren (wir tun dies auf recht plumpe Weise, indem wir prüfen, was der Button [`textContent`](/de/docs/Web/API/Node/textContent) enthält).

Wenn das Display noch nicht präsentiert, verwenden wir die Methode [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent), um den Browser zu bitten, mit der Präsentation von Inhalten auf dem Display zu beginnen. Dies erfordert als Parameter ein Array der [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Objekte, die die Schichten repräsentieren, die Sie im Display präsentieren möchten.

Da die maximale Anzahl der anzuzeigenden Schichten derzeit 1 ist und das einzige erforderliche Objektmitglied die [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source)-Eigenschaft ist (die ein Verweis auf das {{htmlelement("canvas")}} ist, das Sie in dieser Schicht präsentieren möchten; die anderen Parameter erhalten sinnvolle Standardwerte — siehe [`leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) und [`rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds))), ist der Parameter \[{ source: canvas }].

`requestPresent()` gibt ein Versprechen zurück, das erfüllt wird, wenn die Präsentation erfolgreich beginnt.

```js
        // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
        btn.addEventListener('click', () => {
          if (btn.textContent === 'Start VR display') {
            vrDisplay.requestPresent([{ source: canvas }]).then(() => {
              console.log('Presenting to WebVR display');
```

Nachdem unser Präsentationsantrag erfolgreich war, wollen wir nun damit beginnen, Inhalte zum Präsentieren auf dem VRDisplay zu rendern. Zuerst stellen wir die Leinwand auf die gleiche Größe wie der VR-Anzeigebereich ein. Wir tun dies, indem wir die [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) für beide Augen mit [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) erhalten.

Anschließend führen wir eine einfache Berechnung durch, um die Gesamtbreite des VRDisplay-Renderbereichs basierend auf der Augengröße [`VREyeParameters.renderWidth`](/de/docs/Web/API/VREyeParameters/renderWidth) und [`VREyeParameters.renderHeight`](/de/docs/Web/API/VREyeParameters/renderHeight) zu berechnen.

```js
// Set the canvas size to the size of the vrDisplay viewport

const leftEye = vrDisplay.getEyeParameters("left");
const rightEye = vrDisplay.getEyeParameters("right");

canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);
```

Als nächstes [stornieren wir die Animationsschleife](/de/docs/Web/API/Window/cancelAnimationFrame), die zuvor durch den [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Aufruf innerhalb der `drawScene()`-Funktion gestartet wurde, und rufen stattdessen `drawVRScene()` auf. Diese Funktion rendert die gleiche Szene wie zuvor, aber mit ein wenig WebVR-Magie. Die Schleife darin wird durch die spezielle WebVR-Methode [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) aufrechterhalten.

```js
// stop the normal presentation, and start the vr presentation
window.cancelAnimationFrame(normalSceneFrame);
drawVRScene();
```

Schließlich aktualisieren wir den Text der Schaltfläche, damit beim nächsten Drücken die Präsentation auf dem VR-Display gestoppt wird.

```js
              btn.textContent = 'Exit VR display';
            });
```

Um die VR-Präsentation beim anschließenden Drücken der Schaltfläche zu stoppen, rufen wir [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent) auf. Wir kehren auch den Textinhalt der Schaltfläche um und tauschen die `requestAnimationFrame` Aufrufe aus. Sie sehen hier, dass wir [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) verwenden, um die VR-Render-Schleife zu stoppen, und die normale Render-Schleife wieder starten, indem wir `drawScene()` aufrufen.

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

Unten erfahren Sie, wie die stereoskopische Ansicht tatsächlich erzeugt wird.

### Warum hat WebVR seine eigene requestAnimationFrame()?

Eine gute Frage. Der Grund ist, dass für eine reibungslose Darstellung im VR-Display der Inhalt mit der nativen Bildwiederholfrequenz des Displays und nicht mit der des Computers gerendert werden muss. VR-Display-Bildwiederholraten sind höher als PC-Bildwiederholraten, typischerweise bis zu 90fps. Die Rate unterscheidet sich von der Kernbildwiederholrate des Computers.

Beachten Sie, dass, wenn das VR-Display nicht präsentiert, [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) identisch mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) läuft, sodass Sie, wenn Sie wollten, nur eine einzige Render-Schleife verwenden könnten, anstatt der zwei, die wir in unserer App verwenden. Wir haben zwei verwendet, weil wir leicht unterschiedliche Dinge tun wollten, je nachdem, ob das VR-Display präsentiert oder nicht, und die Dinge zur einfachen Verständlichkeit getrennt halten wollten.

### Rendering und Anzeige

An diesem Punkt haben wir den gesamten Code gesehen, der erforderlich ist, um auf die VR-Hardware zuzugreifen, anzufordern, dass wir unsere Szene auf der Hardware präsentieren, und die Rendering-Schleife zu starten. Lassen Sie uns nun den Code für die Rendering-Schleife betrachten und erklären, wie die WebVR-spezifischen Teile davon funktionieren.

Zuerst beginnen wir mit der Definition unserer Rendering-Schleifenfunktion — `drawVRScene()`. Als Erstes rufen wir innerhalb dieser Funktion [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) auf, um die Schleife nach einmaligem Aufruf (dies geschah früher in unserem Code, als wir begannen, auf dem VR-Display zu präsentieren) weiterlaufen zu lassen. Dieser Aufruf wird als Wert der globalen Variablen `vrSceneFrame` gesetzt, sodass wir die Schleife mit einem Aufruf von [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) beenden können, sobald wir die VR-Präsentation beenden.

```js
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
```

Als Nächstes rufen wir [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) auf, wobei wir den Namen der Variablen übergeben, die wir verwenden möchten, um die Frame-Daten zu enthalten. Wir haben dies zuvor initialisiert — `frameData`. Nach dem Abschluss des Aufrufs enthält diese Variable die Daten, die benötigt werden, um den nächsten Frame auf das VR-Gerät zu rendern, verpackt als [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt. Dies enthält Dinge wie Projektions- und Ansichtsmatrizen zum korrekten Rendern der Szene für die linke und rechte Augenansicht und das aktuelle [`VRPose`](/de/docs/Web/API/VRPose)-Objekt, das Daten über das VR-Display wie Orientierung, Position usw. enthält.

Dies muss in jedem Frame aufgerufen werden, damit die gerenderte Ansicht immer auf dem neuesten Stand ist.

```js
// Populate frameData with the data of the next frame to display
vrDisplay.getFrameData(frameData);
```

Jetzt rufen wir die aktuelle [`VRPose`](/de/docs/Web/API/VRPose) vom [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose) -Eigentum ab, speichern die Position und Orientierung zur späteren Verwendung und senden die aktuelle Pose an die Pose-Statistikbox zur Anzeige, wenn die `poseStatsDisplayed`-Variable auf true gesetzt ist.

```js
// You can get the position, orientation, etc. of the display from the current frame's pose

const curFramePose = frameData.pose;
const curPos = curFramePose.position;
const curOrient = curFramePose.orientation;
if (poseStatsDisplayed) {
  displayPoseStats(curFramePose);
}
```

Wir löschen nun die Leinwand, bevor wir auf ihr zeichnen, sodass der nächste Frame klar gesehen wird und wir nicht auch vorher gerenderte Frames sehen:

```js
// Clear the canvas before we start drawing on it.

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
```

Jetzt rendern wir die Ansicht für beide Augen links und rechts. Zuerst müssen wir Projektions- und Ansichtslokationen für den Gebrauch im Rendern erstellen. Diese sind [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekte, erstellt unter Verwendung der Methode [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation), wobei wir die Kennung des Shader-Programms und einen identifizierenden Namen als Parameter übergeben.

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

- Angabe der Ansichtsgröße für das linke Auge mit [`WebGLRenderingContext.viewport`](/de/docs/Web/API/WebGLRenderingContext/viewport) — dies ist logisch die erste Hälfte der Leinwandbreite und die gesamte Leinwandhöhe.
- Spezifikation der Werte der Ansichts- und Projektionsmatrix, die zum Rendern des linken Auges verwendet werden sollen — dies geschieht mit der Methode [`WebGLRenderingContext.uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix), welcher die oben abgerufenen Wertlokationen und die linken Matrizen des [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekts übergeben werden.
- Ausführen der `drawGeometry()`-Funktion, die die eigentliche Szene rendert — aufgrund dessen, was wir in den vorhergehenden zwei Schritten festgesetzt haben, wird sie nur für das linke Auge gerendert.

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

Jetzt tun wir genau dasselbe, aber für das rechte Auge:

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

Als nächstes definieren wir unsere `drawGeometry()`-Funktion.

Der Großteil davon ist nur allgemeiner WebGL-Code, der erforderlich ist, um unseren 3D-Würfel zu zeichnen. Sie werden einige WebVR-spezifische Teile in den `mvTranslate()` und `mvRotate()`-Funktionsaufrufen sehen — diese übergeben Matrizen in das WebGL-Programm, die die Übersetzung und Rotation des Würfels für den aktuellen Frame definieren.

Sie sehen, dass wir diese Werte durch die Position (`curPos`) und Orientierung (`curOrient`) des VR-Displays, die wir vom [`VRPose`](/de/docs/Web/API/VRPose)-Objekt erhalten haben, verändern. Das Ergebnis ist, dass z.B., wenn Sie Ihren Kopf nach links bewegen oder drehen, der x-Positionswert (`curPos[0]`) und der y-Drehwert (`[curOrient[1]`) zu dem x-Translationswert addiert wird, was bedeutet, dass sich der Würfel nach rechts bewegt, wie Sie es erwarten würden, wenn man auf etwas schaut und dann den Kopf nach links bewegt/dreht.

Dies ist eine schnelle und einfache Methode, VR-Pose-Daten zu verwenden, illustriert jedoch das grundlegende Prinzip.

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

Der nächste Teil des Codes hat nichts mit WebVR zu tun — er aktualisiert nur die Drehung des Würfels in jedem Frame:

```js
// Update the rotation for the next draw, if it's time to do so.
let currentTime = new Date().getTime();
if (lastCubeUpdateTime) {
  const delta = currentTime - lastCubeUpdateTime;

  cubeRotation += (30 * delta) / 1000.0;
}
lastCubeUpdateTime = currentTime;
```

Der letzte Teil der Render-Schleife umfasst, dass wir [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) aufrufen — jetzt wurde alle Arbeit erledigt und wir haben die Anzeige auf dem {{htmlelement("canvas")}} gerendert, diese Methode reicht dann den Frame an das VR-Display ein, sodass er auch dort angezeigt wird.

```js
  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

### Anzeige der Pose (Position, Orientierung usw.) Daten

In diesem Abschnitt besprechen wir die `displayPoseStats()`-Funktion, welche unsere aktualisierten Pose-Daten in jedem Frame anzeigt.

Die Funktion ist recht einfach.

Zuerst speichern wir die sechs verschiedenen Eigenschaftswerte, die aus dem [`VRPose`](/de/docs/Web/API/VRPose)-Objekt erhältlich sind, in ihren eigenen Variablen — jede davon ist ein {{jsxref("Float32Array")}}.

```js
function displayPoseStats(pose) {
  const pos = pose.position;
  const orient = pose.orientation;
  const linVel = pose.linearVelocity;
  const linAcc = pose.linearAcceleration;
  const angVel = pose.angularVelocity;
  const angAcc = pose.angularAcceleration;
```

Anschließend schreiben wir die Daten in die Informationsbox, aktualisieren sie in jedem Frame. Wir haben jeden Wert auf drei Dezimalstellen mit [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) begrenzt, da die Werte sonst schwer lesbar sind.

Sie sollten beachten, dass wir einen Bedingungsausdruck verwendet haben, um zu erkennen, ob die lineare Beschleunigung und die Winkelbeschleunigungsarrays erfolgreich zurückgegeben werden, bevor wir die Daten anzeigen. Diese Werte werden von den meisten VR-Hardware bisher nicht gemeldet, sodass der Code einen Fehler werfen würde, wenn wir dies nicht tun würden (die Arrays geben `null` zurück, wenn sie nicht erfolgreich gemeldet werden).

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

Die WebVR-Spezifikation enthält eine Reihe von Ereignissen, die ausgelöst werden und es unserem App-Code ermöglichen, auf Änderungen im Zustand des VR-Displays zu reagieren (siehe [Fensterereignisse](/de/docs/Web/API/WebVR_API#window_events)). Zum Beispiel:

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) — Wird ausgelöst, wenn sich der Präsentationszustand eines VR-Displays ändert, d.h. von Präsentation zu keiner Präsentation wechselt oder umgekehrt.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) — Wird ausgelöst, wenn ein kompatibles VR-Display mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) — Wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.

Um zu demonstrieren, wie sie funktionieren, enthält unsere einfache Demo das folgende Beispiel:

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

Wie Sie sehen können, stellt das [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)-Objekt zwei nützliche Eigenschaften bereit — [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display), das eine Referenz auf das [`VRDisplay`](/de/docs/Web/API/VRDisplay) enthält, auf das das Ereignis als Reaktion ausgelöst wurde, und [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason), das einen menschenlesbaren Grund enthält, warum das Ereignis ausgelöst wurde.

Dies ist ein sehr nützliches Ereignis; Sie könnten es verwenden, um Fälle zu behandeln, in denen das Display unerwartet getrennt wird, wodurch Fehler verhindert werden und sichergestellt wird, dass der Benutzer über die Situation informiert wird. In Googles Webvr.info-Präsentationsdemo wird das Ereignis verwendet, um eine [`onVRPresentChange()`-Funktion](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174) auszuführen, die die UI-Steuerungen entsprechend aktualisiert und die Leinwandgröße ändert.

## Zusammenfassung

Dieser Artikel hat Ihnen die Grundlagen gezeigt, wie Sie eine einfache WebVR 1.1-App erstellen, um Ihnen den Einstieg zu erleichtern.
