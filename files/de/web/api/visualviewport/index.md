---
title: VisualViewport
slug: Web/API/VisualViewport
l10n:
  sourceCommit: 4d1121972ed8c33a0d539c72ef1ecccb068343ed
---

{{APIRef("CSSOM view API")}}

Das **`VisualViewport`**-Interface der [CSSOM view API](/de/docs/Web/API/CSSOM_view_API) repräsentiert den visuellen Viewport für ein gegebenes Fenster. Für eine Seite, die Frames enthält, wird jedes {{htmlelement("iframe")}}, ebenso wie die enthaltene Seite, ein eigenes Fensterobjekt haben. Jedes Fenster auf einer Seite hat ein einzigartiges `VisualViewport`, das die Eigenschaften repräsentiert, die mit diesem Fenster verbunden sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) {{ReadOnlyInline}}
  - : Gibt den Versatz des linken Randes des visuellen Viewports vom linken Rand des Layout-Viewports in CSS-Pixeln zurück.
- [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) {{ReadOnlyInline}}
  - : Gibt den Versatz des oberen Randes des visuellen Viewports vom oberen Rand des Layout-Viewports in CSS-Pixeln zurück.
- [`VisualViewport.pageLeft`](/de/docs/Web/API/VisualViewport/pageLeft) {{ReadOnlyInline}}
  - : Gibt die x-Koordinate des visuellen Viewports relativ zum Ursprung des initialen beinhaltenden Blocks des oberen Randes in CSS-Pixeln zurück.
- [`VisualViewport.pageTop`](/de/docs/Web/API/VisualViewport/pageTop) {{ReadOnlyInline}}
  - : Gibt die y-Koordinate des visuellen Viewports relativ zum Ursprung des initialen beinhaltenden Blocks des oberen Randes in CSS-Pixeln zurück.
- [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) {{ReadOnlyInline}}
  - : Gibt die Breite des visuellen Viewports in CSS-Pixeln zurück.
- [`VisualViewport.height`](/de/docs/Web/API/VisualViewport/height) {{ReadOnlyInline}}
  - : Gibt die Höhe des visuellen Viewports in CSS-Pixeln zurück.
