---
title: "Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel"
slug: Web/API/WebXR_Device_API/Movement_and_motion
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebXR Device API")}}

In diesem Artikel verwenden wir Informationen aus den vorherigen Artikeln unserer [WebXR](/de/docs/Web/API/WebXR_Device_API)-Tutorialreihe, um ein Beispiel zu erstellen, das einen rotierenden Würfel animiert, um den sich der Benutzer mit einem VR-Headset, einer Tastatur und/oder einer Maus frei bewegen kann. Dies wird dazu beitragen, Ihr Verständnis dafür zu festigen, wie die Geometrie der 3D-Grafik und VR funktioniert, sowie sicherzustellen, dass Sie verstehen, wie die Funktionen und Daten, die während der XR-Darstellung verwendet werden, zusammenarbeiten.

**Abbildung: Screenshot dieses Beispiels in Aktion**
![Screenshot des Beispiels, das einen texturierten Würfel zeigt, um den sich der Benutzer bewegen kann](xr-sample.png)

Der Kern dieses Beispiels—der rotierende, texturierte, beleuchtete Würfel—stammt aus unserer WebGL-Tutorialreihe, genauer gesagt aus dem vorletzten Artikel der Serie, der [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) behandelt.

Beim Lesen dieses Artikels und des begleitenden Quellcodes ist es hilfreich zu bedenken, dass das Display eines 3D-Headsets ein einzelner Bildschirm ist, der in zwei Hälften geteilt ist. Die linke Hälfte des Bildschirms wird nur vom linken Auge gesehen, während die rechte Hälfte nur vom rechten Auge gesehen wird. Das Rendern der Szene für eine immersive Darstellung erfordert mehrere Renderings der Szene—jeweils aus der Perspektive eines Auges.

Beim Rendern für das linke Auge wird im [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) das [Viewport](/de/docs/Web/API/XRWebGLLayer/getViewport) konfiguriert, um das Zeichnen auf die linke Hälfte der Zeichenfläche zu beschränken. Beim Rendern des rechten Auges wird das Viewport entsprechend eingestellt, um das Zeichnen auf die rechte Hälfte der Oberfläche zu beschränken.

Dieses Beispiel demonstriert dies, indem es die Leinwand auf dem Bildschirm anzeigt, selbst wenn eine Szene als immersive Darstellung mit einem XR-Gerät präsentiert wird.

## Abhängigkeiten

