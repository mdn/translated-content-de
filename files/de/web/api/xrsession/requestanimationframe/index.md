---
title: "XRSession: requestAnimationFrame() Methode"
short-title: requestAnimationFrame()
slug: Web/API/XRSession/requestAnimationFrame
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`requestAnimationFrame()`** von [`XRSession`](/de/docs/Web/API/XRSession), ähnlich wie die gleichnamige Methode von [`Window`](/de/docs/Web/API/Window), plant einen Rückruf, der ausgeführt wird, wenn der Browser das nächste Mal bereit ist, die virtuelle Umgebung der Sitzung auf das XR-Display zu zeichnen. Der angegebene Rückruf wird einmal vor dem nächsten Neuzeichnen ausgeführt; wenn Sie möchten, dass er für das folgende Neuzeichnen ausgeführt wird, müssen Sie `requestAnimationFrame()` erneut aufrufen. Dies kann aus dem Rückruf selbst heraus geschehen.

Der Rückruf nimmt zwei Parameter als Eingaben an: ein [`XRFrame`](/de/docs/Web/API/XRFrame), das den Zustand aller verfolgten Objekte der Sitzung beschreibt, und einen Zeitstempel, den Sie verwenden können, um notwendige Animationsaktualisierungen zu berechnen.

Sie können eine zuvor geplante Animation abbrechen, indem Sie [`cancelAnimationFrame()`](/de/docs/Web/API/XRSession/cancelAnimationFrame) aufrufen.

> [!NOTE]
> Trotz der offensichtlichen Ähnlichkeiten zwischen diesen Methoden und der globalen Funktion [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), die durch das `Window`-Interface bereitgestellt wird, _dürfen_ Sie diese nicht als austauschbar behandeln. Es gibt _keine_ Garantie, dass Letztere überhaupt funktioniert, während eine immersive XR-Sitzung im Gange ist.

## Syntax

```js-nolint
requestAnimationFrame(animationFrameCallback)
```

### Parameter

- `animationFrameCallback`

  - : Eine Funktion, die vor dem nächsten Neuzeichnen aufgerufen wird, um es Ihnen zu ermöglichen, die XR-Szene basierend auf verstrichener Zeit, Animation, Änderungen der Benutzereingaben usw. zu aktualisieren und darzustellen. Der Rückruf erhält als Eingaben zwei Parameter:

    - `time`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeitverschiebung angibt, zu der der aktualisierte Betrachterzustand vom WebXR-Gerät empfangen wurde.
    - `xrFrame`
      - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das den Zustand der von der Sitzung verfolgten Objekte beschreibt. Dies kann verwendet werden, um die Posen des Betrachters und der Szene selbst sowie andere Informationen, die zum Rendern eines Rahmens einer AR- oder VR-Szene erforderlich sind, zu erhalten.

### Rückgabewert

Ein ganzzahliger Wert, der als eindeutige, nicht-null ID oder Handle dient, welches Sie an [`cancelAnimationFrame()`](/de/docs/Web/API/XRSession/cancelAnimationFrame) übergeben können, wenn Sie die ausstehende Animationsrahmenanforderung entfernen müssen.

## Beispiele

Das folgende Beispiel fordert `XRSession` mit "Inline"-Modus an, sodass es in einem HTML-Element angezeigt werden kann (ohne ein separates AR- oder VR-Gerät zu benötigen).

> [!NOTE]
> Eine echte Anwendung sollte überprüfen, ob das Gerät und der User Agent die WebXR API überhaupt unterstützen und anschließend, dass sie beide den gewünschten Sitzungstyp über [`XRSystem.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) unterstützen.

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

Das folgende Beispiel wurde direkt aus dem Spezifikationsentwurf übernommen. Dieses Beispiel demonstriert ein Entwurfsmuster, das einen nahtlosen Übergang zwischen nicht-immersen Animationen, die über [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) erstellt wurden, und immersiven XR-Animationen sicherstellt.

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
