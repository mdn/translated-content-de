---
title: XML Parsing und Serialisierung
slug: Web/XML/Parsing_and_serializing_XML
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/XML")}}

Manchmal müssen Sie [XML](/de/docs/Glossary/XML)-Inhalte analysieren und in einen [DOM](/de/docs/Glossary/DOM)-Baum umwandeln oder umgekehrt, einen vorhandenen DOM-Baum in XML serialisieren. In diesem Artikel werden wir uns die Objekte ansehen, die von der Webplattform bereitgestellt werden, um die gängigen Aufgaben der Serialisierung und Analyse von XML zu erleichtern.

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
  - : Serialisiert DOM-Bäume und wandelt sie in Zeichenfolgen um, die XML enthalten.
- [`DOMParser`](/de/docs/Web/API/DOMParser)
  - : Konstruiert einen DOM-Baum durch das Parsen einer Zeichenkette, die XML enthält, und gibt ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) oder [`Document`](/de/docs/Web/API/Document) zurück, abhängig von den Eingabedaten.
- [`fetch()`](/de/docs/Web/API/Window/fetch)
  - : Lädt Inhalte von einer URL. XML-Inhalt wird als Textzeichenfolge zurückgegeben, die Sie mit `DOMParser` analysieren können.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
  - : Der Vorläufer von `fetch()`. Im Gegensatz zur `fetch()`-API kann `XMLHttpRequest` eine Ressource als `Document` über ihre [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft zurückgeben.
- [XPath](/de/docs/Web/XPath)
  - : Eine Technologie zum Erstellen von Zeichenfolgen, die Adressen für bestimmte Teile eines XML-Dokuments enthalten, und zum Auffinden von XML-Knoten basierend auf diesen Adressen.

## Erstellen eines XML-Dokuments

Verwenden Sie eine der folgenden Methoden, um ein XML-Dokument zu erstellen (das eine Instanz von [`Document`](/de/docs/Web/API/Document) ist).

### Konvertieren von Zeichenfolgen in DOM-Bäume

Dieses Beispiel konvertiert ein XML-Fragment in einer Zeichenkette in einen DOM-Baum mit einem [`DOMParser`](/de/docs/Web/API/DOMParser):

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

Dieser Code ruft die Ressource als Textzeichenfolge ab und verwendet dann [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString), um ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) zu konstruieren.

Wenn das Dokument [HTML](/de/docs/Glossary/HTML) ist, gibt der oben gezeigte Code ein [`Document`](/de/docs/Web/API/Document) zurück. Wenn das Dokument XML ist, ist das resultierende Objekt tatsächlich ein `XMLDocument`. Die beiden Typen sind im Wesentlichen gleich; der Unterschied ist größtenteils historisch, obwohl die Differenzierung einige praktische Vorteile hat.

> [!NOTE]
> Es gibt tatsächlich auch eine [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle, aber sie ist nicht unbedingt ein unabhängiger Typ. In einigen Browsern ist sie es, während sie in anderen ein Alias für die `Document`-Schnittstelle ist.

## Serialisieren eines XML-Dokuments

Angenommen, Sie haben ein [`Document`](/de/docs/Web/API/Document), können Sie den DOM-Baum des Dokuments mit der Methode [`XMLSerializer.serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) zurück in XML serialisieren.

Verwenden Sie die folgenden Ansätze, um die Inhalte des XML-Dokuments zu serialisieren, das Sie im vorherigen Abschnitt erstellt haben.

### Serialisieren von DOM-Bäumen in Zeichenfolgen

Erstellen Sie zuerst einen DOM-Baum wie in [Using the Document Object Model](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model) beschrieben. Alternativ verwenden Sie einen DOM-Baum, der von [`fetch()`](/de/docs/Web/API/Window/fetch) erhalten wurde.

Um den DOM-Baum `doc` in XML-Text zu serialisieren, rufen Sie [`XMLSerializer.serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) auf:

```js
const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(doc);
```

### Serialisieren von HTML-Dokumenten

Wenn der DOM, den Sie haben, ein HTML-Dokument ist, können Sie `serializeToString()` verwenden, aber es gibt eine einfachere Option: Verwenden Sie einfach die [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft (wenn Sie nur die Nachkommen des angegebenen Knotens wollen) oder die [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)-Eigenschaft, wenn Sie den Knoten und alle seine Nachkommen wollen.

```js
const docInnerHtml = document.documentElement.innerHTML;
```

Das Ergebnis ist, dass `docInnerHtml` eine Zeichenfolge enthält, die das HTML der Inhalte des Dokuments darstellt; also die Inhalte des {{HTMLElement("body")}}-Elements.

Sie können HTML erhalten, das dem `<body>` _und_ seinen Nachkommen entspricht, mit diesem Code:

```js
const docOuterHtml = document.documentElement.outerHTML;
```

## Siehe auch

- [XPath](/de/docs/Web/XPath)
- [`fetch()`](/de/docs/Web/API/Window/fetch)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`Document`](/de/docs/Web/API/Document), [`XMLDocument`](/de/docs/Web/API/XMLDocument) und [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)
