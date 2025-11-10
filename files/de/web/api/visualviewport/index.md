---
title: VisualViewport
slug: Web/API/VisualViewport
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Das **`VisualViewport`**-Interface der [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) repräsentiert das visuelle Viewport für ein bestimmtes Fenster. Für eine Seite mit iframes hat jedes iframe sowie die enthaltene Seite ein einzigartiges Fensterobjekt. Jedes Fenster auf einer Seite verfügt über ein einzigartiges `VisualViewport`, das die mit diesem Fenster verbundenen Eigenschaften repräsentiert.

Sie können das visuelle Viewport eines Fensters über [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) abrufen.

> [!NOTE]
> Nur das Top-Level-Fenster hat ein visuelles Viewport, das sich vom Layout-Viewport unterscheidet. Daher ist im Allgemeinen nur das `VisualViewport`-Objekt des Top-Level-Fensters nützlich. Für ein {{htmlelement("iframe")}} entsprechen visuelle Viewportmetriken wie [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) immer den Layout-Viewportmetriken wie [`document.documentElement.clientWidth`](/de/docs/Web/API/Element/clientWidth).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) {{ReadOnlyInline}}
  - : Gibt den Versatz der linken Kante des visuellen Viewports von der linken Kante des Layout-Viewports in CSS-Pixeln zurück.
- [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) {{ReadOnlyInline}}
  - : Gibt den Versatz der oberen Kante des visuellen Viewports von der oberen Kante des Layout-Viewports in CSS-Pixeln zurück.
- [`VisualViewport.pageLeft`](/de/docs/Web/API/VisualViewport/pageLeft) {{ReadOnlyInline}}
  - : Gibt die x-Koordinate des visuellen Viewports relativ zum Ursprung des anfänglichen umgebenden Blocks der oberen Kante in CSS-Pixeln zurück.
- [`VisualViewport.pageTop`](/de/docs/Web/API/VisualViewport/pageTop) {{ReadOnlyInline}}
  - : Gibt die y-Koordinate des visuellen Viewports relativ zum Ursprung des anfänglichen umgebenden Blocks der oberen Kante in CSS-Pixeln zurück.
- [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) {{ReadOnlyInline}}
  - : Gibt die Breite des visuellen Viewports in CSS-Pixeln zurück.
- [`VisualViewport.height`](/de/docs/Web/API/VisualViewport/height) {{ReadOnlyInline}}
  - : Gibt die Höhe des visuellen Viewports in CSS-Pixeln zurück.
- [`VisualViewport.scale`](/de/docs/Web/API/VisualViewport/scale) {{ReadOnlyInline}}
  - : Gibt den beim Pinch-Zoom angewendeten Skalierungsfaktor des visuellen Viewports zurück.

## Instanzenmethoden

_Erbt auch Methoden von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

Diese Ereignisse können Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abhören oder indem Sie einen Ereignis-Listener der relevanten `oneventname`-Eigenschaft dieses Interface zuweisen.

- [`resize`](/de/docs/Web/API/VisualViewport/resize_event)
  - : Wird ausgelöst, wenn das visuelle Viewport in der Größe verändert wird.
    Auch über die `onresize`-Eigenschaft verfügbar.
- [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)
  - : Wird ausgelöst, wenn das visuelle Viewport gescrollt wird.
    Auch über die `onscroll`-Eigenschaft verfügbar.
- [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event)
  - : Wird ausgelöst, wenn ein Scrollvorgang auf dem visuellen Viewport endet.
    Auch über die `onscrollend`-Eigenschaft verfügbar.

## Beispiele

### Ausblenden eines überlagerten Kastens bei Zoom

Dieses Beispiel, entnommen aus dem [Visual Viewport README](https://github.com/WICG/visual-viewport), zeigt, wie Sie ein kleines Stück Code schreiben, das einen überlagerten Kasten (der z. B. eine Werbung enthalten könnte) ausblendet, wenn der Benutzer hereinzoomt. Dies ist eine schöne Möglichkeit, die Benutzererfahrung beim Zoomen auf Seiten zu verbessern. Ein [Live-Beispiel](https://wicg.github.io/visual-viewport/examples/hide-on-zoom.html) ist ebenfalls verfügbar.

```js
const bottomBar = document.getElementById("bottom-bar");
const viewport = window.visualViewport;

function resizeHandler() {
  bottomBar.style.display = viewport.scale > 1.3 ? "none" : "block";
}

window.visualViewport.addEventListener("resize", resizeHandler);
```

### Simulieren von position: device-fixed

Dieses Beispiel, ebenfalls aus dem [Visual Viewport README](https://github.com/WICG/visual-viewport), zeigt, wie diese API verwendet werden kann, um `position: device-fixed` zu simulieren, welches Elemente am visuellen Viewport fixiert. Ein [Live-Beispiel](https://wicg.github.io/visual-viewport/examples/fixed-to-viewport.html) ist ebenfalls verfügbar.

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
> Diese Technik sollte mit Vorsicht verwendet werden; das Emulieren von `position: device-fixed` auf diese Weise kann dazu führen, dass das fixierte Element beim Scrollen flackert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Viewports Explainer](https://github.com/bokand/bokand.github.io/blob/master/web_viewports_explainer.md) — Nützliche Erklärung von Web-Viewport-Konzepten, einschließlich des Unterschieds zwischen visuellem Viewport und Layout-Viewport.
