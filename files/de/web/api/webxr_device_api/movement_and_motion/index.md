---
title: "Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel"
slug: Web/API/WebXR_Device_API/Movement_and_motion
l10n:
  sourceCommit: 832ecd3c808119b09090638ec0b7a8141c15c379
---

{{DefaultAPISidebar("WebXR Device API")}}

In diesem Artikel verwenden wir Informationen aus den vorherigen Artikeln unserer [WebXR](/de/docs/Web/API/WebXR_Device_API) Tutorial-Serie, um ein Beispiel zu konstruieren, das einen rotierenden Würfel animiert, um den sich der Benutzer frei mit einem VR-Headset, Tastatur und/oder Maus bewegen kann. Dies wird helfen, Ihr Verständnis der Geometrie von 3D-Grafiken und VR zu festigen und sicherzustellen, dass Sie verstehen, wie die Funktionen und Daten, die während des XR-Renderings verwendet werden, zusammenarbeiten.

**Abbildung: Screenshot dieses Beispiels in Aktion**
![Screenshot eines Beispiels, das einen texturierten Würfel zeigt, um den sich der Benutzer bewegen kann](xr-sample.png)

Der Kern dieses Beispiels—der drehende, texturierte, beleuchtete Würfel—stammt aus unserer WebGL-Tutorial-Serie, nämlich dem vorletzten Artikel der Serie, der sich mit [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) befasst.

Beim Lesen dieses Artikels und des zugehörigen Quellcodes ist es hilfreich, sich vor Augen zu halten, dass das Display für ein 3D-Headset ein einzelner Bildschirm ist, der in zwei Hälften geteilt ist. Die linke Bildschirmhälfte wird nur vom linken Auge gesehen, während die rechte Hälfte nur vom rechten Auge gesehen wird. Um die Szene immersiv darzustellen, sind mehrere Renderings der Szene erforderlich—einmal aus der Perspektive jedes Auges.

Beim Rendern für das linke Auge wird die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) so konfiguriert, dass das Zeichnen auf die linke Hälfte der Zeichenfläche beschränkt wird. Im Gegensatz dazu wird beim Rendern für das rechte Auge der Viewport so eingestellt, dass das Zeichnen auf die rechte Hälfte der Oberfläche beschränkt wird.

Dieses Beispiel demonstriert dies, indem es die Leinwand auf dem Bildschirm zeigt, selbst wenn eine Szene als immersive Darstellung mit einem XR-Gerät präsentiert wird.

## Abhängigkeiten

