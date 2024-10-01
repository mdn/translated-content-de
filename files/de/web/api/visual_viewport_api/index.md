---
title: Visual Viewport API
slug: Web/API/Visual_Viewport_API
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{DefaultAPISidebar("Visual Viewport")}}

Die **Visual Viewport API** bietet einen expliziten Mechanismus für das Abfragen und Ändern der Eigenschaften des Fensters im {{Glossary("visual_viewport", "visuellen Viewport")}}. Der visuelle Viewport ist der sichtbare Teil eines Bildschirms, ohne Bildschirmtastaturen, Bereiche außerhalb eines Pinch-Zoom-Bereichs oder andere Bildschirm-Artefakte, die nicht mit den Abmessungen einer Seite skalieren.

## Konzepte und Verwendung

Das mobile Web enthält zwei Viewports: den Layout-Viewport und den visuellen Viewport. Der Layout-Viewport umfasst alle Elemente auf einer Seite, der visuelle Viewport ist das, was tatsächlich auf dem Bildschirm sichtbar ist. Wenn der Benutzer in die Seite hineinzoomt, verkleinert sich der visuelle Viewport, während der Layout-Viewport unverändert bleibt. Benutzeroberflächenfunktionen wie die Bildschirmtastatur (OSK) können den visuellen Viewport verkleinern, ohne den Layout-Viewport zu beeinflussen.

Was passiert, wenn ein Webseitenelement auf dem Bildschirm sichtbar sein muss, unabhängig vom sichtbaren Teil einer Webseite? Zum Beispiel, wenn Sie möchten, dass eine Reihe von Bildsteuerelementen auf dem Bildschirm bleibt, unabhängig vom Pinch-Zoom-Level des Geräts? Aktuelle Browser variieren in der Handhabung solcher Fälle. Der visuelle Viewport ermöglicht es Webentwicklern, dieses Problem zu lösen, indem sie Elemente relativ zu dem positionieren, was auf dem Bildschirm angezeigt wird.

