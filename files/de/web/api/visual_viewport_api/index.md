---
title: Visual Viewport-API
slug: Web/API/Visual_Viewport_API
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{DefaultAPISidebar("Visual Viewport")}}

Die **Visual Viewport-API** bietet einen expliziten Mechanismus zum Abfragen und Ändern der Eigenschaften des {{Glossary("visual viewport")}} des Fensters. Der visuelle Viewport ist der sichtbare Teil eines Bildschirms, der Bildschirmtastaturen, Bereiche außerhalb eines Pinch-Zoom-Bereichs oder andere Bildschirmelemente ausschließt, die nicht mit den Dimensionen einer Seite skalieren.

## Konzepte und Verwendung

Das mobile Web enthält zwei Viewports, den Layout-Viewport und den visuellen Viewport. Der Layout-Viewport umfasst alle Elemente auf einer Seite und der visuelle Viewport ist das, was tatsächlich auf dem Bildschirm sichtbar ist. Wenn der Benutzer in die Seite hineinzoomt, schrumpft der visuelle Viewport, während der Layout-Viewport unverändert bleibt. Benutzeroberflächen-Elemente wie die Bildschirmtastatur (OSK) können den visuellen Viewport verkleinern, ohne den Layout-Viewport zu beeinflussen.

Was passiert, wenn ein Webseitenelement unabhängig vom sichtbaren Teil einer Webseite sichtbar sein muss? Zum Beispiel, was ist, wenn Sie möchten, dass eine Gruppe von Bildsteuerungen unabhängig vom Pinch-Zoom-Level des Geräts auf dem Bildschirm bleibt? Aktuelle Browser handhaben dies unterschiedlich. Der visuelle Viewport ermöglicht es Webentwicklern, dieses Problem zu lösen, indem sie Elemente relativ zu dem positionieren, was auf dem Bildschirm angezeigt wird.

Um auf den visuellen Viewport eines Fensters zuzugreifen, können Sie ein {{domxref("VisualViewport")}}-Objekt aus der {{domxref("window.visualViewport")}}-Eigenschaft erhalten. Das Objekt enthält eine Reihe von Eigenschaften, die den Viewport beschreiben. Es fügt außerdem drei Ereignisse hinzu: {{domxref("VisualViewport/resize_event", "resize")}}, {{domxref("VisualViewport/scroll_event", "scroll")}} und {{domxref("VisualViewport/scrollend_event", "scrollend")}}, die ausgelöst werden, wenn der visuelle Viewport resized wird, scrollt und eine Scrollaktion beendet.

Die ersten beiden Ereignisse ermöglichen es Ihnen, Elemente relativ zum visuellen Viewport zu positionieren, wenn er gescrollt oder gezoomt wird, was normalerweise am Layout-Viewport verankert wäre. Das `scrollend`-Ereignis ermöglicht es Ihnen, ein Element zu aktualisieren, wenn eine Scrollaktion abgeschlossen ist. Zum Beispiel können Sie diese Ereignisse verwenden, um ein Element fest am visuellen Viewport zu halten, während es gezoomt und gescrollt wird, und es zu aktualisieren, wenn das Scrollen endet.

## Schnittstellen

- {{DOMxRef("VisualViewport")}}
  - : Repräsentiert den visuellen Viewport für ein gegebenes Fenster. Ein `VisualViewport`-Objekt eines Fensters bietet Informationen über die Position und Größe des Viewports und empfängt die Ereignisse {{domxref("VisualViewport.resize_event", "resize")}}, {{domxref("VisualViewport.scroll_event", "scroll")}} und {{domxref("VisualViewport.scrollend_event", "scrollend")}}.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Window.visualViewport")}} {{ReadOnlyInline}}
  - : Eine schreibgeschützte Referenz auf das {{domxref("VisualViewport")}}-Objekt des Fensters. Wenn diese Eigenschaft nicht existiert, wird die API nicht unterstützt.

## Beispiele

