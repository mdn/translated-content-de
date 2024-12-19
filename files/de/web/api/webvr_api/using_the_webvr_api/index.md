---
title: Verwendung des WebVR-APIs
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Das WebVR API wurde durch das [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, wurde in sehr wenigen Browsern implementiert und standardmäßig aktiviert sowie von einer geringen Anzahl von Geräten unterstützt.

Das WebVR API ist eine fantastische Ergänzung zum Werkzeugkasten eines Webentwicklers und ermöglicht es, WebGL-Szenen in Virtual-Reality-Displays wie dem Oculus Rift und HTC Vive darzustellen. Aber wie fängt man mit der Entwicklung von VR-Apps für das Web an? Dieser Artikel wird Sie durch die Grundlagen führen.

## Erste Schritte

Um loszulegen, benötigen Sie:

- Unterstützende VR-Hardware.

  - Die günstigste Option ist die Verwendung eines mobilen Geräts, eines unterstützenden Browsers und einer Gerätehalterung (z.B. Google Cardboard). Dies bietet zwar nicht so ein gutes Erlebnis wie dedizierte Hardware, aber Sie müssen keinen leistungsstarken Computer oder ein spezielles VR-Display kaufen.
  - Dedizierte Hardware kann kostspielig sein, bietet jedoch ein besseres Erlebnis. Die am meisten WebVR-kompatiblen Hardwaregeräte sind derzeit das HTC VIVE und das Oculus Rift. Auf der Startseite von [webvr.info](https://webvr.info/) finden Sie weitere nützliche Informationen über verfügbare Hardware und welche Browser sie unterstützen.

- Einen Computer, der leistungsstark genug ist, um VR-Szenen mit Ihrer dedizierten VR-Hardware zu rendern/anzuzeigen, falls erforderlich. Um eine Vorstellung davon zu bekommen, was Sie benötigen, werfen Sie einen Blick auf den entsprechenden Leitfaden für die VR, die Sie kaufen (z.B. [VIVE READY Computers](https://www.vive.com/us/vive-ready/)).
- Einen unterstützenden Browser installiert — die neuesten [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder [Chrome](https://www.google.com/chrome/index.html) sind derzeit Ihre besten Optionen, auf dem Desktop oder mobil.

Sobald Sie alles zusammengebaut haben, können Sie testen, ob Ihr Setup mit WebVR funktioniert, indem Sie zu unserem [einfachen A-Frame-Demo](https://mdn.github.io/webvr-tests/webvr/aframe-demo/) gehen und überprüfen, ob die Szene gerendert wird und ob Sie durch Drücken der Schaltfläche unten rechts in den VR-Display-Modus wechseln können.

[A-Frame](https://aframe.io/) ist bei weitem die beste Option, wenn Sie schnell eine WebVR-kompatible 3D-Szene erstellen möchten, ohne ein Bündel neuer JavaScript-Code verstehen zu müssen. Es zeigt Ihnen jedoch nicht, wie das rohe WebVR-API funktioniert, und darauf werden wir als Nächstes eingehen.

## Vorstellung unseres Demos

Um zu veranschaulichen, wie das WebVR-API funktioniert, werden wir unser raw-webgl-example untersuchen, das ungefähr so aussieht:

![Ein grauer, rotierender 3D-Würfel](capture1.png)

> [!NOTE]
> Sie können den [Quellcode unseres Demos](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) auf GitHub finden und [es live ansehen](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example/).

> [!NOTE]
> Wenn WebVR in Ihrem Browser nicht funktioniert, müssen Sie möglicherweise sicherstellen, dass es über Ihre Grafikkarte läuft. Zum Beispiel für NVIDIA-Karten, wenn Sie das NVIDIA-Kontrollfeld erfolgreich eingerichtet haben, wird ein Kontextmenü verfügbar sein — klicken Sie mit der rechten Maustaste auf Firefox und wählen Sie _Mit Grafikprozessor ausführen > NVIDIA Hochleistungsprozessor_.

Unser Demo zeigt den heiligen Gral der WebGL-Demos — einen rotierenden 3D-Würfel. Wir haben dies unter Verwendung von rohem [WebGL-API](/de/docs/Web/API/WebGL_API)-Code implementiert. Wir werden keinen grundlegenden JavaScript- oder WebGL-Unterricht geben, nur die WebVR-Teile.

Unser Demo verfügt auch über:

- Eine Schaltfläche zum Starten (und Stoppen) unserer Szene, die im VR-Display angezeigt wird.
- Eine Schaltfläche zum Anzeigen (und Verbergen) von VR-Pose-Daten, d.h. die Position und Orientierung des Headsets, die in Echtzeit aktualisiert werden.

Wenn Sie den Quellcode der [Haupt-JavaScript-Datei unseres Demos](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) durchsehen, können Sie die WebVR-spezifischen Teile leicht finden, indem Sie nach dem String "WebVR" in vorausgehenden Kommentaren suchen.

> [!NOTE]
> Um mehr über grundlegendes JavaScript und WebGL zu erfahren, konsultieren Sie unser [JavaScript-Lernmaterial](/de/docs/Learn_web_development/Core/Scripting) und unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

## Wie funktioniert es?

An diesem Punkt schauen wir uns an, wie die WebVR-Teile des Codes funktionieren.

Eine typische (einfache) WebVR-App funktioniert so:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um eine Referenz auf Ihr VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um mit der Präsentation an das VR-Display zu beginnen.
3. Die spezielle Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) von WebVR wird verwendet, um die Rendering-Schleife der App mit der richtigen Bildwiederholrate für das Display laufen zu lassen.
4. Innerhalb der Rendering-Schleife holen Sie die Daten, die zum Anzeigen des aktuellen Frames erforderlich sind ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die angezeigte Szene zweimal — einmal für die Ansicht in jedem Auge — und übergeben dann die gerenderte Ansicht zur Anzeige an das Display ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

In den folgenden Abschnitten betrachten wir unser raw-webgl-demo im Detail und sehen, wo genau die oben genannten Funktionen verwendet werden.

### Beginn mit einigen Variablen

Der erste WebVR-bezogene Codeblock, dem Sie begegnen, ist dieser folgende Block:

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

Lassen Sie uns dies kurz erklären:

- `frameData` enthält ein [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt, das mit dem [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData)-Konstruktor erstellt wurde. Dies ist zunächst leer, enthält aber später die Daten, die erforderlich sind, um jeden Frame im VR-Display anzuzeigen, und wird ständig aktualisiert, während die Rendering-Schleife läuft.
- `vrDisplay` wird zunächst nicht initialisiert, enthält später jedoch eine Referenz auf unser VR-Headset ([`VRDisplay`](/de/docs/Web/API/VRDisplay) — das zentrale Steuerobjekt des API).
- `btn` und `poseStatsBtn` enthalten Referenzen auf die zwei Schaltflächen, die wir zur Steuerung unserer App verwenden.
- `normalSceneFrame` und `vrSceneFrame` sind zunächst nicht initialisiert, enthalten später jedoch Referenzen auf [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)- und [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame)-Aufrufe — diese werden das Laufen einer normalen Rendering-Schleife und einer speziellen WebVR-Rendering-Schleife initiieren; wir werden später den Unterschied zwischen diesen beiden erklären.
- Die anderen Variablen speichern Referenzen auf verschiedene Teile des VR-Pose-Datenanzeigekastens, den Sie in der rechten unteren Ecke der Benutzeroberfläche sehen können.

### Eine Referenz auf unser VR-Display erhalten

Eine der Hauptfunktionen in unserem Code ist `start()` — wir führen diese Funktion aus, wenn der Body fertig geladen ist:

```js
// start
//
// Called when the body has loaded is created to get the ball rolling.

document.body.onload = start;
```

Zu Beginn ruft `start()` einen WebGL-Kontext ab, um 3D-Grafiken in das {{htmlelement("canvas")}}-Element in [unserem HTML](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) zu rendern. Wir überprüfen dann, ob der `gl`-Kontext verfügbar ist — falls ja, führen wir eine Anzahl von Funktionen aus, um die Szene zur Anzeige einzurichten.

```js
function start() {
  canvas = document.getElementById("gl-canvas");

  initWebGL(canvas);      // Initialize the GL context

  // WebGL setup code here
```

Als Nächstes starten wir den Prozess, die Szene tatsächlich auf die Leinwand zu rendern, indem wir die Leinwand so einstellen, dass sie das gesamte Browser-Viewport füllt, und die Rendering-Schleife (`drawScene()`) zum ersten Mal ausführen. Dies ist die nicht-WebVR — normale — Rendering-Schleife.

```js
// draw the scene normally, without WebVR - for those who don't have it and want to see the scene in their browser

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

Nun zum ersten webVR-spezifischen Code. Zunächst überprüfen wir, ob [`Navigator.getVRDisplays`](/de/docs/Web/API/Navigator/getVRDisplays) existiert — dies ist der Einstiegspunkt in das API und daher eine gute grundlegende Funktionsprüfung für WebVR. Am Ende des Blocks (innerhalb der `else`-Klausel) sehen Sie, dass, wenn dies nicht existiert, wir eine Nachricht protokollieren, um anzuzeigen, dass WebVR 1.1 nicht vom Browser unterstützt wird.

```js
  // WebVR: Check to see if WebVR is supported
  if (navigator.getVRDisplays) {
    console.log('WebVR 1.1 supported');
```

Innerhalb unseres `if () { }`-Blocks führen wir die Funktion [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) aus. Diese gibt ein Promise zurück, das mit einem Array erfüllt wird, das alle mit dem Computer verbundenen VR-Display-Geräte enthält. Wenn keine verbunden sind, ist das Array leer.

```js
    // Then get the displays attached to the computer
    navigator.getVRDisplays().then((displays) => {
```

Innerhalb des Promises `then()`-Blocks überprüfen wir, ob die Array-Länge größer als 0 ist; wenn ja, setzen wir den Wert unserer `vrDisplay`-Variable auf das Element mit Index 0 im Array. `vrDisplay` enthält jetzt ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt, das unser verbundenes Display repräsentiert!

```js
      // If a display is available, use it to present the scene
      if (displays.length > 0) {
        vrDisplay = displays[0];
        console.log('Display found');
```

> [!NOTE]
> Es ist unwahrscheinlich, dass Sie mehrere VR-Displays an Ihren Computer angeschlossen haben, und dies ist nur ein einfaches Demo, also ist dies für den Moment ausreichend.

### Starten und Stoppen der VR-Präsentation

Jetzt haben wir ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt, mit dem wir einige Dinge tun können. Als Nächstes möchten wir die Funktionalität verdrahten, um die Präsentation des WebGL-Inhalts auf dem Display zu starten und zu stoppen.

Fortsetzung des vorherigen Codeblocks, fügen wir jetzt einen Ereignislistener zu unserer Start-/Stopp-Schaltfläche (`btn`) hinzu — wenn diese Schaltfläche geklickt wird, möchten wir überprüfen, ob wir bereits auf dem Display präsentieren (wir tun dies auf eine ziemlich dumme Art und Weise, indem wir überprüfen, was die [`textContent`](/de/docs/Web/API/Node/textContent) der Schaltfläche enthält).

Wenn das Display nicht bereits präsentiert, verwenden wir die Methode [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent), um den Browser zu bitten, mit der Präsentation von Inhalten auf das Display zu beginnen. Dies nimmt als Parameter ein Array von [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Objekten auf, die die Layer darstellen, die Sie im Display präsentieren möchten.

Da die maximale Anzahl von Layers, die Sie anzeigen können, derzeit 1 ist und das einzige erforderliche Objektmitglied die [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source)-Eigenschaft ist (die eine Referenz auf das {{htmlelement("canvas")}} ist, das Sie in diesem Layer präsentieren möchten; die anderen Parameter erhalten sensible Standardwerte — siehe [`leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) und [`rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds))), ist der Parameter \[{ source: canvas }].

`requestPresent()` gibt ein Promise zurück, das erfüllt wird, wenn die Präsentation erfolgreich beginnt.

```js
        // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
        btn.addEventListener('click', () => {
          if (btn.textContent === 'Start VR display') {
            vrDisplay.requestPresent([{ source: canvas }]).then(() => {
              console.log('Presenting to WebVR display');
```

Mit unserem erfolgreichen Präsentationsanforderung möchten wir nun beginnen, Inhalte zum Präsentieren auf dem VRDisplay zu rendern. Zunächst setzen wir die Leinwand auf die gleiche Größe wie der VR-Displaybereich. Wir tun dies, indem wir die [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) für beide Augen mithilfe von [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) abrufen.

Dann führen wir einige einfache Berechnungen durch, um die Gesamtbreite des VRDisplay-Rendering-Bereichs basierend auf den Render-Breiteneinstellungen [`VREyeParameters.renderWidth`](/de/docs/Web/API/VREyeParameters/renderWidth) und [`VREyeParameters.renderHeight`](/de/docs/Web/API/VREyeParameters/renderHeight) zu berechnen.

```js
// Set the canvas size to the size of the vrDisplay viewport

const leftEye = vrDisplay.getEyeParameters("left");
const rightEye = vrDisplay.getEyeParameters("right");

canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);
```

Als Nächstes [stornieren wir die Animationsschleife](/de/docs/Web/API/Window/cancelAnimationFrame), die zuvor durch den [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Aufruf innerhalb der `drawScene()`-Funktion in Gang gesetzt wurde, und rufen stattdessen `drawVRScene()` auf. Diese Funktion rendert dieselbe Szene wie zuvor, aber mit etwas speziellem WebVR-Magie. Die Schleife hier wird von der speziellen Methode [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) von WebVR aufrechterhalten.

```js
// stop the normal presentation, and start the vr presentation
window.cancelAnimationFrame(normalSceneFrame);
drawVRScene();
```

Schließlich aktualisieren wir den Schaltflächentext, sodass er bei erneutem Drücken die Präsentation auf das VR-Display stoppt.

```js
              btn.textContent = 'Exit VR display';
            });
```

Um die VR-Präsentation zu stoppen, wenn die Taste anschließend gedrückt wird, rufen wir [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent) auf. Wir kehren auch den Text der Schaltfläche um und tauschen die `requestAnimationFrame`-Aufrufe aus. Sie sehen hier, dass wir [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) verwenden, um die VR-Rendering-Schleife zu stoppen und die normale Rendering-Schleife durch Aufruf von `drawScene()` wieder zu starten.

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

Sie erfahren unten, wie die stereoskopische Ansicht tatsächlich erzeugt wird.

### Warum hat WebVR seine eigene requestAnimationFrame()?

Das ist eine gute Frage. Der Grund ist, dass für eine flüssige Darstellung im VR-Display der Inhalt mit der nativen Bildwiederholrate des Displays und nicht der des Computers gerendert werden muss. Die Bildwiederholraten von VR-Displays sind größer als die von PCs und liegen typischerweise bis zu 90fps. Die Rate wird sich von der Kernbildschirmfrequenz des Computers unterscheiden.

Beachten Sie, dass [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame), wenn das VR-Display nicht präsentiert, identisch mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) läuft, sodass, wenn Sie wollten, Sie nur eine einzige Rendering-Schleife verwenden könnten, anstatt der zwei, die wir in unserer App verwenden. Wir haben zwei verwendet, weil wir leicht unterschiedliche Dinge tun wollten, abhängig davon, ob das VR-Display präsentiert oder nicht, und die Dinge zur besseren Verständlichkeit getrennt halten wollten.

### Rendern und Anzeige

An diesem Punkt haben wir den gesamten Code gesehen, der erforderlich ist, um auf die VR-Hardware zuzugreifen, darum zu bitten, unsere Szene auf der Hardware darzustellen, und die Rendering-Schleife in Gang zu setzen. Lassen Sie uns nun den Code für die Rendering-Schleife ansehen und erklären, wie die WebVR-spezifischen Teile davon funktionieren.

Zunächst beginnen wir mit der Definition unserer Rendering-Schleifenfunktion — `drawVRScene()`. Das erste, was wir hier tun, ist ein Aufruf an [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame), um die Schleife weiterlaufen zu lassen, nachdem sie einmal aufgerufen wurde (dies geschah früher in unserem Code, als wir mit der Präsentation auf das VR-Display begannen). Dieser Aufruf wird als Wert der globalen `vrSceneFrame`-Variablen gesetzt, sodass wir die Schleife mit einem Aufruf an [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) beenden können, sobald wir die VR-Präsentation verlassen.

```js
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
```

Als nächstes rufen wir [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) auf und übergeben den Namen der Variable, die wir verwenden möchten, um die Framedaten zu enthalten. Wir haben dies vorher initialisiert — `frameData`. Nach Abschluss des Aufrufs enthält diese Variable die Daten, die benötigt werden, um den nächsten Frame auf das VR-Gerät zu rendern, verpackt als [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt. Dies enthält Dinge wie Projektions- und Ansichtsmatrizen, um die Szene korrekt für die linke und rechte Augenansicht zu rendern, und das aktuelle [`VRPose`](/de/docs/Web/API/VRPose)-Objekt, das Daten über das VR-Display wie Orientierung, Position usw. enthält.

Dies muss bei jedem Frame aufgerufen werden, damit die gerenderte Ansicht immer auf dem neuesten Stand ist.

```js
// Populate frameData with the data of the next frame to display
vrDisplay.getFrameData(frameData);
```

Wir geben jetzt das aktuelle [`VRPose`](/de/docs/Web/API/VRPose) aus der [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose)-Eigenschaft zurück, speichern die Position und Orientierung zur späteren Verwendung und senden die aktuelle Pose an die Pose-Statistikkiste zur Anzeige, wenn die Variable `poseStatsDisplayed` auf true gesetzt ist.

```js
// You can get the position, orientation, etc. of the display from the current frame's pose

const curFramePose = frameData.pose;
const curPos = curFramePose.position;
const curOrient = curFramePose.orientation;
if (poseStatsDisplayed) {
  displayPoseStats(curFramePose);
}
```

Wir löschen jetzt die Leinwand, bevor wir darauf zeichnen, sodass der nächste Frame klar zu sehen ist und wir keine vorherigen gerenderten Frames mehr sehen:

```js
// Clear the canvas before we start drawing on it.

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
```

Wir rendern jetzt die Ansicht für beide Augen, links und rechts. Zuerst müssen wir Projektions- und Ansichtslokationen für die Verwendung im Rendering erstellen. Dies sind [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekte, die mit der Methode [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation) erstellt wurden und als Parameter die Kennung des Shader-Programms und einen identifizierenden Namen übergeben.

```js
// WebVR: Create the required projection and view matrix locations needed
// for passing into the uniformMatrix4fv methods below

const projectionMatrixLocation = gl.getUniformLocation(
  shaderProgram,
  "projMatrix",
);
const viewMatrixLocation = gl.getUniformLocation(shaderProgram, "viewMatrix");
```

Der nächste Render-Schritt beinhaltet:

- Definieren der Ansichtsportgröße für das linke Auge, mit Hilfe von [`WebGLRenderingContext.viewport`](/de/docs/Web/API/WebGLRenderingContext/viewport) — dies ist logisch die erste Hälfte der Leinwandbreite und die volle Leinwandhöhe.
- Festlegen der Projektions- und Ansichtsmatrixwerte, die für die Wiedergabe des linken Auges verwendet werden sollen — dies geschieht mit der Methode [`WebGLRenderingContext.uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix), die die vorher abgerufenen Lokationswerte und die von dem [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt erhaltenen linken Matrizen übergeben.
- Ausführen der Funktion `drawGeometry()`, die die eigentliche Szene rendert — aufgrund dessen, was wir in den vorherigen zwei Schritten angegeben haben, rendern wir es nur für das linke Auge.

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

Wir tun jetzt genau dasselbe, aber für das rechte Auge:

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

Als nächstes definieren wir unsere `drawGeometry()`-Funktion. Die meisten davon sind nur allgemeine WebGL-Codes, die notwendig sind, um unseren 3D-Würfel zu zeichnen. Sie werden einige WebVR-spezifische Teile in den `mvTranslate()`- und `mvRotate()`-Funktionsaufrufen sehen — diese übergeben Matrizen in das WebGL-Programm, die die Übersetzung und Rotation des Würfels für den aktuellen Frame definieren.

Sie sehen, dass wir diese Werte anhand der Position (`curPos`) und Orientierung (`curOrient`) des VR-Displays ändern, die wir aus dem [`VRPose`](/de/docs/Web/API/VRPose)-Objekt erhalten haben. Das Ergebnis ist, dass, beispielsweise, wenn Sie Ihren Kopf nach links bewegen oder drehen, der x-Positionswert (`curPos[0]`) und der y-Orientierungswert (`[curOrient[1]`) zum x-Translationswert hinzugefügt werden, was bedeutet, dass sich der Würfel nach rechts bewegt, wie Sie es erwarten würden, wenn Sie etwas ansehen und dann Ihren Kopf nach links bewegen/drehen.

Dies ist eine schnelle und schmutzige Art, VR-Pose-Daten zu verwenden, aber es veranschaulicht das grundlegende Prinzip.

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

Der letzte Teil der Rendering-Schleife beinhaltet, dass wir [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) aufrufen — nun, nachdem die ganze Arbeit erledigt ist und wir die Anzeige auf der {{htmlelement("canvas")}} gerendert haben, übermittelt diese Methode den Frame an das VR-Display, sodass er dort ebenfalls angezeigt wird.

```js
  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

### Anzeigen der Pose (Position, Orientierung usw.) Daten

In diesem Abschnitt diskutieren wir die `displayPoseStats()`-Funktion, die unsere aktualisierten Posedaten in jedem Frame anzeigt. Die Funktion ist ziemlich einfach.

Zunächst speichern wir die sechs verschiedenen Eigenschaftswerte, die aus dem [`VRPose`](/de/docs/Web/API/VRPose)-Objekt abgerufen werden können, in ihren eigenen Variablen — jede ist ein {{jsxref("Float32Array")}}.

```js
function displayPoseStats(pose) {
  const pos = pose.position;
  const orient = pose.orientation;
  const linVel = pose.linearVelocity;
  const linAcc = pose.linearAcceleration;
  const angVel = pose.angularVelocity;
  const angAcc = pose.angularAcceleration;
```

Wir schreiben dann die Daten in das Informationsfeld und aktualisieren es in jedem Frame. Wir haben jeden Wert auf drei Dezimalstellen mit [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) abgeschnitten, da die Werte sonst schwer zu lesen sind.

Sie sollten beachten, dass wir einen bedingten Ausdruck verwendet haben, um zu erkennen, ob die Arrays für die lineare Beschleunigung und die Winkelbeschleunigung erfolgreich zurückgegeben werden, bevor wir die Daten anzeigen. Diese Werte werden derzeit nicht von den meisten VR-Hardware-Geräten gemeldet, sodass der Code einen Fehler werfen würde, wenn wir dies nicht tun würden (die Arrays geben `null` zurück, wenn sie nicht erfolgreich gemeldet werden).

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

Der WebVR-Spezifikation bietet eine Reihe von Ereignissen, die ausgelöst werden und es unserem App-Code ermöglichen, auf Änderungen des Zustands des VR-Displays zu reagieren (siehe [Window-Ereignisse](/de/docs/Web/API/WebVR_API#window_events)). Zum Beispiel:

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) — wird ausgelöst, wenn sich der Präsentationszustand eines VR-Displays ändert — d.h. von Präsentieren zu Nicht-Präsentieren wechselt oder umgekehrt.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) — wird ausgelöst, wenn ein kompatibles VR-Display mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) — wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.

Um zu demonstrieren, wie sie funktionieren, enthält unser einfaches Demo das folgende Beispiel:

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

Wie Sie sehen können, bietet das [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)-Objekt zwei nützliche Eigenschaften — [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display), das eine Referenz auf das [`VRDisplay`](/de/docs/Web/API/VRDisplay) enthält, auf das das Ereignis als Antwort ausgelöst wurde, und [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason), das einen menschenlesbaren Grund enthält, warum das Ereignis ausgelöst wurde.

Dies ist ein sehr nützliches Ereignis; Sie könnten es verwenden, um Fälle zu behandeln, in denen das Display unerwartet getrennt wird, um zu verhindern, dass Fehler ausgelöst werden, und sicherzustellen, dass der Benutzer über die Situation informiert ist. Im Präsentations-Demo von Google's webvr.info wird das Ereignis verwendet, um eine [`onVRPresentChange()`-Funktion](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174) auszuführen, die die Benutzeroberflächensteuerelemente bei Bedarf aktualisiert und die Leinwandgröße anpasst.

## Zusammenfassung

Dieser Artikel hat Ihnen die sehr grundlegenden Grundlagen gezeigt, wie Sie eine einfache WebVR 1.1-App erstellen, um Ihnen den Einstieg zu erleichtern.
