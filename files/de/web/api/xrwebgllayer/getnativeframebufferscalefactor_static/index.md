---
title: "XRWebGLLayer: getNativeFramebufferScaleFactor() statische Methode"
short-title: getNativeFramebufferScaleFactor()
slug: Web/API/XRWebGLLayer/getNativeFramebufferScaleFactor_static
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die statische Methode **`XRWebGLLayer.getNativeFramebufferScaleFactor()`** gibt einen Gleitkomma-Skalierungsfaktor zurück, mit dem man die Auflösung der angegebenen [`XRSession`](/de/docs/Web/API/XRSession) multiplizieren kann, um die native Auflösung des Framebuffers des WebXR-Geräts zu erhalten.

Diese Information kann beim Erstellen eines neuen `XRWebGLLayer` verwendet werden, um den `framebufferScaleFactor` im `layerInit` Konfigurationsobjekt zu konfigurieren, das beim Aufrufen des `XRWebGLLayer()` Konstruktors angegeben wird. Siehe die [Verwendungsnotizen](#verwendungsnotizen) und [Beispiele](#beispiele) für Details.

Wenn der Skalierungsfaktor 1.0 beträgt, sind die Framebuffer-Pixel und die nativen Anzeigepixel gleich groß. Wenn der Skalierungsfaktor größer als null ist, ist der Framebuffer kleiner als die nativen Dimensionen des Displays, was dazu führt, dass die Ausgabe nach dem Rendern in den Framebuffer für die Anzeige auf dem Bildschirm hochskaliert wird. Wenn der Skalierungsfaktor kleiner als null ist, ist der Framebuffer _größer_ als die native Auflösung des Displays, was dazu führt, dass der Inhalt des Framebuffers zur Anzeige auf dem XR-Gerät verkleinert wird. Dies kann in Anzeigekonfigurationen geschehen, die Superscaling oder Antialiasing-Techniken verwenden, um die wahrgenommene Bildqualität zu verbessern.

## Syntax

```js-nolint
XRWebGLLayer.getNativeFramebufferScaleFactor(session)
```

### Parameter

- `session`
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), für die der native Skalierungsfaktor des Framebuffers zurückgegeben werden soll.

### Rückgabewert

Ein Gleitkommawert, der, wenn er mit den von der [`XRSession`](/de/docs/Web/API/XRSession) empfohlenen Framebuffer-Dimensionen multipliziert wird, die native Framebufferauflösung des XR-Geräts ergibt. Wenn die Sitzung beendet ist, gibt diese Funktion 0.0 zurück.

## Verwendungsnotizen

Der durch diese Funktion zurückgegebene Skalierungsfaktor beträgt 1.0, wenn die native Auflösung des XR-Geräts und die Auflösung des XR-Geräts übereinstimmen. In jedem Fall führt das Multiplizieren der empfohlenen Auflösung, wie sie von der `XRSession` identifiziert wird, mit diesem Wert zu der tatsächlichen nativen Auflösung der XR-Hardware.

Die empfohlene WebGL Framebuffer-Auflösung ist die bestmögliche Schätzung der Auflösung, die erforderlich ist, um alle vom Gerät benötigten [`XRView`](/de/docs/Web/API/XRView)s zu enthalten, während gleichzeitig typischen Anwendungen ein akzeptables Gleichgewicht zwischen Bildqualität und Leistung geboten wird.

Betrachten Sie beispielsweise ein Gerät, das einen 2560x1440 Pixel Framebuffer verwendet (der verwendet wird, um zwei Ansichten, für das linke und rechte Auge, nebeneinander mit jeweils einer Auflösung von 1280x1440 Pixel zu rendern). Betrachten Sie einen Framebuffer, der in voller Größe so aussieht:

![Diagramm, das zeigt, wie ein Framebuffer zwischen den Ansichten beider Augen aufgeteilt ist](twoviewsoneframebuffer.svg)

Wenn auf diesem Gerät festgestellt wird, dass aufgrund von GPU-Beschränkungen der Browser die Bildqualität zur Verbesserung der Leistung auf ein akzeptables Niveau reduzieren muss, könnte er sich dafür entscheiden, die Auflösung zu halbieren. In diesem Fall wird der durch `XRWebGLLayer.getNativeFramebufferScaleFactor()` zurückgegebene Wert 2.0 betragen. Diese Methode zur Aufteilung des Framebuffers zwischen Ansichten wird im folgenden Diagramm gezeigt.

