---
title: Skripting
slug: Web/SVG/Scripting
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

Man kann die Standardverhalten des Browsers mit der Methode `evt.preventDefault()` überschreiben, Ereignislistener zu Objekten mit der Syntax `element.addEventListener(event, function, useCapture)` hinzufügen und Elementeigenschaften mit einer Syntax wie `svgElement.style.setProperty("fill-opacity", "0.0", "")` festlegen. Beachten Sie die Existenz aller drei Argumente beim Festlegen von Eigenschaften.

### Verhindern des Standardverhaltens im Ereigniscode

Beim Schreiben von Drag-and-Drop-Code wird manchmal der Text auf der Seite versehentlich ausgewählt, während Sie ziehen. Oder wenn Sie die Rücktaste in Ihrem Code verwenden möchten, sollten Sie das Standardverhalten des Browsers überschreiben, wenn die Rücktaste gedrückt wird, was normalerweise zum Zurückgehen zur vorherigen Seite führt. Die Methode `evt.preventDefault()` ermöglicht Ihnen dies.

### Verwenden von `eventListeners` mit Objekten

Die Methoden `addEventListener()` und `removeEventListener()` sind sehr nützlich beim Schreiben von interaktivem SVG. Sie können ein Objekt, das die Schnittstelle `handleEvent` implementiert, als zweiten Parameter an diese Methoden übergeben.

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

### Interdokumentenskripting: Referenzieren eingebetteter SVG

Beim Verwenden von SVG innerhalb von HTML fügt Adobe's SVG Viewer 3.0 automatisch eine Fenster-Eigenschaft namens `svgDocument` ein, die auf das SVG-Dokument verweist. Dies ist bei Mozillas nativer SVG-Implementierung nicht der Fall; daher funktioniert die Verwendung von `window.svgDocument` in Mozilla nicht. Stattdessen können Sie Folgendes verwenden:

```js
const svgDoc = document.embeds["name_of_svg"].getSVGDocument();
```

um eine Referenz auf ein eingebettetes SVG-Dokument zu erhalten.

Der beste Weg, um Zugriff auf das {{domxref("Document")}} zu bekommen, das ein SVG-Dokument darstellt, ist, auf {{domxref("HTMLIFrameElement.contentDocument")}} (wenn das Dokument in einem {{HTMLElement("iframe")}} dargestellt wird) oder {{domxref("HTMLObjectElement.contentDocument")}} (wenn das Dokument in einem {{HTMLElement("object")}} Element dargestellt wird) zu schauen, so:

```js
const svgDoc = document.getElementById("iframe_element").contentDocument;
```

Zusätzlich bieten die Elemente {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, und {{HTMLElement("object")}} eine Methode `getSVGDocument()`, die das {{domxref("XMLDocument")}} zurückgibt, das das eingebettete SVG des Elements darstellt, oder `null`, wenn das Element kein SVG-Dokument repräsentiert.

Sie können auch `document.getElementById("svg_elem_name").getSVGDocument()` verwenden, was das gleiche Ergebnis liefert.

> [!NOTE]
> Sie könnten Dokumentationen finden, die sich auf eine `SVGDocument` Schnittstelle beziehen. Vor SVG 2 wurden SVG-Dokumente mit dieser Schnittstelle dargestellt. Jetzt werden SVG-Dokumente jedoch mit der {{domxref("XMLDocument")}} Schnittstelle dargestellt.

### Interdokumentenskripting: Aufrufen von JavaScript-Funktionen

Wenn Sie eine JavaScript-Funktion aufrufen, die sich in der HTML-Datei befindet, von einer SVG-Datei aus, die in ein HTML-Dokument eingebettet ist, sollten Sie `parent.functionname()` verwenden, um auf die Funktion zu verweisen. Obwohl das Adobe SVG-Viewer-Plugin die Verwendung von `functionname()` erlaubt, ist dies nicht die bevorzugte Methode.

> [!NOTE]
> Laut dem [SVG wiki](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication) ist die `"parent"` JS-Variable im Adobe SVG Version 6 Vorschau-Plugin fehlerhaft. Der vorgeschlagene Workaround ist die Verwendung von `"top"` statt `"parent"`. Da es sich um eine Beta-Version ihres Plugins handelt, können wir dies wahrscheinlich ignorieren.

Weitere Informationen und einige Beispiele finden Sie auf der [SVG wiki interdokumentenscripting Seite](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication).

### `setProperty` hat drei Parameter

Die Funktion `svgElement.style.setProperty("fill-opacity", "0.0")` löst eine DOMException - `SYNTAX ERR` in Mozilla aus. Dieses Verhalten wird von der W3C im DOM Level 2 Style Specification spezifiziert. Die Funktion `setProperty` ist als eine Funktion mit drei Parametern definiert. Das obige kann durch `'svgElement.style.setProperty("fill-opacity", "0.0", "")'` ersetzt werden, was den Standards entspricht.

### Links

[SVG wiki über Skripting und Programmierung](https://web.archive.org/web/20100212202713/http://wiki.svg.org/Main_Page#Scripting_and_Programming)
