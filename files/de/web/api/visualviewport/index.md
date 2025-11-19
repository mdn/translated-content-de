---
title: VisualViewport
slug: Web/API/VisualViewport
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

{{APIRef("CSSOM view API")}}

Das **`VisualViewport`**-Interface der [Visual Viewport API](/de/docs/Web/API/VisualViewport) repräsentiert das visuelle Viewport für ein gegebenes Fenster. Bei einer Seite mit iframes hat jedes iframe sowie die einbettende Seite ein einzigartiges Fensterobjekt. Jedes Fenster auf einer Seite hat ein einzigartiges `VisualViewport`, das die mit diesem Fenster verbundenen Eigenschaften darstellt.

Das mobile Web enthält zwei Viewports, das Layout-Viewport und das visuelle Viewport. Das Layout-Viewport umfasst alle Elemente auf einer Seite und das visuelle Viewport ist das, was tatsächlich auf dem Bildschirm zu sehen ist. Wenn der Benutzer in die Seite hineinzoomt, schrumpft das visuelle Viewport, aber das Layout-Viewport bleibt unverändert. Benutzeroberflächenfunktionen wie die On-Screen-Tastatur (OSK) können das visuelle Viewport verkleinern, ohne das Layout-Viewport zu beeinflussen.

Was passiert, wenn ein Element einer Webseite unabhängig vom sichtbaren Teil der Seite auf dem Bildschirm sichtbar sein muss? Zum Beispiel, was ist, wenn Sie möchten, dass eine Bildsteuerungssatz auf dem Bildschirm bleibt, unabhängig vom Zoomlevel des Geräts? Aktuelle Browser unterscheiden sich darin, wie sie dies handhaben. Das visuelle Viewport ermöglicht es Webentwicklern, dies zu lösen, indem Elemente relativ zu dem angezeigt werden, was auf dem Bildschirm zu sehen ist.

Sie können das visuelle Viewport eines Fensters über [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) abrufen.

> [!NOTE]
> Nur das oberste Fenster hat ein visuelles Viewport, das sich vom Layout-Viewport unterscheidet. Daher ist im Allgemeinen nur das `VisualViewport`-Objekt des Hauptfensters nützlich. Für ein {{htmlelement("iframe")}} entsprechen visuelle Viewport-Metriken wie [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) immer Layout-Viewport-Metriken wie [`document.documentElement.clientWidth`](/de/docs/Web/API/Element/clientWidth).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) {{ReadOnlyInline}}
  - : Gibt die Verschiebung der linken Kante des visuellen Viewports von der linken Kante des Layout-Viewports in CSS-Pixel zurück.
- [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) {{ReadOnlyInline}}
  - : Gibt die Verschiebung der oberen Kante des visuellen Viewports von der oberen Kante des Layout-Viewports in CSS-Pixel zurück.
- [`VisualViewport.pageLeft`](/de/docs/Web/API/VisualViewport/pageLeft) {{ReadOnlyInline}}
  - : Gibt die x-Koordinate des visuellen Viewports relativ zum Ursprungsblock der oberen Kante in CSS-Pixel zurück.
- [`VisualViewport.pageTop`](/de/docs/Web/API/VisualViewport/pageTop) {{ReadOnlyInline}}
  - : Gibt die y-Koordinate des visuellen Viewports relativ zum Ursprungsblock der oberen Kante in CSS-Pixel zurück.
- [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) {{ReadOnlyInline}}
  - : Gibt die Breite des visuellen Viewports in CSS-Pixel zurück.
- [`VisualViewport.height`](/de/docs/Web/API/VisualViewport/height) {{ReadOnlyInline}}
  - : Gibt die Höhe des visuellen Viewports in CSS-Pixel zurück.
- [`VisualViewport.scale`](/de/docs/Web/API/VisualViewport/scale) {{ReadOnlyInline}}
  - : Gibt den beim visuellen Viewport angewendeten Zoomfaktor zurück.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) angehört werden oder indem ein Ereignis-Listener der entsprechenden `oneventname`-Eigenschaft dieses Interfaces zugewiesen wird.

