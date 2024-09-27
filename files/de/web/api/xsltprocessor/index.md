---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{APIRef("XSLT")}}

Ein **`XSLTProcessor`** wendet eine [XSLT](/de/docs/Web/XSLT)-Stylesheet-Transformation auf ein XML-Dokument an, um ein neues XML-Dokument als Ausgabe zu erzeugen. Er verfügt über Methoden zum Laden des XSLT-Stylesheets, zum Manipulieren von `<xsl:param>`-Parameterwerten und zum Anwenden der Transformation auf Dokumente.

## Konstruktor

- [`XSLTProcessor()`](/de/docs/Web/API/XSLTProcessor/XSLTProcessor)
  - : Erstellt einen neuen `XSLTProcessor`.

## Instanzmethoden

- [`XSLTProcessor.importStylesheet()`](/de/docs/Web/API/XSLTProcessor/importStylesheet)
  - : Importiert das XSLT-Stylesheet.
    Wenn der gegebene Knoten ein Dokumentknoten ist, können Sie einen vollständigen XSL Transform oder einen [wörtlichen Ergebniselement-Transform](https://www.w3.org/TR/xslt/#result-element-stylesheet) übergeben; andernfalls muss es ein `<xsl:stylesheet>`- oder `<xsl:transform>`-Element sein.
- [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment)
  - : Transformiert die Knotenquelle, indem das mit der Funktion [`XSLTProcessor.importStylesheet()`](/de/docs/Web/API/XSLTProcessor/importStylesheet) importierte XSLT-Stylesheet angewendet wird.
    Das Eigentümerdokument des resultierenden Dokumentfragments ist der Eigentümerknoten.
- [`XSLTProcessor.transformToDocument()`](/de/docs/Web/API/XSLTProcessor/transformToDocument)
  - : Transformiert die Knotenquelle, indem das mit der Funktion [`XSLTProcessor.importStylesheet()`](/de/docs/Web/API/XSLTProcessor/importStylesheet) importierte XSLT-Stylesheet angewendet wird.
- [`XSLTProcessor.setParameter()`](/de/docs/Web/API/XSLTProcessor/setParameter)
  - : Setzt einen Parameterwert (`<xsl:param>`) im importierten XSLT-Stylesheet.
- [`XSLTProcessor.getParameter()`](/de/docs/Web/API/XSLTProcessor/getParameter)
  - : Ruft den Wert eines Parameters aus dem XSLT-Stylesheet ab.
- [`XSLTProcessor.removeParameter()`](/de/docs/Web/API/XSLTProcessor/removeParameter)
  - : Entfernt den Parameter, wenn er zuvor gesetzt wurde.
    Dadurch verwendet der `XSLTProcessor` den Standardwert für den Parameter, wie im XSLT-Stylesheet angegeben.
- [`XSLTProcessor.clearParameters()`](/de/docs/Web/API/XSLTProcessor/clearParameters)
  - : Entfernt alle gesetzten Parameter aus dem `XSLTProcessor`.
    Der `XSLTProcessor` verwendet dann die Standardwerte, die im XSLT-Stylesheet angegeben sind.
- [`XSLTProcessor.reset()`](/de/docs/Web/API/XSLTProcessor/reset)
  - : Entfernt alle Parameter und Stylesheets aus dem `XSLTProcessor`.

## Instanz-Eigenschaften

_Für diese Schnittstelle sind keine Eigenschaften vorhanden._

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
  // ...
}
```

### Erstellen eines XML-Dokuments basierend auf einem Teil des DOM eines Dokuments

Für die tatsächliche Transformation benötigt `XSLTProcessor` ein XML-Dokument, das zusammen mit der importierten XSL-Datei verwendet wird, um das endgültige Ergebnis zu produzieren. Das XML-Dokument kann eine separate XML-Datei sein, die mit [`fetch()`](/de/docs/Web/API/Window/fetch) geladen wird, oder es kann Teil der vorhandenen Seite sein.

Um einen Teil des DOMs einer Seite zu verarbeiten, ist es notwendig, zuerst ein XML-Dokument im Speicher zu erstellen. Angenommen, das zu verarbeitende DOM befindet sich in einem Element mit der ID `example`, kann dieses DOM mit der Methode [`Document.importNode()`](/de/docs/Web/API/Document/importNode) des XML-Dokuments im Speicher "geklont" werden. [`Document.importNode()`](/de/docs/Web/API/Document/importNode) ermöglicht das Übertragen eines DOM-Fragments zwischen Dokumenten, in diesem Fall von einem HTML-Dokument zu einem XML-Dokument. Der erste Parameter bezieht sich auf den zu klonenden DOM-Knoten. Durch Festlegen des zweiten Parameters auf "true" werden auch alle Nachkommen geklont (ein tiefes Klonen). Das geklonte DOM kann dann mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) in das XML-Dokument eingefügt werden, wie unten gezeigt.

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

Sobald das Stylesheet importiert wurde, muss `XSLTProcessor` zwei Methoden für die tatsächliche Transformation durchführen, nämlich [`XSLTProcessor.transformToDocument()`](/de/docs/Web/API/XSLTProcessor/transformToDocument) und [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment). [`XSLTProcessor.transformToDocument()`](/de/docs/Web/API/XSLTProcessor/transformToDocument) gibt ein vollständiges XML-Dokument zurück, während [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment) ein Dokumentfragment zurückgibt, das leicht zu einem vorhandenen Dokument hinzugefügt werden kann. Beide nehmen das XML-Dokument als ersten Parameter an, das transformiert werden soll. [`XSLTProcessor.transformToFragment()`](/de/docs/Web/API/XSLTProcessor/transformToFragment) erfordert einen zweiten Parameter, nämlich das Dokumentobjekt, das Eigentümer des generierten Fragments sein wird. Wenn das generierte Fragment in das aktuelle HTML-Dokument eingefügt werden soll, reicht es aus, document zu übergeben.

### Erstellen eines XML-Dokuments aus einer String 'XML Suppe'

Sie können den [`DOMParser`](/de/docs/Web/API/DOMParser) verwenden, um ein XML-Dokument aus einem XML-String zu erstellen.

```js
const parser = new DOMParser();
const doc = parser.parseFromString(aStr, "text/xml");
```

### Ausführen der Transformation

```js
const fragment = xsltProcessor.transformToFragment(xmlRef, document);
```

### Einfaches Beispiel

Das einfache Beispiel lädt eine XML-Datei und wendet eine XSL-Transformation darauf an. Dies sind die gleichen Dateien, die im [Generierung von HTML](/de/docs/Web/API/XSLTProcessor/Generating_HTML)-Beispiel verwendet werden. Die XML-Datei beschreibt einen Artikel und die XSL-Datei formatiert die Informationen zur Anzeige.

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

Das Beispiel lädt sowohl die .xsl (`xslStylesheet`) als auch die .xml (`xmlDoc`) Dateien in den Speicher. Die .xsl-Datei wird dann importiert (`xsltProcessor.importStylesheet(xslStylesheet)`) und die Transformation durchgeführt (`xsltProcessor.transformToFragment(xmlDoc, document)`). Dies ermöglicht das Abrufen von Daten, nachdem die Seite geladen wurde, ohne einen erneuten Seitenladevorgang zu initiieren.

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

Dieses fortgeschrittene Beispiel sortiert mehrere divs basierend auf ihrem Inhalt. Das Beispiel ermöglicht das Sortieren des Inhalts mehrfach, wobei zwischen aufsteigender und absteigender Reihenfolge gewechselt wird. Das JavaScript lädt die .xsl-Datei nur beim ersten Sortiervorgang und setzt die Variable `xslloaded` auf true, sobald das Laden der Datei abgeschlossen ist. Mithilfe der Methode [`XSLTProcessor.getParameter()`](/de/docs/Web/API/XSLTProcessor/getParameter) kann der Code feststellen, ob in aufsteigender oder absteigender Reihenfolge sortiert werden soll. Es wird standardmäßig aufsteigend sortiert, wenn der Parameter leer ist (beim ersten Sortiervorgang, da es keinen Wert dafür in der XSLT-Datei gibt). Der Sortierwert wird mit [`XSLTProcessor.setParameter()`](/de/docs/Web/API/XSLTProcessor/setParameter) festgelegt.

Die XSLT-Datei hat einen Parameter namens `myOrder`, den JavaScript setzt, um die Sortiermethode zu ändern. Das Attribut order des `xsl:sort`-Elements kann auf den Wert des Parameters unter Verwendung von `$myOrder` zugreifen. Allerdings muss der Wert ein XPATH-Ausdruck und kein String sein, daher wird `{$myOrder}` verwendet. Mit {} wird der Inhalt als XPath-Ausdruck ausgewertet.

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
let xslloaded = false;
const parser = new DOMParser();
const xsltProcessor = new XSLTProcessor();
let myDOM;

let xmlRef = document.implementation.createDocument("", "", null);

async function sort() {
  if (!xslloaded) {
    const response = await fetch("example2.xsl");
    const xslText = await response.text();
    xslRef = parser.parseFromString(xslText, "application/xml");
    xsltProcessor.importStylesheet(xslRef);
    xslloaded = true;
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

- [XSLT](/de/docs/Web/XSLT)
- [Welche Art von Sprache ist XSLT?](https://developer.ibm.com/technologies/web-development/) bei [IBM developer](https://developer.ibm.com/)
- [XSLT-Tutorial](https://zvon.org/xxl/XSLTutorial/Books/Book1/index.html) bei [zvon.org](https://zvon.org/)
- [XPath-Tutorial](https://zvon.org/xxl/XPathTutorial/General/examples.html) bei [zvon.org](https://zvon.org/)
