---
title: Transformation mit XSLT
slug: Web/API/Document_Object_Model/Transforming_with_XSLT
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("DOM")}}

Ein bemerkbarer Trend in den W3C-Standards ist das Bestreben, Inhalt von Stil zu trennen. Dies würde ermöglichen, denselben Stil für mehrere Inhalte wiederzuverwenden, die Wartung zu vereinfachen und eine schnelle (nur eine Datei ändern) Möglichkeit bieten, das Aussehen des Inhalts zu ändern.

CSS (Cascading Style Sheets) war eine der ersten vom W3C vorgeschlagenen Methoden. CSS ist eine Möglichkeit, Stilregeln auf ein Webdokument anzuwenden. Diese Stilregeln definieren, wie das Dokument (der Inhalt) layoutet werden soll. Es hat jedoch mehrere Einschränkungen, wie das Fehlen von Programmiervorrichtungen und die Fähigkeit, komplexe Layout-Modelle zu erstellen. CSS hat auch begrenzte Unterstützung zur Änderung der Position eines Elements.

XSL (Extensible Stylesheet Language) Transformationen bestehen aus zwei Teilen: XSL-Elemente, die die Transformation eines XML-Baums in einen anderen Markup-Baum ermöglichen, und XPath, eine Auswahlsprache für Bäume. XSLT nimmt ein XML-Dokument (den Inhalt) und erstellt ein völlig neues Dokument basierend auf den Regeln im XSL-Stylesheet. Dadurch kann XSLT Elemente aus dem ursprünglichen XML-Dokument hinzufügen, entfernen und neu organisieren und somit eine feinere Kontrolle über die Struktur des resultierenden Dokuments ermöglichen.

Transformationen in XSLT basieren auf Regeln, die aus Vorlagen bestehen. Jede Vorlage passt (unter Verwendung von XPath) auf ein bestimmtes Fragment des Eingabe-XML-Dokuments und wendet dann den Substitutionsteil auf dieses Fragment an, um das neue resultierende Dokument zu erstellen.

## Einfaches Beispiel

Dieses erste Beispiel demonstriert die Grundlagen der Einrichtung einer XSLT-Transformation in einem Browser. Das Beispiel nimmt ein XML-Dokument, das Informationen über einen Artikel (Titel, Liste von Autoren und Textkörper) enthält, und präsentiert es in einer für Menschen lesbaren Form.

Das XML-Dokument (**example.xml**) ist unten gezeigt.

```xml
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="example.xsl"?>
<Article>
  <Title>My Article</Title>
  <Authors>
    <Author>Mr. Foo</Author>
    <Author>Mr. Bar</Author>
  </Authors>
  <Body>This is my article text.</Body>
</Article>
```

Die Verarbeitungsanweisung `?xml-stylesheet` im XML-Dokument gibt das anzuwendende XSLT-Stylesheet im `href`-Attribut an.

Diese XSL-Stylesheet-Datei (**example.xsl**) ist unten gezeigt:

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="text"/>

  <xsl:template match="/">
    Article - <xsl:value-of select="/Article/Title"/>
    Authors: <xsl:apply-templates select="/Article/Authors/Author"/>
  </xsl:template>

  <xsl:template match="Author">
    - <xsl:value-of select="." />
  </xsl:template>

