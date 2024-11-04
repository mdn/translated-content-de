---
title: "Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel"
slug: Web/API/WebXR_Device_API/Movement_and_motion
l10n:
  sourceCommit: b7a7c441fa025458f2bf67d714c3303085e8258a
---

{{DefaultAPISidebar("WebXR Device API")}}

In diesem Artikel nutzen wir die in den vorherigen Artikeln unserer [WebXR](/de/docs/Web/API/WebXR_Device_API) Tutorial-Serie eingeführten Informationen, um ein Beispiel zu erstellen, das einen rotierenden Würfel animiert, um den sich der Benutzer mit einem VR-Headset, einer Tastatur und/oder einer Maus frei bewegen kann. Dies wird dazu beitragen, Ihr Verständnis der Geometrie von 3D-Grafiken und VR zu festigen und sicherzustellen, dass Sie verstehen, wie die während der XR-Renderung verwendeten Funktionen und Daten zusammenarbeiten.

**Abbildung: Screenshot dieses Beispiels in Aktion**
![Screenshot des Beispiels, das einen texturierten Würfel zeigt, um den sich der Benutzer bewegen kann](xr-sample.png)

Der Kern dieses Beispiels – der drehende, texturierte und beleuchtete Würfel – stammt aus unserer WebGL-Tutorial-Serie; genauer gesagt aus dem vorletzten Artikel der Serie, der sich mit [Licht in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) befasst.

Beim Lesen dieses Artikels und des begleitenden Quellcodes ist es hilfreich, sich daran zu erinnern, dass das Display eines 3D-Headsets ein einzelner Bildschirm ist, der in zwei Hälften geteilt ist. Die linke Bildschirmhälfte wird nur vom linken Auge gesehen, während die rechte Hälfte nur vom rechten Auge gesehen wird. Für eine immersive Präsentation der Szene sind mehrere Renderings erforderlich – eines aus der Perspektive jedes Auges.

Beim Rendern für das linke Auge ist die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) so konfiguriert, dass der [Viewport](/de/docs/Web/API/XRWebGLLayer/getViewport) auf die linke Hälfte der Zeichenoberfläche beschränkt wird. Im Gegensatz dazu wird beim Rendern für das rechte Auge der Viewport so eingestellt, dass er nur die rechte Hälfte der Oberfläche nutzt.

Dieses Beispiel demonstriert dies, indem die Leinwand auf dem Bildschirm angezeigt wird, selbst wenn eine Szene mit einem XR-Gerät als immersive Anzeige präsentiert wird.

## Abhängigkeiten

