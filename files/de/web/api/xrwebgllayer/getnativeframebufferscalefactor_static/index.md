---
title: "XRWebGLLayer: getNativeFramebufferScaleFactor() statische Methode"
short-title: getNativeFramebufferScaleFactor()
slug: Web/API/XRWebGLLayer/getNativeFramebufferScaleFactor_static
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die statische Methode **`XRWebGLLayer.getNativeFramebufferScaleFactor()`** gibt einen Gleitkomma-Skalierungsfaktor zurück, mit dem man die angegebene [`XRSession`](/de/docs/Web/API/XRSession)-Auflösung multiplizieren kann, um die native Auflösung des Framebuffers des WebXR-Geräts zu erhalten.

Diese Information kann verwendet werden, um beim Erstellen eines neuen `XRWebGLLayer` den `framebufferScaleFactor` im `layerInit`-Konfigurationsobjekt zu konfigurieren, das beim Aufruf des `XRWebGLLayer()`-Konstruktors angegeben wird. Siehe die [Verwendungsnotizen](#verwendungsnotizen) und [Beispiele](#beispiele) für Details.

Wenn der Skalierungsfaktor 1.0 ist, dann sind die Frambuffer-Pixel und die nativen Anzeige-Pixel gleich groß. Wenn der Skalierungsfaktor größer als null ist, ist der Framebuffer kleiner als die nativen Abmessungen des Displays, was dazu führt, dass das Ausgabebild nach dem Rendering im Framebuffer für die Anzeige auf dem Bildschirm vergrößert wird. Wenn der Skalierungsfaktor kleiner als null ist, ist der Framebuffer _größer_ als die native Auflösung des Displays, was dazu führt, dass der Inhalt des Framebuffers für die Anzeige auf dem XR-Gerät verkleinert wird. Dies kann bei Anzeigegeräten passieren, die Superskalierung oder Antialiasing-Techniken verwenden, um die wahrgenommene Bildqualität zu verbessern.

## Syntax

```js-nolint
XRWebGLLayer.getNativeFramebufferScaleFactor(session)
```

### Parameter

- `session`
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), für die der native Framebuffer-Skalierungsfaktor zurückgegeben wird.

### Rückgabewert

Ein Gleitkommawert, der multipliziert mit den empfohlenen Framebuffer-Dimensionen der [`XRSession`](/de/docs/Web/API/XRSession) die native Framebuffer-Auflösung des XR-Geräts ergibt. Wenn die Sitzung beendet ist, gibt diese Funktion 0,0 zurück.

## Verwendungsnotizen

Der Skalierungsfaktor, der von dieser Funktion zurückgegeben wird, beträgt 1,0, wenn die native Auflösung des XR-Geräts und die Auflösung des XR-Geräts übereinstimmen. In jedem Fall führt das Multiplizieren der empfohlenen Auflösung, wie sie von der `XRSession` identifiziert wird, mit diesem Wert zur tatsächlichen nativen Auflösung der XR-Hardware.

Die empfohlene WebGL-Framebuffer-Auflösung ist die bestmögliche Schätzung der Auflösung, die notwendig ist, um alle benötigten [`XRView`](/de/docs/Web/API/XRView)s zu enthalten, während gleichzeitig typischen Anwendungen eine akzeptable Balance zwischen Bildqualität und Leistung geboten wird.

Betrachten Sie beispielsweise ein Gerät, das einen 2560x1440 Pixel großen Framebuffer verwendet (der verwendet wird, um zwei Ansichten, für das linke und rechte Auge, nebeneinander zu rendern, jede mit einer Auflösung von 1280x1440 Pixeln). Betrachten Sie einen Framebuffer, der in voller Größe wie folgt aussieht:

![Diagramm, das zeigt, wie ein Framebuffer zwischen den Sichtfeldern beider Augen aufgeteilt ist](twoviewsoneframebuffer.svg)

Wenn für dieses Gerät festgestellt wird, dass aufgrund von GPU-Beschränkungen der Browser die Bildqualität reduzieren muss, um die Leistung auf ein akzeptables Niveau zu verbessern, könnte er die Auflösung halbieren. In diesem Fall wird der Wert, der von `XRWebGLLayer.getNativeFramebufferScaleFactor()` zurückgegeben wird, 2,0 sein. Diese Methode der Aufteilung des Framebuffers zwischen den Ansichten wird im folgenden Diagramm gezeigt.

