---
title: VisualViewport
slug: Web/API/VisualViewport
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{APIRef("Visual Viewport")}}

Die **`VisualViewport`**-Schnittstelle der {{domxref("Visual Viewport API", "", "", "nocode")}} repräsentiert das visuelle Viewport für ein gegebenes Fenster. Für eine Seite mit iframes hat jedes iframe sowie die enthaltende Seite ein einzigartiges Fensterobjekt. Jedes Fenster auf einer Seite wird ein einzigartiges `VisualViewport` haben, das die Eigenschaften darstellt, die mit diesem Fenster verbunden sind.

Sie können das visuelle Viewport eines Fensters über {{domxref("Window.visualViewport")}} abrufen.

> [!NOTE]
> Nur das oberste Fenster hat ein visuelles Viewport, das sich vom Layout-Viewport unterscheidet. Daher ist im Allgemeinen nur das `VisualViewport`-Objekt des obersten Fensters nützlich. Bei einem {{htmlelement("iframe")}} entsprechen die visuellen Viewport-Metriken wie {{domxref("VisualViewport.width")}} immer den Layout-Viewport-Metriken wie {{domxref("Element.clientWidth", "document.documentElement.clientWidth")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, {{domxref("EventTarget")}}._

- {{domxref("VisualViewport.offsetLeft")}} {{ReadOnlyInline}}
  - : Gibt den Versatz der linken Kante des visuellen Viewports von der linken Kante des Layout-Viewports in CSS-Pixeln zurück.
- {{domxref("VisualViewport.offsetTop")}} {{ReadOnlyInline}}
  - : Gibt den Versatz der oberen Kante des visuellen Viewports von der oberen Kante des Layout-Viewports in CSS-Pixeln zurück.
- {{domxref("VisualViewport.pageLeft")}} {{ReadOnlyInline}}
  - : Gibt die x-Koordinate des visuellen Viewports relativ zum Ursprung des anfänglichen enthaltenden Blocks der oberen Kante in CSS-Pixeln zurück.
- {{domxref("VisualViewport.pageTop")}} {{ReadOnlyInline}}
  - : Gibt die y-Koordinate des visuellen Viewports relativ zum Ursprung des anfänglichen enthaltenden Blocks der oberen Kante in CSS-Pixeln zurück.
- {{domxref("VisualViewport.width")}} {{ReadOnlyInline}}
  - : Gibt die Breite des visuellen Viewports in CSS-Pixeln zurück.
- {{domxref("VisualViewport.height")}} {{ReadOnlyInline}}
  - : Gibt die Höhe des visuellen Viewports in CSS-Pixeln zurück.
- {{domxref("VisualViewport.scale")}} {{ReadOnlyInline}}
  - : Gibt den angewendeten Pinch-Zoom-Skalierungsfaktor für den visuellen Viewport zurück.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, {{domxref("EventTarget")}}._

## Ereignisse

Hören Sie diese Ereignisse mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} ab oder weisen Sie einen Ereignis-Listener der entsprechenden `oneventname`-Eigenschaft dieser Schnittstelle zu.

- {{domxref("VisualViewport/resize_event", "resize")}}
  - : Wird ausgelöst, wenn das visuelle Viewport in der Größe verändert wird.
    Auch über die `onresize`-Eigenschaft verfügbar.
- {{domxref("VisualViewport/scroll_event", "scroll")}}
  - : Wird ausgelöst, wenn das visuelle Viewport gescrollt wird.
    Auch über die `onscroll`-Eigenschaft verfügbar.
- {{domxref("VisualViewport/scrollend_event", "scrollend")}}
  - : Wird ausgelöst, wenn ein Scrollvorgang auf dem visuellen Viewport endet.
    Auch über die `onscrollend`-Eigenschaft verfügbar.

## Beispiele

### Verstecken einer überlagerten Box beim Zoomen

Dieses Beispiel, entnommen aus dem [Visual Viewport README](https://github.com/WICG/visual-viewport), zeigt, wie man ein einfaches Stück Code schreibt, das eine überlagerte Box (die beispielsweise eine Werbung enthalten könnte) ausblendet, wenn der Benutzer hineinzoomt. Dies ist eine schöne Möglichkeit, die Benutzererfahrung beim Zoomen auf Seiten zu verbessern. Ein [Live-Beispiel](https://wicg.github.io/visual-viewport/examples/hide-on-zoom.html) ist ebenfalls verfügbar.

```js
const bottomBar = document.getElementById("bottombar");
const viewport = window.visualViewport;

function resizeHandler() {
  bottomBar.style.display = viewport.scale > 1.3 ? "none" : "block";
}

window.visualViewport.addEventListener("resize", resizeHandler);
```

### Simulation von position: device-fixed

Dieses Beispiel, ebenfalls aus dem [Visual Viewport README](https://github.com/WICG/visual-viewport), zeigt, wie man diese API verwendet, um `position: device-fixed` zu simulieren, was Elemente im visuellen Viewport fixiert. Ein [Live-Beispiel](https://wicg.github.io/visual-viewport/examples/fixed-to-viewport.html) ist ebenfalls verfügbar.

```js
const bottomBar = document.getElementById("bottombar");
const viewport = window.visualViewport;
function viewportHandler() {
  const layoutViewport = document.getElementById("layoutViewport");

  // Da die Leiste position: fixed ist, müssen wir sie um den Versatz des visuellen
  // Viewports vom Ursprung des Layout-Viewports verschieben.
  const offsetLeft = viewport.offsetLeft;
  const offsetTop =
    viewport.height -
    layoutViewport.getBoundingClientRect().height +
    viewport.offsetTop;

  // Sie könnten dies auch tun, indem Sie style.left und style.top setzen, wenn Sie
  // stattdessen width: 100% verwenden.
  bottomBar.style.transform = `translate(${offsetLeft}px, ${offsetTop}px) scale(${
    1 / viewport.scale
  })`;
}
window.visualViewport.addEventListener("scroll", viewportHandler);
window.visualViewport.addEventListener("resize", viewportHandler);
```

> [!NOTE]
> Diese Technik sollte mit Vorsicht verwendet werden; das Emulieren von `position: device-fixed` auf diese Weise kann dazu führen, dass das fixierte Element während des Scrollens flackert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Viewports Explainer](https://github.com/bokand/bokand.github.io/blob/master/web_viewports_explainer.md) — hilfreiche Erklärung der Konzepte von Web-Viewports, einschließlich des Unterschieds zwischen visuellem Viewport und Layout-Viewport.
