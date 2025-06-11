---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{APIRef("XSLT")}}

Ein **`XSLTProcessor`** wendet eine [XSLT](/de/docs/Web/XML/XSLT) Stylesheet-Transformation auf ein XML-Dokument an, um ein neues XML-Dokument als Ausgabe zu erzeugen. Er verfügt über Methoden zum Laden des XSLT-Stylesheets, zur Manipulation von `<xsl:param>` Parameterwerten und zur Anwendung der Transformation auf Dokumente.

## Konstruktor

- [`XSLTProcessor()`](/de/docs/Web/API/XSLTProcessor/XSLTProcessor)
  - : Erstellt einen neuen `XSLTProcessor`.

## Instanzmethoden

- [`XSLTProcessor.importStylesheet()`](/de/docs/Web/API/XSLTProcessor/importStylesheet)
  - : Importiert das XSLT-Stylesheet. Wenn der gegebene Knoten ein Dokumentenknoten ist, können Sie eine vollständige XSL-Transformation oder eine [Literal Result Element Transform](https://www.w3.org/TR/xslt-30/#literal-result-element) übergeben; andernfalls muss es sich um ein `<xsl:stylesheet>` oder `<xsl:transform>`-Element handeln.
- [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment)
  - : Transformiert die Knotenquelle durch Anwendung des XSLT-Stylesheets, das mit der Funktion [`XSLTProcessor.importStylesheet()`](/de/docs/Web/API/XSLTProcessor/importStylesheet) importiert wurde. Das Eigentümerdokument des resultierenden Dokumentfragments ist der Eigentümerknoten.
- [`XSLTProcessor.transformToDocument()`](/de/docs/Web/API/XSLTProcessor/transformToDocument)
  - : Transformiert die Knotenquelle durch Anwendung des importierten XSLT-Stylesheets mit der Funktion [`XSLTProcessor.importStylesheet()`](/de/docs/Web/API/XSLTProcessor/importStylesheet).
- [`XSLTProcessor.setParameter()`](/de/docs/Web/API/XSLTProcessor/setParameter)
  - : Setzt einen Parameterwert (`<xsl:param>`) im importierten XSLT-Stylesheet.
- [`XSLTProcessor.getParameter()`](/de/docs/Web/API/XSLTProcessor/getParameter)
  - : Ruft den Wert eines Parameters aus dem XSLT-Stylesheet ab.
- [`XSLTProcessor.removeParameter()`](/de/docs/Web/API/XSLTProcessor/removeParameter)
  - : Entfernt den Parameter, falls dieser zuvor gesetzt wurde. Dadurch wird der `XSLTProcessor` den Standardwert für den Parameter verwenden, wie im XSLT-Stylesheet angegeben.
- [`XSLTProcessor.clearParameters()`](/de/docs/Web/API/XSLTProcessor/clearParameters)
  - : Entfernt alle gesetzten Parameter aus dem `XSLTProcessor`. Der `XSLTProcessor` wird dann die Standardwerte verwenden, die im XSLT-Stylesheet angegeben sind.
- [`XSLTProcessor.reset()`](/de/docs/Web/API/XSLTProcessor/reset)
  - : Entfernt alle Parameter und Stylesheets aus dem `XSLTProcessor`.

## Instanzeigenschaften

_Für diese Schnittstelle gibt es keine Eigenschaften._

## Beispiele

### Instanziierung eines `XSLTProcessor`

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

### Erstellen eines XML-Dokuments basierend auf einem Teil des DOM eines Dokuments

Für die eigentliche Transformation benötigt `XSLTProcessor` ein XML-Dokument, das in Verbindung mit der importierten XSL-Datei zur Erzeugung des Endergebnisses verwendet wird. Das XML-Dokument kann eine separate XML-Datei sein, die mit [`fetch()`](/de/docs/Web/API/Window/fetch) geladen wird, oder es kann Teil der vorhandenen Seite sein.

Um einen Teil des DOM einer Seite zu verarbeiten, muss zuerst ein XML-Dokument im Speicher erstellt werden. Angenommen, das zu verarbeitende DOM wird von einem Element mit der ID `example` enthalten, kann dieses DOM mithilfe der Methode [`Document.importNode()`](/de/docs/Web/API/Document/importNode) des im Speicher befindlichen XML-Dokuments "geklont" werden. [`Document.importNode()`](/de/docs/Web/API/Document/importNode) ermöglicht das Übertragen eines DOM-Fragments zwischen Dokumenten, in diesem Fall von einem HTML-Dokument zu einem XML-Dokument. Der erste Parameter verweist auf den zu klonenden DOM-Knoten. Wenn der zweite Parameter "true" ist, werden auch alle Nachkommen geklont (ein tiefer Klon). Das geklonte DOM kann dann wie unten gezeigt in das XML-Dokument mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) eingefügt werden.

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

