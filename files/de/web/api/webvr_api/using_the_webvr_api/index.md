---
title: Verwendung der WebVR-API
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: fd56a549d24a8002df09735ee8319ce1a721c233
---

{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Die WebVR-API wurde durch die [WebXR-API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl von Geräten.

Die WebVR-API ist eine fantastische Ergänzung zum Werkzeugkasten eines Webentwicklers und ermöglicht es, WebGL-Szenen in Virtual-Reality-Displays wie dem Oculus Rift und HTC Vive zu präsentieren. Aber wie beginnt man mit der Entwicklung von VR-Apps für das Web? Dieser Artikel wird Sie durch die Grundlagen führen.

## Erste Schritte

Um loszulegen, benötigen Sie:

- Unterstützte VR-Hardware.
  - Die günstigste Option ist die Nutzung eines mobilen Geräts, eines unterstützenden Browsers und einer Gerätehalterung (z.B. Google Cardboard). Das Erlebnis ist nicht ganz so gut wie mit dedizierter Hardware, aber Sie müssen keinen leistungsstarken Computer oder ein spezielles VR-Display kaufen.
  - Dedizierte Hardware kann teuer sein, bietet aber ein besseres Erlebnis. Die derzeit am meisten WebVR-kompatible Hardware ist das HTC VIVE und das Oculus Rift. Auf der Startseite von [webvr.info](https://webvr.info/) finden Sie weitere nützliche Informationen über verfügbare Hardware und welche Browser diese unterstützen.

- Einen Computer, der leistungsstark genug ist, um VR-Szenen mit Ihrer dedizierten VR-Hardware bei Bedarf zu rendern/anzeigen. Um eine Vorstellung davon zu bekommen, was Sie benötigen, schauen Sie sich den relevanten Leitfaden für die VR an, die Sie kaufen (z.B. [VIVE READY Computers](https://www.vive.com/us/vive-ready/)).
- Einen unterstützenden Browser — die neueste [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder [Chrome](https://www.google.com/chrome/index.html) sind Ihre besten Optionen zurzeit, auf dem Desktop oder Mobilgerät.

Sobald alles zusammengestellt ist, können Sie testen, ob Ihr Setup mit WebVR funktioniert, indem Sie zu unserem [einfachen A-Frame-Demo](https://mdn.github.io/webvr-tests/webvr/aframe-demo/) gehen und schauen, ob die Szene gerendert wird und ob Sie durch Drücken des Buttons unten rechts in den VR-Anzeigemodus wechseln können.

[A-Frame](https://aframe.io/) ist bei weitem die beste Option, wenn Sie schnell eine WebVR-kompatible 3D-Szene erstellen möchten, ohne eine Menge neuer JavaScript-Code zu verstehen. Es zeigt Ihnen jedoch nicht, wie die rohe WebVR-API funktioniert, und das ist, was wir als Nächstes behandeln werden.

## Einführung unseres Demos

Um zu veranschaulichen, wie die WebVR-API funktioniert, werden wir unser raw-webgl-Beispiel studieren, das in etwa so aussieht:

![Ein grauer rotierender 3D-Würfel](capture1.png)

> [!NOTE]
> Den [Quellcode unseres Demos](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) finden Sie auf GitHub, und [sehen Sie es live](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example/) auch.

> [!NOTE]
> Wenn WebVR in Ihrem Browser nicht funktioniert, müssen Sie möglicherweise sicherstellen, dass es über Ihre Grafikkarte läuft. Zum Beispiel für NVIDIA-Karten: Wenn Sie das NVIDIA Control Panel erfolgreich eingerichtet haben, wird eine Kontextmenüoption verfügbar sein — klicken Sie mit der rechten Maustaste auf Firefox und wählen Sie _Mit Grafikprozessor ausführen > Hochleistungs-NVIDIA-Prozessor_.

Unser Demo enthält den heiligen Gral der WebGL-Demos — einen rotierenden 3D-Würfel. Wir haben dies mithilfe von rohem [WebGL API](/de/docs/Web/API/WebGL_API) Code umgesetzt. Wir werden kein grundlegendes JavaScript oder WebGL lehren, sondern nur die WebVR-Teile.

Unser Demo bietet auch:

- Einen Button, um die Darstellung unserer Szene im VR-Display zu starten (und zu stoppen).
- Einen Button, um VR-Posendaten anzuzeigen (und zu verstecken), d.h. die Position und Orientierung des Headsets, die in Echtzeit aktualisiert werden.

Wenn Sie sich den Quellcode der [JavaScript-Hauptdatei unseres Demos](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) ansehen, können Sie die spezifischen WebVR-Teile leicht finden, indem Sie nach der Zeichenfolge "WebVR" in den vorangehenden Kommentaren suchen.

> [!NOTE]
> Um mehr über grundlegendes JavaScript und WebGL zu erfahren, konsultieren Sie unser [JavaScript-Lernmaterial](/de/docs/Learn_web_development/Core/Scripting) und unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

## Wie funktioniert es?

An diesem Punkt werfen wir einen Blick darauf, wie die WebVR-Teile des Codes funktionieren.

Eine typische (einfache) WebVR-App funktioniert folgendermaßen:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um eine Referenz zu Ihrem VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um mit der Wiedergabe auf dem VR-Display zu beginnen.
3. Die WebVR-eigene Methode [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) wird verwendet, um die Rendering-Schleife der App mit der richtigen Bildwiederholrate für das Display auszuführen.
4. Innerhalb der Rendering-Schleife erfasst man die Daten, die erforderlich sind, um den aktuellen Frame anzuzeigen ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnet die angezeigte Szene zweimal — einmal für den Blick jedes Auges — und übergibt dann die gerenderte Ansicht an das Display, um sie dem Benutzer anzuzeigen, über ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

In den folgenden Abschnitten werden wir unser raw-webgl-demo im Detail betrachten und sehen, wo genau die oben genannten Funktionen verwendet werden.

### Beginn mit einigen Variablen

Der erste WebVR-bezogene Code, auf den Sie stoßen werden, ist folgender Block:

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

- `frameData` enthält ein [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt, das mit dem [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData) Konstruktor erstellt wurde. Dies ist anfangs leer, wird aber später die Daten enthalten, die erforderlich sind, um jeden Frame zu rendern, der im VR-Display angezeigt werden soll, und wird ständig aktualisiert, während die Rendering-Schleife läuft.
- `vrDisplay` startet uninitialisiert, wird aber später eine Referenz auf unser VR-Headset enthalten ([`VRDisplay`](/de/docs/Web/API/VRDisplay) — das zentrale Steuerobjekt der API).
- `btn` und `poseStatsBtn` enthalten Referenzen auf die beiden Buttons, die wir verwenden, um unsere App zu steuern.
- `normalSceneFrame` und `vrSceneFrame` starten uninitialisiert, werden später aber Referenzen auf [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) Aufrufe enthalten — diese werden das Ausführen einer normalen Rendering-Schleife und einer speziellen WebVR-Rendering-Schleife einleiten; wir werden den Unterschied zwischen diesen beiden später erklären.
- Die anderen Variablen speichern Referenzen auf verschiedene Teile der VR-Pose-Datenanzeige-Box, die Sie in der unteren rechten Ecke der Benutzeroberfläche sehen können.

### Referenz auf unser VR-Display erhalten

Zuerst rufen wir einen WebGL-Kontext ab, um 3D-Grafiken in das {{htmlelement("canvas")}}-Element in [unserem HTML](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) zu rendern. Wir prüfen dann, ob der `gl` Kontext verfügbar ist — wenn ja, führen wir eine Anzahl von Funktionen aus, um die Szene zur Anzeige vorzubereiten.

```js
const canvas = document.getElementById("gl-canvas");

initWebGL(canvas); // Initialize the GL context

// WebGL setup code here
```

Als Nächstes starten wir den Prozess, die Szene tatsächlich auf die Leinwand zu rendern, indem wir die Leinwand so einstellen, dass sie das gesamte Browser-Ansichtsfenster ausfüllt, und die Rendering-Schleife (`drawScene()`) zum ersten Mal ausführen. Dies ist die nicht-WebVR — normale — Rendering-Schleife.

```js
// draw the scene normally, without WebVR - for those who don't have it and want to see the scene in their browser

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

Nun zu unserem ersten WebVR-spezifischen Code. Zuerst prüfen wir, ob [`Navigator.getVRDisplays`](/de/docs/Web/API/Navigator/getVRDisplays) existiert — dies ist der Einstiegspunkt in die API und somit eine gute grundlegende Feature-Erkennung für WebVR. Wenn dies nicht existiert, protokollisieren wir eine Nachricht, um anzuzeigen, dass WebVR 1.1 nicht vom Browser unterstützt wird.

```js
// WebVR: Check to see if WebVR is supported
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 supported");
  // ...
} else {
  console.log("WebVR API not supported by this browser.");
}
```

Der Rest des Codes geht in den `if (navigator.getVRDisplays) { }` Block, damit er nur dann ausgeführt wird, wenn WebVR unterstützt wird.

Wir führen zuerst die Funktion [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) aus. Dies gibt ein Versprechen zurück, welches mit einem Array erfüllt wird, das alle mit dem Computer verbundenen VR-Display-Geräte enthält. Wenn keine verbunden sind, ist das Array leer.

Innerhalb des Versprechens `then()`-Blocks prüfen wir, ob die Array-Länge größer als 0 ist; wenn ja, setzen wir den Wert unserer `vrDisplay`-Variable auf den 0-Index-Artikel im Array. `vrDisplay` enthält jetzt ein [`VRDisplay`](/de/docs/Web/API/VRDisplay) Objekt, das unser verbundenes Display darstellt!

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

Der Rest des Codes geht in den `if (displays.length > 0) { }` Block, damit er nur dann ausgeführt wird, wenn mindestens ein VR-Display verfügbar ist.

> [!NOTE]
> Es ist unwahrscheinlich, dass Sie mehrere VR-Displays mit Ihrem Computer verbunden haben, und dies ist nur ein einfaches Demo, daher wird dies für jetzt ausreichen.

### Starten und Stoppen der VR-Präsentation

Jetzt, da wir ein [`VRDisplay`](/de/docs/Web/API/VRDisplay) Objekt haben, können wir damit eine Reihe von Dingen tun. Das Nächste, was wir tun möchten, ist eine Funktionalität zu verdrahten, um die WebGL-Inhalte auf dem Display zu starten und zu stoppen.

Weiter mit dem vorherigen Codeblock, fügen wir nun einen Event-Listener zu unserem Start/Stopp-Button (`btn`) hinzu — wenn dieser Button geklickt wird, möchten wir prüfen, ob wir bereits auf dem Display präsentieren (wir tun dies auf ziemlich dumme Weise, indem wir prüfen, was der Button [`textContent`](/de/docs/Web/API/Node/textContent) enthält).

Wenn das Display nicht bereits präsentiert, verwenden wir die Methode [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent), um den Browser darum zu bitten, das Präsentieren von Inhalten auf dem Display zu starten. Dies nimmt als Parameter ein Array der [`VRLayerInit`](/de/docs/Web/API/VRLayerInit) Objekte an, die die Schichten repräsentieren, die Sie im Display präsentieren möchten.

Da die maximale Anzahl von Schichten, die Sie anzeigen können, derzeit 1 beträgt und das einzig obligatorische Objektmember die Eigenschaft [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source) (welche eine Referenz auf das {{htmlelement("canvas")}} ist, das Sie in dieser Schicht präsentieren möchten; die anderen Parameter haben sinnvolle Standardeinstellungen — siehe [`leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) und [`rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds))) ist, ist der Parameter `[{ source: canvas }]`.

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

Mit unserem erfolgreichen Präsentationsantrag möchten wir nun damit beginnen, Inhalte zu rendern, die dem VRDisplay präsentiert werden. Zuerst stellen wir die Leinwand auf die gleiche Größe wie die VR-Anzeige ein. Wir tun dies, indem wir die [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) für beide Augen mit [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) erhalten.

Wir führen dann einige einfache Berechnungen durch, um die Gesamtbreite des VRDisplay-Renderbereichs basierend auf den Augen-Parametern [`VREyeParameters.renderWidth`](/de/docs/Web/API/VREyeParameters/renderWidth) und [`VREyeParameters.renderHeight`](/de/docs/Web/API/VREyeParameters/renderHeight) zu berechnen.

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

Als Nächstes [stornieren wir die Animationsschleife](/de/docs/Web/API/Window/cancelAnimationFrame), die zuvor von dem [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Aufruf in der `drawScene()` Funktion in Gang gesetzt wurde, und rufen stattdessen `drawVRScene()` auf. Diese Funktion rendert die gleiche Szene wie zuvor, mit etwas speziellem WebVR-Magie im Gange. Die Schleife darin wird von WebVRs spezieller [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) Methode aufrechterhalten.

```js
vrDisplay.requestPresent([{ source: canvas }]).then(() => {
  // ...
  // stop the normal presentation, and start the vr presentation
  window.cancelAnimationFrame(normalSceneFrame);
  drawVRScene();
  // ...
});
```

Schließlich aktualisieren wir den Text des Buttons, sodass beim nächsten Drücken die Präsentation am VR-Display gestoppt wird.

```js
vrDisplay.requestPresent([{ source: canvas }]).then(() => {
  // ...
  btn.textContent = "Exit VR display";
});
```

Um die VR-Präsentation zu stoppen, wenn der Button anschließend gedrückt wird, rufen wir [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent) auf. Wir kehren auch den Textinhalt des Buttons um und tauschen die `requestAnimationFrame` Aufrufe aus. Hier sehen Sie, dass wir [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) verwenden, um die VR-Rendering-Schleife zu stoppen, und die normale Rendering-Schleife erneut starten, indem wir `drawScene()` aufrufen.

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

Sobald die Präsentation beginnt, sehen Sie die stereoskopische Ansicht im Browser angezeigt:

![Stereoskopische Ansicht des 3D-Würfels](capture2.png)

Im Folgenden erfahren Sie, wie die stereoskopische Ansicht tatsächlich produziert wird.

### Warum hat WebVR eine eigene requestAnimationFrame()?

Das ist eine gute Frage. Der Grund dafür ist, dass für flüssiges Rendern innerhalb des VR-Displays der Inhalt mit der nativen Bildwiederholrate des Displays gerendert werden muss, nicht mit der des Computers. VR-Display-Bildwiederholraten sind größer als PC-Bildwiederholraten, normalerweise bis zu 90fps. Die Rate wird von der Kerndrate des Computers abweichen.

Beachten Sie, dass [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) identisch mit [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) läuft, wenn das VR-Display nicht präsentiert, sodass Sie, wenn Sie wollten, einfach eine einzelne Rendering-Schleife verwenden könnten, anstatt der zwei, die wir in unserer App verwenden. Wir haben zwei verwendet, weil wir leicht unterschiedliche Dinge tun wollten, je nachdem, ob das VR-Display präsentiert oder nicht, und um die Dinge aus Gründen der Verständlichkeit getrennt zu halten.

### Rendering und Anzeige

An diesem Punkt haben wir den gesamten Code gesehen, der erforderlich ist, um auf die VR-Hardware zuzugreifen, um zu beantragen, dass wir unsere Szene auf die Hardware präsentieren und beginnen, die Rendering-Schleife auszuführen. Lassen Sie uns nun den Code für die Rendering-Schleife ansehen und erklären, wie die spezifischen WebVR-Teile davon funktionieren.

Zuerst beginnen wir mit der Definition unserer Rendering-Schleifenfunktion — `drawVRScene()`. Das erste, was wir hier drin machen, ist ein Aufruf von [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame), um die Schleife am Laufen zu halten, nachdem sie einmal aufgerufen wurde (dies geschah früher in unserem Code, als wir begannen, auf dem VR-Display zu präsentieren). Dieser Aufruf wird als Wert der globalen Variable `vrSceneFrame` gesetzt, sodass wir die Schleife mit einem Aufruf von [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) beenden können, sobald wir die VR-Präsentation verlassen.

```js
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
  // ...
}
```

Als nächstes rufen wir [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) auf und übergeben den Namen der Variable, die wir zur Speicherung der Rahmendaten verwenden wollen. Wir haben dies früher als `frameData` initialisiert. Nach der Erfüllung des Aufrufs enthält diese Variable die Daten, die benötigt werden, um den nächsten Frame auf dem VR-Gerät zu rendern, verpackt als [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt. Dies enthält Dinge wie Projektions- und Ansichtsmatrizen zum korrekten Rendern der Szene für die Ansichten des linken und rechten Auges sowie das aktuelle [`VRPose`](/de/docs/Web/API/VRPose) Objekt, das Daten über das VR-Display wie Orientierung, Position usw. enthält.

Dies muss bei jedem Frame aufgerufen werden, damit die gerenderte Ansicht immer auf dem neuesten Stand ist.

```js
function drawVRScene() {
  // ...
  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);
  // ...
}
```

Nun rufen wir die aktuelle [`VRPose`](/de/docs/Web/API/VRPose) aus der [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose) Eigenschaft ab, speichern die Position und Orientierung zur späteren Verwendung und senden die aktuelle Pose an die Pose-Statistik-Box für die Anzeige, wenn die Variable `poseStatsDisplayed` auf wahr gesetzt ist.

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

Nun löschen wir die Leinwand, bevor wir darauf zeichnen, damit der nächste Frame klar gesehen wird und wir keine vorherigen gerenderten Frames mehr sehen:

```js
function drawVRScene() {
  // ...
  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  // ...
}
```

Nun rendern wir die Ansicht sowohl für das linke als auch für das rechte Auge. Zuerst müssen wir Projektion und Ansicht für die Verwendung beim Rendern erstellen. Diese sind [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation) Objekte, die mit der [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation) Methode erstellt werden, indem wir die Kennung des Shader-Programms und einen identifizierenden Namen als Parameter übergeben.

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

- Festlegen der Größe des Ansichtsbereichs für das linke Auge mit [`WebGLRenderingContext.viewport`](/de/docs/Web/API/WebGLRenderingContext/viewport) — dies ist logisch die erste Hälfte der Leinwandbreite und die volle Leinwandhöhe.
- Festlegen der Ansichts- und Projektionsmatrixwerte für das Rendern des linken Auges — dies geschieht mit der Methode [`WebGLRenderingContext.uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix), die die vorher abgerufenen Standortwerte und die linken Matrizen, die aus dem [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekt erhalten wurden, übergeben werden.
- Ausführen der `drawGeometry()` Funktion, die die eigentliche Szene rendert — aufgrund dessen, was wir in den vorherigen zwei Schritten spezifiziert haben, werden wir sie nur für das linke Auge rendern.

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

Nun tun wir genau das Gleiche, aber für das rechte Auge:

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

Als nächstes definieren wir unsere `drawGeometry()` Funktion. Das meiste davon ist nur allgemeiner WebGL-Code, der erforderlich ist, um unseren 3D-Würfel zu zeichnen. Sie werden einige spezifische WebVR-Teile in den `mvTranslate()` und `mvRotate()` Funktion Aufrufen sehen — diese übergeben Matrizen in das WebGL-Programm, die die Translation und Rotation des Würfels für den aktuellen Frame definieren.

Sie werden sehen, dass wir diese Werte durch die Position (`curPos`) und Orientierung (`curOrient`) des VR-Displays, das wir aus dem [`VRPose`](/de/docs/Web/API/VRPose) Objekt bekommen haben, modifizieren. Das Ergebnis ist, dass, wenn Sie zum Beispiel Ihren Kopf nach links bewegen oder drehen, der x-Positionswert (`curPos[0]`) und der y-Rotationswert (`[curOrient[1]`) dem x-Translationswert hinzugefügt werden, was bedeutet, dass sich der Würfel nach rechts bewegt, wie Sie es erwarten würden, wenn Sie auf etwas schauen und dann Ihren Kopf nach links bewegen/drehen.

Dies ist eine schnelle und schmutzige Art, VR-Posedaten zu verwenden, aber es verdeutlicht das Grundprinzip.

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

Der letzte Teil der Rendering-Schleife besteht darin, [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) aufzurufen — nun, da alle Arbeiten erledigt sind und die Anzeige auf dem {{htmlelement("canvas")}} gerendert wurde, übergibt diese Methode dann den Frame an die VR-Anzeige, sodass er auch dort angezeigt wird.

```js
function drawVRScene() {
  // ...
  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

### Pose (Position, Orientierung usw.) Daten anzeigen

In diesem Abschnitt werden wir die Funktion `displayPoseStats()` besprechen, die unsere aktualisierten Posedaten bei jedem Frame anzeigt. Die Funktion ist ziemlich einfach.

Zuerst speichern wir die sechs verschiedenen Eigenschaftswerte, die vom [`VRPose`](/de/docs/Web/API/VRPose) Objekt abrufbar sind, in ihren eigenen Variablen — jede ist ein {{jsxref("Float32Array")}}.

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

Wir schreiben dann die Daten in die Informationsbox und aktualisieren sie bei jedem Frame. Wir haben jeden Wert mit [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) auf drei Dezimalstellen begrenzt, da die Werte sonst schwer zu lesen sind.

Sie sollten beachten, dass wir einen Bedingungsausdruck verwendet haben, um zu erkennen, ob die lineare Beschleunigungs- und die Winkelbeschleunigungs-Arrays erfolgreich zurückgegeben werden, bevor wir die Daten anzeigen. Diese Werte werden von den meisten VR-Hardwaregeräten bisher nicht gemeldet, sodass der Code einen Fehler auslöst, wenn wir dies nicht tun (die Arrays geben `null` zurück, wenn sie nicht erfolgreich gemeldet werden).

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

Die WebVR-Spezifikation enthält eine Reihe von Ereignissen, die ausgelöst werden, sodass unser App-Code auf Änderungen im Zustand des VR-Displays reagieren kann (siehe [Window Evente](/de/docs/Web/API/WebVR_API#window_events)). Zum Beispiel:

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) — Wird ausgelöst, wenn sich der Präsentationsstatus eines VR-Displays ändert, d.h. von Präsentieren zu Nicht-Präsentieren wechselt oder umgekehrt.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) — Wird ausgelöst, wenn ein kompatibles VR-Display mit dem Computer verbunden wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) — Wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.

Um zu demonstrieren, wie sie funktionieren, enthält unser einfaches Demo das folgende Beispiel:

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

Wie Sie sehen können, bietet das [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent) Objekt zwei nützliche Eigenschaften — [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display), das eine Referenz auf das [`VRDisplay`](/de/docs/Web/API/VRDisplay) enthält, auf das das Ereignis reagierte, und [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason), das einen menschenlesbaren Grund enthält, warum das Ereignis ausgelöst wurde.

Dies ist ein sehr nützliches Ereignis; Sie könnten es nutzen, um Fälle zu behandeln, bei denen das Display unerwartet getrennt wird, um zu verhindern, dass Fehler ausgelöst werden, und um sicherzustellen, dass der Benutzer über die Situation informiert ist. In Googles webvr.info Präsentations-Demo wird das Ereignis verwendet, um eine [`onVRPresentChange()` Funktion](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174) auszuführen, die die UI-Steuerelemente geeignet aktualisiert und die Leinwandgröße anpasst.

## Zusammenfassung

Dieser Artikel hat Ihnen die Grundlagen vermittelt, wie man eine einfache WebVR 1.1-App erstellt, um Ihnen den Einstieg zu erleichtern.
