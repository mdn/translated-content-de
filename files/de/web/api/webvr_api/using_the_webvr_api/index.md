---
title: Verwendung der WebVR-API
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Die WebVR-API wurde durch die [WebXR-API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, wurde nur in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl an Geräten.

Die WebVR-API ist eine großartige Ergänzung für das Werkzeugset von Webentwicklern, da sie ermöglicht, WebGL-Szenen in Virtual Reality-Displays wie Oculus Rift und HTC Vive darzustellen. Aber wie beginnt man mit der Entwicklung von VR-Anwendungen für das Web? Dieser Artikel wird Sie durch die Grundlagen führen.

## Erste Schritte

Um zu beginnen, benötigen Sie:

- Unterstützende VR-Hardware.

  - Die günstigste Option ist die Verwendung eines mobilen Geräts, eines unterstützenden Browsers und einer Gerätehalterung (z.B. Google Cardboard). Dies wird nicht so ein gutes Erlebnis bieten wie dedizierte Hardware, aber Sie müssen keinen leistungsstarken Computer oder spezielle VR-Anzeige kaufen.
  - Dedizierte Hardware kann kostenintensiv sein, bietet jedoch ein besseres Erlebnis. Die derzeit WebVR-kompatibelste Hardware ist das HTC VIVE und die Oculus Rift. Die Startseite von [webvr.info](https://webvr.info/) enthält weitere nützliche Informationen über verfügbare Hardware und welche Browser sie unterstützen.

- Einen Computer, der leistungsfähig genug ist, um VR-Szenen mit Ihrer dedizierten VR-Hardware zu rendern/anzuzeigen, falls erforderlich. Um Ihnen eine Idee davon zu geben, was Sie benötigen, schauen Sie sich den entsprechenden Leitfaden für das VR-Gerät an, das Sie kaufen (z.B. [VIVE READY Computers](https://www.vive.com/us/vive-ready/)).
- Einen unterstützenden Browser installiert — die neueste [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder [Chrome](https://www.google.com/chrome/index.html) sind derzeit Ihre besten Optionen, auf dem Desktop oder mobil.

Sobald Sie alles zusammengebaut haben, können Sie testen, ob Ihre Konfiguration mit WebVR funktioniert, indem Sie unsere [einfache A-Frame-Demo](https://mdn.github.io/webvr-tests/webvr/aframe-demo/) besuchen und prüfen, ob die Szene gerendert wird und ob Sie in den VR-Anzeigemodus wechseln können, indem Sie den Knopf unten rechts drücken.

[A-Frame](https://aframe.io/) ist bei weitem die beste Option, wenn Sie schnell eine WebVR-kompatible 3D-Szene erstellen möchten, ohne eine Reihe neuer JavaScript-Codes verstehen zu müssen. Es lehrt Sie jedoch nicht, wie die rohe WebVR-API funktioniert, und darauf werden wir als nächstes eingehen.

## Einführung in unsere Demo

Um zu veranschaulichen, wie die WebVR-API funktioniert, werden wir unser raw-webgl-example studieren, das ungefähr so aussieht:

![Ein grauer rotierender 3D-Würfel](capture1.png)

> [!NOTE]
> Sie finden den [Quellcode unserer Demo](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) auf GitHub und können ihn sich auch [live ansehen](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example/).

> [!NOTE]
> Wenn WebVR in Ihrem Browser nicht funktioniert, müssen Sie möglicherweise sicherstellen, dass es über Ihre Grafikkarte läuft. Bei NVIDIA-Karten zum Beispiel, wenn Sie das NVIDIA-Kontrollpanel erfolgreich eingerichtet haben, gibt es eine Kontextmenüoption — rechtsklicken Sie auf Firefox und wählen Sie _Mit Grafikprozessor ausführen > Hochleistungs-NVIDIA-Prozessor_.

Unsere Demo bietet das Nonplusultra der WebGL-Demos — einen rotierenden 3D-Würfel. Wir haben dies mit rohem [WebGL API](/de/docs/Web/API/WebGL_API) Code umgesetzt. Wir werden keine grundlegenden JavaScript- oder WebGL-Kenntnisse vermitteln, sondern nur die WebVR-Komponenten.

Unsere Demo verfügt auch über:

- Einen Knopf, um unsere Szene im VR-Display zu präsentieren (und zu stoppen).
- Einen Knopf, um VR-Pose-Daten anzuzeigen (und zu verbergen), d.h. die Position und Orientierung des Headsets, die in Echtzeit aktualisiert werden.

Wenn Sie sich den Quellcode der [Haupt-JavaScript-Datei unserer Demo](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) ansehen, können Sie die WebVR-spezifischen Teile leicht finden, indem Sie nach dem String "WebVR" in den vorhergehenden Kommentaren suchen.

> [!NOTE]
> Um mehr über grundlegendes JavaScript und WebGL zu erfahren, konsultieren Sie unser [JavaScript-Lernmaterial](/de/docs/Learn/JavaScript) und unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

## Wie funktioniert es?

An dieser Stelle schauen wir uns an, wie die WebVR-Komponenten des Codes funktionieren.

Eine typische (einfach) WebVR-App funktioniert so:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um eine Referenz zu Ihrem VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um die Präsentation zum VR-Display zu starten.
3. Mit der speziellen Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) von WebVR wird die Rendering-Schleife der App mit der richtigen Bildwiederholrate für das Display ausgeführt.
4. In der Rendering-Schleife greifen Sie auf die Daten zu, die zum Anzeigen des aktuellen Frames erforderlich sind ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die dargestellte Szene zweimal — einmal für die Ansicht in jedem Auge — und senden dann die gerenderte Ansicht an das Display, um sie dem Benutzer zu zeigen, via ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

In den folgenden Abschnitten werden wir unser raw-webgl-demo im Detail betrachten und sehen, wo genau die oben genannten Funktionen verwendet werden.

### Beginnend mit einigen Variablen

Der erste WebVR-bezogene Codeblock, dem Sie begegnen werden, sieht folgendermaßen aus:

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

- `frameData` enthält ein [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt, das mit dem [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData) Konstruktor erstellt wurde. Dies ist zunächst leer, wird aber später die Daten enthalten, die erforderlich sind, um jeden Frame zu rendern, der im VR-Display angezeigt werden soll. Diese Daten werden ständig aktualisiert, während die Rendering-Schleife läuft.
- `vrDisplay` startet uninitialisiert, wird jedoch später eine Referenz zu unserem VR-Headset ([`VRDisplay`](/de/docs/Web/API/VRDisplay) — das zentrale Steuerungsobjekt der API) enthalten.
- `btn` und `poseStatsBtn` halten Referenzen zu den beiden Tasten, die wir zur Steuerung unserer App verwenden.
- `normalSceneFrame` und `vrSceneFrame` starten uninitialisiert, enthalten jedoch später Referenzen zu [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) Aufrufen — diese starten das Laufen einer normalen Rendering-Schleife und einer speziellen WebVR-Rendering-Schleife. Wir erklären später den Unterschied zwischen diesen zwei.
- Die anderen Variablen speichern Referenzen zu verschiedenen Teilen der Anzeige der VR-Pose-Datenbox, die Sie in der unteren rechten Ecke der Benutzeroberfläche sehen können.

### Referenz auf unser VR-Display erhalten

Eine der Hauptfunktionen in unserem Code ist `start()` — wir führen diese Funktion aus, wenn der Body das Laden abgeschlossen hat:

```js
// start
//
// Called when the body has loaded is created to get the ball rolling.

document.body.onload = start;
```

Zunächst ruft `start()` einen WebGL-Kontext ab, um 3D-Grafiken in das {{htmlelement("canvas")}} Element [unser HTML](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) zu rendern. Wir prüfen dann, ob der `gl`-Kontext verfügbar ist — falls ja, führen wir eine Reihe von Funktionen aus, um die Szene zur Anzeige einzurichten.

```js
function start() {
  canvas = document.getElementById("gl-canvas");

  initWebGL(canvas);      // Initialize the GL context

  // WebGL setup code here
```

Als nächstes beginnen wir den eigentlichen Prozess des Renderns der Szene auf die Leinwand, indem wir die Leinwand so einstellen, dass sie das gesamte Browserfenster ausfüllt, und die Rendering-Schleife (`drawScene()`) zum ersten Mal ausführen. Dies ist die nicht-WebVR — normale — Rendering-Schleife.

```js
// draw the scene normally, without WebVR - for those who don't have it and want to see the scene in their browser

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

Nun zu unserem ersten WebVR-spezifischen Code. Zuerst prüfen wir, ob [`Navigator.getVRDisplays`](/de/docs/Web/API/Navigator/getVRDisplays) existiert — dies ist der Einstiegspunkt in die API und daher eine gute grundlegende Funktionserkennung für WebVR. Sie werden am Ende des Blocks (innerhalb der `else`-Klausel) sehen, dass wir, wenn diese nicht existiert, eine Nachricht protokollieren, um anzuzeigen, dass WebVR 1.1 nicht vom Browser unterstützt wird.

```js
  // WebVR: Check to see if WebVR is supported
  if (navigator.getVRDisplays) {
    console.log('WebVR 1.1 supported');
```

Innerhalb unseres `if () { }` Blocks führen wir die Funktion [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) aus. Dies gibt ein Versprechen zurück, das mit einem Array erfüllt wird, das alle mit dem Computer verbundenen VR-Display-Geräte enthält. Wenn keine angeschlossen sind, wird das Array leer sein.

```js
    // Then get the displays attached to the computer
    navigator.getVRDisplays().then((displays) => {
```

Innerhalb des `then()` Blocks des Versprechens überprüfen wir, ob die Array-Länge mehr als 0 ist; wenn ja, setzen wir den Wert unserer `vrDisplay`-Variable auf das Element mit dem Index 0 im Array. `vrDisplay` enthält nun ein [`VRDisplay`](/de/docs/Web/API/VRDisplay) Objekt, das unser verbundenes Display darstellt!

```js
      // If a display is available, use it to present the scene
      if (displays.length > 0) {
        vrDisplay = displays[0];
        console.log('Display found');
```

> [!NOTE]
> Es ist unwahrscheinlich, dass mehrere VR-Displays mit Ihrem Computer verbunden sind, und dies ist nur eine einfache Demo, daher ist dies vorerst ausreichend.

### Starten und Stoppen der VR-Präsentation

Nun, da wir ein [`VRDisplay`](/de/docs/Web/API/VRDisplay) Objekt haben, können wir damit eine Reihe von Dingen tun. Der nächste Schritt besteht darin, die Funktionalität zu verknüpfen, um die Präsentation des WebGL-Inhalts zum Display zu starten und zu stoppen.

Fortsetzend mit dem vorherigen Codeblock, fügen wir nun einen Ereignis-Listener zu unserer Start/Stopp-Taste (`btn`) hinzu — wenn diese Taste geklickt wird, wollen wir prüfen, ob wir bereits auf das Display präsentieren (wir tun dies auf ziemlich einfache Weise, indem wir prüfen, was der Button [`textContent`](/de/docs/Web/API/Node/textContent) enthält).

Falls das Display nicht bereits präsentiert, verwenden wir die Methode [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent), um den Browser aufzufordern, mit der Präsentation von Inhalten zum Display zu beginnen. Dies erfordert als Parameter ein Array der [`VRLayerInit`](/de/docs/Web/API/VRLayerInit) Objekte, die die Schichten repräsentieren, die Sie im Display präsentieren möchten.

Da die maximale Anzahl der anzuzeigenden Schichten derzeit 1 ist, und das einzige erforderliche Objektmitglied die [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source) Eigenschaft ist (was eine Referenz auf das {{htmlelement("canvas")}} ist, das Sie in dieser Schicht präsentieren möchten; die anderen Parameter haben sinnvolle Standardwerte — siehe [`leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) und [`rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds))), ist der Parameter \[{ source: canvas }].

`requestPresent()` gibt ein Versprechen zurück, das erfüllt wird, wenn die Präsentation erfolgreich beginnt.

```js
        // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
        btn.addEventListener('click', () => {
          if (btn.textContent === 'Start VR display') {
            vrDisplay.requestPresent([{ source: canvas }]).then(() => {
              console.log('Presenting to WebVR display');
```

Mit erfolgreicher Präsentationsanforderung möchten wir nun damit beginnen, Inhalte zu rendern, um sie dem VRDisplay zu präsentieren. Zunächst setzen wir die Leinwand auf die gleiche Größe wie der VR-Displaybereich. Dazu holen wir die [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) für beide Augen mit [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters).

Wir führen dann einige einfache Berechnungen durch, um die Gesamtbreite des VRDisplay-Renderingbereichs basierend auf der Augen-[`VREyeParameters.renderWidth`](/de/docs/Web/API/VREyeParameters/renderWidth) und der [`VREyeParameters.renderHeight`](/de/docs/Web/API/VREyeParameters/renderHeight) zu berechnen.

```js
// Set the canvas size to the size of the vrDisplay viewport

const leftEye = vrDisplay.getEyeParameters("left");
const rightEye = vrDisplay.getEyeParameters("right");

canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);
```

Als nächstes [stornieren wir die Animationsschleife](/de/docs/Web/API/Window/cancelAnimationFrame), die zuvor durch den [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Aufruf innerhalb der `drawScene()` Funktion in Gang gesetzt wurde, und rufen stattdessen `drawVRScene()` auf. Diese Funktion rendert dieselbe Szene wie zuvor, jedoch mit einigen speziellen WebVR-Magie-Funktionen. Die Schleife hier wird durch die spezielle [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) Methode von WebVR aufrechterhalten.

```js
// stop the normal presentation, and start the vr presentation
window.cancelAnimationFrame(normalSceneFrame);
drawVRScene();
```

Schließlich aktualisieren wir den Button-Text, so dass beim nächsten Drücken die Präsentation zum VRDisplay gestoppt wird.

```js
              btn.textContent = 'Exit VR display';
            });
```

Um die VR-Präsentation beim nachfolgenden Drücken der Taste zu stoppen, rufen wir [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent) auf. Wir kehren auch den Textinhalt der Taste um und tauschen die `requestAnimationFrame` Aufrufe aus. Sie sehen hier, dass wir [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) verwenden, um die VR-Rendering-Schleife zu stoppen, und die normale Rendering-Schleife erneut starten, indem wir `drawScene()` aufrufen.

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

Sobald die Präsentation startet, können Sie die stereoskopische Ansicht im Browser sehen:

![Stereoskopische Ansicht des 3D-Würfels](capture2.png)

Unten erfahren Sie mehr darüber, wie die stereoskopische Ansicht tatsächlich erzeugt wird.

### Warum hat WebVR seine eigene requestAnimationFrame()?

Dies ist eine gute Frage. Der Grund ist, dass für ein geschmeidiges Rendering im VR-Display der Inhalt mit der nativen Bildwiederholfrequenz des Displays gerendert werden muss, nicht mit der des Computers. VR-Display-Bildwiederholraten sind größer als Computer-Bildwiederholraten, in der Regel bis zu 90fps. Die Rate wird sich von der der Computer-Kern-Bildwiederholrate unterscheiden.

Beachten Sie, dass [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame), wenn das VR-Display nicht präsentiert, identisch mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) läuft, sodass Sie, wenn Sie möchten, nur eine einzige Rendering-Schleife verwenden könnten, anstatt der zwei, die wir in unserer App verwenden. Wir haben zwei verwendet, weil wir bei der Präsentation eines VR-Displays leicht unterschiedliche Dinge tun wollten, und diese für das bessere Verständnis getrennt halten wollten.

### Rendering und Display

An diesem Punkt haben wir den gesamten Code gesehen, der erforderlich ist, um auf die VR-Hardware zuzugreifen, die Präsentation unserer Szene zur Hardware anzufordern und das Starten der Rendering-Schleife zu beginnen. Sehen wir uns nun den Code für die Rendering-Schleife an und erklären, wie die WebVR-spezifischen Teile davon funktionieren.

Zunächst beginnen wir mit der Definition unserer Rendering-Schleifenfunktion — `drawVRScene()`. Das erste, was wir hier tun ist, einen Aufruf von [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) zu machen, um die Schleife weiterlaufen zu lassen, nachdem sie einmal aufgerufen wurde (dies geschah früher in unserem Code, als wir mit der Präsentation zum VR-Display begannen). Dieser Aufruf wird als Wert der globalen `vrSceneFrame` Variable gesetzt, damit wir die Schleife mit einem Aufruf von [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) stoppen können, sobald wir VR-Presentation beenden.

```js
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
```

Als nächstes rufen wir [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) auf und übergeben den Namen der Variablen, die wir verwenden möchten, um die Frame-Daten zu enthalten. Wir initialisierten dies zuvor — `frameData`. Nachdem der Aufruf abgeschlossen ist, enthält diese Variable die Daten, die erforderlich sind, um den nächsten Frame auf das VR-Gerät zu rendern, verpackt als ein [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt. Dieses enthält Dinge wie Projektions- und Ansichts-Matrices zum korrekten Rendern der Szene für die Ansicht des linken und rechten Auges und das aktuelle [`VRPose`](/de/docs/Web/API/VRPose) Objekt, das Daten über das VR-Display enthält, wie Orientierung, Position, etc.

Dies muss bei jedem Frame aufgerufen werden, damit die gerenderte Ansicht immer auf dem neuesten Stand ist.

```js
// Populate frameData with the data of the next frame to display
vrDisplay.getFrameData(frameData);
```

Nun holen wir die aktuelle [`VRPose`](/de/docs/Web/API/VRPose) aus der [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose) Eigenschaft, speichern die Position und Orientierung zur späteren Verwendung und senden die aktuelle Pose an die Pose-Statistik-Box zur Anzeige, wenn die `poseStatsDisplayed` Variable auf true gesetzt ist.

```js
// You can get the position, orientation, etc. of the display from the current frame's pose

const curFramePose = frameData.pose;
const curPos = curFramePose.position;
const curOrient = curFramePose.orientation;
if (poseStatsDisplayed) {
  displayPoseStats(curFramePose);
}
```

Wir löschen nun die Leinwand, bevor wir beginnen, darauf zu zeichnen, damit der nächste Frame klar gesehen wird und wir nicht auch frühere gerenderte Frames sehen:

```js
// Clear the canvas before we start drawing on it.

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
```

Nun rendern wir die Ansicht für das linke und rechte Auge. Zuerst müssen wir Projektion und Ansichtslokalisationen für die Verwendung im Rendering erstellen. Dies sind [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation) Objekte, die mit der [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation) Methode erstellt werden, indem man ihr als Parameter die Kennung des Shader-Programms und einen identifizierenden Namen übergibt.

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

- Das Angeben der Viewport-Größe für das linke Auge mit [`WebGLRenderingContext.viewport`](/de/docs/Web/API/WebGLRenderingContext/viewport) — dies ist logischerweise die erste Hälfte der Leinwandbreite und die volle Leinwandhöhe.
- Die Angabe der Ansichts- und Projektionsmatrix-Werte zur Verwendung beim Rendern des linken Auges — dies geschieht mit der [`WebGLRenderingContext.uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix) Methode, die mit den Lokationswerten, die wir oben abgerufen haben, und den linken Matrizen, die aus dem [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt erhalten wurden, aufgerufen wird.
- Das Ausführen der `drawGeometry()` Funktion, die die eigentliche Szene rendert — aufgrund dessen, was wir in den vorherigen beiden Schritten angegeben haben, wird sie nur für das linke Auge gerendert.

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

Wir führen nun genau dasselbe durch, jedoch für das rechte Auge:

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

Als nächstes definieren wir unsere `drawGeometry()` Funktion. Das meiste davon ist nur allgemeiner WebGL-Code, der erforderlich ist, um unseren 3D-Würfel zu zeichnen. Sie sehen einige WebVR-spezifische Teile in den `mvTranslate()` und `mvRotate()` Funktionsaufrufen — diese geben Matrizen an das WebGL-Programm weiter, die die Übersetzung und Rotation des Würfels für den aktuellen Frame definieren.

Sie sehen, dass wir diese Werte durch die Position (`curPos`) und Orientierung (`curOrient`) des VR-Displays ändern, die wir aus dem [`VRPose`](/de/docs/Web/API/VRPose) Objekt erhalten haben. Das Ergebnis ist, dass, zum Beispiel, wenn Sie Ihren Kopf nach links bewegen oder drehen, der x-Positionswert (`curPos[0]`) und der y-Orientierungswert (`curOrient[1]`) zu dem x-Übersetzungswert hinzugefügt werden, was bedeutet, dass sich der Würfel nach rechts bewegt, wie Sie es erwarten würden, wenn Sie etwas betrachten und Ihren Kopf nach links bewegen/drehen.

Dies ist eine schnelle und einfache Methode, um VR-Pose-Daten zu verwenden, aber es illustriert das grundlegende Prinzip.

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

Der nächste Teil des Codes hat nichts mit WebVR zu tun — er aktualisiert lediglich die Rotation des Würfels bei jedem Frame:

```js
// Update the rotation for the next draw, if it's time to do so.
let currentTime = new Date().getTime();
if (lastCubeUpdateTime) {
  const delta = currentTime - lastCubeUpdateTime;

  cubeRotation += (30 * delta) / 1000.0;
}
lastCubeUpdateTime = currentTime;
```

Der letzte Teil der Rendering-Schleife beinhaltet das Aufrufen von [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) — jetzt, da alle Arbeiten erledigt sind und wir die Anzeige auf dem {{htmlelement("canvas")}} gerendert haben, sendet diese Methode den Frame an das VR-Display, damit er auch dort angezeigt wird.

```js
  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

### Anzeigen der Pose (Position, Orientierung, etc.) Daten

In diesem Abschnitt werden wir die `displayPoseStats()` Funktion diskutieren, die unsere aktualisierten Pose-Daten bei jedem Frame anzeigt. Die Funktion ist ziemlich einfach.

Zuerst speichern wir die sechs verschiedenen Eigenschaftswerte, die vom [`VRPose`](/de/docs/Web/API/VRPose) Objekt erhältbar sind, in ihren eigenen Variablen — jeder von ihnen ist ein {{jsxref("Float32Array")}}.

```js
function displayPoseStats(pose) {
  const pos = pose.position;
  const orient = pose.orientation;
  const linVel = pose.linearVelocity;
  const linAcc = pose.linearAcceleration;
  const angVel = pose.angularVelocity;
  const angAcc = pose.angularAcceleration;
```

Wir schreiben dann die Daten in die Informationsbox, aktualisieren diese bei jedem Frame. Wir haben jeden Wert auf drei Dezimalstellen gekürzt, indem wir [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) verwendet haben, da die Werte sonst schwer lesbar sind.

Sie sollten beachten, dass wir einen bedingten Ausdruck verwendet haben, um zu erkennen, ob die linear Beschleunigungs- und Winkelbeschleunigungs-Arrays erfolgreich zurückgegeben wurden, bevor wir die Daten anzeigen. Diese Werte werden noch nicht von den meisten VR-Hardware zurückgemeldet, sodass der Code einen Fehler werfen würde, wenn wir dies nicht tun würden (die Arrays geben `null` zurück, wenn sie nicht erfolgreich zurückgemeldet werden).

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

Die WebVR-Spezifikation bietet eine Reihe von Ereignissen, die ausgelöst werden und es unserem App-Code ermöglichen, auf Änderungen im Status des VR-Displays zu reagieren (siehe [Window Events](/de/docs/Web/API/WebVR_API#window_events)). Zum Beispiel:

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) — Wird ausgelöst, wenn der Präsentationsstatus eines VR-Displays sich ändert — d.h. wenn es von Präsentation zu nicht-Präsentation wechselt oder umgekehrt.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) — Wird ausgelöst, wenn ein kompatiblen VR-Display mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) — Wird ausgelöst, wenn ein kompatiblen VR-Display vom Computer getrennt wurde.

Um zu demonstrieren, wie sie funktionieren, enthält unsere einfache Demo das folgende Beispiel:

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

Wie Sie sehen können, bietet das [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent) Objekt zwei nützliche Eigenschaften — [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display), das eine Referenz auf das [`VRDisplay`](/de/docs/Web/API/VRDisplay) enthält, auf das das Ereignis als Antwort ausgelöst wurde, und [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason), das einen lesbaren Grund angibt, warum das Ereignis ausgelöst wurde.

Dies ist ein sehr nützliches Ereignis; Sie könnten es verwenden, um Situationen zu handhaben, in denen das Display unerwartet getrennt wird, um zu verhindern, dass Fehler ausgelöst werden, und um sicherzustellen, dass der Benutzer über die Situation informiert ist. In Googles webvr.info Präsentations-Demo wird das Ereignis verwendet, um eine [`onVRPresentChange()` Funktion](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174) auszuführen, die die UI-Steuerungen entsprechend aktualisiert und die Leinwandgröße anpasst.

## Zusammenfassung

Dieser Artikel hat Ihnen die Grundlagen vermittelt, wie man eine einfache WebVR 1.1 App erstellt, um Ihnen den Einstieg zu erleichtern.
