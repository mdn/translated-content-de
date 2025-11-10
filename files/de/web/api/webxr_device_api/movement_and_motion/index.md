---
title: "Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel"
slug: Web/API/WebXR_Device_API/Movement_and_motion
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{DefaultAPISidebar("WebXR Device API")}}

In diesem Artikel nutzen wir die Informationen, die in den vorherigen Artikeln unserer [WebXR](/de/docs/Web/API/WebXR_Device_API) Tutorial-Serie eingeführt wurden, um ein Beispiel zu konstruieren, das einen rotierenden Würfel animiert, um den sich der Benutzer frei bewegen kann, indem er ein VR-Headset, Tastatur und/oder Maus verwendet. Dies wird Ihnen helfen, Ihr Verständnis dafür zu festigen, wie die Geometrie von 3D-Grafiken und VR funktioniert, sowie sicherzustellen, dass Sie verstehen, wie die Funktionen und Daten, die während des XR-Renderings verwendet werden, zusammenarbeiten.

**Abbildung: Screenshot dieses Beispiels in Aktion**
![Screenshot des Beispiels, das einen texturierten Würfel zeigt, um den sich der Benutzer bewegen kann](xr-sample.png)

Der Kern dieses Beispiels—der sich drehende, texturierte, beleuchtete Würfel—stammt aus unserer WebGL-Tutorial-Serie; genauer gesagt aus dem vorletzten Artikel der Serie, der [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) behandelt.

Es ist hilfreich, beim Lesen dieses Artikels und des begleitenden Quellcodes zu beachten, dass das Display für ein 3D-Headset ein einzelner Bildschirm ist, der in der Mitte geteilt wird. Die linke Bildschirmhälfte ist nur für das linke Auge sichtbar, während die rechte Hälfte ausschließlich für das rechte Auge sichtbar ist. Um die Szene für eine immersive Präsentation zu rendern, sind mehrere Renderings der Szene erforderlich—einmal aus der Perspektive jedes Auges.

Beim Rendern des linken Auges wird die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) so konfiguriert, dass ihr [Ansichtsbereich](/de/docs/Web/API/XRWebGLLayer/getViewport) das Zeichnen auf die linke Hälfte der Zeichenfläche beschränkt. Im Gegensatz dazu wird beim Rendern des rechten Auges der Ansichtsbereich so eingestellt, dass das Zeichnen auf die rechte Hälfte der Fläche beschränkt wird.

Dieses Beispiel demonstriert dies, indem es die Leinwand auf dem Bildschirm zeigt, sogar wenn eine Szene als immersives Display mit einem XR-Gerät präsentiert wird.

## Abhängigkeiten

