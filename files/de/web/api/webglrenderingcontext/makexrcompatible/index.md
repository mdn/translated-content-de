---
title: "WebGLRenderingContext: Methode makeXRCompatible()"
short-title: makeXRCompatible()
slug: Web/API/WebGLRenderingContext/makeXRCompatible
l10n:
  sourceCommit: 9fac65196ac2b9a26afabbcb7f14fd58621916ae
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode
[`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)
**`makeXRCompatible()`** stellt sicher, dass der durch `WebGLRenderingContext`
beschriebene Rendering-Kontext bereit ist, die Szene für das immersive
[WebXR](/de/docs/Web/API/WebXR_Device_API)-Gerät zu rendern, auf dem sie
angezeigt wird. Falls erforderlich, kann die [WebGL](/de/docs/Web/API/WebGL_API)-Schicht
den Kontext so umkonfigurieren, dass er bereit ist, auf einem anderen Gerät zu rendern
als dem, für das er ursprünglich vorgesehen war.

Dies ist nützlich, wenn Sie eine Anwendung haben, die zunächst auf einem
standardmäßigen 2D-Display dargestellt werden kann, anschließend jedoch auf ein
3D-Immersionssystem umgestellt werden kann.

## Syntax

```js-nolint
makeXRCompatible()
```

### Parameter

Keine.

### Rückgabewert

Ein
[`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise),
der erfolgreich aufgelöst wird, sobald der WebGL-Kontext bereit ist, [WebXR](/de/docs/Web/API/WebXR_Device_API)-Inhalte
zu rendern.

### Ausnahmen

Diese Methode löst keine herkömmlichen Ausnahmen aus; stattdessen wird das Promise mit
einem der folgenden Fehler als Wert zurückgewiesen, der an den Rejection-Handler
übergeben wird:

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Umstellen des Kontexts auf den WebXR-kompatiblen Kontext fehlgeschlagen ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der WebGL-Kontext verloren gegangen ist oder kein WebXR-Gerät verfügbar ist.

## Hinweise zur Verwendung

Da `makeXRCompatible()` das Ersetzen des zugrunde liegenden WebGL-Kontexts durch einen
neuen Kontext umfassen kann, der die neue Rendering-Hardware verwendet, können die
vorhandenen Inhalte des Kontexts verloren gehen und müssten daher erneut gerendert
werden. Aus diesem Grund werden die Ereignisse
[`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
und
[`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
verwendet: Das erste bietet Ihnen die Möglichkeit, alles zu verwerfen, was Sie nicht
mehr benötigen, während das zweite Ihnen die Möglichkeit bietet, Ressourcen zu laden
und sich darauf vorzubereiten, die Szene in ihrem neuen Kontext zu rendern.

Obwohl diese Methode über die Schnittstelle
[`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) verfügbar ist,
wird sie tatsächlich von der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
und nicht von WebGL definiert.

## Beispiele

Dieses Beispiel demonstriert Codelogik, die Sie möglicherweise in einem Spiel finden,
das mit WebGL startet, um Menüs und andere UI darzustellen, und WebGL verwendet, um das
Gameplay zu rendern, dessen Hauptmenü jedoch eine Schaltfläche enthält, mit der das
Spiel im WebXR-Modus gestartet werden kann.

### HTML

Das HTML für die Schaltflächen sieht folgendermaßen aus:

```html
<button class="green button" type="button">Start Game</button>
<button class="blue button use-webxr" type="button">
  Start Game (VR mode)
</button>
```

Die erste Schaltfläche startet das Spiel und stellt es weiterhin wie üblich auf dem
Bildschirm dar. Die zweite Schaltfläche wird verwendet, um das Spiel im Modus
`immersive-vr` zu starten. Beachten Sie die Einbindung einer Klasse `use-webxr`
bei der Schaltfläche für den VR-Modus. Dies ist wichtig und wird im Folgenden näher
erläutert.

### JavaScript

Der Code, der das Initialisieren der Grafik, das Wechseln in den VR-Modus und Ähnliches
behandelt, sieht folgendermaßen aus:

```js
const outputCanvas = document.querySelector(".output-canvas");
const gl = outputCanvas.getContext("webgl");
let xrSession = null;
let usingXR = false;
let currentScene = "scene1";
const glStartButton = document.querySelector(".green.button");
const xrStartButton = document.querySelector(".use-webxr");

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

Dies funktioniert mit zwei Schaltflächen: Eine startet das Spiel normal, die andere
startet das Spiel im VR-Modus. Beide verwenden die Funktion
`handleStartButtonClick()` als Event-Handler. Die Funktion ermittelt, dass die
angeklickte Schaltfläche den Modus `immersive-vr` anfordert, indem sie prüft, ob
die Schaltfläche die Klasse `use-webxr` besitzt. Wenn die vom Benutzer angeklickte
Schaltfläche diese Klasse besitzt (und wir durch die Prüfung, ob die Eigenschaft
[`navigator.xr`](/de/docs/Web/API/Navigator/xr) vorhanden ist, bestätigt haben,
dass WebXR verfügbar ist), verwenden wir
[`requestSession()`](/de/docs/Web/API/XRSystem/requestSession), um eine neue
WebXR-Sitzung anzufordern, und setzen das Flag `usingXR` auf `true`.

Wenn die andere Schaltfläche angeklickt wurde, stellen wir sicher, dass `xrSession`
`NULL` ist, und setzen `usingXR` auf `false`.

Anschließend wird die Funktion `startGame()` aufgerufen, um den Beginn des
Gameplays auszulösen.

Handler werden sowohl für
[`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
als auch für
[`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
bereitgestellt; im ersten Fall stellen wir sicher, dass uns bewusst ist, dass der
Zustand wiederhergestellt werden kann, während wir im zweiten Fall die Szene tatsächlich
neu laden, um sicherzustellen, dass wir die richtigen Ressourcen für die aktuelle
Bildschirm- oder Headset-Konfiguration haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
