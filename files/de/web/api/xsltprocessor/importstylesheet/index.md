---
title: "XSLTProcessor: importStylesheet()-Methode"
short-title: importStylesheet()
slug: Web/API/XSLTProcessor/importStylesheet
l10n:
  sourceCommit: f8e4bb60080838e2283604c6f5ace423c7dc861e
---

{{APIRef("XSLT")}}

Die `importStylesheet()`-Methode der {{domxref("XSLTProcessor")}}-Schnittstelle importiert ein XSLT-Stylesheet für den Prozessor.

## Syntax

```js-nolint
importStylesheet(style)
```

### Parameter

- `style`
  - : Der zu importierende {{DOMxRef("Node")}}. Es kann sich um ein XML-Dokument handeln (also ein {{domxref("Document")}} mit {{domxref("Document.doctype", "doctype")}}, dessen {{domxref("DocumentType.name", "name")}} `"xml"` ist), das ein XSLT-Stylesheet oder eine [literal result element transform](https://www.w3.org/TR/xslt/#result-element-stylesheet) enthält, oder um ein {{domxref("Element")}}, das ein `<xsl:stylesheet>` oder `<xsl:transform>` darstellt.

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

// Importieren des XSLT-Stylesheets in den XSLTProcessor
xsltProcessor.importStylesheet(xsltDoc);

// Durchführung der Transformation von XML zu HTML
const resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);

// Anzeige des transformierten Ergebnisses auf der Seite
document.getElementById("result").appendChild(resultFragment);
```

#### Ergebnis

{{EmbedLiveSample("using_importStylesheet", "", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
