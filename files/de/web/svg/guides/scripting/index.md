---
title: Skripterstellung
slug: Web/SVG/Guides/Scripting
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Es gibt mehrere Möglichkeiten, SVG mit JavaScript zu erstellen und zu manipulieren. Dieses Dokument beschreibt Ereignissteuerung, Interaktivität und die Arbeit mit eingebetteten SVG-Inhalten.

Man kann das Standardverhalten des Browsers mit der Methode `evt.preventDefault()` überschreiben, Ereignislistener zu Objekten mit der Syntax `element.addEventListener(event, function, useCapture)` hinzufügen und Eigenschaften von Elementen mit einer Syntax wie `svgElement.style.setProperty("fill-opacity", "0.0", "")` festlegen. Beachten Sie das Vorhandensein aller drei Argumente beim Festlegen von Eigenschaften.

## Verhindern des Standardverhaltens im Ereigniscode

Beim Schreiben von Drag-and-Drop-Code kann es vorkommen, dass Text auf der Seite versehentlich ausgewählt wird, während Sie ziehen. Oder wenn Sie die Rücktaste in Ihrem Code verwenden möchten, möchten Sie das Standardverhalten des Browsers überschreiben, das bei Druck auf die Rücktaste die vorherige Seite aufruft. Die Methode `evt.preventDefault()` ermöglicht Ihnen dies.

## Verwendung von `eventListeners` mit Objekten

Die Methoden `addEventListener()` und `removeEventListener()` sind sehr nützlich beim Schreiben von interaktiven SVGs. Sie können ein Objekt, das die `handleEvent`-Schnittstelle implementiert, als zweiten Parameter an diese Methoden übergeben.

```js
function myRect(x, y, w, h, message) {
  this.message = message;

  this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  this.rect.setAttributeNS(null, "x", x);
  this.rect.setAttributeNS(null, "y", y);
  this.rect.setAttributeNS(null, "width", w);
  this.rect.setAttributeNS(null, "height", h);
  document.documentElement.appendChild(this.rect);

  this.rect.addEventListener("click", this);

  this.handleEvent = (evt) => {
    switch (evt.type) {
      case "click":
        alert(this.message);
        break;
    }
  };
}
```

## Inter-Dokument-Skripting

### Referenzieren von eingebettetem SVG

Bei Verwendung von SVG innerhalb von HTML umfasst Adobe's SVG Viewer 3.0 automatisch eine Fenster-Eigenschaft namens `svgDocument`, die auf das SVG-Dokument verweist. Dies ist nicht der Fall bei Mozillas nativer SVG-Implementierung; daher funktioniert die Verwendung von `window.svgDocument` in Mozilla nicht. Stattdessen können Sie

```js
const svgDoc = document.embeds["name_of_svg"].getSVGDocument();
```

verwenden, um eine Referenz auf ein eingebettetes SVG-Dokument zu erhalten.

Der beste Weg, Zugang zu dem [`Document`](/de/docs/Web/API/Document) zu erhalten, das ein SVG-Dokument darstellt, besteht darin, [`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) zu betrachten (wenn das Dokument in einem {{HTMLElement("iframe")}} präsentiert wird) oder [`HTMLObjectElement.contentDocument`](/de/docs/Web/API/HTMLObjectElement/contentDocument) (wenn das Dokument in einem {{HTMLElement("object")}}-Element präsentiert wird), wie hier:

```js
const svgDoc = document.getElementById("iframe_element").contentDocument;
```

Zusätzlich bieten die Elemente {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("object")}} eine Methode `getSVGDocument()`, die das [`XMLDocument`](/de/docs/Web/API/XMLDocument) zurückgibt, das das eingebettete SVG des Elements darstellt, oder `null`, wenn das Element kein SVG-Dokument darstellt.

Sie können auch `document.getElementById("svg_elem_name").getSVGDocument()` verwenden, was das gleiche Ergebnis liefert.

> [!NOTE]
> Möglicherweise finden Sie Dokumentationen, die sich auf eine `SVGDocument`-Schnittstelle beziehen. Vor SVG 2 wurden SVG-Dokumente unter Verwendung dieser Schnittstelle dargestellt. SVG-Dokumente werden jedoch jetzt unter Verwendung der [`XMLDocument`](/de/docs/Web/API/XMLDocument)-Schnittstelle dargestellt.

### Aufrufen von JavaScript-Funktionen

Wenn eine JavaScript-Funktion, die sich in der HTML-Datei befindet, von einer eingebetteten SVG-Datei in einem HTML-Dokument aufgerufen wird, sollten Sie `parent.functionName()` verwenden, um auf die Funktion zu verweisen. Obwohl das Adobe SVG Viewer Plugin die Verwendung von `functionName()` zulässt, ist es nicht der bevorzugte Weg, Dinge zu tun.

> [!NOTE]
> Laut [SVG-Wiki](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication) ist die `"parent"` JS-Variable im Adobe SVG Version 6 Vorschau-Plugin defekt. Der vorgeschlagene Workaround besteht darin, stattdessen `"top"` zu verwenden. Da es sich um eine Betaversion ihres Plugins handelt, können wir dies wahrscheinlich getrost ignorieren.

Weitere Informationen und einige Beispiele finden Sie auf der [SVG-Wiki-Seite zur Inter-Dokument-Skripterstellung](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication).

## `setProperty` hat drei Parameter

Die Funktion `svgElement.style.setProperty("fill-opacity", "0.0")` wirft eine DOMException - `SYNTAX ERR` in Mozilla. Dieses Verhalten wird von der W3C in der DOM Level 2 Style Specification festgelegt. Die Funktion `setProperty` ist als eine Funktion mit drei Parametern definiert. Das oben Genannte kann durch `'svgElement.style.setProperty("fill-opacity", "0.0", "")'` ersetzt werden, was den Standards entspricht.

## Siehe auch

- [SVG-Wiki zu Skripten und Programmierung](https://web.archive.org/web/20100212202713/http://wiki.svg.org/Main_Page#Scripting_and_Programming)
