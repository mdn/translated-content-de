---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
l10n:
  sourceCommit: 19bf2ac9d21bb9c97591c226d68edfbc0363a237
---

{{APIRef("XSLT")}}

Ein **`XSLTProcessor`** wendet eine [XSLT](/de/docs/Web/XML/XSLT)-Stylesheet-Transformation auf ein XML-Dokument an, um ein neues XML-Dokument als Ausgabe zu erzeugen. Er verfügt über Methoden zum Laden des XSLT-Stylesheets, zur Manipulation von `<xsl:param>` Parameterwerten und zur Anwendung der Transformation auf Dokumente.

## Konstruktor

- [`XSLTProcessor()`](/de/docs/Web/API/XSLTProcessor/XSLTProcessor)
  - : Erstellt einen neuen `XSLTProcessor`.

## Instanzmethoden

- [`XSLTProcessor.importStylesheet()`](/de/docs/Web/API/XSLTProcessor/importStylesheet)
  - : Importiert das XSLT-Stylesheet.
    Wenn der gegebene Knoten ein Dokumentknoten ist, können Sie ein vollständiges XSL-Transformations- oder ein [Literal-Result-Element-Transform](https://www.w3.org/TR/xslt-30/#literal-result-element) übergeben;
    andernfalls muss es ein `<xsl:stylesheet>` oder `<xsl:transform>` Element sein.
- [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment)
  - : Transformiert die Quellknoten, indem das mit der Funktion [`XSLTProcessor.importStylesheet()`](/de/docs/Web/API/XSLTProcessor/importStylesheet) importierte XSLT-Stylesheet angewendet wird.
    Das besitzende Dokument des resultierenden Dokumentfragments ist der besitzende Knoten.
- [`XSLTProcessor.transformToDocument()`](/de/docs/Web/API/XSLTProcessor/transformToDocument)
  - : Transformiert die Quellknoten, indem das mit der Funktion [`XSLTProcessor.importStylesheet()`](/de/docs/Web/API/XSLTProcessor/importStylesheet) importierte XSLT-Stylesheet angewendet wird.
- [`XSLTProcessor.setParameter()`](/de/docs/Web/API/XSLTProcessor/setParameter)
  - : Setzt einen Parameterwert (`<xsl:param>`) im importierten XSLT-Stylesheet.
- [`XSLTProcessor.getParameter()`](/de/docs/Web/API/XSLTProcessor/getParameter)
  - : Ruft den Wert eines Parameters aus dem XSLT-Stylesheet ab.
- [`XSLTProcessor.removeParameter()`](/de/docs/Web/API/XSLTProcessor/removeParameter)
  - : Entfernt den Parameter, wenn er vorher festgelegt wurde.
    Dadurch wird der `XSLTProcessor` den Standardwert für den Parameter verwenden, der im XSLT-Stylesheet angegeben ist.
- [`XSLTProcessor.clearParameters()`](/de/docs/Web/API/XSLTProcessor/clearParameters)
  - : Entfernt alle festgelegten Parameter vom `XSLTProcessor`.
    Der `XSLTProcessor` wird dann die im XSLT-Stylesheet angegebenen Standardwerte verwenden.
- [`XSLTProcessor.reset()`](/de/docs/Web/API/XSLTProcessor/reset)
  - : Entfernt alle Parameter und Stylesheets vom `XSLTProcessor`.

## Instanzeigenschaften

_Diese Schnittstelle hat keine Eigenschaften._

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

Für die eigentliche Transformation benötigt der `XSLTProcessor` ein XML-Dokument, das in Verbindung mit der importierten XSL-Datei verwendet wird, um das endgültige Ergebnis zu erzeugen. Bei dem XML-Dokument kann es sich um eine separate XML-Datei handeln, die mit [`fetch()`](/de/docs/Web/API/Window/fetch) geladen wird, oder es kann Teil der vorhandenen Seite sein.

Um einen Teil des DOM einer Seite zu verarbeiten, ist es notwendig, zunächst ein XML-Dokument im Speicher zu erstellen. Angenommen, dass das zu verarbeitende DOM von einem Element mit der ID `example` enthalten ist, kann dieses DOM mit der Methode [`Document.importNode()`](/de/docs/Web/API/Document/importNode) des XML-Dokuments im Speicher "geklont" werden. [`Document.importNode()`](/de/docs/Web/API/Document/importNode) ermöglicht die Übertragung eines DOM-Fragments zwischen Dokumenten, in diesem Fall von einem HTML-Dokument zu einem XML-Dokument. Der erste Parameter verweist auf den zu klonenden DOM-Knoten. Wenn der zweite Parameter "true" ist, werden auch alle Nachkommen geklont (ein tiefes Klonen). Das geklonte DOM kann dann mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) in das XML-Dokument eingefügt werden, wie unten gezeigt.

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

