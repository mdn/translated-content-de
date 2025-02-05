---
title: XPath
slug: Web/XML/XPath
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

XPath steht für XML Path Language. Es verwendet eine Nicht-XML-Syntax, um eine flexible Möglichkeit bereitzustellen, auf verschiedene Teile eines [XML](/de/docs/Web/XML/Guides/XML_introduction)-Dokuments zu verweisen. Es kann auch verwendet werden, um adressierte Knoten innerhalb eines Dokuments zu testen, um festzustellen, ob sie einem Muster entsprechen oder nicht.

XPath wird hauptsächlich in [XSLT](/de/docs/Web/XML/XSLT) verwendet, kann jedoch auch als weitaus leistungsfähigere Methode zum Navigieren durch das [DOM](/de/docs/Web/API/Document_Object_Model) eines jeden XML-ähnlichen Sprachdokuments genutzt werden, indem [`XPathExpression`](/de/docs/Web/API/XPathExpression) verwendet wird, beispielsweise bei [HTML](/de/docs/Web/HTML) und [SVG](/de/docs/Web/SVG), anstatt sich auf die Methoden [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) oder [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), die Eigenschaften [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) und andere DOM-Core-Funktionen zu verlassen.

XPath verwendet eine Pfadnotation (ähnlich wie in URLs), um durch die hierarchische Struktur eines XML-Dokuments zu navigieren. Es benutzt eine Nicht-XML-Syntax, um in URIs und XML-Attributwerten verwendet werden zu können.

## Leitfäden

- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
  - : Beschreibt eine Nicht-XSLT-Verwendung von XPath.
- [XPath-Snippets](/de/docs/Web/XML/XPath/Guides/Snippets)
  - : Dies sind JavaScript-Hilfsfunktionen, die in Ihrem eigenen Code verwendet werden können, basierend auf den [DOM Level 3 XPath](https://www.w3.org/TR/DOM-Level-3-XPath/)-APIs.

## Referenz

- [XPath:Axes](/de/docs/Web/XML/XPath/Reference/Axes)
  - : Liste und Definition der in der XPath-Spezifikation definierten Axen. Axen werden verwendet, um die Beziehungen zwischen Knoten zu beschreiben.
- [XPath:Functions](/de/docs/Web/XML/XPath/Reference/Functions)
  - : Liste und Beschreibung der Kern-XPath-Funktionen sowie der XSLT-spezifischen Erweiterungen für XPath.

## Siehe auch

- [XSLT](/de/docs/Web/XML/XSLT), [XML](/de/docs/Web/XML), [DOM](/de/docs/Web/API/Document_Object_Model)
- [Transformieren von XML mit XSLT](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
- [Vergleich von CSS-Selektoren und XPath](/de/docs/Web/XML/XPath/Guides/Comparison_with_CSS_selectors)
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/) führt in XSLT und XPath ein, einschließlich Hintergrund, Kontext, Struktur, Konzepte und Terminologie - xml.com (2000)
- [XPath-Tester](https://extendsclass.com/xpath-tester.html) Online-XPath-Builder/Debugger
