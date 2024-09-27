---
title: "XRWebGLLayer: getNativeFramebufferScaleFactor() statische Methode"
short-title: getNativeFramebufferScaleFactor()
slug: Web/API/XRWebGLLayer/getNativeFramebufferScaleFactor_static
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die statische Methode **`XRWebGLLayer.getNativeFramebufferScaleFactor()`** gibt einen Gleitkomma-Skalierungsfaktor zurück, mit dem Sie die angegebene Auflösung der [`XRSession`](/de/docs/Web/API/XRSession) multiplizieren können, um die native Auflösung des Framebuffers des WebXR-Geräts zu erhalten.

Diese Information kann beim Erstellen einer neuen `XRWebGLLayer` verwendet werden, um den `framebufferScaleFactor` im `layerInit`-Konfigurationsobjekt zu konfigurieren, das beim Aufrufen des `XRWebGLLayer()`-Konstruktors angegeben wird. Weitere Details finden Sie in den [Anmerkungen zur Verwendung](#anmerkungen_zur_verwendung) und den [Beispielen](#beispiele).

Wenn der Skalierungsfaktor 1,0 beträgt, sind die Pixel des Framebuffers und die nativen Display-Pixel gleich groß. Ist der Skalierungsfaktor größer als null, ist der Framebuffer kleiner als die nativen Abmessungen des Displays, was dazu führt, dass die Ausgabe nach dem Rendern in den Framebuffer zur Anzeige auf dem Bildschirm hochskaliert wird. Ist der Skalierungsfaktor kleiner als null, ist der Framebuffer _größer_ als die native Auflösung des Displays, was dazu führt, dass die Inhalte des Framebuffers zur Anzeige auf dem XR-Gerät verkleinert werden. Dies kann in Display-Umgebungen vorkommen, die Super-Scaling- oder Anti-Aliasing-Techniken verwenden, um die wahrgenommene Bildqualität zu verbessern.

## Syntax

```js-nolint
XRWebGLLayer.getNativeFramebufferScaleFactor(session)
```

### Parameter

- `session`
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), für die der native Framebuffer-Skalierungsfaktor zurückgegeben werden soll.

### Rückgabewert

Ein Gleitkommawert, der - multipliziert mit den empfohlenen Framebuffer-Maßen der [`XRSession`](/de/docs/Web/API/XRSession) - zur nativen Framebuffer-Auflösung des XR-Geräts führt. Wenn die Sitzung beendet wurde, gibt diese Funktion 0,0 zurück.

## Anmerkungen zur Verwendung

Der von dieser Funktion zurückgegebene Skalierungsfaktor beträgt 1,0, wenn die native Auflösung des XR-Geräts und die Auflösung des XR-Geräts übereinstimmen. In jedem Fall führt die Multiplikation der empfohlenen Auflösung, wie sie von der `XRSession` identifiziert wurde, mit diesem Wert zur tatsächlichen nativen Auflösung der XR-Hardware.

Die empfohlene WebGL-Framebuffer-Auflösung ist die bestmögliche Schätzung der notwendigen Auflösung, um alle vom Gerät benötigten [`XRView`](/de/docs/Web/API/XRView)s zu enthalten und gleichzeitig typischen Anwendungen ein akzeptables Gleichgewicht zwischen Bildqualität und Leistung zu bieten.

Betrachten Sie beispielsweise ein Gerät, das einen 2560x1440 Pixel großen Framebuffer verwendet (der zum Rendern von zwei Ansichten, für das linke und rechte Auge, nebeneinander jeweils mit einer Auflösung von 1280x1440 Pixeln verwendet wird). Betrachten Sie einen Framebuffer, der in voller Größe so aussieht:

![Diagramm, das zeigt, wie ein Framebuffer zwischen den Ansichten der beiden Augen aufgeteilt ist](twoviewsoneframebuffer.svg)

Wenn bei diesem Gerät aufgrund von GPU-Beschränkungen festgestellt wird, dass der Browser die Bildqualität zur Verbesserung der Leistung auf ein akzeptables Niveau reduzieren muss, könnte er sich entscheiden, die Auflösung zu halbieren. In diesem Fall beträgt der von `XRWebGLLayer.getNativeFramebufferScaleFactor()` zurückgegebene Wert 2,0. Diese Methode der Aufteilung des Framebuffers zwischen Ansichten wird im folgenden Diagramm gezeigt.

