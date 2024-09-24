---
title: XSLT Grundlegendes Beispiel
slug: Web/API/XSLTProcessor/Basic_Example
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XSLT")}}

Dieses erste Beispiel zeigt die Grundlagen der Einrichtung einer XSLT-Transformation in einem Browser.
Das Beispiel nimmt ein XML-Dokument, das Informationen über einen Artikel (Titel, Liste der Autoren und Haupttext) enthält und präsentiert es in einer menschenlesbaren Form.

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

Die `?xml-stylesheet` Verarbeitungsanweisung im XML-Dokument gibt das anzuwendende XSLT-Stylesheet in ihrem `href`-Attribut an.

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

Ein XSLT-Stylesheet beginnt mit dem `xsl:stylesheet` Element, das alle _Templates_ enthält, die verwendet werden, um die endgültige Ausgabe zu erstellen.
Das obige Beispiel hat zwei Templates - eines, das zum Wurzelknoten passt, und eines, das zu `Author`-Knoten passt.
Das Template, das zum Wurzelknoten passt, gibt den Titel des Artikels aus und sagt dann, dass alle Templates verarbeitet werden sollen (über `apply-templates`), die zu `Author`-Knoten passen, welche Kinder des `Authors`-Knotens sind.

Um das Beispiel auszuprobieren:

1. Erstellen Sie ein Verzeichnis in Ihrem Dateisystem und legen Sie darin die oben aufgeführten Dateien `example.xml` und `example.xsl` an.
2. [Starten Sie einen lokalen Server](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server) in dem Verzeichnis, das die Dateien enthält.
   Dies ermöglicht es Ihnen, die Dateien im Verzeichnis zu durchsuchen, als wären sie im Internet gehostet.

   > [!WARNING]
   > Das direkte Öffnen der XML-Datei aus dem Dateisystem wird nicht funktionieren, da das Laden des Stylesheets vom Dateisystem eine [Cross-Origin-Anfrage](/de/docs/Web/HTTP/CORS) ist, die standardmäßig nicht erlaubt wird.
   > Wenn das XML und das Stylesheet auf demselben lokalen Server gehostet werden, wird sichergestellt, dass sie denselben Ursprung haben.

3. Öffnen Sie **example.xml** im Browser.
4. Die Browser-Ausgabe sieht dann wie unten gezeigt aus:

   ```plain
   Browserausgabe :

       Article - My Article
       Authors:
       - Mr. Foo
       - Mr. Bar
   ```
