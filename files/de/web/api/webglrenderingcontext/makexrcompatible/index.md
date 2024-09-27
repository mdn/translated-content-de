---
title: "WebGLRenderingContext: makeXRCompatible() Methode"
short-title: makeXRCompatible()
slug: Web/API/WebGLRenderingContext/makeXRCompatible
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die Methode **`makeXRCompatible()`** von [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) stellt sicher, dass der durch den `WebGLRenderingContext` beschriebene Rendering-Kontext bereit ist, die Szene für das immersive [WebXR](/de/docs/Web/API/WebXR_Device_API) Gerät zu rendern, auf dem sie angezeigt werden soll. Falls erforderlich, kann die [WebGL](/de/docs/Web/API/WebGL_API) Ebene den Kontext neu konfigurieren, um bereit zu sein, auf einem anderen Gerät als ursprünglich vorgesehen zu rendern.

Dies ist nützlich, wenn Sie eine Anwendung haben, die mit einer herkömmlichen 2D-Anzeige gestartet werden kann, aber dann in ein 3D-Immersionssystem überführt werden kann.

## Syntax

```js-nolint
makeXRCompatible()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der erfolgreich aufgelöst wird, sobald der WebGL-Kontext bereit ist, um [WebXR](/de/docs/Web/API/WebXR_Device_API) Inhalte zu rendern.

### Ausnahmen

Diese Methode wirft keine herkömmlichen Ausnahmen; stattdessen wird das Promise mit einem der folgenden Fehler als der an den Ablehnungshandler übergebene Wert abgelehnt:

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Umschalten des Kontexts auf den WebXR-kompatiblen Kontext fehlgeschlagen ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der WebGL-Kontext verloren gegangen ist oder kein verfügbares WebXR-Gerät vorhanden ist.

## Verwendungshinweise

Da `makeXRCompatible()` möglicherweise den zugrunde liegenden WebGL-Kontext durch einen neuen ersetzt, der die neue Rendering-Hardware nutzt, können die bestehenden Inhalte des Kontextes verloren gehen und müssten deshalb neu gerendert werden. Daher werden die Ereignisse [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) und [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) verwendet: das erste gibt Ihnen die Gelegenheit, alles zu verwerfen, was Sie nicht mehr benötigen, während das zweite Ihnen die Gelegenheit gibt, Ressourcen zu laden und die Szene im neuen Kontext zu rendern.

Obwohl diese Methode über die [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Schnittstelle verfügbar ist, wird sie tatsächlich durch die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) und nicht durch WebGL definiert.

## Beispiele

Dieses Beispiel zeigt eine Logik, die Sie möglicherweise in einem Spiel finden, das mit WebGL gestartet wird, um Menüs und andere Benutzeroberflächen darzustellen und WebGL zur Darstellung des Gameplays verwendet, aber eine Schaltfläche im Hauptmenü hat, die die Option bietet, das Spiel im WebXR-Modus zu starten.

### HTML

Das HTML für die Schaltflächen sieht folgendermaßen aus:

```html
<button class="green button" type="button">Start Game</button>
<button class="blue button use-webxr" type="button">
  Start Game (VR mode)
</button>
```

Die erste Schaltfläche startet das Spiel und zeigt es weiterhin wie gewohnt auf dem Bildschirm an. Die zweite Schaltfläche wird verwendet, um das Spiel im `immersive-vr` Modus zu starten. Beachten Sie die Aufnahme einer `use-webxr` Klasse auf der VR-Modus-Schaltfläche. Dies ist wichtig, wie wir gleich sehen werden.

### JavaScript

Der Code, der das Starten der Grafiken, das Umschalten in den VR-Modus usw. behandelt, sieht folgendermaßen aus:

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

Dies funktioniert, indem zwei Schaltflächen vorhanden sind, von denen eine das Spiel normal startet und die andere das Spiel im VR-Modus startet. Beide nutzen die `handleStartButtonClick()` Funktion als ihre Ereignishandler. Die Funktion ermittelt, dass die geklickte Schaltfläche diejenige ist, die den `immersive-vr` Modus anfordert, indem sie überprüft, ob die Schaltfläche die `use-webxr` Klasse hat. Wenn die vom Benutzer angeklickte Schaltfläche diese Klasse hat (und wir bestätigt haben, dass WebXR verfügbar ist, indem wir sicherstellen, dass die [`navigator.xr`](/de/docs/Web/API/Navigator/xr) Eigenschaft existiert), verwenden wir [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession), um eine neue WebXR-Sitzung anzufordern und setzen die `usingXR` Flagge auf `true`.

Wenn die andere Schaltfläche geklickt wurde, stellen wir sicher, dass `xrSession` `NULL` ist und löschen `usingXR` auf `false`.

Dann wird die `startGame()` Funktion aufgerufen, um den Beginn des Spiels auszulösen.

Es werden Handler für sowohl [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) als auch [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) bereitgestellt; im ersten Fall stellen wir sicher, dass wir uns dessen bewusst sind, dass der Zustand wiederhergestellt werden kann, während wir im zweiten Fall die Szene tatsächlich neu laden, um sicherzustellen, dass wir die richtigen Ressourcen für die aktuelle Bildschirm- oder Headsetkonfiguration haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
