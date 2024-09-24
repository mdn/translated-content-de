---
title: "XRWebGLLayer: getNativeFramebufferScaleFactor() statische Methode"
short-title: getNativeFramebufferScaleFactor()
slug: Web/API/XRWebGLLayer/getNativeFramebufferScaleFactor_static
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die statische Methode **`XRWebGLLayer.getNativeFramebufferScaleFactor()`** gibt einen Gleitkomma-Skalierungsfaktor zurück, mit dem man die angegebene Auflösung der {{domxref("XRSession")}} multiplizieren kann, um die native Auflösung des Framebuffers des WebXR-Geräts zu erhalten.

Diese Information kann beim Erstellen eines neuen `XRWebGLLayer` verwendet werden, um den `framebufferScaleFactor` im `layerInit` Konfigurationsobjekt festzulegen, das beim Aufruf des `XRWebGLLayer()` Konstruktors angegeben wird. Siehe die [Hinweise zur Nutzung](#hinweise_zur_nutzung) und [Beispiele](#beispiele) für Details.

Wenn der Skalierungsfaktor 1,0 beträgt, sind die Framebuffer-Pixel und die nativen Display-Pixel gleich groß. Falls der Skalierungsfaktor größer als null ist, ist der Framebuffer kleiner als die nativen Dimensionen des Displays, was dazu führt, dass die Ausgabe nach dem Rendern in den Framebuffer für die Anzeige auf dem Bildschirm hochskaliert wird. Wenn der Skalierungsfaktor kleiner als null ist, ist der Framebuffer _größer_ als die native Auflösung des Displays, wodurch der Inhalt des Framebuffers für die Anzeige auf dem XR-Gerät verkleinert wird. Dies kann in Anzeigekonfigurationen auftreten, die Superscaling- oder Antialiasing-Techniken verwenden, um die wahrgenommene Bildqualität zu verbessern.

## Syntax

```js-nolint
XRWebGLLayer.getNativeFramebufferScaleFactor(session)
```

### Parameter

- `session`
  - : Die {{domxref("XRSession")}}, für die der native Framebuffer-Skalierungsfaktor zurückgegeben werden soll.

### Rückgabewert

Ein Gleitkommawert, der, wenn er mit den empfohlenen Framebuffer-Dimensionen der {{domxref("XRSession")}} multipliziert wird, zur nativen Framebuffer-Auflösung des XR-Geräts führt. Wenn die Sitzung beendet ist, gibt diese Funktion 0,0 zurück.

## Hinweise zur Nutzung

Der von dieser Funktion zurückgegebene Skalierungsfaktor beträgt 1,0, wenn die native Auflösung des XR-Geräts und die Auflösung des Geräts übereinstimmen. In jedem Fall wird durch Multiplikation der von der `XRSession` identifizierten empfohlenen Auflösung mit diesem Wert die tatsächliche native Auflösung der XR-Hardware erreicht.

Die empfohlene WebGL-Framebuffer-Auflösung ist die bestmögliche Schätzung der benötigten Auflösung, um alle vom Gerät benötigten {{domxref("XRView")}}s aufzunehmen und gleichzeitig typischen Anwendungen ein akzeptables Gleichgewicht zwischen Bildqualität und Leistung zu bieten.

Beispielsweise nehmen wir ein Gerät an, das einen 2560x1440 Pixel Framebuffer verwendet (der zur Darstellung von zwei Ansichten, für das linke und rechte Auge, nebeneinander verwendet wird, jeweils mit einer Auflösung von 1280x1440 Pixeln). Ein Framebuffer, der in voller Größe so aussieht:

![Diagramm, das zeigt, wie ein Framebuffer zwischen den Blickpunkten zweier Augen aufgeteilt ist](twoviewsoneframebuffer.svg)

Wenn bei diesem Gerät festgestellt wird, dass aufgrund von GPU-Beschränkungen die Bildqualität reduziert werden muss, um die Leistung auf ein akzeptables Niveau zu steigern, könnte der Browser beschließen, die Auflösung zu halbieren. In diesem Fall beträgt der von `XRWebGLLayer.getNativeFramebufferScaleFactor()` zurückgegebene Wert 2,0. Diese Methode der Aufteilung des Framebuffers zwischen Ansichten wird im folgenden Diagramm gezeigt.

![Diagramm, das den Framebuffer als auf die halbe Auflösung skaliert zeigt](twoviewsoneframe-scaledby2.svg)

Jetzt sind die Breite und Höhe des Framebuffers 50 % von dem, was sie zuvor waren, was zu einer Gesamt-Framebuffer-Größe von 1280 x 720 Pixeln führt, wobei jede Hälfte des Puffers für die Augen 640x720 Pixel beträgt. Jetzt können wir die Koordinaten jedes der Viewports sehen, die diese beiden Ansichten repräsentieren:

![Framebuffer und Viewports mit Koordinaten](twoviewsviewportcoords-scaledby2.svg)

Da jedes Auge die Hälfte des Framebuffers erhält, ist das Ergebnis, dass das linke Auge einen 640x720 Abschnitt des Puffers mit den Koordinaten `x` und `y` bei 0, der Breite bei 640 und der Höhe bei 720 erhält. Das rechte Auge erhält die andere Hälfte des Framebuffers, wobei sein Viewport-`x` bei 639 gesetzt ist.

Beim [Rendern eines Frames für diese Szene](/de/docs/Web/API/XRWebGLLayer#rendering_every_view_in_a_frame) erhalten wir den Viewport für die Ansicht und wenden ihn auf WebGL an, bevor wir die Szene rendern. Dies stellt sicher, dass die gerenderte Szene nicht nur den erforderlichen Blickpunkt widerspiegelt (der durch die Positions- und Orientierungsdaten in der Pose definiert ist), sondern dass die gerenderte Ausgabe innerhalb des korrekten Abschnitts des Framebuffers für das Auge, das wir zeichnen, eingegrenzt wird, unabhängig von jeglichen Skalierungen, die durchgeführt werden.

## Beispiele

In diesem Beispiel fordern wir einen Framebuffer mit der nativen Auflösung des Geräts an, ungeachtet eventueller Leistungsbedenken:

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

Dies beginnt mit dem Aufruf der [WebGL-Rendering-Kontextfunktion](/de/docs/Web/API/WebGLRenderingContext) {{domxref("WebGLRenderingContext.makeXRCompatible", "makeXRCompatible()")}}. Wenn das zurückgegebene {{jsxref("promise")}} aufgelöst wird, setzen wir den Aufruf der statischen Funktion `XRWebGLLayer`'s `getNativeFramebufferScaleFactor()` fort, um den Skalierungsfaktor zur Erreichung der nativen Auflösung zu erhalten, und übergeben diesen dann dem {{domxref("XRWebGLLayer.XRWebGLLayer", "WebGLLayer()")}} Konstruktor als Wert der `framebufferScaleFactor` Eigenschaft im `layerInit` Konfigurationsobjekt.

Das bringt uns ein neues {{domxref("XRWebGLLayer")}} Objekt, das eine Rendering-Oberfläche darstellt, die wir für die {{domxref("XRSession")}} verwenden können; wir setzen es als die Rendering-Oberfläche für `xrSession` durch den Aufruf ihrer {{domxref("XRSession.updateRenderState", "updateRenderState()")}} Methode und übergeben den neuen `glLayer` unter Verwendung der {{domxref("XRRenderState")}} Wörterbuchs {{domxref("XRRenderState.baseLayer")}} Eigenschaft. Das Ergebnis ist ein Rendering-Kontext, der wie das untenstehende Diagramm aussieht:

![Framebuffer und Viewports mit Koordinaten](twoviewsviewportcoords.svg)

Jedes Mal, wenn die {{domxref("XRViewerPose")}}'s {{domxref("XRViewerPose.views", "views")}} zum Rendern durchgegangen werden, erhält die Render-Schleife eine {{domxref("XRView")}} für das linke Auge, die ihre obere linke Ecke bei (0, 0) hat, mit einer Breite und Höhe von 1280x1440 Pixeln. Das rechte Auge, das es erhält, hat seine obere linke Ecke bei 1280, 0 und dieselbe Breite und Höhe: 1280x1440.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [WebXR Performance Guide](/de/docs/Web/API/WebXR_Device_API/Performance)
