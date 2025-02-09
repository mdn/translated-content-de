---
title: Transformationen mit XSLT
slug: Web/API/Document_Object_Model/Transforming_with_XSLT
l10n:
  sourceCommit: 914b6d3206dfaeb22617739e7baaf15e5ba3aa21
---

{{DefaultAPISidebar("DOM")}}

Ein bemerkenswerter Trend in den W3C-Standards ist die Bemühung, Inhalte von der Gestaltung zu trennen. Dies ermöglicht es, dieselbe Gestaltung für mehrere Inhalte wiederzuverwenden, vereinfacht die Wartung und bietet eine schnelle Möglichkeit (nur eine Datei ändern), das Erscheinungsbild von Inhalten zu ändern.

CSS (Cascading Style Sheets) war eine der ersten vom W3C vorgeschlagenen Methoden. CSS ist eine Möglichkeit, Stilregeln auf ein Webdokument anzuwenden. Diese Stilregeln definieren, wie das Dokument (der Inhalt) dargestellt werden soll. Es gibt jedoch einige Einschränkungen, wie das Fehlen von Programmierstrukturen und die Fähigkeit, komplexe Layoutmodelle zu erstellen. CSS bietet auch nur begrenzte Unterstützung, um die Position eines Elements zu ändern.

XSL (Extensible Stylesheet Language) Transformations bestehen aus zwei Teilen: XSL-Elementen, die die Transformation eines XML-Baums in einen anderen Markup-Baum ermöglichen, und XPath, einer Abfragesprache für Bäume. XSLT nimmt ein XML-Dokument (den Inhalt) und erstellt ein völlig neues Dokument basierend auf den Regeln im XSL-Stylesheet. Dadurch kann XSLT Elemente aus dem ursprünglichen XML-Dokument hinzufügen, entfernen und reorganisieren, was eine fein abgestimmte Kontrolle über die Struktur des resultierenden Dokuments ermöglicht.

Die Transformationen in XSLT basieren auf Regeln, die aus Templates bestehen. Jedes Template passt (mittels XPath) zu einem bestimmten Fragment des Eingabe-XML-Dokuments und wendet dann den Substitutionsteil auf dieses Fragment an, um das neue resultierende Dokument zu erstellen.

## Einfaches Beispiel

Dieses erste Beispiel zeigt die Grundlagen der Einrichtung einer XSLT-Transformation in einem Browser. Das Beispiel nimmt ein XML-Dokument, das Informationen über einen Artikel (Titel, Liste der Autoren und Haupttext) enthält, und stellt es in einer für Menschen lesbaren Form dar.

Das XML-Dokument (**example.xml**) wird unten gezeigt.

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

Die `?xml-stylesheet`-Verarbeitungsanweisung in der XML-Datei gibt das anzuwendende XSLT-Stylesheet in ihrem Attribut `href` an.

Diese XSL-Stylesheet-Datei (**example.xsl**) wird unten gezeigt:

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

Ein XSLT-Stylesheet beginnt mit dem `xsl:stylesheet`-Element, das alle _Templates_ enthält, die verwendet werden, um die endgültige Ausgabe zu erstellen.
Das obige Beispiel hat zwei Templates – eines, das zum Wurzelknoten passt, und eines, das zu `Author`-Knoten passt.
Das Template, das zum Wurzelknoten passt, gibt den Titel des Artikels aus und sagt dann, dass alle Templates (mittels `apply-templates`) verarbeitet werden sollen, die zu `Author`-Knoten passen, die Kinder des `Authors`-Knotens sind.

Um das Beispiel auszuprobieren:

1. Erstellen Sie ein Verzeichnis in Ihrem Dateisystem und legen Sie darin die Dateien `example.xml` und `example.xsl` aus der obigen Liste an.
2. [Starten Sie einen lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server) im Verzeichnis, das die Dateien enthält.
   Dadurch können Sie die Dateien im Verzeichnis so durchsuchen, als wären sie im Internet gehostet.

   > [!WARNING]
   > Das direkte Öffnen der XML-Datei aus dem Dateisystem wird nicht funktionieren, da das Laden des Stylesheets vom Dateisystem eine [cross-origin request](/de/docs/Web/HTTP/CORS) darstellt, die standardmäßig nicht erlaubt ist.
   > Das Hosten des XML und des Stylesheets auf demselben lokalen Server stellt sicher, dass sie denselben Ursprung haben.

3. Öffnen Sie **example.xml** im Browser.
4. Die Browser-Ausgabe sieht dann wie folgt aus:

   ```plain
   Browser Output :

       Article - My Article
       Authors:
       - Mr. Foo
       - Mr. Bar
   ```

## Generierung von HTML

Ein häufige Anwendung von XSLT im Browser ist die Transformation von XML in HTML auf der Client-Seite. Dieses Beispiel wird das Eingabedokument (example2.xml), das Informationen über einen Artikel enthält, in ein HTML-Dokument umwandeln.

Das `<body>`-Element des Artikels enthält nun HTML-Elemente (ein `<b>` und ein `<u>` Tag). Das XML-Dokument enthält sowohl HTML- als auch XML-Elemente, aber es wird nur ein Namespace benötigt, und zwar für die XML-Elemente. Da es keinen HTML-Namespace gibt und die Verwendung des XHTML-Namespaces den XSL dazu zwingen würde, ein XML-Dokument zu erstellen, das sich nicht wie ein HTML-Dokument verhält, wird `xsl:output` im XSL-Stylesheet sicherstellen, dass das resultierende Dokument als HTML behandelt wird. Für die XML-Elemente benötigen wir einen eigenen Namespace, `http://devedge.netscape.com/2002/de`, der über das Präfix myNS `(xmlns:myNS="http://devedge.netscape.com/2002/de")` definiert wird.

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

Das verwendete XSL-Stylesheet benötigt zwei Namespaces – einen für die XSLT-Elemente und einen für die eigenen XML-Elemente im XML-Dokument. Die Ausgabe des XSL-Stylesheets wird auf `HTML` gesetzt, indem das `xsl:output`-Element verwendet wird. Durch das Festlegen der Ausgabe auf HTML und das Fehlen eines Namespaces für die resultierenden Elemente (in Blau dargestellt), werden diese Elemente als HTML-Elemente behandelt.

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

Ein Template, das zum Wurzelknoten des XML-Dokuments passt, wird erstellt und verwendet, um die Grundstruktur der HTML-Seite zu erstellen.

### Erstellen des grundlegenden HTML-Dokuments

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

Drei weitere `xsl:template` sind erforderlich, um das Beispiel abzuschließen. Das erste `xsl:template` wird für die Autor-Knoten verwendet, während das zweite den Haupttext-Knoten verarbeitet. Das dritte Template hat eine allgemeine Übereinstimmungsregel, die zu jedem Knoten und jedem Attribut passt. Es wird benötigt, um die HTML-Elemente im XML-Dokument beizubehalten, da es alle von ihnen erfasst und in das HTML-Dokument kopiert, das die Transformation erstellt.

### Die letzten 3 Templates

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
