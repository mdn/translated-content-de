---
title: "Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel"
slug: Web/API/WebXR_Device_API/Movement_and_motion
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{DefaultAPISidebar("WebXR Device API")}}

In diesem Artikel werden wir die Informationen aus den vorherigen Artikeln unserer [WebXR](/de/docs/Web/API/WebXR_Device_API) Tutorial-Serie verwenden, um ein Beispiel zu konstruieren, das einen rotierenden Würfel animiert, um den sich der Benutzer mit einem VR-Headset, Tastatur und/oder Maus frei bewegen kann. Dies wird Ihr Verständnis darüber festigen, wie die Geometrie von 3D-Grafik und VR funktioniert, sowie sicherstellen, dass Sie verstehen, wie die Funktionen und Daten, die während des XR-Renderings verwendet werden, zusammenarbeiten.

**Abbildung: Screenshot dieses Beispiels in Aktion**
![Screenshot des Beispiels, das einen texturierten Würfel zeigt, um den sich der Benutzer bewegen kann](xr-sample.png)

Der Kern dieses Beispiels—der drehende, texturierte, beleuchtete Würfel—stammt aus unserer WebGL-Tutorial-Serie; nämlich aus dem vorletzten Artikel der Serie, der [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) behandelt.

Beim Lesen dieses Artikels und des begleitenden Quellcodes ist es hilfreich, sich vor Augen zu führen, dass das Display eines 3D-Headsets ein einzelner Bildschirm ist, der in zwei Hälften geteilt ist. Die linke Hälfte des Bildschirms wird nur vom linken Auge gesehen, während die rechte Hälfte nur vom rechten Auge gesehen wird. Um die Szene immersiv darzustellen, sind mehrere Renderings der Szene erforderlich—einmal aus der Perspektive jedes Auges.

Beim Rendern des linken Auges wird die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) mit ihrem [Viewport](/de/docs/Web/API/XRWebGLLayer/getViewport) so konfiguriert, dass das Zeichnen auf die linke Hälfte der Zeichenfläche beschränkt wird. Im Gegensatz dazu wird der Viewport beim Rendern des rechten Auges so eingestellt, dass das Zeichnen auf die rechte Hälfte der Fläche beschränkt wird.

Dieses Beispiel demonstriert dies, indem es die Leinwand auf dem Bildschirm zeigt, selbst wenn eine Szene als immersives Display mit einem XR-Gerät präsentiert wird.

## Abhängigkeiten

