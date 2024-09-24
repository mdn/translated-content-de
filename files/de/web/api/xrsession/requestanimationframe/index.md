---
title: "XRSession: requestAnimationFrame()-Methode"
short-title: requestAnimationFrame()
slug: Web/API/XRSession/requestAnimationFrame
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`requestAnimationFrame()`** von {{domxref("XRSession")}}, ähnlich der
gleichnamigen Methode von {{domxref("Window")}}, plant einen Rückruf, der das nächste Mal
ausgeführt wird, wenn der Browser bereit ist, die virtuelle Umgebung der Sitzung auf
dem XR-Display darzustellen. Der angegebene Rückruf wird einmal vor der nächsten
Neudarstellung ausgeführt; wenn Sie möchten, dass er bei der folgenden
Neudarstellung erneut ausgeführt wird, müssen Sie `requestAnimationFrame()` erneut
aufrufen. Dies kann innerhalb des Rückrufs selbst geschehen.

Der Rückruf nimmt zwei Parameter als Eingaben: ein {{DOMxRef("XRFrame")}}, das den
Zustand aller verfolgten Objekte für die Sitzung beschreibt, und einen Zeitstempel, den
Sie verwenden können, um alle erforderlichen Animationsaktualisierungen zu berechnen.

Sie können eine zuvor geplante Animation abbrechen, indem Sie {{DOMxRef("XRSession.cancelAnimationFrame", "cancelAnimationFrame()")}} aufrufen.

> [!NOTE]
> Trotz der offensichtlichen Ähnlichkeiten zwischen diesen Methoden und der
> globalen {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}-Funktion,
> die von der `Window`-Schnittstelle bereitgestellt wird, dürfen Sie diese nicht
> als austauschbar betrachten. Es gibt keine Garantie, dass letztere überhaupt funktioniert,
> während eine immersive XR-Sitzung im Gange ist.

## Syntax

```js-nolint
requestAnimationFrame(animationFrameCallback)
```

### Parameter

- `animationFrameCallback`

  - : Eine Funktion, die vor der nächsten Neudarstellung aufgerufen wird, um Ihnen die
    Möglichkeit zu geben, die XR-Szene basierend auf verstrichener Zeit, Animation,
    Änderungen durch Benutzereingaben usw. zu aktualisieren und darzustellen. Der Rückruf
    erhält als Eingabe zwei Parameter:

    - `time`
      - : Ein {{domxref("DOMHighResTimeStamp")}}, das den Zeitversatz angibt, zu dem
        der aktualisierte Betrachterzustand vom WebXR-Gerät empfangen wurde.
    - `xrFrame`
      - : Ein {{domxref("XRFrame")}}-Objekt, das den Zustand der von der Sitzung verfolgten
        Objekte beschreibt. Dies kann verwendet werden, um die Posen des Betrachters und der
        Szene selbst sowie andere Informationen zu ermitteln, die erforderlich sind, um ein
        Bild einer AR- oder VR-Szene zu rendern.

### Rückgabewert

Ein ganzzahliger Wert, der als eindeutige, nicht-null-Nummer oder Handle dient, den Sie
an {{domxref("XRSession.cancelAnimationFrame", "cancelAnimationFrame()")}} übergeben können,
falls Sie die anstehende Animationsrahmenanforderung entfernen müssen.

## Beispiele

Im folgenden Beispiel wird `XRSession` im "inline"-Modus angefordert, damit es in einem
HTML-Element angezeigt werden kann (ohne ein separates AR- oder VR-Gerät zu benötigen).

> [!NOTE]
> Eine reale Anwendung sollte überprüfen, ob das Gerät und der
> User-Agent die WebXR-API überhaupt unterstützen und dann, ob beide den gewünschten
> Sitzungstyp über {{DOMxRef("XRSystem.isSessionSupported()")}} unterstützen.

```js
// XR-Objekt erhalten
const XR = navigator.xr;

// Eine neue XRSession anfordern
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

      // WebGL-Zeichenaufrufe werden jetzt in das entsprechende Viewport gerendert.
    }
  });
});
```

Das folgende Beispiel wurde direkt aus dem Entwurf der Spezifikation übernommen. Dieses
Beispiel zeigt ein Designmuster, das nahtlose Übergänge zwischen nicht-immersiven
Animationen, die über {{DOMxRef("Window.requestAnimationFrame")}} erstellt wurden,
und immersiven XR-Animationen sicherstellt.

```js
let xrSession = null;

function onWindowAnimationFrame(time) {
  window.requestAnimationFrame(onWindowAnimationFrame);

  // Dies kann aufgerufen werden, während eine immersive Sitzung auf einigen Geräten
  // läuft, wie z.B. einem Desktop mit einem verbundenen Headset. Um zu verhindern,
  // dass zwei Schleifen parallel rendern, überspringen Sie das Zeichnen in dieser,
  // bis die Sitzung endet.
  if (!xrSession) {
    renderFrame(time, null);
  }
}

// Die Fensteranimationsschleife kann sofort beim Laden der Seite gestartet werden.
window.requestAnimationFrame(onWindowAnimationFrame);

function onXRAnimationFrame(time, xrFrame) {
  xrSession.requestAnimationFrame(onXRAnimationFrame);
  renderFrame(time, xrFrame);
}

function renderFrame(time, xrFrame) {
  // Gemeinsame Rendering-Logik.
}

// Angenommen, dies wird von einem Benutzerinteraktionsereignis an anderer Stelle im Code aufgerufen.
function startXRSession() {
  navigator.xr.requestSession("immersive-vr").then((session) => {
    xrSession = session;
    xrSession.addEventListener("end", onXRSessionEnded);
    // Notwendige Sitzungseinrichtung hier durchführen.
    // Die Animationsschleife der Sitzung beginnen.
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

- {{DOMxRef("Window.requestAnimationFrame()")}}
- {{domxref("XRSession.cancelAnimationFrame()")}}
