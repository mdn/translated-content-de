---
title: VisualViewport
slug: Web/API/VisualViewport
l10n:
  sourceCommit: 12b296d2b3937c45b2363f34ed8afadcf00ed166
---

{{APIRef("CSSOM view API")}}

Das **`VisualViewport`**-Interface der [CSSOM view API](/de/docs/Web/API/CSSOM_view_API) repräsentiert das visuelle Viewport für ein bestimmtes Fenster. Für eine Seite, die iframes enthält, wird jedes iframe sowie die enthaltende Seite ein einzigartiges Fensterobjekt haben. Jedes Fenster auf einer Seite wird ein einzigartiges `VisualViewport` haben, das die Eigenschaften darstellt, die mit diesem Fenster verbunden sind.

Das mobile Web enthält zwei Viewports: den Layout-Viewport und den visuellen Viewport. Der Layout-Viewport erstreckt sich über alle Elemente einer Seite, während der visuelle Viewport das darstellt, was tatsächlich auf dem Bildschirm sichtbar ist. Wenn der Benutzer in die Seite hineinzoomt, verkleinert sich der visuelle Viewport, aber der Layout-Viewport bleibt unverändert. Benutzeroberflächenelemente wie die Bildschirmtastatur (OSK) können den visuellen Viewport verkleinern, ohne den Layout-Viewport zu beeinflussen.

Was passiert, wenn ein Element einer Webseite unabhängig vom sichtbaren Teil einer Webseite auf dem Bildschirm sichtbar sein muss? Zum Beispiel, was ist, wenn Sie ein Set von Bildsteuerungen dauerhaft sichtbar halten müssen, unabhängig vom Zoom-Level des Geräts? Aktuelle Browser variieren, wie sie dies handhaben. Der visuelle Viewport ermöglicht es Webentwicklern, dieses Problem zu lösen, indem Elemente relativ zu dem positioniert werden, was auf dem Bildschirm angezeigt wird.

Sie können den visuellen Viewport eines Fensters mit [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) abrufen.

> [!NOTE]
> Nur das Top-Level-Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheidet. Daher ist in der Regel nur das `VisualViewport`-Objekt des Top-Level-Fensters nützlich. Für ein {{htmlelement("iframe")}} stimmen visuelle Viewport-Metriken wie [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) immer mit Layout-Viewport-Metriken wie [`document.documentElement.clientWidth`](/de/docs/Web/API/Element/clientWidth) überein.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) {{ReadOnlyInline}}
  - : Gibt den Versatz der linken Kante des visuellen Viewports von der linken Kante des Layout-Viewports in CSS-Pixeln zurück.
- [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) {{ReadOnlyInline}}
  - : Gibt den Versatz der oberen Kante des visuellen Viewports von der oberen Kante des Layout-Viewports in CSS-Pixeln zurück.
- [`VisualViewport.pageLeft`](/de/docs/Web/API/VisualViewport/pageLeft) {{ReadOnlyInline}}
  - : Gibt die x-Koordinate des visuellen Viewports relativ zum Ursprung des initialen umgebenden Blocks der oberen Kante in CSS-Pixeln zurück.
- [`VisualViewport.pageTop`](/de/docs/Web/API/VisualViewport/pageTop) {{ReadOnlyInline}}
  - : Gibt die y-Koordinate des visuellen Viewports relativ zum Ursprung des initialen umgebenden Blocks der oberen Kante in CSS-Pixeln zurück.
- [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) {{ReadOnlyInline}}
  - : Gibt die Breite des visuellen Viewports in CSS-Pixeln zurück.
- [`VisualViewport.height`](/de/docs/Web/API/VisualViewport/height) {{ReadOnlyInline}}
  - : Gibt die Höhe des visuellen Viewports in CSS-Pixeln zurück.
- [`VisualViewport.scale`](/de/docs/Web/API/VisualViewport/scale) {{ReadOnlyInline}}
  - : Gibt den Pinch-Zoom-Skalierungsfaktor zurück, der auf den visuellen Viewport angewendet wird.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

