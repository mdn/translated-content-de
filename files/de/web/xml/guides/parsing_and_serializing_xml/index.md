---
title: XML analysieren und serialisieren
slug: Web/XML/Guides/Parsing_and_serializing_XML
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Manchmal benötigen Sie die Möglichkeit, {{Glossary("XML", "XML")}}-Inhalte zu analysieren und in einen {{Glossary("DOM", "DOM")}}-Baum umzuwandeln oder umgekehrt einen bestehenden DOM-Baum in XML zu serialisieren. In diesem Artikel untersuchen wir die von der Webplattform bereitgestellten Objekte, die die üblichen Aufgaben des Serialisierens und Analysierens von XML erleichtern.

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
  - : Serialisiert DOM-Bäume und wandelt sie in Zeichenfolgen um, die XML enthalten.
- [`DOMParser`](/de/docs/Web/API/DOMParser)
  - : Erstellt einen DOM-Baum durch das Analysieren einer Zeichenfolge, die XML enthält. Gibt ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) oder [`Document`](/de/docs/Web/API/Document) zurück, je nach Eingabedaten.
- [`fetch()`](/de/docs/Web/API/Window/fetch)
  - : Lädt Inhalte von einer URL. XML-Inhalte werden als Textzeichenfolge zurückgegeben, die mit `DOMParser` analysiert werden können.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
  - : Der Vorgänger von `fetch()`. Im Gegensatz zur `fetch()`-API kann `XMLHttpRequest` eine Ressource als `Document` über seine [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft zurückgeben.
- [XPath](/de/docs/Web/XML/XPath)
  - : Eine Technologie zur Erstellung von Zeichenfolgen, die Adressen für bestimmte Teile eines XML-Dokuments enthalten, und zur Lokalisierung von XML-Knoten basierend auf diesen Adressen.

## Ein XML-Dokument erstellen

Verwenden Sie eine der folgenden Methoden, um ein XML-Dokument zu erstellen (das eine Instanz von [`Document`](/de/docs/Web/API/Document) ist).

### Zeichenfolgen in DOM-Bäume umwandeln

Dieses Beispiel wandelt ein XML-Fragment in einer Zeichenfolge mithilfe von [`DOMParser`](/de/docs/Web/API/DOMParser) in einen DOM-Baum um:

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

### URL-adressierbare Ressourcen in DOM-Bäume umwandeln

#### Verwendung von fetch

Hier ist ein Beispielcode, der eine URL-adressierbare XML-Datei liest und in einen DOM-Baum analysiert:

```js
fetch("example.xml")
  .then((response) => response.text())
  .then((text) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/xml");
    console.log(doc.documentElement.nodeName);
  });
```

Dieser Code ruft die Ressource als Textzeichenfolge ab und verwendet dann [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString), um ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) zu erstellen.

Wenn das Dokument {{Glossary("HTML", "HTML")}} ist, gibt der oben gezeigte Code ein [`Document`](/de/docs/Web/API/Document) zurück. Wenn das Dokument XML ist, ist das resultierende Objekt tatsächlich ein `XMLDocument`. Die beiden Typen sind im Wesentlichen gleich; der Unterschied ist größtenteils historisch, obwohl die Differenzierung auch einige praktische Vorteile hat.

> [!NOTE]
> Es gibt tatsächlich ein [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Interface, aber es ist nicht unbedingt ein eigenständiger Typ. In einigen Browsern ist es das, während es in anderen ein Alias für das `Document`-Interface ist.

## Ein XML-Dokument serialisieren

Mit einem [`Document`](/de/docs/Web/API/Document) können Sie den DOM-Baum des Dokuments mit der Methode [`XMLSerializer.serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) zurück in XML serialisieren.

Verwenden Sie die folgenden Ansätze, um den Inhalt des im vorherigen Abschnitt erstellten XML-Dokuments zu serialisieren.

### DOM-Bäume in Zeichenfolgen serialisieren

Erstellen Sie zuerst einen DOM-Baum wie im Abschnitt [Using the Document Object Model](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model) beschrieben. Alternativ können Sie einen mit [`fetch()`](/de/docs/Web/API/Window/fetch) erhaltenen DOM-Baum verwenden.

Um den DOM-Baum `doc` in XML-Text zu serialisieren, rufen Sie [`XMLSerializer.serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) auf:

```js
const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(doc);
```

### HTML-Dokumente serialisieren

Wenn der DOM, den Sie haben, ein HTML-Dokument ist, können Sie `serializeToString()` verwenden, aber es gibt eine einfachere Option: Verwenden Sie einfach die Eigenschaft [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (wenn Sie nur die Nachkommen des angegebenen Knotens möchten) oder die Eigenschaft [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), wenn Sie den Knoten und alle seine Nachkommen möchten.

```js
const docInnerHtml = document.documentElement.innerHTML;
```

Das Ergebnis ist, dass `docInnerHtml` eine Zeichenfolge enthält, die HTML der Inhalte des Dokuments enthält; d.h. die Inhalte des {{HTMLElement("body")}}-Elements.

Sie können HTML erhalten, das dem `<body>` _und_ seinen Nachkommen entspricht, mit diesem Code:

```js
const docOuterHtml = document.documentElement.outerHTML;
```

## Siehe auch

- [XPath](/de/docs/Web/XML/XPath)
- [`fetch()`](/de/docs/Web/API/Window/fetch)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`Document`](/de/docs/Web/API/Document), [`XMLDocument`](/de/docs/Web/API/XMLDocument) und [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)