![Diagramm, das Framebuffer als auf halbe Auflösung skaliert zeigt](twoviewsoneframe-scaledby2.svg)

Nun sind Breite und Höhe des Framebuffers 50 % dessen, was sie vorher waren, was zu einer Gesamtgröße von 1280x720 Pixeln führt, wobei der Puffer für jedes Auge 640x720 Pixel groß ist. Jetzt können wir die Koordinaten jedes der Sichtfenster sehen, die diese beiden Ansichten darstellen:

![Framebuffer und Sichtfenster mit Koordinaten](twoviewsviewportcoords-scaledby2.svg)

Da jedes Auge die Hälfte des Framebuffers erhält, erhält das linke Auge einen 640x720 großen Teil des Puffers mit der `x`- und `y`-Koordinate des Viewports bei 0, die Breite bei 640 und die Höhe bei 720. Das rechte Auge erhält die andere Hälfte des Framebuffers, wobei die `x`-Koordinate seines Viewports bei 639 liegt.

Während [des Renderns eines Frames für diese Szene](/de/docs/Web/API/XRWebGLLayer#rendering_every_view_in_a_frame) holen wir den Viewport für die Ansicht und wenden ihn auf WebGL an, dann rendern wir die Szene. Dadurch wird sichergestellt, dass die von uns gerenderte Szene nicht nur dem zu vermittelnden Blickwinkel entspricht (der durch die Positions- und Ausrichtungsdaten in der Pose definiert ist), sondern dass die gerenderte Ausgabe auch innerhalb des richtigen Teils des Framebuffers für das Auge, das wir zeichnen, eingeschränkt wird, unabhängig von der durchgeführten Skalierung.

## Beispiele

In diesem Beispiel fordern wir einen Framebuffer in der nativen Auflösung des Geräts an, unabhängig von irgendwelchen Leistungsaspekten:

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

Dies beginnt mit dem Aufruf der [WebGL-Rendering-Kontext](/de/docs/Web/API/WebGLRenderingContext)-Funktion [`makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible). Wenn das zurückgegebene {{jsxref("Promise")}} aufgelöst wird, fahren wir mit dem Aufruf der statischen Funktion `getNativeFramebufferScaleFactor()` von `XRWebGLLayer` fort, um den Maßstab zu erhalten, der für die native Auflösung erforderlich ist, und übergeben diesen dann an den [`WebGLLayer()`](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer)-Konstruktor als Wert der `framebufferScaleFactor`-Eigenschaft in seinem `layerInit`-Konfigurationsobjekt.

Dies verschafft uns ein neues [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Objekt, das eine Rendering-Oberfläche darstellt, die wir für die [`XRSession`](/de/docs/Web/API/XRSession) verwenden können; wir setzen es als die Rendering-Oberfläche für `xrSession`, indem wir dessen Methode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) aufrufen und das neue `glLayer` mit der [`XRRenderState`](/de/docs/Web/API/XRRenderState)-Diktionärseigenschaft [`XRRenderState.baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) übergeben. Das Ergebnis ist ein Rendering-Kontext, der wie das folgende Diagramm aussieht:

![Framebuffer und Viewports mit Koordinaten](twoviewsviewportcoords.svg)

Jedes Mal, wenn die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)'s [`views`](/de/docs/Web/API/XRViewerPose/views) für das Rendern durchlaufen werden, erhält die Render-Schleife eine [`XRView`](/de/docs/Web/API/XRView) für das linke Auge, dessen obere linke Ecke sich bei (0, 0) befindet und dessen Breite und Höhe 1280x1440 Pixel beträgt. Das rechte Auge, das es erhält, hat seine obere linke Ecke bei 1280, 0 mit der gleichen Breite und Höhe: 1280x1440.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR-Geräte-API](/de/docs/Web/API/WebXR_Device_API)
- [WebXR Leistungs-Leitfaden](/de/docs/Web/API/WebXR_Device_API/Performance)
