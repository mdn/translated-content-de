---
title: "XSLTProcessor: importStylesheet()-Methode"
short-title: importStylesheet()
slug: Web/API/XSLTProcessor/importStylesheet
l10n:
  sourceCommit: f8e4bb60080838e2283604c6f5ace423c7dc861e
---

{{APIRef("XSLT")}}

Die `importStylesheet()`-Methode der [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor)-Schnittstelle importiert ein XSLT-Stylesheet für den Prozessor.

## Syntax

```js-nolint
importStylesheet(style)
```

### Parameter

- `style`
  - : Der zu importierende [`Node`](/de/docs/Web/API/Node). Es kann sich um ein XML-Dokument handeln (also ein [`Document`](/de/docs/Web/API/Document) mit [`doctype`](/de/docs/Web/API/Document/doctype), dessen [`name`](/de/docs/Web/API/DocumentType/name) `"xml"` ist), das ein XSLT-Stylesheet oder eine [literal result element transform](https://www.w3.org/TR/xslt/#result-element-stylesheet) enthält, oder um ein [`Element`](/de/docs/Web/API/Element), das ein `<xsl:stylesheet>` oder `<xsl:transform>` repräsentiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von importStylesheet()

Dieses Beispiel zeigt, wie `importStylesheet()` ein XSLT-Stylesheet in einen `XSLTProcessor` lädt, um XML-Daten zu transformieren.

#### HTML

```html
<div id="result"></div>
```

#### JavaScript

```js
const xmlString = `
<items>
  <item>Item 1</item>
  <item>Item 2</item>
</items>
`;

const xsltString = `
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <ul>
      <xsl:for-each select="items/item">
        <li><xsl:value-of select="."/></li>
      </xsl:for-each>
    </ul>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

const xsltProcessor = new XSLTProcessor();

// Import the XSLT stylesheet into the XSLTProcessor
xsltProcessor.importStylesheet(xsltDoc);

// Perform the transformation from XML to HTML
const resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);

// Display the transformed result in the page
document.getElementById("result").appendChild(resultFragment);
```

#### Ergebnis

{{EmbedLiveSample("using_importStylesheet", "", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
