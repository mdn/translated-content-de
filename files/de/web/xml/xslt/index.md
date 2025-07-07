---
title: "XSLT: Extensible Stylesheet Language Transformations"
short-title: XSLT
slug: Web/XML/XSLT
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

**Extensible Stylesheet Language Transformations (XSLT)** ist eine auf [XML](/de/docs/Web/XML/Guides/XML_introduction) basierende Sprache, die in Verbindung mit spezialisierter Verarbeitungssoftware zur Transformation von XML-Dokumenten verwendet wird.

Obwohl der Prozess als "Transformation" bezeichnet wird, wird das ursprüngliche Dokument nicht verändert; stattdessen wird ein neues XML-Dokument basierend auf dem Inhalt eines vorhandenen Dokuments erstellt. Dieses neue Dokument kann dann vom Prozessor in der standardmäßigen XML-Syntax oder in einem anderen Format, wie [HTML](/de/docs/Web/HTML) oder einfachem Text, serialisiert (ausgegeben) werden.

XSLT wird am häufigsten verwendet, um Daten zwischen verschiedenen XML-Schemata zu konvertieren oder XML-Daten in Webseiten oder PDF-Dokumente umzuwandeln.

## Referenz

Die [XSLT-Referenz](/de/docs/Web/XML/XSLT/Reference) bietet detaillierte Informationen über XSLT, einschließlich der verfügbaren Elemente.

- [XSLT-Elemente-Referenz](/de/docs/Web/XML/XSLT/Reference/Element)
  - : Diese Seite beschreibt XSLT-Elemente, mit Fokus auf die obersten Elemente, die in `<xsl:stylesheet>` oder `<xsl:transform>` verwendet werden, und Anweisungen für Templates.
    Sie behandelt auch kurz die Literal Result Elements (LREs), die nicht-Anweisungselemente wie `<hr>` direkt in die Ausgabe kopieren, und Attributwertvorlagen, die XPath-Ausdrücke verwenden, um Attributwerte festzulegen.

## Leitfäden

Die [XSLT-Leitfäden](/de/docs/Web/XML/XSLT/Guides) beschreiben, wie XML transformiert, PI-Parameter verwendet und häufige XSLT-Fehler behoben werden.

- [Transformieren von XML mit XSLT](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
  - : XSLT ermöglicht es einem Autor von Stylesheets, ein primäres XML-Dokument auf zwei wesentliche Arten zu transformieren: die Manipulation und Sortierung des Inhalts, einschließlich einer umfassenden Neuordnung, wenn gewünscht, und die Umwandlung des Inhalts in ein anderes Format.
- [Speichern von Parametern mit Verarbeitungshinweisen](/de/docs/Web/XML/XSLT/Guides/PI_Parameters)
  - : Firefox erlaubt das Speichern von Stylesheet-Parametern, wenn die Verarbeitungsanweisung `<?xml-stylesheet?>` verwendet wird. Dies geschieht mittels der in diesem Dokument beschriebenen `<?xslt-param?>` PI.
- [Häufige XSLT-Fehler](/de/docs/Web/XML/XSLT/Guides/Common_errors)
  - : Dieser Artikel listet einige häufige Probleme bei der Verwendung von XSLT in Firefox auf.

## Siehe auch

- [XML](/de/docs/Web/XML)
- [XPath](/de/docs/Web/XML/XPath)
- [XSLT Einführung](https://www.w3schools.com/xml/xsl_intro.asp) Anleitung zur Verwendung von XSLT zur Transformation von XML-Dokumenten in andere Formate, wie XHTML, auf w3schools.com
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/) Einführung in XSLT und XPath, ohne vorherige Kenntnisse der Technologien vorauszusetzen
