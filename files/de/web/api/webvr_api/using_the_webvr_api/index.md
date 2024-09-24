---
title: Verwendung der WebVR-API
slug: Web/API/WebVR_API/Using_the_WebVR_API
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Die WebVR-API wurde durch die [WebXR-API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte eine kleine Anzahl von Geräten.

Die WebVR-API ist eine großartige Ergänzung zum Werkzeugkasten eines Webentwicklers und ermöglicht es, WebGL-Szenen in Virtual-Reality-Anzeigen wie Oculus Rift und HTC Vive zu präsentieren. Aber wie beginnen Sie mit der Entwicklung von VR-Apps für das Web? Dieser Artikel wird Sie durch die Grundlagen führen.

## Erste Schritte

Um loszulegen, benötigen Sie:

- Unterstützende VR-Hardware.

  - Die günstigste Option ist die Verwendung eines mobilen Geräts, eines unterstützenden Browsers und einer Gerätehalterung (z.B. Google Cardboard). Dies bietet nicht ganz so ein gutes Erlebnis wie dedizierte Hardware, aber Sie müssen keinen leistungsstarken Computer oder dedizierte VR-Anzeige kaufen.
  - Dedizierte Hardware kann teuer sein, bietet jedoch ein besseres Erlebnis. Die am meisten WebVR-kompatible Hardware ist derzeit das HTC VIVE und das Oculus Rift. Die Startseite von [webvr.info](https://webvr.info/) enthält einige weitere nützliche Informationen über verfügbare Hardware und welche Browser diese unterstützen.

- Einen Computer, der leistungsstark genug ist, um VR-Szenen mithilfe Ihrer dedizierten VR-Hardware darzustellen/anzuzeigen, falls erforderlich. Um eine Vorstellung davon zu bekommen, was Sie benötigen, sehen Sie sich den entsprechenden Leitfaden für das VR-Gerät an, das Sie kaufen (z.B. [VIVE READY-Computer](https://www.vive.com/us/vive-ready/)).
- Einen unterstützenden Browser installiert — die neueste [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder [Chrome](https://www.google.com/chrome/index.html) sind momentan Ihre besten Optionen, sowohl auf dem Desktop als auch mobil.

Sobald Sie alles zusammengebaut haben, können Sie testen, ob Ihr Setup mit WebVR funktioniert, indem Sie zu unserem [einfachen A-Frame-Demo](https://mdn.github.io/webvr-tests/webvr/aframe-demo/) gehen und prüfen, ob die Szene gerendert wird und ob Sie in den VR-Anzeigemodus gelangen, indem Sie die Schaltfläche unten rechts drücken.

[A-Frame](https://aframe.io/) ist mit Abstand die beste Option, wenn Sie schnell eine WebVR-kompatible 3D-Szene erstellen möchten, ohne eine Menge neuer JavaScript-Code verstehen zu müssen. Es zeigt Ihnen jedoch nicht, wie die rohe WebVR-API funktioniert, und darum werden wir uns als Nächstes kümmern.

## Einführung in unser Demo

Um zu veranschaulichen, wie die WebVR-API funktioniert, studieren wir unser raw-webgl-example, das ungefähr so aussieht:

![Ein grauer rotierender 3D-Würfel](capture1.png)

> [!NOTE]
> Den [Quellcode unseres Demos](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) finden Sie auf GitHub, und Sie können es auch [live ansehen](https://mdn.github.io/webvr-tests/webvr/raw-webgl-example/).

> [!NOTE]
> Wenn WebVR in Ihrem Browser nicht funktioniert, müssen Sie möglicherweise sicherstellen, dass es über Ihre Grafikkarte läuft. Zum Beispiel bei NVIDIA-Karten, wenn Sie das NVIDIA-Kontrollfeld erfolgreich eingerichtet haben, gibt es eine Kontextmenüoption — klicken Sie mit der rechten Maustaste auf Firefox und wählen Sie dann _Mit Grafikprozessor ausführen > NVIDIA-Hochleistungsprozessor_.

Unser Demo enthält das „Heilige Gral“ der WebGL-Demos — einen rotierenden 3D-Würfel. Dies haben wir mit rohem [WebGL API](/de/docs/Web/API/WebGL_API)-Code implementiert. Wir werden keinen Basis-JavaScript- oder WebGL-Code lehren, nur die WebVR-Teile.

Unser Demo enthält auch:

- Eine Schaltfläche, um unsere Szene zu starten (und zu stoppen), die in der VR-Anzeige präsentiert wird.
- Eine Schaltfläche, um VR-Posendaten anzuzeigen (und zu verbergen), d.h. die Position und Orientierung des Headsets, in Echtzeit aktualisiert.

Wenn Sie den Quellcode der [Haupt-JavaScript-Datei unseres Demos](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) durchsehen, können Sie die spezifischen WebVR-Teile leicht finden, indem Sie nach dem String "WebVR" in vorausgehenden Kommentaren suchen.

> [!NOTE]
> Um mehr über grundlegendes JavaScript und WebGL zu erfahren, konsultieren Sie unser [JavaScript-Lernmaterial](/de/docs/Learn/JavaScript), und unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

## Wie funktioniert es?

An diesem Punkt betrachten wir, wie die WebVR-Teile des Codes funktionieren.

Eine typische (einfache) WebVR-App funktioniert wie folgt:

1. {{domxref("Navigator.getVRDisplays()")}} wird verwendet, um eine Referenz auf Ihr VR-Display zu erhalten.
2. {{domxref("VRDisplay.requestPresent()")}} wird verwendet, um mit der Präsentation auf dem VR-Display zu beginnen.
3. WebVR's dedizierte {{domxref("VRDisplay.requestAnimationFrame()")}}-Methode wird verwendet, um die Rendering-Schleife der App mit der richtigen Bildwiederholfrequenz für das Display laufen zu lassen.
4. Innerhalb der Rendering-Schleife erfassen Sie die Daten, die zum Anzeigen des aktuellen Frames erforderlich sind ({{domxref("VRDisplay.getFrameData()")}}), zeichnen die dargestellten Szene zweimal — einmal für die Ansicht in jedem Auge — und reichen dann die gerenderte Ansicht an das Display ein, um sie dem Benutzer zu zeigen (über {{domxref("VRDisplay.submitFrame()")}}).

In den unten stehenden Abschnitten schauen wir uns unser raw-webgl-demo im Detail an und sehen genau, wo die oben genannten Funktionen verwendet werden.

### Beginn mit einigen Variablen

Den ersten WebVR-bezogenen Code, den Sie treffen werden, ist der folgende Block:

```js
// WebVR-Variablen

const frameData = new VRFrameData();
let vrDisplay;
const btn = document.querySelector(".stop-start");
let normalSceneFrame;
let vrSceneFrame;

const poseStatsBtn = document.querySelector(".pose-stats");
const poseStatsSection = document.querySelector("section");
poseStatsSection.style.visibility = "hidden"; // initial wird es ausgeblendet

const posStats = document.querySelector(".pos");
const orientStats = document.querySelector(".orient");
const linVelStats = document.querySelector(".lin-vel");
const linAccStats = document.querySelector(".lin-acc");
const angVelStats = document.querySelector(".ang-vel");
const angAccStats = document.querySelector(".ang-acc");
let poseStatsDisplayed = false;
```

Lassen Sie uns dies kurz erklären:

- `frameData` enthält ein {{domxref("VRFrameData")}}-Objekt, das mit dem {{domxref("VRFrameData.VRFrameData", "VRFrameData()")}}-Konstruktor erstellt wurde. Dies ist zunächst leer, enthält aber später die zum Rendern jedes Frames erforderlichen Daten, die in der VR-Anzeige angezeigt werden sollen und wird ständig aktualisiert, während die Rendering-Schleife läuft.
- `vrDisplay` beginnt nicht initialisiert, wird später aber eine Referenz auf unser VR-Headset halten ({{domxref("VRDisplay")}} — das zentrale Kontrollobjekt der API).
- `btn` und `poseStatsBtn` halten Referenzen zu den beiden Schaltflächen, die wir zur Steuerung unserer App verwenden.
- `normalSceneFrame` und `vrSceneFrame` starten nicht initialisiert, halten aber später Referenzen zu {{domxref("Window.requestAnimationFrame()")}} und {{domxref("VRDisplay.requestAnimationFrame()")}}-Aufrufen — diese werden die Ausführung einer normalen Rendering-Schleife und einer speziellen WebVR-Rendering-Schleife initiieren; den Unterschied zwischen diesen beiden werden wir später erklären.
- Die anderen Variablen speichern Referenzen auf verschiedene Teile des VR-Posendaten-Anzeigefelds, das Sie in der unteren rechten Ecke der Benutzeroberfläche sehen können.

### Eine Referenz auf unser VR-Display erhalten

Eine der Hauptfunktionen in unserem Code ist `start()` — wir führen diese Funktion aus, wenn der Body das Laden beendet hat:

```js
// start
//
// Wird aufgerufen, wenn der Body geladen ist und erstellt wird, um den Ball ins Rollen zu bringen.

document.body.onload = start;
```

Um zu beginnen, holt `start()` einen WebGL-Kontext ab, um 3D-Grafiken in das {{htmlelement("canvas")}}-Element in [unserem HTML](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/index.html) zu rendern. Dann überprüfen wir, ob der `gl`-Kontext verfügbar ist — falls ja, führen wir eine Anzahl von Funktionen aus, um die Szene zur Anzeige einzurichten.

```js
function start() {
  canvas = document.getElementById("glcanvas");

  initWebGL(canvas);      // Initialisiert den GL-Kontext

  // WebGL-Setup-Code hier
```

Als Nächstes beginnen wir mit dem Prozess des tatsächlichen Renderns der Szene auf der Leinwand, in dem wir die Leinwand so einstellen, dass sie den gesamten Browser-Viewport füllt, und die Rendering-Schleife (`drawScene()`) zum ersten Mal ausführen. Dies ist die nicht-WebVR — normale — Rendering-Schleife.

```js
// Zeichnen Sie die Szene normal, ohne WebVR - für diejenigen, die es nicht haben und die Szene in ihrem Browser sehen möchten

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();
```

Jetzt zum ersten WebVR-spezifischen Code. Zuerst überprüfen wir, ob {{domxref("Navigator.getVRDisplays")}} existiert — dies ist der Einstiegspunkt in die API und daher eine gute grundlegende Funktionsfähigkeitserkennung für WebVR. Sie werden am Ende des Blocks (innerhalb der `else`-Klausel) sehen, dass wir, wenn dies nicht existiert, eine Nachricht protokollieren, um anzuzeigen, dass WebVR 1.1 nicht vom Browser unterstützt wird.

```js
  // WebVR: Überprüfen Sie, ob WebVR unterstützt wird
  if (navigator.getVRDisplays) {
    console.log('WebVR 1.1 unterstützt');
```

Innerhalb unseres `if () { }`-Blocks führen wir die {{domxref("Navigator.getVRDisplays()")}}-Funktion aus. Diese gibt ein Versprechen zurück, das mit einem Array gefüllt wird, das alle mit dem Computer verbundenen VR-Displaygeräte enthält. Wenn keine angeschlossen sind, ist das Array leer.

```js
    // Holen Sie dann die an den Computer angeschlossenen Anzeigen
    navigator.getVRDisplays().then((displays) => {
```

Innerhalb des `then()`-Block des Versprechens überprüfen wir, ob die Array-Länge mehr als 0 ist; wenn ja, setzen wir den Wert unserer `vrDisplay`-Variablen auf das Element mit dem Index 0 im Array. `vrDisplay` enthält jetzt ein {{domxref("VRDisplay")}}-Objekt, das unsere angeschlossene Anzeige repräsentiert!

```js
      // Wenn eine Anzeige verfügbar ist, verwenden Sie sie, um die Szene zu präsentieren
      if (displays.length > 0) {
        vrDisplay = displays[0];
        console.log('Anzeige gefunden');
```

> [!NOTE]
> Es ist unwahrscheinlich, dass Sie mehrere VR-Displays an Ihren Computer angeschlossen haben, und dies ist nur ein einfaches Demo, daher reicht dies vorerst aus.

### Starten und Stoppen der VR-Präsentation

Jetzt, da wir ein {{domxref("VRDisplay")}}-Objekt haben, können wir es verwenden, um eine Anzahl von Dingen zu erledigen. Das nächste, was wir tun möchten, ist, Funktionalitäten zu verdrahten, um die Präsentation der WebGL-Inhalte auf dem Display zu starten und zu stoppen.

Wir setzen den vorherigen Codeblock fort und fügen nun einen Ereignislistener zu unserer Start/Stopp-Schaltfläche (`btn`) hinzu — wenn diese Schaltfläche geklickt wird, möchten wir überprüfen, ob wir bereits an das Display präsentieren (wir tun dies auf recht primitive Weise, indem wir prüfen, was die Schaltfläche [`textContent`](/de/docs/Web/API/Node/textContent) enthält).

Wenn das Display noch nicht präsentiert, verwenden wir die {{domxref("VRDisplay.requestPresent()")}}-Methode, um den Browser zu bitten, mit der Präsentation von Inhalten auf dem Display zu beginnen. Diese nimmt als Parameter ein Array der {{domxref("VRLayerInit")}}-Objekte, die die Ebenen darstellen, die Sie im Display präsentieren möchten.

Da die maximale Anzahl von Ebenen, die Sie darstellen können, derzeit 1 ist und das einzige erforderliche Objektmitglied die {{domxref("VRLayerInit.source")}}-Eigenschaft ist (die eine Referenz auf das {{htmlelement("canvas")}} ist, das Sie in dieser Ebene präsentieren möchten; die anderen Parameter haben sinnvolle Standardwerte — siehe {{domxref("VRLayerInit.leftBounds", "leftBounds")}} und {{domxref("VRLayerInit.rightBounds", "rightBounds")}})), ist der Parameter \[{ source: canvas }].

`requestPresent()` gibt ein Versprechen zurück, das erfüllt wird, wenn die Präsentation erfolgreich beginnt.

```js
        // Starten der Präsentation, wenn die Schaltfläche geklickt wird: Sie kann nur als Antwort auf eine Benutzeraktion aufgerufen werden
        btn.addEventListener('click', () => {
          if (btn.textContent === 'Start VR display') {
            vrDisplay.requestPresent([{ source: canvas }]).then(() => {
              console.log('Präsentieren im WebVR-Display');
```

Mit unserem erfolgreichen Präsentationsanforderung möchten wir nun mit der Einrichtung des Renderns von Inhalten beginnen, die im VRDisplay präsentiert werden sollen. Zuerst setzen wir die Leinwand auf die gleiche Größe wie das VR-Display-Fläche. Wir tun dies, indem wir die {{domxref("VREyeParameters")}} für beide Augen mit {{domxref("VRDisplay.getEyeParameters()")}} abfragen.

Wir führen dann eine einfache Berechnung durch, um die Gesamtbreite des VRDisplay-Renderbereichs auf Grundlage der Augeneinstellungen {{domxref("VREyeParameters.renderWidth")}} und {{domxref("VREyeParameters.renderHeight")}} zu berechnen.

```js
// Setzen Sie die Größe der Leinwand auf die Größe der vrDisplay-Ansicht

const leftEye = vrDisplay.getEyeParameters("left");
const rightEye = vrDisplay.getEyeParameters("right");

canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);
```

Als Nächstes [stornieren wir die Animationsschleife](/de/docs/Web/API/Window/cancelAnimationFrame), die zuvor durch den {{domxref("Window.requestAnimationFrame()")}}-Aufruf innerhalb der `drawScene()`-Funktion gestartet wurde, und rufen stattdessen `drawVRScene()` auf. Diese Funktion rendert die gleiche Szene wie zuvor, aber mit einigen speziellen WebVR-Magie. Die Schleife innerhalb hiervon wird von WebVR's spezieller {{domxref("VRDisplay.requestAnimationFrame")}}-Methode beibehalten.

```js
// stoppen Sie die normale Präsentation und starten Sie die VR-Präsentation
window.cancelAnimationFrame(normalSceneFrame);
drawVRScene();
```

Schließlich aktualisieren wir den Button-Text, sodass beim nächsten Drücken die Präsentation an das VR-Display gestoppt wird.

```js
              btn.textContent = 'Exit VR display';
            });
```

Um die VR-Präsentation zu stoppen, wenn die Schaltfläche anschließend erneut gedrückt wird, rufen wir {{domxref("VRDisplay.exitPresent()")}} auf. Wir kehren auch den Textinhalt der Schaltfläche um und tauschen die `requestAnimationFrame`-Aufrufe. Sie können hier sehen, dass wir {{domxref("VRDisplay.cancelAnimationFrame")}} verwenden, um die VR-Rendering-Schleife zu stoppen, und die normale Rendering-Schleife wieder starten, indem wir `drawScene()` aufrufen.

```js
          } else {
            vrDisplay.exitPresent();
            console.log('Präsentation auf WebVR-Display gestoppt');

            btn.textContent = 'Start VR display';

            // Stoppen der VR-Präsentation und Starten der normalen Präsentation
            vrDisplay.cancelAnimationFrame(vrSceneFrame);
            drawScene();
          }
        });
      }
    });
  } else {
    console.log('WebVR-API nicht von diesem Browser unterstützt.');
  }
}
```

Sobald die Präsentation beginnt, können Sie die stereoskopische Ansicht im Browser sehen:

![Stereoskopische Ansicht des 3D-Würfels](capture2.png)

Unten erfahren Sie, wie die stereoskopische Ansicht tatsächlich erzeugt wird.

### Warum hat WebVR sein eigenes requestAnimationFrame()?

Das ist eine gute Frage. Der Grund ist, dass für ein flüssiges Rendering innerhalb des VR-Displays der Inhalt mit der nativen Bildwiederholrate des Displays gerendert werden muss, nicht der des Computers. VR-Display-Bildwiederholraten sind größer als PC-Bildwiederholraten, typischerweise bis zu 90fps. Die Rate wird sich von der Kerngeschwindigkeit der Computergrafikkarte unterscheiden.

Beachten Sie, dass {{domxref("VRDisplay.requestAnimationFrame")}}, wenn das VR-Display nicht präsentiert, identisch mit {{domxref("Window.requestAnimationFrame")}} funktioniert, sodass Sie, wenn Sie möchten, nur eine einzige Rendering-Schleife verwenden könnten anstelle der beiden, die wir in unserer App verwenden. Wir haben zwei verwendet, weil wir leicht unterschiedliche Dinge tun wollten, je nachdem, ob das VR-Display präsentiert oder nicht, und um die Dinge für das Verständnis getrennt zu halten.

### Rendering und Anzeige

An diesem Punkt haben wir den gesamten Code gesehen, der benötigt wird, um auf die VR-Hardware zuzugreifen, zu fordern, dass wir unsere Szene auf der Hardware präsentieren, und die Rendering-Schleife zu starten. Lassen Sie uns nun den Code für die Render-Schleife ansehen und erklären, wie die spezifischen WebVR-Teile darin funktionieren.

Zuerst beginnen wir mit der Definition unserer Rendering-Schleifen-Funktion — `drawVRScene()`. Das erste, was wir hier drinnen tun, ist einen Aufruf von {{domxref("VRDisplay.requestAnimationFrame()")}} zu machen, um die Schleife weiterlaufen zu lassen, nachdem sie einmal aufgerufen wurde (dies geschah früher in unserem Code, als wir mit der Präsentation auf das VR-Display begannen). Dieser Aufruf wird als der Wert der globalen `vrSceneFrame`-Variable festgelegt, sodass wir die Schleife mit einem Aufruf von {{domxref("VRDisplay.cancelAnimationFrame()")}} beenden können, sobald wir aus der VR-Präsentation aussteigen.

```js
function drawVRScene() {
  // WebVR: Fordern Sie den nächsten Frame der Animation an
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);
```

Als Nächstes rufen wir {{domxref("VRDisplay.getFrameData()")}} auf und übergeben den Namen der Variable, die wir verwenden möchten, um die Bilddaten zu enthalten. Wir haben dies früher initialisiert — `frameData`. Nach Abschluss des Aufrufs enthält diese Variable die Daten, die erforderlich sind, um den nächsten Frame auf das VR-Gerät zu rendern, verpackt als ein {{domxref("VRFrameData")}}-Objekt. Dies enthält Dinge wie Projektions- und Ansichts-Matrizen, um die Szene korrekt für das linke und rechte Auge darzustellen, und das aktuelle {{domxref("VRPose")}}-Objekt, das Daten über die VR-Anzeige wie Orientierung, Position etc. enthält.

Dies muss bei jedem Frame aufgerufen werden, damit die gerenderte Ansicht immer auf dem neuesten Stand ist.

```js
// Füllen Sie frameData mit den Daten des nächsten anzuzeigenden Frames
vrDisplay.getFrameData(frameData);
```

Jetzt holen wir die aktuelle {{domxref("VRPose")}} aus der {{domxref("VRFrameData.pose")}}-Eigenschaft, speichern die Position und Orientierung zur späteren Verwendung und senden die aktuelle Pose an das Posendatenfeld zur Anzeige, wenn die `poseStatsDisplayed`-Variable auf true gesetzt ist.

```js
// Sie können die Position, die Orientierung usw. der Anzeige aus der Pose des aktuellen Frames abrufen

const curFramePose = frameData.pose;
const curPos = curFramePose.position;
const curOrient = curFramePose.orientation;
if (poseStatsDisplayed) {
  displayPoseStats(curFramePose);
}
```

Wir leeren nun die Leinwand, bevor wir darauf zeichnen, damit der nächste Frame deutlich sichtbar ist und wir nicht auch frühere gerenderte Frames sehen:

```js
// Leeren Sie die Leinwand, bevor wir darauf zeichnen.

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
```

Wir rendern nun die Ansicht für beide Augen, das linke und das rechte. Zuerst müssen wir Projektions- und Ansichtsorte für die Verwendung beim Rendering erstellen. Dies sind {{domxref("WebGLUniformLocation")}}-Objekte, erstellt mit der {{domxref("WebGLRenderingContext.getUniformLocation()")}}-Methode, der die Kennung des Shader-Programms und ein identifizierender Name als Parameter übergeben werden.

```js
// WebVR: Erstellen Sie die erforderlichen Projektions- und Ansichtsmatrixorte, die erforderlich sind
// für die Übergabe an die Methode uniformMatrix4fv unten

const projectionMatrixLocation = gl.getUniformLocation(
  shaderProgram,
  "projMatrix",
);
const viewMatrixLocation = gl.getUniformLocation(shaderProgram, "viewMatrix");
```

Der nächste Rendering-Schritt beinhaltet:

- Angabe der Viewport-Größe für das linke Auge unter Verwendung von {{domxref("WebGLRenderingContext.viewport")}} — dies ist logischerweise die erste Hälfte der Leinwandbreite und die volle Leinwandhöhe.
- Angabe der Projektions- und Ansichtsmatrixwerte, die verwendet werden sollen, um die Ansicht für das linke Auge zu rendern — dies erfolgt mit der Methode {{domxref("WebGLRenderingContext.uniformMatrix", "WebGLRenderingContext.uniformMatrix4fv")}}, der wir die oben abgerufenen Lagewerte und die aus dem {{domxref("VRFrameData")}}-Objekt erhaltenen linken Matrizen übergeben.
- Die `drawGeometry()`-Funktion auszuführen, die die eigentliche Szene rendert — aufgrund dessen, was wir in den vorherigen beiden Schritten angegeben haben, werden wir sie nur für das linke Auge rendern.

```js
// WebVR: Rendern der Ansicht des linken Auges auf die linke Hälfte der Leinwand
gl.viewport(0, 0, canvas.width * 0.5, canvas.height);
gl.uniformMatrix4fv(
  projectionMatrixLocation,
  false,
  frameData.leftProjectionMatrix,
);
gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.leftViewMatrix);
drawGeometry();
```

Wir machen jetzt genau dasselbe, aber für das rechte Auge:

```js
// WebVR: Rendern der Ansicht des rechten Auges auf die rechte Hälfte der Leinwand
gl.viewport(canvas.width * 0.5, 0, canvas.width * 0.5, canvas.height);
gl.uniformMatrix4fv(
  projectionMatrixLocation,
  false,
  frameData.rightProjectionMatrix,
);
gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.rightViewMatrix);
drawGeometry();
```

Als Nächstes definieren wir unsere `drawGeometry()`-Funktion. Das meiste davon ist lediglich allgemeiner WebGL-Code, der zum Zeichnen unseres 3D-Würfels benötigt wird. Sie werden einige WebVR-spezifische Teile in den Aufrufen der `mvTranslate()`- und `mvRotate()`-Funktionen sehen — diese übergeben Matrizen an das WebGL-Programm, die die Übersetzung und Rotation des Würfels für den aktuellen Frame definieren.

Sie werden sehen, dass wir diese Werte durch die Position (`curPos`) und Orientierung (`curOrient`) der VR-Anzeige ändern, die wir aus dem {{domxref("VRPose")}}-Objekt erhalten haben. Das Ergebnis ist, dass sich beispielsweise, wenn Sie Ihren Kopf nach links bewegen oder drehen, der x-Positionswert (`curPos[0]`) und der y-Rotationswert (`[curOrient[1]`) zum x-Übersetzungswert addieren, was bedeutet, dass der Würfel nach rechts bewegt wird, wie Sie es erwarten würden, wenn Sie etwas beobachten und dann den Kopf nach links bewegen/drehen.

Dies ist ein schneller und einfacher Weg, um VR-Posendaten zu verwenden, verdeutlicht jedoch das Grundprinzip.

```js
function drawGeometry() {
  // Stellen Sie die Perspektive ein, mit der wir die Szene betrachten möchten. Unser Sichtfeld ist 45 Grad, mit einem Breiten-/Höhenverhältnis von 640:480, und wir möchten nur Objekte zwischen 0.1 Einheiten
  // und 100 Einheiten von der Kamera entfernt sehen.
  perspectiveMatrix = makePerspective(45, 640.0 / 480.0, 0.1, 100.0);

  // Setzen Sie die Zeichenposition auf den "Identity"-Punkt, der das Zentrum der Szene ist.
  loadIdentity();

  // Bewegen Sie nun die Zeichenposition ein wenig dorthin, wo wir den Würfel zeichnen möchten.
  mvTranslate([
    0.0 - curPos[0] * 25 + curOrient[1] * 25,
    5.0 - curPos[1] * 25 - curOrient[0] * 25,
    -15.0 - curPos[2] * 25,
  ]);

  // Speichern Sie die aktuelle Matrix und drehen Sie sie, bevor Sie zeichnen.
  mvPushMatrix();
  mvRotate(cubeRotation, [0.25, 0, 0.25 - curOrient[2] * 0.5]);

  // Zeichnen Sie den Würfel, indem Sie den Array-Puffer an das Array der Würfel-Eckpunkte binden,
  // Attribute festlegen und es an GL pushen.
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesBuffer);
  gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

  // Legen Sie das Texturkoordinaten-Attribut für die Eckpunkte fest.
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesTextureCoordBuffer);
  gl.vertexAttribPointer(textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);

  // Geben Sie die Textur an, die auf die Flächen gemappt werden soll.
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.uniform1i(gl.getUniformLocation(shaderProgram, "uSampler"), 0);

  // Zeichnen Sie den Würfel.
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);
  setMatrixUniforms();
  gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);

  // Stellen Sie die ursprüngliche Matrix wieder her
  mvPopMatrix();
}
```

Der nächste Teil des Codes hat nichts mit WebVR zu tun — er aktualisiert lediglich die Rotation des Würfels bei jedem Frame:

```js
// Aktualisieren der Rotation für die nächste Zeichnung, wenn es Zeit dafür ist.
let currentTime = new Date().getTime();
if (lastCubeUpdateTime) {
  const delta = currentTime - lastCubeUpdateTime;

  cubeRotation += (30 * delta) / 1000.0;
}
lastCubeUpdateTime = currentTime;
```

Der letzte Teil der Rendering-Schleife beinhaltet einen Aufruf von {{domxref("VRDisplay.submitFrame()")}} — jetzt, da die ganze Arbeit erledigt ist und wir die Anzeige auf das {{htmlelement("canvas")}} gerendert haben, reicht diese Methode den Frame an das VR-Display ein, damit er auch dort angezeigt wird.

```js
  // WebVR: Deuten Sie darauf hin, dass wir bereit sind, den gerenderten Frame zur VR-Anzeige zu präsentieren
  vrDisplay.submitFrame();
}
```

### Anzeigen der Pose (Position, Orientierung usw.) Daten

In diesem Abschnitt diskutieren wir die `displayPoseStats()`-Funktion, die unsere aktualisierten Posendaten bei jedem Frame anzeigt. Die Funktion ist ziemlich einfach.

Zuerst speichern wir die sechs verschiedenen Eigenschaftswerte, die aus dem {{domxref("VRPose")}}-Objekt abrufbar sind, in ihren eigenen Variablen — jeder von ihnen ist ein {{jsxref("Float32Array")}}.

```js
function displayPoseStats(pose) {
  const pos = pose.position;
  const orient = pose.orientation;
  const linVel = pose.linearVelocity;
  const linAcc = pose.linearAcceleration;
  const angVel = pose.angularVelocity;
  const angAcc = pose.angularAcceleration;
```

Wir schreiben dann die Daten in das Informationsfeld und aktualisieren es bei jedem Frame. Wir haben jeden Wert auf drei Dezimalstellen mit [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) begrenzt, da die Werte sonst schwer zu lesen sind.

Sie sollten beachten, dass wir einen bedingten Ausdruck verwendet haben, um zu erkennen, ob die Arrays zur linearen Beschleunigung und die zur Winkelsbeschleunigung erfolgreich zurückgegeben werden, bevor wir die Daten anzeigen. Diese Werte werden bislang von den meisten VR-Hardware nicht gemeldet, sodass der Code einen Fehler auslösen würde, wenn wir dies nicht tun (die Arrays geben `null` zurück, wenn sie nicht erfolgreich gemeldet werden).

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
    linAccStats.textContent = 'Lineare Beschleunigung nicht gemeldet';
  }

  if (angAcc) {
    angAccStats.textContent = `Angular acceleration: ` +
    `x ${angAcc[0].toFixed(3)}, ` +
    `y ${angAcc[1].toFixed(3)}, ` +
    `z ${angAcc[2].toFixed(3)}`;
  } else {
    angAccStats.textContent = 'Winkelsbeschleunigung nicht gemeldet';
  }
}
```

## WebVR-Ereignisse

Die WebVR-Spezifikation enthält eine Anzahl von Ereignissen, die ausgelöst werden, sodass unser App-Code auf Änderungen im Status der VR-Anzeige reagieren kann (siehe [Window-Ereignisse](/de/docs/Web/API/WebVR_API#window_events)). Beispielsweise:

- {{domxref("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}} — Wird ausgelöst, wenn sich der Präsentationsstatus eines VR-Displays ändert — d.h. von präsentieren zu nicht präsentieren oder umgekehrt.
- {{domxref("Window.vrdisplayconnect_event", "vrdisplayconnect")}} — Wird ausgelöst, wenn ein kompatibles VR-Display mit dem Computer verbunden wurde.
- {{domxref("Window.vrdisplaydisconnect_event", "vrdisplaydisconnect")}} — Wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wurde.

Um zu demonstrieren, wie sie funktionieren, enthält unser einfaches Demo das folgende Beispiel:

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Die Präsentation des Displays ${e.display.displayId} hat sich geändert. Angegebener Grund: ${e.reason}.`,
  );
});
```

Wie Sie sehen können, stellt das {{domxref("VRDisplayEvent")}}-Objekt zwei nützliche Eigenschaften zur Verfügung — {{domxref("VRDisplayEvent.display")}}, welche eine Referenz auf das {{domxref("VRDisplay")}} enthält, auf das das Ereignis reagiert wurde, und {{domxref("VRDisplayEvent.reason")}}, welche einen menschenlesbaren Grund enthält, warum das Ereignis ausgelöst wurde.

Dies ist ein sehr nützliches Ereignis; Sie könnten es verwenden, um Fälle zu behandeln, in denen das Display unerwartet getrennt wird, um Fehler zu vermeiden und sicherzustellen, dass der Benutzer über die Situation informiert ist. In Googles Webvr.info-Präsentations-Demo wird das Ereignis verwendet, um eine [`onVRPresentChange()`-Funktion](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html#L174) auszuführen, die die UI-Steuerungen entsprechend aktualisiert und die Leinwandgröße verändert.

## Zusammenfassung

Dieser Artikel hat Ihnen die sehr grundlegende Einführung gegeben, wie man eine einfache WebVR 1.1-App erstellt, um Ihnen den Einstieg zu erleichtern.
