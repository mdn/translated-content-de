---
title: "XSLT: Extensible Stylesheet Language Transformations"
short-title: XSLT
slug: Web/XSLT
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

**Extensible Stylesheet Language Transformations (XSLT)** ist eine auf [XML](/de/docs/Web/XML/XML_introduction) basierende Sprache, die in Verbindung mit spezieller Verarbeitungssoftware zur Transformation von XML-Dokumenten verwendet wird.

Obwohl der Prozess als "Transformation" bezeichnet wird, wird das ursprüngliche Dokument nicht verändert; stattdessen wird basierend auf dem Inhalt eines vorhandenen Dokuments ein neues XML-Dokument erstellt. Dieses neue Dokument kann dann vom Prozessor in standardmäßiger XML-Syntax oder in einem anderen Format, wie [HTML](/de/docs/Web/HTML) oder einfachem Text, serialisiert (ausgegeben) werden.

XSLT wird am häufigsten verwendet, um Daten zwischen verschiedenen XML-Schemata zu konvertieren oder um XML-Daten in Webseiten oder PDF-Dokumente zu verwandeln.

## Dokumentation

### Referenz

- [XSLT-Elementreferenz](/de/docs/Web/XSLT/Reference/Element)
  - : Diese Seite beschreibt XSLT-Elemente, mit Schwerpunkt auf den obersten Elementen, die in `<xsl:stylesheet>` oder `<xsl:transform>` und Anweisungen für Templates verwendet werden.
    Sie behandelt auch kurz literale Ergebniselemente (LREs), die nicht-Anweisungselemente wie `<hr>` direkt in die Ausgabe kopieren, und Attributwertvorlagen, die XPath-Ausdrücke verwenden, um Attributwerte festzulegen.

### Leitfäden

- [XML mithilfe von XSLT transformieren](/de/docs/Web/XSLT/Guides/Transforming_XML_with_XSLT)
  - : XSLT ermöglicht es einem Stylesheet-Autor, ein primäres XML-Dokument auf zwei bedeutende Arten zu transformieren: Manipulation und Sortierung des Inhalts, einschließlich einer vollständigen Umordnung, falls gewünscht, sowie die Transformation des Inhalts in ein anderes Format.
- [Spezifizierung von Parametern mithilfe von Verarbeitungshinweisen](/de/docs/Web/XSLT/Guides/PI_Parameters)
  - : Firefox erlaubt die Spezifizierung von Stylesheet-Parametern bei der Verwendung der `<?xml-stylesheet?>`-Verarbeitungshinweise. Dies erfolgt mit der in diesem Dokument beschriebenen `<?xslt-param?>` PI.
- [Häufige XSLT-Fehler](/de/docs/Web/XSLT/Guides/Common_errors)
  - : Dieser Artikel listet einige häufige Probleme bei der Verwendung von XSLT in Firefox auf.

## Verwandte Themen

- [XML](/de/docs/Web/XML/XML_introduction)
- [XPath](/de/docs/Web/XPath)

## Siehe auch

- [W3Schools XSLT Einführung](https://www.w3schools.com/xml/xsl_intro.asp)
  - : Dieses Tutorial lehrt den Leser, wie man XSLT verwendet, um XML-Dokumente in andere Formate wie XHTML zu transformieren.
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/)
  - : Diese umfassende Einführung in XSLT und XPath setzt kein Vorwissen über die Technologien voraus und führt den Leser durch Hintergrund, Kontext, Struktur, Konzepte und einleitende Terminologie.
