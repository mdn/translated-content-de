---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
l10n:
  sourceCommit: 16ddaba6073a5e4022aecd2aca8893905a9dd5d0
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement`**-Schnittstelle bietet Eigenschaften und Methoden zur Manipulation des Layouts und der Darstellung von {{HtmlElement("canvas")}}-Elementen. Die `HTMLCanvasElement`-Schnittstelle erbt außerdem die Eigenschaften und Methoden der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height)
  - : Das [`height`](/de/docs/Web/HTML/Element/canvas#height)-HTML-Attribut des {{HTMLElement("canvas")}}-Elements ist eine nicht negative `integer`, die die Anzahl logischer Pixel (oder RGBA-Werte) in einer Spalte der Leinwand widerspiegelt. Wenn das Attribut nicht angegeben oder auf einen ungültigen Wert wie einen negativen Wert gesetzt ist, wird der Standardwert `150` verwendet. Wenn keine separate CSS-Höhe dem {{HTMLElement("canvas")}} zugewiesen ist, wird dieser Wert auch als Höhe der Leinwand in Längeneinheiten-CSS-Pixel verwendet.
- [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width)
  - : Das [`width`](/de/docs/Web/HTML/Element/canvas#width)-HTML-Attribut des {{HTMLElement("canvas")}}-Elements ist eine nicht negative `integer`, die die Anzahl logischer Pixel (oder RGBA-Werte) in einer Zeile der Leinwand widerspiegelt. Wenn das Attribut nicht angegeben oder auf einen ungültigen Wert wie einen negativen Wert gesetzt ist, wird der Standardwert `300` verwendet. Wenn keine separate CSS-Breite dem {{HTMLElement("canvas")}} zugewiesen ist, wird dieser Wert auch als Breite der Leinwand in Längeneinheiten-CSS-Pixel verwendet.
- [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque) {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolescher Wert, der das [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque)-HTML-Attribut des {{HTMLElement("canvas")}}-Elements widerspiegelt. Es informiert die Leinwand darüber, ob Transparenz ein Faktor ist oder nicht. Wenn die Leinwand weiß, dass keine Transparenz vorhanden ist, kann die Malleistung optimiert werden. Dies wird nur in auf Mozilla basierenden Browsern unterstützt; verwenden Sie stattdessen den standardisierten [`canvas.getContext('2d', { alpha: false })`](/de/docs/Web/API/HTMLCanvasElement/getContext).
- [`HTMLCanvasElement.mozPrintCallback`](/de/docs/Web/API/HTMLCanvasElement/mozPrintCallback) {{non-standard_inline}}
  - : Eine `function`, die anfänglich null ist. Web-Inhalte können dies auf eine JavaScript-Funktion setzen, die aufgerufen wird, wenn die Leinwand neu gezeichnet werden soll, während die Seite gedruckt wird. Beim Aufruf wird dem Callback ein "printState"-Objekt übergeben, das die [MozCanvasPrintState](https://searchfox.org/mozilla-central/search?q=interface%20MozCanvasPrintState&path=HTMLCanvasElement.webidl)-Schnittstelle implementiert. Der Callback kann den Kontext, auf den gezeichnet werden soll, vom printState-Objekt erhalten und muss dann done() darauf aufrufen, wenn er fertig ist. Der Zweck von `mozPrintCallback` ist es, eine höhere Auflösung des Leinwands zu erhalten, die der Auflösung des verwendeten Druckers entspricht. [Siehe diesen Blog-Beitrag.](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)

## Instanzmethoden

_Erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream)
  - : Gibt einen [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) zurück, der eine Echtzeit-Videoaufnahme der Oberfläche der Leinwand darstellt.
- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)
  - : Gibt einen Zeichnungskontext auf der Leinwand zurück oder null, wenn die Kontext-ID nicht unterstützt wird. Ein Zeichnungskontext ermöglicht es Ihnen, auf der Leinwand zu zeichnen. Das Aufrufen von getContext mit `"2d"` gibt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt zurück, während das Aufrufen mit `"webgl"` (oder `"experimental-webgl"`) ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Objekt zurückgibt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) implementiert haben.
- [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL)
  - : Gibt eine Daten-URL zurück, die eine Darstellung des Bildes im durch den `type`-Parameter angegebenen Format enthält (standardmäßig `png`). Das zurückgegebene Bild hat eine Auflösung von 96 dpi.
- [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob)
  - : Erstellt ein [`Blob`](/de/docs/Web/API/Blob)-Objekt, das das im Leinwand enthaltene Bild darstellt; diese Datei kann vom Nutzeragenten je nach Belieben auf der Festplatte zwischengespeichert oder im Speicher gespeichert werden.
- [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen)
  - : Überträgt die Kontrolle an ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt, entweder im Hauptthread oder in einem Worker.

## Ereignisse

_Erbt Ereignisse von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass der `CanvasRenderingContext2D`-Kontext verloren gegangen ist.
- [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
  - : Wird ausgelöst, wenn der Browser erfolgreich einen `CanvasRenderingContext2D`-Kontext wiederherstellt.
- [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - : Wird ausgelöst, wenn der Nutzeragent nicht in der Lage ist, einen `WebGLRenderingContext` oder `WebGL2RenderingContext`-Kontext zu erstellen.
- [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - : Wird ausgelöst, wenn der Nutzeragent erkennt, dass der mit einem `WebGLRenderingContext` oder `WebGL2RenderingContext`-Objekt verbundene Zeichnungspuffer verloren gegangen ist.
- [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
  - : Wird ausgelöst, wenn der Nutzeragent den Zeichnungspuffer für ein `WebGLRenderingContext` oder `WebGL2RenderingContext`-Objekt wiederherstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("canvas")}}
