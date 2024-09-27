---
title: "XRSession: cancelAnimationFrame()-Methode"
short-title: cancelAnimationFrame()
slug: Web/API/XRSession/cancelAnimationFrame
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`cancelAnimationFrame()`**-Methode der [`XRSession`](/de/docs/Web/API/XRSession)-Schnittstelle storniert einen Animationsframe, der zuvor durch Aufrufen von [`requestAnimationFrame`](/de/docs/Web/API/XRSession/requestAnimationFrame) angefordert wurde.

## Syntax

```js-nolint
cancelAnimationFrame(handle)
```

### Parameter

- `handle`
  - : Der eindeutige Wert, der durch den Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegeben wurde, der zuvor den Animations-Callback geplant hat.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Verwendungshinweise

Diese Funktion hat keine Auswirkung, wenn der angegebene `handle` nicht gefunden werden kann.

## Beispiele

Im folgenden Beispiel sehen wir Code, der eine WebXR-Sitzung startet, falls der immersive VR-Modus unterstützt wird. Sobald gestartet, plant die Sitzung ihren ersten Frame zur Darstellung durch Aufrufen von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame).

Die am Ende gezeigte `pauseXR()`-Funktion kann aufgerufen werden, um die WebVR-Sitzung auszusetzen, im Wesentlichen durch Stornieren eines ausstehenden Animationsframe-Callbacks. Da jeder Frame-Callback den nächsten plant, beendet das Entfernen des Callbacks die Aktualisierung der WebXR-Szene.

```js
const XR = navigator.xr;

let requestHandle = null;
let xrSession = null;

if (XR) {
  XR.isSessionSupported("immersive-vr").then((isSupported) => {
    if (isSupported) {
      startXR();
    }
  });
}

function frameCallback(time, xrFrame) {
  xrSession.requestAnimationFrame(frameCallback);

  // Update and render the frame
}

async function startXR() {
  xrSession = XR.requestSession("immersive-vr");

  if (xrSession) {
    stopButton.onclick = stopXR;
    requestHandle = xrSession.requestAnimationFrame(frameCallback);
  }
}

function pauseXR() {
  if (xrSession && requestHandle) {
    xrSession.cancelAnimationFrame(requestHandle);
    requestHandle = null;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.cancelAnimationFrame`](/de/docs/Web/API/Window/cancelAnimationFrame)
- [`XRSession.requestAnimationFrame`](/de/docs/Web/API/XRSession/requestAnimationFrame)
