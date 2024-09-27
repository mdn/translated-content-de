---
title: XSLT Grundbeispiel
slug: Web/API/XSLTProcessor/Basic_Example
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XSLT")}}

Dieses erste Beispiel zeigt die Grundlagen der Einrichtung einer XSLT-Transformation in einem Browser.
Das Beispiel nimmt ein XML-Dokument, das Informationen über einen Artikel enthält (Titel, Liste der Autoren und Fließtext) und stellt es in einer für Menschen lesbaren Form dar.

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

Die `?xml-stylesheet` Verarbeitungsanweisung in der XML-Datei gibt das anzuwendende XSLT-Stylesheet in ihrem `href` Attribut an.

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

Ein XSLT-Stylesheet beginnt mit dem `xsl:stylesheet` Element, welches alle _Templates_ enthält, die zur Erstellung der endgültigen Ausgabe verwendet werden.
Das obige Beispiel hat zwei Templates - eines, das mit dem Wurzelknoten übereinstimmt, und eines, das mit `Author` Knoten übereinstimmt.
Das Template, das mit dem Wurzelknoten übereinstimmt, gibt den Titel des Artikels aus und bestimmt dann, dass alle Templates (über `apply-templates`) ausgeführt werden sollen, die mit `Author` Knoten übereinstimmen, welche Kinder des `Authors` Knotens sind.

Um das Beispiel auszuprobieren:

1. Erstellen Sie ein Verzeichnis auf Ihrem Dateisystem und darin die Dateien `example.xml` und `example.xsl`, wie oben aufgeführt
2. [Starten Sie einen lokalen Server](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server) in dem Verzeichnis, das die Dateien enthält.
   Dies ermöglicht es Ihnen, die Dateien im Verzeichnis zu durchsuchen, als wären sie im Internet gehostet.

   > [!WARNING]
   > Das direkte Öffnen der XML-Datei vom Dateisystem wird nicht funktionieren, da das Laden des Stylesheets vom Dateisystem eine [cross-origin request](/de/docs/Web/HTTP/CORS) ist und standardmäßig nicht erlaubt wird.
   > Das Hosten der XML-Datei und des Stylesheets auf demselben lokalen Server stellt sicher, dass sie denselben Ursprung haben.

3. Öffnen Sie **example.xml** im Browser.
4. Die Browserausgabe sieht dann wie folgt aus:

   ```plain
   Browser Output :

       Article - My Article
       Authors:
       - Mr. Foo
       - Mr. Bar
   ```
