---
title: "XRSession: cancelAnimationFrame() Methode"
short-title: cancelAnimationFrame()
slug: Web/API/XRSession/cancelAnimationFrame
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`cancelAnimationFrame()`**-Methode der
{{domxref("XRSession")}}-Schnittstelle storniert einen Animationsframe, der zuvor
durch Aufruf von {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame")}} angefordert wurde.

## Syntax

```js-nolint
cancelAnimationFrame(handle)
```

### Parameter

- `handle`
  - : Der eindeutige Wert, der durch den Aufruf von
    {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} zurückgegeben wurde und
    zuvor den Animations-Callback geplant hat.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Hinweise zur Verwendung

Diese Funktion hat keine Wirkung, wenn der angegebene `handle` nicht gefunden werden kann.

## Beispiele

Im folgenden Beispiel sehen wir Code, der eine WebXR-Session startet, wenn der immersive VR-Modus
unterstützt wird. Nach dem Start plant die Session ihren ersten Frame, indem sie
{{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} aufruft.

Die am Ende gezeigte Funktion `pauseXR()` kann aufgerufen werden, um die
WebVR-Session im Wesentlichen zu unterbrechen, indem alle ausstehenden Animations-Frame-Callbacks storniert werden. Da jeder
Frame-Callback den nächsten plant, beendet das Entfernen des Callbacks das Aktualisieren der
WebXR-Szene.

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

- {{DOMxRef("Window.cancelAnimationFrame")}}
- {{domxref("XRSession.requestAnimationFrame")}}
