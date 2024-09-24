---
title: "XSLTProcessor: clearParameters()-Methode"
short-title: clearParameters()
slug: Web/API/XSLTProcessor/clearParameters
l10n:
  sourceCommit: 54721fd4fbe4a6698803cd79293e0a6de1783919
---

{{APIRef("XSLT")}}

Die `clearParameters()`-Methode der {{domxref("XSLTProcessor")}}-Schnittstelle entfernt alle Parameter (`<xsl:param>`) und deren Werte aus dem in den Prozessor importierten Stylesheet. Der `XSLTProcessor` verwendet dann die im XSLT-Stylesheet angegebenen Standardwerte.

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

Dieses Beispiel zeigt, wie `clearParameters()` verwendet werden kann, um alle Parameter auf ihre in dem XSLT-Stylesheet angegebenen Standardwerte zurückzusetzen.

#### HTML

```HTML
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

- {{domxref("XSLTProcessor.getParameter()")}}
- {{domxref("XSLTProcessor.setParameter()")}}
- {{domxref("XSLTProcessor.removeParameter()")}}
- {{domxref("XSLTProcessor.reset()")}}
