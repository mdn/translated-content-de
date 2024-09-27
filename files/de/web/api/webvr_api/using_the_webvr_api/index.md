---
title: Verwendung der WebVR API
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, in sehr wenigen Browsern implementiert und von einer geringen Anzahl von Geräten unterstützt.

Die WebVR API ist eine fantastische Erweiterung des Toolkits für Webentwickler, die es ermöglicht, WebGL-Szenen in Virtual-Reality-Displays wie dem Oculus Rift und HTC Vive darzustellen. Aber wie beginnen Sie mit der Entwicklung von VR-Apps für das Web? Dieser Artikel wird Sie durch die Grundlagen führen.

## Erste Schritte

Um loszulegen, benötigen Sie:

- Unterstützende VR-Hardware.

  - Die günstigste Option ist die Verwendung eines Mobilgeräts, eines unterstützenden Browsers und einer Geräthalterung (z.B. Google Cardboard). Dies wird keine so gute Erfahrung wie dedizierte Hardware bieten, aber Sie müssen keinen leistungsstarken Computer oder ein dediziertes VR-Display kaufen.
  - Spezialisierte Hardware kann teuer sein, bietet jedoch eine bessere Erfahrung. Die derzeit am besten mit WebVR kompatible Hardware ist der HTC VIVE und das Oculus Rift. Die Startseite von [webvr.info](https://webvr.info/) enthält weitere nützliche Informationen über verfügbare Hardware und deren Browser-Unterstützung.

- Einen Computer, leistungsstark genug, um die Wiedergabe von VR-Szenen mit Ihrer dedizierten VR-Hardware zu handhaben, falls erforderlich. Um eine Vorstellung davon zu bekommen, was Sie benötigen, schauen Sie sich den relevanten Leitfaden für das VR-Gerät an, das Sie kaufen (z.B. [VIVE READY Computers](https://www.vive.com/us/vive-ready/)).
- Einen unterstützenden Browser installiert — die neuesten Versionen von [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder [Chrome](https://www.google.com/chrome/index.html) sind derzeit Ihre besten Optionen, sowohl auf dem Desktop als auch mobil.

Sobald alles zusammengestellt ist, können Sie testen, ob Ihre Konfiguration mit WebVR funktioniert, indem Sie zu unserem [einfachen A-Frame-Demo](https://mdn.github.io/webvr-tests/webvr/aframe-demo/) gehen und sehen, ob die Szene gerendert wird und ob Sie den VR-Displaymodus betreten können, indem Sie die Taste unten rechts drücken.

[A-Frame](https://aframe.io/) ist mit Abstand die beste Option, wenn Sie schnell eine WebVR-kompatible 3D-Szene erstellen möchten, ohne eine Menge neuen JavaScript-Code verstehen zu müssen. Es zeigt Ihnen jedoch nicht, wie die rohe WebVR API funktioniert, und dazu kommen wir als nächstes.

## Vorstellung unseres Demos

Um zu veranschaulichen, wie die WebVR API funktioniert, werden wir unser raw-webgl-example untersuchen, das ungefähr so aussieht:

![Ein rotierender 3D-Würfel in Grau](capture1.png)

> [!NOTE]
> Sie finden den [Quellcode unseres Demos](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) auf GitHub und [können es live ansehen](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example/).

> [!NOTE]
> Wenn WebVR in Ihrem Browser nicht funktioniert, müssen Sie möglicherweise sicherstellen, dass es über Ihre Grafikkarte läuft. Zum Beispiel für NVIDIA-Karten, wenn Sie das NVIDIA Control Panel erfolgreich eingerichtet haben, wird eine Kontextmenüoption verfügbar sein — klicken Sie mit der rechten Maustaste auf Firefox und wählen Sie _Mit Grafikprozessor ausführen > NVIDIA Hochleistungsprozessor_.

Unser Demo zeigt das Nonplusultra der WebGL-Demos — einen rotierenden 3D-Würfel. Wir haben dies mit rohem [WebGL API](/de/docs/Web/API/WebGL_API)-Code implementiert. Wir werden keine grundlegende JavaScript- oder WebGL-Lehre erteilen, nur die WebVR-Teile.

Unser Demo enthält auch:

- Einen Knopf, um unsere Szene im VR-Display zu starten (und zu stoppen).
- Einen Knopf, um VR-Posendaten anzuzeigen (und zu verbergen), also die Position und Orientierung des Headsets, die in Echtzeit aktualisiert werden.

Wenn Sie sich den Quellcode der [Haupt-JavaScript-Datei unseres Demos](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) ansehen, können Sie die spezifischen WebVR-Teile leicht finden, indem Sie nach der Zeichenfolge "WebVR" in den vorausgehenden Kommentaren suchen.

> [!NOTE]
> Um mehr über grundlegendes JavaScript und WebGL zu erfahren, konsultieren Sie unser [JavaScript Lernmaterial](/de/docs/Learn/JavaScript) und unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

## Wie funktioniert es?

An diesem Punkt schauen wir uns an, wie die WebVR-Teile des Codes funktionieren.

Eine typische (einfache) WebVR-App funktioniert so:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um eine Referenz auf Ihr VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um die Präsentation auf dem VR-Display zu starten.
3. WebVRs eigene [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) Methode wird verwendet, um die Rendering-Schleife der App mit der richtigen Bildwiederholrate des Displays auszuführen.
4. Innerhalb der Rendering-Schleife holen Sie die Daten ein, die erforderlich sind, um den aktuellen Frame anzuzeigen ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die dargestellte Szene zweimal — einmal für die Ansicht in jedem Auge — und übergeben dann die gerenderte Ansicht dem Display, um sie dem Nutzer zu zeigen ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

In den folgenden Abschnitten werden wir unser raw-webgl-demo im Detail betrachten und sehen, wo genau die oben genannten Funktionen verwendet werden.

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

Lassen Sie uns diese kurz erklären:

- `frameData` enthält ein [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt, das mit dem [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData)-Konstruktor erstellt wurde. Dieses ist anfangs leer, wird aber später die Daten enthalten, die für die Renderung jedes im VR-Display angezeigten Frames erforderlich sind und wird ständig aktualisiert, während die Rendering-Schleife läuft.
- `vrDisplay` startet nicht initialisiert, wird aber später eine Referenz auf unser VR-Headset ([`VRDisplay`](/de/docs/Web/API/VRDisplay) — das zentrale Steuerobjekt der API) halten.
- `btn` und `poseStatsBtn` halten Referenzen auf die beiden Schaltflächen, die wir zur Steuerung unserer App verwenden.
- `normalSceneFrame` und `vrSceneFrame` starten nicht initialisiert, werden aber später Referenzen auf [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) Anrufe halten — diese werden das Starten einer normalen Rendering-Schleife und einer speziellen WebVR-Rendering-Schleife einleiten; wir werden später den Unterschied zwischen diesen beiden erläutern.
- Die anderen Variablen speichern Referenzen auf verschiedene Teile des VR-Pose-Daten-Anzeigeboxes, die Sie in der unteren rechten Ecke der Benutzeroberfläche sehen können.

### Eine Referenz auf unser VR-Display erhalten

Eine der Hauptfunktionen innerhalb unseres Codes ist `start()` — wir führen diese Funktion aus, wenn der Body das Laden abgeschlossen hat:

```js
// start
//
// Called when the body has loaded is created to get the ball rolling.

document.body.onload = start;
```

Zu Beginn ruft `start()` einen WebGL-Kontext ab, um 3D-Grafiken in das {{htmlelement("canvas")}} Element in [unserem HTML](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) zu rendern. Wir prüfen dann, ob der `gl`-Kontext verfügbar ist — falls ja, führen wir eine Reihe von Funktionen aus, um die Szene zur Anzeige vorzubereiten.

```js
function start() {
  canvas = document.getElementById("glcanvas");

  initWebGL(canvas);      // Initialize the GL context

  // WebGL setup code here
```

Als nächstes beginnen wir mit dem Prozess des Renderns der Szene auf die Canvas, indem wir die Leinwand so einstellen, dass sie den gesamten Browser-Viewport füllt, und die Rendering-Schleife (`drawScene()`) zum ersten Mal ausführen. Dies ist die nicht-WebVR — normale — Rendering-Schleife.

```js
// draw the scene normally, without WebVR - for those who don't have it and want to see the scene in their browser

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

Nun zur ersten spezifischen WebVR-Code. Zuerst prüfen wir, ob [`Navigator.getVRDisplays`](/de/docs/Web/API/Navigator/getVRDisplays) existiert — dies ist der Einstiegspunkt in die API und daher eine gute grundlegende Funktionsprüfung für WebVR. Am Ende des Blocks (innerhalb des `else`-Klaus) loggen wir eine Nachricht, um anzuzeigen, dass WebVR 1.1 vom Browser nicht unterstützt wird.

```js
  // WebVR: Check to see if WebVR is supported
  if (navigator.getVRDisplays) {
    console.log('WebVR 1.1 supported');
```

Innerhalb unseres `if () { }` Blocks führen wir die [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) Funktion aus. Dies gibt ein Versprechen zurück, das mit einem Array erfüllt wird, das alle mit dem Computer verbundenen VR-Display-Geräte enthält. Wenn keine verbunden sind, wird das Array leer sein.

```js
    // Then get the displays attached to the computer
    navigator.getVRDisplays().then((displays) => {
```

Innerhalb des Versprechens `then()` Blocks prüfen wir, ob die Array-Länge größer als 0 ist; falls ja, setzen wir den Wert unserer `vrDisplay`-Variable auf das 0-Index-Element innerhalb des Arrays. `vrDisplay` enthält nun ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt, das unser angeschlossenes Display repräsentiert!

```js
      // If a display is available, use it to present the scene
      if (displays.length > 0) {
        vrDisplay = displays[0];
        console.log('Display found');
```

> [!NOTE]
> Es ist unwahrscheinlich, dass Sie mehrere VR-Displays an Ihren Computer angeschlossen haben, und dies ist nur ein einfaches Demo, also reicht das vorerst aus.

### Starten und Stoppen der VR-Präsentation

Jetzt, da wir ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt haben, können wir damit eine Reihe von Dingen tun. Das nächste, was wir tun wollen, ist die Verkabelung der Funktionalität, um die Präsentation des WebGL-Inhalts auf dem Display zu starten und zu stoppen.

In Fortsetzung des vorherigen Codeblocks fügen wir nun einen Event-Listener zu unserer Start-/Stopp-Schaltfläche (`btn`) hinzu — wenn diese Schaltfläche angeklickt wird, möchten wir prüfen, ob wir bereits auf dem Display präsentieren (wir machen das auf eine ziemlich dumme Art und Weise, indem wir überprüfen, was die Schaltfläche [`textContent`](/de/docs/Web/API/Node/textContent) enthält).

Wenn das Display nicht bereits präsentiert, verwenden wir die [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) Methode, um zu bitten, dass der Browser mit der Präsentation von Inhalten auf dem Display beginnt. Diese nimmt als Parameter ein Array der [`VRLayerInit`](/de/docs/Web/API/VRLayerInit) Objekte an, die die Schichten repräsentieren, die Sie im Display darstellen möchten.

Da die maximale Anzahl der Schichten, die Sie anzeigen können, derzeit 1 ist und das einzige erforderliche Objektmitglied die [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source) Eigenschaft ist (die eine Referenz auf das {{htmlelement("canvas")}} ist, das Sie in dieser Schicht präsentieren möchten; die anderen Parameter haben sinnvolle Vorgabewerte — siehe [`leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) und [`rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds))), ist der Parameter \[{ source: canvas }].

`requestPresent()` gibt ein Versprechen zurück, das erfüllt wird, wenn die Präsentation erfolgreich beginnt.

```js
        // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
        btn.addEventListener('click', () => {
          if (btn.textContent === 'Start VR display') {
            vrDisplay.requestPresent([{ source: canvas }]).then(() => {
              console.log('Presenting to WebVR display');
```

Mit unserer erfolgreichen Präsentationsanfrage möchten wir nun den Inhalt zum VRDisplay rendern. Zuerst stellen wir die Leinwand auf die gleiche Größe wie die VR-Display-Fläche ein. Wir tun dies, indem wir die [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) für beide Augen mit [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) abrufen.

Dann machen wir einige einfache Berechnungen, um die Gesamtbreite der VRDisplay-Rendering-Fläche basierend auf den Augen- [`VREyeParameters.renderWidth`](/de/docs/Web/API/VREyeParameters/renderWidth) und [`VREyeParameters.renderHeight`](/de/docs/Web/API/VREyeParameters/renderHeight) zu berechnen.

```js
// Set the canvas size to the size of the vrDisplay viewport

const leftEye = vrDisplay.getEyeParameters("left");
const rightEye = vrDisplay.getEyeParameters("right");

canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);
```

Als nächstes [stornieren wir die Animationsschleife](/de/docs/Web/API/Window/cancelAnimationFrame), die zuvor von dem [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Aufruf innerhalb der `drawScene()` Funktion gestartet wurde, und rufen stattdessen `drawVRScene()` auf. Diese Funktion rendert dieselbe Szene wie vorher, aber mit einem besonderen WebVR-Zauber. Die Schleife darin wird durch WebVRs spezielle [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) Methode aufrechterhalten.

```js
// stop the normal presentation, and start the vr presentation
window.cancelAnimationFrame(normalSceneFrame);
drawVRScene();
```

Schließlich aktualisieren wir den Text der Schaltfläche, sodass beim nächsten Drücken die Präsentation auf dem VR-Display gestoppt wird.

```js
              btn.textContent = 'Exit VR display';
            });
```

Um die VR-Präsentation zu stoppen, wenn die Taste anschließend erneut gedrückt wird, rufen wir [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent) auf. Wir setzen auch den Textinhalt der Schaltfläche zurück und tauschen die `requestAnimationFrame` Aufrufe aus. Sie sehen hier, dass wir [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) verwenden, um die VR-Rendering-Schleife zu stoppen, und die normale Rendering-Schleife erneut durch Aufruf von `drawScene()` starten.

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

Sobald die Präsentation beginnt, können Sie die stereoskopische Ansicht sehen, die im Browser angezeigt wird:

![Stereoskopische Ansicht des 3D-Würfels](capture2.png)

Unten erfahren Sie, wie die stereoskopische Ansicht tatsächlich hergestellt wird.

### Warum hat WebVR seine eigene requestAnimationFrame()?

Dies ist eine gute Frage. Der Grund dafür ist, dass für die flüssige Wiedergabe im VR-Display der Inhalt mit der nativen Bildwiederholrate des Displays, nicht der des Computers, gerendert werden muss. Die Bildwiederholraten von VR-Displays sind höher als die von PCs und betragen typischerweise bis zu 90fps. Die Rate unterscheidet sich von der Kern-Bildwiederholrate des Computers.

Beachten Sie, dass wenn das VR-Display nicht präsentiert, [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) identisch zu [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) läuft, sodass Sie, wenn Sie möchten, nur eine einzige Rendering-Schleife verwenden könnten, anstelle der zwei, die wir in unserer App verwenden. Wir haben zwei verwendet, weil wir leicht unterschiedliche Dinge tun wollten, je nachdem, ob das VR-Display präsentiert oder nicht, und um die Dinge für ein besseres Verständnis getrennt zu halten.

### Rendering und Anzeige

An diesem Punkt haben wir den gesamten Code gesehen, der erforderlich ist, um auf die VR-Hardware zuzugreifen, anzufordern, dass wir unsere Szene auf der Hardware präsentieren, und die Rendering-Schleife zu starten. Schauen wir uns nun den Code für die Rendering-Schleife an und erklären, wie die WebVR-spezifischen Teile davon funktionieren.

Zuerst beginnen wir die Definition unserer Rendering-Schleifenfunktion — `drawVRScene()`. Das erste, was wir hier tun, ist ein Aufruf von [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame), um die Schleife nach dem ersten Aufruf weiterlaufen zu lassen (dies geschah zuvor in unserem Code, als wir begannen, auf dem VR-Display zu präsentieren). Dieser Aufruf wird als Wert der globalen `vrSceneFrame`-Variablen gesetzt, damit wir die Schleife mit einem Aufruf von [`VRDisplay.cancelAnimationFrame()`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) stoppen können, sobald wir die VR-Präsentation verlassen.

```js
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
```

Als nächstes rufen wir [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) auf und übergeben ihm den Namen der Variablen, die wir zur Speicherung der Frame-Daten verwenden möchten. Dies haben wir zuvor initialisiert — `frameData`. Nach Beendigung des Aufrufs wird diese Variable die Daten enthalten, die benötigt werden, um das nächste Frame auf das VR-Gerät zu rendern, gepackt als ein [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt. Dieses enthält Dinge wie Projektion und Ansichtsmatrizen für die korrekt gerenderte Wiedergabe der Szene für die linke und rechte Augenansicht sowie das aktuelle [`VRPose`](/de/docs/Web/API/VRPose)-Objekt, das Daten über das VR-Display wie Orientierung, Position, etc. enthält.

Dies muss auf jedem Frame aufgerufen werden, damit die gerenderten Ansichten stets auf dem neuesten Stand sind.

```js
// Populate frameData with the data of the next frame to display
vrDisplay.getFrameData(frameData);
```

Jetzt holen wir die aktuelle [`VRPose`](/de/docs/Web/API/VRPose) von der [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose) Eigenschaft, speichern die Position und Orientierung für später und senden die aktuelle Pose an das Posen-Statistik-Feld zur Anzeige, falls die `poseStatsDisplayed` Variable auf true gesetzt ist.

```js
// You can get the position, orientation, etc. of the display from the current frame's pose

const curFramePose = frameData.pose;
const curPos = curFramePose.position;
const curOrient = curFramePose.orientation;
if (poseStatsDisplayed) {
  displayPoseStats(curFramePose);
}
```

Jetzt löschen wir die Leinwand, bevor wir mit dem Zeichnen beginnen, damit das nächste Frame klar zu sehen ist und wir nicht auch vorherige gerenderten Frames sehen:

```js
// Clear the canvas before we start drawing on it.

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
```

Nun rendern wir die Ansicht für beide, das linke und rechte Auge. Zuerst müssen wir Projektion und Ansichtsorte für die Verwendung beim Rendern erstellen. Diese sind [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation) Objekte, erstellt mit der [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation) Methode, der das Shader-Programms-Identifier und ein Identifizierungsname als Parameter übergeben werden.

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

- Spezifizieren der Viewport-Größe für das linke Auge, unter Verwendung von [`WebGLRenderingContext.viewport`](/de/docs/Web/API/WebGLRenderingContext/viewport) — dies ist logischerweise die erste Hälfte der Leinwandbreite und die ganze Leinwandhöhe.
- Spezifizieren der Ansichts- und Projektionsmatrixwerte, die für das Rendern des linken Auges verwendet werden — dies erfolgt mithilfe der [`WebGLRenderingContext.uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix) Methode, die mit den Ortungswerten, die wir oben abgerufen haben, sowie den linken Matrizen aus dem [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt übergeben wird.
- Ausführung der `drawGeometry()` Funktion, die die tatsächliche Szene rendert — aufgrund dessen, was wir in den vorherigen beiden Schritten angegeben haben, werden wir es nur für das linke Auge rendern.

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

Nun machen wir genau dasselbe, aber für das rechte Auge:

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

Als nächstes definieren wir unsere `drawGeometry()` Funktion. Das meiste davon ist einfach allgemeiner WebGL-Code, der zum Zeichnen unseres 3D-Würfels erforderlich ist. Sie werden einige WebVR-spezifische Teile in den `mvTranslate()` und `mvRotate()` Funktionsaufrufen sehen — diese übergeben Matrizen an das WebGL-Programm, die die Übersetzung und Rotation des Würfels für das aktuelle Frame definieren.

Sie sehen, dass wir diese Werte mit der Position (`curPos`) und Orientierung (`curOrient`) des VR-Displays ändern, die wir vom [`VRPose`](/de/docs/Web/API/VRPose)-Objekt erhalten haben. Das Ergebnis ist, dass, wenn Sie zum Beispiel Ihren Kopf nach links bewegen oder drehen, der x-Positionswert (`curPos[0]`) und der y-Rotationswert (`[curOrient[1]`) dem x-Übersetzungswert hinzugefügt werden, was bedeutet, dass sich der Würfel nach rechts bewegt, wie man es erwartet, wenn man sich etwas ansieht und dann den Kopf nach links bewegt/dreht.

Dies ist eine schnelle und einfache Möglichkeit, VR-Pose-Daten zu verwenden, aber es veranschaulicht das Grundprinzip.

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

Das nächste Stück des Codes hat nichts mit WebVR zu tun — es aktualisiert nur die Rotation des Würfels in jedem Frame:

```js
// Update the rotation for the next draw, if it's time to do so.
let currentTime = new Date().getTime();
if (lastCubeUpdateTime) {
  const delta = currentTime - lastCubeUpdateTime;

  cubeRotation += (30 * delta) / 1000.0;
}
lastCubeUpdateTime = currentTime;
```

Der letzte Teil der Rendering-Schleife umfasst den Aufruf von [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) — nun, da die Arbeit getan ist und wir die Anzeige auf die {{htmlelement("canvas")}} gerendert haben, übergibt diese Methode den Frame an das VR-Display, sodass es auch darauf angezeigt wird.

```js
  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

### Darstellung der Posendaten (Position, Orientierung, usw.)

In diesem Abschnitt besprechen wir die `displayPoseStats()` Funktion, die unsere aktualisierten Posendaten in jedem Frame anzeigt. Die Funktion ist recht einfach.

Zuerst speichern wir die sechs verschiedenen Eigenschaftswerte, die vom [`VRPose`](/de/docs/Web/API/VRPose)-Objekt erhältlich sind, in ihren eigenen Variablen — jede ist ein {{jsxref("Float32Array")}}.

```js
function displayPoseStats(pose) {
  const pos = pose.position;
  const orient = pose.orientation;
  const linVel = pose.linearVelocity;
  const linAcc = pose.linearAcceleration;
  const angVel = pose.angularVelocity;
  const angAcc = pose.angularAcceleration;
```

Dann schreiben wir die Daten in den Informationskasten und aktualisieren ihn mit jedem Frame. Wir haben jeden Wert mit [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) auf drei Dezimalstellen geklemmt, da die Werte sonst schwer zu lesen sind.

Beachten Sie, dass wir einen bedingten Ausdruck verwendet haben, um zu erkennen, ob die lineare Beschleunigung und die Winkelbeschleunigung Arrays erfolgreich zurückgegeben werden, bevor wir die Daten anzeigen. Diese Werte werden von den meisten VR-Hardware noch nicht gemeldet, sodass der Code einen Fehler auslösen würde, wenn wir dies nicht tun würden (die Arrays geben `null` zurück, wenn sie nicht erfolgreich gemeldet werden).

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

Die WebVR-Spezifikation enthält eine Reihe von Ereignissen, die ausgelöst werden und es unserem App-Code ermöglichen, auf Änderungen im Status des VR-Displays zu reagieren (siehe [Window Ereignisse](/de/docs/Web/API/WebVR_API#window_events)). Zum Beispiel:

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) — Wird ausgelöst, wenn sich der Präsentationszustand eines VR-Displays ändert — d.h. von Präsentieren zu Nicht-Präsentieren oder umgekehrt.
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

Wie Sie sehen können, bietet das [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)-Objekt zwei nützliche Eigenschaften — [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display), das eine Referenz auf das [`VRDisplay`](/de/docs/Web/API/VRDisplay) enthält, auf das das Ereignis als Antwort ausgelöst wurde, und [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason), das einen lesbaren Grund enthält, warum das Ereignis ausgelöst wurde.

Dies ist ein sehr nützliches Ereignis; Sie könnten es verwenden, um Fälle zu behandeln, in denen das Display unerwartet getrennt wird, um zu verhindern, dass Fehler ausgelöst werden, und sicherzustellen, dass der Nutzer über die Situation informiert ist. In Googles Webvr.info-Präsentationsdemo wird das Ereignis verwendet, um eine [`onVRPresentChange()` Funktion](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174) auszuführen, die die Benutzeroberflächensteuerungen entsprechend aktualisiert und die Leinwandgröße anpasst.

## Zusammenfassung

Dieser Artikel hat Ihnen die absoluten Grundlagen gezeigt, wie Sie eine einfache WebVR 1.1-App erstellen, um Ihnen beim Einstieg zu helfen.
