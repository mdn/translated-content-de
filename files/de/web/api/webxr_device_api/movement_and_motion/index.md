---
title: "Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel"
slug: Web/API/WebXR_Device_API/Movement_and_motion
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{DefaultAPISidebar("WebXR Device API")}}

In diesem Artikel nutzen wir Informationen aus den vorherigen Artikeln unserer [WebXR](/de/docs/Web/API/WebXR_Device_API)-Tutorialreihe, um ein Beispiel zu erstellen, das einen rotierenden Würfel animiert, um den sich der Benutzer mit einem VR-Headset, einer Tastatur und/oder einer Maus frei bewegen kann. Dies wird Ihnen helfen, Ihr Verständnis darüber zu festigen, wie die Geometrie von 3D-Grafiken und VR funktioniert, und sicherzustellen, dass Sie verstehen, wie die bei der XR-Wiedergabe verwendeten Funktionen und Daten zusammenarbeiten.

**Abbildung: Screenshot dieses Beispiels in Aktion**
![Screenshot des Beispiels, das einen texturierten Würfel zeigt, um den sich der Benutzer bewegen kann](xr-sample.png)

Der Kern dieses Beispiels—der sich drehende, texturierte, beleuchtete Würfel—wurde aus unserer WebGL-Tutorialreihe übernommen; nämlich aus dem vorletzten Artikel der Serie, der sich mit [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) befasst.

Beim Lesen dieses Artikels und des begleitenden Quellcodes ist es hilfreich, sich vor Augen zu halten, dass der Bildschirm eines 3D-Headsets ein einzelner Bildschirm ist, der in zwei Hälften geteilt ist. Die linke Bildschirmhälfte wird nur vom linken Auge gesehen, während die rechte Hälfte nur vom rechten Auge gesehen wird. Um die Szene für eine immersive Präsentation darzustellen, sind mehrere Darstellungen der Szene erforderlich—einmal aus der Perspektive jedes Auges.

Beim Rendern des linken Auges ist die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) so konfiguriert, dass sie die [Ansicht](/de/docs/Web/API/XRWebGLLayer/getViewport) auf die linke Hälfte der Zeichenfläche beschränkt. Im Gegensatz dazu wird beim Rendern des rechten Auges die Ansicht so festgelegt, dass sie auf die rechte Hälfte der Zeichenfläche beschränkt ist.

Dieses Beispiel zeigt dies, indem es die Leinwand auf dem Bildschirm anzeigt, selbst wenn eine Szene mit einem XR-Gerät als immersive Darstellung präsentiert wird.

## Abhängigkeiten

