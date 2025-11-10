---
title: "WebGLRenderingContext: makeXRCompatible() Methode"
short-title: makeXRCompatible()
slug: Web/API/WebGLRenderingContext/makeXRCompatible
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) **`makeXRCompatible()`** stellt sicher, dass der durch den `WebGLRenderingContext` beschriebene Rendering-Kontext bereit ist, die Szene für das immersive [WebXR](/de/docs/Web/API/WebXR_Device_API) Gerät zu rendern, auf dem sie angezeigt wird. Falls erforderlich, kann die [WebGL](/de/docs/Web/API/WebGL_API) Schicht den Kontext neu konfigurieren, um auf einem anderen Gerät renderingfähig zu sein als dem, für das er ursprünglich vorgesehen war.

Dies ist nützlich, wenn Sie eine Anwendung haben, die zunächst auf einem Standard-2D-Display angezeigt wird, aber dann auf ein 3D-Immersionssystem umgeschaltet werden kann.

## Syntax

```js-nolint
makeXRCompatible()
```

### Parameter

Es gibt keine Parameter.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfolgreich aufgelöst wird, sobald der WebGL-Kontext bereit ist, um [WebXR](/de/docs/Web/API/WebXR_Device_API) Inhalte zu rendern.

### Ausnahmen

Diese Methode wirft keine traditionellen Ausnahmen; stattdessen wird das Promise mit einem der folgenden Fehler abgelehnt, der als Wert an den Ablehnungs-Handler übergeben wird:

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Umschalten des Kontexts auf einen WebXR-kompatiblen Kontext fehlschlägt.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der WebGL-Kontext verloren gegangen ist oder kein WebXR-Gerät verfügbar ist.

## Nutzungshinweise

Da `makeXRCompatible()` möglicherweise den zugrunde liegenden WebGL-Kontext mit einem neuen ersetzt, der die neue Rendering-Hardware verwendet, können die vorhandenen Inhalte des Kontexts verloren gehen und müssten neu gerendert werden. Aus diesem Grund werden die Ereignisse [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) und [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) verwendet: Das erste gibt Ihnen die Möglichkeit, alles zu verwerfen, was Sie nicht mehr benötigen, während das zweite Ihnen die Möglichkeit gibt, Ressourcen zu laden und die Szene im neuen Kontext vorzubereiten.

Obwohl diese Methode über das [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Interface verfügbar ist, wird sie tatsächlich von der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) definiert und nicht von WebGL.

## Beispiele

Dieses Beispiel demonstriert eine mögliche Logik in einem Spiel, das mit WebGL gestartet wird, um Menüs und andere Benutzeroberflächen anzuzeigen, und WebGL verwendet, um das Gameplay zu rendern. Es gibt allerdings einen Button im Hauptmenü, der eine Option bietet, das Spiel im WebXR-Modus zu starten.

### HTML

Der HTML-Code für die Buttons sieht folgendermaßen aus:

```html
<button class="green button" type="button">Start Game</button>
<button class="blue button use-webxr" type="button">
  Start Game (VR mode)
</button>
```

Der erste Button startet das Spiel und präsentiert es weiterhin wie gewohnt auf dem Bildschirm. Der zweite Button wird verwendet, um das Spiel im `immersive-vr` Modus zu starten. Beachten Sie die Einbeziehung der Klasse `use-webxr` auf dem VR-Modus-Button. Dies ist wichtig, worauf wir gleich noch näher eingehen werden.

### JavaScript

Der Code, der das Starten der Grafik, das Umschalten in den VR-Modus und so weiter behandelt, sieht folgendermaßen aus:

```js
const outputCanvas = document.querySelector(".output-canvas");
const gl = outputCanvas.getContext("webgl");
let xrSession = null;
let usingXR = false;
let currentScene = "scene1";
let glStartButton;
let xrStartButton;

loadSceneResources(currentScene);

glStartButton.addEventListener("click", handleStartButtonClick);
xrStartButton.addEventListener("click", handleStartButtonClick);

outputCanvas.addEventListener("webglcontextlost", (event) => {
  /* The context has been lost but can be restored */
  event.canceled = true;
});

/* When the GL context is reconnected, reload the resources for the
   current scene. */
outputCanvas.addEventListener("webglcontextrestored", (event) => {
  loadSceneResources(currentScene);
});

async function onStartedXRSession(xrSession) {
  try {
    await gl.makeXRCompatible();
  } catch (err) {
    switch (err) {
      case AbortError:
        showSimpleMessageBox(
          "Unable to transfer the game to your XR headset.",
          "Cancel",
        );
        break;
      case InvalidStateError:
        showSimpleMessageBox(
          "You don't appear to have a compatible XR headset available.",
          "Cancel",
        );
        break;
      default:
        handleFatalError(err);
        break;
    }
    xrSession.end();
  }
}

async function handleStartButtonClick(event) {
  if (event.target.classList.contains("use-webxr") && navigator.xr) {
    try {
      xrSession = await navigator.xr.requestSession("immersive-vr");
      usingXR = true;
    } catch (err) {
      xrSession = NULL;
      usingXR = false;
    }
  }
  startGame();
}

function startGame() {
  currentScene = "scene1";
  loadSceneResources(currentScene);

  /* and so on */
}
```

Das funktioniert, indem zwei Buttons vorhanden sind, von denen einer das Spiel normal startet und der andere das Spiel im VR-Modus startet. Beide verwenden die Funktion `handleStartButtonClick()` als ihren Ereignis-Handler. Die Funktion bestimmt, dass der angeklickte Button derjenige ist, der den `immersive-vr` Modus anfordert, indem überprüft wird, ob der Button die Klasse `use-webxr` hat. Wenn der vom Benutzer angeklickte Button diese Klasse hat (und wir bestätigt haben, dass WebXR verfügbar ist, indem wir sicherstellen, dass die [`navigator.xr`](/de/docs/Web/API/Navigator/xr) Eigenschaft existiert), verwenden wir [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) um eine neue WebXR-Sitzung anzufordern und setzen das `usingXR` Flag auf `true`.

Wenn der andere Button geklickt wurde, stellen wir sicher, dass `xrSession` `NULL` ist und löschen `usingXR` indem wir es auf `false` setzen.

Dann wird die `startGame()` Funktion aufgerufen, um den Beginn des Spiels auszulösen.

Es werden Handler für sowohl [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) als auch [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) bereitgestellt; im ersten Fall stellen wir sicher, dass wir wissen, dass der Zustand wiederhergestellt werden kann, während wir im zweiten Fall tatsächlich die Szene neu laden, um sicherzustellen, dass wir die korrekten Ressourcen für die aktuelle Bildschirm- oder Headset-Konfiguration haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