Sobald das Stylesheet importiert wurde, muss `XSLTProcessor` zwei Methoden für die eigentliche Transformation ausführen, nämlich [`XSLTProcessor.transformToDocument()`](/de/docs/Web/API/XSLTProcessor/transformToDocument) und [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment). [`XSLTProcessor.transformToDocument()`](/de/docs/Web/API/XSLTProcessor/transformToDocument) gibt ein vollständiges XML-Dokument zurück, während [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment) ein Dokumentfragment zurückgibt, das einfach in ein vorhandenes Dokument eingefügt werden kann. Beide erfordern das XML-Dokument als ersten Parameter, das transformiert wird. [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment) erfordert einen zweiten Parameter, nämlich das Dokumentobjekt, das das generierte Fragment enthalten wird. Wenn das generierte Fragment in das aktuelle HTML-Dokument eingefügt wird, reicht das Übergeben von `document` aus.

### Erstellen eines XML-Dokuments aus einem String 'XML Soup'

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

Das einfache Beispiel wird eine XML-Datei laden und darauf eine XSL-Transformation anwenden. Diese sind die gleichen Dateien, die im Beispiel [HTML Generieren](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT#generating_html) verwendet werden. Die XML-Datei beschreibt einen Artikel und die XSL-Datei formatiert die Informationen zur Anzeige.

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

Das Beispiel lädt sowohl die .xsl- (`xslStylesheet`) als auch die .xml- (`xmlDoc`) Dateien in den Speicher. Die .xsl-Datei wird dann importiert (`xsltProcessor.importStylesheet(xslStylesheet)`) und die Transformation wird ausgeführt (`xsltProcessor.transformToFragment(xmlDoc, document)`). Dies ermöglicht das Abrufen von Daten, nachdem die Seite geladen wurde, ohne einen neuen Seitenladevorgang zu starten.

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

Dieses fortgeschrittene Beispiel sortiert mehrere Div-Elemente basierend auf ihrem Inhalt. Das Beispiel ermöglicht es, den Inhalt mehrfach zu sortieren und abwechselnd in aufsteigender und absteigender Reihenfolge. Das JavaScript lädt die .xsl-Datei nur beim ersten Sortieren und setzt die `xslLoaded`-Variable auf true, sobald es das Laden der Datei abgeschlossen hat. Mit der Methode [`XSLTProcessor.getParameter()`](/de/docs/Web/API/XSLTProcessor/getParameter) kann der Code herausfinden, ob in aufsteigender oder absteigender Reihenfolge sortiert werden soll. Standardmäßig wird aufsteigend sortiert, wenn der Parameter leer ist (zum ersten Mal sortieren, da es keinen Wert dafür in der XSLT-Datei gibt). Der Sortierwert wird mit [`XSLTProcessor.setParameter()`](/de/docs/Web/API/XSLTProcessor/setParameter) festgelegt.

Die XSLT-Datei hat einen Parameter namens `myOrder`, den JavaScript setzt, um die Sortiermethode zu ändern. Das `xsl:sort`-Element kann auf den Parameterwert zugreifen, indem es `$myOrder` verwendet. Der Wert muss jedoch ein XPATH-Ausdruck und kein String sein, daher wird `{$myOrder}` verwendet. Mit {} wird der Inhalt als XPath-Ausdruck ausgewertet.

Sobald die Transformation abgeschlossen ist, wird das Ergebnis wie in diesem Beispiel gezeigt dem Dokument hinzugefügt.

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
- [Transformieren mit XSLT](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
- [Kapitel 15 der XML 1.1 Bible: XSL-Transformationen](https://www.ibiblio.org/xml/books/bible3/chapters/ch15.html)
- [XSLT-Tutorial](https://zvon.org/xxl/XSLTutorial/Books/Book1/index.html) auf [zvon.org](https://zvon.org/)
- [XPath-Tutorial](https://zvon.org/xxl/XPathTutorial/General/examples.html) auf [zvon.org](https://zvon.org/)
