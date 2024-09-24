---
title: "Bewegung, Ausrichtung und Bewegung: Ein WebXR Beispiel"
slug: Web/API/WebXR_Device_API/Movement_and_motion
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{DefaultAPISidebar("WebXR Device API")}}

In diesem Artikel nutzen wir Informationen aus den vorherigen Artikeln unserer [WebXR](/de/docs/Web/API/WebXR_Device_API) Tutorial-Serie, um ein Beispiel zu konstruieren, das einen rotierenden Würfel animiert, um den sich der Benutzer frei mit einem VR-Headset, einer Tastatur und/oder einer Maus bewegen kann. Dies wird Ihnen helfen, Ihr Verständnis der Geometrie von 3D-Grafiken und VR zu festigen und sicherzustellen, dass Sie verstehen, wie die während des XR Renderings verwendeten Funktionen und Daten zusammenarbeiten.

**Abbildung: Screenshot dieses Beispiels in Aktion**
![Screenshot des Beispiels, das einen texturierten Würfel zeigt, um den sich der Benutzer bewegen kann](xr-sample.png)

Der Kern dieses Beispiels—der sich drehende, texturierte, beleuchtete Würfel—stammt aus unserer WebGL Tutorial-Serie; nämlich aus dem vorletzten Artikel der Serie über [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL).

Beim Lesen dieses Artikels und des begleitenden Quellcodes ist es hilfreich, daran zu denken, dass das Display eines 3D-Headsets ein einzelner Bildschirm ist, der in zwei Hälften geteilt ist. Die linke Bildschirmhälfte wird nur vom linken Auge gesehen, während die rechte Hälfte nur vom rechten Auge gesehen wird. Um die Szene immersiv darzustellen, sind mehrere Renderings der Szene erforderlich—einmal aus der Perspektive jedes Auges.

Beim Rendern des linken Auges wird die {{domxref("XRWebGLLayer")}} so konfiguriert, dass ihr [Viewport](/de/docs/Web/API/XRWebGLLayer/getViewport) das Zeichnen auf die linke Hälfte der Zeichenfläche beschränkt. Beim Rendern des rechten Auges ist der Viewport so eingestellt, dass das Zeichnen auf die rechte Hälfte der Fläche beschränkt ist.

Dieses Beispiel demonstriert dies, indem es die Leinwand auf dem Bildschirm zeigt, selbst wenn eine Szene mit einem XR-Gerät immersiv dargestellt wird.

## Abhängigkeiten

