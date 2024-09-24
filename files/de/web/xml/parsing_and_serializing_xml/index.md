---
title: Parsen und Serialisieren von XML
slug: Web/XML/Parsing_and_serializing_XML
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/XML")}}

Manchmal müssen Sie {{Glossary("XML")}}-Inhalte parsen und in einen {{Glossary("DOM")}}-Baum konvertieren oder umgekehrt einen vorhandenen DOM-Baum in XML serialisieren. In diesem Artikel betrachten wir die von der Webplattform bereitgestellten Objekte, die die häufigen Aufgaben des Serialisierens und Parsens von XML vereinfachen.

- {{domxref("XMLSerializer")}}
  - : Serialisiert DOM-Bäume und konvertiert sie in Zeichenfolgen, die XML enthalten.
- {{domxref("DOMParser")}}
  - : Erstellt einen DOM-Baum durch Parsen einer Zeichenkette, die XML enthält, und gibt je nach Eingabedaten entweder ein {{domxref("XMLDocument")}} oder {{domxref("Document")}} zurück.
- {{domxref("Window/fetch", "fetch()")}}
  - : Lädt Inhalte von einer URL. XML-Inhalte werden als Textzeichenfolge zurückgegeben, die Sie mit `DOMParser` parsen können.
- {{domxref("XMLHttpRequest")}}
  - : Der Vorläufer von `fetch()`. Im Gegensatz zur `fetch()`-API kann `XMLHttpRequest` eine Ressource als `Document` über seine {{domxref("XMLHttpRequest.responseXML", "responseXML")}}-Eigenschaft zurückgeben.
- [XPath](/de/docs/Web/XPath)
  - : Eine Technologie zum Erstellen von Zeichenfolgen, die Adressen für bestimmte Abschnitte eines XML-Dokuments enthalten, und zum Auffinden von XML-Knoten basierend auf diesen Adressen.

## Erstellen eines XML-Dokuments

Verwenden Sie einen der folgenden Ansätze, um ein XML-Dokument zu erstellen (das eine Instanz von {{domxref("Document")}} ist).

### Parsen von Zeichenketten in DOM-Bäume

Dieses Beispiel konvertiert ein XML-Fragment in einer Zeichenkette in einen DOM-Baum unter Verwendung eines {{domxref("DOMParser")}}:

```js
const xmlStr = '<q id="a"><span id="b">hey!</span></q>';
const parser = new DOMParser();
const doc = parser.parseFromString(xmlStr, "application/xml");
// den Namen des Wurzelelements oder Fehlermeldung ausgeben
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

Dieser Code lädt die Ressource als Textzeichenfolge und verwendet dann {{domxref("DOMParser.parseFromString()")}}, um ein {{domxref("XMLDocument")}} zu erstellen.

Wenn das Dokument {{Glossary("HTML")}} ist, gibt der oben gezeigte Code ein {{domxref("Document")}} zurück. Wenn das Dokument XML ist, ist das resultierende Objekt tatsächlich ein `XMLDocument`. Die beiden Typen sind im Wesentlichen gleich; der Unterschied ist größtenteils historisch, obwohl die Differenzierung auch praktische Vorteile haben kann.

> [!NOTE]
> Es gibt tatsächlich eine {{domxref("HTMLDocument")}}-Schnittstelle, aber sie ist nicht zwangsläufig ein unabhängiger Typ. In einigen Browsern ist sie es, während sie in anderen ein Alias für die `Document`-Schnittstelle ist.

## Serialisieren eines XML-Dokuments

Wenn Sie ein {{domxref("Document")}} haben, können Sie den DOM-Baum des Dokuments mit der Methode {{domxref("XMLSerializer.serializeToString()")}} wieder in XML serialisieren.

Verwenden Sie die folgenden Ansätze, um die Inhalte des XML-Dokuments zu serialisieren, das Sie im vorherigen Abschnitt erstellt haben.

### Serialisieren von DOM-Bäumen in Zeichenfolgen

Zuerst erstellen Sie einen DOM-Baum, wie im Abschnitt [Verwendung des Document Object Model](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model) beschrieben. Alternativ verwenden Sie einen DOM-Baum, der mit {{ domxref("Window/fetch", "fetch()") }} erhalten wurde.

Um den DOM-Baum `doc` in XML-Text zu serialisieren, rufen Sie {{domxref("XMLSerializer.serializeToString()")}} auf:

```js
const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(doc);
```

### Serialisieren von HTML-Dokumenten

Wenn der DOM ein HTML-Dokument ist, können Sie `serializeToString()` verwenden, aber es gibt eine einfachere Option: verwenden Sie einfach die Eigenschaft {{domxref("Element.innerHTML")}} (wenn Sie nur die Nachkommen des angegebenen Knotens möchten) oder die Eigenschaft {{domxref("Element.outerHTML")}}, wenn Sie den Knoten und alle seine Nachkommen haben möchten.

```js
const docInnerHtml = document.documentElement.innerHTML;
```

Das Ergebnis ist, dass `docInnerHtml` eine Zeichenfolge ist, die das HTML der Inhalte des Dokuments enthält; das bedeutet den Inhalt des {{HTMLElement("body")}}-Elements.

Sie können HTML, das dem `<body>` _und_ seinen Nachkommen entspricht, mit diesem Code erhalten:

```js
const docOuterHtml = document.documentElement.outerHTML;
```

## Siehe auch

- [XPath](/de/docs/Web/XPath)
- {{domxref("Window/fetch", "fetch()")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("Document")}}, {{domxref("XMLDocument")}}, und {{domxref("HTMLDocument")}}
