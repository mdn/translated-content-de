---
title: XML parsen und serialisieren
slug: Web/XML/Guides/Parsing_and_serializing_XML
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Manchmal müssen Sie {{Glossary("XML", "XML")}}-Inhalte parsen und in einen {{Glossary("DOM", "DOM")}}-Baum umwandeln oder umgekehrt, einen bestehenden DOM-Baum in XML serialisieren. In diesem Artikel betrachten wir die Objekte, die von der Webplattform bereitgestellt werden, um die gängigen Aufgaben des Serialisierens und Parsens von XML zu erleichtern.

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
  - : Serialisiert DOM-Bäume und wandelt sie in Strings um, die XML enthalten.
- [`DOMParser`](/de/docs/Web/API/DOMParser)
  - : Konstruiert einen DOM-Baum, indem er einen String, der XML enthält, analysiert und entsprechend den Eingabedaten ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) oder [`Document`](/de/docs/Web/API/Document) zurückgibt.
- [`fetch()`](/de/docs/Web/API/Window/fetch)
  - : Lädt Inhalte von einer URL. XML-Inhalte werden als Textstring zurückgegeben, den Sie mit `DOMParser` parsen können.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
  - : Der Vorgänger von `fetch()`. Im Gegensatz zur `fetch()`-API kann `XMLHttpRequest` eine Ressource als `Document` über seine [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft zurückgeben.
- [XPath](/de/docs/Web/XML/XPath)
  - : Eine Technologie zur Erstellung von Strings, die Adressen für bestimmte Teile eines XML-Dokuments enthalten und zum Auffinden von XML-Knoten basierend auf diesen Adressen verwendet werden.

## Ein XML-Dokument erstellen

Verwenden Sie eine der folgenden Methoden, um ein XML-Dokument zu erstellen (das eine Instanz von [`Document`](/de/docs/Web/API/Document) ist).

### Strings in DOM-Bäume parsen

Dieses Beispiel wandelt ein XML-Fragment in einem String in einen DOM-Baum um, indem es einen [`DOMParser`](/de/docs/Web/API/DOMParser) verwendet:

```js
const xmlStr = '<q id="a"><span id="b">hey!</span></q>';
const parser = new DOMParser();
const doc = parser.parseFromString(xmlStr, "application/xml");
// print the name of the root element or error message
const errorNode = doc.querySelector("parsererror");
if (errorNode) {
  console.log("error while parsing");
} else {
  console.log(doc.documentElement.nodeName);
}
```

### URL-adressierbare Ressourcen in DOM-Bäume parsen

#### Verwendung von fetch

Hier ist Beispielcode, der eine URL-adressierbare XML-Datei liest und in einen DOM-Baum parst:

```js
fetch("example.xml")
  .then((response) => response.text())
  .then((text) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/xml");
    console.log(doc.documentElement.nodeName);
  });
```

Dieser Code holt die Ressource als Textstring und verwendet dann [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString), um ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) zu konstruieren.

Wenn das Dokument {{Glossary("HTML", "HTML")}} ist, gibt der oben gezeigte Code ein [`Document`](/de/docs/Web/API/Document) zurück. Ist das Dokument XML, ist das resultierende Objekt tatsächlich ein `XMLDocument`. Die beiden Typen sind im Wesentlichen gleich; der Unterschied ist größtenteils historisch, obwohl die Unterscheidung auch einige praktische Vorteile bietet.

> [!NOTE]
> Es gibt tatsächlich ein [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Interface, aber es ist nicht unbedingt ein unabhängiger Typ. In einigen Browsern ist es das, während es in anderen ein Alias für das `Document`-Interface ist.

## Ein XML-Dokument serialisieren

Angenommen, Sie haben ein [`Document`](/de/docs/Web/API/Document), können Sie den DOM-Baum des Dokuments mit der Methode [`XMLSerializer.serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) zurück in XML serialisieren.

Verwenden Sie die folgenden Ansätze, um die Inhalte des im vorherigen Abschnitt erstellten XML-Dokuments zu serialisieren.

### DOM-Bäume zu Strings serialisieren

Erstellen Sie zunächst einen DOM-Baum, wie in [Die Verwendung des Document Object Model](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model) beschrieben. Alternativ verwenden Sie einen DOM-Baum, der von [`fetch()`](/de/docs/Web/API/Window/fetch) erhalten wurde.

Um den DOM-Baum `doc` in XML-Text zu serialisieren, rufen Sie [`XMLSerializer.serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) auf:

```js
const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(doc);
```

### HTML-Dokumente serialisieren

Wenn der DOM, den Sie haben, ein HTML-Dokument ist, können Sie `serializeToString()` verwenden, aber es gibt eine weitere Option, die viele einfacher finden: Verwenden Sie die Eigenschaft [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (wenn Sie nur die Nachkommen des angegebenen Knotens möchten) oder die Eigenschaft [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), wenn Sie den Knoten und alle seine Nachkommen möchten.

```js
const docInnerHtml = document.documentElement.innerHTML;
```

Als Ergebnis enthält `docInnerHtml` einen String, der das HTML der Inhalte des Dokuments enthält; das heißt, den Inhalt des {{HTMLElement("body")}}-Elements.

Sie können HTML erhalten, das zu `<body>` _und_ seinen Nachkommen gehört, mit diesem Code:

```js
const docOuterHtml = document.documentElement.outerHTML;
```

## Siehe auch

- [XPath](/de/docs/Web/XML/XPath)
- [`fetch()`](/de/docs/Web/API/Window/fetch)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`Document`](/de/docs/Web/API/Document), [`XMLDocument`](/de/docs/Web/API/XMLDocument) und [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)
