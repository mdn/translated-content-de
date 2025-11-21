---
title: Verwenden der WebVR API
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

{{DefaultAPISidebar("WebVR API")}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, wurde in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte eine geringe Anzahl von Geräten.

Die WebVR API ist eine fantastische Ergänzung für das Werkzeugkit eines Webentwicklers, die es ermöglicht, WebGL-Szenen in Virtual-Reality-Displays wie dem Oculus Rift und HTC Vive anzuzeigen. Aber wie beginnt man mit der Entwicklung von VR-Anwendungen für das Web? Dieser Artikel wird Sie durch die Grundlagen führen.

## Erste Schritte

Um zu beginnen, benötigen Sie:

- Unterstützende VR-Hardware.
  - Die günstigste Option besteht darin, ein mobiles Gerät, einen unterstützenden Browser und eine Gerätehalterung (z. B. Google Cardboard) zu verwenden. Dies ist nicht ganz so gut wie dedizierte Hardware, aber Sie müssen keinen leistungsstarken Computer oder ein dediziertes VR-Display kaufen.
  - Dedizierte Hardware kann teuer sein, bietet jedoch eine bessere Erfahrung. Die derzeit am besten mit WebVR kompatiblen Hardware ist die HTC VIVE und das Oculus Rift. Die Startseite von [webvr.info](https://webvr.info/) enthält weitere nützliche Informationen über verfügbare Hardware und welche Browser sie unterstützen.

- Einen Computer, der leistungsfähig genug ist, um das Rendern/Darstellen von VR-Szenen mit Ihrer dedizierten VR-Hardware zu bewältigen, falls erforderlich. Um eine Vorstellung davon zu bekommen, was Sie benötigen, werfen Sie einen Blick auf den entsprechenden Leitfaden für das VR, das Sie kaufen (z. B. [VIVE READY Computers](https://www.vive.com/us/vive-ready/)).
- Einen unterstützenden Browser installiert — der neueste [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/) oder [Chrome](https://www.google.com/chrome/index.html) sind derzeit die besten Optionen auf dem Desktop oder mobilen Geräten.

Sobald Sie alles zusammengebaut haben, können Sie testen, ob Ihr Setup mit WebVR funktioniert, indem Sie zu unserem [einfachen A-Frame-Demo](https://mdn.github.io/webvr-tests/webvr/aframe-demo/) gehen und prüfen, ob die Szene gerendert wird und ob Sie in den VR-Anzeigemodus wechseln können, indem Sie die Schaltfläche unten rechts drücken.

[A-Frame](https://aframe.io/) ist mit Abstand die beste Option, wenn Sie schnell eine WebVR-kompatible 3D-Szene erstellen möchten, ohne eine Menge neuer JavaScript-Code verstehen zu müssen. Es lehrt jedoch nicht, wie die rohe WebVR API funktioniert, und das werden wir als Nächstes behandeln.

## Einführung in unser Demo

Um zu veranschaulichen, wie die WebVR API funktioniert, werden wir unser raw-webgl-Beispielstudieren, das etwa so aussieht:

![Ein grauer rotierender 3D-Würfel](capture1.png)

> [!NOTE]
> Sie finden den [Quellcode unseres Demos](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) auf GitHub und können es auch [live ansehen](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example/).

> [!NOTE]
> Wenn WebVR in Ihrem Browser nicht funktioniert, müssen Sie möglicherweise sicherstellen, dass es über Ihre Grafikkarte läuft. Zum Beispiel bei NVIDIA-Karten, wenn Sie das NVIDIA-Kontrollpanel erfolgreich eingerichtet haben, gibt es eine Kontextmenüoption — klicken Sie mit der rechten Maustaste auf Firefox und wählen Sie _Mit Grafikprozessor ausführen > Hochleistungs-NVIDIA-Prozessor_.

Unser Demo präsentiert den heiligen Gral der WebGL-Demos — einen rotierenden 3D-Würfel. Dies haben wir mit rohem [WebGL API](/de/docs/Web/API/WebGL_API) Code umgesetzt. Wir werden keine grundlegenden JavaScript- oder WebGL-Techniken lehren, nur die WebVR-Teile.

Unser Demo enthält außerdem:

- Eine Schaltfläche zum Starten (und Beenden) der Präsentation unserer Szene auf dem VR-Display.
- Eine Schaltfläche zum Anzeigen (und Verbergen) von VR-Pose-Daten, d.h. der Position und Ausrichtung des Headsets, die in Echtzeit aktualisiert werden.

Wenn Sie den Quellcode der [JavaScript-Hauptdatei unseres Demos](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) durchsehen, können Sie die WebVR-spezifischen Teile leicht finden, indem Sie nach dem String "WebVR" in den vorangestellten Kommentaren suchen.

> [!NOTE]
> Um mehr über Grundlagen von JavaScript und WebGL zu erfahren, konsultieren Sie unser [JavaScript-Lernmaterial](/de/docs/Learn_web_development/Core/Scripting) und unser [WebGL Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

## Wie funktioniert es?

An diesem Punkt wollen wir uns ansehen, wie die WebVR-Teile des Codes funktionieren.

Eine typische (einfache) WebVR-App funktioniert so:

1. [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) wird verwendet, um eine Referenz zu Ihrem VR-Display zu erhalten.
2. [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) wird verwendet, um mit dem Präsentieren auf dem VR-Display zu beginnen.
3. Die spezielle [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame)-Methode von WebVR wird verwendet, um die Render-Schleife der App mit der richtigen Bildwiederholrate für das Display auszuführen.
4. In der Render-Schleife holen Sie sich die Daten, die zur Darstellung des aktuellen Frames erforderlich sind ([`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)), zeichnen die dargestellte Szene zweimal — einmal für die Ansicht in jedem Auge — und übergeben dann die gerenderte Ansicht an das Display, um sie dem Benutzer anzuzeigen ([`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame)).

In den folgenden Abschnitten werden wir unser raw-webgl-Demo im Detail betrachten und sehen, wo genau die oben genannten Funktionen verwendet werden.

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

- `frameData` enthält ein [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt, das mit dem [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData)-Konstruktor erstellt wurde. Dieses ist zunächst leer, wird jedoch später die Daten enthalten, die zum Rendern jedes Frames benötigt werden, um im VR-Display angezeigt zu werden, ständig aktualisiert, während die Render-Schleife läuft.
- `vrDisplay` startet nicht initialisiert, wird später jedoch eine Referenz auf unser VR-Headset halten ([`VRDisplay`](/de/docs/Web/API/VRDisplay) — das zentrale Steuerobjekt der API).
- `btn` und `poseStatsBtn` halten Referenzen auf die beiden Schaltflächen, die wir zur Steuerung unserer App verwenden.
- `normalSceneFrame` und `vrSceneFrame` starten nicht initialisiert, werden später jedoch Referenzen auf [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) und [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame)-Aufrufe halten — diese werden das Laufen einer normalen Render-Schleife und einer speziellen WebVR-Render-Schleife initiieren; wir werden den Unterschied zwischen diesen beiden später erklären.
- Die anderen Variablen speichern Referenzen auf verschiedene Teile der VR-Pose-Datenanzeigebox, die Sie in der unteren rechten Ecke der Benutzeroberfläche sehen können.

### Eine Referenz auf unser VR-Display erhalten

Wir beginnen damit, einen WebGL-Kontext abzurufen, der verwendet wird, um 3D-Grafiken in das {{htmlelement("canvas")}}-Element in [unserem HTML](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) zu rendern. Dann überprüfen wir, ob der `gl`-Kontext verfügbar ist — falls ja, führen wir eine Reihe von Funktionen aus, um die Szene zur Anzeige einzurichten.

```js
const canvas = document.getElementById("gl-canvas");

initWebGL(canvas); // Initialize the GL context

// WebGL setup code here
```

Als Nächstes starten wir den Prozess des tatsächlichen Renderns der Szene auf die Leinwand, indem wir die Leinwand so einstellen, dass sie den gesamten Browser-Viewport ausfüllt, und die Render-Schleife (`drawScene()`) zum ersten Mal ausführen. Dies ist die nicht-WebVR — normale — Render-Schleife.

```js
// draw the scene normally, without WebVR - for those who don't have it and want to see the scene in their browser

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

Nun zum ersten WebVR-spezifischen Code. Zuerst überprüfen wir, ob [`Navigator.getVRDisplays`](/de/docs/Web/API/Navigator/getVRDisplays) existiert — dies ist der Einstiegspunkt in die API und daher eine gute grundlegende Funktionserkennung für WebVR. Falls dies nicht existiert, protokollieren wir eine Meldung, dass WebVR 1.1 nicht vom Browser unterstützt wird.

```js
// WebVR: Check to see if WebVR is supported
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 supported");
  // ...
} else {
  console.log("WebVR API not supported by this browser.");
}
```

Der Rest des Codes geht in den `if (navigator.getVRDisplays) { }`-Block, damit er nur ausgeführt wird, wenn WebVR unterstützt wird.

Wir führen zuerst die Funktion [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) aus. Diese gibt ein Versprechen zurück, das mit einem Array erfüllt wird, das alle an den Computer angeschlossenen VR-Display-Geräte enthält. Wenn keine angeschlossen sind, ist das Array leer.

Im Versprechen-`then()`-Block überprüfen wir, ob die Arraylänge größer als 0 ist; wenn ja, setzen wir den Wert unserer `vrDisplay`-Variablen auf das Element im Index 0 innerhalb des Arrays. `vrDisplay` enthält nun ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt, das unser angeschlossenes Display repräsentiert!

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

Der Rest des Codes geht in den `if (displays.length > 0) { }`-Block, damit er nur ausgeführt wird, wenn mindestens ein VR-Display verfügbar ist.

> [!NOTE]
> Es ist unwahrscheinlich, dass Sie mehrere VR-Displays an Ihren Computer angeschlossen haben, und dies ist nur ein einfaches Demo, also reicht das für den Moment.

### Starten und Stoppen der VR-Präsentation

Nun, da wir ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt haben, können wir damit eine Reihe von Dingen tun. Das Nächste, was wir tun möchten, ist, die Funktionalität zum Starten und Stoppen der Präsentation des WebGL-Inhalts auf dem Display zu verkabeln.

Fortsetzend mit dem vorherigen Codeblock fügen wir nun einen Ereignis-Listener zu unserer Start/Stopp-Schaltfläche (`btn`) hinzu — wenn diese Schaltfläche geklickt wird, möchten wir überprüfen, ob wir bereits auf das Display präsentieren (dies tun wir auf ziemlich dumme Weise, indem wir prüfen, was [`textContent`](/de/docs/Web/API/Node/textContent) der Schaltfläche enthält).

Falls das Display noch nicht präsentiert, verwenden wir die Methode [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent), um den Browser zu bitten, mit der Darstellung von Inhalten auf dem Display zu beginnen. Diese nimmt als Parameter ein Array von [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Objekten entgegen, die die Ebenen repräsentieren, die Sie im Display präsentieren möchten.

Da die maximale Anzahl an Ebenen derzeit 1 ist und das einzige erforderliche Objektmitglied die [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source)-Eigenschaft ist (die eine Referenz auf das {{htmlelement("canvas")}} ist, das Sie in dieser Ebene präsentieren möchten; die anderen Parameter haben sinnvolle Standardwerte — siehe [`leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) und [`rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds))), besteht der Parameter aus `[{ source: canvas }]`.

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

Mit unserem erfolgreichen Präsentationsantrag wollen wir nun beginnen, Inhalte darzustellen, um sie auf dem VRDisplay darzustellen. Zuerst setzen wir die Leinwand auf die gleiche Größe wie den VR-Display-Bereich. Dies tun wir, indem wir die [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) für beide Augen mit [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) abrufen.

Dann führen wir eine einfache Berechnung durch, um die Gesamtbreite des VRDisplay-Renderbereichs basierend auf der Augen-`[VREyeParameters.renderWidth](/de/docs/Web/API/VREyeParameters/renderWidth)` und `[VREyeParameters.renderHeight](/de/docs/Web/API/VREyeParameters/renderHeight)` zu berechnen.

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

Als Nächstes [stornieren wir die Animationsschleife](/de/docs/Web/API/Window/cancelAnimationFrame), die zuvor vom [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Aufruf in der Funktion `drawScene()` gestartet wurde, und rufen stattdessen `drawVRScene()` auf. Diese Funktion rendert dieselbe Szene wie zuvor, jedoch mit etwas speziellem WebVR-Magie. Die Schleife innerhalb hiervon wird von WebVRs spezieller [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame)-Methode aufrecht erhalten.

```js
vrDisplay.requestPresent([{ source: canvas }]).then(() => {
  // ...
  // stop the normal presentation, and start the vr presentation
  window.cancelAnimationFrame(normalSceneFrame);
  drawVRScene();
  // ...
});
```

Schließlich aktualisieren wir den Text der Schaltfläche, damit beim nächsten Drücken die Präsentation auf das VR-Display beendet wird.

```js
vrDisplay.requestPresent([{ source: canvas }]).then(() => {
  // ...
  btn.textContent = "Exit VR display";
});
```

Um die VR-Präsentation zu stoppen, wenn die Schaltfläche anschließend gedrückt wird, rufen wir [`VRDisplay.exitPresent()`](/de/docs/Web/API/VRDisplay/exitPresent) auf. Wir umkehren auch den Textinhalt der Schaltfläche und tauschen die `requestAnimationFrame`-Aufrufe. Sie sehen hier, dass wir verwenden [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame), um die VR-Render-Schleife zu stoppen und die normale Render-Schleife erneut zu starten, indem wir `drawScene()` aufrufen.

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

Sobald die Präsentation beginnt, können Sie die stereoskopische Ansicht im Browser sehen:

![Stereoskopische Ansicht des 3D-Würfels](capture2.png)

Unten erfahren Sie, wie die stereoskopische Ansicht tatsächlich erzeugt wird.

### Warum hat WebVR seine eigene requestAnimationFrame()?

Das ist eine gute Frage. Der Grund ist, dass für eine flüssige Darstellung im VR-Display Sie den Inhalt mit der nativen Bildwiederholrate des Displays rendern müssen, nicht mit der des Computers. Die Bildwiederholraten von VR-Displays sind höher als die von PCs, typischerweise bis zu 90fps. Die Rate wird sich von der Kern-Bildwiederholrate des Computers unterscheiden.

Beachten Sie, dass, wenn das VR-Display nicht präsentiert, [`VRDisplay.requestAnimationFrame`](/de/docs/Web/API/VRDisplay/requestAnimationFrame) identisch zu [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) läuft, sodass Sie, wenn Sie wollten, nur eine einzige Render-Schleife verwenden könnten, anstatt der zwei, die wir in unserer App verwenden. Wir haben zwei verwendet, weil wir je nachdem, ob das VR-Display präsentiert oder nicht, leicht unterschiedliche Dinge tun wollten und die Dinge zur besseren Verständlichkeit getrennt halten wollten.

### Rendern und Darstellung

An dieser Stelle haben wir alle erforderlichen Code gesehen, um auf die VR-Hardware zuzugreifen, zu erwarten, dass wir unsere Szene auf die Hardware präsentieren, und starten das Laufen der Render-Schleife. Sehen wir uns jetzt den Code für die Render-Schleife an und erklären, wie die WebVR-spezifischen Teile davon funktionieren.

Zuerst beginnen wir mit der Definition unserer Render-Schleifenfunktion — `drawVRScene()`. Das erste, was wir hier drinnen machen, ist ein Aufruf zu [`VRDisplay.requestAnimationFrame()`](/de/docs/Web/API/VRDisplay/requestAnimationFrame), um die Schleife weiterlaufen zu lassen, nachdem sie einmal aufgerufen wurde (dies geschah früher in unserem Code, als wir begannen, auf das VR-Display zu präsentieren). Dieser Aufruf wird als Wert der globalen `vrSceneFrame`-Variablen gesetzt, sodass wir die Schleife mit einem Aufruf zu [`VRDisplay.cancelAnimationFrame`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) stoppen können, sobald wir das VR-Präsentieren verlassen.

```js
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
  // ...
}
```

Als Nächstes rufen wir [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) auf und übergeben den Namen der Variablen, die wir verwenden wollen, um die Frame-Daten zu enthalten. Dies haben wir früher initialisiert — `frameData`. Nach Abschluss des Aufrufs enthält diese Variable die Daten, die benötigt werden, um den nächsten Frame auf das VR-Gerät zu rendern, verpackt in ein [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt. Dieses enthält Dinge wie Projektions- und Ansichtsmatrizen zum korrekten Rendern der Szene für die linke und rechte Ansicht, sowie das aktuelle [`VRPose`](/de/docs/Web/API/VRPose)-Objekt, das Daten auf das VR-Display enthält, wie Orientierung, Position etc.

Dies muss bei jedem Frame aufgerufen werden, damit die gerenderte Ansicht immer auf dem neuesten Stand ist.

```js
function drawVRScene() {
  // ...
  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);
  // ...
}
```

Nun rufen wir das aktuelle [`VRPose`](/de/docs/Web/API/VRPose) von der [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose)-Eigenschaft ab, speichern die Position und Orientierung zur späteren Verwendung und senden die aktuelle Pose an die Pose-Stats-Box zur Anzeige, wenn die `poseStatsDisplayed`-Variable auf true gesetzt ist.

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

Wir löschen nun die Leinwand, bevor wir darauf zeichnen, damit der nächste Frame deutlich zu sehen ist und wir nicht auch vorherige gerenderte Frames sehen:

```js
function drawVRScene() {
  // ...
  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  // ...
}
```

Jetzt rendern wir die Ansicht für beide Augen. Zuerst müssen wir Projektions- und Ansichtsortationen für die Verwendung im Rendering erstellen. Diese sind [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekte, die mit der [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)-Methode erstellt werden, indem man ihr die Identifizierung des Shader-Programms und einen Identifikationsnamen als Parameter übergibt.

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

- Angabe der Viewport-Größe für das linke Auge, mit [`WebGLRenderingContext.viewport`](/de/docs/Web/API/WebGLRenderingContext/viewport) — dies ist logisch die erste Hälfte der Leinwandbreite und die vollständige Leinwandhöhe.
- Angabe der Projektions- und Ansichtsmatrixwerte, die zum Rendern des linken Auges verwendet werden sollen — dies geschieht mit der [`WebGLRenderingContext.uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix)-Methode, der die Standort-Werte übergeben werden, die wir oben abgerufen haben, und die linken Matrizen aus dem [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekt.
- Ausführen der `drawGeometry()`-Funktion, die die tatsächliche Szene rendert — aufgrund dessen, was wir in den vorhergehenden zwei Schritten spezifiziert haben, werden wir sie nur für das linke Auge rendern.

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

Jetzt machen wir genau dasselbe, aber für das rechte Auge:

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

Als Nächstes definieren wir unsere `drawGeometry()`-Funktion. Die meisten davon sind allgemeine WebGL-Codes, die erforderlich sind, um unseren 3D-Würfel zu zeichnen. Sie werden einige WebVR-spezifische Teile in den `mvTranslate()`- und `mvRotate()`-Funktionsaufrufen sehen — diese übergeben Matrizen an das WebGL-Programm, die die Übersetzung und Drehung des Würfels für den aktuellen Frame definieren.

Sie werden sehen, dass wir diese Werte mit der Position (`curPos`) und der Orientierung (`curOrient`) des VR-Displays ändern, die wir vom [`VRPose`](/de/docs/Web/API/VRPose)-Objekt erhalten haben. Das Ergebnis ist, dass, wenn Sie z. B. Ihren Kopf nach links bewegen oder drehen, der x-Positionswert (`curPos[0]`) und der y-Drehwert (`curOrient[1]`) zum x-Übersetzungswert addiert werden, wodurch sich der Würfel nach rechts bewegt, wie man es erwartet, wenn man etwas anschaut und dann den Kopf nach links bewegt/dreht.

Dies ist eine schnelle und schmutzige Möglichkeit, VR-Pose-Daten zu verwenden, aber es illustriert das grundlegende Prinzip.

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

Der nächste Teil des Codes hat nichts mit WebVR zu tun — er aktualisiert einfach die Drehung des Würfels bei jedem Frame:

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

Der letzte Teil der Render-Schleife umfasst uns das Aufrufen von [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) — nun, da alle Arbeit getan ist und wir die Anzeige auf der {{htmlelement("canvas")}} gerendert haben, wird diese Methode dann den Frame an das VR-Display übergeben, sodass er dort ebenfalls angezeigt wird.

```js
function drawVRScene() {
  // ...
  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

### Darstellung der Pose (Position, Ausrichtung usw.)-Daten

In diesem Abschnitt werden wir die `displayPoseStats()`-Funktion besprechen, die unsere aktualisierten Pose-Daten bei jedem Frame anzeigt. Die Funktion ist ziemlich einfach.

Zuerst speichern wir die sechs verschiedenen Eigenschaftswerte, die vom [`VRPose`](/de/docs/Web/API/VRPose)-Objekt erhältlich sind, in ihren eigenen Variablen — jede davon ist ein {{jsxref("Float32Array")}}.

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

Dann schreiben wir die Daten in die Informationsbox, indem wir sie bei jedem Frame aktualisieren. Wir haben jeden Wert auf drei Dezimalstellen mit [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) begrenzt, da die Werte sonst schwer zu lesen sind.

Sie sollten beachten, dass wir einen Bedingungsausdruck verwendet haben, um zu erkennen, ob die Arrays für lineare Beschleunigung und Winkelbeschleunigung erfolgreich zurückgegeben werden, bevor wir die Daten anzeigen. Diese Werte werden von den meisten VR-Hardware noch nicht gemeldet, sodass der Code einen Fehler werfen würde, wenn wir dies nicht tun würden (die Arrays geben `null` zurück, wenn sie nicht erfolgreich gemeldet werden).

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

Die WebVR-Spezifikation umfasst eine Reihe von Ereignissen, die ausgelöst werden, sodass unser App-Code auf Änderungen im Zustand des VR-Displays reagieren kann (siehe [Fensterereignisse](/de/docs/Web/API/WebVR_API#window_events)). Zum Beispiel:

- [`vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) — Wird ausgelöst, wenn sich der Präsentationsstatus eines VR-Displays ändert — d.h. wenn es von präsentierend zu nicht präsentierend wechselt oder umgekehrt.
- [`vrdisplayconnect`](/de/docs/Web/API/Window/vrdisplayconnect_event) — Wird ausgelöst, wenn ein kompatibles VR-Display an den Computer angeschlossen wurde.
- [`vrdisplaydisconnect`](/de/docs/Web/API/Window/vrdisplaydisconnect_event) — Wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.

Um zu demonstrieren, wie sie funktionieren, enthält unser einfaches Demo folgendes Beispiel:

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

Wie Sie sehen, bietet das [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)-Objekt zwei nützliche Eigenschaften — [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display), das eine Referenz auf das [`VRDisplay`](/de/docs/Web/API/VRDisplay) enthält, auf das das Ereignis reagiert, und [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason), das einen menschenlesbaren Grund enthält, warum das Ereignis ausgelöst wurde.

Dies ist ein sehr nützliches Ereignis; Sie könnten es verwenden, um Fälle zu behandeln, in denen das Display unerwartet getrennt wird, um zu verhindern, dass Fehler auftreten, und sicherzustellen, dass der Benutzer über die Situation informiert wird. Im Google's webvr.info-Präsentations-Demo wird das Ereignis verwendet, um eine [`onVRPresentChange()`-Funktion](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174) auszuführen, die die UI-Steuerungen entsprechend aktualisiert und die Leinwand skaliert.

## Zusammenfassung

Dieser Artikel hat Ihnen die Grundlagen gegeben, um eine einfache WebVR 1.1-App zu erstellen, um Ihnen den Einstieg zu erleichtern.
