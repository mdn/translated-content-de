---
title: XSLT Basisbeispiel
slug: Web/API/XSLTProcessor/Basic_Example
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("XSLT")}}

Dieses erste Beispiel zeigt die Grundlagen der Einrichtung einer XSLT-Transformation in einem Browser. Das Beispiel nimmt ein XML-Dokument, das Informationen über einen Artikel (Titel, Liste der Autoren und Textkörper) enthält und präsentiert es in einer für Menschen lesbaren Form.

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

Die `?xml-stylesheet` Verarbeitungsanweisung im XML-Dokument gibt im `href`-Attribut das anzuwendende XSLT-Stylesheet an.

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

Ein XSLT-Stylesheet beginnt mit dem `xsl:stylesheet` Element, das alle _Vorlagen_ enthält, die zur Erstellung der endgültigen Ausgabe verwendet werden. Das obige Beispiel hat zwei Vorlagen - eine, die mit dem Wurzelknoten übereinstimmt, und eine, die mit `Author`-Knoten übereinstimmt. Die Vorlage, die mit dem Wurzelknoten übereinstimmt, gibt den Titel des Artikels aus und sagt dann, dass alle Vorlagen verarbeitet werden sollen (über `apply-templates`), die mit `Author` Knoten übereinstimmen, die Kinder des `Authors` Knotens sind.

Um das Beispiel auszuprobieren:

1. Erstellen Sie ein Verzeichnis in Ihrem Dateisystem und erstellen Sie darin die Dateien `example.xml` und `example.xsl`, die oben aufgeführt sind.
2. [Starten Sie einen lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server) im Verzeichnis, das die Dateien enthält. Dadurch können Sie die Dateien im Verzeichnis so durchsuchen, als wären sie im Internet gehostet.

   > [!WARNING]
   > Das direkte Öffnen der XML-Datei vom Dateisystem funktioniert nicht, da das Laden des Stylesheets vom Dateisystem eine [cross-origin request](/de/docs/Web/HTTP/CORS) ist und standardmäßig nicht erlaubt wird. Das Hosting des XML und des Stylesheets auf demselben lokalen Server stellt sicher, dass sie den gleichen Ursprung haben.

3. Öffnen Sie **example.xml** im Browser.
4. Die Browser-Ausgabe wird dann wie unten gezeigt:

   ```plain
   Browser Output :

       Article - My Article
       Authors:
       - Mr. Foo
       - Mr. Bar
   ```