- [`VisualViewport.scale`](/de/docs/Web/API/VisualViewport/scale) {{ReadOnlyInline}}
  - : Gibt den durch Pinch-Zoom angewendeten Skalierungsfaktor auf den visuellen Viewport zurück.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der relevanten `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`resize`](/de/docs/Web/API/VisualViewport/resize_event)
  - : Wird ausgelöst, wenn der visuelle Viewport geändert wird.
    Auch über die `onresize`-Eigenschaft verfügbar.
- [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)
  - : Wird ausgelöst, wenn der visuelle Viewport gescrollt wird.
    Auch über die `onscroll`-Eigenschaft verfügbar.
- [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event)
  - : Wird ausgelöst, wenn ein Scroll-Vorgang auf dem visuellen Viewport endet.
    Auch über die `onscrollend`-Eigenschaft verfügbar.

## Beschreibung

Das mobile Web enthält zwei Viewports, den Layout-Viewport und den visuellen Viewport. Der Layout-Viewport umfasst alle Elemente auf einer Seite und der visuelle Viewport ist das, was tatsächlich auf dem Bildschirm sichtbar ist. Wenn der Benutzer in die Seite hineinzoomt, verkleinert sich der visuelle Viewport, aber der Layout-Viewport bleibt unverändert. Benutzeroberflächenmerkmale wie die Bildschirmtastatur (OSK) können den visuellen Viewport verkleinern, ohne den Layout-Viewport zu beeinflussen.

Was passiert, wenn ein Webseiten-Element unbedingt auf dem Bildschirm sichtbar sein muss, unabhängig von dem sichtbaren Teil einer Webseite? Zum Beispiel, wenn Sie ein Set von Bildsteuerungen benötigen, das auf dem Bildschirm bleibt, unabhängig vom Zoom-Level des Geräts? Aktuelle Browser variieren, wie sie dies handhaben. Der visuelle Viewport ermöglicht es Webentwicklern, dies zu lösen, indem sie Elemente relativ zu dem auf dem Bildschirm Gezeigten positionieren.

Sie können den visuellen Viewport eines Fensters mit [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) abrufen.

> [!NOTE]
> Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheidet.
> Daher ist im Allgemeinen nur das `VisualViewport`-Objekt des obersten Fensters nützlich.
> Für ein {{htmlelement("iframe")}} entsprechen visuelle Viewport-Metriken wie [`VisualViewport.width`](/de/docs/Web/API/VisualViewport/width) immer Layout-Viewport-Metriken wie [`document.documentElement.clientWidth`](/de/docs/Web/API/Element/clientWidth).

## Beispiele

### Informationen über den visuellen Viewport während des Scrollens und Zoomens abrufen

Unser [visueller Viewport](https://mdn.github.io/dom-examples/visual-viewport-api/)-Beispiel bietet eine grundlegende Demonstration, wie die verschiedenen Funktionen des visuellen Viewports funktionieren, einschließlich der drei Ereignistypen. Laden Sie die Seite in unterstützenden Desktop- und mobilen Browsern und versuchen Sie, auf der Seite zu scrollen und zu zoomen. Bei `resize` und `scroll` wird das Informationsfeld neu positioniert, um die gleiche Position relativ zum visuellen Viewport beizubehalten, und die darin angezeigten Viewport- und Scroll-Informationen werden aktualisiert. Auch bei `resize` und `scroll` ändern wir die Boxfarbe, um anzuzeigen, dass etwas passiert, und ändern sie zurück bei `scrollend`.

Sie werden feststellen, dass in Desktop-Browsern die Werte von [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) und [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) aktualisiert werden, wenn das Fenster gescrollt wird - die Position des visuellen Viewports ändert sich nicht. In mobilen Browsern hingegen werden in der Regel die Werte von [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) und [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) aktualisiert - normalerweise ändert sich der visuelle Viewport anstatt die Fensterposition.

Im Beispiel wird die HTML-Informationsbox durch ein {{htmlelement("div")}} mit einer `id` von `output` dargestellt, während das CSS zur Kürze verborgen bleibt.

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

Im JavaScript beginnen wir damit, Referenzen auf die Informationsbox zu erhalten, die wir aktualisieren, während die Seite gezoomt und gescrollt wird, sowie auf die beiden darin enthaltenen Absätze. Der erste enthält die gemeldeten Werte von [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) und [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop), während der zweite die gemeldeten Werte von [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) und [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) enthält.

```js
const output = document.getElementById("output");
const visualInfo = document.getElementById("visual-info");
const windowInfo = document.getElementById("window-info");
```

Als nächstes definieren wir die zwei Hauptfunktionen, die bei den Ereignissen ausgeführt werden:

- Die `scrollUpdater()`-Funktion wird auf `resize` und `scroll` ausgeführt: Diese Funktion aktualisiert die Position der Informationsbox relativ zum visuellen Viewport, indem sie die [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop)- und [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft)-Eigenschaften abfragt und deren Werte verwendet, um die Werte der relevanten {{Glossary("inset_properties", "Einsetz-Eigenschaften")}} zu aktualisieren. Wir ändern auch die Hintergrundfarbe der Informationsbox, um anzuzeigen, dass etwas passiert, und führen die Funktion `updateText()` aus, um die in der Box angezeigten Werte zu aktualisieren.
- Die `scrollEndUpdater()`-Funktion wird auf `scrollend` ausgeführt: Diese bringt die Informationsbox zu ihrer ursprünglichen Farbe zurück und führt die Funktion `updateText()` aus, um sicherzustellen, dass die neuesten Werte bei `scrollend` angezeigt werden.

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

Die `updateText()`-Funktion setzt die [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) des ersten Absatzes, um die aktuellen `VisualViewport.offsetLeft`- und `VisualViewport.offsetTop`-Werte anzuzeigen, und die `HTMLElement.innerText` des zweiten Absatzes, um die aktuellen `Window.scrollX`- und `Window.scrollY`-Werte anzuzeigen. Nach der Definition von `updateText()` rufen wir sie sofort auf, damit die Informationsbox beim Laden der Seite korrekt angezeigt wird.

```js
function updateText() {
  visualInfo.innerText = `Visual viewport left: ${visualViewport.offsetLeft.toFixed(2)}
    top: ${visualViewport.offsetTop.toFixed(2)}`;
  windowInfo.innerText = `Window scrollX: ${window.scrollX.toFixed(2)}
    scrollY: ${window.scrollY.toFixed(2)}`;
}