Während wir uns bei diesem Beispiel nicht auf 3D-Grafik-Frameworks wie [`three.js`](https://threejs.org/) oder ähnliches stützen, verwenden wir die [`glMatrix`](https://glmatrix.net/) Bibliothek für Matrixberechnungen, die wir auch in anderen Beispielen in der Vergangenheit genutzt haben. Dieses Beispiel importiert auch das [WebXR Polyfill](https://github.com/immersive-web/webxr-polyfill/), das von der Immersive Web Working Group gepflegt wird, dem Team, das für die Spezifikation der WebXR API verantwortlich ist. Durch das Importieren dieses Polyfills ermöglichen wir dem Beispiel, auf vielen Browsern zu funktionieren, die noch keine WebXR-Implementierungen haben, und glätten vorübergehende Abweichungen von der Spezifikation, die in diesen noch etwas experimentellen Tagen der WebXR-Spezifikation auftreten.

## Optionen

Dieses Beispiel bietet eine Reihe von Optionen, die Sie durch Anpassen der Werte von Konstanten konfigurieren können, bevor Sie es im Browser laden. Der Code sieht so aus:

```js
const xRotationDegreesPerSecond = 25;
const yRotationDegreesPerSecond = 15;
const zRotationDegreesPerSecond = 35;
const enableRotation = true;
const allowMouseRotation = true;
const allowKeyboardMotion = true;
const enableForcePolyfill = false;
//const SESSION_TYPE = "immersive-vr";
const SESSION_TYPE = "inline";
const MOUSE_SPEED = 0.003;
```

- `xRotationDegreesPerSecond`
  - : Die Anzahl der Grad Drehung, die pro Sekunde um die X-Achse angewendet werden.
- `yRotationDegreesPerSecond`
  - : Die Anzahl der Grad, die jede Sekunde um die Y-Achse gedreht werden.
- `zRotationDegreesPerSecond`
  - : Die Anzahl der Grad pro Sekunde, die um die Z-Achse gedreht werden.
- `enableRotation`
  - : Ein Boolean, der angibt, ob die Drehung des Würfels aktiviert werden soll oder nicht.
- `allowMouseRotation`
  - : Wenn `true`, können Sie die Maus verwenden, um den Blickwinkel zu neigen und zu gieren.
- `allowKeyboardMotion`
  - : Wenn `true`, bewegen die Tasten W, A, S und D den Betrachter nach oben, links, unten und rechts, während die Aufwärts- und Abwärtspfeile vorwärts und rückwärts bewegen. Wenn `false`, sind nur Änderungen der Ansicht durch das XR-Gerät zulässig.
- `enableForcePolyfill`
  - : Wenn dieses Boolean `true` ist, versucht das Beispiel, das WebXR Polyfill zu verwenden, selbst wenn der Browser tatsächlich Unterstützung für WebXR hat. Wenn `false`, wird das Polyfill nur verwendet, wenn der Browser {{domxref("navigator.xr")}} nicht implementiert.
- `SESSION_TYPE`
  - : Der Typ der XR-Sitzung, die erstellt werden soll: `inline` für eine inline-Sitzung, die im Kontext des Dokuments dargestellt wird, und `immersive-vr`, um die Szene auf einem immersiven VR-Headset darzustellen.
- `MOUSE_SPEED`
  - : Ein Multiplikator, der verwendet wird, um die Eingaben von der Maus für die Neigungs- und Giersteuerung zu skalieren.
- `MOVE_DISTANCE`
  - : Die Entfernung, die als Reaktion auf eine der Tasten verwendet wird, um den Betrachter durch die Szene zu bewegen.

> [!NOTE]
> Dieses Beispiel zeigt immer, was es auf dem Bildschirm rendert, selbst wenn es den `immersive-vr` Modus verwendet. Dies ermöglicht Ihnen, Unterschiede im Rendering zwischen den beiden Modi zu vergleichen und den Output im immersiven Modus zu sehen, selbst wenn Sie kein Headset haben.

## Einrichtungs- und Hilfsfunktionen

Als nächstes deklarieren wir die Variablen und Konstanten, die in der gesamten Anwendung verwendet werden, beginnend mit denen, die spezifische Informationen zu WebGL und WebXR speichern:

```js
let polyfill = null;
let xrSession = null;
let xrInputSources = null;
let xrReferenceSpace = null;
let xrButton = null;
let gl = null;
let animationFrameRequestID = 0;
let shaderProgram = null;
let programInfo = null;
let buffers = null;
let texture = null;
let mouseYaw = 0;
let mousePitch = 0;
```

Es folgt eine Reihe von Konstanten, vor allem zur Speicherung verschiedener Vektoren und Matrizen, die beim Rendern der Szene verwendet werden.

```js
const viewerStartPosition = vec3.fromValues(0, 0, -10);
const viewerStartOrientation = vec3.fromValues(0, 0, 1.0);

const cubeOrientation = vec3.create();
const cubeMatrix = mat4.create();
const mouseMatrix = mat4.create();
const inverseOrientation = quat.create();
const RADIANS_PER_DEGREE = Math.PI / 180.0;
```

Die ersten beiden—`viewerStartPosition` und `viewerStartOrientation`—geben an, wo der Betrachter relativ zum Mittelpunkt des Raumes platziert wird und in welche Richtung er anfänglich blickt. `cubeOrientation` speichert die aktuelle Orientierung des Würfels, während `cubeMatrix` und `mouseMatrix` Speicher für Matrizen sind, die während des Renderings der Szene verwendet werden. `inverseOrientation` ist ein Quaternion, das verwendet wird, um die Drehung darzustellen, die auf den Referenzraum des Objekts im gerenderten Frame angewendet wird.

`RADIANS_PER_DEGREE` ist der Wert, mit dem ein Winkel in Grad multipliziert werden muss, um den Winkel in Bogenmaß umzurechnen.

Die letzten vier deklarierten Variablen sind Speicher für Referenzen auf die {{HTMLElement("div")}}-Elemente, in die wir die Matrizen ausgeben, wenn wir sie dem Benutzer anzeigen möchten.

### Protokollierung von Fehlern

Eine Funktion namens `LogGLError()` wird implementiert, um eine leicht anpassbare Möglichkeit zum Ausgeben von Protokollinformationen für Fehler bereitzustellen, die bei der Ausführung von WebGL-Funktionen auftreten.

```js
function LogGLError(where) {
  let err = gl.getError();
  if (err) {
    console.error(`WebGL error returned by ${where}: ${err}`);
  }
}
```

Diese Funktion nimmt als einzige Eingabe eine Zeichenkette, `where`, die verwendet wird, um anzuzeigen, welcher Teil des Programms den Fehler erzeugt hat, da ähnliche Fehler in mehreren Situationen auftreten können.

### Der Vertex-und Fragment-Shader

Die Vertex- und Fragment-Shader sind beide genau die, die im Beispiel für unseren Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) verwendet werden. [Sehen Sie sich das an](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL#update_the_shaders), wenn Sie am [GLSL](/de/docs/Web/API/WebGL_API/By_example/Hello_GLSL)-Quellcode für die hier verwendeten Basisshader interessiert sind.

Es genügt zu sagen, dass der Vertex-Shader die Position jedes Vertex berechnet, basierend auf den anfänglichen Positionen jedes Vertex und den Transformationen, die angewendet werden müssen, um sie so zu simulieren, dass sie die aktuelle Position und Ausrichtung des Betrachters wiedergeben. Der Fragment-Shader gibt die Farbe jedes Vertex zurück und interpoliert dabei nach Bedarf die Werte aus der Textur und wendet die Lichteffekte an.

## Starten und Beenden von WebXR

Beim ersten Laden des Skripts installieren wir einen Handler für das {{domxref("Window.load_event", "load")}}-Ereignis, damit wir die Initialisierung durchführen können.

```js
window.addEventListener("load", onLoad);

function onLoad() {
  xrButton = document.querySelector("#enter-xr");
  xrButton.addEventListener("click", onXRButtonClick);

  projectionMatrixOut = document.querySelector("#projection-matrix div");
  modelMatrixOut = document.querySelector("#model-view-matrix div");
  cameraMatrixOut = document.querySelector("#camera-matrix div");
  mouseMatrixOut = document.querySelector("#mouse-matrix div");

  if (!navigator.xr || enableForcePolyfill) {
    console.log("Using the polyfill");
    polyfill = new WebXRPolyfill();
  }
  setupXRButton();
}
```

Der `load`-Ereignishandler erhält eine Referenz auf die Schaltfläche, die WebXR ein- und ausschaltet, und speichert sie in `xrButton`, dann wird ein Handler für {{domxref("Element.click_event", "click")}}-Ereignisse hinzugefügt. Dann werden Referenzen auf die vier {{HTMLElement("div")}}-Blöcke erhalten, in die wir den aktuellen Inhalt der wichtigsten Matrizen zum Informationszweck ausgeben, während unsere Szene läuft.

Dann prüfen wir, ob {{domxref("navigator.xr")}} definiert ist. Wenn nicht—und/oder die Konfigurationskonstante `enableForcePolyfill` auf `true` gesetzt ist—installieren wir das WebXR Polyfill, indem wir die `WebXRPolyfill`-Klasse instanziieren.

### Umgang mit der Start- und Stopp-UI

Dann rufen wir die Funktion `setupXRButton()` auf, die die Konfiguration der "Enter/Exit WebXR"-Schaltfläche übernimmt, um sie je nach Verfügbarkeit der WebXR-Unterstützung zu aktivieren oder zu deaktivieren, für den in der `SESSION_TYPE`-Konstante angegebenen Sitzungstyp.

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

Das Label der Schaltfläche wird im Code angepasst, der tatsächlich das Starten und Stoppen der WebXR-Sitzung behandelt; das werden wir weiter unten sehen.

Die WebXR-Sitzung wird ein- und ausgeschaltet durch den Handler für {{domxref("Element.click_event", "click")}}-Ereignisse auf der Schaltfläche, deren Beschriftung auf entweder "Enter WebXR" oder "Exit WebXR" eingestellt ist. Dies geschieht durch den `onXRButtonClick()`-Ereignishandler.

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

Dies beginnt mit dem Überprüfen des Wertes von `xrSession`, um zu sehen, ob wir bereits ein {{domxref("XRSession")}}-Objekt haben, das eine laufende WebXR-Sitzung darstellt. Wenn nicht, bedeutet der Klick eine Anfrage, den WebXR-Modus zu aktivieren, also rufen wir {{domxref("XRSystem.requestSession", "requestSession()")}} auf, um eine WebXR-Sitzung des gewünschten Typs anzufordern, und rufen dann `sessionStarted()` auf, um die Szene in dieser WebXR-Sitzung zu starten.

Wenn wir bereits eine laufende Sitzung haben, rufen wir die {{domxref("XRSession.end", "end()")}}-Methode auf, um die Sitzung zu beenden.

Der letzte Schritt in diesem Code ist die Überprüfung, ob `xrSession` noch nicht `NULL` ist. Wenn ja, rufen wir `sessionEnded()`, den Handler für das {{domxref("XRSession.end_event", "end")}}-Ereignis, auf. Dieser Code sollte nicht unbedingt erforderlich sein, aber es scheint ein Problem zu geben, bei dem mindestens einige Browser das `end`-Ereignis nicht korrekt senden. Durch das direkte Ausführen des Ereignishandlers schließen wir den Schließprozess in dieser Situation manuell ab.

### Starten der WebXR-Sitzung

Die Funktion `sessionStarted()` behandelt das tatsächliche Einrichten und Starten der Sitzung, indem sie Ereignishandler einrichtet, den GLSL-Code für die Vertex- und Fragment-Shader kompiliert und installiert, und die WebGL-Ebene mit der WebXR-Sitzung verbindet, bevor sie die Render-Schleife startet. Sie wird als Handler für das Versprechen, das {{domxref("XRSystem.requestSession", "requestSession()")}} zurückgibt, aufgerufen.

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
    "https://cdn.glitch.com/a9381af1-18a9-495e-ad01-afddfd15d000%2Ffirefox-logo-solid.png?v=1575659351244",
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

Nachdem das neu erstellte {{domxref("XRSession")}}-Objekt in `xrSession` gespeichert wurde, wird die Beschriftung der Schaltfläche auf "Exit WebXR" gesetzt, um ihre neue Funktion nach dem Start der Szene anzuzeigen, und ein Handler für das {{domxref("XRSession.end_event", "end")}}-Ereignis installiert, damit wir benachrichtigt werden, wenn die `XRSession` endet.

Dann holen wir eine Referenz auf das {{HTMLElement("canvas")}}, das in unserem HTML gefunden wird, sowie dessen WebGL-Rendering-Kontext, der als Zeichenfläche für die Szene verwendet wird. Die Eigenschaft `xrCompatible` wird abgefragt, wenn {{domxref("HTMLCanvasElement.getContext", "getContext()")}} für das Element aufgerufen wird, um Zugriff auf den WebGL-Rendering-Kontext für die Leinwand zu erhalten. Dies stellt sicher, dass der Kontext für die Verwendung als Quelle für WebXR-Renderings konfiguriert ist.

Als nächstes fügen wir Ereignishandler für die {{domxref("Element.mousemove_event", "mousemove")}}- und {{domxref("Element.contextmenu_event","contextmenu")}}-Ereignisse hinzu, jedoch nur, wenn die Konstante `allowMouseRotation` auf `true` gesetzt ist. Der `mousemove`-Handler wird sich mit der Neigung und Gierung des Blickwinkels anhand der Bewegung der Maus befassen. Da die "Maussteuerung" nur funktioniert, während die rechte Maustaste gedrückt gehalten wird, und ein Klick mit der rechten Maustaste das Kontextmenü auslöst, fügen wir der Leinwand einen Handler für das `contextmenu`-Ereignis hinzu, um zu verhindern, dass beim Start des Ziehvorgangs des Benutzers das Kontextmenü angezeigt wird.

Anschließend kompilieren wir die Shader-Programme, holen Referenzen auf ihre Variablen und initialisieren die Puffer, die das Array der einzelnen Positionen, die Indexe in der Positionstabelle für jeden Vertex, die Vertex-Normalen und die Texturkoordinaten für jede Oberfläche des Würfels speichern. Dies ist alles direkt dem WebGL-Beispielcode entnommen, schauen Sie sich daher [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) und seine vorhergehenden Artikel [Erstellen von 3D-Objekten mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL) und [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) an. Dann wird unsere `loadTexture()`-Funktion aufgerufen, um die Texturdatei zu laden.

Da die Rendering-Strukturen und -Daten nun geladen sind, beginnen wir mit der Vorbereitung für das Ausführen der `XRSession`. Wir verbinden die Sitzung mit der WebGL-Ebene, damit sie weiß, was als Rendering-Fläche zu verwenden ist, indem wir {{domxref("XRSession.updateRenderState()")}} mit einem `baseLayer` aufrufen, das auf eine neue {{domxref("XRWebGLLayer")}} gesetzt ist.

Wir prüfen dann den Wert der `SESSION_TYPE`-Konstanten, um zu sehen, ob der WebXR-Kontext immersiv oder inline sein soll. Immersive Sitzungen verwenden den `local` Referenzraum, während inline-Sitzungen den `viewer` Referenzraum verwenden.

Die `glMatrix`-Bibliothek verwendet die `fromTranslation()`-Funktion für 4x4 Matrizen, um die Startposition des Betrachters, die in der `viewerStartPosition`-Konstanten angegeben ist, in eine Transformationsmatrix, `cubeMatrix`, zu konvertieren. Die Startorientierung des Betrachters, `viewerStartOrientation`-Konstanten, wird in die `cubeOrientation`, die verwendet wird, um die Rotation des Würfels im Laufe der Zeit zu verfolgen, kopiert.

`sessionStarted()` wird abgeschlossen, indem die Methode {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} der Sitzung aufgerufen wird, um ein Referenzraumobjekt zu erhalten, das den Raum beschreibt, in dem das Objekt erstellt wird. Wenn das zurückgegebene Versprechen zu einem {{domxref("XRReferenceSpace")}}-Objekt aufgelöst wird, rufen wir die Methode {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace")}} auf, um ein Referenzraumobjekt zu erhalten, das das Koordinatensystem des Objekts darstellt. Der Ursprung des neuen Raums befindet sich bei den Weltkoordinaten, die in der `viewerStartPosition` angegeben sind, und seine Orientierung wird auf `cubeOrientation` gesetzt. Dann lassen wir die Sitzung wissen, dass wir bereit sind, einen Frame zu zeichnen, indem wir ihre {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} Methode aufrufen. Wir speichern die zurückgegebene Anforderungs-ID, falls wir die Anforderung später abbrechen müssen.

Schließlich gibt `sessionStarted()` die {{domxref("XRSession")}} zurück, die die WebXR-Sitzung des Benutzers repräsentiert.

### Wenn die Sitzung endet

Wenn die WebXR-Sitzung endet—entweder weil sie vom Benutzer beendet wird oder indem {{domxref("XRSession.end()")}} aufgerufen wird—wird das {{domxref("XRSession.end_event", "end")}} Ereignis gesendet; wir haben es so eingerichtet, dass es die Funktion `sessionEnded()` aufruft.

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

Wir können `sessionEnded()` auch direkt aufrufen, wenn wir die WebXR-Sitzung programmatisch beenden möchten. In jedem Fall wird die Beschriftung der Schaltfläche aktualisiert, um anzuzeigen, dass ein Klick eine Sitzung startet, und dann, wenn es eine ausstehende Anforderung für einen Animationsframe gibt, brechen wir sie ab, indem wir {{domxref("XRSession.cancelAnimationFrame", "cancelAnimationFrame")}} aufrufen.

Sobald das erledigt ist, wird der Wert von `xrSession` auf `NULL` geändert, um anzuzeigen, dass wir mit der Sitzung fertig sind.

## Implementierung der Steuerungen

Werfen wir nun einen Blick auf den Code, der diese Tastatur- und Mausereignisse in etwas verwandelt, das zur Steuerung eines Avatars in einem WebXR-Szenario verwendet werden kann.

### Bewegung mit der Tastatur

Um dem Benutzer zu ermöglichen, sich durch die 3D-Welt zu bewegen, selbst wenn er kein WebXR-Gerät mit den Eingaben hat, um Bewegung durch den Raum durchzuführen, reagiert unser Handler für {{domxref("Element.keydown_event", "keydown")}}-Ereignisse, `handleKeyDown()`, indem er die Offsets vom Ursprung des Objekts basierend darauf, welche Taste gedrückt wurde, aktualisiert.

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

- Die

  <kbd>W</kbd>

  -Taste bewegt den Betrachter um `MOVE_DISTANCE` nach oben.

- Die

  <kbd>S</kbd>

  -Taste bewegt den Betrachter um `MOVE_DISTANCE` nach unten.

- Die

  <kbd>A</kbd>

  -Taste schiebt den Betrachter um `MOVE_DISTANCE` nach links.

- Die

  <kbd>D</kbd>

  -Taste schiebt den Betrachter um `MOVE_DISTANCE` nach rechts.

- Die Aufwärtspfeiltaste,

  <kbd>↑</kbd>

  , schiebt den Betrachter um `MOVE_DISTANCE` vorwärts.

- Die Abwärtspfeiltaste,

  <kbd>↓</kbd>

  , schiebt den Betrachter um `MOVE_DISTANCE` rückwärts.

- Die

  <kbd>R</kbd>

  -Taste setzt den Betrachter auf seine Startposition und -ausrichtung zurück, indem alle Eingabe-Offsets auf 0 zurückgesetzt werden.

Diese Offsets werden vom Renderer ab dem nächsten gezeichneten Frame angewendet.

### Neigen und Gieren mit der Maus

Wir haben auch einen {{domxref("Element.mousemove_event", "mousemove")}}-Ereignishandler, der überprüft, ob die rechte Maustaste gedrückt ist, und wenn ja, die Funktion `rotateViewBy()` aufruft, die als nächstes definiert wird, um die neuen Neigungs-(Blick nach oben und unten) und Gier-(Blick nach links und rechts) Werte zu berechnen und zu speichern.

```js
function handlePointerMove(event) {
  if (event.buttons & 2) {
    rotateViewBy(event.movementX, event.movementY);
  }
}
```

Die Berechnung der neuen Neigungs- und Gierwerte erfolgt durch die Funktion `rotateViewBy()`:

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

Gegeben als Eingabe die Maus-Deltas `dx` und `dy`, wird der neue Gierwert berechnet, indem von dem aktuellen Wert von `mouseYaw` das Produkt aus `dx` und der `MOUSE_SPEED`-Skalierungskonstante subtrahiert wird. Sie können dann steuern, wie reaktionsschnell die Maus ist, indem Sie den Wert von `MOUSE_SPEED` erhöhen.

## Zeichnen eines Frames

Unser Rückruf für {{domxref("XRSession.requestAnimationFrame()")}} wird in der `drawFrame()`-Funktion implementiert, die unten gezeigt wird. Ihre Aufgabe ist es, sich den Referenzraum des Betrachters zu holen, zu berechnen, wie viel Bewegung an jedem animierten Objekt vorgenommen werden muss, basierend darauf, wie viel Zeit seit dem letzten Frame vergangen ist, und dann jeden der durch die {{domxref("XRPose")}} des Betrachters dargestellten Ansichten zu rendern.

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
    gl.clearDepth(1.0); // Alles löschen
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    LogGLError("glClear");

    const deltaTime = (time - lastFrameTime) * 0.001; // In Sekunden umrechnen
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

Das Erste, was wir tun, ist, {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} aufzurufen, um zu verlangen, dass `drawFrame()` erneut für den nächsten zu rendernden Frame aufgerufen wird. Dann übergeben wir den Referenzraum des Objekts an die Funktion `applyViewerControls()`, die einen überarbeiteten {{domxref("XRReferenceSpace")}} zurückgibt, der die Position und Orientierung des Objekts ändert, um die durch den Benutzer unter Verwendung der Tastatur und Maus angewendete Bewegung, Neigung und Gier zu berücksichtigen. Erinnern Sie sich daran, dass, wie immer, die Objekte der Welt bewegt und neu ausgerichtet werden, nicht der Betrachter. Der zurückgegebene Referenzraum erleichtert uns genau das.

Mit dem neuen Referenzraum in der Hand holen wir uns die {{domxref("XRViewerPose")}}, die den Blickpunkt des Betrachters—für beide Augen—darstellt. Wenn das erfolgreich ist, beginnen wir mit der Vorbereitung zum Rendern, indem wir die {{domxref("XRWebGLLayer")}}, die von der Sitzung verwendet wird, ermitteln und deren Framebuffer verwenden, der als WebGL-Framebuffer verwendet wird (so dass das Rendern von WebGL in die Ebene und deshalb auf das Display des XR-Geräts gezeichnet wird). Mit WebGL, das nun für das Rendering an das XR-Gerät konfiguriert ist, löschen wir den Frame auf Schwarz und sind bereit, mit dem Rendern zu beginnen.

Die Zeit, die seit dem letzten gerenderten Frame vergangen ist (in Sekunden), wird berechnet, indem der vorherige Frame-Timestamp `lastFrameTime` von der aktuellen Zeit, wie die `time`-Parameter angeben, subtrahiert und dann mit 0.001 multipliziert wird, um Millisekunden in Sekunden umzurechnen. Die aktuelle Zeit wird dann in `lastFrameTime` gespeichert;

Die `drawFrame()`-Funktion endet, indem sie über jede Ansicht, die in {{domxref("XRViewerPose")}} gefunden wird, iteriert, die Viewport für die Ansicht einrichtet und `renderScene()` aufruft, um den Frame zu rendern. Indem der Viewport für jede Ansicht eingerichtet wird, handhaben wir das typische Szenario, in dem die Ansichten für jedes Auge jeweils auf die Hälfte des WebGL-Frames gerendert werden. Die XR-Hardware kümmert sich dann darum, sicherzustellen, dass jedes Auge nur den Teil dieses Bildes sieht, der für dieses Auge bestimmt ist.

> [!NOTE]
> In diesem Beispiel präsentieren wir den Frame visuell sowohl auf dem XR-Gerät _als auch_ auf dem Bildschirm. Um sicherzustellen, dass die Leinwand auf dem Bildschirm die richtige Größe hat, um dies zu ermöglichen, setzen wir ihre Breite auf das x-te der individuellen {{domxref("XRView")}}-Breite multipliziert mit der Anzahl der Ansichten; die Leinwandhöhe ist immer gleich der Höhe des Viewports. Die beiden Zeilen Code, die die Leinwandgröße anpassen, werden nicht in regulären WebXR-Render-Schleifen benötigt.

### Anwenden der Benutzereingaben

Die `applyViewerControls()`-Funktion, die von `drawFrame()` aufgerufen wird, bevor irgendetwas gerendert wird, nimmt die Offsets in jeder der drei Richtungen, den Gier-Offset und den Neigungs-Offset, wie von den Funktionen `handleKeyDown()` und `handlePointerMove()` als Reaktion auf das Drücken der Tasten und das Ziehen der Maus des Benutzers mit der gedrückten rechten Maustaste aufgezeichnet, und nimmt als Eingabe den Basis-Referenzraum für das Objekt und gibt einen neuen Referenzraum zurück, der die Position und Ausrichtung des Objekts anpasst, um mit den Eingaben übereinzustimmen.

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

Wenn alle Eingabe-Offsets Null sind, geben wir einfach den ursprünglichen Referenzraum zurück. Andernfalls erstellen wir aus den in `mousePitch` und `mouseYaw` enthaltenen Orientierungsänderungen ein Quaternion, das die Umkehrung dieser Orientierung angibt, so dass durch die Anwendung der `inverseOrientation` auf den Würfel korrekt erscheinen wird, um die Bewegung des Betrachters zu reflektieren.

Dann ist es Zeit, ein neues {{domxref("XRRigidTransform")}}-Objekt zu erstellen, das die Transformation darstellt, die verwendet wird, um den neuen {{domxref("XRReferenceSpace")}} für das bewegte und/oder neu ausgerichtete Objekt zu erstellen. Die Position ist ein neuer Vektor, dessen `x`, `y` und `z` den entlang jeder dieser Achsen verschobenen Offsets entsprechen. Die Ausrichtung ist das `inverseOrientation`-Quaternion.

Wir kopieren die {{domxref("XRRigidTransform.matrix", "matrix")}} der Transformation in `mouseMatrix`, die wir später verwenden, um die Mausverfolgungsmatrix dem Benutzer anzuzeigen (dies ist ein Schritt, den Sie normalerweise überspringen können). Schließlich übergeben wir das `XRRigidTransform` an die aktuelle {{domxref("XRReferenceSpace")}} des Objekts, um den Referenzraum zu erhalten, der diese Transformation integriert, um die Platzierung des Würfels in Bezug auf den Benutzer, basierend auf den Bewegungen des Benutzers, darzustellen. Dieser neue Referenzraum wird an den Anrufer zurückgegeben.

### Rendering der Szene

Die Funktion `renderScene()` wird aufgerufen, um tatsächlich die Teile der Welt zu rendern, die derzeit für den Benutzer sichtbar sind. Sie wird einmal für jedes Auge aufgerufen, mit leicht unterschiedlichen Positionen für jedes Auge, um den 3D-Effekt zu erzeugen, der für XR-Ausrüstung erforderlich ist.

Der größte Teil dieses Codes ist typischer WebGL-Rendering-Code, der direkt von der `drawScene()`-Funktion im [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) Artikel stammt, und es ist dort, dass Sie nach Details zu den WebGL-Render-Teilen dieses Beispiels suchen sollten ([Siehe den Code auf GitHub](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample7/webgl-demo.js)). Aber hier beginnt es mit etwas Code, der spezifisch für dieses Beispiel ist, also werden wir diesen Teil genauer betrachten.

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

  gl.enable(gl.DEPTH_TEST); // Aktivieren der Tiefenprüfung
  gl.depthFunc(gl.LEQUAL); // Dinge in der Nähe verdecken weiter entfernte Dinge

  if (enableRotation) {
    mat4.rotate(
      cubeMatrix, // Zielmatrix
      cubeMatrix, // zu drehende Matrix
      zRotationForTime, // Rotationsbetrag in Radianten
      [0, 0, 1],
    ); // Achse, um die gedreht werden soll (Z)
    mat4.rotate(
      cubeMatrix, // Zielmatrix
      cubeMatrix, // zu drehende Matrix
      yRotationForTime, // Rotationsbetrag in Radianten
      [0, 1, 0],
    ); // Achse, um die gedreht werden soll (Y)
    mat4.rotate(
      cubeMatrix, // Zielmatrix
      cubeMatrix, // zu drehende Matrix
      xRotationForTime, // Rotationsbetrag in Radianten
      [1, 0, 0],
    ); // Achse, um die gedreht werden soll (X)
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

`renderScene()` beginnt, indem berechnet wird, wie viel Drehung um jede der drei Achsen in der seit dem vorherigen Frame vergangenen Zeit erfolgen sollte. Diese Werte ermöglichen es uns, die Drehung unseres animierenden Würfels um den richtigen Betrag anzupassen, um sicherzustellen, dass seine Bewegungsgeschwindigkeit unabhängig von den Frame-Rate-Schankungen, die aufgrund der Systemauslastung auftreten können, konsistent bleibt. Diese Werte werden als die Anzahl der zu drehenden Radianten berechnet, die angesichts der verstrichenen Zeit angewendet werden sollen, und in den Konstanten `xRotationForTime`, `yRotationForTime` und `zRotationForTime` gespeichert.

Nachdem die Tiefentestung aktiviert und konfiguriert wurde, überprüfen wir den Wert der `enableRotation`-Konstanten, um zu sehen, ob die Drehung des Würfels aktiviert werden soll. Wenn dies der Fall ist, verwenden wir glMatrix, um die `cubeMatrix` (die die aktuelle Orientierung des Würfels relativ zum Welt Raum darstellt) um die drei Achsen zu drehen. Mit der globalen Orientierung des Würfels festgelegt, multiplizieren wir diese dann mit der Umkehrung der Transformationsmatrix der Ansicht, um die endgültige Modellansichts-Matrix zu erhalten—die Matrix, die auf das Objekt angewendet werden muss, um sowohl eine Rotation für seine Animationszwecke durchzuführen, als auch sie zu bewegen und neu auszurichten, um die Bewegung des Betrachters durch den Raum zu simulieren.

Dann wird die Normalen-Matrix der Ansicht berechnet, indem die Modellansichts-Matrix genommen, invertiert und transponiert wird (indem ihre Spalten und Zeilen vertauscht werden).

Die letzten paar Zeilen Code, die für dieses Beispiel hinzugefügt wurden, sind vier Aufrufe von `displayMatrix()`, einer Funktion, die den Inhalt einer Matrix zur Analyse durch den Benutzer anzeigt. Der Rest der Funktion ist identisch oder im Wesentlichen identisch mit dem älteren WebGL-Beispiel, aus dem dieser Code abgeleitet ist.

### Anzeige einer Matrix

Zum Zwecke der Einweisung zeigt dieses Beispiel den Inhalt der wichtigen Matrizen an, die beim Rendern der Szene verwendet werden. Die Funktion `displayMatrix()` wird dafür verwendet; diese Funktion verwendet MathML, um die Matrix zu rendern und bei Bedarf auf ein eher arrayähnliches Format zurückzugreifen, wenn MathML im Browser des Benutzers nicht unterstützt wird.

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

Dies ersetzt den Inhalt des durch `target` spezifizierten Elements durch ein neu erstelltes {{MathMLElement("math")}}-Element, das die 4x4-Matrix enthält. Jeder Eintrag wird mit bis zu zwei Dezimalstellen angezeigt.

### Alles andere

Der Rest des Codes ist identisch mit dem, der in den früheren Beispielen gefunden wurde:

- `initShaderProgram()`
  - : Initialisiert das GLSL-Shader-Programm, indem `loadShader()` aufgerufen wird, um das Programm jedes Shaders zu laden und zu kompilieren, bevor es an den WebGL-Kontext angehängt wird. Sobald sie kompiliert sind, wird das Programm verknüpft und an den Anrufer zurückgegeben.
- `loadShader()`
  - : Erstellt ein Shader-Objekt und lädt den angegebenen Quellcode in es, bevor er den Code kompiliert und überprüft, um sicherzustellen, dass der Compiler erfolgreich war, bevor er den neu kompilierten Shader an den Anrufer zurückgibt. Wenn ein Fehler auftritt, wird `NULL` stattdessen zurückgegeben.
- `initBuffers()`
  - : Initialisiert die Puffer, die Daten enthalten, die an WebGL übermittelt werden sollen. Diese Puffer umfassen das Array von Vertex-Positionen, das Array von Vertex-Normalen, die Texturkoordinaten für jede Oberfläche des Würfels und das Array von Vertex-Indizes (das angibt, welcher Eintrag in der Vertex-Liste jede Ecke des Würfels darstellt).
- `loadTexture()`
  - : Lädt das Bild an einer angegebenen URL und erstellt eine WebGL-Textur daraus. Wenn die Abmessungen des Bildes nicht beide Potenzen von zwei sind (siehe die `isPowerOf2()`-Funktion), wird Mipmapping deaktiviert und das Wrapping auf die Ränder geklammert. Dies liegt daran, dass das optimierte Rendern von Mipmapped-Texturen nur für Texturen funktioniert, deren Abmessungen in WebGL 1 Potenzen von zwei sind. WebGL 2 unterstützt Mipmapping bei Texturen beliebiger Größe.
- `isPowerOf2()`
  - : Gibt `true` zurück, wenn der angegebene Wert eine Potenz von zwei ist; andernfalls wird `false` zurückgegeben.

### Alles zusammenfügen

Wenn Sie all diesen Code nehmen und das HTML und den anderen JavaScript-Code hinzufügen, der oben nicht enthalten ist, erhalten Sie das, was Sie sehen, wenn Sie [dieses Beispiel auf Glitch ausprobieren](https://webxr-experiment.glitch.me/). Denken Sie daran: während Sie herumlaufen, wenn Sie sich verirren, drücken Sie einfach die <kbd>R</kbd>-Taste, um sich auf den Anfang zurückzusetzen.

Ein Tipp: Wenn Sie kein XR-Gerät haben, können Sie möglicherweise einige der 3D-Effekte sehen, wenn Sie Ihr Gesicht sehr nahe an den Bildschirm bringen, wobei Ihre Nase in der Mitte entlang der Grenze zwischen den linken und rechten Augenbildern im Bildschirm zentriert ist. Indem Sie vorsichtig durch den Bildschirm auf das Bild fokussieren und langsam vor- und zurückbewegen, sollten Sie in der Lage sein, das 3D-Bild in den Fokus zu bringen. Es kann Übung erfordern, und Ihre Nase kann buchstäblich den Bildschirm berühren, abhängig davon, wie scharf Ihre Augen sind.

Es gibt viele Dinge, die Sie tun können, wenn Sie dieses Beispiel als Ausgangspunkt verwenden. Versuchen Sie, mehr Objekte zur Welt hinzuzufügen, oder verbessern Sie die Bewegungssteuerung, um realistischer zu bewegen. Fügen Sie Wände, Decke und Boden hinzu, um Sie in einem Raum zu umschließen, anstatt ein scheinbar unendliches Universum zu haben, in dem Sie sich verlieren können. Fügen Sie Kollisions- oder Treffertests hinzu oder die Fähigkeit, die Textur jeder Fläche des Würfels zu ändern.

Es gibt nur wenige Einschränkungen, was getan werden kann, wenn Sie sich dafür einsetzen.

## Siehe auch

- [Learn WebGL](https://learnwebgl.brown37.net/#) (beinhaltet einige großartige Visualisierungen der Kamera und wie sie sich in die virtuelle Welt einfügt)
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [Learn OpenGL](https://learnopengl.com/)
