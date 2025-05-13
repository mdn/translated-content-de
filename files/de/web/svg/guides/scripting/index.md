---
title: Scripting
slug: Web/SVG/Guides/Scripting
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

Es gibt mehrere Möglichkeiten, SVG mit JavaScript zu erstellen und zu manipulieren. Dieses Dokument beschreibt die Ereignisbehandlung, Interaktivität und das Arbeiten mit eingebetteten SVG-Inhalten.

Man kann das Standardverhalten des Browsers mit der Methode `evt.preventDefault()` überschreiben, Ereignislistener mit der Syntax `element.addEventListener(event, function, useCapture)` zu Objekten hinzufügen und Eigenschaften von Elementen mit einer Syntax wie `svgElement.style.setProperty("fill-opacity", "0.0", "")` festlegen. Beachten Sie, dass alle drei Argumente beim Festlegen von Eigenschaften existieren.

### Verhindern des Standardverhaltens im Ereigniscode

Beim Schreiben von Drag-and-Drop-Code passiert es manchmal, dass Text auf der Seite versehentlich ausgewählt wird, während man zieht. Oder wenn Sie die Rücktaste in Ihrem Code verwenden möchten, möchten Sie das Standardverhalten des Browsers überschreiben, das beim Drücken der Rücktaste darin besteht, zur vorherigen Seite zurückzukehren. Die Methode `evt.preventDefault()` ermöglicht Ihnen dies.

### Verwendung von `eventListeners` mit Objekten

Die Methoden `addEventListener()` und `removeEventListener()` sind sehr nützlich beim Schreiben von interaktiven SVG. Sie können ein Objekt, das die `handleEvent` Schnittstelle implementiert, als zweiten Parameter an diese Methoden übergeben.

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

### Inter-Dokument-Scripting: Referenzierung eingebetteter SVG

Bei der Verwendung von SVG innerhalb von HTML enthält Adobe's SVG Viewer 3.0 automatisch eine Fenster-Eigenschaft namens `svgDocument`, die auf das SVG-Dokument zeigt. Dies ist jedoch nicht der Fall bei Mozillas nativer SVG-Implementierung; daher funktioniert `window.svgDocument` nicht in Mozilla. Stattdessen können Sie

```js
const svgDoc = document.embeds["name_of_svg"].getSVGDocument();
```

verwenden, um eine Referenz zu einem eingebetteten SVG-Dokument zu erhalten.

Der beste Weg, um Zugriff auf das [`Document`](/de/docs/Web/API/Document) zu erhalten, das ein SVG-Dokument darstellt, besteht darin, [`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) zu betrachten (wenn das Dokument in einem {{HTMLElement("iframe")}} präsentiert wird) oder [`HTMLObjectElement.contentDocument`](/de/docs/Web/API/HTMLObjectElement/contentDocument) (wenn das Dokument in einem {{HTMLElement("object")}} Element präsentiert wird), wie folgt:

```js
const svgDoc = document.getElementById("iframe_element").contentDocument;
```

Zusätzlich bieten die {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("object")}} Elemente eine Methode, `getSVGDocument()`, die das [`XMLDocument`](/de/docs/Web/API/XMLDocument) zurückgibt, das das eingebettete SVG des Elements darstellt, oder `null`, wenn das Element kein SVG-Dokument darstellt.

Sie können auch `document.getElementById("svg_elem_name").getSVGDocument()` verwenden, was das gleiche Ergebnis liefert.

> [!NOTE]
> Möglicherweise finden Sie Dokumentationen, die auf eine `SVGDocument` Schnittstelle verweisen. Vor SVG 2 wurden SVG-Dokumente mit dieser Schnittstelle dargestellt. SVG-Dokumente werden jedoch jetzt durch die [`XMLDocument`](/de/docs/Web/API/XMLDocument) Schnittstelle dargestellt.

### Inter-Dokument-Scripting: Aufrufen von JavaScript-Funktionen

Beim Aufrufen einer JavaScript-Funktion, die in der HTML-Datei von einer SVG-Datei aus eingebettet ist, sollten Sie `parent.functionName()` verwenden, um auf die Funktion zu verweisen. Obwohl das Adobe SVG Viewer Plugin die Verwendung von `functionName()` erlaubt, ist dies nicht die bevorzugte Vorgehensweise.

> [!NOTE]
> Laut dem [SVG wiki](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication) ist die `"parent"` JS-Variable im Vorschau-Plugin von Adobe SVG Version 6 fehlerhaft. Der empfohlene Workaround besteht darin, `"top"` anstelle von `"parent"` zu verwenden. Da es sich um eine Beta-Version ihres Plugins handelt, können wir dies wahrscheinlich sicher ignorieren.

Weitere Informationen und einige Beispiele finden Sie auf der [SVG wiki Inter-Dokument-Scripting-Seite](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication).

### `setProperty` hat drei Parameter

Die Funktion `svgElement.style.setProperty("fill-opacity", "0.0")` löst eine DOMException - `SYNTAX ERR` in Mozilla aus. Dieses Verhalten ist in der DOM Level 2 Style Specification des W3C festgelegt. Die Funktion `setProperty` ist als Funktion mit drei Parametern definiert. Das obige Beispiel kann durch `'svgElement.style.setProperty("fill-opacity", "0.0", "")'` ersetzt werden, das den Standards entspricht.

### Links

[SVG wiki on Scripting and Programming](https://web.archive.org/web/20100212202713/http://wiki.svg.org/Main_Page#Scripting_and_Programming)