updateText();
```

Wir haben alle Werte auf zwei Dezimalstellen gekürzt, indem wir die Methode {{jsxref("Number.toFixed()")}} verwendet haben, da einige Browser Subpixelwerte mit möglicherweise vielen Dezimalstellen rendern.

Nun setzen wir Ereignishandler-Eigenschaften sowohl auf dem visuellen Viewport als auch auf dem [`Window`](/de/docs/Web/API/Window)-Objekt, um die Hauptfunktionen zu den geeigneten Zeiten auf mobilen und Desktop-Geräten auszuführen:

- Wir setzen die Handler auf `window`, damit die Position und der Inhalt der Informationsbox bei herkömmlichen Fenster-Scrolling-Vorgängen aktualisiert werden, z.B. wenn Sie die Seite in einem Desktop-Browser scrollen.
- Wir setzen die Handler auf `visualViewport`, damit die Position und der Inhalt der Informationsbox bei Scroll- bzw. Zoom-Vorgängen des visuellen Viewports aktualisiert werden, z.B. wenn Sie in einem mobilen Browser die Seite scrollen und zoomen.

```js
visualViewport.onresize = scrollUpdater;
visualViewport.onscroll = scrollUpdater;
visualViewport.onscrollend = scrollendUpdater;
window.onresize = scrollUpdater;
window.onscroll = scrollUpdater;
window.onscrollend = scrollendUpdater;
```

Die `scrollUpdater()`-Funktion wird auf `resize` und `scroll` ausgeführt, während `scrollEndUpdater()` auf `scrollend` ausgeführt wird.

### Eine überlagerte Box beim Zoomen ausblenden

Dieses Beispiel, das aus dem [Visual Viewport README](https://github.com/WICG/visual-viewport) stammt, zeigt, wie man ein wenig Code schreiben kann, der eine überlagerte Box (die z.B. eine Werbung enthalten könnte) ausblendet, wenn der Benutzer hineinzoomt. Dies ist eine gute Möglichkeit, das Benutzererlebnis beim Zoom auf Seiten zu verbessern. Der [vollständige Beispielcode](https://github.com/WICG/visual-viewport/blob/gh-pages/examples/hide-on-zoom.html) ist ebenfalls verfügbar.

```js
const bottomBar = document.getElementById("bottom-bar");
const viewport = window.visualViewport;

function resizeHandler() {
  bottomBar.style.display = viewport.scale > 1.3 ? "none" : "block";
}

window.visualViewport.addEventListener("resize", resizeHandler);
```

### Position: device-fixed simulieren

Dieses Beispiel, ebenfalls aus dem [Visual Viewport README](https://github.com/WICG/visual-viewport) entnommen, zeigt, wie diese API genutzt werden kann, um `position: device-fixed` zu simulieren, das Elemente am visuellen Viewport fixiert. Der [vollständige Beispielcode](https://github.com/WICG/visual-viewport/blob/gh-pages/examples/fixed-to-viewport.html) ist ebenfalls verfügbar.

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

- [Web Viewports Erklärer](https://github.com/bokand/bokand.github.io/blob/master/web_viewports_explainer.md) — nützliche Erklärung der Web-Viewport-Konzepte, einschließlich des Unterschieds zwischen visuellem Viewport und Layout-Viewport.