Während wir für dieses Beispiel nicht auf 3D-Grafik-Frameworks wie [`three.js`](https://threejs.org/) oder Ähnliches zurückgreifen, verwenden wir die [`glMatrix`](https://glmatrix.net/) Bibliothek für Matrixberechnungen, die wir in anderen Beispielen bereits verwendet haben. Dieses Beispiel importiert auch das [WebXR Polyfill](https://github.com/immersive-web/webxr-polyfill/), das von der Immersive Web Working Group, dem Team, das für die Spezifikation der WebXR API verantwortlich ist, gepflegt wird. Durch das Importieren dieses Polyfills ermöglichen wir es dem Beispiel, auf vielen Browsern zu funktionieren, die noch keine WebXR-Implementierungen haben, und glätten jegliche vorübergehenden Abweichungen von der Spezifikation, die während dieser immer noch etwas experimentellen Tage der WebXR-Spezifikation auftreten.

## Optionen

Dieses Beispiel verfügt über eine Reihe von Optionen, die Sie konfigurieren können, indem Sie die Werte von Konstanten anpassen, bevor Sie es im Browser laden. Der Code sieht folgendermaßen aus:

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
  - : Die Anzahl der Rotationsgrade, die pro Sekunde um die X-Achse angewendet werden.
- `yRotationDegreesPerSecond`
  - : Die Anzahl der Grad, die pro Sekunde um die Y-Achse gedreht werden.
- `zRotationDegreesPerSecond`
  - : Die Anzahl der Grad pro Sekunde zur Rotation um die Z-Achse.
- `enableRotation`
  - : Ein Boolean, der angibt, ob die Rotation des Würfels insgesamt aktiviert wird.
- `allowMouseRotation`
  - : Wenn `true`, können Sie die Maus verwenden, um den Blickwinkel zu neigen und zu schwenken.
- `allowKeyboardMotion`
  - : Wenn `true`, bewegen die Tasten W, A, S und D den Betrachter nach oben, links, unten und nach rechts, während die Aufwärts- und Abwärtspfeiltasten nach vorne und hinten bewegen. Wenn `false`, sind nur XR-Geräteänderungen für die Ansicht erlaubt.
- `enableForcePolyfill`
  - : Wenn dieser Boolean `true` ist, versucht das Beispiel, das WebXR Polyfill zu verwenden, selbst wenn der Browser tatsächlich Unterstützung für WebXR hat. Wenn `false`, wird das Polyfill nur verwendet, wenn der Browser [`navigator.xr`](/de/docs/Web/API/Navigator/xr) nicht implementiert.
- `SESSION_TYPE`
  - : Der Typ der XR-Sitzung, die erstellt werden soll: `inline` für eine Inline-Sitzung im Kontext des Dokuments und `immersive-vr`, um die Szene zu einem immersiven VR-Headset zu präsentieren.
- `MOUSE_SPEED`
  - : Ein Multiplikator, der verwendet wird, um die Eingaben der Maus für Neigungs- und Schwenksteuerung zu skalieren.
- `MOVE_DISTANCE`
  - : Die Distanz, die als Reaktion auf eine der Tasten bewegt wird, die verwendet werden, um den Betrachter durch die Szene zu bewegen.

> [!NOTE]
> Dieses Beispiel zeigt immer, was es rendert, auf dem Bildschirm an, selbst wenn es im Modus `immersive-vr` verwendet wird. Dies ermöglicht es Ihnen, jegliche Unterschiede im Rendern zwischen den Modi zu vergleichen und die Ausgabe vom immersiven Modus zu sehen, auch wenn Sie kein Headset besitzen.

## Einrichtung und Hilfsfunktionen

Als nächstes deklarieren wir die Variablen und Konstanten, die in der gesamten Anwendung verwendet werden, beginnend mit denen, die verwendet werden, um spezifische Informationen zu WebGL und WebXR zu speichern:

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

Darauf folgt eine Reihe von Konstanten, hauptsächlich um verschiedene Vektoren und Matrizen zu enthalten, die beim Rendern der Szene verwendet werden.

```js
const viewerStartPosition = vec3.fromValues(0, 0, -10);
const viewerStartOrientation = vec3.fromValues(0, 0, 1.0);

const cubeOrientation = vec3.create();
const cubeMatrix = mat4.create();
const mouseMatrix = mat4.create();
const inverseOrientation = quat.create();
const RADIANS_PER_DEGREE = Math.PI / 180.0;
```

Die ersten beiden—`viewerStartPosition` und `viewerStartOrientation`—geben an, wo sich der Betrachter relativ zum Zentrum des Raumes befinden wird und in welche Richtung sie zunächst blicken. `cubeOrientation` speichert die aktuelle Ausrichtung des Würfels, während `cubeMatrix` und `mouseMatrix` Speicher für Matrizen sind, die während der Darstellung der Szene verwendet werden. `inverseOrientation` ist ein Quaternion, das verwendet wird, um die Rotation darzustellen, die auf den Referenzraum für das Objekt im zu rendernden Frame angewendet wird.

`RADIANS_PER_DEGREE` ist der Wert, mit dem ein Winkel in Grad multipliziert wird, um ihn in Bogenmaß umzurechnen.

Die letzten vier deklarierten Variablen sind Speicher für Referenzen auf die {{HTMLElement("div")}} Elemente, in die wir die Matrizen ausgeben, wenn wir sie dem Benutzer zeigen möchten.

### Fehler protokollieren

Eine Funktion namens `LogGLError()` wird implementiert, um eine einfach anpassbare Möglichkeit zum Ausgeben von Protokollinformationen für Fehler bereitzustellen, die beim Ausführen von WebGL-Funktionen auftreten.

```js
function LogGLError(where) {
  let err = gl.getError();
  if (err) {
    console.error(`WebGL error returned by ${where}: ${err}`);
  }
}
```

Diese nimmt als einzige Eingabe einen String, `where`, der verwendet wird, um anzugeben, welcher Teil des Programms den Fehler erzeugt hat, da ähnliche Fehler in mehreren Situationen auftreten können.

### Die Vertex- und Fragment-Shader

Die Vertex- und Fragment-Shader sind exakt die gleichen wie die, die in dem Beispiel in unserem Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) verwendet werden. [Siehe dort](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL#update_the_shaders), wenn Sie interessiert an den [GLSL](/de/docs/Web/API/WebGL_API/By_example/Hello_GLSL) Quellcode für die hier verwendeten Basis-Shader sind.

Es reicht zu sagen, dass der Vertex-Shader die Position jedes Vertex berechnet, gegeben die Anfangspositionen jedes Vertex und die Transformationen, die angewendet werden müssen, um sie zu simulieren die aktuelle Position und Orientierung des Zuschauers. Der Fragment-Shader gibt die Farbe jedes Vertex zurück, indem er sie aus den in der Textur gefundenen Werten interpoliert und die Lichteffekte anwendet.

## WebXR starten und beenden

Beim ersten Laden des Skripts installieren wir einen Handler für das [`load`](/de/docs/Web/API/Window/load_event) Ereignis, um die Initialisierung durchzuführen.

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

Der `load` Ereignis-Handler erhält eine Referenz auf die Schaltfläche, die WebXR ein- und ausschaltet, in `xrButton`, und fügt dann einen Handler für [`click`](/de/docs/Web/API/Element/click_event) Ereignisse hinzu. Dann werden Referenzen zu den vier {{HTMLElement("div")}} Blöcken erhalten, in die wir während des Laufens unserer Szene die aktuellen Inhalte jeder der wichtigen Matrizen zu Informationszwecken ausgeben.

Dann schauen wir, ob [`navigator.xr`](/de/docs/Web/API/Navigator/xr) definiert ist. Wenn nicht—und/oder die `enableForcePolyfill` Konfigurationskonstante auf `true` gesetzt ist—installieren wir das WebXR Polyfill, indem wir die `WebXRPolyfill`-Klasse instanziieren.

### Den Startup- und Shutdown-UI behandeln

Dann rufen wir die `setupXRButton()` Funktion auf, die die Konfiguration der "Enter/Exit WebXR"-Schaltfläche behandelt, um sie je nach Verfügbarkeit der WebXR-Unterstützung für den in der `SESSION_TYPE` Konstanten angegebenen Sitzungstyp zu aktivieren oder zu deaktivieren.

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

Das Label der Schaltfläche wird im Code angepasst, der eigentliche Starten und Stoppen der WebXR Sitzung behandelt; wir werden das unten sehen.

Die WebXR Sitzung wird durch den Handler für [`click`](/de/docs/Web/API/Element/click_event) Ereignisse auf der Schaltfläche ein- und ausgeschaltet, dessen Label entweder auf "Enter WebXR" oder "Exit WebXR" eingestellt ist. Dies wird vom `onXRButtonClick()` Ereignis-Handler übernommen.

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

Dies beginnt damit, den Wert von `xrSession` zu überprüfen, um zu sehen, ob wir bereits ein [`XRSession`](/de/docs/Web/API/XRSession) Objekt für eine laufende WebXR Sitzung haben. Wenn nicht, steht der Klick für eine Anfrage, den WebXR-Modus zu aktivieren, also rufen Sie [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) auf, um eine WebXR-Sitzung des gewünschten WebXR-Sitzungstyps anzufordern, und rufen Sie dann `sessionStarted()` auf, um die Szene in dieser WebXR-Sitzung auszuführen.

Wenn wir bereits eine laufende Sitzung haben, rufen wir dagegen die Methode [`end()`](/de/docs/Web/API/XRSession/end) auf, um die Sitzung zu beenden.

Das Letzte, was wir in diesem Code tun, ist zu überprüfen, ob `xrSession` immer noch nicht-`NULL` ist. Wenn ja, rufen wir `sessionEnded()` auf, den Handler für das [`end`](/de/docs/Web/API/XRSession/end_event) Ereignis. Dieser Code sollte nicht notwendig sein, aber es scheint ein Problem zu geben, bei dem mindestens einige Browser das `end` Ereignis nicht korrekt auslösen. Indem wir den Ereignishandler direkt ausführen, schließen wir den Prozess bei dieser Gelegenheit manuell ab.

### Die WebXR-Sitzung starten

Die `sessionStarted()` Funktion übernimmt das eigentliche Einrichten und Starten der Sitzung, indem sie Ereignishandler einrichtet, den GLSL-Code für die Vertex- und Fragment-Shader kompiliert und installiert und die WebGL-Schicht an die WebXR-Sitzung anhängt, bevor die Rendering-Schleife gestartet wird. Sie wird als Handler für das durch [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) zurückgegebene Versprechen aufgerufen.

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

Nachdem das neu erstellte [`XRSession`](/de/docs/Web/API/XRSession) Objekt in `xrSession` gespeichert wurde, wird das Label der Schaltfläche auf "Exit WebXR" gesetzt, um die neue Funktion nach dem Start der Szene anzuzeigen, und ein Handler für das [`end`](/de/docs/Web/API/XRSession/end_event) Ereignis eingerichtet, damit wir benachrichtigt werden, wenn die `XRSession` endet.

Dann erhalten wir eine Referenz auf das {{HTMLElement("canvas")}}, das in unserem HTML gefunden wird—sowie seinen WebGL-Rendering-Kontext—, das als Zeichenfläche für die Szene verwendet wird. Die Eigenschaft `xrCompatible` wird angefordert, wenn [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf das Element aufgerufen wird, um Zugriff auf den WebGL-Rendering-Kontext für das Canvas zu erhalten. Dies stellt sicher, dass der Kontext für die Verwendung als Quelle für WebXR-Rendering konfiguriert ist.

Als Nächstes fügen wir Ereignishandler für [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) hinzu, jedoch nur, wenn die Konstante `allowMouseRotation` `true` ist. Der `mousemove` Handler wird mit dem Pitchen und Yawen des Blicks basierend auf der Bewegung der Maus umgehen. Da die Funktion nur funktioniert, während die rechte Maustaste gedrückt ist, und das Klicken mit der rechten Maustaste das Kontextmenü auslöst, fügen wir dem Canvas einen Handler für das `contextmenu` Ereignis hinzu, um zu verhindern, dass das Kontextmenü erscheint, wenn der Benutzer anfängt, die Maus zu ziehen.

Als Nächstes werden die Shader-Programme kompiliert, Referenzen auf deren Variablen erhalten und die Puffer initialisiert, die das Array für die Position jedes Vertex speichern; die Indizes in die Positionstabelle für jedes Vertex; die Vertex-Normals; und die Texturkoordinaten für jedes Vertex. Dies alles wird direkt aus dem WebGL-Beispiel-Code übernommen, also verweisen Sie auf [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) und seine vorhergehenden Artikel [Erstellen von 3D-Objekten mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL) und [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL). Dann wird unsere `loadTexture()` Funktion aufgerufen, um die Texturdatei zu laden.

Da die Rendering-Strukturen und -Daten nun geladen sind, bereiten wir uns darauf vor, die `XRSession` auszuführen. Wir verbinden die Sitzung mit der WebGL-Schicht, damit sie weiß, was sie als Zeichenfläche verwenden soll, indem wir [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) mit einer `baseLayer` aufrufen, die auf eine neue [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) gesetzt ist.

Dann schauen wir uns den Wert der `SESSION_TYPE` Konstante an, um zu sehen, ob der WebXR-Kontext immersiv oder inline sein soll. Immersive Sitzungen verwenden den `localen` Referenzraum, während inline Sitzungen den `viewer` Referenzraum verwenden.

Die `glMatrix` Bibliothek verwendet die Funktion `fromTranslation()` für 4x4 Matrizen, um die Startposition des Betrachters, wie in der Konstante `viewerStartPosition` angegeben, in eine Transformationsmatrix, `cubeMatrix`, umzuwandeln. Die Startorientierung des Betrachters, die Konstante `viewerStartOrientation`, wird in die `cubeOrientation` kopiert, die zur Verfolgung der Rotation des Würfels im Laufe der Zeit verwendet wird.

`sessionStarted()` endet, indem die `requestReferenceSpace()` Methode der Sitzung aufgerufen wird, um ein Referenzraumobjekt zu erhalten, das den Raum beschreibt, in dem das Objekt erstellt wird. Wenn das zurückgegebene Versprechen zu einem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Objekt aufgelöst wird, rufen wir seine Methode [`getOffsetReferenceSpace`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) auf, um ein Referenzraumobjekt zu erhalten, das das Koordinatensystem des Objekts repräsentiert. Der Ursprung des neuen Raumes befindet sich an den Weltkoordinaten, die von der `viewerStartPosition` angegeben werden, und seine Orientierung ist auf `cubeOrientation` gesetzt. Dann lassen wir die Sitzung wissen, dass wir bereit sind, ein Frame zu zeichnen, indem wir ihre Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufrufen. Wir protokollieren die zurückgegebene Anforderungs-ID für den Fall, dass wir die Anforderung später stornieren müssen.

Schließlich gibt `sessionStarted()` die [`XRSession`](/de/docs/Web/API/XRSession) zurück, die die WebXR-Sitzung des Benutzers darstellt.

### Wenn die Sitzung endet

Wenn die WebXR-Sitzung endet—entweder weil sie vom Benutzer heruntergefahren wird oder durch Aufrufen von [`XRSession.end()`](/de/docs/Web/API/XRSession/end)—wird das [`end`](/de/docs/Web/API/XRSession/end_event) Ereignis gesendet; wir haben dies so eingerichtet, dass eine Funktion namens `sessionEnded()` aufgerufen wird.

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

Wir können `sessionEnded()` auch direkt aufrufen, wenn wir die WebXR-Sitzung programmatisch beenden möchten. In jedem Fall wird das Label der Schaltfläche aktualisiert, um anzuzeigen, dass ein Klick eine Sitzung startet, und dann wird, wenn es eine ausstehende Anfrage für einen Animationsframe gibt, diese durch Aufrufen von [`cancelAnimationFrame`](/de/docs/Web/API/XRSession/cancelAnimationFrame) abgebrochen.

Wenn das erledigt ist, wird der Wert von `xrSession` auf `NULL` geändert, um anzuzeigen, dass wir mit der Sitzung fertig sind.

## Die Steuerungen implementieren

Schauen wir uns nun den Code an, der Keyboard- und Mausereignisse in etwas Nutzbares zur Steuerung eines Avatars in einem WebXR-Szenario umsetzt.

### Mit der Tastatur bewegen

Um dem Benutzer zu ermöglichen, sich durch die 3D-Welt zu bewegen, auch wenn sie kein WebXR-Gerät mit den Eingaben zur Bewegung durch den Raum haben, reagiert unser Handler für [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse, `handleKeyDown()`, indem er die Offsets vom Ursprung des Objekts aktualisiert, basierend darauf, welche Taste gedrückt wurde.

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

- Die <kbd>W</kbd>-Taste bewegt den Betrachter um `MOVE_DISTANCE` nach oben.
- Die <kbd>S</kbd>-Taste bewegt den Betrachter um `MOVE_DISTANCE` nach unten.
- Die <kbd>A</kbd>-Taste verschiebt den Betrachter um `MOVE_DISTANCE` nach links.
- Die <kbd>D</kbd>-Taste verschiebt den Betrachter um `MOVE_DISTANCE` nach rechts.
- Die Pfeiltaste nach oben, <kbd>↑</kbd>, schiebt den Betrachter um `MOVE_DISTANCE` nach vorne.
- Die Pfeiltaste nach unten, <kbd>↓</kbd>, schiebt den Betrachter um `MOVE_DISTANCE` nach hinten.
- Die <kbd>R</kbd>-Taste setzt den Betrachter auf seine Startposition und -ausrichtung zurück, indem alle Eingabeoffsets auf 0 zurückgesetzt werden.

Diese Offsets werden vom Renderer mit dem nächsten gedrehtem Frame angewendet.

### Neigung und Schwenkung mit der Maus

Wir haben auch einen [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Ereignishandler, der überprüft, ob die rechte Maustaste gedrückt ist, und wenn ja, die Funktion `rotateViewBy()` aufruft, die als nächstes definiert wird, um die neuen Neigungs- (nach oben und unten) und Schwenkwert (nach links und rechts) zu berechnen und zu speichern.

```js
function handlePointerMove(event) {
  if (event.buttons & 2) {
    rotateViewBy(event.movementX, event.movementY);
  }
}
```

Das Berechnen der neuen Neigungs- und Schwenkwerten wird von der Funktion `rotateViewBy()` durchgeführt:

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

Gegeben sind die Mause-Deltas, `dx` und `dy`, als Eingaben; der neue Schwenkwert wird berechnet, indem das Produkt von `dx` und der Skalierungskonstante `MOUSE_SPEED` vom aktuellen Wert von `mouseYaw` subtrahiert wird. Dann können Sie steuern, wie responsiv die Maus ist, indem Sie den Wert von `MOUSE_SPEED` erhöhen.

## Einen Frame zeichnen

Unser Callback für [`XRSession.requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) wird in der Funktion `drawFrame()` implementiert, die unten gezeigt ist. Ihre Aufgabe ist es, den Referenzraum des Betrachters zu erhalten, zu berechnen, wie viel Bewegung auf animierte Objekte angewendet werden muss, gegeben die seit dem letzten Frame vergangene Zeit, und dann jede der vom Betrachter spezifizierten Ansichten zu rendern [`XRPose`](/de/docs/Web/API/XRPose).

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

Das Erste, was wir tun, ist, [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufzurufen, um zu beantragen, dass `drawFrame()` erneut aufgerufen wird, um den nächsten Frame zu rendern. Dann geben wir den Referenzraum des Objekts in die `applyViewerControls()` Funktion ein, die einen überarbeiteten [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) zurückgibt, der die Position und Orientierung des Objekts transformiert, um die Bewegung und das Neigen und Schwenken, die der Benutzer mit Hilfe der Tastatur und der Maus angewendet hat, zu berücksichtigen. Denken Sie daran, dass immer die Objekte der Welt bewegt und neu orientiert werden, nicht der Betrachter. Der zurückgegebene Referenzraum macht es uns leicht, genau das zu tun.

Mit dem neuen Referenzraum in der Hand erhalten wir das [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), das den Blickpunkt des Betrachters für beide Augen darstellt. Wenn das erfolgreich ist, beginnen wir mit der Vorbereitung des Renderns, indem wir die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), die von der Sitzung verwendet wird, erhalten und ihren Framebuffer als WebGL-Framebuffer binden (damit WebGL-Rendering in die Schicht und somit in das Display des XR-Geräts zeichnet). Mit WebGL, das nun für das Rendern auf das XR-Gerät konfiguriert ist, löschen wir den Frame auf Schwarz und sind bereit, mit dem Rendern zu beginnen.

Die seit dem letzten gerenderten Frame vergangene Zeit (in Sekunden) wird berechnet, indem der Zeitstempel des vorherigen Frames, `lastFrameTime`, von der aktuellen Zeit, wie sie durch den `time` Parameter angegeben wird, subtrahiert und dann mit 0.001 multipliziert wird, um Millisekunden in Sekunden umzuwandeln. Die aktuelle Zeit wird dann in `lastFrameTime` gespeichert;

Die Funktion `drawFrame()` endet, indem sie über jede Ansicht im [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) iteriert, den Viewport für die Ansicht einstellt und `renderScene()` aufruft, um die Szene zu rendern. Indem wir den Viewport für jede Ansicht einstellen, behandeln wir das typische Szenario, in dem die Ansichten für jedes Auge jeweils auf die Hälfte des WebGL-Frames gerendert werden. Die XR-Hardware sorgt dann dafür, dass jedes Auge nur den Teil des Bildes sieht, der für dieses Auge bestimmt ist.

> [!NOTE]
> In diesem Beispiel präsentieren wir den Frame sowohl auf dem XR-Gerät _als auch_ auf dem Bildschirm. Um sicherzustellen, dass die Leinwand auf dem Bildschirm die richtige Größe hat, um uns dies zu ermöglichen, setzen wir ihre Breite gleich der individuellen [`XRView`](/de/docs/Web/API/XRView) Breite multipliziert mit der Anzahl der Ansichten; die Leinwandhöhe ist immer gleich der Höhe des Viewports. Die beiden Zeilen Code, die die Leinwandgröße anpassen, sind in regulären WebXR-Rendering-Schleifen nicht erforderlich.

### Anwendung der Benutzereingaben

Die `applyViewerControls()` Funktion, die von `drawFrame()` aufgerufen wird, bevor etwas gerendert wird, nimmt die Offsets in jede der drei Richtungen, das Schwenk-Offset und das Neigungs-Offset, wie von den Funktionen `handleKeyDown()` und `handlePointerMove()` in Reaktion auf das Drücken von Tasten und das Ziehen der Maus des Benutzers mit gedrückter rechter Maustaste aufgezeichnet, und gibt dann einen neuen Referenzraum zurück, der die Position und Orientierung des Objekts entsprechend der Ergebnisse der Eingaben verändert.

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

Wenn alle Eingabe-Offsätze Null sind, geben wir einfach den ursprünglichen Referenzraum zurück. Andernfalls erstellen wir aus den Orientierungsänderungen in `mousePitch` und `mouseYaw` ein Quaternion, das die Inverse dieser Orientierung spezifiziert, sodass das Anwenden des `inverseOrientation` auf den Würfel korrekt erscheint, die Bewegung des Betrachters widerzuspiegeln.

Dann ist es an der Zeit, ein neues [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) Objekt zu erstellen, das die Transformation repräsentiert, die verwendet werden soll, um den neuen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) für das bewegte und/oder neu orientierte Objekt zu erstellen. Die Position ist ein neuer Vektor, dessen `x`, `y` und `z` den Offsets entsprechen, die entlang jeder dieser Achsen bewegt werden. Die Orientierung ist das `inverseOrientation` Quaternion.

Wir kopieren die Transformations[`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) in `mouseMatrix`, die wir später verwenden werden, um die Mouse-Tracking-Matrix dem Benutzer anzuzeigen (sodass dies ein Schritt ist, den Sie normalerweise überspringen können). Schließlich übergeben wir die `XRRigidTransform` in den aktuellen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) des Objekts, um den Referenzraum zu erhalten, der diese Transformation integriert, um die Platzierung des Würfels relativ zum Benutzer entsprechend den Eingaben des Benutzers zu repräsentieren. Dieser neue Referenzraum wird an den Aufrufer zurückgegeben.

### Die Szene rendern

Die Funktion `renderScene()` wird aufgerufen, um tatsächlich die Teile der Welt zu rendern, die für den Benutzer in diesem Moment sichtbar sind. Sie wird einmal für jedes Auge mit leicht unterschiedlichen Positionen für jedes Auge aufgerufen, um den 3D-Effekt zu erzeugen, der für XR-Geräte notwendig ist.

Der größte Teil dieses Codes ist typischer WebGL-Rendering-Code, direkt aus der `drawScene()` Funktion im Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) übernommen, und es ist dort, dass Sie nach Details zu den WebGL-Rendering-Teilen dieses Beispiels suchen sollten ([sehen Sie den Code auf GitHub](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample7/webgl-demo.js)). Aber hier beginnt es mit etwas Code, der spezifisch für dieses Beispiel ist, also schauen wir uns diesen Teil genauer an.

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

`renderScene()` beginnt, indem berechnet wird, wie viel Rotation um jede der drei Achsen in der seit dem vorherigen Frame vergangenen Zeit auftreten soll. Diese Werte ermöglichen es uns, die Rotation unseres animierten Würfels so anzupassen, dass seine Bewegungsgeschwindigkeit unabhängig von möglichen Schwankungen der Framerate aufgrund der Systemlast konsistent bleibt. Diese Werte werden als die Anzahl der Bogenmaß-Rotation berechnet, die angesichts der verstrichenen Zeit anzuwenden ist, und in den Konstanten `xRotationForTime`, `yRotationForTime` und `zRotationForTime` gespeichert.

Nach dem Aktivieren und Konfigurieren des Tiefentests prüfen wir den Wert der Konstante `enableRotation`, um zu sehen, ob die Rotation des Würfels aktiviert ist; wenn ja, verwenden wir glMatrix, um `cubeMatrix` (die die aktuelle Orientierung des Würfels relativ zur Welt darstellt) um die drei Achsen zu drehen. Mit der globalen Orientierung des Würfels etabliert, multiplizieren wir das dann mit der Inverse der Transformationsmatrix der Ansicht, um die endgültige Modellansichts-Matrix zu erhalten—die Matrix, die auf das Objekt anzuwenden ist, um es sowohl für Animationszwecke zu rotieren, als auch es zu bewegen und neu zu orientieren, um die Bewegung des Betrachters durch den Raum zu simulieren.

Dann wird die Normalmatrix der Ansicht berechnet, indem die Modellansichts-Matrix genommen, invertiert und transponiert wird (die Spalten und Zeilen vertauscht).

Die letzten paar Zeilen Code, die zu diesem Beispiel hinzugefügt werden, sind vier Aufrufe von `displayMatrix()`, einer Funktion, die die Inhalte einer Matrix zur Analyse durch den Benutzer anzeigt. Der Rest der Funktion ist mit der älteren WebGL-Probe, aus der dieser Code stammt, identisch oder im Wesentlichen identisch.

### Anzeige einer Matrix

Zu Lehrzwecken zeigt dieses Beispiel die Inhalte der wichtigen Matrizen an, die während des Renderns der Szene verwendet werden. Die Funktion `displayMatrix()` wird dafür verwendet; diese Funktion verwendet MathML, um die Matrix zu rendern, und fällt auf ein eher Array-ähnliches Format zurück, wenn MathML vom Browser des Benutzers nicht unterstützt wird.

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

Dies ersetzt den Inhalt des durch `target` angegebenen Elements durch ein neu erstelltes {{MathMLElement("math")}}-Element, das die 4x4-Matrix enthält. Jeder Eintrag wird mit bis zu zwei Dezimalstellen angezeigt.

### Alles andere

Der Rest des Codes ist identisch mit dem in den früheren Beispielen gefundenen Code:

- `initShaderProgram()`
  - : Initialisiert das GLSL-Shader-Programm, indem `loadShader()` aufgerufen wird, um das Shader-Programm zu laden und zu kompilieren und dann jedes an den WebGL-Kontext anzuhängen. Sobald sie kompiliert sind, wird das Programm verlinkt und an den Aufrufer zurückgegeben.
- `loadShader()`
  - : Erstellt ein Shader-Objekt und lädt den angegebenen Quellcode darin, bevor der Code kompiliert und überprüft wird, um sicherzustellen, dass der Compiler erfolgreich ist, bevor der neu kompilierte Shader an den Aufrufer zurückgegeben wird. Wenn ein Fehler auftritt, wird `NULL` zurückgegeben.
- `initBuffers()`
  - : Initialisiert die Puffer, die Daten enthalten, die an WebGL übergeben werden sollen. Diese Puffer umfassen das Array der Vertex-Positionen, das Array der Vertex-Normals, die Texturkoordinaten für jede Oberfläche des Würfels und das Array der Vertex-Indizes (die angeben, welcher Eintrag in der Vertex-Liste jede Ecke des Würfels repräsentiert).
- `loadTexture()`
  - : Lädt das Bild unter einer angegebenen URL und erstellt eine WebGL-Textur daraus. Wenn die Dimensionen des Bildes keine Potenzen von zwei sind (siehe die `isPowerOf2()`-Funktion), wird das Mipmapping deaktiviert und das Wrapping an den Rändern geklammert. Dies liegt daran, dass optimiertes Rendering von Mipmapped-Texturen in WebGL 1 nur für Texturen funktioniert, deren Dimensionen Potenzen von zwei sind. WebGL 2 unterstützt für Mipmapping willkürlich große Texturen.
- `isPowerOf2()`
  - : Gibt `true` zurück, wenn der angegebene Wert eine Potenz von zwei ist; ansonsten wird `false` zurückgegeben.

### Alles zusammenfügen

Wenn Sie den Code nehmen und ihn mit HTML und ein wenig zusätzlichem JavaScript kombinieren, haben Sie etwas wie unseren [WebXR: Beispiel mit rotierendem Objekt und Benutzerbewegung](https://mdn.github.io/dom-examples/webxr/) Demo.
Denken Sie daran: Wenn Sie herumlaufen und sich verlaufen, drücken Sie einfach die <kbd>R</kbd>-Taste, um sich zurück zum Anfang zu setzen.

Ein Tipp: Wenn Sie kein XR-Gerät haben, können Sie möglicherweise einen Teil des 3D-Effekts erzielen, wenn Sie Ihr Gesicht sehr nahe an den Bildschirm bringen, wobei Ihre Nase entlang der Grenze zwischen den linken und rechten Augenbildern in der Leinwand zentriert ist. Indem Sie sorgfältig durch den Bildschirm auf das Bild fokussieren und sich langsam vorwärts und rückwärts bewegen, sollten Sie schließlich in der Lage sein, das 3D-Bild in den Fokus zu bringen. Es kann Übung erfordern, und Ihre Nase kann buchstäblich den Bildschirm berühren, je nachdem, wie scharf Ihre Sehkraft ist.

Es gibt viele Dinge, die Sie tun können, indem Sie dieses Beispiel als Ausgangspunkt verwenden. Versuchen Sie, mehr Objekte in die Welt hinzuzufügen oder die Bewegungssteuerungen zu verbessern, um realistischer zu bewegen. Fügen Sie Wände, Decken und Böden hinzu, um Sie in einem Raum einzuschließen, anstatt ein unendlich erscheinendes Universum zu haben, in dem Sie verloren gehen können. Fügen Sie Kollisionstests oder Treffertests hinzu, oder die Fähigkeit, die Textur jedes Gesichts des Würfels zu ändern.

Es gibt nur wenige Einschränkungen für das, was getan werden kann, wenn Sie sich daran setzen.

## Siehe auch

- [Learn WebGL](https://learnwebgl.brown37.net/#) (enthält einige großartige Visualisierungen der Kamera und wie sie sich auf die virtuelle Welt bezieht)
- [WebGL Grundlagen](https://webglfundamentals.org/)
- [Learn OpenGL](https://learnopengl.com/)