![Diagramm, das den Framebuffer als auf halbe Auflösung skaliert zeigt](twoviewsoneframe-scaledby2.svg)

Jetzt sind Breite und Höhe des Framebuffers 50 % dessen, was sie vorher waren, was zu einer Gesamtgröße des Framebuffers von 1280 mal 720 Pixel führt, wobei jede Hälfte des Puffers für ein Auge 640x720 Pixel beträgt. Nun können wir die Koordinaten jeder der Viewports erkennen, die diese beiden Ansichten darstellen:

![Framebuffer und Viewports mit Koordinaten](twoviewsviewportcoords-scaledby2.svg)

Da jedes Auge die Hälfte des Framebuffers erhält, ergibt sich, dass das linke Auge einen 640x720 Abschnitt des Puffers mit den Viewport-Koordinaten `x` und `y` bei 0, der Breite bei 640 und der Höhe bei 720 erhält. Das rechte Auge erhält die andere Hälfte des Framebuffers, wobei dessen Viewport `x` bei 639 liegt.

Beim [Rendern eines Frames für diese Szene](/de/docs/Web/API/XRWebGLLayer#rendering_every_view_in_a_frame) erhalten wir den Viewport für die Ansicht und wenden ihn auf WebGL an, bevor wir die Szene rendern. Dies stellt sicher, dass die Szene, die wir rendern, nicht nur mit dem erforderlichen Standpunkt (der durch die Positions- und Orientierungsdaten im Pose definiert ist) übereinstimmt, sondern dass die gerenderte Ausgabe innerhalb des korrekten Abschnitts des Framebuffers für das Auge, das wir zeichnen, bleibt, unabhängig davon, welche Skalierung durchgeführt wird.

## Beispiele

In diesem Beispiel fordern wir einen Framebuffer in der nativen Auflösung des Geräts an, unabhängig von Leistungsüberlegungen:

```js
function requestNativeScaleWebGLLayer(gl, xrSession) {
  return gl.makeXRCompatible().then(() => {
    let scaleFactor = XRWebGLLayer.getNativeFramebufferScaleFactor(xrSession);
    let glLayer = new XRWebGLLayer(xrSession, gl, {
      framebufferScaleFactor: scaleFactor,
    });
    xrSession.updateRenderState({ baseLayer: glLayer });
  });
}
```

Dies beginnt mit dem Aufruf der [WebGL-Rendering-Kontext](/de/docs/Web/API/WebGLRenderingContext)-Funktion [`makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible). Wenn das zurückgegebene {{jsxref("promise")}} aufgelöst wird, fahren wir fort, indem wir die statische Funktion `XRWebGLLayer`'s `getNativeFramebufferScaleFactor()` aufrufen, um den Skalierungsfaktor zu erhalten, der benötigt wird, um die native Auflösung zu erreichen, und übergeben diese dann in den [`WebGLLayer()`](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer)-Konstruktor als Wert der `framebufferScaleFactor`-Eigenschaft im `layerInit`-Konfigurationsobjekt.

Das bringt uns ein neues [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Objekt, das eine Renderingoberfläche darstellt, die wir für die [`XRSession`](/de/docs/Web/API/XRSession) verwenden können; wir setzen sie als Renderingoberfläche für `xrSession`, indem wir die Methode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) aufrufen und das neue `glLayer` mit Hilfe der [`XRRenderState`](/de/docs/Web/API/XRRenderState)-Wörterbuchs [`XRRenderState.baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer)-Eigenschaft übergeben. Das Ergebnis ist ein Rendering-Kontext, der wie das untenstehende Diagramm aussieht:

![Framebuffer und Viewports mit Koordinaten](twoviewsviewportcoords.svg)

Jedes Mal, wenn die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)'s [`views`](/de/docs/Web/API/XRViewerPose/views) für das Rendern durchlaufen werden, erhält die Rendering-Schleife eine [`XRView`](/de/docs/Web/API/XRView) für das linke Auge, das seine obere linke Ecke bei (0, 0) hat mit einer Breite und Höhe von 1280x1440 Pixeln. Das rechte Auge, das es erhält, hat seine obere linke Ecke bei 1280, 0 mit der gleichen Breite und Höhe: 1280x1440.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [WebXR Leistungsleitfaden](/de/docs/Web/API/WebXR_Device_API/Performance)