Während wir in diesem Beispiel nicht auf 3D-Grafik-Frameworks wie [`three.js`](https://threejs.org/) oder Ähnliches zurückgreifen, verwenden wir die [`glMatrix`](https://glmatrix.net/) Bibliothek für die Matrixmathematik, die wir auch in früheren Beispielen verwendet haben. Dieses Beispiel importiert auch das von der Immersive Web Working Group gepflegte [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill/), die für die Spezifikation der WebXR API verantwortlich ist. Indem wir dieses Polyfill importieren, ermöglichen wir es dem Beispiel, in vielen Browsern zu funktionieren, die noch keine WebXR-Implementierungen haben, und wir glätten vorübergehende Abweichungen von der Spezifikation, die in diesen noch experimentellen Tagen der WebXR-Spezifikation auftreten.

## Optionen

Dieses Beispiel bietet eine Reihe von Konfigurationsoptionen, die durch Anpassung der Konstantenwerte vor dem Laden im Browser geändert werden können. Der Code sieht folgendermaßen aus:

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
  - : Die Anzahl der Grad, um die jede Sekunde um die X-Achse gedreht wird.
- `yRotationDegreesPerSecond`
  - : Die Anzahl der Grad, um die jede Sekunde um die Y-Achse gedreht wird.
- `zRotationDegreesPerSecond`
  - : Die Anzahl der Grad, um die jede Sekunde um die Z-Achse gedreht wird.
- `enableRotation`
  - : Ein Boolean, das angibt, ob die Rotation des Würfels überhaupt aktiviert werden soll.
- `allowMouseRotation`
  - : Wenn `true`, kann die Maus verwendet werden, um den Blickwinkel zu kippen und zu schwenken.
- `allowKeyboardMotion`
  - : Wenn `true`, bewegen die Tasten W, A, S und D den Betrachter nach oben, links, unten und nach rechts, während die Pfeiltasten nach oben und unten vorwärts und rückwärts bewegen. Wenn `false`, sind nur XR-Geräteänderungen des Blickwinkels erlaubt.
- `enableForcePolyfill`
  - : Wenn dieses Boolean auf `true` gesetzt ist, versucht das Beispiel, das WebXR-Polyfill zu verwenden, selbst wenn der Browser tatsächlich WebXR unterstützt. Wenn `false`, wird das Polyfill nur verwendet, wenn der Browser [`navigator.xr`](/de/docs/Web/API/Navigator/xr) nicht implementiert.
- `SESSION_TYPE`
  - : Der Typ der XR-Session, die erstellt werden soll: `inline` für eine Inline-Sitzung, die im Kontext des Dokuments präsentiert wird, und `immersive-vr`, um die Szene einem immersiven VR-Headset zu präsentieren.
- `MOUSE_SPEED`
  - : Ein Multiplikator, der verwendet wird, um die Eingaben der Maus für die Steuerung von Neigung und Schwenk zu skalieren.
- `MOVE_DISTANCE`
  - : Die Distanz, die als Antwort auf eine der Tasten verwendet wird, um den Betrachter durch die Szene zu bewegen.

> [!NOTE]
> Dieses Beispiel zeigt immer das, was es rendert, auf dem Bildschirm an, selbst wenn der `immersive-vr`-Modus verwendet wird. Dies ermöglicht Ihnen, Unterschiede in der Darstellung zwischen den beiden Modi zu vergleichen und die Ausgabe des immersiven Modus zu sehen, selbst wenn Sie kein Headset haben.

## Einrichtung und Hilfsfunktionen

Als nächstes deklarieren wir die Variablen und Konstanten, die in der gesamten Anwendung verwendet werden, beginnend mit denen, die WebGL- und WebXR-spezifische Informationen speichern:

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

Dies wird durch eine Reihe von Konstanten gefolgt, hauptsächlich um verschiedene Vektoren und Matrizen zu speichern, die beim Rendern der Szene verwendet werden.

```js
const viewerStartPosition = vec3.fromValues(0, 0, -10);
const viewerStartOrientation = vec3.fromValues(0, 0, 1.0);

const cubeOrientation = vec3.create();
const cubeMatrix = mat4.create();
const mouseMatrix = mat4.create();
const inverseOrientation = quat.create();
const RADIANS_PER_DEGREE = Math.PI / 180.0;
```

Die ersten beiden – `viewerStartPosition` und `viewerStartOrientation` – geben an, wo der Betrachter relativ zur Mitte des Raums plaziert wird, und in welche Richtung er zunächst schaut. `cubeOrientation` speichert die aktuelle Ausrichtung des Würfels, während `cubeMatrix` und `mouseMatrix` Speicherplatz für Matrizen sind, die während des Renderings der Szene verwendet werden. `inverseOrientation` ist ein Quaternion, das verwendet wird, um die Rotation zu repräsentieren, die auf den Referenzraum des Objekts im gerenderten Frame angewendet wird.

`RADIANS_PER_DEGREE` ist der Wert, mit dem ein Winkel in Grad multipliziert werden muss, um den Winkel in Bogenmaß umzurechnen.

Die letzten vier deklarierten Variablen sind Speicher für Referenzen zu den {{HTMLElement("div")}}-Elementen, in die wir die Matrizen ausgeben, wenn wir sie dem Benutzer zeigen möchten.

### Fehler protokollieren

Eine Funktion namens `LogGLError()` wird implementiert, um eine einfach anpassbare Methode bereitzustellen, um Protokollierungsinformationen für Fehler, die beim Ausführen von WebGL-Funktionen auftreten, auszugeben.

```js
function LogGLError(where) {
  let err = gl.getError();
  if (err) {
    console.error(`WebGL error returned by ${where}: ${err}`);
  }
}
```

Diese nimmt als einzige Eingabe einen String, `where`, entgegen, der verwendet wird, um anzugeben, welcher Teil des Programms den Fehler verursacht hat, da ähnliche Fehler in mehreren Situationen auftreten können.

### Die Vertex- und Fragment-Shader

Die Vertex- und Fragment-Shader sind genau dieselben wie in dem Beispiel für unseren Artikel [Licht in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) verwendet. Wenn Sie am [GLSL](/de/docs/Web/API/WebGL_API/By_example/Hello_GLSL) Quellcode der hier verwendeten grundlegenden Shader interessiert sind, [sehen Sie hier nach](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL#update_the_shaders).

Es genügt zu sagen, dass der Vertex-Shader die Position jedes Scheitelpunkts unter Berücksichtigung der anfänglichen Positionen der Scheitelpunkte und der Transformationen berechnet, die angewendet werden müssen, um sie zu simulieren, wie sie aus der aktuellen Position und Orientierung des Betrachters erscheinen. Der Fragment-Shader gibt die Farbe jedes Scheitelpunkts zurück, indem er sie nach Bedarf aus den Werten in der Textur interpoliert und die Lichteffekte anwendet.

## Starten und Beenden von WebXR

Beim erstmaligen Laden des Skripts installieren wir einen Handler für das [`load`](/de/docs/Web/API/Window/load_event) Ereignis, damit wir die Initialisierung durchführen können.

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

Der `load` Event-Handler erhält eine Referenz auf den Button, der WebXR ein- und ausschaltet, in `xrButton`, und fügt dann einen Handler für [`click`](/de/docs/Web/API/Element/click_event) Ereignisse hinzu. Anschließend werden Referenzen zu den vier {{HTMLElement("div")}} Blockelementen erhalten, in welche wir die aktuellen Inhalte jeder der wichtigsten Matrizen für Informationszwecke während des Laufens unserer Szene ausgeben.

Danach prüfen wir, ob [`navigator.xr`](/de/docs/Web/API/Navigator/xr) definiert ist. Falls nicht – und/oder die Konfiguration `enableForcePolyfill` auf `true` gesetzt ist – installieren wir das WebXR-Polyfill, indem wir die `WebXRPolyfill` Klasse instanziieren.

### Umgang mit der Startup- und Shutdown-Benutzeroberfläche

Dann rufen wir die Funktion `setupXRButton()` auf, die sich damit beschäftigt, den Button "Enter/Exit WebXR" zu konfigurieren, um ihn je nach Verfügbarkeit der WebXR-Unterstützung für den in der `SESSION_TYPE`-Konstante angegebenen Sitzungstyp zu aktivieren oder zu deaktivieren.

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

Das Label des Buttons wird im Code angepasst, der tatsächlich das Starten und Stoppen der WebXR-Sitzung behandelt; das werden wir unten sehen.

Die WebXR-Session wird durch den Handler für [`click`](/de/docs/Web/API/Element/click_event) Ereignisse auf den Button ein- und ausgeschaltet, dessen Label entsprechend auf "Enter WebXR" oder "Exit WebXR" gesetzt wird. Dies wird durch den `onXRButtonClick()` Event-Handler getan.

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

Dieser beginnt damit, den Wert von `xrSession` zu überprüfen, um zu sehen, ob wir bereits ein [`XRSession`](/de/docs/Web/API/XRSession) Objekt haben, das eine laufende WebXR-Sitzung repräsentiert. Wenn nicht, repräsentiert der Klick ein Ersuchen, den WebXR-Modus zu aktivieren. So rufen wir [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) auf, um eine WebXR-Sitzung des gewünschten Typs anzufordern, und rufen dann `sessionStarted()` auf, um die Szene in dieser WebXR-Sitzung zu starten.

Wenn wir bereits eine laufende Session haben, rufen wir dagegen die [`end()`](/de/docs/Web/API/XRSession/end) Methode auf, um die Session zu beenden.

Das Letzte, was wir in diesem Code tun, ist zu prüfen, ob `xrSession` immer noch nicht `NULL` ist. Wenn ja, rufen wir `sessionEnded()` auf, den Handler für das [`end`](/de/docs/Web/API/XRSession/end_event) Ereignis. Dieser Code sollte nicht notwendig sein, aber es scheint ein Problem zu geben, bei dem zumindest einige Browser das `end` Ereignis nicht korrekt auslösen. Indem wir den Event-Handler direkt ausführen, schließen wir manuell den Schließvorgang in dieser Situation ab.

### Starten der WebXR-Sitzung

Die `sessionStarted()` Funktion kümmert sich um das eigentliche Einrichten und Starten der Sitzung, indem sie Event-Handler einrichtet, den GLSL-Code für die Vertex- und Fragment-Shader kompiliert und installiert und die WebGL-Schicht an die WebXR-Sitzung anhängt, bevor die Render-Schleife gestartet wird. Sie wird als Handler für das von [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) zurückgegebene Versprechen aufgerufen.

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

Nachdem das neu erstellte [`XRSession`](/de/docs/Web/API/XRSession) Objekt in `xrSession` gespeichert wurde, wird das Label des Buttons auf "Exit WebXR" gesetzt, um seine neue Funktion nach dem Starten der Szene anzuzeigen, und ein Handler für das [`end`](/de/docs/Web/API/XRSession/end_event) Ereignis installiert, damit wir benachrichtigt werden, wenn die `XRSession` endet.

Dann erhalten wir eine Referenz auf die in unserem HTML gefundene {{HTMLElement("canvas")}} -Element sowie seinen WebGL-Rendering-Kontext, das als Zeichenfläche für die Szene verwendet werden soll. Die `xrCompatible` Eigenschaft wird angefragt, wenn [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf dem Element aufgerufen wird, um Zugang zum WebGL-Rendering-Kontext für die Leinwand zu erhalten. Dies stellt sicher, dass der Kontext für die Verwendung als Quelle für das WebXR-Rendering konfiguriert ist.

Als nächstes fügen wir Event-Handler für die [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignisse hinzu, jedoch nur, wenn die `allowMouseRotation` Konstante `true` ist. Der `mousemove`-Handler wird das Kippen und Schwenken des Blickwinkels entsprechend der Mausbewegung behandeln. Da die ""-Funktion nur funktioniert, während die rechte Maustaste gedrückt gehalten wird, und das Klicken mit der rechten Maustaste das Kontextmenü auslöst, fügen wir einen Handler für das `contextmenu` Ereignis auf der Leinwand hinzu, um zu verhindern, dass das Kontextmenü erscheint, wenn der Benutzer beginnt, die Maus zu ziehen.

Als nächstes kompilieren wir die Shader-Programme; erhalten Referenzen zu ihren Variablen; initialisieren die Puffer, die das Array jeder Position speichern; die Indexwerte in der Positionstabelle für jeden Scheitelpunkt; die Vertex-Normalen; und die Texturkoordinaten für jeden Vertex. Dies alles wird direkt aus dem WebGL-Beispielcode übernommen, daher verweisen wir auf [Licht in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) und die vorangegangenen Artikel [Erstellen von 3D-Objekten mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL) und [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL). Dann wird unsere `loadTexture()`-Funktion aufgerufen, um die Texturdatei zu laden.

Da die Rendering-Strukturen und -Daten geladen sind, beginnen wir mit der Vorbereitung, um die `XRSession` auszuführen. Wir verbinden die Sitzung mit der WebGL-Schicht, damit diese weiß, was als Rendering-Oberfläche verwendet werden soll, indem wir [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) mit einem `baseLayer` aufrufen, der auf eine neue [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) gesetzt ist.

Wir betrachten dann den Wert der `SESSION_TYPE` Konstante, um zu sehen, ob der WebXR-Kontext immersiv oder inline sein soll. Immersive Sitzungen verwenden die `local` Referenzraum, während Inline-Sitzungen die `viewer` Referenzraum verwenden.

Die `fromTranslation()` Funktion der `glMatrix` Bibliothek für 4x4 Matrizen wird verwendet, um die Startposition des Viewers wie in der `viewerStartPosition` Konstante angegeben in eine Transformationsmatrix `cubeMatrix` umzuwandeln. Die Startorientierung des Viewers, die `viewerStartOrientation` Konstante, wird in die `cubeOrientation` kopiert, die verwendet wird, um die Rotation des Würfels im Laufe der Zeit zu verfolgen.

`sessionStarted()` endet, indem die `requestReferenceSpace()` Methode der Sitzung aufgerufen wird, um ein Referenzraumobjekt zu erhalten, das den Raum beschreibt, in dem das Objekt erstellt wird. Wenn das zurückgegebene Versprechen zu einem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Objekt aufgelöst wird, rufen wir seine [`getOffsetReferenceSpace`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) Methode auf, um ein Referenzraumobjekt zu erhalten, das das Koordinatensystem des Objekts darstellt. Der Ursprung des neuen Raumes befindet sich an den Weltkoordinaten, die von der `viewerStartPosition` angegeben werden, und seine Orientierung wird auf `cubeOrientation` gesetzt. Dann geben wir der Sitzung Bescheid, dass wir bereit sind, ein Frame zu zeichnen, indem wir ihre [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) Methode aufrufen. Wir notieren uns die zurückgegebene Anforderungs-ID, falls wir die Anforderung später abbrechen müssen.

Schließlich gibt `sessionStarted()` die [`XRSession`](/de/docs/Web/API/XRSession) zurück, die die WebXR-Sitzung des Benutzers darstellt.

### Wenn die Sitzung endet

Wenn die WebXR-Sitzung endet – entweder weil sie vom Benutzer heruntergefahren wird oder durch das Aufrufen von [`XRSession.end()`](/de/docs/Web/API/XRSession/end) – wird das [`end`](/de/docs/Web/API/XRSession/end_event) Ereignis gesendet; wir haben es so eingerichtet, dass es eine Funktion namens `sessionEnded()` aufruft.

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

Wir können `sessionEnded()` auch direkt aufrufen, wenn wir die WebXR-Sitzung programmatisch beenden möchten. In jedem Fall wird das Label des Buttons aktualisiert, um anzuzeigen, dass ein Klick eine Sitzung startet, und dann, wenn ein ausstehender Anforderungsauftrag für ein Animationsframe existiert, abbrechen wir es durch das Aufrufen von [`cancelAnimationFrame`](/de/docs/Web/API/XRSession/cancelAnimationFrame).

Wenn das erledigt ist, wird der Wert von `xrSession` auf `NULL` geändert, um anzuzeigen, dass wir mit der Sitzung fertig sind.

## Umsetzung der Steuerungen

Sehen wir uns nun den Code an, der Tastatur- und Mausereignisse in etwas Verwendbares zur Steuerung eines Avatars in einem WebXR-Szenario umsetzt.

### Bewegung mit der Tastatur

Um es dem Benutzer zu ermöglichen, sich durch die 3D-Welt zu bewegen, selbst wenn er kein WebXR-Gerät mit den Eingabemöglichkeiten zur Bewegung durch den Raum hat, reagiert unser Handler für [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse, indem er Offsets von der Objektursprung basierend auf der gedrückten Taste aktualisiert.

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
- Die <kbd>A</kbd> Taste schiebt den Betrachter um `MOVE_DISTANCE` nach links.
- Die <kbd>D</kbd> Taste schiebt den Betrachter um `MOVE_DISTANCE` nach rechts.
- Die Aufwärtspfeiltaste, <kbd>↑</kbd>, schiebt den Betrachter um `MOVE_DISTANCE` vorwärts.
- Die Abwärtspfeiltaste, <kbd>↓</kbd>, schiebt den Betrachter um `MOVE_DISTANCE` rückwärts.
- Die <kbd>R</kbd> Taste setzt den Betrachter auf deren Ausgangsposition und -ausrichtung zurück, indem alle Eingabe-Offsets auf 0 zurückgesetzt werden.

Diese Offsets werden vom Renderer ab dem nächsten gezeichneten Frame angewendet.

### Neigen und Schwenken mit der Maus

Wir haben auch einen [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Ereignishandler, der überprüft, ob die rechte Maustaste gedrückt ist, und falls ja, ruft er die Funktion `rotateViewBy()` auf, die als nächstes definiert wird, um die neuen Neigungs- (Blick nach oben und unten) und Schwenk- (Blick nach links und rechts) Werte zu berechnen und zu speichern.

```js
function handlePointerMove(event) {
  if (event.buttons & 2) {
    rotateViewBy(event.movementX, event.movementY);
  }
}
```

Das Berechnen der neuen Neigungs- und Schwenkwerte wird von der Funktion `rotateViewBy()` behandelt:

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

Die gegebenen Eingaben, die Maus-Deltas `dx` und `dy`, werden zur Berechnung der neuen Schwenk-Wertes verwendet, indem vom aktuellen Wert von `mouseYaw` das Produkt aus `dx` und der `MOUSE_SPEED` Skala subtrahiert wird. Sie können dann die Empfindlichkeit der Maus steuern, indem Sie den Wert der `MOUSE_SPEED` erhöhen.

## Zeichnen eines Frames

Unser Callback für [`XRSession.requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) wird in der `drawFrame()` Funktion unten implementiert. Seine Aufgabe ist es, den Referenzraum des Betrachters zu erhalten, zu berechnen, wie viel Bewegung auf alle animierten Objekte angewendet werden soll, basierend auf der seit dem letzten Frame verstrichenen Zeit, und dann jede der vom Betrachter `XRPose` spezifizierten Ansichten zu rendern.

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

Das erste, was wir tun, ist [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufzurufen, um zu verlangen, dass `drawFrame()` für das nächste zu rendernde Frame erneut aufgerufen wird. Dann übergeben wir den Referenzraum des Objekts an die `applyViewerControls()` Funktion, die einen überarbeiteten [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) zurückgibt, der Position und Orientierung des Objekts transformiert, um die durch die Benutzer durch Tastatur und Maus angewendete Bewegung, Neigung und Schwenkung zu berücksichtigen. Denken Sie daran, dass immer die Objekte der Welt verschoben und neu ausgerichtet werden, nicht der Betrachter. Der zurückgegebene Referenzraum ermöglicht es uns, genau das einfach zu tun.

Mit dem neuen Referenzraum in der Hand erhalten wir die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), die den Blickwinkel des Betrachters repräsentiert – für beide Augen. Wenn das erfolgreich ist, beginnen wir mit der Vorbereitung des Renderings, indem wir die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), die von der Sitzung genutzt wird, abrufen und deren Framebuffer als WebGL-Framebuffer binden, sodass das Rendering in diese Schicht und damit in das Display des XR-Geräts gezeichnet wird. Mit WebGL, das jetzt konfiguriert ist, um auf das XR-Gerät zu zeichnen, löschen wir den Frame in Schwarz und sind bereit, mit dem Rendern zu beginnen.

Die seit dem letzten Frame verstrichene Zeit (in Sekunden) wird berechnet, indem der Zeitstempel des vorherigen Frames `lastFrameTime` von der aktuellen Zeitzeit als durch den `time` Parameter angegeben abgezogen wird, und dann mit 0,001 multipliziert wird, um Millisekunden in Sekunden umzurechnen. Die aktuelle Zeit wird dann in `lastFrameTime` gespeichert;

Die `drawFrame()` Funktion endet, indem sie über jede Ansicht in der [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) iteriert, den Viewport für die Ansicht einrichtet und `renderScene()` aufruft, um den Frame zu rendern. Indem der Viewport für jede Ansicht eingerichtet wird, behandeln wir das typische Szenario, in welchem die Ansichten für jedes Auge jeweils auf die Hälfte des WebGL-Frames gerendert werden. Die XR-Hardware stellt dann sicher, dass jedes Auge nur den Teil dieses Bildes sieht, der für dieses Auge bestimmt ist.

> [!NOTE]
> In diesem Beispiel präsentieren wir das Frame sowohl auf dem XR-Gerät als auch auf dem Bildschirm. Um sicherzustellen, dass die Leinwand auf dem Bildschirm die richtige Größe hat, um dies zu ermöglichen, setzen wir ihre Breite auf die Breite der einzelnen [`XRView`](/de/docs/Web/API/XRView) multipliziert mit der Anzahl der Ansichten; die Höhe der Leinwand ist immer die gleiche wie die Höhe des Viewports. Die beiden Codezeilen, die die Größe der Leinwand anpassen, sind in regulären WebXR-Render-Schleifen nicht erforderlich.

### Anwenden der Benutzereingaben

Die `applyViewerControls()` Funktion, die von `drawFrame()` aufgerufen wird, bevor das Rendern beginnt, nimmt die Offsets in jede der drei Richtungen, den Schwenkoffset und den Neigungsoffset, wie sie von den Funktionen `handleKeyDown()` und `handlePointerMove()` als Reaktion auf die Benutzertasteneingaben und das Ziehen der Maus mit der rechten Maustaste gedrückt, aufgezeichnet wurden. Es wird als Eingabe der Basis-Referenzraum für das Objekt genommen und gibt einen neuen Referenzraum zurück, der die Lage und Orientierung des Objekts so verändert, dass es mit dem Ergebnis der Eingaben übereinstimmt.

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

Wenn alle Eingabe-Offsets null sind, geben wir einfach den ursprünglichen Referenzraum zurück. Andernfalls erstellen wir aus den in `mousePitch` und `mouseYaw` veränderten Orientierungen ein Quaternion, das die Inverse dieser Orientierung spezifiziert, sodass die Anwendung des `inverseOrientation` auf den Würfel korrekt das simulierte Verhalten des Benutzers im Raum darstellt.

Dann ist es an der Zeit, ein neues [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) Objekt zu erstellen, das die Transformierung darstellt, die verwendet wird, um den neuen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) für das verschobene und/oder neu orientierte Objekt zu erstellen. Die Position ist ein neuer Vektor, dessen `x`, `y` und `z` den Offsets entsprechen, die entlang jeder dieser Achsen verschoben werden. Die Orientierung ist das `inverseOrientation` Quaternion.

Wir kopieren die [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) des Transformierungsobjekts in `mouseMatrix`, die wir später verwenden, um die Mouse-Tracking-Matrix dem Benutzer anzuzeigen (dies ist ein Schritt, den Sie normalerweise überspringen können). Schließlich übergeben wir das `XRRigidTransform` in den aktuellen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) des Objekts, um den Referenzraum zu erhalten, der diese Transformation integriert, um die Platzierung des Würfels relativ zum Betrachter angesichts der Bewegungen des Benutzer zu repräsentieren. Dieser neue Referenzraum wird an den Anrufer zurückgegeben.

### Rendern der Szene

Die `renderScene()` Funktion wird aufgerufen, um die Teile der Welt zu rendern, die der Benutzer im Moment sehen kann. Sie wird für jedes Auge einmal aufgerufen, mit leicht unterschiedlichen Positionen für jedes Auge, um den 3D-Effekt zu erzeugen, der für XR-Ausrüstung erforderlich ist.

Ein Großteil dieses Codes ist typischer WebGL-Rendering-Code, der direkt aus der `drawScene()` Funktion im Artikel [Licht in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) übernommen wurde, und dort sollten Sie nach Details zum WebGL-Rendering-Teil dieses Beispiels suchen ([siehe den Code auf GitHub](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample7/webgl-demo.js)). Aber hier beginnt es mit etwas fürs Beispiel spezifischem Code, also werden wir uns diesen Teil genauer ansehen.

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

`renderScene()` beginnt damit, zu berechnen, wie viel Drehung um jede der drei Achsen in der seit dem vorherigen Frame verstrichenen Zeit erfolgen sollte. Diese Werte lassen uns die Rotation unseres animierten Würfels so anpassen, dass seine Bewegungsgeschwindigkeit gleichbleibt, unabhängig von Schwankungen in der Bildrate, die aufgrund der Systemauslastung auftreten können. Diese Werte werden als die Anzahl von Bogenmaß der Rotation berechnet, die in der verstrichenen Zeit angewendet werden sollen und in den Konstanten `xRotationForTime`, `yRotationForTime` und `zRotationForTime` gespeichert.

Nach der Aktivierung und Konfiguration des Tiefentests prüfen wir den Wert der `enableRotation` Konstante, um zu sehen, ob die Rotation des Würfels aktiviert ist; wenn ja, verwenden wir glMatrix, um die `cubeMatrix` (die aktuelle Orientierung des Würfels relativ zum Weltkoordinatensystem) um die drei Achsen zu drehen. Mit der globalen Orientierung des Würfels eingerichtet, multiplizieren wir das anschließend mit der Inversen der Transformationsmatrix der Ansicht, um die endgültige Modellansichts-Matrix zu erhalten – die Matrix, die sowohl gedreht wird, um die Animation zu simulieren, als auch um sie zu verschieben und neu auszurichten, um die Simulation des Betrachters durch den Raum zu simulieren.

Dann wird die Normalmatrix der Ansicht durch die Invertierung und Transposition (Vertauschung von Spalten und Zeilen) der Modellansichts-Matrix berechnet.

Die letzten paar Codezeilen, die für dieses Beispiel hinzugefügt wurden, sind vier Aufrufe von `displayMatrix()`, einer Funktion, die den Inhalt einer Matrix zur Analyse durch den Benutzer anzeigt. Der übrige Teil der Funktion ist mit dem älteren WebGL-Beispiel, aus dem dieser Code abgeleitet wurde, identisch oder im Wesentlichen identisch.

### Anzeigen einer Matrix

Zu Lehrzwecken zeigt dieses Beispiel den Inhalt der wichtigen Matrizen an, die beim Rendering der Szene verwendet werden. Die `displayMatrix()` Funktion wird dafür verwendet; diese Funktion verwendet MathML, um die Matrix anzuzeigen, und fällt auf ein mehr array-ähnliches Format zurück, wenn MathML vom Browser des Benutzers nicht unterstützt wird.

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

Dies ersetzt den Inhalt des angegebenen `target` mit einem neu erstellten {{MathMLElement("math")}} Element, das die 4x4 Matrix enthält. Jeder Eintrag wird mit bis zu zwei Dezimalstellen angezeigt.

### Alles andere

Der Rest des Codes ist identisch mit dem, was in den vorherigen Beispielen gefunden wurde:

- `initShaderProgram()`
  - : Initialisiert das GLSL-Shader-Programm, indem `loadShader()` aufgerufen wird, um das Programm jedes Shaders zu laden und zu kompilieren, und dann jedes im WebGL-Kontext zu verankern. Sobald sie kompiliert sind, wird das Programm verknüpft und an den Anrufer zurückgegeben.
- `loadShader()`
  - : Erstellt ein Shader-Objekt und lädt den angegebenen Quellcode hinein, bevor es kompiliert wird, und prüft, ob der Compiler erfolgreich war, bevor der neu kompilierte Shader an den Anrufer zurückgegeben wird. Wenn ein Fehler auftritt, wird stattdessen `NULL` zurückgegeben.
- `initBuffers()`
  - : Initialisiert die Puffer, die Daten enthalten, die in WebGL übergeben werden sollen. Diese Puffer umfassen das Array der Vertex-Positionen, das Array der Vertex-Normalen, die Texturkoordinaten für jede Fläche des Würfels und das Array der Vertex-Indices (die angeben, welcher Eintrag in der Vertex-Liste jede Ecke des Würfels darstellt).
- `loadTexture()`
  - : Lädt das Bild an einer bestimmten URL und erstellt daraus eine WebGL-Textur. Sind die Maße des Bildes keine Potenzen von zwei (siehe die Funktion `isPowerOf2()`), werden Mipmap-Erstellung deaktiviert und Umwicklungsmodi auf Kanten begrenzt. Dies liegt daran, dass optimiertes Rendering von Mipmapped-Texturen nur für Texturen funktioniert, deren Abmessungen Potenzen von zwei in WebGL 1 sind. WebGL 2 unterstützt Mipmap-Texturen beliebiger Größe.
- `isPowerOf2()`
  - : Gibt `true` zurück, wenn der angegebene Wert eine Potenz von zwei ist; andernfalls wird `false` zurückgegeben.

### Alles zusammenfügen

Wenn Sie all diesen Code nehmen und das HTML sowie den anderen JavaScript-Code hinzufügen, der oben nicht enthalten ist, erhalten Sie, was Sie sehen, wenn Sie [dieses Beispiel auf Glitch ausprobieren](https://webxr-experiment.glitch.me/). Denken Sie daran: während Sie herumlaufen, und wenn Sie sich verlaufen, drücken Sie einfach die <kbd>R</kbd> Taste, um sich an den Anfang zurückzusetzen.

Ein Tipp: wenn Sie kein XR-Gerät haben, können Sie möglicherweise etwas von dem 3D-Effekt erleben, indem Sie mit Ihrem Gesicht sehr nah an den Bildschirm herangehen, mit Ihrer Nase zentriert entlang der Grenze zwischen den linken und rechten Augenbildern in der Leinwand. Durch vorsichtiges Fokussieren durch den Bildschirm auf das Bild und langsames Vorwärts- und Rückwärtsbewegen sollten Sie schließlich das 3D-Bild in den Fokus bringen können. Das erfordert Übung, und Ihre Nase kann buchstäblich den Bildschirm berühren, je nachdem, wie scharf Ihre Sehkraft ist.

Es gibt viele Dinge, die Sie tun können, wenn Sie dieses Beispiel als Ausgangspunkt verwenden. Versuchen Sie, weitere Objekte in die Welt hinzuzufügen, oder verbessern Sie die Bewegungssteuerungen, um realistischer zu bewegen. Fügen Sie Wände, Decken und Böden hinzu, um Sie in einem Raum zu umschließen, anstatt ein unendlich scheinendes Universum zu haben, in dem man sich verlieren kann. Fügen Sie Kollisionstests oder Treffertests hinzu oder die Möglichkeit, die Textur jeder Fläche des Würfels zu ändern.

Es gibt nur wenige Grenzen für das, was erreicht werden kann, wenn man sich darauf konzentriert.

## Siehe auch

- [Learn WebGL](https://learnwebgl.brown37.net/#) (beinhaltet einige großartige Visualisierungen der Kamera und ihrer Beziehung zur virtuellen Welt)
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [Learn OpenGL](https://learnopengl.com/)
