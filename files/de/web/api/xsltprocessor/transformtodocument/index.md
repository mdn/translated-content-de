---
title: "XSLTProcessor: Methode transformToDocument()"
short-title: transformToDocument()
slug: Web/API/XSLTProcessor/transformToDocument
l10n:
  sourceCommit: 5a1a007bb35afdda0e46c4472d65a7610ab655fd
---

{{APIRef("XSLT")}}

Die Methode `transformToDocument()` des {{domxref("XSLTProcessor")}}-Interfaces transformiert die bereitgestellte {{DOMxRef("Node")}}-Quelle in ein {{domxref("Document")}} unter Verwendung des mit `XSLTProcessor` verbundenen XSLT-Stylesheets.

## Syntax

```js-nolint
transformToDocument(source)
```

### Parameter

- `source`
  - : Die {{DOMxRef("Node")}}-Quelle, auf die das XSLT-Stylesheet angewendet wird.

### Rückgabewert

Ein {{domxref("Document")}}. Das tatsächliche Interface hängt von der [Ausgabemethode](https://www.w3.org/TR/1999/REC-xslt-19991116#output) des Stylesheets ab:

| Ausgabemethode | Ergebnis-Interface                                                                                   |
| -------------- | ---------------------------------------------------------------------------------------------------- |
| `html`         | {{domxref("HTMLDocument")}}                                                                          |
| `xml`          | {{domxref("XMLDocument")}}                                                                           |
| `text`         | {{domxref("XMLDocument")}} mit einem einzigen Wurzelelement `<transformiix:result>` mit dem Text als Kind |

## Beispiele

### Verwendung von transformToDocument()

Dieses Beispiel demonstriert, wie `transformToDocument()` verwendet wird, um ein XML-Dokument mit XSLT zu transformieren, was zu einer neuen XML-Dokumentstruktur führt.

#### HTML

```html
<pre id="result"></pre>
```

#### JavaScript

```js
const xmlString = `
<books>
  <book>
    <title>Book 1</title>
    <author>Author 1</author>
  </book>
  <book>
    <title>Book 2</title>
    <author>Author 2</author>
  </book>
</books>
`;

const xsltString = `
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="xml" indent="yes"/>
  <xsl:template match="/">
    <catalog>
      <xsl:for-each select="books/book">
        <item>
          <name><xsl:value-of select="title"/></name>
          <writer><xsl:value-of select="author"/></writer>
        </item>
      </xsl:for-each>
    </catalog>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

const xsltProcessor = new XSLTProcessor();
xsltProcessor.importStylesheet(xsltDoc);

// Führen Sie die Transformation durch und geben Sie das Ergebnis als neues XML-Dokument zurück
const resultDoc = xsltProcessor.transformToDocument(xmlDoc);

// Serialisieren Sie das Ergebnisdokument in einen String
const serializer = new XMLSerializer();
const resultString = serializer.serializeToString(resultDoc);

// Zeigen Sie das transformierte XML auf der Seite an
document.getElementById("result").textContent = resultString;
```

#### Ergebnis

{{EmbedLiveSample("using_transformToDocument", "", "200")}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("XSLTProcessor.transformToFragment()")}}
