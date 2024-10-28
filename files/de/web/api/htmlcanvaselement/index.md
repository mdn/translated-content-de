---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
l10n:
  sourceCommit: 32f1bfc28a0704c9a743bc971df1b2563cc4ccc6
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement`**-Schnittstelle bietet Eigenschaften und Methoden zur Manipulation des Layouts und der Darstellung von {{HtmlElement("canvas")}}-Elementen. Die `HTMLCanvasElement`-Schnittstelle erbt auch die Eigenschaften und Methoden der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height)
  - : Das HTML-Attribut [`height`](/de/docs/Web/HTML/Element/canvas#height) des {{HTMLElement("canvas")}}-Elements ist ein nicht-negativer `integer`, der die Anzahl der logischen Pixel (oder RGBA-Werte) widerspiegelt, die in einer Spalte der Canvas nach unten gehen. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert wie einen negativen gesetzt ist, wird der Standardwert `150` verwendet. Wenn der {{HTMLElement("canvas")}} keine separate CSS-Höhe zugewiesen ist, wird dieser Wert auch als Höhe der Canvas in der Längeneinheit CSS Pixel verwendet.
- [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width)
  - : Das HTML-Attribut [`width`](/de/docs/Web/HTML/Element/canvas#width) des {{HTMLElement("canvas")}}-Elements ist ein nicht-negativer `integer`, der die Anzahl der logischen Pixel (oder RGBA-Werte) widerspiegelt, die in einer Reihe der Canvas verlaufen. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert wie einen negativen gesetzt ist, wird der Standardwert `300` verwendet. Wenn der {{HTMLElement("canvas")}} keine separate CSS-Breite zugewiesen ist, wird dieser Wert auch als Breite der Canvas in der Längeneinheit CSS Pixel verwendet.
- [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque) {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolescher Wert, der das HTML-Attribut [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque) des {{HTMLElement("canvas")}}-Elements widerspiegelt. Es gibt der Canvas an, ob Transparenz ein Faktor sein wird oder nicht. Wenn die Canvas weiß, dass es keine Transparenz gibt, kann die Malleistung optimiert werden. Dies wird nur in Mozilla-basierten Browsern unterstützt; verwenden Sie stattdessen den standardisierten [`canvas.getContext('2d', { alpha: false })`](/de/docs/Web/API/HTMLCanvasElement/getContext).
- [`HTMLCanvasElement.mozPrintCallback`](/de/docs/Web/API/HTMLCanvasElement/mozPrintCallback) {{non-standard_inline}}
  - : Eine `function`, die anfänglich `null` ist. Web-Inhalte können dies auf eine JavaScript-Funktion setzen, die aufgerufen wird, wenn die Canvas während des Druckens neu gezeichnet werden soll. Beim Aufruf wird dem Callback ein "printState"-Objekt übergeben, das die [MozCanvasPrintState](https://searchfox.org/mozilla-central/search?q=interface%20MozCanvasPrintState&path=HTMLCanvasElement.webidl)-Schnittstelle implementiert. Der Callback kann den Kontext aus dem printState-Objekt erhalten, auf den gezeichnet werden soll, und muss danach done() auf dem Objekt aufrufen, wenn er fertig ist. Der Zweck von `mozPrintCallback` ist es, eine höher aufgelöste Darstellung der Canvas mit der Auflösung des genutzten Druckers zu erhalten. [Siehe diesen Blog-Beitrag.](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream)
  - : Gibt einen [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) zurück, der eine Echtzeit-Videoerfassung der Oberfläche der Canvas ist.
- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)
  - : Gibt einen Zeichenkontext auf der Canvas zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn die Kontextkennung nicht unterstützt wird oder die Canvas bereits auf einen anderen Kontextmodus eingestellt wurde.
- [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL)
  - : Gibt eine Daten-URL zurück, die eine Darstellung des Bildes im durch den `type`-Parameter angegebenen Format enthält (standardmäßig `png`). Das zurückgegebene Bild hat eine Auflösung von 96dpi.
- [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob)
  - : Erstellt ein [`Blob`](/de/docs/Web/API/Blob)-Objekt, das das in der Canvas enthaltene Bild darstellt; diese Datei kann nach Ermessen des Benutzeragenten entweder auf der Festplatte zwischengespeichert oder im Speicher gespeichert werden.
- [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen)
  - : Überträgt die Kontrolle auf ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt, entweder im Hauptthread oder in einem Worker.

## Ereignisse

_Erbt Ereignisse von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwacht werden, oder indem ein Ereignis-Listener auf die `oneventname`-Eigenschaft dieser Schnittstelle zugewiesen wird.

- [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass der `CanvasRenderingContext2D`-Kontext verloren gegangen ist.
- [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
  - : Wird ausgelöst, wenn der Browser erfolgreich einen `CanvasRenderingContext2D`-Kontext wiederherstellt.
- [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - : Wird ausgelöst, wenn der Benutzeragent nicht in der Lage ist, einen `WebGLRenderingContext`- oder `WebGL2RenderingContext`-Kontext zu erstellen.
- [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - : Wird ausgelöst, wenn der Benutzeragent erkennt, dass der Zeichnungspuffer, der einem `WebGLRenderingContext`- oder `WebGL2RenderingContext`-Objekt zugeordnet ist, verloren gegangen ist.
- [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
  - : Wird ausgelöst, wenn der Benutzeragent den Zeichnungspuffer für ein `WebGLRenderingContext`- oder `WebGL2RenderingContext`-Objekt wiederherstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("canvas")}}