Unser [Visual Viewport-API](https://mdn.github.io/dom-examples/visual-viewport-api/)-Beispiel zeigt eine grundlegende Demonstration, wie die verschiedenen Funktionen des visuellen Viewports funktionieren, einschließlich der drei Ereignistypen. Laden Sie die Seite in unterstützenden Desktop- und mobilen Browsern und versuchen Sie, auf der Seite zu scrollen und zu zoomen. Bei `resize` und `scroll` wird das Informationsfeld neu positioniert, um die gleiche Position relativ zum visuellen Viewport beizubehalten, und die angezeigt Viewport- und Scrollinformationen werden aktualisiert. Auch bei `resize` und `scroll` ändern wir die Boxfarbe, um anzuzeigen, dass etwas passiert, und ändern sie bei `scrollend` zurück.

Sie werden feststellen, dass in Desktop-Browsern die Werte von {{domxref("Window.scrollX")}} und {{domxref("Window.scrollY")}} aktualisiert werden, wenn das Fenster gescrollt wird - die Position des visuellen Viewports ändert sich nicht. In mobilen Browsern hingegen werden in der Regel die Werte von {{domxref("VisualViewport.offsetLeft")}} und {{domxref("VisualViewport.offsetTop")}} aktualisiert - in der Regel ändert sich der visuelle Viewport anstatt der Fensterposition.

Das Beispiel HTML sieht wie folgt aus. Das Informationsfeld wird durch ein {{htmlelement("div")}} mit einer `id` von `output` dargestellt.

```html
<p id="instructions">
  Versuchen Sie, zu scrollen und zu zoomen, um zu sehen, wie sich die gemeldeten Werte ändern.
</p>
<div id="output">
  <p id="visual-info"></p>
  <hr />
  <p id="window-info"></p>
</div>
```

Wir werden das Beispiel-CSS aus Gründen der Kürze nicht erklären - es ist für das Verständnis der Demo nicht wichtig. Sie können es über den obigen Beispiellink ansehen.

Im JavaScript beginnen wir damit, Referenzen auf das Informationsfeld zu erhalten, das wir aktualisieren werden, wenn die Seite gezoomt und gescrollt wird, sowie auf die beiden darin enthaltenen Absätze. Der Erste wird die gemeldeten Werte von {{domxref("VisualViewport.offsetLeft")}} und {{domxref("VisualViewport.offsetTop")}} enthalten, während der Zweite die gemeldeten Werte von {{domxref("Window.scrollX")}} und {{domxref("Window.scrollY")}} enthalten wird.

```js
const output = document.getElementById("output");
const visualInfo = document.getElementById("visual-info");
const windowInfo = document.getElementById("window-info");
```

Als nächstes definieren wir die beiden Hauptfunktionen, die bei Ereignissen ausgeführt werden:

- `scrollUpdater()` wird bei `resize` und `scroll` ausgelöst: Diese Funktion aktualisiert die Position des Informationsfelds relativ zum visuellen Viewport, indem die {{domxref("VisualViewport.offsetTop")}} und {{domxref("VisualViewport.offsetLeft")}}-Eigenschaften abgefragt und deren Werte verwendet werden, um die relevanten {{glossary("inset properties")}} zu aktualisieren. Wir ändern auch die Hintergrundfarbe der Box, um anzuzeigen, dass etwas passiert, und führen die `updateText()`-Funktion aus, um die in der Box angezeigten Werte zu aktualisieren.
- Die Funktion `scrollEndUpdater()` wird bei `scrollend` ausgelöst: Diese setzt die Farbe der Informationsbox auf ihre ursprüngliche Farbe zurück und führt die `updateText()`-Funktion aus, um sicherzustellen, dass die neuesten Werte bei `scrollend` angezeigt werden.

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

Die Funktion `updateText()` sieht folgendermaßen aus - sie setzt die {{domxref("HTMLElement.innerText")}} des ersten Absatzes, um die aktuellen `VisualViewport.offsetLeft` und `VisualViewport.offsetTop`-Werte anzuzeigen, und die `HTMLElement.innerText` des zweiten Absatzes, um die aktuellen `Window.scrollX` und `Window.scrollY`-Werte anzuzeigen. Nachdem `updateText()` definiert wurde, führen wir es sofort aus, damit das Informationsfeld beim Laden der Seite korrekt angezeigt wird.

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
> Wir kürzen alle Werte auf zwei Dezimalstellen mithilfe der {{jsxref("Number.toFixed()")}}-Methode, da einige Browser sie als Subpixel-Werte anzeigen, möglicherweise mit einer großen Anzahl von Dezimalstellen.

Nun setzen wir Ereignishandlereigenschaften sowohl auf den visuellen Viewport als auch auf das {{domxref("Window")}}-Objekt ein, um die Hauptfunktionen zu geeigneten Zeiten sowohl auf mobilen als auch auf Desktop-Geräten auszuführen:

- Wir setzen die Handler auf `window`, sodass die Position und der Inhalt der Informationsbox bei konventionellen Fensterscrolloperationen aktualisiert werden, zum Beispiel wenn Sie die Seite in einem Desktop-Browser scrollen.
- Wir setzen die Handler auf `visualViewport`, sodass die Position und der Inhalt der Informationsbox bei Scroll-/Zoomoperationen des visuellen Viewports aktualisiert werden, zum Beispiel wenn Sie die Seite in einem mobilen Browser scrollen und zoomen.

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

## Browserkompatibilität

{{Compat}}
