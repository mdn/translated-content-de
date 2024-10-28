---
title: Skripterstellung
slug: Web/SVG/Scripting
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{SVGRef}}

Man kann das Standardverhalten des Browsers mit der Methode `evt.preventDefault()` überschreiben, Ereignislistener zu Objekten mit der Syntax `element.addEventListener(event, function, useCapture)` hinzufügen und Eigenschaften von Elementen mit einer Syntax wie `svgElement.style.setProperty("fill-opacity", "0.0", "")` setzen. Beachten Sie die Existenz aller drei Argumente beim Setzen von Eigenschaften.

### Verhindern des Standardverhaltens in Ereignis-Code

Beim Schreiben von Drag-and-Drop-Code kann es vorkommen, dass Text auf der Seite unbeabsichtigt ausgewählt wird, während Sie ziehen. Oder wenn Sie die Rücktaste in Ihrem Code verwenden möchten, wollen Sie das Standardverhalten des Browsers überschreiben, wenn die Rücktaste gedrückt wird, was normalerweise zur vorherigen Seite zurückgeht. Die Methode `evt.preventDefault()` ermöglicht es Ihnen, dies zu tun.

### Verwendung von `eventListeners` mit Objekten

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

### Inter-Dokumenten-Skripterstellung: Referenzieren von eingebetteten SVGs

Beim Verwenden von SVG innerhalb von HTML fügt Adobes SVG Viewer 3.0 automatisch eine Fenster-Eigenschaft namens `svgDocument` hinzu, die auf das SVG-Dokument verweist. Dies ist bei Mozillas nativer SVG-Implementierung nicht der Fall; daher funktioniert `window.svgDocument` in Mozilla nicht. Stattdessen können Sie

```js
const svgDoc = document.embeds["name_of_svg"].getSVGDocument();
```

verwenden, um eine Referenz zu einem eingebetteten SVG-Dokument zu erhalten.

Der beste Weg, um auf das [`Document`](/de/docs/Web/API/Document) zuzugreifen, das ein SVG-Dokument repräsentiert, ist, sich [`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) (wenn das Dokument in einem {{HTMLElement("iframe")}} präsentiert wird) oder [`HTMLObjectElement.contentDocument`](/de/docs/Web/API/HTMLObjectElement/contentDocument) (wenn das Dokument in einem {{HTMLElement("object")}} Element präsentiert wird) anzusehen, wie hier:

```js
const svgDoc = document.getElementById("iframe_element").contentDocument;
```

Zusätzlich bieten die Elemente {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("object")}} eine Methode, `getSVGDocument()`, die das [`XMLDocument`](/de/docs/Web/API/XMLDocument) repräsentiert, das das eingebettete SVG darstellt, oder `null` zurückgibt, wenn das Element kein SVG-Dokument repräsentiert.

Sie können auch `document.getElementById("svg_elem_name").getSVGDocument()` verwenden, was das gleiche Ergebnis liefert.

> [!NOTE]
> Sie könnten Dokumentation finden, die sich auf eine `SVGDocument`-Schnittstelle bezieht. Vor SVG 2 wurden SVG-Dokumente mit dieser Schnittstelle dargestellt. SVG-Dokumente werden nun jedoch mit der [`XMLDocument`](/de/docs/Web/API/XMLDocument) Schnittstelle dargestellt.

### Inter-Dokumenten-Skripterstellung: Aufrufen von JavaScript-Funktionen

Beim Aufrufen einer JavaScript-Funktion, die sich in der HTML-Datei befindet, von einer SVG-Datei aus, die in ein HTML-Dokument eingebettet ist, sollten Sie `parent.functionName()` verwenden, um auf die Funktion zuzugreifen. Obwohl das Adobe SVG-Viewer-Plugin die Verwendung von `functionName()` erlaubt, ist dies nicht der bevorzugte Weg.

> [!NOTE]
> Laut dem [SVG wiki](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication) ist die `"parent"` JS-Variable im Adobe SVG-Version 6 Vorschau-Plugin fehlerhaft. Der empfohlene Workaround ist die Verwendung von `"top"` anstelle von `"parent"`. Da es sich um eine Betaversion ihres Plugins handelt, können wir dies wahrscheinlich sicher ignorieren.

Weitere Informationen und einige Beispiele finden Sie auf der [SVG wiki Seite zur Inter-Dokumenten-Skripterstellung](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication).

### `setProperty` hat drei Parameter

Die Funktion `svgElement.style.setProperty("fill-opacity", "0.0")` wirft einen DOMException - `SYNTAX ERR` in Mozilla. Dieses Verhalten wird von der W3C in der DOM Level 2 Style Specification spezifiziert. Die Funktion `setProperty` ist als eine Funktion mit drei Parametern definiert. Das Obige kann durch `'svgElement.style.setProperty("fill-opacity", "0.0", "")'` ersetzt werden, was standardkonform ist.

### Links

[SVG wiki über Skripterstellung und Programmierung](https://web.archive.org/web/20100212202713/http://wiki.svg.org/Main_Page#Scripting_and_Programming)
