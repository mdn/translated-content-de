---
title: VisualViewport
slug: Web/API/VisualViewport
l10n:
  sourceCommit: 35be74828a1a06cdd0a1bf0a20c16d29b8adb11f
---

{{APIRef("CSSOM view API")}}

Die **`VisualViewport`**-Schnittstelle der [CSSOM view API](/de/docs/Web/API/CSSOM_view_API) repräsentiert das visuelle Viewport für ein bestimmtes Fenster. Für eine Seite, die Frames enthält, besitzt jedes {{htmlelement("iframe")}} sowie die enthaltene Seite ein einzigartiges Fensterobjekt. Jedes Fenster auf einer Seite hat ein einzigartiges `VisualViewport`, welches die zu diesem Fenster gehörenden Eigenschaften darstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) {{ReadOnlyInline}}
  - : Gibt den Versatz der linken Kante des visuellen Viewports von der linken Kante des Layout-Viewports in CSS-Pixels zurück.
- [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) {{ReadOnlyInline}}
  - : Gibt den Versatz der oberen Kante des visuellen Viewports von der oberen Kante des Layout-Viewports in CSS-Pixels zurück.
- [`VisualViewport.pageLeft`](/de/docs/Web/API/VisualViewport/pageLeft) {{ReadOnlyInline}}
  - : Gibt die x-Koordinate des visuellen Viewports relativ zum Ursprungsblock der oberen Kante in CSS-Pixels zurück.
- [`VisualViewport.pageTop`](/de/docs/Web/API/VisualViewport/pageTop) {{ReadOnlyInline}}
  - : Gibt die y-Koordinate des visuellen Viewports relativ zum Ursprungsblock der oberen Kante in CSS-Pixels zurück.
- [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) {{ReadOnlyInline}}
  - : Gibt die Breite des visuellen Viewports in CSS-Pixels zurück.
- [`VisualViewport.height`](/de/docs/Web/API/VisualViewport/height) {{ReadOnlyInline}}
  - : Gibt die Höhe des visuellen Viewports in CSS-Pixels zurück.
- [`VisualViewport.scale`](/de/docs/Web/API/VisualViewport/scale) {{ReadOnlyInline}}
  - : Gibt den Pinch-Zoom-Skalierungsfaktor zurück, der auf das visuelle Viewport angewendet wird.

## Instanzmethoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Events

