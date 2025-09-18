---
title: Skripting
slug: Web/SVG/Guides/Scripting
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Es gibt mehrere Möglichkeiten, SVG mit JavaScript zu erstellen und zu manipulieren. Dieses Dokument beschreibt die Ereignisbehandlung, Interaktivität und die Arbeit mit eingebetteten SVG-Inhalten.

Man kann Standardverhalten des Browsers mit der Methode `evt.preventDefault()` überschreiben, Ereignislistener mit der Syntax `element.addEventListener(event, function, useCapture)` zu Objekten hinzufügen und Eigenschaften von Elementen mit einer Syntax wie `svgElement.style.setProperty("fill-opacity", "0.0", "")` setzen. Beachten Sie, dass alle drei Argumente beim Setzen von Eigenschaften vorhanden sein müssen.

### Standardverhalten im Ereigniscode verhindern

Beim Schreiben von Drag-and-Drop-Code passiert es manchmal, dass Text auf der Seite versehentlich beim Ziehen ausgewählt wird. Oder wenn Sie die Rücktaste in Ihrem Code verwenden möchten, möchten Sie das Standardverhalten des Browsers überschreiben, wenn die Rücktaste gedrückt wird, welches darin besteht, auf die vorherige Seite zurückzugehen. Die Methode `evt.preventDefault()` ermöglicht Ihnen dies.

### Verwendung von `eventListeners` mit Objekten

Die Methoden `addEventListener()` und `removeEventListener()` sind sehr nützlich beim Schreiben interaktiver SVG. Sie können ein Objekt, das die `handleEvent` Schnittstelle implementiert, als zweites Argument an diese Methoden übergeben.

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

### Inter-Dokument-Skripting: Referenzieren eingebetteter SVG

Beim Verwenden von SVG innerhalb von HTML schließt Adobes SVG Viewer 3.0 automatisch eine Fenster-Eigenschaft namens `svgDocument` ein, die auf das SVG-Dokument zeigt. Dies ist bei Mozillas nativer SVG-Implementierung nicht der Fall, daher funktioniert `window.svgDocument` in Mozilla nicht. Stattdessen können Sie

```js
const svgDoc = document.embeds["name_of_svg"].getSVGDocument();
```

verwenden, um eine Referenz zu einem eingebetteten SVG-Dokument zu erhalten.

Der beste Weg, Zugang zu dem [`Document`](/de/docs/Web/API/Document) zu erhalten, das ein SVG-Dokument repräsentiert, ist, [`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) anzusehen (wenn das Dokument in einem {{HTMLElement("iframe")}} präsentiert wird) oder [`HTMLObjectElement.contentDocument`](/de/docs/Web/API/HTMLObjectElement/contentDocument) (wenn das Dokument in einem {{HTMLElement("object")}} Element präsentiert wird), so wie:

```js
const svgDoc = document.getElementById("iframe_element").contentDocument;
```

Darüber hinaus bieten die {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("object")}} Elemente eine Methode, `getSVGDocument()`, die das [`XMLDocument`](/de/docs/Web/API/XMLDocument) zurückgibt, das das eingebettete SVG des Elements darstellt, oder `null`, wenn das Element kein SVG-Dokument darstellt.

Sie können auch `document.getElementById("svg_elem_name").getSVGDocument()` verwenden, was das gleiche Ergebnis liefert.

> [!NOTE]
> Möglicherweise finden Sie Dokumentationen, die auf eine `SVGDocument` Schnittstelle verweisen. Vor SVG 2 wurden SVG-Dokumente mit dieser Schnittstelle dargestellt. Heutzutage werden SVG-Dokumente jedoch mit der [`XMLDocument`](/de/docs/Web/API/XMLDocument) Schnittstelle dargestellt.

### Inter-Dokument-Skripting: Aufrufen von JavaScript-Funktionen

Beim Aufrufen einer JavaScript-Funktion, die sich in der HTML-Datei befindet, von einer SVG-Datei, die in ein HTML-Dokument eingebettet ist, sollten Sie `parent.functionName()` verwenden, um die Funktion zu referenzieren. Obwohl das Adobe SVG Viewer Plugin die Nutzung von `functionName()` erlaubt, ist dies nicht die bevorzugte Methode.

> [!NOTE]
> Laut dem [SVG Wiki](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication) ist die `"parent"` JS-Variable im Adobe SVG-Version 6 Vorschau-Plugin fehlerhaft. Der empfohlene Workaround besteht darin, `"top"` anstelle von `"parent"` zu verwenden. Da es sich um eine Betaversion ihres Plugins handelt, können wir dies wahrscheinlich getrost ignorieren.

Weitere Informationen und einige Beispiele finden Sie auf der [SVG Wiki-Seite zum Inter-Dokument-Skripting](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication).

### `setProperty` hat drei Parameter

Die Funktion `svgElement.style.setProperty("fill-opacity", "0.0")` wirft eine DOMException - `SYNTAX ERR` in Mozilla. Dieses Verhalten ist in der DOM Level 2 Style Specification des W3C spezifiziert. Die Funktion `setProperty` wird als Funktion mit drei Parametern definiert. Der obige Code kann durch `'svgElement.style.setProperty("fill-opacity", "0.0", "")'` ersetzt werden, welches standardkonform ist.

### Links

[SVG Wiki zu Skripting und Programmierung](https://web.archive.org/web/20100212202713/http://wiki.svg.org/Main_Page#Scripting_and_Programming)
