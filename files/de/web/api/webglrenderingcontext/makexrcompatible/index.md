---
title: "WebGLRenderingContext: makeXRCompatible()-Methode"
short-title: makeXRCompatible()
slug: Web/API/WebGLRenderingContext/makeXRCompatible
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die Methode **`makeXRCompatible()`** des {{domxref("WebGLRenderingContext")}} stellt sicher, dass der Darstellungs-Kontext, der durch den `WebGLRenderingContext` beschrieben wird, bereit ist, die Szene für das immersive [WebXR](/de/docs/Web/API/WebXR_Device_API)-Gerät darzustellen, auf dem sie angezeigt wird. Falls notwendig, kann die [WebGL](/de/docs/Web/API/WebGL_API)-Ebene den Kontext so umkonfigurieren, dass er bereit ist, auf ein anderes Gerät zu rendern als ursprünglich vorgesehen.

Dies ist nützlich, wenn Sie eine Anwendung haben, die zunächst auf einem Standard-2D-Display dargestellt wird, aber dann zu einem 3D-Immersionssystem wechseln kann.

## Syntax

```js-nolint
makeXRCompatible()
```

### Parameter

Keine.

### Rückgabewert

Ein
[`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfolgreich aufgelöst wird, sobald der WebGL-Kontext bereit ist, um [WebXR](/de/docs/Web/API/WebXR_Device_API)-Inhalte zu rendern.

### Ausnahmen

Diese Methode wirft keine herkömmlichen Ausnahmen; stattdessen wird das Promise mit einem der folgenden Fehler abgelehnt, der an den Ablehnungs-Handler übergeben wird:

- `AbortError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn der Wechsel zu einem WebXR-kompatiblen Kontext fehlgeschlagen ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn der WebGL-Kontext verloren gegangen ist oder kein verfügbares WebXR-Gerät vorhanden ist.

## Nutzungshinweise

Da `makeXRCompatible()` den Austausch des zugrunde liegenden WebGL-Kontextes gegen einen neuen erfordern kann, der die neue Rendering-Hardware verwendet, können die vorhandenen Inhalte des Kontextes verloren gehen und müssen daher neu gerendert werden. Deshalb werden die Ereignisse [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) und [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) genutzt: Das erste bietet Ihnen die Möglichkeit, alles zu verwerfen, was Sie nicht mehr benötigen, während das zweite Ihnen die Möglichkeit gibt, Ressourcen zu laden und die Szene im neuen Kontext vorzubereiten.

Obwohl diese Methode über das {{domxref("WebGLRenderingContext")}}-Interface verfügbar ist, wird sie eigentlich von der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) definiert und nicht von WebGL.

## Beispiele

Dieses Beispiel demonstriert die Logik, die man in einem Spiel finden könnte, das mit WebGL startet, um Menüs und andere Benutzeroberflächen anzuzeigen, und WebGL verwendet, um das Gameplay darzustellen. Es hat einen Button im Hauptmenü, der eine Option bietet, das Spiel im WebXR-Modus zu starten.

### HTML

Das HTML für die Buttons sieht so aus:

```html
<button class="green button" type="button">Spiel starten</button>
<button class="blue button use-webxr" type="button">
  Spiel starten (VR-Modus)
</button>
```

Der erste Button startet das Spiel und präsentiert es weiterhin normal auf dem Bildschirm. Der zweite Button wird verwendet, um das Spiel im `immersive-vr`-Modus zu starten. Beachten Sie die Verwendung einer `use-webxr`-Klasse auf dem VR-Modus-Button. Dies ist wichtig, was wir gleich näher erläutern werden.

### JavaScript

Der Code, der das Starten der Grafiken, das Umschalten in den VR-Modus und so weiter handhabt, sieht so aus:

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
  /* Der Kontext ist verloren gegangen, kann aber wiederhergestellt werden */
  event.canceled = true;
});

/* Wenn der GL-Kontext wiederhergestellt wird, laden Sie die Ressourcen für die
   aktuelle Szene neu. */
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
          "Das Spiel kann nicht auf Ihr XR-Headset übertragen werden.",
          "Abbrechen",
        );
        break;
      case InvalidStateError:
        showSimpleMessageBox(
          "Es scheint, dass kein kompatibles XR-Headset vorhanden ist.",
          "Abbrechen",
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

  /* und so weiter */
}
```

Dies funktioniert, indem zwei Buttons bereitgestellt werden: Einer, der das Spiel normal startet, und ein anderer, der das Spiel im VR-Modus startet. Beide verwenden die `handleStartButtonClick()`-Funktion als ihren Ereignis-Handler. Die Funktion ermittelt, dass der angeklickte Button derjenige war, der den `immersive-vr`-Modus anfordert, indem sie überprüft, ob der Button die `use-webxr`-Klasse hat. Wenn der vom Benutzer angeklickte Button diese Klasse hat (und wir bestätigt haben, dass WebXR verfügbar ist, indem wir sicherstellen, dass die {{domxref("navigator.xr")}}-Eigenschaft existiert), verwenden wir {{domxref("XRSystem.requestSession", "requestSession()")}}, um eine neue WebXR-Sitzung anzufordern und das `usingXR`-Flag auf `true` zu setzen.

Wurde der andere Button angeklickt, stellen wir sicher, dass `xrSession` `NULL` ist und setzen `usingXR` auf `false` zurück.

Dann wird die `startGame()`-Funktion aufgerufen, um den Start des Gameplays einzuleiten.

Handler werden sowohl für das [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)- als auch das [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)-Ereignis bereitgestellt; im ersten Fall stellen wir sicher, dass wir wissen, dass der Zustand wiederhergestellt werden kann, während wir im letzteren tatsächlich die Szene neu laden, um sicherzustellen, dass wir die richtigen Ressourcen für die aktuelle Bildschirm- oder Headset-Konfiguration haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