Um auf den visuellen Viewport eines Fensters zuzugreifen, können Sie ein [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Objekt von der [`window.visualViewport`](/de/docs/Web/API/Window/visualViewport)-Eigenschaft abrufen. Das Objekt enthält eine Reihe von Eigenschaften, die den Viewport beschreiben. Es fügt auch drei Ereignisse hinzu: [`resize`](/de/docs/Web/API/VisualViewport/resize_event), [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event) und [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event), die ausgelöst werden, wenn der visuelle Viewport in der Größe verändert, gescrollt oder das Scrollen abgeschlossen ist.

Die ersten beiden Ereignisse erlauben es Ihnen, Elemente relativ zum visuellen Viewport zu positionieren, während es gescrollt oder gezoomt wird, was normalerweise dem Layout-Viewport verankert wäre. Das `scrollend`-Ereignis erlaubt es Ihnen, ein Element zu aktualisieren, wenn ein Scrollvorgang abgeschlossen ist. Zum Beispiel können Sie diese Ereignisse nutzen, um ein Element fest mit dem visuellen Viewport zu verankern, während es gezoomt und gescrollt wird, und es zu aktualisieren, wenn das Scrollen endet.

## Schnittstellen

- [`VisualViewport`](/de/docs/Web/API/VisualViewport)
  - : Repräsentiert den visuellen Viewport für ein bestimmtes Fenster. Das `VisualViewport`-Objekt eines Fensters bietet Informationen über die Position und Größe des Viewports und empfängt die Ereignisse [`resize`](/de/docs/Web/API/VisualViewport/resize_event), [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event) und [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event).

### Erweiterungen zu anderen Schnittstellen

- [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) {{ReadOnlyInline}}
  - : Ein schreibgeschützter Verweis auf das `VisualViewport`-Objekt des Fensters. Wenn diese Eigenschaft nicht existiert, wird die API nicht unterstützt.

## Beispiele

Unser [Beispiel zur Visual Viewport API](https://mdn.github.io/dom-examples/visual-viewport-api/) bietet eine grundlegende Demonstration, wie die verschiedenen Funktionen des visuellen Viewports arbeiten, einschließlich der drei Ereignistypen. Laden Sie die Seite in unterstützende Desktop- und mobile Browser und versuchen Sie, durch die Seite zu scrollen und zu zoomen. Bei `resize` und `scroll` wird die Informationsbox neu positioniert, um die gleiche Position relativ zum visuellen Viewport beizubehalten, und die darin angezeigten Viewport- und Scrollinformationen werden aktualisiert. Außerdem ändern wir bei `resize` und `scroll` die Boxfarbe, um anzuzeigen, dass etwas passiert, und stellen sie bei `scrollend` wieder zurück.

Sie werden feststellen, dass bei Desktop-Browsern die Werte von [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) und [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) aktualisiert werden, während das Fenster gescrollt wird – die Position des visuellen Viewports ändert sich nicht. Bei mobilen Browsern hingegen werden in der Regel die Werte von [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) und [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) aktualisiert – normalerweise ändert sich der visuelle Viewport und nicht die Fensterposition.

Der folgende HTML-Code zeigt das Beispiel. Die Informationsbox wird durch ein {{htmlelement("div")}} mit einer `id` von `output` dargestellt.

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

Wir erklären das CSS des Beispiels aus Gründen der Kürze nicht – es ist zum Verständnis der Demo nicht wichtig. Sie können es über den obigen Beispiel-Link einsehen.

Im JavaScript beginnen wir, indem wir Referenzen auf die Informationsbox abrufen, die wir aktualisieren werden, während die Seite gezoomt und gescrollt wird, sowie auf die beiden darin enthaltenen Absätze. Der erste wird berichtete Werte von [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) und [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) enthalten, während der zweite gemeldete Werte von [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) und [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) enthalten wird.

```js
const output = document.getElementById("output");
const visualInfo = document.getElementById("visual-info");
const windowInfo = document.getElementById("window-info");
```

Als nächstes definieren wir die beiden Schlüsselfunktionen, die wir ausführen, wenn die Ereignisse ausgelöst werden:

- `scrollUpdater()` wird bei `resize` und `scroll` ausgelöst: Diese Funktion aktualisiert die Position der Informationsbox relativ zum visuellen Viewport, indem sie die Eigenschaften [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) und [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) abfragt und deren Werte verwendet, um die Werte der relevanten {{Glossary("inset_properties", "Einpassungseigenschaften")}} zu aktualisieren. Wir ändern auch die Hintergrundfarbe der Informationsbox, um anzuzeigen, dass etwas passiert, und führen die `updateText()`-Funktion aus, um die angezeigten Werte in der Box zu aktualisieren.
- Die `scrollEndUpdater()`-Funktion wird bei `scrollend` ausgelöst: Diese stellt die ursprüngliche Farbe der Informationsbox wieder her und führt die `updateText()`-Funktion aus, um sicherzustellen, dass die neuesten Werte bei `scrollend` angezeigt werden.

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

Die `updateText()`-Funktion sieht wie folgt aus – sie setzt den [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) des ersten Absatzes, um die aktuellen Werte von `VisualViewport.offsetLeft` und `VisualViewport.offsetTop` anzuzeigen, und den `HTMLElement.innerText` des zweiten Absatzes, um die aktuellen Werte von `Window.scrollX` und `Window.scrollY` anzuzeigen. Nachdem wir `updateText()` definiert haben, rufen wir es sofort auf, damit die Informationsbox beim Laden der Seite korrekt angezeigt wird.

```js
function updateText() {
  visualInfo.innerText = `Visual viewport left: ${visualViewport.offsetLeft.toFixed(2)}
    top: ${visualViewport.offsetTop.toFixed(2)}`;
  windowInfo.innerText = `Window scrollX: ${window.scrollX.toFixed(2)}
    scrollY: ${window.scrollY.toFixed(2)}`;
}

updateText();
```

> [!NOTE]
> Wir kürzen alle Werte mit der Methode {{jsxref("Number.toFixed()")}} auf zwei Dezimalstellen, da einige Browser sie als Subpixelwert mit potenziell vielen Dezimalstellen anzeigen können.

Nun setzen wir Ereignishandlereigenschaften sowohl für das visuelle Viewport- als auch für das [`Window`](/de/docs/Web/API/Window)-Objekt, um die Schlüsselfunktionen zu den entsprechenden Zeiten sowohl auf mobilen als auch auf Desktop-Geräten auszuführen:

- Wir setzen die Handler auf `window`, damit die Informationsbox-Position und die Inhalte bei konventionellen Fensterscrolloperationen aktualisiert werden, beispielsweise wenn Sie die Seite in einem Desktop-Browser scrollen.
- Wir setzen die Handler auf `visualViewport`, damit die Informationsbox-Position und die Inhalte bei Scroll-/Zoomoperationen des visuellen Viewports aktualisiert werden, beispielsweise wenn Sie die Seite in einem mobilen Browser scrollen und zoomen.

```js
visualViewport.onresize = scrollUpdater;
visualViewport.onscroll = scrollUpdater;
visualViewport.onscrollend = scrollendUpdater;
window.onresize = scrollUpdater;
window.onscroll = scrollUpdater;
window.onscrollend = scrollendUpdater;
```

`scrollUpdater()` wird bei `resize` und `scroll` ausgelöst, während `scrollEndUpdater()` bei `scrollend` ausgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
