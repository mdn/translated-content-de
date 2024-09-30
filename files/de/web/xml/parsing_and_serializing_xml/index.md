---
title: Parsing und Serialisieren von XML
slug: Web/XML/Parsing_and_serializing_XML
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/XML")}}

Manchmal müssen Sie [XML](/de/docs/Glossary/XML)-Inhalte analysieren und in einen [DOM](/de/docs/Glossary/DOM)-Baum konvertieren oder umgekehrt einen vorhandenen DOM-Baum in XML serialisieren. In diesem Artikel werden wir die von der Webplattform bereitgestellten Objekte betrachten, die die häufigen Aufgaben des Serialisierens und Parsens von XML erleichtern.

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
  - : Serialisiert DOM-Bäume und wandelt sie in Zeichenfolgen um, die XML enthalten.
- [`DOMParser`](/de/docs/Web/API/DOMParser)
  - : Erstellt durch das Parsen einer Zeichenfolge, die XML enthält, einen DOM-Baum und gibt ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) oder [`Document`](/de/docs/Web/API/Document) zurück, je nach den Eingabedaten.
- [`fetch()`](/de/docs/Web/API/Window/fetch)
  - : Lädt Inhalte von einer URL. XML-Inhalte werden als Textzeichenfolge zurückgegeben, die Sie mit `DOMParser` parsen können.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
  - : Der Vorläufer von `fetch()`. Im Gegensatz zur `fetch()`-API kann `XMLHttpRequest` eine Ressource als `Document` über seine [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft zurückgeben.
- [XPath](/de/docs/Web/XPath)
  - : Eine Technologie zur Erstellung von Zeichenfolgen, die Adressen für bestimmte Abschnitte eines XML-Dokuments enthalten, und zur Lokalisierung von XML-Knoten basierend auf diesen Adressen.

## Erstellen eines XML-Dokuments

Verwenden Sie eine der folgenden Methoden, um ein XML-Dokument zu erstellen (das eine Instanz von [`Document`](/de/docs/Web/API/Document) ist).

### Zeichenfolgen in DOM-Bäume parsen

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

### URL-adressierbare Ressourcen in DOM-Bäume parsen

#### Verwenden von fetch

Hier ist ein Beispielcode, der eine URL-adressierbare XML-Datei liest und in einen DOM-Baum parst:

```js
fetch("example.xml")
  .then((response) => response.text())
  .then((text) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/xml");
    console.log(doc.documentElement.nodeName);
  });
```

Dieser Code holt die Ressource als Textzeichenfolge und verwendet dann [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString), um ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) zu erstellen.

Wenn das Dokument [HTML](/de/docs/Glossary/HTML) ist, gibt der oben gezeigte Code ein [`Document`](/de/docs/Web/API/Document) zurück. Wenn das Dokument XML ist, ist das resultierende Objekt tatsächlich ein `XMLDocument`. Die beiden Typen sind im Wesentlichen gleich; der Unterschied ist hauptsächlich historisch, obwohl die Unterscheidung auch einige praktische Vorteile hat.

> [!NOTE]
> Es gibt tatsächlich auch eine [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle, aber sie ist nicht notwendigerweise ein eigenständiger Typ. In einigen Browsern ist sie das, während sie in anderen ein Alias für die `Document`-Schnittstelle ist.

## Serialisieren eines XML-Dokuments

Mit einem [`Document`](/de/docs/Web/API/Document) können Sie den DOM-Baum des Dokuments mithilfe der Methode [`XMLSerializer.serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) zurück in XML serialisieren.

Verwenden Sie die folgenden Methoden, um die Inhalte des im vorherigen Abschnitt erstellten XML-Dokuments zu serialisieren.

### Serialisieren von DOM-Bäumen in Zeichenfolgen

Erstellen Sie zuerst einen DOM-Baum wie in [Verwenden des Document Object Models](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model) beschrieben. Alternativ können Sie einen DOM-Baum verwenden, der mit [`fetch()`](/de/docs/Web/API/Window/fetch) erhalten wurde.

Um den DOM-Baum `doc` in XML-Text zu serialisieren, rufen Sie [`XMLSerializer.serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) auf:

```js
const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(doc);
```

### Serialisieren von HTML-Dokumenten

Wenn das DOM, das Sie haben, ein HTML-Dokument ist, können Sie `serializeToString()` verwenden, aber es gibt eine einfachere Option: Verwenden Sie einfach die [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft (wenn Sie nur die Nachkommen des angegebenen Knotens möchten) oder die [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)-Eigenschaft, wenn Sie den Knoten und alle seine Nachkommen möchten.

```js
const docInnerHtml = document.documentElement.innerHTML;
```

Als Ergebnis ist `docInnerHtml` eine Zeichenfolge, die das HTML der Inhalte des Dokuments enthält; das heißt, die Inhalte des {{HTMLElement("body")}}-Elements.

Sie können HTML, das dem `<body>` und seinen Nachkommen entspricht, mit diesem Code erhalten:

```js
const docOuterHtml = document.documentElement.outerHTML;
```

## Siehe auch

- [XPath](/de/docs/Web/XPath)
- [`fetch()`](/de/docs/Web/API/Window/fetch)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`Document`](/de/docs/Web/API/Document), [`XMLDocument`](/de/docs/Web/API/XMLDocument), und [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)