Während wir in diesem Beispiel nicht auf 3D-Grafik-Frameworks wie [`three.js`](https://threejs.org/) oder Ähnliches angewiesen sind, verwenden wir die [`glMatrix`](https://glmatrix.net/)-Bibliothek für Matrix-Mathematik, die wir auch in anderen Beispielen in der Vergangenheit eingesetzt haben. Dieses Beispiel importiert außerdem das [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill/), das von der Immersive Web Working Group gepflegt wird, die für die Spezifikation der WebXR-API verantwortlich ist. Durch das Importieren dieses Polyfills ermöglichen wir, dass das Beispiel in vielen Browsern funktioniert, die noch keine WebXR-Implementierungen haben, und glätten alle vorübergehenden Abweichungen von der Spezifikation, die in diesen immer noch experimentellen Tagen der WebXR-Spezifikation auftreten.

## Optionen

Dieses Beispiel hat eine Reihe von Optionen, die Sie konfigurieren können, indem Sie die Werte der Konstanten anpassen, bevor Sie es im Browser laden. Der Code sieht so aus:

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
  - : Die Anzahl der Rotationsgrade, die pro Sekunde um die X-Achse angewendet werden.
- `yRotationDegreesPerSecond`
  - : Die Anzahl der Grad, um die die Y-Achse jede Sekunde rotiert wird.
- `zRotationDegreesPerSecond`
  - : Die Anzahl der Grad pro Sekunde, die um die Z-Achse rotiert werden.
- `enableRotation`
  - : Ein boolescher Wert, der angibt, ob die Rotation des Würfels überhaupt aktiviert werden soll.
- `allowMouseRotation`
  - : Wenn `true`, können Sie die Maus verwenden, um den Blickwinkel zu neigen und zu schwenken.
- `allowKeyboardMotion`
  - : Wenn `true`, bewegen die W, A, S und D Tasten den Betrachter nach oben, links, unten und rechts, während die Pfeiltasten nach oben und unten vorwärts und rückwärts bewegen. Wenn `false`, sind nur Änderungen am Blickwinkel durch das XR-Gerät erlaubt.
- `enableForcePolyfill`
  - : Wenn dieser boolesche Wert `true` ist, wird das Beispiel versuchen, das WebXR-Polyfill zu verwenden, selbst wenn der Browser tatsächlich WebXR unterstützt. Wenn `false`, wird das Polyfill nur verwendet, wenn der Browser [`navigator.xr`](/de/docs/Web/API/Navigator/xr) nicht implementiert.
- `SESSION_TYPE`
  - : Der Typ der XR-Sitzung, die erstellt werden soll: `inline` für eine Inline-Sitzung im Kontext des Dokuments und `immersive-vr`, um die Szene an ein immersives VR-Headset zu präsentieren.
- `MOUSE_SPEED`
  - : Ein Multiplikator, der verwendet wird, um die Eingaben von der Maus für die Neigungs- und Schwenksteuerung zu skalieren.
- `MOVE_DISTANCE`
  - : Die Entfernung, die als Reaktion auf eine der Tasten zurückgelegt wird, die zum Bewegen des Betrachters durch die Szene verwendet werden.

> [!NOTE]
> Dieses Beispiel zeigt immer das, was auf dem Bildschirm gerendert wird, auch wenn der `immersive-vr`-Modus verwendet wird. Dies ermöglicht es Ihnen, Unterschiede im Rendering zwischen den beiden Modi zu vergleichen und Ausgaben aus dem immersiven Modus zu sehen, auch wenn Sie kein Headset haben.

## Einrichten und Dienstprogramme

Als Nächstes deklarieren wir die Variablen und Konstanten, die in der Anwendung verwendet werden, beginnend mit denen zur Speicherung WebGL- und WebXR-spezifischer Informationen:

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

Dies wird gefolgt von einer Reihe von Konstanten, hauptsächlich um verschiedene Vektoren und Matrizen zu enthalten, die beim Rendern der Szene verwendet werden.

```js
const viewerStartPosition = vec3.fromValues(0, 0, -10);
const viewerStartOrientation = vec3.fromValues(0, 0, 1.0);

const cubeOrientation = vec3.create();
const cubeMatrix = mat4.create();
const mouseMatrix = mat4.create();
const inverseOrientation = quat.create();
const RADIANS_PER_DEGREE = Math.PI / 180.0;
```

Die ersten beiden—`viewerStartPosition` und `viewerStartOrientation`—geben an, wo der Betrachter relativ zum Zentrum des Raumes platziert wird und in welche Richtung er zunächst schaut. `cubeOrientation` speichert die aktuelle Orientierung des Würfels, während `cubeMatrix` und `mouseMatrix` Speicher für Matrizen sind, die während des Renderns der Szene verwendet werden. `inverseOrientation` ist ein Quaternion, das verwendet wird, um die Rotation darzustellen, die auf den Referenzraum des Objekts im aktuell gerenderten Frame angewendet werden soll.

`RADIANS_PER_DEGREE` ist der Wert, mit dem ein Winkel in Grad multipliziert wird, um den Winkel in Radianten umzuwandeln.

Die letzten vier Variablen, die deklariert werden, sind Speicher für Referenzen auf die {{HTMLElement("div")}}-Elemente, in die wir die Matrizen ausgeben, wenn wir sie dem Benutzer zeigen wollen.

### Fehlerprotokollierung

Eine Funktion namens `LogGLError()` ist implementiert, um eine leicht anpassbare Möglichkeit zum Ausgeben von Protokollinformationen für Fehler bereitzustellen, die beim Ausführen von WebGL-Funktionen auftreten.

```js
function LogGLError(where) {
  let err = gl.getError();
  if (err) {
    console.error(`WebGL error returned by ${where}: ${err}`);
  }
}
```

Diese nimmt als einzige Eingabe einen String, `where`, der verwendet wird, um anzugeben, welcher Teil des Programms den Fehler generiert hat, da ähnliche Fehler in mehreren Situationen auftreten können.

### Die Vertex- und Fragment-Shader

Die Vertex- und Fragment-Shader sind beide genau dieselben, die im Beispiel für unseren Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) verwendet werden. [Beziehen Sie sich darauf](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL#update_the_shaders), wenn Sie an dem [GLSL](/de/docs/Web/API/WebGL_API/By_example/Hello_GLSL)-Quellcode für die hier verwendeten Basis-Shader interessiert sind.

Es genügt zu sagen, dass der Vertex-Shader die Position jedes Vertexes berechnet, gegeben die Anfangspositionen jedes Vertexes und die Transformationen, die angewendet werden müssen, um zu simulieren, wie der Betrachter derzeit positioniert und ausgerichtet ist. Der Fragment-Shader gibt die Farbe jedes Vertexes zurück, wobei er bei Bedarf die Werte aus der Textur interpoliert und die Lichteffekte anwendet.

## WebXR starten und herunterfahren

Beim ersten Laden des Skripts installieren wir einen Handler für das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis, damit wir die Initialisierung durchführen können.

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

Der `load`-Ereignis-Handler erhält eine Referenz auf den Button, der WebXR ein- und ausschaltet, in `xrButton`, und fügt dann einen Handler für [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse hinzu. Dann werden Referenzen auf die vier {{HTMLElement("div")}}-Blöcke erhalten, in die wir die aktuellen Inhalte jeder der Schlüsselmatrizen für Informationszwecke während unserer Szene ausgeben werden.

Dann schauen wir, ob [`navigator.xr`](/de/docs/Web/API/Navigator/xr) definiert ist. Wenn nicht, und/oder die `enableForcePolyfill`-Konfiguration auf `true` gesetzt ist, installieren wir das WebXR-Polyfill, indem wir die `WebXRPolyfill`-Klasse instanziieren.

### Umgang mit dem Startup- und Shutdown-UI

Dann rufen wir die Funktion `setupXRButton()` auf, die den "Enter/Exit WebXR"-Button konfiguriert, um ihn je nach Verfügbarkeit der WebXR-Unterstützung für den in der `SESSION_TYPE`-Konstanten angegebenen Sitzungstyp zu aktivieren oder zu deaktivieren.

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

Das Label des Buttons wird im Code, der tatsächlich die WebXR-Sitzung startet und stoppt, angepasst; das werden wir unten sehen.

Die WebXR-Sitzung wird durch den Handler für [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse auf dem Button ein- und ausgeschaltet, dessen Label entsprechend auf "Enter WebXR" oder "Exit WebXR" gesetzt ist. Dies wird durch den `onXRButtonClick()`-Ereignis-Handler durchgeführt.

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

Dies beginnt damit, den Wert von `xrSession` zu überprüfen, um zu sehen, ob wir bereits ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt haben, das eine laufende WebXR-Sitzung repräsentiert. Wenn nicht, bedeutet der Klick eine Anfrage, den WebXR-Modus zu aktivieren, also wird [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) aufgerufen, um eine WebXR-Sitzung des gewünschten WebXR-Sitzungstyps anzufordern, und dann `sessionStarted()`, um die Szene in dieser WebXR-Sitzung zu starten.

Wenn wir bereits eine laufende Sitzung haben, rufen wir die [`end()`](/de/docs/Web/API/XRSession/end)-Methode auf, um die Sitzung zu beenden.

Das letzte, was wir in diesem Code tun, ist zu überprüfen, ob `xrSession` noch nicht `NULL` ist. Wenn ja, rufen wir `sessionEnded()` auf, den Handler für das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis. Dieser Code sollte nicht notwendig sein, aber es scheint ein Problem zu geben, bei dem mindestens einige Browser das `end`-Ereignis nicht korrekt auslösen. Durch das direkte Ausführen des Ereignishandlers schließen wir den Abschlussprozess manuell ab.

### Starten der WebXR-Sitzung

Die `sessionStarted()`-Funktion kümmert sich um das eigentliche Einrichten und Starten der Sitzung, indem sie Ereignishandler einrichtet, den GLSL-Code für die Vertex- und Fragment-Shader kompiliert und installiert und die WebGL-Schicht an die WebXR-Sitzung anhängt, bevor die Rendering-Schleife gestartet wird. Sie wird als Handler für das Versprechen aufgerufen, das von [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) zurückgegeben wird.

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

Nachdem das neu erstellte [`XRSession`](/de/docs/Web/API/XRSession)-Objekt in `xrSession` gespeichert wurde, wird das Label des Buttons auf "Exit WebXR" gesetzt, um seine neue Funktion nach dem Start der Szene anzuzeigen, und ein Handler für das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis installiert, sodass wir benachrichtigt werden, wenn die `XRSession` endet.

Dann erhalten wir eine Referenz auf die in unserem HTML vorhandene {{HTMLElement("canvas")}}-Leinwand, sowie deren WebGL-Rendering-Kontext, der als Zeichenfläche für die Szene verwendet wird. Die `xrCompatible`-Eigenschaft wird angefordert, wenn [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf das Element aufgerufen wird, um Zugriff auf den WebGL-Rendering-Kontext für die Leinwand zu erhalten. Dies stellt sicher, dass der Kontext für die Verwendung als Quelle für das WebXR-Rendering konfiguriert ist.

Als Nächstes fügen wir, aber nur wenn die Konstante `allowMouseRotation` auf `true` gesetzt ist, Ereignishandler für die [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) hinzu. Der `mousemove`-Handler wird sich mit dem Neigen und Schwenken des Blickwinkels auf Grundlage der Mousebewegungen befassen. Da die "Ansichtssteuerung" nur funktioniert, während die rechte Maustaste gedrückt gehalten wird und das Klicken mit der rechten Maustaste das Kontextmenü auslöst, fügen wir der Leinwand einen Handler für das `contextmenu`-Ereignis hinzu, um zu verhindern, dass das Kontextmenü erscheint, wenn der Benutzer seine Mausbewegung beginnt.

Als Nächstes werden die Shader-Programme kompiliert; Referenzen auf deren Variablen erhalten; die Puffer initialisiert, die das Array jeder Position speichern; die Indizes in die Positionstabelle für jeden Vertex; die Vertex-Normalen; und die Texturkoordinaten für jeden Vertex. All dies stammt direkt aus dem WebGL-Beispielcode, also beziehen Sie sich auf [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) und die vorhergehenden Artikel [Erstellen von 3D-Objekten mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL) und [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL). Dann wird unsere `loadTexture()`-Funktion aufgerufen, um die Texturdatei zu laden.

Jetzt, da die Renderstrukturen und -daten geladen sind, bereiten wir uns darauf vor, die `XRSession` auszuführen. Wir verbinden die Sitzung mit der WebGL-Schicht, sodass sie weiß, was als Rendering-Oberfläche zu verwenden ist, indem wir [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) mit einem `baseLayer` aufrufen, das auf ein neues [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) setzt.

Wir schauen dann auf den Wert der `SESSION_TYPE`-Konstanten, um zu sehen, ob der WebXR-Kontext immersiv oder inline sein sollte. Immersive Sitzungen verwenden den `local`-Referenzraum, während Inline-Sitzungen den `viewer`-Referenzraum verwenden.

Die `fromTranslation()`-Funktion der `glMatrix`-Bibliothek für 4x4-Matrizen wird verwendet, um die Startposition des Betrachters wie in der `viewerStartPosition`-Konstanten angegeben in eine Transformationsmatrix, `cubeMatrix`, zu konvertieren. Die Anfangsausrichtung des Betrachters, die `viewerStartOrientation`-Konstante, wird in die `cubeOrientation` kopiert, die verwendet wird, um die Rotation des Würfels im Laufe der Zeit zu verfolgen.

`sessionStarted()` endet, indem die Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) der Sitzung aufgerufen wird, um ein Referenzraumobjekt zu erhalten, das den Raum beschreibt, in dem das Objekt erstellt wird. Wenn das zurückgegebene Versprechen ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Objekt auflöst, rufen wir seine Methode [`getOffsetReferenceSpace`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) auf, um ein Referenzraumobjekt zu erhalten, das das Koordinatensystem des Objekts darstellt. Der Ursprung des neuen Raums befindet sich an den Weltkoordinaten, die durch die `viewerStartPosition` und seine Orientierung auf `cubeOrientation` festgelegt sind. Dann teilen wir der Sitzung mit, dass wir bereit zum Zeichnen eines Frames sind, indem wir die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) ihrer Sitzung aufrufen. Wir protokollieren die zurückgegebene Anforderungs-ID, falls wir die Anforderung später stornieren müssen.

Abschließend gibt `sessionStarted()` die [`XRSession`](/de/docs/Web/API/XRSession) zurück, die die WebXR-Sitzung des Benutzers darstellt.

### Wenn die Sitzung endet

Wenn die WebXR-Sitzung endet—entweder weil sie vom Benutzer heruntergefahren wird oder durch Aufruf von [`XRSession.end()`](/de/docs/Web/API/XRSession/end)—wird das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis gesendet; wir haben dies so eingerichtet, dass es eine Funktion namens `sessionEnded()` aufruft.

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

Wir können `sessionEnded()` auch direkt aufrufen, wenn wir die WebXR-Sitzung programmatisch beenden möchten. In beiden Fällen wird das Label des Buttons aktualisiert, um anzuzeigen, dass ein Klick eine Sitzung startet, und dann, wenn eine ausstehende Anfrage für einen Animationsframe vorhanden ist, stornieren wir sie durch Aufruf von [`cancelAnimationFrame`](/de/docs/Web/API/XRSession/cancelAnimationFrame).

Nachdem dies erledigt ist, wird der Wert von `xrSession` auf `NULL` geändert, um anzuzeigen, dass wir mit der Sitzung fertig sind.

## Implementieren der Steuerelemente

Werfen wir nun einen Blick auf den Code, der darauf abzielt, Tastatur- und Mausereignisse in etwas Nutzbares zur Steuerung eines Avatars in einem WebXR-Szenario zu verwandeln.

### Bewegung mit der Tastatur

Um dem Benutzer zu erlauben, sich durch die 3D-Welt zu bewegen, auch wenn er kein WebXR-Gerät mit Eingaben zum Bewegen durch den Raum hat, reagiert unser Handler für [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse, `handleKeyDown()`, indem er die Offsets von der Ursprungsposition des Objekts aktualisiert basierend darauf, welche Taste gedrückt wurde.

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

  Taste bewegt den Betrachter um `MOVE_DISTANCE` nach oben.

- Die

  <kbd>S</kbd>

  Taste bewegt den Betrachter um `MOVE_DISTANCE` nach unten.

- Die

  <kbd>A</kbd>

  Taste verschiebt den Betrachter um `MOVE_DISTANCE` nach links.

- Die

  <kbd>D</kbd>

  Taste verschiebt den Betrachter um `MOVE_DISTANCE` nach rechts.

- Die Nach-oben-Pfeiltaste,

  <kbd>↑</kbd>

  , verschiebt den Betrachter um `MOVE_DISTANCE` nach vorne.

- Die Nach-unten-Pfeiltaste,

  <kbd>↓</kbd>

  , verschiebt den Betrachter um `MOVE_DISTANCE` nach hinten.

- Die

  <kbd>R</kbd>

  Taste setzt den Betrachter auf die anfängliche Position und Ausrichtung zurück, indem sie die Eingabe-Offsets alle auf 0 zurücksetzt.

Diese Offsets werden vom Renderer ab dem nächsten gezeichneten Frame angewendet.

### Neigen und Schwenken mit der Maus

Wir haben auch einen [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis-Handler, der überprüft, ob die rechte Maustaste gedrückt ist, und wenn ja, die Funktion `rotateViewBy()` aufruft, die als nächstes definiert ist, um die neuen Neigungs- (nach oben und unten) und Schwenkwinkel- (nach links und rechts) Werte zu berechnen und zu speichern.

```js
function handlePointerMove(event) {
  if (event.buttons & 2) {
    rotateViewBy(event.movementX, event.movementY);
  }
}
```

Die Berechnung der neuen Neigungs- und Schwenkwinkelwerte wird von der Funktion `rotateViewBy()` behandelt:

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

Da `dx` und `dy` als Eingabe-Mausdelta-Werte übergeben werden, wird der neue Schwenkwert berechnet, indem von dem aktuellen Wert von `mouseYaw` das Produkt von `dx` und der `MOUSE_SPEED`-Skalierungskonstanten subtrahiert wird. Sie können dann die Reaktivität der Maus steuern, indem Sie den Wert von `MOUSE_SPEED` erhöhen.

## Zeichnen eines Frames

Unser Callback für [`XRSession.requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) wird in der `drawFrame()`-Funktion implementiert, die unten gezeigt wird. Ihre Aufgabe ist es, den Referenzraum des Betrachters abzurufen, zu berechnen, wie viel Bewegung auf animierte Objekte angewendet werden muss, basierend auf der Zeit, die seit dem letzten Frame vergangen ist, und dann jede der in der Sicht des Betrachters angegebenen Ansichten zu rendern.

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

Das erste, was wir tun, ist [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufzurufen, um anzufordern, dass `drawFrame()` erneut für den nächsten zu rendernden Frame aufgerufen wird. Dann übergeben wir den Referenzraum des Objekts an die `applyViewerControls()`-Funktion, die einen überarbeiteten [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) zurückgibt, der die Position und Orientierung des Objekts transformiert, um die vom Benutzer mit der Tastatur und Maus angewendete Bewegung, Neigung und Schwenkung zu berücksichtigen. Denken Sie daran, dass, wie immer, die Objekte der Welt bewegt und neu ausgerichtet werden, nicht der Betrachter. Der zurückgegebene Referenzraum macht es einfach, genau das zu tun.

Mit dem neuen Referenzraum in der Hand erhalten wir die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), die den Blickpunkt des Betrachters für beide Augen repräsentiert. Wenn das erfolgreich ist, beginnen wir mit den Vorbereitungen für das Rendern, indem wir die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), die von der Sitzung verwendet wird, erhalten und ihren Frame-Buffer als den WebGL-Frame-Buffer binden (sodass das Rendern von WebGL in die Schicht und daher in die Anzeige des XR-Geräts zeichnet). Mit WebGL nun konfiguriert, um auf das XR-Gerät zu rendern, löschen wir den Frame zu Schwarz und sind bereit, mit dem Rendern zu beginnen.

Die seit dem letzten gerenderten Frame vergangene Zeit (in Sekunden) wird durch Subtrahieren des vorherigen Frame-Zeitstempels, `lastFrameTime`, von der aktuellen Zeit gemäß dem `time`-Parameter berechnet und dann mit 0,001 multipliziert, um Millisekunden in Sekunden umzuwandeln. Die aktuelle Zeit wird dann in `lastFrameTime` gespeichert.

Die `drawFrame()`-Funktion endet mit dem Durchlaufen aller Ansichten in der [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), dem Einrichten des Viewports für die Ansicht und dem Aufruf von `renderScene()` zum Rendern des Frames. Indem für jede Ansicht der Viewport eingerichtet wird, behandeln wir das typische Szenario, in dem die Ansichten für jedes Auge jeweils auf die Hälfte des WebGL-Frames gerendert werden. Die XR-Hardware stellt dann sicher, dass jedes Auge nur den Bildausschnitt sieht, der für dieses Auge bestimmt ist.

> [!NOTE]
> In diesem Beispiel präsentieren wir den Frame sowohl auf dem XR-Gerät _als auch_ auf dem Bildschirm. Um sicherzustellen, dass die On-Screen-Leinwand die richtige Größe hat, um dies zu ermöglichen, stellen wir ihre Breite auf die Breite der einzelnen [`XRView`](/de/docs/Web/API/XRView) multipliziert mit der Anzahl der Ansichten ein; die Höhe der Leinwand entspricht immer der Höhe des Viewports. Die beiden Codezeilen, die die Leinwandgröße anpassen, sind in regulären WebXR-Rendering-Schleifen nicht benötigt.

### Anwenden der Benutzereingaben

Die `applyViewerControls()`-Funktion, die von `drawFrame()` aufgerufen wird, bevor mit der Darstellung begonnen wird, verwendet die in jeder der drei Richtungen, den Schwenkwinkel und den Neigungswinkel erfassten Offsets, die von den Funktionen `handleKeyDown()` und `handlePointerMove()` in Reaktion darauf, dass der Benutzer Tasten drückt und die Maus mit gedrückter rechter Maustaste zieht, aufgezeichnet wurden. Sie nimmt als Eingabe den Basis-Referenzraum für das Objekt an und gibt einen neuen Referenzraum zurück, der den Ort und die Ausrichtung des Objekts so ändert, dass das Ergebnis der Eingaben übereinstimmt.

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

Wenn alle Eingabeoffsets null sind, geben wir einfach den ursprünglichen Referenzraum zurück. Andernfalls definieren wir aus den Orientierungsänderungen in `mousePitch` und `mouseYaw` ein Quaternion, das die Inverse dieser Orientierung spezifiziert, sodass das Anwenden der `inverseOrientation` auf den Würfel korrekt erscheint, um die Bewegung des Betrachters durch den Raum zu reflektieren.

Dann ist es an der Zeit, ein neues [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt zu erstellen, das die Transformation repräsentiert, die verwendet wird, um den neuen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) für das bewegte und/oder neu ausgerichtete Objekt zu erstellen. Die Position ist ein neuer Vektor dessen `x`, `y`, und `z` mit den Offsets übereinstimmen, die entlang jeder dieser Achsen bewegt wurden. Die Ausrichtung ist das `inverseOrientation`-Quaternion.

Wir kopieren die [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Transformation in `mouseMatrix`, die wir später verwenden werden, um die Mouse-Tracking-Matrix dem Benutzer anzuzeigen (dies ist also ein Schritt, den Sie normalerweise überspringen können). Schließlich übergeben wir die `XRRigidTransform` an den aktuellen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) des Objekts, um den Referenzraum zu erhalten, der diese Transformation integriert, um die Platzierung des Würfels relativ zum Benutzer angesichts der Benutzerbewegungen darzustellen. Dieser neue Referenzraum wird an den Anrufer zurückgegeben.

### Rendering der Szene

Die `renderScene()`-Funktion wird aufgerufen, um tatsächlich die Teile der Welt zu rendern, die der Benutzer im Moment sehen kann. Sie wird einmal für jedes Auge aufgerufen, mit leicht unterschiedlichen Positionen für jedes Auge, um den 3D-Effekt zu etablieren, der für XR-Geräte benötigt wird.

Der Großteil dieses Codes ist typischer WebGL-Rendering-Code, direkt aus der `drawScene()`-Funktion im Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) entnommen, und dort sollten Sie nach Details zu den WebGL-Renderteilen dieses Beispiels suchen ([sehen Sie sich den Code auf GitHub an](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample7/webgl-demo.js)). Aber hier beginnt es mit etwas Code, der spezifisch für dieses Beispiel ist, deshalb werfen wir einen genaueren Blick auf diesen Teil.

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

`renderScene()` beginnt damit, zu berechnen, wie viel Rotation um jede der drei Achsen in der seit dem letzten gerenderten Frame vergangenen Zeit stattfinden sollte. Diese Werte lassen uns die Rotation unseres animierten Würfels so anpassen, dass die Bewegungsgeschwindigkeit unabhängig von den Frameraten-Schwankungen konstant bleibt, die aufgrund der Systemlast auftreten können. Diese Werte werden als die Anzahl der Rotationsradien, die angewendet werden, gegeben die vergangene Zeit, berechnet und in die Konstanten `xRotationForTime`, `yRotationForTime`, und `zRotationForTime` gespeichert.

Nachdem wir die Tiefenprüfung aktiviert und konfiguriert haben, überprüfen wir den Wert der `enableRotation`-Konstante, um zu sehen, ob die Rotation des Würfels aktiviert ist; wenn ja, verwenden wir glMatrix, um die `cubeMatrix` (die die aktuelle Orientierung des Würfels relativ zum Weltraum darstellt) um die drei Achsen zu drehen. Mit der globalen Orientierung des Würfels etabliert, multiplizieren wir dies dann mit dem Inversen der Transformationsmatrix der Ansicht, um die endgültige Modell-View-Matrix zu erhalten—die Matrix, die auf das Objekt angewendet wird, um es sowohl für seine Animationszwecke zu drehen, aber auch um es zu bewegen und neu auszurichten, um die Bewegung des Betrachters durch den Raum zu simulieren.

Dann wird die Normalenmatrix der Ansicht berechnet, indem die Modell-View-Matrix genommen, invertiert und transponiert (ihre Spalten und Reihen vertauscht) wird.

Die letzten paar Codezeilen, die diesem Beispiel hinzugefügt wurden, sind vier Aufrufe von `displayMatrix()`, einer Funktion, die den Inhalt einer Matrix zur Analyse durch den Benutzer anzeigt. Der Rest der Funktion ist identisch oder im Wesentlichen identisch mit dem älteren WebGL-Beispiel, aus dem dieser Code stammt.

### Anzeigen einer Matrix

Zu Schulungszwecken zeigt dieses Beispiel die Inhalte der wichtigen Matrizen an, die beim Rendern der Szene verwendet werden. Die `displayMatrix()`-Funktion wird dazu verwendet; diese Funktion verwendet MathML zur Darstellung der Matrix und fällt auf ein eher array-artiges Format zurück, wenn MathML vom Browser des Benutzers nicht unterstützt wird.

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

Dies ersetzt den Inhalt des durch `target` angegebenen Elements mit einem neu erstellten {{MathMLElement("math")}}-Element, das die 4x4-Matrix enthält. Jeder Eintrag wird mit bis zu zwei Dezimalstellen angezeigt.

### Alles andere

Der Rest des Codes ist identisch mit dem in den vorherigen Beispielen gefundenem:

- `initShaderProgram()`
  - : Initialisiert das GLSL-Shader-Programm, indem es `loadShader()` aufruft, um den Quellcode jedes Shaders zu laden und zu kompilieren und dann jeden an den WebGL-Kontext anzubinden. Sobald sie kompiliert sind, wird das Programm verlinkt und an den Anrufer zurückgegeben.
- `loadShader()`
  - : Erstellt ein Shader-Objekt und lädt den angegebenen Quellcode in dieses, bevor der Code kompiliert und sichergestellt wird, dass der Compiler erfolgreich war, bevor der neu kompilierte Shader an den Anrufer zurückgegeben wird. Falls ein Fehler auftritt, wird `NULL` zurückgegeben.
- `initBuffers()`
  - : Initialisiert die Puffer, die die an WebGL zu übergebenden Daten enthalten. Diese Puffer umfassen das Array der Vertex-Positionen, das Array der Vertex-Normalen, die Texturkoordinaten für jede Würfelfläche und das Array der Vertex-Indizes (das spezifiziert, welcher Eintrag in der Vertex-Liste jede Ecke des Würfels darstellt).
- `loadTexture()`
  - : Lädt das Bild an einer angegebenen URL und erstellt daraus eine WebGL-Textur. Wenn die Abmessungen des Bildes keine Zweierpotenzen sind (siehe die Funktion `isPowerOf2()`), werden Mipmapping deaktiviert und das Wrapping an die Ränder geklammert. Dies liegt daran, dass optimiertes Rendern von Mipmapped-Texturen in WebGL 1 nur für Texturen funktioniert, deren Abmessungen Zweierpotenzen sind. WebGL 2 unterstützt Mipmapping für Texturen beliebiger Größe.
- `isPowerOf2()`
  - : Gibt `true` zurück, wenn der angegebene Wert eine Zweierpotenz ist; andernfalls gibt er `false` zurück.

### Alles zusammenfügen

Wenn Sie all diesen Code hinzufügen zum HTML und den anderen oben nicht enthaltenen JavaScript-Code, erhalten Sie das, was Sie sehen, wenn Sie [dieses Beispiel auf Glitch ausprobieren](https://webxr-experiment.glitch.me/). Denken Sie daran: Wenn Sie sich verirren, drücken Sie einfach die <kbd>R</kbd>-Taste, um sich selbst an den Anfang zurückzusetzen.

Ein Tipp: Wenn Sie kein XR-Gerät haben, können Sie möglicherweise einen Teil des 3D-Effekts sehen, wenn Sie Ihr Gesicht sehr nahe an den Bildschirm bringen, mit Ihrer Nase auf der Trennlinie zwischen den Bilder für das linke und rechte Auge des Canvas zentriert. Indem Sie durch den Bildschirm sorgfältig auf das Bild fokussieren und sich langsam vor- und zurückbewegen, sollten Sie schließlich in der Lage sein, das 3D-Bild in Fokus zu bringen. Dies kann Übung erfordern, und Ihre Nase kann buchstäblich den Bildschirm berühren, abhängig von der Schärfe Ihres Sehvermögens.

Es gibt viele Dinge, die Sie tun können, wenn Sie dieses Beispiel als Ausgangspunkt verwenden. Versuchen Sie, mehr Objekte in der Welt hinzuzufügen oder die Bewegungssteuerungen zu verbessern, um realistischer zu bewegen. Fügen Sie Wände, Decken und Fußboden hinzu, um sich in einem Raum zu umgeben, anstatt in einem scheinbar unendlichen Universum verloren zu gehen. Fügen Sie Kollisionstests oder Treffer-Tests hinzu oder die Möglichkeit, die Textur jeder Würfelfläche zu ändern.

Es gibt kaum Grenzen, was getan werden kann, wenn Sie sich entschieden haben, es zu tun.

## Siehe auch

- [Learn WebGL](https://learnwebgl.brown37.net/#) (enthält einige großartige Visualisierungen der Kamera und wie sie in Beziehung zur virtuellen Welt steht)
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [Learn OpenGL](https://learnopengl.com/)
