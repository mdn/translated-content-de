---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement`** Schnittstelle bietet Eigenschaften und Methoden zur Manipulation des Layouts und der Darstellung von {{HtmlElement("canvas")}}-Elementen. Die `HTMLCanvasElement`-Schnittstelle erbt außerdem die Eigenschaften und Methoden der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Übernimmt Eigenschaften von ihrem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height)
  - : Das [`height`](/de/docs/Web/HTML/Reference/Elements/canvas#height) HTML-Attribut des {{HTMLElement("canvas")}}-Elements ist eine nicht-negative `integer`, die die Anzahl der logischen Pixel (oder RGBA-Werte) widerspiegelt, die eine Spalte des Canvas hinuntergehen. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert, wie einen negativen, gesetzt ist, wird der Standardwert `150` verwendet. Wenn keine \[separate] CSS-Höhe dem {{HTMLElement("canvas")}} zugewiesen wird, wird dieser Wert auch als Höhe des Canvas in der Längeneinheit CSS-Pixel verwendet.
- [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width)
  - : Das [`width`](/de/docs/Web/HTML/Reference/Elements/canvas#width) HTML-Attribut des {{HTMLElement("canvas")}}-Elements ist eine nicht-negative `integer`, die die Anzahl der logischen Pixel (oder RGBA-Werte) widerspiegelt, die eine Zeile des Canvas überqueren. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert, wie einen negativen, gesetzt ist, wird der Standardwert `300` verwendet. Wenn keine \[separate] CSS-Breite dem {{HTMLElement("canvas")}} zugewiesen wird, wird dieser Wert auch als Breite des Canvas in der Längeneinheit CSS-Pixel verwendet.
- [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque) {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolescher Wert, der das [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) HTML-Attribut des {{HTMLElement("canvas")}}-Elements widerspiegelt. Es lässt das Canvas wissen, ob Transparenz ein Faktor sein wird oder nicht. Wenn das Canvas weiß, dass keine Transparenz vorliegt, kann die Malleistung optimiert werden. Dies wird nur in Mozilla-basierten Browsern unterstützt; verwenden Sie stattdessen den standardisierten [`canvas.getContext('2d', { alpha: false })`](/de/docs/Web/API/HTMLCanvasElement/getContext).
- [`HTMLCanvasElement.mozPrintCallback`](/de/docs/Web/API/HTMLCanvasElement/mozPrintCallback) {{non-standard_inline}}
  - : Eine `function`, die anfänglich null ist. Webinhalt kann dies auf eine JavaScript-Funktion setzen, die aufgerufen wird, wenn das Canvas neu gezeichnet werden soll, während die Seite gedruckt wird. Wenn aufgerufen, wird der Callback mit einem "printState"-Objekt übergeben, das die [MozCanvasPrintState](https://searchfox.org/firefox-main/search?q=interface%20MozCanvasPrintState&path=HTMLCanvasElement.webidl)-Schnittstelle implementiert. Der Callback kann den Kontext vom printState-Objekt zum Zeichnen erhalten und muss dann done() darauf aufrufen, wenn er fertig ist. Der Zweck von `mozPrintCallback` ist es, eine hochauflösende Wiedergabe des Canvas in der Auflösung des verwendeten Druckers zu erhalten. [Siehe diesen Blogeintrag.](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)

## Instanzmethoden

_Übernimmt Methoden von ihrem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream)
  - : Gibt einen [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) zurück, der eine Echtzeit-Videoaufnahme der Oberfläche des Canvas ist.
- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)
  - : Gibt einen Zeichenkontext auf dem Canvas zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontextbezeichner nicht unterstützt wird oder das Canvas bereits auf einen anderen Kontextmodus gesetzt wurde.
- [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL)
  - : Gibt eine Daten-URL zurück, die eine Darstellung des Bildes im durch den `type`-Parameter angegebenen Format enthält (Standard ist `png`). Das zurückgegebene Bild hat eine Auflösung von 96dpi.
- [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob)
  - : Erstellt ein [`Blob`](/de/docs/Web/API/Blob)-Objekt, das das im Canvas enthaltene Bild darstellt; diese Datei kann nach Ermessen des Benutzeragents auf der Festplatte zwischengespeichert oder im Speicher gespeichert werden.
- [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen)
  - : Überträgt die Kontrolle auf ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt, entweder im Hauptthread oder auf einem Worker.

## Ereignisse

_Übernimmt Ereignisse von ihrem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwacht werden oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle.

- [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass der `CanvasRenderingContext2D`-Kontext verloren gegangen ist.
- [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
  - : Wird ausgelöst, wenn der Browser erfolgreich einen `CanvasRenderingContext2D`-Kontext wiederherstellt.
- [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - : Wird ausgelöst, wenn der Benutzeragent nicht in der Lage ist, einen `WebGLRenderingContext` oder `WebGL2RenderingContext`-Kontext zu erstellen.
- [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - : Wird ausgelöst, wenn der Benutzeragent erkennt, dass der Zeichnungspuffer, der einem `WebGLRenderingContext` oder `WebGL2RenderingContext`-Objekt zugeordnet ist, verloren gegangen ist.
- [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
  - : Wird ausgelöst, wenn der Benutzeragent den Zeichnungspuffer für ein `WebGLRenderingContext` oder `WebGL2RenderingContext`-Objekt wiederherstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("canvas")}}