In diesem Beispiel werden wir keine 3D-Grafik-Frameworks wie [`three.js`](https://threejs.org/) oder ähnliches verwenden, aber wir nutzen die [`glMatrix`](https://glmatrix.net/) Bibliothek für Matrizenmathematik, die wir auch in anderen Beispielen in der Vergangenheit genutzt haben. Ebenfalls importiert dieses Beispiel das [WebXR polyfill](https://github.com/immersive-web/webxr-polyfill/), das von der Immersive Web Working Group gewartet wird, der Gruppe, die für die Spezifikation der WebXR API verantwortlich ist. Durch das Importieren dieses Polyfills können wir das Beispiel in vielen Browsern ausführen, die noch keine WebXR-Implementierungen haben, und glätten Transienten Abweichungen von der Spezifikation, die in diesen noch experimentellen Tagen der WebXR-Spezifikation auftreten.

## Optionen

Dieses Beispiel bietet eine Reihe von Optionen, die Sie durch Anpassen der Konstantenwerte konfigurieren können, bevor Sie es im Browser laden. Der Code sieht folgendermaßen aus:

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
  - : Die Anzahl der Rotationsgrade, die pro Sekunde um die X-Achse angewendet werden sollen.
- `yRotationDegreesPerSecond`
  - : Die Anzahl der Grad, um die pro Sekunde um die Y-Achse rotiert wird.
- `zRotationDegreesPerSecond`
  - : Die Anzahl der Grad pro Sekunde, die um die Z-Achse rotiert wird.
- `enableRotation`
  - : Ein Boolescher Wert, der angibt, ob die Rotation des Würfels aktiviert werden soll.
- `allowMouseRotation`
  - : Wenn `true`, können Sie die Maus verwenden, um den Blickwinkel zu pitchen und zu yawen.
- `allowKeyboardMotion`
  - : Wenn `true`, können die Tasten W, A, S und D den Betrachter nach oben, links, unten und rechts bewegen, während die Pfeiltasten nach oben und unten vorwärts und rückwärts bewegen. Wenn `false`, sind nur Änderungen des Blickwinkels durch XR-Geräte erlaubt.
- `enableForcePolyfill`
  - : Wenn dieser Boolesche Wert `true` ist, versucht das Beispiel das WebXR-Polyfill zu verwenden, selbst wenn der Browser tatsächlich Unterstützung für WebXR hat. Wenn `false`, wird das Polyfill nur verwendet, wenn der Browser [`navigator.xr`](/de/docs/Web/API/Navigator/xr) nicht implementiert.
- `SESSION_TYPE`
  - : Der Typ der XR-Sitzung, die erstellt werden soll: `inline` für eine Inline-Sitzung im Kontext des Dokuments und `immersive-vr`, um die Szene einem immersiven VR-Headset zu präsentieren.
- `MOUSE_SPEED`
  - : Ein Multiplikator, der verwendet wird, um die Eingaben von der Maus für die Steuerung des Pitches und Yaws zu skalieren.
- `MOVE_DISTANCE`
  - : Die Entfernung, die als Reaktion auf eines der zur Bewegung des Zuschauers durch die Szene verwendeten Tasten zurückgelegt werden soll.

> [!NOTE]
> Dieses Beispiel zeigt das, was es rendert, immer auf dem Bildschirm an, auch wenn der `immersive-vr` Modus verwendet wird. Dadurch können Sie etwaige Unterschiede in der Darstellung zwischen den beiden Modi vergleichen, und Sie können die Ausgaben aus dem immersiven Modus sehen, auch wenn Sie kein Headset haben.

## Einrichtung und Hilfsfunktionen

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

Es folgt eine Reihe von Konstanten, hauptsächlich zur Speicherung verschiedener Vektoren und Matrizen, die beim Rendern der Szene verwendet werden.

```js
const viewerStartPosition = vec3.fromValues(0, 0, -10);
const viewerStartOrientation = vec3.fromValues(0, 0, 1.0);

const cubeOrientation = vec3.create();
const cubeMatrix = mat4.create();
const mouseMatrix = mat4.create();
const inverseOrientation = quat.create();
const RADIANS_PER_DEGREE = Math.PI / 180.0;
```

Die ersten beiden—`viewerStartPosition` und `viewerStartOrientation`—geben an, wo der Betrachter relativ zum Mittelpunkt des Raums platziert wird und in welche Richtung er zunächst schauen wird. `cubeOrientation` speichert die aktuelle Ausrichtung des Würfels, während `cubeMatrix` und `mouseMatrix` Speicher für Matrizen sind, die während des Renderns der Szene verwendet werden. `inverseOrientation` ist ein Quaternion, das verwendet wird, um die Rotation zu repräsentieren, die auf den Referenzraum für das Objekt im gerenderten Frame angewendet werden soll.

`RADIANS_PER_DEGREE` ist der Wert, mit dem ein Winkel in Grad multipliziert wird, um den Winkel in Bogenmaß umzurechnen.

Die letzten vier deklarierten Variablen sind Speicher für Referenzen auf die {{HTMLElement("div")}}-Elemente, in die wir die Matrizen ausgeben, wenn wir sie dem Benutzer zeigen möchten.

### Protokollierung von Fehlern

Eine Funktion namens `LogGLError()` wird implementiert, um eine leicht anpassbare Möglichkeit bereitzustellen, Protokollierungsinformationen für Fehler auszugeben, die beim Ausführen von WebGL-Funktionen auftreten.

```js
function LogGLError(where) {
  let err = gl.getError();
  if (err) {
    console.error(`WebGL error returned by ${where}: ${err}`);
  }
}
```

Diese nimmt als einzige Eingabe eine Zeichenkette, `where`, die verwendet wird, um anzuzeigen, welcher Teil des Programms den Fehler generiert hat, da ähnliche Fehler in mehreren Situationen auftreten können.

### Die Vertex- und Fragment-Shader

Die Vertex- und Fragment-Shader sind genau die gleichen wie in dem Beispiel für unseren Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL). [Sehen Sie sich das an](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL#update_the_shaders), wenn Sie an dem [GLSL](/de/docs/Web/API/WebGL_API/By_example/Hello_GLSL)-Quellcode für die hier verwendeten Basis-Shader interessiert sind.

Es genügt zu sagen, dass der Vertex-Shader die Position jedes Vertex anhand der Anfangspositionen jedes Vertex und der Transformationen berechnet, die angewendet werden müssen, um sie zu simulieren, basierend auf der aktuellen Position und Orientierung des Zuschauers. Der Fragment-Shader gibt die Farbe jedes Vertex zurück, wobei er bei Bedarf von den in der Textur gefundenen Werten interpoliert und die Lichteffekte anwendet.

## Starten und Beenden von WebXR

Beim initialen Laden des Skripts installieren wir einen Handler für das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis, um die Initialisierung durchzuführen.

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

Der `load`-Ereignishandler erhält einen Verweis auf die Schaltfläche, die WebXR ein- und ausschaltet, in `xrButton`, und fügt dann einen Handler für [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse hinzu. Dann werden Referenzen zu den vier {{HTMLElement("div")}}-Blöcken erhalten, in die wir die aktuellen Inhalte jeder der wichtigsten Matrizen zu Informationszwecken ausgeben, während unsere Szene läuft.

Dann prüfen wir, ob [`navigator.xr`](/de/docs/Web/API/Navigator/xr) definiert ist. Falls nicht, und/oder die Konfigurationskonstante `enableForcePolyfill` auf `true` gesetzt ist, installieren wir das WebXR-Polyfill, indem wir die `WebXRPolyfill`-Klasse instanziieren.

### Verwaltung der Startup- und Shutdown-Benutzeroberfläche

Dann rufen wir die Funktion `setupXRButton()` auf, die die Konfiguration der Schaltfläche "WebXR starten/beenden" verwaltet, um sie je nach Verfügbarkeit von WebXR-Unterstützung für den in der Konstante `SESSION_TYPE` angegebenen Sitzungs-Typ zu aktivieren oder zu deaktivieren.

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

Die Beschriftung der Schaltfläche wird im Code angepasst, der tatsächlich die WebXR-Sitzung startet und stoppt; wir werden das weiter unten sehen.

Die WebXR-Sitzung wird ein- und ausgeschaltet durch den Handler für [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse auf der Schaltfläche, deren Beschriftung passend auf "WebXR starten" oder "WebXR beenden" gesetzt wird. Dies geschieht durch den Ereignishandler `onXRButtonClick()`.

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

Dies beginnt damit, den Wert von `xrSession` zu überprüfen, um zu sehen, ob wir bereits ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt haben, das eine laufende WebXR-Sitzung darstellt. Wenn wir das nicht haben, stellt der Klick eine Anforderung dar, den WebXR-Modus zu aktivieren. Dann rufen wir [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) auf, um eine WebXR-Sitzung des gewünschten WebXR-Sitzungstyps anzufordern, und rufen dann `sessionStarted()` auf, um die Szene in dieser WebXR-Sitzung zu starten.

Wenn wir bereits eine laufende Sitzung haben, rufen wir die [`end()`](/de/docs/Web/API/XRSession/end)-Methode auf, um die Sitzung zu stoppen.

Das letzte, was wir in diesem Code tun, ist zu überprüfen, ob `xrSession` immer noch nicht-`NULL` ist. Wenn dies der Fall ist, rufen wir `sessionEnded()` auf, den Handler für das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis. Dieser Code sollte nicht notwendig sein, aber es scheint ein Problem zu geben, bei dem mindestens einige Browser das `end`-Ereignis nicht korrekt auslösen. Indem wir den Ereignishandler direkt ausführen, schließen wir in dieser Situation den Abschlussprozess manuell ab.

### Starten der WebXR-Sitzung

Die `sessionStarted()`-Funktion verwaltet das eigentliche Einrichten und Starten der Sitzung, indem sie Ereignishandler einrichtet, den GLSL-Code für die Vertex- und Fragment-Shader kompiliert und installiert und die WebGL-Schicht an die WebXR-Sitzung anhängt, bevor sie die Render-Schleife starten.Wird aufgerufen als Handler für das Versprechen, das von [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) zurückgegeben wird.

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

Nachdem das neu erstellte [`XRSession`](/de/docs/Web/API/XRSession)-Objekt in `xrSession` gespeichert wurde, wird die Beschriftung der Schaltfläche auf "WebXR beenden" gesetzt, um ihre neue Funktion nach dem Starten der Szene anzuzeigen, und es wird ein Handler für das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis installiert, damit wir benachrichtigt werden, wenn die `XRSession` endet.

Dann erhalten wir einen Verweis auf die im HTML enthaltene {{HTMLElement("canvas")}} sowie auf den WebGL-Rendering-Kontext, der als Zeichenfläche für die Szene verwendet wird. Die Eigenschaft `xrCompatible` wird angefordert, wenn [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf dem Element aufgerufen wird, um Zugriff auf den WebGL-Rendering-Kontext für die Leinwand zu erhalten. Dies stellt sicher, dass der Kontext für die Verwendung als Quelle für WebXR-Rendering konfiguriert ist.

Als nächstes fügen wir Ereignishandler für die [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) hinzu, jedoch nur, wenn die Konstante `allowMouseRotation` `true` ist. Der `mousemove`-Handler wird sich mit dem Pitchen und Yawing des Blickwinkels basierend auf der Mausbewegung befassen. Da die ""-Funktion nur funktioniert, während die rechte Maustaste gedrückt gehalten wird, und das Klicken mit der rechten Maustaste das Kontextmenü auslöst, fügen wir dem Leinwandstück einen Handler für das `contextmenu`-Ereignis hinzu, um zu verhindern, dass das Kontextmenü erscheint, wenn der Benutzer mit seinem Mauszeiger beginnt.

Als nächstes kompilieren wir die Shader-Programme; erhalten Referenzen auf ihre Variablen; initialisieren die Puffer, die das Array jeder Position speichern; die Indizes in die Positionstabelle für jeden Vertex; die Vertex-Normalen; und die Texturkoordinaten für jeden Vertex. Dies ist alles direkt aus dem WebGL-Beispielcode übernommen, also beziehen Sie sich auf [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) und die vorhergehenden Artikel [Erstellen von 3D-Objekten mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL) und [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL). Dann wird unsere `loadTexture()`-Funktion aufgerufen, um die Texturdatei zu laden.

Jetzt, da die Renderstrukturen und Daten geladen sind, beginnen wir, die `XRSession` vorzubereiten. Wir verbinden die Sitzung mit der WebGL-Schicht, sodass sie weiß, was sie als Rendering-Oberfläche verwenden soll, indem wir [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) mit einer `baseLayer` auf eine neue [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) aufrufen.

Dann schauen wir uns den Wert der `SESSION_TYPE`-Konstanten an, um zu sehen, ob der WebXR-Kontext immersiv oder inline sein soll. Immersive Sitzungen verwenden den `local` Referenzraum, während Inline-Sitzungen den `viewer` Referenzraum verwenden.

Die `glMatrix`-Bibliothek verwendet die `fromTranslation()`-Funktion für 4x4-Matrizen, um die Startposition des Betrachters wie im `viewerStartPosition`-Konstanten angegeben in eine Transformationsmatrix `cubeMatrix` zu konvertieren. Die Startausrichtung des Betrachters, `viewerStartOrientation`-Konstante, wird in die `cubeOrientation` kopiert, die verwendet wird, um die Rotation des Würfels im Laufe der Zeit zu verfolgen.

`sessionStarted()` schließt ab, indem die [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace)-Methode der Sitzung aufgerufen wird, um ein Referenzraumobjekt zu erhalten, das den Raum beschreibt, in dem das Objekt erstellt wird. Wenn das zurückgegebene Versprechen zu einem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Objekt aufgelöst wird, rufen wir seine [`getOffsetReferenceSpace`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace)-Methode auf, um ein Referenzraumobjekt zu erhalten, das das Koordinatensystem des Objekts repräsentiert. Der Ursprung des neuen Raums befindet sich an den in `viewerStartPosition` angegebenen Weltkoordinaten, und seine Ausrichtung ist auf `cubeOrientation` gesetzt. Dann lassen wir die Sitzung wissen, dass wir bereit sind, ein Frame zu zeichnen, indem wir ihre [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Methode aufrufen. Wir protokollieren die zurückgegebene Anforderungs-ID, falls wir die Anforderung später abbrechen müssen.

Schließlich gibt `sessionStarted()` die [`XRSession`](/de/docs/Web/API/XRSession) zurück, die die WebXR-Sitzung des Benutzers darstellt.

### Wenn die Sitzung endet

Wenn die WebXR-Sitzung endet—entweder weil sie vom Benutzer heruntergefahren wird oder durch Aufruf von [`XRSession.end()`](/de/docs/Web/API/XRSession/end)—wird das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis gesendet; wir haben dies so eingerichtet, dass eine Funktion namens `sessionEnded()` aufgerufen wird.

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

Wir können auch `sessionEnded()` direkt aufrufen, wenn wir die WebXR-Sitzung programmatisch beenden möchten. In beiden Fällen wird die Beschriftung der Schaltfläche aktualisiert, um anzuzeigen, dass ein Klick eine Sitzung starten wird, und dann, wenn eine ausstehende Anforderung für ein Animationsbild besteht, stornieren wir sie, indem wir [`cancelAnimationFrame`](/de/docs/Web/API/XRSession/cancelAnimationFrame) aufrufen.

Sobald dies erledigt ist, wird der Wert von `xrSession` auf `NULL` gesetzt, um anzugeben, dass wir mit der Sitzung fertig sind.

## Implementierung der Steuerungen

Sehen wir uns nun den Code an, der Tastatur- und Mausereignisse in etwas umwandelt, das zur Steuerung eines Avatars in einem WebXR-Szenario verwendet werden kann.

### Bewegung mit der Tastatur

Um dem Benutzer zu ermöglichen, sich durch die 3D-Welt zu bewegen, auch wenn er kein WebXR-Gerät mit den Eingaben für Bewegungen durch den Raum hat, reagiert unser Handler für [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse `handleKeyDown()` durch Aktualisieren der Offsets vom Ursprung des Objekts basierend auf der gedrückten Taste.

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

Die Tasten und ihre Auswirkungen sind:

- Die <kbd>W</kbd>-Taste bewegt den Betrachter um `MOVE_DISTANCE` nach oben.
- Die <kbd>S</kbd>-Taste bewegt den Betrachter um `MOVE_DISTANCE` nach unten.
- Die <kbd>A</kbd>-Taste schiebt den Betrachter um `MOVE_DISTANCE` nach links.
- Die <kbd>D</kbd>-Taste schiebt den Betrachter um `MOVE_DISTANCE` nach rechts.
- Die Aufwärtspfeil-Taste, <kbd>↑</kbd>, schiebt den Betrachter vorwärts um `MOVE_DISTANCE`.
- Die Abwärtspfeil-Taste, <kbd>↓</kbd>, schiebt den Betrachter rückwärts um `MOVE_DISTANCE`.
- Die <kbd>R</kbd>-Taste setzt den Betrachter in seine Startposition und -ausrichtung zurück, indem alle Eingabe-Offsets auf 0 gesetzt werden.

Diese Offsets werden vom Renderer ab dem nächsten gezeichneten Frame angewendet.

### Pitchen und Yawen mit der Maus

Wir haben auch einen [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignishandler, der überprüft, ob die rechte Maustaste gedrückt ist. Falls ja, ruft er die Funktion `rotateViewBy()` auf, die nächst definiert wird, um die neuen Pitch- (hoch- und runterschauen) und Yaw-Werte (links- und rechtsblicken) zu berechnen und zu speichern.

```js
function handlePointerMove(event) {
  if (event.buttons & 2) {
    rotateViewBy(event.movementX, event.movementY);
  }
}
```

Die Berechnung der neuen Pitch- und Yaw-Werte wird von der Funktion `rotateViewBy()` übernommen:

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

Angenommen, als Eingabe die Mausdeltas `dx` und `dy`, wird der neue Yaw-Wert berechnet, indem vom aktuellen Wert von `mouseYaw` das Produkt von `dx` und der `MOUSE_SPEED`-Skalierungskonstante subtrahiert wird. Sie können dann die Reaktionsfähigkeit der Maus steuern, indem Sie den Wert von `MOUSE_SPEED` erhöhen.

## Ein Frame zeichnen

Unser Rückruf für [`XRSession.requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) wird in der unten gezeigten `drawFrame()`-Funktion implementiert. Ihre Aufgabe ist es, den Referenzraum des Betrachters zu erhalten, zu berechnen, wie viel Bewegung auf animierte Objekte angewendet werden muss, abhängig von der Zeit, die seit dem letzten Frame vergangen ist, und dann jede der vom Betrachter angegebenen Ansichten im [`XRPose`](/de/docs/Web/API/XRPose) zu rendern.

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

Das Erste, was wir tun, ist [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufzurufen, damit `drawFrame()` wieder für das nächste zu rendernde Frame aufgerufen wird. Dann übergeben wir den Referenzraum des Objekts an die `applyViewerControls()`-Funktion, die einen überarbeiteten [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) zurückgibt, der die Position und Orientierung des Objekts anpasst, um die vom Benutzer mit der Tastatur und Maus angewendete Bewegung, Pitch und Yaw zu berücksichtigen. Denken Sie daran, dass, wie immer, die Objekte in der Welt bewegt und neu ausgerichtet werden, nicht der Betrachter. Der zurückgegebene Referenzraum erleichtert es uns, dies zu tun.

Mit dem neuen Referenzraum in Hand bekommen wir die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), die den Standpunkt des Betrachters darstellt—für beide Augen. Wenn dies erfolgreich ist, beginnen wir mit der Vorbereitung auf das Rendern, indem wir die derzeit von der Sitzung verwendete [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) erhalten und ihren Frame-Puffer so binden, dass er als WebGL-Frame-Puffer verwendet wird (so dass das Rendern von WebGL in die Schicht und damit in das Display des XR-Geräts gezeichnet wird). Mit WebGL, das nun zum Rendern auf das XR-Gerät eingerichtet ist, löschen wir das Frame auf Schwarz und sind bereit, mit dem Rendern zu beginnen.

Die seit dem letzten gerenderten Frame vergangene Zeit (in Sekunden) wird berechnet, indem der Zeitstempel des vorherigen Frames `lastFrameTime` von der aktuellen Zeit, wie im `time`-Parameter angegeben, subtrahiert und dann mit 0,001 multipliziert wird, um Millisekunden in Sekunden umzurechnen. Die aktuelle Zeit wird dann in `lastFrameTime` gespeichert.

Die `drawFrame()`-Funktion endet, indem sie über jede in der [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) gefundene Ansicht iteriert, die Ansicht für die Ansicht einrichtet und `renderScene()` aufruft, um das Frame zu rendern. Indem sie die Ansicht für jede Ansicht einrichtet, behandelt sie das typische Szenario, in dem die Ansichten für jedes Auge jeweils auf die Hälfte des WebGL-Frames gerendert werden. Die XR-Hardware stellt dann sicher, dass jedes Auge nur den Abschnitt dieses Bildes sieht, der für dieses Auge vorgesehen ist.

> [!NOTE]
> In diesem Beispiel präsentieren wir das Frame sowohl auf dem XR-Gerät als auch auf dem Bildschirm visuell. Um sicherzustellen, dass die Leinwand auf dem Bildschirm die richtige Größe hat, um dies zu ermöglichen, setzen wir ihre Breite auf die Breite der einzelnen [`XRView`](/de/docs/Web/API/XRView) multipliziert mit der Anzahl der Ansichten; die Höhe der Leinwand entspricht immer der Höhe der Ansicht. Die beiden Codezeilen, die die Größe der Leinwand anpassen, sind in regulären WebXR-Render-Schleifen nicht erforderlich.

### Anwendung der Benutzereingaben

Die `applyViewerControls()`-Funktion, die von `drawFrame()` aufgerufen wird, bevor mit dem Rendern begonnen wird, nimmt die Offsets in jeder der drei Richtungen sowie den Yaw- und Pitch-Offset, wie sie von den Funktionen `handleKeyDown()` und `handlePointerMove()` in Reaktion auf das Drücken von Tasten durch den Benutzer und das Ziehen der Maus mit gedrückter rechter Maustaste aufgezeichnet wurden. Es nimmt als Eingabe den Basis-Referenzraum für das Objekt und gibt einen neuen Referenzraum zurück, der den Standort und die Ausrichtung des Objekts so ändert, dass das Ergebnis der Eingaben zum Tragen kommt.

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

Wenn alle Eingabe-Offsets null sind, geben wir einfach den ursprünglichen Referenzraum zurück. Andernfalls erstellen wir aus den Orientierungsänderungen in `mousePitch` und `mouseYaw` ein Quaternion, das die Inverse dieser Orientierung angibt, so dass die Anwendung des `inverseOrientation` auf den Würfel korrekt das Ergebnis der Bewegung des Betrachters reflektiert.

Dann ist es Zeit, ein neues [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt zu erstellen, das die Transformation repräsentiert, die verwendet wird, um den neuen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) für das bewegte und/oder neu ausgerichtete Objekt zu erstellen. Die Position ist ein neuer Vektor, dessen `x`, `y` und `z` den Offsets entsprechen, die entlang jeder dieser Achsen verschoben wurden. Die Orientierung ist das `inverseOrientation`-Quaternion.

Wir kopieren die [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Transformation in `mouseMatrix`, die wir später verwenden, um die Mausverfolgungsmatrix dem Benutzer anzuzeigen (dies ist also ein Schritt, den Sie normalerweise überspringen können). Schließlich übergeben wir das `XRRigidTransform` in den aktuellen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) des Objekts, um den Referenzraum zu erhalten, der diese Transformation integriert, um die Platzierung des Würfels relativ zum Betrachter zu repräsentieren, gegeben die Bewegungen des Benutzers. Dieser neue Referenzraum wird an den Aufrufer zurückgegeben.

### Die Szene rendern

Die `renderScene()`-Funktion wird aufgerufen, um tatsächlich die Teile der Welt zu rendern, die der Benutzer im Moment sehen kann. Sie wird einmal für jedes Auge aufgerufen, mit leicht unterschiedliche Positionen für jedes Auge, um den 3D-Effekt zu etablieren, der für XR-Geräte benötigt wird.

Der größte Teil dieses Codes ist typischer WebGL-Rendering-Code, der direkt aus der Funktion `drawScene()` im Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) übernommen wurde, und es ist dort, dass Sie nach Details zu den WebGL-Rendering-Teilen dieses Beispiels suchen sollten ([sehen Sie sich den Code auf GitHub an](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample7/webgl-demo.js)). Aber hier beginnt es mit etwas spezifischem Code für dieses Beispiel, also werfen wir einen genaueren Blick auf diesen Teil.

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

`renderScene()` beginnt damit, zu berechnen, wie viel Rotation während der seit dem vorherigen Frame abgelaufenen Zeit um jede der drei Achsen auftreten sollte. Diese Werte ermöglichen es uns, die Rotation unseres animierenden Würfels so anzupassen, dass seine Bewegungsgeschwindigkeit konsistent bleibt, unabhängig von variablen Frameraten, die aufgrund der Systemlast auftreten können. Diese Werte werden als die Anzahl der Rotationen berechnet, die in den abgelaufenen Zeitmaß in Bogenmaß anzuwenden sind und in den Konstanten `xRotationForTime`, `yRotationForTime` und `zRotationForTime` gespeichert.

Nach dem Aktivieren und Konfigurieren des Tiefentests überprüfen wir den Wert der `enableRotation`-Konstante, ob die Rotation des Würfels aktiviert ist; wenn ja, verwenden wir glMatrix, um die `cubeMatrix` (die die aktuelle Ausrichtung des Würfels relativ zum Weltall repräsentiert) um die drei Achsen zu rotieren. Mit der globalen Ausrichtung des Würfels etabliert, multiplizieren wir dies dann mit der Inverse der Transformationsmatrix der Ansicht, um die endgültige Modellansichtsmatrix zu erhalten—die Matrix, die auf das Objekt angewendet werden muss, um sowohl das Objekt innerhalb seiner Animation zu rotieren, als auch es zu bewegen und neu auszurichten, um die Bewegung des Betrachters durch den Raum zu simulieren.

Dann wird die Normalenmatrix der Ansicht berechnet, indem die Modellansichtsmatrix invertiert und transponiert wird (das heißt, Zeilen und Spalten verkehrt werden).

Die letzten Codezeilen, die für dieses Beispiel hinzugefügt wurden, sind vier Aufrufe der `displayMatrix()`-Funktion, die die Inhalte einer Matrix zur Analyse durch den Benutzer anzeigt. Der Rest der Funktion ist identisch oder im Wesentlichen identisch mit dem WebGL-Beispiel, aus dem dieser Code stammt.

### Eine Matrix anzeigen

Zum Unterrichtszweck zeigt dieses Beispiel den Inhalt der wichtigen Matrizen an, die während des Renderns der Szene verwendet werden. Die `displayMatrix()`-Funktion wird dafür verwendet; diese Funktion verwendet MathML, um die Matrix zu rendern, und fällt auf ein mehr array-ähnliches Format zurück, wenn MathML vom Browser des Benutzers nicht unterstützt wird.

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

Dies ersetzt den Inhalt des durch `target` spezifizierten Elements mit einem neu erstellten {{MathMLElement("math")}}-Element, dass die 4x4-Matrix enthält. Jeder Eintrag wird mit bis zu zwei Dezimalstellen angezeigt.

### Alles andere

Der Rest des Codes ist identisch mit dem, der in den früheren Beispielen gefunden wird:

- `initShaderProgram()`
  - : Initialisiert das GLSL-Shader-Programm, indem `loadShader()` aufgerufen wird, um das Programm jeder Shader zu laden und zu kompilieren, und dann jeden an den WebGL-Kontext anzuheften. Sobald sie kompiliert sind, wird das Programm verlinkt und an den Aufrufer zurückgegeben.
- `loadShader()`
  - : Erstellt ein Shader-Objekt und lädt den angegebenen Quellcode darin, bevor der Code kompiliert wird und sichergestellt wird, dass der Compiler erfolgreich war, bevor der neu kompilierte Shader an den Aufrufer zurückgegeben wird. Wenn ein Fehler auftritt, wird `NULL` zurückgegeben.
- `initBuffers()`
  - : Initialisiert die Puffer, die Daten enthalten, die in WebGL übergeben werden. Diese Puffer enthalten das Array der Vertex-Positionen, das Array der Vertex-Normalen, die Texturkoordinaten für jede Oberfläche des Würfels und die Liste der Vertex-Indizes (die spezifizieren, welcher Eintrag in der Vertex-Liste jede Ecke des Würfels darstellt).
- `loadTexture()`
  - : Lädt das Bild mit einer gegebenen URL und erstellt eine WebGL-Textur daraus. Wenn die Abmessungen des Bildes nicht beide Potenzen von zwei sind (siehe die Funktion `isPowerOf2()`), werden Mipmapping deaktiviert und das Klemmen wird an die Kanten beschränkt. Dies liegt daran, dass das optimierte Rendering von Mipmapped-Texturen nur für Texturen funktioniert, deren Abmessungen in WebGL 1 Zweierpotenzen sind. PowerGL 2 unterstützt willkürlich große Texturen für Mipmapping.
- `isPowerOf2()`
  - : Gibt `true` zurück, wenn der angegebene Wert eine Zweierpotenz ist; andernfalls wird `false` zurückgegeben.

### Alles zusammenfügen

Wenn Sie all diesen Code nehmen und die HTML und den anderen JavaScript-Code, der oben nicht enthalten ist hinzufügen, erhalten Sie, was Sie sehen, wenn Sie [dieses Beispiel auf Glitch ausprobieren](https://webxr-experiment.glitch.me/). Denken Sie daran: Wenn Sie sich umsehen und verlaufen, drücken Sie einfach die <kbd>R</kbd>-Taste, um sich an den Anfang zurückzusetzen.

Ein Tipp: Wenn Sie kein XR-Gerät haben, können Sie möglicherweise etwas vom 3D-Effekt erhalten, wenn Sie Ihr Gesicht sehr nah an den Bildschirm bringen, wobei Ihre Nase entlang der Grenze zwischen dem linken und rechten Augenbild in der Leinwand zentriert ist. Wenn Sie vorsichtig durch den Bildschirm auf das Bild blicken und sich langsam vor- und zurückbewegen, sollten Sie irgendwann in der Lage sein, das 3D-Bild in den Fokus zu bringen. Es kann Übung erfordern und Ihre Nase kann buchstäblich den Bildschirm berühren, abhängig davon, wie scharf Ihr Sehvermögen ist.

Es gibt viele Dinge, die Sie mit diesem Beispiel als Ausgangspunkt tun können. Versuchen Sie, der Welt mehr Objekte hinzuzufügen oder die Bewegungssteuerungen zu verbessern, um realistischer zu bewegen. Fügen Sie Wände, Decken und Böden hinzu, um Sie in einem Raum zu umschließen, anstatt ein scheinbar unendliches Universum zu haben, in dem Sie sich verlaufen können. Fügen Sie Kollisionstests oder Treffer-Tests hinzu, oder die Möglichkeit, die Textur jeder Seite des Würfels zu ändern.

Es gibt nur wenige Einschränkungen für das, was getan werden kann, wenn Sie sich darauf einlassen.

## Siehe auch

- [Lernen Sie WebGL](https://learnwebgl.brown37.net/#) (enthält einige großartige Visualisierungen der Kamera und wie sie sich auf die virtuelle Welt bezieht)
- [WebGL Grundlagen](https://webglfundamentals.org/)
- [Lernen Sie OpenGL](https://learnopengl.com/)
