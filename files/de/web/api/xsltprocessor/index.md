---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
l10n:
  sourceCommit: a3400c39a245e0404c621c2cdbe75ad0a3eb8672
---

{{APIRef("DOM")}}

Ein **`XSLTProcessor`** wendet eine [XSLT](/de/docs/Web/XML/XSLT)-Stylesheet-Transformation auf ein XML-Dokument an und erzeugt als Ausgabe ein neues XML-Dokument. Er bietet Methoden zum Laden des XSLT-Stylesheets, zum Ändern von `<xsl:param>`-Parameterwerten und zum Anwenden der Transformation auf Dokumente.

## Konstruktor

- [`XSLTProcessor()`](/de/docs/Web/API/XSLTProcessor/XSLTProcessor) {{deprecated_inline}}
  - : Erstellt einen neuen `XSLTProcessor`.

## Instanzmethoden

- [`XSLTProcessor.importStylesheet()`](/de/docs/Web/API/XSLTProcessor/importStylesheet) {{deprecated_inline}}
  - : Importiert das XSLT-Stylesheet.
    Wenn der übergebene Knoten ein Dokumentknoten ist, können Sie eine vollständige XSL-Transformation oder eine [Transformation mit einem literalen Ergebniselement](https://www.w3.org/TR/xslt-30/#literal-result-element) übergeben. Andernfalls muss es sich um ein `<xsl:stylesheet>`- oder `<xsl:transform>`-Element handeln.
- [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment) {{deprecated_inline}}
  - : Transformiert den Quellknoten durch Anwenden des XSLT-Stylesheets, das mit [`XSLTProcessor.importStylesheet()`](/de/docs/Web/API/XSLTProcessor/importStylesheet) importiert wurde.
    Das übergeordnete Dokument des resultierenden Dokumentfragments ist das übergeordnete Dokument des Knotens.
- [`XSLTProcessor.transformToDocument()`](/de/docs/Web/API/XSLTProcessor/transformToDocument) {{deprecated_inline}}
  - : Transformiert den Quellknoten durch Anwenden des XSLT-Stylesheets, das mit [`XSLTProcessor.importStylesheet()`](/de/docs/Web/API/XSLTProcessor/importStylesheet) importiert wurde.
- [`XSLTProcessor.setParameter()`](/de/docs/Web/API/XSLTProcessor/setParameter) {{deprecated_inline}}
  - : Setzt den Wert eines Parameters (`<xsl:param>`) im importierten XSLT-Stylesheet.
- [`XSLTProcessor.getParameter()`](/de/docs/Web/API/XSLTProcessor/getParameter) {{deprecated_inline}}
  - : Ruft den Wert eines Parameters aus dem XSLT-Stylesheet ab.
- [`XSLTProcessor.removeParameter()`](/de/docs/Web/API/XSLTProcessor/removeParameter) {{deprecated_inline}}
  - : Entfernt den Parameter, falls er zuvor gesetzt wurde.
    Dadurch verwendet der `XSLTProcessor` für den Parameter den im XSLT-Stylesheet angegebenen Standardwert.
- [`XSLTProcessor.clearParameters()`](/de/docs/Web/API/XSLTProcessor/clearParameters) {{deprecated_inline}}
  - : Entfernt alle gesetzten Parameter aus dem `XSLTProcessor`.
    Der `XSLTProcessor` verwendet anschließend die im XSLT-Stylesheet angegebenen Standardwerte.
- [`XSLTProcessor.reset()`](/de/docs/Web/API/XSLTProcessor/reset) {{deprecated_inline}}
  - : Entfernt alle Parameter und Stylesheets aus dem `XSLTProcessor`.

## Instanzeigenschaften

_Diese Schnittstelle hat keine Eigenschaften._

## Beispiele

### Einen `XSLTProcessor` instanziieren

```js
async function init() {
  const parser = new DOMParser();
  const xsltProcessor = new XSLTProcessor();

  // Load the XSLT file, example1.xsl
  const xslResponse = await fetch("example1.xsl");
  const xslText = await xslResponse.text();
  const xslStylesheet = parser.parseFromString(xslText, "application/xml");
  xsltProcessor.importStylesheet(xslStylesheet);

  // process the file
  // …
}
```

### Ein XML-Dokument aus einem Teil des DOM eines Dokuments erstellen

Für die eigentliche Transformation benötigt `XSLTProcessor` ein XML-Dokument, das zusammen mit der importierten XSL-Datei verwendet wird, um das Endergebnis zu erzeugen. Das XML-Dokument kann eine separate XML-Datei sein, die mit [`fetch()`](/de/docs/Web/API/Window/fetch) geladen wird, oder ein Teil der vorhandenen Seite.

Um einen Teil des DOM einer Seite zu verarbeiten, muss zunächst ein XML-Dokument im Arbeitsspeicher erstellt werden. Angenommen, das zu verarbeitende DOM befindet sich in einem Element mit der id `example`: Dann kann dieses DOM mit der Methode [`Document.importNode()`](/de/docs/Web/API/Document/importNode) des im Arbeitsspeicher erstellten XML-Dokuments „geklont“ werden. Mit [`Document.importNode()`](/de/docs/Web/API/Document/importNode) lässt sich ein DOM-Fragment zwischen Dokumenten übertragen, in diesem Fall von einem HTML-Dokument in ein XML-Dokument. Der erste Parameter verweist auf den zu klonenden DOM-Knoten. Wenn der zweite Parameter auf „true“ gesetzt wird, werden auch alle Nachfahren geklont (ein tiefes Klonen). Das geklonte DOM kann anschließend mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) in das XML-Dokument eingefügt werden, wie unten gezeigt.