Sobald das Stylesheet importiert wurde, muss `XSLTProcessor` zwei Methoden für die eigentliche Transformation ausführen, nämlich [`XSLTProcessor.transformToDocument()`](/de/docs/Web/API/XSLTProcessor/transformToDocument) und [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment). [`XSLTProcessor.transformToDocument()`](/de/docs/Web/API/XSLTProcessor/transformToDocument) gibt ein vollständiges XML-Dokument zurück, während [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment) ein Dokumentfragment zurückgibt, das leicht zu einem vorhandenen Dokument hinzugefügt werden kann. Beide benötigen als ersten Parameter das zu transformierende XML-Dokument. [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment) erfordert einen zweiten Parameter, nämlich das Dokumentobjekt, das das generierte Fragment besitzen wird. Wenn das generierte Fragment in das aktuelle HTML-Dokument eingefügt wird, reicht die Übergabe von document aus.

### Erstellen eines XML-Dokuments aus einem 'XML-Suppe'-String

Sie können den [`DOMParser`](/de/docs/Web/API/DOMParser) verwenden, um ein XML-Dokument aus einem XML-String zu erstellen.

```js
const parser = new DOMParser();
const doc = parser.parseFromString(aStr, "text/xml");
```

### Durchführung der Transformation

```js
const fragment = xsltProcessor.transformToFragment(xmlRef, document);
```

### Einfaches Beispiel

Das einfache Beispiel lädt eine XML-Datei und wendet eine XSL-Transformation darauf an. Dies sind die gleichen Dateien, die im Beispiel [HTML generieren](/de/docs/Web/API/Document_Object_Model/Transforming_with_XSLT#generating_html) verwendet werden. Die XML-Datei beschreibt einen Artikel und die XSL-Datei formatiert die Informationen zur Anzeige.

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

Das Beispiel lädt sowohl die .xsl (`xslStylesheet`) als auch die .xml (`xmlDoc`) Dateien in den Speicher. Die .xsl-Datei wird dann importiert (`xsltProcessor.importStylesheet(xslStylesheet)`) und die Transformation ausgeführt (`xsltProcessor.transformToFragment(xmlDoc, document)`). Dies ermöglicht das Abrufen von Daten, nachdem die Seite geladen wurde, ohne einen neuen Seitenladen zu initiieren.

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

Dieses fortgeschrittene Beispiel sortiert mehrere divs basierend auf ihrem Inhalt. Das Beispiel ermöglicht es, den Inhalt mehrfach zu sortieren, wobei zwischen aufsteigender und absteigender Reihenfolge gewechselt wird. Das JavaScript lädt die .xsl-Datei nur beim ersten Sortieren und setzt die Variable `xslLoaded` auf wahr, sobald das Laden der Datei abgeschlossen ist. Mithilfe der Methode [`XSLTProcessor.getParameter()`](/de/docs/Web/API/XSLTProcessor/getParameter) kann der Code feststellen, ob aufsteigend oder absteigend sortiert werden soll. Es wird standardmäßig aufsteigend sortiert, wenn der Parameter leer ist (das erste Mal, dass die Sortierung erfolgt, da kein Wert dafür in der XSLT-Datei vorhanden ist). Der Sortierwert wird mit [`XSLTProcessor.setParameter()`](/de/docs/Web/API/XSLTProcessor/setParameter) gesetzt.

Die XSLT-Datei hat einen Parameter namens `myOrder`, den JavaScript zum Ändern der Sortiermethode setzt. Das `xsl:sort`-Element kann mit dem order-Attribut auf den Wert des Parameters zugreifen, indem `$myOrder` verwendet wird. Der Wert muss jedoch ein XPATH-Ausdruck und kein String sein, also wird `{$myOrder}` verwendet. Mit {} wird der Inhalt als XPath-Ausdruck ausgewertet.

Sobald die Transformation abgeschlossen ist, wird das Ergebnis, wie in diesem Beispiel gezeigt, dem Dokument hinzugefügt.

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
- [Transformation mit XSLT](/de/docs/Web/API/Document_Object_Model/Transforming_with_XSLT)
- [Kapitel 15 der XML 1.1 Bibel: XSL Transformationen](https://www.ibiblio.org/xml/books/bible3/chapters/ch15.html)
- [XSLT Tutorial](https://zvon.org/xxl/XSLTutorial/Books/Book1/index.html) bei [zvon.org](https://zvon.org/)
- [XPath Tutorial](https://zvon.org/xxl/XPathTutorial/General/examples.html) bei [zvon.org](https://zvon.org/)
