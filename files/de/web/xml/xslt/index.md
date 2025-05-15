---
title: "XSLT: Extensible Stylesheet Language Transformations"
short-title: XSLT
slug: Web/XML/XSLT
l10n:
  sourceCommit: 049e8715d907f47677e85637b5f8292d5376a9f1
---

**Extensible Stylesheet Language Transformations (XSLT)** ist eine auf [XML](/de/docs/Web/XML/Guides/XML_introduction) basierende Sprache, die in Verbindung mit spezieller Verarbeitungssoftware zur Transformation von XML-Dokumenten verwendet wird.

Obwohl der Vorgang als "Transformation" bezeichnet wird, wird das Originaldokument nicht verändert; vielmehr wird ein neues XML-Dokument erstellt, das auf dem Inhalt eines bestehenden Dokuments basiert. Dieses neue Dokument kann dann vom Prozessor in der standardmäßigen XML-Syntax oder in einem anderen Format, wie [HTML](/de/docs/Web/HTML) oder reinem Text, ausgegeben werden.

XSLT wird am häufigsten verwendet, um Daten zwischen verschiedenen XML-Schemata zu konvertieren oder um XML-Daten in Webseiten oder PDF-Dokumente umzuwandeln.

## Referenz

- [XSLT-Elemente Referenz](/de/docs/Web/XML/XSLT/Reference/Element)
  - : Diese Seite beschreibt XSLT-Elemente und konzentriert sich auf Top-Level-Elemente, die in `<xsl:stylesheet>` oder `<xsl:transform>` und Anweisungen für Templates verwendet werden.
    Sie behandelt auch kurz literale Ergebniselemente (LREs), die nicht-Anweisungselemente wie `<hr>` direkt in die Ausgabe kopieren, sowie Attributwert-Templates, die XPath-Ausdrücke zur Festlegung von Attributwerten verwenden.

## Leitfäden

Die [XSLT-Leitfäden](/de/docs/Web/XML/XSLT/Guides) beschreiben, wie XML transformiert wird, wie PI-Parameter verwendet werden und häufige XSLT-Fehler.

- [XML mit XSLT transformieren](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
  - : Mit XSLT kann ein Stylesheet-Autor ein primäres XML-Dokument auf zwei wesentliche Arten transformieren: Indem der Inhalt manipuliert und sortiert wird, einschließlich einer vollständigen Umordnung, wenn gewünscht, und indem der Inhalt in ein anderes Format transformiert wird.
- [Parameter mit Anweisungen spezifizieren](/de/docs/Web/XML/XSLT/Guides/PI_Parameters)
  - : Firefox erlaubt es, Stylesheet-Parameter mit der Verarbeitung von `<?xml-stylesheet?>`-Anweisungen zu spezifizieren. Dies wird mit der `<?xslt-param?>` PI beschrieben, wie in diesem Dokument erläutert.
- [Häufige XSLT-Fehler](/de/docs/Web/XML/XSLT/Guides/Common_errors)
  - : Dieser Artikel listet einige häufige Probleme bei der Verwendung von XSLT in Firefox auf.

## Siehe auch

- [XML](/de/docs/Web/XML)
- [XPath](/de/docs/Web/XML/XPath)
- [Einführung in XSLT](https://www.w3schools.com/xml/xsl_intro.asp) Anleitung zur Nutzung von XSLT, um XML-Dokumente in andere Formate wie XHTML auf w3schools.com zu transformieren
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/) Einführung in XSLT und XPath, vorausgesetzt, es gibt keine Vorkenntnisse zu den Technologien