```js
// Create a new XML document in memory
const xmlRef = document.implementation.createDocument("", "", null);

// We want to move a part of the DOM from an HTML document to an XML document.
// importNode is used to clone the nodes we want to process via XSLT - true makes it do a deep clone
const myNode = document.getElementById("example");
const clonedNode = xmlRef.importNode(myNode, true);

// Add the cloned DOM into the XML document
xmlRef.appendChild(clonedNode);
```

Nachdem das Stylesheet importiert wurde, stehen `XSLTProcessor` für die eigentliche Transformation zwei Methoden zur Verfügung: [`XSLTProcessor.transformToDocument()`](/de/docs/Web/API/XSLTProcessor/transformToDocument) und [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment). [`XSLTProcessor.transformToDocument()`](/de/docs/Web/API/XSLTProcessor/transformToDocument) gibt ein vollständiges XML-Dokument zurück, während [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment) ein Dokumentfragment zurückgibt, das sich leicht zu einem vorhandenen Dokument hinzufügen lässt. Beide Methoden erwarten als ersten Parameter das zu transformierende XML-Dokument. [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment) benötigt einen zweiten Parameter: das Dokumentobjekt, dem das erzeugte Fragment zugeordnet sein soll. Wenn das erzeugte Fragment in das aktuelle HTML-Dokument eingefügt werden soll, genügt es, document zu übergeben.

### Ein XML-Dokument aus einer XML-Zeichenfolge erstellen

Mit [`DOMParser`](/de/docs/Web/API/DOMParser) können Sie aus einer XML-Zeichenfolge ein XML-Dokument erstellen.

```js
const parser = new DOMParser();
const doc = parser.parseFromString(str, "text/xml");
```

### Die Transformation durchführen

```js
const fragment = xsltProcessor.transformToFragment(xmlRef, document);
```

### Einfaches Beispiel

