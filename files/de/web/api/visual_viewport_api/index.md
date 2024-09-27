---
title: Visual Viewport API
slug: Web/API/Visual_Viewport_API
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{DefaultAPISidebar("Visual Viewport")}}

Die **Visual Viewport API** bietet einen expliziten Mechanismus zum Abfragen und Ändern der Eigenschaften des [visual viewport](/de/docs/Glossary/visual_viewport) des Fensters. Der visual viewport ist der sichtbare Teil eines Bildschirms, der Bildschirmtastaturen, Bereiche außerhalb eines Pinch-Zoom-Bereichs oder andere Bildschirmartefakte, die nicht mit den Abmessungen einer Seite skalieren, ausschließt.

## Konzepte und Verwendung

Das mobile Web enthält zwei Viewports, den layout viewport und den visual viewport. Der layout viewport deckt alle Elemente auf einer Seite ab, während der visual viewport das ist, was tatsächlich auf dem Bildschirm sichtbar ist. Wenn der Benutzer in die Seite hineinzoomt, verkleinert sich der visual viewport, aber der layout viewport bleibt unverändert. Benutzeroberflächenmerkmale wie die Bildschirmtastatur (OSK) können den visual viewport verkleinern, ohne den layout viewport zu beeinflussen.

Was passiert, wenn ein Element einer Webseite auf dem Bildschirm sichtbar sein muss, unabhängig vom sichtbaren Teil einer Webseite? Zum Beispiel, was passiert, wenn Sie eine Reihe von Bildsteuerungen benötigen, die auf dem Bildschirm bleiben müssen, unabhängig vom Zoomlevel des Geräts? Aktuelle Browser verhalten sich unterschiedlich in Bezug auf diese Situation. Der visual viewport ermöglicht es Webentwicklern, dieses Problem zu lösen, indem Elemente relativ zum angezeigten Bildschirm positioniert werden.

