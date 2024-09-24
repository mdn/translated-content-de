---
title: Generieren von HTML
slug: Web/API/XSLTProcessor/Generating_HTML
l10n:
  sourceCommit: 2836f3bf8ee544a2e87bfadd30a5d802110edd11
---

{{APIRef("XSLT")}}

Eine häufige Anwendung von XSLT im Browser besteht darin, XML clientseitig in HTML zu transformieren. Dieses Beispiel wird das Eingabedokument (example2.xml), das Informationen über einen Artikel enthält, in ein HTML-Dokument umwandeln.

Das `<body>`-Element des Artikels enthält nun HTML-Elemente (ein `<b>`- und ein `<u>`-Tag). Das XML-Dokument enthält sowohl HTML-Elemente als auch XML-Elemente, aber es wird nur ein Namensraum benötigt, nämlich für die XML-Elemente. Da es keinen HTML-Namensraum gibt und die Verwendung des XHTML-Namensraums das XSL zwingen würde, ein XML-Dokument zu erstellen, das sich nicht wie ein HTML-Dokument verhalten würde, sorgt das `xsl:output` im XSL-Stylesheet dafür, dass das resultierende Dokument als HTML behandelt wird. Für die XML-Elemente ist unser eigener Namensraum erforderlich, `http://devedge.netscape.com/2002/de`, und er erhält das Präfix myNS `(xmlns:myNS="http://devedge.netscape.com/2002/de")`.

## XML-Datei

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

Das verwendete XSL-Stylesheet muss zwei Namensräume haben - einen für die XSLT-Elemente und einen für unsere eigenen XML-Elemente, die im XML-Dokument verwendet werden. Der Output des XSL-Stylesheets wird durch das `xsl:output`-Element auf `HTML` gesetzt. Indem der Output auf HTML gesetzt wird und die resultierenden Elemente (in blau) keinen Namensraum haben, werden diese Elemente als HTML-Elemente behandelt.

## XSL-Stylesheet mit 2 Namensräumen

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html"/>
  …
</xsl:stylesheet version="1.0">
```

Ein Template, das mit dem Wurzelknoten des XML-Dokuments übereinstimmt, wird erstellt und verwendet, um die Grundstruktur der HTML-Seite zu erstellen.

## Erstellen des grundlegenden HTML-Dokuments

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

Drei weitere `xsl:template` sind erforderlich, um das Beispiel abzuschließen. Das erste `xsl:template` wird für die Autor-Knoten verwendet, während das zweite den Body-Knoten verarbeitet. Das dritte Template hat eine allgemeine Übereinstimmungsregel, die mit jedem Knoten und jedem Attribut übereinstimmt. Es wird benötigt, um die HTML-Elemente im XML-Dokument zu erhalten, da es alle von ihnen abgleicht und in das HTML-Dokument kopiert, das die Transformation erstellt.

## Letzte 3 Templates

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

Das endgültige XSLT-Stylesheet sieht folgendermaßen aus:

## Endgültiges XSLT-Stylesheet

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
