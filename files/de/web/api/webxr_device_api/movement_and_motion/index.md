---
title: "Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel"
slug: Web/API/WebXR_Device_API/Movement_and_motion
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{DefaultAPISidebar("WebXR Device API")}}

In diesem Artikel nutzen wir die Informationen, die in den vorherigen Artikeln unserer [WebXR](/de/docs/Web/API/WebXR_Device_API) Tutorial-Serie eingeführt wurden, um ein Beispiel zu erstellen, das einen rotierenden Würfel animiert, um den sich der Benutzer frei mit einem VR-Headset, der Tastatur und/oder der Maus bewegen kann. Dies wird Ihnen helfen, Ihr Verständnis dafür zu festigen, wie die Geometrie der 3D-Grafik und VR funktioniert, sowie sicherzustellen, dass Sie verstehen, wie die Funktionen und Daten, die während der XR-Darstellung verwendet werden, zusammenarbeiten.

**Abbildung: Screenshot dieses Beispiels in Aktion**
![Screenshot des Beispiels zeigt einen texturierten Würfel, um den sich der Benutzer bewegen kann](xr-sample.png)

Der Kern dieses Beispiels - der drehende, texturierte, beleuchtete Würfel - stammt aus unserer WebGL-Tutorial-Serie; nämlich aus dem vorletzten Artikel der Serie, der sich mit der [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) beschäftigt.

Beim Lesen dieses Artikels und des beigefügten Quellcodes ist es hilfreich, im Hinterkopf zu behalten, dass das Display für ein 3D-Headset ein einziger Bildschirm ist, der in zwei Hälften geteilt ist. Die linke Hälfte des Bildschirms wird nur vom linken Auge gesehen, während die rechte Hälfte nur vom rechten Auge gesehen wird. Um die Szene für eine immersive Darstellung zu rendern, sind mehrere Darstellungen der Szene erforderlich - einmal aus der Perspektive jedes Auges.

Beim Rendern des linken Auges wird die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) mit ihrem [Viewport](/de/docs/Web/API/XRWebGLLayer/getViewport) so konfiguriert, dass die Darstellung auf die linke Hälfte der Zeichenfläche beschränkt wird. Umgekehrt wird beim Rendern des rechten Auges der Viewport so eingestellt, dass die Darstellung auf die rechte Hälfte der Fläche beschränkt wird.

Dieses Beispiel demonstriert dies, indem die Leinwand auf dem Bildschirm gezeigt wird, selbst wenn eine Szene als immersive Anzeige mit einem XR-Gerät präsentiert wird.

## Abhängigkeiten

