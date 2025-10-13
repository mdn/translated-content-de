---
title: "XSLTProcessor: transformToFragment() Methode"
short-title: transformToFragment()
slug: Web/API/XSLTProcessor/transformToFragment
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("DOM")}}

Die `transformToFragment()`-Methode der [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor)-Schnittstelle transformiert eine bereitgestellte [`Node`](/de/docs/Web/API/Node)-Quelle in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) unter Verwendung des mit dem `XSLTProcessor` verbundenen XSLT-Stylesheets.

## Syntax

```js-nolint
transformToFragment(source, document)
```

### Parameter

- `source`
  - : Die [`Node`](/de/docs/Web/API/Node)-Quelle, auf die das XSLT-Stylesheet angewendet werden soll.
- `document`
  - : Das [`Document`](/de/docs/Web/API/Document), mit dem das Dokumentfragment verknüpft wird. (Jedes Dokumentfragment ist mit einem Dokument verknüpft, zu dem es hinzugefügt werden kann).

### Rückgabewert

Ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).

## Beispiele

### Verwenden von transformToFragment()

Dieses Beispiel zeigt, wie `transformToFragment()` verwendet wird, um XML-Daten in HTML zu transformieren, das dann direkt als Dokumentfragment in den DOM eingefügt werden kann.

#### HTML

```html
<div id="result"></div>
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
  <xsl:output method="html"/>
  <xsl:template match="/">
    <ul>
      <xsl:for-each select="books/book">
        <li>
          <strong><xsl:value-of select="title"/></strong>
          by <em><xsl:value-of select="author"/></em>
        </li>
      </xsl:for-each>
    </ul>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

const xsltProcessor = new XSLTProcessor();
xsltProcessor.importStylesheet(xsltDoc);

// Perform the transformation, returning the result as a document fragment
const resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);

// Insert the result into the page
document.getElementById("result").appendChild(resultFragment);
```

#### Ergebnis

{{EmbedLiveSample("using_transformToFragment", "", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XSLTProcessor.transformToDocument()`](/de/docs/Web/API/XSLTProcessor/transformToDocument)
