---
title: VisualViewport
slug: Web/API/VisualViewport
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{APIRef("Visual Viewport")}}

Das **`VisualViewport`**-Interface der [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) repräsentiert das visuelle Viewport für ein gegebenes Fenster. Für eine Seite, die iframes enthält, hat jedes iframe sowie die enthaltene Seite ein eigenes Fensterobjekt. Jedes Fenster auf einer Seite wird über ein eigenes `VisualViewport` verfügen, das die mit diesem Fenster verknüpften Eigenschaften darstellt.

Sie können den visuellen Viewport eines Fensters mit [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) erhalten.

> [!NOTE]
> Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheidet. Daher ist im Allgemeinen nur das `VisualViewport`-Objekt des obersten Fensters nützlich. Für ein {{htmlelement("iframe")}} entsprechen die Metriken des visuellen Viewports, wie [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width), immer den Metriken des Layout-Viewports, wie [`document.documentElement.clientWidth`](/de/docs/Web/API/Element/clientWidth).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften seines übergeordneten Interfaces, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) {{ReadOnlyInline}}
  - : Gibt den Versatz der linken Kante des visuellen Viewports von der linken Kante des Layout-Viewports in CSS-Pixels zurück.
- [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) {{ReadOnlyInline}}
  - : Gibt den Versatz der oberen Kante des visuellen Viewports von der oberen Kante des Layout-Viewports in CSS-Pixels zurück.
- [`VisualViewport.pageLeft`](/de/docs/Web/API/VisualViewport/pageLeft) {{ReadOnlyInline}}
  - : Gibt die x-Koordinate des visuellen Viewports relativ zum Ursprung des initialen umgebenden Blocks der oberen Kante in CSS-Pixels zurück.
- [`VisualViewport.pageTop`](/de/docs/Web/API/VisualViewport/pageTop) {{ReadOnlyInline}}
  - : Gibt die y-Koordinate des visuellen Viewports relativ zum Ursprung des initialen umgebenden Blocks der oberen Kante in CSS-Pixels zurück.
- [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) {{ReadOnlyInline}}
  - : Gibt die Breite des visuellen Viewports in CSS-Pixels zurück.
- [`VisualViewport.height`](/de/docs/Web/API/VisualViewport/height) {{ReadOnlyInline}}
  - : Gibt die Höhe des visuellen Viewports in CSS-Pixels zurück.
- [`VisualViewport.scale`](/de/docs/Web/API/VisualViewport/scale) {{ReadOnlyInline}}
  - : Gibt den auf den visuellen Viewport angewendeten Pinch-Zoom-Skalierungsfaktor zurück.

## Instanz-Methoden

_Erbt auch Methoden seines übergeordneten Interfaces, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abgehört werden oder indem ein Ereignis-Listener der entsprechenden `oneventname`-Eigenschaft dieses Interfaces zugewiesen wird.

- [`resize`](/de/docs/Web/API/VisualViewport/resize_event)
  - : Wird ausgelöst, wenn der visuelle Viewport in der Größe verändert wird.
    Auch über die `onresize`-Eigenschaft verfügbar.
- [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)
  - : Wird ausgelöst, wenn der visuelle Viewport verschoben wird.
    Auch über die `onscroll`-Eigenschaft verfügbar.
- [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event)
  - : Wird ausgelöst, wenn ein Scrollvorgang auf dem visuellen Viewport abgeschlossen ist.
    Auch über die `onscrollend`-Eigenschaft verfügbar.

## Beispiele

### Ausblenden eines überlagerten Feldes beim Zoomen

Dieses Beispiel, entnommen aus dem [Visual Viewport README](https://github.com/WICG/visual-viewport), zeigt, wie man einen einfachen Code schreiben kann, der ein überlagertes Feld (das beispielsweise eine Werbung enthalten könnte) ausblendet, wenn der Benutzer hinein zoomt. Dies ist eine gute Möglichkeit, die Benutzererfahrung beim Hineinzoomen auf Seiten zu verbessern. Ein [Live-Beispiel](https://wicg.github.io/visual-viewport/examples/hide-on-zoom.html) ist ebenfalls verfügbar.

```js
const bottomBar = document.getElementById("bottombar");
const viewport = window.visualViewport;

function resizeHandler() {
  bottomBar.style.display = viewport.scale > 1.3 ? "none" : "block";
}

window.visualViewport.addEventListener("resize", resizeHandler);
```

### Simulieren von position: device-fixed

Dieses Beispiel, ebenfalls aus dem [Visual Viewport README](https://github.com/WICG/visual-viewport), zeigt, wie Sie diese API verwenden können, um `position: device-fixed` zu simulieren, das Elemente an den visuellen Viewport fixiert. Ein [Live-Beispiel](https://wicg.github.io/visual-viewport/examples/fixed-to-viewport.html) ist ebenfalls verfügbar.

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
> Diese Technik sollte mit Vorsicht verwendet werden; das Nachahmen von `position: device-fixed` auf diese Weise kann dazu führen, dass das fixierte Element während des Scrollens flackert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Viewports Explainer](https://github.com/bokand/bokand.github.io/blob/master/web_viewports_explainer.md) — nützliche Erklärung der Web-Viewport-Konzepte, einschließlich der Unterschiede zwischen visuellem Viewport und Layout-Viewport.
