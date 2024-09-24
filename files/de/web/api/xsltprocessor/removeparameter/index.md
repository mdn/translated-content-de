---
title: "XSLTProcessor: Methode removeParameter()"
short-title: removeParameter()
slug: Web/API/XSLTProcessor/removeParameter
l10n:
  sourceCommit: 621aef687d0f68ccd09832157a84c75e6f9edb3b
---

{{APIRef("XSLT")}}

Die Methode `removeParameter()` der {{domxref("XSLTProcessor")}} Schnittstelle entfernt den Parameter (`<xsl:param>`) und dessen Wert aus dem im Prozessor importierten Stylesheet.

## Syntax

```js-nolint
removeParameter(namespaceURI, localName)
```

### Parameter

- `namespaceURI`
  - : Der Namespace, der mit dem Parameternamen assoziiert ist. Ein ["null"](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird wie ein leerer String (`""`) behandelt.
- `localName`
  - : Der Name des Parameters im zugehörigen Namespace.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von removeParameter()

Zuerst wird der Parameter `showItems` auf `"yes"` gesetzt, wodurch die Listenelemente in der Ausgabe angezeigt werden.

Danach wird der Parameter `showItems` mit `removeParameter()` entfernt, und die Transformation wird erneut durchgeführt, was dazu führt, dass keine Elemente angezeigt werden.

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
    <!-- Wenn showItems 'yes' ist, zeigen Sie die Liste der Elemente an -->
    <xsl:if test="$showItems = 'yes'">
      <ul>
        <xsl:for-each select="items/item">
          <li><xsl:value-of select="."/></li>
        </xsl:for-each>
      </ul>
    </xsl:if>
    <!-- Wenn showItems 'no' ist, zeigen Sie eine Nachricht an -->
    <xsl:if test="$showItems = 'no'">
      <div>Kein Inhalt anzuzeigen</div>
    </xsl:if>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

const xsltProcessor = new XSLTProcessor();
xsltProcessor.importStylesheet(xsltDoc);

// Setzen Sie 'showItems' auf 'no' und führen Sie die erste Transformation durch
xsltProcessor.setParameter(null, "showItems", "no");
const resultContainer = document.getElementById("result");
let resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);
resultContainer.appendChild(resultFragment);

// Fügen Sie eine horizontale Linie hinzu, um die Ergebnisse zu trennen
resultContainer.appendChild(document.createElement("hr"));

// Entfernen Sie den 'showItems' Parameter und setzen Sie ihn auf den Standardwert ('yes') zurück
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

- {{domxref("XSLTProcessor.getParameter()")}}
- {{domxref("XSLTProcessor.setParameter()")}}
- {{domxref("XSLTProcessor.clearParameters()")}}
- {{domxref("XSLTProcessor.reset()")}}