Für dieses Beispiel werden wir keine 3D-Grafik-Frameworks wie [`three.js`](https://threejs.org/) oder Ähnliches verwenden, wir nutzen jedoch die [`glMatrix`](https://glmatrix.net/) Bibliothek für Matrix-Mathematik, die wir in anderen Beispielen in der Vergangenheit verwendet haben. Dieses Beispiel importiert auch das [WebXR Polyfill](https://github.com/immersive-web/webxr-polyfill/), das von der Immersive Web Working Group gepflegt wird, dem Team, das für die Spezifikation der WebXR-API verantwortlich ist. Durch das Importieren dieses Polyfills ermöglichen wir es dem Beispiel, auf vielen Browsern zu funktionieren, die noch keine WebXR-Implementierungen haben, und gleichen vorübergehende Abweichungen von der Spezifikation aus, die während dieser immer noch etwas experimentellen Zeit der WebXR-Spezifikation auftreten.

## Optionen

Dieses Beispiel bietet eine Reihe von Optionen, die Sie konfigurieren können, indem Sie die Werte der Konstanten anpassen, bevor Sie es im Browser laden. Der Code sieht so aus:

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
  - : Die Anzahl der Grade, die jede Sekunde um die Y-Achse gedreht werden.
- `zRotationDegreesPerSecond`
  - : Die Anzahl der Grad pro Sekunde, die um die Z-Achse gedreht werden.
- `enableRotation`
  - : Ein Boolescher Wert, der angibt, ob die Drehung des Würfels überhaupt aktiviert werden soll.
- `allowMouseRotation`
  - : Ist `true`, können Sie die Maus verwenden, um den Blickwinkel zu neigen und zu drehen.
- `allowKeyboardMotion`
  - : Ist `true`, bewegen die W-, A-, S- und D-Tasten den Betrachter nach oben, links, unten und nach rechts, während die Pfeiltasten nach oben und unten nach vorne und hinten bewegen. Ist `false`, sind nur XR-Geräteänderungen der Ansicht erlaubt.
- `enableForcePolyfill`
  - : Wenn dieser Boolesche Wert `true` ist, versucht das Beispiel, das WebXR Polyfill zu verwenden, selbst wenn der Browser tatsächlich Unterstützung für WebXR hat. Ist `false`, wird das Polyfill nur verwendet, wenn der Browser [`navigator.xr`](/de/docs/Web/API/Navigator/xr) nicht implementiert.
- `SESSION_TYPE`
  - : Der Typ der XR-Sitzung, die erstellt werden soll: `inline` für eine Inline-Sitzung, die im Kontext des Dokuments präsentiert wird, und `immersive-vr`, um die Szene an ein immersives VR-Headset zu präsentieren.
- `MOUSE_SPEED`
  - : Ein Multiplikator zur Skalierung der Eingaben der Maus für Steuerung von Neigung und Drehung.
- `MOVE_DISTANCE`
  - : Die Entfernung, die in Reaktion auf eine der Tasten zurückgelegt wird, die verwendet werden, um den Betrachter durch die Szene zu bewegen.

> [!NOTE]
> Dieses Beispiel zeigt immer, was es auf dem Bildschirm ausgibt, selbst wenn es den `immersive-vr`-Modus verwendet. Dies ermöglicht Ihnen, Unterschiede im Rendering zwischen den beiden Modi zu vergleichen und die Ausgabe im immersiven Modus zu sehen, auch wenn Sie kein Headset haben.

## Setup- und Hilfsfunktionen

Als Nächstes deklarieren wir die Variablen und Konstanten, die in der gesamten Anwendung verwendet werden, beginnend mit denen, die Informationen speichern, die spezifisch für WebGL und WebXR sind:

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

Die ersten zwei—`viewerStartPosition` und `viewerStartOrientation`—geben an, wo der Betrachter relativ zum Mittelpunkt des Raums platziert wird und in welche Richtung er ursprünglich blickt. `cubeOrientation` wird die aktuelle Orientierung des Würfels speichern, während `cubeMatrix` und `mouseMatrix` Speicher für Matrizen sind, die beim Rendern der Szene verwendet werden. `inverseOrientation` ist ein Quaternion, das verwendet wird, um die Rotation zu repräsentieren, die auf den Referenzraum für das im Bild darzustellende Objekt angewendet werden soll.

`RADIANS_PER_DEGREE` ist der Wert, mit dem ein Winkel in Grad multipliziert wird, um den Winkel in Bogenmaß umzurechnen.

Die letzten vier deklarierten Variablen sind Speicher für Referenzen zu den {{HTMLElement("div")}} Elementen, in die wir die Matrizen ausgeben werden, wenn wir sie dem Benutzer zeigen wollen.

### Protokollierung von Fehlern

Eine Funktion namens `LogGLError()` wird implementiert, um eine einfach anpassbare Möglichkeit zu bieten, Protokollierungsinformationen für Fehler auszugeben, die beim Ausführen von WebGL-Funktionen auftreten.

```js
function LogGLError(where) {
  let err = gl.getError();
  if (err) {
    console.error(`WebGL error returned by ${where}: ${err}`);
  }
}
```

Diese Funktion nimmt als einzige Eingabe einen String, `where`, der angibt, welcher Teil des Programms den Fehler generiert hat, da ähnliche Fehler in mehreren Situationen auftreten können.

### Der Vertex- und Fragment-Shader

Die Vertex- und Fragment-Shader sind genau die gleichen wie die im Beispiel für unseren Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL). [Sehen Sie sich das an](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL#update_the_shaders), wenn Sie am [GLSL](/de/docs/Web/API/WebGL_API/By_example/Hello_GLSL) Quellcode der hier verwendeten grundlegenden Shader interessiert sind.

Es genügt zu sagen, dass der Vertex-Shader die Position jedes Vertexes berechnet, basierend auf den Anfangspositionen jedes Vertexes und den Transformationen, die angewendet werden müssen, um sie zu simulieren, die aktuelle Position und Orientierung des Betrachters. Der Fragment-Shader gibt die Farbe jedes Vertexes zurück und interpoliert nach Bedarf aus den in der Textur gefundenen Werten und wendet die Beleuchtungseffekte an.

## Starten und Beenden von WebXR

Beim ersten Laden des Skripts installieren wir einen Handler für das [`load`](/de/docs/Web/API/Window/load_event) Ereignis, damit wir die Initialisierung durchführen können.

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

Der `load` Ereignis-Handler erhält eine Referenz auf die Schaltfläche, die WebXR ein- und ausschaltet, in `xrButton` und fügt dann einen Handler für [`click`](/de/docs/Web/API/Element/click_event) Ereignisse hinzu. Dann werden Referenzen zu den vier {{HTMLElement("div")}} Blöcken erhalten, in die wir die aktuellen Inhalte jeder der wichtigen Matrizen zur Information ausgeben, während unsere Szene läuft.

Dann schauen wir nach, ob [`navigator.xr`](/de/docs/Web/API/Navigator/xr) definiert ist. Wenn es nicht definiert ist—und/oder die Konfigurationskonstante `enableForcePolyfill` auf `true` gesetzt ist—installieren wir das WebXR Polyfill, indem wir die `WebXRPolyfill` Klasse instanziieren.

### Behandlung des Start- und Shutdown-UIs

Dann rufen wir die Funktion `setupXRButton()` auf, die das Konfigurieren der "Enter/Exit WebXR"-Schaltfläche übernimmt, um sie zu aktivieren oder zu deaktivieren, je nach Verfügbarkeit der WebXR-Unterstützung für den im `SESSION_TYPE` Konstanten angegebenen Sitzungstyp.

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

Das Label der Schaltfläche wird in dem Code angepasst, der tatsächlich das Starten und Stoppen der WebXR-Sitzung behandelt; das sehen wir unten.

Die WebXR-Sitzung wird ein- und ausgeschaltet durch den Handler für [`click`](/de/docs/Web/API/Element/click_event) Ereignisse auf der Schaltfläche, deren Beschriftung entsprechend "Enter WebXR" oder "Exit WebXR" gesetzt wird. Dies geschieht vom `onXRButtonClick()` Ereignishandler.

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

Es beginnt damit, den Wert von `xrSession` zu überprüfen, um zu sehen, ob wir bereits ein [`XRSession`](/de/docs/Web/API/XRSession) Objekt haben, das eine laufende WebXR-Sitzung darstellt. Wenn nicht, repräsentiert der Klick eine Anfrage, den WebXR-Modus zu aktivieren, daher wird [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) aufgerufen, um eine WebXR-Sitzung des gewünschten WebXR-Sitzungstyps anzufordern, und dann `sessionStarted()` aufgerufen, um die Szene in dieser WebXR-Sitzung laufen zu lassen.

Wenn wir hingegen bereits eine laufende Sitzung haben, rufen wir ihre [`end()`](/de/docs/Web/API/XRSession/end) Methode auf, um die Sitzung zu stoppen.

Der letzte Schritt in diesem Code überprüft, ob `xrSession` noch nicht `NULL` ist. Wenn ja, rufen wir `sessionEnded()`, den Handler für das [`end`](/de/docs/Web/API/XRSession/end_event) Ereignis, auf. Dieser Code sollte nicht notwendig sein, aber es scheint ein Problem zu geben, bei dem zumindest einige Browser das `end` Ereignis nicht korrekt auslösen. Indem wir das Event-Handler direkt ausführen, schließen wir den Prozess manuell unter dieser Bedingung ab.

### Die WebXR-Sitzung starten

Die `sessionStarted()` Funktion übernimmt die tatsächliche Einrichtung und den Start der Sitzung, indem sie Ereignis-Handler einrichtet, den GLSL-Code für die Vertex- und Fragment-Shader kompiliert und installiert und die WebGL-Schicht an die WebXR-Sitzung anhängt, bevor sie die Rendering-Schleife startet. Sie wird als Handler für das Versprechen aufgerufen, das von [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) zurückgegeben wird.

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

Nachdem das neu erstellte [`XRSession`](/de/docs/Web/API/XRSession) Objekt in `xrSession` gespeichert wurde, wird die Beschriftung der Schaltfläche auf "Exit WebXR" gesetzt, um ihre neue Funktion nach dem Start der Szene anzuzeigen, und ein Handler für das [`end`](/de/docs/Web/API/XRSession/end_event) Ereignis installiert, damit wir benachrichtigt werden, wenn die `XRSession` endet.

Dann holen wir eine Referenz auf das im HTML enthaltene {{HTMLElement("canvas")}}, sowie auf seinen WebGL-Rendering-Kontext, der als Zeichenfläche für die Szene verwendet wird. Das `xrCompatible`-Eigenschaft wird bei Aufruf von [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) an das Element angefordert, um Zugriff auf den WebGL-Rendering-Kontext für die Leinwand zu erhalten. Dies stellt sicher, dass der Kontext für die Verwendung als Quelle für das WebXR-Rendering konfiguriert ist.

Anschließend fügen wir Event-Handler für die [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignisse hinzu, aber nur, wenn die Konstante `allowMouseRotation` auf `true` gesetzt ist. Der `mousemove`-Handler wird mit dem Neigen und Drehen der Ansicht auf Basis der Mausbewegung umgehen. Da die "Mausblick"-Funktion nur funktioniert, während die rechte Maustaste gedrückt wird, und das Klicken mit der rechten Maustaste das Kontextmenü auslöst, fügen wir der Leinwand einen Handler für das `contextmenu`-Ereignis hinzu, um zu verhindern, dass das Kontextmenü erscheint, wenn der Benutzer mit seinem Ziehen mit der Maus beginnt.

Als Nächstes kompilieren wir die Shader-Programme; holen Referenzen auf seine Variablen; initialisieren die Puffer, die die Arrays jeder Position speichern; die Indizes in der Positionstabelle für jeden Vertex; die Vertex-Normalen; und die Texturkoordinaten für jeden Vertex. Dies alles stammt direkt aus dem WebGL-Beispielcode, daher verweisen wir auf [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) und seine vorausgehenden Artikel [Erstellen von 3D-Objekten mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL) und [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL). Danach wird unsere `loadTexture()` Funktion aufgerufen, um die Texturdatei zu laden.

Jetzt, da die Rendering-Strukturen und Daten geladen sind, beginnen wir, die `XRSession` vorzubereiten, um zu laufen. Wir verbinden die Sitzung mit der WebGL-Schicht, sodass sie weiß, was als Rendering-Oberfläche zu verwenden ist, indem wir [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) mit einem `baseLayer` aufrufen, das auf eine neue [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) gesetzt ist.

Anschließend prüfen wir den Wert der `SESSION_TYPE` Konstante, um zu sehen, ob der WebXR-Kontext immersiv oder inline sein sollte. Immersive Sitzungen verwenden den `local` Referenzraum, während Inline-Sitzungen den `viewer` Referenzraum verwenden.

Die `glMatrix`-Bibliothek wendet die Funktion `fromTranslation()` für 4x4-Matrizen an, um die Startposition des Betrachters, wie in der `viewerStartPosition` Konstante angegeben, in eine Transformationsmatrix, `cubeMatrix`, umzuwandeln. Die Startausrichtung des Betrachters `viewerStartOrientation` Konstante wird in die `cubeOrientation` kopiert, die zur Verfolgung der Rotation des Würfels im Laufe der Zeit verwendet werden.

`sessionStarted()` wird abgeschlossen, indem die Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) der Sitzung aufgerufen wird, um ein Referenzraumobjekt zu erhalten, das den Raum beschreibt, in dem das Objekt erstellt wird. Wenn das zurückgegebene Versprechen zu einem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Objekt aufgelöst ist, rufen wir dessen [`getOffsetReferenceSpace`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) Methode auf, um ein Referenzraumobjekt zu erhalten, das das Koordinatensystem des Objekts repräsentiert. Der Ursprung des neuen Raums befindet sich an den Weltkoordinaten, die durch die `viewerStartPosition` angegeben sind, und seine Ausrichtung wird auf `cubeOrientation` gesetzt. Dann lassen wir die Sitzung wissen, dass wir bereit sind, einen Frame zu zeichnen, indem wir ihre [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) Methode aufrufen. Die zurückgegebene Anforderungs-ID wird aufgezeichnet, falls später eine Stornierung der Anforderung erforderlich ist.

Schließlich gibt `sessionStarted()` die [`XRSession`](/de/docs/Web/API/XRSession) zurück, die die WebXR-Sitzung des Benutzers darstellt.

### Wenn die Sitzung endet

Wenn die WebXR-Sitzung endet—entweder weil sie vom Benutzer heruntergefahren wird, oder indem sie [`XRSession.end()`](/de/docs/Web/API/XRSession/end) aufruft—wird das [`end`](/de/docs/Web/API/XRSession/end_event) Ereignis gesendet; wir haben dies so eingerichtet, dass es eine Funktion namens `sessionEnded()` aufruft.

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

Wir können `sessionEnded()` auch direkt aufrufen, wenn wir die WebXR-Sitzung programmgesteuert beenden möchten. In jedem Fall wird die Bezeichnung der Schaltfläche aktualisiert, um anzugeben, dass ein Klick eine Sitzung startet, und dann, falls eine Anforderung für ein Animationsbild noch aussteht, stornieren wir sie durch den Aufruf von [`cancelAnimationFrame`](/de/docs/Web/API/XRSession/cancelAnimationFrame).

Sobald das erledigt ist, wird der Wert von `xrSession` auf `NULL` gesetzt, um anzuzeigen, dass wir mit der Sitzung fertig sind.

## Implementierung der Steuerungen

Nun werfen wir einen Blick auf den Code, der Tastatur- und Mausereignisse in etwas Nutzbares für die Steuerung eines Avatars in einem WebXR-Szenario umsetzt.

### Mit der Tastatur bewegen

Um dem Benutzer die Möglichkeit zu geben, sich auch ohne WebXR-Gerät mit den Eingängen zum Bewegen durch den Raum zu bewegen, reagiert unser Handler für [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse, `handleKeyDown()`, indem er die Versätze vom Ursprung des Objekts basierend auf der gedrückten Taste aktualisiert.

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

  Taste schiebt den Betrachter um `MOVE_DISTANCE` nach links.

- Die

  <kbd>D</kbd>

  Taste schiebt den Betrachter um `MOVE_DISTANCE` nach rechts.

- Die Pfeiltaste

  <kbd>↑</kbd>

  schiebt den Betrachter um `MOVE_DISTANCE` nach vorne.

- Die Pfeiltaste

  <kbd>↓</kbd>

  schiebt den Betrachter um `MOVE_DISTANCE` nach hinten.

- Die

  <kbd>R</kbd>

  Taste setzt den Betrachter auf seine Startposition und Orientierung zurück, indem alle Eingabeversätze auf 0 gesetzt werden.

Diese Versätze werden vom Renderer ab dem nächsten gezeichneten Frame angewendet.

### Neigen und Drehen mit der Maus

Wir haben auch einen [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Event-Handler, der prüft, ob die rechte Maustaste gedrückt ist, und in diesem Fall die Funktion `rotateViewBy()` aufruft, die als nächstes definiert ist, um die neuen Neigungs- (nach oben und unten sehen) und Drehwerte (nach links und rechts sehen) zu berechnen und zu speichern.

```js
function handlePointerMove(event) {
  if (event.buttons & 2) {
    rotateViewBy(event.movementX, event.movementY);
  }
}
```

Das Berechnen der neuen Neigungs- und Drehwerte wird von der Funktion `rotateViewBy()` gehandhabt:

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

Gegeben als Eingabe die Bewegungsunterschiede der Maus, `dx` und `dy`, wird der neue Drehwert berechnet, indem vom aktuellen Wert von `mouseYaw` das Produkt von `dx` und der `MOUSE_SPEED` Skalierungs-Konstanten subtrahiert wird. Durch Erhöhen des Wertes von `MOUSE_SPEED` können Sie die Reaktionsfähigkeit der Maus steuern.

## Einen Frame zeichnen

Unser Callback für [`XRSession.requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) wird in der `drawFrame()` Funktion implementiert, die unten gezeigt wird. Ihre Aufgabe ist es, den Referenzraum des Betrachters zu erhalten, zu berechnen, wie viel Bewegung auf alle animierten Objekte angewendet werden muss, basierend auf der seit dem letzten Frame vergangenen Zeit, und dann jede der Sichten zu rendern, die durch die [`XRPose`](/de/docs/Web/API/XRPose) des Betrachters angegeben wird.

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

Das erste, was wir tun, ist, [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufzurufen, um zu verlangen, dass `drawFrame()` für den nächsten zu rendernden Frame erneut aufgerufen wird. Dann übergeben wir den Referenzraum des Objekts an die `applyViewerControls()` Funktion, die einen überarbeiteten [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) zurückgibt, der die Position und Ausrichtung des Objekts transformiert, um die durch den Benutzer mit Tastatur und Maus angewendete Bewegung, Neigung und Drehung zu berücksichtigen. Denken Sie daran, dass, wie immer, die Objekte der Welt bewegt und neu ausgerichtet werden, nicht der Betrachter. Der zurückgegebene Referenzraum erleichtert es uns, genau dies zu tun.

Mit dem neuen Referenzraum in der Hand holen wir uns die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), die den Blickwinkel des Betrachters—für beide Augen—darstellt. Wenn das erfolgreich ist, beginnen wir mit der Vorbereitung des Renderings, indem wir die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) verwenden, die von der Sitzung verwendet wird, und ihr Frame-Buffer für die Verwendung als WebGL Frame-Buffer gebunden wird (damit das Rendering von WebGL in die Schicht und daher auf das XR-Gerätedisplay zeichnet). Mit WebGL nun konfiguriert, um auf das XR-Gerät zu rendern, löschen wir den Frame zu Schwarz und sind bereit, mit dem Rendering zu beginnen.

Die seit dem letzten Frame vergangene Zeit (in Sekunden) wird errechnet, indem der Zeitstempel des vorherigen Frames, `lastFrameTime`, von der aktuellen Zeit, wie sie durch den `time` Parameter angegeben wird, subtrahiert und dann mit 0.001 multipliziert wird, um Millisekunden in Sekunden umzuwandeln. Die aktuelle Zeit wird dann in `lastFrameTime` gespeichert;

Die `drawFrame()` Funktion endet, indem sie über jede im [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) gefundene Sicht iteriert, den Viewport für die Sicht einrichtet und `renderScene()` aufruft, um den Frame zu rendern. Durch das Einrichten des Viewports für jede Sicht behandeln wir das typische Szenario, in dem die Ansichten für jedes Auge jeweils auf die Hälfte des WebGL-Frames gerendert werden. Die XR-Hardware sorgt dann dafür, dass jedes Auge nur den Teil dieses Bildes sieht, der für dieses Auge bestimmt ist.

> [!NOTE]
> In diesem Beispiel präsentieren wir den Frame sowohl auf dem XR-Gerät _als auch_ auf dem Bildschirm visuell. Um sicherzustellen, dass die Leinwand auf dem Bildschirm die richtige Größe hat, um uns dies zu ermöglichen, setzen wir ihre Breite auf die Breite der einzelnen [`XRView`](/de/docs/Web/API/XRView) multipliziert mit der Anzahl der Sichten; die Höhe der Leinwand entspricht immer der Höhe des Viewports. Die beiden Zeilen Code, die die Leinwandgröße anpassen, sind in regulären WebXR-Rendering-Schleifen nicht erforderlich.

### Anwenden der Benutzereingaben

Die `applyViewerControls()` Funktion, die von `drawFrame()` aufgerufen wird, bevor mit dem Rendern begonnen wird, übernimmt die Versätze in jede der drei Richtungen, den Drehoffset und den Neigungs-Offset, wie sie von den `handleKeyDown()` und `handlePointerMove()` Funktionen in Reaktion auf den Benutzer, der Tasten drückt und seine Maus mit der gedrückten rechten Maustaste zieht, aufgezeichnet wurden. Sie nimmt als Eingabe den grundlegenden Referenzraum für das Objekt und gibt einen neuen Referenzraum zurück, der die Position und Orientierung des Objekts so verändert, dass die Bewegungen des Benutzers übereinstimmen.

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

Wenn alle Eingabeversätze null sind, geben wir einfach den ursprünglichen Referenzraum zurück. Andernfalls erstellen wir aus den Änderungen der Orientierung in `mousePitch` und `mouseYaw` ein Quaternion, das das Inverse dieser Ausrichtung angibt, sodass die Anwendung des `inverseOrientation` auf den Würfel korrekt so erscheint, als ob sie die Bewegung des Betrachters durch den Raum widerspiegelt.

Dann ist es Zeit, ein neues [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) Objekt zu erstellen, das die Transformation repräsentiert, die verwendet wird, um den neuen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) für das bewegte und/oder neu ausgerichtete Objekt zu erstellen. Die Position ist ein neuer Vektor, dessen `x`, `y` und `z` den entlang jeder dieser Achsen verschobenen Versätzen entsprechen. Die Ausrichtung ist das `inverseOrientation` Quaternion.

Wir kopieren die [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der Transformation in `mouseMatrix`, die wir später verwenden, um die Maustracking-Matrix dem Benutzer anzuzeigen (dies ist also ein Schritt, den Sie normalerweise überspringen können). Schließlich übergeben wir das `XRRigidTransform` an den aktuellen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) des Objekts, um den Referenzraum zu erhalten, der diese Transformation integriert, um die Platzierung des Würfels relativ zum Benutzer entsprechend den Bewegungen des Benutzers darzustellen. Dieser neue Referenzraum wird an den Aufrufer zurückgegeben.

### Die Szene rendern

Die `renderScene()` Funktion wird aufgerufen, um tatsächlich die Teile der Welt zu rendern, die dem Benutzer momentan sichtbar sind. Es wird einmal für jedes Auge aufgerufen, mit leicht unterschiedlichen Positionen für jedes Auge, um den 3D-Effekt zu schaffen, der für XR-Ausrüstung benötigt wird.

Der Großteil dieses Codes ist typischer WebGL-Rendering-Code, der direkt von der `drawScene()` Funktion im Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) übernommen wurde. Dort sollten Sie nachsehen, um Details zu den WebGL-Render-Teilen dieses Beispiels zu finden ([sehen Sie sich den Code auf GitHub an](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample7/webgl-demo.js)). Aber hier beginnt es mit einigen speziellen Codes für dieses Beispiel, also werfen wir einen genaueren Blick auf diesen Teil.

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

`renderScene()` beginnt damit, wie viel Drehung um jede der drei Achsen in der Zeit, die seit dem letzten gerenderten Frame vergangen ist, auftreten sollte. Diese Werte ermöglichen es uns, die Rotation unseres animierenden Würfels in der richtigen Menge anzupassen, um sicherzustellen, dass seine Bewegungsgeschwindigkeit konstant bleibt, unabhängig von Variationen in der Bildrate, die aufgrund der Systemauslastung auftreten können. Diese Werte werden als die Anzahl der anzuwendenden Rotationsradiane in Anbetracht der vergangenen Zeit berechnet und in den Konstanten `xRotationForTime`, `yRotationForTime` und `zRotationForTime` gespeichert.

Nach dem Aktivieren und Konfigurieren des Tiefentests prüfen wir den Wert der `enableRotation` Konstanten, um zu sehen, ob die Drehung des Würfels aktiviert ist; wenn sie es ist, verwenden wir die glMatrix, um die `cubeMatrix` (die die aktuelle Orientierung des Würfels relativ zum Welt-Raum darstellt) um die drei Achsen zu drehen. Mit der globalen Ausrichtung des Würfels festgelegt, multiplizieren wir diese mit dem Inversen der Transformationsmatrix der Sicht, um die endgültige Modellansichts-Matrix zu erhalten—die Matrix, die auf das Objekt angewendet wird, um es sowohl für die Zwecke seiner Animation zu drehen, als auch es zu bewegen und neu auszurichten, um die Bewegung des Betrachters durch den Raum zu simulieren.

Dann wird die Normalenmatrix der Sicht berechnet, indem die Model-View-Matrix genommen, invertiert und transponiert wird (sie tauscht ihre Spalten und Zeilen).

Die letzten paar Zeilen Code, die für dieses Beispiel hinzugefügt wurden, sind vier Aufrufe von `displayMatrix()`, einer Funktion, die den Inhalt einer Matrix zur Analyse durch den Benutzer anzeigt. Der Rest der Funktion ist identisch oder im Wesentlichen identisch mit dem älteren WebGL-Beispiel, aus dem dieser Code abgeleitet ist.

### Eine Matrix anzeigen

Zu Unterrichtszwecken zeigt dieses Beispiel die Inhalte der wichtigen Matrizen an, die beim Rendern der Szene verwendet werden. Die `displayMatrix()` Funktion wird hierfür verwendet; diese Funktion verwendet MathML, um die Matrix darzustellen, mit einem Fallback zu einem eher array-ähnlichen Format, wenn MathML nicht vom Browser des Benutzers unterstützt wird.

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

Diese Funktion ersetzt den Inhalt des Elements, das durch `target` angegeben ist, mit einem neu erstellten {{MathMLElement("math")}} Element, das die 4x4 Matrix enthält. Jeder Eintrag wird mit bis zu zwei Dezimalstellen angezeigt.

### Alles andere

Der Rest des Codes ist identisch mit dem, der in den früheren Beispielen gefunden wurde:

- `initShaderProgram()`
  - : Initialisiert das GLSL-Shader-Programm, ruft `loadShader()` auf, um den Programmcode jedes Shaders zu laden und zu kompilieren, und hängt dann jeden an den WebGL-Kontext an. Sobald sie kompiliert sind, wird das Programm verlinkt und an den Aufrufer zurückgegeben.
- `loadShader()`
  - : Erstellt ein Shader-Objekt und lädt den angegebenen Quellcode in es, bevor der Code kompiliert und sichergestellt wird, dass der Compiler erfolgreich ist, bevor der neu kompilierte Shader an den Aufrufer zurückgegeben wird. Wenn ein Fehler auftritt, wird `NULL` zurückgegeben.
- `initBuffers()`
  - : Initialisiert die Puffer, die Daten enthalten, die an WebGL übergeben werden sollen. Diese Puffer umfassen das Array der Vertex-Positionen, das Array der Vertex-Normalen, die Texturkoordinaten für jede Oberfläche des Würfels und das Array der Vertex-Indizes (das angibt, welcher Eintrag in der Vertex-Liste jede Ecke des Würfels darstellt).
- `loadTexture()`
  - : Lädt das Bild von einer gegebenen URL und erstellt eine WebGL-Textur daraus. Wenn die Dimensionen des Bildes nicht beide Zweierpotenzen sind (siehe die `isPowerOf2()` Funktion), wird das Mipmapping deaktiviert und das Wrapping wird auf die Ränder beschränkt. Dies liegt daran, dass das optimierte Rendering von mipmapped Texturen nur für Texturen funktioniert, deren Dimensionen Potenzen von zwei in WebGL 1 sind. WebGL 2 unterstützt mipmapping für Texturen in beliebiger Größe.
- `isPowerOf2()`
  - : Gibt `true` zurück, wenn der angegebene Wert eine Zweierpotenz ist; andernfalls wird `false` zurückgegeben.

### Alles zusammenfügen

Wenn Sie all diesen Code hinzufügen und auch das HTML und den anderen JavaScript-Code, der oben nicht enthalten ist, bekommen Sie das, was Sie sehen, wenn Sie [dieses Beispiel auf Glitch ausprobieren](https://webxr-experiment.glitch.me/). Denken Sie daran: Wenn Sie sich verirren, drücken Sie einfach die <kbd>R</kbd> Taste, um sich an den Anfang zurückzusetzen.

Ein Tipp: Wenn Sie kein XR-Gerät haben, können Sie möglicherweise ein wenig vom 3D-Effekt bekommen, wenn Sie Ihr Gesicht sehr nah an den Bildschirm bringen, wobei Ihre Nase entlang der Grenze zwischen den linken und rechten Augenbildern in der Leinwand zentriert ist. Indem Sie sorgfältig durch den Bildschirm auf das Bild fokussieren und langsam vorwärts und rückwärts bewegen, sollten Sie schließlich in der Lage sein, das 3D-Bild in den Fokus zu bringen. Es kann Übung erfordern, und Ihre Nase kann buchstäblich den Bildschirm berühren, je nachdem, wie scharf Ihr Sehvermögen ist.

Es gibt viele Dinge, die Sie tun können, wenn Sie dieses Beispiel als Ausgangspunkt nehmen. Versuchen Sie, mehr Objekte zur Welt hinzuzufügen oder die Bewegungssteuerungen zu verbessern, um realistischer zu bewegen. Fügen Sie Wände, Decke und Boden hinzu, um Sie in einem Raum einzuschließen, anstatt ein unendlich scheinendes Universum zu haben, in dem Sie sich verlaufen können. Fügen Sie Kollisions- oder Treffer-Tests hinzu oder die Möglichkeit, die Textur jeder Seite des Würfels zu ändern.

Es gibt wenige Einschränkungen, was getan werden kann, wenn Sie sich dazu entschließen.

## Siehe auch

- [Learn WebGL](https://learnwebgl.brown37.net/#) (enthält einige großartige Visualisierungen der Kamera und ihrer Beziehung zur virtuellen Welt)
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [Learn OpenGL](https://learnopengl.com/)
