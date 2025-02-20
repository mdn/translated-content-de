---
title: "XSLTProcessor: transformToDocument()-Methode"
short-title: transformToDocument()
slug: Web/API/XSLTProcessor/transformToDocument
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{APIRef("XSLT")}}

Die `transformToDocument()`-Methode des [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor)-Interfaces transformiert die angegebene [`Node`](/de/docs/Web/API/Node)-Quelle in ein [`Document`](/de/docs/Web/API/Document), indem sie das mit `XSLTProcessor` verbundene XSLT-Stylesheet verwendet.

## Syntax

```js-nolint
transformToDocument(source)
```

### Parameter

- `source`
  - : Die [`Node`](/de/docs/Web/API/Node)-Quelle, auf die das XSLT-Stylesheet angewendet werden soll.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document). Das tatsächliche Interface hängt von der Ausgabemethode des Stylesheets ab, die durch das [`<xsl:output>`](/de/docs/Web/XML/XSLT/Reference/Element/output)-Element und dessen `method`-Attribut festgelegt wird.

| Ausgabemethode | Ergebnis-Interface                                                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `html`         | [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)                                                                                     |
| `xml`          | [`XMLDocument`](/de/docs/Web/API/XMLDocument)                                                                                       |
| `text`         | [`XMLDocument`](/de/docs/Web/API/XMLDocument) mit einem einzelnen Wurzelelement `<transformiix:result>` und dem Text als Kindknoten |

## Beispiele

### Verwendung von transformToDocument()

Dieses Beispiel zeigt, wie `transformToDocument()` verwendet wird, um ein XML-Dokument mithilfe von XSLT zu transformieren, was eine neue XML-Dokumentstruktur ergibt.

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

// Perform the transformation, returning the result as a new XML document
const resultDoc = xsltProcessor.transformToDocument(xmlDoc);

// Serialize the result document to a string
const serializer = new XMLSerializer();
const resultString = serializer.serializeToString(resultDoc);

// Display the transformed XML in the page
document.getElementById("result").textContent = resultString;
```

#### Ergebnis

{{EmbedLiveSample("using_transformToDocument", "", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment)