</xsl:stylesheet>
```

Ein XSLT-Stylesheet beginnt mit dem `xsl:stylesheet`-Element, das alle _Vorlagen_ enthält, die zum Erstellen der endgültigen Ausgabe verwendet werden. Das obige Beispiel hat zwei Vorlagen - eine, die mit dem Wurzelknoten übereinstimmt, und eine, die mit `Author`-Knoten übereinstimmt. Die Vorlage, die mit dem Wurzelknoten übereinstimmt, gibt den Titel des Artikels aus und sagt dann, alle Vorlagen zu verarbeiten (über `apply-templates`), die mit `Author`-Knoten übereinstimmen, die Kinder des `Authors`-Knotens sind.

Um das Beispiel auszuprobieren:

1. Erstellen Sie ein Verzeichnis auf Ihrem Dateisystem und erstellen Sie darin die Dateien `example.xml` und `example.xsl`, die oben aufgelistet sind.
2. [Starten Sie einen lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server) im Verzeichnis, das die Dateien enthält. Dies ermöglicht Ihnen, die Dateien im Verzeichnis so zu durchsuchen, als wären sie im Internet gehostet.

   > [!WARNING]
   > Das direkte Öffnen der XML-Datei vom Dateisystem wird nicht funktionieren, da das Laden des Stylesheets vom Dateisystem eine [Cross-Origin-Anfrage](/de/docs/Web/HTTP/Guides/CORS) ist und standardmäßig nicht erlaubt wird.
   > Das Hosten der XML-Datei und des Stylesheets auf demselben lokalen Server stellt sicher, dass sie denselben Ursprung haben.

3. Öffnen Sie **example.xml** im Browser.
4. Die Browserausgabe wird dann wie unten gezeigt:

   ```plain
   Browser Output :

       Article - My Article
       Authors:
       - Mr. Foo
       - Mr. Bar
   ```

## HTML generieren

Eine gängige Anwendung von XSLT im Browser ist die Transformation von XML in HTML auf dem Client. Dieses Beispiel wird das Eingabedokument (example2.xml), das Informationen über einen Artikel enthält, in ein HTML-Dokument umwandeln.

Das `<body>`-Element des Artikels enthält nun HTML-Elemente (ein `<b>`- und ein `<u>`-Tag). Das XML-Dokument enthält sowohl HTML-Elemente als auch XML-Elemente, aber nur ein Namespace wird benötigt, nämlich für die XML-Elemente. Da es keinen HTML-Namespace gibt und die Verwendung des XHTML-Namespaces das XSL dazu zwingen würde, ein XML-Dokument zu erstellen, das sich nicht wie ein HTML-Dokument verhält, wird `xsl:output` im XSL-Stylesheet sicherstellen, dass das resultierende Dokument als HTML behandelt wird. Für die XML-Elemente wird unser eigener Namespace benötigt, `http://devedge.netscape.com/2002/de`, und er wird mit dem Präfix myNS `(xmlns:myNS="http://devedge.netscape.com/2002/de")` angegeben.

### XML-Datei

```xml
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="example2.xsl"?>
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

Das verwendete XSL-Stylesheet benötigt zwei Namespaces - einen für die XSLT-Elemente und einen für unsere eigenen XML-Elemente, die im XML-Dokument verwendet werden. Die Ausgabe des XSL-Stylesheets wird auf `HTML` gesetzt, indem das `xsl:output`-Element verwendet wird. Durch das Setzen der Ausgabe auf HTML und das Fehlen eines Namespace auf den resultierenden Elementen (blau eingefärbt), werden diese Elemente als HTML-Elemente behandelt.

### XSL-Stylesheet mit 2 Namespaces

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html"/>
  …
</xsl:stylesheet version="1.0">
```

Eine Vorlage, die mit dem Wurzelknoten des XML-Dokuments übereinstimmt, wird erstellt und verwendet, um die grundlegende Struktur der HTML-Seite zu erstellen.

### Erstellung des grundlegenden HTML-Dokuments

```xml
…
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
      </span> </br>

      Authors:   <br />
        <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
    </p>

    <p class="myBox">
      <xsl:apply-templates select="//myNS:Body"/>
    </p>

  </body>

</html>
</xsl:template>
…
```

Drei weitere `xsl:template`'s werden benötigt, um das Beispiel zu vervollständigen. Die erste `xsl:template` wird für die Autor-Knoten verwendet, während die zweite den Knotenbody verarbeitet. Die dritte Vorlage hat eine allgemeine Übereinstimmungsregel, die auf jeden Knoten und jedes Attribut passt. Sie ist notwendig, um die HTML-Elemente im XML-Dokument zu erhalten, da sie alle von ihnen abgleicht und sie in das HTML-Dokument kopiert, das die Transformation erstellt.

### Endgültige 3 Vorlagen

```xml
…
<xsl:template match="myNS:Author">
    --   <xsl:value-of select="." />

  <xsl:if test="@company">
    ::   <b>  <xsl:value-of select="@company" />  </b>
  </xsl:if>

  <br />
</xsl:template>
```

```xml
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
…
```

Das endgültige XSLT-Stylesheet sieht wie folgt aus:

### Endgültiges XSLT-Stylesheet

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
