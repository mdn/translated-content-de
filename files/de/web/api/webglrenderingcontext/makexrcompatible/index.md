---
title: "WebGLRenderingContext: makeXRCompatible() Methode"
short-title: makeXRCompatible()
slug: Web/API/WebGLRenderingContext/makeXRCompatible
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`makeXRCompatible()`** des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) stellt sicher, dass der vom `WebGLRenderingContext` beschriebene Rendering-Kontext bereit ist, die Szene für das immersive [WebXR](/de/docs/Web/API/WebXR_Device_API)-Gerät zu rendern, auf dem sie angezeigt werden soll. Gegebenenfalls kann die [WebGL](/de/docs/Web/API/WebGL_API)-Ebene den Kontext neu konfigurieren, um auf einem anderen Gerät zu rendern, als ursprünglich vorgesehen war.

Dies ist nützlich, wenn Sie eine Anwendung haben, die zunächst auf einem Standard-2D-Display präsentiert werden kann, aber dann auf ein 3D-Immersionssystem umgeschaltet werden kann.

## Syntax

```js-nolint
makeXRCompatible()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der erfolgreich aufgelöst wird, sobald der WebGL-Kontext bereit ist, um [WebXR](/de/docs/Web/API/WebXR_Device_API)-Inhalte zu rendern.

### Ausnahmen

Diese Methode wirft keine traditionellen Ausnahmen; stattdessen wird das Promise mit einem der folgenden Fehler als Wert, der in den Ablehnungs-Handler übergeben wird, abgelehnt:

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Umschalten des Kontexts auf den WebXR-kompatiblen Kontext fehlgeschlagen ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der WebGL-Kontext verloren gegangen ist oder kein verfügbares WebXR-Gerät vorhanden ist.

## Nutzungshinweise

Da `makeXRCompatible()` möglicherweise den zugrunde liegenden WebGL-Kontext durch einen neuen ersetzt, der die neue Rendering-Hardware verwendet, können die vorhandenen Inhalte des Kontexts verloren gehen und müssten daher neu gerendert werden. Aus diesem Grund werden die Ereignisse [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) und [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) verwendet: das erste gibt Ihnen die Möglichkeit, alles zu verwerfen, was Sie nicht mehr benötigen, während das zweite Ihnen die Möglichkeit gibt, Ressourcen zu laden und die Szene im neuen Kontext vorzubereiten und zu rendern.

Obwohl diese Methode über das [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Interface verfügbar ist, wird sie tatsächlich von der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) und nicht von WebGL definiert.

## Beispiele

Dieses Beispiel zeigt eine Code-Logik, die Sie in einem Spiel finden könnten, das mit WebGL startet, um Menüs und andere Benutzeroberflächen anzuzeigen, und WebGL verwendet, um das Gameplay zu rendern. Es gibt jedoch einen Knopf im Hauptmenü, der eine Option bietet, das Spiel im WebXR-Modus zu starten.

### HTML

Die HTML-Struktur für die Schaltflächen sieht wie folgt aus:

```html
<button class="green button" type="button">Start Game</button>
<button class="blue button use-webxr" type="button">
  Start Game (VR mode)
</button>
```

Die erste Schaltfläche startet das Spiel und präsentiert es wie gewohnt auf dem Bildschirm. Die zweite Schaltfläche wird verwendet, um das Spiel im `immersive-vr`-Modus zu starten. Beachten Sie die Einbeziehung einer `use-webxr`-Klasse auf der VR-Modus-Schaltfläche. Dies ist wichtig, worauf wir gleich eingehen werden.

### JavaScript

Der Code, der das Starten der Grafik, das Umschalten in den VR-Modus usw. behandelt, sieht folgendermaßen aus:

```js
const outputCanvas = document.querySelector(".output-canvas");
const gl = outputCanvas.getContext("webgl");
let xrSession = null;
let usingXR = false;
let currentScene = "scene1";
let glStartButton;
let xrStartButton;

window.addEventListener("load", (event) => {
  loadSceneResources(currentScene);

  glStartButton.addEventListener("click", handleStartButtonClick);
  xrStartButton.addEventListener("click", handleStartButtonClick);
});

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

Dies funktioniert, indem zwei Schaltflächen verwendet werden: eine, die das Spiel normal startet, und die andere, die das Spiel im VR-Modus startet. Beide verwenden die Funktion `handleStartButtonClick()` als ihren Event-Handler. Die Funktion ermittelt, dass die Schaltfläche, die angeklickt wurde, diejenige ist, die den `immersive-vr`-Modus anfordert, indem überprüft wird, ob die Schaltfläche die Klasse `use-webxr` hat. Wenn die vom Benutzer angeklickte Schaltfläche diese Klasse hat (und wir bestätigt haben, dass WebXR verfügbar ist, indem wir sicherstellen, dass die [`navigator.xr`](/de/docs/Web/API/Navigator/xr)-Eigenschaft existiert), verwenden wir [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession), um eine neue WebXR-Sitzung zu beantragen und setzen das `usingXR`-Flag auf `true`.

Wenn die andere Schaltfläche angeklickt wurde, stellen wir sicher, dass `xrSession` `NULL` ist und setzen `usingXR` auf `false`.

Dann wird die `startGame()`-Funktion aufgerufen, um den Beginn des Gameplays auszulösen.

Es werden Handler sowohl für [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) als auch für [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) bereitgestellt; im ersten Fall sorgen wir dafür, dass wir wissen, dass der Zustand wiederhergestellt werden kann, während wir im zweiten Fall tatsächlich die Szene neu laden, um sicherzustellen, dass wir die richtigen Ressourcen für die aktuelle Bildschirm- oder Headset-Konfiguration haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
