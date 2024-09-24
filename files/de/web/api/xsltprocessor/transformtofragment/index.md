---
title: "XSLTProcessor: transformToFragment()-Methode"
short-title: transformToFragment()
slug: Web/API/XSLTProcessor/transformToFragment
l10n:
  sourceCommit: 523438dbaa2f80c46f89cd2e98782c9b86a6caa7
---

{{APIRef("XSLT")}}

Die `transformToFragment()`-Methode der {{domxref("XSLTProcessor")}}-Schnittstelle transformiert eine bereitgestellte {{DOMxRef("Node")}}-Quelle in ein {{domxref("DocumentFragment")}} unter Verwendung des dem `XSLTProcessor` zugeordneten XSLT-Stylesheets.

## Syntax

```js-nolint
transformToFragment(source, document)
```

### Parameter

- `source`
  - : Die {{DOMxRef("Node")}}-Quelle, auf die das XSLT-Stylesheet angewendet werden soll.
- `document`
  - : Das {{DOMxRef("Document")}}, dem das Dokumentfragment zugeordnet wird. (Jedes Dokumentfragment ist mit einem Dokument verknüpft, zu dem es hinzugefügt werden kann).

### Rückgabewert

Ein {{domxref("DocumentFragment")}}.

## Beispiele

### Verwendung von transformToFragment()

Dieses Beispiel demonstriert, wie `transformToFragment()` genutzt wird, um XML-Daten in HTML zu transformieren, das dann direkt als Dokumentfragment in das DOM eingefügt werden kann.

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

// Führen Sie die Transformation durch und geben Sie das Ergebnis als Dokumentfragment zurück
const resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);

// Fügen Sie das Ergebnis in die Seite ein
document.getElementById("result").appendChild(resultFragment);
```

#### Ergebnis

{{EmbedLiveSample("using_transformToFragment", "", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XSLTProcessor.transformToDocument()")}}
