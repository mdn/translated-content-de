---
title: VisualViewport
slug: Web/API/VisualViewport
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{APIRef("Visual Viewport")}}

Die **`VisualViewport`**-Schnittstelle der [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) repräsentiert das visuelle Viewport für ein gegebenes Fenster. Für eine Seite, die iframes enthält, wird jedes iframe sowie die enthaltende Seite ein einzigartiges Fensterobjekt haben. Jedes Fenster auf einer Seite hat ein einzigartiges `VisualViewport`, das die Eigenschaften darstellt, die mit diesem Fenster verbunden sind.

Sie können das visuelle Viewport eines Fensters mit [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) abrufen.

> [!NOTE]
> Nur das oberste Fenster hat ein visuelles Viewport, das sich vom Layout-Viewport unterscheidet. Daher ist im Allgemeinen nur das `VisualViewport`-Objekt des obersten Fensters nützlich. Für ein {{htmlelement("iframe")}} entsprechen visuelle Viewport-Metriken wie [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) immer den Layout-Viewport-Metriken wie [`document.documentElement.clientWidth`](/de/docs/Web/API/Element/clientWidth).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Ebenfalls erbt Eigenschaften von ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) {{ReadOnlyInline}}
  - : Gibt den Versatz der linken Kante des visuellen Viewports von der linken Kante des Layout-Viewports in CSS-Pixeln zurück.
- [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) {{ReadOnlyInline}}
  - : Gibt den Versatz der oberen Kante des visuellen Viewports von der oberen Kante des Layout-Viewports in CSS-Pixeln zurück.
- [`VisualViewport.pageLeft`](/de/docs/Web/API/VisualViewport/pageLeft) {{ReadOnlyInline}}
  - : Gibt die X-Koordinate des visuellen Viewports relativ zum Ursprung des anfänglichen enthaltenden Blocks der oberen Kante in CSS-Pixeln zurück.
- [`VisualViewport.pageTop`](/de/docs/Web/API/VisualViewport/pageTop) {{ReadOnlyInline}}
  - : Gibt die Y-Koordinate des visuellen Viewports relativ zum Ursprung des anfänglichen enthaltenden Blocks der oberen Kante in CSS-Pixeln zurück.
- [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) {{ReadOnlyInline}}
  - : Gibt die Breite des visuellen Viewports in CSS-Pixeln zurück.
- [`VisualViewport.height`](/de/docs/Web/API/VisualViewport/height) {{ReadOnlyInline}}
  - : Gibt die Höhe des visuellen Viewports in CSS-Pixeln zurück.
- [`VisualViewport.scale`](/de/docs/Web/API/VisualViewport/scale) {{ReadOnlyInline}}
  - : Gibt den für das visuelle Viewport angewendeten Pinch-Zoom-Skalierungsfaktor zurück.

## Instanz-Methoden

_Ebenfalls erbt Methoden von ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

Rufen Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ab oder indem Sie einen Ereignis-Listener der relevanten `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`resize`](/de/docs/Web/API/VisualViewport/resize_event)
  - : Wird ausgelöst, wenn das visuelle Viewport in der Größe verändert wird.
    Auch über die `onresize`-Eigenschaft verfügbar.
- [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)
  - : Wird ausgelöst, wenn das visuelle Viewport gescrollt wird.
    Auch über die `onscroll`-Eigenschaft verfügbar.
- [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event)
  - : Wird ausgelöst, wenn eine Scrollvorgang beim visuellen Viewport endet.
    Auch über die `onscrollend`-Eigenschaft verfügbar.

## Beispiele

### Verbergen einer überlagerten Box beim Zoomen

Dieses Beispiel, entnommen aus dem [Visual Viewport README](https://github.com/WICG/visual-viewport), zeigt, wie man ein einfaches Stückchen Code schreibt, das eine überlagerte Box (die beispielsweise eine Anzeige enthalten könnte) versteckt, wenn der Benutzer hereinzoomt. Dies ist eine gute Möglichkeit, das Benutzererlebnis beim Zoomen auf Seiten zu verbessern. Ein [Live-Beispiel](https://wicg.github.io/visual-viewport/examples/hide-on-zoom.html) ist ebenfalls verfügbar.

```js
const bottomBar = document.getElementById("bottombar");
const viewport = window.visualViewport;

function resizeHandler() {
  bottomBar.style.display = viewport.scale > 1.3 ? "none" : "block";
}

window.visualViewport.addEventListener("resize", resizeHandler);
```

### Simulation von position: device-fixed

Dieses Beispiel, ebenfalls entnommen aus dem [Visual Viewport README](https://github.com/WICG/visual-viewport), zeigt, wie man diese API verwendet, um `position: device-fixed` zu simulieren, was Elemente am visuellen Viewport befestigt. Ein [Live-Beispiel](https://wicg.github.io/visual-viewport/examples/fixed-to-viewport.html) ist ebenfalls verfügbar.

```js
const bottomBar = document.getElementById("bottombar");
const viewport = window.visualViewport;
function viewportHandler() {
  const layoutViewport = document.getElementById("layoutViewport");

  // Since the bar is position: fixed we need to offset it by the visual
  // viewport's offset from the layout viewport origin.
  const offsetLeft = viewport.offsetLeft;
  const offsetTop =
    viewport.height -
    layoutViewport.getBoundingClientRect().height +
    viewport.offsetTop;

  // You could also do this by setting style.left and style.top if you
  // use width: 100% instead.
  bottomBar.style.transform = `translate(${offsetLeft}px, ${offsetTop}px) scale(${
    1 / viewport.scale
  })`;
}
window.visualViewport.addEventListener("scroll", viewportHandler);
window.visualViewport.addEventListener("resize", viewportHandler);
```

> [!NOTE]
> Diese Technik sollte mit Vorsicht eingesetzt werden; das Emulieren von `position: device-fixed` auf diese Weise kann dazu führen, dass das feststehende Element beim Scrollen flackert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Viewports Explainer](https://github.com/bokand/bokand.github.io/blob/master/web_viewports_explainer.md) — nützliche Erklärung von Konzepten bezüglich Web-Viewports, einschließlich des Unterschieds zwischen visuellem Viewport und Layout-Viewport.