Hören Sie diese Events ab, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden oder einen Event-Listener der entsprechenden `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`resize`](/de/docs/Web/API/VisualViewport/resize_event)
  - : Wird ausgelöst, wenn das visuelle Viewport geändert wird.
    Auch über die `onresize`-Eigenschaft verfügbar.
- [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)
  - : Wird ausgelöst, wenn das visuelle Viewport gescrollt wird.
    Auch über die `onscroll`-Eigenschaft verfügbar.
- [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event)
  - : Wird ausgelöst, wenn eine Scroll-Operation auf dem visuellen Viewport endet.
    Auch über die `onscrollend`-Eigenschaft verfügbar.

## Beschreibung

Das mobile Web enthält zwei Viewports: den Layout-Viewport und das visuelle Viewport. Der Layout-Viewport umfasst alle Elemente auf einer Seite, und das visuelle Viewport ist das, was tatsächlich auf dem Bildschirm sichtbar ist. Wenn der Benutzer in die Seite hineinzoomt, schrumpft das visuelle Viewport, während das Layout-Viewport unverändert bleibt. Benutzeroberflächenmerkmale wie die Bildschirmtastatur (OSK) können das visuelle Viewport ohne Einfluss auf das Layout-Viewport verkleinern.

Was passiert, wenn ein Seitenelement unabhängig vom sichtbaren Teil einer Webseite auf dem Bildschirm sichtbar bleiben muss? Was ist zum Beispiel, wenn Sie eine Gruppe von Bildkontrollen benötigen, die unabhängig vom Zoom-Level des Geräts auf dem Bildschirm bleiben? Aktuelle Browser variieren in der Handhabung dieser Situationen. Das visuelle Viewport ermöglicht es Webentwicklern, dies zu lösen, indem Elemente relativ zu dem angezeigt werden, was auf dem Bildschirm zu sehen ist.

Sie können das visuelle Viewport eines Fensters mit [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) erhalten.

> [!NOTE]
> Nur das oberste Fenster hat ein visuelles Viewport, das sich vom Layout-Viewport unterscheidet.
> Daher ist im Allgemeinen nur das `VisualViewport`-Objekt des obersten Fensters nützlich.
> Bei einem {{htmlelement("iframe")}} entsprechen visuelle Viewportmetriken wie [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) immer den Layout-Viewportmetriken wie [`document.documentElement.clientWidth`](/de/docs/Web/API/Element/clientWidth).

## Beispiele

### Erhalten von Informationen zum visuellen Viewport während des Scrollens und Zoomens

Unser [visuelles Viewport](https://mdn.github.io/dom-examples/visual-viewport-api/)-Beispiel bietet eine grundlegende Demonstration, wie die verschiedenen Funktionen des visuellen Viewports funktionieren, einschließlich der drei Event-Typen. Laden Sie die Seite in unterstützenden Desktop- und Mobilbrowsern und versuchen Sie, auf der Seite zu scrollen und zu zoomen. Bei `resize` und `scroll` wird die Informationsbox neu positioniert, um die gleiche Position relativ zum visuellen Viewport beizubehalten, und die darin angezeigten Viewport- und Scrollinformationen werden aktualisiert. Ebenfalls bei `resize` und `scroll` ändern wir die Farbe der Box, um anzuzeigen, dass etwas passiert, und setzen sie bei `scrollend` zurück.

Sie werden feststellen, dass auf Desktoppbrowsern die Werte von [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) und [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) während der Scrollen des Fensters aktualisiert werden – die Position des visuellen Viewports ändert sich nicht. Auf mobilen Browsern werden jedoch im Allgemeinen die Werte von [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) und [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) aktualisiert – es ist normalerweise der visuelle Viewport, der sich ändert, anstatt der Fensterposition.

Im Beispiel wird die HTML-Informationsbox durch ein {{htmlelement("div")}} mit einer `id` von `output` repräsentiert, während das CSS der Kürze halber verborgen bleibt.

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

Im JavaScript beginnen wir damit, Referenzen zur Informationsbox zu erhalten, die wir beim Zoomen und Scrollen der Seite aktualisieren werden, sowie zu den zwei darin enthaltenen Absätzen. Der erste wird die gemeldeten Werte [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) und [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) enthalten, während der zweite die gemeldeten Werte [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) und [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) anzeigen wird.

```js
const output = document.getElementById("output");
const visualInfo = document.getElementById("visual-info");
const windowInfo = document.getElementById("window-info");
```

Als Nächstes definieren wir die zwei Hauptfunktionen, die ausgeführt werden, wenn die Events ausgelöst werden:

- Die `scrollUpdater()`-Funktion wird bei `resize` und `scroll` ausgeführt: Diese Funktion aktualisiert die Position der Informationsbox relativ zum visuellen Viewport, indem sie die Eigenschaften [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) und [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) abfragt und deren Werte verwendet, um die relevanten {{Glossary("inset_properties", "inset properties")}} zu aktualisieren. Außerdem ändern wir die Hintergrundfarbe der Informationsbox, um anzuzeigen, dass etwas passiert, und führen die `updateText()`-Funktion aus, um die in der Box angezeigten Werte zu aktualisieren.
- Die `scrollEndUpdater()`-Funktion wird bei `scrollend` ausgelöst: Diese Funktion setzt die Informationsbox auf ihre ursprüngliche Farbe zurück und führt die `updateText()`-Funktion aus, um sicherzustellen, dass die neuesten Werte bei `scrollend` angezeigt werden.

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

Die `updateText()`-Funktion setzt die [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) des ersten Absatzes, um die aktuellen Werte von `VisualViewport.offsetLeft` und `VisualViewport.offsetTop` anzuzeigen, und die `HTMLElement.innerText` des zweiten Absatzes, um die aktuellen Werte von `Window.scrollX` und `Window.scrollY` anzuzeigen. Nach der Definition von `updateText()` rufen wir sie sofort auf, damit die Informationsbox bei Seitenaufruf korrekt angezeigt wird.

```js
function updateText() {
  visualInfo.innerText = `Visual viewport left: ${visualViewport.offsetLeft.toFixed(2)}
    top: ${visualViewport.offsetTop.toFixed(2)}`;
  windowInfo.innerText = `Window scrollX: ${window.scrollX.toFixed(2)}
    scrollY: ${window.scrollY.toFixed(2)}`;
}

