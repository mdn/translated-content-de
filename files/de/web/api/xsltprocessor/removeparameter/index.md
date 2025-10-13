---
title: "XSLTProcessor: removeParameter()-Methode"
short-title: removeParameter()
slug: Web/API/XSLTProcessor/removeParameter
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("DOM")}}

Die `removeParameter()`-Methode der [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor)-Schnittstelle entfernt den Parameter (`<xsl:param>`) und dessen Wert aus dem Stylesheet, das im Prozessor importiert wurde.

## Syntax

```js-nolint
removeParameter(namespaceURI, localName)
```

### Parameter

- `namespaceURI`
  - : Der Namespace, der mit dem Parameternamen verknüpft ist. Ein ["null"](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird wie der leere String (`""`) behandelt.
- `localName`
  - : Der Name des Parameters im zugehörigen Namespace.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von removeParameter()

Zuerst wird der `showItems`-Parameter auf `"yes"` gesetzt, was es ermöglicht, die Listenelemente in der Ausgabe anzuzeigen.

Danach wird der `showItems`-Parameter mit `removeParameter()` entfernt, und die Transformation wird erneut durchgeführt, was dazu führt, dass keine Elemente angezeigt werden.

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

// Set 'showItems' to 'no' and perform the first transformation
xsltProcessor.setParameter(null, "showItems", "no");
const resultContainer = document.getElementById("result");
let resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);
resultContainer.appendChild(resultFragment);

// Add a horizontal rule to separate the results
resultContainer.appendChild(document.createElement("hr"));

// Remove the 'showItems' parameter, reverting it to the default value ('yes')
xsltProcessor.removeParameter(null, "showItems");
resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);
resultContainer.appendChild(resultFragment);
```

#### Ergebnis

{{EmbedLiveSample("using_removeparameter", "", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XSLTProcessor.getParameter()`](/de/docs/Web/API/XSLTProcessor/getParameter)
- [`XSLTProcessor.setParameter()`](/de/docs/Web/API/XSLTProcessor/setParameter)
- [`XSLTProcessor.clearParameters()`](/de/docs/Web/API/XSLTProcessor/clearParameters)
- [`XSLTProcessor.reset()`](/de/docs/Web/API/XSLTProcessor/reset)