Um auf den visual viewport eines Fensters zuzugreifen, können Sie ein [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Objekt von der [`window.visualViewport`](/de/docs/Web/API/Window/visualViewport)-Eigenschaft erhalten. Das Objekt enthält eine Reihe von Eigenschaften, die den Viewport beschreiben. Es fügt auch drei Ereignisse hinzu, [`resize`](/de/docs/Web/API/VisualViewport/resize_event), [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event) und [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event), die auftreten, wenn der visual viewport geändert wird, scrollt und eine Scroll-Aktion abgeschlossen wurde.

Die ersten beiden Ereignisse erlauben es Ihnen, Elemente relativ zum visual viewport zu positionieren, wenn er gescrollt oder gezoomt wird, was normalerweise am layout viewport verankert wäre. Das `scrollend`-Ereignis ermöglicht es Ihnen, ein Element zu aktualisieren, wenn eine Scroll-Aktion abgeschlossen ist. Beispielsweise können Sie diese Ereignisse verwenden, um ein Element fest mit dem visual viewport zu verankern, während es hineingezoomt und gescrollt wird, und es zu aktualisieren, wenn das Scrollen endet.

## Schnittstellen

- [`VisualViewport`](/de/docs/Web/API/VisualViewport)
  - : Stellt den visual viewport für ein bestimmtes Fenster dar. Ein `VisualViewport`-Objekt eines Fensters bietet Informationen über die Position und Größe des Viewports und empfängt die [`resize`](/de/docs/Web/API/VisualViewport/resize_event), [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event) und [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event) Ereignisse.

### Erweiterungen zu anderen Schnittstellen

- [`Window.visualViewport`](/de/docs/Web/API/Window/visualViewport) {{ReadOnlyInline}}
  - : Ein schreibgeschützter Verweis auf das [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Objekt des Fensters. Wenn diese Eigenschaft nicht existiert, wird die API nicht unterstützt.

## Beispiele

Unser [Visual Viewport API](https://mdn.github.io/dom-examples/visual-viewport-api/)-Beispiel bietet eine grundlegende Demonstration, wie die verschiedenen Funktionen des visual viewport funktionieren, einschließlich der drei Ereignistypen. Laden Sie die Seite in unterstützten Desktop- und mobilen Browsern und versuchen Sie, auf der Seite zu scrollen und einzugruppen. Bei `resize` und `scroll` wird das Informationsfeld repositioniert, um dieselbe Position relativ zum visual viewport beizubehalten, und die angezeigten Ansichts- und Scrollinformationen werden aktualisiert. Auch bei `resize` und `scroll` ändern wir die Farbe des Feldes, um anzuzeigen, dass etwas passiert, und ändern sie bei `scrollend` zurück.

Sie werden feststellen, dass bei Desktop-Browsern die Werte von [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) und [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) aktualisiert werden, wenn das Fenster gescrollt wird — die Position des visual viewport ändert sich nicht. In mobilen Browsern hingegen werden die Werte von [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) und [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) im Allgemeinen aktualisiert — normalerweise ist es der visual viewport, der sich ändert, anstatt der Fensterposition.

Das Beispiel-HTML kann unten gesehen werden. Das Informationsfeld wird durch ein {{htmlelement("div")}} mit einer `id` von `output` dargestellt.

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

Aus Gründen der Kürze erklären wir das CSS des Beispiels nicht — es ist nicht wichtig, um die Demo zu verstehen. Sie können es über den obigen Beispiel-Link überprüfen.

Im JavaScript beginnen wir damit, Verweise auf das Informationsfeld zu erhalten, das wir aktualisieren werden, während die Seite gezoomt und gescrollt wird, sowie auf die beiden darin enthaltenen Absätze. Der erste enthält die gemeldeten Werte von [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) und [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop), während der zweite die gemeldeten Werte von [`Window.scrollX`](/de/docs/Web/API/Window/scrollX) und [`Window.scrollY`](/de/docs/Web/API/Window/scrollY) enthält.

```js
const output = document.getElementById("output");
const visualInfo = document.getElementById("visual-info");
const windowInfo = document.getElementById("window-info");
```

Als nächstes definieren wir die beiden Schlüsselfunktionen, die wir ausführen werden, wenn die Ereignisse ausgelöst werden:

- `scrollUpdater()` wird bei `resize` und `scroll` ausgelöst: Diese Funktion aktualisiert die Position des Informationsfeldes relativ zum visual viewport, indem die Eigenschaften [`VisualViewport.offsetTop`](/de/docs/Web/API/VisualViewport/offsetTop) und [`VisualViewport.offsetLeft`](/de/docs/Web/API/VisualViewport/offsetLeft) abgefragt werden und ihre Werte verwendet werden, um die relevanten [inset properties](/de/docs/Glossary/inset_properties) zu aktualisieren. Wir ändern auch die Hintergrundfarbe des Informationsfeldes, um anzuzeigen, dass etwas passiert, und führen die Funktion `updateText()` aus, um die im Feld angezeigten Werte zu aktualisieren.
- Die Funktion `scrollEndUpdater()` wird bei `scrollend` ausgelöst: Diese Funktion stellt die ursprüngliche Farbe des Informationsfeldes wieder her und führt die Funktion `updateText()` aus, um sicherzustellen, dass die neuesten Werte bei `scrollend` angezeigt werden.

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

Die Funktion `updateText()` sieht so aus — sie setzt den [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) des ersten Absatzes, um die aktuellen Werte von `VisualViewport.offsetLeft` und `VisualViewport.offsetTop` anzuzeigen, und den `HTMLElement.innerText` des zweiten Absatzes, um die aktuellen Werte von `Window.scrollX` und `Window.scrollY` anzuzeigen. Nachdem `updateText()` definiert ist, rufen wir es sofort auf, damit das Informationsfeld beim Laden der Seite korrekt angezeigt wird.

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
> Wir runden alle Werte auf zwei Dezimalstellen mit der Methode {{jsxref("Number.toFixed()")}}, da einige Browser sie als Subpixelwert anzeigen, möglicherweise mit einer großen Anzahl von Dezimalstellen.

Nun setzen wir Ereignishandler-Eigenschaften sowohl beim visual viewport als auch beim [`Window`](/de/docs/Web/API/Window)-Objekt, um die Schlüsselfunktionen sowohl auf mobilen als auch auf Desktop-Geräten zur richtigen Zeit auszuführen:

- Wir setzen die Handler auf `window`, damit die Position und der Inhalt des Informationsfeldes bei herkömmlichen Fenster-Scrollvorgängen aktualisiert werden, z. B. wenn Sie die Seite in einem Desktop-Browser scrollen.
- Wir setzen die Handler auf `visualViewport`, damit die Position und der Inhalt des Informationsfeldes bei Scroll-/Zoomvorgängen des visual viewport aktualisiert werden, z. B. wenn Sie die Seite in einem mobilen Browser scrollen und hineinzummen.

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