updateText();
```

Wir haben alle Werte auf zwei Dezimalstellen mithilfe der {{jsxref("Number.toFixed()")}}-Methode gekürzt, da einige Browser Subpixel-Werte mit möglicherweise vielen Dezimalstellen rendern.

Nun setzen wir Event-Handler-Eigenschaften sowohl am visuellen Viewport als auch am [`Window`](/de/docs/Web/API/Window)-Objekt, um die Hauptfunktionen zu den entsprechenden Zeitpunkten sowohl auf mobilen als auch auf Desktopgeräten auszuführen:

- Wir setzen die Handler auf `window`, sodass die Position und der Inhalt der Informationsbox bei konventionellen Fenster-Scroll-Vorgängen aktualisiert werden, z. B. wenn Sie die Seite in einem Desktopbrowser scrollen.
- Wir setzen die Handler auf `visualViewport`, sodass die Position und der Inhalt der Informationsbox bei Scroll- und Zoom-Vorgängen im visuellen Viewport aktualisiert werden, z. B. wenn Sie die Seite auf einem mobilen Browser scrollen und zoomen.

```js
visualViewport.onresize = scrollUpdater;
visualViewport.onscroll = scrollUpdater;
visualViewport.onscrollend = scrollendUpdater;
window.onresize = scrollUpdater;
window.onscroll = scrollUpdater;
window.onscrollend = scrollendUpdater;
```

Die Funktion `scrollUpdater()` wird bei `resize` und `scroll` ausgelöst, während `scrollEndUpdater()` bei `scrollend` ausgelöst wird.

### Eine überlagerte Box beim Zoom verbergen

Dieses Beispiel, entnommen aus dem [Visual Viewport README](https://github.com/WICG/visual-viewport), zeigt, wie Sie ein wenig Code schreiben, der eine überlagerte Box (die zum Beispiel eine Anzeige enthalten könnte) ausblendet, wenn der Benutzer heranzoomt. Dies ist eine schöne Möglichkeit, die Benutzererfahrung beim Zoom auf Seiten zu verbessern. Eine [Live-Demo](https://wicg.github.io/visual-viewport/examples/hide-on-zoom.html) ist ebenfalls verfügbar.

```js
const bottomBar = document.getElementById("bottom-bar");
const viewport = window.visualViewport;

function resizeHandler() {
  bottomBar.style.display = viewport.scale > 1.3 ? "none" : "block";
}

window.visualViewport.addEventListener("resize", resizeHandler);
```

### `position: device-fixed` simulieren

Dieses Beispiel, ebenfalls aus dem [Visual Viewport README](https://github.com/WICG/visual-viewport), zeigt, wie diese API genutzt wird, um `position: device-fixed` zu simulieren, wodurch Elemente an das visuelle Viewport fixiert werden. Eine [Live-Demo](https://wicg.github.io/visual-viewport/examples/fixed-to-viewport.html) ist ebenfalls verfügbar.

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

- [Web Viewports Explainer](https://github.com/bokand/bokand.github.io/blob/master/web_viewports_explainer.md) — nützliche Erklärung von Konzepten zu Web-Viewports, einschließlich des Unterschieds zwischen visuellem Viewport und Layout-Viewport.
