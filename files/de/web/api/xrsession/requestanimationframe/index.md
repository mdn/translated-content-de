---
title: "XRSession: requestAnimationFrame() Methode"
short-title: requestAnimationFrame()
slug: Web/API/XRSession/requestAnimationFrame
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`requestAnimationFrame()`** der [`XRSession`](/de/docs/Web/API/XRSession) ist ähnlich wie die
gleichnamige Methode des [`Window`](/de/docs/Web/API/Window) und plant einen Rückruf, der das
nächste Mal ausgeführt wird, wenn der Browser bereit ist, die virtuelle Umgebung der Sitzung auf das XR-Display zu rendern. Der angegebene Rückruf wird einmal vor dem nächsten Neuzeichnen ausgeführt; wenn Sie möchten, dass er beim nächsten Neuzeichnen erneut ausgeführt wird, müssen Sie `requestAnimationFrame()` erneut aufrufen. Dies kann innerhalb des Rückrufs selbst geschehen.

Der Rückruf nimmt zwei Parameter als Eingaben: ein [`XRFrame`](/de/docs/Web/API/XRFrame), das den Zustand aller verfolgten Objekte der Sitzung beschreibt, sowie einen Zeitstempel, den Sie zur Berechnung aller benötigten Animationsaktualisierungen verwenden können.

Sie können eine zuvor geplante Animation abbrechen, indem Sie [`cancelAnimationFrame()`](/de/docs/Web/API/XRSession/cancelAnimationFrame) aufrufen.

> [!NOTE]
> Trotz der offensichtlichen Ähnlichkeiten zwischen diesen Methoden und der
> globalen Funktion [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), die von der `Window`-Schnittstelle bereitgestellt wird, _dürfen_ Sie diese nicht als austauschbar behandeln. Es gibt _keine_ Garantie, dass letztere überhaupt funktioniert, während eine immersive XR-Sitzung aktiv ist.

## Syntax

```js-nolint
requestAnimationFrame(animationFrameCallback)
```

### Parameter

- `animationFrameCallback`

  - : Eine Funktion, die vor dem nächsten Neuzeichnen aufgerufen wird, um Ihnen die Möglichkeit zu geben, die XR-Szene basierend auf verstrichener Zeit, Animation, Benutzeränderungen und so weiter zu aktualisieren und zu rendern. Der Rückruf erhält zwei Parameter als Eingabe:

    - `time`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Zeitverschiebung angibt, zu der der aktualisierte Betrachterstatus vom WebXR-Gerät empfangen wurde.
    - `xrFrame`
      - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame) Objekt, das den Zustand der von der Sitzung verfolgten Objekte beschreibt. Dies kann verwendet werden, um die Posen des Betrachters und der Szene selbst sowie andere Informationen, die zum Rendern eines AR- oder VR-Szenenrahmens benötigt werden, zu erhalten.

### Rückgabewert

Ein ganzzahliger Wert, der als eindeutige, von null verschiedene ID oder Handle dient, die Sie an [`cancelAnimationFrame()`](/de/docs/Web/API/XRSession/cancelAnimationFrame) übergeben können, wenn Sie die ausstehende Animationsframe-Anfrage entfernen müssen.

## Beispiele

Das folgende Beispiel fordert `XRSession` im "inline"-Modus an, damit es in einem HTML-Element angezeigt werden kann (ohne dass ein separates AR- oder VR-Gerät benötigt wird).

> [!NOTE]
> Eine echte Anwendung sollte überprüfen, dass das Gerät und der Benutzeragent die WebXR-API überhaupt unterstützen und dann, dass beide den gewünschten Sitzungstyp über [`XRSystem.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) unterstützen.

```js
// Obtain XR object
const XR = navigator.xr;

// Request a new XRSession
XR.requestSession("inline").then((xrSession) => {
  xrSession.requestAnimationFrame((time, xrFrame) => {
    const viewer = xrFrame.getViewerPose(xrReferenceSpace);

    gl.bindFramebuffer(xrWebGLLayer.framebuffer);
    for (const xrView of viewer.views) {
      const xrViewport = xrWebGLLayer.getViewport(xrView);
      gl.viewport(
        xrViewport.x,
        xrViewport.y,
        xrViewport.width,
        xrViewport.height,
      );

      // WebGL draw calls will now be rendered into the appropriate viewport.
    }
  });
});
```

Das folgende Beispiel wurde direkt aus dem Spezifikationsentwurf entnommen. Dieses Beispiel demonstriert ein Designmuster, das nahtlose Übergänge zwischen nicht-immersiven Animationen, die über [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) erstellt wurden, und immersiven XR-Animationen sicherstellt.

```js
let xrSession = null;

function onWindowAnimationFrame(time) {
  window.requestAnimationFrame(onWindowAnimationFrame);

  // This may be called while an immersive session is running on some devices,
  // such as a desktop with a tethered headset. To prevent two loops from
  // rendering in parallel, skip drawing in this one until the session ends.
  if (!xrSession) {
    renderFrame(time, null);
  }
}

// The window animation loop can be started immediately upon the page loading.
window.requestAnimationFrame(onWindowAnimationFrame);

function onXRAnimationFrame(time, xrFrame) {
  xrSession.requestAnimationFrame(onXRAnimationFrame);
  renderFrame(time, xrFrame);
}

function renderFrame(time, xrFrame) {
  // Shared rendering logic.
}

// Assumed to be called by a user gesture event elsewhere in code.
function startXRSession() {
  navigator.xr.requestSession("immersive-vr").then((session) => {
    xrSession = session;
    xrSession.addEventListener("end", onXRSessionEnded);
    // Do necessary session setup here.
    // Begin the session's animation loop.
    xrSession.requestAnimationFrame(onXRAnimationFrame);
  });
}

function onXRSessionEnded() {
  xrSession = null;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`XRSession.cancelAnimationFrame()`](/de/docs/Web/API/XRSession/cancelAnimationFrame)
