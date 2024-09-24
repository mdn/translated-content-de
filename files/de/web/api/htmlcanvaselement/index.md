---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
l10n:
  sourceCommit: 16ddaba6073a5e4022aecd2aca8893905a9dd5d0
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement`**-Schnittstelle bietet Eigenschaften und Methoden zur Manipulation des Layouts und der Präsentation von {{HtmlElement("canvas")}}-Elementen. Die `HTMLCanvasElement`-Schnittstelle erbt auch die Eigenschaften und Methoden der {{domxref("HTMLElement")}}-Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern, {{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.height")}}
  - : Das [`height`](/de/docs/Web/HTML/Element/canvas#height)-Attribut des {{HTMLElement("canvas")}}-Elements ist eine nicht-negative Ganzzahl, die die Anzahl der logischen Pixel (oder RGBA-Werte) widerspiegelt, die in einer Spalte der Leinwand nach unten gehen. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert gesetzt wird, wie z. B. einen negativen Wert, wird der Standardwert von `150` verwendet. Wenn keine separate CSS-Höhe dem {{HTMLElement("canvas")}}-Element zugewiesen wird, wird dieser Wert auch als die Höhe der Leinwand in der Längen-Einheit CSS Pixel verwendet.
- {{domxref("HTMLCanvasElement.width")}}
  - : Das [`width`](/de/docs/Web/HTML/Element/canvas#width)-Attribut des {{HTMLElement("canvas")}}-Elements ist eine nicht-negative Ganzzahl, die die Anzahl der logischen Pixel (oder RGBA-Werte) widerspiegelt, die in einer Reihe der Leinwand nach rechts gehen. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert gesetzt wird, wie z. B. einen negativen Wert, wird der Standardwert von `300` verwendet. Wenn keine separate CSS-Breite dem {{HTMLElement("canvas")}}-Element zugewiesen wird, wird dieser Wert auch als die Breite der Leinwand in der Längen-Einheit CSS Pixel verwendet.
- {{domxref("HTMLCanvasElement.mozOpaque")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolescher Wert, der das [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque)-Attribut des {{HTMLElement("canvas")}}-Elements widerspiegelt. Es gibt der Leinwand an, ob Transparenz eine Rolle spielt. Wenn die Leinwand weiß, dass keine Transparenz vorhanden ist, kann die Malleistung optimiert werden. Dies wird nur in Mozilla-basierten Browsern unterstützt; verwenden Sie stattdessen den standardisierten {{domxref("HTMLCanvasElement.getContext()", "canvas.getContext('2d', { alpha: false })")}}.
- {{domxref("HTMLCanvasElement.mozPrintCallback")}} {{non-standard_inline}}
  - : Eine Funktion, die anfänglich null ist. Web-Inhalte können dies auf eine JavaScript-Funktion setzen, die aufgerufen wird, wenn die Leinwand neu gezeichnet werden soll, während die Seite gedruckt wird. Beim Aufruf wird dem Callback ein "printState"-Objekt übergeben, das die [MozCanvasPrintState](https://searchfox.org/mozilla-central/search?q=interface%20MozCanvasPrintState&path=HTMLCanvasElement.webidl)-Schnittstelle implementiert. Der Callback kann den Kontext zum Zeichnen vom printState-Objekt erhalten und muss dann done() darauf aufrufen, wenn er fertig ist. Der Zweck von `mozPrintCallback` besteht darin, eine höher aufgelöste Darstellung der Leinwand in der Auflösung des verwendeten Druckers zu erhalten. [Siehe diesen Blog-Beitrag.](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)

## Instanz-Methoden

_Erbt Methoden von seinem Eltern, {{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.captureStream()")}}
  - : Gibt einen {{domxref("CanvasCaptureMediaStreamTrack")}} zurück, der eine Echtzeit-Videokopie der Oberfläche der Leinwand ist.
- {{domxref("HTMLCanvasElement.getContext()")}}
  - : Gibt einen Zeichenkontext auf der Leinwand zurück oder null, wenn die Kontext-ID nicht unterstützt wird. Ein Zeichenkontext ermöglicht es, auf der Leinwand zu zeichnen. Ein Aufruf von getContext mit `"2d"` gibt ein {{domxref("CanvasRenderingContext2D")}}-Objekt zurück, während ein Aufruf mit `"webgl"` (oder `"experimental-webgl"`) ein {{domxref("WebGLRenderingContext")}}-Objekt zurückgibt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) implementieren.
- {{domxref("HTMLCanvasElement.toDataURL()")}}
  - : Gibt eine Daten-URL zurück, die eine Darstellung des Bildes im durch den `type`-Parameter angegebenen Format enthält (standardmäßig `png`). Das zurückgegebene Bild hat eine Auflösung von 96dpi.
- {{domxref("HTMLCanvasElement.toBlob()")}}
  - : Erstellt ein {{domxref("Blob")}}-Objekt, das das Bild enthält, das auf der Leinwand dargestellt ist; diese Datei kann nach Ermessen des Benutzeragenten auf der Festplatte zwischengespeichert oder im Speicher gespeichert werden.
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}
  - : Überträgt die Kontrolle an ein {{domxref("OffscreenCanvas")}}-Objekt entweder im Hauptthread oder in einem Worker.

## Ereignisse

_Erbt Ereignisse von seinem Eltern, {{domxref("HTMLElement")}}._

Diese Ereignisse können mit {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} abgehört werden oder indem ein Ereignis-Listener dem `oneventname`-Eigenschaft dieser Schnittstelle zugewiesen wird.

- [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
  - : Wird ausgelöst, wenn der Browser feststellt, dass der `CanvasRenderingContext2D`-Kontext verloren gegangen ist.
- [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
  - : Wird ausgelöst, wenn der Browser erfolgreich einen `CanvasRenderingContext2D`-Kontext wiederherstellt.
- [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - : Wird ausgelöst, wenn der Benutzeragent nicht in der Lage ist, einen `WebGLRenderingContext` oder `WebGL2RenderingContext`-Kontext zu erstellen.
- [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - : Wird ausgelöst, wenn der Benutzeragent feststellt, dass der mit einem `WebGLRenderingContext` oder `WebGL2RenderingContext`-Objekt verbundene Zeichenpuffer verloren gegangen ist.
- [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
  - : Wird ausgelöst, wenn der Benutzeragent den Zeichenpuffer für ein `WebGLRenderingContext` oder `WebGL2RenderingContext`-Objekt wiederherstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("canvas")}}
