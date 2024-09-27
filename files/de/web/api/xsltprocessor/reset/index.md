---
title: "XSLTProcessor: reset() Methode"
short-title: reset()
slug: Web/API/XSLTProcessor/reset
l10n:
  sourceCommit: 01bad23f0d2ef51538bdb071282c56faf79395c6
---

{{APIRef("XSLT")}}

Die `reset()` Methode der [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor) Schnittstelle entfernt alle Parameter (`<xsl:param>`) und das XSLT-Stylesheet aus dem Prozessor. Der `XSLTProcessor` befindet sich dann wieder in seinem ursprünglichen Zustand, wie er bei der Erstellung war.

## Syntax

```js-nolint
reset()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von reset()

Dieses Beispiel demonstriert, wie die `reset()` Methode es ermöglicht, dieselbe Instanz des `XSLTProcessor` für mehrere Transformationen mit unterschiedlichen Stylesheets wiederzuverwenden.

#### HTML

```html
<div id="result"></div>
```

#### JavaScript

```js
const xmlString1 = `
<items>
  <item>Item A</item>
  <item>Item B</item>
</items>
`;

const xsltString1 = `
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

const xmlString2 = `
<fruits>
  <fruit>Apple</fruit>
  <fruit>Banana</fruit>
</fruits>
`;

const xsltString2 = `
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <ol>
      <xsl:for-each select="fruits/fruit">
        <li><xsl:value-of select="."/></li>
      </xsl:for-each>
    </ol>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc1 = parser.parseFromString(xmlString1, "application/xml");
const xsltDoc1 = parser.parseFromString(xsltString1, "application/xml");
const xmlDoc2 = parser.parseFromString(xmlString2, "application/xml");
const xsltDoc2 = parser.parseFromString(xsltString2, "application/xml");

const xsltProcessor = new XSLTProcessor();

// Import the first XSLT stylesheet and transform the first XML
xsltProcessor.importStylesheet(xsltDoc1);
let resultFragment = xsltProcessor.transformToFragment(xmlDoc1, document);
document.getElementById("result").appendChild(resultFragment);

// Reset the XSLTProcessor instance
xsltProcessor.reset();

// Import the second XSLT stylesheet and transform the second XML
xsltProcessor.importStylesheet(xsltDoc2);
resultFragment = xsltProcessor.transformToFragment(xmlDoc2, document);
document.getElementById("result").appendChild(document.createElement("hr"));
document.getElementById("result").appendChild(resultFragment);
```

#### Ergebnis

{{EmbedLiveSample("using_reset", "", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XSLTProcessor.getParameter()`](/de/docs/Web/API/XSLTProcessor/getParameter)
- [`XSLTProcessor.setParameter()`](/de/docs/Web/API/XSLTProcessor/setParameter)
- [`XSLTProcessor.removeParameter()`](/de/docs/Web/API/XSLTProcessor/removeParameter)
- [`XSLTProcessor.clearParameters()`](/de/docs/Web/API/XSLTProcessor/clearParameters)
