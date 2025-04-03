---
title: Verwendung der WebVR-API
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützt nur eine geringe Anzahl von Geräten.

Die WebVR API ist eine fantastische Ergänzung für das Werkzeugset von Webentwicklern und ermöglicht es, WebGL-Szenen in Virtual-Reality-Displays wie Oculus Rift und HTC Vive darzustellen. Aber wie beginnen Sie mit der Entwicklung von VR-Apps für das Web? Dieser Artikel wird Sie durch die Grundlagen führen.

## Erste Schritte

Um zu beginnen, benötigen Sie:

- Unterstützende VR-Hardware.

  - Die günstigste Option ist die Verwendung eines Mobilgeräts, eines unterstützenden Browsers und einer Vorrichtung für das Gerät (z.B. Google Cardboard). Das Erlebnis wird nicht so gut sein wie mit dedizierter Hardware, aber Sie müssen keinen leistungsstarken Computer oder ein dediziertes VR-Display kaufen.
  - Dedizierte Hardware kann kostspielig sein, bietet jedoch ein besseres Erlebnis. Die derzeit am besten mit WebVR kompatible Hardware ist die HTC VIVE und Oculus Rift. Auf der Startseite von [webvr.info](https://webvr.info/) finden Sie weitere nützliche Informationen über verfügbare Hardware und welche Browser sie unterstützen.

- Einen Computer, der leistungsfähig genug ist, um das Rendern/Anzeigen von VR-Szenen mit Ihrer dedizierten VR-Hardware zu bewältigen, sofern erforderlich. Um eine Vorstellung davon zu bekommen, was Sie benötigen, schauen Sie in den entsprechenden Leitfaden für das VR, das Sie kaufen (z.B. [VIVE READY Computers](https://www.vive.com/us/vive-ready/)).
- Einen unterstützenden Browser installiert – der neueste [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder [Chrome](https://www.google.com/chrome/index.html) sind zurzeit Ihre besten Optionen, auf Desktop oder Mobil.

Sobald Sie alles zusammengebaut haben, können Sie testen, ob Ihr Setup mit WebVR funktioniert, indem Sie zu unserem [einfachen A-Frame Demo](https://mdn.github.io/webvr-tests/webvr/aframe-demo/) gehen und prüfen, ob die Szene gerendert wird und ob Sie in den VR-Anzeigemodus gelangen können, indem Sie den Knopf unten rechts drücken.

[A-Frame](https://aframe.io/) ist bei weitem die beste Option, wenn Sie schnell eine WebVR-kompatible 3D-Szene erstellen möchten, ohne eine Menge neuer JavaScript-Codes verstehen zu müssen. Es erklärt Ihnen jedoch nicht, wie die rohe WebVR-API funktioniert, und darauf werden wir als nächstes eingehen.

## Vorstellung unseres Demos

Um zu veranschaulichen, wie die WebVR-API funktioniert, werden wir unser "raw-webgl-example" studieren, das ungefähr so aussieht:

![Ein grauer rotierender 3D-Würfel](capture1.png)

> [!NOTE]
> Sie können den [Quellcode unseres Demos](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) auf GitHub finden und [es live ansehen](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example/) ebenfalls.

> [!NOTE]
> Falls WebVR in Ihrem Browser nicht funktioniert, müssen Sie möglicherweise sicherstellen, dass es über Ihre Grafikkarte läuft. Zum Beispiel bei NVIDIA-Karten, wenn Sie die NVIDIA-Systemsteuerung erfolgreich eingerichtet haben, wird es eine Kontextmenü-Option geben – rechtsklicken Sie auf Firefox und wählen Sie dann _Mit Grafikprozessor ausführen > Hochleistungs-NVIDIA-Prozessor_.

Unser Demo zeigt das, was jeder WebGL-Demo anstrebt – einen rotierenden 3D-Würfel. Wir haben dies mit rohem [WebGL API](/de/docs/Web/API/WebGL_API)-Code umgesetzt. Wir werden keinen grundlegenden JavaScript- oder WebGL-Unterricht geben, sondern nur die WebVR-Teile.

Unser Demo bietet auch:

- Einen Knopf, um unsere Szene im VR-Display zu präsentieren (und zu stoppen).
- Einen Knopf, um VR-Haltungsdaten anzuzeigen (und zu verbergen), d.h. die Position und Orientierung des Headsets, die in Echtzeit aktualisiert werden.

Wenn Sie sich den Quellcode der [Haupt-JavaScript-Datei unseres Demos](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) ansehen, können Sie die WebVR-spezifischen Teile leicht finden, indem Sie nach dem String "WebVR" in vorausgehenden Kommentaren suchen.

> [!NOTE]
> Um mehr über grundlegendes JavaScript und WebGL zu erfahren, konsultieren Sie unser [JavaScript Lernmaterial](/de/docs/Learn_web_development/Core/Scripting) und unser [WebGL Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

## Wie funktioniert es?

An diesem Punkt schauen wir uns an, wie die WebVR-Teile des Codes funktionieren.

Eine typische (einfache) WebVR-App funktioniert folgendermaßen:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um eine Referenz auf Ihr VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um die Präsentation auf dem VR-Display zu starten.
3. Mit der speziellen WebVR-Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) wird die Rendering-Schleife der App mit der richtigen Bildwiederholfrequenz für das Display ausgeführt.
4. Innerhalb der Rendering-Schleife holen Sie sich die Daten, die zum Anzeigen des aktuellen Frames benötigt werden ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die dargestellte Szene zweimal – einmal für jede Auge – und übermitteln dann die gerenderte Ansicht an das Display zur Anzeige an den Benutzer via ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

In den folgenden Abschnitten werden wir unser "raw-webgl-demo" im Detail betrachten und sehen, wo genau die oben genannten Funktionen verwendet werden.

### Anfang mit einigen Variablen

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

- `frameData` enthält ein [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt, das mit dem [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData)-Konstruktor erstellt wurde. Dies ist zunächst leer, wird aber später die Daten enthalten, die benötigt werden, um jeden Frame im VR-Display darzustellen, ständig aktualisiert, während die Rendering-Schleife läuft.
- `vrDisplay` startet uninitialisiert, wird später jedoch eine Referenz auf unser VR-Headset ([`VRDisplay`](/de/docs/Web/API/VRDisplay) – das zentrale Steuerobjekt der API) enthalten.
- `btn` und `poseStatsBtn` enthalten Referenzen auf die beiden Knöpfe, die wir zur Steuerung unserer App verwenden.
- `normalSceneFrame` und `vrSceneFrame` starten uninitialisiert, werden später jedoch Referenzen auf [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) Aufrufe enthalten – diese werden das Laufen einer normalen Rendering-Schleife und einer speziellen WebVR-Rendering-Schleife einleiten; wir erklären später den Unterschied zwischen diesen beiden.
- Die anderen Variablen speichern Referenzen auf verschiedene Teile der VR-Haltungsdatenanzeige, die Sie in der unteren rechten Ecke der Benutzeroberfläche sehen können.

### Eine Referenz auf unser VR-Display erhalten

Eine der Hauptfunktionen in unserem Code ist `start()` – wir führen diese Funktion aus, sobald der Inhalt des Body vollständig geladen ist:

```js
// start
//
// Called when the body has loaded is created to get the ball rolling.

document.body.onload = start;
```

Zu Beginn holt sich `start()` einen WebGL-Kontext, um 3D-Grafiken in das {{htmlelement("canvas")}} Element in [unserem HTML](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) zu rendern. Wir prüfen dann, ob der `gl` Kontext verfügbar ist – falls ja, führen wir eine Reihe von Funktionen aus, um die Szene zur Anzeige einzurichten.

```js
function start() {
  canvas = document.getElementById("gl-canvas");

  initWebGL(canvas);      // Initialize the GL context

  // WebGL setup code here
```

Als nächstes beginnen wir den Prozess des eigentlichen Renderns der Szene auf die Leinwand, indem wir die Leinwand so einstellen, dass sie das gesamte Ansichtsfeld des Browsers ausfüllt und zum ersten Mal die Rendering-Schleife (`drawScene()`) ausführen. Dies ist die nicht-WebVR – normale – Rendering-Schleife.

```js
// draw the scene normally, without WebVR - for those who don't have it and want to see the scene in their browser

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

Jetzt zu unserem ersten WebVR-spezifischen Code. Zuerst prüfen wir, ob [`Navigator.getVRDisplays`](/de/docs/Web/API/Navigator/getVRDisplays) existiert – dies ist der Einstiegspunkt in die API und somit eine gute Basisfunktionserkennung für WebVR. Sie werden am Ende des Blocks (innerhalb der `else` Klausel) sehen, dass wir eine Nachricht loggen, um anzuzeigen, dass WebVR 1.1 vom Browser nicht unterstützt wird, wenn dies nicht existiert.

```js
  // WebVR: Check to see if WebVR is supported
  if (navigator.getVRDisplays) {
    console.log('WebVR 1.1 supported');
```

Innerhalb unseres `if () { }` Blocks führen wir die [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) Funktion aus. Diese kehrt ein Versprechen zurück, das mit einem Array erfüllt wird, welches alle mit dem Computer verbundenen VR-Display-Geräte enthält. Wenn keine verbunden sind, wird das Array leer sein.

```js
    // Then get the displays attached to the computer
    navigator.getVRDisplays().then((displays) => {
```

Innerhalb des Versprechens `then()` Blocks prüfen wir, ob die Array-Länge größer als 0 ist; falls ja, setzen wir den Wert unserer `vrDisplay` Variablen auf das Element am Index 0 des Arrays. `vrDisplay` enthält jetzt ein [`VRDisplay`](/de/docs/Web/API/VRDisplay) Objekt, das unser verbundenes Display darstellt!

```js
      // If a display is available, use it to present the scene
      if (displays.length > 0) {
        vrDisplay = displays[0];
        console.log('Display found');
```

> [!NOTE]
> Es ist unwahrscheinlich, dass Sie mehrere VR-Displays an Ihren Computer angeschlossen haben, und dies ist nur ein einfaches Demo, daher wird dies für den Moment ausreichen.

### Starten und Stoppen der VR-Präsentation

Jetzt, da wir ein [`VRDisplay`](/de/docs/Web/API/VRDisplay) Objekt haben, können wir es verwenden, um eine Reihe von Dingen zu tun. Als nächstes wollen wir eine Funktionalität erstellen, um die Präsentation des WebGL-Inhalts auf dem Display zu starten und zu stoppen.

In Fortsetzung des vorherigen Codeblocks fügen wir nun einen Event-Listener zu unserem Start/Stopp-Knopf (`btn`) hinzu – wenn dieser Knopf geklickt wird, wollen wir prüfen, ob wir bereits auf dem Display präsentieren (wir tun dies auf ziemlich dumme Weise, indem wir prüfen, was das [`textContent`](/de/docs/Web/API/Node/textContent) des Knopfes enthält).

Wenn das Display nicht bereits präsentiert, verwenden wir die Methode [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent), um den Browser aufzufordern, mit der Präsentation von Inhalten auf dem Display zu beginnen. Dies nimmt als Parameter ein Array der [`VRLayerInit`](/de/docs/Web/API/VRLayerInit) Objekte, die die Ebenen darstellen, die Sie im Display präsentieren möchten.

Da die maximale Anzahl der darstellbaren Ebenen derzeit 1 ist und das einzige erforderliche Objektmitglied die [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source) Eigenschaft ist (die eine Referenz auf das {{htmlelement("canvas")}} ist, das Sie in jener Ebene präsentieren möchten; die anderen Parameter sind mit vernünftigen Standardwerten versehen – siehe [`leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) und [`rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds))), ist der Parameter \[{ source: canvas }].

`requestPresent()` gibt ein Versprechen zurück, das erfüllt wird, wenn die Präsentation erfolgreich beginnt.

```js
        // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
        btn.addEventListener('click', () => {
          if (btn.textContent === 'Start VR display') {
            vrDisplay.requestPresent([{ source: canvas }]).then(() => {
              console.log('Presenting to WebVR display');
```

Mit unserem erfolgreichen Präsentationsantrag möchten wir nun mit dem Einrichten zur Darstellung von Inhalten auf dem VRDisplay beginnen. Zunächst setzen wir das Canvas auf dieselbe Größe wie der VR-Display-Bereich. Wir tun dies, indem wir die [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) für beide Augen mithilfe von [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) erhalten.

Wir führen dann eine einfache Berechnung durch, um die gesamte Breite des VRDisplay-Renderbereichs basierend auf den "`VREyeParameters.renderWidth`" und "`VREyeParameters.renderHeight`" zu berechnen.

```js
// Set the canvas size to the size of the vrDisplay viewport

const leftEye = vrDisplay.getEyeParameters("left");
const rightEye = vrDisplay.getEyeParameters("right");

canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);
```

Als nächstes [stornieren wir die Animationsschleife](/de/docs/Web/API/Window/cancelAnimationFrame), die zuvor durch den [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Aufruf innerhalb der `drawScene()` Funktion gestartet wurde, und rufen stattdessen `drawVRScene()` auf. Diese Funktion rendert dieselbe Szene wie zuvor, jedoch mit einem gewissen speziellem WebVR-Zauber. Die Schleife darin wird durch die spezielle [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) Methode von WebVR aufrechterhalten.

```js
// stop the normal presentation, and start the vr presentation
window.cancelAnimationFrame(normalSceneFrame);
drawVRScene();
```

Schließlich aktualisieren wir den Text des Knopfes, sodass er beim nächsten Drücken die Präsentation auf dem VR-Display stoppt.

```js
              btn.textContent = 'Exit VR display';
            });
```

Um die VR-Präsentation zu stoppen, wenn der Knopf anschließend gedrückt wird, rufen wir [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent) auf. Wir ändern auch den Textinhalt des Knopfes zurück und wechseln zwischen den `requestAnimationFrame` Aufrufen. Hier sehen Sie, dass wir [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) verwenden, um die VR-Rendering-Schleife zu stoppen, und die normale Rendering-Schleife wieder starten, indem wir `drawScene()` aufrufen.

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

Das ist eine gute Frage. Der Grund ist, dass für ein reibungsloses Rendern im VR-Display die Inhalte mit der nativen Bildwiederholfrequenz des Displays und nicht der des Computers gerendert werden müssen. Die Bildwiederholfrequenzen von VR-Displays sind höher als die der Computer, typischerweise bis zu 90fps. Die Rate wird sich von der Kernbildwiederholrate des Computers unterscheiden.

Beachten Sie, dass [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) identisch mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) läuft, wenn das VR-Display nicht präsentiert, sodass Sie, wenn Sie wollten, einfach eine einzige Renderingschleife verwenden könnten, anstatt der zwei, die wir in unserer App verwenden. Wir haben zwei genutzt, weil wir ein wenig unterschiedliche Dinge tun wollten, je nachdem, ob das VR-Display präsentiert oder nicht, und um die Dinge der Verständlichkeit halber getrennt zu halten.

### Rendering und Anzeige

An diesem Punkt haben wir den gesamten Code gesehen, der erforderlich ist, um auf die VR-Hardware zuzugreifen, die Präsentation unserer Szene auf der Hardware anzufordern und die Rendering-Schleife zu starten. Schauen wir uns nun den Code für die Rendering-Schleife an und erklären, wie die WebVR-spezifischen Teile davon funktionieren.

Zunächst beginnen wir mit der Definition unserer Rendering-Schleifenfunktion — `drawVRScene()`. Das erste, was wir hier machen, ist einen Aufruf von [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) zu tätigen, um die Schleife am Laufen zu halten, nachdem sie einmal aufgerufen wurde (dies geschah früher in unserem Code, als wir begannen, den VR-Display zu präsentieren). Dieser Aufruf wird als Wert der globalen `vrSceneFrame` Variablen gesetzt, sodass wir die Schleife mit einem Aufruf von [`VRDisplay.cancelAnimationFrame()`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) abbrechen können, wenn wir die VR-Präsentation beenden.

```js
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
```

Als nächstes rufen wir [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) auf und übergeben den Namen der Variablen, die wir verwenden möchten, um die Frame-Daten zu enthalten. Wir initialisierten dies früher — `frameData`. Nachdem der Aufruf abgeschlossen ist, wird diese Variable die Daten enthalten, die benötigt werden, um den nächsten Frame auf das VR-Gerät zu rendern, verpackt als [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt. Dieses enthält Dinge wie Projektions- und Ansichts-Matrizen, um die Szene korrekt für die linke und rechte Augenansicht zu rendern, und das aktuelle [`VRPose`](/de/docs/Web/API/VRPose) Objekt, das Daten über das VR-Display enthält, wie Orientierung, Position, etc.

Dies muss jedes Mal aufgerufen werden, damit die gerenderte Ansicht immer aktuell ist.

```js
// Populate frameData with the data of the next frame to display
vrDisplay.getFrameData(frameData);
```

Jetzt rufen wir die aktuelle [`VRPose`](/de/docs/Web/API/VRPose) von der [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose) Eigenschaft ab, speichern die Position und Orientierung zur späteren Verwendung und senden die aktuelle Haltung an die Haltungsstatistikanzeige zur Anzeige, wenn die `poseStatsDisplayed` Variable auf true gesetzt ist.

```js
// You can get the position, orientation, etc. of the display from the current frame's pose

const curFramePose = frameData.pose;
const curPos = curFramePose.position;
const curOrient = curFramePose.orientation;
if (poseStatsDisplayed) {
  displayPoseStats(curFramePose);
}
```

Nun leeren wir die Leinwand, bevor wir darauf zeichnen, damit der nächste Frame klar gesehen wird und wir keine zuvor gerenderten Frames ebenfalls sehen:

```js
// Clear the canvas before we start drawing on it.

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
```

Nun rendern wir die Ansicht für sowohl das linke als auch das rechte Auge. Zuerst müssen wir Projektions- und Anzeigematrizen für die Verwendung im Rendering erstellen. Dies sind [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation) Objekte, die mit der Methode [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation) erstellt wurden, der man die Bezeichner des Shader-Programms und einen Identifikationsnamen als Parameter übergibt.

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

- Festlegen der Viewport-Größe für das linke Auge mit [`WebGLRenderingContext.viewport`](/de/docs/Web/API/WebGLRenderingContext/viewport) — dies ist logisch die erste Hälfte der Canvas-Breite und die volle Canvas-Höhe.
- Festlegen der Ansicht und Projektions-Matrix-Werte zur Verwendung für das Rendern des linken Auges — dies wird mit der Methode [`WebGLRenderingContext.uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix) getan, der wir die oben ermittelten Positionswerte und die linken Matrizen aus dem [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt übergeben.
- Ausführen der `drawGeometry()` Funktion, die die eigentliche Szene rendert — aufgrund dessen, was wir in den vorhergehenden zwei Schritten festgelegt haben, wird sie nur für das linke Auge gerendert.

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

Als nächstes definieren wir unsere `drawGeometry()` Funktion. Das meiste davon ist nur allgemeiner WebGL-Code, der benötigt wird, um unseren 3D-Würfel zu zeichnen. Sie werden einige WebVR-spezifische Teile in den `mvTranslate()` und `mvRotate()` Funktionsaufrufen sehen — diese übergeben Matrizen an das WebGL-Programm, die die Übersetzung und Rotation des Würfels für den aktuellen Frame definieren.

Sie sehen, dass wir diese Werte durch die Position (`curPos`) und Orientierung (`curOrient`) des VR-Displays modifizieren, die wir vom [`VRPose`](/de/docs/Web/API/VRPose) Objekt erhalten haben. Das Ergebnis ist, dass der Würfel sich beispielsweise nach rechts bewegt, wenn Sie Ihren Kopf nach links bewegen oder drehen, da der x-Positionswert (`curPos[0]`) und der y-Rotationswert (`[curOrient[1]`) zu dem x-Übersetzungswert hinzugefügt werden — genauso, wie Sie es erwarten würden, wenn Sie auf etwas schließen und dann Ihren Kopf nach links bewegen/drehen.

Das ist eine schnelle und schmutzige Möglichkeit, VR-Haltungsdaten zu verwenden, aber es veranschaulicht das grundlegende Prinzip.

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

Der nächste Codeabschnitt hat nichts mit WebVR zu tun — es aktualisiert einfach die Rotation des Würfels in jedem Frame:

```js
// Update the rotation for the next draw, if it's time to do so.
let currentTime = new Date().getTime();
if (lastCubeUpdateTime) {
  const delta = currentTime - lastCubeUpdateTime;

  cubeRotation += (30 * delta) / 1000.0;
}
lastCubeUpdateTime = currentTime;
```

Der letzte Teil der Rendering-Schleife beinhaltet das Aufrufen von [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) — nun, da die gesamte Arbeit erledigt ist und wir die Darstellung auf dem {{htmlelement("canvas")}} gerendert haben, übermittelt diese Methode dann den Frame an das VR-Display, sodass es auch dort angezeigt wird.

```js
  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

### Anzeige der Haltung (Position, Orientierung etc.) Daten

In diesem Abschnitt werden wir die Funktion `displayPoseStats()` besprechen, die auf jedem Frame unsere aktualisierten Haltungsdaten anzeigt. Die Funktion ist ziemlich einfach.

Zuerst speichern wir die sechs verschiedenen Eigenschaftswerte, die aus dem [`VRPose`](/de/docs/Web/API/VRPose) Objekt erhältlich sind, in ihren eigenen Variablen — jeder ist ein {{jsxref("Float32Array")}}.

```js
function displayPoseStats(pose) {
  const pos = pose.position;
  const orient = pose.orientation;
  const linVel = pose.linearVelocity;
  const linAcc = pose.linearAcceleration;
  const angVel = pose.angularVelocity;
  const angAcc = pose.angularAcceleration;
```

Dann schreiben wir die Daten in das Informationsfeld, indem wir es in jedem Frame aktualisieren. Wir haben jeden Wert auf drei Dezimalstellen mit [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) geklemmt, da die Werte sonst schwer zu lesen sind.

Sie sollten beachten, dass wir eine bedingte Ausdruck benutzt haben, um zu erkennen, ob die Arrays für lineare Beschleunigung und Winkelbeschleunigung erfolgreich zurückgegeben werden, bevor wir die Daten anzeigen. Diese Werte werden von den meisten VR-Hardware noch nicht berichtet, sodass der Code einen Fehler werfen würde, wenn wir dies nicht tun würden (die Arrays geben `null` zurück, wenn sie nicht erfolgreich gemeldet werden).

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

Das WebVR-Spezifikationsmerkmal hat eine Reihe von Ereignissen, die ausgelöst werden, um unserem App-Code zu ermöglichen, auf Änderungen im Zustand des VR-Displays zu reagieren (siehe [Window-Ereignisse](/de/docs/Web/API/WebVR_API#window_events)). Zum Beispiel:

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) — Wird ausgelöst, wenn sich der Präsentationsstatus eines VR-Displays ändert — also von Präsentieren zu nicht Präsentieren wechselt oder umgekehrt.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) — Wird ausgelöst, wenn ein kompatibles VR-Display mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) — Wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.

Um zu demonstrieren, wie dies funktioniert, enthält unser einfaches Demo das folgende Beispiel:

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

Wie Sie sehen können, bietet das [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent) Objekt zwei nützliche Eigenschaften — [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display), welches eine Referenz auf das [`VRDisplay`](/de/docs/Web/API/VRDisplay) enthält, auf das das Ereignis reagiert hat, und [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason), welches einen menschenlesbaren Grund enthält, warum das Ereignis ausgelöst wurde.

Das ist ein sehr nützliches Ereignis; Sie könnten es verwenden, um Fälle zu behandeln, in denen das Display unerwartet getrennt wird, um zu verhindern, dass Fehler geworfen werden, und sicherzustellen, dass der Benutzer über die Situation informiert wird. In Googles webvr.info Präsentationsdemo wird das Ereignis genutzt, um eine [`onVRPresentChange()` Funktion](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174) zu betreiben, die die UI-Steuerelemente wie angemessen aktualisiert und die Leinwandgröße ändert.

## Zusammenfassung

Dieser Artikel hat Ihnen die Grundlagen vermittelt, wie man eine einfache WebVR 1.1 App erstellt, um Ihnen den Einstieg zu erleichtern.