![Diagramm, das zeigt, wie der Framebuffer auf halbe Auflösung skaliert wird](twoviewsoneframe-scaledby2.svg)

Nun sind die Breite und die Höhe des Framebuffers jeweils 50% dessen, was sie zuvor waren, was zu einer Gesamtgröße des Framebuffers von 1280 x 720 Pixel führt, wobei jede Hälfte des Puffers für jedes Auge 640x720 Pixel misst. Nun können wir die Koordinaten jedes der Ansichtsfenster sehen, die diese beiden Ansichten darstellen:

![Framebuffer und Ansichtsfenster mit Koordinaten](twoviewsviewportcoords-scaledby2.svg)

Da jedes Auge die Hälfte des Framebuffers erhält, bekommt das linke Auge einen 640x720 Bereich des Puffers mit den `x`- und `y`-Koordinaten des Ansichtsfensters bei 0, der Breite bei 640 und der Höhe auf 720 gesetzt. Das rechte Auge erhält die andere Hälfte des Framebuffers, mit `x`-Koordinate des Ansichtsfensters, die bei 639 beginnt.

Beim [Rendern eines Frames für diese Szene](/de/docs/Web/API/XRWebGLLayer#rendering_every_view_in_a_frame) erhalten wir das Ansichtsfenster für die Ansicht und wenden es auf WebGL an, bevor die Szene gerendert wird. Dies stellt sicher, dass die gerenderte Szene nicht nur dem benötigten Standpunkt entspricht (der durch die Positions- und Orientierungsdaten in der Pose definiert ist), sondern dass die gerenderte Ausgabe innerhalb des richtigen Bereichs des Framebuffers für das Auge liegt, das wir zeichnen, unabhängig von jeglicher Skalierung, die durchgeführt wird.

## Beispiele

In diesem Beispiel fordern wir einen Framebuffer in der nativen Auflösung des Geräts an, unabhängig von Leistungsaspekten:

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

Dies beginnt mit dem Aufruf der Funktion [`makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible) des [WebGL-Rendering-Kontextes](/de/docs/Web/API/WebGLRenderingContext). Wenn die zurückgegebene {{jsxref("promise")}} aufgelöst wird, verfahren wir weiter mit dem Aufruf der statischen Funktion `XRWebGLLayer`'s `getNativeFramebufferScaleFactor()`, um den Skalierungsfaktor zu erhalten, der erforderlich ist, um die native Auflösung zu erreichen, und übergeben diesen dann an den [`WebGLLayer()`](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer) Konstruktor als Wert der `framebufferScaleFactor` Eigenschaft im `layerInit` Konfigurationsobjekt.

Dadurch erhalten wir ein neues [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) Objekt, das eine Rendering-Oberfläche darstellt, die wir für die [`XRSession`](/de/docs/Web/API/XRSession) verwenden können; wir setzen es als Rendering-Oberfläche für `xrSession` durch den Aufruf der Methode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState), indem wir das neue `glLayer` unter Verwendung der [`XRRenderState`](/de/docs/Web/API/XRRenderState) Wörterbuchs [`XRRenderState.baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) Eigenschaft übergeben. Das Ergebnis ist ein Rendering-Kontext, der wie das untenstehende Diagramm aussieht:

![Framebuffer und Ansichtsfenster mit Koordinaten](twoviewsviewportcoords.svg)

Jedes Mal, wenn die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)'s [`views`](/de/docs/Web/API/XRViewerPose/views) für das Rendern durchlaufen werden, erhält die Render-Schleife eine [`XRView`](/de/docs/Web/API/XRView) für das linke Auge, das seinen oberen linken Punkt bei (0, 0) hat, mit einer Breite und Höhe von 1280x1440 Pixel. Das rechte Auge, das erhalten wird, hat seinen oberen linken Punkt bei 1280, 0 mit derselben Breite und Höhe: 1280x1440.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [WebXR Leistungsleitfaden](/de/docs/Web/API/WebXR_Device_API/Performance)