Diese Ereignisse können über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignislisteners zur entsprechenden `oneventname`-Eigenschaft dieses Interfaces abgehört werden.

- [`resize`](/de/docs/Web/API/VisualViewport/resize_event)
  - : Wird ausgelöst, wenn der visuelle Viewport verändert wird. Auch verfügbar über die `onresize`-Eigenschaft.
- [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)
  - : Wird ausgelöst, wenn der visuelle Viewport gescrollt wird. Auch verfügbar über die `onscroll`-Eigenschaft.
- [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event)
  - : Wird ausgelöst, wenn eine Scroll-Operation auf dem visuellen Viewport endet. Auch verfügbar über die `onscrollend`-Eigenschaft.

## Beispiele

## Abrufen von visuellen Viewport-Informationen während des Scrollens und Zoomens

Unser [visueller Viewport](https://mdn.github.io/dom-examples/visual-viewport-api/)-Beispiel bietet eine grundlegende Demonstration, wie die verschiedenen Funktionen des visuellen Viewports funktionieren, einschließlich der drei Ereignistypen. Laden Sie die Seite in unterstützenden Desktop- und mobilen Browsern und versuchen Sie, die Seite zu scrollen und zu zoomen. Bei `resize` und `scroll` wird die Informationsbox so neu positioniert, dass sie ihre Position relativ zum visuellen Viewport beibehält, und die darin angezeigten Viewport- und Scroll-Informationen werden aktualisiert. Zudem färben wir die Box bei `resize` und `scroll`, um anzuzeigen, dass etwas geschieht, und setzen sie bei `scrollend` zurück.

Sie werden feststellen, dass bei Desktop-Browsern die Werte von [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) und [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) aktualisiert werden, wenn das Fenster verschoben wird — die Position des visuellen Viewports ändert sich nicht. Bei mobilen Browsern hingegen werden die Werte von [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) und [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) in der Regel aktualisiert — meistens verändert sich der visuelle Viewport und nicht die Fensterposition.

Im Beispiel wird die HTML-Informationsbox durch ein {{htmlelement("div")}} mit einer `id` von `output` dargestellt, während das CSS der Kürze halber ausgeblendet ist.

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

Im JavaScript beginnen wir damit, Referenzen zur Informationsbox zu erhalten, die bei Zoom- und Scroll-Vorgängen aktualisiert wird, sowie zu den beiden Absätzen, die darin enthalten sind. Der erste wird die gemeldeten Werte von [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) und [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) enthalten, während der zweite die gemeldeten Werte von [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) und [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) enthalten wird.

```js
const output = document.getElementById("output");
const visualInfo = document.getElementById("visual-info");
const windowInfo = document.getElementById("window-info");
```

Als Nächstes definieren wir die beiden Schlüssel-Funktionen, die wir ausführen werden, wenn die Ereignisse ausgelöst werden:

- Die Funktion `scrollUpdater()` wird bei `resize` und `scroll` ausgeführt: Diese Funktion aktualisiert die Position der Informationsbox relativ zum visuellen Viewport, indem die Eigenschaften [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) und [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) abgefragt und ihre Werte verwendet werden, um die Werte der relevanten {{Glossary("inset_properties", "Inset-Eigenschaften")}} zu aktualisieren. Außerdem ändern wir die Hintergrundfarbe der Informationsbox, um anzuzeigen, dass etwas geschieht, und führen die Funktion `updateText()` aus, um die in der Box angezeigten Werte zu aktualisieren.
- Die Funktion `scrollEndUpdater()` wird bei `scrollend` ausgeführt: Diese Funktion stellt die ursprüngliche Farbe der Informationsbox wieder her und führt die Funktion `updateText()` aus, um sicherzustellen, dass die neuesten Werte bei `scrollend` angezeigt werden.

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

Die Funktion `updateText()` setzt den [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) des ersten Absatzes, um die aktuellen Werte von `VisualViewport.offsetLeft` und `VisualViewport.offsetTop` anzuzeigen, und den `HTMLElement.innerText` des zweiten Absatzes, um die aktuellen Werte von `Window.scrollX` und `Window.scrollY` anzuzeigen. Nachdem `updateText()` definiert wurde, wird es sofort aufgerufen, damit die Informationsbox beim Laden der Seite korrekt angezeigt wird.

```js
function updateText() {
  visualInfo.innerText = `Visual viewport left: ${visualViewport.offsetLeft.toFixed(2)}
    top: ${visualViewport.offsetTop.toFixed(2)}`;
  windowInfo.innerText = `Window scrollX: ${window.scrollX.toFixed(2)}
    scrollY: ${window.scrollY.toFixed(2)}`;
}

updateText();
```

Wir haben alle Werte auf zwei Dezimalstellen mit der Methode {{jsxref("Number.toFixed()")}} gekürzt, da einige Browser Unterpixel-Werte mit möglicherweise vielen Dezimalstellen rendern.

Jetzt setzen wir Ereignishandler-Eigenschaften sowohl für den visuellen Viewport als auch für das [`Window`](/de/docs/Web/API/Window)-Objekt, um die Schlüssel-Funktionen zur passenden Zeit sowohl auf Mobilgeräten als auch auf dem Desktop auszuführen:

- Wir setzen die Handler auf `window`, damit die Position und der Inhalt der Informationsbox bei konventionellen Scroll-Operationen des Fensters aktualisiert werden, beispielsweise beim Scrollen der Seite in einem Desktop-Browser.
- Wir setzen die Handler auf `visualViewport`, damit die Position und der Inhalt der Informationsbox bei Scroll- und Zoom-Operationen des visuellen Viewports aktualisiert werden, beispielsweise beim Scrollen und Zoomen der Seite in einem mobilen Browser.

```js
visualViewport.onresize = scrollUpdater;
visualViewport.onscroll = scrollUpdater;
visualViewport.onscrollend = scrollendUpdater;
window.onresize = scrollUpdater;
window.onscroll = scrollUpdater;
window.onscrollend = scrollendUpdater;
```

Die Funktion `scrollUpdater()` wird bei `resize` und `scroll` ausgeführt, während `scrollEndUpdater()` bei `scrollend` ausgeführt wird.

### Ausblenden einer überlagerten Box beim Zoomen

Dieses Beispiel, entnommen aus der [Visual Viewport README](https://github.com/WICG/visual-viewport), zeigt, wie man ein wenig Code schreibt, der eine überlagerte Box (die beispielsweise eine Werbung enthalten könnte) ausblendet, wenn der Benutzer hineinzoomt. Dies ist eine gute Möglichkeit, die Benutzererfahrung beim Zoomen auf Seiten zu verbessern. Ein [Live-Beispiel](https://wicg.github.io/visual-viewport/examples/hide-on-zoom.html) ist ebenfalls verfügbar.

```js
const bottomBar = document.getElementById("bottom-bar");
const viewport = window.visualViewport;

function resizeHandler() {
  bottomBar.style.display = viewport.scale > 1.3 ? "none" : "block";
}

window.visualViewport.addEventListener("resize", resizeHandler);
```

### Simulation von position: device-fixed

Dieses Beispiel, ebenfalls entnommen aus der [Visual Viewport README](https://github.com/WICG/visual-viewport), zeigt, wie diese API verwendet werden kann, um `position: device-fixed` zu simulieren, wodurch Elemente an den visuellen Viewport gebunden werden. Ein [Live-Beispiel](https://wicg.github.io/visual-viewport/examples/fixed-to-viewport.html) ist ebenfalls verfügbar.

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
> Diese Technik sollte mit Vorsicht verwendet werden; die Emulation von `position: device-fixed` auf diese Weise kann dazu führen, dass das fixierte Element während des Scrollens flackert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Viewports Explainer](https://github.com/bokand/bokand.github.io/blob/master/web_viewports_explainer.md) — nützliche Erklärung der Konzepte von Web-Viewports, einschließlich des Unterschieds zwischen visuellem Viewport und Layout-Viewport.
