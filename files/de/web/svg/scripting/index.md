---
title: Scripting
slug: Web/SVG/Scripting
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

Man kann das Standardverhalten des Browsers mit der Methode `evt.preventDefault()` überschreiben, Ereignis-Listener mit der Syntax `element.addEventListener(event, function, useCapture)` zu Objekten hinzufügen und Element-Eigenschaften mit der Syntax wie `svgElement.style.setProperty("fill-opacity", "0.0", "")` setzen. Beachten Sie das Vorhandensein aller drei Argumente beim Setzen von Eigenschaften.

### Verhindern des Standardverhaltens im Ereigniscode

Beim Schreiben von Drag-and-Drop-Code kann es vorkommen, dass Text auf der Seite versehentlich ausgewählt wird, während Sie ziehen. Oder wenn Sie die Rücktaste in Ihrem Code verwenden möchten, wollen Sie das Standardverhalten des Browsers überschreiben, wenn die Rücktaste gedrückt wird, das darin besteht, zur vorherigen Seite zurückzugehen. Die Methode `evt.preventDefault()` ermöglicht es Ihnen, dies zu tun.

### Verwenden von `eventListeners` mit Objekten

Die Methoden `addEventListener()` und `removeEventListener()` sind sehr nützlich beim Schreiben interaktiver SVGs. Sie können ein Objekt, das das `handleEvent` Interface implementiert, als zweiten Parameter an diese Methoden übergeben.

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

### Inter-Dokumenten-Scripting: Referenzierung von eingebetteten SVG

Wenn SVG innerhalb von HTML verwendet wird, enthält Adobes SVG Viewer 3.0 automatisch eine window-Eigenschaft namens `svgDocument`, die auf das SVG-Dokument verweist. Dies ist bei der nativen SVG-Implementierung von Mozilla nicht der Fall; daher funktioniert die Verwendung von `window.svgDocument` in Mozilla nicht. Stattdessen können Sie

```js
const svgDoc = document.embeds["name_of_svg"].getSVGDocument();
```

verwenden, um eine Referenz zu einem eingebetteten SVG-Dokument zu erhalten.

Der beste Weg, um Zugriff auf das [`Document`](/de/docs/Web/API/Document) zu erhalten, das ein SVG-Dokument darstellt, besteht darin, `HTMLIFrameElement.contentDocument` (falls das Dokument in einem {{HTMLElement("iframe")}} dargestellt wird) oder `HTMLObjectElement.contentDocument` (falls das Dokument in einem {{HTMLElement("object")}} Element dargestellt wird) zu betrachten, wie folgt:

```js
const svgDoc = document.getElementById("iframe_element").contentDocument;
```

Darüber hinaus bieten die Elemente {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("object")}} eine Methode, `getSVGDocument()`, die das [`XMLDocument`](/de/docs/Web/API/XMLDocument) zurückgibt, das das eingebettete SVG des Elements darstellt oder `null`, wenn das Element kein SVG-Dokument darstellt.

Sie können auch `document.getElementById("svg_elem_name").getSVGDocument()` verwenden, was dasselbe Ergebnis liefert.

> [!NOTE]
> Möglicherweise finden Sie Dokumentationen, die sich auf ein `SVGDocument` Interface beziehen. Vor SVG 2 wurden SVG-Dokumente mit diesem Interface dargestellt. Jetzt werden SVG-Dokumente jedoch mit dem [`XMLDocument`](/de/docs/Web/API/XMLDocument) Interface dargestellt.

### Inter-Dokumenten-Scripting: Aufrufen von JavaScript-Funktionen

Wenn Sie eine JavaScript-Funktion aufrufen, die in der HTML-Datei residiert, aus einer SVG-Datei, die in ein HTML-Dokument eingebettet ist, sollten Sie `parent.functionname()` verwenden, um die Funktion zu referenzieren. Obwohl das Adobe SVG Viewer Plugin die Verwendung von `functionname()` erlaubt, ist es nicht der bevorzugte Weg.

> [!NOTE]
> Laut dem [SVG wiki](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication) ist die `"parent"` JS-Variable in der Vorschauversion 6 des Adobe SVG-Plugins fehlerhaft. Der vorgeschlagene Workaround besteht darin, `"top"` anstelle von `"parent"` zu verwenden. Da es sich um eine Beta-Version ihres Plugins handelt, können wir dies wahrscheinlich sicher ignorieren.

Weitere Informationen und einige Beispiele finden Sie auf der [SVG wiki inter-document scripting page](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication).

### `setProperty` hat drei Parameter

Die Funktion `svgElement.style.setProperty("fill-opacity", "0.0")` löst in Mozilla eine DOMException - `SYNTAX ERR` aus. Dieses Verhalten wird von der W3C in der DOM Level 2 Style Specification spezifiziert. Die Funktion `setProperty` ist als eine Funktion mit drei Parametern definiert. Das Obige kann durch `'svgElement.style.setProperty("fill-opacity", "0.0", "")'` ersetzt werden, was standardkonform ist.

### Links

[SVG wiki über Scripting und Programmierung](https://web.archive.org/web/20100212202713/http://wiki.svg.org/Main_Page#Scripting_and_Programming)