Das einfache Beispiel lädt eine XML-Datei und wendet darauf eine XSL-Transformation an. Es verwendet dieselben Dateien wie das Beispiel [HTML erzeugen](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT#generating_html). Die XML-Datei beschreibt einen Artikel, und die XSL-Datei formatiert die Informationen für die Anzeige.

#### XML

```xml
<?xml version="1.0"?>
<myNS:Article xmlns:myNS="http://devedge.netscape.com/2002/de">
  <myNS:Title>My Article</myNS:Title>
  <myNS:Authors>
    <myNS:Author company="Foopy Corp.">Mr. Foo</myNS:Author>
    <myNS:Author>Mr. Bar</myNS:Author>
  </myNS:Authors>
  <myNS:Body>
    The <b>rain</b> in <u>Spain</u> stays mainly in the plains.
  </myNS:Body>
</myNS:Article>
```

#### XSLT

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                   xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                   xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html" />

  <xsl:template match="/">
    <html>

      <head>

        <title>
          <xsl:value-of select="/myNS:Article/myNS:Title"/>
        </title>

        <style>
          .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
        </style>

      </head>

      <body>
        <p class="myBox">
          <span class="title">
            <xsl:value-of select="/myNS:Article/myNS:Title"/>
          </span> <br />

          Authors:   <br />
            <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
          </p>

        <p class="myBox">
          <xsl:apply-templates select="//myNS:Body"/>
        </p>

      </body>

    </html>
  </xsl:template>

  <xsl:template match="myNS:Author">
     --   <xsl:value-of select="." />

    <xsl:if test="@company">
     ::   <b>  <xsl:value-of select="@company" />  </b>
    </xsl:if>

    <br />
  </xsl:template>

  <xsl:template match="myNS:Body">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="@*|node()">
      <xsl:copy>
        <xsl:apply-templates select="@*|node()"/>
      </xsl:copy>
  </xsl:template>
</xsl:stylesheet>
```

Das Beispiel lädt sowohl die .xsl-Datei (`xslStylesheet`) als auch die .xml-Datei (`xmlDoc`) in den Arbeitsspeicher. Anschließend wird die .xsl-Datei importiert (`xsltProcessor.importStylesheet(xslStylesheet)`) und die Transformation ausgeführt (`xsltProcessor.transformToFragment(xmlDoc, document)`). So können Daten nach dem Laden der Seite abgerufen werden, ohne die Seite erneut laden zu müssen.

#### JavaScript

```js
async function init() {
  const parser = new DOMParser();
  const xsltProcessor = new XSLTProcessor();

  // Load the XSLT file, example1.xsl
  const xslResponse = await fetch("example1.xsl");
  const xslText = await xslResponse.text();
  const xslStylesheet = parser.parseFromString(xslText, "application/xml");
  xsltProcessor.importStylesheet(xslStylesheet);

  // Load the XML file, example1.xml
  const xmlResponse = await fetch("example1.xml");
  const xmlText = await xmlResponse.text();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");

  const fragment = xsltProcessor.transformToFragment(xmlDoc, document);

  document.getElementById("example").textContent = "";
  document.getElementById("example").appendChild(fragment);
}

init();
```

### Fortgeschrittenes Beispiel

Dieses fortgeschrittene Beispiel sortiert mehrere divs anhand ihres Inhalts. Der Inhalt kann mehrfach sortiert werden, wobei zwischen aufsteigender und absteigender Reihenfolge gewechselt wird. Das JavaScript lädt die .xsl-Datei nur bei der ersten Sortierung und setzt die Variable `xslLoaded` auf true, sobald das Laden abgeschlossen ist. Mithilfe der Methode [`XSLTProcessor.getParameter()`](/de/docs/Web/API/XSLTProcessor/getParameter) kann der Code ermitteln, ob aufsteigend oder absteigend sortiert werden soll. Ist der Parameter leer, wird standardmäßig aufsteigend sortiert. Das ist bei der ersten Sortierung der Fall, da in der XSLT-Datei kein Wert dafür angegeben ist. Der Sortierwert wird mit [`XSLTProcessor.setParameter()`](/de/docs/Web/API/XSLTProcessor/setParameter) gesetzt.

Die XSLT-Datei enthält einen Parameter namens `myOrder`, den JavaScript setzt, um die Sortiermethode zu ändern. Das order-Attribut des `xsl:sort`-Elements kann über `$myOrder` auf den Wert des Parameters zugreifen. Der Wert muss jedoch ein XPath-Ausdruck und keine Zeichenfolge sein. Deshalb wird `{$myOrder}` verwendet. Die geschweiften Klammern {} bewirken, dass der Inhalt als XPath-Ausdruck ausgewertet wird.

Nach Abschluss der Transformation wird das Ergebnis an das Dokument angehängt, wie dieses Beispiel zeigt.

#### XHTML

```html
<div id="example">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
```

#### JavaScript

```js
let xslRef;
let xslLoaded = false;
const parser = new DOMParser();
const xsltProcessor = new XSLTProcessor();
let myDOM;

let xmlRef = document.implementation.createDocument("", "", null);

async function sort() {
  if (!xslLoaded) {
    const response = await fetch("example2.xsl");
    const xslText = await response.text();
    xslRef = parser.parseFromString(xslText, "application/xml");
    xsltProcessor.importStylesheet(xslRef);
    xslLoaded = true;
  }

  // Create a new XML document in memory
  xmlRef = document.implementation.createDocument("", "", null);

  // We want to move a part of the DOM from an HTML document to an XML document.
  // importNode is used to clone the nodes we want to process via XSLT - true makes it do a deep clone
  const myNode = document.getElementById("example");
  const clonedNode = xmlRef.importNode(myNode, true);

  // After cloning, we append
  xmlRef.appendChild(clonedNode);

  // Set the sorting parameter in the XSL file
  const sortVal = xsltProcessor.getParameter(null, "myOrder");

  if (sortVal === "" || sortVal === "descending") {
    xsltProcessor.setParameter(null, "myOrder", "ascending");
  } else {
    xsltProcessor.setParameter(null, "myOrder", "descending");
  }

  // Initiate the transformation
  const fragment = xsltProcessor.transformToFragment(xmlRef, document);

  // Clear the contents
  document.getElementById("example").textContent = "";

  myDOM = fragment;

  // Add the new content from the transformation
  document.getElementById("example").appendChild(fragment);
}
```

#### XSLT

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns="http://www.w3.org/1999/xhtml" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes" />

  <xsl:param name="myOrder" />

  <xsl:template match="/">

    <xsl:apply-templates select="/div//div">
      <xsl:sort select="." data-type="number" order="{$myOrder}" />
    </xsl:apply-templates>
  </xsl:template>

  <xsl:template match="div">
    <xsl:copy-of select="." />
  </xsl:template>
</xsl:stylesheet>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [XSLT](/de/docs/Web/XML/XSLT)
- [Transformation mit XSLT](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
