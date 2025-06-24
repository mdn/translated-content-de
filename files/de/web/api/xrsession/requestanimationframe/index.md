---
title: "XRSession: requestAnimationFrame()-Methode"
short-title: requestAnimationFrame()
slug: Web/API/XRSession/requestAnimationFrame
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`requestAnimationFrame()`** von [`XRSession`](/de/docs/Web/API/XRSession) plant, ähnlich wie die gleichnamige Methode von [`Window`](/de/docs/Web/API/Window), einen Rückruf, der beim nächsten Mal ausgeführt wird, wenn der Browser bereit ist, die virtuelle Umgebung der Sitzung auf das XR-Display zu zeichnen. Der angegebene Rückruf wird einmal vor der nächsten Neuzeichnung ausgeführt; wenn Sie möchten, dass er für die folgende Neuzeichnung ausgeführt wird, müssen Sie `requestAnimationFrame()` erneut aufrufen. Dies kann innerhalb des Rückrufs selbst geschehen.

Der Rückruf nimmt zwei Parameter als Eingaben: ein [`XRFrame`](/de/docs/Web/API/XRFrame), das den Zustand aller verfolgten Objekte für die Sitzung beschreibt, und einen Zeitstempel, den Sie verwenden können, um alle erforderlichen Animationsaktualisierungen zu berechnen.

Sie können eine zuvor geplante Animation stornieren, indem Sie [`cancelAnimationFrame()`](/de/docs/Web/API/XRSession/cancelAnimationFrame) aufrufen.

> [!NOTE]
> Trotz der offensichtlichen Ähnlichkeiten zwischen diesen Methoden und der globalen [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Funktion, die von der `Window`-Schnittstelle bereitgestellt wird, _sollten Sie diese nicht_ als austauschbar behandeln. Es gibt _keine_ Garantie, dass die letztere Methode überhaupt funktioniert, während eine immersive XR-Sitzung im Gange ist.

## Syntax

```js-nolint
requestAnimationFrame(animationFrameCallback)
```

### Parameter

- `animationFrameCallback`
  - : Eine Funktion, die vor der nächsten Neuzeichnung aufgerufen wird, damit Sie die XR-Szene basierend auf der verstrichenen Zeit, Animationen, Benutzereingabenänderungen usw. aktualisieren und rendern können. Der Rückruf erhält zwei Parameter als Eingabe:
    - `time`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den zeitlichen Versatz angibt, zu dem der aktualisierte Zuschauerstatus vom WebXR-Gerät empfangen wurde.
    - `xrFrame`
      - : Ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das den Zustand der Objekte beschreibt, die von der Sitzung verfolgt werden. Dies kann verwendet werden, um die Positionen des Betrachters und der Szene selbst sowie andere Informationen zu erhalten, die für das Rendern eines Bildes einer AR- oder VR-Szene benötigt werden.

### Rückgabewert

Ein ganzzahliger Wert, der als eindeutige, von Null verschiedene ID oder Handler dient, den Sie an [`cancelAnimationFrame()`](/de/docs/Web/API/XRSession/cancelAnimationFrame) übergeben können, wenn Sie die ausstehende Anforderungs-Rahmen-Animation löschen müssen.

## Beispiele

Das folgende Beispiel fordert `XRSession` im "inline"-Modus an, damit es in einem HTML-Element angezeigt werden kann (ohne dass ein separates AR- oder VR-Gerät benötigt wird).

> [!NOTE]
> Eine echte Anwendung sollte überprüfen, ob das Gerät und der User Agent die WebXR-API überhaupt unterstützen und dann, dass beide den gewünschten Sitzungsmodus über [`XRSystem.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) unterstützen.

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

Das folgende Beispiel stammt direkt aus dem Entwurfsstandard. Dieses Beispiel zeigt ein Designmuster, das einen nahtlosen Übergang zwischen nicht-immersiven Animationen, die über [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) erstellt wurden, und immersiven XR-Animationen gewährleistet.

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