Obwohl wir für dieses Beispiel nicht auf 3D-Grafik-Frameworks wie [`three.js`](https://threejs.org/) oder ähnliche zurückgreifen, verwenden wir die [`glMatrix`](https://glmatrix.net/) Bibliothek für Matrizenrechnung, die wir in der Vergangenheit in anderen Beispielen genutzt haben. Dieses Beispiel importiert auch das [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill/), das von der Immersive Web Working Group, dem Team, das für die Spezifikation der WebXR-API verantwortlich ist, gepflegt wird. Durch das Importieren dieses Polyfills ermöglichen wir es dem Beispiel, in vielen Browsern zu funktionieren, die noch keine WebXR-Implementierungen haben, und wir gleichen vorübergehende Abweichungen von der Spezifikation während dieser noch relativ experimentellen Zeiten der WebXR-Spezifikation aus.

## Optionen

Dieses Beispiel hat eine Reihe von Optionen, die Sie konfigurieren können, indem Sie die Werte von Konstanten anpassen, bevor Sie es im Browser laden. Der Code sieht folgendermaßen aus:

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
  - : Die Anzahl der Rotationsgrade, die pro Sekunde um die X-Achse angewendet werden sollen.
- `yRotationDegreesPerSecond`
  - : Die Anzahl der Rotationsgrade, die pro Sekunde um die Y-Achse gedreht werden sollen.
- `zRotationDegreesPerSecond`
  - : Die Anzahl der Rotationsgrade pro Sekunde, die um die Z-Achse gedreht werden sollen.
- `enableRotation`
  - : Ein boolescher Wert, der angibt, ob die Drehung des Würfels überhaupt aktiviert werden soll.
- `allowMouseRotation`
  - : Wenn `true`, können Sie die Maus verwenden, um den Blickwinkel zu neigen und zu drehen.
- `allowKeyboardMotion`
  - : Wenn `true`, bewegen die Tasten W, A, S und D den Betrachter nach oben, links, unten und rechts, während die Pfeiltasten nach oben und unten vorwärts und rückwärts bewegen. Wenn `false`, sind nur XR-Geräteveränderungen der Ansicht erlaubt.
- `enableForcePolyfill`
  - : Wenn dieser boolesche Wert `true` ist, wird das Beispiel versuchen, das WebXR-Polyfill zu verwenden, selbst wenn der Browser tatsächlich Unterstützung für WebXR hat. Wenn `false`, wird das Polyfill nur verwendet, wenn der Browser [`navigator.xr`](/de/docs/Web/API/Navigator/xr) nicht implementiert.
- `SESSION_TYPE`
  - : Der Typ der zu erstellenden XR-Sitzung: `inline` für eine Sitzung, die im Kontext des Dokuments präsentiert wird, und `immersive-vr`, um die Szene auf ein immersives VR-Headset zu übertragen.
- `MOUSE_SPEED`
  - : Ein Multiplikator, der verwendet wird, um die Eingaben von der Maus für die Kontrolle der Neigung und Drehung zu skalieren.
- `MOVE_DISTANCE`
  - : Die Entfernung, um die auf Eingaben von Tasten, die verwendet werden, um den Betrachter durch die Szene zu bewegen, reagiert wird.

> [!NOTE]
> Dieses Beispiel zeigt immer, was es auf dem Bildschirm rendert, selbst wenn der `immersive-vr`-Modus verwendet wird. Auf diese Weise können Sie Unterschiede in der Darstellung zwischen den beiden Modi vergleichen und Ausgaben des immersiven Modus sehen, auch wenn Sie kein Headset haben.

## Einrichtung und Hilfsfunktionen

Als nächstes deklarieren wir die Variablen und Konstanten, die in der gesamten Anwendung verwendet werden, beginnend mit denen, die spezifische WebGL- und WebXR-Informationen speichern:

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

Es folgt eine Reihe von Konstanten, die hauptsächlich zur Speicherung verschiedener Vektoren und Matrizen verwendet werden, die beim Rendern der Szene verwendet werden.

```js
const viewerStartPosition = vec3.fromValues(0, 0, -10);
const viewerStartOrientation = vec3.fromValues(0, 0, 1.0);

const cubeOrientation = vec3.create();
const cubeMatrix = mat4.create();
const mouseMatrix = mat4.create();
const inverseOrientation = quat.create();
const RADIANS_PER_DEGREE = Math.PI / 180.0;
```

Die ersten beiden—`viewerStartPosition` und `viewerStartOrientation`—zeigen an, wo der Betrachter relativ zum Zentrum des Raums platziert wird, und in welche Richtung er zunächst schauen wird. `cubeOrientation` speichert die aktuelle Orientierung des Würfels, während `cubeMatrix` und `mouseMatrix` Speicher für Matrizen sind, die während des Renderns der Szene verwendet werden. `inverseOrientation` ist ein Quaternion, das verwendet wird, um die Rotation darzustellen, die auf den Referenzraum für das Objekt im Rahmen angewendet wird.

`RADIANS_PER_DEGREE` ist der Wert, mit dem ein Winkel in Grad multipliziert wird, um den Winkel in Radiant umzurechnen.

Die letzten vier deklarierten Variablen sind Speicher für Verweise auf die {{HTMLElement("div")}}-Elemente, in die wir die Matrizen ausgeben, wenn wir sie dem Benutzer zeigen möchten.

### Protokollierung von Fehlern

Eine Funktion `LogGLError()` wird implementiert, um eine einfach anpassbare Möglichkeit zu bieten, Protokollierungsinformationen für Fehler auszugeben, die bei der Ausführung von WebGL-Funktionen auftreten.

```js
function LogGLError(where) {
  let err = gl.getError();
  if (err) {
    console.error(`WebGL error returned by ${where}: ${err}`);
  }
}
```

Diese nimmt als einzige Eingabe eine Zeichenkette `where`, die verwendet wird, um anzugeben, welcher Teil des Programms den Fehler generiert hat, da ähnliche Fehler in mehreren Situationen auftreten können.

### Die Vertex- und Fragment-Shader

Die Vertex- und Fragment-Shader sind identisch mit denen, die in unserem Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) verwendet werden. [Verweisen Sie darauf](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL#update_the_shaders), wenn Sie am [GLSL](/de/docs/Web/API/WebGL_API/By_example/Hello_GLSL)-Quellcode der hier verwendeten Basisshader interessiert sind.

Es reicht zu sagen, dass der Vertex-Shader die Position jedes Vertex berechnet, basierend auf den anfänglichen Positionen und den Transformationen, die angewendet werden müssen, um sie zu simulieren, als ob sie sich in der aktuellen Position und Orientierung des Betrachters befinden. Der Fragment-Shader gibt die Farbe jedes Vertex zurück, wobei er die Werte in der Textur interpoliert und die Lichteffekte anwendet.

## WebXR starten und beenden

Beim anfänglichen Laden des Skripts installieren wir einen Handler für das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis, um die Initialisierung durchzuführen.

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

Der `load`-Ereignishandler erhält einen Verweis auf den Button, der WebXR ein- und ausschaltet, in `xrButton`, und fügt dann einen Handler für [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse hinzu. Danach werden Verweise auf die vier {{HTMLElement("div")}}-Blöcke erhalten, in die wir die aktuellen Inhalte jeder der Schlüsselmatrizen zur Information ausgeben, während unsere Szene läuft.

Dann prüfen wir, ob [`navigator.xr`](/de/docs/Web/API/Navigator/xr) definiert ist. Wenn nicht und/oder die Konfigurationskonstante `enableForcePolyfill` auf `true` gesetzt ist, installieren wir das WebXR-Polyfill, indem wir die Klasse `WebXRPolyfill` instanziieren.

### Handhabung des Start- und Stop-UI

Dann rufen wir die Funktion `setupXRButton()` auf, die für die Konfiguration des "Enter/Exit WebXR"-Buttons verantwortlich ist, um ihn je nach Verfügbarkeit der WebXR-Unterstützung für den in der `SESSION_TYPE`-Konstante angegebenen Sitzungstyp zu aktivieren oder zu deaktivieren.

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

Das Label des Buttons wird im Code angepasst, der tatsächlich den Start und Stopp der WebXR-Sitzung handhabt; das sehen wir weiter unten.

Die WebXR-Sitzung wird durch den Handler für [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse auf dem Button umgeschaltet, dessen Label entsprechend entweder auf "Enter WebXR" oder "Exit WebXR" gesetzt wird. Dies erfolgt durch den `onXRButtonClick()`-Ereignishandler.

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

Dies beginnt, indem es den Wert von `xrSession` überprüft, um zu sehen, ob wir bereits ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt haben, das eine laufende WebXR-Sitzung darstellt. Wenn nicht, stellt der Klick eine Anforderung dar, den WebXR-Modus zu aktivieren, daher wird [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) aufgerufen, um eine WebXR-Sitzung des gewünschten Typs anzufordern, und dann `sessionStarted()`, um die Szene in dieser WebXR-Sitzung auszuführen.

Haben wir hingegen bereits eine laufende Sitzung, rufen wir ihre [`end()`](/de/docs/Web/API/XRSession/end)-Methode auf, um die Sitzung zu beenden.

Das letzte, was wir in diesem Code tun, ist zu prüfen, ob `xrSession` immer noch nicht `NULL` ist. Wenn es so ist, rufen wir `sessionEnded()` auf, den Handler für das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis. Dieser Code sollte nicht notwendig sein, aber es scheint ein Problem zu geben, bei dem zumindest einige Browser das `end`-Ereignis nicht korrekt auslösen. Durch das direkte Ausführen des Ereignishandlers schließen wir den Prozess manuell ab.

### Starten der WebXR-Sitzung

Die `sessionStarted()`-Funktion übernimmt das tatsächliche Einrichten und Starten der Sitzung, indem sie Ereignishandler einrichtet, den GLSL-Code für die Vertex- und Fragmentshader kompiliert und installiert und die WebGL-Schicht an die WebXR-Sitzung anhängt, bevor sie die Render-Schleife startet. Sie wird als Handler für das Promise aufgerufen, das von [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) zurückgegeben wird.

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

Nach dem Speichern des neu erstellten [`XRSession`](/de/docs/Web/API/XRSession)-Objekts in `xrSession` wird das Label des Buttons auf "Exit WebXR" gesetzt, um seine neue Funktion nach dem Start anzuzeigen, und ein Handler für das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis wird installiert, sodass wir benachrichtigt werden, wenn die `XRSession` endet.

Dann erhalten wir einen Verweis auf die {{HTMLElement("canvas")}}, die in unserem HTML gefunden wurde, sowie ihren WebGL-Rendering-Kontext, der als Zeichenfläche für die Szene verwendet wird. Die `xrCompatible`-Eigenschaft wird angefordert, wenn [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf das Element aufgerufen wird, um Zugriff auf den WebGL-Rendering-Kontext für die Leinwand zu erhalten. Dies stellt sicher, dass der Kontext für die Verwendung als Quelle für die WebXR-Darstellung konfiguriert ist.

Zuletzt fügen wir Ereignishandler für die [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) hinzu, jedoch nur wenn die `allowMouseRotation`-Konstante `true` ist. Der `mousemove`-Handler wird sich mit dem Neigen und Schwenken des Blicks basierend auf der Bewegung der Maus befassen. Da die "mouselook"-Funktion nur funktioniert, während der rechte Mausknopf gedrückt wird, und das Klicken mit der rechten Maustaste das Kontextmenü auslöst, fügen wir dem Canvas einen Handler für das `contextmenu`-Ereignis hinzu, um zu verhindern, dass das Kontextmenü erscheint, wenn der Benutzer seine Mausbewegung beginnt.

Dann kompilieren wir die Shader-Programme; erhalten Verweise auf ihre Variablen; initialisieren die Puffer, die das Array jeder Position speichern; die Indizes in die Positionstabelle für jeden Vertex; die Vertex-Normale; und die Texturkoordinaten für jeden Vertex. Dies ist alles direkt vom WebGL-Beispielcode übernommen, also verweisen Sie auf [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) und seine vorangehenden Artikel [Erstellen von 3D-Objekten in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL) und [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL). Dann wird unsere Funktion `loadTexture()` aufgerufen, um die Texturdatei zu laden.

Jetzt, da die Renderstrukturen und Daten geladen sind, beginnen wir mit den Vorbereitungen für die Ausführung der `XRSession`. Wir verbinden die Sitzung mit der WebGL-Schicht, damit sie weiß, was sie als Rendering-Fläche zu verwenden hat, indem wir [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) mit einem `baseLayer` aufrufen, der auf eine neue [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) gesetzt ist.

Dann schauen wir uns den Wert der `SESSION_TYPE`-Konstanten an, um festzustellen, ob der WebXR-Kontext immersiv oder inline sein sollte. Immersive Sitzungen verwenden den `local`-Referenzraum, während Inline-Sitzungen den `viewer`-Referenzraum verwenden.

Die `glMatrix`-Bibliothek `fromTranslation()` Funktion für 4x4 Matrizen wird verwendet, um die Startposition des Betrachters, wie in der `viewerStartPosition` Konstant angegeben, in eine Transformationsmatrix, `cubeMatrix`, umzuwandeln. Die Startorientierung des Betrachters, `viewerStartOrientation` Konstant, wird in die `cubeOrientation` kopiert, die verwendet werden, um die Rotation des Würfels im Laufe der Zeit zu verfolgen.

`sessionStarted()` endet, indem der Sitzung [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) aufgerufen wird, um ein Referenzraumobjekt zu erhalten, das den Raum beschreibt, in dem das Objekt erstellt wird. Wenn das zurückgegebene Promise in einem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Objekt aufgelöst wird, rufen wir seine [`getOffsetReferenceSpace`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) Methode auf, um ein Referenzraumobjekt zu erhalten, das das Koordinatensystem des Objekts darstellt. Der Ursprung des neuen Raums befindet sich an den Weltkoordinaten, die durch die `viewerStartPosition` und ihre Orientierung in `cubeOrientation` festgelegt sind. Dann lassen wir die Sitzung wissen, dass wir bereit sind, einen Rahmen zu zeichnen, indem wir ihre [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) Methode aufrufen. Die zurückgegebene Anforderungs-ID wird aufgezeichnet, falls wir die Anforderung später abbrechen müssen.

Schließlich gibt `sessionStarted()` die [`XRSession`](/de/docs/Web/API/XRSession) zurück, die die WebXR-Sitzung des Benutzers darstellt.

### Wenn die Sitzung endet

Wenn die WebXR-Sitzung endet – entweder weil sie vom Benutzer heruntergefahren wird oder durch das Aufrufen von [`XRSession.end()`](/de/docs/Web/API/XRSession/end) – wird das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis gesendet; wir haben dies eingerichtet, um eine Funktion namens `sessionEnded()` aufzurufen.

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

Wir können `sessionEnded()` auch direkt aufrufen, wenn wir die WebXR-Sitzung programmatisch beenden möchten. In beiden Fällen wird das Label des Buttons aktualisiert, um anzuzeigen, dass ein Klick eine Sitzung starten wird, und dann, wenn eine ausstehende Anforderung für einen Animationsrahmen vorliegt, stornieren wir sie, indem wir [`cancelAnimationFrame`](/de/docs/Web/API/XRSession/cancelAnimationFrame) aufrufen

Sobald das erledigt ist, wird der Wert von `xrSession` auf `NULL` geändert, um anzuzeigen, dass wir mit der Sitzung fertig sind.

## Implementieren der Steuerungen

Schauen wir uns nun den Code an, der das Umsetzen von Tastatur- und Mausereignissen in etwas Nutzbares zur Steuerung eines Avatars in einem WebXR-Szenario behandelt.

### Bewegung mit der Tastatur

Um dem Benutzer zu ermöglichen, auch dann durch die 3D-Welt zu navigieren, wenn er kein WebXR-Gerät mit den Eingaben zur Verfügung hat, um Bewegungen durch den Raum auszuführen, reagiert unser Handler für [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse namens `handleKeyDown()` durch Aktualisieren der Offsets vom Ursprung des Objekts, je nachdem, welche Taste gedrückt wurde.

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

Die Schlüssel und ihre Effekte sind:

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

- Die Pfeiltaste nach oben,

  <kbd>↑</kbd>

  , schiebt den Betrachter um `MOVE_DISTANCE` vorwärts.

- Die Pfeiltaste nach unten,

  <kbd>↓</kbd>

  , schiebt den Betrachter um `MOVE_DISTANCE` rückwärts.

- Die

  <kbd>R</kbd>

  -Taste setzt den Betrachter auf seine Ausgangsposition und -orientierung zurück, indem alle Eingabe-Offsets auf 0 zurückgesetzt werden.

Diese Offsets werden vom Renderer beginnend mit dem nächsten gezeichneten Frame angewendet.

### Neigung und Drehung mit der Maus

Wir haben auch einen [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignishandler, der prüft, ob die rechte Maustaste gedrückt ist, und falls ja, die Funktion `rotateViewBy()` aufruft, die als nächstes definiert wird, um die neuen Neigungs- (Auf- und Abblicken) und Drehungswerte (links und rechts) zu berechnen und zu speichern.

```js
function handlePointerMove(event) {
  if (event.buttons & 2) {
    rotateViewBy(event.movementX, event.movementY);
  }
}
```

Die Berechnung der neuen Neigungs- und Drehungswerte erfolgt durch die Funktion `rotateViewBy()`:

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

Gegeben die Eingabewerte die Mausdeltas, `dx` und `dy`, wird der neue Drehwert berechnet, indem vom aktuellen Wert von `mouseYaw` das Produkt von `dx` und der `MOUSE_SPEED`-Skalierungs-Konstante subtrahiert wird. Sie können dann steuern, wie empfänglich die Maus auf Änderungen reagiert, indem Sie den Wert von `MOUSE_SPEED` erhöhen.

## Ein Frame zeichnen

Unser Callback für [`XRSession.requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) ist in der `drawFrame()`-Funktion implementiert, die unten gezeigt wird. Ihre Aufgabe besteht darin, den Referenzraum des Betrachters zu erhalten, zu berechnen, wie viel Bewegung animierten Objekten angesichts der seit dem letzten Frame verstrichenen Zeit auferlegt werden muss, und dann jede der Ansichten zu rendern, die in der [`XRPose`](/de/docs/Web/API/XRPose) des Betrachters angegeben sind.

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

Als erstes rufen wir [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) auf, um anzufordern, dass `drawFrame()` erneut für den nächsten zu rendernden Frame aufgerufen wird. Dann übergeben wir den Referenzraum des Objekts in die `applyViewerControls()`-Funktion, die einen überarbeiteten [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) zurückgibt, der die Position und Ausrichtung des Objekts transformiert, um die vom Benutzer mit der Tastatur und der Maus angewendete Bewegung, Neigung und Drehung zu berücksichtigen. Denken Sie daran, dass, wie immer, die Objekte der Welt bewegt und ausgerichtet werden, nicht der Betrachter. Der zurückgegebene Referenzraum erleichtert uns genau das.

Mit dem neuen Referenzraum in der Hand erhalten wir die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), die den Blickwinkel des Betrachters darstellt – für beide Augen. Wenn das erfolgreich ist, beginnen wir mit den Vorbereitungen zum Rendern, indem wir die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) verwenden, die von der Sitzung benutzt wird, und ihr Frame-Buffer als WebGL-Frame-Buffer binden (sodass das Rendern durch WebGL in die Schicht und daher in das Display des XR-Geräts zeichnen). Mit WebGL jetzt so konfiguriert, dass an das XR-Gerät gerendert wird, löschen wir den Frame zu schwarz und sind bereit, mit dem Rendern zu beginnen.

Die seit dem letzten Frame (in Sekunden) verstrichene Zeit wird berechnet, indem die vorherige Zeitstempel des Frames, `lastFrameTime`, von der aktuellen Zeit, wie im `time`-Parameter angegeben, subtrahiert und dann mit 0,001 multipliziert wird, um Millisekunden in Sekunden umzuwandeln. Die aktuelle Zeit wird dann in `lastFrameTime` gespeichert;

Die `drawFrame()`-Funktion endet, indem sie über jede Ansicht in der [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) iteriert, den Viewport für die Ansicht einrichtet und `renderScene()` aufruft, um den Rahmen zu rendern. Durch das Einrichten des Viewports für jede Ansicht behandeln wir das typische Szenario, in dem die Ansichten für jedes Auge jeweils auf die Hälfte des WebGL-Rahmens gerendert werden. Die XR-Hardware sorgt dann dafür, dass jedes Auge nur den Teil des Bildes sieht, der für dieses Auge bestimmt ist.

> [!NOTE]
> In diesem Beispiel präsentieren wir den Frame sowohl auf dem XR-Gerät _als auch_ auf dem Bildschirm. Um sicherzustellen, dass die Leinwand auf dem Bildschirm die richtige Größe hat, um uns dies zu ermöglichen, setzen wir ihre Breite auf die Breite der einzelnen [`XRView`](/de/docs/Web/API/XRView) multipliziert mit der Anzahl der Ansichten; die Höhe der Leinwand ist immer die gleiche wie die Höhe des Viewports. Die zwei Zeilen Code, die die Größe der Leinwand anpassen, sind in normalen WebXR-Render-Schleifen nicht erforderlich.

### Anwendung der Benutzereingaben

Die `applyViewerControls()`-Funktion, die von `drawFrame()` aufgerufen wird, bevor das Rendern beginnt, nimmt die Offsets in jede der drei Richtungen, den Dreh- und den Neigungs-Offset, wie vom `handleKeyDown()` und den `handlePointerMove()`-Funktionen als Reaktion auf das Drücken der Benutzer-Tasten und das Ziehen ihrer Maus mit der rechten Maustaste gedrückt, auf. Sie nimmt als Eingabe den Basis-Referenzraum für das Objekt und gibt einen neuen Referenzraum zurück, der den Standort und die Ausrichtung des Objekts ändert, um die Ergebnisse der Eingaben anzupassen.

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

Sind alle Eingabe-Offsets null, geben wir einfach den ursprünglichen Referenzraum zurück. Andernfalls erstellen wir aus den Orientierungsänderungen in `mousePitch` und `mouseYaw` ein Quaternion, das das Inverse dieser Orientierung darstellt, sodass die Anwendung des `inverseOrientation` auf den Würfel korrekt erscheint, um die Bewegung des Betrachters widerzuspiegeln.

Dann ist es Zeit, ein neues [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt zu erstellen, das die Transformation darstellt, die verwendet wird, um den neuen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) für das bewegte und/oder umorientierte Objekt zu erstellen. Die Position ist ein neuer Vektor, dessen `x`, `y` und `z` den Versetzen entlang jeder dieser Achsen entsprechen. Die Ausrichtung ist das `inverseOrientation`-Quaternion.

Wir kopieren die [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Transformation in `mouseMatrix`, die wir später verwenden werden, um die Mausverfolgungsmatrix dem Benutzer zu zeigen (daher können Sie diesen Schritt normalerweise überspringen). Schließlich übergeben wir die `XRRigidTransform` in den aktuellen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) des Objekts, um den Referenzraum zu erhalten, der diese Transformation integriert, um die Platzierung des Würfels relativ zum Benutzer angesichts der Bewegungen des Benutzers darzustellen. Dieser neue Referenzraum wird dem Anrufer zurückgegeben.

### Rendern der Szene

Die `renderScene()`-Funktion wird aufgerufen, um die Teile der Welt zu rendern, die für den Benutzer gerade sichtbar sind. Es wird einmal für beide Augen aufgerufen, mit leicht unterschiedlichen Positionen für jedes Auge, um den 3D-Effekt zu erzielen, der für XR-Geräte benötigt wird.

Der größte Teil dieses Codes ist typischer WebGL-Rendering-Code, der direkt aus der `drawScene()`-Funktion im Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) stammt, und dort sollten Sie auch für Details zum WebGL-Rendering-Teil dieses Beispiels nachsehen ([sehen Sie den Code auf GitHub](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample7/webgl-demo.js)). Hier beginnt es jedoch mit etwas Code, der spezifisch für dieses Beispiel ist, daher werfen wir einen genaueren Blick auf diesen Teil.

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

`renderScene()` beginnt, indem berechnet wird, wie viel Rotation um jede der drei Achsen in der seit dem vorherigen Frame vergangenen Zeit erfolgen sollte. Diese Werte lassen uns die Rotation unseres animierten Würfels korrekt anpassen, um sicherzustellen, dass seine Bewegungsgeschwindigkeit unabhängig von Schwankungen der Bildrate, die aufgrund der Systemauslastung auftreten können, konstant bleibt. Diese Werte werden als die Anzahl der Radiane der Rotation berechnet, die auf die vergangene Zeit angewendet werden soll, und in den Konstanten `xRotationForTime`, `yRotationForTime` und `zRotationForTime` gespeichert.

Nachdem die Tiefenprüfung aktiviert und konfiguriert wurde, überprüfen wir den Wert der `enableRotation`-Konstanten, um zu sehen, ob die Rotation des Würfels aktiviert ist; wenn dies der Fall ist, verwenden wir glMatrix, um die `cubeMatrix` (die den aktuellen Rahmen des Würfels relativ zum Weltraum darstellt) um die drei Achsen zu drehen. Mit der globalen Orientierung des Würfels etabliert, multiplizieren wir diese dann mit dem Inversen der Transformationsmatrix der Ansicht, um die endgültige Modellansichts-Matrix zu erhalten—die Matrix, die auf das Objekt angewendet wird, um es sowohl für seine Animationszwecke zu drehen, als auch um es zu verschieben und neu auszurichten, um die Bewegung des Betrachters durch den Raum zu simulieren.

Dann wird die Normalmatrix der Ansicht berechnet, indem die Modellansichts-Matrix genommen, invertiert und transponiert wird (Vertauschen von Spalten und Zeilen).

Die letzten paar Codezeilen, die zu diesem Beispiel hinzugefügt wurden, sind vier Aufrufe von `displayMatrix()`, eine Funktion, die den Inhalt einer Matrix zur Analyse durch den Benutzer anzeigt. Der Rest der Funktion ist identisch oder im Wesentlichen identisch mit dem älteren WebGL-Beispiel, von dem dieser Code abgeleitet ist.

### Anzeigen einer Matrix

Zu Lehrzwecken zeigt dieses Beispiel den Inhalt der wichtigen Matrizen an, die beim Rendern der Szene verwendet werden. Die `displayMatrix()`-Funktion wird dafür verwendet; diese Funktion nutzt MathML, um die Matrix zu rendern und fällt zurück auf ein mehr array-ähnliches Format, falls MathML vom Browser des Benutzers nicht unterstützt wird.

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

Dies ersetzt den Inhalt des durch `target` angegebenen Elements mit einem neu erstellten {{MathMLElement("math")}}-Element, das die 4x4-Matrix enthält. Jeder Eintrag wird mit bis zu zwei Dezimalstellen dargestellt.

### Alles andere

Der Rest des Codes ist identisch mit dem in den früheren Beispielen gefundenen:

- `initShaderProgram()`
  - : Initialisiert das GLSL-Shader-Programm, indem es `loadShader()` aufruft, um das Programm jedes Shaders zu laden und zu kompilieren, dann jeden an den WebGL-Kontext anhängt. Sobald sie kompiliert sind, wird das Programm verknüpft und an den Anrufer zurückgegeben.
- `loadShader()`
  - : Erstellt ein Shader-Objekt und lädt den angegebenen Quellcode darin, bevor es den Code kompiliert und prüft, um sicherzustellen, dass der Compiler erfolgreich war, bevor der neu kompilierte Shader an den Anrufer zurückgegeben wird. Wenn ein Fehler auftritt, wird stattdessen `NULL` zurückgegeben.
- `initBuffers()`
  - : Initialisiert die Puffer, die Daten enthalten, die an WebGL übergeben werden sollen. Diese Puffer umfassen das Array von Vertex-Positionen, das Array von Vertex-Normalen, die Texturkoordinaten für jede Oberfläche des Würfels und das Array von Vertex-Indizes (die angeben, welcher Eintrag in der Vertex-Liste jede Ecke des Würfels darstellt).
- `loadTexture()`
  - : Lädt das Bild von einer angegebenen URL und erstellt daraus eine WebGL-Textur. Wenn die Abmessungen des Bildes nicht sowohl Zweierpotenzen sind (siehe die Funktion `isPowerOf2()`), wird Mipmapping deaktiviert und das Wrapping wird an die Ränder geklammert. Dies liegt daran, dass die optimierte Darstellung von mipmap-Texturen nur für Texturen funktioniert, deren Abmessungen in WebGL 1 Zweierpotenzen sind. WebGL 2 unterstützt mipmapping für Texturen beliebiger Größe.
- `isPowerOf2()`
  - : Gibt `true` zurück, wenn der angegebene Wert eine Zweierpotenz ist; ansonsten `false`.

### Alles zusammenfügen

Wenn Sie all diesen Code zusammen mit dem HTML und dem anderen JavaScript-Code, der oben nicht enthalten ist, einfügen, erhalten Sie das, was Sie sehen, wenn Sie [dieses Beispiel auf Glitch ausprobieren](https://webxr-experiment.glitch.me/). Denken Sie daran: Wenn Sie herumlaufen und sich verlaufen, drücken Sie einfach die <kbd>R</kbd>-Taste, um sich wieder an den Anfang zurückzusetzen.

Ein Tipp: Wenn Sie kein XR-Gerät haben, können Sie möglicherweise etwas von dem 3D-Effekt erzielen, wenn Sie Ihr Gesicht sehr nah an den Bildschirm bringen, mit Ihrer Nase zentriert entlang der Grenze zwischen den Bildern des linken und rechten Auges auf der Leinwand. Indem Sie sorgfältig durch den Bildschirm auf das Bild fokussieren und langsam vor- und zurückbewegen, sollten Sie schließlich in der Lage sein, das 3D-Bild in den Fokus zu bringen. Es kann Übung erfordern, und Ihre Nase kann buchstäblich den Bildschirm berühren, abhängig davon, wie scharf Ihr Sehvermögen ist.

Es gibt viele Dinge, die Sie mit diesem Beispiel als Ausgangspunkt tun können. Versuchen Sie, mehr Objekte zur Welt hinzuzufügen, oder verbessern Sie die Steuerungen für realistischere Bewegung. Fügen Sie Wände, Decke und Boden hinzu, um Sie in einem Raum einzuschließen, anstatt ein unendlich wirkendes Universum zum Verlaufen zu haben. Fügen Sie Kollisions- oder Treffertests hinzu oder die Möglichkeit, die Textur jeder Fläche des Würfels zu ändern.

Es gibt nur wenige Beschränkungen, was getan werden kann, wenn man sich daran setzt.

## Siehe auch

- [Learn WebGL](https://learnwebgl.brown37.net/#) (enthält einige großartige Visualisierungen der Kamera und ihrer Beziehung zur virtuellen Welt)
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [Learn OpenGL](https://learnopengl.com/)
