---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Canvas API")}}

Das **`HTMLCanvasElement`** Interface bietet Eigenschaften und Methoden zur Manipulation des Layouts und der Präsentation von {{HtmlElement("canvas")}}-Elementen. Das `HTMLCanvasElement` Interface erbt außerdem die Eigenschaften und Methoden des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interfaces.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height)
  - : Das [`height`](/de/docs/Web/HTML/Reference/Elements/canvas#height) HTML-Attribut des {{HTMLElement("canvas")}}-Elements ist ein nicht-negativer `Integer`, der die Anzahl der logischen Pixel (oder RGBA-Werte) angibt, die in einer Spalte des Canvas nach unten verlaufen. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert wie negativ gesetzt ist, wird der Standardwert `150` verwendet. Wenn keine \[separate] CSS-Höhe für den {{HTMLElement("canvas")}} zugewiesen ist, wird dieser Wert auch als Höhe des Canvas in der Längeneinheit CSS-Pixel verwendet.
- [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width)
  - : Das [`width`](/de/docs/Web/HTML/Reference/Elements/canvas#width) HTML-Attribut des {{HTMLElement("canvas")}}-Elements ist ein nicht-negativer `Integer`, der die Anzahl der logischen Pixel (oder RGBA-Werte) angibt, die in einer Reihe des Canvas verlaufen. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert wie negativ gesetzt ist, wird der Standardwert `300` verwendet. Wenn keine \[separate] CSS-Breite für den {{HTMLElement("canvas")}} zugewiesen ist, wird dieser Wert auch als Breite des Canvas in der Längeneinheit CSS-Pixel verwendet.
- [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque) {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolescher Wert, der das [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) HTML-Attribut des {{HTMLElement("canvas")}}-Elements widerspiegelt. Es informiert das Canvas darüber, ob Transluzenz ein Faktor sein wird oder nicht. Wenn bekannt ist, dass keine Transluzenz vorhanden ist, kann die Mal-Performance optimiert werden. Dies wird nur in Mozilla-basierten Browsern unterstützt; verwenden Sie stattdessen den standardisierten Aufruf [`canvas.getContext('2d', { alpha: false })`](/de/docs/Web/API/HTMLCanvasElement/getContext)).
- [`HTMLCanvasElement.mozPrintCallback`](/de/docs/Web/API/HTMLCanvasElement/mozPrintCallback) {{non-standard_inline}}
  - : Eine `Funktion`, die zunächst auf null gesetzt ist. Web-Inhalte können dies auf eine JavaScript-Funktion setzen, die aufgerufen wird, wenn das Canvas beim Drucken der Seite neu gezeichnet werden soll. Wenn sie aufgerufen wird, wird der Rückruf mit einem "printState"-Objekt aufgerufen, das das [MozCanvasPrintState](https://searchfox.org/mozilla-central/search?q=interface%20MozCanvasPrintState&path=HTMLCanvasElement.webidl) Interface implementiert. Der Rückruf kann den Kontext von dem printState-Objekt abrufen und muss dann done() aufrufen, wenn es fertig ist. Der Zweck von `mozPrintCallback` besteht darin, eine Rendering von höherer Auflösung des Canvas in der Auflösung des verwendeten Druckers zu erzielen. [Siehe diesen Blog-Post.](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream)
  - : Gibt einen [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) zurück, der eine Echtzeit-Videoaufnahme der Oberfläche des Canvas ist.
- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)
  - : Gibt einen Zeichenkontext des Canvas zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontextbezeichner nicht unterstützt wird oder das Canvas bereits auf einen anderen Kontextmodus gesetzt wurde.
- [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL)
  - : Gibt eine Daten-URL zurück, die eine Darstellung des Bildes im Format enthält, das durch den `type` Parameter angegeben ist (standardmäßig `png`). Das zurückgegebene Bild hat eine Auflösung von 96dpi.
- [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob)
  - : Erstellt ein [`Blob`](/de/docs/Web/API/Blob)-Objekt, das das im Canvas enthaltene Bild darstellt; diese Datei kann nach Ermessen des Benutzeragenten auf der Festplatte zwischengespeichert oder im Arbeitsspeicher gespeichert werden.
- [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen)
  - : Überträgt die Kontrolle an ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Objekt, entweder im Haupt-Thread oder in einem Worker.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignislisteners zur `oneventname`-Eigenschaft dieses Interfaces gehört werden.

- [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
  - : Wird ausgelöst, wenn der Browser feststellt, dass der `CanvasRenderingContext2D`-Kontext verloren gegangen ist.
- [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
  - : Wird ausgelöst, wenn der Browser erfolgreich einen `CanvasRenderingContext2D`-Kontext wiederherstellt.
- [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - : Wird ausgelöst, wenn der Benutzeragent nicht in der Lage ist, einen `WebGLRenderingContext` oder `WebGL2RenderingContext` Kontext zu erstellen.
- [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - : Wird ausgelöst, wenn der Benutzeragent feststellt, dass der Zeichnungsbuffer, der mit einem `WebGLRenderingContext` oder `WebGL2RenderingContext` Objekt verbunden ist, verloren gegangen ist.
- [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
  - : Wird ausgelöst, wenn der Benutzeragent den Zeichnungsbuffer für ein `WebGLRenderingContext` oder `WebGL2RenderingContext` Objekt wiederherstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("canvas")}}
