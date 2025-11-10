---
title: "XSLTProcessor: clearParameters() Methode"
short-title: clearParameters()
slug: Web/API/XSLTProcessor/clearParameters
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("DOM")}}

Die `clearParameters()`-Methode der [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor)-Schnittstelle entfernt alle Parameter (`<xsl:param>`) und deren Werte aus dem im Prozessor importierten Stylesheet. Der `XSLTProcessor` verwendet anschließend die im XSLT-Stylesheet angegebenen Standardwerte.

## Syntax

```js-nolint
clearParameters()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von clearParameters()

Dieses Beispiel zeigt, wie `clearParameters()` verwendet werden kann, um alle Parameter auf ihre Standardwerte, wie im XSLT-Stylesheet angegeben, zurückzusetzen.

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
  <item>Item 3</item>
</items>
`;

const xsltString = `
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:param name="showItems" select="'yes'"/>
  <xsl:template match="/">
    <!-- If showItems is 'yes', display the list of items -->
    <xsl:if test="$showItems = 'yes'">
      <ul>
        <xsl:for-each select="items/item">
          <li><xsl:value-of select="."/></li>
        </xsl:for-each>
      </ul>
    </xsl:if>
    <!-- If showItems is 'no', display a message -->
    <xsl:if test="$showItems = 'no'">
      <div>No content to show</div>
    </xsl:if>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

const xsltProcessor = new XSLTProcessor();
xsltProcessor.importStylesheet(xsltDoc);

// Set the 'showItems' parameter to 'no' and perform the first transformation
xsltProcessor.setParameter(null, "showItems", "no");
let resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);
document.getElementById("result").appendChild(resultFragment);

// Add a horizontal rule to separate the results
document.getElementById("result").appendChild(document.createElement("hr"));

// Clear all parameters, resetting 'showItems' to its default value ('yes')
xsltProcessor.clearParameters();
resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);
document.getElementById("result").appendChild(resultFragment);
```

#### Ergebnis

{{EmbedLiveSample("using_clearParameters", "", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XSLTProcessor.getParameter()`](/de/docs/Web/API/XSLTProcessor/getParameter)
- [`XSLTProcessor.setParameter()`](/de/docs/Web/API/XSLTProcessor/setParameter)
- [`XSLTProcessor.removeParameter()`](/de/docs/Web/API/XSLTProcessor/removeParameter)
- [`XSLTProcessor.reset()`](/de/docs/Web/API/XSLTProcessor/reset)
