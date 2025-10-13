---
title: XML parsen und serialisieren
slug: Web/XML/Guides/Parsing_and_serializing_XML
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

Manchmal müssen Sie Inhalte in {{Glossary("XML", "XML")}} parsen und in einen {{Glossary("DOM", "DOM")}}-Baum umwandeln oder umgekehrt einen bestehenden DOM-Baum in XML serialisieren. In diesem Artikel schauen wir uns die Objekte an, die die Web-Plattform bereitstellt, um die üblichen Aufgaben des XML-Serialisierens und -Parsens zu erleichtern.

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
  - : Serialisiert DOM-Bäume und wandelt sie in Zeichenfolgen um, die XML enthalten.
- [`DOMParser`](/de/docs/Web/API/DOMParser)
  - : Erstellt einen DOM-Baum, indem eine Zeichenfolge, die XML enthält, geparst wird, und gibt ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) oder ein [`Document`](/de/docs/Web/API/Document) zurück, je nach Eingabedaten.
- [`fetch()`](/de/docs/Web/API/Window/fetch)
  - : Lädt Inhalte von einer URL. XML-Inhalte werden als Zeichenfolge zurückgegeben, die Sie mit `DOMParser` parsen können.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
  - : Der Vorgänger von `fetch()`. Im Gegensatz zur `fetch()`-API kann `XMLHttpRequest` eine Ressource als `Document` über seine [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft zurückgeben.
- [XPath](/de/docs/Web/XML/XPath)
  - : Eine Technologie zum Erstellen von Zeichenfolgen, die Adressen für bestimmte Teile eines XML-Dokuments enthalten, und zum Lokalisieren von XML-Knoten basierend auf diesen Adressen.

## Erstellen eines XML-Dokuments

Verwenden Sie eine der folgenden Methoden, um ein XML-Dokument zu erstellen (das eine Instanz von [`Document`](/de/docs/Web/API/Document) ist).

### Parsen von Zeichenfolgen in DOM-Bäume

Dieses Beispiel konvertiert ein XML-Fragment in einer Zeichenfolge in einen DOM-Baum mithilfe eines [`DOMParser`](/de/docs/Web/API/DOMParser):

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

### Parsen von URL-adressierbaren Ressourcen in DOM-Bäume

#### Verwendung von fetch

Hier ist ein Codebeispiel, das eine URL-adressierbare XML-Datei liest und in einen DOM-Baum parst:

```js
fetch("example.xml")
  .then((response) => response.text())
  .then((text) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/xml");
    console.log(doc.documentElement.nodeName);
  });
```

Dieser Code holt die Ressource als Zeichenfolge ab und verwendet dann [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString), um ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) zu erstellen.

Wenn das Dokument {{Glossary("HTML", "HTML")}} ist, gibt der obige Code ein [`Document`](/de/docs/Web/API/Document) zurück. Wenn das Dokument XML ist, ist das resultierende Objekt tatsächlich ein `XMLDocument`. Die beiden Typen sind im Wesentlichen gleich; der Unterschied ist größtenteils historisch, obwohl die Unterscheidung auch einige praktische Vorteile hat.

> [!NOTE]
> Es gibt tatsächlich auch eine [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle, aber sie ist nicht unbedingt ein eigenständiger Typ. In einigen Browsern ist sie das, während sie in anderen ein Alias für die `Document`-Schnittstelle ist.

## Serialisieren eines XML-Dokuments

Angenommen, Sie haben ein [`Document`](/de/docs/Web/API/Document), können Sie den DOM-Baum des Dokuments mithilfe der Methode [`XMLSerializer.serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) wieder in XML serialisieren.

Verwenden Sie die folgenden Methoden, um die Inhalte des XML-Dokuments zu serialisieren, das Sie im vorherigen Abschnitt erstellt haben.

### Serialisieren von DOM-Bäumen zu Zeichenfolgen

Erstellen Sie zuerst einen DOM-Baum, wie im [Verwenden des Document Object Model](/de/docs/Web/API/Document_Object_Model) beschrieben. Alternativ können Sie einen DOM-Baum verwenden, der von [`fetch()`](/de/docs/Web/API/Window/fetch) erhalten wurde.

Um den DOM-Baum `doc` in XML-Text zu serialisieren, rufen Sie [`XMLSerializer.serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) auf:

```js
const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(doc);
```

### Serialisieren von HTML-Dokumenten

Wenn der DOM, den Sie haben, ein HTML-Dokument ist, können Sie `serializeToString()` verwenden, aber es gibt eine andere Option, die viele als einfacher empfinden: Verwenden Sie die Eigenschaft [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (wenn Sie nur die Nachkommen des angegebenen Knotens möchten) oder die Eigenschaft [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), wenn Sie den Knoten und alle seine Nachkommen wünschen.

```js
const docInnerHtml = document.documentElement.innerHTML;
```

Das Ergebnis ist, dass `docInnerHtml` eine Zeichenfolge enthält, die das HTML der Inhalte des Dokuments enthält; das heißt, die Inhalte des {{HTMLElement("body")}}-Elements.

Sie können HTML erhalten, das dem `<body>` _und_ seinen Nachkommen entspricht, mit diesem Code:

```js
const docOuterHtml = document.documentElement.outerHTML;
```

## Siehe auch

- [XPath](/de/docs/Web/XML/XPath)
- [`fetch()`](/de/docs/Web/API/Window/fetch)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`Document`](/de/docs/Web/API/Document), [`XMLDocument`](/de/docs/Web/API/XMLDocument), und [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)
