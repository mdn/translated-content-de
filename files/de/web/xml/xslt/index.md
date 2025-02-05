---
title: "XSLT: Extensible Stylesheet Language Transformations"
short-title: XSLT
slug: Web/XML/XSLT
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

**Extensible Stylesheet Language Transformations (XSLT)** ist eine auf [XML](/de/docs/Web/XML/Guides/XML_introduction) basierende Sprache, die zusammen mit spezieller Verarbeitungssoftware zur Transformation von XML-Dokumenten verwendet wird.

Obwohl der Prozess als "Transformation" bezeichnet wird, wird das Originaldokument nicht verändert; stattdessen wird ein neues XML-Dokument basierend auf dem Inhalt eines vorhandenen Dokuments erstellt. Das neue Dokument kann dann vom Prozessor in der standardmäßigen XML-Syntax oder in einem anderen Format wie [HTML](/de/docs/Web/HTML) oder reinem Text ausgegeben werden.

XSLT wird am häufigsten verwendet, um Daten zwischen verschiedenen XML-Schemata zu konvertieren oder XML-Daten in Webseiten oder PDF-Dokumente umzuwandeln.

## Dokumentation

### Referenz

- [XSLT-Elemente-Referenz](/de/docs/Web/XML/XSLT/Reference/Element)
  - : Diese Seite beschreibt XSLT-Elemente, mit einem Fokus auf Top-Level-Elemente, die in `<xsl:stylesheet>` oder `<xsl:transform>` und den Anweisungen für Templates verwendet werden.
    Sie behandelt auch kurz Literal-Result-Elemente (LREs), die nicht-instruktive Elemente wie `<hr>` direkt in die Ausgabe kopieren, sowie Attributvorlagen, die XPath-Ausdrücke nutzen, um Attributwerte festzulegen.

### Leitfäden

- [XML mit XSLT transformieren](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
  - : XSLT ermöglicht es einem Stylesheet-Autor, ein primäres XML-Dokument auf zwei wesentliche Arten zu transformieren: durch Manipulation und Sortierung des Inhalts, einschließlich einer kompletten Umordnung, falls gewünscht, sowie durch die Umwandlung des Inhalts in ein anderes Format.
- [Parameter mithilfe von Processing Instructions angeben](/de/docs/Web/XML/XSLT/Guides/PI_Parameters)
  - : Firefox ermöglicht es, Stylesheet-Parameter bei Verwendung der `<?xml-stylesheet?>` Processing Instruction anzugeben. Dies wird mithilfe der `<?xslt-param?>` PI umgesetzt, die in diesem Dokument beschrieben wird.
- [Häufige XSLT-Fehler](/de/docs/Web/XML/XSLT/Guides/Common_errors)
  - : Dieser Artikel listet einige häufige Probleme bei der Verwendung von XSLT in Firefox auf.

## Verwandte Themen

- [XML](/de/docs/Web/XML/Guides/XML_introduction)
- [XPath](/de/docs/Web/XML/XPath)

## Siehe auch

- [W3Schools XSLT Introduction](https://www.w3schools.com/xml/xsl_intro.asp)
  - : Dieses Tutorial lehrt den Leser, wie man XSLT verwendet, um XML-Dokumente in andere Formate wie XHTML umzuwandeln.
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/)
  - : Diese umfangreiche Einführung in XSLT und XPath setzt kein Vorwissen über die Technologien voraus und führt den Leser durch Hintergrund, Kontext, Struktur, Konzepte und grundlegende Terminologie.
