---
title: VisualViewport
slug: Web/API/VisualViewport
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{APIRef("Visual Viewport")}}

Das **`VisualViewport`**-Interface der [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) repräsentiert das visuelle Viewport für ein bestimmtes Fenster. Für eine Seite, die `iframes` enthält, hat jedes `iframe` sowie die enthaltende Seite ein einzigartiges Fensterobjekt. Jedes Fenster auf einer Seite hat einen einzigartigen `VisualViewport`, der die mit diesem Fenster verbundenen Eigenschaften darstellt.

Sie können den visuellen Viewport eines Fensters mit [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) abrufen.

> [!NOTE]
> Nur das Hauptfenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheidet. Daher ist in der Regel nur das `VisualViewport`-Objekt des Hauptfensters nützlich. Für ein {{htmlelement("iframe")}} entsprechen visuelle Viewport-Metriken wie [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) immer Layout-Viewport-Metriken wie [`document.documentElement.clientWidth`](/de/docs/Web/API/Element/clientWidth).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) {{ReadOnlyInline}}
  - : Gibt den Versatz der linken Kante des visuellen Viewports von der linken Kante des Layout-Viewports in CSS-Pixel zurück.
- [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) {{ReadOnlyInline}}
  - : Gibt den Versatz der oberen Kante des visuellen Viewports von der oberen Kante des Layout-Viewports in CSS-Pixel zurück.
- [`VisualViewport.pageLeft`](/de/docs/Web/API/VisualViewport/pageLeft) {{ReadOnlyInline}}
  - : Gibt die x-Koordinate des visuellen Viewports relativ zum Ursprung des anfänglichen Umgebungsblocks der oberen Kante in CSS-Pixel zurück.
- [`VisualViewport.pageTop`](/de/docs/Web/API/VisualViewport/pageTop) {{ReadOnlyInline}}
  - : Gibt die y-Koordinate des visuellen Viewports relativ zum Ursprung des anfänglichen Umgebungsblocks der oberen Kante in CSS-Pixel zurück.
- [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) {{ReadOnlyInline}}
  - : Gibt die Breite des visuellen Viewports in CSS-Pixel zurück.
- [`VisualViewport.height`](/de/docs/Web/API/VisualViewport/height) {{ReadOnlyInline}}
  - : Gibt die Höhe des visuellen Viewports in CSS-Pixel zurück.
- [`VisualViewport.scale`](/de/docs/Web/API/VisualViewport/scale) {{ReadOnlyInline}}
  - : Gibt den Pinch-Zoom-Skalierungsfaktor zurück, der auf den visuellen Viewport angewendet wird.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abgehört werden oder indem ein Ereignislistener der relevanten `oneventname`-Eigenschaft dieser Schnittstelle zugewiesen wird.

- [`resize`](/de/docs/Web/API/VisualViewport/resize_event)
  - : Wird ausgelöst, wenn der visuelle Viewport in der Größe geändert wird.
    Auch über die `onresize`-Eigenschaft verfügbar.
- [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)
  - : Wird ausgelöst, wenn der visuelle Viewport gescrollt wird.
    Auch über die `onscroll`-Eigenschaft verfügbar.
- [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event)
  - : Wird ausgelöst, wenn ein Scroll-Vorgang auf dem visuellen Viewport endet.
    Auch über die `onscrollend`-Eigenschaft verfügbar.

## Beispiele

### Ein überlagertes Feld beim Zoomen ausblenden

Dieses Beispiel, entnommen aus dem [Visual Viewport README](https://github.com/WICG/visual-viewport), zeigt, wie Sie einen einfachen Code schreiben, der ein überlagertes Feld ausblendet (das beispielsweise eine Werbung enthalten könnte), wenn der Benutzer hereinzoomt. Dies ist eine nette Möglichkeit, die Benutzererfahrung beim Zoomen auf Seiten zu verbessern. Ein [Live-Beispiel](https://wicg.github.io/visual-viewport/examples/hide-on-zoom.html) ist ebenfalls verfügbar.

```js
const bottomBar = document.getElementById("bottom-bar");
const viewport = window.visualViewport;

function resizeHandler() {
  bottomBar.style.display = viewport.scale > 1.3 ? "none" : "block";
}

window.visualViewport.addEventListener("resize", resizeHandler);
```

### Position: device-fixed simulieren

Dieses Beispiel, ebenfalls aus dem [Visual Viewport README](https://github.com/WICG/visual-viewport) entnommen, zeigt, wie Sie diese API verwenden, um `position: device-fixed` zu simulieren, das Elemente am visuellen Viewport fixiert. Ein [Live-Beispiel](https://wicg.github.io/visual-viewport/examples/fixed-to-viewport.html) ist ebenfalls verfügbar.

```js
const bottomBar = document.getElementById("bottom-bar");
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
> Diese Technik sollte mit Vorsicht angewendet werden; das Emulieren von `position: device-fixed` auf diese Weise kann dazu führen, dass das feste Element beim Scrollen flackert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Viewports Explainer](https://github.com/bokand/bokand.github.io/blob/master/web_viewports_explainer.md) — nützliche Erklärung von Web-Viewport-Konzepten, einschließlich des Unterschieds zwischen visuellem Viewport und Layout-Viewport.
