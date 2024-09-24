---
title: XSLT-Prozessor
slug: Web/API/XSLTProcessor
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{APIRef("XSLT")}}

Ein **`XSLTProcessor`** wendet eine [XSLT](/de/docs/Web/XSLT)-Stylesheet-Transformation auf ein XML-Dokument an, um ein neues XML-Dokument als Ausgabe zu erzeugen. Er verfügt über Methoden zum Laden des XSLT-Stylesheets, zum Manipulieren von `<xsl:param>`-Parameterwerten und zum Anwenden der Transformation auf Dokumente.

## Konstruktor

- {{domxref("XSLTProcessor.XSLTProcessor", "XSLTProcessor()")}}
  - : Erstellt einen neuen `XSLTProcessor`.

## Instanzmethoden

- {{domxref("XSLTProcessor.importStylesheet()")}}
  - : Importiert das XSLT-Stylesheet.
    Wenn der gegebene Knoten ein Dokumentknoten ist, können Sie ein vollständiges XSL-Transform oder eine [Literal-Result-Element-Transformation](https://www.w3.org/TR/xslt/#result-element-stylesheet) übergeben; ansonsten muss es ein `<xsl:stylesheet>`- oder `<xsl:transform>`-Element sein.
- {{domxref("XSLTProcessor.transformToFragment()")}}
  - : Transformiert die Knotenquelle, indem das mit der Funktion {{domxref("XSLTProcessor.importStylesheet()")}} importierte XSLT-Stylesheet angewendet wird.
    Das Besitzer-Dokument des resultierenden Dokumentfragments ist der Besitzerknoten.
- {{domxref("XSLTProcessor.transformToDocument()")}}
  - : Transformiert die Knotenquelle, indem das mit der Funktion {{domxref("XSLTProcessor.importStylesheet()")}} importierte XSLT-Stylesheet angewendet wird.
- {{domxref("XSLTProcessor.setParameter()")}}
  - : Setzt einen Parameterwert (`<xsl:param>`) im importierten XSLT-Stylesheet.
- {{domxref("XSLTProcessor.getParameter()")}}
  - : Ruft den Wert eines Parameters aus dem XSLT-Stylesheet ab.
- {{domxref("XSLTProcessor.removeParameter()")}}
  - : Entfernt den Parameter, wenn er zuvor gesetzt wurde.
    Dadurch verwendet der `XSLTProcessor` den Standardwert für den Parameter, wie im XSLT-Stylesheet angegeben.
- {{domxref("XSLTProcessor.clearParameters()")}}
  - : Entfernt alle gesetzten Parameter vom `XSLTProcessor`.
    Der `XSLTProcessor` wird dann die im XSLT-Stylesheet angegebenen Standardwerte verwenden.
- {{domxref("XSLTProcessor.reset()")}}
  - : Entfernt alle Parameter und Stylesheets vom `XSLTProcessor`.

## Instanzeigenschaften

_Diese Schnittstelle hat keine Eigenschaften._

## Beispiele

### Instanziierung eines `XSLTProcessor`

```js
async function init() {
  const parser = new DOMParser();
  const xsltProcessor = new XSLTProcessor();

  // Laden Sie die XSLT-Datei, example1.xsl
  const xslResponse = await fetch("example1.xsl");
  const xslText = await xslResponse.text();
  const xslStylesheet = parser.parseFromString(xslText, "application/xml");
  xsltProcessor.importStylesheet(xslStylesheet);

  // verarbeiten Sie die Datei
  // ...
}
```

### Erstellung eines XML-Dokuments basierend auf einem Teil des DOM eines Dokuments

Für die tatsächliche Transformation benötigt `XSLTProcessor` ein XML-Dokument, das in Verbindung mit der importierten XSL-Datei verwendet wird, um das endgültige Ergebnis zu erzeugen. Das XML-Dokument kann eine separate XML-Datei sein, die mit {{domxref("Window/fetch", "fetch()")}} geladen wird, oder es kann Teil der vorhandenen Seite sein.

Um einen Teil des DOMs einer Seite zu verarbeiten, ist es notwendig, zuerst ein XML-Dokument im Speicher zu erstellen. Angenommen, das zu verarbeitende DOM wird von einem Element mit der ID `example` enthalten, kann dieses DOM mittels der Methode {{domxref('Document.importNode()')}} des im Speicher liegenden XML-Dokuments "geklont" werden. {{domxref('Document.importNode()')}} ermöglicht das Übertragen eines DOM-Fragments zwischen Dokumenten, in diesem Fall von einem HTML-Dokument zu einem XML-Dokument. Der erste Parameter referenziert den zu klonenden DOM-Knoten. Durch Angabe des zweiten Parameters "true" werden auch alle Nachkommen geklont (ein tiefer Klon). Das geklonte DOM kann dann unter Verwendung von {{domxref('Node.appendChild()')}} in das XML-Dokument eingefügt werden, wie unten gezeigt.

```js
// Erstellen Sie ein neues XML-Dokument im Speicher
const xmlRef = document.implementation.createDocument("", "", null);

// Wir möchten einen Teil des DOMs von einem HTML-Dokument in ein XML-Dokument verschieben.
// importNode wird verwendet, um die Knoten zu klonen, die wir über XSLT verarbeiten möchten - true bewirkt einen tiefen Klon
const myNode = document.getElementById("example");
const clonedNode = xmlRef.importNode(myNode, true);

// Fügen Sie das geklonte DOM in das XML-Dokument ein
xmlRef.appendChild(clonedNode);
```

Nachdem das Stylesheet importiert wurde, muss `XSLTProcessor` zwei Methoden für die tatsächliche Transformation ausführen, nämlich {{domxref('XSLTProcessor.transformToDocument()')}} und {{domxref('XSLTProcessor.transformToFragment()')}}. {{domxref('XSLTProcessor.transformToDocument()')}} gibt ein vollständiges XML-Dokument zurück, während {{domxref('XSLTProcessor.transformToFragment()')}} ein Dokumentfragment zurückgibt, das einfach zu einem bestehenden Dokument hinzugefügt werden kann. Beide nehmen das XML-Dokument als ersten Parameter, das transformiert werden soll. {{domxref('XSLTProcessor.transformToFragment()')}} erfordert einen zweiten Parameter, nämlich das Dokumentobjekt, das das generierte Fragment besitzen wird. Wenn das generierte Fragment in das aktuelle HTML-Dokument eingefügt wird, reicht es aus, `document` zu übergeben.

### Erstellung eines XML-Dokuments aus einem String 'XML Soup'

Sie können den {{domxref("DOMParser")}} verwenden, um ein XML-Dokument aus einem XML-String zu erstellen.

```js
const parser = new DOMParser();
const doc = parser.parseFromString(aStr, "text/xml");
```

### Durchführung der Transformation

```js
const fragment = xsltProcessor.transformToFragment(xmlRef, document);
```

### Einfaches Beispiel

Das einfache Beispiel lädt eine XML-Datei und wendet eine XSL-Transformation darauf an. Dies sind die gleichen Dateien, die im Beispiel [HTML generieren](/de/docs/Web/API/XSLTProcessor/Generating_HTML) verwendet werden. Die XML-Datei beschreibt einen Artikel und die XSL-Datei formatiert die Informationen für die Anzeige.

#### XML

```xml
<?xml version="1.0"?>
<myNS:Article xmlns:myNS="http://devedge.netscape.com/2002/de">
  <myNS:Title>Mein Artikel</myNS:Title>
  <myNS:Authors>
    <myNS:Author company="Foopy Corp.">Herr Foo</myNS:Author>
    <myNS:Author>Herr Bar</myNS:Author>
  </myNS:Authors>
  <myNS:Body>
    Der <b>Regen</b> in <u>Spanien</u> bleibt hauptsächlich auf den Ebenen.
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

          Autoren:   <br />
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

Das Beispiel lädt sowohl die .xsl- (`xslStylesheet`) als auch die .xml- (`xmlDoc`) Dateien in den Speicher. Die .xsl-Datei wird dann importiert (`xsltProcessor.importStylesheet(xslStylesheet)`) und die Transformation ausgeführt (`xsltProcessor.transformToFragment(xmlDoc, document)`). Dies ermöglicht das Abrufen von Daten, nachdem die Seite geladen wurde, ohne einen neuen Seitenladevorgang zu initiieren.

#### JavaScript

```js
async function init() {
  const parser = new DOMParser();
  const xsltProcessor = new XSLTProcessor();

  // Laden Sie die XSLT-Datei, example1.xsl
  const xslResponse = await fetch("example1.xsl");
  const xslText = await xslResponse.text();
  const xslStylesheet = parser.parseFromString(xslText, "application/xml");
  xsltProcessor.importStylesheet(xslStylesheet);

  // Laden Sie die XML-Datei, example1.xml
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

Dieses fortgeschrittene Beispiel sortiert mehrere Divs basierend auf ihrem Inhalt. Das Beispiel ermöglicht es, den Inhalt mehrfach zu sortieren, abwechselnd in aufsteigender und absteigender Reihenfolge. Das JavaScript lädt die .xsl-Datei nur beim ersten Sortieren und setzt die Variable `xslloaded` auf `true`, sobald die Datei geladen wurde. Mit der Methode {{domxref("XSLTProcessor.getParameter()")}} kann der Code herausfinden, ob in aufsteigender oder absteigender Reihenfolge sortiert werden soll. Es wird standardmäßig aufsteigend sortiert, wenn der Parameter leer ist (das erste Mal, wenn die Sortierung geschieht, da dafür kein Wert in der XSLT-Datei vorhanden ist). Der Sortierwert wird mittels {{domxref("XSLTProcessor.setParameter()")}} festgelegt.

Die XSLT-Datei hat einen Parameter namens `myOrder`, den JavaScript setzt, um die Sortiermethode zu ändern. Das `xsl:sort`-Element-Attribut `order` kann auf den Wert des Parameters unter Verwendung von `$myOrder` zugreifen. Der Wert muss jedoch ein XPath-Ausdruck und kein String sein, daher wird `{$myOrder}` verwendet. Durch die Verwendung von {} wird der Inhalt als XPath-Ausdruck ausgewertet.

Sobald die Transformation abgeschlossen ist, wird das Ergebnis in das Dokument eingefügt, wie in diesem Beispiel gezeigt.

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

  // Erstellen Sie ein neues XML-Dokument im Speicher
  xmlRef = document.implementation.createDocument("", "", null);

  // Wir möchten einen Teil des DOMs von einem HTML-Dokument in ein XML-Dokument verschieben.
  // importNode wird verwendet, um die Knoten zu klonen, die wir über XSLT verarbeiten möchten - true bewirkt einen tiefen Klon
  const myNode = document.getElementById("example");
  const clonedNode = xmlRef.importNode(myNode, true);

  // Nach dem Klonen fügen wir hinzu
  xmlRef.appendChild(clonedNode);

  // Setzen Sie den Sortierparameter in der XSL-Datei
  const sortVal = xsltProcessor.getParameter(null, "myOrder");

  if (sortVal === "" || sortVal === "descending") {
    xsltProcessor.setParameter(null, "myOrder", "ascending");
  } else {
    xsltProcessor.setParameter(null, "myOrder", "descending");
  }

  // Starten Sie die Transformation
  const fragment = xsltProcessor.transformToFragment(xmlRef, document);

  // Löschen Sie den Inhalt
  document.getElementById("example").textContent = "";

  myDOM = fragment;

  // Fügen Sie den neuen Inhalt der Transformation hinzu
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
- [What kind of language is XSLT?](https://developer.ibm.com/technologies/web-development/) bei [IBM developer](https://developer.ibm.com/)
- [XSLT Tutorial](https://zvon.org/xxl/XSLTutorial/Books/Book1/index.html) bei [zvon.org](https://zvon.org/)
- [XPath Tutorial](https://zvon.org/xxl/XPathTutorial/General/examples.html) bei [zvon.org](https://zvon.org/)
