---
title: Scripting
slug: Web/SVG/Scripting
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

Man kann das Standardverhalten des Browsers mit der Methode `evt.preventDefault()` überschreiben, Ereignis-Listener mit der Syntax `element.addEventListener(event, function, useCapture)` zu Objekten hinzufügen und Eigenschaften von Elementen mit einer Syntax wie `svgElement.style.setProperty("fill-opacity", "0.0", "")` festlegen. Beachten Sie die Existenz aller drei Argumente beim Festlegen von Eigenschaften.

### Verhindern des Standardverhaltens im Ereigniscode

Beim Schreiben von Drag-and-Drop-Code kommt es manchmal vor, dass Text auf der Seite versehentlich ausgewählt wird, während Sie ziehen. Oder wenn Sie die Rücktaste in Ihrem Code verwenden möchten, möchten Sie das Standardverhalten des Browsers überschreiben, das beim Drücken der Rücktaste zur vorherigen Seite zurückgeht. Die Methode `evt.preventDefault()` ermöglicht Ihnen dies.

### Verwendung von `eventListeners` mit Objekten

Die Methoden `addEventListener()` und `removeEventListener()` sind sehr nützlich beim Schreiben interaktiver SVGs. Sie können ein Objekt, das die `handleEvent`-Schnittstelle implementiert, als zweiten Parameter an diese Methoden übergeben.

```js
function myRect(x, y, w, h, message) {
  this.message = message;

  this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  this.rect.setAttributeNS(null, "x", x);
  this.rect.setAttributeNS(null, "y", y);
  this.rect.setAttributeNS(null, "width", w);
  this.rect.setAttributeNS(null, "height", h);
  document.documentElement.appendChild(this.rect);

  this.rect.addEventListener("click", this, false);

  this.handleEvent = (evt) => {
    switch (evt.type) {
      case "click":
        alert(this.message);
        break;
    }
  };
}
```

### Scripting zwischen Dokumenten: Referenzierung eingebetteter SVG

Beim Verwenden von SVG innerhalb von HTML fügt Adobe's SVG Viewer 3.0 automatisch eine Fenster-Eigenschaft namens `svgDocument` hinzu, die auf das SVG-Dokument verweist. Dies ist bei Mozillas nativer SVG-Implementierung nicht der Fall; daher funktioniert `window.svgDocument` in Mozilla nicht. Stattdessen können Sie

```js
const svgDoc = document.embeds["name_of_svg"].getSVGDocument();
```

verwenden, um stattdessen eine Referenz auf ein eingebettetes SVG-Dokument zu erhalten.

Der beste Weg, um Zugriff auf das [`Document`](/de/docs/Web/API/Document) zu erhalten, das ein SVG-Dokument darstellt, ist, `[`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)` zu betrachten (wenn das Dokument in einem {{HTMLElement("iframe")}} dargestellt wird) oder `[`HTMLObjectElement.contentDocument`](/de/docs/Web/API/HTMLObjectElement/contentDocument)` (wenn das Dokument in einem {{HTMLElement("object")}} Element dargestellt wird), wie folgt:

```js
const svgDoc = document.getElementById("iframe_element").contentDocument;
```

Darüber hinaus bieten die {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, und {{HTMLElement("object")}} Elemente eine Methode, `getSVGDocument()`, die das [`XMLDocument`](/de/docs/Web/API/XMLDocument) zurückgibt, das das eingebettete SVG des Elements darstellt, oder `null`, wenn das Element kein SVG-Dokument darstellt.

Sie können auch `document.getElementById("svg_elem_name").getSVGDocument()` verwenden, was das gleiche Ergebnis liefert.

> [!NOTE]
> Möglicherweise finden Sie Dokumentationen, die auf eine `SVGDocument`-Schnittstelle verweisen. Vor SVG 2 wurden SVG-Dokumente mit dieser Schnittstelle dargestellt. SVG-Dokumente werden jedoch jetzt stattdessen mit der [`XMLDocument`](/de/docs/Web/API/XMLDocument) Schnittstelle dargestellt.

### Scripting zwischen Dokumenten: Aufrufen von JavaScript-Funktionen

Beim Aufrufen einer JavaScript-Funktion, die in der HTML-Datei von einer SVG-Datei, die in einem HTML-Dokument eingebettet ist, vorhanden ist, sollten Sie `parent.functionname()` verwenden, um die Funktion zu referenzieren. Obwohl das Adobe SVG Viewer Plugin die Verwendung von `functionname()` erlaubt, ist dies nicht die bevorzugte Methode.

> [!NOTE]
> Laut dem [SVG wiki](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication) ist die `"parent"` JS-Variable im Vorschau-Plugin der Version 6 von Adobe SVG fehlerhaft. Der empfohlene Workaround besteht darin, `"top"` statt `"parent"` zu verwenden. Da es sich um eine Beta-Version ihres Plugins handelt, können wir dies wahrscheinlich getrost ignorieren.

Weitere Informationen und einige Beispiele finden Sie auf der [SVG wiki Seite zu Scripting zwischen Dokumenten](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication).

### `setProperty` hat drei Parameter

Die Funktion `svgElement.style.setProperty("fill-opacity", "0.0")` löst in Mozilla eine DOMException - `SYNTAX ERR` aus. Dieses Verhalten wird von der W3C in der DOM Level 2 Style-Spezifikation festgelegt. Die Funktion `setProperty` wird als eine Funktion mit drei Parametern definiert. Das Obige kann mit `'svgElement.style.setProperty("fill-opacity", "0.0", "")'` ersetzt werden, was standardkonform ist.

### Links

[SVG wiki über Scripting und Programmierung](https://web.archive.org/web/20100212202713/http://wiki.svg.org/Main_Page#Scripting_and_Programming)
