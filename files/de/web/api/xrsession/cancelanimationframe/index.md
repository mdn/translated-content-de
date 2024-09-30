---
title: "XRSession: cancelAnimationFrame() Methode"
short-title: cancelAnimationFrame()
slug: Web/API/XRSession/cancelAnimationFrame
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`cancelAnimationFrame()`**-Methode des [`XRSession`](/de/docs/Web/API/XRSession)-Interfaces storniert einen Animationsrahmen, der zuvor durch einen Aufruf von [`requestAnimationFrame`](/de/docs/Web/API/XRSession/requestAnimationFrame) angefordert wurde.

## Syntax

```js-nolint
cancelAnimationFrame(handle)
```

### Parameter

- `handle`
  - : Der eindeutige Wert, der durch den Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegeben wurde, mit dem der Animations-Callback zuvor terminiert wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Nutzungshinweise

Diese Funktion hat keine Wirkung, wenn der angegebene `handle` nicht gefunden werden kann.

## Beispiele

Im folgenden Beispiel sehen wir Code, der eine WebXR-Sitzung startet, wenn immersiver VR-Modus unterstützt wird. Einmal gestartet, plant die Sitzung ihren ersten Rahmen zur Darstellung, indem sie [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufruft.

Die am Ende gezeigte `pauseXR()`-Funktion kann aufgerufen werden, um die WebVR-Sitzung im Wesentlichen auszusetzen, indem jeder ausstehende Animationsrahmen-Callback storniert wird. Da jeder Rahmen-Callback den nächsten plant, beendet das Entfernen des Callbacks das Aktualisieren der WebXR-Szene.

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