In diesem Beispiel werden wir keine 3D-Grafik-Frameworks wie [`three.js`](https://threejs.org/) oder ähnliches verwenden, wir verwenden jedoch die [`glMatrix`](https://glmatrix.net/) Bibliothek für Matrizenmathematik, die wir in früheren Beispielen verwendet haben. Dieses Beispiel importiert auch die [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill/), die von der Immersive Web Working Group gepflegt wird, welche verantwortlich für die Spezifikation der WebXR API ist. Durch das Importieren dieser Polyfill ermöglichen wir es dem Beispiel, in vielen Browsern zu funktionieren, die noch keine WebXR-Implementierungen haben, und wir glätten eventuelle vorübergehende Abweichungen von der Spezifikation, die in diesen noch etwas experimentellen Tagen der WebXR-Spezifikation auftreten.

## Optionen

Dieses Beispiel bietet eine Reihe von Optionen, die Sie konfigurieren können, indem Sie die Werte von Konstanten anpassen, bevor Sie es im Browser laden. Der Code sieht folgendermaßen aus:

```js
const xRotationDegreesPerSecond = 25;
const yRotationDegreesPerSecond = 15;
const zRotationDegreesPerSecond = 35;
const enableRotation = true;
const allowMouseRotation = true;
const allowKeyboardMotion = true;
const enableForcePolyfill = false;
const SESSION_TYPE = "inline";
const MOUSE_SPEED = 0.003;
```

- `xRotationDegreesPerSecond`
  - : Die Anzahl an Rotationsgraden, die pro Sekunde um die X-Achse angewendet werden.
- `yRotationDegreesPerSecond`
  - : Die Anzahl der Grad, um die die Y-Achse pro Sekunde rotiert wird.
- `zRotationDegreesPerSecond`
  - : Die Anzahl der Grad pro Sekunde, um die die Z-Achse rotiert wird.
- `enableRotation`
  - : Ein boolescher Wert, der angibt, ob die Rotation des Würfels überhaupt aktiviert werden soll.
- `allowMouseRotation`
  - : Wenn `true`, können Sie die Maus verwenden, um den Blickwinkel zu neigen und zu schwenken.
- `allowKeyboardMotion`
  - : Wenn `true`, bewegen die Tasten W, A, S und D den Betrachter nach oben, links, unten und nach rechts, während die Auf- und Abwärtspfeiltasten vorwärts und rückwärts bewegen. Wenn `false`, sind nur Änderungen der Sicht durch ein XR-Gerät zulässig.
- `enableForcePolyfill`
  - : Wenn dieser boolesche Wert `true` ist, wird das Beispiel versuchen, den WebXR-Polyfill zu verwenden, selbst wenn der Browser tatsächlich Unterstützung für WebXR hat. Wenn `false`, wird der Polyfill nur verwendet, wenn der Browser [`navigator.xr`](/de/docs/Web/API/Navigator/xr) nicht implementiert.
- `SESSION_TYPE`
  - : Der Typ der XR-Sitzung, die erstellt werden soll: `inline` für eine Inline-Sitzung, die im Kontext des Dokuments präsentiert wird, und `immersive-vr`, um die Szene in einem immersiven VR-Headset zu präsentieren.
- `MOUSE_SPEED`
  - : Ein Multiplikator, der verwendet wird, um die Eingaben von der Maus zu skalieren, die für Pitch- und Yaw-Kontrolle verwendet werden.
- `MOVE_DISTANCE`
  - : Die Entfernung, die als Reaktion auf eine der Tastenbewegungen des Betrachters durch die Szene bewegt wird.

> [!NOTE]
> Dieses Beispiel zeigt immer, was auf dem Bildschirm gerendert wird, selbst wenn der `immersive-vr`-Modus verwendet wird. Dadurch können Sie Unterschiede im Rendering zwischen den beiden Modi vergleichen und die Ausgabe aus dem immersiven Modus sehen, selbst wenn Sie kein Headset haben.

## Setup und Hilfsfunktionen

Als Nächstes deklarieren wir die Variablen und Konstanten, die in der gesamten Anwendung verwendet werden, beginnend mit denen, die zum Speichern von WebGL- und WebXR-spezifischen Informationen verwendet werden:

```js
let polyfill = null;
let xrSession = null;
let xrInputSources = null;
let xrReferenceSpace = null;
const xrButton = document.querySelector("#enter-xr");
const projectionMatrixOut = document.querySelector("#projection-matrix div");
const modelMatrixOut = document.querySelector("#model-view-matrix div");
const cameraMatrixOut = document.querySelector("#camera-matrix div");
const mouseMatrixOut = document.querySelector("#mouse-matrix div");

let gl = null;
let animationFrameRequestID = 0;
let shaderProgram = null;
let programInfo = null;
let buffers = null;
let texture = null;
let mouseYaw = 0;
let mousePitch = 0;
```

Darauf folgt ein Satz von Konstanten, hauptsächlich um verschiedene Vektoren und Matrizen zu enthalten, die während des Renderings der Szene verwendet werden.

```js
const viewerStartPosition = vec3.fromValues(0, 0, -10);
const viewerStartOrientation = vec3.fromValues(0, 0, 1.0);

const cubeOrientation = vec3.create();
const cubeMatrix = mat4.create();
const mouseMatrix = mat4.create();
const inverseOrientation = quat.create();
const RADIANS_PER_DEGREE = Math.PI / 180.0;
```

Die ersten beiden—`viewerStartPosition` und `viewerStartOrientation`—geben an, wo der Betrachter relativ zum Zentrum des Raums platziert wird und in welche Richtung er zu Beginn schaut. `cubeOrientation` speichert die aktuelle Orientierung des Würfels, während `cubeMatrix` und `mouseMatrix` Speicher für Matrizen sind, die während des Renderings der Szene verwendet werden. `inverseOrientation` ist ein Quaternion, das verwendet wird, um die Rotation zu repräsentieren, die auf den Referenzraum für das Objekt im zu rendernden Frame angewendet wird.

`RADIANS_PER_DEGREE` ist der Wert, mit dem ein Winkel in Grad multipliziert wird, um den Winkel in Bogenmaß umzuwandeln.

Die letzten vier deklarierten Variablen sind Speicher für Referenzen zu den {{HTMLElement("div")}} Elementen, in die wir die Matrizen ausgeben, wenn wir sie dem Benutzer zeigen wollen.

### Fehler protokollieren

Eine Funktion namens `LogGLError()` wird implementiert, um eine leicht anpassbare Möglichkeit bereitzustellen, Protokollierungsinformationen für Fehler auszugeben, die während der Ausführung von WebGL-Funktionen auftreten.

```js
function LogGLError(where) {
  let err = gl.getError();
  if (err) {
    console.error(`WebGL error returned by ${where}: ${err}`);
  }
}
```

Diese nimmt als einzigen Eingabewert einen String, `where`, der verwendet wird, um anzuzeigen, welcher Teil des Programms den Fehler generiert hat, da ähnliche Fehler in mehreren Situationen auftreten können.

### Die Vertex- und Fragment-Shader

Die Vertex- und Fragment-Shader sind beide genau dieselben wie in dem Beispiel für unseren Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL). [Beziehen Sie sich darauf](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL#update_the_shaders), wenn Sie an dem [GLSL](/de/docs/Web/API/WebGL_API/By_example/Hello_GLSL) Quellcode für die hier verwendeten grundlegenden Shader interessiert sind.

Es genügt zu sagen, dass der Vertex-Shader die Position jedes Scheitelpunkts unter Berücksichtigung der ursprünglichen Positionen jedes Scheitelpunkts und der Transformationen berechnet, die angewendet werden müssen, um sie zu simulieren, um die aktuelle Position und Orientierung des Betrachters wiederzugeben. Der Fragment-Shader gibt die Farbe jedes Scheitelpunkts zurück, indem er bei Bedarf von den Werten in der Textur interpoliert und die Lichteffekte anwendet.

## WebXR starten und beenden

```js
xrButton.addEventListener("click", onXRButtonClick);

if (!navigator.xr || enableForcePolyfill) {
  console.log("Using the polyfill");
  polyfill = new WebXRPolyfill();
}
setupXRButton();
```

Wir fügen einen Handler für [`click`](/de/docs/Web/API/Element/click_event) Ereignisse hinzu. Dann überprüfen wir, ob [`navigator.xr`](/de/docs/Web/API/Navigator/xr) definiert ist. Falls nicht—und/oder die Konfigurationskonstante `enableForcePolyfill` auf `true` gesetzt ist—installieren wir den WebXR-Polyfill, indem wir die `WebXRPolyfill`-Klasse instanziieren.

### Handhabung der Start- und Stopp-Benutzeroberfläche

Dann rufen wir die Funktion `setupXRButton()` auf, die die Konfiguration des "Enter/Exit WebXR"-Buttons behandelt, um ihn je nach Verfügbarkeit von WebXR-Unterstützung für den Sitzungstyp, der in der `SESSION_TYPE` Konstante angegeben ist, zu aktivieren oder zu deaktivieren.

```js
function setupXRButton() {
  if (navigator.xr.isSessionSupported) {
    navigator.xr.isSessionSupported(SESSION_TYPE).then((supported) => {
      xrButton.disabled = !supported;
    });
  } else {
    navigator.xr
      .supportsSession(SESSION_TYPE)
      .then(() => {
        xrButton.disabled = false;
      })
      .catch(() => {
        xrButton.disabled = true;
      });
  }
}
```

Die Beschriftung des Buttons wird im Code angepasst, der tatsächlich das Starten und Stoppen der WebXR-Sitzung behandelt; das werden wir unten sehen.

Die WebXR-Sitzung wird durch den Handler für [`click`](/de/docs/Web/API/Element/click_event) Ereignisse auf dem Button ein- und ausgeschaltet, dessen Beschriftung entsprechend auf "Enter WebXR" oder "Exit WebXR" gesetzt ist. Dies wird durch den Event-Handler `onXRButtonClick()` gehandhabt.

```js
async function onXRButtonClick(event) {
  if (!xrSession) {
    navigator.xr.requestSession(SESSION_TYPE).then(sessionStarted);
  } else {
    await xrSession.end();

    if (xrSession) {
      sessionEnded();
    }
  }
}
```

Dies beginnt damit, den Wert von `xrSession` zu überprüfen, um festzustellen, ob wir bereits ein [`XRSession`](/de/docs/Web/API/XRSession) Objekt haben, das eine laufende WebXR-Sitzung darstellt. Wenn nicht, stellt der Klick eine Anfrage dar, den WebXR-Modus zu aktivieren, sodass [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) aufgerufen wird, um eine WebXR-Sitzung des gewünschten WebXR-Sitzungstyps anzufordern und dann `sessionStarted()` aufzurufen, um die Szene in dieser WebXR-Sitzung auszuführen.

Wenn wir bereits eine laufende Sitzung haben, rufen wir deren [`end()`](/de/docs/Web/API/XRSession/end) Methode auf, um die Sitzung zu beenden.

Das letzte, was wir in diesem Code tun, ist zu überprüfen, ob `xrSession` noch nicht-`NULL` ist. Wenn ja, rufen wir `sessionEnded()` auf, den Handler für das [`end`](/de/docs/Web/API/XRSession/end_event) Ereignis. Dieser Code sollte nicht nötig sein, aber es scheint ein Problem zu geben, bei dem mindestens einige Browser das `end`-Ereignis nicht korrekt auslösen. Indem wir den Ereignishandler direkt ausführen, schließen wir den Abschlussprozess in dieser Situation manuell ab.

### Die WebXR-Sitzung starten

Die Funktion `sessionStarted()` behandelt das tatsächliche Einrichten und Starten der Sitzung, indem sie Ereignishandler einrichtet, den GLSL-Code für den Vertex- und Fragment-Shader kompiliert und installiert, und die WebGL-Schicht an die WebXR-Sitzung anhängt, bevor sie die Rendering-Schleife startet. Sie wird als Handler für das von [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) zurückgegebene Versprechen aufgerufen.

```js
function sessionStarted(session) {
  let refSpaceType;

  xrSession = session;
  xrButton.innerText = "Exit WebXR";
  xrSession.addEventListener("end", sessionEnded);

  let canvas = document.querySelector("canvas");
  gl = canvas.getContext("webgl", { xrCompatible: true });

  if (allowMouseRotation) {
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  }

  if (allowKeyboardMotion) {
    document.addEventListener("keydown", handleKeyDown);
  }

  shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
      vertexNormal: gl.getAttribLocation(shaderProgram, "aVertexNormal"),
      textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(
        shaderProgram,
        "uProjectionMatrix",
      ),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
      normalMatrix: gl.getUniformLocation(shaderProgram, "uNormalMatrix"),
      uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
    },
  };

  buffers = initBuffers(gl);
  texture = loadTexture(
    gl,
    "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png",
  );

  xrSession.updateRenderState({
    baseLayer: new XRWebGLLayer(xrSession, gl),
  });

  const isImmersiveVr = SESSION_TYPE === "immersive-vr";
  refSpaceType = isImmersiveVr ? "local" : "viewer";

  mat4.fromTranslation(cubeMatrix, viewerStartPosition);

  vec3.copy(cubeOrientation, viewerStartOrientation);

  xrSession.requestReferenceSpace(refSpaceType).then((refSpace) => {
    xrReferenceSpace = refSpace.getOffsetReferenceSpace(
      new XRRigidTransform(viewerStartPosition, cubeOrientation),
    );
    animationFrameRequestID = xrSession.requestAnimationFrame(drawFrame);
  });

  return xrSession;
}
```

Nachdem das neu erstellte [`XRSession`](/de/docs/Web/API/XRSession) Objekt in `xrSession` gespeichert wurde, wird das Label des Buttons auf "Exit WebXR" gesetzt, um seine neue Funktion nach dem Starten der Szene anzuzeigen, und ein Handler für das [`end`](/de/docs/Web/API/XRSession/end_event) Ereignis installiert, sodass wir benachrichtigt werden, wenn die `XRSession` endet.

Dann erhalten wir eine Referenz auf das im HTML befindliche {{HTMLElement("canvas")}}—sowie dessen WebGL-Rendering-Kontext—der als Zeichenfläche für die Szene verwendet wird. Die Eigenschaft `xrCompatible` wird beim Aufruf von [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf dem Element angefordert, um auf den WebGL-Rendering-Kontext für die Leinwand zuzugreifen. Dies stellt sicher, dass der Kontext für die Verwendung als Quelle für das WebXR-Rendering konfiguriert ist.

Als Nächstes fügen wir Event-Handler für die [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignisse hinzu, aber nur, wenn die `allowMouseRotation` Konstante `true` ist. Der `mousemove` Handler wird sich mit dem Neigen und Schwenken des Blickwinkels basierend auf der Bewegung der Maus befassen. Da das Feature nur bei gedrückter rechter Maustaste funktioniert und ein Klick mit der rechten Maustaste das Kontextmenü auslöst, fügen wir der Leinwand einen Handler für das `contextmenu` Ereignis hinzu, um zu verhindern, dass das Kontextmenü erscheint, wenn der Benutzer mit dem Ziehen der Maus beginnt.

Als Nächstes kompilieren wir die Shader-Programme, erhalten Referenzen zu seinen Variablen, initialisieren die Puffer, die das Array jeder Position speichern, die Indizes in der Positionstabelle für jeden Vertex, die Vertexnormalen und die Texturkoordinaten für jeden Vertex. Dies alles wird direkt aus dem WebGL-Beispielcode übernommen, daher beziehen Sie sich auf [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) und die vorhergehenden Artikel [Erstellen von 3D-Objekten mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL) und [Verwenden von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL). Dann wird unsere `loadTexture()` Funktion aufgerufen, um die Texturdatei zu laden.

Nun, da die Rendering-Strukturen und -Daten geladen sind, beginnen wir, uns auf das Ausführen der `XRSession` vorzubereiten. Wir verbinden die Sitzung mit der WebGL-Schicht, sodass sie weiß, was sie als Renderfläche verwenden soll, indem wir [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) mit einer `baseLayer` auf eine neue [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) aufrufen.

Dann sehen wir uns den Wert der `SESSION_TYPE` Konstante an, um zu sehen, ob der WebXR-Kontext immersiv oder inline sein soll. Immersive Sitzungen verwenden den `local` Referenzraum, während Inline-Sitzungen den `viewer` Referenzraum verwenden.

Die `glMatrix` Bibliothek `fromTranslation()` Funktion für 4x4 Matrizen wird verwendet, um die Startposition des Betrachters, wie sie in der `viewerStartPosition` Konstante angegeben ist, in eine Transformationsmatrix, `cubeMatrix`, umzuwandeln. Die Startorientierung des Betrachters, `viewerStartOrientation` Konstante, wird in die `cubeOrientation` kopiert, die verwendet wird, um die Rotation des Würfels im Laufe der Zeit zu verfolgen.

`sessionStarted()` endet, indem die Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) der Sitzung aufgerufen wird, um ein Referenzraumobjekt zu erhalten, das den Raum beschreibt, in dem das Objekt erstellt wird. Wenn das zurückgegebene Versprechen in ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Objekt aufgelöst wird, rufen wir seine [`getOffsetReferenceSpace`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) Methode auf, um ein Referenzraumobjekt zu erhalten, das das Koordinatensystem des Objekts darstellt. Der Ursprung des neuen Raums befindet sich an den Weltkoordinaten, die durch die `viewerStartPosition` angegeben werden, und seine Orientierung ist auf `cubeOrientation` eingestellt. Dann lassen wir die Sitzung wissen, dass wir bereit sind, ein Frame zu zeichnen, indem wir ihre [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) Methode aufrufen. Wir zeichnen die zurückgegebene Anforderungs-ID auf, falls wir die Anforderung später stornieren müssen.

Schließlich gibt `sessionStarted()` die [`XRSession`](/de/docs/Web/API/XRSession) zurück, die die WebXR-Sitzung des Benutzers darstellt.

### Wenn die Sitzung endet

Wenn die WebXR-Sitzung endet—entweder weil sie vom Benutzer beendet wird oder weil [`XRSession.end()`](/de/docs/Web/API/XRSession/end) aufgerufen wird—wird das [`end`](/de/docs/Web/API/XRSession/end_event) Ereignis gesendet; wir haben dies so eingerichtet, dass eine Funktion namens `sessionEnded()` aufgerufen wird.

```js
function sessionEnded() {
  xrButton.innerText = "Enter WebXR";

  if (animationFrameRequestID) {
    xrSession.cancelAnimationFrame(animationFrameRequestID);
    animationFrameRequestID = 0;
  }
  xrSession = null;
}
```

Wir können `sessionEnded()` auch direkt aufrufen, wenn wir die WebXR-Sitzung programmgesteuert beenden möchten. In jedem Fall wird die Beschriftung des Buttons aktualisiert, um anzuzeigen, dass ein Klick eine Sitzung startet, und dann stornieren wir, falls eine Anforderung für ein Animationsframe aussteht, diese Anforderung, indem wir [`cancelAnimationFrame`](/de/docs/Web/API/XRSession/cancelAnimationFrame) aufrufen.

Sobald das erledigt ist, wird der Wert von `xrSession` auf `NULL` geändert, um anzuzeigen, dass wir mit der Sitzung fertig sind.

## Implementierung der Steuerungen

Sehen wir uns nun den Code an, der Tastatur- und Mausereignisse in etwas Verwendbares zur Steuerung eines Avatars in einem WebXR-Szenario umwandelt.

### Bewegung mit der Tastatur

Um dem Benutzer zu ermöglichen, sich durch die 3D-Welt zu bewegen, auch wenn er kein WebXR-Gerät mit den Eingaben für Bewegungen durch den Raum hat, reagiert unser Handler für [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse, `handleKeyDown()`, indem er Offsets vom Ursprung des Objekts aus basierend auf der gedrückten Taste aktualisiert.

```js
function handleKeyDown(event) {
  switch (event.key) {
    case "w":
    case "W":
      verticalDistance -= MOVE_DISTANCE;
      break;
    case "s":
    case "S":
      verticalDistance += MOVE_DISTANCE;
      break;
    case "a":
    case "A":
      transverseDistance += MOVE_DISTANCE;
      break;
    case "d":
    case "D":
      transverseDistance -= MOVE_DISTANCE;
      break;
    case "ArrowUp":
      axialDistance += MOVE_DISTANCE;
      break;
    case "ArrowDown":
      axialDistance -= MOVE_DISTANCE;
      break;
    case "r":
    case "R":
      transverseDistance = axialDistance = verticalDistance = 0;
      mouseYaw = mousePitch = 0;
      break;
    default:
      break;
  }
}
```

Die Tasten und ihre Effekte sind:

- Die <kbd>W</kbd> Taste bewegt den Betrachter um `MOVE_DISTANCE` nach oben.
- Die <kbd>S</kbd> Taste bewegt den Betrachter um `MOVE_DISTANCE` nach unten.
- Die <kbd>A</kbd> Taste verschiebt den Betrachter um `MOVE_DISTANCE` nach links.
- Die <kbd>D</kbd> Taste verschiebt den Betrachter um `MOVE_DISTANCE` nach rechts.
- Die Aufwärtspfeiltaste, <kbd>↑</kbd>, verschiebt den Betrachter um `MOVE_DISTANCE` nach vorne.
- Die Abwärtspfeiltaste, <kbd>↓</kbd>, verschiebt den Betrachter um `MOVE_DISTANCE` rückwärts.
- Die <kbd>R</kbd> Taste setzt den Betrachter auf seine Ausgangsposition und -orientierung zurück, indem alle Eingabe-Offsets auf 0 zurückgesetzt werden.

Diese Offsets werden vom Renderer ab dem nächsten gezeichneten Frame angewendet.

### Neigung und Schwenkung mit der Maus

Wir haben auch einen [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Ereignis-Handler, der überprüft, ob die rechte Maustaste gedrückt ist, und falls ja, die Funktion `rotateViewBy()` aufruft, die als Nächstes definiert wird, um die neuen Pitch- (Blick hoch und runter) und Yaw- (Blick links und rechts) Werte zu berechnen und zu speichern.

```js
function handlePointerMove(event) {
  if (event.buttons & 2) {
    rotateViewBy(event.movementX, event.movementY);
  }
}
```

Die Berechnung der neuen Pitch- und Yaw-Werte wird von der Funktion `rotateViewBy()` durchgeführt:

```js
function rotateViewBy(dx, dy) {
  mouseYaw -= dx * MOUSE_SPEED;
  mousePitch -= dy * MOUSE_SPEED;

  if (mousePitch < -Math.PI * 0.5) {
    mousePitch = -Math.PI * 0.5;
  } else if (mousePitch > Math.PI * 0.5) {
    mousePitch = Math.PI * 0.5;
  }
}
```

Gegeben als Eingabe die Mausdeltas, `dx` und `dy`, wird der neue Yaw-Wert berechnet, indem der aktuelle Wert von `mouseYaw` das Produkt von `dx` und der `MOUSE_SPEED` Skalierungs-Konstante subtrahiert wird. Sie können also steuern, wie reaktionsschnell die Maus ist, indem Sie den Wert von `MOUSE_SPEED` erhöhen.

## Ein Frame zeichnen

Unser Rückruf für [`XRSession.requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) wird in der Funktion `drawFrame()` implementiert, die unten gezeigt wird. Seine Aufgabe ist es, den Referenzraum des Betrachters zu erhalten, zu berechnen, wie viel Bewegung auf animierte Objekte angewendet werden muss, basierend auf der seit dem letzten Frame vergangenen Zeit, und dann jede der im [`XRPose`](/de/docs/Web/API/XRPose) des Betrachters angegebenen Ansichten zu rendern.

```js
let lastFrameTime = 0;

function drawFrame(time, frame) {
  const session = frame.session;
  let adjustedRefSpace = xrReferenceSpace;
  let pose = null;

  animationFrameRequestID = session.requestAnimationFrame(drawFrame);
  adjustedRefSpace = applyViewerControls(xrReferenceSpace);
  pose = frame.getViewerPose(adjustedRefSpace);

  if (pose) {
    const glLayer = session.renderState.baseLayer;

    gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
    LogGLError("bindFrameBuffer");

    gl.clearColor(0, 0, 0, 1.0);
    gl.clearDepth(1.0); // Clear everything
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    LogGLError("glClear");

    const deltaTime = (time - lastFrameTime) * 0.001; // Convert to seconds
    lastFrameTime = time;

    for (const view of pose.views) {
      const viewport = glLayer.getViewport(view);
      gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
      LogGLError(`Setting viewport for eye: ${view.eye}`);
      gl.canvas.width = viewport.width * pose.views.length;
      gl.canvas.height = viewport.height;
      renderScene(gl, view, programInfo, buffers, texture, deltaTime);
    }
  }
}
```

Das Erste, was wir tun, ist [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufzurufen, damit `drawFrame()` beim nächsten zu rendernden Frame erneut aufgerufen wird. Dann geben wir den Referenzraum des Objekts in die Funktion `applyViewerControls()` ein, die einen überarbeiteten [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) zurückgibt, der die Position und Orientierung des Objekts transformiert, um die vom Benutzer mit Tastatur und Maus angewendete Bewegung, Neigung und Schwenkung zu berücksichtigen. Denken Sie daran, dass, wie immer, die Objekte der Welt bewegt und neu ausgerichtet werden, nicht der Betrachter. Der zurückgegebene Referenzraum erleichtert uns genau das.

Mit dem neuen Referenzraum in der Hand erhalten wir die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), die den Standpunkt des Betrachters—für beide Augen darstellt. Wenn das erfolgreich ist, beginnen wir mit den Vorbereitungen zur Darstellung, indem wir die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) verwenden, die von der Sitzung verwendet wird, und deren Frame-Buffer verwenden, um als WebGL-Frame-Buffer verwendet zu werden (so dass das Rendern von WebGL in die Schicht und damit auf das Display des XR-Geräts zeichnet). Mit WebGL, das jetzt so konfiguriert ist, dass es auf das XR-Gerät zeichnet, löschen wir den Frame in Schwarz und sind bereit, das Rendern zu beginnen.

Die seit dem letzten Frame vergangene Zeit (in Sekunden) wird berechnet, indem der Zeitstempel des vorherigen Frames `lastFrameTime` von der aktuellen Zeit, wie sie im Parameter `time` angegeben wird, subtrahiert und dann mit 0,001 multipliziert wird, um Millisekunden in Sekunden umzuwandeln. Die aktuelle Zeit wird dann in `lastFrameTime` gespeichert.

Die `drawFrame()` Funktion endet, indem sie über jede im [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) gefundene Ansicht iteriert, den Anzeigebereich für die Ansicht einrichtet und `renderScene()` aufruft, um das Frame zu rendern. Indem der Anzeigebereich für jede Ansicht eingerichtet wird, behandeln wir das typische Szenario, bei dem die Ansichten für jedes Auge jeweils auf die Hälfte des WebGL-Frames gerendert werden. Die XR-Hardware sorgt dann dafür, dass jedes Auge nur den Bildteil sieht, der für dieses Auge bestimmt ist.

> [!NOTE]
> In diesem Beispiel präsentieren wir das Frame sowohl auf dem XR-Gerät _als auch_ auf dem Bildschirm visuell. Um sicherzustellen, dass die auf dem Bildschirm angezeigte Leinwand die richtige Größe hat, um uns dies zu ermöglichen, setzen wir deren Breite gleich der Breite der einzelnen [`XRView`](/de/docs/Web/API/XRView) multipliziert mit der Anzahl der Ansichten; die Höhe der Leinwand ist immer gleich der Höhe des Anzeigebereichs. Die beiden Codezeilen, die die Leinwandgröße anpassen, sind in regulären WebXR-Rendering-Schleifen nicht erforderlich.

### Anwenden der Benutzereingaben

Die Funktion `applyViewerControls()`, die von `drawFrame()` aufgerufen wird, bevor etwas gerendert wird, nimmt die Offsets in jeder der drei Richtungen auf, den Yaw-Offset und den Pitch-Offset, wie sie von den Funktionen `handleKeyDown()` und `handlePointerMove()` als Reaktion auf das Drücken der Tasten durch den Benutzer und das Ziehen der Maus bei gedrückter rechter Maustaste aufgezeichnet werden. Sie nimmt den Baseline-Referenzraum für das Objekt als Eingabe und gibt einen neuen Referenzraum zurück, der den Standort und die Orientierung des Objekts anpasst, um das Ergebnis der Eingaben widerzuspiegeln.

```js
function applyViewerControls(refSpace) {
  if (
    !mouseYaw &&
    !mousePitch &&
    !axialDistance &&
    !transverseDistance &&
    !verticalDistance
  ) {
    return refSpace;
  }

  quat.identity(inverseOrientation);
  quat.rotateX(inverseOrientation, inverseOrientation, -mousePitch);
  quat.rotateY(inverseOrientation, inverseOrientation, -mouseYaw);

  let newTransform = new XRRigidTransform(
    { x: transverseDistance, y: verticalDistance, z: axialDistance },
    {
      x: inverseOrientation[0],
      y: inverseOrientation[1],
      z: inverseOrientation[2],
      w: inverseOrientation[3],
    },
  );
  mat4.copy(mouseMatrix, newTransform.matrix);

  return refSpace.getOffsetReferenceSpace(newTransform);
}
```

Wenn alle Eingabe-Offsets null sind, geben wir einfach den ursprünglichen Referenzraum zurück. Andernfalls erstellen wir aus den Orientierungsänderungen in `mousePitch` und `mouseYaw` ein Quaternion, das die Inverse dieser Orientierung spezifiziert, sodass die Anwendung der `inverseOrientation` auf den Würfel korrekt erscheint, um die Bewegung des Betrachters widerzuspiegeln.

Dann ist es an der Zeit, ein neues [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) Objekt zu erstellen, das die Transformation repräsentiert, die verwendet wird, um den neuen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) für das bewegte und/oder neu ausgerichtete Objekt zu erstellen. Die Position ist ein neuer Vektor, dessen `x`, `y` und `z` den Offsets entsprechen, die entlang jeder dieser Achsen bewegt wurden. Die Orientierung ist das `inverseOrientation` Quaternion.

Wir kopieren die [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Transformation in `mouseMatrix`, das wir später verwenden werden, um die Maus-Tracking-Matrix dem Benutzer anzuzeigen (somit ist dies ein Schritt, den Sie normalerweise überspringen können). Schließlich übergeben wir das `XRRigidTransform` an den aktuellen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) des Objekts, um den Referenzraum zu erhalten, der diese Transformation integriert, um die Platzierung des Würfels relativ zum Benutzer basierend auf den Bewegungen des Benutzers darzustellen. Dieser neue Referenzraum wird an den Aufrufer zurückgegeben.

### Die Szene rendern

Die Funktion `renderScene()` wird aufgerufen, um tatsächlich die Teile der Welt zu rendern, die dem Benutzer momentan sichtbar sind. Sie wird einmal für jedes Auge aufgerufen, mit leicht unterschiedlichen Positionen für jedes Auge, um den 3D-Effekt zu etablieren, der für XR-Geräte notwendig ist.

Der Großteil dieses Codes ist typischer WebGL-Rendering-Code und direkt der `drawScene()` Funktion im Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) entnommen, und dort sollten Sie nach Details zu den WebGL-Rendering-Teilen dieses Beispiels suchen ([den Code auf GitHub ansehen](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample7/webgl-demo.js)). Aber hier beginnt es mit ein wenig Code, der spezifisch für dieses Beispiel ist, daher werfen wir einen genaueren Blick auf diesen Teil.

```js
const normalMatrix = mat4.create();
const modelViewMatrix = mat4.create();

function renderScene(gl, view, programInfo, buffers, texture, deltaTime) {
  const xRotationForTime =
    xRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;
  const yRotationForTime =
    yRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;
  const zRotationForTime =
    zRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;

  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.depthFunc(gl.LEQUAL); // Near things obscure far things

  if (enableRotation) {
    mat4.rotate(
      cubeMatrix, // destination matrix
      cubeMatrix, // matrix to rotate
      zRotationForTime, // amount to rotate in radians
      [0, 0, 1],
    ); // axis to rotate around (Z)
    mat4.rotate(
      cubeMatrix, // destination matrix
      cubeMatrix, // matrix to rotate
      yRotationForTime, // amount to rotate in radians
      [0, 1, 0],
    ); // axis to rotate around (Y)
    mat4.rotate(
      cubeMatrix, // destination matrix
      cubeMatrix, // matrix to rotate
      xRotationForTime, // amount to rotate in radians
      [1, 0, 0],
    ); // axis to rotate around (X)
  }

  mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, cubeMatrix);
  mat4.invert(normalMatrix, modelViewMatrix);
  mat4.transpose(normalMatrix, normalMatrix);

  displayMatrix(view.projectionMatrix, 4, projectionMatrixOut);
  displayMatrix(modelViewMatrix, 4, modelMatrixOut);
  displayMatrix(view.transform.matrix, 4, cameraMatrixOut);
  displayMatrix(mouseMatrix, 4, mouseMatrixOut);

  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition,
      numComponents,
      type,
      normalize,
      stride,
      offset,
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
  }

  {
    const numComponents = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
    gl.vertexAttribPointer(
      programInfo.attribLocations.textureCoord,
      numComponents,
      type,
      normalize,
      stride,
      offset,
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
  }

  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexNormal,
      numComponents,
      type,
      normalize,
      stride,
      offset,
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexNormal);
  }

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
  gl.useProgram(programInfo.program);

  gl.uniformMatrix4fv(
    programInfo.uniformLocations.projectionMatrix,
    false,
    view.projectionMatrix,
  );
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.modelViewMatrix,
    false,
    modelViewMatrix,
  );
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.normalMatrix,
    false,
    normalMatrix,
  );
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, texture);

  gl.uniform1i(programInfo.uniformLocations.uSampler, 0);

  {
    const vertexCount = 36;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }
}
```

`renderScene()` beginnt, indem es berechnet, wie viel Rotation um jede der drei Achsen in der Zeit, die seit dem letzten gerenderten Frame vergangen ist, auftreten sollte. Diese Werte lassen uns die Rotation unseres animierten Würfels um den richtigen Betrag anpassen, um sicherzustellen, dass seine Bewegungsgeschwindigkeit konsistent bleibt, unabhängig von Schwankungen in der Bildrate, die aufgrund der Systemlast auftreten können. Diese Werte werden als Anzahl der Bogenmaß, die auf die Rotation angewendet werden soll, gegeben die Elapsed Time, berechnet und in den Konstanten `xRotationForTime`, `yRotationForTime` und `zRotationForTime` gespeichert.

Nach dem Aktivieren und Konfigurieren des Tiefentests überprüfen wir den Wert der `enableRotation` Konstante, um zu sehen, ob die Rotation des Würfels aktiviert ist; wenn ja, verwenden wir glMatrix, um die `cubeMatrix` (die die aktuelle Orientierung des Würfels relativ zum Weltall repräsentiert) um die drei Achsen zu drehen. Mit der globalen Orientierung des Würfels etabliert, multiplizieren wir sie dann mit der Inversen der Transformationsmatrix der Ansicht, um die endgültige Modellansichtmatrix zu erhalten—die Matrix, die auf das Objekt angewendet werden soll, um sie sowohl für Animationszwecke zu drehen, als auch um sie zu verschieben und neu zu orientieren, um die Bewegung des Betrachters durch den Raum zu simulieren.

Dann wird die Normalenmatrix der Ansicht berechnet, indem die Modellansichtmatrix invertiert und transponiert wird (ihre Spalten und Zeilen vertauscht).

Die letzten paar Zeilen des für dieses Beispiel hinzugefügten Codes sind vier Aufrufe von `displayMatrix()`, einer Funktion, die den Inhalt einer Matrix zu Analysezwecken durch den Benutzer anzeigt. Der Rest der Funktion ist identisch oder im Wesentlichen identisch mit dem älteren WebGL-Beispiel, von dem dieser Code abgeleitet ist.

### Eine Matrix anzeigen

Zum Zweck der Anleitung zeigt dieses Beispiel den Inhalt der bei der Darstellung der Szene wichtigen Matrizen an. Die `displayMatrix()` Funktion wird dafür verwendet; diese Funktion verwendet MathML, um die Matrix darzustellen, und greift auf ein mehr array-ähnliches Format zurück, wenn MathML vom Browser des Benutzers nicht unterstützt wird.

```js
function displayMatrix(mat, rowLength, target) {
  let outHTML = "";

  if (mat && rowLength && rowLength <= mat.length) {
    let numRows = mat.length / rowLength;
    outHTML = "<math display='block'>\n<mrow>\n<mo>[</mo>\n<mtable>\n";

    for (let y = 0; y < numRows; y++) {
      outHTML += "<mtr>\n";
      for (let x = 0; x < rowLength; x++) {
        outHTML += `<mtd><mn>${mat[x * rowLength + y].toFixed(2)}</mn></mtd>\n`;
      }
      outHTML += "</mtr>\n";
    }

    outHTML += "</mtable>\n<mo>]</mo>\n</mrow>\n</math>";
  }

  target.innerHTML = outHTML;
}
```

Dies ersetzt den Inhalt des durch `target` spezifizierten Elements mit einem neu erstellten {{MathMLElement("math")}} Element, das die 4x4-Matrix enthält. Jedes Element wird mit bis zu zwei Dezimalstellen angezeigt.

### Alles andere

Der Rest des Codes ist identisch mit dem, der in den früheren Beispielen gefunden wurde:

- `initShaderProgram()`
  - : Initialisiert das GLSL-Shader-Programm, indem es `loadShader()` aufruft, um das Programm jedes Shaders zu laden und zu kompilieren, und dann jedes an den WebGL-Kontext anzuhängen. Sobald sie kompiliert sind, wird das Programm verlinkt und an den Aufrufer zurückgegeben.
- `loadShader()`
  - : Erstellt ein Shader-Objekt und lädt den angegebenen Quellcode hinein, bevor der Code kompiliert wird und sichergestellt wird, dass der Compiler erfolgreich war, bevor der neu kompilierte Shader an den Aufrufer zurückgegeben wird. Wenn ein Fehler auftritt, wird stattdessen `NULL` zurückgegeben.
- `initBuffers()`
  - : Initialisiert die Puffer, die Daten enthalten, die an WebGL übergeben werden sollen. Diese Puffer beinhalten das Array der Scheitelpunktpositionen, das Array der Scheitelpunktnormalen, die Texturkoordinaten für jede Fläche des Würfels und das Array der Scheitelpunktindizes (welches angibt, welcher Eintrag in der Scheitelpunktliste jede Ecke des Würfels darstellt).
- `loadTexture()`
  - : Lädt das Bild an einer angegebenen URL und erstellt eine WebGL-Textur daraus. Wenn die Dimensionen des Bildes nicht beide Potenzen von zwei sind (siehe die `isPowerOf2()` Funktion), wird das Mipmappen deaktiviert und das Umschlagen wird auf die Kanten geklemmt. Dies liegt daran, dass optimiertes Rendern von Mipmap-Texturen in WebGL 1 nur für Texturen funktioniert, deren Dimensionen Potenzen von zwei sind. WebGL 2 unterstützt Texturen in beliebiger Größe für Mipmap-Optimierung.
- `isPowerOf2()`
  - : Gibt `true` zurück, wenn der angegebene Wert eine Potenz von zwei ist; andernfalls wird `false` zurückgegeben.

### Alles zusammenfügen

Wenn Sie den Code nehmen und HTML und etwas zusätzlichen JavaScript hinzufügen, haben Sie etwas in der Art unseres [WebXR: Beispiel mit rotierendem Objekt und Benutzerbewegung](https://mdn.github.io/dom-examples/webxr/) Demos.
Denken Sie daran: wenn Sie umherwandern und sich verirren, drücken Sie einfach die <kbd>R</kbd> Taste, um sich an den Anfang zurückzusetzen.

Ein Tipp: Wenn Sie kein XR-Gerät haben, können Sie möglicherweise einige der 3D-Effekte erhalten, wenn Sie Ihr Gesicht sehr nah an den Bildschirm bringen, mit Ihrer Nase in der Mitte zwischen den linken und rechten Auge-Bildern auf der Leinwand. Indem Sie sorgfältig durch den Bildschirm auf das Bild fokussieren und langsam vor- und zurückbewegen, sollten Sie irgendwann in der Lage sein, das 3D-Bild in den Fokus zu bringen. Es kann Übung erfordern, und Ihre Nase kann buchstäblich den Bildschirm berühren, abhängig davon, wie scharf Ihr Sehvermögen ist.

Es gibt viele Dinge, die Sie tun können, indem Sie dieses Beispiel als Ausgangspunkt verwenden. Versuchen Sie, weitere Objekte hinzuzufügen, oder verbessern Sie die Bewegungssteuerungen, um sie realistischer zu machen. Fügen Sie Wände, Decken und Böden hinzu, um sich stattdessen in einem Raum einzuschließen, anstatt in einem unendlichen Universum verloren zu gehen. Fügen Sie Kollisionstests oder Treffertests hinzu oder die Fähigkeit, die Textur jeder Würfelseite zu ändern.

Es gibt nur wenige Einschränkungen, was getan werden kann, wenn Sie sich darauf einstellen.

## Siehe auch

- [Lernen Sie WebGL](https://learnwebgl.brown37.net/#) (beinhaltet einige großartige Visualisierungen der Kamera und wie sie sich zur virtuellen Welt verhält)
- [WebGL-Grundlagen](https://webglfundamentals.org/)
- [Lernen Sie OpenGL](https://learnopengl.com/)
