---
title: "XSLTProcessor: setParameter()-Methode"
short-title: setParameter()
slug: Web/API/XSLTProcessor/setParameter
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("DOM")}}

Die `setParameter()`-Methode des [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor)-Interfaces setzt den Wert eines Parameters (`<xsl:param>`) im im Prozessor importierten Stylesheet.

## Syntax

```js-nolint
setParameter(namespaceURI, localName, value)
```

### Parameter

- `namespaceURI`
  - : Der Namespace, der mit dem Parameternamen assoziiert ist. Ein ["null"](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie der leere String (`""`).
- `localName`
  - : Der Name des Parameters im zugehörigen Namespace.
- `value`
  - : Der Wert des Parameters.
    > [!NOTE]
    > Firefox unterstützt jede Art von Parameter. Chrome, Edge und Safari unterstützen nur String-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von setParameter()

Dieses Beispiel zeigt, wie man Parameter von JavaScript an ein XSLT-Stylesheet mit `setParameter()` übergibt, um eine dynamische Modifikation der Transformationsausgabe basierend auf diesen Parametern zu ermöglichen.

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
  <xsl:param name="highlightColor" select="'yellow'"/>
  <xsl:template match="/">
    <ul>
      <xsl:if test="$showItems = 'yes'">
        <xsl:for-each select="items/item">
          <li style="background-color: {$highlightColor};">
            <xsl:value-of select="."/>
          </li>
        </xsl:for-each>
      </xsl:if>
    </ul>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

const xsltProcessor = new XSLTProcessor();
xsltProcessor.importStylesheet(xsltDoc);

xsltProcessor.setParameter(null, "showItems", "yes");
xsltProcessor.setParameter(null, "highlightColor", "lightblue");

// Perform the transformation from XML to HTML
const resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);

// Display the transformed result in the page
document.getElementById("result").appendChild(resultFragment);
```

#### Ergebnis

{{EmbedLiveSample("using_setParameter", "", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XSLTProcessor.getParameter()`](/de/docs/Web/API/XSLTProcessor/getParameter)
- [`XSLTProcessor.removeParameter()`](/de/docs/Web/API/XSLTProcessor/removeParameter)
- [`XSLTProcessor.clearParameters()`](/de/docs/Web/API/XSLTProcessor/clearParameters)
- [`XSLTProcessor.reset()`](/de/docs/Web/API/XSLTProcessor/reset)