- [`resize`](/de/docs/Web/API/VisualViewport/resize_event)
  - : Wird ausgelöst, wenn das visuelle Viewport geändert wird.
    Auch verfügbar über die `onresize`-Eigenschaft.
- [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)
  - : Wird ausgelöst, wenn das visuelle Viewport gescrollt wird.
    Auch verfügbar über die `onscroll`-Eigenschaft.
- [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event)
  - : Wird ausgelöst, wenn ein Scrollvorgang im visuellen Viewport endet.
    Auch verfügbar über die `onscrollend`-Eigenschaft.

## Beispiele

## Abrufen von Informationen zum visuellen Viewport während des Scrollens und Zoomens

Unser [visuelles Viewport](https://mdn.github.io/dom-examples/visual-viewport-api/) Beispiel bietet eine grundlegende Demonstration, wie die verschiedenen Funktionen des visuellen Viewports funktionieren, einschließlich der drei Ereignistypen. Laden Sie die Seite in unterstützten Desktop- und mobilen Browsern und versuchen Sie, auf der Seite zu scrollen und zu zoomen. Bei `resize` und `scroll` wird die Informationsbox neu positioniert, um die gleiche Position relativ zum visuellen Viewport beizubehalten, und die darin angezeigten Viewport- und Scrollinformationen werden aktualisiert. Auch bei `resize` und `scroll` ändern wir die Farbe der Box, um anzuzeigen, dass etwas passiert, und ändern sie bei `scrollend` zurück.

Sie werden feststellen, dass in Desktop-Browsern die Werte von [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) und [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) beim Scrollen des Fensters aktualisiert werden — die Position des visuellen Viewports ändert sich nicht. In mobilen Browsern werden jedoch in der Regel die Werte von [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) und [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) aktualisiert — in der Regel ändert sich das visuelle Viewport anstelle der Fensterposition.

Im Beispiel wird die HTML-Informationsbox durch ein {{htmlelement("div")}} mit einer `id` von `output` dargestellt, während das CSS zur Übersichtlichkeit verborgen bleibt.

```html
<p id="instructions">
  Try scrolling around and pinch-zooming to see how the reported values change.
</p>
<div id="output">
  <p id="visual-info"></p>
  <hr />
  <p id="window-info"></p>
</div>
```

Im JavaScript beginnen wir damit, Referenzen auf die Informationsbox zu erhalten, die wir aktualisieren werden, während die Seite gezoomt und gescrollt wird, sowie auf die beiden darin enthaltenen Absätze. Der erste enthält die gemeldeten Werte für [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) und [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop), während der zweite die gemeldeten Werte für [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) und [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) enthält.

```js
const output = document.getElementById("output");
const visualInfo = document.getElementById("visual-info");
const windowInfo = document.getElementById("window-info");
```

Als Nächstes definieren wir die beiden Hauptfunktionen, die beim Auftreten der Ereignisse ausgeführt werden:

- Die Funktion `scrollUpdater()` wird bei `resize` und `scroll` ausgeführt: Diese Funktion aktualisiert die Position der Informationsbox relativ zum visuellen Viewport, indem sie die Eigenschaften [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) und [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) abfragt und deren Werte verwendet, um die Werte der entsprechenden {{Glossary("inset_properties", "inset properties")}} zu aktualisieren. Wir ändern auch die Hintergrundfarbe der Informationsbox, um anzuzeigen, dass etwas passiert, und führen die Funktion `updateText()` aus, um die im Feld angezeigten Werte zu aktualisieren.
- Die Funktion `scrollEndUpdater()` wird bei `scrollend` ausgelöst: Diese Funktion stellt die ursprüngliche Farbe der Informationsbox wieder her und führt die Funktion `updateText()` aus, um sicherzustellen, dass die neuesten Werte bei `scrollend` angezeigt werden.

```js
const scrollUpdater = () => {
  output.style.top = `${visualViewport.offsetTop + 10}px`;
  output.style.left = `${visualViewport.offsetLeft + 10}px`;
  output.style.background = "yellow";
  updateText();
};

const scrollendUpdater = () => {
  output.style.background = "lime";
  updateText();
};
```

Die Funktion `updateText()` setzt das [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) des ersten Absatzes, um die aktuellen `VisualViewport.offsetLeft` und `VisualViewport.offsetTop`-Werte anzuzeigen, und das `HTMLElement.innerText` des zweiten Absatzes, um die aktuellen `Window.scrollX` und `Window.scrollY`-Werte anzuzeigen. Nach der Definition von `updateText()` wird sie sofort aufgerufen, damit die Informationsbox beim Laden der Seite korrekt angezeigt wird.

```js
function updateText() {
  visualInfo.innerText = `Visual viewport left: ${visualViewport.offsetLeft.toFixed(2)}
    top: ${visualViewport.offsetTop.toFixed(2)}`;
  windowInfo.innerText = `Window scrollX: ${window.scrollX.toFixed(2)}
    scrollY: ${window.scrollY.toFixed(2)}`;
}

updateText();
```

Wir kürzten alle Werte auf zwei Dezimalstellen mit der Methode {{jsxref("Number.toFixed()")}}, da einige Browser Unterpixelwerte mit einer großen Anzahl von Dezimalstellen rendern.

Jetzt setzen wir Ereignishandler-Eigenschaften sowohl auf das visuelle Viewport als auch auf das [`Window`](/de/docs/Web/API/Window)-Objekt, um die Hauptfunktionen sowohl auf mobilen als auch auf Desktop-Geräten zu den entsprechenden Zeiten auszuführen:

- Wir setzen die Handler auf `window`, damit die Position und der Inhalt der Informationsbox bei herkömmlichen Scrollvorgängen des Fensters aktualisiert werden, z. B. wenn Sie eine Seite in einem Desktop-Browser scrollen.
- Wir setzen die Handler auf `visualViewport`, damit die Position und der Inhalt der Informationsbox bei Scroll- und Zoomvorgängen des visuellen Viewports aktualisiert werden, z. B. wenn Sie eine Seite in einem mobilen Browser scrollen und hineinzoomen.

```js
visualViewport.onresize = scrollUpdater;
visualViewport.onscroll = scrollUpdater;
visualViewport.onscrollend = scrollendUpdater;
window.onresize = scrollUpdater;
window.onscroll = scrollUpdater;
window.onscrollend = scrollendUpdater;
```

Die Funktion `scrollUpdater()` wird bei `resize` und `scroll` ausgelöst, während `scrollEndUpdater()` bei `scrollend` ausgelöst wird.

### Ausblenden eines überlagerten Kastens beim Zoomen

Dieses Beispiel, das aus der [Visual Viewport README](https://github.com/WICG/visual-viewport) entnommen wurde, zeigt, wie man ein wenig Code schreibt, der einen überlagerten Kasten (der möglicherweise eine Werbung enthält) ausblendet, wenn der Benutzer hineinzoomt. Dies ist eine elegante Möglichkeit, die Benutzererfahrung beim Zoomen von Seiten zu verbessern. Ein [Live-Beispiel](https://wicg.github.io/visual-viewport/examples/hide-on-zoom.html) ist ebenfalls verfügbar.

```js
const bottomBar = document.getElementById("bottom-bar");
const viewport = window.visualViewport;

function resizeHandler() {
  bottomBar.style.display = viewport.scale > 1.3 ? "none" : "block";
}

window.visualViewport.addEventListener("resize", resizeHandler);
```

### Position: device-fixed simulieren

Dieses Beispiel, ebenfalls entnommen aus der [Visual Viewport README](https://github.com/WICG/visual-viewport), zeigt, wie diese API verwendet werden kann, um `position: device-fixed` zu simulieren, was Elemente am visuellen Viewport fixiert. Ein [Live-Beispiel](https://wicg.github.io/visual-viewport/examples/fixed-to-viewport.html) ist ebenfalls verfügbar.

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
> Diese Technik sollte mit Vorsicht verwendet werden; das Emulieren von `position: device-fixed` auf diese Weise kann dazu führen, dass das fixierte Element während des Scrollens flackert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erklärung zu Web-Viewports](https://github.com/bokand/bokand.github.io/blob/master/web_viewports_explainer.md) — nützliche Erklärung der Konzepte von Web-Viewports, einschließlich des Unterschieds zwischen visuellem Viewport und Layout-Viewport.
