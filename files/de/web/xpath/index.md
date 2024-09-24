---
title: XPath
slug: Web/XPath
l10n:
  sourceCommit: 4cf65c9c822d91583db20f6f160571c7ac303dec
---

{{XsltSidebar}}

XPath steht für XML Path Language. Es verwendet eine nicht-XML-Syntax, um eine flexible Möglichkeit zur Adressierung (Zeigen auf) verschiedener Teile eines [XML](/de/docs/Web/XML/XML_introduction)-Dokuments bereitzustellen. Es kann auch verwendet werden, um adressierte Knoten innerhalb eines Dokuments zu testen, um festzustellen, ob sie einem Muster entsprechen oder nicht.

XPath wird hauptsächlich in [XSLT](/de/docs/Web/XSLT) verwendet, kann aber auch als eine viel leistungsfähigere Möglichkeit eingesetzt werden, um durch den [DOM](/de/docs/Web/API/Document_Object_Model) eines jeden XML-ähnlichen Sprachdokuments, wie zum Beispiel [HTML](/de/docs/Web/HTML) und [SVG](/de/docs/Web/SVG), zu navigieren. Dies geschieht mit {{DOMxRef("XPathExpression")}}, anstatt sich auf Methoden wie {{DOMxRef("Document.getElementById()")}} oder {{DOMxRef("Document.querySelectorAll()")}}, die {{DOMxRef("Node.childNodes")}}-Eigenschaften und andere DOM-Core-Features zu verlassen.

XPath verwendet eine Pfadnotation (wie bei URLs) zur Navigation durch die hierarchische Struktur eines XML-Dokuments. Es verwendet eine nicht-XML-Syntax, sodass es in URIs und XML-Attributwerten verwendet werden kann.

> [!NOTE]
> Die Unterstützung für XPath variiert stark; es wird in Firefox einigermaßen gut unterstützt (auch wenn es keine Pläne gibt, die Unterstützung weiter zu verbessern), während andere Browser es in geringerem Maße implementieren oder gar nicht. Wenn Sie ein Polyfill benötigen, können Sie [js-xpath](https://pilotfiber.dl.sourceforge.net/project/js-xpath/js-xpath/1.0.0/xpath.js) oder [wicked-good-xpath](https://github.com/google/wicked-good-xpath) in Betracht ziehen.

## Dokumentation

- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)
  - : Beschreibt eine nicht-XSLT-Verwendung von XPath.
- [XPath:Achsen](/de/docs/Web/XPath/Axes)
  - : Liste und Definition der in der XPath-Spezifikation definierten Achsen. Achsen werden verwendet, um die Beziehungen zwischen Knoten zu beschreiben.
- [XPath:Funktionen](/de/docs/Web/XPath/Functions)
  - : Liste und Beschreibung der Kern-XPath-Funktionen und XSLT-spezifischen Erweiterungen zu XPath.
- [Transformation von XML mit XSLT](/de/docs/Web/XSLT/Transforming_XML_with_XSLT)
  - : XSLT verwendet XPath, um Codeabschnitte in einem XML-Dokument zu adressieren, die es transformieren möchte.
- [XPath Snippets](/de/docs/Web/XPath/Snippets)
  - : Dies sind JavaScript-Dienstprogrammfunktionen, die in Ihrem eigenen Code verwendet werden können, basierend auf [DOM Level 3 XPath](https://www.w3.org/TR/DOM-Level-3-XPath/) APIs.
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/)
  - : Diese umfassende Einführung in XSLT und XPath setzt keine Vorkenntnisse der Technologien voraus und führt den Leser durch Hintergrund, Kontext, Struktur, Konzepte und einführende Terminologie.

## Werkzeuge

- [XPath Tester](https://extendsclass.com/xpath-tester.html)
  - : Ein Online-XPath-Builder/Debugger.

## Verwandte Themen

- [XSLT](/de/docs/Web/XSLT), [XML](/de/docs/Web/XML), [DOM](/de/docs/Web/API/Document_Object_Model)
- [Vergleich von CSS-Selektoren und XPath](/de/docs/Web/XPath/Comparison_with_CSS_selectors)
