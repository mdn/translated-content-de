---
title: "XSLTProcessor: Methode setParameter()"
short-title: setParameter()
slug: Web/API/XSLTProcessor/setParameter
l10n:
  sourceCommit: ed8b0abcd17844e033c2af350e7d2b314ca56ac4
---

{{APIRef("XSLT")}}

Die `setParameter()` Methode des {{domxref("XSLTProcessor")}} Interfaces setzt den Wert eines Parameters (`<xsl:param>`) im Stylesheet, das im Prozessor importiert wurde.

## Syntax

```js-nolint
setParameter(namespaceURI, localName, value)
```

### Parameter

- `namespaceURI`
  - : Der Namespace, der mit dem Parameternamen verbunden ist. Ein ["null"](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird wie der leere String (`""`) behandelt.
- `localName`
  - : Der Name des Parameters im zugehörigen Namespace.
- `value`
  - : Der Wert des Parameters.
    > [!NOTE]
    > Firefox unterstützt alle Arten von Parametern. Chrome, Edge und Safari unterstützen nur String-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von setParameter()

Dieses Beispiel demonstriert, wie Parameter von JavaScript an ein XSLT-Stylesheet übergeben werden, um die Transformationsergebnisse basierend auf diesen Parametern dynamisch zu verändern.

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

// Führt die Transformation von XML zu HTML durch
const resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);

// Zeigt das transformierte Ergebnis auf der Seite an
document.getElementById("result").appendChild(resultFragment);
```

#### Ergebnis

{{EmbedLiveSample("using_setParameter", "", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XSLTProcessor.getParameter()")}}
- {{domxref("XSLTProcessor.removeParameter()")}}
- {{domxref("XSLTProcessor.clearParameters()")}}
- {{domxref("XSLTProcessor.reset()")}}
