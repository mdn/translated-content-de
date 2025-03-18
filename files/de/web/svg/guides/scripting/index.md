---
title: Skripting
slug: Web/SVG/Guides/Scripting
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Man kann Standardverhalten des Browsers mit der Methode `evt.preventDefault()` überschreiben, Event-Listener zu Objekten mit der Syntax `element.addEventListener(event, function, useCapture)` hinzufügen und Eigenschaften von Elementen mit einer Syntax wie `svgElement.style.setProperty("fill-opacity", "0.0", "")` setzen. Beachten Sie, dass alle drei Argumente beim Setzen von Eigenschaften vorhanden sind.

### Verhindern des Standardverhaltens im Ereigniscode

Beim Schreiben von Drag-and-Drop-Code kommt es manchmal vor, dass Text auf der Seite versehentlich ausgewählt wird, während man zieht. Oder wenn Sie die Rückschritttaste in Ihrem Code verwenden möchten, möchten Sie das Standardverhalten des Browsers überschreiben, wenn die Rückschritttaste gedrückt wird, da diese normalerweise zur vorherigen Seite zurückgeht. Die Methode `evt.preventDefault()` ermöglicht Ihnen dies.

### Verwendung von `eventListeners` mit Objekten

Die Methoden `addEventListener()` und `removeEventListener()` sind sehr nützlich beim Schreiben interaktiver SVGs. Sie können ein Objekt, das die Schnittstelle `handleEvent` implementiert, als zweiten Parameter an diese Methoden übergeben.

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

### Inter-Dokument-Skripting: Verweis auf eingebettetes SVG

Beim Verwenden von SVG innerhalb von HTML enthält Adobes SVG Viewer 3.0 automatisch eine Fenster-Eigenschaft namens `svgDocument`, die auf das SVG-Dokument zeigt. Dies ist bei Mozillas nativer SVG-Implementierung nicht der Fall; daher funktioniert die Verwendung von `window.svgDocument` in Mozilla nicht. Stattdessen können Sie

```js
const svgDoc = document.embeds["name_of_svg"].getSVGDocument();
```

verwenden, um eine Referenz auf ein eingebettetes SVG-Dokument zu erhalten.

Der beste Weg, um Zugriff auf das [`Document`](/de/docs/Web/API/Document) zu erhalten, das ein SVG-Dokument repräsentiert, besteht darin, [`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) (wenn das Dokument in einem {{HTMLElement("iframe")}} präsentiert wird) oder [`HTMLObjectElement.contentDocument`](/de/docs/Web/API/HTMLObjectElement/contentDocument) (wenn das Dokument in einem {{HTMLElement("object")}} Element präsentiert wird) anzusehen, wie hier dargestellt:

```js
const svgDoc = document.getElementById("iframe_element").contentDocument;
```

Zusätzlich bieten die Elemente {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, und {{HTMLElement("object")}} eine Methode, `getSVGDocument()`, welche das [`XMLDocument`](/de/docs/Web/API/XMLDocument) zurückgibt, das das eingebettete SVG des Elements repräsentiert, oder `null`, wenn das Element kein SVG-Dokument repräsentiert.

Sie können auch `document.getElementById("svg_elem_name").getSVGDocument()` verwenden, was dasselbe Ergebnis liefert.

> [!NOTE]
> Möglicherweise finden Sie Dokumentation, die auf eine `SVGDocument`-Schnittstelle verweist. Vor SVG 2 wurden SVG-Dokumente mit dieser Schnittstelle repräsentiert. Jetzt werden SVG-Dokumente jedoch mit der [`XMLDocument`](/de/docs/Web/API/XMLDocument)-Schnittstelle repräsentiert.

### Inter-Dokument-Skripting: Aufrufen von JavaScript-Funktionen

Wenn Sie eine JavaScript-Funktion aufrufen, die sich in der HTML-Datei befindet, aus einer SVG-Datei, die in ein HTML-Dokument eingebettet ist, sollten Sie `parent.functionName()` verwenden, um auf die Funktion zu verweisen. Obwohl das Adobe SVG Viewer-Plugin die Verwendung von `functionName()` erlaubt, ist es nicht die bevorzugte Vorgehensweise.

> [!NOTE]
> Laut dem [SVG Wiki](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication) ist die `"parent"` JS-Variable im Preview-Plugin der Adobe SVG-Version 6 defekt. Der empfohlene Workaround ist die Verwendung von `"top"` anstelle von `"parent"`. Da es sich um eine Betaversion ihres Plugins handelt, können wir dies wahrscheinlich sicher ignorieren.

Weitere Informationen und einige Beispiele finden Sie auf der [SVG Wiki Seite zum Inter-Dokument-Skripting](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication).

### `setProperty` hat drei Parameter

Die Funktion `svgElement.style.setProperty("fill-opacity", "0.0")` löst in Mozilla eine DOMException - `SYNTAX ERR` aus. Dieses Verhalten wird von der W3C im DOM Level 2 Style Specification spezifiziert. Die Funktion `setProperty` ist als Funktion mit drei Parametern definiert. Das oben Genannte kann durch `'svgElement.style.setProperty("fill-opacity", "0.0", "")'` ersetzt werden, was standardkonform ist.

### Links

[SVG Wiki über Skripting und Programmierung](https://web.archive.org/web/20100212202713/http://wiki.svg.org/Main_Page#Scripting_and_Programming)
