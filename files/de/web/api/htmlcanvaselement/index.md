---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
l10n:
  sourceCommit: 16ddaba6073a5e4022aecd2aca8893905a9dd5d0
---

{{APIRef("Canvas API")}}

Das **`HTMLCanvasElement`** Interface bietet Eigenschaften und Methoden zur Manipulation des Layouts und der Darstellung von {{HtmlElement("canvas")}} Elementen. Das `HTMLCanvasElement` Interface erbt zudem die Eigenschaften und Methoden des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height)
  - : Das [`height`](/de/docs/Web/HTML/Element/canvas#height) HTML-Attribut des {{HTMLElement("canvas")}} Elements ist eine nicht-negative `Ganzzahl`, die die Anzahl der logischen Pixel (oder RGBA-Werte) widerspiegelt, die eine Spalte der Leinwand heruntergehen. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert, wie einen negativen Wert, gesetzt ist, wird der Standardwert `150` verwendet. Wenn keine \[separate] CSS-Höhe dem {{HTMLElement("canvas")}} zugewiesen ist, wird dieser Wert auch als Höhe der Leinwand in der Längeneinheit CSS-Pixel verwendet.
- [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width)
  - : Das [`width`](/de/docs/Web/HTML/Element/canvas#width) HTML-Attribut des {{HTMLElement("canvas")}} Elements ist eine nicht-negative `Ganzzahl`, die die Anzahl der logischen Pixel (oder RGBA-Werte) widerspiegelt, die eine Reihe der Leinwand durchqueren. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert, wie einen negativen Wert, gesetzt ist, wird der Standardwert `300` verwendet. Wenn keine \[separate] CSS-Breite dem {{HTMLElement("canvas")}} zugewiesen ist, wird dieser Wert auch als Breite der Leinwand in der Längeneinheit CSS-Pixel verwendet.
- [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque) {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolescher Wert, der das [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque) HTML-Attribut des {{HTMLElement("canvas")}} Elements widerspiegelt. Es teilt der Leinwand mit, ob Transparenz ein Faktor sein wird oder nicht. Wenn die Leinwand weiß, dass keine Transparenz vorhanden ist, kann die Zeichnungsleistung optimiert werden. Dies wird nur in Mozilla-basierten Browsern unterstützt; verwenden Sie stattdessen das standardisierte [`canvas.getContext('2d', { alpha: false })`](/de/docs/Web/API/HTMLCanvasElement/getContext).
- [`HTMLCanvasElement.mozPrintCallback`](/de/docs/Web/API/HTMLCanvasElement/mozPrintCallback) {{non-standard_inline}}
  - : Eine `Funktion`, die anfangs null ist. Web-Inhalte können dies auf eine JavaScript-Funktion setzen, die aufgerufen wird, wenn die Leinwand neu gezeichnet werden soll, während die Seite gedruckt wird. Beim Aufruf erhält der Rückruf ein "printState" Objekt, das das [MozCanvasPrintState](https://searchfox.org/mozilla-central/search?q=interface%20MozCanvasPrintState&path=HTMLCanvasElement.webidl) Interface implementiert. Der Rückruf kann den Kontext zum Zeichnen aus dem printState Objekt erhalten und muss dann done() darauf aufrufen, wenn er fertig ist. Der Zweck von `mozPrintCallback` ist es, eine hochauflösende Darstellung der Leinwand in der Auflösung des verwendeten Druckers zu erhalten. [Siehe diesen Blogbeitrag.](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)

## Instanz-Methoden

_Erbt Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream)
  - : Gibt einen [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) zurück, der eine Echtzeit-Videokapierung der Oberfläche der Leinwand ist.
- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)
  - : Gibt einen Zeichenkontext auf der Leinwand zurück oder null, wenn die Kontext-ID nicht unterstützt wird. Ein Zeichenkontext ermöglicht es Ihnen, auf der Leinwand zu zeichnen. Der Aufruf von getContext mit `"2d"` gibt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Objekt zurück, während ein Aufruf mit `"webgl"` (oder `"experimental-webgl"`) ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Objekt zurückgibt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) implementieren.
- [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL)
  - : Gibt eine Daten-URL zurück, die eine Darstellung des Bildes im durch den `type` Parameter angegebenen Format enthält (standardmäßig `png`). Das zurückgegebene Bild hat eine Auflösung von 96dpi.
- [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob)
  - : Erstellt ein [`Blob`](/de/docs/Web/API/Blob) Objekt, das das Bild enthält, das in der Leinwand enthalten ist; diese Datei kann nach Ermessen des Benutzeragenten entweder auf der Festplatte zwischengespeichert oder im Speicher gespeichert werden.
- [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen)
  - : Übergibt die Kontrolle an ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Objekt, entweder im Hauptthread oder auf einem Worker.

## Ereignisse

_Erbt Ereignisse von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname` Eigenschaft dieses Interface zuweisen.

- [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
  - : Wird ausgelöst, wenn der Browser feststellt, dass der `CanvasRenderingContext2D` Kontext verloren gegangen ist.
- [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
  - : Wird ausgelöst, wenn der Browser erfolgreich einen `CanvasRenderingContext2D` Kontext wiederherstellt.
- [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - : Wird ausgelöst, wenn der Benutzeragent nicht in der Lage ist, einen `WebGLRenderingContext` oder `WebGL2RenderingContext` Kontext zu erstellen.
- [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - : Wird ausgelöst, wenn der Benutzeragent feststellt, dass der Zeichenpuffer, der mit einem `WebGLRenderingContext` oder `WebGL2RenderingContext` Objekt verbunden ist, verloren gegangen ist.
- [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
  - : Wird ausgelöst, wenn der Benutzeragent den Zeichenpuffer für ein `WebGLRenderingContext` oder `WebGL2RenderingContext` Objekt wiederherstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("canvas")}}
