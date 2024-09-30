---
title: XSLT Basic Example
slug: Web/API/XSLTProcessor/Basic_Example
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XSLT")}}

Dieses erste Beispiel demonstriert die Grundlagen der Einrichtung einer XSLT-Transformation in einem Browser. Das Beispiel verwendet ein XML-Dokument, das Informationen zu einem Artikel enthält (Titel, Liste der Autoren und Textkörper) und präsentiert es in einer für Menschen lesbaren Form.

Das XML-Dokument (**example.xml**) wird unten angezeigt.

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

Die `?xml-stylesheet` Verarbeitungsanweisung im XML-Dokument gibt das XSLT-Stylesheet an, das im `href`-Attribut angewendet werden soll.

Diese XSL-Stylesheet-Datei (**example.xsl**) wird unten angezeigt:

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

Ein XSLT-Stylesheet beginnt mit dem `xsl:stylesheet` Element, das alle _Vorlagen_ enthält, die zur Erstellung der endgültigen Ausgabe verwendet werden. Das obige Beispiel hat zwei Vorlagen - eine, die den Wurzelknoten abgleicht, und eine, die `Author`-Knoten abgleicht. Die Vorlage, die den Wurzelknoten abgleicht, gibt den Titel des Artikels aus und fordert dann auf, alle Vorlagen zu verarbeiten (über `apply-templates`), die `Author`-Knoten abgleichen, welche Kinder des `Authors`-Knotens sind.

Um das Beispiel auszuprobieren:

1. Erstellen Sie ein Verzeichnis in Ihrem Dateisystem und erstellen Sie darin die Dateien `example.xml` und `example.xsl`, wie oben aufgeführt.
2. [Starten Sie einen lokalen Server](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server) im Verzeichnis, das die Dateien enthält. Dadurch können Sie die Dateien im Verzeichnis durchsuchen, als wären sie im Internet gehostet.

   > [!WARNING]
   > Das direkte Öffnen der XML-Datei aus dem Dateisystem wird nicht funktionieren, da das Laden des Stylesheets vom Dateisystem eine [Anfrage zwischen verschiedenen Ursprüngen](/de/docs/Web/HTTP/CORS) darstellt und standardmäßig nicht erlaubt ist.
   > Wenn Sie das XML und das Stylesheet auf demselben lokalen Server hosten, wird sichergestellt, dass sie denselben Ursprung haben.

3. Öffnen Sie **example.xml** im Browser.
4. Die Ausgabe im Browser sieht dann wie unten gezeigt aus:

   ```plain
   Browser Output :

       Article - My Article
       Authors:
       - Mr. Foo
       - Mr. Bar
   ```
