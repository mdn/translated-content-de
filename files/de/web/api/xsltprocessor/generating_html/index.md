---
title: HTML Generierung
slug: Web/API/XSLTProcessor/Generating_HTML
l10n:
  sourceCommit: 2836f3bf8ee544a2e87bfadd30a5d802110edd11
---

{{APIRef("XSLT")}}

Eine häufig angewendete Methode von XSLT im Browser besteht darin, XML im Client in HTML zu transformieren. In diesem Beispiel wird das Eingabedokument (example2.xml), welches Informationen über einen Artikel enthält, in ein HTML-Dokument umgewandelt.

Das `<body>`-Element des Artikels enthält nun HTML-Elemente (ein `<b>`- und ein `<u>`-Tag). Das XML-Dokument enthält sowohl HTML-Elemente als auch XML-Elemente, aber es wird nur ein Namespace benötigt, nämlich für die XML-Elemente. Da es keinen HTML-Namespace gibt und die Verwendung des XHTML-Namespaces den XSL dazu zwingen würde, ein XML-Dokument zu erstellen, das sich nicht wie ein HTML-Dokument verhält, stellt das `xsl:output` im XSL-Stylesheet sicher, dass das resultierende Dokument als HTML behandelt wird. Für die XML-Elemente wird unser eigener Namespace benötigt, `http://devedge.netscape.com/2002/de`, und diesem wird das Präfix myNS `(xmlns:myNS="http://devedge.netscape.com/2002/de")` zugewiesen.

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

Das verwendete XSL-Stylesheet benötigt zwei Namespaces - einen für die XSLT-Elemente und einen für unsere eigenen XML-Elemente, die im XML-Dokument verwendet werden. Die Ausgabe des XSL-Stylesheets wird durch das Element `xsl:output` auf `HTML` gesetzt. Indem die Ausgabe als HTML gesetzt wird und es keinen Namespace auf den resultierenden Elementen gibt (in Blau dargestellt), werden diese Elemente als HTML-Elemente behandelt.

## XSL-Stylesheet mit 2 Namespaces

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html"/>
  …
</xsl:stylesheet version="1.0">
```

Ein Template, das dem Wurzelknoten des XML-Dokuments entspricht, wird erstellt und verwendet, um die grundlegende Struktur der HTML-Seite zu erstellen.

## Erstellung des grundlegenden HTML-Dokuments

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

Drei weitere `xsl:template` sind nötig, um das Beispiel zu vervollständigen. Das erste `xsl:template` wird für die Autor-Knoten verwendet, während das zweite den Body-Knoten verarbeitet. Das dritte Template hat eine allgemeine Übereinstimmungsregel, die jeden Knoten und jedes Attribut abgleicht. Es wird benötigt, um die HTML-Elemente im XML-Dokument zu erhalten, da es alle von ihnen abgleicht und in das durch die Transformation erstellte HTML-Dokument kopiert.

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

Das abschließende XSLT-Stylesheet sieht wie folgt aus:

## Abschließendes XSLT-Stylesheet

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
